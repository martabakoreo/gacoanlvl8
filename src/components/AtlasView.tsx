import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Map as MapIcon, 
  Layers, 
  MapPin, 
  Search, 
  Compass, 
  Eye, 
  Filter, 
  Mountain, 
  ExternalLink,
  Info,
  Sparkles
} from 'lucide-react';
import { GeographicIntelligenceModal } from './GeographicIntelligenceModal';
import { ATLAS_MARKERS } from '../data/atlasMarkers';
import { AtlasMarker } from '../types/geography';
import { topicMap } from '../data/topics';

interface AtlasViewProps {
  onSelectTopic: (topicId: string) => void;
}

export const AtlasView: React.FC<AtlasViewProps> = ({ onSelectTopic }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const overlaysLayerRef = useRef<L.LayerGroup | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMarker, setSelectedMarker] = useState<AtlasMarker | null>(null);
  const [activeBaseLayer, setActiveBaseLayer] = useState<'osm' | 'topo' | 'satellite'>('topo');
  const [isIntelligenceOpen, setIsIntelligenceOpen] = useState(false);
  const [showOverlays, setShowOverlays] = useState({
    ringOfFire: true,
    wallaceLine: true,
    weberLine: true,
  });

  // Base tile layers
  const baseTilesRef = useRef<{ [key: string]: L.TileLayer }>({});

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Initialize Leaflet Map centered over Indonesia Archipelago
    const map = L.map(mapContainerRef.current, {
      center: [-2.5, 118.0],
      zoom: 5,
      minZoom: 3,
      maxZoom: 18,
    });

    // Base Tile layers
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    });

    const topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap'
    });

    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    baseTilesRef.current = { osm, topo, satellite };
    topo.addTo(map);

    // Layer groups for markers and polylines
    const markersLayer = L.layerGroup().addTo(map);
    const overlaysLayer = L.layerGroup().addTo(map);

    markersLayerRef.current = markersLayer;
    overlaysLayerRef.current = overlaysLayer;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update base layer
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !baseTilesRef.current) return;

    Object.values(baseTilesRef.current).forEach((layer) => {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      }
    });

    const selectedLayer = baseTilesRef.current[activeBaseLayer];
    if (selectedLayer) {
      selectedLayer.addTo(map);
    }
  }, [activeBaseLayer]);

  // Update geographic polylines (Ring of Fire, Wallace Line, Weber Line)
  useEffect(() => {
    const map = mapInstanceRef.current;
    const overlayGroup = overlaysLayerRef.current;
    if (!map || !overlayGroup) return;

    overlayGroup.clearLayers();

    // 1. Pacific Ring of Fire & Sunda Arc (Indonesian volcanic arc)
    if (showOverlays.ringOfFire) {
      const sundaArcCoords: L.LatLngExpression[] = [
        [5.8, 95.3],   // Weh island
        [3.0, 97.5],   // Toba
        [-0.4, 100.4], // Marapi
        [-3.2, 102.5], // Kaba
        [-5.8, 104.5], // Rajabasa
        [-6.1, 105.4], // Krakatau
        [-6.8, 107.0], // Gede-Pangrango
        [-7.5, 110.4], // Merapi
        [-7.9, 112.9], // Bromo-Semeru
        [-8.3, 115.5], // Agung (Bali)
        [-8.4, 116.5], // Rinjani (Lombok)
        [-8.2, 118.0], // Tambora (Sumbawa)
        [-8.6, 121.8], // Kelimutu (Flores)
        [-8.2, 124.5], // Pantar
        [-5.5, 128.0], // Banda Arc
        [-3.6, 128.2], // Ambon
        [1.5, 124.9],  // Lokon-Soputan (North Sulawesi)
      ];

      const sundaArcPolyline = L.polyline(sundaArcCoords, {
        color: '#C76D4B',
        weight: 3,
        opacity: 0.8,
        dashArray: '6, 6',
      });
      sundaArcPolyline.bindTooltip('Busur Vulkanik Sunda / Ring of Fire Pasifik', { sticky: true });
      overlayGroup.addLayer(sundaArcPolyline);
    }

    // 2. Garis Wallace (Wallace Line)
    if (showOverlays.wallaceLine) {
      const wallaceCoords: L.LatLngExpression[] = [
        [5.0, 118.5],
        [1.0, 119.5],
        [-1.0, 118.5],
        [-5.0, 117.0],
        [-8.6, 115.8], // Between Bali and Lombok
        [-11.0, 116.0]
      ];

      const wallacePolyline = L.polyline(wallaceCoords, {
        color: '#245C45',
        weight: 3,
        opacity: 0.9,
      });
      wallacePolyline.bindTooltip('Garis Wallace (Pemisah Fauna Oriental - Peralihan)', { sticky: true });
      overlayGroup.addLayer(wallacePolyline);
    }

    // 3. Garis Weber (Weber Line)
    if (showOverlays.weberLine) {
      const weberCoords: L.LatLngExpression[] = [
        [4.0, 127.5],
        [1.5, 127.0],
        [-2.0, 129.5],
        [-5.5, 131.0],
        [-8.5, 130.5],
        [-11.0, 129.0]
      ];

      const weberPolyline = L.polyline(weberCoords, {
        color: '#142D4E',
        weight: 3,
        opacity: 0.9,
        dashArray: '4, 4',
      });
      weberPolyline.bindTooltip('Garis Weber (Garis Keseimbangan Fauna Peralihan - Australis)', { sticky: true });
      overlayGroup.addLayer(weberPolyline);
    }
  }, [showOverlays]);

  // Filter markers based on category and search
  const filteredMarkers = ATLAS_MARKERS.filter((marker) => {
    if (selectedCategory !== 'all' && marker.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        marker.name.toLowerCase().includes(q) ||
        marker.description.toLowerCase().includes(q) ||
        marker.significance.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Render markers onto Leaflet Layer
  useEffect(() => {
    const markerGroup = markersLayerRef.current;
    if (!markerGroup) return;

    markerGroup.clearLayers();

    filteredMarkers.forEach((marker) => {
      // Color based on category
      const colorMap: Record<string, string> = {
        geology: '#C76D4B',      // Earthy Rust / Red
        hydrology: '#1F6FA8',    // Deep Blue
        biosphere: '#245C45',    // Forest Green
        human: '#E5B94B',        // Ochre
        climate: '#5A626A',      // Slate
      };

      const markerColor = colorMap[marker.category] || '#102A43';

      // Custom SVG Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-atlas-pin',
        html: `
          <div style="
            background-color: ${markerColor};
            width: 22px;
            height: 22px;
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 10px;
            font-weight: bold;
          ">
            •
          </div>
        `,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const leafletMarker = L.marker(marker.coordinates, { icon: customIcon });

      leafletMarker.on('click', () => {
        setSelectedMarker(marker);
      });

      markerGroup.addLayer(leafletMarker);
    });
  }, [filteredMarkers]);

  // Center on marker
  const handleSelectMarkerInSidebar = (marker: AtlasMarker) => {
    setSelectedMarker(marker);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(marker.coordinates, 8, { animate: true });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#D9E2EC]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#245C45] font-semibold mb-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Geographic Atlas · Indonesia & Global</span>
          </div>
          <h1 className="font-editorial text-3xl font-bold text-[#102A43]">
            Interactive Geospatial Atlas
          </h1>
          <p className="text-xs text-[#486581] mt-0.5">
            Explore 30 authoritative geological and geographic sites, the Pacific Ring of Fire volcanic arc, and historical biogeographic lines.
          </p>
        </div>

        {/* Map Controls: Base Tiles & Overlay Toggles */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="bg-white p-1 rounded-lg border border-[#D9E2EC] flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setActiveBaseLayer('topo')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeBaseLayer === 'topo' ? 'bg-[#102A43] text-white font-semibold' : 'text-[#486581] hover:bg-[#F0F4F8]'
              }`}
            >
              Topographic
            </button>
            <button
              onClick={() => setActiveBaseLayer('satellite')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeBaseLayer === 'satellite' ? 'bg-[#102A43] text-white font-semibold' : 'text-[#486581] hover:bg-[#F0F4F8]'
              }`}
            >
              Satellite (Esri)
            </button>
            <button
              onClick={() => setActiveBaseLayer('osm')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeBaseLayer === 'osm' ? 'bg-[#102A43] text-white font-semibold' : 'text-[#486581] hover:bg-[#F0F4F8]'
              }`}
            >
              Street (OSM)
            </button>
          </div>
        </div>
      </div>

      {/* Main Atlas Layout: Map + Interactive Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Column: Search & Markers Directory */}
        <div className="lg:col-span-1 bg-white rounded-xl border border-[#D9E2EC] p-4 shadow-sm space-y-4 max-h-[700px] flex flex-col">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#829AB1] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 30 field sites..."
              className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#D9E2EC] rounded-lg text-xs text-[#102A43] placeholder-[#829AB1] focus:outline-none focus:border-[#245C45]"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1 text-[11px] font-mono">
            {['all', 'geology', 'hydrology', 'biosphere', 'human', 'climate'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-0.5 rounded capitalize transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#245C45] text-white font-medium'
                    : 'bg-[#F0F4F8] text-[#486581] hover:bg-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Layer Overlay Toggles */}
          <div className="pt-2 border-t border-[#F0F4F8] space-y-1.5 text-xs text-[#334E68]">
            <span className="text-[10px] font-mono uppercase text-[#829AB1] font-semibold block mb-1">
              Geographic Lines:
            </span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOverlays.ringOfFire}
                onChange={(e) => setShowOverlays({ ...showOverlays, ringOfFire: e.target.checked })}
                className="rounded border-[#D9E2EC] text-[#C76D4B] focus:ring-0"
              />
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 bg-[#C76D4B] inline-block" />
                <span>Ring of Fire / Busur Sunda</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOverlays.wallaceLine}
                onChange={(e) => setShowOverlays({ ...showOverlays, wallaceLine: e.target.checked })}
                className="rounded border-[#D9E2EC] text-[#245C45] focus:ring-0"
              />
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 bg-[#245C45] inline-block" />
                <span>Garis Wallace (Wallace Line)</span>
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOverlays.weberLine}
                onChange={(e) => setShowOverlays({ ...showOverlays, weberLine: e.target.checked })}
                className="rounded border-[#D9E2EC] text-[#142D4E] focus:ring-0"
              />
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 bg-[#142D4E] border-t border-dashed border-[#142D4E] inline-block" />
                <span>Garis Weber (Weber Line)</span>
              </span>
            </label>
          </div>

          {/* List of Sites */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 divide-y divide-[#F0F4F8]">
            {filteredMarkers.map((m) => {
              const isSelected = selectedMarker?.id === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => handleSelectMarkerInSidebar(m)}
                  className={`p-2 rounded-lg cursor-pointer transition-colors pt-2.5 ${
                    isSelected ? 'bg-[#102A43] text-white' : 'hover:bg-[#F8FAFC] text-[#102A43]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                    <span className={isSelected ? 'text-[#E5B94B]' : 'text-[#245C45] uppercase'}>
                      {m.category}
                    </span>
                    <span className={isSelected ? 'text-[#9FB3C8]' : 'text-[#829AB1]'}>
                      {m.elevationMeters !== undefined ? `${m.elevationMeters}m` : ''}
                    </span>
                  </div>
                  <h4 className="font-editorial text-xs font-bold leading-snug line-clamp-1">
                    {m.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Leaflet Map Container & Marker Details Card */}
        <div className="lg:col-span-3 space-y-4">
          <div 
            ref={mapContainerRef} 
            className="w-full h-[520px] rounded-xl border border-[#D9E2EC] shadow-md overflow-hidden z-10"
          />

          {/* Selected Marker Detail Card */}
          {selectedMarker ? (
            <div className="bg-white rounded-xl p-5 border border-[#245C45] shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#627D98]">
                  <span className="px-2 py-0.5 rounded bg-[#102A43] text-white uppercase text-[10px]">
                    {selectedMarker.category}
                  </span>
                  <span>·</span>
                  <span>Elevasi: {selectedMarker.elevationMeters} mdpl</span>
                  <span>·</span>
                  <span>Koordinat: [{selectedMarker.coordinates[0].toFixed(3)}, {selectedMarker.coordinates[1].toFixed(3)}]</span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-[#102A43]">
                  {selectedMarker.name}
                </h3>

                <p className="text-xs text-[#334E68] leading-relaxed">
                  {selectedMarker.description}
                </p>

                <div className="text-xs text-[#806247] bg-[#E5B94B]/10 p-2.5 rounded-lg border border-[#E5B94B]/30 mt-2">
                  <strong>Signifikansi Geografis: </strong>{selectedMarker.significance}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsIntelligenceOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#102A43] hover:bg-[#1E3A5F] text-white text-xs font-medium transition-colors shadow"
                  title="Telusuri dengan Google Search & Maps Grounding"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B94B]" />
                  <span>Live Ground Truth</span>
                </button>

                {selectedMarker.topicId && (
                  <button
                    onClick={() => onSelectTopic(selectedMarker.topicId!)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#245C45] hover:bg-[#1D4A37] text-white text-xs font-medium transition-colors shadow"
                  >
                    <span>Buka Materi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#D9E2EC] text-xs text-[#627D98] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#245C45] shrink-0" />
              <span>Klik pada pin titik di peta atau pilih dari daftar untuk melihat detail elevasi, koordinat lintang-bujur, signifikansi ilmiah, dan artikel topik kurikulum terkait.</span>
            </div>
          )}
        </div>
      </div>

      {/* Live Geographic Intelligence Modal */}
      {selectedMarker && (
        <GeographicIntelligenceModal
          isOpen={isIntelligenceOpen}
          onClose={() => setIsIntelligenceOpen(false)}
          initialTopicTitle={`${selectedMarker.name} - ${selectedMarker.category}`}
          initialQuery={`${selectedMarker.name} Indonesia kondisi geografis geologis terkini elevasi ${selectedMarker.elevationMeters || ''}`}
        />
      )}
    </div>
  );
};
