import React, { useState } from 'react';
import {
  FlaskConical,
  Layers,
  Flame,
  CloudRain,
  Wind,
  Activity,
  Users,
  Building2,
  Compass,
  Moon,
  ExternalLink,
  ChevronRight,
  Camera,
  Box,
} from 'lucide-react';

import { ThreeGeoLaboratory } from './ThreeGeoLaboratory';
import { PhotoVisualLab } from './PhotoVisualLab';

interface VisualLabViewProps {
  onSelectTopic: (topicId: string) => void;
}

export const VisualLabView: React.FC<VisualLabViewProps> = ({ onSelectTopic }) => {
  // Default to realistic photo lab — not abstract 3D spheres
  const [labMode, setLabMode] = useState<'photo' | '3d' | '2d'>('photo');
  const [activeLab, setActiveLab] = useState<number>(0);

  const [depthKm, setDepthKm] = useState<number>(100);
  const [boundaryType, setBoundaryType] = useState<'convergent' | 'divergent' | 'transform'>('convergent');
  const [altitudeMeters, setAltitudeMeters] = useState<number>(1200);
  const [spPadang, setSpPadang] = useState<number>(2.5);
  const [spBandung, setSpBandung] = useState<number>(3.2);
  const [spDenpasar, setSpDenpasar] = useState<number>(4.0);

  const labsList = [
    { id: 0, title: '1. Struktur Lapisan Bumi', icon: Layers, topicId: 'struktur-lapisan-bumi' },
    { id: 1, title: '2. Batas Lempeng Tektonik', icon: Activity, topicId: 'lempeng-tektonik' },
    { id: 2, title: '3. Anatomi Gunung Api & Erupsi', icon: Flame, topicId: 'vulkanisme' },
    { id: 3, title: '4. Siklus Hidrologi & Neraca Air', icon: CloudRain, topicId: 'siklus-hidrologi' },
    { id: 4, title: '5. Gradien Termal Junghuhn', icon: Wind, topicId: 'lapisan-atmosfer-dan-karakteristiknya' },
    { id: 5, title: '6. Angin Muson & Efek Coriolis', icon: Wind, topicId: 'pola-angin-global-dan-lokal' },
    { id: 6, title: '7. Triangulasi Episentrum Laska', icon: Activity, topicId: 'seisme-gempa-bumi' },
    { id: 7, title: '8. Siklus Batuan Litosfer', icon: Layers, topicId: 'batuan-pembentuk-kulit-bumi' },
    { id: 8, title: '9. Simulator Piramida Penduduk', icon: Users, topicId: 'struktur-dan-komposisi-penduduk' },
    { id: 9, title: '10. Model Struktur Ruang Kota', icon: Building2, topicId: 'teori-struktur-kota-burgess-hoyt-harris' },
    { id: 10, title: '11. Perbandingan Proyeksi Peta', icon: Compass, topicId: 'skala-dan-proyeksi-peta' },
    { id: 11, title: '12. Pasang Surut & Orbit Bulan', icon: Moon, topicId: 'arus-laut-gelombang-dan-pasang-surut' },
  ];

  const calculatedTemp = (26.3 - 0.6 * (altitudeMeters / 100)).toFixed(1);
  const getJunghuhnZone = (h: number) => {
    if (h < 600) return { name: 'Zona Panas (0 - 600 mdpl)', flora: 'Padi, Jagung, Tebu, Kelapa, Karet', color: '#C76D4B' };
    if (h < 1500) return { name: 'Zona Sedang (600 - 1.500 mdpl)', flora: 'Kopi, Teh, Kina, Karet, Cokelat', color: '#E5B94B' };
    if (h < 2500) return { name: 'Zona Sejuk (1.500 - 2.500 mdpl)', flora: 'Sayuran, Kentang, Bunga, Hutan Pinus', color: '#245C45' };
    return { name: 'Zona Dingin (> 2.500 mdpl)', flora: 'Lumut (Tundra alpin), Semak kerdil', color: '#1F6FA8' };
  };
  const junghuhnZone = getJunghuhnZone(altitudeMeters);

  const calcLaska = (minutes: number) => Math.max(0, Math.round((minutes - 1) * 1000));
  const distPadang = calcLaska(spPadang);
  const distBandung = calcLaska(spBandung);
  const distDenpasar = calcLaska(spDenpasar);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#D9E2EC]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold mb-1">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Interactive Scientific Simulation Suite</span>
          </div>
          <h1 className="font-editorial text-3xl font-bold text-[#102A43]">
            Visual Geography Laboratory
          </h1>
          <p className="text-xs text-[#486581] mt-0.5">
            Realistic National Geographic photography · analytical simulators · optional 3D models
          </p>
        </div>

        {labMode === '2d' && labsList[activeLab]?.topicId && (
          <button
            onClick={() => onSelectTopic(labsList[activeLab].topicId)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#245C45] hover:bg-[#1D4A37] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
          >
            <span>Baca Materi Teori Terkait</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Mode switcher — Photo first */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setLabMode('photo')}
          className={`px-5 py-2.5 rounded-full text-xs font-inter font-medium flex items-center gap-2 transition-all ${
            labMode === 'photo'
              ? 'bg-[#102A43] text-[#E5B94B] shadow-md'
              : 'bg-white border border-[#D9E2EC] text-[#6F6F6F] hover:text-[#000000]'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Photo Lab — Real Geography</span>
        </button>

        <button
          onClick={() => setLabMode('2d')}
          className={`px-5 py-2.5 rounded-full text-xs font-inter font-medium flex items-center gap-2 transition-all ${
            labMode === '2d'
              ? 'bg-[#102A43] text-white shadow-md'
              : 'bg-white border border-[#D9E2EC] text-[#6F6F6F] hover:text-[#000000]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#245C45]" />
          <span>2D Analytical Simulators (12)</span>
        </button>

        <button
          onClick={() => setLabMode('3d')}
          className={`px-5 py-2.5 rounded-full text-xs font-inter font-medium flex items-center gap-2 transition-all ${
            labMode === '3d'
              ? 'bg-black text-white shadow-md'
              : 'bg-white border border-[#D9E2EC] text-[#6F6F6F] hover:text-[#000000]'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>3D Models (optional)</span>
        </button>
      </div>

      {labMode === 'photo' && <PhotoVisualLab onSelectTopic={onSelectTopic} />}

      {labMode === '3d' && <ThreeGeoLaboratory onSelectTopic={onSelectTopic} />}

      {labMode === '2d' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-1 bg-white rounded-xl border border-[#D9E2EC] p-3 shadow-sm space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#829AB1] font-semibold px-3 py-1 block">
              Pilih Laboratorium (12 Models):
            </span>
            <div className="space-y-1">
              {labsList.map((lab) => {
                const Icon = lab.icon;
                const isActive = activeLab === lab.id;
                return (
                  <button
                    key={lab.id}
                    onClick={() => setActiveLab(lab.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#102A43] text-[#E5B94B] shadow-sm'
                        : 'text-[#334E68] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{lab.title}</span>
                    </div>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#E5B94B]' : 'text-[#829AB1]'}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-[#D9E2EC] shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
            {activeLab === 0 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#245C45] font-bold">
                    Laboratorium 1 · Geologi Fisis
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                    Struktur Lapisan Bumi
                  </h2>
                  <p className="text-xs text-[#486581]">
                    Slider kedalaman menembus kerak → mantel → inti.
                  </p>
                </div>
                <div className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span>Kedalaman:</span>
                    <strong className="text-[#102A43] text-sm">{depthKm} km</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6371"
                    step="10"
                    value={depthKm}
                    onChange={(e) => setDepthKm(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase">Lapisan</span>
                    <div className="font-editorial text-lg font-bold text-[#102A43]">
                      {depthKm <= 70
                        ? 'Kerak Bumi'
                        : depthKm <= 700
                          ? 'Mantel Atas & Astenosfer'
                          : depthKm <= 2900
                            ? 'Mantel Bawah'
                            : depthKm <= 5150
                              ? 'Inti Luar (Cair)'
                              : 'Inti Dalam (Padat)'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase">Suhu</span>
                    <div className="font-editorial text-lg font-bold text-[#C76D4B]">
                      {depthKm <= 70
                        ? '~15–800 °C'
                        : depthKm <= 700
                          ? '~800–1.600 °C'
                          : depthKm <= 2900
                            ? '~1.600–3.700 °C'
                            : depthKm <= 5150
                              ? '~4.000–5.000 °C'
                              : '~5.400–6.000 °C'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase">Komposisi</span>
                    <div className="font-editorial text-sm font-semibold text-[#245C45]">
                      {depthKm <= 70
                        ? 'SiAl & SiMa'
                        : depthKm <= 2900
                          ? 'Olivin, piroksen, peridotit'
                          : 'Besi–Nikel (Fe-Ni)'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeLab === 1 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#245C45] font-bold">
                    Laboratorium 2 · Geodinamika
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                    Batas Lempeng Tektonik
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(['convergent', 'divergent', 'transform'] as const).map((b) => (
                    <button
                      key={b}
                      onClick={() => setBoundaryType(b)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium ${
                        boundaryType === b
                          ? 'bg-[#102A43] text-white'
                          : 'bg-[#F0F4F8] text-[#486581]'
                      }`}
                    >
                      {b === 'convergent' ? 'Konvergen' : b === 'divergent' ? 'Divergen' : 'Transform'}
                    </button>
                  ))}
                </div>
                <div className="p-6 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-3">
                  <div className="font-editorial text-lg font-bold text-[#102A43]">
                    {boundaryType === 'convergent' && 'Zona Subduksi & Kolisi'}
                    {boundaryType === 'divergent' && 'Rift & Seafloor Spreading'}
                    {boundaryType === 'transform' && 'Sesar Geser (Strike-Slip)'}
                  </div>
                  <p className="text-xs text-[#334E68] leading-relaxed">
                    {boundaryType === 'convergent' &&
                      'Lempeng samudra menunjam di bawah lempeng benua → palung, busur vulkanik. Contoh: Palung Jawa, Himalaya.'}
                    {boundaryType === 'divergent' &&
                      'Lempeng menjauh, magma basal mengisi celah. Contoh: Mid-Atlantic Ridge, East African Rift.'}
                    {boundaryType === 'transform' &&
                      'Gesekan horizontal tanpa kerak baru. Contoh: San Andreas, Sesar Semangko.'}
                  </p>
                </div>
              </div>
            )}

            {activeLab === 4 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#245C45] font-bold">
                    Laboratorium 5 · Agroklimatologi
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                    Gradien Termal Junghuhn
                  </h2>
                  <p className="text-xs text-[#486581]">T = 26.3 − 0.6 × (h / 100)</p>
                </div>
                <div className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Elevasi</span>
                    <strong>{altitudeMeters} mdpl</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    step="50"
                    value={altitudeMeters}
                    onChange={(e) => setAltitudeMeters(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#D9E2EC]">
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase">Suhu estimasi</span>
                    <div className="font-editorial text-2xl font-bold text-[#102A43]">
                      {calculatedTemp} °C
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-xl border border-[#D9E2EC]"
                    style={{ borderColor: junghuhnZone.color }}
                  >
                    <span className="text-[10px] font-mono text-[#829AB1] uppercase">
                      Zona Junghuhn
                    </span>
                    <div
                      className="font-editorial text-lg font-bold"
                      style={{ color: junghuhnZone.color }}
                    >
                      {junghuhnZone.name}
                    </div>
                    <p className="text-xs text-[#486581] mt-1">{junghuhnZone.flora}</p>
                  </div>
                </div>
              </div>
            )}

            {activeLab === 6 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#245C45] font-bold">
                    Laboratorium 7 · Seismologi
                  </span>
                  <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                    Triangulasi Episentrum (Laska)
                  </h2>
                  <p className="text-xs text-[#486581]">Δ ≈ (S−P − 1) × 1000 km</p>
                </div>
                {[
                  { label: 'Stasiun Padang', value: spPadang, set: setSpPadang, dist: distPadang },
                  { label: 'Stasiun Bandung', value: spBandung, set: setSpBandung, dist: distBandung },
                  {
                    label: 'Stasiun Denpasar',
                    value: spDenpasar,
                    set: setSpDenpasar,
                    dist: distDenpasar,
                  },
                ].map((st) => (
                  <div
                    key={st.label}
                    className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2"
                  >
                    <div className="flex justify-between text-xs font-mono">
                      <span>{st.label} (S−P menit)</span>
                      <strong>
                        {st.value.toFixed(1)} min → ~{st.dist} km
                      </strong>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="0.1"
                      value={st.value}
                      onChange={(e) => st.set(Number(e.target.value))}
                      className="w-full accent-[#245C45]"
                    />
                  </div>
                ))}
              </div>
            )}

            {![0, 1, 4, 6].includes(activeLab) && (
              <div className="py-12 text-center space-y-3">
                <p className="font-editorial text-xl text-[#102A43]">
                  {labsList[activeLab].title}
                </p>
                <p className="text-sm text-[#486581]">
                  Gunakan mode <strong>Photo Lab</strong> untuk visual realistis topik ini, atau buka
                  materi teori terkait.
                </p>
                <button
                  onClick={() => onSelectTopic(labsList[activeLab].topicId)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#245C45] text-white text-xs rounded-lg"
                >
                  Baca materi <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
