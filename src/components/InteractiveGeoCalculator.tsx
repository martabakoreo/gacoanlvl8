import React, { useState } from 'react';
import { 
  Calculator, 
  Activity, 
  Wind, 
  MapPin, 
  Users, 
  Droplets, 
  Layers, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';

interface InteractiveGeoCalculatorProps {
  categoryId?: string;
  topicId?: string;
}

type CalculatorType = 'laska' | 'lapseRate' | 'contour' | 'reilly' | 'dependency' | 'runoff';

export const InteractiveGeoCalculator: React.FC<InteractiveGeoCalculatorProps> = ({
  categoryId,
  topicId
}) => {
  // Determine default calculator based on category or topic
  const getDefaultType = (): CalculatorType => {
    if (categoryId === 'cat-c' || categoryId === 'cat-d' || topicId?.includes('gempa') || topicId?.includes('tektonik')) {
      return 'laska';
    }
    if (categoryId === 'cat-f' || topicId?.includes('atmosfer') || topicId?.includes('suhu') || topicId?.includes('cuaca')) {
      return 'lapseRate';
    }
    if (categoryId === 'cat-b' || topicId?.includes('peta') || topicId?.includes('skala') || topicId?.includes('kontur')) {
      return 'contour';
    }
    if (categoryId === 'cat-l' || categoryId === 'cat-m' || topicId?.includes('kota') || topicId?.includes('desa') || topicId?.includes('interaksi')) {
      return 'reilly';
    }
    if (categoryId === 'cat-j' || categoryId === 'cat-k' || topicId?.includes('penduduk') || topicId?.includes('demografi')) {
      return 'dependency';
    }
    if (categoryId === 'cat-g' || topicId?.includes('hidrologi') || topicId?.includes('sungai') || topicId?.includes('banjir')) {
      return 'runoff';
    }
    return 'laska';
  };

  const [activeCalc, setActiveCalc] = useState<CalculatorType>(getDefaultType());

  // 1. LASKA FORMULA STATE: Delta = ((S - P) - 1') * 1000 km
  const [laskaMinutes, setLaskaMinutes] = useState<number>(3);
  const [laskaSeconds, setLaskaSeconds] = useState<number>(25);

  // 2. LAPSE RATE ATMOSFER: Th = T0 - 0.65 * (h / 100)
  const [seaLevelTemp, setSeaLevelTemp] = useState<number>(27);
  const [elevationMeters, setElevationMeters] = useState<number>(1800);

  // 3. CONTOUR INTERVAL: CI = 1/2000 * Scale
  const [mapScaleDenominator, setMapScaleDenominator] = useState<number>(50000);

  // 4. REILLY / TITIK HENTI: TH = J / (1 + sqrt(Pb / Pa))
  const [cityDistanceKm, setCityDistanceKm] = useState<number>(45);
  const [popCityA, setPopCityA] = useState<number>(900000); // larger
  const [popCityB, setPopCityB] = useState<number>(100000); // smaller

  // 5. DEPENDENCY RATIO: DR = (P_young + P_old) / P_productive * 100
  const [popYoung, setPopYoung] = useState<number>(280000); // 0-14
  const [popProductive, setPopProductive] = useState<number>(650000); // 15-64
  const [popElderly, setPopElderly] = useState<number>(70000); // 65+

  // 6. RUNOFF PEAK DISCHARGE: Q = 0.278 * C * I * A
  const [runoffC, setRunoffC] = useState<number>(0.65); // Impervious/semi-urban
  const [rainfallIntensity, setRainfallIntensity] = useState<number>(45); // mm/hr
  const [watershedAreaKm2, setWatershedAreaKm2] = useState<number>(12); // km2

  // CALCULATIONS
  // Laska
  const totalLaskaMinutesDiff = Math.max(0, laskaMinutes + laskaSeconds / 60 - 1);
  const laskaDistanceKm = Math.round(totalLaskaMinutesDiff * 1000);

  // Lapse Rate
  const calculatedTemp = (seaLevelTemp - 0.65 * (elevationMeters / 100)).toFixed(1);

  // Contour Interval
  const calculatedCI = Math.round(mapScaleDenominator / 2000);

  // Titik Henti Carrothers
  const largerPop = Math.max(popCityA, popCityB);
  const smallerPop = Math.min(popCityA, popCityB);
  const titikHentiFromSmaller = (
    cityDistanceKm / (1 + Math.sqrt(largerPop / Math.max(1, smallerPop)))
  ).toFixed(2);

  // Dependency Ratio
  const dependencyRatio = (
    ((popYoung + popElderly) / Math.max(1, popProductive)) * 100
  ).toFixed(1);

  // Runoff
  const peakDischargeQ = (
    0.278 * runoffC * rainfallIntensity * watershedAreaKm2
  ).toFixed(2);

  return (
    <div className="bg-white rounded-2xl border border-[#D9E2EC] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 sm:p-6 bg-gradient-to-r from-[#102A43] to-[#1F3A56] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#E5B94B]">
            <Calculator className="w-4 h-4" />
            <span className="uppercase tracking-wider">Laboratorium Komputasi Sains Geografi</span>
          </div>
          <h3 className="font-editorial text-2xl font-bold mt-1">
            Simulasi Parameter & Kalkulator Matematis Interaktif
          </h3>
          <p className="text-xs text-[#9FB3C8] mt-1 max-w-xl">
            Eksplorasi hukum fisis dan matematis geografi SMA: geser slider untuk menganalisis respons dinamika geosfer secara langsung.
          </p>
        </div>

        {/* Tab Badges */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-black/25 rounded-xl self-start sm:self-center">
          <button
            onClick={() => setActiveCalc('laska')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'laska' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Hukum Laska
          </button>
          <button
            onClick={() => setActiveCalc('lapseRate')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'lapseRate' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Gradien Termis
          </button>
          <button
            onClick={() => setActiveCalc('contour')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'contour' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Skala & CI
          </button>
          <button
            onClick={() => setActiveCalc('reilly')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'reilly' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Titik Henti
          </button>
          <button
            onClick={() => setActiveCalc('dependency')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'dependency' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Beban Ketergantungan
          </button>
          <button
            onClick={() => setActiveCalc('runoff')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCalc === 'runoff' ? 'bg-[#E5B94B] text-[#102A43] font-bold shadow-xs' : 'text-[#D9E2EC] hover:bg-white/10'
            }`}
          >
            Debit Banjir (Q)
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* 1. LASKA */}
        {activeCalc === 'laska' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C76D4B] font-bold">
                <Activity className="w-4 h-4" />
                <span>SEISMOLOGI & LITOSFER · RUMUS EPISENTRUM LASKA</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus: </strong> &Delta; = {'{((Gelombang S - Gelombang P) - 1 Menit) &times; 1.000 km}'}
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Selisih Waktu Tiba Gelombang Sekunder (S) & Primer (P) - Menit:</span>
                    <strong className="text-[#102A43] font-mono">{laskaMinutes} menit</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={laskaMinutes}
                    onChange={(e) => setLaskaMinutes(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Tambahan Detik:</span>
                    <strong className="text-[#102A43] font-mono">{laskaSeconds} detik</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="59"
                    step="5"
                    value={laskaSeconds}
                    onChange={(e) => setLaskaSeconds(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>
              </div>

              <div className="text-xs text-[#627D98] bg-[#F0F4F8] p-3 rounded-lg flex items-start gap-2">
                <Info className="w-4 h-4 text-[#245C45] shrink-0 mt-0.5" />
                <span>
                  Gelombang Primer (P) merambat paling cepat (~5-8 km/s), disusul Gelombang Sekunder (S) (~3-5 km/s). Selisih kedatangan di stasiun seismograf menjadi dasar penentuan radius episentrum gempa.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAFAF7] to-[#F0F4F8] p-6 rounded-xl border border-[#D9E2EC] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider">
                Hasil Jarak Episentrum (&Delta;)
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {laskaDistanceKm.toLocaleString('id-ID')}{' '}
                <span className="text-xl text-[#245C45] font-sans">km</span>
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                Pusat gempa terletak pada radius melingkar sejauh <strong>{laskaDistanceKm} km</strong> dari stasiun seismik pencatat. Butuh minimal 3 stasiun seismik untuk metode triangulasi titik koordinat tepat episentrum.
              </p>
            </div>
          </div>
        )}

        {/* 2. LAPSE RATE */}
        {activeCalc === 'lapseRate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#245C45] font-bold">
                <Wind className="w-4 h-4" />
                <span>METEOROLOGI · GRADIEN TERMIS VERTIKAL (BRAAK)</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus: </strong> T = T<sub>0</sub> - 0,65 &times; (h / 100)
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Suhu Udara di Permukaan Laut (0 mdpl) - T<sub>0</sub>:</span>
                    <strong className="text-[#102A43] font-mono">{seaLevelTemp} °C</strong>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="35"
                    step="0.5"
                    value={seaLevelTemp}
                    onChange={(e) => setSeaLevelTemp(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Ketinggian Elevasi Lokasi (h):</span>
                    <strong className="text-[#102A43] font-mono">{elevationMeters} mdpl</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="4500"
                    step="50"
                    value={elevationMeters}
                    onChange={(e) => setElevationMeters(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>
              </div>

              <div className="text-xs text-[#627D98] bg-[#F0F4F8] p-3 rounded-lg flex items-start gap-2">
                <Info className="w-4 h-4 text-[#245C45] shrink-0 mt-0.5" />
                <span>
                  Di zona tropis (Indonesia), setiap kenaikan 100 meter ketinggian, suhu udara troposfer rata-rata turun sekitar 0,65°C sesuai Hukum Mock dan Braak.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#EBF8FF] to-white p-6 rounded-xl border border-[#BEE3F8] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#2B6CB0] uppercase tracking-wider">
                Estimasi Suhu Udara Terhitung
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {calculatedTemp} <span className="text-xl text-[#2B6CB0] font-sans">°C</span>
              </div>
              <div className="text-xs text-[#486581] leading-relaxed">
                Klasifikasi Junghuhn: {Number(calculatedTemp) < 11.1 ? 'Zona Sangat Dingin (Tidak ada tanaman budidaya)' : Number(calculatedTemp) < 17.1 ? 'Zona Dingin (Pinus, Teh, Sayuran)' : Number(calculatedTemp) < 22 ? 'Zona Sejuk (Kopi, Teh, Kina)' : 'Zona Panas (Padi, Tebu, Kelapa)'}
              </div>
            </div>
          </div>
        )}

        {/* 3. CONTOUR INTERVAL */}
        {activeCalc === 'contour' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#806247] font-bold">
                <Layers className="w-4 h-4" />
                <span>KARTOGRAFI · KONTUR INTERVAL (CI) & SKALA PETA</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus Standar: </strong> CI = 1 / 2.000 &times; Penyebut Skala
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Penyebut Skala Peta Rupa Bumi (RBI):</span>
                    <strong className="text-[#102A43] font-mono">1 : {mapScaleDenominator.toLocaleString('id-ID')}</strong>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="250000"
                    step="5000"
                    value={mapScaleDenominator}
                    onChange={(e) => setMapScaleDenominator(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#829AB1] mt-1 font-mono">
                    <span>1:10.000 (Sangat Detail)</span>
                    <span>1:50.000 (Standar RBI)</span>
                    <span>1:250.000 (Tinjau Regional)</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#627D98] bg-[#F0F4F8] p-3 rounded-lg flex items-start gap-2">
                <Info className="w-4 h-4 text-[#245C45] shrink-0 mt-0.5" />
                <span>
                  Kontur interval (CI) menunjukkan beda tinggi tegak lurus antara dua garis kontur berurutan. Semakin rapat garis kontur, semakin terjal lereng topografi medan.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAFAF7] to-white p-6 rounded-xl border border-[#D9E2EC] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider">
                Kontur Interval Terhitung (CI)
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {calculatedCI} <span className="text-xl text-[#806247] font-sans">meter</span>
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                Pada peta skala 1:{mapScaleDenominator.toLocaleString('id-ID')}, setiap garis kontur mewakili perbedaan elevasi medan sebesar <strong>{calculatedCI} meter</strong>.
              </p>
            </div>
          </div>
        )}

        {/* 4. REILLY / TITIK HENTI */}
        {activeCalc === 'reilly' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#245C45] font-bold">
                <MapPin className="w-4 h-4" />
                <span>GEOGRAFI WILAYAH · TEORI TITIK HENTI (BREAKING POINT)</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus Carrothers: </strong> TH<sub>AB</sub> = J<sub>AB</sub> / (1 + &radic;(P<sub>A</sub> / P<sub>B</sub>))
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Jarak Kota A ke Kota B (J<sub>AB</sub>):</span>
                    <strong className="text-[#102A43] font-mono">{cityDistanceKm} km</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={cityDistanceKm}
                    onChange={(e) => setCityDistanceKm(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Populasi Kota A (Metropolis):</span>
                    <strong className="text-[#102A43] font-mono">{popCityA.toLocaleString('id-ID')} jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="2000000"
                    step="50000"
                    value={popCityA}
                    onChange={(e) => setPopCityA(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Populasi Kota B (Kota Satelit/Kecil):</span>
                    <strong className="text-[#102A43] font-mono">{popCityB.toLocaleString('id-ID')} jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="20000"
                    max="500000"
                    step="10000"
                    value={popCityB}
                    onChange={(e) => setPopCityB(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAFAF7] to-white p-6 rounded-xl border border-[#D9E2EC] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider">
                Lokasi Ideal Titik Henti
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {titikHentiFromSmaller} <span className="text-xl text-[#245C45] font-sans">km</span>
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                Batas pengaruh pelayanan fasilitas umum (rumah sakit, pasar regional, terminal) paling strategis dibangun sejauh <strong>{titikHentiFromSmaller} km</strong> diukur dari kota dengan populasi lebih sedikit (Kota B).
              </p>
            </div>
          </div>
        )}

        {/* 5. DEPENDENCY RATIO */}
        {activeCalc === 'dependency' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#102A43] font-bold">
                <Users className="w-4 h-4" />
                <span>DEMOGRAFI · ANGKA BEBAN KETERGANTUNGAN (DEPENDENCY RATIO)</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus: </strong> DR = ((P<sub>0-14</sub> + P<sub>65+</sub>) / P<sub>15-64</sub>) &times; 100
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Penduduk Belum Produktif (0-14 th):</span>
                    <strong className="text-[#102A43] font-mono">{popYoung.toLocaleString('id-ID')} jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="600000"
                    step="10000"
                    value={popYoung}
                    onChange={(e) => setPopYoung(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Penduduk Usia Produktif (15-64 th):</span>
                    <strong className="text-[#102A43] font-mono">{popProductive.toLocaleString('id-ID')} jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="1200000"
                    step="20000"
                    value={popProductive}
                    onChange={(e) => setPopProductive(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Penduduk Non-Produktif Lanjut Usia (65+ th):</span>
                    <strong className="text-[#102A43] font-mono">{popElderly.toLocaleString('id-ID')} jiwa</strong>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={popElderly}
                    onChange={(e) => setPopElderly(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAFAF7] to-white p-6 rounded-xl border border-[#D9E2EC] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#627D98] uppercase tracking-wider">
                Angka Ketergantungan (DR)
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {dependencyRatio}
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                Artinya, setiap 100 orang penduduk produktif menanggung beban ekonomi sekitar <strong>{Math.round(Number(dependencyRatio))} orang</strong> non-produktif.{' '}
                {Number(dependencyRatio) <= 50 ? (
                  <span className="text-[#245C45] font-semibold block mt-1">
                    🌟 Wilayah ini berada dalam kondisi Bonus Demografi!
                  </span>
                ) : (
                  <span className="text-[#806247] font-semibold block mt-1">
                    ⚠️ Beban ketergantungan relatif tinggi.
                  </span>
                )}
              </p>
            </div>
          </div>
        )}

        {/* 6. RUNOFF */}
        {activeCalc === 'runoff' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2B6CB0] font-bold">
                <Droplets className="w-4 h-4" />
                <span>HIDROLOGI · DEBIT LIMPASAN METODE RASIONAL (BANJIR)</span>
              </div>
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#D9E2EC] font-mono text-xs text-[#102A43]">
                <strong>Rumus: </strong> Q = 0,278 &times; C &times; I &times; A (m&sup3;/detik)
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Koefisien Aliran Permukaan (C) - Tutupan Lahan:</span>
                    <strong className="text-[#102A43] font-mono">{runoffC}</strong>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.95"
                    step="0.05"
                    value={runoffC}
                    onChange={(e) => setRunoffC(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#829AB1] font-mono">
                    <span>0.1 (Hutan Primer)</span>
                    <span>0.5 (Pertanian)</span>
                    <span>0.9 (Aspal/Beton Kota)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Intensitas Hujan Rata-rata (I):</span>
                    <strong className="text-[#102A43] font-mono">{rainfallIntensity} mm/jam</strong>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    step="5"
                    value={rainfallIntensity}
                    onChange={(e) => setRainfallIntensity(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#486581] mb-1">
                    <span>Luas Daerah Aliran Sungai (DAS - A):</span>
                    <strong className="text-[#102A43] font-mono">{watershedAreaKm2} km&sup2;</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={watershedAreaKm2}
                    onChange={(e) => setWatershedAreaKm2(Number(e.target.value))}
                    className="w-full accent-[#245C45] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#EBF8FF] to-white p-6 rounded-xl border border-[#BEE3F8] text-center space-y-3">
              <span className="text-[11px] font-mono text-[#2B6CB0] uppercase tracking-wider">
                Debit Puncak Limpasan (Q)
              </span>
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#102A43]">
                {peakDischargeQ}{' '}
                <span className="text-xl text-[#2B6CB0] font-sans">m&sup3;/s</span>
              </div>
              <p className="text-xs text-[#486581] leading-relaxed">
                Volume puncak air yang mengalir ke badan sungai pada saat intensitas hujan {rainfallIntensity} mm/jam mencapai <strong>{peakDischargeQ} meter kubik per detik</strong>. Konversi lahan hutan menjadi beton (C naik) memperbesar debit puncak dan risiko banjir bandang.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
