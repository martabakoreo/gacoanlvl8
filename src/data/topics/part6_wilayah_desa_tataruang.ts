import { Topic } from '../../types/geography';

export const topicsPart6: Topic[] = [
  // ==========================================
  // CATEGORY L: Wilayah dan Pembangunan Regional (84-92)
  // ==========================================
  {
    id: 'konsep-wilayah-dan-pewilayahan',
    number: 84,
    title: 'Konsep Wilayah dan Pewilayahan',
    englishTitle: 'Concept of Region and Regionalization',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Intermediate',
    description: 'Menelaah hakikat wilayah (region) dalam kajian geografi: ruang (space), tempat (place), dan wilayah (region); kriteria batas delimitasi wilayah; serta esensi pewilayahan (regionalisasi) untuk menyederhanakan kompleksitas geosfer bagi perencanaan pembangunan nasional.',
    keywords: ['konsep wilayah', 'pewilayahan regionalisasi', 'ruang dan tempat', 'delimitasi wilayah', 'perencanaan regional'],
    learningObjectives: [
      'Menjelaskan perbedaan fundamental antara konsep ruang (space), tempat (place), dan wilayah (region).',
      'Mengidentifikasi tujuan dan metode delimitasi (penarikan batas) pewilayahan kualitatif dan kuantitatif.',
      'Menganalisis urgensi pewilayahan bagi perumusan kebijakan pembangunan dan alokasi anggaran daerah.'
    ],
    introduction: 'Dalam disiplin geografi, Wilayah (Region) adalah kesatuan area di permukaan bumi yang memiliki karakteristik khusus atau homogenitas tertentu yang membedakannya secara jelas dari area-area di sekitarnya. Wilayah bukanlah sekadar bentangan fisik di atas peta, melainkan ruang yang dipenuhi dinamika ekologis, ekonomi, dan sosial-budaya. Pewilayahan (Regionalisasi) adalah upaya sadar membagi-bagi ruang permukaan bumi ke dalam unit-unit wilayah yang lebih operasional guna memudahkan perencanaan spasial dan pemerataan pembangunan.',
    sections: [
      {
        subtitle: '1. Perbedaan Konseptual: Ruang, Tempat, dan Wilayah',
        content: 'Ketiga istilah ini memiliki tingkatan abstraksi yang berbeda:',
        table: {
          headers: ['Konsep Geografis', 'Istilah Bahasa Inggris', 'Definisi & Karakteristik Pokok', 'Contoh Nyata'],
          rows: [
            ['Ruang', 'Space', 'Wadah tiga dimensi universal yang mencakup darat, laut, dan udara beserta seluruh gejala biosfer yang belum diberi makna subjektif', 'Ruang udara NKRI, ruang laut Paparan Sunda'],
            ['Tempat', 'Place', 'Lokasi geografis tertentu yang telah dilekati oleh makna personal, historis, emosional, atau kultural oleh manusia (sense of place)', 'Alun-alun Keraton Surakarta, Kota Tua Jakarta'],
            ['Wilayah', 'Region', 'Kesatuan geografis yang dibatasi berdasarkan kesamaan karakteristik fisik atau kesatuan fungsional untuk tujuan operasional tertentu', 'Wilayah Sungai Citarum, Kawasan Jabodetabekjur']
          ]
        }
      },
      {
        subtitle: '2. Tujuan Strategis Pewilayahan (Regionalisasi)',
        content: 'Regionalisasi dilakukan bukan sekadar pengelompokan administratif, melainkan instrumen analitis:',
        keyPoints: [
          'Menyederhanakan Informasi Geosfer: Meringkas variasi bentang alam dan kependudukan yang sangat rumit menjadi klaster-klaster tematik yang terstruktur.',
          'Meratakan Pembangunan Antardaerah: Mengidentifikasi wilayah tertinggal atau terisolasi agar memperoleh afirmasi infrastruktur dan investasi modal.',
          'Efisiensi Koordinasi Penataan Ruang: Mengkoordinasikan kebijakan lintas batas administrasi kabupaten/kota (misalnya penanganan banjir DAS terpadu).',
          'Konservasi Ekologis Berkelanjutan: Membatasi zona lindung yang melintasi beberapa yurisdiksi politik (seperti kawasan ekosistem Leuser).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Metode Delimitasi Wilayah',
        items: [
          { name: 'Delimitasi Kualitatif', description: 'Penarikan batas wilayah berdasarkan observasi visual bentang alam, interpretasi foto udara, atau kesamaan adat istiadat tanpa rumus angka numerik.' },
          { name: 'Delimitasi Kuantitatif', description: 'Penentuan batas wilayah menggunakan indeks matematis, analisis gravitasi interaksi, matriks arus mobilitas penduduk, atau analisis klaster statistik GIS.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Parameter', title: 'Penetapan Variabel Pembeda', description: 'Memilih kriteria penentu pewilayahan (misal: curah hujan, tutupan lahan sawah, atau pendapatan per kapita).' },
      { stage: 'Pengumpulan Data Spasial', title: 'Overlay Peta Tematik', description: 'Menumpangsusunkan layer-layer geospasial menggunakan perangkat lunak Sistem Informasi Geografis (SIG).' },
      { stage: 'Delimitasi Batas', title: 'Penyusunan Zonasi Operasional', description: 'Menarik batas garis kontur pewilayahan resmi sebagai acuan kebijakan hukum RTRW.' }
    ],
    caseStudies: [
      {
        title: 'Pewilayahan Pembangunan Indonesia Menjadi 4 Wilayah Utama (Bappenas)',
        location: 'Nasional Republik Indonesia',
        description: 'Bappenas membagi wilayah Indonesia ke dalam 4 Wilayah Pembangunan Utama: Wilayah Utama A (pusat pertumbuhan Medan), Wilayah Utama B (pusat pertumbuhan Jakarta), Wilayah Utama C (pusat pertumbuhan Surabaya), dan Wilayah Utama D (pusat pertumbuhan Makassar). Pembagian regional ini dirancang agar kota-kota inti tersebut mampu menarik dan meneteskan dampak pertumbuhan ekonomi (spread effect) ke wilayah pedalaman di sekitarnya.',
        takeaway: 'Pewilayahan pembangunan makro mengarahkan investasi modal nasional secara terstruktur dan terkoordinasi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Hubungan Hirarkis: Ruang (Space), Tempat (Place), dan Wilayah (Region)',
        caption: 'Diagram transisi dari konsep ruang universal tanpa nama, menjadi tempat yang bermakna budaya, hingga wilayah formal berpembatas jelas.',
        badge: 'Spatial Concepts'
      }
    ],
    terminology: [
      { term: 'Wilayah (Region)', definition: 'Bagian dari permukaan bumi yang memiliki karakteristik tertentu yang khas dan berbeda dengan wilayah lain di sekelilingnya.', scientificTerm: 'Region' },
      { term: 'Pewilayahan (Regionalisasi)', definition: 'Proses pengelompokan dan pembagian permukaan bumi menjadi wilayah-wilayah tertentu berdasarkan kesamaan kriteria fisik, biotik, atau fungsional.', scientificTerm: 'Regionalization' },
      { term: 'Delimitasi', definition: 'Tindakan penentuan dan penarikan garis batas suatu wilayah secara spasial berdasarkan parameter ilmiah terukur.', scientificTerm: 'Delimitation' }
    ],
    summary: [
      'Wilayah adalah kesatuan spasial yang memiliki karakteristik pembeda spesifik di muka bumi.',
      'Ruang bersifat universal wadah fisik, tempat dilekati makna psikososial, dan wilayah didefinisikan untuk kepentingan analisis dan perencanaan.',
      'Pewilayahan bertujuan meratakan pembangunan, memudahkan koordinasi kebijakan lintas daerah, dan mengoptimalkan potensi lokal.'
    ],
    quiz: [
      {
        id: 'q84-1',
        question: 'Sebuah lokasi di tepi pantai yang mulanya hanya berupa bentang pasir tanpa nama, setelah didatangi sekelompok nelayan dan diberi nama Kampung Nelayan Berkah serta dijadikan tempat ritual sedekah laut, maka status ruang tersebut telah berubah menjadi konsep...',
        options: ['Ruang (Space)', 'Tempat (Place)', 'Wilayah nodal', 'Wilayah vernekular'],
        correctAnswer: 1,
        explanation: 'Konsep Tempat (Place) adalah ruang yang telah dilekati oleh makna personal, nilai emosional, budaya, atau sejarah oleh manusia.'
      },
      {
        id: 'q84-2',
        question: 'Tindakan membagi wilayah Indonesia ke dalam Wilayah Pembangunan Utama A, B, C, dan D oleh Bappenas guna menyederhanakan perencanaan spasial dan alokasi investasi modal nasional merupakan contoh dari penerapan...',
        options: ['Fisis determinisme', 'Pewilayahan (Regionalisasi)', 'Aglomerasi industri', 'Degradasi spasial'],
        correctAnswer: 1,
        explanation: 'Pewilayahan (regionalisasi) adalah upaya membagi permukaan bumi menjadi unit-unit wilayah berdasarkan kriteria khusus guna memudahkan perencanaan pembangunan.'
      }
    ],
    references: ['Glasson, J. (1974). An Introduction to Regional Planning. Hutchinson Educational.', 'Tarigan, R. (2005). Perencanaan Pembangunan Wilayah. Bumi Aksara.'],
    relatedTopicIds: ['wilayah-formal-dan-wilayah-fungsional', 'regionalisasi-dan-klasifikasi-wilayah', 'pusat-pertumbuhan-growth-pole', 'rencana-tata-ruang-wilayah-rtrw']
  },
  {
    id: 'wilayah-formal-dan-wilayah-fungsional',
    number: 85,
    title: 'Wilayah Formal dan Wilayah Fungsional',
    englishTitle: 'Formal Regions (Uniform) and Functional Regions (Nodal)',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Intermediate',
    description: 'Membedakan dua tipologi fundamental wilayah: Wilayah Formal (uniform/homogenous region) yang dicirikan keseragaman fisik atau sosial, dan Wilayah Fungsional (nodal region) yang dicirikan heterogenitas elemen yang dihubungkan oleh jaringan arus mobilitas dan titik simpul (node).',
    keywords: ['wilayah formal', 'wilayah fungsional nodal', 'uniform region', 'nodal region', 'titik simpul interaksi', 'hinterland'],
    learningObjectives: [
      'Menjelaskan karakteristik, kriteria, dan contoh wilayah formal (seragam/homogen).',
      'Menganalisis anatomi wilayah fungsional (nodal): titik simpul (node), wilayah belakang (hinterland), dan jaringan arus (flow).',
      'Membandingkan dinamika temporal perubahan batas antara wilayah formal yang statis dengan wilayah fungsional yang sangat dinamis.'
    ],
    introduction: 'Para ahli geografi mengklasifikasikan wilayah ke dalam dua kategori utama yang memiliki prinsip pembentukan bertolak belakang: Wilayah Formal (Uniform Region) dan Wilayah Fungsional (Nodal Region). Wilayah formal memandang ruang berdasarkan keseragaman atau homogenitas atribut (misalnya wilayah iklim tropis, wilayah suku Baduy, wilayah perkebunan kelapa sawit). Sebaliknya, wilayah fungsional memandang ruang berdasarkan interkoneksi, saling ketergantungan, dan arus pergerakan antara pusat pelayanan (nodus) dengan daerah penyangganya (hinterland).',
    sections: [
      {
        subtitle: '1. Komparasi Mendalam: Wilayah Formal vs Wilayah Fungsional',
        content: 'Perbedaan mendasar antara kedua konsep wilayah ditabulasikan berikut:',
        table: {
          headers: ['Aspek Pembeda', 'Wilayah Formal (Homogen/Uniform)', 'Wilayah Fungsional (Nodal/Organik)'],
          rows: [
            ['Dasar Pembentukan', 'Keseragaman atau kesamaan satu atau beberapa atribut (fisik, sosial, ekonomi)', 'Keterkaitan fungsional, saling ketergantungan arus barang, jasa, dan manusia'],
            ['Sifat Hubungan Antarunsur', 'Homogen (elemen di dalamnya memiliki karakteristik relatif seragam)', 'Heterogen namun terintegrasi erat melalui pembagian peran dan interaksi aktif'],
            ['Struktur Keruangan', 'Merata tanpa adanya kutub atau pusat pengendali tunggal', 'Memiliki hierarki simpul: titik pusat (core/node) dan wilayah penyangga (hinterland)'],
            ['Dinamika Batas', 'Cenderung statis atau perubahannya lambat dalam jangka panjang', 'Sangat dinamis, batasnya meluas atau menyusut mengikuti intensitas arus mobilitas'],
            ['Contoh Nyata', 'Wilayah karst Gunung Sewu, wilayah iklim basah Af, wilayah perkebunan teh Puncak', 'Metropolitan Jabodetabekpunjur, Wilayah Gerbangkertosusila, wilayah jangkauan sinyal 5G']
          ]
        }
      },
      {
        subtitle: '2. Tiga Elemen Penyusun Wilayah Fungsional (Nodal)',
        content: 'Wilayah fungsional beroperasi mirip organisme hidup yang terdiri dari organ dan pembuluh darah:',
        keyPoints: [
          'Titik Simpul (Node/Core): Titik sentral pemusatan aktivitas ekonomi, pemerintahan, atau perdagangan yang menjadi penggerak utama (contoh: Kota Jakarta).',
          'Wilayah Penyangga (Hinterland): Wilayah pinggiran atau pedalaman yang memasok bahan mentah, tenaga kerja, pangan, dan air bersih bagi titik pusat (contoh: Bogor, Depok, Tangerang, Bekasi).',
          'Jaringan Arus (Flow Network): Saluran transportasi dan komunikasi yang menghubungkan node dan hinterland (contoh: jalan tol, KRL commuter line, jaringan transmisi listrik, serat optik internet).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Pendekatan Wilayah Formal',
        items: [
          { name: 'Wilayah Formal Berdasarkan Kriteria Fisik', description: 'Dibatasi kesamaan bentang alam alami: peta jenis tanah vertisol, peta wilayah DAS Kapuas, peta ketinggian 0-500 mdpl.' },
          { name: 'Wilayah Formal Berdasarkan Kriteria Sosial-Budaya', description: 'Dibatasi kesamaan ciri manusia: peta persebaran bahasa Sunda, peta mayoritas agama Hindu di Bali, peta tingkat kemiskinan per kapita.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pemberian Pelayanan', title: 'Penyediaan Barang dan Jasa', description: 'Pusat kota menyediakan universitas, rumah sakit rujukan, dan pusat perbelanjaan grosir.' },
      { stage: 'Arus Umpan Balik', title: 'Mobilitas Komuter Harian', description: 'Ratusan ribu warga komuter dari kota satelit bergerak masuk menuju pusat setiap pagi dan pulang petang.' },
      { stage: 'Perluasan Wilayah Nodal', title: 'Konurbasi Megapolitan', description: 'Jangkauan pengaruh fungsional kota inti merembet menyerap desa-desa pedesaan menjadi pinggiran urban.' }
    ],
    caseStudies: [
      {
        title: 'Jabodetabekpunjur Sebagai Contoh Klasik Wilayah Fungsional Terbesar di Asia Tenggara',
        location: 'Kawasan Metropolitan Jakarta, Bogor, Depok, Tangerang, Bekasi, Puncak, Cianjur',
        description: 'Jabodetabekpunjur adalah wilayah fungsional raksasa dengan populasi lebih dari 32 juta jiwa. Jakarta berfungsi sebagai nodus bisnis perbankan dan kantor pusat multinasional, Depok dan Bekasi sebagai penyedia tenaga kerja komuter, Bogor dan Puncak sebagai daerah tangkapan air dan penyuplai sayuran segar, serta Tangerang sebagai kawasan industri logistik dan bandara internasional. Meskipun terbagi dalam 3 provinsi yang berbeda secara administratif (DKI, Jabar, Banten), kawasan ini menyatu secara fungsional dalam satu ekosistem interaksi harian.',
        takeaway: 'Wilayah fungsional melampaui sekat batas politik administratif demi pemenuhan kebutuhan hidup bersama.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Anatomi Spasial Wilayah Fungsional: Titik Pusat (Node), Hinterland, dan Arus Mobilitas',
        caption: 'Bagan lingkaran konsentris node di tengah dengan panah arus bolak-balik menghubungkan kota satelit dan pedesaan.',
        badge: 'Nodal Structure'
      }
    ],
    terminology: [
      { term: 'Wilayah Formal (Uniform Region)', definition: 'Wilayah yang dicirikan oleh keseragaman atau homogenitas internal tertentu baik aspek fisik maupun sosial.', scientificTerm: 'Formal / Homogeneous Region' },
      { term: 'Wilayah Fungsional (Nodal Region)', definition: 'Wilayah yang dicirikan oleh adanya ketergantungan fungsional antara pusat kegiatan (node) dengan wilayah di sekitarnya (hinterland).', scientificTerm: 'Functional / Nodal Region' },
      { term: 'Hinterland', definition: 'Wilayah penyangga atau pedalaman yang berada di luar inti kota yang memasok tenaga kerja, bahan pangan, dan sumber daya baku ke pusat.', scientificTerm: 'Hinterland' }
    ],
    summary: [
      'Wilayah formal berfokus pada keseragaman atribut (homogenitas) dan batasnya relatif statis.',
      'Wilayah fungsional berfokus pada hubungan timbal balik, saling ketergantungan arus pergerakan (nodus dan hinterland).',
      'Metropolitan Jabodetabek adalah representasi wilayah fungsional terintegrasi di Indonesia.'
    ],
    quiz: [
      {
        id: 'q85-1',
        question: 'Pengelompokan kawasan di Jawa Tengah bagian selatan yang sama-sama memiliki bentang alam batuan gamping karst dengan topografi dolina, uvala, dan gua kapur dinamakan penetapan...',
        options: ['Wilayah formal fisik', 'Wilayah fungsional nodal', 'Wilayah perencanaan sektoral', 'Wilayah metropolis'],
        correctAnswer: 0,
        explanation: 'Kawasan karst Gunung Sewu memiliki keseragaman bentang alam batuan kapur kapur, sehingga tergolong sebagai wilayah formal berdasarkan kriteria fisik.'
      },
      {
        id: 'q85-2',
        question: 'Ciri utama yang membedakan wilayah fungsional (nodal region) dari wilayah formal adalah keberadaan...',
        options: [
          'Keseragaman mata pencaharian penduduk',
          'Pusat kegiatan (nodus) yang dihubungkan dengan wilayah penyangga (hinterland) melalui arus interaksi mobilitas',
          'Kondisi iklim dan curah hujan yang seragam persis',
          'Batas wilayah yang kaku dan tidak pernah berubah selamanya'
        ],
        correctAnswer: 1,
        explanation: 'Wilayah fungsional dicirikan oleh keberadaan titik simpul inti (nodus) dan wilayah belakang (hinterland) yang saling berinteraksi melalui arus manusia, modal, dan barang.'
      }
    ],
    references: ['Whittlesey, D. (1954). The Regional Concept and the Regional Method. American Geography: Inventory and Prospect.', 'Haggett, P. (2001). Geography: A Global Synthesis. Prentice Hall.'],
    relatedTopicIds: ['konsep-wilayah-dan-pewilayahan', 'regionalisasi-dan-klasifikasi-wilayah', 'pusat-pertumbuhan-growth-pole', 'struktur-ruang-kota-dan-zonasi']
  },
  {
    id: 'regionalisasi-dan-klasifikasi-wilayah',
    number: 86,
    title: 'Regionalisasi dan Klasifikasi Wilayah',
    englishTitle: 'Regional Classification Systems and Methods',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Intermediate',
    description: 'Menganalisis sistem klasifikasi wilayah menurut para ahli geografi: Single Topic Region, Combined Topic Region, Multiple Topic Region, Total Region (Compage), serta klasifikasi Wilayah Perencanaan (Program Region, Resource Region, Administrative Region) untuk tata kelola pembangunan.',
    keywords: ['klasifikasi wilayah', 'single topic region', 'multiple topic region', 'total region compage', 'program region', 'wilayah administratif'],
    learningObjectives: [
      'Menjelaskan klasifikasi wilayah berdasarkan jumlah topik penentu (single, combined, multiple, hingga total region/compage).',
      'Menganalisis klasifikasi wilayah perencanaan untuk pengambilan kebijakan (planning region, resource region, administrative region).',
      'Mengevaluasi kesenjangan antara batas biogeofisik wilayah alami dengan batas administratif yurisdiksi pemerintahan.'
    ],
    introduction: 'Klasifikasi Wilayah adalah penggolongan sistematis unit-unit permukaan bumi ke dalam kelas-kelas spasial tertentu berdasarkan parameter yang telah disepakati. Tanpa klasifikasi wilayah, data sensus jutaan warga dan ribuan kilometer persegi lahan tidak akan mampu diolah menjadi kebijakan pembangunan yang terukur. Geografi mengklasifikasikan wilayah mulai dari yang paling sederhana (berdasarkan variabel tunggal) hingga wilayah komprehensif (compage) yang menggabungkan interaksi manusia dan alam seutuhnya.',
    sections: [
      {
        subtitle: '1. Klasifikasi Wilayah Berdasarkan Jumlah Fenomena yang Ditelaah',
        content: 'Berdasarkan kompleksitas variabel pembentuknya, wilayah diklasifikasikan ke dalam 4 tingkatan:',
        table: {
          headers: ['Tipe Klasifikasi Wilayah', 'Jumlah Kriteria Penentu', 'Definisi & Karakteristik Pokok', 'Contoh Nyata'],
          rows: [
            ['1. Single Topic Region', '1 Topik Tunggal', 'Wilayah yang batasnya ditarik hanya berdasarkan satu unsur geografi saja secara terisolasi', 'Peta wilayah jenis tanah aluvial, peta batas zona iklim Af'],
            ['2. Combined Topic Region', '2 atau Beberapa Topik Terkait', 'Wilayah yang ditarik berdasarkan kombinasi beberapa kriteria dari tema yang serumpun', 'Peta wilayah iklim-tanah untuk kecocokan varietas kelapa sawit'],
            ['3. Multiple Topic Region', 'Banyak Topik Lintas Disiplin', 'Wilayah yang ditarik berdasarkan integrasi berbagai variabel fisik dan sosial yang saling mempengaruhi', 'Peta wilayah pertanian basah tradisional (meliputi irigasi, sawah terasering, dan kelembagaan subak)'],
            ['4. Total Region (Compage)', 'Seluruh Kesatuan Geosfer', 'Konsep wilayah paripurna yang memadukan seluruh interaksi ekologis, kebudayaan, mata pencaharian, dan sejarah manusia dalam satu bentang darat', 'Masyarakat Agrikultur Lembah Sungai Nil, Masyarakat Pegunungan Andes']
          ]
        }
      },
      {
        subtitle: '2. Klasifikasi Wilayah Perencanaan Pembangunan (Planning Regions)',
        content: 'Dalam bidang perencanaan wilayah dan kota (PWK), wilayah dikelompokkan ke dalam fungsi operasional:',
        keyPoints: [
          'Wilayah Administratif (Administrative Region): Wilayah yang batasnya ditetapkan secara hukum peraturan perundang-undangan demi ketertiban birokrasi pemerintahan (provinsi, kabupaten, kota, kecamatan, kelurahan).',
          'Wilayah Sumber Daya (Resource Region): Wilayah yang dikelompokkan berdasarkan cadangan kekayaan alam potensial yang mendominasi perekonomian (misalnya Kawasan Tambang Migas Blok Cepu, Kawasan Konservasi Terumbu Karang Raja Ampat).',
          'Wilayah Perencanaan/Program (Planning/Program Region): Wilayah bentukan khusus yang ditetapkan pemerintah dengan aturan hukum istimewa untuk menggenjot akselerasi proyek strategis tertentu (contoh: Kawasan Ekonomi Khusus / KEK Sei Mangkei, Kawasan Strategis Pariwisata Nasional / KSPN Borobudur).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Friksi Batas Alami vs Batas Administratif',
        items: [
          { name: 'Batas Alami (Natural Boundaries)', description: 'Garis batas bentang alam seperti punggungan igir pegunungan pembagi air DAS atau palung sungai terdalam (thalweg).' },
          { name: 'Batas Artifisial (Geometric Boundaries)', description: 'Garis lurus garis lintang dan bujur yang ditarik manusia di peta tanpa mengindahkan kontur bumi (contoh: batas Papua dengan Papua Nugini).' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Multikriteria', title: 'Spatial Multi-Criteria Evaluation (SMCE)', description: 'Memberikan bobot skor persentase pada setiap layer peta tematik.' },
      { stage: 'Tumpang Susun (Overlay)', title: 'Kalkulasi Matriks Poligon SIG', description: 'Menggabungkan layer tanah, lereng, curah hujan, dan aksesibilitas jalan raya.' },
      { stage: 'Penetapan Zonasi', title: 'Legalisasi Perda RTRW', description: 'Mengesahkan peta penetapan wilayah lindung, penyangga, dan budi daya ke dalam Peraturan Daerah.' }
    ],
    caseStudies: [
      {
        title: 'Penetapan Kawasan Strategis Pariwisata Nasional (KSPN) Labuan Bajo sebagai Program Region',
        location: 'Kabupaten Manggarai Barat, Nusa Tenggara Timur, Indonesia',
        description: 'Pemerintah menetapkan Labuan Bajo sebagai KSPN "Super Prioritas" yang bertindak sebagai program region. Melalui penetapan ini, koordinasi anggaran lintas kementerian dipercepat: pembangunan runway bandara internasional Komodo, penataan dermaga marina, pembangunan jalan tol bypass, serta sistem proteksi kuota konservasi di Pulau Rinca dan Pulau Padar, terlepas dari keterbatasan anggaran lokal pemda.',
        takeaway: 'Program region mempercepat transformasi daerah tertinggal melalui intervensi pembangunan terpadu.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Hirarki Klasifikasi Wilayah: Dari Topik Tunggal hingga Total Region (Compage)',
        caption: 'Bagan piramida kompleksitas: Single Topic → Combined Topic → Multiple Topic → Total Region (Compage).',
        badge: 'Regional Taxonomy'
      }
    ],
    terminology: [
      { term: 'Single Topic Region', definition: 'Wilayah yang batas penetapannya didasarkan hanya pada satu fenomena atau variabel geografis tunggal.', scientificTerm: 'Single Topic Region' },
      { term: 'Compage (Total Region)', definition: 'Konsep geografi yang memandang suatu wilayah sebagai integrasi total antara manusia dengan seluruh elemen bentang alam lingkungannya.', scientificTerm: 'Compage' },
      { term: 'Program Region', definition: 'Wilayah yang sengaja dibentuk oleh pemerintah untuk pelaksanaan program pembangunan atau proyek ekonomi khusus.', scientificTerm: 'Planning Region' }
    ],
    summary: [
      'Klasifikasi wilayah terentang dari Single Topic Region hingga Total Region (Compage).',
      'Wilayah perencanaan mencakup wilayah administratif, wilayah sumber daya, dan wilayah program strategis (KEK/KSPN).',
      'Tantangan penataan ruang modern adalah menyelaraskan batas alami DAS dengan batas administratif pemda.'
    ],
    quiz: [
      {
        id: 'q86-1',
        question: 'Sebuah peta yang hanya menggambarkan zonasi batas persebaran tipe tanah andosol di lereng gunung api tanpa memasukkan unsur iklim atau kepadatan penduduk merupakan contoh dari...',
        options: ['Single Topic Region', 'Combined Topic Region', 'Multiple Topic Region', 'Total Region (Compage)'],
        correctAnswer: 0,
        explanation: 'Single topic region adalah klasifikasi wilayah yang delimitasinya hanya menggunakan satu variabel tunggal (dalam hal ini tipe tanah andosol).'
      },
      {
        id: 'q86-2',
        question: 'Kawasan Ekonomi Khusus (KEK) Mandalika di Lombok Tengah yang dibentuk pemerintah dengan regulasi fasilitas perpajakan khusus guna memacu investasi pariwisata internasional tergolong sebagai...',
        options: ['Natural region', 'Administrative region', 'Program / Planning Region', 'Single topic region'],
        correctAnswer: 2,
        explanation: 'KEK Mandalika adalah Program/Planning Region, yaitu wilayah yang sengaja dirancang dan diberi instrumen regulasi khusus untuk melaksanakan program akselerasi pembangunan.'
      }
    ],
    references: ['Whittlesey, D. (1954). The Regional Concept and the Regional Method.', 'Adisasmita, R. (2008). Pengembangan Wilayah: Teori dan Aplikasi. Graha Ilmu.'],
    relatedTopicIds: ['konsep-wilayah-dan-pewilayahan', 'wilayah-formal-dan-wilayah-fungsional', 'pusat-pertumbuhan-growth-pole', 'rencana-tata-ruang-wilayah-rtrw']
  },
  {
    id: 'pusat-pertumbuhan-growth-pole',
    number: 87,
    title: 'Pusat Pertumbuhan (Growth Pole)',
    englishTitle: 'Growth Poles and Regional Spread Effects',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Advanced',
    description: 'Menelaah sains pusat pertumbuhan (growth pole/center): faktor pemicu pembentukan pusat pertumbuhan, dampak polarisasi spasial, serta dinamika dialektika antara Efek Sebar (Spread Effect / Trickle-Down Effect) yang menguntungkan dengan Efek Backwash (Backwash Effect / Polarization) yang merugikan wilayah pedalaman.',
    keywords: ['pusat pertumbuhan', 'growth pole center', 'trickle down effect', 'spread effect', 'backwash effect', 'polarisasi spasial'],
    learningObjectives: [
      'Menjelaskan definisi pusat pertumbuhan (growth center) dan fungsi strategisnya dalam pembangunan regional.',
      'Menganalisis faktor-faktor geografis dan ekonomis pemicu lahirnya pusat pertumbuhan.',
      'Membandingkan konsep Trickle-Down Effect (Hirschman) / Spread Effect (Myrdal) dengan Backwash Effect terhadap ketimpangan spasial.'
    ],
    introduction: 'Pusat Pertumbuhan (Growth Center) adalah suatu kawasan atau titik geografis yang mengalami pertumbuhan ekonomi dan pembangunan fisik yang sangat cepat serta memiliki kemampuan menarik investasi modal, tenaga kerja, dan aktivitas industri, sehingga mampu memancarkan pengaruh perkembangan ke wilayah-wilayah penyangga di sekitarnya. Keberadaan pusat pertumbuhan dirancang oleh perencana wilayah sebagai "mesin penarik lokomotif" untuk mengangkat kesejahteraan daerah pedalaman yang tertinggal.',
    sections: [
      {
        subtitle: '1. Dua Kekuatan Dialektika Spasial: Spread Effect vs Backwash Effect',
        content: 'Pakar ekonomi geografi Gunnar Myrdal dan Albert Hirschman merumuskan dua fenomena yang berlawanan:',
        table: {
          headers: ['Fenomena Interaksi', 'Pencetus Teori', 'Arah & Karakteristik Arus', 'Dampak Nyata bagi Wilayah Pinggiran'],
          rows: [
            ['1. Spread Effect / Trickle-Down Effect', 'Gunnar Myrdal (Spread) & Albert Hirschman (Trickle-Down)', 'Arus menetes dari pusat kota mengalir keluar menuju daerah pedalaman di sekitarnya', 'Positif: Permintaan hasil tani pedalaman meningkat tajam, transfer teknologi modern, terbukanya lapangan kerja industri, fasilitas jalan raya meluas ke desa'],
            ['2. Backwash Effect / Polarization Effect', 'Gunnar Myrdal (Backwash) & Albert Hirschman (Polarization)', 'Arus menguras menyerap dari daerah pedalaman tersedot masuk ke pusat kota', 'Negatif: Penarikan modal uang ke bank kota besar, perpindahan pemuda terdidik (brain drain) ke metropolitan, desa kehilangan tenaga kerja potensial, ketimpangan ekonomi melebar']
          ]
        }
      },
      {
        subtitle: '2. Empat Faktor Penentu Lahirnya Pusat Pertumbuhan',
        content: 'Sebuah wilayah berkembang menjadi pusat pertumbuhan karena empat faktor pendukung:',
        keyPoints: [
          'Kondisi Fisik dan Lokasi Geografis: Lokasi strategis di persimpangan selat pelayaran internasional, muara sungai besar, atau dataran aluvial subur.',
          'Kekayaan Sumber Daya Alam: Cadangan mineral melimpah (emas, minyak bumi, nikel, batubara) yang memicu aglomerasi hilirisasi industri.',
          'Aksesibilitas dan Konektivitas Jaringan: Keberadaan pelabuhan laut dalam, bandara internasional, jalur rel kereta api, dan jalan tol bebas hambatan.',
          'Kualitas Sumber Daya Manusia (SDM): Ketersediaan tenaga kerja terampil, pusat riset universitas, iklim investasi ramah bisnis, dan stabilitas keamanan hukum.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Hirarki Pusat Pertumbuhan Nasional Indonesia',
        items: [
          { name: 'Pusat Orde I (Metropolitan Primer)', description: 'Kota Jakarta dan Surabaya yang mengendalikan sistem perbankan nasional, kantor bursa, dan ekspor-impor utama.' },
          { name: 'Pusat Orde II (Pusat Regional Utama)', description: 'Kota Medan, Makassar, Balikpapan, Denpasar, dan Semarang yang melayani wilayah kepulauan besar.' },
          { name: 'Pusat Orde III (Pusat Lokal Kabupaten)', description: 'Kota-kota kabupaten yang menyediakan pasar induk, rumah sakit umum daerah, dan perguruan tinggi daerah.' }
        ]
      }
    ],
    processes: [
      { stage: 'Fase Inisiasi', title: 'Investasi Industri Pendorong (Propulsive)', description: 'Pemerintah atau korporasi mendirikan pabrik peleburan nikel (smelter) raksasa.' },
      { stage: 'Fase Polarisasi', title: 'Penyedotan Tenaga Kerja (Backwash)', description: 'Ribuan pemuda dari pulau sekitar bermigrasi masuk mencari nafkah ke kota industri.' },
      { stage: 'Fase Difusi', title: 'Penyebaran Kesejahteraan (Spread Effect)', description: 'Pajak daerah dan upah pekerja dibelanjakan untuk membangun jalan, toko grosir, dan pertanian modern di desa sekitar.' }
    ],
    caseStudies: [
      {
        title: 'Transformasi Morowali: Dari Desa Pesisir Terpencil Menjadi Pertumbuhan Nikel Global',
        location: 'Kecamatan Bahodopi, Kabupaten Morowali, Sulawesi Tengah, Indonesia',
        description: 'Pembangunan kawasan industri pengolahan nikel Indonesia Morowali Industrial Park (IMIP) merevolusi lanskap ekonomi Sulawesi Tengah. Dari kawasan pertanian subsisten terpencil, Morowali menjelma menjadi pusat pertumbuhan ekonomi nikel terbesar dengan perputaran uang puluhan triliun rupiah per tahun. Meskipun memicu spread effect berupa pertumbuhan rumah kos, supermarket, dan restoran lokal, timbul pula backwash effect berupa degradasi kualitas lingkungan pesisir dan kenaikan biaya hidup drastis.',
        takeaway: 'Pusat pertumbuhan industri ekstraktif membutuhkan mitigasi ketat agar tidak menimbulkan enclave economy.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Dinamika Spasial Pusat Pertumbuhan: Polarisasi Backwash Effect vs Menetesnya Spread Effect',
        caption: 'Bagan vektor panah: Panah penyedot modal & tenaga kerja masuk ke Core (Backwash), panah radiasi teknologi & pasar ke Periphery (Spread).',
        badge: 'Growth Polarization'
      }
    ],
    terminology: [
      { term: 'Pusat Pertumbuhan (Growth Center)', definition: 'Kawasan yang tumbuh sangat pesat dan menjadi motor penggerak pembangunan bagi kawasan di sekelilingnya.', scientificTerm: 'Growth Pole / Center' },
      { term: 'Spread Effect', definition: 'Pengaruh positif yang ditimbulkan oleh pusat pertumbuhan terhadap kemajuan wilayah penyangga di sekitarnya.', scientificTerm: 'Spread Effect' },
      { term: 'Backwash Effect', definition: 'Pengaruh negatif yang merugikan wilayah pedalaman akibat terkurasnya modal, bahan baku, dan tenaga kerja muda ke pusat pertumbuhan.', scientificTerm: 'Backwash Effect' }
    ],
    summary: [
      'Pusat pertumbuhan adalah motor lokomotif akselerasi ekonomi regional.',
      'Gunnar Myrdal merumuskan teori Polarized Growth dengan dialektika Spread Effect dan Backwash Effect.',
      'Tujuan perencanaan wilayah adalah memperbesar Spread Effect dan meminimalkan Backwash Effect pada desa penyangga.'
    ],
    quiz: [
      {
        id: 'q87-1',
        question: 'Fenomena terkurasnya pemuda-pemuda terdidik dan modal tabungan dari desa-desa pedesaan yang tersedot masuk ke kota metropolitan Jakarta sehingga memicu kemandekan pembangunan di pedesaan oleh Gunnar Myrdal diistilahkan sebagai...',
        options: ['Trickle-down effect', 'Spread effect', 'Backwash effect', 'Aglomerasi lestari'],
        correctAnswer: 2,
        explanation: 'Backwash effect adalah dampak negatif di mana pusat pertumbuhan justru menyedot habis sumber daya potensial (tenaga kerja muda terdidik dan modal) dari wilayah pedalaman.'
      },
      {
        id: 'q87-2',
        question: 'Dampak positif yang dirasakan masyarakat desa penyangga berupa terserapnya hasil panen sayuran petani lokal oleh pasar swalayan di kota pusat pertumbuhan dinamakan...',
        options: ['Spread effect (efek sebar)', 'Enclave economy', 'Degradasi spasial', 'Slum area'],
        correctAnswer: 0,
        explanation: 'Spread effect (atau Trickle-down effect menurut Hirschman) adalah transmisi dampak positif dan permintaan barang dari pusat pertumbuhan menuju wilayah pedalaman sekitarnya.'
      }
    ],
    references: ['Myrdal, G. (1957). Economic Theory and Under-developed Regions. Duckworth.', 'Hirschman, A. O. (1958). The Strategy of Economic Development. Yale University Press.'],
    relatedTopicIds: ['teori-kutub-pertumbuhan-perroux', 'teori-tempat-sentral-christaller', 'interaksi-antarwilayah-dan-konektivitas', 'model-gravitasi-reilly-dan-carrothers']
  },
  {
    id: 'teori-tempat-sentral-christaller',
    number: 88,
    title: 'Teori Tempat Sentral Walter Christaller',
    englishTitle: 'Walter Christaller Central Place Theory (K=3, K=4, K=7)',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Advanced',
    description: 'Menguasai Teori Tempat Sentral (Central Place Theory) karya Walter Christaller (1933): asumsi lanskap isotropik homogen, konsep Jangkauan (Range) dan Ambang Batas (Threshold), geometri jaringan heksagonal, serta 3 asas hierarki hierarkis (Asas Pasar K=3, Asas Lalu Lintas K=4, dan Asas Administrasi K=7).',
    keywords: ['teori tempat sentral', 'walter christaller', 'range dan threshold', 'k=3 asas pasar', 'k=4 asas transportasi', 'k=7 asas administrasi', 'jaringan heksagonal'],
    learningObjectives: [
      'Menjelaskan konsep Tempat Sentral (Central Place), Jangkauan (Range), dan Ambang Batas (Threshold).',
      'Memahami alasan matematis pemilihan bentuk heksagonal (segi enam) dalam pemodelan ruang tanpa tumpang tindih.',
      'Menganalisis rumus pembagian wilayah pengaruh hierarki tempat sentral Christaller: K=3 (pasar), K=4 (lalu lintas), dan K=7 (administrasi pemerintahan).'
    ],
    introduction: 'Pada tahun 1933, geografer Jerman Walter Christaller menerbitkan karya monumental "Die zentralen Orte in Süddeutschland" yang meletakkan dasar Teori Tempat Sentral (Central Place Theory). Christaller berusaha menjawab pertanyaan spasial mendasar: "Apakah ada hukum keteraturan matematis yang menentukan jumlah, ukuran, dan persebaran spasial kota-kota di muka bumi?" Model ini membuktikan bahwa permukiman perkotaan tertata rapi dalam sistem hierarki heksagonal yang saling mengunci untuk menyediakan barang dan jasa secara efisien.',
    sections: [
      {
        subtitle: '1. Dua Konsep Kunci: Range dan Threshold',
        content: 'Christaller mendasarkan teorinya pada dua variabel ekonomi spasial:',
        keyPoints: [
          'Range (Jangkauan Maksimum): Jarak maksimum yang bersedia ditempuh oleh konsumen untuk membeli suatu barang atau memanfaatkan suatu jasa pelayanan (contoh: membeli garam jangkauannya pendek, membeli mobil atau operasi jantung jangkauannya sangat jauh).',
          'Threshold (Ambang Batas Minimum): Jumlah populasi penduduk minimal yang mutlak dibutuhkan untuk menopang kelangsungan hidup suatu unit usaha perdagangan atau layanan jasa agar tidak merugi (contoh: warung kelontong butuh ambang batas 50 keluarga, bioskop butuh 50.000 penduduk).',
          'Syarat Kelayakan Usaha: Suatu tempat sentral baru dapat beroperasi secara menguntungkan apabila Range lebih besar daripada Threshold (Range > Threshold).'
        ]
      },
      {
        subtitle: '2. Tiga Asas Hierarki Tempat Sentral (K=3, K=4, K=7)',
        content: 'Berdasarkan nilai koefisien K, Christaller membagi hierarki tempat sentral menjadi 3 asas:',
        table: {
          headers: ['Asas Hierarki Christaller', 'Nilai Koefisien K', 'Prinsip Pembagian Pengaruh Wilayah', 'Ciri Karakteristik Utama'],
          rows: [
            ['Asas Pasar Optimal (Marketing Principle)', 'K = 3', 'Pusat melayani dirinya sendiri (1) ditambah 1/3 bagian dari 6 wilayah heksagonal di sekitarnya: 1 + 6(1/3) = 3', 'Menyediakan lokasi pasar paling optimal di mana seluruh warga memiliki jarak terdekat menuju pusat perbelanjaan barang'],
            ['Asas Lalu Lintas / Transportasi (Transport Principle)', 'K = 4', 'Pusat melayani dirinya sendiri (1) ditambah 1/2 bagian dari 6 wilayah heksagonal di sekitarnya: 1 + 6(1/2) = 4', 'Rute jalan raya lurus paling efisien menghubungkan kota-kota penting tanpa pembelokan boros biaya transportasi'],
            ['Asas Administrasi Pemerintahan (Administrative Principle)', 'K = 7', 'Pusat melayani dirinya sendiri (1) ditambah seluruh bagian penuh (1) dari 6 wilayah heksagonal di sekitarnya: 1 + 6(1) = 7', 'Tidak ada pembagian wilayah administrasi; seluruh kota satelit berada di bawah yurisdiksi kendali hukum satu ibukota distrik']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Asumsi Dasar Model Christaller',
        items: [
          { name: 'Permukaan Isotropik Datar', description: 'Bentang alam diandaikan datar sempurna tanpa gunung, sungai perintang, atau perbedaan iklim.' },
          { name: 'Persebaran Penduduk Merata', description: 'Kepadatan penduduk dan daya beli masyarakat diandaikan seragam di seluruh titik ruang.' },
          { name: 'Rasionalitas Ekonomi Konsumen', description: 'Konsumen selalu memilih tempat pelayanan terdekat untuk meminimalkan biaya perjalanan (economic man).' }
        ]
      }
    ],
    processes: [
      { stage: 'Lingkaran Pengaruh Awal', title: 'Jangkauan Pelayanan Melingkar', description: 'Setiap toko memiliki radius pelayanan melingkar (circular range).' },
      { stage: 'Tumpang Tindih / Area Kosong', title: 'Friksi Spasial Antartoko', description: 'Lingkaran-lingkaran saling bersentuhan menyisakan ruang tak terlayani atau tumpang tindih.' },
      { stage: 'Kristalisasi Heksagonal', title: 'Kompensasi Poligon Segi Enam', description: 'Tekanan spasial mengubah bentuk lingkaran menjadi jaringan heksagonal heksagonal sempurna tanpa celah.' }
    ],
    caseStudies: [
      {
        title: 'Hierarki Pelayanan Perkotaan di Dataran Aluvial Jawa Tengah dan D.I. Yogyakarta',
        location: 'Wilayah Yogyakarta – Sleman – Bantul – Klaten, Indonesia',
        description: 'Pola persebaran permukiman di dataran subur lereng Gunung Merapi sering dijadikan studi kasus riil teori Christaller di Indonesia. Yogyakarta berfungsi sebagai tempat sentral orde tinggi (universitas, rumah sakit spesialis, mall besar), dikelilingi kota-kota kecamatan orde menengah (Pasar Sleman, Pasar Bantul) yang menyediakan kebutuhan pokok mingguan, dan dikitari ribuan warung sembako desa pada tingkat threshold terendah.',
        takeaway: 'Keteraturan spasial hierarki Christaller dapat terwujud nyata di wilayah dataran aluvial berpenduduk padat.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Geometri Jaringan Heksagonal Tempat Sentral Christaller: Model K=3, K=4, dan K=7',
        caption: 'Bagan segi enam bertingkat dengan titik pusat simpul melayani 1/3 (K=3), 1/2 (K=4), dan 1/1 (K=7) tetangganya.',
        badge: 'Central Place Geometry'
      }
    ],
    terminology: [
      { term: 'Tempat Sentral (Central Place)', definition: 'Titik permukiman perkotaan yang menyediakan barang dan jasa bagi penduduk wilayah pedalaman di sekelilingnya.', scientificTerm: 'Central Place' },
      { term: 'Range (Jangkauan)', definition: 'Jarak maksimum yang rela ditempuh oleh konsumen untuk memperoleh barang atau layanan jasa yang diinginkan.', scientificTerm: 'Range of a Good' },
      { term: 'Threshold (Ambang Batas)', definition: 'Jumlah minimal populasi konsumen yang dibutuhkan untuk mempertahankan eksistensi penawaran barang atau jasa.', scientificTerm: 'Threshold Population' }
    ],
    summary: [
      'Walter Christaller merumuskan Teori Tempat Sentral pada lanskap isotropik berbentuk heksagonal.',
      'Dua parameter utamanya adalah Range (jarak tempuh maksimum konsumen) dan Threshold (pasar minimal kelayakan usaha).',
      'Tiga asas hierarki: K=3 (Asas Pasar), K=4 (Asas Transportasi), dan K=7 (Asas Administrasi Pemerintahan).'
    ],
    quiz: [
      {
        id: 'q88-1',
        question: 'Menurut Walter Christaller, bentuk geometris yang paling sempurna untuk menggambarkan batas pengaruh tempat sentral agar tidak ada area yang kosong dan tidak ada tumpang tindih pelayanan adalah bentuk...',
        options: ['Lingkaran bulat', 'Segitiga sama sisi', 'Heksagonal (segi enam)', 'Persegi empat'],
        correctAnswer: 2,
        explanation: 'Bentuk heksagonal (segi enam) adalah satu-satunya bentuk simetris yang mampu menutup bidang datar secara utuh tanpa meninggalkan celah kosong maupun daerah tumpang tindih.'
      },
      {
        id: 'q88-2',
        question: 'Sebuah tempat sentral berhierarki K = 4 dalam teori Christaller dikenal sebagai tempat sentral dengan asas...',
        options: ['Asas Pasar Optimum', 'Asas Lalu Lintas / Transportasi Maksimum', 'Asas Administrasi Pemerintahan', 'Asas Konservasi Sumber Daya'],
        correctAnswer: 1,
        explanation: 'Hierarki K=4 adalah Asas Transportasi (Traffic/Transport Principle), di mana rute jalan raya lurus menghubungkan tempat sentral dengan melayani 1/2 wilayah dari 6 tetangganya (1 + 6×1/2 = 4).'
      }
    ],
    references: ['Christaller, W. (1933). Die zentralen Orte in Süddeutschland. Fischer.', 'Berry, B. J. L., & Garrison, W. L. (1958). Recent Developments of Central Place Theory. Regional Science.'],
    relatedTopicIds: ['pusat-pertumbuhan-growth-pole', 'teori-kutub-pertumbuhan-perroux', 'model-gravitasi-reilly-dan-carrothers', 'teori-titik-henti-breaking-point']
  },
  {
    id: 'teori-kutub-pertumbuhan-perroux',
    number: 89,
    title: 'Teori Kutub Pertumbuhan Francois Perroux',
    englishTitle: 'Francois Perroux Growth Pole Theory and Hirschman Dialectics',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Advanced',
    description: 'Menelaah Teori Kutub Pertumbuhan (Pôle de Croissance) yang dicetuskan ekonom Prancis François Perroux (1955), konsep ruang ekonomi abstrak vs ruang geografis terestrial, peran Industri Pendorong (Propulsive Industry), keterkaitan ke hulu (Backward Linkage) dan ke hilir (Forward Linkage) Albert Hirschman.',
    keywords: ['teori kutub pertumbuhan', 'francois perroux', 'industri pendorong propulsive', 'backward linkage', 'forward linkage', 'ruang ekonomi abstrak'],
    learningObjectives: [
      'Menjelaskan definisi kutub pertumbuhan menurut François Perroux dan perbedaannya dengan pusat pertumbuhan fisik.',
      'Menganalisis karakteristik Industri Pendorong (Industrie Motrice / Propulsive Industry).',
      'Mengevaluasi konsep Keterkaitan ke Belakang (Backward Linkages) dan Keterkaitan ke Depan (Forward Linkages) dalam rantai nilai regional.'
    ],
    introduction: 'Pada tahun 1955, ekonom terkemuka Prancis François Perroux merumuskan konsep revolusioner: "Pembangunan tidak muncul di semua tempat secara serempak; pembangunan muncul pada titik-titik atau kutub-kutub pertumbuhan (pôles de croissance) dengan intensitas yang bervariasi; ia menyebar melalui berbagai saluran dan memberikan pengaruh akhir yang beragam terhadap keseluruhan perekonomian." Gagasan Perroux ini awalnya berpijak pada konsep Ruang Ekonomi Abstrak (hubungan antar-sektor industri), yang kemudian diadopsi para geografer (seperti Jacques Boudeville) ke dalam Ruang Geografis Nyata.',
    sections: [
      {
        subtitle: '1. Industri Pendorong (Propulsive Industry / Industrie Motrice)',
        content: 'Inti dari sebuah kutub pertumbuhan adalah keberadaan industri kunci pendorong yang memiliki daya ungkit raksasa:',
        keyPoints: [
          'Skala Produksi Raksasa: Memiliki kapasitas pabrik dan perputaran modal sangat masif (contoh: pabrik baja terpadu Krakatau Steel, industri kedirgantaraan PTDI).',
          'Tingkat Inovasi Teknologi Tinggi: Menggunakan teknologi mutakhir dan mempekerjakan tenaga riset sains berkeahlian tinggi.',
          'Elastisitas Permintaan Tinggi: Produk yang dihasilkan memiliki pasar ekspor atau domestik yang terus bertumbuh cepat.',
          'Daya Tarik Aglomerasi: Menarik ratusan industri pendukung, bengkel subkontraktor, dan perbankan berkumpul di sekelilingnya.'
        ]
      },
      {
        subtitle: '2. Keterkaitan ke Belakang (Backward) vs Keterkaitan ke Depan (Forward)',
        content: 'Albert O. Hirschman memperkaya teori kutub dengan konsep rantai keterkaitan keterkaitan produksi:',
        table: {
          headers: ['Dimensi Keterkaitan', 'Arah Aliran Rantai Pasok', 'Mekanisme Rangsangan Ekonomi', 'Contoh Nyata Industri Otomotif'],
          rows: [
            ['Keterkaitan ke Belakang (Backward Linkage)', 'Mengarah ke hulu (pemasok bahan mentah dan komponen suku cadang)', 'Pabrik perakitan mobil merangsang lahirnya industri tambang bijih besi, pabrik ban karet lokal, pabrik kaca mobil, dan kabel aki', 'Meningkatkan permintaan karet alam milik petani lokal di perkebunan'],
            ['Keterkaitan ke Depan (Forward Linkage)', 'Mengarah ke hilir (pengguna produk akhir dan pemanfaatan turunan)', 'Mobil yang selesai dirakit memicu tumbuhnya industri jaringan dealer purna jual, bengkel resmi, jasa asuransi kendaraan, perusahaan leasing pembiayaan, dan jasa rental', 'Menciptakan jutaan lapangan kerja di sektor jasa transportasi dan perdagangan']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Evolusi Konsep Ruang Perroux ke Boudeville',
        items: [
          { name: 'Ruang Abstrak Perroux', description: 'Kutub pertumbuhan berupa matrik hubungan input-output antar-sektor ekonomi tanpa memandang lokasi geografisnya di bumi.' },
          { name: 'Ruang Geografis Boudeville', description: 'Menerjemahkan kutub ekonomi abstrak ke dalam lokasi kota riil di peta (misalnya mendirikan kawasan industri manufaktur di Cikarang).' }
        ]
      }
    ],
    processes: [
      { stage: 'Penanaman Modal Awal', title: 'Pembangunan Industri Propulsif', description: 'Pemerintah membangun pabrik petrokimia raksasa di tepi pelabuhan laut dalam.' },
      { stage: 'Multiplikasi Ekonomi', title: 'Pertumbuhan Industri Ikutan', description: 'Puluhan pabrik plastik, serat sintetis pakaian, dan cat bermunculan memanfaatkan bahan baku petrokimia.' },
      { stage: 'Penyebaran Regional', title: 'Peningkatan Daya Beli Warga', description: 'Perekonomian seluruh provinsi terangkat berkat upah pekerja dan pajak daerah.' }
    ],
    caseStudies: [
      {
        title: 'Krakatau Steel Cilegon: Transformasi Kota Baja Berbasis Industri Propulsif',
        location: 'Kota Cilegon, Banten, Indonesia',
        description: 'Pembangunan pabrik baja Krakatau Steel pada era 1970-an menjadi kutub pertumbuhan utama Banten barat. Melalui backward linkage, pabrik ini menyerap pasokan gas alam dan batu bara; melalui forward linkage, lembaran baja yang diproduksi memicu tumbuhnya galangan kapal di Merak, pabrik pipa minyak, dan konstruksi gedung di seluruh nusantara. Cilegon bermetamorfosis dari desa pelabuhan sepi menjadi pusat industri berat nasional.',
        takeaway: 'Industri propulsif berkemampuan menciptakan efek domino kemajuan lintas sektor ekonomi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Rantai Nilai Keterkaitan Industri Kutub Pertumbuhan: Backward vs Forward Linkage',
        caption: 'Diagram alir pabrik propulsif di tengah: Panah hulu Backward (bahan baku) dan panah hilir Forward (dealer, jasa, produk turunan).',
        badge: 'Linkage Architecture'
      }
    ],
    terminology: [
      { term: 'Kutub Pertumbuhan (Pôle de Croissance)', definition: 'Sekelompok industri pendorong yang dinamis yang mampu membangkitkan pertumbuhan ekonomi melalui hubungan input-output.', scientificTerm: 'Growth Pole' },
      { term: 'Industri Pendorong (Propulsive Industry)', definition: 'Industri berskala besar dengan inovasi tinggi yang mampu menstimulasi perkembangan industri-industri lain di sekitarnya.', scientificTerm: 'Industrie Motrice' },
      { term: 'Backward Linkage', definition: 'Hubungan keterkaitan suatu industri ke sektor hulu yang memasok bahan baku atau komponen produksi.', scientificTerm: 'Backward Linkage' }
    ],
    summary: [
      'François Perroux merumuskan pembangunan bermula dari kutub-kutub pertumbuhan yang tidak merata.',
      'Industri pendorong (propulsive) menjadi inti penarik aglomerasi ekonomi regional.',
      'Keterkaitan ke belakang (backward) menggerakkan pemasok hulu; keterkaitan ke depan (forward) menggerakkan sektor jasa dan pemakai hilir.'
    ],
    quiz: [
      {
        id: 'q89-1',
        question: 'Dalam Teori Kutub Pertumbuhan François Perroux, jenis industri yang menjadi motor penggerak utama pertumbuhan ekonomi karena memiliki skala raksasa, inovasi teknologi canggih, dan mampu merangsang industri lain disebut...',
        options: ['Industri subsisten', 'Industri pendorong (propulsive industry / industrie motrice)', 'Industri padat karya tradisional', 'Industri rumah tangga'],
        correctAnswer: 1,
        explanation: 'Industri pendorong (propulsive industry) adalah industri kunci yang memiliki skala teknologi dan kapital raksasa yang menjadi mesin utama penggerak kutub pertumbuhan.'
      },
      {
        id: 'q89-2',
        question: 'Berdirinya pabrik peleburan nikel (smelter) yang kemudian mendorong berkembangnya bengkel perbaikan mesin alat berat, penyedia katering makan karyawan, dan jasa logistik bahan tambang merupakan wujud dari efek keterkaitan...',
        options: ['Keterkaitan ke belakang (Backward Linkage)', 'Keterkaitan ke depan (Forward Linkage)', 'Degradasi lingkungan', 'Isotropik lanskap'],
        correctAnswer: 0,
        explanation: 'Backward linkage (keterkaitan ke belakang/hulu) adalah dampak rangsangan ekonomi terhadap sektor pemasok barang modal, bahan baku, dan jasa pendukung operasional pabrik.'
      }
    ],
    references: ['Perroux, F. (1955). Note sur la notion de pôle de croissance. Économie Appliquée.', 'Boudeville, J. R. (1966). Problems of Regional Economic Planning. Edinburgh University Press.'],
    relatedTopicIds: ['pusat-pertumbuhan-growth-pole', 'teori-tempat-sentral-christaller', 'interaksi-antarwilayah-dan-konektivitas', 'model-gravitasi-reilly-dan-carrothers']
  },
  {
    id: 'interaksi-antarwilayah-dan-konektivitas',
    number: 90,
    title: 'Interaksi Antarwilayah dan Konektivitas',
    englishTitle: 'Spatial Interaction, Complementarity, and Network Connectivity',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Intermediate',
    description: 'Menelaah sains interaksi keruangan (spatial interaction): tiga faktor penentu interaksi menurut Edward Ullman (Regional Complementarity, Intervening Opportunity, dan Spatial Transferability); serta perhitungan Indeks Konektivitas Jaringan Transportasi K.J. Kansky.',
    keywords: ['interaksi keruangan', 'edward ullman', 'regional complementarity', 'intervening opportunity', 'spatial transferability', 'indeks konektivitas kansky'],
    learningObjectives: [
      'Menjelaskan definisi interaksi antarwilayah dan bentuk manifestasi mobilitasnya.',
      'Menganalisis 3 prinsip interaksi spasial Edward Ullman (komplementaritas, kesempatan antara, kemudahan transfer).',
      'Menghitung Indeks Konektivitas jaringan wilayah menurut teori grafik K.J. Kansky (Beta Index = e / v).'
    ],
    introduction: 'Interaksi Antarwilayah (Spatial Interaction) adalah hubungan timbal balik yang saling mempengaruhi antara dua wilayah atau lebih yang melahirkan gejala, kenampakan, dan permasalahan baru melalui pergerakan manusia, barang, modal, gagasan, dan informasi. Tidak ada satu pun wilayah di muka bumi yang mampu berdiri sendiri memenuhi seluruh kebutuhan hidup penduduknya. Perbedaan potensi sumber daya alam dan keahlian manusia memicu terjadinya interaksi spasial yang dirajut oleh jaringan konektivitas transportasi.',
    sections: [
      {
        subtitle: '1. Tiga Syarat Interaksi Keruangan Menurut Edward Ullman',
        content: 'Geografer Edward Ullman (1956) merumuskan 3 faktor fundamental pemicu interaksi spasial:',
        table: {
          headers: ['Prinsip Interaksi Ullman', 'Istilah Bahasa Inggris', 'Makna dan Mekanisme Kerja', 'Contoh Nyata di Indonesia'],
          rows: [
            ['1. Wilayah yang Saling Melengkapi', 'Regional Complementarity', 'Adanya surplus komoditas di satu wilayah yang berpasangan dengan defisit komoditas tersebut di wilayah lain', 'Wilayah pegunungan Dieng surplus sayuran kol dan kentang namun defisit garam dan ikan asin, sedangkan pantai Tegal surplus garam dan ikan asin namun defisit sayuran. Terjadi interaksi saling bertukar komoditas.'],
            ['2. Kesempatan Berintervensi', 'Intervening Opportunity', 'Hadirnya lokasi alternatif pengganti yang lebih dekat atau lebih murah yang memotong atau melemahkan pola interaksi sebelumnya', 'Kota A biasa membeli beras ke Kota B yang berjarak 100 km. Tiba-tiba ditemukan lumbung beras baru di Kota C yang hanya berjarak 20 km dengan harga sama. Aliran perdagangan dari A ke B terhenti atau anjlok drastis beralih ke C.'],
            ['3. Kemudahan Pemindahan Spasial', 'Spatial Transferability', 'Kelayakan ekonomi dan fisik untuk memindahkan barang atau manusia yang dipengaruhi oleh jarak, biaya angkut, dan kualitas infrastruktur', 'Walaupun pulau X memiliki cadangan batu kapur melimpah, namun karena ketiadaan dermaga pelabuhan dan jalan terjal berbatu, biaya angkutnya melebihi harga jual batu tersebut sehingga interaksi tidak pernah terjadi.']
          ]
        }
      },
      {
        subtitle: '2. Pengukuran Konektivitas Wilayah: Indeks Beta Kansky',
        content: 'Kekuatan konektivitas jaringan jalan dianalisis menggunakan teori grafik K.J. Kansky:',
        keyPoints: [
          'Rumus Indeks Beta (Konektivitas): β = e / v',
          'e (Edges): Jumlah ruas atau jalur jalan yang menghubungkan kota-kota',
          'v (Vertices): Jumlah simpul atau titik kota dalam jaringan wilayah tersebut',
          'Interpretasi Nilai Beta: Semakin tinggi nilai β (β > 1), semakin kompleks dan tinggi konektivitas jaringan jalannya, mobilitas semakin lancar, dan perekonomian semakin maju. Jika β < 1, konektivitas rendah dan banyak kota terisolasi.'
        ],
        formula: {
          expression: '\\beta = \\frac{e}{v}',
          explanation: 'e adalah jumlah garis jalan (edges); v adalah jumlah simpul kota (vertices).',
          exampleCalculation: 'Jika suatu provinsi memiliki 5 kota (v = 5) yang dihubungkan oleh 8 ruas jalan tol (e = 8), maka Indeks Konektivitas Beta = 8 / 5 = 1,6. Nilai ini menunjukkan jaringan konektivitas tinggi dan lancar.'
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Wujud Interaksi Spasial',
        items: [
          { name: 'Interaksi Fisik/Material', description: 'Pergerakan nyata komoditas barang dagangan, truk logistik kontainer, dan mobilitas komuter manusia.' },
          { name: 'Interaksi Finansial', description: 'Arus pengiriman transfer uang remitansi, transaksi perbankan digital, dan suntikan investasi modal.' },
          { name: 'Interaksi Informasi/Gagasan', description: 'Difusi inovasi teknologi, penyebaran tren budaya, dan transmisi sinyal komunikasi internet.' }
        ]
      }
    ],
    processes: [
      { stage: 'Perbedaan Potensi', title: 'Timbulnya Supply & Demand', description: 'Wilayah A surplus pangan; Wilayah B mengalami lonjakan permintaan akibat populasi industri.' },
      { stage: 'Pembangunan Koridor', title: 'Penyediaan Infrastruktur Jalan Tol', description: 'Pemerintah membangun jalan tol antarkota untuk menurunkan biaya logistik per ton-km.' },
      { stage: 'Keseimbangan Spasial', title: 'Spillover Pertumbuhan', description: 'Pertukaran barang dan manusia mencapai volume optimal, memicu pertumbuhan ekonomi di sepanjang koridor.' }
    ],
    caseStudies: [
      {
        title: 'Dampak Tol Trans-Jawa Terhadap Penurunan Biaya Logistik dan Penguatan Interaksi Antarprovinsi',
        location: 'Koridor Merak – Jakarta – Semarang – Surabaya – Probolinggo',
        description: 'Pengoperasian penuh Jalan Tol Trans-Jawa sepanjang 1.167 km mengubah peta interaksi keruangan Pulau Jawa. Waktu tempuh truk kargo Jakarta-Surabaya terpangkas dari 30 jam melalui jalur Pantura konvensional menjadi hanya 12-14 jam. Peningkatan transferability spasial ini memicu lonjakan arus distribusi produk industri dari Jabodetabek ke Jawa Timur dan sebaliknya arus pasokan bahan pangan segar melesat lancar.',
        takeaway: 'Infrastruktur konektivitas menurunkan friksi jarak dan melipatgandakan intensitas interaksi wilayah.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Tiga Faktor Interaksi Keruangan Edward Ullman dan Graf Jaringan Kansky (Simpul vs Jalur)',
        caption: 'Bagan segitiga Ullman (Complementarity, Intervening Opportunity, Transferability) dan ilustrasi graf Beta Index e/v.',
        badge: 'Spatial Interaction'
      }
    ],
    terminology: [
      { term: 'Interaksi Spasial', definition: 'Hubungan timbal balik yang saling mempengaruhi antara dua wilayah atau lebih melalui pergerakan manusia, barang, atau informasi.', scientificTerm: 'Spatial Interaction' },
      { term: 'Regional Complementarity', definition: 'Kondisi saling melengkapi antara wilayah surplus dengan wilayah defisit yang mendorong terjadinya arus pertukaran komoditas.', scientificTerm: 'Regional Complementarity' },
      { term: 'Indeks Konektivitas (Beta Index)', definition: 'Angka perbandingan antara jumlah jalur penghubung (edges) dengan jumlah simpul kota (vertices) yang mengukur keterhubungan jaringan transportasi.', scientificTerm: 'Beta Index of Connectivity' }
    ],
    summary: [
      'Interaksi keruangan dipicu oleh 3 kondisi Edward Ullman: Complementarity, Intervening Opportunity, dan Spatial Transferability.',
      'Intervening opportunity melemahkan interaksi antarwilayah karena munculnya alternatif sumber yang lebih dekat.',
      'Konektivitas jaringan jalan diukur dengan Indeks Beta Kansky (e/v); semakin besar nilai indeks semakin tinggi aksesibilitas wilayah.'
    ],
    quiz: [
      {
        id: 'q90-1',
        question: 'Sebuah wilayah perkotaan membutuhkan pasokan kayu dari Kota Hutan yang berjarak 150 km. Namun, baru-baru ini dibuka perkebunan kayu lestari di Kota Bukit yang hanya berjarak 30 km dari kota tersebut dengan kualitas dan harga kayu yang sama, sehingga pasokan kayu beralih seluruhnya ke Kota Bukit. Faktor yang melemahkan interaksi dengan Kota Hutan menurut Edward Ullman adalah...',
        options: ['Regional Complementarity', 'Intervening Opportunity (Kesempatan Berintervensi)', 'Spatial Transferability', 'Fisis Determinisme'],
        correctAnswer: 1,
        explanation: 'Intervening opportunity adalah adanya lokasi alternatif baru yang menawarkan keunggulan jarak atau biaya sehingga memutus atau melemahkan pola interaksi wilayah sebelumnya.'
      },
      {
        id: 'q90-2',
        question: 'Suatu kawasan pengembangan wilayah memiliki 6 kota (simpul/vertices) yang dihubungkan oleh 9 jalur jalan raya (edges). Berapakah nilai Indeks Konektivitas Beta (β) kawasan tersebut menurut K.J. Kansky?',
        options: ['0,67', '1,20', '1,50', '2,00'],
        correctAnswer: 2,
        explanation: 'Indeks Beta = e / v = 9 / 6 = 1,50.'
      }
    ],
    references: ['Ullman, E. L. (1956). The Role of Transportation and the Bases for Interaction. University of Chicago Press.', 'Kansky, K. J. (1963). Structure of Transportation Networks. University of Chicago.'],
    relatedTopicIds: ['model-gravitasi-reilly-dan-carrothers', 'teori-titik-henti-breaking-point', 'pusat-pertumbuhan-growth-pole', 'wilayah-formal-dan-wilayah-fungsional']
  },
  {
    id: 'model-gravitasi-reilly-dan-carrothers',
    number: 91,
    title: 'Model Gravitasi Reilly dan Carrothers',
    englishTitle: 'Spatial Gravity Models: Reilly Law and Carrothers Modifications',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Advanced',
    description: 'Menghitung kekuatan interaksi spasial antarkota mengadopsi Hukum Gravitasi Newton: Hukum Perdagangan Eceran W.J. Reilly (1929) I_AB = k * (P_A * P_B) / (d_AB)^2, serta modifikasi Carrothers yang memasukkan indeks hambatan jarak pergerakan penduduk.',
    keywords: ['model gravitasi reilly', 'interaksi spasial gravitasi', 'rumus gravitasi carrothers', 'jarak kuadrat', 'kekuatan interaksi kota'],
    learningObjectives: [
      'Menjelaskan analogi fisika Hukum Gravitasi Newton dalam fenomena geografi sosial-ekonomi.',
      'Menghitung kekuatan interaksi antara dua kota menggunakan rumus Gravitasi W.J. Reilly.',
      'Menganalisis modifikasi rumus Carrothers dan implikasinya terhadap friksi jarak dan volume pergerakan penduduk.'
    ],
    introduction: 'Pada tahun 1929, William J. Reilly mengadaptasi Hukum Gravitasi Universal Sir Isaac Newton ke dalam ilmu geografi melalui konsep Hukum Gravitasi Perdagangan Eceran (Reilly\'s Law of Retail Gravitation). Sebagaimana dua benda langit saling tarik-menarik sebanding dengan massanya dan berbanding terbalik dengan kuadrat jaraknya, dua kota pun akan saling berinteraksi sebanding dengan jumlah penduduknya (massa) dan berbanding terbalik dengan kuadrat jarak spasial di antara kedua kota tersebut.',
    sections: [
      {
        subtitle: '1. Rumus Model Gravitasi W.J. Reilly',
        content: 'Kekuatan interaksi antara dua kota dirumuskan secara matematis:',
        keyPoints: [
          'Rumus Gravitasi Reilly: I_AB = k × (P_A × P_B) / (d_AB)²',
          'I_AB = Kekuatan interaksi perdagangan atau mobilitas antara Kota A dan Kota B',
          'k = Nilai konstanta empiris (biasanya bernilai 1 jika tidak ditentukan lain)',
          'P_A = Jumlah penduduk Kota A; P_B = Jumlah penduduk Kota B',
          'd_AB = Jarak mutlak antarkota A dan B (biasanya dalam kilometer)',
          'Makna Geografis: Semakin besar populasi penduduk dua kota, semakin kuat daya tarik interaksinya; namun jarak bertindak sebagai perintang (friction of distance) di mana penggandaan jarak akan mereduksi kekuatan interaksi menjadi seperempatnya (kuadrat jarak).'
        ],
        formula: {
          expression: 'I_{AB} = k \\cdot \\frac{P_A \\cdot P_B}{(d_{AB})^2}',
          explanation: 'Kekuatan interaksi berbanding lurus dengan hasil kali jumlah penduduk kedua kota dan berbanding terbalik dengan kuadrat jarak mutlak di antara keduanya.',
          exampleCalculation: 'Kota A memiliki penduduk 30.000 jiwa, Kota B memiliki 20.000 jiwa, dan jarak keduanya 10 km. Nilai k = 1. Maka I_AB = 1 × (30.000 × 20.000) / (10)² = 600.000.000 / 100 = 6.000.000.'
        }
      },
      {
        subtitle: '2. Modifikasi Carrothers: Eksponen Hambatan Jarak',
        content: 'Gerald A.P. Carrothers (1956) menyempurnakan rumus Reilly dengan mengkritisi eksponen kuadrat 2:',
        table: {
          headers: ['Aspek Perbandingan', 'Model Gravitasi Reilly Asli', 'Model Modifikasi Carrothers'],
          rows: [
            ['Pangkat Jarak Spasial', 'Dipatok kaku pada angka kuadrat pangkat dua: (d_AB)²', 'Diberi eksponen fleksibel: (d_AB)^b di mana b bervariasi antara 1,0 hingga 3,0 tergantung medan geografi'],
            ['Asumsi Medan Geografis', 'Mengasumsikan kondisi medan datar sempurna tanpa variasi infrastruktur', 'Mengakui bahwa melintasi rawa atau pegunungan terjal memiliki friksi hambatan jarak yang jauh lebih tinggi daripada melintasi jalan tol datar'],
            ['Aplikasi Perencanaan', 'Menghitung potensi omzet pasar eceran antarkota', 'Meramalkan volume bangkitan perjalanan (trip generation) dan perencanaan koridor jalan raya regional']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Faktor Penentu Interaksi Gravitasi',
        items: [
          { name: 'Massa Pendorong (Populasi & Ekonomi)', description: 'Jumlah penduduk, besaran PDRB, dan konsentrasi lapangan kerja yang memancarkan gaya tarik keluar.' },
          { name: 'Friksi Penghambat (Jarak & Waktu Tempuh)', description: 'Biaya moneter perjalanan, konsumsi bahan bakar bensin, dan kelelahan waktu di jalan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pendataan Demografi', title: 'Pencatatan Sensus Penduduk', description: 'Mengambil data populasi terkini dari BPS untuk kota-kota yang diteliti.' },
      { stage: 'Pengukuran Matriks Jarak', title: 'Perhitungan Jarak Jaringan', description: 'Mengukur jarak riil jaringan jalan antarkota menggunakan analisis Network GIS.' },
      { stage: 'Komparasi Interaksi Relatif', title: 'Penentuan Arah Arus Dominan', description: 'Membandingkan nilai I_AB vs I_AC untuk mengetahui ke kota mana orientasi pergerakan warga terbesar.' }
    ],
    caseStudies: [
      {
        title: 'Komparasi Interaksi Gravitasi: Jakarta-Bandung vs Jakarta-Cirebon',
        location: 'Wilayah Jawa Bagian Barat, Indonesia',
        description: 'Meskipun Cirebon memiliki potensi perdagangan yang kuat, jarak Jakarta-Cirebon (~220 km) jauh lebih jauh dibandingkan Jakarta-Bandung (~140 km). Berdasarkan model gravitasi Reilly, interaksi spasial antara Jakarta dan Bandung menghasilkan angka gravitasi lebih dari dua kali lipat lebih kuat dibandingkan Jakarta-Cirebon, terbukti dari frekuensi armada kereta api cepat, volume jalan tol Cipularang, dan arus komuter pariwisata akhir pekan yang sangat masif.',
        takeaway: 'Kuadrat jarak memberikan efek perintang yang sangat eksponensial terhadap interaksi keruangan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Grafik Kurva Peluruhan Jarak (Distance Decay Curve) dalam Model Gravitasi Reilly',
        caption: 'Kurva hiperbolik melandai turun curam: kekuatan interaksi anjlok drastis seiring bertambahnya jarak spasial (1/d²).',
        badge: 'Gravity Curve'
      }
    ],
    terminology: [
      { term: 'Model Gravitasi Spasial', definition: 'Model matematis yang memperkirakan besarnya intensitas interaksi antara dua wilayah berdasarkan jumlah penduduk dan jarak.', scientificTerm: 'Gravity Model' },
      { term: 'Distance Decay (Peluruhan Jarak)', definition: 'Prinsip geografi bahwa intensitas interaksi atau kontak antara dua tempat akan menurun tajam dengan bertambahnya jarak spasial.', scientificTerm: 'Distance Decay' },
      { term: 'Friction of Distance', definition: 'Hambatan atau rintangan yang ditimbulkan oleh jarak geografis dalam hal biaya, waktu, dan energi yang dibutuhkan untuk berpindah.', scientificTerm: 'Friction of Distance' }
    ],
    summary: [
      'Model Gravitasi Reilly mengadaptasi hukum Newton: interaksi sebanding dengan produk populasi dan berbanding terbalik kuadrat jarak.',
      'Rumus Reilly: I_AB = k * (P_A * P_B) / (d_AB)^2.',
      'Modifikasi Carrothers memperkenalkan eksponen fleksibel hambatan medan untuk pemodelan transportasi realistis.'
    ],
    quiz: [
      {
        id: 'q91-1',
        question: 'Kota P berpenduduk 20.000 jiwa dan Kota Q berpenduduk 5.000 jiwa. Jarak antara kota P dan Q adalah 10 km. Berapakah kekuatan interaksi spasial antara kota P dan kota Q dengan konstanta k = 1?',
        options: ['1.000.000', '10.000.000', '100.000', '250.000'],
        correctAnswer: 0,
        explanation: 'I_PQ = (20.000 × 5.000) / (10)² = 100.000.000 / 100 = 1.000.000.'
      },
      {
        id: 'q91-2',
        question: 'Jika jarak antara dua buah kota diperpanjang menjadi 2 kali lipat dari jarak semula sementara jumlah penduduk kedua kota tetap sama, maka kekuatan interaksi antarkota tersebut menurut Hukum Gravitasi Reilly akan menjadi...',
        options: [
          'Tetap sama',
          'Menjadi 1/2 kali lipat dari kekuatan semula',
          'Menjadi 1/4 kali lipat dari kekuatan semula',
          'Menjadi 4 kali lipat dari kekuatan semula'
        ],
        correctAnswer: 2,
        explanation: 'Karena rumus Reilly membagi dengan kuadrat jarak (d²), maka jika jarak d menjadi 2d, pembaginya menjadi (2d)² = 4d², sehingga kekuatan interaksinya berkurang menjadi 1/4 dari kekuatan semula.'
      }
    ],
    references: ['Reilly, W. J. (1931). The Law of Retail Gravitation. Knickerbocker Press.', 'Carrothers, G. A. P. (1956). An Historical Review of the Gravity and Potential Concepts of Human Interaction. JAPA.'],
    relatedTopicIds: ['teori-titik-henti-breaking-point', 'interaksi-antarwilayah-dan-konektivitas', 'pusat-pertumbuhan-growth-pole', 'teori-tempat-sentral-christaller']
  },
  {
    id: 'teori-titik-henti-breaking-point',
    number: 92,
    title: 'Teori Titik Henti (Breaking Point Theory)',
    englishTitle: 'The Breaking Point Theory: Reilly-Converse Formulation',
    categoryId: 'wilayah-pembangunan',
    difficulty: 'Advanced',
    description: 'Menghitung dan memetakan batas jangkauan pengaruh optimal dua kota menggunakan Teori Titik Henti (Breaking Point Theory) karya P.D. Converse (1949): rumus matematis D_AB = d_AB / (1 + √(P_B / P_A)), penentuan lokasi fasilitas publik strategis (rumah sakit, pasar induk, SPBU), serta delimitasi batas wilayah hinterland.',
    keywords: ['teori titik henti', 'breaking point theory', 'reilly converse', 'lokasi fasilitas strategis', 'akar perbandingan penduduk', 'batas pasar komoditas'],
    learningObjectives: [
      'Menjelaskan konsep Teori Titik Henti sebagai turunan matematis dari Model Gravitasi Reilly.',
      'Menghitung jarak lokasi titik henti menggunakan rumus D_AB = d_AB / (1 + √(P_B / P_A)).',
      'Menerapkan Teori Titik Henti untuk menentukan lokasi ideal pembangunan fasilitas umum publik antardua kota.'
    ],
    introduction: 'Teori Titik Henti (Breaking Point Theory) dikembangkan oleh matematikawan dan ekonom P.D. Converse pada tahun 1949 sebagai modifikasi langsung dari Hukum Gravitasi Perdagangan Reilly. Teori ini bertujuan untuk menentukan titik lokasi batas di antara dua kota di mana kekuatan daya tarik ekonominya persis seimbang (rasio 50:50). Dalam geografi terapan, teori ini sangat bermanfaat bagi penentu kebijakan untuk memutuskan lokasi paling ideal mendirikan fasilitas umum bersama (seperti rumah sakit rujukan, terminal bus regional, pasar induk, atau bandara bersama) agar dapat diakses secara adil oleh masyarakat kedua kota.',
    sections: [
      {
        subtitle: '1. Rumus Matematis Teori Titik Henti',
        content: 'Jarak titik henti selalu diukur dari kota yang jumlah penduduknya lebih sedikit:',
        keyPoints: [
          'Rumus Titik Henti: D_AB = d_AB / ( 1 + √(P_B / P_A) )',
          'D_AB = Jarak lokasi titik henti yang diukur dari kota yang berpenduduk lebih sedikit (Kota A)',
          'd_AB = Jarak mutlak total antara Kota A dan Kota B',
          'P_A = Jumlah penduduk kota yang LEBIH KECIL (lebih sedikit)',
          'P_B = Jumlah penduduk kota yang LEBIH BESAR (lebih banyak)',
          'Penting Diingat: Nilai di dalam akar kuadrat (P_B / P_A) selalu meletakkan angka penduduk yang lebih besar di atas (sebagai pembilang) agar menghasilkan angka ≥ 1. Hasil akhir D_AB adalah jarak dari kota kecil.'
        ],
        formula: {
          expression: 'D_{AB} = \\frac{d_{AB}}{1 + \\sqrt{\\frac{P_B}{P_A}}}',
          explanation: 'D_AB adalah jarak lokasi titik henti dari kota berpenduduk lebih sedikit (A). P_B adalah kota besar; P_A adalah kota kecil.',
          exampleCalculation: 'Kota A memiliki penduduk 10.000 jiwa, Kota B memiliki 40.000 jiwa. Jarak kedua kota adalah 30 km. Maka D_AB = 30 / ( 1 + √(40.000 / 10.000) ) = 30 / ( 1 + √4 ) = 30 / ( 1 + 2 ) = 30 / 3 = 10 km dari Kota A.'
        }
      },
      {
        subtitle: '2. Interpretasi Spasial dan Manfaat Perencanaan Wilayah',
        content: 'Hasil perhitungan titik henti memiliki makna geografis yang mendalam:',
        table: {
          headers: ['Parameter Hasil Perhitungan', 'Makna Keruangan Spasial', 'Aplikasi Penataan Ruang Wilayah'],
          rows: [
            ['Posisi Relatif Titik Henti', 'Titik henti selalu terletak LEBIH DEKAT ke kota yang berpenduduk lebih sedikit, dan LEBIH JAUH dari kota yang berpenduduk lebih banyak', 'Kota berpenduduk besar memiliki "massa gravitasi" lebih kuat sehingga mampu menarik pengaruh melampaui separuh jarak ke kota tetangganya'],
            ['Keseimbangan Pengaruh 50:50', 'Di titik henti tersebut, probabilitas warga berbelanja ke Kota A atau ke Kota B adalah sama persis 50%', 'Menjadi batas terluar wilayah pengaruh perdagangan (hinterland/trade area) antara kedua kota'],
            ['Lokasi Fasilitas Publik Strategis', 'Titik lokasi paling adil untuk mendirikan fasilitas bersama yang membutuhkan akses dari kedua populasi', 'Lokasi ideal pembangunan Rumah Sakit Rujukan Lintas Kabupaten, Pasar Induk Beras, atau Stasiun Kereta Api Transit']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Skenario Ekstrem Titik Henti',
        items: [
          { name: 'Populasi Kedua Kota Sama Persis (P_B = P_A)', description: 'Nilai rasio P_B/P_A = 1, akar 1 = 1, sehingga D_AB = d / 2. Titik henti berada persis di tengah-tengah jarak kedua kota.' },
          { name: 'Kesenjangan Populasi Sangat Ekstrem (P_B >> P_A)', description: 'Titik henti akan bergeser sangat mendekati gerbang batas kota kecil karena kota metropolitan menyerap hampir seluruh wilayah.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Populasi', title: 'Pengecekan Kota Kecil vs Besar', description: 'Menentukan mana kota yang menjadi P_A (populasi kecil) dan P_B (populasi besar).' },
      { stage: 'Kalkulasi Akar Kuadrat', title: 'Perhitungan Rasio Penduduk', description: 'Membagi P_B dengan P_A kemudian menarik nilai akar kuadratnya (√).' },
      { stage: 'Plotting Spasial GIS', title: 'Penarikan Titik Koordinat Peta', description: 'Menarik garis sejauh D_AB kilometer dari pusat kota kecil menyusuri koridor jalan utama.' }
    ],
    caseStudies: [
      {
        title: 'Penentuan Lokasi Pasar Induk Bersama Antara Kota Solo dan Boyolali',
        location: 'Koridor Jalan Raya Solo – Boyolali, Jawa Tengah, Indonesia',
        description: 'Pemerintah daerah mengkaji pembangunan pasar induk komoditas pertanian bersama antara Kota Surakarta (Solo, penduduk ~520.000 jiwa) dan Kabupaten Boyolali (kota kabupaten ~130.000 jiwa) yang berjarak 24 km. Berdasarkan perhitungan titik henti: D = 24 / (1 + √(520.000 / 130.000)) = 24 / (1 + √4) = 24 / 3 = 8 km dari Boyolali (atau 16 km dari Solo). Lokasi di sekitar Kartasura/Colomadu terbukti menjadi simpul paling ideal bagi pertemuan pedagang kedua wilayah.',
        takeaway: 'Teori titik henti memberikan justifikasi ilmiah kuantitatif dalam alokasi investasi fasilitas publik daerah.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Ilustrasi Garis Sumbu Teori Titik Henti (Breaking Point) Antara Kota Kecil dan Kota Besar',
        caption: 'Garis jarak antarkota: Titik henti (50:50) berada lebih dekat ke Kota A (kecil) karena medan gravitasi Kota B (besar) lebih masif.',
        badge: 'Breaking Point Geometry'
      }
    ],
    terminology: [
      { term: 'Titik Henti (Breaking Point)', definition: 'Titik lokasi batas antara dua wilayah yang memiliki kekuatan interaksi atau daya tarik ekonomi seimbang (50:50).', scientificTerm: 'Breaking Point' },
      { term: 'Reilly-Converse Law', definition: 'Formulasi matematis Converse untuk menghitung jarak spasial batas pengaruh pasar ritel dari kota yang berpenduduk lebih kecil.', scientificTerm: 'Converse Formulation' },
      { term: 'Batas Wilayah Pasar (Trade Area Boundary)', definition: 'Garis imajiner yang memisahkan jangkauan pengaruh perdagangan satu pusat kegiatan dari pusat kegiatan saingannya.', scientificTerm: 'Market Area Delimitation' }
    ],
    summary: [
      'Teori Titik Henti Converse menghitung lokasi batas keseimbangan daya tarik antardua kota.',
      'Rumus: D_AB = d_AB / (1 + √(P_B / P_A)); hasil selalu diukur dari kota berpenduduk lebih sedikit.',
      'Sangat aplikatif untuk menentukan lokasi pembangunan fasilitas publik bersama seperti rumah sakit atau terminal transit.'
    ],
    quiz: [
      {
        id: 'q92-1',
        question: 'Kota M memiliki jumlah penduduk 180.000 jiwa, sedangkan Kota N memiliki jumlah penduduk 20.000 jiwa. Jarak antara Kota M dan Kota N adalah 40 km. Di manakah lokasi paling ideal untuk membangun rumah sakit rujukan bersama berdasarkan Teori Titik Henti?',
        options: [
          '10 km dari Kota N',
          '10 km dari Kota M',
          '20 km dari Kota N',
          '30 km dari Kota N'
        ],
        correctAnswer: 0,
        explanation: 'P_B (besar) = 180.000; P_A (kecil) = 20.000. Jarak d = 40 km. D_AB = 40 / (1 + √(180.000 / 20.000)) = 40 / (1 + √9) = 40 / (1 + 3) = 40 / 4 = 10 km dari Kota N (kota berpenduduk lebih sedikit).'
      },
      {
        id: 'q92-2',
        question: 'Mengapa lokasi titik henti menurut teori Converse selalu bergeser lebih mendekati kota yang jumlah penduduknya lebih sedikit?',
        options: [
          'Karena kota kecil memiliki tingkat kemacetan lalu lintas yang lebih tinggi',
          'Karena kota berpenduduk lebih besar memiliki daya tarik gravitasi ekonomi yang lebih kuat sehingga jangkauan pengaruhnya mendominasi ruang',
          'Karena biaya pembebasan tanah di kota besar selalu lebih murah',
          'Karena kota kecil tidak memerlukan fasilitas publik'
        ],
        correctAnswer: 1,
        explanation: 'Kota berpenduduk besar memiliki massa ekonomi dan gravitasi lebih besar, sehingga mampu memancarkan pengaruhnya melampaui titik tengah, mendesak batas titik henti mendekati gerbang kota kecil.'
      }
    ],
    references: ['Converse, P. D. (1949). New Laws of Retail Gravitation. Journal of Marketing.', 'Glasson, J. (1974). An Introduction to Regional Planning. Hutchinson.'],
    relatedTopicIds: ['model-gravitasi-reilly-dan-carrothers', 'interaksi-antarwilayah-dan-konektivitas', 'teori-tempat-sentral-christaller', 'pusat-pertumbuhan-growth-pole']
  },

  // ==========================================
  // CATEGORY M: Desa dan Kota (93-100)
  // ==========================================
  {
    id: 'karakteristik-dan-potensi-desa',
    number: 93,
    title: 'Karakteristik dan Potensi Desa',
    englishTitle: 'Rural Geography: Characteristics, Potentials, and Typologies',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menelaah sains geografi perdesaan: pengertian desa menurut UU No. 6/2014 dan Bintarto; unsur-unsur desa (daerah, penduduk, tata kehidupan); karakteristik sosial-spasial (Gemeinschaft vs Gesellschaft); serta klasifikasi tingkat perkembangan desa (Desa Swadaya, Swakarya, dan Swasembada).',
    keywords: ['karakteristik desa', 'unsur desa', 'daerah penduduk tata kehidupan', 'desa swadaya swakarya swasembada', 'gemeinschaft paguyuban', 'potensi desa'],
    learningObjectives: [
      'Menjelaskan definisi desa menurut UU Desa No. 6/2014 dan tiga unsur pokok desa menurut Prof. Bintarto.',
      'Membedakan potensi fisik desa (tanah, air, iklim, ternak) dan potensi non-fisik desa (gotong royong, kelembagaan adat, aparatur desa).',
      'Menganalisis karakteristik perkembangan desa dari Desa Swadaya (tradisional terisolasi), Desa Swakarya (transisi), hingga Desa Swasembada (mandiri maju).'
    ],
    introduction: 'Berdasarkan Undang-Undang Republik Indonesia Nomor 6 Tahun 2014 tentang Desa, Desa adalah kesatuan masyarakat hukum yang memiliki batas wilayah yang berwenang untuk mengatur dan mengurus urusan pemerintahan, kepentingan masyarakat setempat berdasarkan prakarsa masyarakat, hak asal usul, dan/atau hak tradisional yang diakui dan dihormati dalam sistem tata kelola NKRI. Dalam perspektif geografi, desa merupakan perwujudan geografis yang ditimbulkan oleh unsur-unsur fisiografis, sosial, ekonomis, politis, dan kultural yang terdapat di suatu tempat dalam hubungan dan pengaruh timbal balik dengan daerah-daerah lainnya (Bintarto, 1989).',
    sections: [
      {
        subtitle: '1. Tiga Unsur Pokok Pembentuk Desa (Prof. R. Bintarto)',
        content: 'Prof. R. Bintarto merumuskan bahwa keberadaan desa mutlak disangga oleh 3 pilar unsur:',
        table: {
          headers: ['Unsur Pokok Desa', 'Dimensi Cakupan', 'Urgensi dalam Keberlangsungan Desa'],
          rows: [
            ['1. Daerah (Wilayah Fisik)', 'Mencakup letak geografis, luas lahan, bentuk topografi, kesuburan tanah, sumber air hidrologi, dan batas-batas yurisdiksi batas desa', 'Menjadi tempat berpijak, ruang bercocok tanam agrikultur, dan penyedia sumber daya alam bahan baku hidup'],
            ['2. Penduduk (Aspek Demografi)', 'Mencakup jumlah jiwa, kepadatan penduduk, rasio jenis kelamin, kelompok umur produktif, tingkat kelahiran, dan etos kerja', 'Bertindak sebagai subjek pengelola lingkungan, tenaga kerja pengolah sawah, dan pewaris tradisi kebudayaan'],
            ['3. Tata Kehidupan (Kultur Sosial)', 'Mencakup norma adat istiadat, ikatan kekerabatan, tradisi gotong royong, sistem hukum adat, dan struktur kelembagaan desa', 'Menjamin keteraturan sosial, kerukunan paguyuban (gemeinschaft), dan resolusi konflik internal masyarakat']
          ]
        }
      },
      {
        subtitle: '2. Tiga Tingkat Perkembangan Kemandirian Desa',
        content: 'Kementerian Dalam Negeri dan Kemendes PDTT membagi klasifikasi desa ke dalam 3 tingkatan kemajuan:',
        keyPoints: [
          '1. Desa Swadaya (Tradisional / Tertinggal): Wilayah terpencil atau terisolasi pegunungan; masyarakatnya memegang teguh adat istiadat yang tertutup; mata pencaharian homogen hanya untuk memenuhi kebutuhan makan sendiri (pertanian subsisten); produktivitas sangat rendah; sarana transportasi dan prasarana umum sangat minim.',
          '2. Desa Swakarya (Peralihan / Sedang Berkembang): Pengaruh dari luar mulai masuk dan diterima; adat istiadat mulai longgar; mata pencaharian mulai berdiversifikasi tidak hanya bertani padi namun juga berdagang dan kerajinan; sebagian hasil panen dijual ke pasar luar desa; tingkat pendidikan dan kesehatan masyarakat mulai membaik.',
          '3. Desa Swasembada (Maju / Mandiri): Masyarakatnya rasional, terbuka, dan berpendidikan relatif tinggi; teknologi pertanian modern (mekanisasi traktor, irigasi otomatis) diterapkan penuh; prasarana jalan aspal mulus dan terhubung internet; memiliki Badan Usaha Milik Desa (BUMDes) yang mampu menghasilkan pendapatan asli desa mandiri.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Potensi Sumber Daya Desa',
        items: [
          { name: 'Potensi Fisik', description: 'Tanah subur vulkanik, sumber air mata air jernih, iklim sejuk agroklimat, hutan desa, dan ternak hewan.' },
          { name: 'Potensi Non-Fisik', description: 'Budaya gotong royong, kearifan lokal hukum adat, lembaga BUMDes, organisasi pemuda karang taruna, dan aparatur pamong desa.' }
        ]
      }
    ],
    processes: [
      { stage: 'Swadaya Terisolasi', title: 'Pertanian Tradisional Tertutup', description: 'Masyarakat bertani dengan cangkul sederhana dan mengandalkan pupuk kandang terbatas.' },
      { stage: 'Pembangunan Akses', title: 'Pembukaan Jalan Desa & Dana Desa', description: 'Kucuran Dana Desa membuka jalan rabat beton dan menghubungkan desa ke pasar kecamatan.' },
      { stage: 'Swasembada Modern', title: 'Komersialisasi Agroindustri & BUMDes', description: 'Desa memproduksi produk unggulan desa (One Village One Product / OVOP) dan mengekspor ke kota.' }
    ],
    caseStudies: [
      {
        title: 'Desa Kutuh Bali: Dari Desa Swakarya Tandus Menjadi Desa Swasembada Pariwisata Mandiri',
        location: 'Kecamatan Kuta Selatan, Kabupaten Badung, Bali, Indonesia',
        description: 'Desa Adat Kutuh bertransformasi dari desa perbukitan kapur tandus miskin menjadi Desa Swasembada terkaya di Indonesia. Melalui Lembaga Perkreditan Desa (LPD) dan BUMDes yang mengelola Pantai Pandawa, atraksi paralayang, dan pertunjukan seni budaya, desa ini menghasilkan pendapatan asli lebih dari Rp 50 miliar per tahun. Keuntungan tersebut digunakan untuk menjamin biaya kesehatan gratis seluruh warga dan beasiswa penuh hingga sarjana.',
        takeaway: 'Pengelolaan potensi non-fisik (kelembagaan adat) yang profesional mampu mengangkat derajat desa swadaya menuju swasembada mandiri.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Segitiga Tiga Unsur Pokok Desa Menurut Bintarto dan Spektrum Kemajuan Desa (Swadaya → Swakarya → Swasembada)',
        caption: 'Bagan tiga pilar (Daerah, Penduduk, Tata Kehidupan) dan tahapan evolusi kemandirian desa.',
        badge: 'Rural Foundations'
      }
    ],
    terminology: [
      { term: 'Desa', definition: 'Kesatuan masyarakat hukum yang memiliki batas wilayah yang berwenang mengatur urusan pemerintahan dan kepentingan masyarakat setempat.', scientificTerm: 'Rural Settlement / Village' },
      { term: 'Gemeinschaft (Paguyuban)', definition: 'Bentuk kehidupan bersama di mana anggota-anggotanya diikat oleh hubungan batin yang murni, alami, dan kekal berdasarkan kekerabatan erat.', scientificTerm: 'Gemeinschaft' },
      { term: 'Desa Swasembada', definition: 'Desa yang masyarakatnya telah maju, mampu memanfaatkan potensi secara optimal dengan teknologi modern, dan tidak lagi terikat adat kaku.', scientificTerm: 'Self-Sufficient Village' }
    ],
    summary: [
      'Menurut Prof. Bintarto, tiga unsur pokok pembentuk desa adalah Daerah, Penduduk, dan Tata Kehidupan.',
      'Potensi desa terbagi menjadi potensi fisik (tanah, air, iklim) dan non-fisik (gotong royong, adat, aparatur).',
      'Tingkat perkembangan desa berevolusi dari Desa Swadaya (tertinggal), Swakarya (transisi), hingga Swasembada (mandiri modern).'
    ],
    quiz: [
      {
        id: 'q93-1',
        question: 'Tiga unsur pokok yang mutlak harus ada dalam pembentukan sebuah desa menurut Prof. R. Bintarto adalah...',
        options: [
          'Daerah, Penduduk, dan Tata Kehidupan',
          'Kantor desa, Pasar, dan Masjid',
          'Kepala desa, Polisi, dan Petani',
          'Sawah, Sungai, dan Jalan raya'
        ],
        correctAnswer: 0,
        explanation: 'Menurut Bintarto, tiga unsur pokok pembentuk desa adalah Daerah (wilayah fisik), Penduduk (demografi), dan Tata Kehidupan (norma sosial kebudayaan).'
      },
      {
        id: 'q93-2',
        question: 'Ciri desa di mana masyarakatnya masih terisolasi dari dunia luar, mata pencaharian penduduknya homogen bertani hanya untuk mencukupi kebutuhan makan sendiri (subsisten), serta sangat patuh pada adat istiadat kuno dinamakan...',
        options: ['Desa Swakarya', 'Desa Swasembada', 'Desa Swadaya', 'Desa Metropolis'],
        correctAnswer: 2,
        explanation: 'Desa Swadaya adalah tipe desa tradisional tertinggal dengan taraf kehidupan subsisten dan ikatan adat istiadat yang masih sangat kaku dan terisolasi.'
      }
    ],
    references: ['Bintarto, R. (1989). Interaksi Desa-Kota dan Permasalahannya. Ghalia Indonesia.', 'Undang-Undang Republik Indonesia Nomor 6 Tahun 2014 tentang Desa.'],
    relatedTopicIds: ['tipologi-dan-pola-permukiman-desa', 'karakteristik-dan-fungsi-kota', 'interaksi-desa-dan-kota', 'struktur-ruang-kota-dan-zonasi']
  },
  {
    id: 'tipologi-dan-pola-permukiman-desa',
    number: 94,
    title: 'Tipologi dan Pola Permukiman Desa',
    englishTitle: 'Rural Settlement Patterns: Linear, Clustered, and Dispersed Types',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menganalisis spasialitas pola persebaran permukiman desa: Pola Memanjang/Linier (mengikuti jalan raya, rel kereta, garis pantai, bantaran sungai), Pola Memusat/Mengelompok (Nucleated/Clustered di sekitar mata air atau kraton), dan Pola Menyebar/Terpencar (Dispersed di wilayah karst pegunungan tandus), beserta faktor geografis penentunya.',
    keywords: ['pola permukiman desa', 'permukiman linier memanjang', 'permukiman memusat nucleated', 'permukiman menyebar dispersed', 'morfologi desa'],
    learningObjectives: [
      'Mengidentifikasi faktor-faktor fisik dan sosial yang menentukan bentuk morfologi pola permukiman desa.',
      'Membedakan karakteristik visual dan penyebab terbentuknya pola linier, pola memusat, dan pola menyebar.',
      'Menganalisis adaptasi arsitektur rumah dan tata letak permukiman desa terhadap ancaman bencana alam lokal.'
    ],
    introduction: 'Pola Permukiman Desa (Rural Settlement Patterns) adalah susunan spasial persebaran tempat tinggal penduduk desa di atas bentang alam. Pola ini tidak terbentuk secara acak, melainkan merupakan kristalisasi dari adaptasi manusia berabad-abad terhadap kendala dan potensi fisiografis bumi (seperti ketersediaan sumber air, topografi lereng terjal, kesuburan tanah, dan jalur akses mobilitas) serta sistem kekerabatan sosial-budaya setempat.',
    sections: [
      {
        subtitle: '1. Tiga Pola Pokok Persebaran Permukiman Desa',
        content: 'Berdasarkan konfigurasi geometri spasialnya, permukiman desa dibagi menjadi 3 tipe pokok:',
        table: {
          headers: ['Pola Permukiman Desa', 'Konfigurasi Spasial Visual', 'Faktor Fisik & Sosial Pemicu', 'Contoh Nyata Lokasi di Indonesia'],
          rows: [
            ['1. Pola Memanjang (Linier)', 'Rumah-rumah penduduk berderet rapi memanjang sejajar mengikuti koridor prasarana atau bentang alam alami', 'Mengikuti akses transportasi darat (jalan raya, rel kereta) atau sumber air (tepian sungai besar, tanggul saluran irigasi, garis pantai nelayan)', 'Permukiman nelayan pesisir Pantura Jawa, permukiman tepian Sungai Musi Palembang, permukiman sepanjang Jalan Raya Pos Daendels'],
            ['2. Pola Memusat (Mengelompok / Nucleated)', 'Rumah-rumah berkumpul padat membentuk klaster melingkar atau mengelompok di sekitar satu titik sentral', 'Dipicu oleh pemusatan sumber daya langka (mata air alami di daerah kering, persimpangan jalur perdagangan utama) atau ikatan kekerabatan adat di sekitar rumah kepala adat', 'Permukiman di sekitar Umbul Ponggok Klaten, desa adat Kampung Naga Tasikmalaya, desa-desa oase di gurun'],
            ['3. Pola Menyebar (Terpencar / Dispersed)', 'Rumah-rumah penduduk berdiri terpisah-pisah berjauhan satu sama lain di tengah ladang atau lereng bukit luas', 'Dipicu oleh topografi perbukitan karst yang bergelombang terjal di mana sumber air tanah sangat dalam dan terpencar-pencar, atau kepemilikan lahan pertanian privat yang sangat luas', 'Permukiman perbukitan karst Gunungkidul Yogyakarta, kawasan pedalaman Nusa Tenggara Timur, permukiman peternakan domba di Selandia Baru']
          ]
        }
      },
      {
        subtitle: '2. Empat Faktor Penentu Pola Permukiman Desa',
        content: 'Bentuk spasial desa ditentukan oleh kombinasi faktor-faktor:',
        keyPoints: [
          'Topografi dan Morfologi Medan: Wilayah dataran rendah memudahkan pembangunan rumah pola linier; wilayah pegunungan patahan memaksa permukiman terpencar mengikuti kantong lembah datar.',
          'Kondisi Hidrologi Air Tanah: Ketersediaan air tanah dangkal memungkinkan rumah menyebar bebas; air tanah yang langka memaksa warga mengelompok memusat di dekat mata air.',
          'Aksesibilitas Jalur Perhubungan: Daya tarik jalan raya aspal memicu fenomena ribon development (permukiman memanjang mengular di pinggir jalan).',
          'Sistem Sosial Kekerabatan dan Keamanan: Desa-desa kuno sering memusat di puncak bukit berpaling pagar batu untuk pertahanan perang antarsuku masa lalu.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Morfologi Desa Berdasarkan Bentang Lahan',
        items: [
          { name: 'Desa Pesisir Nelayan', description: 'Rumah panggung menjorok ke air laut, pola memanjang sejajar garis pantai, terdapat dermaga tambat perahu.' },
          { name: 'Desa Dataran Rendah Agraris', description: 'Pola memanjang jalan atau saluran irigasi, dikelilingi hamparan sawah basah berpetak-petak.' },
          { name: 'Desa Pegunungan Dataran Tinggi', description: 'Pola menyebar di punggung bukit, mengusahakan perkebunan teh, kopi, atau sayuran terasering.' }
        ]
      }
    ],
    processes: [
      { stage: 'Awal Permukiman (Pioneer)', title: 'Pemberian Lahan Pertama', description: 'Satu keluarga perintis membuka ladang dekat aliran sungai jernih.' },
      { stage: 'Agregasi Kekerabatan', title: 'Pertambahan Rumah Kerabat', description: 'Anak dan menantu mendirikan rumah baru di samping rumah induk membentuk klaster pemukiman.' },
      { stage: 'Ekspansi Koridor', title: 'Pembangunan Jalan Aspal', description: 'Pemerintah membangun jalan raya, merangsang generasi baru membangun rumah menghadap jalan utama (pola linier).' }
    ],
    caseStudies: [
      {
        title: 'Adaptasi Pola Permukiman Rumah Panggung Memanjang Sungai Musi dan Ogan',
        location: 'Kabupaten Ogan Komering Ilir dan Palembang, Sumatera Selatan',
        description: 'Masyarakat riparian pedalaman Sumatera Selatan secara turun-temurun membangun rumah panggung kayu ulin dengan pola linier memanjang di tepian Sungai Musi. Sungai bertindak sebagai urat nadi transportasi perahu getek sekaligus sumber air minum dan sanitasi. Arsitektur rumah panggung tinggi dirancang presisi untuk mengantisipasi banjir luapan air sungai (pasang surut rawa) saat musim hujan tiba.',
        takeaway: 'Pola permukiman linier tepian sungai adalah bukti keselarasan arsitektur vernakular dengan hidrologi rawa gambut.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Tiga Pola Spasial Permukiman Desa: Memanjang (Linier), Memusat (Nucleated), dan Menyebar (Dispersed)',
        caption: 'Ilustrasi peta tampak atas tata letak rumah: Berderet di jalan (linier), melingkari mata air (memusat), terpisah acak di ladang (menyebar).',
        badge: 'Settlement Morphometry'
      }
    ],
    terminology: [
      { term: 'Pola Permukiman Linier', definition: 'Susunan tempat tinggal penduduk desa yang berderet memanjang mengikuti garis kenampakan alam atau buatan seperti jalan atau sungai.', scientificTerm: 'Linear Settlement' },
      { term: 'Pola Permukiman Memusat (Nucleated)', definition: 'Susunan rumah-rumah penduduk yang berkumpul rapat membentuk kelompok di sekitar titik sumber daya tertentu.', scientificTerm: 'Nucleated / Clustered Settlement' },
      { term: 'Pola Permukiman Menyebar (Dispersed)', definition: 'Susunan rumah penduduk yang saling terpisah berjauhan dan tersebar di area pertanian atau perbukitan luas.', scientificTerm: 'Dispersed Settlement' }
    ],
    summary: [
      'Pola permukiman desa terbagi ke dalam tiga bentuk utama: Memanjang (linier), Memusat (nucleated), dan Menyebar (dispersed).',
      'Pola linier dipicu jalur jalan/sungai; pola memusat dipicu mata air/keamanan; pola menyebar dipicu topografi karst tandus.',
      'Bentuk tata ruang desa mencerminkan sejarah adaptasi manusia terhadap kondisi hidrologi dan bentang alam.'
    ],
    quiz: [
      {
        id: 'q94-1',
        question: 'Di wilayah perbukitan kapur karst Gunungkidul yang gersang dan memiliki topografi terjal bergelombang, permukiman penduduk cenderung dibangun saling berjauhan satu sama lain di dekat ceruk-ceruk ladang tanah liat yang subur. Pola permukiman desa ini tergolong ke dalam tipe...',
        options: ['Pola memanjang (linier)', 'Pola menyebar (dispersed)', 'Pola memusat (nucleated)', 'Pola konsentris lingkaran'],
        correctAnswer: 1,
        explanation: 'Di daerah karst tandus dengan sumber air yang sangat dalam dan terpencar, penduduk membangun rumah berjauhan di dekat petak ladang masing-masing sehingga membentuk pola menyebar (dispersed).'
      },
      {
        id: 'q94-2',
        question: 'Masyarakat nelayan di pesisir utara Pulau Jawa pada umumnya mendirikan rumah-rumah tempat tinggal dengan pola memanjang berderet sejajar dengan...',
        options: ['Garis kontur elevasi 1.000 mdpl', 'Garis pantai atau muara sungai', 'Jaringan tegangan tinggi sutet', 'Batas lempeng tektonik'],
        correctAnswer: 1,
        explanation: 'Permukiman nelayan membentuk pola linier memanjang mengikuti garis pantai atau tanggul sungai guna memudahkan akses menambatkan perahu penangkap ikan.'
      }
    ],
    references: ['Daldjoeni, N. (1987). Geografi Kota dan Desa. Alumni Bandung.', 'Hudson, F. S. (1976). A Geography of Settlements. Macdonald and Evans.'],
    relatedTopicIds: ['karakteristik-dan-potensi-desa', 'karakteristik-dan-fungsi-kota', 'struktur-ruang-kota-dan-zonasi', 'interaksi-desa-dan-kota']
  },
  {
    id: 'karakteristik-dan-fungsi-kota',
    number: 95,
    title: 'Karakteristik dan Fungsi Kota',
    englishTitle: 'Urban Geography: Characteristics, Functions, and Lewis Mumford Stages',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menelaah sains geografi perkotaan: definisi kota menurut Bintarto, Max Weber, dan Louis Wirth; ciri fisik dan sosial masyarakat perkotaan (Gesellschaft/Patembayan, individualisme, segregasi); klasifikasi fungsi kota (pusat pemerintahan, industri, perdagangan, pariwisata); serta 6 tahap perkembangan kota menurut Lewis Mumford (Eopolis hingga Nekropolis).',
    keywords: ['karakteristik kota', 'fungsi kota', 'tahap lewis mumford', 'eopolis polis metropolis', 'megalopolis tiranopolis nekropolis', 'gesellschaft patembayan'],
    learningObjectives: [
      'Menjelaskan karakteristik fisik dan sosial-psikologis masyarakat perkotaan menurut sosiologi spasial.',
      'Mengklasifikasikan kota-kota di Indonesia berdasarkan fungsi dominan spesifiknya.',
      'Menganalisis 6 tahapan siklus hidup kota menurut sejarawan urban Lewis Mumford dari kelahiran (Eopolis) hingga keruntuhan (Nekropolis).'
    ],
    introduction: 'Kota (City / Urban Area) dalam perspektif geografi adalah suatu bentang budaya yang ditimbulkan oleh unsur-unsur alami dan non-alami dengan gejala-gejala pemusatan penduduk yang cukup besar dan corak kehidupan yang bersifat heterogen dan materialistis dibandingkan dengan daerah belakangnya (Bintarto). Louis Wirth mendefinisikan kota sebagai permukiman yang relatif besar, padat, dan permanen dengan penduduk yang heterogen secara sosial. Kota bertindak sebagai pusat peradaban, inovasi teknologi, dan simpul akumulasi modal finansial dunia.',
    sections: [
      {
        subtitle: '1. Enam Tahap Perkembangan Kota Menurut Lewis Mumford',
        content: 'Dalam buku "The Culture of Cities" (1938), Lewis Mumford merumuskan siklus hidup evolusi kota:',
        table: {
          headers: ['Tahap Mumford', 'Nama Tahapan Urban', 'Karakteristik & Ciri Geografis Pokok', 'Contoh Kasus / Realitas'],
          rows: [
            ['Tahap 1', 'Eopolis', 'Tahap awal pembentukan desa agraris yang mulai tumbuh tertata menuju kehidupan perkotaan berbasis perdagangan awal', 'Desa berkembang yang mulai memiliki pasar mingguan ramai'],
            ['Tahap 2', 'Polis', 'Kota kecil yang sudah memiliki pasar tetap, sentra kerajinan, dan benteng pertahanan atau pusat keagamaan', 'Kota-kota kerajaan tradisional masa lalu seperti Kotagede Yogyakarta'],
            ['Tahap 3', 'Metropolis', 'Kota besar modern yang menjadi pusat kekuatan ekonomi, industri manufaktur, dan pemerintahan regional dengan penduduk padat', 'Surabaya, Medan, Bandung, Semarang'],
            ['Tahap 4', 'Megalopolis', 'Gabungan dari beberapa kota metropolitan besar yang saling menyatu membentuk koridor urban perkotaan raksasa', 'Kawasan Megapolitan Jabodetabekpunjur, BosWash di pantai timur AS (Boston-Washington)'],
            ['Tahap 5', 'Tiranopolis (Tyranopolis)', 'Kota yang ditandai oleh puncak kekacauan sosial, kemacetan parah, kejahatan merajalela, korupsi birokrasi, dan degradasi moral', 'Kota yang mengalami krisis multidimensi sebelum keruntuhan total'],
            ['Tahap 6', 'Nekropolis (Necropolis)', 'Kota kematian; kota yang ditinggalkan penghuninya menjadi kota mati akibat perang dahsyat, kelaparan, wabah penyakit, atau kehancuran ekologis', 'Kota Chernobyl (Pripyat) pascabencana nuklir, Kota Pompeii pasca-letusan Vesuvius, reruntuhan Babylon']
          ]
        }
      },
      {
        subtitle: '2. Klasifikasi Fungsi Kota di Indonesia',
        content: 'Berdasarkan aktivitas dominan yang menggerakkan perekonomiannya, kota dibedakan menjadi:',
        keyPoints: [
          'Kota Pusat Pemerintahan: Kota yang fungsi utamanya melayani birokrasi politik dan administrasi kenegaraan (contoh: Jakarta, IKN Nusantara, Putrajaya di Malaysia, Canberra di Australia).',
          'Kota Pusat Industri Manufaktur: Kota yang didominasi kawasan pabrik dan logistik industri (contoh: Kota Cilegon kota baja, Cikarang/Bekasi pusat perakitan otomotif, Batam kawasan galangan kapal elektronik).',
          'Kota Pusat Perdagangan dan Pelabuhan (Entrepot): Kota simpul transit ekspor-impor barang via laut dan udara (contoh: Surabaya Tanjung Perak, Belawan Medan, Singapura).',
          'Kota Pusat Pendidikan dan Kebudayaan: Kota dengan konsentrasi puluhan kampus universitas ternama dan pelestarian warisan budaya (contoh: Yogyakarta, Malang, Bandung).',
          'Kota Pusat Pariwisata: Kota yang roda ekonominya digerakkan oleh industri perhotelan, atraksi seni, dan pelancong (contoh: Denpasar, Ubud, Labuan Bajo, Bukittinggi).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Karakteristik Sosial Masyarakat Perkotaan (Gesellschaft)',
        items: [
          { name: 'Hubungan Patembayan (Gesellschaft)', description: 'Relasi antarindividu didasarkan pada kepentingan fungsional kontraktual dan untung-rugi profesional, bukan ikatan batin keluarga.' },
          { name: 'Individualistik & Heterogen', description: 'Masyarakat memiliki privasi tinggi, toleran terhadap perbedaan budaya, namun cenderung acuh tak acuh terhadap tetangga sebelah.' },
          { name: 'Segregasi Keruangan', description: 'Pemisahan kelompok sosial di ruang kota: perumahan mewah berpagar rapat (gated community) vs perkampungan padat kumuh (slum).' }
        ]
      }
    ],
    processes: [
      { stage: 'Aglomerasi Awal', title: 'Pemusatan Pasar dan Kantor', description: 'Pembangunan stasiun kereta api memicu berdirinya ruko-ruko pertokoan di sekitarnya.' },
      { stage: 'Ekspansi Spasial', title: 'Suburbanisasi Pinggiran Kota', description: 'Pusat kota menjadi terlalu padat dan mahal, warga kelas menengah membeli perumahan di pinggiran (suburb).' },
      { stage: 'Metropolis Modern', title: 'Diferensiasi Zonasi CBD', description: 'Lantai-lantai gedung pencakar langit mendominasi kawasan pusat bisnis (Central Business District).' }
    ],
    caseStudies: [
      {
        title: 'IKN Nusantara: Rekayasa Spasial Membangun Kota Pemerintahan Khusus Masa Depan',
        location: 'Kabupaten Penajam Paser Utara dan Kutai Kartanegara, Kalimantan Timur',
        description: 'Pemerintah merancang Ibu Kota Nusantara (IKN) sebagai kota khusus pusat pemerintahan negara (administrative city) untuk menggantikan Jakarta yang mengalami kelebihan beban fungsi (pemerintahan, bisnis, pelabuhan, pendidikan). Dengan memisahkan fungsi pemerintahan ke IKN, beban ekologis dan kemacetan Jawa diharapkan berkurang seraya memicu pemerataan pembangunan ke wilayah luar Jawa (Indonesia-sentris).',
        takeaway: 'Diferensiasi fungsi kota merupakan strategi penataan ruang makro untuk mengurai beban megakota.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Siklus Enam Tahap Perkembangan Kota Lewis Mumford: Dari Eopolis Menuju Nekropolis',
        caption: 'Bagan kurva lonceng perkembangan kota: Kelahiran (Eopolis, Polis) → Puncak Kejayaan (Metropolis, Megalopolis) → Kemunduran (Tiranopolis, Nekropolis).',
        badge: 'Urban Evolution'
      }
    ],
    terminology: [
      { term: 'Kota (Urban Area)', definition: 'Kawasan permukiman permanen yang padat dengan penduduk heterogen yang mayoritas bekerja pada sektor non-pertanian (industri dan jasa).', scientificTerm: 'City / Urban Settlement' },
      { term: 'Gesellschaft (Patembayan)', definition: 'Bentuk ikatan sosial masyarakat perkotaan yang bersifat sementara, formal, rasional, dan didasarkan pada kepentingan kontraktual.', scientificTerm: 'Gesellschaft' },
      { term: 'Megalopolis', definition: 'Wilayah perkotaan raksasa hasil penggabungan (konurbasi) beberapa kota metropolitan besar yang saling terhubung.', scientificTerm: 'Megalopolis' }
    ],
    summary: [
      'Kota dicirikan oleh pemusatan penduduk besar, heterogenitas mata pencaharian sekunder-tersier, dan ikatan patembayan (Gesellschaft).',
      'Kota memiliki fungsi spesifik: pemerintahan, industri, perdagangan pelabuhan, pendidikan, dan pariwisata.',
      'Lewis Mumford merumuskan 6 tahap kota: Eopolis → Polis → Metropolis → Megalopolis → Tiranopolis → Nekropolis.'
    ],
    quiz: [
      {
        id: 'q95-1',
        question: 'Tahapan perkembangan kota menurut Lewis Mumford di mana suatu kota telah mengalami kemunduran moral yang parah, kejahatan jalanan tak terkendali, kemacetan total, dan krisis multidimensi sebelum runtuh dinamakan tahap...',
        options: ['Polis', 'Metropolis', 'Tiranopolis (Tyranopolis)', 'Eopolis'],
        correctAnswer: 2,
        explanation: 'Tahap Tiranopolis (Tyranopolis) adalah tahap kelima dalam teori Lewis Mumford yang ditandai kekacauan sosial, korupsi birokrasi, dan kejahatan sebelum menjadi kota mati (nekropolis).'
      },
      {
        id: 'q95-2',
        question: 'Kota Cilegon di Banten dan Kota Cikarang di Bekasi diklasifikasikan ke dalam kategori kota dengan fungsi utama sebagai...',
        options: ['Kota pusat kebudayaan religius', 'Kota pusat industri manufaktur', 'Kota peristirahatan lansia', 'Kota pertambangan timah tradisional'],
        correctAnswer: 1,
        explanation: 'Cilegon (baja) dan Cikarang (perakitan otomotif/elektronik) adalah kota industri manufaktur yang perekonomiannya digerakkan oleh kawasan-kawasan pabrik raksasa.'
      }
    ],
    references: ['Mumford, L. (1938). The Culture of Cities. Harcourt, Brace & Company.', 'Wirth, L. (1938). Urbanism as a Way of Life. American Journal of Sociology.'],
    relatedTopicIds: ['struktur-ruang-kota-dan-zonasi', 'teori-struktur-kota-burgess-hoyt-harris', 'urbanisasi-dan-perkembangan-megakota', 'permasalahan-permukiman-dan-perkotaan']
  },
  {
    id: 'struktur-ruang-kota-dan-zonasi',
    number: 96,
    title: 'Struktur Ruang Kota dan Zonasi',
    englishTitle: 'Urban Spatial Structure, CBD Dynamics, and Land-Use Zoning',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menganalisis anatomi keruangan kota modern: Pusat Daerah Kegiatan (PDK / Central Business District / CBD), Zona Transisi (Transition Zone), Kawasan Permukiman Kelas Bawah, Menengah, dan Atas, Zona Manufaktur Pinggiran, serta Zona Penglaju (Commuter Zone / Rural-Urban Fringe).',
    keywords: ['struktur ruang kota', 'central business district cbd', 'pusat daerah kegiatan pdk', 'zona transisi', 'rural urban fringe', 'jalur penglaju komuter'],
    learningObjectives: [
      'Menjelaskan definisi dan karakteristik Pusat Daerah Kegiatan (PDK / CBD) sebagai jantung perekonomian kota.',
      'Menganalisis fenomena degradasi spasial dan gentrifikasi pada Zona Transisi di sekitar CBD.',
      'Memetakan gradasi zona permukiman dari batas pusat kota hingga zona batas desa-kota (rural-urban fringe).'
    ],
    introduction: 'Struktur Ruang Kota (Urban Spatial Structure) menggambarkan susunan geometris pemanfaatan lahan (land-use) di dalam wilayah perkotaan serta hubungan fungsional antar-komponennya. Di dalam kota terjadi persaingan ketat memperebutkan lahan bernilai tinggi melalui mekanisme sewa lahan (bid-rent mechanism). Akibatnya, pemanfaatan lahan tertata secara teratur ke dalam zonasi-zonasi khusus: dari pusat perbelanjaan dan gedung perkantoran di inti kota, kawasan industri di koridor rel, hingga zona perumahan berlapis-lapis menuju ke batas luar pinggiran kota.',
    sections: [
      {
        subtitle: '1. Anatomi Pusat Daerah Kegiatan (PDK / CBD)',
        content: 'Central Business District (CBD) adalah inti nukleus kota yang memiliki karakteristik unik:',
        keyPoints: [
          'Aksesibilitas Tertinggi: Terletak di titik pertemuan seluruh simpul jaringan jalan utama kota.',
          'Harga Lahan Paling Mahal: Nilai tanah per meter persegi mencapai angka tertinggi, sehingga bangunan dibangun vertikal menjulang ke atas (gedung pencakar langit skyscraper).',
          'Dominasi Sektor Komersial & Jasa Finansial: Dikuasai oleh kantor pusat bank, kantor konsultan hukum, hotel bintang lima, dan pusat perbelanjaan mewah.',
          'Fluktuasi Kepadatan Ekstrem (Day-Night Population): Di siang hari dipadati jutaan pekerja kantor, namun di malam hari populasi penduduknya merosot drastis (hampir kosong tanpa perumahan warga biasa).'
        ]
      },
      {
        subtitle: '2. Enam Gradasi Zona Pemanfaatan Lahan Kota',
        content: 'Dari pusat menuju batas terluar, struktur ruang kota umumnya terdiri atas:',
        table: {
          headers: ['Zona Pemanfaatan Lahan', 'Istilah Bahasa Inggris', 'Fungsi Utama & Kondisi Lingkungan', 'Aktivitas Khas'],
          rows: [
            ['1. Pusat Daerah Kegiatan', 'Central Business District (CBD)', 'Pusat pertokoan grosir, mall elit, bursa efek, dan kantor perbankan', 'Aktivitas bisnis korporasi global'],
            ['2. Zona Transisi', 'Zone of Transition', 'Kawasan percampuran antara pelebaran kantor bisnis dengan permukiman tua; sering mengalami degradasi menjadi kawasan kumuh (slum) atau peremajaan (gentrifikasi)', 'Pabrik ringan, gudang penyimpanan logistik, rumah indekos pekerja miskin'],
            ['3. Permukiman Pekerja Rendah', 'Working-Class Residential', 'Perumahan padat untuk buruh pabrik dan pekerja sektor informal dengan upah minimum', 'Perkampungan padat gang sempit dekat pusat kerja'],
            ['4. Permukiman Kelas Menengah', 'Middle-Class Residential', 'Kawasan perumahan teratur dengan fasilitas taman, sekolah, dan sanitasi yang layak bagi pegawai kantor', 'Perumahan klaster satu lantai dengan garasi mobil pribadi'],
            ['5. Permukiman Kelas Elit', 'High-Class Residential', 'Perumahan mewah dengan ukuran kaveling tanah luas, keamanan ketat, udara bersih jauh dari polusi industri', 'Kompleks perumahan eksklusif (mansion, villa berpemandangan indah)'],
            ['6. Zona Penglaju', 'Commuter Zone / Rural-Urban Fringe', 'Zona perbatasan peralihan antara kota dan desa yang dihuni oleh para penglaju harian', 'Lahan pertanian yang mulai diselingi perumahan baru dan terminal bus']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Fenomena Dinamika Zona Transisi',
        items: [
          { name: 'Slum & Blight (Kawasan Kumuh)', description: 'Penurunan fisik bangunan, sanitasi buruk, dan kemiskinan perkotaan akibat pemilik tanah membiarkan rumah menunggu dibeli investor komersial.' },
          { name: 'Gentrifikasi (Gentrification)', description: 'Proses renovasi dan pemulihan bangunan tua kota oleh kelas menengah atas dan kafe modern yang menggusur warga miskin asli.' }
        ]
      }
    ],
    processes: [
      { stage: 'Mekanisme Bid-Rent', title: 'Kompetisi Sewa Lahan Tertinggi', description: 'Bank dan toko retail sanggup membayar sewa tanah termahal di pusat kota mendesak fungsi lain keluar.' },
      { stage: 'Pembangunan Vertikal', title: 'Pertumbuhan Menara Pencakar Langit', description: 'Keterbatasan luas lahan diimbangi dengan koefisien lantai bangunan (KLB) tinggi puluhan tingkat.' },
      { stage: 'Infiltrasi Pinggiran', title: 'Urban Sprawl ke Arah Pedesaan', description: 'Pengembang properti membeli sawah di desa batas kota untuk dijadikan kota satelit baru.' }
    ],
    caseStudies: [
      {
        title: 'Segitiga Emas Sudirman-Thamrin-Kuningan Jakarta: CBD Terbesar Indonesia',
        location: 'DKI Jakarta, Indonesia',
        description: 'Kawasan Segitiga Emas Jakarta merepresentasikan Pusat Daerah Kegiatan (CBD) berkelas dunia. Koridor Jalan Jenderal Sudirman, M.H. Thamrin, dan H.R. Rasuna Said menampung ratusan gedung pencakar langit kantor kedutaan besar, Bursa Efek Indonesia, dan hotel bintang lima. Di belakang barisan menara kaca megah ini, terdapat zona transisi berupa perkampungan padat Karet Kuningan yang menjadi tempat indekos ribuan pekerja korporasi.',
        takeaway: 'Kontras antara CBD modern dan kantong perkampungan informal di zona transisi adalah wajah nyata dualisme kota berkembang.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Profil Ketinggian Bangunan dan Kurva Sewa Lahan (Bid-Rent Theory) dari CBD Menuju Fringe',
        caption: 'Bagan kurva eksponensial sewa tanah turun dari pusat (CBD) ke luar, diiringi profil gedung tinggi meruncing menjadi rumah tapak.',
        badge: 'Urban Zoning'
      }
    ],
    terminology: [
      { term: 'Pusat Daerah Kegiatan (PDK / CBD)', definition: 'Kawasan pusat kota yang menjadi titik pertemuan aktivitas perdagangan, perbankan, dan perkantoran dengan harga lahan termahal.', scientificTerm: 'Central Business District' },
      { term: 'Zona Transisi', definition: 'Wilayah di sekeliling CBD yang mengalami perubahan penggunaan lahan dari permukiman tua menjadi area komersial, sering diselingi kawasan kumuh.', scientificTerm: 'Zone in Transition' },
      { term: 'Rural-Urban Fringe', definition: 'Wilayah jalur perbatasan antara kota dan desa yang memperlihatkan campuran kenampakan penggunaan lahan perkotaan dan pertanian.', scientificTerm: 'Rural-Urban Fringe' }
    ],
    summary: [
      'Struktur ruang kota ditentukan oleh mekanisme kurva sewa lahan (bid-rent theory) dan aksesibilitas transportasi.',
      'CBD memiliki harga tanah termahal, aksesibilitas tertinggi, dan didominasi gedung bertingkat vertikal.',
      'Dari pusat ke luar terjadi gradasi zonasi: CBD → Zona Transisi → Permukiman Buruh → Permukiman Menengah → Permukiman Atas → Zona Komuter.'
    ],
    quiz: [
      {
        id: 'q96-1',
        question: 'Ciri utama dari kawasan Pusat Daerah Kegiatan (PDK / Central Business District) di suatu kota metropolitan adalah...',
        options: [
          'Harga tanah paling mahal, aksesibilitas tertinggi, dan didominasi gedung perkantoran vertikal',
          'Mayoritas penduduknya bekerja sebagai petani sayuran organik',
          'Banyak dijumpai hutan lindung dan persawahan irigasi teknis',
          'Kepadatan penduduk di malam hari jauh lebih tinggi daripada di siang hari'
        ],
        correctAnswer: 0,
        explanation: 'CBD memiliki aksesibilitas tertinggi di kota sehingga memicu harga tanah tertinggi yang memaksa pemanfaatan lahan secara vertikal untuk perkantoran dan bisnis.'
      },
      {
        id: 'q96-2',
        question: 'Fenomena masuknya golongan masyarakat kelas menengah terdidik yang merenovasi rumah-rumah tua bersejarah dan membuka kafe-kafe modern di kawasan zona transisi yang kumuh sehingga harga sewa melonjak dan menggusur warga miskin asli dinamakan fenomena...',
        options: ['Urban sprawl', 'Gentrifikasi (Gentrification)', 'Slumisasi', 'Aglomerasi primer'],
        correctAnswer: 1,
        explanation: 'Gentrifikasi adalah proses peremajaan kawasan permukiman kota lama oleh investor atau kelas menengah atas yang seringkali berakibat tersingkirnya warga ekonomi lemah asli.'
      }
    ],
    references: ['Alonso, W. (1964). Location and Land Use: Toward a General Theory of Land Rent. Harvard University Press.', 'Pacione, M. (2009). Urban Geography: A Global Perspective. Routledge.'],
    relatedTopicIds: ['teori-struktur-kota-burgess-hoyt-harris', 'karakteristik-dan-fungsi-kota', 'urbanisasi-dan-perkembangan-megakota', 'permasalahan-permukiman-dan-perkotaan']
  },
  {
    id: 'teori-struktur-kota-burgess-hoyt-harris',
    number: 97,
    title: 'Teori Struktur Ruang Kota: Konsentris, Sektoral, dan Inti Berganda',
    englishTitle: 'Urban Land-Use Models: Concentric Zone, Sector, and Multiple Nuclei Models',
    categoryId: 'desa-kota',
    difficulty: 'Advanced',
    description: 'Menguasai tiga teori klasik morfologi struktur ruang kota dunia: Teori Konsentris (Concentric Zone Model - Ernest W. Burgess 1925), Teori Sektoral (Sector Model - Homer Hoyt 1939), dan Teori Inti Berganda (Multiple Nuclei Model - Chauncy Harris & Edward Ullman 1945), beserta diagram zonasi dan kritiknya.',
    keywords: ['teori struktur kota', 'teori konsentris burgess', 'teori sektoral homer hoyt', 'teori inti berganda harris ullman', 'model penggunaan lahan kota'],
    learningObjectives: [
      'Menjelaskan asumsi, 5 zona konsentris, dan mekanisme ekspansi Teori Burgess (1925).',
      'Menganalisis peran koridor jalur transportasi dalam pembentukan baji/sektor Teori Homer Hoyt (1939).',
      'Mengevaluasi Teori Inti Berganda Harris-Ullman (1945) dalam menjelaskan morfologi kota metropolis modern yang memiliki banyak pusat pertumbuhan.'
    ],
    introduction: 'Para ahli geografi perkotaan di Universitas Chicago (Chicago School) berusaha merumuskan model spasial umum yang mampu menjelaskan keteraturan persebaran zona permukiman dan komersial di perkotaan. Lahirlah tiga teori klasik monumental: Teori Konsentris (Ernest Burgess, 1925), Teori Sektoral (Homer Hoyt, 1939), dan Teori Inti Berganda (Chauncy Harris dan Edward Ullman, 1945). Ketiga teori ini menjadi landasan dasar dalam studi morfologi perkotaan dan penyusunan rencana tata ruang kota di seluruh dunia.',
    sections: [
      {
        subtitle: '1. Teori Konsentris (Concentric Zone Theory - Burgess, 1925)',
        content: 'Berdasarkan studi perkembangan Kota Chicago, Burgess membagi kota ke dalam 5 lingkaran konsentris teratur:',
        table: {
          headers: ['Zona Lingkaran Konsentris', 'Nama Zona Pemanfaatan Lahan Burgess', 'Ciri Karakteristik Utama'],
          rows: [
            ['Zona 1 (Lingkaran Inti)', 'Central Business District (CBD / Loop)', 'Pusat kehidupan ekonomi, pertokoan grosir, bank, gedung teater, dan kantor pemerintahan'],
            ['Zona 2 (Lingkaran Peralihan)', 'Zone in Transition', 'Zona industri ringan dan gudang yang mendesak perumahan tua; dihuni imigran miskin (ghetto/slum)'],
            ['Zona 3 (Lingkaran Buruh)', 'Zone of Independent Workingmen\'s Homes', 'Perumahan pekerja industri kelas dua yang menginginkan akses dekat ke pabrik namun terbebas dari kekumuhan zona transisi'],
            ['Zona 4 (Lingkaran Menengah)', 'Zone of Better Residences', 'Kawasan perumahan kaveling luas untuk kaum borjuis menengah dan pegawai kerah putih profesional'],
            ['Zona 5 (Lingkaran Terluar)', 'Commuters Zone', 'Kawasan pinggiran kota (suburb) tempat tinggal kaum elit yang setiap hari bolak-balik melaju (komuter) bekerja ke CBD']
          ]
        }
      },
      {
        subtitle: '2. Teori Sektoral (Sector Theory - Homer Hoyt, 1939)',
        content: 'Homer Hoyt mengkritik Burgess dengan menegaskan bahwa kota tidak tumbuh membentuk lingkaran seragam, melainkan membentuk baji atau sektor-sektor mengikuti jalur rel kereta dan jalan raya utama:',
        keyPoints: [
          'Peran Koridor Aksesibilitas: Industri berat dan pergudangan selalu berkembang memanjang di sepanjang bantaran jalur rel kereta api atau pelabuhan sungai.',
          'Pemisahan Sektor Perumahan: Kaum kaya kelas atas memilih tinggal di sektor yang memiliki udara bersih dan panorama indah (biasanya di perbukitan tinggi di sepanjang jalan raya utama bebas polusi pabrik).',
          'Sektor Kelas Bawah Terjepit: Permukiman buruh berpenghasilan rendah mengapit sektor industri manufaktur yang bising dan tercemar, menjauh dari sektor permukiman mewah.'
        ]
      },
      {
        subtitle: '3. Teori Inti Berganda (Multiple Nuclei Theory - Harris & Ullman, 1945)',
        content: 'Harris dan Ullman menolak gagasan bahwa kota modern hanya berputar pada satu CBD tunggal:',
        table: {
          headers: ['Prinsip Inti Berganda', 'Mekanisme Spasial Harris & Ullman', 'Dampak Morfologi Kota'],
          rows: [
            ['Pusat Pertumbuhan Majemuk', 'Kota tidak memiliki pusat tunggal, melainkan banyak nukleus/inti pertumbuhan yang tumbuh mandiri (CBD utama, kawasan pelabuhan, pusat universitas, kawasan industri pinggiran, pusat mall pinggiran)', 'Kota berkembang membentuk konstelasi klaster-klaster terspesialisasi yang saling melengkapi'],
            ['Daya Tarik Saling Mendukung (Symbiotic Agglomeration)', 'Aktivitas yang saling membutuhkan berkumpul di nukleus yang sama (misal: bank, hotel, dan kantor konsultan hukum di CBD)', 'Menciptakan efisiensi eksternalitas ekonomi tinggi'],
            ['Daya Tolak Ketidakcocokan (Mutual Repulsion)', 'Aktivitas yang merugikan aktivitas lain akan terpisah saling menjauh (misal: pabrik peleburan kimia bising menjauh dari kawasan perumahan elit)', 'Tercipta pemisahan zonasi fungsional yang tajam']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Komparasi Tiga Teori Struktur Ruang Kota',
        items: [
          { name: 'Model Burgess (1925)', description: 'Bentuk geometris: Lingkaran konsentris simetris. Pendorong utama: Suksesi biologis sosial Chicago.' },
          { name: 'Model Hoyt (1939)', description: 'Bentuk geometris: Potongan baji / kue pie (sektor). Pendorong utama: Koridor transportasi jalan & rel.' },
          { name: 'Model Harris-Ullman (1945)', description: 'Bentuk geometris: Seluler asimetris banyak inti. Pendorong utama: Mobil pribadi dan spesialisasi nukleus.' }
        ]
      }
    ],
    processes: [
      { stage: 'Inisiasi CBD Tunggal', title: 'Pertumbuhan Tahap Konsentris', description: 'Kota berpusat pada satu stasiun kereta api dan pasar kota tua.' },
      { stage: 'Ekspansi Koridor', title: 'Pertumbuhan Tahap Sektoral', description: 'Pembangunan jalan tol dan rel memicu pertumbuhan memanjang seperti baji.' },
      { stage: 'Polisentris Modern', title: 'Pertumbuhan Tahap Inti Berganda', description: 'Bandara internasional baru dan kawasan industri pinggiran tumbuh menjadi kutub-kutub CBD sekunder.' }
    ],
    caseStudies: [
      {
        title: 'Morfologi Kota Metropolitan Jakarta: Penerapan Model Inti Berganda Nyata',
        location: 'Wilayah Khusus Ibukota Jakarta dan Sekitarnya, Indonesia',
        description: 'Jakarta adalah representasi sempurna Teori Inti Berganda Harris-Ullman. Jakarta tidak lagi hanya berpusat di Monas/Thamrin (CBD Primer), melainkan memiliki banyak nukleus independen raksasa: Pelabuhan Tanjung Priok (nukleus logistik maritim), Bandara Soekarno-Hatta (nukleus aerotropolis), TB Simatupang (CBD korporasi minyak), Kelapa Gading dan Puri Indah (nukleus komersial retail sub-urban), serta Cikarang-Karawang (nukleus industri manufaktur raksasa).',
        takeaway: 'Megakota modern berevolusi dari monosentris menjadi polisentris berinti banyak.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Visual Tiga Model Struktur Kota: Konsentris (Burgess), Sektoral (Hoyt), dan Inti Berganda (Harris-Ullman)',
        caption: 'Bagan komparasi 3 diagram ruang kota: 5 lingkaran konsentris, irisan baji kue sektoral, dan kotak-kotak seluler inti berganda.',
        badge: 'Classic Urban Models'
      }
    ],
    terminology: [
      { term: 'Teori Konsentris', definition: 'Teori struktur kota karya Burgess yang menyatakan kota berkembang keluar dalam bentuk 5 lingkaran konsentris berurutan.', scientificTerm: 'Concentric Zone Model' },
      { term: 'Teori Sektoral', definition: 'Teori struktur kota karya Homer Hoyt yang menyatakan zonasi pemanfaatan lahan berkembang dalam bentuk baji (sektor) sepanjang jalur transportasi.', scientificTerm: 'Sector Model' },
      { term: 'Teori Inti Berganda', definition: 'Teori struktur kota karya Harris-Ullman yang menyatakan kota modern memiliki banyak pusat pertumbuhan nukleus yang terpisah-pisah.', scientificTerm: 'Multiple Nuclei Model' }
    ],
    summary: [
      'Ernest Burgess merumuskan Teori Konsentris (5 lingkaran konsentris dari CBD hingga zona komuter).',
      'Homer Hoyt menyempurnakan dengan Teori Sektoral (baji memanjang mengikuti jalur transportasi jalan/rel).',
      'Harris dan Ullman merumuskan Teori Inti Berganda (kota metropolis polisentris dengan banyak kutub nukleus).'
    ],
    quiz: [
      {
        id: 'q97-1',
        question: 'Menurut Teori Konsentris yang dikemukakan oleh Ernest W. Burgess pada tahun 1925, zona yang terletak tepat mengelilingi Pusat Daerah Kegiatan (CBD) yang dicirikan oleh adanya pabrik ringan, pergudangan, dan pemukiman kumuh (slum) dinamakan...',
        options: [
          'Zona penglaju (commuter zone)',
          'Zona transisi (zone in transition)',
          'Zona perumahan kelas elit',
          'Zona pertanian intensif'
        ],
        correctAnswer: 1,
        explanation: 'Zona 2 dalam model Burgess adalah Zona Transisi (Zone in Transition) yang mengalami degradasi fisik akibat invasi fungsi bisnis dan pergudangan industri ke perumahan lama.'
      },
      {
        id: 'q97-2',
        question: 'Teori struktur ruang kota yang menyatakan bahwa perkembangan kota tidak berpusat pada satu titik sentral saja melainkan tumbuh di sekitar beberapa nukleus atau inti pertumbuhan yang terpisah-pisah dikembangkan oleh...',
        options: ['Ernest W. Burgess', 'Homer Hoyt', 'Chauncy Harris dan Edward Ullman', 'Walter Christaller'],
        correctAnswer: 2,
        explanation: 'Chauncy Harris dan Edward Ullman (1945) adalah pencetus Teori Inti Berganda (Multiple Nuclei Model).'
      }
    ],
    references: ['Burgess, E. W. (1925). The Growth of the City. University of Chicago Press.', 'Hoyt, H. (1939). The Structure and Growth of Residential Neighborhoods in American Cities. FHA.', 'Harris, C. D., & Ullman, E. L. (1945). The Nature of Cities. Annals of the AAPSS.'],
    relatedTopicIds: ['struktur-ruang-kota-dan-zonasi', 'karakteristik-dan-fungsi-kota', 'urbanisasi-dan-perkembangan-megakota', 'permasalahan-permukiman-dan-perkotaan']
  },
  {
    id: 'interaksi-desa-dan-kota',
    number: 98,
    title: 'Interaksi Spasial Desa dan Kota',
    englishTitle: 'Rural-Urban Interactions and Zona Interaksi Keruangan Bintarto',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menelaah hubungan simbiotik interaksi keruangan antara desa dan kota: ketergantungan pasokan pangan dan tenaga kerja vs penyediaan barang manufaktur dan jasa; dampak positif dan negatif bagi kedua entitas; serta 6 Zonasi Interaksi Keruangan Desa-Kota menurut Prof. R. Bintarto (City hingga Rural).',
    keywords: ['interaksi desa kota', 'zonasi interaksi bintarto', 'suburban suburban fringe', 'urban fringe rural urban fringe', 'simbiosis desa kota', 'dampak interaksi keruangan'],
    learningObjectives: [
      'Menganalisis hubungan saling ketergantungan komplementer antara ekosistem desa dan perkotaan.',
      'Memetakan 6 zona konsentris interaksi desa-kota menurut Prof. R. Bintarto.',
      'Mengevaluasi dampak positif dan negatif dari intensitas interaksi desa-kota terhadap kehidupan masyarakat di kedua wilayah.'
    ],
    introduction: 'Desa dan Kota berada dalam suatu kesatuan hubungan fungsional yang tidak terpisahkan. Desa membutuhkan kota sebagai pasar penjualan hasil bumi, pusat layanan pendidikan tinggi, fasilitas kesehatan rujukan, dan pemasok produk-produk industri manufaktur. Sebaliknya, kota mutlak tergantung pada desa sebagai penyuplai bahan pangan pokok (beras, sayur, daging), sumber air bersih cadangan, paru-paru hijau ekologis, serta penyedia pasokan tenaga kerja. Hubungan timbal balik ini diwadahi dalam zona-zona peralihan keruangan di perbatasan kota dan desa.',
    sections: [
      {
        subtitle: '1. Enam Zona Interaksi Keruangan Desa-Kota (Prof. R. Bintarto)',
        content: 'Bintarto mengklasifikasikan gradasi wilayah interaksi dari pusat kota menuju pelosok pedesaan murni:',
        table: {
          headers: ['Zona Interaksi Bintarto', 'Nama Zona Keruangan', 'Karakteristik Fisik & Dominasi Pemanfaatan Lahan'],
          rows: [
            ['Zona 1', 'City (Kota)', 'Inti pusat wilayah perkotaan tempat berkumpulnya gedung kantor, mall, dan pusat bisnis utama'],
            ['Zona 2', 'Suburban (Subdaerah Perkotaan)', 'Wilayah yang berlokasi dekat dengan inti kota yang dihuni para komuter; penggunaan lahan didominasi perumahan teratur'],
            ['Zona 3', 'Suburban Fringe (Jalur Tepi Subdaerah Perkotaan)', 'Kawasan yang mengitari suburban; merupakan batas terluar permukiman kota yang mulai bersentuhan dengan lahan terbuka'],
            ['Zona 4', 'Urban Fringe (Jalur Tepi Perkotaan Paling Luar)', 'Wilayah batas terluar kota yang memperlihatkan kenampakan fisik campuran; lahan industri, perumahan, dan kebun bercampur'],
            ['Zona 5', 'Rural-Urban Fringe (Jalur Batas Desa-Kota)', 'Jalur peralihan keruangan yang sangat dinamis antara corak kehidupan kota dan desa; perumahan baru mulai merambah lahan persawahan'],
            ['Zona 6', 'Rural (Desa)', 'Daerah pedesaan murni yang masih didominasi oleh bentang alam pertanian terbuka, permukiman tradisional, dan kehidupan agraris']
          ]
        }
      },
      {
        subtitle: '2. Dampak Interaksi Keruangan Bagi Desa dan Kota',
        content: 'Intensitas kontak antarkedua wilayah menimbulkan konsekuensi ganda:',
        keyPoints: [
          'Dampak Positif Bagi Desa: Peningkatan melek huruf dan mutu pendidikan; terbukanya akses jalan aspal; masuknya teknologi mekanisasi pertanian (traktor, pupuk unggul); pemasaran hasil tani lebih cepat dan berharga tinggi.',
          'Dampak Negatif Bagi Desa: Terkurasnya tenaga kerja muda potensial (urbanisasi pemuda ke kota); berkurangnya lahan sawah subur akibat alih fungsi perumahan komuter; lunturnya budaya gotong royong dan kesederhanaan adat.',
          'Dampak Positif Bagi Kota: Kebutuhan bahan pangan mentah kota terjamin pasokannya; tersedianya tenaga kerja murah untuk konstruksi dan industri manufaktur; terbukanya pasar penjualan produk hasil pabrik kota.',
          'Dampak Negatif Bagi Kota: Munculnya permukiman kumuh (slum area) ilegal di bantaran sungai oleh urbanit tanpa keterampilan kerja; melonjaknya angka pengangguran informal; peningkatan beban kemacetan dan timbunan sampah harian.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Bentuk Mobilitas Interaksi',
        items: [
          { name: 'Mobilitas Sirkuler (Komuter / Nglaju)', description: 'Perpindahan harian atau mingguan penduduk desa ke kota untuk bekerja tanpa berniat menetap permanen di kota.' },
          { name: 'Migrasi Permanen (Urbanisasi Definitif)', description: 'Perpindahan penduduk desa ke kota dengan mengubah administrasi KTP dan menetap selamanya di perkotaan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pembukaan Akses Jalan', title: 'Pembangunan Koridor Transportasi', description: 'Angkutan umum pedesaan dan jalan beraspal menghubungkan pasar desa ke terminal kota.' },
      { stage: 'Difusi Teknologi & Pola Pikir', title: 'Modernisasi Masyarakat Desa', description: 'Gaya hidup rasional, gadget digital, dan fasilitas perbankan masuk ke pelosok desa.' },
      { stage: 'Integrasi Ekologis-Ekonomi', title: 'Ketergantungan Saling Menguntungkan', description: 'Rantai pasok sayur mayur desa terhubung ke jaringan supermarket ritel kota besar.' }
    ],
    caseStudies: [
      {
        title: 'Dinamika Jalur Rural-Urban Fringe di Koridor Cibinong-Bogor dengan Jakarta',
        location: 'Kabupaten Bogor dan Kota Depok, Jawa Barat, Indonesia',
        description: 'Kawasan sepanjang koridor Cibinong menuju Depok memperlihatkan fenomena Rural-Urban Fringe yang sangat nyata. Lahan-lahan kebun kelapa dan sawah rawa yang dulunya mendominasi kini disulap dalam hitungan bulan menjadi ribuan unit perumahan cluster tapak bersubsidi dan apartemen transit-oriented development (TOD) stasiun KRL. Penduduk lokal beralih profesi dari petani menjadi pedagang toko kelontong atau petugas keamanan perumahan.',
        takeaway: 'Zona Rural-Urban Fringe adalah front terdepan benturan antara kapitalisasi perkotaan dan ruang agraris pedesaan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Enam Lingkaran Zonasi Interaksi Keruangan Desa-Kota Menurut Prof. R. Bintarto',
        caption: 'Bagan lingkaran konsentris bertingkat: City → Suburban → Suburban Fringe → Urban Fringe → Rural-Urban Fringe → Rural.',
        badge: 'Bintarto Zonation'
      }
    ],
    terminology: [
      { term: 'Zonasi Bintarto', definition: 'Model klasifikasi 6 zona spasial konsentris yang menghubungkan wilayah pusat kota (city) hingga perdesaan murni (rural).', scientificTerm: 'Bintarto Zonation of Rural-Urban Continuum' },
      { term: 'Rural-Urban Fringe', definition: 'Zona jalur perbatasan peralihan antara kota dan desa yang memperlihatkan percampuran penggunaan lahan perkotaan dan pertanian.', scientificTerm: 'Rural-Urban Fringe' },
      { term: 'Mobilitas Komuter (Penglaju)', definition: 'Pergerakan penduduk bolak-balik dari tempat tinggal di pinggiran/desa ke tempat kerja di pusat kota tanpa menginap permanen.', scientificTerm: 'Commuting Mobility' }
    ],
    summary: [
      'Interaksi desa-kota adalah hubungan simbiotik saling melengkapi antara pangan-tenaga kerja dan manufaktur-jasa.',
      'Prof. Bintarto merumuskan 6 zonasi interaksi: City → Suburban → Suburban Fringe → Urban Fringe → Rural-Urban Fringe → Rural.',
      'Interaksi berdampak positif memajukan pendidikan desa dan menjamin logistik kota, namun berdampak negatif memicu alih fungsi lahan sawah dan kawasan kumuh.'
    ],
    quiz: [
      {
        id: 'q98-1',
        question: 'Menurut klasifikasi zonasi interaksi desa-kota Prof. R. Bintarto, zona jalur peralihan yang berada di perbatasan paling luar kota di mana penggunaan lahan pertanian desa mulai bercampur baur secara dinamis dengan kompleks perumahan perkotaan baru dinamakan...',
        options: ['City', 'Suburban', 'Rural-Urban Fringe', 'Rural'],
        correctAnswer: 2,
        explanation: 'Rural-Urban Fringe adalah jalur batas desa-kota yang memperlihatkan percampuran dinamis antara penggunaan lahan pertanian desa dengan perumahan kota.'
      },
      {
        id: 'q98-2',
        question: 'Dampak negatif interaksi keruangan desa-kota bagi wilayah perkotaan akibat masuknya arus migran desa tanpa modal dan keterampilan yang memadai adalah...',
        options: [
          'Melonjaknya harga hasil panen beras lokal di pasar swalayan',
          'Munculnya kawasan permukiman kumuh (slum area) ilegal di bantaran sungai dan kolong jalan layang',
          'Tutupnya sekolah-sekolah dasar di pusat kota karena kekurangan murid',
          'Ketiadaan tenaga kerja untuk industri konstruksi'
        ],
        correctAnswer: 1,
        explanation: 'Arus urbanisasi penduduk desa yang tidak terserap di sektor formal kota seringkali terpaksa tinggal di permukiman kumuh liar (slum area) di tanah-tanah marjinal perkotaan.'
      }
    ],
    references: ['Bintarto, R. (1989). Interaksi Desa-Kota dan Permasalahannya.', 'Champion, T., & Hugo, G. (2004). New Forms of Urbanization: Beyond the Urban-Rural Dichotomy. Ashgate.'],
    relatedTopicIds: ['karakteristik-dan-potensi-desa', 'karakteristik-dan-fungsi-kota', 'urbanisasi-dan-perkembangan-megakota', 'permasalahan-permukiman-dan-perkotaan']
  },
  {
    id: 'urbanisasi-dan-perkembangan-megakota',
    number: 99,
    title: 'Urbanisasi dan Perkembangan Megakota',
    englishTitle: 'Urbanization, Megacities, and Peri-Urban Desakota Dynamics',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menganalisis fenomena urbanisasi global dan nasional: faktor pendorong (push factors) dan penarik (pull factors); konsep Urban Sprawl; perkembangan kota raksasa Megacity (> 10 juta jiwa) dan Megalopolis; serta fenomena unik kawasan peri-urban "Desakota" di Asia karya Terry McGee.',
    keywords: ['urbanisasi', 'faktor pendorong penarik', 'urban sprawl', 'megacity 10 juta jiwa', 'megalopolis konurbasi', 'fenomena desakota terry mcgee'],
    learningObjectives: [
      'Menjelaskan definisi urbanisasi sebagai proses demografi dan perubahan gaya hidup masyarakat.',
      'Membedakan faktor pendorong pedesaan dan faktor penarik perkotaan pemicu lonjakan arus urbanisasi.',
      'Menganalisis konsep "Desakota" Terry McGee yang mencirikan perkembangan lanskap peri-urban di Asia Tenggara (seperti Jawa).'
    ],
    introduction: 'Urbanisasi (Urbanization) memiliki dua dimensi pengertian: dalam arti demografis, urbanisasi adalah meningkatnya proporsi penduduk yang bertempat tinggal di wilayah perkotaan dibandingkan dengan wilayah perdesaan; dalam arti sosiologis, urbanisasi adalah proses difusi cara hidup, pola pikir, dan budaya perkotaan ke pedesaan. Di abad ke-21, laju urbanisasi di Asia berlangsung sangat masif, melahirkan fenomena Megacity (kota dengan populasi lebih dari 10 juta jiwa) dan kawasan campuran intensif yang oleh geografer Terry McGee diistilahkan sebagai "Desakota".',
    sections: [
      {
        subtitle: '1. Faktor Pendorong (Desa) vs Faktor Penarik (Kota)',
        content: 'Perpindahan jutaan warga dari pedesaan ke perkotaan dipicu oleh dua kekuatan simultan:',
        table: {
          headers: ['Kategori Faktor', 'Faktor Pendorong dari Desa (Push Factors)', 'Faktor Penarik dari Kota (Pull Factors)'],
          rows: [
            ['Ekonomi & Lapangan Kerja', 'Penyempitan luas kepemilikan sawah (gurem), upah buruh tani sangat rendah, musim paceklik berkepanjangan', 'Peluang lapangan kerja industri dan jasa yang melimpah, upah minimum regional (UMR) yang jauh lebih tinggi'],
            ['Fasilitas Pelayanan Publik', 'Ketiadaan perguruan tinggi berkualitas, fasilitas rumah sakit dokter spesialis sangat jauh', 'Fasilitas pendidikan unggul lengkap dari TK hingga universitas, rumah sakit modern terlengkap'],
            ['Kenyamanan & Hiburan', 'Kehidupan desa monoton tanpa pusat rekreasi, ikatan adat yang dianggap mengekang kebebasan berekspresi pemuda', 'Gemerlap kehidupan kota (bright lights of the city), mall perbelanjaan megah, bioskop, konser musik, dan kebebasan personal']
          ]
        }
      },
      {
        subtitle: '2. Fenomena "Desakota" di Asia (Terry G. McGee)',
        content: 'Geografer Terry McGee merumuskan fenomena unik di Asia Tenggara (terutama di Pulau Jawa):',
        keyPoints: [
          'Kritik Dikotomi Desa-Kota Barat: Di negara Barat, batas antara kota padat dan desa pedalaman sangat tegas. Namun di Asia, densitas penduduk pedesaan sudah sangat padat sejak awal karena sistem pertanian sawah basah (wet-rice agriculture).',
          'Kawasan Desakota (Peri-Urban): Munculnya zona koridor raksasa di sepanjang jalan raya penghubung kota-kota besar di mana aktivitas pertanian intensif (sawah) berdampingan langsung dalam satu petak dengan pabrik tekstil, perumahan cluster, bengkel, dan toko kelontong.',
          'Mobilitas Sirkuler Sepeda Motor: Masyarakat di kawasan desakota tidak perlu pindah rumah ke pusat kota; kepemilikan sepeda motor dan angkot murah memungkinkan mereka melaju harian bekerja di pabrik kota namun tetap tinggal dan bertani di desa kelahirannya.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tingkatan Ukuran Kota Berdasarkan Populasi',
        items: [
          { name: 'Kota Sedang (Medium City)', description: 'Populasi penduduk berkisar antara 100.000 hingga 500.000 jiwa (contoh: Kota Tegal, Salatiga).' },
          { name: 'Kota Besar (Large City)', description: 'Populasi penduduk berkisar antara 500.000 hingga 1.000.000 jiwa (contoh: Kota Surakarta, Padang).' },
          { name: 'Metropolitan', description: 'Populasi penduduk berkisar antara 1.000.000 hingga 5.000.000 jiwa (contoh: Kota Medan, Bandung, Surabaya).' },
          { name: 'Megacity (Kota Raksasa)', description: 'Kawasan aglomerasi perkotaan yang dihuni lebih dari 10.000.000 jiwa penduduk (contoh: Jabodetabek, Tokyo, Delhi, Shanghai).' }
        ]
      }
    ],
    processes: [
      { stage: 'Mekanisasi Sawah', title: 'Pelepasan Tenaga Kerja Tani', description: 'Penggunaan mesin pemotong padi combine harvester mengurangi kebutuhan buruh panen di desa.' },
      { stage: 'Arus Migrasi', title: 'Pergerakan Menuju Pusat Industri', description: 'Pemuda desa lulusan SMA berangkat merantau naik bus malam menuju kawasan industri Karawang.' },
      { stage: 'Konurbasi Megacity', title: 'Penyatuan Garis Batas Kota', description: 'Jakarta, Depok, dan Bekasi menyatu tanpa jeda fisik membentuk hamparan beton tanpa batas.' }
    ],
    caseStudies: [
      {
        title: 'Koridor Pantura Jawa: Perwujudan Kawasan Desakota Terbesar di Dunia',
        location: 'Koridor Jakarta – Cikampek – Cirebon – Tegal – Semarang – Surabaya',
        description: 'Koridor pantai utara (Pantura) Jawa adalah laboratorium riil konsep Desakota Terry McGee. Di sepanjang koridor ini, tidak ada lagi pemisah tegas antara batas desa dan kota. Pabrik sepatu multinasional berdiri di tengah hamparan sawah hijau produktif, dihubungkan oleh jalan nasional padat truk dan ribuan pekerja pabrik yang berangkat kerja mengendarai sepeda motor dari desa-desa di sekitarnya.',
        takeaway: 'Lanskap desakota memadukan fleksibilitas ekonomi agraris dan industri manufaktur dalam satu ruang.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Fenomena Desakota Terry McGee: Koeksistensi Lahan Sawah Intensif dan Pabrik Industri di Asia',
        caption: 'Bagan percampuran spasial: Petak sawah padi berselang-seling dengan pabrik garmen, rumah tapak, dan jalan tol Pantura.',
        badge: 'Desakota Architecture'
      }
    ],
    terminology: [
      { term: 'Urbanisasi', definition: 'Peningkatan proporsi penduduk yang tinggal di perkotaan dan pergeseran gaya hidup pedesaan menuju corak kebudayaan kota.', scientificTerm: 'Urbanization' },
      { term: 'Megacity', definition: 'Wilayah aglomerasi perkotaan metropolitan yang memiliki jumlah penduduk melebihi 10 juta jiwa.', scientificTerm: 'Megacity' },
      { term: 'Desakota', definition: 'Kawasan peri-urban di Asia di mana aktivitas pertanian intensif dan non-pertanian modern bercampur baur secara padat di sepanjang koridor transportasi.', scientificTerm: 'Desakota (Terry McGee)' }
    ],
    summary: [
      'Urbanisasi dipicu oleh push factors kemiskinan perdesaan dan pull factors lapangan kerja-hiburan perkotaan.',
      'Megacity adalah aglomerasi perkotaan berpenduduk di atas 10 juta jiwa (Jabodetabek berpenduduk 32+ juta jiwa).',
      'Terry McGee merumuskan fenomena "Desakota": percampuran unik sawah dan industri di Asia berkat mobilitas komuter murah.'
    ],
    quiz: [
      {
        id: 'q99-1',
        question: 'Sebuah wilayah aglomerasi perkotaan baru dapat dikategorikan secara resmi sebagai Megacity (Kota Raksasa) di dunia apabila telah dihuni oleh populasi penduduk minimal sebanyak...',
        options: ['1 juta jiwa', '5 juta jiwa', '10 juta jiwa', '50 juta jiwa'],
        correctAnswer: 2,
        explanation: 'Menurut standar Perserikatan Bangsa-Bangsa (PBB), Megacity didefinisikan sebagai wilayah metropolitan perkotaan dengan populasi melampaui 10 juta jiwa penduduk.'
      },
      {
        id: 'q99-2',
        question: 'Fenomena spasial di Pulau Jawa di mana lahan persawahan padi intensif berdampingan langsung dengan pabrik garmen, perumahan cluster, dan jalan raya tanpa sekat pemisah desa-kota yang tegas oleh geografer Terry McGee dinamakan fenomena...',
        options: ['Gated community', 'Desakota', 'Nekropolis', 'Eopolis'],
        correctAnswer: 1,
        explanation: 'Istilah "Desakota" diciptakan oleh Terry McGee (berasal dari gabungan kata bahasa Indonesia desa dan kota) untuk mendeskripsikan zona peri-urban khas Asia.'
      }
    ],
    references: ['McGee, T. G. (1991). The Emergence of Desakota Regions in Asia: Expanding a Hypothesis. University of Hawaii Press.', 'United Nations. (2018). World Urbanization Prospects. UN DESA.'],
    relatedTopicIds: ['karakteristik-dan-fungsi-kota', 'struktur-ruang-kota-dan-zonasi', 'interaksi-desa-dan-kota', 'permasalahan-permukiman-dan-perkotaan']
  },
  {
    id: 'permasalahan-permukiman-dan-perkotaan',
    number: 100,
    title: 'Permasalahan Permukiman dan Tata Kelola Perkotaan',
    englishTitle: 'Urban Pathologies: Slums, Congestion, Urban Sprawl, and Smart Cities',
    categoryId: 'desa-kota',
    difficulty: 'Intermediate',
    description: 'Menelaah patologi dan krisis ruang perkotaan kontemporer: Permukiman Kumuh (Slums & Squatter Settlements), Kemacetan Lalu Lintas (Traffic Congestion), Fenomena Pulau Panas Perkotaan (Urban Heat Island / UHI), Penurunan Muka Tanah (Land Subsidence), Urban Sprawl liar, serta solusi inovatif Kota Cerdas Berkelanjutan (Smart & Sustainable Eco-City).',
    keywords: ['permasalahan kota', 'permukiman kumuh slum', 'urban heat island uhi', 'land subsidence penurunan tanah', 'urban sprawl', 'smart city kota cerdas'],
    learningObjectives: [
      'Menganalisis akar penyebab menjamurnya permukiman kumuh (slum area) dan penanganannya melalui program peremajaan kota.',
      'Menjelaskan mekanisme terbentuknya fenomena Pulau Bahang Perkotaan (Urban Heat Island / UHI) dan mitigasi Ruang Terbuka Hijau (RTH).',
      'Mengevaluasi pilar konsep Smart City dan Transit-Oriented Development (TOD) sebagai solusi terpadu krisis mobilitas perkotaan.'
    ],
    introduction: 'Pertumbuhan kota yang eksplosif tanpa diimbangi kesiapan perencanaan tata ruang melahirkan berbagai patologi perkotaan (urban pathologies). Kota-kota besar di negara berkembang menghadapi perangkap krisis simultan: defisit perumahan layak yang memicu kawasan kumuh ilegal di bantaran sungai, kemacetan lalu lintas kronis akibat ketergantungan kendaraan pribadi, penurunan muka tanah parah akibat eksploitasi air tanah liar, serta pemanasan iklim mikro (Urban Heat Island). Mengatasi krisis ini menuntut transformasi tata kelola menuju konsep Smart Eco-City.',
    sections: [
      {
        subtitle: '1. Enam Masalah Krusial Tata Kelola Perkotaan',
        content: 'Permasalahan utama yang melanda wilayah perkotaan kontemporer meliputi:',
        table: {
          headers: ['Masalah Perkotaan', 'Mekanisme Terjadinya Masalah', 'Dampak Kerugian Spasial & Ekologis', 'Solusi Mitigasi Berkelanjutan'],
          rows: [
            ['1. Permukiman Kumuh (Slums)', 'Pendatang miskin tidak mampu membeli rumah legal, membangun gubuk liar di sempadan rel dan bantaran sungai', 'Sanitasi buruk, kerentanan tinggi terhadap kebakaran massal dan banjir luapan air sungai', 'Program bedah rumah kampung deret, pembangunan rumah susun sewa sederhana (Rusunawa)'],
            ['2. Kemacetan Lalu Lintas', 'Pertumbuhan panjang jalan (<1%/thn) kalah jauh dari pertumbuhan mobil & motor (>8%/thn)', 'Pemborosan bensin bernilai ratusan triliun, polusi udara PM2.5 pekat, stres psikologis warga', 'Pembangunan angkutan massal terpadu: MRT, LRT, Bus Rapid Transit (TransJakarta), dan skema ERP'],
            ['3. Urban Heat Island (UHI)', 'Permukaan aspal dan beton menyerap radiasi matahari, minimnya pohon pendingin evapotranspirasi', 'Suhu udara pusat kota lebih panas 2–5°C daripada daerah pinggiran, lonjakan konsumsi listrik AC', 'Penyediaan Ruang Terbuka Hijau (RTH) minimal 30% kota, atap hijau (green roof), dinding vertikal'],
            ['4. Land Subsidence (Amblesan)', 'Penyedotan air tanah secara masif oleh gedung komersial dan beban fisik ribuan gedung beton', 'Permukaan tanah ambles 5–20 cm/tahun, memicu intrusi air laut asin dan banjir rob permanen pesisir', 'Moratorium izin sumur bor dalam, pipanisasi air minum PDAM dari waduk, tanggul laut NCICD'],
            ['5. Urban Sprawl (Perembetan Liar)', 'Ekspansi permukiman tapak pinggiran kota yang melompat-lompat dan tidak teratur (leapfrog)', 'Konversi masif lahan sawah beririgasi teknis, biaya penarikan pipa listrik dan jalan membengkak', 'Penerapan batas pertumbuhan perkotaan (Urban Growth Boundary / UGB) dan kawasan TOD'],
            ['6. Krisis Sampah Padat', 'Konsumsi tinggi masyarakat kota menghasilkan ribuan ton sampah harian tanpa pemilahan sumber', 'TPA meledak longsor, pencemaran air lindi beracun ke air tanah warga', 'Penerapan ekonomi sirkular 3R, bank sampah digital, dan pembangkit listrik tenaga sampah (PLTSa)']
          ]
        }
      },
      {
        subtitle: '2. Konsep Solusi: Smart City dan Transit-Oriented Development (TOD)',
        content: 'Dua paradigma perencanaan perkotaan modern yang sedang diterapkan:',
        keyPoints: [
          'Transit-Oriented Development (TOD): Pola penataan ruang perkotaan kompak berkepadatan tinggi yang memusatkan perumahan apartemen, kantor, dan mall dalam radius jalan kaki 400–800 meter di sekitar stasiun transit massal (stasiun MRT/KRL). TOD meniadakan kebutuhan memakai mobil pribadi harian.',
          'Smart City (Kota Cerdas): Pemanfaatan teknologi sensor Internet of Things (IoT), kecerdasan buatan, dan integrasi big data untuk memantau kemacetan lampu lalu lintas adaptif, sensor banjir dini di pintu air, dan pelaporan keluhan warga secara real-time via aplikasi mobile.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Bentuk Kawasan Kumuh Kota',
        items: [
          { name: 'Slum Area (Kawasan Kumuh Legal)', description: 'Permukiman yang berdiri di atas tanah milik sendiri yang bersertifikat namun kondisinya sangat padat, rusak, dan minim sanitasi.' },
          { name: 'Squatter Settlement (Permukiman Liar)', description: 'Gubuk-gubuk liar yang dibangun tanpa hak hukum di atas tanah milik negara (bantaran sungai, kolong jalan tol, sempadan rel KA).' }
        ]
      }
    ],
    processes: [
      { stage: 'Defisit Hunian', title: 'Ledakan Penduduk Urbanit', description: 'Harga kaveling tanah perkotaan meroket di luar jangkauan daya beli masyarakat berpenghasilan rendah (MBR).' },
      { stage: 'Sprawl Pinggiran', title: 'Pembangunan Komuter Tersebar', description: 'Pengembang membangun ribuan rumah di pinggiran sawah memicu jutaan kendaraan pribadi memadati jalan raya tiap pagi.' },
      { stage: 'Restrukturisasi Hijau', title: 'Pembangunan Koridor MRT & RTH', description: 'Pemerintah kota merevitalisasi trotoar ramah pejalan kaki, menanam pohon peneduh trembesi, dan membangun jaringan rel MRT.' }
    ],
    caseStudies: [
      {
        title: 'Penurunan Muka Tanah dan Mitigasi Banjir Rob di Pesisir Jakarta Utara dan Semarang',
        location: 'Wilayah Pesisir Teluk Jakarta dan Pesisir Tambak Lorok Semarang, Indonesia',
        description: 'Kota Jakarta dan Semarang menghadapi ancaman eksistensial penurunan muka tanah tercepat di dunia (di beberapa titik mencapai 10-15 cm/tahun) akibat konsumsi air tanah bebas oleh industri dan perhotelan serta konsolidasi alami endapan aluvial muda. Dampaknya, rob laut pasang merendam ribuan rumah setiap bulan. Pemerintah merespons dengan membangun tanggul laut penahan rob, menutup ratusan sumur air tanah dalam liar, dan mempercepat jaringan pipa air minum SPAM Umbulan dan Jatiluhur.',
        takeaway: 'Eksploitasi air tanah yang serakah di wilayah delta rawan amblesan mengancam keberlangsungan eksistensi kota di masa depan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Mekanisme Fenomena Urban Heat Island (UHI) dan Solusi Transit-Oriented Development (TOD)',
        caption: 'Bagan perbandingan suhu pusat kota panas (kubah UHI) vs pinggiran sejuk, serta ilustrasi radius jalan kaki 500m stasiun MRT (TOD).',
        badge: 'Urban Pathology'
      }
    ],
    terminology: [
      { term: 'Urban Heat Island (UHI)', definition: 'Fenomena mikroklimat di mana suhu udara di kawasan perkotaan jauh lebih panas dibandingkan dengan kawasan perdesaan di sekitarnya.', scientificTerm: 'Urban Heat Island' },
      { term: 'Transit-Oriented Development (TOD)', definition: 'Konsep perencanaan kota kompak yang memaksimalkan pembangunan pemukiman dan perkantoran dalam jarak jangkau jalan kaki ke stasiun transit.', scientificTerm: 'Transit-Oriented Development' },
      { term: 'Land Subsidence', definition: 'Peristiwa penurunan elevasi ketinggian permukaan tanah secara perlahan atau mendadak akibat pemadatan lapisan akuifer pascapenyedotan air tanah berlebih.', scientificTerm: 'Land Subsidence' }
    ],
    summary: [
      'Patologi perkotaan meliputi permukiman kumuh (slums), kemacetan, Urban Heat Island (UHI), amblesan tanah, dan urban sprawl.',
      'UHI dipicu oleh dominasi aspal-beton; amblesan tanah dipicu penyedotan air tanah sumur dalam secara berlebihan.',
      'Solusi modern mencakup Transit-Oriented Development (TOD), RTH minimal 30%, dan tata kelola Smart City terpadu.'
    ],
    quiz: [
      {
        id: 'q100-1',
        question: 'Fenomena mikroklimat di mana suhu udara di pusat kota Jakarta terasa lebih panas 3 hingga 5 derajat Celsius dibandingkan dengan daerah sejuk di pinggiran Bogor dan Puncak akibat dominasi permukaan aspal beton penyerap panas dan minimnya pepohonan dinamakan...',
        options: ['El Niño Southern Oscillation', 'Urban Heat Island (Pulau Panas Perkotaan)', 'Inversi suhu troposfer', 'Efek Coriolis'],
        correctAnswer: 1,
        explanation: 'Urban Heat Island (UHI) adalah fenomena iklim mikro perkotaan yang lebih panas akibat minimnya vegetasi hijau dan tingginya material beton penyerap panas serta emisi mesin kendaraan.'
      },
      {
        id: 'q100-2',
        question: 'Konsep penataan ruang kota modern yang memadukan kawasan perumahan apartemen, perkantoran, dan pusat perbelanjaan terpadu dalam radius jarak jalan kaki (400-800 meter) di sekitar stasiun transit kereta api cepat atau MRT guna menekan ketergantungan mobil pribadi dinamakan...',
        options: ['Urban sprawl', 'Transit-Oriented Development (TOD)', 'Concentric zoning', 'Gentrification'],
        correctAnswer: 1,
        explanation: 'Transit-Oriented Development (TOD) adalah konsep pembangunan kota kompak berorientasi transit publik dalam radius jangkauan jalan kaki dari stasiun moda transportasi massal.'
      }
    ],
    references: ['Glaeser, E. (2011). Triumph of the City. Penguin Press.', 'UN-Habitat. (2020). World Cities Report 2020: The Value of Sustainable Urbanization.'],
    relatedTopicIds: ['karakteristik-dan-fungsi-kota', 'struktur-ruang-kota-dan-zonasi', 'teori-struktur-kota-burgess-hoyt-harris', 'urbanisasi-dan-perkembangan-megakota']
  },

  // ==========================================
  // CATEGORY N: Tata Ruang dan Perencanaan Wilayah (101-105)
  // ==========================================
  {
    id: 'konsep-dan-landasan-hukum-tata-ruang',
    number: 101,
    title: 'Konsep dan Landasan Hukum Tata Ruang',
    englishTitle: 'Spatial Planning Framework: Principles, Concepts, and Law No. 26/2007',
    categoryId: 'tata-ruang',
    difficulty: 'Intermediate',
    description: 'Menelaah sains penataan ruang di Indonesia: pengertian Ruang, Tata Ruang, dan Penataan Ruang menurut Undang-Undang No. 26 Tahun 2007 jo UU Cipta Kerja; asas-asas penataan ruang (keterpaduan, keserasian, keberlanjutan, kepastian hukum); serta 3 tahapan penyelenggaraan penataan ruang (Perencanaan, Pemanfaatan, dan Pengendalian Ruang).',
    keywords: ['penataan ruang', 'uu 26 2007', 'perencanaan pemanfaatan pengendalian ruang', 'asas keterpaduan ruang', 'keserasian ruang'],
    learningObjectives: [
      'Menjelaskan definisi ruang, tata ruang, dan penataan ruang menurut UU No. 26/2007.',
      'Mengidentifikasi asas-asas filosofis dan yuridis penyelenggaraan penataan ruang nasional.',
      'Menganalisis tiga tahapan penyelenggaraan penataan ruang: perencanaan tata ruang, pemanfaatan ruang, dan pengendalian pemanfaatan ruang.'
    ],
    introduction: 'Ruang wilayah Negara Kesatuan Republik Indonesia merupakan karunia Tuhan Yang Maha Esa yang berwujud wadah kehidupan bagi bangsa Indonesia. Karena ruang bersifat terbatas dan tidak bertambah, sementara jumlah penduduk dan kebutuhan aktivitas terus melonjak eksponensial, ruang mutlak harus ditata dan dikelola secara bijaksana. Undang-Undang Republik Indonesia Nomor 26 Tahun 2007 tentang Penataan Ruang hadir sebagai payung hukum utama untuk menjamin terwujudnya ruang wilayah nasional yang aman, nyaman, produktif, dan berkelanjutan berlandaskan Wawasan Nusantara dan Ketahanan Nasional.',
    sections: [
      {
        subtitle: '1. Definisi Tiga Istilah Kunci Penataan Ruang (UU 26/2007)',
        content: 'Undang-undang membedakan secara tegas tiga istilah yang sering tertukar:',
        table: {
          headers: ['Istilah Yuridis', 'Definisi Menurut Undang-Undang', 'Cakupan & Kedudukan Hukum'],
          rows: [
            ['1. Ruang (Space)', 'Wadah yang meliputi ruang darat, ruang laut, dan ruang udara, termasuk ruang di dalam bumi sebagai satu kesatuan wilayah, tempat manusia dan makhluk lain hidup, melakukan kegiatan, dan memelihara kelangsungan hidupnya', 'Substansi fisik material tiga dimensi yang menjadi wadah kedaulatan NKRI'],
            ['2. Tata Ruang (Spatial Plan)', 'Wujud struktur ruang dan pola ruang yang disusun secara hierarkis dan terencana', 'Cetak biru (blueprint) geometris yang menetapkan jaringan infrastruktur dan peruntukan fungsi lahan'],
            ['3. Penataan Ruang (Spatial Planning Process)', 'Suatu sistem proses perencanaan tata ruang, pemanfaatan ruang, dan pengendalian pemanfaatan ruang', 'Aktivitas dinamis pemerintah dan masyarakat dalam menyusun, melaksanakan, dan mengawasi pemanfaatan ruang']
          ]
        }
      },
      {
        subtitle: '2. Tiga Siklus Penyelenggaraan Penataan Ruang',
        content: 'Penyelenggaraan penataan ruang dijalankan melalui tiga tahapan terintegrasi yang saling mengunci:',
        keyPoints: [
          '1. Perencanaan Tata Ruang: Proses untuk menghasilkan Rencana Tata Ruang (RTR) melalui telaah ilmiah daya dukung lingkungan, potensi ekonomi, dan proyeksi kependudukan.',
          '2. Pemanfaatan Ruang: Upaya untuk mewujudkan struktur ruang dan pola ruang sesuai dengan RTR melalui pelaksanaan program pembangunan beserta pembiayaannya (APBN, APBD, dan investasi swasta).',
          '3. Pengendalian Pemanfaatan Ruang: Upaya untuk mewujudkan tertib tata ruang melalui penetapan peraturan zonasi, perizinan kesesuaian kegiatan pemanfaatan ruang (KKPR), pemberian insentif dan disinsentif, serta pengenaan sanksi hukum pidana dan administratif bagi pelanggar izin.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Asas-Asas Pokok Penataan Ruang (Pasal 2 UU 26/2007)',
        items: [
          { name: 'Keterpaduan & Keserasian', description: 'Memadukan berbagai sektor pembangunan (pertanian, pertambangan, perhubungan) tanpa ada yang saling meniadakan.' },
          { name: 'Keberlanjutan Lingkungan', description: 'Menjamin terpeliharanya daya dukung dan daya tampung lingkungan hidup bagi generasi mendatang.' },
          { name: 'Kepastian Hukum & Keadilan', description: 'Menjamin perlindungan hak milik masyarakat dan kepastian berusaha tanpa diskriminasi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penyusunan Rencana', title: 'Perumusan Dokumen RTRW', description: 'Kajian lingkungan hidup strategis (KLHS) dan konsultasi publik menyusun draft peta tata ruang.' },
      { stage: 'Legalisasi Perda', title: 'Pengesahan Menjadi Peraturan Daerah', description: 'DPRD bersama Kepala Daerah mengesahkan draft RTRW menjadi Peraturan Daerah mengikat.' },
      { stage: 'Pengawasan Lapangan', title: 'Penertiban Pelanggaran Zonasi', description: 'Penyidik pegawai negeri sipil (PPNS) menyegel bangunan vila liar di zona resapan air lindung.' }
    ],
    caseStudies: [
      {
        title: 'Penertiban Pelanggaran Tata Ruang di Kawasan Resapan Air Puncak Bogor',
        location: 'Kawasan Puncak, Kabupaten Bogor, Jawa Barat, Indonesia',
        description: 'Kawasan Puncak ditetapkan sebagai kawasan lindung resapan air nasional untuk menjaga keselamatan hidrologis kawasan hilir Jakarta. Namun, ribuan vila megah dan tempat wisata komersial dibangun secara ilegal merambah kebun teh dan hutan lindung. Pemerintah pusat bersama Kementerian ATR/BPN melakukan penertiban tegas: membongkar ratusan vila tak berizin dan mengembalikan fungsinya menjadi hutan lindung guna mencegah banjir bandang kiriman ke ibu kota.',
        takeaway: 'Pengendalian pemanfaatan ruang melalui sanksi tegas mutlak diperlukan agar rencana tata ruang tidak menjadi macan kertas.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Siklus Penyelenggaraan Penataan Ruang: Perencanaan → Pemanfaatan → Pengendalian Ruang',
        caption: 'Bagan siklus melingkar: Perencanaan RTRW → Pemanfaatan Ruang (Program & KKPR) → Pengendalian Ruang (Zonasi, Insentif, Sanksi).',
        badge: 'Planning Cycle'
      }
    ],
    terminology: [
      { term: 'Penataan Ruang', definition: 'Suatu sistem proses perencanaan tata ruang, pemanfaatan ruang, dan pengendalian pemanfaatan ruang.', scientificTerm: 'Spatial Planning' },
      { term: 'Struktur Ruang', definition: 'Susunan pusat-pusat permukiman dan sistem jaringan prasarana dan sarana yang berfungsi sebagai pendukung kegiatan sosial ekonomi masyarakat.', scientificTerm: 'Spatial Structure' },
      { term: 'Pola Ruang', definition: 'Distribusi peruntukan ruang dalam suatu wilayah yang meliputi peruntukan ruang untuk fungsi lindung dan peruntukan ruang untuk fungsi budi daya.', scientificTerm: 'Spatial Pattern' }
    ],
    summary: [
      'UU No. 26/2007 adalah landasan yuridis utama penyelenggaraan penataan ruang di Indonesia.',
      'Tata ruang terdiri dari dua elemen pokok: Struktur Ruang (jaringan simpul & koridor) dan Pola Ruang (zonasi lindung & budi daya).',
      'Tiga siklus penataan ruang adalah: Perencanaan Ruang, Pemanfaatan Ruang, dan Pengendalian Pemanfaatan Ruang.'
    ],
    quiz: [
      {
        id: 'q101-1',
        question: 'Menurut Undang-Undang Nomor 26 Tahun 2007 tentang Penataan Ruang, yang dimaksud dengan "Struktur Ruang" adalah...',
        options: [
          'Distribusi peruntukan kawasan lindung dan kawasan budi daya',
          'Susunan pusat-pusat permukiman dan sistem jaringan prasarana transportasi, energi, dan air yang menghubungkannya',
          'Tingkat kemiringan lereng dan ketinggian gunung di atas permukaan laut',
          'Jumlah penduduk laki-laki dan perempuan dalam piramida penduduk'
        ],
        correctAnswer: 1,
        explanation: 'Struktur ruang didefinisikan sebagai susunan pusat-pusat permukiman (hierarki kota) dan sistem jaringan prasarana sarana (jalan, listrik, telekomunikasi) pendukung kegiatan masyarakat.'
      },
      {
        id: 'q101-2',
        question: 'Tindakan pemerintah menyegel dan merobohkan vila tak berizin yang dibangun di zona hutan lindung resapan air Puncak Bogor tergolong ke dalam tahapan penyelenggaraan penataan ruang...',
        options: ['Perencanaan tata ruang', 'Pemanfaatan ruang', 'Pengendalian pemanfaatan ruang', 'Eksploitasi sumber daya'],
        correctAnswer: 2,
        explanation: 'Tindakan penertiban, pemberian sanksi administratif/pidana, dan pembongkaran bangunan ilegal merupakan bagian dari Pengendalian Pemanfaatan Ruang.'
      }
    ],
    references: ['Undang-Undang Republik Indonesia Nomor 26 Tahun 2007 tentang Penataan Ruang.', 'Peraturan Pemerintah Nomor 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang.'],
    relatedTopicIds: ['rencana-tata-ruang-wilayah-rtrw', 'struktur-ruang-dan-pola-ruang', 'alih-fungsi-lahan-dan-dampaknya', 'kebijakan-pembangunan-wilayah-indonesia']
  },
  {
    id: 'rencana-tata-ruang-wilayah-rtrw',
    number: 102,
    title: 'Hierarki Rencana Tata Ruang Wilayah (RTRW)',
    englishTitle: 'Hierarchical Spatial Plans: RTRWN, RTRWP, RTRWK, and RDTR',
    categoryId: 'tata-ruang',
    difficulty: 'Intermediate',
    description: 'Menelaah hierarki dokumen perencanaan tata ruang di Indonesia dari skala makro hingga mikro: Rencana Tata Ruang Wilayah Nasional (RTRWN skala 1:1.000.000), RTRW Provinsi (RTRWP skala 1:250.000), RTRW Kabupaten/Kota (RTRWK/RTRWKot skala 1:50.000 - 1:25.000), serta Rencana Detail Tata Ruang (RDTR skala 1:5.000) sebagai basis izin Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR).',
    keywords: ['rencana tata ruang wilayah', 'rtrw nasional rtrwn', 'rtrw provinsi rtrwp', 'rtrw kabupaten kota', 'rencana detail tata ruang rdtr', 'skala peta tata ruang', 'kkpr izin pemanfaatan ruang'],
    learningObjectives: [
      'Menjelaskan hierarki bertingkat dokumen tata ruang di Indonesia beserta prinsip komplementaritasnya.',
      'Membandingkan jangka waktu masa berlaku, skala kedalaman peta, dan muatan substansi dari RTRWN, RTRWP, RTRWK, dan RDTR.',
      'Menganalisis peran strategis RDTR digital (RDTR Interaktif) dalam percepatan perizinan investasi berusaha berbasis Online Single Submission (OSS).'
    ],
    introduction: 'Dalam sistem penataan ruang Indonesia, perencanaan ruang disusun secara bertingkat dan berjenjang (hierarkis) mengikuti prinsip komplementaritas dan subsidiaritas: rencana di tingkat bawah harus mengacu, merinci, dan tidak boleh bertentangan dengan rencana di tingkat yang lebih tinggi. Dokumen Rencana Tata Ruang Wilayah (RTRW) memandu pembangunan fisik jangka panjang (20 tahun) yang ditinjau kembali setiap 5 tahun, bergerak dari arahan makro strategis nasional hingga tingkat kaveling persil tanah operasional di perkotaan.',
    sections: [
      {
        subtitle: '1. Matriks Hierarki Dokumen Rencana Tata Ruang di Indonesia',
        content: 'Perbandingan lengkap 4 tingkatan dokumen perencanaan tata ruang:',
        table: {
          headers: ['Dokumen Tata Ruang', 'Singkatan', 'Skala Ketelitian Peta', 'Masa Berlaku', 'Fokus Substansi Kebijakan'],
          rows: [
            ['1. RTRW Nasional', 'RTRWN', 'Minimal 1 : 1.000.000', '20 Tahun (Review 5 tahun sekali)', 'Menetapkan Pusat Kegiatan Nasional (PKN), jaringan jalan tol lintas pulau, pelabuhan hub internasional, dan Kawasan Strategis Nasional (KSN)'],
            ['2. RTRW Provinsi', 'RTRWP', 'Minimal 1 : 250.000', '20 Tahun (Review 5 tahun sekali)', 'Menyelaraskan kebijakan nasional ke tingkat regional, menetapkan Pusat Kegiatan Wilayah (PKW), jalan provinsi, dan Kawasan Strategis Provinsi (KSP)'],
            ['3. RTRW Kabupaten / Kota', 'RTRWK / RTRWKot', 'Kabupaten: 1 : 50.000; Kota: 1 : 25.000', '20 Tahun (Review 5 tahun sekali)', 'Menetapkan Pusat Kegiatan Lokal (PKL), jalan kabupaten/kota, pembagian blok pola ruang lindung dan budi daya, serta alokasi RTH minimal 30%'],
            ['4. Rencana Detail Tata Ruang', 'RDTR', 'Sangat Detail: 1 : 5.000', '20 Tahun (Review 5 tahun sekali)', 'Rencana operasional tingkat kecamatan/blok peruntukan; memuat Peraturan Zonasi (Zoning Text) spesifik yang menjadi dasar legal izin otomatis KKPR OSS']
          ]
        }
      },
      {
        subtitle: '2. Peran Revolusioner RDTR Digital dalam Perizinan Berusaha (KKPR OSS)',
        content: 'Sejak disahkannya UU Cipta Kerja, peran RDTR menjadi ujung tombak perizinan investasi:',
        keyPoints: [
          'Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR): Izin dasar pertama yang wajib dimiliki oleh pelaku usaha sebelum mengajukan persetujuan bangunan gedung (PBG) dan izin lingkungan.',
          'Sistem Digital Online Single Submission (OSS): Bagi kabupaten/kota yang telah mengintegrasikan peta digital RDTR-nya ke sistem OSS Kementerian Investasi/BKPM, izin konfirmasi KKPR dapat terbit otomatis dalam hitungan menit tanpa birokrasi manual tatap muka.',
          'Pencegahan Praktik Korupsi Ruang: Keberadaan RDTR digital berbasis peta 1:5.000 yang transparan mencegah oknum pejabat memperjualbelikan perubahan peruntukan lahan secara sepihak.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Hierarki Simpul Pusat Permukiman (Struktur Ruang)',
        items: [
          { name: 'Pusat Kegiatan Nasional (PKN)', description: 'Kawasan perkotaan yang melayani kegiatan berskala internasional, nasional, atau beberapa provinsi (contoh: Jakarta, Medan, Surabaya, Makassar).' },
          { name: 'Pusat Kegiatan Wilayah (PKW)', description: 'Kawasan perkotaan yang melayani kegiatan skala provinsi atau beberapa kabupaten/kota (contoh: Kota Cirebon, Madiun, Bukittinggi).' },
          { name: 'Pusat Kegiatan Lokal (PKL)', description: 'Kawasan perkotaan yang melayani kegiatan skala kabupaten/kota atau beberapa kecamatan di sekitarnya.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penyusunan Peta Dasar', title: 'Pemetaan Ortofoto BIG', description: 'Badan Informasi Geospasial (BIG) memvalidasi peta dasar resolusi tinggi skala 1:5.000.' },
      { stage: 'Penyusunan Peraturan Zonasi', title: 'Perumusan Text Zoning', description: 'Menentukan intensitas bangunan: Koefisien Dasar Bangunan (KDB) dan Koefisien Lantai Bangunan (KLB).' },
      { stage: 'Integrasi Digital OSS', title: 'Penerbitan KKPR Otomatis', description: 'Sistem komputer mencocokkan koordinat pemohon dengan peta RDTR dan menerbitkan izin resmi.' }
    ],
    caseStudies: [
      {
        title: 'Percepatan Investasi Industri Melalui RDTR Digital di Kawasan Industri Terpadu (KIT) Batang',
        location: 'Kabupaten Batang, Jawa Tengah, Indonesia',
        description: 'Pemerintah Kabupaten Batang berhasil mengesahkan Perda RDTR digital kawasan industri seluas ribuan hektar dengan skala 1:5.000 yang langsung terhubung ke sistem OSS nasional. Hasilnya, investor multinasional (seperti pabrik kaca raksasa KCC Glass Korea dan pabrik pipa Wavin Belanda) memperoleh kepastian izin pemanfaatan ruang KKPR hanya dalam waktu kurang dari 24 jam, mengeliminasi calo perizinan dan mempercepat penyerapan ribuan tenaga kerja lokal.',
        takeaway: 'RDTR digital skala detail 1:5.000 adalah jaminan kepastian hukum spasial bagi investasi ekonomi berkelanjutan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Piramida Hierarki Tata Ruang: RTRWN (1:1 Juta) → RTRWP (1:250 Ribu) → RTRWK (1:50 Ribu) → RDTR (1:5 Ribu)',
        caption: 'Bagan piramida: Puncak makro RTRW Nasional menurun hingga dasar operasional RDTR detail persil 1:5.000.',
        badge: 'Spatial Hierarchy'
      }
    ],
    terminology: [
      { term: 'RTRW (Rencana Tata Ruang Wilayah)', definition: 'Dokumen perencanaan tata ruang umum yang memuat tujuan, kebijakan, strategi, rencana struktur ruang, dan rencana pola ruang wilayah.', scientificTerm: 'General Spatial Plan' },
      { term: 'RDTR (Rencana Detail Tata Ruang)', definition: 'Rencana rinci tata ruang skala 1:5.000 yang dilengkapi peraturan zonasi sebagai dasar operasional pemberian izin pemanfaatan ruang.', scientificTerm: 'Detailed Spatial Plan' },
      { term: 'KKPR', definition: 'Kesesuaian Kegiatan Pemanfaatan Ruang; dokumen sah kesesuaian antara rencana kegiatan pemohon dengan dokumen tata ruang resmi.', scientificTerm: 'Spatial Conformity Permit' }
    ],
    summary: [
      'Hierarki tata ruang Indonesia tersusun runtut: RTRW Nasional → RTRW Provinsi → RTRW Kabupaten/Kota → RDTR.',
      'Skala peta bergerak dari makro (RTRWN 1:1.000.000) hingga mikro operasional (RDTR 1:5.000).',
      'RDTR digital skala 1:5.000 adalah landasan mutlak penerbitan izin investasi berusaha otomatis (KKPR OSS).'
    ],
    quiz: [
      {
        id: 'q102-1',
        question: 'Dokumen perencanaan tata ruang yang memiliki skala ketelitian peta paling detail (skala 1 : 5.000) dan menjadi dasar legal operasional langsung bagi penerbitan izin Kesesuaian Kegiatan Pemanfaatan Ruang (KKPR) adalah...',
        options: [
          'Rencana Tata Ruang Wilayah Nasional (RTRWN)',
          'Rencana Tata Ruang Wilayah Provinsi (RTRWP)',
          'Rencana Tata Ruang Wilayah Kabupaten (RTRWK)',
          'Rencana Detail Tata Ruang (RDTR)'
        ],
        correctAnswer: 3,
        explanation: 'RDTR (Rencana Detail Tata Ruang) disusun pada skala detail 1:5.000 dan memuat peraturan zonasi terperinci yang menjadi acuan izin otomatis KKPR OSS.'
      },
      {
        id: 'q102-2',
        question: 'Sebuah kawasan perkotaan yang ditetapkan dalam dokumen RTRW Nasional sebagai kota yang melayani kegiatan berskala internasional, nasional, atau mencakup beberapa provinsi sekaligus dinamakan...',
        options: [
          'Pusat Kegiatan Lokal (PKL)',
          'Pusat Kegiatan Wilayah (PKW)',
          'Pusat Kegiatan Nasional (PKN)',
          'Pusat Kegiatan Lingkungan (PKLing)'
        ],
        correctAnswer: 2,
        explanation: 'Pusat Kegiatan Nasional (PKN) adalah kawasan perkotaan yang diarahkan melayani kegiatan berskala nasional, internasional, atau lintas provinsi.'
      }
    ],
    references: ['Peraturan Pemerintah Nomor 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang.', 'Kementerian ATR/BPN. (2021). Pedoman Penyusunan RDTR dan Peraturan Zonasi.'],
    relatedTopicIds: ['konsep-dan-landasan-hukum-tata-ruang', 'struktur-ruang-dan-pola-ruang', 'alih-fungsi-lahan-dan-dampaknya', 'kebijakan-pembangunan-wilayah-indonesia']
  },
  {
    id: 'struktur-ruang-dan-pola-ruang',
    number: 103,
    title: 'Struktur Ruang dan Pola Ruang',
    englishTitle: 'Spatial Structure and Spatial Pattern: Protected vs Cultivated Zones',
    categoryId: 'tata-ruang',
    difficulty: 'Intermediate',
    description: 'Mendalami dua komponen inti substansi rencana tata ruang: Struktur Ruang (sistem pusat permukiman PKN/PKW/PKL dan sistem jaringan infrastruktur transportasi, energi, telekomunikasi, sumber daya air); serta Pola Ruang (Kawasan Lindung vs Kawasan Budi Daya, batas sempadan sungai, kawasan resapan air, serta mandat RTH 30%).',
    keywords: ['struktur ruang', 'pola ruang', 'kawasan lindung', 'kawasan budi daya', 'ruang terbuka hijau rth 30 persen', 'sempadan sungai', 'infrastruktur transportasi'],
    learningObjectives: [
      'Menjelaskan perbedaan fundamental antara konsep Struktur Ruang dan Pola Ruang dalam RTRW.',
      'Membedakan jenis-jenis Kawasan Lindung (hutan lindung, resapan air, cagar alam, sempadan pantai) dan Kawasan Budi Daya (pertanian, permukiman, industri).',
      'Menganalisis implementasi ketentuan undang-undang mengenai proporsi Ruang Terbuka Hijau (RTH) minimal 30% di wilayah perkotaan.'
    ],
    introduction: 'Dalam setiap dokumen tata ruang, substansi perencanaan selalu dibedah ke dalam dua pilar utama: Struktur Ruang dan Pola Ruang. Jika kita mengibaratkan wilayah sebagai tubuh manusia, Struktur Ruang adalah "tulang kerangka dan pembuluh darahnya" (jaringan jalan, rel, listrik, dan pusat-pusat kota), sedangkan Pola Ruang adalah "daging dan organ-organnya" (pembagian zona lahan untuk hutan lindung, persawahan padi, perumahan, dan pabrik industri). Keseimbangan keduanya menentukan kelestarian lingkungan dan efisiensi ekonomi wilayah.',
    sections: [
      {
        subtitle: '1. Komponen Struktur Ruang: Kerangka & Jaringan Wilayah',
        content: 'Struktur ruang terdiri atas dua komponen fisik utama:',
        table: {
          headers: ['Komponen Struktur Ruang', 'Unsur Fisik Spasial', 'Fungsi Pelayanan Wilayah'],
          rows: [
            ['1. Sistem Pusat Permukiman', 'Hierarki pusat kegiatan: PKN (Nasional), PKW (Provinsi), PKL (Kabupaten), PPK (Kecamatan), dan PPL (Desa)', 'Mendistribusikan layanan pemerintahan, fasilitas perdagangan grosir, dan pusat rujukan sosial secara merata'],
            ['2. Sistem Jaringan Prasarana', 'Jaringan transportasi darat (jalan tol, arteri, rel), laut (pelabuhan hub), udara (bandara), energi (SUTET, pipa gas), telekomunikasi (serat optik), dan sumber daya air (waduk, saluran irigasi primer)', 'Menjamin kelancaran mobilitas warga, efisiensi rantai pasok logistik bahan pokok, dan ketahanan energi nasional']
          ]
        }
      },
      {
        subtitle: '2. Komponen Pola Ruang: Kawasan Lindung vs Kawasan Budi Daya',
        content: 'Pola ruang membagi seluruh permukaan tanah dan perairan ke dalam dua peruntukan besar:',
        keyPoints: [
          'A. Kawasan Lindung (Protected Zone): Wilayah yang ditetapkan dengan fungsi utama melindungi kelestarian lingkungan hidup yang mencakup sumber daya alam dan sumber daya buatan. Meliputi: Kawasan Hutan Lindung, Kawasan Resapan Air, Sempadan Sungai (10–100 meter dari bibir sungai dilarang didirikan bangunan), Sempadan Pantai (minimal 100 meter dari pasang tertinggi), serta Kawasan Suaka Alam dan Cagar Budaya.',
          'B. Kawasan Budi Daya (Cultivated Zone): Wilayah yang ditetapkan dengan fungsi utama untuk dibudidayakan atas dasar kondisi dan potensi sumber daya alam, manusia, dan buatan. Meliputi: Kawasan Hutan Produksi, Pertanian Pangan Berkelanjutan (LP2B), Perkebunan, Permukiman Perkotaan/Pedesaan, Pertambangan, dan Kawasan Industri.',
          'Mandat RTH Perkotaan Minimal 30%: UU 26/2007 mewajibkan proporsi Ruang Terbuka Hijau (RTH) pada wilayah kota paling sedikit 30% dari luas wilayah kota, yang terdiri dari 20% RTH publik (taman kota, jalur hijau jalan, TPU) dan 10% RTH privat (halaman rumah warga, kebun instansi).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kategori Ruang Terbuka Hijau (RTH) Perkotaan',
        items: [
          { name: 'RTH Publik (Minimal 20%)', description: 'Taman kota, hutan kota, sabuk hijau (green belt), pemakaman umum, dan tanaman sempadan rel yang dimiliki pemda dan bebas diakses warga.' },
          { name: 'RTH Privat (Minimal 10%)', description: 'Kebun atau pekarangan rumah pribadi, halaman gedung perkantoran swasta, dan taman atap mal yang dikelola pemilik lahan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Kemampuan Lahan', title: 'Skoring Satuan Kemampuan Lahan (SKL)', description: 'Menghitung skor lereng, kepekaan erosi, dan drainase tanah untuk memisahkan zona lindung dan budi daya.' },
      { stage: 'Delimitasi Zona Lindung', title: 'Penetapan Garis Sempadan', description: 'Menarik garis buffer sempadan sungai 50 meter dan menetapkan moratorium izin bangunan di kawasan hulu.' },
      { stage: 'Alokasi Kawasan Budi Daya', title: 'Plotting Zonasi Komersial', description: 'Menetapkan kawasan perumahan baru dan sentra industri di lahan bertopografi datar bebas banjir.' }
    ],
    caseStudies: [
      {
        title: 'Perjuangan Kota Surabaya Memenuhi Target 30% RTH Publik Melalui Revitalisasi Taman',
        location: 'Kota Surabaya, Jawa Timur, Indonesia',
        description: 'Kota Surabaya menjadi kota metropolitan percontohan di Indonesia yang berhasil melampaui target RTH perkotaan. Dengan konsisten mengubah lahan-lahan terbengkalai, bantaran sungai kumuh, dan bekas tempat pembuangan sampah (seperti Taman Harmoni Keputih) menjadi ratusan taman kota tematik yang asri serta melestarikan kawasan mangrove pesisir Wonorejo, Surabaya berhasil mencatatkan luasan RTH publik di atas 22% yang mampu menurunkan suhu iklim mikro kota secara nyata.',
        takeaway: 'Komitmen politik kepala daerah dalam penegakan pola ruang RTH mampu mentransformasi wajah kota metropolitan menjadi asri dan sehat.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Matriks Anatomi Tata Ruang: Struktur Ruang (Jaringan & Simpul) vs Pola Ruang (Lindung vs Budi Daya)',
        caption: 'Bagan komparasi: Sisi kiri Struktur Ruang (PKN, PKW, Tol, Waduk), sisi kanan Pola Ruang (Hutan Lindung, Sawah LP2B, Industri, RTH 30%).',
        badge: 'Spatial Components'
      }
    ],
    terminology: [
      { term: 'Kawasan Lindung', definition: 'Wilayah yang ditetapkan dengan fungsi utama melindungi kelestarian lingkungan hidup dan mencegah bencana alam.', scientificTerm: 'Protected Area' },
      { term: 'Kawasan Budi Daya', definition: 'Wilayah yang ditetapkan dengan fungsi utama untuk dibudidayakan bagi permukiman, pertanian, dan industri atas dasar potensinya.', scientificTerm: 'Cultivated / Development Area' },
      { term: 'Ruang Terbuka Hijau (RTH)', definition: 'Area memanjang/jalur dan/atau mengelompok, yang penggunaannya lebih bersifat terbuka, tempat tumbuh tanaman secara alami maupun buatan.', scientificTerm: 'Urban Green Space' }
    ],
    summary: [
      'Struktur ruang mengatur sistem pusat permukiman dan jaringan infrastruktur pendukung wilayah.',
      'Pola ruang membagi peruntukan lahan menjadi Kawasan Lindung (ekologis) dan Kawasan Budi Daya (sosial-ekonomi).',
      'Undang-undang mewajibkan kota menyediakan Ruang Terbuka Hijau (RTH) minimal 30% (20% publik + 10% privat).'
    ],
    quiz: [
      {
        id: 'q103-1',
        question: 'Berdasarkan Undang-Undang Penataan Ruang Nomor 26 Tahun 2007, proporsi Ruang Terbuka Hijau (RTH) minimal yang wajib disediakan pada suatu wilayah perkotaan adalah...',
        options: [
          'Paling sedikit 10% dari luas kota',
          'Paling sedikit 30% (terdiri dari 20% RTH publik dan 10% RTH privat)',
          'Paling sedikit 50% dari luas kota',
          'Tergantung pada keputusan pengembang perumahan swasta'
        ],
        correctAnswer: 1,
        explanation: 'Pasal 29 UU No. 26/2007 mewajibkan proporsi RTH perkotaan paling sedikit 30% dari luas kota, dengan rincian minimal 20% RTH publik dan 10% RTH privat.'
      },
      {
        id: 'q103-2',
        question: 'Manakah di bawah ini yang tergolong ke dalam komponen "Struktur Ruang" wilayah dalam dokumen RTRW?',
        options: [
          'Hutan lindung dan cagar alam fauna',
          'Kawasan persawahan padi pasang surut',
          'Jaringan jalan tol, jaringan transmisi listrik SUTET, dan pelabuhan laut',
          'Kawasan permukiman perumahan mewah'
        ],
        correctAnswer: 2,
        explanation: 'Jalan tol, saluran transmisi listrik SUTET, dan pelabuhan laut adalah bagian dari Sistem Jaringan Prasarana yang menyusun Struktur Ruang wilayah.'
      }
    ],
    references: ['Undang-Undang Republik Indonesia Nomor 26 Tahun 2007 tentang Penataan Ruang.', 'Kementerian PUPR. (2012). Pedoman Penyediaan dan Pemanfaatan Ruang Terbuka Hijau di Kawasan Perkotaan.'],
    relatedTopicIds: ['konsep-dan-landasan-hukum-tata-ruang', 'rencana-tata-ruang-wilayah-rtrw', 'alih-fungsi-lahan-dan-dampaknya', 'kebijakan-pembangunan-wilayah-indonesia']
  },
  {
    id: 'alih-fungsi-lahan-dan-dampaknya',
    number: 104,
    title: 'Alih Fungsi Lahan dan Dampaknya',
    englishTitle: 'Land-Use Conversion: Dynamics, Driving Factors, and LP2B Protection',
    categoryId: 'tata-ruang',
    difficulty: 'Intermediate',
    description: 'Menganalisis fenomena alih fungsi lahan (konversi lahan) di Indonesia: konversi sawah irigasi teknis menjadi perumahan dan jalan tol, konversi hutan primer menjadi perkebunan kelapa sawit; faktor ekonomi penentu (land rent); ancaman kedaulatan pangan; serta instrumen hukum perlindungan Lahan Pertanian Pangan Berkelanjutan (LP2B UU 41/2009).',
    keywords: ['alih fungsi lahan', 'konversi lahan', 'lahan pertanian pangan berkelanjutan lp2b', 'uu 41 2009', 'land rent sewa lahan', 'ancaman ketahanan pangan'],
    learningObjectives: [
      'Menjelaskan definisi alih fungsi lahan dan faktor-faktor pendorong ekonomi-sosial terjadinya konversi lahan.',
      'Menganalisis dampak sistemik alih fungsi lahan sawah beririgasi teknis terhadap kedaulatan pangan dan tata air hidrologi.',
      'Mengevaluasi efektivitas instrumen hukum Lahan Pertanian Pangan Berkelanjutan (LP2B) berdasarkan UU No. 41/2009.'
    ],
    introduction: 'Alih Fungsi Lahan (Land-Use Conversion) adalah perubahan peruntukan pemanfaatan suatu bidang lahan dari fungsi semula menjadi fungsi lain yang sama sekali berbeda—seperti perubahan sawah irigasi subur menjadi perumahan real estate, atau konversi hutan tropis menjadi perkebunan kelapa sawit dan pertambangan. Di Indonesia, laju konversi lahan sawah di Pulau Jawa mencapai 60.000 hingga 100.000 hektar per tahun. Fenomena ini menjadi ancaman eksistensial terhadap ketahanan pangan nasional, stabilitas hidrologis DAS, dan kelestarian keanekaragaman hayati.',
    sections: [
      {
        subtitle: '1. Mengapa Alih Fungsi Lahan Terjadi? (Mekanisme Rent-Gap)',
        content: 'Konversi lahan dipicu oleh kesenjangan nilai sewa lahan (land rent) yang sangat timpang:',
        table: {
          headers: ['Dimensi Penyebab', 'Kondisi di Lapangan', 'Mekanisme Terjadinya Konversi'],
          rows: [
            ['Kesenjangan Ekonomi Sektoral', 'Nilai ekonomi hasil panen gabah padi sawah (~Rp 30 juta/ha/thn) kalah ribuan kali lipat dibandingkan nilai tanah perumahan cluster atau pabrik industri (>Rp 5 miliar/ha)', 'Petani lansia tergiur atau terpaksa menjual tanah warisannya kepada pengembang properti karena desakan biaya hidup atau pajak PBB yang mahal'],
            ['Pertumbuhan Populasi & Properti', 'Kebutuhan hunian rumah baru (backlog perumahan nasional mencapai 12+ juta unit)', 'Pengembang mencari lahan datar yang sudah matang dekat jalan raya utama; sawah adalah target paling mudah dan murah diratakan'],
            ['Pembangunan Megaproyek Infrastruktur', 'Pembangunan jalan tol bebas hambatan, bandara baru, dan waduk', 'Jalan tol membuka aksesibilitas wilayah baru; sawah-sawah di sekitar pintu keluar gerbang tol (exit toll) langsung dikonversi menjadi pom bensin, ruko, mall, dan pergudangan logistik']
          ]
        }
      },
      {
        subtitle: '2. Tiga Dampak Sistemik Konversi Sawah Subur',
        content: 'Hilangnya lahan sawah produktif memicu efek domino destruktif:',
        keyPoints: [
          'Ancaman Kedaulatan Pangan: Menurunnya produksi beras nasional secara permanen yang memaksa negara bergantung pada impor beras luar negeri di tengah gejolak geopolitik global.',
          'Pemborosan Investasi Negara: Sawah irigasi teknis dibangun menggunakan anggaran APBN triliunan rupiah (membangun bendungan, saluran primer-sekunder beton). Jika sawah tersebut dialihfungsikan menjadi pabrik, seluruh investasi saluran irigasi tersebut menjadi mubazir terbuang sia-sia.',
          'Kerusakan Tata Air & Banjir: Sawah berterasering berfungsi alami sebagai kolam retensi penyerap air hujan (sponge). Saat sawah ditutup oleh semen aspal beton, koefisien limpasan larian air hujan (run-off) melonjak 80%, memicu banjir bandang di kawasan hilir.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Instrumen Perlindungan Lahan Sawah: UU LP2B No. 41/2009',
        items: [
          { name: 'Lahan Pertanian Pangan Berkelanjutan (LP2B)', description: 'Bidang lahan sawah subur yang dilindungi secara hukum pidana dan dilarang keras dialihfungsikan untuk kegiatan non-pertanian apapun selamanya.' },
          { name: 'Insentif Petani LP2B', description: 'Pemerintah memberikan keringanan pajak PBB, prioritas bantuan benih unggul, pupuk bersubsidi, dan perbaikan saluran irigasi bagi petani pemilik lahan LP2B.' },
          { name: 'Sanksi Pidana Pelanggar', description: 'Pengembang atau pejabat yang nekat menerbitkan izin konversi di atas lahan peta LP2B diancam hukuman penjara 5 tahun dan denda miliaran rupiah.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pembukaan Koridor Tol', title: 'Peningkatan Spekulasi Tanah', description: 'Pembangunan gerbang tol baru memicu para spekulan tanah memborong sawah-sawah warga sekitar.' },
      { stage: 'Pengeringan Saluran', title: 'Pemutusan Jaringan Irigasi', description: 'Pondasi bangunan ruko memotong saluran parit air sawah tetangga sehingga sawah di belakangnya menjadi kering tandus.' },
      { stage: 'Konversi Permanen', title: 'Pengurukan Tanah Urug', description: 'Truk-truk menimbun tanah urug merah di atas lahan sawah purba, menghilangkan kesuburan tanah selamanya.' }
    ],
    caseStudies: [
      {
        title: 'Konversi Lahan Sawah Produktif di Koridor Jalur Pantura Karawang-Subang',
        location: 'Kabupaten Karawang dan Subang, Jawa Barat, Indonesia',
        description: 'Karawang yang sejak zaman kolonial menyandang predikat terhormat sebagai "Lumbung Beras Nasional" mengalami alih fungsi lahan sawah paling agresif di Indonesia. Ribuan hektar sawah irigasi teknis kelas satu dialihfungsikan menjadi kawasan industri otomotif internasional, perumahan kota mandiri, dan jalur kereta cepat. Untuk menahan laju ini, Kementerian ATR/BPN menetapkan Peta Lahan Sawah Dilindungi (LSD) dengan sanksi tegas penolakan perizinan bagi industri yang merambah sawah dilindungi.',
        takeaway: 'Keseimbangan antara industrialisasi manufaktur dan konservasi sawah pangan adalah ujian terberat perencanaan tata ruang Indonesia.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Dinamika Alih Fungsi Lahan Sawah: Pendorong Ekonomi vs Dampak Ketahanan Pangan',
        caption: 'Bagan sebab-akibat: Tekanan sewa lahan & jalan tol → Konversi sawah menjadi perumahan → Defisit beras nasional & banjir rob.',
        badge: 'Land Conversion Dynamics'
      }
    ],
    terminology: [
      { term: 'Alih Fungsi Lahan', definition: 'Perubahan pemanfaatan fungsi suatu bidang lahan dari peruntukan semula (seperti sawah/hutan) menjadi peruntukan lain (seperti permukiman/industri).', scientificTerm: 'Land-Use Conversion' },
      { term: 'LP2B', definition: 'Lahan Pertanian Pangan Berkelanjutan; bidang lahan pertanian yang ditetapkan untuk dilindungi dan dikembangkan secara konsisten guna menghasilkan pangan pokok.', scientificTerm: 'Sustainable Food Agricultural Land' },
      { term: 'Land Rent (Sewa Lahan)', definition: 'Keuntungan ekonomi bersih yang dapat dihasilkan dari pemanfaatan suatu bidang lahan per satuan luas dalam jangka waktu tertentu.', scientificTerm: 'Economic Land Rent' }
    ],
    summary: [
      'Alih fungsi lahan sawah di Indonesia mencapai 60.000–100.000 ha/tahun akibat disparitas sewa lahan (land rent).',
      'Dampaknya mengancam kedaulatan pangan, membuang investasi irigasi, dan memicu bencana banjir limpasan.',
      'UU No. 41/2009 melindungi sawah subur melalui penetapan zona Lahan Pertanian Pangan Berkelanjutan (LP2B).'
    ],
    quiz: [
      {
        id: 'q104-1',
        question: 'Instrumen kebijakan hukum yang diterbitkan pemerintah melalui Undang-Undang Nomor 41 Tahun 2009 guna melindungi lahan-lahan sawah beririgasi teknis subur agar tidak dialihfungsikan menjadi kawasan industri perumahan dikenal dengan sebutan...',
        options: [
          'Kawasan Ekonomi Khusus (KEK)',
          'Lahan Pertanian Pangan Berkelanjutan (LP2B)',
          'Wilayah Pembangunan Utama (WPU)',
          'Transit-Oriented Development (TOD)'
        ],
        correctAnswer: 1,
        explanation: 'LP2B (Lahan Pertanian Pangan Berkelanjutan) adalah instrumen perlindungan hukum berdasarkan UU 41/2009 untuk melarang konversi sawah produktif demi kedaulatan pangan.'
      },
      {
        id: 'q104-2',
        question: 'Penyebab utama dari sisi ekonomi yang mendorong seorang petani bersedia menjual sawah produktifnya kepada pengembang perumahan atau industri adalah...',
        options: [
          'Kesenjangan nilai sewa lahan (land rent) di mana harga tanah non-pertanian melonjak jauh lebih tinggi daripada hasil panen gabah',
          'Petani ingin berpindah menjadi nelayan tangkap di laut lepas',
          'Padi sudah tidak lagi dibutuhkan sebagai makanan pokok masyarakat',
          'Semua sawah di Indonesia telah tercemar logam berat'
        ],
        correctAnswer: 0,
        explanation: 'Mekanisme bid-rent ekonomi menunjukkan bahwa nilai ekonomi tanah untuk kawasan industri dan perumahan ribuan kali lebih menguntungkan secara tunai dibandingkan hasil panen bertani padi.'
      }
    ],
    references: ['Undang-Undang Republik Indonesia Nomor 41 Tahun 2009 tentang Perlindungan Lahan Pertanian Pangan Berkelanjutan.', 'Irawan, B. (2005). Konversi Lahan Sawah: Potensi Dampak, Pola Pemanfaatannya, dan Faktor Determinan. Forum Penelitian Agro Ekonomi.'],
    relatedTopicIds: ['konsep-dan-landasan-hukum-tata-ruang', 'rencana-tata-ruang-wilayah-rtrw', 'struktur-ruang-dan-pola-ruang', 'kebijakan-pembangunan-wilayah-indonesia']
  },
  {
    id: 'kebijakan-pembangunan-wilayah-indonesia',
    number: 105,
    title: 'Kebijakan Pembangunan Wilayah Indonesia',
    englishTitle: 'Indonesian Regional Development Policies: Trans-Java, Trans-Sumatra, and Eastern Indonesia Equity',
    categoryId: 'tata-ruang',
    difficulty: 'Intermediate',
    description: 'Menganalisis strategi dan kebijakan spasial pemerataan pembangunan nasional Indonesia: pergeseran paradigma dari Jawa-sentris menuju Indonesia-sentris; Kawasan Ekonomi Khusus (KEK); Proyek Strategis Nasional (Tol Trans-Sumatera, Tol Trans-Papua, Tol Laut); pengembangan Wilayah Terdepan, Terluar, Tertinggal (3T); serta relokasi Ibu Kota Nusantara (IKN).',
    keywords: ['pembangunan wilayah indonesia', 'indonesia sentris vs jawa sentris', 'kawasan ekonomi khusus kek', 'tol laut jokowi', 'daerah 3t terdepan terluar', 'proyek strategis nasional psn'],
    learningObjectives: [
      'Menjelaskan pergeseran paradigma pembangunan nasional dari Jawa-sentris menuju Indonesia-sentris.',
      'Menganalisis peran Kawasan Ekonomi Khusus (KEK) dan Kawasan Industri Prioritas di luar Pulau Jawa.',
      'Mengevaluasi efektivitas infrastruktur konektivitas (Tol Laut, Jalur Kereta Api Trans-Sulawesi, Jalan Trans-Papua) dalam menekan disparitas harga logistik antardaerah.'
    ],
    introduction: 'Sejak era kemerdekaan, struktur perekonomian dan konsentrasi spasial Indonesia mengalami ketimpangan geografis yang sangat tajam: Pulau Jawa yang hanya mencakup sekitar 7% dari total daratan Indonesia dihuni oleh 56% penduduk dan menyumbang hampir 58% Produk Domestik Bruto (PDB) nasional. Untuk merajut keutuhan kedaulatan ekonomi dan mengikis disparitas antara kawasan barat dan timur, pemerintah melancarkan pergeseran paradigma radikal menuju "Pembangunan Indonesia-Sentris" melalui pembangunan infrastruktur konektivitas masif dan penetapan kutub-kutub pertumbuhan baru di luar Pulau Jawa.',
    sections: [
      {
        subtitle: '1. Pergeseran Paradigma: Jawa-Sentris Menuju Indonesia-Sentris',
        content: 'Perbandingan orientasi kebijakan pembangunan nasional:',
        table: {
          headers: ['Aspek Kebijakan', 'Paradigma Lama (Jawa-Sentris)', 'Paradigma Baru (Indonesia-Sentris)'],
          rows: [
            ['Fokus Alokasi Anggaran', 'Mayoritas anggaran APBN terkonsentrasi untuk infrastruktur di Pulau Jawa karena return of investment cepat', 'Afirmasi anggaran dialokasikan masif ke Luar Jawa (Sumatera, Kalimantan, Sulawesi, Maluku, Papua, NTT)'],
            ['Orientasi Geografis', 'Berorientasi ke dalam daratan kontinental pulau-pulau besar (land-based development)', 'Berorientasi maritim kepulauan (archipelagic maritime-based development) melalui Program Tol Laut'],
            ['Pusat Gravitasi Politik-Bisnis', 'Jakarta menjadi pusat tunggal seluruh kekuasaan birokrasi, keuangan, pelabuhan, dan industri', 'Pemindahan ibu kota negara ke IKN Nusantara di Kalimantan Timur sebagai episentrum baru di tengah nusantara'],
            ['Pendekatan Daerah Perbatasan', 'Daerah perbatasan dianggap sebagai "halaman belakang" terisolasi yang rawan penyelundupan', 'Daerah 3T diubah menjadi "halaman depan beranda kedaulatan" dengan Pos Lintas Batas Negara (PLBN) megah modern']
          ]
        }
      },
      {
        subtitle: '2. Tiga Instrumen Utama Akselerasi Pembangunan Luar Jawa',
        content: 'Pemerintah menggelontorkan tiga program terobosan:',
        keyPoints: [
          '1. Kawasan Ekonomi Khusus (KEK): Kawasan dengan batas tertentu dalam wilayah NKRI yang diberikan fasilitas pembebasan pajak istimewa (tax holiday), kepabeanan, dan kemudahan izin berusaha untuk menarik investasi asing (contoh: KEK Sei Mangkei Sumut, KEK Mandalika NTB, KEK Likupang Sulut, KEK Sorong Papua Barat).',
          '2. Program Tol Laut Terjadwal: Pengoperasian rute kapal peti kemas kargo reguler bersubsidi yang menghubungkan pelabuhan-pelabuhan pengumpul (hub) Tanjung Priok/Tanjung Perak dengan pelabuhan pengumpan perintis (feeder) di pulau-pulau terpencil Maluku dan Papua guna menurunkan disparitas harga semen dan sembako.',
          '3. Megaproyek Konektivitas Koridor Darat: Pembangunan Jalan Tol Trans-Sumatera (2.800+ km dari Lampung ke Aceh), Jalan Trans-Papua (4.300+ km membuka isolasi Pegunungan Bintang), dan Jalur Kereta Api Trans-Sulawesi (Makassar-Parepare).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tipologi Daerah 3T (Terdepan, Terluar, Tertinggal)',
        items: [
          { name: 'Kawasan Terdepan (Perbatasan Antarnegara)', description: 'Wilayah yang berbatasan langsung dengan negara tetangga (contoh: Entikong berbatasan dengan Malaysia, Motaain dengan Timor Leste).' },
          { name: 'Kawasan Terluar (Pulau-Pulau Kecil Terluar / PPKT)', description: '111 pulau kecil di garis pangkal terluar yang menjadi titik batas laut teritorial ZEE NKRI (contoh: Pulau Rondo, Pulau Miangas, Pulau Dana).' },
          { name: 'Kawasan Tertinggal', description: 'Kabupaten yang perekonomian masyarakatnya belum berkembang, IPM rendah, dan akses jalan transportasi sangat minim.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Disparitas', title: 'Pemetaan Ketimpangan Harga Logistik', description: 'Kementerian Perhubungan mendata disparitas harga semen di pedalaman Papua yang mencapai jutaan rupiah per sak.' },
      { stage: 'Pelaksanaan Proyek Strategis', title: 'Pembangunan Fisik PSN', description: 'Mengerahkan BUMN membangun jalan perintis dan kapal tol laut berjadwal tetap.' },
      { stage: 'Konvergensi Ekonomi', title: 'Penurunan Indeks Ketimpangan Gini', description: 'Harga kebutuhan pokok di pulau terluar turun stabil dan muncul wirausaha lokal baru.' }
    ],
    caseStudies: [
      {
        title: 'Pengoperasian Tol Laut dan Penurunan Disparitas Harga Semen di Kabupaten Kepulauan Talaud',
        location: 'Kabupaten Kepulauan Talaud, Sulawesi Utara, Indonesia',
        description: 'Kabupaten Kepulauan Talaud merupakan salah satu wilayah 3T terluar Indonesia yang berbatasan langsung dengan laut Filipina. Sebelum adanya Program Tol Laut, kapal barang swasta hanya singgah sebulan sekali saat cuaca ombak tenang, menyebabkan harga bahan bangunan semen melonjak hingga Rp 150.000 per sak. Dengan hadirnya trayek kapal Tol Laut terjadwal rutin seminggu sekali, biaya angkut kontainer turun drastis dan harga semen di kepulauan ini turun stabil menyamai harga di daratan Manado (~Rp 65.000 per sak).',
        takeaway: 'Konektivitas maritim terpadu adalah kunci pemerataan keadilan sosial bagi seluruh rakyat Indonesia.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Skematik Jaringan Trayek Tol Laut dan Koridor Infrastruktur Indonesia-Sentris (Trans-Sumatera, Trans-Papua, IKN)',
        caption: 'Bagan rute konektivitas nusantara: Jaringan trayek kapal Tol Laut menghubungkan Sabang hingga Merauke terpusat di kepulauan.',
        badge: 'Regional Policy'
      }
    ],
    terminology: [
      { term: 'Indonesia-Sentris', definition: 'Paradigma pembangunan nasional yang menempatkan seluruh kepulauan Indonesia secara adil dan merata sebagai prioritas, menggantikan orientasi Jawa-sentris.', scientificTerm: 'Equitable Archipelago Development' },
      { term: 'Tol Laut', definition: 'Konsep konektivitas laut efektif berupa kapal kargo pengangkut barang yang berlayar terjadwal rutin menghubungkan pelabuhan-pelabuhan dari barat ke timur Indonesia.', scientificTerm: 'Sea Tollway Program' },
      { term: 'Daerah 3T', definition: 'Wilayah Terdepan, Terluar, dan Tertinggal di Indonesia yang memerlukan intervensi kebijakan afirmasi khusus dari pemerintah pusat.', scientificTerm: 'Underdeveloped and Border Regions (3T)' }
    ],
    summary: [
      'Pembangunan wilayah Indonesia bertransformasi dari Jawa-sentris menuju paradigma Indonesia-sentris.',
      'Instrumen pemerataan meliputi Kawasan Ekonomi Khusus (KEK), Proyek Strategis Nasional (PSN), dan Tol Laut maritim.',
      'Pembangunan daerah 3T dan pemindahan IKN Nusantara bertujuan merajut pemerataan kesejahteraan dan keadilan sosial geografis.'
    ],
    quiz: [
      {
        id: 'q105-1',
        question: 'Program pemerintah Republik Indonesia berupa pelayaran angkutan logistik kapal laut kargo terjadwal rutin bersubsidi yang menghubungkan pelabuhan hub barat dengan pelabuhan pulau-pulau terpencil di timur guna memangkas disparitas harga barang dinamakan...',
        options: ['Jalan Tol Layang', 'Program Tol Laut', 'Kawasan Industri Terpadu', 'Transit-Oriented Development'],
        correctAnswer: 1,
        explanation: 'Program Tol Laut adalah sistem logistik maritim terjadwal yang digagas untuk memperlancar arus distribusi barang dan menekan disparitas harga antarpulau di Indonesia.'
      },
      {
        id: 'q105-2',
        question: 'Paradigma pembangunan yang memprioritaskan pembangunan infrastruktur pelabuhan, jalan raya, dan kawasan ekonomi di luar Pulau Jawa (seperti Papua, Maluku, Kalimantan, dan Sumatera) demi mengikis ketimpangan regional dinamakan paradigma...',
        options: ['Fisis determinisme', 'Pembangunan Jawa-Sentris', 'Pembangunan Indonesia-Sentris', 'Kolonialisme spasial'],
        correctAnswer: 2,
        explanation: 'Paradigma Indonesia-Sentris menekankan bahwa pembangunan harus merata di seluruh wilayah kedaulatan NKRI dan tidak boleh lagi hanya terfokus di Pulau Jawa.'
      }
    ],
    references: ['Bappenas. (2020). Rencana Pembangunan Jangka Menengah Nasional (RPJMN) 2020-2024.', 'Rustiadi, E., et al. (2018). Perencanaan dan Pengembangan Wilayah. Yayasan Pustaka Obor Indonesia.'],
    relatedTopicIds: ['konsep-dan-landasan-hukum-tata-ruang', 'rencana-tata-ruang-wilayah-rtrw', 'struktur-ruang-dan-pola-ruang', 'alih-fungsi-lahan-dan-dampaknya']
  }
];
