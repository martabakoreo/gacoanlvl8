import React, { useState } from 'react';
import {
  Layers,
  ExternalLink,
  Camera,
} from 'lucide-react';

interface PhotoVisualLabProps {
  onSelectTopic?: (topicId: string) => void;
}

interface LabScene {
  id: string;
  title: string;
  englishTitle: string;
  category: string;
  topicId: string;
  image: string;
  caption: string;
  source: string;
  layers: { id: string; label: string; description: string; color: string }[];
  facts: string[];
}

const SCENES: LabScene[] = [
  {
    id: 'earth-interior',
    title: 'Struktur Lapisan Bumi',
    englishTitle: "Earth's Interior — Cutaway of Crust, Mantle & Core",
    category: 'Geologi Fisis',
    topicId: 'struktur-lapisan-bumi',
    image: '/images/national-geographic/fbd5a369-1f98-49bf-be65-f95fcd7c561a.jpg',
    caption:
      'First view of Earth from near the Moon — Lunar Orbiter I, 1966. Real planetary imagery grounds the study of internal structure.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'crust',
        label: 'Kerak Bumi (0–70 km)',
        description: 'SiAl & SiMa — rigid tectonic plates',
        color: '#245C45',
      },
      {
        id: 'mantle',
        label: 'Mantel & Astenosfer (70–2.890 km)',
        description: 'Peridotite, convection drives plate motion',
        color: '#C76D4B',
      },
      {
        id: 'outer-core',
        label: 'Inti Luar (2.890–5.150 km)',
        description: 'Liquid Fe-Ni — generates geomagnetic field',
        color: '#EA580C',
      },
      {
        id: 'inner-core',
        label: 'Inti Dalam (5.150–6.371 km)',
        description: 'Solid Fe-Ni crystal under extreme pressure',
        color: '#E5B94B',
      },
    ],
    facts: [
      'Kola Superdeep Borehole reached only ~12.2 km — less than 0.2% of Earth’s radius.',
      'Seismic P-waves and S-waves reveal internal discontinuities (Moho, Gutenberg, Lehmann).',
      'Outer core convection powers the geodynamo that shields Earth from solar wind.',
    ],
  },
  {
    id: 'volcanism',
    title: 'Vulkanisme & Anatomi Gunung Api',
    englishTitle: 'Volcanism — Stratovolcano, Magma & Eruption Columns',
    category: 'Vulkanologi',
    topicId: 'vulkanisme',
    image: '/images/national-geographic/2d571979-3983-4475-9b63-0e504477d159.jpg',
    caption:
      'Active lava on Hawaii’s Big Island — real-time surface expression of magma from the astenosphere.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'chamber',
        label: 'Dapur Magma',
        description: 'Magma reservoir beneath the edifice',
        color: '#DC2626',
      },
      {
        id: 'conduit',
        label: 'Pipa Kepundungan',
        description: 'Central conduit feeding the crater',
        color: '#F97316',
      },
      {
        id: 'cone',
        label: 'Kerucut Strato',
        description: 'Layered lava + pyroclastic deposits',
        color: '#4B5563',
      },
      {
        id: 'plume',
        label: 'Kolom Erupsi',
        description: 'Ash, gas, and pyroclastic density currents',
        color: '#1F2937',
      },
    ],
    facts: [
      'Indonesia sits on the Pacific Ring of Fire — home to ~130 active volcanoes.',
      'VEI (Volcanic Explosivity Index) ranks eruptions from Hawaiian (0) to ultraplinian (8).',
      'Andesitic magma at subduction zones is viscous and often explosive.',
    ],
  },
  {
    id: 'seismic',
    title: 'Seisme & Gelombang Gempa',
    englishTitle: 'Earthquakes — Surface Rupture & Seismic Waves',
    category: 'Seismologi',
    topicId: 'seisme-gempa-bumi',
    image: '/images/national-geographic/eff85bd5-bbcc-4fc7-8880-b6a89dba3e2a.jpg',
    caption:
      'Collapsed infrastructure after a magnitude 6.8 quake — the human face of plate-boundary energy release.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'focus',
        label: 'Hiposentrum',
        description: 'Point of rupture at depth',
        color: '#EAB308',
      },
      {
        id: 'epicenter',
        label: 'Episentrum',
        description: 'Surface point above the focus',
        color: '#EF4444',
      },
      {
        id: 'p-wave',
        label: 'Gelombang P',
        description: 'Compressional — fastest, through solids & liquids',
        color: '#3B82F6',
      },
      {
        id: 's-wave',
        label: 'Gelombang S',
        description: 'Shear — slower, solids only',
        color: '#8B5CF6',
      },
    ],
    facts: [
      'Laska formula estimates distance: Δ ≈ (S−P − 1) × 1000 km (minutes).',
      'Megathrust events at subduction zones can exceed Mw 9.0 (e.g. 2004 Sumatra).',
      'Indonesia’s Semangko Fault is a major transform system parallel to Sumatra.',
    ],
  },
  {
    id: 'hydrology',
    title: 'Siklus Hidrologi',
    englishTitle: 'Hydrological Cycle — Evaporation, Precipitation & Runoff',
    category: 'Hidrosfer',
    topicId: 'siklus-hidrologi',
    image: '/images/national-geographic/86390c14-0446-49be-8126-7f48e43b58a5.jpg',
    caption:
      'Dawn light on the Zambezi River — water in motion across the continental surface.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'evap',
        label: 'Evaporasi & Transpirasi',
        description: 'Solar-driven water vapor to atmosphere',
        color: '#38BDF8',
      },
      {
        id: 'cond',
        label: 'Kondensasi',
        description: 'Cloud formation and latent heat release',
        color: '#94A3B8',
      },
      {
        id: 'precip',
        label: 'Presipitasi',
        description: 'Rain, snow, hail returning to surface',
        color: '#0EA5E9',
      },
      {
        id: 'runoff',
        label: 'Limpasan & Infiltrasi',
        description: 'Surface runoff, rivers, groundwater recharge',
        color: '#0369A1',
      },
    ],
    facts: [
      'Short cycle: ocean → atmosphere → ocean. Long cycle includes continental storage.',
      'Watershed (DAS) boundaries control regional water balance and flood risk.',
      'Climate change intensifies both drought and extreme precipitation events.',
    ],
  },
  {
    id: 'climate',
    title: 'Klasifikasi Iklim',
    englishTitle: 'Climate Zones — Köppen, Schmidt-Ferguson & Junghuhn',
    category: 'Klimatologi',
    topicId: 'klasifikasi-iklim',
    image: '/images/national-geographic/c6cc1201-a7fc-4d83-9cf5-84f297b16b50.jpg',
    caption:
      'Forest–agriculture edge in the Congo Basin — climate, vegetation, and human land use intertwined.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'koppen',
        label: 'Köppen (Af, Am, Aw…)',
        description: 'Global system based on temp & precipitation',
        color: '#245C45',
      },
      {
        id: 'schmidt',
        label: 'Schmidt–Ferguson',
        description: 'Q = dry months / wet months — Indonesia standard',
        color: '#E5B94B',
      },
      {
        id: 'junghuhn',
        label: 'Junghuhn Zones',
        description: 'Elevation belts: panas → sedang → sejuk → dingin',
        color: '#1F6FA8',
      },
      {
        id: 'oldeman',
        label: 'Oldeman',
        description: 'Agroclimate for rice and food crops',
        color: '#C76D4B',
      },
    ],
    facts: [
      'Junghuhn: T ≈ 26.3 − 0.6 × (h / 100) °C in tropical highlands.',
      'Af = tropical rainforest; Am = monsoon; Aw = savanna with dry season.',
      'Altitude often matters more than latitude for Indonesian agriculture.',
    ],
  },
  {
    id: 'wallace',
    title: 'Garis Wallace, Weber & Lydekker',
    englishTitle: 'Biogeographic Lines — Asian, Transition & Australian Fauna',
    category: 'Biogeografi',
    topicId: 'garis-wallace-weber-dan-lydekker',
    image: '/images/national-geographic/82df81a4-c04b-4c9b-9ba7-5ab87bea2f20.jpg',
    caption:
      'Orangutan research in Borneo — Wallace’s line still shapes where Asian fauna ends and the transition zone begins.',
    source: 'https://www.nationalgeographic.com',
    layers: [
      {
        id: 'wallace',
        label: 'Garis Wallace',
        description: 'Makassar & Lombok straits — Asia vs. transition',
        color: '#245C45',
      },
      {
        id: 'weber',
        label: 'Garis Weber',
        description: '50:50 faunal balance line through Maluku',
        color: '#E5B94B',
      },
      {
        id: 'lydekker',
        label: 'Garis Lydekker',
        description: 'Western edge of Australian fauna (Sahul shelf)',
        color: '#1F6FA8',
      },
      {
        id: 'wallacea',
        label: 'Wallacea',
        description: 'Transition zone of mixed lineages',
        color: '#C76D4B',
      },
    ],
    facts: [
      'Alfred Russel Wallace mapped the discontinuity in 1859 while collecting in the archipelago.',
      'Deep water of the Makassar Strait blocked land bridges during glacial lowstands.',
      'Wallacea is a global biodiversity hotspot with high endemism.',
    ],
  },
];

export const PhotoVisualLab: React.FC<PhotoVisualLabProps> = ({ onSelectTopic }) => {
  const [active, setActive] = useState(0);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const scene = SCENES[active];

  return (
    <div className="space-y-6">
      {/* Scene selector pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setActive(i);
              setActiveLayer(null);
            }}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              active === i
                ? 'bg-[#102A43] text-[#E5B94B] shadow-md'
                : 'bg-white border border-[#D9E2EC] text-[#486581] hover:bg-[#F0F4F8]'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Immersive photo stage */}
      <div className="relative rounded-2xl overflow-hidden border border-[#D9E2EC] shadow-lg bg-[#0B1C2C]">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          <img
            src={scene.image}
            alt={scene.englishTitle}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C] via-[#0B1C2C]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#E5B94B]">
              <Camera className="w-3.5 h-3.5" />
              <span>{scene.category}</span>
              <span className="opacity-50">·</span>
              <span className="text-white/70">National Geographic photography</span>
            </div>
            <h2 className="font-editorial text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
              {scene.title}
            </h2>
            <p className="text-sm text-white/80 max-w-xl">{scene.englishTitle}</p>
            <p className="text-xs text-white/60 max-w-2xl leading-relaxed hidden sm:block">
              {scene.caption}
            </p>
          </div>

          {onSelectTopic && (
            <button
              onClick={() => onSelectTopic(scene.topicId)}
              className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 hover:bg-black/70 text-white text-xs backdrop-blur-sm transition-colors"
            >
              Baca materi <ExternalLink className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Interactive layers */}
        <div className="p-5 md:p-6 bg-[#0B1C2C] border-t border-white/10">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#829AB1] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Layer interaktif — klik untuk fokus</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {scene.layers.map((layer) => {
              const isOn = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(isOn ? null : layer.id)}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    isOn
                      ? 'bg-white/10 border-[#E5B94B] shadow-inner'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className="text-xs font-semibold text-white truncate">
                      {layer.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-snug">
                    {layer.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-2 md:grid-cols-3">
            {scene.facts.map((fact, i) => (
              <div
                key={i}
                className="flex gap-2 text-[11px] text-white/70 leading-relaxed p-3 rounded-lg bg-white/5 border border-white/5"
              >
                <span className="font-mono text-[#E5B94B] shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail grid of all 6 scenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              setActive(i);
              setActiveLayer(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`group text-left rounded-xl overflow-hidden border transition-all ${
              active === i
                ? 'border-[#245C45] ring-2 ring-[#245C45]/30'
                : 'border-[#D9E2EC] hover:border-[#245C45]/50'
            }`}
          >
            <div className="aspect-[16/10] relative overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-3 right-3">
                <div className="text-[10px] font-mono text-[#E5B94B] uppercase">
                  {s.category}
                </div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
