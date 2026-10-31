import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Layers, 
  Flame, 
  CloudRain, 
  Globe, 
  Building2, 
  Activity, 
  RotateCcw, 
  Eye, 
  Sliders, 
  Maximize2,
  Info,
  ChevronRight
} from 'lucide-react';

interface ThreeGeoLaboratoryProps {
  initialModelIndex?: number;
  onSelectTopic?: (topicId: string) => void;
}

export const ThreeGeoLaboratory: React.FC<ThreeGeoLaboratoryProps> = ({
  initialModelIndex = 0,
  onSelectTopic
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const currentGroupRef = useRef<THREE.Group | null>(null);
  const animFrameRef = useRef<number>(0);

  // Interaction & Damped Camera state
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraTargetRotationRef = useRef({ x: 0.3, y: 0.6 });
  const cameraCurrentRotationRef = useRef({ x: 0.3, y: 0.6 });
  const cameraDistanceRef = useRef(14);
  const targetDistanceRef = useRef(14);

  // Active Model Selector
  const [activeModel, setActiveModel] = useState<number>(initialModelIndex);
  const [layerExplode, setLayerExplode] = useState<number>(0); // 0 to 1
  const [simSpeed, setSimSpeed] = useState<number>(1);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [controlsCollapsed, setControlsCollapsed] = useState<boolean>(false);

  // Animation uniforms / tickers
  const timeRef = useRef(0);

  const MODELS_DATA = [
    {
      id: 0,
      name: 'Struktur Lapisan Bumi (Earth Cutaway)',
      category: 'Geologi Fisis & Litosfer',
      topicId: 'struktur-lapisan-bumi',
      desc: 'Model 3D anatomi interior bumi: Kerak Sial/Sima, Mantel Astenosfer konvektif, Inti Luar cair, dan Inti Dalam padat Fe-Ni.'
    },
    {
      id: 1,
      name: 'Zona Subduksi & Batas Lempeng Tektonik',
      category: 'Geodinamika',
      topicId: 'lempeng-tektonik',
      desc: 'Penunjaman lempeng samudera di bawah lempeng benua (Palung Jawa), peleburan batuan, dan pembentukan busur gunung api.'
    },
    {
      id: 2,
      name: 'Anatomi Gunung Api Strato & Dapur Magma',
      category: 'Vulkanologi',
      topicId: 'vulkanisme',
      desc: 'Struktur pipa kepundungan sentral, kantong magma dalam, kubah lava andesitik, dan kolom erupsi awan piroklastik.'
    },
    {
      id: 3,
      name: 'Siklus Hidrologi & Daerah Aliran Sungai',
      category: 'Hidrosfer',
      topicId: 'siklus-hidrologi',
      desc: 'Evaporasi samudra, awan presipitasi, limpasan sungai berkelok (meander), dan infiltrasi air tanah akuifer.'
    },
    {
      id: 4,
      name: 'Lapisan Atmosfer & Tirai Aurora',
      category: 'Meteorologi',
      topicId: 'lapisan-atmosfer-dan-karakteristiknya',
      desc: 'Troposfer cuaca, stratosfer ozon, mesosfer meteorit, termosfer aurora magnetik, dan lintasan satelit eksosfer.'
    },
    {
      id: 5,
      name: 'Morfologi Struktur Ruang Kota (Burgess-Hoyt)',
      category: 'Geografi Perkotaan',
      topicId: 'teori-struktur-kota-burgess-hoyt-harris',
      desc: 'Zonasi tata ruang kota 3D: Kawasan Pusat Bisnis (CBD), koridor industri transit, dan permukiman konsentris bertingkat.'
    }
  ];

  // =========================================================================
  // PROCEDURAL CANVAS TEXTURE GENERATORS (Zero external file dependencies)
  // =========================================================================
  const createEarthCanvasTexture = (): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Deep ocean base
    ctx.fillStyle = '#14385c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Procedural continents & archipelagos
    ctx.fillStyle = '#245C45';
    for (let i = 0; i < 45; i++) {
      const x = Math.sin(i * 13) * 450 + 512;
      const y = Math.cos(i * 17) * 200 + 256;
      const r = (i % 7) * 18 + 25;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Mountainous topography shading
    ctx.fillStyle = '#7a5a3a';
    for (let i = 0; i < 20; i++) {
      const x = Math.sin(i * 23) * 400 + 512;
      const y = Math.cos(i * 29) * 160 + 256;
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    return texture;
  };

  const createLavaNoiseTexture = (): THREE.CanvasTexture => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, '#FFE066');
    grad.addColorStop(0.3, '#FF6B35');
    grad.addColorStop(0.7, '#D62246');
    grad.addColorStop(1, '#400914');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };

  // =========================================================================
  // MODEL BUILDERS (Composite 3-12 Part THREE.Group Procedural Models)
  // =========================================================================

  // 1. Earth Layers Cutaway Model
  const buildEarthCutaway = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'EarthCutawayModel';

    const earthTex = createEarthCanvasTexture();
    const lavaTex = createLavaNoiseTexture();

    // Part 1: Outer Crust & Mantle Quarter Wedge (Beveled 270 deg Sphere)
    const crustMat = new THREE.MeshStandardMaterial({
      map: earthTex,
      roughness: 0.85,
      metalness: 0.1,
    });
    const crustGeom = new THREE.SphereGeometry(4, 48, 48, 0, Math.PI * 1.5, 0, Math.PI);
    const crustMesh = new THREE.Mesh(crustGeom, crustMat);
    group.add(crustMesh);

    // Part 2: Asthenosphere / Upper Mantle Inner Wedge
    const mantleMat = new THREE.MeshStandardMaterial({
      color: '#C76D4B',
      roughness: 0.65,
      metalness: 0.2,
      bumpScale: 0.05
    });
    const mantleGeom = new THREE.SphereGeometry(3.3, 36, 36, 0, Math.PI * 1.5, 0, Math.PI);
    const mantleMesh = new THREE.Mesh(mantleGeom, mantleMat);
    group.add(mantleMesh);

    // Part 3: Lower Mantle (Mesosphere)
    const lowerMantleMat = new THREE.MeshStandardMaterial({
      color: '#9C4221',
      roughness: 0.5,
      metalness: 0.3
    });
    const lowerMantleGeom = new THREE.SphereGeometry(2.6, 32, 32, 0, Math.PI * 1.5, 0, Math.PI);
    const lowerMantleMesh = new THREE.Mesh(lowerMantleGeom, lowerMantleMat);
    group.add(lowerMantleMesh);

    // Part 4: Outer Core (Liquid Iron-Nickel Sphere with emissive glow)
    const outerCoreMat = new THREE.MeshStandardMaterial({
      map: lavaTex,
      emissive: '#FF5722',
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.7
    });
    const outerCoreGeom = new THREE.SphereGeometry(1.8, 32, 32);
    const outerCoreMesh = new THREE.Mesh(outerCoreGeom, outerCoreMat);
    group.add(outerCoreMesh);

    // Part 5: Inner Core (Solid Crystalline Sphere)
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: '#FFF099',
      emissive: '#FFD700',
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.9
    });
    const innerCoreGeom = new THREE.SphereGeometry(0.9, 28, 28);
    const innerCoreMesh = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    group.add(innerCoreMesh);

    // Part 6: Cross-section Cutaway Indicator Discs
    const cutSliceGeom = new THREE.CircleGeometry(4, 32, 0, Math.PI);
    const cutSliceMat = new THREE.MeshStandardMaterial({
      color: '#8A3B14',
      roughness: 0.7,
      side: THREE.DoubleSide
    });
    const cutSliceMesh1 = new THREE.Mesh(cutSliceGeom, cutSliceMat);
    cutSliceMesh1.rotation.y = Math.PI * 0.5;
    group.add(cutSliceMesh1);

    const cutSliceMesh2 = new THREE.Mesh(cutSliceGeom, cutSliceMat);
    cutSliceMesh2.rotation.y = 0;
    group.add(cutSliceMesh2);

    // Part 7: Atmospheric Blue Glow Shell
    const atmoGeom = new THREE.SphereGeometry(4.2, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: '#60A5FA',
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmoMesh = new THREE.Mesh(atmoGeom, atmoMat);
    group.add(atmoMesh);

    // Soft Contact Shadow Plane at base
    const shadowGeom = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: '#000000',
      transparent: true,
      opacity: 0.25,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -4.5;
    group.add(shadowMesh);

    return group;
  };

  // 2. Subduction Zone Model
  const buildSubductionZone = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'SubductionModel';

    // Part 1: Continental Plate Block (Upper Plate)
    const contGeom = new THREE.BoxGeometry(6, 2, 7);
    const contMat = new THREE.MeshStandardMaterial({
      color: '#6B7280',
      roughness: 0.85,
      metalness: 0.1
    });
    const contMesh = new THREE.Mesh(contGeom, contMat);
    contMesh.position.set(3, 0, 0);
    group.add(contMesh);

    // Part 2: Continental Green Crust & Topography
    const topGeom = new THREE.BoxGeometry(5.9, 0.4, 6.9);
    const topMat = new THREE.MeshStandardMaterial({
      color: '#245C45',
      roughness: 0.9,
      metalness: 0.05
    });
    const topMesh = new THREE.Mesh(topGeom, topMat);
    topMesh.position.set(3, 1.1, 0);
    group.add(topMesh);

    // Part 3: Stratovolcano on Continental Plate
    const coneGeom = new THREE.ConeGeometry(1.6, 2.2, 24);
    const coneMat = new THREE.MeshStandardMaterial({
      color: '#4B5563',
      roughness: 0.9
    });
    const coneMesh = new THREE.Mesh(coneGeom, coneMat);
    coneMesh.position.set(4, 2.3, 0);
    group.add(coneMesh);

    // Part 4: Summit Caldera Crater (Lathe / Cylinder)
    const craterGeom = new THREE.CylinderGeometry(0.35, 0.1, 0.4, 16);
    const craterMat = new THREE.MeshStandardMaterial({
      color: '#1F2937',
      roughness: 0.95
    });
    const craterMesh = new THREE.Mesh(craterGeom, craterMat);
    craterMesh.position.set(4, 3.4, 0);
    group.add(craterMesh);

    // Part 5: Oceanic Slab (Dipping into mantle at 35 degrees)
    const oceanSlabGeom = new THREE.BoxGeometry(7, 1.2, 7);
    const oceanSlabMat = new THREE.MeshStandardMaterial({
      color: '#1E293B',
      roughness: 0.7,
      metalness: 0.3
    });
    const oceanSlabMesh = new THREE.Mesh(oceanSlabGeom, oceanSlabMat);
    oceanSlabMesh.position.set(-2.8, -0.6, 0);
    oceanSlabMesh.rotation.z = -0.45;
    group.add(oceanSlabMesh);

    // Part 6: Deep Ocean Trench Depression (Palung Laut)
    const waterGeom = new THREE.BoxGeometry(5.5, 0.5, 6.9);
    const waterMat = new THREE.MeshStandardMaterial({
      color: '#0284C7',
      transparent: true,
      opacity: 0.75,
      roughness: 0.1,
      metalness: 0.4
    });
    const waterMesh = new THREE.Mesh(waterGeom, waterMat);
    waterMesh.position.set(-2.8, 0.8, 0);
    group.add(waterMesh);

    // Part 7: Magma Ascent Diapirs (Bubbles rising from subducting slab)
    for (let i = 0; i < 4; i++) {
      const magmaGeom = new THREE.SphereGeometry(0.35 + i * 0.08, 16, 16);
      const magmaMat = new THREE.MeshStandardMaterial({
        color: '#EA580C',
        emissive: '#F97316',
        emissiveIntensity: 0.8
      });
      const magmaMesh = new THREE.Mesh(magmaGeom, magmaMat);
      magmaMesh.position.set(2.5 + i * 0.4, -1.2 + i * 0.9, (i % 2 === 0 ? 0.4 : -0.4));
      group.add(magmaMesh);
    }

    // Part 8: Wadati-Benioff Earthquake Hypocenters (Glowing Spheres along dipping slab)
    for (let k = 0; k < 6; k++) {
      const quakeGeom = new THREE.SphereGeometry(0.12, 12, 12);
      const quakeMat = new THREE.MeshBasicMaterial({ color: '#EAB308' });
      const quakeMesh = new THREE.Mesh(quakeGeom, quakeMat);
      quakeMesh.position.set(-0.5 + k * 0.6, 0.2 - k * 0.55, (k % 2 === 0 ? 1 : -1));
      group.add(quakeMesh);
    }

    return group;
  };

  // 3. Volcano Anatomy Model
  const buildVolcanoAnatomy = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'VolcanoModel';

    // Part 1: Half-section Mountain Stratocone (revealing internal layering)
    const coneGeom = new THREE.CylinderGeometry(0.8, 5.5, 5, 32, 1, false, 0, Math.PI * 1.6);
    const coneMat = new THREE.MeshStandardMaterial({
      color: '#4B5563',
      roughness: 0.9,
      side: THREE.DoubleSide
    });
    const coneMesh = new THREE.Mesh(coneGeom, coneMat);
    coneMesh.position.y = 1;
    group.add(coneMesh);

    // Part 2: Magma Chamber at Base (Dapur Magma)
    const magmaChamberGeom = new THREE.SphereGeometry(2, 24, 24);
    const magmaChamberMat = new THREE.MeshStandardMaterial({
      color: '#EF4444',
      emissive: '#DC2626',
      emissiveIntensity: 0.85,
      roughness: 0.3
    });
    const magmaChamberMesh = new THREE.Mesh(magmaChamberGeom, magmaChamberMat);
    magmaChamberMesh.position.set(0, -2.5, 0);
    group.add(magmaChamberMesh);

    // Part 3: Central Conduit Pipe (Pipa Kepundungan)
    const conduitGeom = new THREE.CylinderGeometry(0.4, 0.6, 6, 16);
    const conduitMat = new THREE.MeshStandardMaterial({
      color: '#F97316',
      emissive: '#EA580C',
      emissiveIntensity: 0.9
    });
    const conduitMesh = new THREE.Mesh(conduitGeom, conduitMat);
    conduitMesh.position.set(0, 0.5, 0);
    group.add(conduitMesh);

    // Part 4: Branch Vent (Sill / Dike intrusive magma branch)
    const branchGeom = new THREE.CylinderGeometry(0.18, 0.25, 2.8, 12);
    const branchMat = new THREE.MeshStandardMaterial({
      color: '#F97316',
      emissive: '#EA580C',
      emissiveIntensity: 0.7
    });
    const branchMesh = new THREE.Mesh(branchGeom, branchMat);
    branchMesh.rotation.z = Math.PI * 0.35;
    branchMesh.position.set(1.5, 0.8, 0);
    group.add(branchMesh);

    // Part 5: Pyroclastic Ash Cloud Column (Kolom Erupsi)
    const ashGroup = new THREE.Group();
    for (let c = 0; c < 9; c++) {
      const ashGeom = new THREE.SphereGeometry(0.6 + c * 0.15, 16, 16);
      const ashMat = new THREE.MeshStandardMaterial({
        color: c < 3 ? '#F97316' : '#374151',
        emissive: c < 2 ? '#EF4444' : '#000000',
        emissiveIntensity: c < 2 ? 0.6 : 0,
        roughness: 0.95
      });
      const ashMesh = new THREE.Mesh(ashGeom, ashMat);
      ashMesh.position.set(
        Math.sin(c * 1.7) * 0.3,
        3.8 + c * 0.55,
        Math.cos(c * 1.7) * 0.3
      );
      ashGroup.add(ashMesh);
    }
    group.add(ashGroup);

    // Part 6: Basal Country Rock Layers
    const baseRockGeom = new THREE.BoxGeometry(12, 1.5, 12);
    const baseRockMat = new THREE.MeshStandardMaterial({
      color: '#334155',
      roughness: 0.95
    });
    const baseRockMesh = new THREE.Mesh(baseRockGeom, baseRockMat);
    baseRockMesh.position.y = -2;
    group.add(baseRockMesh);

    return group;
  };

  // 4. Hydrological Basin Model
  const buildHydrologicalBasin = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'HydrologyModel';

    // Mountain Range Topography
    const mtnGeom = new THREE.ConeGeometry(3, 4, 18);
    const mtnMat = new THREE.MeshStandardMaterial({ color: '#4B5563', roughness: 0.9 });
    const mtnMesh = new THREE.Mesh(mtnGeom, mtnMat);
    mtnMesh.position.set(-3.5, 1, -2);
    group.add(mtnMesh);

    // Snowcap peak
    const snowGeom = new THREE.ConeGeometry(1.2, 1.4, 18);
    const snowMat = new THREE.MeshStandardMaterial({ color: '#F8FAFC', roughness: 0.4 });
    const snowMesh = new THREE.Mesh(snowGeom, snowMat);
    snowMesh.position.set(-3.5, 2.4, -2);
    group.add(snowMesh);

    // Alluvial Plain & Floodplain
    const plainGeom = new THREE.BoxGeometry(10, 0.8, 8);
    const plainMat = new THREE.MeshStandardMaterial({ color: '#245C45', roughness: 0.85 });
    const plainMesh = new THREE.Mesh(plainGeom, plainMat);
    plainMesh.position.set(0, -0.4, 0);
    group.add(plainMesh);

    // Ocean Body
    const oceanGeom = new THREE.BoxGeometry(4, 0.75, 8);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: '#0284C7',
      roughness: 0.1,
      metalness: 0.6,
      transparent: true,
      opacity: 0.8
    });
    const oceanMesh = new THREE.Mesh(oceanGeom, oceanMat);
    oceanMesh.position.set(4, -0.35, 0);
    group.add(oceanMesh);

    // Meandering River Curve (TubeGeometry)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, 0.05, -1.8),
      new THREE.Vector3(-1.5, 0.05, -0.5),
      new THREE.Vector3(-0.2, 0.05, -1.2),
      new THREE.Vector3(1.2, 0.05, 0.3),
      new THREE.Vector3(2.5, 0.05, -0.2),
      new THREE.Vector3(3.8, 0.05, 0.5)
    ]);
    const riverGeom = new THREE.TubeGeometry(curve, 32, 0.22, 8, false);
    const riverMat = new THREE.MeshStandardMaterial({
      color: '#38BDF8',
      roughness: 0.2,
      metalness: 0.5
    });
    const riverMesh = new THREE.Mesh(riverGeom, riverMat);
    group.add(riverMesh);

    // Evaporating Cloud Puffs
    for (let cl = 0; cl < 3; cl++) {
      const cloudGeom = new THREE.DodecahedronGeometry(0.7 + cl * 0.2, 1);
      const cloudMat = new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        roughness: 0.9,
        transparent: true,
        opacity: 0.85
      });
      const cloudMesh = new THREE.Mesh(cloudGeom, cloudMat);
      cloudMesh.position.set(-1.5 + cl * 2.2, 3.2, -1 + cl * 0.8);
      group.add(cloudMesh);
    }

    return group;
  };

  // 5. Urban Structure Model (Burgess & Hoyt)
  const buildUrbanModel = (): THREE.Group => {
    const group = new THREE.Group();
    group.name = 'UrbanModel';

    // Concentric base circles (Zone 1 to 5)
    const zoneColors = ['#102A43', '#C76D4B', '#E5B94B', '#245C45', '#1F6FA8'];
    for (let z = 0; z < 5; z++) {
      const ringGeom = new THREE.RingGeometry(z * 1.1, (z + 1) * 1.1 - 0.05, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: zoneColors[z],
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = -Math.PI / 2;
      ringMesh.position.y = 0.01;
      group.add(ringMesh);
    }

    // High-Rise Skyscrapers in Zone 1 (CBD)
    for (let b = 0; b < 12; b++) {
      const h = 2.5 + (b % 4) * 0.8;
      const bldGeom = new THREE.BoxGeometry(0.5, h, 0.5);
      const bldMat = new THREE.MeshStandardMaterial({
        color: '#CBD5E1',
        metalness: 0.8,
        roughness: 0.2
      });
      const bldMesh = new THREE.Mesh(bldGeom, bldMat);
      const angle = (b / 12) * Math.PI * 2;
      const rad = 0.3 + (b % 3) * 0.25;
      bldMesh.position.set(Math.cos(angle) * rad, h / 2, Math.sin(angle) * rad);
      group.add(bldMesh);
    }

    // Industrial Warehouses in Zone 2
    for (let w = 0; w < 16; w++) {
      const h = 0.6 + (w % 3) * 0.2;
      const whGeom = new THREE.BoxGeometry(0.8, h, 0.6);
      const whMat = new THREE.MeshStandardMaterial({
        color: '#94A3B8',
        roughness: 0.8
      });
      const whMesh = new THREE.Mesh(whGeom, whMat);
      const angle = (w / 16) * Math.PI * 2;
      whMesh.position.set(Math.cos(angle) * 1.6, h / 2, Math.sin(angle) * 1.6);
      group.add(whMesh);
    }

    // Suburban Residences in Zone 4 & 5
    for (let r = 0; r < 28; r++) {
      const resGeom = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      const resMat = new THREE.MeshStandardMaterial({
        color: '#F87171',
        roughness: 0.7
      });
      const resMesh = new THREE.Mesh(resGeom, resMat);
      const angle = (r / 28) * Math.PI * 2;
      const rad = 3.6 + (r % 2) * 0.8;
      resMesh.position.set(Math.cos(angle) * rad, 0.2, Math.sin(angle) * rad);
      group.add(resMesh);
    }

    return group;
  };

  // Switcher helper
  const load3DModel = (index: number) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Dispose old group
    if (currentGroupRef.current) {
      scene.remove(currentGroupRef.current);
      currentGroupRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material.dispose();
          }
        }
      });
    }

    let newGroup: THREE.Group;
    switch (index) {
      case 0:
        newGroup = buildEarthCutaway();
        break;
      case 1:
        newGroup = buildSubductionZone();
        break;
      case 2:
        newGroup = buildVolcanoAnatomy();
        break;
      case 3:
      case 4:
        newGroup = buildHydrologicalBasin();
        break;
      case 5:
      default:
        newGroup = buildUrbanModel();
        break;
    }

    currentGroupRef.current = newGroup;
    scene.add(newGroup);
  };

  // Initialize Three.js Scene, Lighting, Camera, Renderer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js skill
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // Scene setup with atmospheric fog matching palette
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0A1118');
    scene.fog = new THREE.FogExp2('#0A1118', 0.025);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 5, 14);
    cameraRef.current = camera;

    // Studio PBR Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = !isSoftwareGl;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Studio Lighting Rig per skill guidelines
    // 1. Cool Hemisphere Fill
    const hemiLight = new THREE.HemisphereLight('#E2E8F0', '#1E293B', 0.9);
    scene.add(hemiLight);

    // 2. Warm Key Directional Light
    const dirLight = new THREE.DirectionalLight('#FFF5E1', 1.8);
    dirLight.position.set(8, 14, 10);
    dirLight.castShadow = !isSoftwareGl;
    if (dirLight.shadow) {
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
    }
    scene.add(dirLight);

    // 3. Subtle Rim Light
    const rimLight = new THREE.DirectionalLight('#38BDF8', 0.6);
    rimLight.position.set(-8, 6, -8);
    scene.add(rimLight);

    // Initial Model
    load3DModel(activeModel);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Render & Animation Loop with Exponential Damping
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      animFrameRef.current = requestAnimationFrame(animate);

      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      timeRef.current += dt * simSpeed;

      // Damped camera rotation towards target
      const k = 10;
      const factor = 1 - Math.exp(-k * dt);

      if (autoRotate && !isDraggingRef.current) {
        cameraTargetRotationRef.current.y += 0.3 * dt;
      }

      cameraCurrentRotationRef.current.x += (cameraTargetRotationRef.current.x - cameraCurrentRotationRef.current.x) * factor;
      cameraCurrentRotationRef.current.y += (cameraTargetRotationRef.current.y - cameraCurrentRotationRef.current.y) * factor;
      cameraDistanceRef.current += (targetDistanceRef.current - cameraDistanceRef.current) * factor;

      // Apply spherical position to camera
      const phi = cameraCurrentRotationRef.current.x;
      const theta = cameraCurrentRotationRef.current.y;
      const dist = cameraDistanceRef.current;

      camera.position.x = dist * Math.cos(phi) * Math.sin(theta);
      camera.position.y = dist * Math.sin(phi);
      camera.position.z = dist * Math.cos(phi) * Math.cos(theta);
      camera.lookAt(0, 0, 0);

      // Subtle dynamic animations on models
      if (currentGroupRef.current) {
        if (activeModel === 2) {
          // Volcano pulsating conduit glow
          const conduit = currentGroupRef.current.children[2] as THREE.Mesh;
          if (conduit && (conduit.material as THREE.MeshStandardMaterial).emissiveIntensity !== undefined) {
            (conduit.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.7 + Math.sin(timeRef.current * 4) * 0.3;
          }
        }
      }

      renderer.render(scene, camera);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameRef.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update active model when state changes
  useEffect(() => {
    load3DModel(activeModel);
  }, [activeModel]);

  // Wireframe toggle effect
  useEffect(() => {
    if (!currentGroupRef.current) return;
    currentGroupRef.current.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mat = (child as THREE.Mesh).material;
        if (mat) {
          if (Array.isArray(mat)) {
            mat.forEach((m) => {
              if ('wireframe' in m) {
                (m as any).wireframe = wireframeMode;
              }
            });
          } else if ('wireframe' in mat) {
            (mat as any).wireframe = wireframeMode;
          }
        }
      }
    });
  }, [wireframeMode]);

  // Mouse / Touch Drag Orbit Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousMousePositionRef.current.x;
    const deltaY = e.clientY - previousMousePositionRef.current.y;

    cameraTargetRotationRef.current.y -= deltaX * 0.007;
    cameraTargetRotationRef.current.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, cameraTargetRotationRef.current.x + deltaY * 0.007));

    previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    targetDistanceRef.current = Math.max(6, Math.min(26, targetDistanceRef.current + e.deltaY * 0.015));
  };

  const currentModelMeta = MODELS_DATA[activeModel];

  return (
    <div className="relative w-full h-[720px] rounded-3xl overflow-hidden bg-[#0A1118] border border-[#243B53] shadow-2xl select-none">
      {/* Three.js WebGL Canvas Mounting Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top Floating Header & Model Switcher */}
      <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="bg-[#102A43]/90 text-white px-4 py-2 rounded-2xl border border-[#243B53] shadow-lg pointer-events-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#245C45] flex items-center justify-center text-[#E5B94B]">
            <Globe className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-instrument text-lg font-bold text-white tracking-wide">
                {currentModelMeta.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1F3A56] text-[#E5B94B] border border-[#2D4D6F]">
                Three.js PBR
              </span>
            </div>
            <p className="text-xs text-[#9FB3C8] font-inter">
              {currentModelMeta.category} · Drag to orbit · Scroll to zoom
            </p>
          </div>
        </div>

        {/* Action Link to Full Topic Lesson */}
        {currentModelMeta.topicId && onSelectTopic && (
          <button
            onClick={() => onSelectTopic(currentModelMeta.topicId)}
            className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#102A43] hover:bg-[#F5F1E8] font-inter text-xs font-semibold transition-all shadow-md"
          >
            <span>Buka Materi Kurikulum</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Bottom Floating Horizontal Model Switcher Bar */}
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 pointer-events-none">
        {/* Model Tabs */}
        <div className="bg-[#102A43]/90 p-1.5 rounded-2xl border border-[#243B53] shadow-lg pointer-events-auto flex items-center gap-1.5 overflow-x-auto max-w-full">
          {MODELS_DATA.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-inter font-medium whitespace-nowrap transition-all ${
                activeModel === idx
                  ? 'bg-[#245C45] text-white shadow'
                  : 'text-[#9FB3C8] hover:text-white hover:bg-[#142D4E]'
              }`}
            >
              {idx + 1}. {m.name.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Viewport Floating Mini-Control Dock (solid surface <= 15% footprint) */}
        <div className="bg-[#102A43]/95 px-3 py-2 rounded-2xl border border-[#243B53] shadow-lg pointer-events-auto flex items-center gap-2 text-xs font-inter text-white">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
              autoRotate ? 'bg-[#245C45] text-white' : 'bg-[#1E293B] text-[#94A3B8]'
            }`}
            title="Toggle Auto Rotation"
          >
            Rotate: {autoRotate ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
              wireframeMode ? 'bg-[#E5B94B] text-[#102A43] font-bold' : 'bg-[#1E293B] text-[#94A3B8]'
            }`}
            title="Toggle Wireframe Mesh"
          >
            Mesh
          </button>

          <button
            onClick={() => {
              cameraTargetRotationRef.current = { x: 0.3, y: 0.6 };
              targetDistanceRef.current = 14;
            }}
            className="p-1.5 rounded-lg bg-[#1E293B] text-[#94A3B8] hover:text-white"
            title="Reset Camera View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
