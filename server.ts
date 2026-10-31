import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI client (Server-side only)
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// 1. Google Search Grounding API endpoint
app.post('/api/grounding/search', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    if (!apiKey) {
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY is not configured on server',
        fallback: true
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `You are a professional geography research engine. Provide an accurate, up-to-date, scientifically rigorous summary grounded in real-world search data for the following geographical inquiry: ${query}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || '';
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const searchQueries = response.candidates?.[0]?.groundingMetadata?.webSearchQueries || [];

    res.json({
      text,
      groundingChunks,
      searchQueries,
    });
  } catch (error: any) {
    console.error('Error in Search Grounding:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to execute search grounding',
      details: String(error)
    });
  }
});

// 2. Google Maps Grounding API endpoint
app.post('/api/grounding/maps', async (req, res) => {
  try {
    const { query, latLng } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    if (!apiKey) {
      return res.status(500).json({ 
        error: 'GEMINI_API_KEY is not configured on server',
        fallback: true
      });
    }

    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (latLng && typeof latLng.latitude === 'number' && typeof latLng.longitude === 'number') {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: latLng.latitude,
            longitude: latLng.longitude,
          },
        },
      };
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Provide an accurate, detailed geographical and locational report using Google Maps grounding for: ${query}. Include coordinates, topography, features, and key landmarks.`,
      config,
    });

    const text = response.text || '';
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    res.json({
      text,
      groundingChunks,
    });
  } catch (error: any) {
    console.error('Error in Maps Grounding:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to execute maps grounding',
      details: String(error)
    });
  }
});

// Vite middleware for development, or static files for production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server listening on port ${port} (${isProd ? 'production' : 'development'})`);
  });
}

startServer();
