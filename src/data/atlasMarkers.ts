import { AtlasMarker } from '../types/geography';

export const ATLAS_MARKERS: AtlasMarker[] = [
  // INDONESIA & GEOLOGY
  {
    id: 'merapi',
    name: 'Gunung Merapi (Merapi Volcano)',
    category: 'geology',
    coordinates: [-7.5407, 110.4457],
    elevationMeters: 2930,
    description: 'Gunung api strato teraktif di Indonesia dengan kubah lava andesitik dan awan panas guguran (wedhus gembel). Terletak di zona subduksi Lempeng Indo-Australia dan Lempeng Eurasia.',
    topicId: 'vulkanisme',
    significance: 'Laboratorium vulkanologi dunia untuk pemantauan deformasi tiltmeter dan bahaya piroklastik.'
  },
  {
    id: 'krakatau',
    name: 'Anak Krakatau (Sunda Strait)',
    category: 'geology',
    coordinates: [-6.1021, 105.4230],
    elevationMeters: 157,
    description: 'Gunung api pulau kaldera di Selat Sunda. Sisa letusan kataklisma 1883 dan longsoran lereng pemicu tsunami vulkanik 2018.',
    topicId: 'vulkanisme',
    significance: 'Studi kasus global tsunami vulkanik akibat kolapsnya tubuh gunung api ke laut.'
  },
  {
    id: 'toba',
    name: 'Kaldera Danau Toba (Toba Supervolcano)',
    category: 'geology',
    coordinates: [2.6845, 98.8756],
    elevationMeters: 905,
    description: 'Kaldera supervulkanik terbesar di dunia berukuran 100 x 30 km, hasil letusan dahsyat 74.000 tahun silam dengan Pulau Samosir sebagai kubah resurgensi.',
    topicId: 'vulkanisme',
    significance: 'Situs UNESCO Global Geopark dan bukti dampak vulkanik terhadap pendinginan iklim purba global.'
  },
  {
    id: 'palukoro',
    name: 'Patahan Sesar Palu-Koro (Palu-Koro Fault)',
    category: 'geology',
    coordinates: [-0.9003, 119.8780],
    elevationMeters: 50,
    description: 'Sesar mendatar mengiri (sinistral strike-slip) aktif dengan laju geser 35-45 mm/tahun. Episentrum gempa Mw 7,5 dan likuifaksi masif Petobo-Balaroa 2018.',
    topicId: 'seisme-gempa-bumi',
    significance: 'Bukti supershear rupture dan likuifaksi aliran lumpur terdahsyat abad ke-21.'
  },
  {
    id: 'gunungsewu',
    name: 'Karst Gunung Sewu (Gunungkidul-Pacitan)',
    category: 'geology',
    coordinates: [-8.0583, 110.6033],
    elevationMeters: 300,
    description: 'Kawasan bentang alam karst tropis kerucut (cone karst) dengan ribuan bukit kapur, uvala, dolina, dan gua sungai bawah tanah Bribin.',
    topicId: 'bentang-alam-geomorfologi',
    significance: 'Situs UNESCO Global Geopark untuk sistem hidrologi sungai bawah tanah gua karst.'
  },
  {
    id: 'cartensz',
    name: 'Puncak Jaya / Carstensz Pyramid',
    category: 'geology',
    coordinates: [-4.0833, 137.1833],
    elevationMeters: 4884,
    description: 'Puncak tertinggi di Indonesia dan Oseania di Pegunungan Jayawijaya Papua. Satu-satunya lokasi gletser es tropis abadi di Indonesia yang kini terancam punah mencair.',
    topicId: 'perubahan-iklim-dan-pemanasan-global',
    significance: 'Indikator alami pemanasan global di zona tropis khatulistiwa.'
  },

  // HYDROLOGY & OCEANOGRAPHY
  {
    id: 'citarum',
    name: 'DAS Sungai Citarum (West Java)',
    category: 'hydrology',
    coordinates: [-6.8500, 107.5000],
    elevationMeters: 650,
    description: 'Sungai terpanjang di Jawa Barat (297 km) yang mengairi tiga waduk kaskade raksasa (Saguling, Cirata, Jatiluhur) penghasil listrik PLTA 1.400 MW dan irigasi 240.000 ha sawah.',
    topicId: 'perairan-darat-dan-daerah-aliran-sungai',
    significance: 'Program Citarum Harum terpadu restorasi pencemaran limbah industri tekstil.'
  },
  {
    id: 'selatmalaka',
    name: 'Selat Malaka (Strait of Malacca)',
    category: 'indonesia',
    coordinates: [2.5000, 101.5000],
    elevationMeters: 0,
    description: 'Titik sumbat maritim (chokepoint) tersibuk di dunia, dilewati lebih dari 100.000 kapal kargo per tahun yang menghubungkan Samudra Hindia dan Laut Natuna.',
    topicId: 'posisi-strategis-indonesia-maritim',
    significance: 'Urat nadi perdagangan maritim minyak bumi Asia Timur dan dunia.'
  },
  {
    id: 'selatlombok',
    name: 'Selat Lombok & Arus Lintas Indonesia (ARLINDO)',
    category: 'hydrology',
    coordinates: [-8.4500, 115.7500],
    elevationMeters: 0,
    description: 'Selat berpalung dalam (>1.000 m) yang dilalui Arus Lintas Indonesia (Indonesian Throughflow) mentransfer massa air hangat Pasifik ke Samudra Hindia.',
    topicId: 'dinamika-arus-dan-gelombang-laut',
    significance: 'Jalur pelayaran ALKI II dan penentu sistem sirkulasi termohalin iklim global.'
  },
  {
    id: 'rajaampat',
    name: 'Kepulauan Raja Ampat (Coral Triangle Core)',
    category: 'biosphere',
    coordinates: [-0.5000, 130.5000],
    elevationMeters: 10,
    description: 'Episentrum Segitiga Terumbu Karang Dunia dengan 553 spesies karang keras (75% jenis dunia) dan 1.400+ spesies ikan karang.',
    topicId: 'keanekaragaman-hayati-indonesia',
    significance: 'Pusat konservasi keanekaragaman hayati laut terkaya di planet bumi.'
  },

  // BIOSPHERE & CONSERVATION
  {
    id: 'gariswallace',
    name: 'Selat Makassar (Garis Wallace / Wallace Line)',
    category: 'biosphere',
    coordinates: [-1.5000, 118.5000],
    elevationMeters: 0,
    description: 'Garis batas biogeografi imajiner Alfred Russel Wallace (1859) yang memisahkan fauna Asiatis (Paparan Sunda) dengan fauna peralihan Wallacea.',
    topicId: 'persebaran-flora-dan-fauna-indonesia',
    significance: 'Pilar fundamental biogeografi evolusi modern dunia.'
  },
  {
    id: 'komodo',
    name: 'Taman Nasional Komodo (Komodo Island)',
    category: 'biosphere',
    coordinates: [-8.5500, 119.4833],
    elevationMeters: 825,
    description: 'Habitat alami kadal purba karnivora terbesar di bumi (Varanus komodoensis). Bentang alam sabana kering dan pulau terjal di zona peralihan Wallacea.',
    topicId: 'konservasi-flora-dan-fauna',
    significance: 'Situs Warisan Dunia UNESCO dan cagar biosfer satwa endemik purba.'
  },
  {
    id: 'tanjungputing',
    name: 'Taman Nasional Tanjung Puting (Borneo Orangutan)',
    category: 'biosphere',
    coordinates: [-2.9167, 111.9167],
    elevationMeters: 20,
    description: 'Ekosistem hutan rawa gambut dan hutan hujan dataran rendah Kalimantan, suaka perlindungan orangutan liar terbesar di dunia (Camp Leakey).',
    topicId: 'konservasi-flora-dan-fauna',
    significance: 'Pusat penelitian primata global dan penyimpan cadangan karbon gambut raksasa.'
  },
  {
    id: 'ujungkulon',
    name: 'Taman Nasional Ujung Kulon (Badak Jawa)',
    category: 'biosphere',
    coordinates: [-6.7500, 105.3333],
    elevationMeters: 400,
    description: 'Semenanjung ujung barat Pulau Jawa, habitat alami terakhir di dunia bagi Badak Jawa bercula satu (Rhinoceros sondaicus) yang berstatus kritis terancam punah.',
    topicId: 'konservasi-flora-dan-fauna',
    significance: 'Benteng pertahanan terakhir kepunahan mamalia besar endemik Jawa.'
  },
  {
    id: 'subak',
    name: 'Lanskap Budaya Subak Jatiluwih (Bali)',
    category: 'indonesia',
    coordinates: [-8.3686, 115.1311],
    elevationMeters: 700,
    description: 'Lanskap terasering sawah bertingkat indah yang dikelola berlandaskan filosofi Tri Hita Karana dan sistem pembagian air irigasi demokratis sejak abad ke-11.',
    topicId: 'geografi-budaya-dan-bentang-lahan-kultural',
    significance: 'Warisan Budaya Dunia UNESCO perpaduan spiritualitas dan hidrologi pertanian.'
  },

  // URBAN & DISASTER & DEVELOPMENT
  {
    id: 'ikn',
    name: 'Ibu Kota Nusantara (IKN Nusantara)',
    category: 'urban',
    coordinates: [-0.9744, 116.7056],
    elevationMeters: 120,
    description: 'Ibu kota negara masa depan Indonesia yang dirancang dengan konsep Smart Forest City berkelanjutan, mengalokasikan 75% wilayah sebagai ruang terbuka hijau.',
    topicId: 'kebijakan-pembangunan-wilayah-indonesia',
    significance: 'Simbol transformasi paradigma pembangunan Indonesia-sentris dan kota hijau.'
  },
  {
    id: 'semarang_rob',
    name: 'Pesisir Semarang & Tambak Lorok (Land Subsidence)',
    category: 'urban',
    coordinates: [-6.9450, 110.4350],
    elevationMeters: 1,
    description: 'Kawasan pesisir delta aluvial yang mengalami penurunan tanah (land subsidence) hingga 10-15 cm/tahun memicu banjir pasang rob permanen.',
    topicId: 'permasalahan-permukiman-dan-perkotaan',
    significance: 'Laboratorium adaptasi tanggul laut dan pemompaan drainase rob pesisir.'
  },
  {
    id: 'morowali',
    name: 'Kawasan Industri Nikel Morowali (IMIP)',
    category: 'urban',
    coordinates: [-2.8250, 122.1550],
    elevationMeters: 30,
    description: 'Pusat pertumbuhan ekonomi hilirisasi nikel terbesar di Asia Tenggara dengan puluhan fasilitas peleburan smelter baterai kendaraan listrik.',
    topicId: 'pusat-pertumbuhan-growth-pole',
    significance: 'Studi kasus kutub pertumbuhan industri manufaktur ekstraktif di luar Jawa.'
  },
  {
    id: 'simeulue',
    name: 'Pulau Simeulue (Kearifan Lokal Smong)',
    category: 'geology',
    coordinates: [2.6167, 96.0833],
    elevationMeters: 40,
    description: 'Pulau terdepan barat Aceh yang selamat dari tsunami dahsyat 2004 berkat tradisi lisan turun-temurun "Smong" yang mengajarkan evakuasi instan ke bukit.',
    topicId: 'kesiapsiagaan-dan-peringatan-dini-bencana',
    significance: 'Bukti sahih kekuatan kearifan lokal dalam mitigasi bencana tsunami.'
  },

  // WORLD MAJOR PHENOMENA
  {
    id: 'everest',
    name: 'Gunung Everest (Himalaya Collision)',
    category: 'geology',
    coordinates: [27.9881, 86.9250],
    elevationMeters: 8848,
    description: 'Puncak tertinggi di bumi hasil orogenesis tumbukan Lempeng Benua India dengan Lempeng Benua Eurasia yang terus terdorong naik 4 mm/tahun.',
    topicId: 'tektonisme-dan-pergerakan-lempeng',
    significance: 'Titik tertinggi bumi dan hulu menara air gletser tumpuan 2 miliar penduduk Asia.'
  },
  {
    id: 'mariana',
    name: 'Palung Mariana (Challenger Deep)',
    category: 'geology',
    coordinates: [11.3733, 142.1950],
    elevationMeters: -10994,
    description: 'Palung samudra terdalam di planet bumi hasil subduksi Lempeng Pasifik tua yang meluncur menunjam ke bawah Lempeng Mariana.',
    topicId: 'oseanografi-dan-morfologi-dasar-laut',
    significance: 'Titik terdalam kerak bumi dan batas zona hadal ekosistem laut dalam.'
  },
  {
    id: 'suez',
    name: 'Terusan Suez (Suez Canal Chokepoint)',
    category: 'indonesia',
    coordinates: [30.5852, 32.2654],
    elevationMeters: 0,
    description: 'Terusan air buatan sepanjang 193 km yang menghubungkan Laut Merah dan Laut Mediterania, memangkas 9.000 km jarak pelayaran Asia-Eropa.',
    topicId: 'geografi-transportasi-dan-perdagangan',
    significance: 'Titik leher botol maritim dunia yang dilewati 12% total kargo perdagangan bumi.'
  },
  {
    id: 'hormuz',
    name: 'Selat Hormuz (Strait of Hormuz)',
    category: 'indonesia',
    coordinates: [26.5667, 56.2500],
    elevationMeters: 0,
    description: 'Selat strategis antara Oman dan Iran yang dilintasi 21 juta barel minyak mentah per hari, setara dengan seperlima konsumsi minyak bumi dunia.',
    topicId: 'geografi-transportasi-dan-perdagangan',
    significance: 'Urat nadi energi terpenting dan pusat persaingan geopolitik Teluk Persia.'
  },
  {
    id: 'amazon',
    name: 'Cekungan Hutan Amazon & Sungai Terbang',
    category: 'biosphere',
    coordinates: [-3.4653, -62.2159],
    elevationMeters: 80,
    description: 'Hutan hujan tropis terluas di dunia (5,5 juta km²) yang memompa triliunan liter uap air "Sungai Terbang" (Flying Rivers) penyeimbang iklim bumi.',
    topicId: 'karakteristik-kawasan-regional-amerika',
    significance: 'Penyerap karbon biologis raksasa penopang stabilitas iklim planet bumi.'
  },
  {
    id: 'greatbarrier',
    name: 'Great Barrier Reef (Queensland Australia)',
    category: 'biosphere',
    coordinates: [-18.2871, 147.6992],
    elevationMeters: 0,
    description: 'Gugusan terumbu karang terluas di dunia membentang 2.300 km. Mengalami krisis pemutihan massal (bleaching) berulang akibat gelombang panas samudra.',
    topicId: 'karakteristik-kawasan-regional-australia-oseania',
    significance: 'Indikator stres termal ekosistem laut akibat pemanasan global.'
  },
  {
    id: 'riftvalley',
    name: 'Lembah Retak Besar Afrika (East African Rift)',
    category: 'geology',
    coordinates: [0.5000, 36.0000],
    elevationMeters: 1800,
    description: 'Sistem patahan lempeng divergen daratan sepanjang 6.000 km yang sedang membelah lempeng benua Afrika timur dan melahirkan danau tektonik dalam.',
    topicId: 'karakteristik-kawasan-regional-afrika',
    significance: 'Laboratorium hidup proses pembentukan samudra baru di atas daratan benua.'
  },
  {
    id: 'thwaites',
    name: 'Gletser Kiamat Thwaites (Antarktika Barat)',
    category: 'climate',
    coordinates: [-75.5000, -106.7500],
    elevationMeters: 300,
    description: 'Gletser es raksasa penahan tudung es Antarktika Barat yang meleleh cepat dari bawah akibat arus laut hangat, berpotensi menaikkan muka laut 65 cm.',
    topicId: 'karakteristik-kawasan-kutub-antarktika-arktik',
    significance: 'Titik kritis (tipping point) kenaikan muka air laut kota-kota pesisir dunia.'
  },
  {
    id: 'tuvalu',
    name: 'Kepulauan Atol Tuvalu (Funafuti)',
    category: 'climate',
    coordinates: [-8.5211, 179.1963],
    elevationMeters: 2,
    description: 'Negara kepulauan atol Pasifik berdaratan rendah yang terancam tenggelam permanen ke dasar samudra dan merancang arsip negara digital kembar (Digital Twin).',
    topicId: 'karakteristik-kawasan-regional-australia-oseania',
    significance: 'Simbol garis depan korban krisis eksistensial pengungsi iklim (climate refugees).'
  },
  {
    id: 'atacama',
    name: 'Gurun Atacama & Segitiga Litium (Chili)',
    category: 'climate',
    coordinates: [-23.8634, -69.1328],
    elevationMeters: 2400,
    description: 'Gurun terkering di dunia dengan curah hujan nyaris 0 mm/tahun, menyimpan deposit air garam litium terbesar di bumi untuk baterai transisi energi bersih.',
    topicId: 'karakteristik-kawasan-regional-amerika',
    significance: 'Sentra pasokan mineral kritis litium untuk transisi mobilitas listrik global.'
  }
];
