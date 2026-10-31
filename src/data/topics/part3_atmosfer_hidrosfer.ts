import { Topic } from '../../types/geography';

export const topicsPart3: Topic[] = [
  // CATEGORY D: Atmosfer, Cuaca, dan Iklim (32-39)
  {
    id: 'atmosfer-dan-struktur-lapisan-atmosfer',
    number: 32,
    title: 'Atmosfer dan Struktur Lapisan Atmosfer',
    englishTitle: 'Atmosphere and Atmospheric Layer Structure',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah selubung gas bumi: komposisi udara (nitrogen, oksigen, argon, karbon dioksida), 5 lapisan vertikal (troposfer, stratosfer, mesosfer, termosfer/ionosfer, eksosfer), gradien temperatur, dan peranan lapisan ozon.',
    keywords: ['atmosfer', 'troposfer', 'stratosfer', 'lapisan ozon', 'ionosfer', 'mesosfer', 'gradien termis lapse rate'],
    learningObjectives: [
      'Menyebutkan komposisi gas penyusun atmosfer bumi berserta persentasenya.',
      'Menganalisis karakteristik, batas ketinggian, dan profil temperatur 5 lapisan atmosfer bumi.',
      'Menjelaskan fungsi vital lapisan ozon (O3) di stratosfer dan lapisan ionosfer bagi telekomunikasi radio.'
    ],
    introduction: 'Atmosfer adalah lapisan selimut gas yang menyelimuti bola bumi yang ditahan oleh gaya gravitasi bumi hingga ketinggian lebih dari 1.000 kilometer. Atmosfer bertindak sebagai perisai radiasi mematikan dari sinar ultraviolet matahari, membakar meteorit luar angkasa sebelum menyentuh tanah, menjaga suhu bumi tetap hangat dan layak huni melalui efek rumah kaca alami, serta menjadi panggung utama berlangsungnya seluruh dinamika cuaca dan iklim.',
    sections: [
      {
        subtitle: '1. Komposisi Gas Penyusun Atmosfer Bersih',
        content: 'Udara kering di atmosfer bumi tersusun atas campuran gas homogen:',
        table: {
          headers: ['Gas Penyusun', 'Rumus Kimia', 'Persentase Volume (%)', 'Peranan bagi Kehidupan'],
          rows: [
            ['Nitrogen', 'N2', '78,08%', 'Gas inert pengencer oksigen; bahan baku protein asam amino tanaman via fiksasi bakteri'],
            ['Oksigen', 'O2', '20,95%', 'Gas vital penopang respirasi aerob makhluk hidup dan proses pembakaran'],
            ['Argon', 'Ar', '0,93%', 'Gas mulia stabil hasil peluruhan radioaktif kalium'],
            ['Karbon Dioksida', 'CO2', '0,04% (420 ppm)', 'Bahan baku fotosintesis tumbuhan hijau dan gas rumah kaca pengatur panas bumi'],
            ['Uap Air & Aerosol', 'H2O / partikel', '0 – 4% (variatif)', 'Membentuk awan, hujan, dan menyerap radiasi gelombang panjang inframerah']
          ]
        }
      },
      {
        subtitle: '2. Struktur Vertikal Lapisan Atmosfer',
        content: 'Atmosfer terbagi menjadi 5 lapisan utama berdasarkan variasi profil suhunya:',
        table: {
          headers: ['Lapisan', 'Ketinggian (km)', 'Profil Suhu', 'Fenomena Khas yang Berlangsung'],
          rows: [
            ['1. Troposfer', '0 – 12 km (16 km di ekuator, 8 km di kutub)', 'Suhu turun seiring ketinggian (Lapse Rate: rata-rata turun 0,65°C tiap naik 100 m) hingga -60°C di tropopause', 'Tempat terjadinya seluruh fenomena cuaca: awan, hujan, petir, angin badai; menampung 80% massa atmosfer'],
            ['2. Stratosfer', '12 – 50 km', 'Suhu berbalik naik (inversi suhu) dari -60°C menjadi 0°C di stratopause', 'Udara tenang bebas turbulensi (jalur jelajah pesawat jet komersial); mengandung lapisan ozon (O3) pada 20-35 km yang menyerap sinar UV-B'],
            ['3. Mesosfer', '50 – 85 km', 'Suhu turun tajam hingga lapisan terdingin di bumi (-90°C hingga -100°C di mesopause)', 'Membakar habis sebagian besar meteorit luar angkasa akibat gesekan aerodinamis udara'],
            ['4. Termosfer (Ionosfer)', '85 – 500 km', 'Suhu melonjak drastis hingga >1.500°C akibat penyerapan radiasi sinar-X dan UV ekstrem matahari', 'Terjadi ionisasi partikel gas yang memantulkan gelombang radio AM; panggung munculnya cahaya tirai aurora'],
            ['5. Eksosfer', '> 500 km', 'Suhu sangat tinggi, kerapatan atom gas sangat renggang', 'Ruang transisi ke hampa udara antariksa luar; lintasan orbit satelit cuaca geostasioner']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Wilayah Kimia Atmosfer',
        items: [
          { name: 'Homosfer (0 – 85 km)', description: 'Komposisi perbandingan gas homogen dan tercampur rata oleh turbulensi (Troposfer hingga Mesosfer).' },
          { name: 'Heterosfer (> 85 km)', description: 'Gas terpisah-pisah membentuk lapisan berdasarkan massa atom (nitrogen molekuler, oksigen atomik, helium, hidrogen).' }
        ]
      }
    ],
    processes: [
      { stage: 'Radiasi UV Masuk', title: 'Fotolisis Molekul Oksigen', description: 'Sinar UV berenergi tinggi memecah molekul O2 menjadi dua atom oksigen bebas (O).' },
      { stage: 'Pembentukan Ozon', title: 'Siklus Chapman', description: 'Atom O bebas bergabung dengan molekul O2 lain membentuk molekul triatomik ozon (O3).' },
      { stage: 'Penyerapan Panas', title: 'Perlindungan Biosfer', description: 'Ozon menyerap radiasi UV-B matahari melepaskan panas (inversi suhu stratosfer) dan melindungi DNA manusia dari kanker kulit.' }
    ],
    caseStudies: [
      {
        title: 'Pemulihan Lubang Ozon Antarktika Pasca-Protokol Montreal 1987',
        location: 'Kawasan Kutub Selatan (Antarktika)',
        description: 'Penggunaan gas Chloro-Fluoro-Carbon (CFC) pada freon AC dan kaleng semprot aerosol memicu reaksi rantai radikal klorin yang merusak lapisan ozon di stratosfer di atas kutub selatan hingga membentuk "lubang ozon". Melalui traktat internasional Protokol Montreal 1987 yang melarang CFC secara global, lapisan ozon kini dalam jalur pemulihan total pada pertengahan abad ke-21.',
        takeaway: 'Bukti keberhasilan aksi bersama sains atmosferik dan diplomasi lingkungan global.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Penampang Vertikal Lapisan Atmosfer dan Kurva Suhu (Lapse Rate)',
        caption: 'Model interaktif 5 lapisan atmosfer: troposfer, stratosfer ozon, mesosfer meteor, termosfer aurora, dan eksosfer satelit dengan slider ketinggian.',
        badge: 'Atmospheric Physics',
        interactiveLabId: 'atmospheric-layers'
      }
    ],
    terminology: [
      { term: 'Lapse Rate Termal', definition: 'Laju penurunan temperatur udara seiring dengan bertambahnya ketinggian di lapisan troposfer (rata-rata 0,65°C per 100 meter kenaikan).', scientificTerm: 'Environmental Lapse Rate' },
      { term: 'Lapisan Ozon', definition: 'Konsentrasi molekul gas triatomik O3 di stratosfer yang berfungsi menyerap lebih dari 98% radiasi ultraviolet matahari berbahaya.', scientificTerm: 'Ozone Layer' },
      { term: 'Ionosfer', definition: 'Lapisan di termosfer yang dipenuhi ion-ion bermuatan listrik bebas yang mampu memantulkan gelombang elektromagnetik radio jarak jauh.', scientificTerm: 'Ionosphere' }
    ],
    summary: [
      'Atmosfer bumi terdiri dari 78% Nitrogen, 21% Oksigen, dan gas-gas jejak esensial.',
      'Lima lapisan vertikal atmosfer adalah Troposfer, Stratosfer, Mesosfer, Termosfer, dan Eksosfer.',
      'Seluruh fenomena cuaca berlangsung di troposfer; stratosfer melindungi bumi melalui lapisan ozon.'
    ],
    quiz: [
      {
        id: 'q32-1',
        question: 'Lapisan atmosfer tempat berlangsungnya seluruh peristiwa cuaca dan iklim seperti awan, hujan, angin, dan petir adalah...',
        options: ['Stratosfer', 'Troposfer', 'Mesosfer', 'Termosfer'],
        correctAnswer: 1,
        explanation: 'Troposfer (lapisan terbawah 0–12 km) menampung hampir seluruh uap air dan 80% massa udara bumi sehingga menjadi tempat berlangsungnya semua fenomena cuaca.'
      },
      {
        id: 'q32-2',
        question: 'Fenomena pemantulan gelombang radio frekuensi menengah (AM) yang memungkinkan komunikasi radio jarak jauh terjadi pada lapisan...',
        options: ['Troposfer bawah', 'Stratosfer', 'Mesosfer', 'Ionosfer (Termosfer)'],
        correctAnswer: 3,
        explanation: 'Ionosfer pada lapisan termosfer kaya akan ion-ion bermuatan listrik bebas yang memantulkan gelombang radio kembali ke permukaan bumi.'
      }
    ],
    references: ['Ahrens, C. D., & Henson, R. (2018). Meteorology Today: An Introduction to Weather, Climate, and the Environment. Cengage Learning.', 'Badan Meteorologi, Klimatologi, dan Geofisika (BMKG). Pengantar Meteorologi Umum.'],
    relatedTopicIds: ['unsur-unsur-cuaca-dan-iklim', 'proses-terjadinya-hujan', 'perubahan-iklim-dan-pemanasan-global']
  },
  {
    id: 'unsur-unsur-cuaca-dan-iklim',
    number: 33,
    title: 'Unsur-Unsur Cuaca dan Iklim',
    englishTitle: 'Elements of Weather and Climate: Measurement and Dynamics',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis 6 unsur penentu cuaca dan iklim: radiasi matahari, suhu udara (rumus Mokt/Brak), tekanan udara (isobar & barometer), kelembapan udara (mutlak vs relatif/higrometer), angin (anemometer), dan awan/curah hujan.',
    keywords: ['unsur cuaca', 'suhu udara', 'kelembapan relatif', 'tekanan udara isobar', 'radiasi matahari', 'rumus mokt brak'],
    learningObjectives: [
      'Membedakan definisi cuaca (skala sempit, singkat) dan iklim (skala luas, rata-rata 30 tahun).',
      'Mengukur dan menghitung parameter cuaca: rumus perkiraan suhu berdasarkan ketinggian (Braak/Mokt) dan kelembapan relatif (RH).',
      'Mengenal instrumen baku stasiun meteorologi BMKG (termometer sangkar meteo, barometer, anemometer, panci evaporasi).'
    ],
    introduction: 'Cuaca adalah keadaan atmosfer di suatu tempat tertentu pada saat tertentu yang sifatnya dinamis, sempit, dan berubah dalam hitungan jam atau hari. Sebaliknya, iklim adalah keadaan rata-rata cuaca pada suatu wilayah yang luas dan dihitung dalam periode waktu yang panjang (standar WMO: minimal 30 tahun). Kendati berbeda dalam skala ruang dan waktu, baik cuaca maupun iklim disusun oleh 6 unsur atmosferik yang identik: penyinaran matahari, suhu udara, tekanan udara, angin, kelembapan udara, serta awan dan curah hujan.',
    sections: [
      {
        subtitle: '1. Enam Unsur Utama Cuaca dan Alat Ukurnya',
        content: 'Stasiun meteorologi BMKG memantau unsur-unsur cuaca secara serentak 24 jam sehari:',
        table: {
          headers: ['Unsur Cuaca', 'Parameter Fisik', 'Alat Ukur Baku', 'Satuan Standar'],
          rows: [
            ['1. Penyinaran Matahari', 'Lama penyinaran dalam sehari (durasi jam)', 'Campbell-Stokes (bola kaca fokus membakar kertas pias)', 'Jam atau persen (%)'],
            ['2. Suhu Udara', 'Derajat panas partikel udara di dalam sangkar meteorologi', 'Termometer maksimum-minimum Six-Bellani', 'Derajat Celsius (°C)'],
            ['3. Tekanan Udara', 'Berat massa kolom udara per satuan luas permukaan', 'Barometer air raksa atau Barometer aneroid', 'Milibar (mb) atau Hektopaskal (hPa)'],
            ['4. Kelembapan Udara', 'Kandungan uap air di udara (Relatif & Mutlak)', 'Psikrometer bola basah-bola kering / Higrometer rambut', 'Persen (%) untuk Relatif; g/m³ untuk Mutlak'],
            ['5. Kecepatan & Arah Angin', 'Vektor perpindahan udara dari tekanan tinggi ke rendah', 'Anemometer mangkok (kecepatan) dan Wind Vane (arah)', 'Knot, km/jam, atau m/detik; 16 mata angin'],
            ['6. Curah Hujan', 'Volume air presipitasi yang jatuh pada bidang datar seluas 1 m²', 'Penakar hujan Hellmann atau Ombrometer tipe observatorium', 'Milimeter (mm)']
          ]
        }
      },
      {
        subtitle: '2. Rumus Menghitung Suhu Berdasarkan Ketinggian (Rumus Braak)',
        content: 'Di daerah tropis seperti Indonesia, suhu udara rata-rata permukaan laut berkisar 26,3°C. Setiap naik 100 meter ketinggian, suhu udara turun sebesar 0,6°C (Gradien Geotermis Udara Braak):',
        keyPoints: [
          'Rumus Braak: T = T0 – 0,6 × (h / 100)',
          'T = Suhu pada ketinggian h meter (°C)',
          'T0 = Suhu di permukaan laut (standar Indonesia ~26,3°C)',
          'h = Ketinggian tempat target (meter di atas permukaan laut / mdpl)'
        ],
        formula: {
          expression: 'T = T_0 - 0{,}6 \\times \\left(\\frac{h}{100}\\right)',
          explanation: 'Rumus Braak menghitung penurunan temperatur udara troposfer tropis Indonesia.',
          exampleCalculation: 'Jika kota dataran rendah A (0 mdpl) bersuhu 27°C, berapa suhu kota wisata pegunungan B pada ketinggian 1.500 mdpl? T = 27 - 0,6 × (1500/100) = 27 - (0,6 × 15) = 27 - 9 = 18°C.'
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Jenis Kelembapan Udara',
        items: [
          { name: 'Kelembapan Mutlak (Absolut)', description: 'Jumlah gram uap air riil yang terkandung di dalam 1 meter kubik udara (satuan g/m³).' },
          { name: 'Kelembapan Relatif (Nisbi / RH)', description: 'Perbandingan (persen) antara jumlah uap air riil dengan kapasitas uap air maksimum yang dapat ditampung udara pada suhu tersebut.' }
        ]
      }
    ],
    processes: [
      { stage: 'Insolasi Matahari', title: 'Pemanasan Permukaan Tanah', description: 'Radiasi gelombang pendek matahari memanaskan tanah daratan lebih cepat dibanding lautan.' },
      { stage: 'Konduksi & Konveksi', title: 'Pemanasan Udara Troposfer', description: 'Panas tanah ditransfer ke udara tipis di atasnya secara konduksi lalu naik secara konveksi.' },
      { stage: 'Gradien Tekanan', title: 'Pembangkitan Aliran Angin', description: 'Udara panas memuai bertekanan rendah (L), menarik udara dingin bertekanan tinggi (H) menghasilkan angin.' }
    ],
    caseStudies: [
      {
        title: 'Pengaruh Ketinggian terhadap Komoditas Pertanian Kota Batu, Malang',
        location: 'Kota Batu, Jawa Timur (ketinggian 700 - 1.700 mdpl)',
        description: 'Berdasarkan rumus gradien suhu Braak, Kota Batu pada ketinggian rata-rata 900 mdpl memiliki suhu harian sejuk sekitar 17°C–21°C. Suhu sejuk ini menjadikan Kota Batu sentra budidaya apel, stroberi, dan bunga mawar di Jawa Timur yang tidak dapat tumbuh produktif di dataran rendah Surabaya yang bersuhu 33°C.',
        takeaway: 'Variasi unsur suhu cuaca menciptakan zonasi komoditas agribisnis bernilai ekonomi tinggi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Enam Unsur Cuaca dan Instrumen Stasiun Meteorologi BMKG',
        caption: 'Diagram visual instrumen sangkar meteo, anemometer, Campbell-Stokes, barometer, dan penakar hujan Hellmann.',
        badge: 'Weather Station'
      }
    ],
    terminology: [
      { term: 'Kelembapan Relatif (RH)', definition: 'Persentase perbandingan antara massa uap air aktual di udara dengan kapasitas jenuh maksimum uap air pada suhu yang sama.', scientificTerm: 'Relative Humidity' },
      { term: 'Titik Embun (Dew Point)', definition: 'Temperatur di mana udara harus didinginkan agar uap air di dalamnya mencapai kondisi jenuh 100% dan mulai mengembun.', scientificTerm: 'Dew Point' },
      { term: 'Garis Isobar', definition: 'Garis khayal pada peta cuaca yang menghubungkan tempat-tempat yang memiliki tekanan udara yang sama.', scientificTerm: 'Isobar' }
    ],
    summary: [
      'Cuaca adalah kondisi atmosfer sesaat di tempat sempit; iklim adalah rata-rata cuaca jangka panjang (>30 tahun).',
      'Enam unsur cuaca adalah radiasi matahari, suhu, tekanan, angin, kelembapan, dan curah hujan.',
      'Suhu udara di Indonesia berkurang rata-rata 0,6°C setiap kenaikan 100 meter ketinggian (Rumus Braak).'
    ],
    quiz: [
      {
        id: 'q33-1',
        question: 'Sebuah kota pantai di permukaan laut (0 mdpl) memiliki suhu rata-rata 26°C. Berapakah perkiraan suhu udara di sebuah pos pendakian gunung yang berada pada ketinggian 2.000 mdpl menurut rumus Braak?',
        options: ['12°C', '14°C', '16°C', '18°C'],
        correctAnswer: 1,
        explanation: 'Penurunan suhu = 0,6 × (2.000 / 100) = 0,6 × 20 = 12°C. Suhu di puncak = 26°C - 12°C = 14°C.'
      },
      {
        id: 'q33-2',
        question: 'Alat meteorologi berbentuk bola kaca bening pejal yang berfungsi memfokuskan sinar matahari untuk membakar kertas pias guna mengukur durasi penyinaran matahari adalah...',
        options: ['Anemometer', 'Campbell-Stokes', 'Higrometer rambut', 'Ombrometer'],
        correctAnswer: 1,
        explanation: 'Campbell-Stokes adalah instrumen standar BMKG yang merekam durasi penyinaran matahari melalui jejak bakaran pada kertas pias berpeta waktu.'
      }
    ],
    references: ['Ahrens, C. D. (2018). Meteorology Today.', 'BMKG. Peraturan Kepala BMKG tentang Pengamatan Meteorologi Permukaan.'],
    relatedTopicIds: ['atmosfer-dan-struktur-lapisan-atmosfer', 'proses-terjadinya-hujan', 'klasifikasi-iklim', 'pola-angin-global-dan-lokal']
  },
  {
    id: 'proses-terjadinya-hujan',
    number: 34,
    title: 'Proses Terjadinya Hujan',
    englishTitle: 'Precipitation Mechanics and Rainfall Classification',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis mekanisme presipitasi hujan: kondensasi pada inti kondensasi (CCN), proses Bergeron vs tumbukan-tangkapan (collision-coalescence), serta 4 tipe hujan: hujan orografis, hujan konveksi (zenithal), hujan frontal, dan hujan siklonal.',
    keywords: ['proses hujan', 'hujan orografis', 'hujan zenithal konveksi', 'hujan frontal', 'daerah bayangan hujan', 'awan kumulonimbus'],
    learningObjectives: [
      'Menjelaskan proses fisika pembentukan hujan (evaporasi, pendinginan adiabatik, kondensasi, presipitasi).',
      'Membedakan mekanisme dan karakteristik 4 jenis hujan: konveksi/zenithal, orografis, frontal, dan siklonal.',
      'Menganalisis fenomena daerah bayangan hujan (rain shadow) dan angin jatuh kering (fohn) di balik pegunungan.'
    ],
    introduction: 'Hujan adalah salah satu wujud presipitasi (jatuhnya air dari atmosfer ke permukaan bumi, baik berwujud cair maupun kristal es). Di planet bumi, triliunan meter kubik air diangkat dari samudra ke langit setiap hari melalui evaporasi surya, mendingin dan berkondensasi menjadi awan di troposfer, hingga akhirnya tetes-tetes air menjadi terlalu berat untuk ditopang oleh arus udara naik (updraft) dan jatuh sebagai hujan. Berdasarkan faktor pemicu naiknya massa udara lembap, hujan diklasifikasikan menjadi empat tipe fundamental.',
    sections: [
      {
        subtitle: '1. Empat Tipe Hujan Berdasarkan Mekanisme Angkat Udara',
        content: 'Udara lembap harus dipaksa naik ke atas agar mengalami pendinginan adiabatik hingga mencapai titik jenuh embun:',
        table: {
          headers: ['Tipe Hujan', 'Mekanisme Pengangkatan Udara', 'Ciri Khas Hujan', 'Contoh Wilayah Terjadinya'],
          rows: [
            ['1. Hujan Konveksi (Zenithal)', 'Pemanasan matahari terik memanaskan tanah ekuator secara intensif; udara panas memuai dan membubung vertikal deras (konveksi)', 'Hujan lebat disertai kilat petir dahsyat dan angin kencang dalam waktu singkat pada sore hari; awan Cumulonimbus (Cb) raksasa', 'Sangat dominan di kawasan tropis khatulistiwa Indonesia (Jawa, Kalimantan, Sumatra) pada peralihan musim pancaroba'],
            ['2. Hujan Orografis', 'Angin lembap yang bertiup dari laut membentur lereng pegunungan terjal dan dipaksa mendaki lereng (orografi)', 'Lereng yang menghadap angin (windward) menerima hujan sangat lebat; lereng di sebaliknya menjadi Daerah Bayangan Hujan yang kering dan bertiup angin fohn panas', 'Lereng barat Pegunungan Bukit Barisan Sumatra dan lereng selatan Gunung Gede-Pangrango Bogor'],
            ['3. Hujan Frontal', 'Dua massa udara dengan suhu dan densitas berbeda bertemu: massa udara hangat lembap terdorong naik di atas baji massa udara dingin padat', 'Hujan gerimis merata berdurasi lama meliputi wilayah yang sangat luas; awan Nimbostratus abu-abu tebal', 'Kawasan iklim lintang sedang (subtropis dan kutub, 40°–60° LU/LS), seperti di Eropa Barat dan Amerika Utara'],
            ['4. Hujan Siklonal', 'Udara bertekanan sangat rendah di pusat siklon tropis memutar dan menyedot udara lembap ke atas secara spiral', 'Hujan badai ekstrem disertai pusaran angin puting beliung berkekuatan destruktif tinggi', 'Kawasan lintang 10°–20° LU/LS di Samudra Hindia dan Pasifik (terpaan siklon tropis Seroja, Cempaka)']
          ]
        }
      },
      {
        subtitle: '2. Fenomena Bayangan Hujan dan Angin Fohn',
        content: 'Pada hujan orografis, massa udara basah mendaki lereng pegunungan dan mendingin secara adiabatik basah (turun ~0,6°C tiap 100 m) menumpahkan seluruh airnya di lereng depan. Ketika udara melewati puncak dan menuruni lereng belakang (leeward), udara tersebut sudah kehilangan seluruh uap airnya dan memanas secara adiabatik kering (naik 1,0°C tiap 100 m), menghasilkan angin jatuh kering dan panas yang disebut Angin Fohn.',
        keyPoints: [
          'Daerah Bayangan Hujan: Lembah atau lereng belakang gunung yang curah hujannya sangat rendah (contoh: Lembah Palu di Sulawesi Tengah curah hujan hanya ~600 mm/tahun).',
          'Angin Fohn di Indonesia: Angin Kumbang (Cirebon/Brebes merusak bawang), Angin Bohorok (Deli Serdang merusak tembakau), Angin Gending (Pasuruan), Angin Brubu (Makassar), Angin Wambraw (Biak Papua).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Teori Terbentuknya Tetes Hujan di Awan',
        items: [
          { name: 'Proses Tumbukan & Tangkapan (Collision-Coalescence)', description: 'Dominan di awan hangat tropis; tetes air awan berukuran lebih besar jatuh menabrak dan menyerap tetes air lebih kecil menjadi butir hujan lebat.' },
          { name: 'Proses Bergeron (Ice Crystal Process)', description: 'Dominan di awan dingin (suhu di bawah 0°C); kristal es menarik uap air dari tetes air lewat-dingin hingga tumbuh membesar dan mencair saat jatuh.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penguapan & Konveksi', title: 'Evaporasi Air', description: 'Energi panas matahari menguapkan air laut dan transpirasi tanaman membumbung ke atmosfer.' },
      { stage: 'Pendinginan Adiabatik', title: 'Ekspansi Udara Naik', description: 'Tekanan udara luar turun, massa udara memuai dan mendingin hingga mencapai Dew Point.' },
      { stage: 'Nukleasi & Presipitasi', title: 'Kondensasi & Hujan', description: 'Uap air mengembun pada aerosol debu (CCN) membentuk awan hingga butir air jatuh gravitasi.' }
    ],
    caseStudies: [
      {
        title: 'Kota Bogor sebagai "Kota Hujan" Berkat Hujan Orografis dan Konveksi Tropis',
        location: 'Bogor, Jawa Barat, Indonesia',
        description: 'Kota Bogor memiliki curah hujan luar biasa tinggi mencapai lebih dari 4.000 mm per tahun dengan frekuensi petir tertinggi di dunia (rata-rata 322 hari guruh per tahun). Letak topografisnya diapit oleh Gunung Salak, Gunung Gede, dan Gunung Pangrango membuat angin lembap dari Laut Jawa terperangkap dan terdorong naik secara orografis dipadu pemanasan konveksi lokal.',
        takeaway: 'Morfologi lereng pegunungan adalah mesin pemacu presipitasi paling perkasa di daerah tropis.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Mekanisme Hujan Orografis dan Terbentuknya Angin Fohn di Balik Lereng',
        caption: 'Bagan visual udara lembap naik di lereng basah (windward) dan menuruni lereng kering sebagai angin fohn panas (leeward).',
        badge: 'Precipitation Models'
      }
    ],
    terminology: [
      { term: 'Inti Kondensasi (CCN)', definition: 'Partikel mikroskopis higroskopis terapung di udara (garam laut, debu vulkanik, jelaga) tempat uap air menempel dan berkondensasi menjadi tetes awan.', scientificTerm: 'Cloud Condensation Nuclei' },
      { term: 'Daerah Bayangan Hujan', definition: 'Wilayah di lereng belakang pegunungan yang kering dan menerima curah hujan sangat rendah karena uap air telah habis di lereng depan.', scientificTerm: 'Rain Shadow Area' },
      { term: 'Angin Fohn', definition: 'Angin jatuh lokal yang bertiup menuruni lereng pegunungan belakang dengan sifat yang sangat kering dan bersuhu panas.', scientificTerm: 'Föhn Wind' }
    ],
    summary: [
      'Presipitasi hujan terbentuk melalui pendinginan adiabatik udara lembap hingga mencapai titik jenuh embun.',
      'Empat jenis hujan adalah Konveksi (Zenithal tropis), Orografis (pegunungan), Frontal (pertemuan massa udara dingin-panas), dan Siklonal.',
      'Hujan orografis menciptakan fenomena daerah bayangan hujan dan angin jatuh kering (fohn) di lereng sebaliknya.'
    ],
    quiz: [
      {
        id: 'q34-1',
        question: 'Jenis hujan yang paling sering terjadi di wilayah tropis Indonesia pada musim peralihan (pancaroba), ditandai dengan pemanasan terik pada pagi hari lalu diikuti hujan lebat petir berangin kencang dari awan Cumulonimbus pada sore hari adalah...',
        options: ['Hujan orografis', 'Hujan frontal', 'Hujan konveksi (zenithal)', 'Hujan siklonal laut'],
        correctAnswer: 2,
        explanation: 'Hujan konveksi (atau hujan zenithal) dipicu oleh pemanasan kuat permukaan bumi yang memicu naiknya massa udara lembap secara vertikal membentuk awan Cumulonimbus pekat.'
      },
      {
        id: 'q34-2',
        question: 'Lereng pegunungan di sisi belakang yang memunggungi arah datangnya angin basah memiliki curah hujan yang sangat sedikit dan kering. Wilayah ini dinamakan...',
        options: ['Daerah konvergensi antartropis', 'Daerah bayangan hujan (rain shadow)', 'Zona inversi suhu', 'Lembah meander aluvial'],
        correctAnswer: 1,
        explanation: 'Daerah bayangan hujan (rain shadow) adalah kawasan di balik lereng gunung yang kering karena seluruh kandungan uap air telah dicurahkan di lereng depan (windward).'
      }
    ],
    references: ['Houze, R. A. (2014). Cloud Dynamics. Academic Press.', 'Barry, R. G., & Chorley, R. J. (2009). Atmosphere, Weather and Climate. Routledge.'],
    relatedTopicIds: ['unsur-unsur-cuaca-dan-iklim', 'pola-angin-global-dan-lokal', 'klasifikasi-iklim', 'siklus-hidrologi']
  },
  {
    id: 'klasifikasi-iklim',
    number: 35,
    title: 'Klasifikasi Iklim',
    englishTitle: 'Climate Classification Systems: Koppen, Schmidt-Ferguson, and Junghuhn',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Mendalami 4 sistem klasifikasi iklim terpenting dalam kurikulum geografi: Iklim Matahari, Iklim Köppen (Af, Am, Aw, dll.), Iklim Schmidt-Ferguson (nilai Q bulan basah/kering), Iklim Junghuhn (zona ketinggian tanaman), dan Iklim Oldeman (pertanian pangan).',
    keywords: ['klasifikasi iklim', 'iklim koppen', 'schmidt ferguson', 'iklim junghuhn', 'iklim oldeman', 'nilai q', 'bulan basah bulan kering'],
    learningObjectives: [
      'Mengklasifikasikan zona iklim matahari berdasarkan garis lintang.',
      'Menganalisis sistem klasifikasi iklim Köppen berbasis suhu dan vegetasi penutup alamiah.',
      'Menghitung nilai rasio Q pada klasifikasi Schmidt-Ferguson dan mengidentifikasi zona ketinggian vegetasi Junghuhn.'
    ],
    introduction: 'Iklim di bumi memiliki variasi yang teratur bergantung pada letak lintang, posisi terhadap samudra, ketinggian tempat, serta peredaran angin musiman. Untuk mempermudah pemahaman zonasi agroklimat dan persebaran bioma tumbuhan, para ilmuwan merumuskan berbagai sistem klasifikasi iklim. Di Indonesia, tiga klasifikasi yang paling sering diterapkan adalah Klasifikasi Köppen (berbasis vegetasi dunia), Klasifikasi Schmidt-Ferguson (berbasis rasio bulan basah/kering untuk kehutanan), dan Klasifikasi Junghuhn (berbasis ketinggian lereng untuk tanaman budidaya).',
    sections: [
      {
        subtitle: '1. Klasifikasi Iklim Schmidt-Ferguson untuk Kehutanan Tropis',
        content: 'F. H. Schmidt dan J. H. A. Ferguson (1951) merancang klasifikasi iklim khusus untuk Indonesia dengan menghitung perbandingan jumlah Bulan Kering (BK) dan Bulan Basah (BB) menurut kriteria Mohr:',
        table: {
          headers: ['Kategori Bulan (Mohr)', 'Batas Curah Hujan Bulanan', 'Tipe Iklim Schmidt-Ferguson (Nilai Q)'],
          rows: [
            ['Bulan Basah (BB)', 'Curah hujan > 100 mm/bulan', 'Tipe A (Sangat Basah): Q = 0% – 14,3% (Hutan hujan tropis)'],
            ['Bulan Lembap (BL)', 'Curah hujan antara 60 – 100 mm/bulan', 'Tipe B (Basah): Q = 14,3% – 33,3%'],
            ['Bulan Kering (BK)', 'Curah hujan < 60 mm/bulan', 'Tipe C (Agak Basah): Q = 33,3% – 60,0%\nTipe D (Sedang): Q = 60,0% – 100,0%\nTipe E, F, G, H (Kering hingga Luar Biasa Kering, Q > 100%)']
          ]
        },
        formula: {
          expression: 'Q = \\frac{\\text{Rata-rata Jumlah Bulan Kering (BK)}}{\\text{Rata-rata Jumlah Bulan Basah (BB)}} \\times 100\\%',
          explanation: 'Bulan Kering adalah bulan dengan CH < 60 mm; Bulan Basah adalah bulan dengan CH > 100 mm (Bulan lembap diabaikan dalam rumus).',
          exampleCalculation: 'Jika suatu stasiun pencatat rata-rata memiliki 2 Bulan Kering dan 8 Bulan Basah per tahun, maka nilai Q = (2 / 8) × 100% = 25%. Nilai Q 25% masuk dalam kategori Tipe B (Iklim Basah).'
        }
      },
      {
        subtitle: '2. Klasifikasi Iklim Junghuhn Berdasarkan Ketinggian Tempat',
        content: 'Franz Wilhelm Junghuhn membagi wilayah pulau Jawa menjadi empat zona iklim berdasarkan elevasi ketinggian dan jenis tanaman budidaya yang cocok hidup di sana:',
        table: {
          headers: ['Zona Ketinggian Junghuhn', 'Elevasi (mdpl)', 'Suhu Rata-Rata', 'Vegetasi Alami & Tanaman Budidaya Unggulan'],
          rows: [
            ['1. Zona Panas', '0 – 600 meter', '22°C – 26,3°C', 'Padi, jagung, tebu, kelapa, karet, tembakau'],
            ['2. Zona Sedang', '600 – 1.500 meter', '17,1°C – 22°C', 'Teh, kopi robusta/arabika, kina, sayur-mayur hortikultura, cokelat'],
            ['3. Zona Sejuk', '1.500 – 2.500 meter', '11,1°C – 17,1°C', 'Pinus, cemara gunung, tanaman obat, sayuran dataran tinggi (kentang, kubis)'],
            ['4. Zona Dingin', '> 2.500 meter', '< 11,1°C', 'Lumut, lichen, edelweiss jawa (tidak ada tanaman budidaya pertanian)']
          ]
        }
      },
      {
        subtitle: '3. Klasifikasi Iklim Köppen Global',
        content: 'Wladimir Köppen membagi iklim dunia menjadi 5 kelompok huruf besar utama: Iklim A (Tropis Basah), Iklim B (Kering / Arid), Iklim C (Sedang Hangat), Iklim D (Benua Dingin), dan Iklim E (Kutub Es). Indonesia didominasi oleh kelompok Iklim A Tropis:',
        keyPoints: [
          'Iklim Af (Hutan Hujan Tropis): Sepanjang tahun basah, tidak ada musim kemarau nyata (Sumatra, Kalimantan, Papua barat).',
          'Iklim Am (Monsun Tropis): Memiliki musim kemarau pendek namun curah hujan tahunan tetap tinggi (sebagian besar Jawa Tengah, Jawa Barat, Sulawesi).',
          'Iklim Aw (Sabana Tropis): Musim kemarau panjang yang nyata, vegetasi rumput diselingi pohon (Jawa Timur bagian timur, Bali, Nusa Tenggara Barat dan Timur).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Iklim Oldeman untuk Tanaman Pangan',
        items: [
          { name: 'Zona Utama A (Sangat Basah)', description: '> 9 bulan basah berturut-turut (cocok tanam padi terus menerus sepanjang tahun).' },
          { name: 'Zona Utama B (Basah)', description: '7 – 9 bulan basah berturut-turut (tanam padi 2 kali setahun + palawija).' },
          { name: 'Zona Utama C (Agak Basah)', description: '5 – 6 bulan basah berturut-turut (padi 1 kali + palawija 2 kali).' },
          { name: 'Zona Utama D & E (Kering)', description: '< 5 bulan basah berturut-turut (lahan kering tadah hujan).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pencatatan Data Hujan', title: 'Data Curah Hujan 10 Tahun', description: 'Mencatat rata-rata curah hujan bulanan stasiun meteorologi selama minimal satu dekade.' },
      { stage: 'Penghitungan Bulan', title: 'Pemisahan BB, BL, dan BK', description: 'Menghitung rata-rata frekuensi bulan basah (>100 mm) dan bulan kering (<60 mm).' },
      { stage: 'Penentuan Tipe Iklim', title: 'Kalkulasi Rasio Nilai Q', description: 'Menghitung nilai Q Schmidt-Ferguson dan menetapkan tipe iklim dari A sampai H.' }
    ],
    caseStudies: [
      {
        title: 'Gradasi Iklim Köppen Pulau Jawa dari Barat (Af) ke Timur (Aw)',
        location: 'Pulau Jawa, Indonesia',
        description: 'Pulau Jawa memperlihatkan gradasi iklim yang sangat jelas dari barat ke timur: Jawa Barat beriklim Af (Hutan Hujan Tropis lebat, basah sepanjang tahun), Jawa Tengah beriklim Am (Monsun Tropis), sedangkan Jawa Timur bagian timur (Situbondo, Baluran) beriklim Aw (Sabana Tropis kering). Fenomena ini disebabkan angin monsun barat yang membawa banyak uap air makin berkurang kelembapannya saat berhembus ke timur.',
        takeaway: 'Gradasi iklim mengendalikan jenis lanskap vegetasi dari hutan rimba lebat di barat hingga padang rumput sabana di timur.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Zonasi Ketinggian Iklim Junghuhn dan Tanaman Budidaya',
        caption: 'Penampang profil gunung zona Junghuhn: Zona Panas (padi/kelapa), Sedang (teh/kopi), Sejuk (pinus/kentang), dan Dingin (lumut).',
        badge: 'Agroclimate Zones'
      }
    ],
    terminology: [
      { term: 'Nilai Rasio Q', definition: 'Angka perbandingan antara rata-rata jumlah bulan kering dan rata-rata jumlah bulan basah dalam persentase menurut Schmidt-Ferguson.', scientificTerm: 'Q-Ratio' },
      { term: 'Iklim Af', definition: 'Tipe iklim hutan hujan tropis menurut Köppen dengan suhu bulan terdingin >18°C dan curah hujan bulan terkering >60 mm.', scientificTerm: 'Tropical Rainforest Climate' },
      { term: 'Bulan Kering Mohr', definition: 'Bulan dalam satu tahun kalender dengan jumlah akumulasi curah hujan kurang dari 60 milimeter.', scientificTerm: 'Dry Month' }
    ],
    summary: [
      'Klasifikasi Köppen mengelompokkan iklim dunia berdasarkan suhu dan vegetasi alami (Af, Am, Aw mendominasi Indonesia).',
      'Klasifikasi Schmidt-Ferguson menggunakan rasio Q = (Bulan Kering / Bulan Basah) × 100%.',
      'Klasifikasi Junghuhn membagi zona iklim berdasarkan ketinggian tempat (Panas, Sedang, Sejuk, Dingin).'
    ],
    quiz: [
      {
        id: 'q35-1',
        question: 'Menurut klasifikasi iklim Junghuhn, kawasan perkebunan teh dan tanaman kina paling cocok dibudidayakan pada zona...',
        options: ['Zona Panas (0 – 600 mdpl)', 'Zona Sedang (600 – 1.500 mdpl)', 'Zona Dingin (> 2.500 mdpl)', 'Zona Pasang Surut'],
        correctAnswer: 1,
        explanation: 'Zona Sedang Junghuhn (elevasi 600–1.500 mdpl dengan suhu 17,1°C–22°C) adalah zona agroklimat paling ideal untuk budidaya teh, kopi, kina, dan cokelat.'
      },
      {
        id: 'q35-2',
        question: 'Sebuah wilayah di Nusa Tenggara memiliki rata-rata 6 Bulan Kering dan 3 Bulan Basah dalam setahun. Berapakah nilai rasio Q Schmidt-Ferguson dan apa tipe iklimnya?',
        options: ['Q = 50% (Tipe C)', 'Q = 200% (Tipe F - Kering)', 'Q = 25% (Tipe B)', 'Q = 10% (Tipe A)'],
        correctAnswer: 1,
        explanation: 'Q = (BK / BB) × 100% = (6 / 3) × 100% = 200%. Nilai Q antara 167% – 300% tergolong Tipe F (Iklim Kering).'
      }
    ],
    references: ['Schmidt, F. H., & Ferguson, J. H. A. (1951). Rainfall types based on wet and dry period ratios for Indonesia. Djawatan Meteorologi dan Geofisik.', 'Kottek, M., et al. (2006). World Map of the Köppen-Geiger climate classification updated. Meteorologische Zeitschrift.'],
    relatedTopicIds: ['unsur-unsur-cuaca-dan-iklim', 'angin-muson', 'bioma-dunia', 'persebaran-flora-dan-fauna-indonesia']
  },
  {
    id: 'pola-angin-global-dan-lokal',
    number: 36,
    title: 'Pola Angin Global dan Lokal',
    englishTitle: 'Global and Local Wind Systems: Dynamics and Circulation',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah sistem sirkulasi udara bumi: Sel Sirkulasi Global (Hadley, Ferrel, Polar), Gaya Coriolis dan Hukum Buys Ballot, Angin Pasat dan Angin Barat, serta Angin Lokal (angin darat-laut, angin gunung-lembah, angin fohn).',
    keywords: ['angin pasat trade winds', 'sel hadley', 'gaya coriolis', 'hukum buys ballot', 'angin darat angin laut', 'angin gunung angin lembah'],
    learningObjectives: [
      'Menjelaskan Hukum Buys Ballot dan pengaruh Gaya Coriolis terhadap pembelokan arah angin di belahan bumi utara dan selatan.',
      'Menganalisis sistem tiga sel sirkulasi atmosfer global: Sel Hadley, Sel Ferrel, dan Sel Kutub (Polar).',
      'Membedakan mekanisme sirkulasi angin lokal: angin darat-laut dan angin lembah-gunung.'
    ],
    introduction: 'Angin adalah massa udara yang bergerak mendatar dari daerah bertekanan udara tinggi (maksimum) menuju daerah bertekanan udara rendah (minimum). Perbedaan pemanasan matahari antara kawasan ekuator yang terik dan kutub yang membeku menciptakan sirkulasi atmosfer global tiga sel raksasa. Rotasi bumi pada porosnya membangkitkan Gaya Coriolis semu yang membelokkan arah hembusan angin. Di tingkat lokal, perbedaan sifat termal daratan dan lautan melahirkan ritme harian angin darat dan angin laut yang dimanfaatkan nelayan tradisional.',
    sections: [
      {
        subtitle: '1. Hukum Buys Ballot dan Gaya Coriolis',
        content: 'Christophorus Buys Ballot (1857) merumuskan hukum pergerakan angin fundamental:',
        keyPoints: [
          'Bunyi Hukum Buys Ballot: "Udara bergerak mengalir dari daerah bertekanan maksimum ke daerah bertekanan minimum. Di Belahan Bumi Utara (BBU), arah angin dibelokkan ke kanan; sedangkan di Belahan Bumi Selatan (BBS), arah angin dibelokkan ke kiri."',
          'Penyebab Pembelokan: Gaya Coriolis, yaitu gaya semu inersia yang ditimbulkan oleh rotasi bumi dari barat ke timur. Di garis ekuator (lintang 0°), gaya Coriolis bernilai nol sehingga tidak ada pembelokan (alasan mengapa siklon tropis tidak pernah terbentuk di ekuator Indonesia).'
        ]
      },
      {
        subtitle: '2. Tiga Sel Sirkulasi Atmosfer Global',
        content: 'Atmosfer bumi membagi sirkulasi panasnya ke dalam tiga sabuk sel sirkulasi di setiap belahan bumi:',
        table: {
          headers: ['Sel Sirkulasi', 'Cakupan Lintang', 'Arah Angin Dominan Permukaan', 'Kondisi Cuaca Khas'],
          rows: [
            ['Sel Hadley', '0° – 30° LU/LS (Tropis)', 'Angin Pasat Timur Laut (BBU) dan Angin Pasat Tenggara (BBS)', 'Udara naik di ekuator membentuk zona konvergensi antartropis (ITCZ / Doldrums) basah hujan lebat; udara turun di 30° membentuk sabuk gurun subtropis kering'],
            ['Sel Ferrel', '30° – 60° LU/LS (Sedang)', 'Angin Barat (Westerlies) yang berhembus kuat dari barat daya ke timur laut', 'Wilayah badai frontal aktif akibat pertemuan massa udara hangat subtropis dan dingin kutub'],
            ['Sel Kutub (Polar Cell)', '60° – 90° LU/LS (Arktik/Antarktika)', 'Angin Timur Kutub (Polar Easterlies) yang dingin beku', 'Udara turun bertekanan tinggi di kutub, sangat kering dengan presipitasi salju tipis']
          ]
        }
      },
      {
        subtitle: '3. Sistem Angin Lokal Harian',
        content: 'Perbedaan kapasitas kalor jenis (panas jenis) antara daratan (cepat panas, cepat dingin) dan lautan (lambat panas, lambat dingin) menghasilkan perbedaan tekanan lokal:',
        keyPoints: [
          'Angin Laut (Siang Hari): Siang hari daratan lebih cepat panas dibanding laut sehingga bertekanan rendah (L), udara sejuk dari laut bertiup ke darat (dimanfaatkan kapal nelayan pulang ke darat).',
          'Angin Darat (Malam Hari): Malam hari daratan lebih cepat dingin dibanding air laut yang masih menyimpan panas, udara bertiup dari daratan ke laut (dimanfaatkan nelayan tradisional berangkat melaut).',
          'Angin Lembah (Siang Hari): Lereng gunung terkena matahari memanas, udara naik dari dasar lembah menaiki lereng.',
          'Angin Gunung (Malam Hari): Puncak gunung mendingin cepat, udara dingin padat yang berat mengalir turun menuruni lereng ke lembah (angin katabatik).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Skala Sistem Angin',
        items: [
          { name: 'Sirkulasi Global (Makro)', description: 'Angin Pasat (Trade Winds), Angin Barat, Angin Timur Kutub, Jet Stream.' },
          { name: 'Sirkulasi Regional (Meso)', description: 'Angin Muson Barat dan Muson Timur di Asia Tenggara-Australia.' },
          { name: 'Sirkulasi Lokal (Mikro)', description: 'Angin darat-laut, angin lembah-gunung, angin fohn lereng.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pemanasan Ekuator', title: 'Udara Naik di ITCZ', description: 'Matahari tegak lurus memanaskan ekuator, udara mengembang naik ke troposfer atas.' },
      { stage: 'Divergensi Atas', title: 'Perjalanan ke Subtropis', description: 'Udara di atas bergerak ke arah lintang 30° lalu mendingin dan amblas turun (subsidence).' },
      { stage: 'Aliran Balik Permukaan', title: 'Hembusan Angin Pasat', description: 'Udara di permukaan mengalir kembali ke ekuator dan dibelokkan Coriolis menjadi Angin Pasat.' }
    ],
    caseStudies: [
      {
        title: 'Kearifan Nelayan Tradisional Bugis Memanfaatkan Siklus Angin Darat dan Laut',
        location: 'Kepulauan Spermonde dan Teluk Bone, Sulawesi Selatan',
        description: 'Pelaut dan nelayan tradisional suku Bugis-Makassar selama berabad-abad mengarungi samudra mengandalkan siklus angin diurnal alami: mereka mendayung perahu pinisi berangkat melaut di tengah malam memanfaatkan dorongan Angin Darat, lalu kembali berlabuh di dermaga pantai saat siang menjelang sore didorong oleh Angin Laut yang sejuk kencang.',
        takeaway: 'Kearifan maritim Nusantara berakar pada pembacaan intuitif terhadap hukum fisika atmosfer.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Sirkulasi Atmosfer Global: Sel Hadley, Ferrel, Polar, dan Sel Darat-Laut',
        caption: 'Simulasi sirkulasi 3 sel bumi dan animasi pergeseran diurnal angin darat-laut.',
        badge: 'Wind Dynamics',
        interactiveLabId: 'global-winds'
      }
    ],
    terminology: [
      { term: 'Gaya Coriolis', definition: 'Gaya semu yang membelokkan arah gerakan benda bebas di atmosfer akibat efek rotasi bumi pada porosnya.', scientificTerm: 'Coriolis Effect' },
      { term: 'ITCZ (Intertropical Convergence Zone)', definition: 'Zona bertekanan rendah di sekitar khatulistiwa tempat bertemunya Angin Pasat Timur Laut dan Tenggara, ditandai pembentukan awan konveksi tebal.', scientificTerm: 'ITCZ' },
      { term: 'Angin Pasat (Trade Winds)', definition: 'Angin tetap yang berhembus sepanjang tahun dari daerah subtropis lintang 30° menuju daerah khatulistiwa (ekuator).', scientificTerm: 'Trade Winds' }
    ],
    summary: [
      'Gaya Coriolis membelokkan angin ke kanan di BBU dan ke kiri di BBS (Hukum Buys Ballot).',
      'Tiga sel sirkulasi global adalah Sel Hadley (tropis), Sel Ferrel (sedang), dan Sel Kutub.',
      'Perbedaan panas jenis daratan dan lautan memicu ritme angin laut pada siang hari dan angin darat pada malam hari.'
    ],
    quiz: [
      {
        id: 'q36-1',
        question: 'Menurut Hukum Buys Ballot, bagaimanakah arah pergerakan angin akibat pengaruh rotasi bumi (Gaya Coriolis)?',
        options: [
          'Bergerak lurus tanpa pembelokan sama sekali',
          'Membelok ke kanan di Belahan Bumi Utara dan membelok ke kiri di Belahan Bumi Selatan',
          'Membelok ke barat di semua belahan bumi',
          'Berhenti bertiup saat melewati samudra'
        ],
        correctAnswer: 1,
        explanation: 'Hukum Buys Ballot menyatakan bahwa angin bertiup dari daerah bertekanan tinggi ke rendah, dibelokkan ke kanan di BBU dan ke kiri di BBS akibat rotasi bumi.'
      },
      {
        id: 'q36-2',
        question: 'Nelayan tradisional di pesisir pantai Indonesia biasa berangkat melaut mencari ikan pada malam hari karena memanfaatkan bantuan tiupan...',
        options: ['Angin laut', 'Angin darat', 'Angin lembah', 'Angin fohn'],
        correctAnswer: 1,
        explanation: 'Pada malam hari, daratan lebih cepat dingin dibanding lautan sehingga bertekanan tinggi; angin bertiup dari daratan ke laut (Angin Darat) mendorong perahu nelayan berangkat.'
      }
    ],
    references: ['Holton, J. R., & Hakim, G. J. (2012). An Introduction to Dynamic Meteorology. Academic Press.', 'Marshall, J., & Plumb, R. A. (2008). Atmosphere, Ocean, and Climate Dynamics. Elsevier.'],
    relatedTopicIds: ['unsur-unsur-cuaca-dan-iklim', 'angin-muson', 'proses-terjadinya-hujan', 'el-nino-dan-la-nina']
  },
  {
    id: 'angin-muson',
    number: 37,
    title: 'Angin Muson',
    englishTitle: 'The Monsoon System: West and East Monsoons in Indonesia',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis sistem peredaran angin muson musiman di Indonesia: Muson Barat (Oktober – April / musim hujan) dan Muson Timur (April – Oktober / musim kemarau), pengaruh gerak semu tahunan matahari, dan dampaknya pada kalender pertanian (Pranata Mangsa).',
    keywords: ['angin muson barat', 'angin muson timur', 'musim hujan', 'musim kemarau', 'gerak semu matahari', 'pranata mangsa'],
    learningObjectives: [
      'Menjelaskan penyebab terjadinya angin muson akibat perbedaan pemanasan Benua Asia dan Benua Australia.',
      'Menganalisis karakteristik Angin Muson Barat yang membawa musim hujan di Indonesia.',
      'Menganalisis karakteristik Angin Muson Timur yang membawa musim kemarau di Indonesia.'
    ],
    introduction: 'Kata "muson" berasal dari bahasa Arab "mausim" yang berarti musim. Angin muson (monsoon) adalah sistem angin periodik skala benua yang berganti arah secara berlawanan setiap setengah tahun sekali. Fenomena muson di Indonesia dikendalikan oleh Gerak Semu Tahunan Matahari yang bergeser antara 23,5°LU (Tropic of Cancer) dan 23,5°LS (Tropic of Capricorn). Pergeseran posisi puncak pemanasan ini menyebabkan Benua Asia dan Benua Australia bergantian menjadi pusat tekanan udara tinggi dan rendah, memicu hembusan Muson Barat dan Muson Timur.',
    sections: [
      {
        subtitle: '1. Angin Muson Barat: Pembawa Musim Penghujan',
        content: 'Berlangsung antara bulan Oktober hingga April:',
        keyPoints: [
          'Posisi Matahari: Matahari berada di Belahan Bumi Selatan (BBS / di atas Australia).',
          'Gradien Tekanan: Benua Australia mengalami musim panas bertekanan rendah (L), sementara Benua Asia mengalami musim dingin bertekanan tinggi (H).',
          'Arah Aliran: Angin bertiup dari Benua Asia menuju Benua Australia. Saat melintasi Samudra Pasifik barat dan Laut Natuna Utara yang hangat, angin ini menyerap triliunan kubik uap air.',
          'Dampak di Indonesia: Menumpahkan curah hujan yang melimpah di hampir seluruh kepulauan Indonesia (Musim Hujan).'
        ]
      },
      {
        subtitle: '2. Angin Muson Timur: Pembawa Musim Kemarau',
        content: 'Berlangsung antara bulan April hingga Oktober:',
        table: {
          headers: ['Parameter', 'Muson Barat (Oktober – April)', 'Muson Timur (April – Oktober)'],
          rows: [
            ['Posisi Pemanasan Matahari', 'Matahari di Belahan Bumi Selatan (di atas Australia)', 'Matahari di Belahan Bumi Utara (di atas Asia)'],
            ['Tekanan Benua Asia', 'Maksimum (Tinggi / Dingin)', 'Minimum (Rendah / Panas)'],
            ['Tekanan Benua Australia', 'Minimum (Rendah / Panas)', 'Maksimum (Tinggi / Dingin)'],
            ['Karakteristik Udara', 'Sangat basah, lembap, jenuh uap air samudra luas', 'Sangat kering, bersumber dari gurun pasir tandus Australia'],
            ['Musim di Indonesia', 'Musim Hujan (petani mulai menanam padi sawah)', 'Musim Kemarau (panen padi, tanam palawija tahan kering)']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Periode Pancaroba (Peralihan Musim)',
        items: [
          { name: 'Pancaroba I (Maret – Mei)', description: 'Peralihan dari musim hujan ke musim kemarau; sering terjadi hujan lebat angin puting beliung sore hari.' },
          { name: 'Pancaroba II (September – November)', description: 'Peralihan dari musim kemarau ke musim hujan; suhu udara sangat terik gerah dan potensi gelombang laut tinggi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Gerak Semu Matahari', title: 'Pergeseran Deklinasi Surya', description: 'Matahari bergerak ke arah 23,5°LS pada bulan Desember, memanaskan daratan gurun Australia.' },
      { stage: 'Pembentukan Gradien', title: 'Pusat Tekanan H Asia & L Australia', description: 'Tekanan tinggi terbentuk di Siberia/Tiongkok, tekanan rendah terbentuk di daratan Australia.' },
      { stage: 'Pembelokan Coriolis', title: 'Muson Barat Menerpa Nusantara', description: 'Angin dari barat laut menyeberangi ekuator, dibelokkan ke kiri oleh Coriolis menjadi angin barat bermuatan air.' }
    ],
    caseStudies: [
      {
        title: 'Sistem Kalender Pertanian Jawa "Pranata Mangsa" Berbasis Muson',
        location: 'Jawa Tengah dan D.I. Yogyakarta, Indonesia',
        description: 'Masyarakat petani Jawa sejak era Keraton Surakarta menciptakan kalender biometeorologi "Pranata Mangsa" yang membagi 1 tahun ke dalam 12 mangsa (musim). Mangsa Labuh (September-November) menandai kedatangan Muson Barat untuk membajak sawah, sedangkan Mangsa Mareng (Maret-April) menandai panen raya sebelum Muson Timur kering tiba.',
        takeaway: 'Kearifan lokal agraris Indonesia adalah integrasi empiris sains siklus angin muson benua.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Arah Tiupan Angin Muson Barat dan Angin Muson Timur di Indonesia',
        caption: 'Bagan pergerakan massa udara dari Asia ke Australia (Muson Barat) dan dari Australia ke Asia (Muson Timur).',
        badge: 'Monsoon Circulation'
      }
    ],
    terminology: [
      { term: 'Angin Muson', definition: 'Sistem angin skala regional benua yang berbalik arah secara berkala setiap setengah tahun sekali dipicu gerak semu matahari.', scientificTerm: 'Monsoon Wind' },
      { term: 'Musim Pancaroba', definition: 'Masa transisi atau pergantian antara dua musim (antara musim hujan dan kemarau) yang ditandai cuaca labil tak menentu.', scientificTerm: 'Inter-monsoon Transition' },
      { term: 'Pranata Mangsa', definition: 'Sistem penanggalan musim tradisional masyarakat Jawa yang digunakan sebagai pedoman waktu bercocok tanam berbasis peredaran muson.', scientificTerm: 'Traditional Agroclimatic Calendar' }
    ],
    summary: [
      'Angin Muson berganti arah setiap 6 bulan akibat gerak semu tahunan matahari antara Asia dan Australia.',
      'Muson Barat (Oktober–April) bertiup dari Asia kaya uap air dan membawa musim hujan di Indonesia.',
      'Muson Timur (April–Oktober) bertiup dari gurun Australia yang kering dan membawa musim kemarau di Indonesia.'
    ],
    quiz: [
      {
        id: 'q37-1',
        question: 'Pada periode bulan Oktober hingga April, matahari berada di Belahan Bumi Selatan sehingga Benua Australia mengalami musim panas bertekanan rendah. Hal ini memicu terjadinya hembusan...',
        options: ['Angin Muson Timur (membawa kemarau)', 'Angin Muson Barat (membawa musim hujan)', 'Angin Pasat Timur Laut', 'Angin Fohn Bohorok'],
        correctAnswer: 1,
        explanation: 'Pada Oktober-April, angin bertiup dari tekanan tinggi Asia menuju tekanan rendah Australia melewati samudra luas, menghasilkan Angin Muson Barat pembawa musim hujan.'
      },
      {
        id: 'q37-2',
        question: 'Mengapa Angin Muson Timur yang bertiup dari Australia menuju Asia pada bulan April–Oktober bersifat kering dan menyebabkan musim kemarau di Indonesia?',
        options: [
          'Karena melewati deretan gunung berapi aktif di Sumatra',
          'Karena berasal dari daratan benua Australia yang 70% wilayahnya berupa gurun pasir kering dan jarak lintasan samudra sempit',
          'Karena tertahan oleh lapisan ozon stratosfer',
          'Karena suhunya di bawah titik beku es'
        ],
        correctAnswer: 1,
        explanation: 'Daratan Australia didominasi gurun pasir tandus dan kering, dan laut yang dilewatinya (Laut Timor/Arafura) relatif sempit sehingga massa udara hanya membawa sedikit uap air.'
      }
    ],
    references: ['Chang, C. P., et al. (2011). The Global Monsoon System: Research and Forecast. World Scientific.', 'Aldrian, E., & Susanto, R. D. (2003). Identification of three dominant rainfall regions within Indonesia and their relationship to ENSO. International Journal of Climatology.'],
    relatedTopicIds: ['pola-angin-global-dan-lokal', 'el-nino-dan-la-nina', 'klasifikasi-iklim', 'letak-astronomis-geografis-dan-geologis-indonesia']
  },
  {
    id: 'el-nino-dan-la-nina',
    number: 38,
    title: 'El Niño dan La Niña',
    englishTitle: 'El Niño-Southern Oscillation (ENSO) and Ocean-Atmosphere Coupling',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah fenomena dinamika iklim global ENSO (El Niño-Southern Oscillation): anomali Suhu Permukaan Laut (SPL) Pasifik ekuator, Sirkulasi Walker, El Niño (kekeringan ekstrem di Indonesia), La Niña (curah hujan berlebih/banjir), dan Indian Ocean Dipole (IOD).',
    keywords: ['el nino', 'la nina', 'enso', 'sirkulasi walker', 'suhu permukaan laut', 'anomali iklim', 'kekeringan'],
    learningObjectives: [
      'Menjelaskan mekanisme Sirkulasi Walker pada kondisi netral normal di Samudra Pasifik ekuator.',
      'Menganalisis proses terjadinya El Niño dan dampaknya berupa kemarau panjang, karhutla, dan gagal panen di Indonesia.',
      'Menganalisis proses terjadinya La Niña dan dampaknya berupa hujan ekstrem, banjir, tanah longsor, serta hubungannya dengan IOD.'
    ],
    introduction: 'El Niño-Southern Oscillation (ENSO) adalah anomali iklim laut-atmosfer paling berpengaruh di planet bumi yang berpusat di sepanjang Samudra Pasifik ekuator. Berakar dari kata bahasa Spanyol "El Niño" (Anak Lelaki / Bayi Yesus, dinamai oleh nelayan Peru karena sering terdeteksi di sekitar hari Natal saat tangkapan ikan teri berkurang), fenomena ini melibatkan osilasi periodik antara fase hangat (El Niño) dan fase dingin (La Niña). Perubahan suhu permukaan air laut di Pasifik tengah mampu memutarbalikkan pola sirkulasi angin global, memicu kekeringan hebat di Indonesia sekaligus banjir bandang di pantai Amerika Selatan.',
    sections: [
      {
        subtitle: '1. Perbandingan Kondisi Normal, El Niño, dan La Niña',
        content: 'ENSO beroperasi melalui interaksi gandeng antara Suhu Permukaan Laut (SPL) dan sel konveksi Sirkulasi Walker:',
        table: {
          headers: ['Parameter Iklim', 'Kondisi Netral (Normal)', 'Fase El Niño (Anomali Hangat)', 'Fase La Niña (Anomali Dingin)'],
          rows: [
            ['Suhu Permukaan Laut (SPL) Pasifik Tengah-Timur', 'Relatif dingin akibat upwelling air laut dalam di pantai Peru', 'Menghangat secara abnormal (> +0,5°C di atas rata-rata normal)', 'Mendingin secara abnormal (< -0,5°C di bawah rata-rata normal)'],
            ['Suhu Laut di Perairan Indonesia', 'Sangat hangat (Warm Pool Indo-Pasifik >28°C)', 'Mendingin secara abnormal; penguapan awan berpindah ke tengah Pasifik', 'Sangat panas membara; penguapan awan di Indonesia melonjak tajam'],
            ['Kekuatan Angin Pasat', 'Bertiup normal dari timur ke barat', 'Melemah drastis atau berbalik arah bertiup ke timur', 'Menguat bertiup sangat kencang ke arah barat menumpuk air hangat di Indonesia'],
            ['Dampak Nyata di Indonesia', 'Musim hujan dan kemarau normal teratur', 'Kemarau panjang ekstrem, kekeringan waduk, karhutla hebat, gagal panen pangan', 'Curah hujan ekstrem di atas normal sepanjang tahun ("kemarau basah"), banjir bandang, longsor masif']
          ]
        }
      },
      {
        subtitle: '2. Pengaruh Indian Ocean Dipole (IOD)',
        content: 'Selain ENSO di Pasifik, iklim Indonesia juga dipengaruhi oleh Indian Ocean Dipole (IOD) di Samudra Hindia:',
        keyPoints: [
          'IOD Positif: Suhu perairan barat Sumatra mendingin, suhu pantai timur Afrika menghangat; memperparah kekeringan di Indonesia (seperti pada tahun 2019 dan 2023).',
          'IOD Negatif: Suhu perairan Indonesia menghangat, memicu pasokan uap air berlebih dan memperkuat dampak basah La Niña.',
          'Super-El Niño: Terjadi ketika El Niño kuat bersamaan dengan IOD Positif kuat (contoh: tahun 1997-1998 dan 2015-2016 yang membakar jutaan hektar hutan gambut Indonesia).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tingkat Intensitas Indeks ENSO (Indeks Nino 3.4)',
        items: [
          { name: 'Lemah (Weak)', description: 'Anomali anomali suhu antara 0,5°C hingga 0,9°C.' },
          { name: 'Moderat (Moderate)', description: 'Anomali suhu antara 1,0°C hingga 1,4°C.' },
          { name: 'Kuat (Strong)', description: 'Anomali suhu antara 1,5°C hingga 1,9°C.' },
          { name: 'Sangat Kuat / Super El Niño', description: 'Anomali suhu permukaan laut melebihi ≥ 2,0°C di zona Nino 3.4.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelemahan Angin Pasat', title: 'Runtuhnya Arus Ekuator', description: 'Angin pasat timur melemah, air laut hangat di barat Pasifik mengalir kembali ke tengah/timur.' },
      { stage: 'Pergeseran Sirkulasi Walker', title: 'Pusat Konveksi Berpindah', description: 'Awan konveksi hujan berpindah dari wilayah Indonesia ke Pasifik tengah dekat garis tanggal.' },
      { stage: 'Subsidence di Indonesia', title: 'Udara Kering Menekan Hujan', description: 'Wilayah Indonesia dinaungi massa udara kering yang amblas turun, menghalangi pembentukan awan hujan.' }
    ],
    caseStudies: [
      {
        title: 'Bencana Kebakaran Hutan dan Asap Lintas Batas Akibat Super El Niño 2015',
        location: 'Sumatra dan Kalimantan, Indonesia',
        description: 'Peristiwa El Niño kuat tahun 2015 memicu kemarau panjang hingga 8 bulan di Indonesia. Lahan gambut yang kering kerontang terbakar hebat mencakup luasan lebih dari 2,6 juta hektar di Riau, Jambi, Sumatra Selatan, dan Kalimantan Tengah, menimbulkan kabut asap pekat darurat kesehatan hingga ke Singapura dan Malaysia serta kerugian ekonomi lebih dari 220 triliun rupiah.',
        takeaway: 'Pemantauan iklim ENSO oleh BMKG adalah pilar keamanan pangan dan mitigasi bencana nasional.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Komparasi Sirkulasi Walker: Kondisi Normal vs El Niño vs La Niña',
        caption: 'Bagan pergeseran sirkulasi konveksi udara atmosfer dan kolam air hangat (warm pool) di Samudra Pasifik.',
        badge: 'ENSO Diagnostics'
      }
    ],
    terminology: [
      { term: 'El Niño', definition: 'Pemanasan anomali suhu permukaan laut di Samudra Pasifik ekuator bagian tengah dan timur yang memicu kekeringan di Indonesia.', scientificTerm: 'El Niño' },
      { term: 'La Niña', definition: 'Pendinginan anomali suhu permukaan laut di Samudra Pasifik ekuator yang memicu lonjakan curah hujan tinggi di Indonesia.', scientificTerm: 'La Niña' },
      { term: 'Sirkulasi Walker', definition: 'Sirkulasi atmosfer zonal timur-barat di atas kawasan ekuator yang digerakkan oleh perbedaan suhu antara Pasifik barat dan timur.', scientificTerm: 'Walker Circulation' }
    ],
    summary: [
      'ENSO adalah interaksi laut-atmosfer berkala di Samudra Pasifik ekuator.',
      'El Niño menyebabkan kekeringan panjang dan risiko kebakaran hutan di Indonesia.',
      'La Niña menyebabkan peningkatan curah hujan ekstrem, banjir bandang, dan longsor di Indonesia.'
    ],
    quiz: [
      {
        id: 'q38-1',
        question: 'Fenomena anomali iklim global yang ditandai dengan memanasnya suhu permukaan air laut di Samudra Pasifik ekuator bagian tengah dan timur sehingga memicu musim kemarau panjang di Indonesia disebut...',
        options: ['La Niña', 'El Niño', 'Dipole Mode Negatif', 'Siklon Tropis'],
        correctAnswer: 1,
        explanation: 'El Niño terjadi saat air laut di Pasifik tengah menghangat, memindahkan pusat pembentukan awan hujan menjauhi Indonesia sehingga Indonesia mengalami kekeringan ekstrem.'
      },
      {
        id: 'q38-2',
        question: 'Dampak lingkungan paling nyata yang dirasakan di sebagian besar wilayah kepulauan Indonesia saat berlangsungnya anomali La Niña kuat adalah...',
        options: [
          'Kekeringan sumur dan meluasnya kebakaran hutan',
          'Penurunan debit sungai hingga dasar batu mengering',
          'Peningkatan curah hujan tinggi di atas normal yang memicu banjir dan tanah longsor',
          'Penurunan drastis populasi ikan laut di perairan Selat Sunda'
        ],
        correctAnswer: 2,
        explanation: 'La Niña memicu penumpukan air laut hangat di sekitar kepulauan Indonesia sehingga penguapan tinggi dan curah hujan melonjak drastis memicu banjir dan longsor.'
      }
    ],
    references: ['Philander, S. G. (1990). El Niño, La Niña, and the Southern Oscillation. Academic Press.', 'NOAA Climate Prediction Center. ENSO: Recent Evolution, Current Status and Predictions.'],
    relatedTopicIds: ['angin-muson', 'unsur-unsur-cuaca-dan-iklim', 'perubahan-iklim-dan-pemanasan-global', 'mitigasi-dan-adaptasi-bencana']
  },
  {
    id: 'perubahan-iklim-dan-pemanasan-global',
    number: 39,
    title: 'Perubahan Iklim dan Pemanasan Global',
    englishTitle: 'Climate Change and Global Warming: Science, Impacts, and Mitigation',
    categoryId: 'atmosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah sains perubahan iklim: Efek Rumah Kaca alami vs antropogenik (Enhanced Greenhouse Effect), gas rumah kaca utama (CO2, CH4, N2O, CFC), laporan ilmiah IPCC, kenaikan muka air laut global, ancaman tenggelamnya pulau-pulau kecil Indonesia, serta Perjanjian Paris 2015.',
    keywords: ['perubahan iklim', 'pemanasan global', 'efek rumah kaca', 'ipcc', 'gas rumah kaca', 'perjanjian paris', 'kenaikan muka laut'],
    learningObjectives: [
      'Membedakan Efek Rumah Kaca alami (menjaga bumi hangat +15°C) dan Efek Rumah Kaca berlebih akibat aktivitas manusia.',
      'Mengidentifikasi sumber emisi gas rumah kaca utama: CO2 pembakaran fosil, CH4 pertanian/sampah, N2O pupuk, dan fluorinasi.',
      'Menganalisis dampak perubahan iklim global terhadap wilayah kepulauan Indonesia (tenggelamnya pulau kecil, pemutihan karang, pergeseran musim).'
    ],
    introduction: 'Pemanasan Global (Global Warming) adalah fenomena peningkatan suhu rata-rata permukaan bumi, lautan, dan atmosfer secara bertahap sejak revolusi industri abad ke-18 akibat akumulasi emisi Gas Rumah Kaca (GRK) dari pembakaran bahan bakar fosil dan deforestasi. Pemanasan global memicu Perubahan Iklim (Climate Change) yang mengubah pola cuaca ekstrem, mencairkan tudung es kutub, dan menaikkan permukaan air laut. Sebagai negara kepulauan terbesar di dunia dengan 17.000 pulau dan garis pantai terpanjang kedua di dunia, Indonesia berada di garis depan ancaman eksistensial krisis iklim ini.',
    sections: [
      {
        subtitle: '1. Mekanisme Efek Rumah Kaca dan Gas Penyebabnya',
        content: 'Bumi menerima radiasi gelombang pendek dari matahari. Permukaan bumi menyerap energi tersebut dan memancarkannya kembali dalam bentuk radiasi gelombang panjang inframerah termal. Molekul gas rumah kaca di troposfer menyerap radiasi inframerah ini dan memancarkannya kembali ke segala arah termasuk ke permukaan bumi, menjebak panas di atmosfer:',
        table: {
          headers: ['Gas Rumah Kaca', 'Formula Kimia', 'Potensi Pemanasan Global (GWP 100-th)', 'Sumber Emisi Terbesar'],
          rows: [
            ['Karbon Dioksida', 'CO2', '1 (basis acuan)', 'Pembakaran batubara pembangkit PLTU, minyak bumi transportasi, deforestasi hutan'],
            ['Metana', 'CH4', '28 kali CO2', 'Sawah padi tergenang anaerobik, peternakan sapi, tempat pembuangan akhir (TPA) sampah'],
            ['Dinitrogen Oksida', 'N2O', '265 kali CO2', 'Penggunaan pupuk nitrogen kimia sintetis di lahan pertanian pertanian'],
            ['Gas Fluorinasi (HFC, PFC, SF6)', 'Senyawa sintetis', 'Ribuan hingga 23.500 kali CO2', 'Pendingin refrigeran AC, industri semikonduktor, insulasi gardu listrik']
          ]
        }
      },
      {
        subtitle: '2. Dampak Perubahan Iklim Nyata di Kepulauan Indonesia',
        content: 'Laporan Panel Antarpemerintah tentang Perubahan Iklim (IPCC) menegaskan dampak tak terbantahkan:',
        keyPoints: [
          'Kenaikan Muka Air Laut (Sea Level Rise): Rata-rata 0,5 – 1 cm per tahun di pesisir Indonesia, menenggelamkan pulau-pulau kecil tak berpenghuni dan memperparah banjir rob abadi di pesisir utara Jawa (Jakarta, Semarang, Pekalongan).',
          'Pemutihan Karang Masif (Coral Bleaching): Suhu laut memanas menyebabkan karang terumbu melepaskan alga simbiotik zooxanthellae sehingga karang memutih dan mati, menghancurkan ekosistem perikanan.',
          'Anomali Musim & Kerawanan Pangan: Kalender tanam petani kacau balau akibat musim kemarau yang lebih kering dan musim hujan dengan intensitas badai hidrometeorologi ekstrem.',
          'Mencairnya Gletser Abadi Puncak Jaya Papua: Luasan tutupan es abadi di Pegunungan Cartensz menyusut lebih dari 90% dan diproyeksikan punah total sebelum 2030.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Strategi Menghadapi Krisis Iklim',
        items: [
          { name: 'Mitigasi Iklim (Mengurangi Emisi)', description: 'Transisi ke energi terbarukan (surya, angin, geotermal), reboisasi hutan, moratorium izin sawit, efisiensi energi.' },
          { name: 'Adaptasi Iklim (Menyesuaikan Diri)', description: 'Pembangunan tanggul laut pelindung rob, pengembangan varietas padi tahan genangan asin, restorasi sabuk hijau mangrove pesisir.' }
        ]
      }
    ],
    processes: [
      { stage: 'Emisi Bahan Bakar Fosil', title: 'Pelepasan Emisi CO2 Masif', description: 'PLTU batubara dan knalpot kendaraan bermotor membuang miliaran ton CO2 ke atmosfer.' },
      { stage: 'Pemerangkapan Radiasi Termal', title: 'Peningkatan radiative forcing', description: 'Konsentrasi CO2 menembus 420 ppm, menyerap radiasi inframerah yang seharusnya lolos ke antariksa.' },
      { stage: 'Pencairan Es & Pemuaian Termal', title: 'Kenaikan Permukaan Air Laut', description: 'Gletser mencair dan molekul air laut memuai volume (thermal expansion) membanjiri pesisir.' }
    ],
    caseStudies: [
      {
        title: 'Ancaman Tenggelamnya Pesisir Pantura Jawa: Studi Kasus Pekalongan dan Muara Baru Jakarta',
        location: 'Pantura Jawa (DKI Jakarta, Pekalongan, Demak)',
        description: 'Kawasan pesisir Muara Baru Jakarta dan Pekalongan mengalami kombinasi mematikan antara kenaikan muka air laut global (~0,8 cm/tahun) dan penurunan tanah cepat (land subsidence hingga 10-15 cm/tahun akibat eksploitasi air tanah dalam). Ratusan rumah warga kini terendam air laut permanen, mengubah pemakaman dan persawahan menjadi rawa laut asin.',
        takeaway: 'Krisis iklim global menuntut transformasi radikal manajemen air perkotaan dan penghentian penggunaan batubara.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Kurva Keeling: Peningkatan Konsentrasi CO2 Atmosfer Sejak 1958',
        caption: 'Grafik konsentrasi CO2 di Observatorium Mauna Loa Hawaii yang melonjak dari 315 ppm menjadi lebih dari 420 ppm.',
        badge: 'Climate Diagnostics'
      }
    ],
    terminology: [
      { term: 'Gas Rumah Kaca (GRK)', definition: 'Gas-gas di atmosfer bumi yang mampu menyerap dan memancarkan kembali radiasi termal inframerah, memerangkap panas di troposfer.', scientificTerm: 'Greenhouse Gases (GHGs)' },
      { term: 'Perjanjian Paris 2015', definition: 'Kesepakatan iklim internasional yang mengikat negara-negara dunia untuk menahan kenaikan suhu global di bawah 2°C (idealnya 1,5°C) di atas masa pra-industri.', scientificTerm: 'Paris Agreement' },
      { term: 'IPCC', definition: 'Badan ilmiah PBB (Intergovernmental Panel on Climate Change) yang mengevaluasi penelitian sains perubahan iklim global secara berkala.', scientificTerm: 'IPCC' }
    ],
    summary: [
      'Pemanasan global dipicu oleh peningkatan drastis emisi gas rumah kaca (CO2, CH4, N2O) akibat aktivitas manusia.',
      'Dampaknya mencakup kenaikan muka air laut, pemutihan terumbu karang, anomali musim ekstrem, dan pencairan es gletser.',
      'Upaya penanggulangan harus menyeimbangkan antara mitigasi emisi energi bersih dan adaptasi ketahanan infrastruktur pesisir.'
    ],
    quiz: [
      {
        id: 'q39-1',
        question: 'Gas rumah kaca yang memiliki potensi pemanasan global (GWP) 28 kali lebih kuat dibanding CO2 dan banyak dihasilkan dari lahan persawahan padi tergenang serta peternakan adalah...',
        options: ['Oksigen (O2)', 'Metana (CH4)', 'Nitrogen (N2)', 'Argon (Ar)'],
        correctAnswer: 1,
        explanation: 'Metana (CH4) dihasilkan dari proses pembusukan anaerobik di sawah padi tergenang dan sistem pencernaan ternak ruminansia dengan potensi pemanasan 28 kali lipat dibanding CO2.'
      },
      {
        id: 'q39-2',
        question: 'Target utama kesepakatan internasional Paris Agreement 2015 yang diratifikasi oleh Indonesia adalah menahan kenaikan suhu rata-rata bumi...',
        options: [
          'Tepat di bawah 0°C',
          'Di bawah 2°C (diupayakan menahan pada batas 1,5°C) di atas tingkat pra-industri',
          'Menaikkan suhu hingga 5°C agar wilayah kutub mencair',
          'Membatasi curah hujan di kawasan ekuator'
        ],
        correctAnswer: 1,
        explanation: 'Perjanjian Paris 2015 berkomitmen menahan laju kenaikan suhu global di bawah 2°C dan mengupayakan pembatasan pada 1,5°C di atas tingkat masa pra-industri.'
      }
    ],
    references: ['IPCC. (2021). Climate Change 2021: The Physical Science Basis. Cambridge University Press.', 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK). Laporan Inventarisasi Gas Rumah Kaca Nasional.'],
    relatedTopicIds: ['atmosfer-dan-struktur-lapisan-atmosfer', 'el-nino-dan-la-nina', 'lingkungan-hidup-dan-ekosistem', 'pembangunan-berkelanjutan']
  },

  // CATEGORY E: Hidrosfer dan Oseanografi (40-46)
  {
    id: 'hidrosfer',
    number: 40,
    title: 'Hidrosfer',
    englishTitle: 'Hydrosphere and Global Water Budget',
    categoryId: 'hidrosfer',
    difficulty: 'Beginner',
    description: 'Memahami lapisan perairan bumi (hidrosfer): proporsi air asin vs air tawar, neraca air global (water balance), persebaran cadangan air di biosfer, dan krisis kelangkaan air bersih.',
    keywords: ['hidrosfer', 'neraca air global', 'air tawar vs air asin', 'cadangan air tanah', 'krisis air bersih'],
    learningObjectives: [
      'Menjelaskan definisi hidrosfer dan proporsi volume air asin (laut) versus air tawar di bumi.',
      'Mengidentifikasi alokasi air tawar global: gletser es kutub, air tanah, dan air permukaan tawar.',
      'Menganalisis konsep neraca air (water balance) dan ancaman krisis kelangkaan air tawar di era modern.'
    ],
    introduction: 'Hidrosfer adalah seluruh lapisan air yang berada di permukaan bumi, di dalam kerak bumi (air tanah), maupun di udara atmosfer dalam segala wujudnya (cair, padat es, maupun gas uap air). Bumi kerap dijuluki sebagai "Planet Biru" karena sekitar 71% permukaannya diselimuti air dengan total volume mencapai sekitar 1,386 miliar kilometer kubik. Namun, dari jumlah yang raksasa tersebut, 97,5% adalah air asin samudra, dan hanya 2,5% yang merupakan air tawar penopang kehidupan daratan.',
    sections: [
      {
        subtitle: '1. Neraca Pembagian Air Global di Bumi',
        content: 'Persebaran air di planet bumi sangat timpang dan terkunci dalam wujud es abadi:',
        table: {
          headers: ['Wujud / Lokasi Air', 'Persentase terhadap Total Air Bumi', 'Persentase terhadap Total Air Tawar', 'Aksesibilitas bagi Manusia'],
          rows: [
            ['Lautan & Samudra (Air Asin)', '97,5%', '–', 'Tidak dapat langsung diminum; memerlukan desalinasi energi tinggi'],
            ['Gletser & Tudung Es Kutub', '1,74%', '68,7% dari air tawar', 'Terkunci membeku di Antarktika, Greenland, dan puncak gunung tinggi'],
            ['Air Tanah (Groundwater)', '0,76%', '30,1% dari air tawar', 'Sumber utama air minum dan sumur warga; tersimpan di dalam pori batuan akuifer'],
            ['Danau Air Tawar & Rawa', '0,007%', '0,3% dari air tawar', 'Sumber air permukaan untuk PDAM, PLTA, dan irigasi'],
            ['Uap Air Atmosfer', '0,001%', '0,04% dari air tawar', 'Penggerak cuaca dan hujan presipitasi'],
            ['Sungai-Sungai di Daratan', '0,0002%', '0,006% dari air tawar', 'Volume sangat kecil namun menjadi urat nadi peradaban manusia']
          ]
        }
      },
      {
        subtitle: '2. Persamaan Neraca Air (Water Balance Equation)',
        content: 'Prinsip kekekalan massa air menyatakan bahwa jumlah total air di bumi bersifat tetap; air tidak pernah berkurang atau bertambah, melainkan hanya berubah wujud dan berpindah lokasi melalui persamaan neraca air:',
        keyPoints: [
          'Persamaan Neraca Air DAS: P = Q + E ± ΔS',
          'P = Presipitasi hujan yang jatuh ke permukaan tanah.',
          'Q = Debit limpasan air sungai (surface runoff) yang mengalir keluar DAS.',
          'E = Evapotranspirasi total (penguapan dari tanah + transpirasi daun vegetasi).',
          'ΔS = Perubahan cadangan simpanan air (storage) di dalam tanah dan akuifer.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Domain Kajian Hidrosfer',
        items: [
          { name: 'Potamologi', description: 'Cabang ilmu hidrologi yang khusus mempelajari perairan air mengalir (sungai).' },
          { name: 'Limnologi', description: 'Cabang ilmu yang mempelajari perairan menggenang di daratan (danau dan rawa).' },
          { name: 'Hidrogeologi', description: 'Cabang geologi yang mempelajari sebaran dan pergerakan air tanah di dalam batuan akuifer.' },
          { name: 'Oseanografi', description: 'Cabang ilmu kebumian yang mempelajari seluruh aspek fisik, kimia, dan biologi laut dan samudra.' }
        ]
      }
    ],
    processes: [
      { stage: 'Presipitasi Masuk', title: 'Curahan Hujan di Daratan', description: 'Air hujan jatuh mengisi cadangan sungai, danau, dan meresap ke dalam pori tanah.' },
      { stage: 'Penggunaan Biosfer', title: 'Konsumsi Organisme', description: 'Akar tanaman menyerap air tanah untuk transpirasi fotosintesis.' },
      { stage: 'Pelepasan ke Laut', title: 'Aliran Gravitasi Aluvial', description: 'Kelebihan air larian mengalir melalui sungai kembali ke samudra dalam neraca seimbang.' }
    ],
    caseStudies: [
      {
        title: 'Krisis Kelangkaan Air Bersih di Pulau Jawa Menghadapi Tahun 2040',
        location: 'Pulau Jawa, Indonesia',
        description: 'Pulau Jawa hanya memiliki sekitar 4,5% dari total potensi air tawar nasional, namun menampung lebih dari 55% total penduduk Indonesia (sekitar 150 juta jiwa). Studi Bappenas memproyeksikan krisis air bersih ekstrem melanda sebagian besar kota metropolitan Jawa pada 2040 akibat rusaknya daerah resapan air hulu dan eksploitasi berlebihan akuifer air tanah dalam.',
        takeaway: 'Neraca air yang defisit menjadi alasan kuat pemindahan ibu kota negara dan revitalisasi DAS kritis.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Diagram Proporsi Air Global: Air Asin Laut vs Alokasi Air Tawar Bumi',
        caption: 'Bagan pembagian 97,5% air asin dan 2,5% air tawar (68,7% es gletser, 30,1% air tanah, dan 0,3% danau/sungai).',
        badge: 'Water Budget'
      }
    ],
    terminology: [
      { term: 'Hidrosfer', definition: 'Seluruh lapisan air yang menyelimuti bumi, meliputi samudra, danau, sungai, air tanah, gletser, dan uap air di atmosfer.', scientificTerm: 'Hydrosphere' },
      { term: 'Neraca Air (Water Balance)', definition: 'Perhitungan matematis keseimbangan antara aliran air masuk (inflow/hujan) dan aliran keluar (outflow/penguapan/limpasan) dalam suatu DAS.', scientificTerm: 'Water Balance' },
      { term: 'Akuifer', definition: 'Lapisan batuan bawah tanah yang berpori dan permeabel sehingga mampu menyimpan dan mengalirkan air tanah dalam jumlah ekonomis.', scientificTerm: 'Aquifer' }
    ],
    summary: [
      'Hidrosfer mencakup seluruh wujud air di bumi, dengan 97,5% berupa air laut asin.',
      'Sebagian besar air tawar bumi (68,7%) membeku di kutub dan 30,1% tersimpan sebagai air tanah.',
      'Persamaan neraca air (P = Q + E ± ΔS) menjamin bahwa volume total air bumi secara global bersifat konstan.'
    ],
    quiz: [
      {
        id: 'q40-1',
        question: 'Dari total 2,5% cadangan air tawar yang ada di seluruh planet bumi, proporsi terbesar tersimpan dalam wujud...',
        options: ['Air sungai yang mengalir', 'Danau air tawar', 'Gletser es dan tudung salju abadi di kutub (sekitar 68,7%)', 'Uap air awan di atmosfer'],
        correctAnswer: 2,
        explanation: 'Sebagian besar cadangan air tawar bumi (sekitar 68,7%) membeku terkunci dalam bentuk gletser dan tudung es abadi di Antarktika dan Greenland.'
      },
      {
        id: 'q40-2',
        question: 'Cabang ilmu hidrologi yang khusus mempelajari perairan darat yang menggenang seperti danau, waduk buatan, dan rawa adalah...',
        options: ['Potamologi', 'Limnologi', 'Oseanografi', 'Geomorfologi'],
        correctAnswer: 1,
        explanation: 'Limnologi adalah cabang ilmu perairan darat yang mempelajari perairan menggenang (danau dan rawa), sedangkan potamologi mempelajari perairan mengalir (sungai).'
      }
    ],
    references: ['Chow, V. T., Maidment, D. R., & Mays, L. W. (1988). Applied Hydrology. McGraw-Hill.', 'Bappenas. (2019). Kajian Kebutuhan dan Ketersediaan Air Pulau Jawa 2040.'],
    relatedTopicIds: ['siklus-hidrologi', 'sungai-dan-daerah-aliran-sungai-das', 'danau-rawa-dan-air-tanah', 'laut-dan-karakteristiknya']
  },
  {
    id: 'siklus-hidrologi',
    number: 41,
    title: 'Siklus Hidrologi',
    englishTitle: 'Hydrological Cycle: Short, Medium, and Long Cycles',
    categoryId: 'hidrosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis sirkulasi air tertutup bumi: komponen tahapan (evaporasi, transpirasi, intersepsi, kondensasi, presipitasi, infiltrasi, perkolasi, limpasan runoff), serta 3 tipe siklus (siklus pendek, sedang, panjang).',
    keywords: ['siklus hidrologi', 'evapotranspirasi', 'infiltrasi', 'perkolasi', 'siklus pendek sedang panjang', 'run-off'],
    learningObjectives: [
      'Menguraikan seluruh tahapan fisika dalam siklus hidrologi bumi.',
      'Membedakan mekanisme siklus hidrologi pendek (laut ke laut), siklus sedang (ke daratan), dan siklus panjang (melibatkan gletser).',
      'Menganalisis dampak deforestasi terhadap rasio infiltrasi tanah versus limpasan air permukaan (runoff).'
    ],
    introduction: 'Siklus Hidrologi (Daur Air) adalah sirkulasi air tanpa henti dari samudra dan permukaan daratan ke atmosfer bumi dan kembali lagi ke permukaan bumi melalui serangkaian proses fisik. Ditenagai oleh energi panas matahari dan gaya gravitasi bumi, air mengalami perubahan fase antara gas, cair, dan padat. Berdasarkan jarak jelajah horizontal dan jalur perjalanannya, siklus hidrologi dibagi menjadi Siklus Pendek, Siklus Sedang, dan Siklus Panjang.',
    sections: [
      {
        subtitle: '1. Komponen-Komponen Utama Siklus Hidrologi',
        content: 'Daur air tersusun atas rangkaian tahapan fisika yang saling berkaitan:',
        table: {
          headers: ['Tahapan Siklus', 'Definisi Fisika', 'Kondisi Pengendali Utama'],
          rows: [
            ['Evaporasi (Penguapan)', 'Perubahan air cair dari laut, danau, sungai menjadi uap air gas akibat pemanasan matahari', 'Suhu udara tinggi, radiasi matahari terik, angin kencang, kelembapan rendah'],
            ['Transpirasi', 'Pelepasan uap air ke atmosfer dari jaringan pori stomata daun tanaman hidup', 'Kerapatan tutupan kanopi vegetasi, ketersediaan air tanah, aktivitas fotosintesis'],
            ['Intersepsi', 'Penahanan sebagian tetes air hujan oleh tajuk daun pohon sebelum menyentuh permukaan tanah', 'Kerapatan hutan dan luas permukaan daun'],
            ['Kondensasi', 'Perubahan uap air menjadi tetes-tetes air cair pembentuk awan saat udara mendingin mencapai titik embun', 'Penurunan suhu adiabatik saat massa udara membumbung tinggi'],
            ['Presipitasi', 'Jatuhnya air dari atmosfer ke bumi dalam wujud hujan, salju, es batu, atau embun', 'Berat tetes air awan melampaui daya dukung arus updraft udara'],
            ['Infiltrasi & Perkolasi', 'Meresapnya air ke dalam pori tanah permukaan (infiltrasi) dan pergerakan air ke lapisan akuifer dalam (perkolasi)', 'Tekstur tanah gembur, porositas batuan, keberadaan perakaran tanaman'],
            ['Limpasan Permukaan (Runoff)', 'Aliran air yang tidak sempat meresap ke tanah dan mengalir di permukaan lereng menuju sungai', 'Kemiringan lereng, penutupan aspal/semen permukiman kedap air']
          ]
        }
      },
      {
        subtitle: '2. Tiga Jenis Siklus Hidrologi',
        content: 'Berdasarkan panjang lintasannya, daur air dikelompokkan menjadi:',
        keyPoints: [
          '1. Siklus Pendek (Kecil): Air laut menguap (evaporasi) → terjadi kondensasi membentuk awan di atas samudra → hujan turun langsung di atas laut kembali tanpa menyentuh daratan.',
          '2. Siklus Sedang: Air laut dan perairan darat menguap → uap air terbawa angin (adveksi) menuju daratan → berkondensasi menjadi awan di atas daratan → hujan turun di daratan → air meresap ke tanah atau mengalir melalui sungai kembali ke laut.',
          '3. Siklus Panjang: Air laut menguap → uap air terbawa angin ke pegunungan tinggi bersuhu beku → berkondensasi menjadi kristal es/salju (sublimasi) → turun sebagai hujan salju membentuk gletser es → gletser mencair perlahan mengalir ke sungai dan bermuara ke laut.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Limpasan Air di Daratan',
        items: [
          { name: 'Surface Runoff (Limpasan Permukaan)', description: 'Air hujan mengalir di atas tanah telanjang menuju parit dan sungai.' },
          { name: 'Subsurface Flow (Interflow)', description: 'Air mengalir menyamping di lapisan tanah atas sebelum muncul ke dasar sungai.' },
          { name: 'Baseflow (Aliran Dasar Air Tanah)', description: 'Pelepasan air tanah dalam dari akuifer yang menjaga sungai tetap berair di musim kemarau.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penguapan Surya', title: 'Evaporasi & Transpirasi', description: 'Energi radiasi matahari mengubah air samudra dan vegetasi menjadi uap air atmosfer.' },
      { stage: 'Adveksi & Kondensasi', title: 'Perjalanan Awan ke Darat', description: 'Angin meniup awan ke daratan, udara mendingin membentuk butir hujan presipitasi.' },
      { stage: 'Infiltrasi & Gravitasi', title: 'Pengisian Akuifer & Aliran Sungai', description: 'Sebagian air meresap menyuburkan mata air, sebagian mengalir ke muara samudra.' }
    ],
    caseStudies: [
      {
        title: 'Terganggunya Siklus Hidrologi Akibat Betonisasi Kawasan Resapan Air Puncak Bogor',
        location: 'Kawasan Puncak, Bogor, Jawa Barat, Indonesia',
        description: 'Alih fungsi kawasan hutan resapan Puncak menjadi villa, hotel, dan jalan aspal menurunkan laju infiltrasi air tanah dari 70% menjadi hanya 15%. Sebaliknya, koefisien limpasan permukaan (runoff) melonjak dari 20% menjadi 75%, menyebabkan air hujan langsung menggelontor deras dalam hitungan jam ke Sungai Ciliwung dan memicu banjir bandang di Jakarta hilir.',
        takeaway: 'Menjaga tutupan hutan hulu adalah menjaga fungsi penyimpan hidrologis alami bangsa.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Simulasi Dinamis Siklus Hidrologi: Pendek, Sedang, dan Panjang',
        caption: 'Model interaktif daur air lengkap dengan slider panas matahari, tutupan vegetasi, infiltrasi tanah, dan aliran sungai.',
        badge: 'Hydrological Simulation',
        interactiveLabId: 'hydrological-cycle'
      }
    ],
    terminology: [
      { term: 'Evapotranspirasi', definition: 'Gabungan total penguapan air dari permukaan tanah terbuka/badan air (evaporasi) dan penguapan dari jaringan tanaman (transpirasi).', scientificTerm: 'Evapotranspiration' },
      { term: 'Infiltrasi', definition: 'Proses masuk atau merembesnya air dari permukaan tanah ke dalam lapisan tanah atas melalui ruang pori-pori tanah.', scientificTerm: 'Infiltration' },
      { term: 'Adveksi', definition: 'Perpindahan massa udara atau uap air secara mendatar (horizontal) oleh tiupan angin dari satu kawasan ke kawasan lain.', scientificTerm: 'Advection' }
    ],
    summary: [
      'Siklus hidrologi adalah daur tertutup air yang digerakkan oleh radiasi matahari dan gravitasi bumi.',
      'Siklus dibagi menjadi siklus pendek (di laut), siklus sedang (ke daratan), dan siklus panjang (melibatkan salju dan gletser).',
      'Infiltrasi mengisi cadangan air tanah; kerusakan tutupan vegetasi memicu lonjakan limpasan banjir permukaan.'
    ],
    quiz: [
      {
        id: 'q41-1',
        question: 'Siklus hidrologi di mana uap air laut terbawa angin menuju pegunungan tinggi yang sangat dingin, mengalami sublimasi menjadi salju dan gletser es, lalu gletser mencair mengalir ke sungai disebut...',
        options: ['Siklus hidrologi pendek', 'Siklus hidrologi sedang', 'Siklus hidrologi panjang', 'Siklus hidrologi mikro'],
        correctAnswer: 2,
        explanation: 'Siklus hidrologi panjang melibatkan proses pembentukan es/salju (sublimasi) dan gletser di pegunungan tinggi sebelum mencair dan mengalir kembali ke laut.'
      },
      {
        id: 'q41-2',
        question: 'Proses penyerapan dan masuknya air hujan dari permukaan tanah ke dalam lapisan tanah bagian atas melalui pori-pori tanah disebut...',
        options: ['Perkolasi', 'Infiltrasi', 'Transpirasi', 'Adveksi'],
        correctAnswer: 1,
        explanation: 'Infiltrasi adalah proses meresapnya air hujan dari permukaan tanah ke dalam tanah, sedangkan perkolasi adalah pergerakan air lanjutan di lapisan bawah tanah yang lebih dalam.'
      }
    ],
    references: ['Dingman, S. L. (2015). Physical Hydrology (3rd ed.). Waveland Press.', 'Sosrodarsono, S., & Takeda, K. (2003). Hidrologi untuk Pengairan. Pradnya Paramita.'],
    relatedTopicIds: ['hidrosfer', 'sungai-dan-daerah-aliran-sungai-das', 'danau-rawa-dan-air-tanah', 'proses-terjadinya-hujan']
  },
  {
    id: 'perairan-darat',
    number: 42,
    title: 'Perairan Darat',
    englishTitle: 'Inland Waters: Rivers, Lakes, Swamps, and Wetlands',
    categoryId: 'hidrosfer',
    difficulty: 'Beginner',
    description: 'Menjelajahi keanekaragaman perairan darat (inland waters): sungai (fluvial), danau (tektonik, vulkanik, karst), rawa (pasang surut, rawa lebak), serta peranan ekologis lahan basah (wetlands) bagi keanekaragaman hayati.',
    keywords: ['perairan darat', 'danau toba', 'danau karst', 'rawa lebak', 'lahan basah wetlands', 'ekosistem air tawar'],
    learningObjectives: [
      'Mengklasifikasikan badan perairan darat menjadi perairan mengalir (lotik) dan perairan menggenang (lentik).',
      'Menjelaskan proses terbentuknya berbagai jenis danau di Indonesia (tektonik, vulkanik, tektovulkanik, karst, bendungan).',
      'Menganalisis fungsi hidrologis dan ekologis ekosistem rawa serta lahan basah (Konvensi Ramsar).'
    ],
    introduction: 'Perairan darat adalah semua bentuk air yang terdapat di daratan di atas maupun di bawah permukaan tanah, baik yang mengalir bebas (ekosistem lotik seperti sungai dan anak jeram) maupun yang tergenang tenang (ekosistem lentik seperti danau, waduk, situ, dan rawa). Perairan darat merupakan benteng pertahanan ekologis kehidupan daratan karena menyediakan 100% air minum konsumsi manusia, irigasi lahan pertanian, pembangkit listrik tenaga air (PLTA), serta habitat bagi puluhan ribu spesies ikan air tawar endemik.',
    sections: [
      {
        subtitle: '1. Klasifikasi Perairan Darat: Lotik vs Lentik',
        content: 'Perairan darat dibagi berdasarkan kondisi dinamika pergerakan alirannya:',
        table: {
          headers: ['Tipe Ekosistem', 'Karakteristik Aliran', 'Parameter Oksigen & Suhu', 'Contoh Nyata di Indonesia'],
          rows: [
            ['Perairan Mengalir (Lotik)', 'Air mengalir searah dari hulu tinggi ke hilir rendah, berarus dinamis', 'Kandungan oksigen terlarut (DO) tinggi akibat turbulensi air; suhu relatif seragam', 'Sungai Kapuas, Sungai Mahakam, Sungai Musi, Sungai Bengawan Solo'],
            ['Perairan Menggenang (Lentik)', 'Air tertampung dalam cekungan depresi daratan, arus lambat atau tenang', 'Terjadi stratifikasi suhu vertikal (epilimnion hangat di atas, hipolimnion dingin di dasar danau)', 'Danau Toba, Danau Singkarak, Danau Matano, Waduk Jatiluhur, Rawa Pening']
          ]
        }
      },
      {
        subtitle: '2. Tipe-Tipe Danau Berdasarkan Asal-Usul Kejadiannya (Genesis)',
        content: 'Danau terbentuk di cekungan depresi alami yang terisi air permukaan atau mata air tanah:',
        keyPoints: [
          'Danau Tektonik: Terbentuk akibat amblasnya kerak bumi (graben/slenk) oleh patahan tektonik (contoh: Danau Poso dan Danau Matano di Sulawesi, Danau Singkarak di Sumatra).',
          'Danau Vulkanik (Kawah): Terbentuk di lubang kepundan kawah gunung api yang terisi air hujan (contoh: Danau Kawah Ijen di Banyuwangi, Danau Kelimutu 3 warna di Flores).',
          'Danau Tekto-Vulkanik: Terbentuk dari letusan supervulkan raksasa yang diiringi amblasnya atap dapur magma tektonik (contoh: Danau Toba di Sumatra Utara, danau vulkanik terbesar di dunia).',
          'Danau Karst (Dolina / Uvala): Terbentuk akibat pelarutan batugamping kapur yang membentuk cekungan tertutup kedap lumpur lempung (contoh: Telaga di Gunungkidul).',
          'Danau Buatan (Waduk / Bendungan): Cekungan lembah sungai yang dibendung oleh manusia untuk PLTA dan irigasi (contoh: Waduk Cirata, Jatiluhur, Gajah Mungkur).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Jenis Rawa di Indonesia',
        items: [
          { name: 'Rawa Pasang Surut', description: 'Terletak di dataran rendah pesisir, dipengaruhi pasang-surut air laut; air bersifat payau hingga tawar saat surut (contoh: pantai timur Sumatra).' },
          { name: 'Rawa Lebak (Inland Swamp)', description: 'Terletak di pedalaman dataran banjir sungai; tergenang air luapan sungai saat musim hujan dan mengering saat kemarau.' },
          { name: 'Rawa Gambut', description: 'Tergenang air asam cokelat kemerahan dari sisa-sisa vegetasi membusuk anaerobik berkarbon tinggi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pembentukan Depresi', title: 'Amblasan Patahan Tektonik', description: 'Gaya tektonisme mematahkan blok batuan membentuk graben lembah dalam.' },
      { stage: 'Pengisian Air', title: 'Inflow Aliran Sungai', description: 'Air hujan dan sungai mengalir masuk mengisi cekungan depresi hingga batas ambang.' },
      { stage: 'Keseimbangan Limnologi', title: 'Stratifikasi & Outlet Alami', description: 'Terbentuk danau dengan stratifikasi termal dan saluran sungai outlet pengeluaran air.' }
    ],
    caseStudies: [
      {
        title: 'Danau Matano: Danau Tektonik Terdalam di Asia Tenggara',
        location: 'Kabupaten Luwu Timur, Sulawesi Selatan, Indonesia',
        description: 'Danau Matano terbentuk di zona sesar aktif Matano dengan kedalaman mencapai 590 meter (terdalam di Asia Tenggara dan nomor 8 terdalam di dunia). Bagian dasar danau berada jauh di bawah permukaan air laut (kriptodepresi). Danau ini memiliki air purba oligotrofik transparan dengan fauna ikan endemik purba (seperti ikan butini) yang sangat langka.',
        takeaway: 'Perairan darat purba menyimpan plasma nutfah keanekaragaman hayati endemik yang tak ternilai harganya.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Genesis Danau: Tektonik, Vulkanik, Tekto-Vulkanik, dan Karst',
        caption: 'Diagram visual penampang pembentukan Danau Singkarak (patahan graben), Kawah Kelimutu, dan Kaldera Danau Toba.',
        badge: 'Inland Hydrology'
      }
    ],
    terminology: [
      { term: 'Ekosistem Lotik', definition: 'Habitat perairan darat yang airnya mengalir secara aktif searah arus gravitasi (contoh: sungai, jeram, parit).', scientificTerm: 'Lotic Ecosystem' },
      { term: 'Ekosistem Lentik', definition: 'Habitat perairan darat yang airnya tergenang tenang atau mengalir sangat lambat (contoh: danau, rawa, waduk).', scientificTerm: 'Lentic Ecosystem' },
      { term: 'Kriptodepresi', definition: 'Kondisi dasar danau yang kedalamannya berada di bawah permukaan rata-rata air laut global.', scientificTerm: 'Cryptodepression' }
    ],
    summary: [
      'Perairan darat terbagi menjadi perairan mengalir (lotik) dan perairan menggenang (lentik).',
      'Danau terbentuk melalui proses tektonik, vulkanik, tekto-vulkanik (Danau Toba), pelarutan karst, atau bendungan manusia.',
      'Rawa pasang surut dan rawa lebak memiliki fungsi vital sebagai pengendali banjir alami dan penyaring sedimen.'
    ],
    quiz: [
      {
        id: 'q42-1',
        question: 'Danau Toba di Sumatra Utara yang memiliki pulau Samosir di tengahnya digolongkan sebagai danau yang terbentuk melalui proses...',
        options: ['Tektonik murni', 'Vulkanik murni kawah maar', 'Tekto-Vulkanik (letusan supervulkan dan amblasan tektonik)', 'Pelarutan batuan kapur karst'],
        correctAnswer: 2,
        explanation: 'Danau Toba adalah danau tekto-vulkanik raksasa yang terbentuk dari letusan supervulkan eksplosif dahsyat sekitar 74.000 tahun lalu yang diiringi amblasnya atap dapur magma.'
      },
      {
        id: 'q42-2',
        question: 'Rawa yang berada di pedalaman dataran rendah di sekitar sungai besar dan tergenang secara musiman saat air sungai meluap pada musim penghujan dinamakan...',
        options: ['Rawa pasang surut', 'Rawa lebak', 'Rawa pantai mangrove', 'Rawa karst dolina'],
        correctAnswer: 1,
        explanation: 'Rawa lebak adalah rawa pedalaman yang sumber airnya berasal dari luapan banjir musiman sungai-sungai besar (seperti di pedalaman Sumatra dan Kalimantan).'
      }
    ],
    references: ['Wetzel, R. G. (2001). Limnology: Lake and River Ecosystems. Academic Press.', 'Whitten, T., et al. (2000). The Ecology of Sumatra. Periplus Editions.'],
    relatedTopicIds: ['hidrosfer', 'sungai-dan-daerah-aliran-sungai-das', 'danau-rawa-dan-air-tanah', 'siklus-hidrologi']
  },
  {
    id: 'sungai-dan-daerah-aliran-sungai-das',
    number: 43,
    title: 'Sungai dan Daerah Aliran Sungai (DAS)',
    englishTitle: 'Rivers and Watershed Management (DAS)',
    categoryId: 'hidrosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis sistem sungai dan Daerah Aliran Sungai (DAS): profil longitudinal (hulu, tengah, hilir), pola aliran sungai (dendritik, trellis, rektangular, radial sentrifugal/sentripetal, paralel), hidrograf banjir, dan pengelolaan DAS terpadu.',
    keywords: ['daerah aliran sungai das', 'profil sungai', 'pola aliran dendritik', 'pola aliran trellis', 'radial sentrifugal', 'meander delta'],
    learningObjectives: [
      'Menjelaskan definisi DAS (watershed) sebagai satu kesatuan ekosistem pembatas punggung bukit alami.',
      'Membedakan ciri morfologi dan aktivitas geomorfik zona sungai hulu, tengah, dan hilir.',
      'Mengidentifikasi 6 pola aliran sungai utama (dendritik, trellis, rektangular, radial sentrifugal, radial sentripetal, paralel) serta litologi pembentuknya.'
    ],
    introduction: 'Sungai adalah saluran alami di permukaan bumi yang mengalirkan air, sedimen, dan zat hara dari tempat tinggi ke tempat yang lebih rendah menuju danau, rawa, atau laut. Satuan ruang pengelolaan sungai disebut Daerah Aliran Sungai (DAS / Watershed), yaitu suatu wilayah daratan yang dibatasi oleh igir-igir punggung bukit di mana seluruh air hujan yang jatuh di dalamnya mengalir menuju satu alur sungai utama yang sama. DAS menjadi unit biogeofisik paling ideal dalam perencanaan tata ruang dan kelestarian hidrologi.',
    sections: [
      {
        subtitle: '1. Karakteristik Tiga Bagian Profil Sungai',
        content: 'Sungai mengalami perubahan morfologi dan energi angkut dari hulu ke hilir:',
        table: {
          headers: ['Zona Sungai', 'Morfologi Saluran & Kemiringan', 'Aktivitas Erosi / Sedimentasi Dominan', 'Ciri Khas Bentang Alam'],
          rows: [
            ['Hulu Sungai (Upper Course)', 'Gradien lereng sangat curam, arus air deras membentur batu', 'Erosi vertikal (mengikis dasar saluran ke bawah) sangat dominan; sedimentasi minim', 'Lembah sempit curam berbentuk huruf V, terdapat air terjun, jeram batu besar, air jernih dingin'],
            ['Tengah Sungai (Middle Course)', 'Gradien lereng melandai, arus air berkecepatan sedang', 'Erosi vertikal dan erosi horizontal (melebar ke samping) seimbang', 'Lembah sungai berbentuk huruf U, mulai terbentuk kelokan meander awal, endapan pasir dan kerikil'],
            ['Hilir Sungai (Lower Course)', 'Gradien lereng sangat datar dan landai, arus air tenang lambat', 'Sedimentasi (pengendapan) sangat dominan; erosi vertikal hampir berhenti', 'Lembah sangat lebar datar, meander sempurna dengan danau tapal kuda (oxbow lake), tanggul alam, delta di muara']
          ]
        }
      },
      {
        subtitle: '2. Enam Pola Aliran Sungai (Drainage Patterns)',
        content: 'Pola percabangan anak sungai dikendalikan oleh struktur geologi, kekerasan batuan, dan kemiringan lereng dasar:',
        table: {
          headers: ['Pola Aliran', 'Geometri Percabangan', 'Struktur Geologi & Batuan Pengendali', 'Contoh di Indonesia'],
          rows: [
            ['Dendritik', 'Bercabang menyerupai ranting pohon atau urat daun, sudut pertemuan anak sungai lancip tidak teratur', 'Batuan homogen seragam atau lapisan batuan sedimen mendatar (pantai aluvial dataran rendah)', 'DAS Sungai Citarum, Bengawan Solo, DAS Kapuas'],
            ['Trellis', 'Anak-anak sungai sejajar bermuara tegak lurus (90°) pada sungai utama', 'Daerah perbukitan lipatan antiklin dan sinklin sejajar dengan batuan keras dan lunak berseling', 'Pegunungan Lipatan Kendeng Jawa Timur dan Bukit Barisan'],
            ['Rektangular', 'Aliran sungai membelok patah-patah dengan sudut pertemuan tepat 90° (siku-siku)', 'Daerah yang dikendalikan oleh sistem retakan patahan sesar (joint/fault) saling tegak lurus', 'Kawasan sesar batuan beku keras granit'],
            ['Radial Sentrifugal', 'Aliran sungai menyebar memancar keluar ke segala arah dari satu puncak tinggi', 'Kubah pegunungan kerucut gunung berapi soliter tunggal', 'Sungai-sungai di lereng kerucut Gunung Merapi, Semeru, Lawu'],
            ['Radial Sentripetal', 'Aliran sungai dari berbagai arah memusat menuju satu cekungan depresi rendah', 'Cekungan danau tertutup, depresi kaldera, atau polje karst', 'Aliran anak sungai menuju Danau Poso atau cekungan Danau Singkarak'],
            ['Paralel', 'Sungai-sungai mengalir sejajar lurus satu sama lain', 'Lereng pegunungan memanjang yang sangat curam seragam', 'Lereng barat terjal Pegunungan Bukit Barisan Sumatra Barat']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Sungai Berdasarkan Kontinuitas Aliran Air',
        items: [
          { name: 'Sungai Perennial (Permanen)', description: 'Air mengalir melimpah sepanjang tahun, baik musim hujan maupun kemarau (contoh: Sungai Kapuas, Sungai Musi).' },
          { name: 'Sungai Periodik (Intermittent)', description: 'Air mengalir melimpah saat musim hujan, namun debit air surut drastis saat musim kemarau (contoh: Sungai Bengawan Solo).' },
          { name: 'Sungai Episodik (Ephemeral)', description: 'Hanya berair sesaat saat hujan lebat turun, selebihnya berupa alur dasar sungai kering kersang (wadi).' }
        ]
      }
    ],
    processes: [
      { stage: 'Tangkapan Hujan Hulu', title: 'Intersepsi Hutan Lindung', description: 'Hutan hulu menyerap hujan, mengalirkan air jernih ke anak-anak sungai mata air.' },
      { stage: 'Transportasi Sedimen', title: 'Aliran Meander Tengah', description: 'Arus sungai mengikis tebing luar (cut bank) dan mengendapkan pasir di tebing dalam (point bar).' },
      { stage: 'Muara & Progradasi', title: 'Sedimentasi Estuaria / Delta', description: 'Sungai memuntahkan sedimen lumpur aluvial di muara pantai membentuk percabangan distributari delta.' }
    ],
    caseStudies: [
      {
        title: 'Revitalisasi Terpadu DAS Citarum Harum: Mengurai Sengkarut Sungai Terkotor Dunia',
        location: 'Jawa Barat, Indonesia',
        description: 'Sungai Citarum sepanjang 297 km pernah dinobatkan sebagai salah satu sungai paling tercemar limbah di dunia akibat alih fungsi hutan hulu Wayang Windu, pembuangan limbah pabrik tekstil beracun, dan sampah domestik perkotaan Bandung. Melalui Perpres No. 15/2018 (Program Citarum Harum) dilakukan reboisasi hulu terpadu, penegakan hukum limbah industri, dan pengerukan sedimentasi dasar sungai.',
        takeaway: 'DAS adalah satu kesatuan ekologis utuh; kelalaian di hulu menghancurkan kualitas air di hilir.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Komparasi Visual Pola Aliran Sungai: Dendritik, Trellis, Rektangular, Radial',
        caption: 'Bagan 6 pola percabangan sungai lengkap dengan struktur batuan litologi dan topografi pembentuknya.',
        badge: 'Fluvial Drainage Patterns'
      }
    ],
    terminology: [
      { term: 'Daerah Aliran Sungai (DAS)', definition: 'Wilayah daratan yang dibatasi oleh pemisah topografi punggung bukit yang menampung dan mengalirkan air hujan ke satu outlet sungai utama.', scientificTerm: 'Watershed / Drainage Basin' },
      { term: 'Pola Dendritik', definition: 'Pola aliran sungai menyerupai cabang pohon pada batuan homogen atau dataran sedimen horizontal.', scientificTerm: 'Dendritic Pattern' },
      { term: 'Pola Radial Sentrifugal', definition: 'Pola aliran sungai yang menyebar keluar ke segala arah menuruni lereng kerucut gunung api atau kubah pegunungan.', scientificTerm: 'Centrifugal Radial Pattern' }
    ],
    summary: [
      'DAS adalah satu kesatuan hidrologis daratan yang dibatasi oleh batas punggung bukit alami.',
      'Zona hulu dicirikan erosi vertikal lembah V; zona hilir dicirikan sedimentasi meander dan delta.',
      'Pola aliran sungai (dendritik, trellis, rektangular, radial) mencerminkan struktur geologi dan kekerasan batuan bawah tanah.'
    ],
    quiz: [
      {
        id: 'q43-1',
        question: 'Pola aliran sungai yang menyebar memancar ke segala arah menuruni lereng puncak sebuah kerucut gunung api tunggal disebut pola...',
        options: ['Trellis', 'Dendritik', 'Radial sentrifugal', 'Radial sentripetal'],
        correctAnswer: 2,
        explanation: 'Pola radial sentrifugal adalah pola aliran yang menyebar keluar dari puncak bukit/gunung kerucut menuju dataran rendah di sekelilingnya.'
      },
      {
        id: 'q43-2',
        question: 'Ciri morfologi sungai yang berada di bagian hulu (upper course) adalah...',
        options: [
          'Arus air tenang dan banyak terbentuk kelokan meander lebar',
          'Sedimentasi sangat dominan membentuk delta di muara',
          'Arus air deras, erosi vertikal mendominasi, dan lembah sungai berbentuk huruf V curam',
          'Kedalaman dangkal berawa-rawa payau'
        ],
        correctAnswer: 2,
        explanation: 'Bagian hulu sungai dicirikan oleh gradien kemiringan curam, arus deras, erosi vertikal dominan yang mengikis dasar membentuk lembah V, serta adanya jeram dan air terjun.'
      }
    ],
    references: ['Gordon, N. D., McMahon, T. A., & Finlayson, B. L. (2004). Stream Hydrology: An Introduction for Ecologists. Wiley.', 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK). Peta Status Daerah Aliran Sungai Nasional.'],
    relatedTopicIds: ['perairan-darat', 'siklus-hidrologi', 'sedimentasi', 'danau-rawa-dan-air-tanah']
  },
  {
    id: 'danau-rawa-dan-air-tanah',
    number: 44,
    title: 'Danau, Rawa, dan Air Tanah',
    englishTitle: 'Lakes, Wetlands, and Groundwater Hydrology',
    categoryId: 'hidrosfer',
    difficulty: 'Intermediate',
    description: 'Mendalami perairan darat statis dan hidrogeologi: zonasi danau (eutrofikasi & stratifikasi termal), fungsi ekologis rawa gambut, serta sistem air tanah (akuifer bebas/freatik vs tertekan/artesis, Hukum Darcy, intrusi air laut, dan penurunan tanah).',
    keywords: ['air tanah', 'akuifer tertekan artesis', 'akuifer freatik', 'eutrofikasi danau', 'rawa gambut', 'penurunan tanah land subsidence'],
    learningObjectives: [
      'Menjelaskan fenomena stratifikasi termal dan proses eutrofikasi ledakan gulma di danau.',
      'Membedakan air tanah freatik (akuifer tak tertekan) dan air tanah artesis (akuifer tertekan).',
      'Menganalisis dampak eksploitasi air tanah berlebihan terhadap fenomena penurunan tanah (land subsidence) dan intrusi air laut di kota pesisir.'
    ],
    introduction: 'Danau, rawa, dan air tanah adalah komponen perairan darat yang menyediakan cadangan air tawar paling stabil di planet bumi. Air tanah (groundwater) menyumbang lebih dari 98% dari seluruh cadangan air tawar cair yang dapat diakses manusia. Berada di bawah permukaan tanah di dalam formasi batuan porus (akuifer), air tanah mengalir sangat lambat diatur oleh Hukum Darcy. Namun, urbanisasi tak terkendali dan penyedotan air tanah secara membabi-buta kini memicu bencana penurunan muka tanah dan intrusi air laut di kota-kota besar Indonesia.',
    sections: [
      {
        subtitle: '1. Hidrogeologi: Sistem Akuifer dan Air Tanah',
        content: 'Air tanah tersimpan di dalam zona jenuh air (zone of saturation) di bawah muka air tanah (water table):',
        table: {
          headers: ['Tipe Air Tanah / Akuifer', 'Karakteristik Lapisan Batuan', 'Tekanan Hidrostatik & Pemanfaatan'],
          rows: [
            ['Air Tanah Dangkal (Freatik)', 'Berada pada akuifer tak tertekan (unconfined aquifer) di atas lapisan kedap air pertama', 'Muka air tanah berfluktuasi bebas mengikuti musim hujan/kemarau; dimanfaatkan untuk sumur gali tradisional penduduk'],
            ['Air Tanah Dalam (Artesis)', 'Berada pada akuifer tertekan (confined aquifer) yang terjepit di antara dua lapisan batuan kedap air (akwitard/akwiklud)', 'Bertekanan hidrostatik tinggi; jika dibor air dapat memancar keluar sendiri ke permukaan tanpa pompa (sumur artesis artesis)'],
            ['Air Vados (Air Aerasi)', 'Air yang berada pada zona tak jenuh di atas water table', 'Terikat sebagai kelembapan tanah yang diserap akar tanaman; tidak dapat dipompa keluar']
          ]
        }
      },
      {
        subtitle: '2. Ancaman Ekologis: Eutrofikasi Danau dan Amblasnya Tanah Pesisir',
        content: 'Pencemaran dan eksploitasi merusak daya dukung ekosistem air tawar:',
        keyPoints: [
          'Eutrofikasi Danau: Akumulasi limbah fosfat dan nitrat dari pupuk pertanian dan pakan ikan keramba jaring apung memicu ledakan populasi alga dan eceng gondok (algal bloom). Pembusukan tanaman air ini menguras seluruh oksigen terlarut (DO) sehingga memicu kematian ikan massal dan pendangkalan danau (contoh: Danau Rawa Pening dan Danau Maninjau).',
          'Land Subsidence (Amblasnya Muka Tanah): Penyedotan air tanah dalam di kota pesisir menyebabkan hilangnya tekanan air pori di dalam lapisan lempung akuifer, memicu pemadatan permanen kompaksi tanah sehingga tanah amblas puluhan sentimeter per tahun.',
          'Intrusi Air Laut: Kekosongan air tawar di akuifer pesisir disusupi oleh air laut asin yang meresap ke sumur-sumur air minum warga.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Batuan Berdasarkan Sifat Air Tanah',
        items: [
          { name: 'Akuifer (Aquifer)', description: 'Lapisan batuan permeable yang mampu menyimpan dan meloloskan air dalam jumlah besar (contoh: pasir lepas, batu pasir, kerikil).' },
          { name: 'Akwiklud (Aquiclude)', description: 'Lapisan batuan kedap air yang mampu menyimpan air namun tidak dapat meloloskannya (contoh: lempung pejal murni).' },
          { name: 'Akwifug (Aquifuge)', description: 'Lapisan batuan pejal padat yang sama sekali tidak dapat menyimpan maupun meloloskan air (contoh: batuan beku granit utuh).' }
        ]
      }
    ],
    processes: [
      { stage: 'Presipitasi di Daerah Resapan', title: 'Imbuhan Air Tanah (Recharge)', description: 'Air hujan meresap di perbukitan hulu masuk ke dalam singkapan lapisan batuan akuifer.' },
      { stage: 'Perkolasi Mengikuti Gradien', title: 'Aliran Menurut Hukum Darcy', description: 'Air merembes perlahan melalui pori batuan pasir menuruni lereng hidraulik.' },
      { stage: 'Pemancaran Mata Air', title: 'Discharge Alami', description: 'Air tanah muncul kembali ke permukaan sebagai mata air gravitasi atau sumur artesis.' }
    ],
    caseStudies: [
      {
        title: 'Penurunan Muka Tanah Jakarta Akibat Eksploitasi Air Tanah Industri',
        location: 'DKI Jakarta Utara dan Barat, Indonesia',
        description: 'Karena cakupan pipa PDAM belum mencakup seluruh gedung komersial dan industri, ribuan sumur bor dalam menyedot akuifer artesis Jakarta tanpa kendali. Akibatnya, wilayah Jakarta Utara mengalami penurunan tanah (land subsidence) hingga 10–20 cm per tahun. Lebih dari 40% wilayah Jakarta kini berada di bawah permukaan air pasang laut, menuntut pembangunan tanggul pantai darurat.',
        takeaway: 'Air tanah bukanlah sumber daya tak terbatas; pengelolaannya harus diimbangi zona resapan dan suplai air perpipaan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Sistem Hidrogeologi: Akuifer Bebas (Freatik), Akuifer Tertekan (Artesis), dan Sumur Bor',
        caption: 'Bagan penampang geologi bawah tanah: lapisan permeabel pasir, lapisan lempung kedap air (akwiklud), muka air freatik, dan sumur artesis memancar.',
        badge: 'Groundwater Hydraulics'
      }
    ],
    terminology: [
      { term: 'Air Tanah Freatik', definition: 'Air tanah dangkal yang berada di atas lapisan kedap air pertama dengan muka air yang bebas berfluktuasi mengikuti curah hujan.', scientificTerm: 'Phreatic Water' },
      { term: 'Air Tanah Artesis', definition: 'Air tanah dalam yang terperangkap di antara dua lapisan batuan kedap air dan berada di bawah tekanan hidrostatis tinggi.', scientificTerm: 'Artesian Groundwater' },
      { term: 'Eutrofikasi', definition: 'Pencemaran perairan danau akibat pengayaan nutrien berlebih (fosfor dan nitrogen) yang memicu ledakan populasi tanaman gulma air.', scientificTerm: 'Eutrophication' }
    ],
    summary: [
      'Air tanah freatik berada pada akuifer bebas dangkal; air tanah artesis berada pada akuifer tertekan bertekanan tinggi.',
      'Eksploitasi air tanah berlebihan memicu pemadatan batuan lempung, menyebabkan penurunan muka tanah (land subsidence) dan intrusi air laut.',
      'Eutrofikasi akibat limbah pupuk dan pakan ikan mengancam kelangsungan hidup ekosistem danau di Indonesia.'
    ],
    quiz: [
      {
        id: 'q44-1',
        question: 'Air tanah yang terperangkap di antara dua lapisan batuan kedap air (akwiklud) sehingga berada di bawah tekanan hidrostatik tinggi dan dapat memancar ke atas permukaan saat dibor dinamakan...',
        options: ['Air tanah freatik', 'Air vados', 'Air tanah artesis', 'Air juvenil'],
        correctAnswer: 2,
        explanation: 'Air tanah artesis (confined groundwater) terjepit di antara dua lapisan kedap air bertekanan tinggi sehingga memiliki muka pisometrik yang mampu memancar ke permukaan.'
      },
      {
        id: 'q44-2',
        question: 'Fenomena ledakan populasi tanaman eceng gondok dan alga di danau akibat pencemaran nutrien pupuk pertanian fosfat dan feses pakan ikan keramba yang berlebihan disebut...',
        options: ['Eutrofikasi', 'Salinisasi', 'Upwelling', 'Asidifikasi'],
        correctAnswer: 0,
        explanation: 'Eutrofikasi adalah pengayaan nutrien unsur hara berlebih di perairan danau yang memicu ledakan gulma alga dan menghabiskan oksigen terlarut.'
      }
    ],
    references: ['Fetter, C. W. (2018). Applied Hydrogeology (4th ed.). Waveland Press.', 'Kementerian ESDM - Badan Geologi. Peta Konservasi Air Tanah Cekungan Air Tanah Jakarta.'],
    relatedTopicIds: ['perairan-darat', 'siklus-hidrologi', 'sungai-dan-daerah-aliran-sungai-das', 'pencemaran-lingkungan']
  },
  {
    id: 'laut-dan-karakteristiknya',
    number: 45,
    title: 'Laut dan Karakteristiknya',
    englishTitle: 'Oceans and Seas: Zonation, Relief, and Salinity',
    categoryId: 'hidrosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah sains oseanografi laut: klasifikasi laut (berdasarkan genesis: transgresi, ingresi, regresi; berdasarkan letak: tepi, tengah, pedalaman), morfologi dasar laut (landas kontinen, lereng benua, palung trench, lubuk laut basin, punggung laut ridge), serta zonasi kedalaman (litoral, neritik, batial, abisal) dan salinitas air laut.',
    keywords: ['laut transgresi ingresi', 'landas kontinen paparan sunda sahul', 'palung laut trench', 'zona neritik batial abisal', 'salinitas air laut', 'morfologi dasar laut'],
    learningObjectives: [
      'Mengklasifikasikan laut berdasarkan proses terjadinya (transgresi, ingresi, regresi) dan letak geografisnya.',
      'Menganalisis bentang morfologi relief dasar laut: landas kontinen, lereng benua, dataran abisal, palung laut (trench), dan lubuk laut (basin).',
      'Membedakan zonasi kedalaman laut (litoral, neritik, batial, abisal) dan kaitannya dengan penetrasi sinar matahari dan potensi perikanan.'
    ],
    introduction: 'Lautan menyelimuti lebih dari 71% permukaan bumi dan menampung 97,5% cadangan air dunia dengan kedalaman rata-rata 3.700 meter. Wilayah Indonesia dua pertiganya adalah lautan, dengan total luas perairan mencapai 6,4 juta kilometer persegi. Berada di persilangan Samudra Pasifik dan Samudra Hindia, laut Indonesia memiliki morfologi dasar laut paling spektakuler di dunia, mulai dari paparan benua dangkal yang kaya minyak bumi hingga palung laut penunjaman tektonik sedalam lebih dari 7.000 meter.',
    sections: [
      {
        subtitle: '1. Klasifikasi Laut Berdasarkan Proses Terjadinya (Genesis)',
        content: 'Perubahan iklim zaman es dan pergerakan lempeng membentuk tiga kategori laut utama:',
        table: {
          headers: ['Jenis Laut', 'Proses Pembentukan', 'Karakteristik & Kedalaman', 'Contoh Nyata di Indonesia'],
          rows: [
            ['Laut Transgresi', 'Daratan rendah yang tenggelam oleh naiknya permukaan air laut global pasca-mencairnya es zaman pleistosen (kenaikan eustatik)', 'Dangkal (kedalaman < 200 meter), bekas daratan benua, kaya sumber daya perikanan dan migas', 'Laut Jawa, Selat Malaka, Laut Natuna (bagian dari Paparan Sunda), Laut Arafura (Paparan Sahul)'],
            ['Laut Ingresi', 'Penurunan kerak dasar laut secara tektonik membentuk palung atau lubuk laut yang sangat dalam', 'Sangat dalam (kedalaman > 1.000 hingga 7.000 meter), memiliki tebing curam dan palung jurang', 'Laut Banda (lubuk dalam), Laut Maluku, Laut Flores, Laut Sulawesi'],
            ['Laut Regresi', 'Penyusutan laut akibat majunya garis daratan pantai oleh endapan lumpur sungai masif atau pengangkatan daratan', 'Garis pantai maju ke depan, laut menjadi sempit dan dangkal', 'Pesisir utara Jawa Timur di sekitar muara Sungai Bengawan Solo']
          ]
        }
      },
      {
        subtitle: '2. Zonasi Kedalaman Laut dan Kehidupan Biologis',
        content: 'Berdasarkan penetrasi cahaya matahari dan kedalamannya, perairan laut dibagi menjadi 4 zona bertingkat:',
        table: {
          headers: ['Zona Kedalaman', 'Kedalaman Vertikal', 'Penetrasi Sinar Matahari', 'Potensi Biologis & Kehidupan'],
          rows: [
            ['1. Zona Litoral (Pasang Surut)', '0 meter (garis batas pasang tertinggi hingga surut terendah)', 'Terpapar sinar matahari penuh saat surut; terendam saat pasang', 'Habitat kepiting bakau, undur-undur laut, bintang laut, padang lamun, hutan mangrove'],
            ['2. Zona Neritik (Laut Dangkal)', '0 – 200 meter (landas kontinen paparan benua)', 'Sinar matahari menembus sampai dasar laut (zona fotik)', 'Zona paling kaya biota laut; tempat hidup 90% ikan konsumsi, plankton melimpah, terumbu karang warna-warni'],
            ['3. Zona Batial (Laut Dalam)', '200 – 2.000 meter (lereng curam benua)', 'Remang-remang hingga gelap gulita (zona disfotik / afotik)', 'Suhu dingin membeku; dihuni ikan hiu laut dalam, paus sperma pemburu cumi raksasa'],
            ['4. Zona Abisal (Laut Sangat Dalam)', '> 2.000 meter hingga palung dasar laut', 'Gelap gulita abadi, suhu mendekati 0°C, tekanan hidrostatis ekstrem ratusan atmosfer', 'Biota aneh berpendar cahaya (bioluminesensi), komunitas cacing tabung raksasa di sekitar cerobong hidrotermal magma']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Morfologi Bentuk Relief Dasar Laut',
        items: [
          { name: 'Landas Kontinen (Continental Shelf)', description: 'Dasar laut dangkal landai di tepi benua dengan kedalaman < 200 m (Paparan Sunda dan Sahul).' },
          { name: 'Lereng Benua (Continental Slope)', description: 'Tebing penurunan terjal dari tepi paparan menuju dasar laut dalam (kemiringan 3°–6°).' },
          { name: 'Palung Laut (Trench / Troog)', description: 'Lembah jurang memanjang yang sangat dalam dan terjal di zona penunjaman subduksi lempeng (Palung Jawa kedalaman 7.450 m).' },
          { name: 'Lubuk Laut (Basin / Bekken)', description: 'Cekungan depresi dasar laut berbentuk membulat mangkok dengan dasar luas datar (Lubuk Laut Banda kedalaman 7.440 m).' },
          { name: 'Punggung Laut (Ridge)', description: 'Rangkaian pegunungan bawah laut yang terbentuk di sepanjang batas lempeng tektonik.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelelehan Es Glasial', title: 'Transgresi Air Laut', description: 'Es kutub mencair 12.000 tahun lalu menenggelamkan Paparan Sunda menjadi Laut Jawa dangkal.' },
      { stage: 'Fotosintesis Zona Fotik', title: 'Produktivitas Primer Plankton', description: 'Fitoplankton di zona neritik memanfaatkan sinar matahari untuk fotosintesis menopang rantai makanan ikan.' },
      { stage: 'Pengendapan Sedimen Pelagis', title: 'Hujan Material Organik', description: 'Cangkang mikroorganisme kalsium karbonat mengendap di dasar dataran abisal membentuk lumpur laut.' }
    ],
    caseStudies: [
      {
        title: 'Paparan Sunda (Sundaland): Jejak Benua Purba yang Tenggelam Menjadi Laut Dangkal',
        location: 'Laut Jawa, Selat Malaka, dan Laut Natuna',
        description: 'Pada zaman glasial terakhir (Pleistosen), Pulau Sumatra, Jawa, dan Kalimantan menyatu dengan Benua Asia dalam daratan raksasa bernama Paparan Sunda (Sundaland). Ketika es kutub mencair sekitar 10.000–12.000 tahun lalu, muka air laut naik setinggi 120 meter menenggelamkan daratan lembah sungai purba tersebut menjadi laut transgresi dangkal (Laut Jawa dan Selat Karimata) berkedalaman rata-rata hanya 40–50 meter.',
        takeaway: 'Oseanografi masa kini mencatat sejarah perubahan geologis dan iklim masa lalu bumi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Penampang Profil Morfologi Dasar Laut dan Zonasi Kedalaman',
        caption: 'Bagan visual 3D: Zona Litoral, Landas Kontinen Neritik (0-200m), Lereng Batial, Dataran Abisal, dan Palung Trench.',
        badge: 'Ocean Bathymetry'
      }
    ],
    terminology: [
      { term: 'Laut Transgresi', definition: 'Laut dangkal yang terbentuk akibat kenaikan permukaan air laut global yang menenggelamkan daratan rendah benua.', scientificTerm: 'Transgression Sea' },
      { term: 'Palung Laut (Trench)', definition: 'Cekungan lembah jurang di dasar laut yang sangat sempit, curam, dan sangat dalam di zona subduksi lempeng tektonik.', scientificTerm: 'Oceanic Trench' },
      { term: 'Zona Neritik', definition: 'Wilayah perairan laut dangkal dari batas pasang surut terendah hingga kedalaman 200 meter di atas paparan benua.', scientificTerm: 'Neritic Zone' }
    ],
    summary: [
      'Laut terbagi menjadi laut transgresi (dangkal transgresi pasca es), ingresi (dalam tektonik), dan regresi.',
      'Zona kedalaman laut terdiri atas litoral (pasang surut), neritik (dangkal 0-200 m), batial (200-2000 m), dan abisal (>2000 m).',
      'Zona neritik adalah kawasan paling produktif secara biologis dan menjadi sentra perikanan tangkap dunia.'
    ],
    quiz: [
      {
        id: 'q45-1',
        question: 'Sebagian besar wilayah perairan Laut Jawa dan Selat Malaka memiliki kedalaman kurang dari 200 meter dan terbentuk akibat daratan rendah Paparan Sunda yang terendam air laut pada akhir zaman es. Berdasarkan proses terjadinya, laut ini tergolong...',
        options: ['Laut ingresi', 'Laut transgresi', 'Laut regresi', 'Laut pedalaman'],
        correctAnswer: 1,
        explanation: 'Laut transgresi adalah laut dangkal yang terbentuk akibat kenaikan permukaan air laut global (transgresi) yang menenggelamkan daratan rendah benua.'
      },
      {
        id: 'q45-2',
        question: 'Zona kedalaman laut dengan rentang kedalaman antara 0 hingga 200 meter tempat sinar matahari masih mampu menembus sampai dasar dan dihuni oleh 90% biota laut serta ikan komersial disebut...',
        options: ['Zona Litoral', 'Zona Abisal', 'Zona Neritik', 'Zona Hadal palung'],
        correctAnswer: 2,
        explanation: 'Zona neritik (0–200 meter) adalah zona fotik di atas paparan benua tempat fitoplankton dapat berfotosintesis subur sehingga menjadi lumbung makanan ikan laut.'
      }
    ],
    references: ['Thurman, H. V., & Trujillo, A. P. (2014). Essentials of Oceanography. Pearson.', 'Tomascik, T., et al. (1997). The Ecology of the Indonesian Seas. Periplus Editions.'],
    relatedTopicIds: ['arus-laut-gelombang-dan-pasang-surut', 'hidrosfer', 'teori-tektonik-lempeng', 'sumber-daya-hutan-dan-laut']
  },
  {
    id: 'arus-laut-gelombang-dan-pasang-surut',
    number: 46,
    title: 'Arus Laut, Gelombang, dan Pasang Surut',
    englishTitle: 'Ocean Currents, Waves, and Tides: Arlindo and Coastal Dynamics',
    categoryId: 'hidrosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis dinamika oseanografi perairan laut: Arus Laut Global (arus panas vs arus dingin, Gyre Pasifik/Atlantik), Arus Lintas Indonesia (ARLINDO / Indonesian Throughflow), fenomena upwelling perikanan, gelombang laut, serta gaya pasang surut gravitasi bulan-matahari (pasang purnama vs pasang perbani).',
    keywords: ['arlindo indonesian throughflow', 'arus laut panas dingin', 'upwelling', 'pasang surut purnama perbani', 'gelombang laut', 'gyre samudra'],
    learningObjectives: [
      'Menjelaskan penyebab terjadinya arus laut global (angin pasat, perbedaan densitas air laut, rotasi bumi).',
      'Menganalisis fenomena Arus Lintas Indonesia (ARLINDO) sebagai jalur sirkulasi massa air Samudra Pasifik ke Samudra Hindia.',
      'Membedakan pasang surut purnama (spring tide) dan pasang surut perbani (neap tide) berdasarkan konfigurasi astronomis bumi-bulan-matahari.'
    ],
    introduction: 'Air laut tidak pernah diam sedetik pun; ia terus bergerak dalam wujud Arus Laut (perpindahan massa air jarak jauh melintasi samudra), Gelombang (osilasi energi permukaan yang digerakkan hembusan angin), serta Pasang Surut (kenaikan dan penurunan permukaan laut periodik akibat gravitasi bulan dan matahari). Posisi kepulauan Indonesia menjadi pintu gerbang tunggal di planet bumi yang menghubungkan dua samudra raksasa dunia melalui sistem arus raksasa yang disebut Arus Lintas Indonesia (ARLINDO / Indonesian Throughflow).',
    sections: [
      {
        subtitle: '1. Arus Lintas Indonesia (ARLINDO / Indonesian Throughflow)',
        content: 'ARLINDO adalah aliran massa air laut raksasa dari Samudra Pasifik bagian barat yang mengalir melintasi selat-selat sempit kepulauan Indonesia menuju Samudra Hindia:',
        keyPoints: [
          'Penyebab ARLINDO: Permukaan air laut di Samudra Pasifik barat lebih tinggi sekitar 15–20 cm dibanding Samudra Hindia akibat dorongan tiupan Angin Pasat ekuator yang konstan.',
          'Jalur Utama ARLINDO: Jalur Barat (melalui Selat Makassar, Selat Lombok, dan Selat Alas) dan Jalur Timur (melalui Laut Maluku, Laut Banda, dan Selat Ombai/Timor).',
          'Dampak Global: ARLINDO membawa volume air raksasa (~15 juta m³/detik atau 15 Sverdrup) dan mengatur suhu serta iklim global bumi.',
          'Fenomena Upwelling: Turbulensi arus di selat sempit memicu naiknya massa air dalam yang dingin dan kaya zat hara (nitrat/fosfat) ke permukaan (upwelling), menjadikan Selat Bali dan Laut Banda kaya ikan lemuru dan cakalang.'
        ]
      },
      {
        subtitle: '2. Pasang Surut Air Laut: Purnama vs Perbani',
        content: 'Pasang surut dikendalikan oleh gaya tarik gravitasi bulan (pengaruh 2,2 kali lebih kuat karena jaraknya dekat) dan matahari:',
        table: {
          headers: ['Tipe Pasang Surut', 'Konfigurasi Astronomis', 'Karakteristik Pasang & Surut', 'Waktu Terjadinya'],
          rows: [
            ['Pasang Purnama (Spring Tide)', 'Matahari, Bulan, dan Bumi berada dalam satu garis lurus sejajar (Syzygy: saat fase Bulan Baru / Konjungsi dan fase Bulan Purnama / Oposisi)', 'Gaya gravitasi bulan dan matahari saling memperkuat; menghasilkan Pasang Tertinggi dan Surut Terendah (amplitudo pasang surut maksimum)', 'Terjadi 2 kali sebulan: tanggal 1 dan 14-15 penanggalan lunar (Kamariah/Hijriah)'],
            ['Pasang Perbani (Neap Tide)', 'Matahari, Bumi, dan Bulan membentuk sudut tegak lurus siku-siku 90° (Kuadratur: saat fase Bulan Separuh perbani awal dan akhir)', 'Gaya gravitasi bulan dan matahari saling melemahkan; menghasilkan Pasang Terendah dan Surut Tertinggi (amplitudo pasang surut minimum)', 'Terjadi 2 kali sebulan: saat bulan berbentuk sabit separuh (tanggal 7-8 dan 21-22 penanggalan lunar)']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Tipe Pasang Surut Berdasarkan Frekuensi Harian',
        items: [
          { name: 'Pasang Surut Harian Tunggal (Diurnal Tide)', description: 'Satu kali pasang dan satu kali surut dalam kurun waktu 24 jam (contoh: Selat Karimata).' },
          { name: 'Pasang Surut Harian Ganda (Semi-diurnal Tide)', description: 'Dua kali pasang dan dua kali surut dengan tinggi hampir sama dalam 24 jam (contoh: Selat Malaka).' },
          { name: 'Pasang Surut Campuran (Mixed Tide)', description: 'Kombinasi tunggal dan ganda dengan ketinggian pasang tak teratur (sangat dominan di sebagian besar perairan Indonesia).' }
        ]
      }
    ],
    processes: [
      { stage: 'Gaya Gravitasi Bulan', title: 'Tonjolan Gravitasional Pasang', description: 'Gaya tarik gravitasi bulan menarik massa air laut terdekat membentuk tonjolan air pasang.' },
      { stage: 'Gaya Sentrifugal Bumi', title: 'Tonjolan Pasang Antipodal', description: 'Rotasi sistem bumi-bulan membangkitkan gaya sentrifugal di sisi bumi yang berlawanan.' },
      { stage: 'Peredaran Harian Bumi', title: 'Siklus Pasang Surut Berulang', description: 'Rotasi bumi melewati dua tonjolan air menghasilkan ritme pasang dan surut harian di pesisir.' }
    ],
    caseStudies: [
      {
        title: 'Potensi Energi Baru Terbarukan Pasang Surut di Selat Larantuka dan Selat Alas',
        location: 'Flores Timur (NTT) dan Nusa Tenggara Barat, Indonesia',
        description: 'Penyempitan selat antara Pulau Flores dan Pulau Adonara (Selat Larantuka) mempercepat arus pasang surut laut hingga kecepatan lebih dari 3,5 meter per detik. Karakteristik hidrodinamika arus laut yang kuat dan stabil ini menjadikan perairan selat Indonesia timur sebagai lokasi paling strategis di dunia untuk pengembangan Pembangkit Listrik Tenaga Arus Laut (PLTAL).',
        takeaway: 'Dinamika oseanografi perairan kepulauan menyimpan cadangan energi bersih terbarukan masa depan bangsa.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Simulasi Astronomis Pasang Surut Purnama (Spring) dan Perbani (Neap)',
        caption: 'Model interaktif posisi orbit Bulan, Bumi, dan Matahari yang menghasilkan pasang tertinggi purnama dan perbani siku-siku.',
        badge: 'Tidal Mechanics',
        interactiveLabId: 'ocean-tides'
      }
    ],
    terminology: [
      { term: 'ARLINDO (Indonesian Throughflow)', definition: 'Sistem arus laut dunia yang mengalirkan massa air bersuhu hangat dari Samudra Pasifik ke Samudra Hindia melalui selat-selat di kepulauan Indonesia.', scientificTerm: 'Indonesian Throughflow (ITF)' },
      { term: 'Upwelling', definition: 'Proses oseanografi di mana massa air laut lapisan dalam yang dingin, padat, dan kaya nutrien terangkat naik ke lapisan permukaan.', scientificTerm: 'Upwelling' },
      { term: 'Pasang Purnama (Spring Tide)', definition: 'Kondisi pasang laut maksimum yang terjadi saat posisi matahari, bulan, dan bumi berada pada satu garis lurus sejajar.', scientificTerm: 'Spring Tide' }
    ],
    summary: [
      'ARLINDO mengalirkan massa air dari Samudra Pasifik ke Samudra Hindia melintasi selat kepulauan Indonesia.',
      'Upwelling di perairan selat Indonesia mengangkat zat hara ke permukaan memicu kelimpahan ikan konsumsi.',
      'Pasang purnama (tertinggi) terjadi saat bulan baru dan purnama; pasang perbani (terendah) terjadi saat bulan separuh membentuk sudut 90°.'
    ],
    quiz: [
      {
        id: 'q46-1',
        question: 'Kondisi pasang air laut tertinggi yang terjadi ketika posisi Matahari, Bulan, dan Bumi berada dalam satu garis lurus sejajar (saat fase bulan baru dan bulan purnama) disebut...',
        options: ['Pasang perbani (neap tide)', 'Pasang purnama (spring tide)', 'Pasang diurnal tunggal', 'Pasang meteorologis'],
        correctAnswer: 1,
        explanation: 'Pasang purnama (spring tide) terjadi saat gravitasi bulan dan matahari saling memperkuat karena posisinya sejajar dalam satu garis lurus dengan bumi, menghasilkan amplitudo pasang tertinggi.'
      },
      {
        id: 'q46-2',
        question: 'Sistem arus laut raksasa yang mengalirkan massa air dari Samudra Pasifik menuju Samudra Hindia melalui selat-selat sempit kepulauan Indonesia (seperti Selat Makassar dan Selat Lombok) dikenal dengan singkatan...',
        options: ['Kuroshio', 'ARLINDO (Indonesian Throughflow)', 'Oyashio', 'Gulf Stream'],
        correctAnswer: 1,
        explanation: 'ARLINDO (Arus Lintas Indonesia atau Indonesian Throughflow) adalah arus laut penting dunia yang menyalurkan air dari Samudra Pasifik ke Samudra Hindia melalui perairan Nusantara.'
      }
    ],
    references: ['Gordon, A. L. (2005). Oceanography of the Indonesian Seas. Oceanography.', 'Pugh, D., & Woodworth, P. (2014). Sea-Level Science: Understanding Tides, Surges, Tsunamis and Mean Sea-Level Changes. Cambridge University Press.'],
    relatedTopicIds: ['laut-dan-karakteristiknya', 'hidrosfer', 'pola-angin-global-dan-lokal', 'kondisi-fisik-dan-sosial-wilayah-indonesia']
  }
];
