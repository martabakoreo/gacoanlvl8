import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  ExternalLink, 
  Globe, 
  X, 
  Loader2, 
  AlertCircle,
  Compass
} from 'lucide-react';

interface GeographicIntelligenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicTitle?: string;
  initialQuery?: string;
}

export const GeographicIntelligenceModal: React.FC<GeographicIntelligenceModalProps> = ({
  isOpen,
  onClose,
  initialTopicTitle,
  initialQuery
}) => {
  const [activeTab, setActiveTab] = useState<'search' | 'maps'>('search');
  const [query, setQuery] = useState(initialQuery || (initialTopicTitle ? `Latest scientific updates and field data for: ${initialTopicTitle}` : ''));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [resultText, setResultText] = useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = useState<any[]>([]);

  if (!isOpen) return null;

  const handleExecuteGrounding = async (mode: 'search' | 'maps') => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResultText(null);
    setGroundingChunks([]);

    try {
      const endpoint = mode === 'search' ? '/api/grounding/search' : '/api/grounding/maps';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to retrieve grounded geographic data');
      }

      setResultText(data.text);
      setGroundingChunks(data.groundingChunks || []);
    } catch (err: any) {
      setError(err.message || 'Failed to connect to Grounding API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-3xl bg-[#FAFAF7] rounded-3xl shadow-2xl border border-[#D9E2EC] overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102A43] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#245C45] flex items-center justify-center text-[#E5B94B]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-instrument text-2xl font-bold tracking-tight text-white">
                  Live Geographic Intelligence
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1F3A56] text-[#E5B94B] border border-[#2D4D6F]">
                  gemini-3.8-flash
                </span>
              </div>
              <p className="text-xs text-[#9FB3C8] font-inter">
                Google Search & Google Maps real-time scientific grounding
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher & Query Input */}
        <div className="p-6 bg-white border-b border-[#EAEAEA] space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('search');
                if (resultText) handleExecuteGrounding('search');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-inter font-medium transition-all ${
                activeTab === 'search'
                  ? 'bg-[#102A43] text-white shadow-xs'
                  : 'bg-[#F4F4F4] text-[#6F6F6F] hover:bg-[#EAEAEA]'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-[#E5B94B]" />
              <span>Google Search Grounding (Web & Alerts)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('maps');
                if (resultText) handleExecuteGrounding('maps');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-inter font-medium transition-all ${
                activeTab === 'maps'
                  ? 'bg-[#102A43] text-white shadow-xs'
                  : 'bg-[#F4F4F4] text-[#6F6F6F] hover:bg-[#EAEAEA]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Google Maps Grounding (Places & Coordinates)</span>
            </button>
          </div>

          {/* Search bar with submit button */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleExecuteGrounding(activeTab);
                }}
                placeholder={
                  activeTab === 'search'
                    ? 'Ask recent volcanic activity, latest seismic events, or climate studies...'
                    : 'Search physical geography places, volcanic calderas, national parks, geoparks...'
                }
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#D9E2EC] rounded-2xl text-xs sm:text-sm text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:border-[#245C45]"
              />
            </div>
            <button
              onClick={() => handleExecuteGrounding(activeTab)}
              disabled={loading || !query.trim()}
              className="px-5 py-3 bg-[#000000] hover:bg-[#222222] disabled:opacity-50 text-white rounded-2xl text-xs sm:text-sm font-inter font-medium flex items-center gap-2 transition-all shrink-0"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-[#E5B94B]" />}
              <span>Inspect</span>
            </button>
          </div>
        </div>

        {/* Results Container */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {loading && (
            <div className="py-16 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-[#245C45] animate-spin mx-auto" />
              <p className="text-sm font-inter text-[#486581]">
                Querying {activeTab === 'search' ? 'Google Search' : 'Google Maps'} with Gemini 3.8 Flash...
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-2xl bg-[#C76D4B]/10 border border-[#C76D4B]/30 text-[#803E26] flex items-start gap-3 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong>Grounding Notice: </strong>
                <span>{error}</span>
              </div>
            </div>
          )}

          {resultText && (
            <div className="space-y-6">
              {/* Answer Markdown/Text */}
              <div className="bg-white p-6 rounded-2xl border border-[#D9E2EC] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#245C45] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Grounded Synthesis</span>
                </div>
                <div className="text-xs sm:text-sm text-[#102A43] leading-relaxed whitespace-pre-line font-inter">
                  {resultText}
                </div>
              </div>

              {/* Verified Sources / Google Maps & Search URLs (Mandatory per grounding directives) */}
              {groundingChunks && groundingChunks.length > 0 && (
                <div className="bg-[#FAFAF7] p-5 rounded-2xl border border-[#D9E2EC] space-y-3">
                  <h4 className="font-instrument text-lg font-bold text-[#102A43] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#245C45]" />
                    <span>Grounded Sources & Citations</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {groundingChunks.map((chunk: any, cIdx: number) => {
                      const web = chunk.web;
                      const maps = chunk.maps;

                      if (web && web.uri) {
                        return (
                          <a
                            key={cIdx}
                            href={web.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#245C45] transition-all flex items-start justify-between gap-2 group"
                          >
                            <div className="truncate">
                              <div className="text-xs font-inter font-semibold text-[#102A43] group-hover:text-[#245C45] truncate">
                                {web.title || 'Web Reference'}
                              </div>
                              <div className="text-[11px] font-mono text-[#829AB1] truncate">
                                {web.uri}
                              </div>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-[#829AB1] group-hover:text-[#245C45] shrink-0 mt-0.5" />
                          </a>
                        );
                      }

                      if (maps && maps.uri) {
                        return (
                          <a
                            key={cIdx}
                            href={maps.uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0284C7] transition-all flex items-start justify-between gap-2 group"
                          >
                            <div className="truncate">
                              <div className="text-xs font-inter font-semibold text-[#0284C7] truncate">
                                📍 {maps.title || 'Google Maps Location'}
                              </div>
                              <div className="text-[11px] font-mono text-[#829AB1] truncate">
                                View Place on Google Maps
                              </div>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          </a>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {!loading && !resultText && !error && (
            <div className="py-12 text-center text-[#829AB1] space-y-2">
              <Compass className="w-8 h-8 mx-auto text-[#245C45]/50" />
              <p className="text-sm font-inter text-[#486581]">
                Enter an inquiry above to query real-time Google Search scientific research or exact Google Maps coordinates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
