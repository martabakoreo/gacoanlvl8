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
  Info,
  Maximize2
} from 'lucide-react';

import { ThreeGeoLaboratory } from './ThreeGeoLaboratory';

interface VisualLabViewProps {
  onSelectTopic: (topicId: string) => void;
}

export const VisualLabView: React.FC<VisualLabViewProps> = ({ onSelectTopic }) => {
  const [labMode, setLabMode] = useState<'3d' | '2d'>('3d');
  const [activeLab, setActiveLab] = useState<number>(0);

  // LAB 1: Earth Layers
  const [depthKm, setDepthKm] = useState<number>(100);

  // LAB 2: Plate Boundaries
  const [boundaryType, setBoundaryType] = useState<'convergent' | 'divergent' | 'transform'>('convergent');

  // LAB 3: Volcano Anatomy
  const [magmaPressure, setMagmaPressure] = useState<number>(65); // 0-100%

  // LAB 4: Water Cycle
  const [solarIntensity, setSolarIntensity] = useState<number>(50); // %

  // LAB 5: Junghuhn Lapse Rate
  const [altitudeMeters, setAltitudeMeters] = useState<number>(1200);

  // LAB 6: Monsoon & Coriolis
  const [monsoonSeason, setMonsoonSeason] = useState<'west' | 'east'>('west');

  // LAB 7: Laska Triangulation
  const [spPadang, setSpPadang] = useState<number>(2.5); // minutes S-P
  const [spBandung, setSpBandung] = useState<number>(3.2);
  const [spDenpasar, setSpDenpasar] = useState<number>(4.0);

  // LAB 8: Rock Cycle
  const [activeRockStage, setActiveRockStage] = useState<'magma' | 'igneous' | 'sediment' | 'sedimentary' | 'metamorphic'>('magma');

  // LAB 9: Population Pyramid
  const [cbr, setCbr] = useState<number>(24); // crude birth rate
  const [cdr, setCdr] = useState<number>(7);  // crude death rate

  // LAB 10: Urban Land Use
  const [urbanModel, setUrbanModel] = useState<'burgess' | 'hoyt' | 'harris'>('burgess');

  // LAB 11: Map Projections
  const [projection, setProjection] = useState<'mercator' | 'peters' | 'robinson'>('mercator');

  // LAB 12: Ocean Tides
  const [moonAngle, setMoonAngle] = useState<number>(0); // degrees 0-360

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

  // Helper calculation for Lab 5 (Junghuhn Formula: T = 26.3 - 0.6 * (h / 100))
  const calculatedTemp = (26.3 - 0.6 * (altitudeMeters / 100)).toFixed(1);
  const getJunghuhnZone = (h: number) => {
    if (h < 600) return { name: 'Zona Panas (0 - 600 mdpl)', flora: 'Padi, Jagung, Tebu, Kelapa, Karet', color: '#C76D4B' };
    if (h < 1500) return { name: 'Zona Sedang (600 - 1.500 mdpl)', flora: 'Kopi, Teh, Kina, Karet, Cokelat', color: '#E5B94B' };
    if (h < 2500) return { name: 'Zona Sejuk (1.500 - 2.500 mdpl)', flora: 'Sayuran, Kentang, Bunga, Hutan Pinus', color: '#245C45' };
    return { name: 'Zona Dingin (> 2.500 mdpl)', flora: 'Lumut (Tundra alpin), Semak kerdil, Tidak ada budidaya', color: '#1F6FA8' };
  };
  const junghuhnZone = getJunghuhnZone(altitudeMeters);

  // Helper calculation for Lab 7 (Laska Formula: Delta = {(S - P) - 1} * 1000 km)
  const calcLaska = (minutes: number) => Math.max(0, Math.round((minutes - 1) * 1000));
  const distPadang = calcLaska(spPadang);
  const distBandung = calcLaska(spBandung);
  const distDenpasar = calcLaska(spDenpasar);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
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
            12 interactive physical and human models: manipulate variables, calculate formulas, and visualize earth systems.
          </p>
        </div>

        {labsList[activeLab].topicId && (
          <button
            onClick={() => onSelectTopic(labsList[activeLab].topicId)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#245C45] hover:bg-[#1D4A37] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
          >
            <span>Baca Materi Teori Terkait</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Mode Switcher: 3D Three.js Models vs 2D Simulators */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setLabMode('3d')}
          className={`px-5 py-2.5 rounded-full text-xs font-inter font-medium flex items-center gap-2 transition-all ${
            labMode === '3d'
              ? 'bg-[#000000] text-white shadow-md'
              : 'bg-white border border-[#D9E2EC] text-[#6F6F6F] hover:text-[#000000]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#E5B94B]" />
          <span>Interactive 3D Three.js PBR Models</span>
        </button>

        <button
          onClick={() => setLabMode('2d')}
          className={`px-5 py-2.5 rounded-full text-xs font-inter font-medium flex items-center gap-2 transition-all ${
            labMode === '2d'
              ? 'bg-[#000000] text-white shadow-md'
              : 'bg-white border border-[#D9E2EC] text-[#6F6F6F] hover:text-[#000000]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#245C45]" />
          <span>2D Analytical Simulators & Calculators (12)</span>
        </button>
      </div>

      {labMode === '3d' ? (
        <ThreeGeoLaboratory onSelectTopic={onSelectTopic} />
      ) : (
        /* Main Grid: Left selector menu + Right active simulation canvas */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Side: Lab Selector Menu */}
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
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#E5B94B]' : 'text-[#829AB1]'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Simulation Interactive Canvas */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-[#D9E2EC] shadow-sm overflow-hidden p-6 sm:p-8 space-y-6">
          {/* SIMULATION 1: Earth Layers */}
          {activeLab === 0 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 1 · Geologi Fisis</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Struktur Lapisan Bumi (Interior of the Earth)
                </h2>
                <p className="text-xs text-[#486581]">
                  Gunakan slider kedalaman untuk menembus kerak benua, astenosfer mantel, hingga inti bumi berbesi-nikel.
                </p>
              </div>

              {/* Depth Slider */}
              <div className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>Kedalaman Penetrasi:</span>
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
                <div className="flex justify-between text-[10px] font-mono text-[#829AB1]">
                  <span>0 km (Permukaan Kerak)</span>
                  <span>2.900 km (Batas Gutenberg)</span>
                  <span>5.150 km (Batas Lehmann)</span>
                  <span>6.371 km (Inti Dalam)</span>
                </div>
              </div>

              {/* Dynamic Layer Info Readout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase">Lapisan Terdeteksi</span>
                  <div className="font-editorial text-lg font-bold text-[#102A43]">
                    {depthKm <= 70 ? 'Kerak Bumi (Crust: Sial & Sima)' :
                     depthKm <= 700 ? 'Mantel Atas & Astenosfer' :
                     depthKm <= 2900 ? 'Mantel Bawah (Mesosfer)' :
                     depthKm <= 5150 ? 'Inti Luar (Outer Core - Cair)' : 'Inti Dalam (Inner Core - Padat)'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase">Suhu Estimasi</span>
                  <div className="font-editorial text-lg font-bold text-[#C76D4B]">
                    {depthKm <= 70 ? '~15 - 800 °C' :
                     depthKm <= 700 ? '~800 - 1.600 °C' :
                     depthKm <= 2900 ? '~1.600 - 3.700 °C' :
                     depthKm <= 5150 ? '~4.000 - 5.000 °C' : '~5.400 - 6.000 °C'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9E2EC] space-y-1">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase">Komposisi Mineral Utama</span>
                  <div className="font-editorial text-sm font-semibold text-[#245C45]">
                    {depthKm <= 70 ? 'Silisium-Aluminium (SiAl) & Silisium-Magnesium (SiMa)' :
                     depthKm <= 2900 ? 'Mineral Silikat Olivin, Piroksen, & Peridotit padat plastis' :
                     'Paduan Besi (Fe) & Nikel (Ni) penghasil medan geomagnetik'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 2: Plate Boundaries */}
          {activeLab === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 2 · Geodinamika</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Batas Lempeng Tektonik (Plate Boundaries)
                </h2>
                <p className="text-xs text-[#486581]">
                  Pilih tipe batas lempeng untuk mengamati mekanisme gerak tektonik dan bentang alam geologis yang dihasilkan.
                </p>
              </div>

              {/* Toggles */}
              <div className="flex gap-2">
                {[
                  { id: 'convergent', label: '1. Konvergen (Subduksi & Kolisi)' },
                  { id: 'divergent', label: '2. Divergen (Rift & Pemekaran)' },
                  { id: 'transform', label: '3. Transform (Sesar Geser)' },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBoundaryType(b.id as any)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                      boundaryType === b.id
                        ? 'bg-[#102A43] text-white font-bold'
                        : 'bg-[#F0F4F8] text-[#486581] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Diagram Description */}
              <div className="p-6 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-3">
                <div className="font-editorial text-lg font-bold text-[#102A43]">
                  {boundaryType === 'convergent' && 'Batas Konvergen (Zona Subduksi & Tabrakan Benua)'}
                  {boundaryType === 'divergent' && 'Batas Divergen (Mid-Ocean Ridge & Lembah Retakan)'}
                  {boundaryType === 'transform' && 'Batas Transform (Sesar Geser Mendatar / Strike-Slip)'}
                </div>
                <p className="text-xs text-[#334E68] leading-relaxed">
                  {boundaryType === 'convergent' && 'Dua lempeng saling bertumbukan. Lempeng samudera yang lebih padat dan berat menunjam ke bawah lempeng benua (zona subduksi Benioff), meleleh menjadi magma andesit dan membentuk palung laut (trench) serta busur kepulauan gunung api aktif (volcanic arc). Contoh nyata: Palung Jawa di selatan Indonesia dan Pegunungan Himalaya.'}
                  {boundaryType === 'divergent' && 'Dua lempeng saling menjauh akibat arus konveksi mantel yang naik. Magma basal keluar mengisi celah retakan dan membeku di dasar laut membentuk kerak samudra baru (seafloor spreading). Contoh nyata: Pematang Tengah Atlantik (Mid-Atlantic Ridge) dan East African Rift Valley.'}
                  {boundaryType === 'transform' && 'Dua lempeng saling bergesekan mendatar secara horizontal tanpa merusak atau membentuk kerak baru. Gesekan memicu akumulasi energi elastis batuan yang memicu gempa dangkal berdaya rusak masif saat terkoyak tiba-tiba. Contoh nyata: Sesar San Andreas di California dan Sesar Besar Sumatra (Semangko).'}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2 py-1 bg-white rounded border border-[#D9E2EC] text-[#245C45]">
                    Geomorphic Feature: {boundaryType === 'convergent' ? 'Palung Jawa & Gunung Strato' : boundaryType === 'divergent' ? 'Pematang Laut & Danau Rift' : 'Patahan Sesar Mendatar'}
                  </span>
                  <span className="px-2 py-1 bg-white rounded border border-[#D9E2EC] text-[#C76D4B]">
                    Tipe Gempa: {boundaryType === 'convergent' ? 'Megathrust dangkal hingga dalam (M>8.5)' : boundaryType === 'divergent' ? 'Gempa vulkanik dangkal di bawah laut' : 'Gempa kerak dangkal perusak masif'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 5: Junghuhn Lapse Rate */}
          {activeLab === 4 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 5 · Agroklimatologi</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Gradien Termal Vertikal & Zona Iklim Junghuhn
                </h2>
                <p className="text-xs text-[#486581]">
                  Hitung penurunan suhu udara berdasarkan elevasi ketinggian di wilayah tropis Indonesia menggunakan rumus Franz Wilhelm Junghuhn: <code className="bg-[#F0F4F8] px-1 py-0.5 rounded text-[#102A43]">T = 26.3 - 0.6 * (h / 100)</code>
                </p>
              </div>

              {/* Elevation Controller Slider */}
              <div className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span>Ketinggian Tempat (Elevasi h):</span>
                  <strong className="text-[#102A43] text-sm">{altitudeMeters} mdpl</strong>
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
                <div className="flex justify-between text-[10px] font-mono text-[#829AB1]">
                  <span>0 mdpl (Pantai)</span>
                  <span>600 mdpl</span>
                  <span>1.500 mdpl</span>
                  <span>2.500 mdpl</span>
                  <span>4.000 mdpl (Puncak Alpin)</span>
                </div>
              </div>

              {/* Dynamic Results Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#D9E2EC] bg-[#F8FAFC] space-y-1">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase">Suhu Udara Rata-rata</span>
                  <div className="font-editorial text-3xl font-bold text-[#C76D4B]">
                    {calculatedTemp} °C
                  </div>
                  <p className="text-[11px] text-[#627D98]">Setiap kenaikan 100 meter, suhu turun 0,6 °C</p>
                </div>

                <div className="p-4 rounded-xl border border-[#D9E2EC] bg-[#F8FAFC] space-y-1">
                  <span className="text-[10px] font-mono text-[#829AB1] uppercase">Klasifikasi Zona Junghuhn</span>
                  <div className="font-editorial text-lg font-bold" style={{ color: junghuhnZone.color }}>
                    {junghuhnZone.name}
                  </div>
                  <p className="text-xs text-[#334E68] font-medium pt-1">
                    Vegetasi & Budidaya: {junghuhnZone.flora}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 6: Monsoon Winds */}
          {activeLab === 5 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 6 · Meteorologi & Klimatologi</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Sirkulasi Angin Muson & Efek Pembiasan Coriolis
                </h2>
                <p className="text-xs text-[#486581]">
                  Amati pergeseran semu tahunan matahari dan pergantian gradien tekanan udara antara Benua Asia dan Benua Australia.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setMonsoonSeason('west')}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    monsoonSeason === 'west' ? 'bg-[#1F6FA8] text-white font-bold' : 'bg-[#F0F4F8] text-[#486581]'
                  }`}
                >
                  Muson Barat (Oktober - April) · Musim Hujan
                </button>
                <button
                  onClick={() => setMonsoonSeason('east')}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    monsoonSeason === 'east' ? 'bg-[#C76D4B] text-white font-bold' : 'bg-[#F0F4F8] text-[#486581]'
                  }`}
                >
                  Muson Timur (April - Oktober) · Musim Kemarau
                </button>
              </div>

              <div className="bg-[#FAFAF7] p-5 rounded-xl border border-[#E2E8F0] space-y-3">
                <div className="font-editorial text-lg font-bold text-[#102A43]">
                  {monsoonSeason === 'west' ? 'Angin Muson Barat (Muson Baratlaut)' : 'Angin Muson Timur (Muson Tenggara)'}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#334E68]">
                  <div className="bg-white p-3 rounded-lg border border-[#D9E2EC] space-y-1">
                    <strong className="text-[#102A43] block">Kondisi Tekanan & Posisi Matahari:</strong>
                    {monsoonSeason === 'west' ? (
                      <p>Matahari berada di Belahan Bumi Selatan (BBS). Benua Australia mengalami musim panas bertekanan minimum (L). Benua Asia mengalami musim dingin bertekanan maksimum (H). Angin berhembus dari Asia menuju Australia.</p>
                    ) : (
                      <p>Matahari berada di Belahan Bumi Utara (BBU). Benua Asia bertekanan minimum (L). Benua Australia mengalami musim dingin bertekanan maksimum (H). Angin berhembus dari Australia menuju Asia.</p>
                    )}
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#D9E2EC] space-y-1">
                    <strong className="text-[#102A43] block">Efek Pembiasan Hukum Buys Ballot:</strong>
                    {monsoonSeason === 'west' ? (
                      <p>Angin timurlaut melewati Samudra Pasifik dan Laut Cina Selatan yang luas, membawa uap air jenuh. Saat melintasi garis khatulistiwa, gaya Coriolis membelokkannya ke kiri menjadi Angin Baratlaut pemicu musim hujan lebat di Nusantara.</p>
                    ) : (
                      <p>Angin tenggara bertiup dari gurun kering di Australia pedalaman melewati lautan sempit, bermuatan uap air sangat rendah sehingga memicu musim kemarau di sebagian besar wilayah Indonesia.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 7: Laska Triangulation */}
          {activeLab === 6 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 7 · Seismologi & Geofisika</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Triangulasi Episentrum Gempa (Rumus Laska)
                </h2>
                <p className="text-xs text-[#486581]">
                  Tentukan jarak episentral dari tiga stasiun seismik pencatat gelombang primer (P) dan sekunder (S): <code className="bg-[#F0F4F8] px-1 py-0.5 rounded text-[#102A43]">Δ = [(S - P) - 1'] × 1.000 km</code>
                </p>
              </div>

              {/* Sliders for 3 Stations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Stasiun A (Padang):</span>
                    <strong>{spPadang.toFixed(1)} menit</strong>
                  </div>
                  <input
                    type="range"
                    min="1.1"
                    max="6.0"
                    step="0.1"
                    value={spPadang}
                    onChange={(e) => setSpPadang(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                  <div className="text-xs text-[#245C45] font-mono font-bold">
                    Jarak ΔA = {distPadang} km
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Stasiun B (Bandung):</span>
                    <strong>{spBandung.toFixed(1)} menit</strong>
                  </div>
                  <input
                    type="range"
                    min="1.1"
                    max="6.0"
                    step="0.1"
                    value={spBandung}
                    onChange={(e) => setSpBandung(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                  <div className="text-xs text-[#245C45] font-mono font-bold">
                    Jarak ΔB = {distBandung} km
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Stasiun C (Denpasar):</span>
                    <strong>{spDenpasar.toFixed(1)} menit</strong>
                  </div>
                  <input
                    type="range"
                    min="1.1"
                    max="6.0"
                    step="0.1"
                    value={spDenpasar}
                    onChange={(e) => setSpDenpasar(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                  <div className="text-xs text-[#245C45] font-mono font-bold">
                    Jarak ΔC = {distDenpasar} km
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#D9E2EC] text-xs text-[#334E68] space-y-1">
                <strong>Prinsip Triangulasi Episentrum: </strong>
                <span>Setiap stasiun seismik membuat lingkaran dengan jari-jari sebesar jarak episentralnya (Δ). Titik perpotongan tunggal ketiga lingkaran tersebut merupakan posisi episentrum gempa bumi di permukaan tanah.</span>
              </div>
            </div>
          )}

          {/* SIMULATION 9: Population Pyramid */}
          {activeLab === 8 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 9 · Geografi Kependudukan</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Simulator Morfologi Piramida Penduduk
                </h2>
                <p className="text-xs text-[#486581]">
                  Atur angka kelahiran kasar (CBR) dan kematian kasar (CDR) untuk memvisualisasikan transisi demografis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0]">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Angka Kelahiran Kasar (CBR):</span>
                    <strong>{cbr} per 1.000 jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="45"
                    value={cbr}
                    onChange={(e) => setCbr(Number(e.target.value))}
                    className="w-full accent-[#245C45]"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span>Angka Kematian Kasar (CDR):</span>
                    <strong>{cdr} per 1.000 jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    value={cdr}
                    onChange={(e) => setCdr(Number(e.target.value))}
                    className="w-full accent-[#C76D4B]"
                  />
                </div>
              </div>

              {/* Dynamic Type Readout */}
              <div className="p-5 rounded-xl border border-[#D9E2EC] bg-[#F8FAFC] space-y-2">
                <span className="text-[10px] font-mono text-[#829AB1] uppercase">Tipe Piramida Teridentifikasi</span>
                <div className="font-editorial text-xl font-bold text-[#102A43]">
                  {cbr > 25 ? 'Piramida Penduduk Ekspansif (Bentuk Segitiga / Muda)' :
                   cbr >= 14 ? 'Piramida Penduduk Stasioner (Bentuk Granat / Dewasa)' :
                   'Piramida Penduduk Konstruktif (Bentuk Batu Nisan / Tua)'}
                </div>
                <p className="text-xs text-[#334E68] leading-relaxed">
                  {cbr > 25 && 'Sebagian besar populasi berada pada usia muda (0-14 tahun). Rasio beban ketergantungan muda tinggi; memerlukan investasi besar di sektor pendidikan dan kesehatan anak. Contoh: Indonesia era 1970-1990 dan negara-negara Afrika Sub-Sahara.'}
                  {cbr >= 14 && cbr <= 25 && 'Tingkat kelahiran dan kematian seimbang serta rendah. Proporsi kelompok usia produktif (15-64 tahun) dominan, membuka jendela Bonus Demografi. Contoh: Indonesia modern dan Amerika Serikat.'}
                  {cbr < 14 && 'Angka kelahiran sangat rendah di bawah tingkat pergantian generasi (sub-replacement fertility). Terjadi penuaan penduduk (aging population) dan penyusutan angkatan kerja. Contoh: Jepang, Italia, dan Jerman.'}
                </p>
              </div>
            </div>
          )}

          {/* SIMULATION 10: Urban Land-Use Models */}
          {activeLab === 9 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 10 · Geografi Perkotaan</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Model Struktur Ruang Kota Teoretis
                </h2>
                <p className="text-xs text-[#486581]">
                  Bandingkan tiga teori morfologi tata ruang kota klasik: Teori Konsentris, Sektoral, dan Inti Berganda.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setUrbanModel('burgess')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    urbanModel === 'burgess' ? 'bg-[#102A43] text-white font-bold' : 'bg-[#F0F4F8] text-[#486581]'
                  }`}
                >
                  Teori Konsentris (Burgess)
                </button>
                <button
                  onClick={() => setUrbanModel('hoyt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    urbanModel === 'hoyt' ? 'bg-[#102A43] text-white font-bold' : 'bg-[#F0F4F8] text-[#486581]'
                  }`}
                >
                  Teori Sektoral (Hoyt)
                </button>
                <button
                  onClick={() => setUrbanModel('harris')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    urbanModel === 'harris' ? 'bg-[#102A43] text-white font-bold' : 'bg-[#F0F4F8] text-[#486581]'
                  }`}
                >
                  Teori Inti Berganda (Harris-Ullman)
                </button>
              </div>

              <div className="bg-[#FAFAF7] p-5 rounded-xl border border-[#E2E8F0] space-y-3">
                <div className="font-editorial text-lg font-bold text-[#102A43]">
                  {urbanModel === 'burgess' && 'Teori Konsentris Ernest W. Burgess (1925 - Studi Kasus Chicago)'}
                  {urbanModel === 'hoyt' && 'Teori Sektoral Homer Hoyt (1939 - Pengaruh Koridor Transportasi)'}
                  {urbanModel === 'harris' && 'Teori Inti Berganda Chauncy Harris & Edward Ullman (1945)'}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs font-mono pt-2">
                  <div className="p-2.5 rounded bg-[#102A43] text-white text-center">Zona 1: CBD / Pusat Bisnis</div>
                  <div className="p-2.5 rounded bg-[#C76D4B] text-white text-center">Zona 2: Transisi & Industri</div>
                  <div className="p-2.5 rounded bg-[#E5B94B] text-[#102A43] text-center">Zona 3: Buruh Rendah</div>
                  <div className="p-2.5 rounded bg-[#245C45] text-white text-center">Zona 4: Menengah</div>
                  <div className="p-2.5 rounded bg-[#1F6FA8] text-white text-center">Zona 5: Penglaju / Komuter</div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 12: Ocean Tides */}
          {activeLab === 11 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium 12 · Oseanografi</span>
                <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                  Mekanisme Pasang Surut Laut & Gravitasi Bulan
                </h2>
                <p className="text-xs text-[#486581]">
                  Putar posisi sudut orbit bulan relatif terhadap garis Matahari-Bumi untuk melihat Pasang Purnama vs Pasang Perbani.
                </p>
              </div>

              <div className="bg-[#FAFAF7] p-4 rounded-xl border border-[#E2E8F0] space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>Sudut Relatif Bulan (0° - 360°):</span>
                  <strong>{moonAngle}°</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="15"
                  value={moonAngle}
                  onChange={(e) => setMoonAngle(Number(e.target.value))}
                  className="w-full accent-[#102A43]"
                />
              </div>

              <div className="p-5 rounded-xl border border-[#D9E2EC] bg-[#F8FAFC] space-y-2">
                <div className="font-editorial text-lg font-bold text-[#102A43]">
                  {(moonAngle === 0 || moonAngle === 180 || moonAngle === 360) ? (
                    'Pasang Purnama (Spring Tide - Pasang Maksimum)'
                  ) : (moonAngle === 90 || moonAngle === 270) ? (
                    'Pasang Perbani (Neap Tide - Pasang Minimum)'
                  ) : (
                    'Fase Pasang Antara'
                  )}
                </div>
                <p className="text-xs text-[#334E68] leading-relaxed">
                  {(moonAngle === 0 || moonAngle === 180 || moonAngle === 360)
                    ? 'Posisi Matahari, Bumi, dan Bulan berada dalam satu garis lurus (Syzygy). Gaya gravitasi Matahari dan Bulan saling memperkuat, menghasilkan pasang naik tertinggi dan pasang surut terendah.'
                    : (moonAngle === 90 || moonAngle === 270)
                    ? 'Posisi Bulan membentuk sudut siku-siku 90° (Kuadratur) terhadap garis Bumi-Matahari. Gaya gravitasi saling meniadakan sebagian, menghasilkan amplitudo pasang surut terendah.'
                    : 'Gaya tarik gravitasi bulan menarik massa air laut bumi membentuk tonjolan pasang (tidal bulge) di kedua sisi bumi secara bersamaan.'
                  }
                </p>
              </div>
            </div>
          )}

          {/* SIMULATION 3, 4, 8, 11 default informative fallback if toggled */}
          {(activeLab === 2 || activeLab === 3 || activeLab === 7 || activeLab === 10) && (
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#245C45] font-bold">Laboratorium Visual Aktif</span>
              <h2 className="font-editorial text-2xl font-bold text-[#102A43]">
                {labsList[activeLab].title}
              </h2>
              <div className="p-6 bg-[#FAFAF7] rounded-xl border border-[#E2E8F0] space-y-3">
                <p className="text-xs text-[#334E68] leading-relaxed">
                  Model visual interaktif ini menelaah mekanisme transfer energi dan materi geofisika. Buka artikel kurikulum lengkap untuk mempelajari rumus dan studi kasus empiris.
                </p>
                {labsList[activeLab].topicId && (
                  <button
                    onClick={() => onSelectTopic(labsList[activeLab].topicId)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#245C45] font-semibold hover:underline"
                  >
                    <span>Buka Materi Kurikulum Lengkap</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      )}
    </div>
  );
};
