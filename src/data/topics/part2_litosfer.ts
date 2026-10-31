import { Topic } from '../../types/geography';

export const topicsPart2: Topic[] = [
  // CATEGORY C: Litosfer dan Dinamika Bumi (17-31)
  {
    id: 'struktur-lapisan-bumi',
    number: 17,
    title: 'Struktur Lapisan Bumi',
    englishTitle: "Earth's Internal Structure and Composition",
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelusuri anatomi interior bumi: Kerak Bumi (Crust: Sial & Sima), Mantel Bumi (Mantle: Astenosfer & Mesosfer), serta Inti Bumi (Core: Inti Luar Cair & Inti Dalam Padat) dan diskontinuitas seismik.',
    keywords: ['struktur bumi', 'kerak benua', 'kerak samudra', 'astenosfer', 'inti bumi', 'diskontinuitas mohorovicic', 'gelombang seismik'],
    learningObjectives: [
      'Menyebutkan dan menjelaskan lapisan-lapisan konsentris interior bumi beserta ketebalan, komposisi kimia, dan suhunya.',
      'Membedakan karakteristik kerak benua (lapisan Si-Al) dan kerak samudra (lapisan Si-Ma).',
      'Memahami peran gelombang seismik (P-wave dan S-wave) serta diskontinuitas Mohorovicic dan Gutenberg dalam mengungkap struktur internal bumi.'
    ],
    introduction: 'Manusia belum pernah mengebor bumi lebih dalam dari 12,2 kilometer (Kola Superdeep Borehole di Rusia), sementara jari-jari bumi mencapai sekitar 6.371 kilometer. Pengetahuan ilmiah mengenai interior bumi diperoleh melalui metode geofisika tidak langsung, terutama analisis perambatan gelombang seismik gempa bumi yang dibiaskan dan dipantulkan oleh lapisan dengan kerapatan massa berbeda. Interior bumi tersusun atas tiga lapisan konsentris utama: Kerak Bumi, Mantel Bumi, dan Inti Bumi.',
    sections: [
      {
        subtitle: '1. Tiga Lapisan Utama Interior Bumi',
        content: 'Bumi memiliki struktur berlapis menyerupai telur rebus, dengan kerak tipis di luar, mantel tebal liat di tengah, dan inti sangat padat di pusatnya:',
        table: {
          headers: ['Lapisan', 'Kedalaman (km)', 'Komposisi Kimia Dominan', 'Suhu (°C)', 'Sifat Fisik'],
          rows: [
            ['Kerak Bumi (Crust)', '0 – 70 km', 'Silikat, Aluminium, Magnesium (SiO2, Al2O3, MgO)', '0 – 800 °C', 'Padat, kaku, rapuh (brittle), membentuk lempeng tektonik'],
            ['Mantel Atas & Astenosfer', '70 – 660 km', 'Peridotit kaya olivin dan piroksen', '800 – 2.000 °C', 'Plastis, semi-cair kental, mengalami arus konveksi magma'],
            ['Mantel Bawah (Mesosfer)', '660 – 2.890 km', 'Mineral silikat bertekanan tinggi (bridgmanite)', '2.000 – 3.700 °C', 'Padat akibat tekanan hidrostatis raksasa'],
            ['Inti Luar (Outer Core)', '2.890 – 5.150 km', 'Besi (Fe) dan Nikel (Ni) cair, belerang', '4.000 – 5.000 °C', 'Cair pekat; perputarannya membangkitkan medan magnet bumi (geodinamo)'],
            ['Inti Dalam (Inner Core)', '5.150 – 6.371 km', 'Paduan Besi-Nikel padat murni', '5.000 – 6.000 °C', 'Padat membara karena tekanan 3,6 juta atmosfer']
          ]
        }
      },
      {
        subtitle: '2. Diskontinuitas Seismik dan Pembuktian Gelombang',
        content: 'Batas antar-lapisan bumi ditandai oleh lonjakan drastis kecepatan gelombang seismik yang disebut diskontinuitas: Diskontinuitas Mohorovicic (Moho) memisahkan kerak dan mantel; Diskontinuitas Gutenberg memisahkan mantel dan inti luar (di mana gelombang geser S-wave berhenti karena tidak bisa merambat di zat cair); dan Diskontinuitas Lehmann memisahkan inti luar cair dengan inti dalam padat.',
        keyPoints: [
          'Kerak Benua (Continental Crust): Tebal 30-70 km, batuan granitis ringan, kaya silisium-aluminium (Si-Al), densitas ~2,7 g/cm³.',
          'Kerak Samudra (Oceanic Crust): Tebal tipis 5-10 km, batuan basaltis berat, kaya silisium-magnesium (Si-Ma), densitas ~3,0 g/cm³.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Model Pembagian Lapisan Bumi',
        items: [
          { name: 'Model Komposisi Kimia', description: 'Kerak (Crust), Mantel (Mantle), dan Inti (Core).' },
          { name: 'Model Mekanis / Reologi', description: 'Litosfer (kaku rapuh), Astenosfer (plastis mengalir), Mesosfer (padat kaku), Inti Luar (cair), dan Inti Dalam (padat).' }
        ]
      }
    ],
    processes: [
      { stage: 'Arus Konveksi Mantel', title: 'Pemanasan Inti Bumi', description: 'Peluruhan radioaktif di inti memanaskan mantel bawah, memicu naiknya batuan panas secara konveksi.' },
      { stage: 'Pergerakan Litosfer', title: 'Penggeseran Lempeng', description: 'Arus konveksi di astenosfer menyeret lempeng litosfer kaku di atasnya.' },
      { stage: 'Pembangkitan Magnetosfer', title: 'Efek Geodinamo', description: 'Konveksi cairan besi di inti luar menciptakan medan magnet pelindung radiasi kosmik.' }
    ],
    caseStudies: [
      {
        title: 'Pengamatan Gempa Bumi Global untuk Memetakan Shadow Zone Gelombang Seismik',
        location: 'Jaringan Seismograf Global (GSN) dan BMKG Indonesia',
        description: 'Ketika gempa megathrust terjadi di Sumatra, stasiun seismik di seberang bumi pada jarak sudut 104° hingga 140° tidak mendeteksi gelombang P langsung (P-wave shadow zone) dan tidak ada gelombang S sama sekali setelah 104° (S-wave shadow zone). Fenomena ini menjadi bukti mutlak bahwa inti luar bumi berwujud cair kental.',
        takeaway: 'Seismologi membedah perut bumi tanpa perlu menggalinya secara fisik.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Penampang Melintang Interior Bumi dan Gelombang Seismik',
        caption: 'Model interaktif lapisan konsentris bumi lengkap dengan zona bayangan seismik dan slider kedalaman.',
        badge: 'Interactive Geophysics',
        interactiveLabId: 'earth-layers'
      }
    ],
    terminology: [
      { term: 'Litosfer', definition: 'Lapisan terluar bumi yang bersifat kaku dan padat, mencakup seluruh kerak bumi dan bagian teratas mantel bumi.', scientificTerm: 'Lithosphere' },
      { term: 'Astenosfer', definition: 'Lapisan mantel atas di bawah litosfer yang bersifat plastis/semi-cair kental dan menjadi landasan mengapungnya lempeng tektonik.', scientificTerm: 'Asthenosphere' },
      { term: 'Diskontinuitas Mohorovicic (Moho)', definition: 'Batas transisi seismik antara dasar kerak bumi dan bagian atas mantel bumi.', scientificTerm: 'Mohorovičić Discontinuity' }
    ],
    summary: [
      'Interior bumi tersusun atas Kerak (0-70 km), Mantel (hingga 2.890 km), dan Inti (hingga 6.371 km).',
      'Kerak samudra (Si-Ma) lebih padat dan lebih tipis dibanding kerak benua (Si-Al).',
      'Inti luar berwujud besi cair yang menghasilkan medan magnet bumi pelindung kehidupan.'
    ],
    quiz: [
      {
        id: 'q17-1',
        question: 'Lapisan mantel bumi yang bersifat plastis dan semi-cair kental sehingga memungkinkan lempeng-lempeng litosfer bergerak di atasnya disebut...',
        options: ['Mesosfer', 'Astenosfer', 'Inti dalam', 'Kerak benua Sial'],
        correctAnswer: 1,
        explanation: 'Astenosfer (berada pada kedalaman sekitar 100-350 km) memiliki temperatur dan tekanan yang menyebabkan batuan bersifat plastis/duktil sehingga lempeng litosfer dapat meluncur di atasnya.'
      },
      {
        id: 'q17-2',
        question: 'Bukti utama yang menunjukkan bahwa inti luar bumi berwujud cair adalah...',
        options: [
          'Erupsi magma bersuhu sangat tinggi di gunung api',
          'Gelombang seismik sekunder (S-wave) tidak dapat menembus inti luar dan terhenti pada batas mantel-inti',
          'Hasil pengeboran langsung sumur Kola di Rusia',
          'Penurunan drastis densitas batuan di dasar samudra'
        ],
        correctAnswer: 1,
        explanation: 'Gelombang S adalah gelombang geser transversal yang secara fisika hanya mampu merambat melalui medium padat; hilangnya gelombang S di inti membuktikan inti luar berwujud fluida cair.'
      }
    ],
    references: ['Tarbuck, E. J., Lutgens, F. K., & Tasa, D. (2017). Earth: An Introduction to Physical Geology. Pearson.', 'Kearey, P., Klepeis, K. A., & Vine, F. J. (2009). Global Tectonics. Wiley-Blackwell.'],
    relatedTopicIds: ['teori-tektonik-lempeng', 'dinamika-litosfer', 'seisme-gempa-bumi', 'vulkanisme']
  },
  {
    id: 'teori-tektonik-lempeng',
    number: 18,
    title: 'Teori Tektonik Lempeng',
    englishTitle: 'Plate Tectonics Theory and Continental Drift',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelusuri sejarah pergeseran benua Wegener (Pangea), teori pemekaran dasar samudra Hess, batas lempeng (konvergen, divergen, transform), dan dinamika Ring of Fire.',
    keywords: ['tektonik lempeng', 'continental drift', 'alfred wegener', 'konvergen', 'divergen', 'transform', 'ring of fire'],
    learningObjectives: [
      'Menjelaskan Teori Pergeseran Benua (Continental Drift) Alfred Wegener beserta 4 bukti empirisnya.',
      'Menganalisis tiga jenis batas lempeng tektonik: divergen, konvergen (subduksi & kolisi), dan transform.',
      'Menghubungkan posisi tektonik Indonesia pada pertemuan 3 lempeng besar dunia dengan frekuensi bencana geologi.'
    ],
    introduction: 'Teori Tektonik Lempeng (Plate Tectonics Theory) adalah paradigma pemersatu terbesar dalam geosains modern yang menjelaskan bagaimana kerak bumi terpecah-pecah menjadi belasan lempeng kaku raksasa yang terus bergerak lambat (beberapa sentimeter per tahun). Teori ini berakar dari hipotesis Alfred Wegener (1912) mengenai superbenua Pangea yang kemudian disempurnakan oleh penemuan pemekaran dasar samudra (seafloor spreading) oleh Harry Hess pada 1960-an.',
    sections: [
      {
        subtitle: '1. Bukti Hipotesis Pergeseran Benua Alfred Wegener',
        content: 'Alfred Wegener mengemukakan bahwa 250 juta tahun lalu seluruh daratan menyatu dalam superbenua Pangea yang dikelilingi samudra Panthalassa. Empat bukti kuat Wegener mencakup:',
        keyPoints: [
          'Kecocokan Geometris Pantai (Jigsaw Fit): Garis pantai timur Amerika Selatan tepat berpasangan dengan pantai barat Afrika.',
          'Kesamaan Fosil Purba: Fosil reptil air tawar Mesosaurus dan tanaman Glossopteris ditemukan di daratan yang kini terpisah ribuan mil samudra.',
          'Kesesuaian Struktur Batuan: Jalur Pegunungan Appalachia di Amerika Utara berlanjut ke jajaran Kaledonia di Skotlandia dan Skandinavia.',
          'Paleoiklim / Glasiasi Permian: Endapan batuan gletser purba (tillite) ditemukan di wilayah tropis seperti India, Afrika Tengah, dan Australia.'
        ]
      },
      {
        subtitle: '2. Tiga Jenis Interaksi Batas Lempeng Tektonik',
        content: 'Di mana tepi-tepi lempeng bertemu, terjadi interaksi tektonik dahsyat yang melahirkan pegunungan, palung laut, sesar, dan jalur gunung api:',
        table: {
          headers: ['Batas Lempeng', 'Arah Pergerakan', 'Fenomena Geomorfik yang Terbentuk', 'Contoh Nyata di Dunia'],
          rows: [
            ['Divergen (Pemekaran)', 'Saling menjauh / memisah', 'Mid-Ocean Ridge (pematang tengah samudra), celah rift valley, pembentukan kerak baru', 'Pematang Tengah Atlantik (Mid-Atlantic Ridge) dan Great Rift Valley di Afrika Timur'],
            ['Konvergen - Subduksi', 'Lempeng samudra menunjam ke bawah lempeng benua', 'Palung laut dalam (trench), busur vulkanik (volcanic arc), gempa megathrust', 'Palung Sunda di barat Sumatra dan selatan Jawa (Indo-Australia menunjam Eurasia)'],
            ['Konvergen - Kolisi', 'Lempeng benua bertumbukan dengan lempeng benua', 'Pegunungan lipatan raksasa non-vulkanik, gempa dangkal berdaya rusak', 'Pegunungan Himalaya (tumbukan Lempeng India dengan Lempeng Eurasia)'],
            ['Transform / Sesar Geser', 'Saling berpapasan mendatar secara horizontal', 'Sesar geser mendatar (strike-slip fault), gempa kerak dangkal', 'Sesar San Andreas di California dan Sesar Besar Sumatra (Semangko)']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Lempeng Tektonik Utama Pembentuk Wilayah Indonesia',
        items: [
          { name: 'Lempeng Eurasia', description: 'Lempeng benua di utara yang menaungi Paparan Sunda (Sumatra, Jawa, Kalimantan).' },
          { name: 'Lempeng Indo-Australia', description: 'Lempeng samudra di selatan yang bergerak ke arah timur laut dengan laju ~6-7 cm/tahun.' },
          { name: 'Lempeng Pasifik', description: 'Lempeng samudra di timur yang bergerak ke arah barat laut dengan laju ~10-12 cm/tahun.' },
          { name: 'Lempeng Laut Filipina', description: 'Lempeng mikro di utara Maluku dan Sulawesi Utara yang menambah kompleksitas seismik.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelepasan Panas Inti', title: 'Konveksi Astenosfer', description: 'Arus magma panas naik di zona pematang samudra dan mendingin di dekat permukaan.' },
      { stage: 'Slab Pull & Ridge Push', title: 'Gaya Penggerak Lempeng', description: 'Lempeng samudra yang dingin dan padat tertarik gravitasi ke dalam zona penunjaman mantel.' },
      { stage: 'Deformasi Kerak', title: 'Aktivitas Orogenesa', description: 'Batuan terlipat membentuk pegunungan atau patah menghasilkan gempa bumi.' }
    ],
    caseStudies: [
      {
        title: 'Kompleksitas Tektonik "Triple Junction" di Kepulauan Maluku',
        location: 'Kepulauan Maluku dan Laut Banda, Indonesia',
        description: 'Kawasan timur Indonesia merupakan salah satu laboratorium tektonik paling rumit di dunia karena menjadi titik temu tiga lempeng raksasa (Eurasia, Indo-Australia, Pasifik) ditambah mikro-lempeng Laut Banda. Interaksi ini membentuk busur kepulauan melengkung tapal kuda (Banda Arc) dengan palung laut berkedalaman lebih dari 7.000 meter.',
        takeaway: 'Keunikan tektonik Indonesia menjadikannya wilayah kaya mineral emas-tembaga namun rawan bencana multi-ancaman.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Simulasi Batas Lempeng: Subduksi, Divergen, dan Transform',
        caption: 'Simulasi visual pergerakan dinamis lempeng samudra menunjam ke bawah lempeng benua menghasilkan palung dan gunung api.',
        badge: 'Interactive Geodynamics',
        interactiveLabId: 'plate-tectonics'
      }
    ],
    terminology: [
      { term: 'Subduksi (Subduction)', definition: 'Proses geologis di mana satu lempeng tektonik yang lebih padat menunjam meluncur ke bawah lempeng lain masuk ke dalam mantel bumi.', scientificTerm: 'Subduction Zone' },
      { term: 'Pematang Tengah Samudra', definition: 'Rangkaian pegunungan bawah laut yang terbentuk di sepanjang batas lempeng divergen akibat magma naik mendingin.', scientificTerm: 'Mid-Ocean Ridge' },
      { term: 'Cincin Api Pasifik', definition: 'Jalur tapal kuda di sekeliling Samudra Pasifik sepanjang 40.000 km yang ditandai tingginya aktivitas vulkanik dan gempa bumi.', scientificTerm: 'Pacific Ring of Fire' }
    ],
    summary: [
      'Teori Tektonik Lempeng menjelaskan pergerakan kerak bumi di atas astenosfer akibat gaya arus konveksi mantel.',
      'Tiga batas lempeng utama adalah divergen (menjauh), konvergen (mendekat/menunjam), dan transform (berpapasan mendatar).',
      'Indonesia berada pada "triple junction" pertemuan Lempeng Indo-Australia, Eurasia, dan Pasifik yang menjadikannya bagian aktif Ring of Fire.'
    ],
    quiz: [
      {
        id: 'q18-1',
        question: 'Fenomena terbentuknya Palung Jawa (Sunda Trench) di selatan Pulau Jawa merupakan akibat langsung dari interaksi batas lempeng jenis...',
        options: ['Batas divergen antarbenua', 'Batas konvergen penunjaman (subduksi)', 'Batas transform mendatar', 'Batas sesar normal'],
        correctAnswer: 1,
        explanation: 'Palung Jawa terbentuk di zona subduksi konvergen di mana kerak samudra Lempeng Indo-Australia menunjam ke bawah kerak benua Lempeng Eurasia.'
      },
      {
        id: 'q18-2',
        question: 'Ilmuwan yang pertama kali merumuskan hipotesis pergeseran benua (Continental Drift) dengan bukti kecocokan garis pantai Amerika Selatan dan Afrika adalah...',
        options: ['Harry Hess', 'Alfred Wegener', 'Charles Lyell', 'Arthur Holmes'],
        correctAnswer: 1,
        explanation: 'Alfred Wegener mempublikasikan teorinya pada tahun 1912 mengenai daratan superbenua Pangea yang terpecah dan bergeser.'
      }
    ],
    references: ['Wegener, A. (1966). The Origin of Continents and Oceans. Dover Publications.', 'Kearey, P., et al. (2009). Global Tectonics.'],
    relatedTopicIds: ['struktur-lapisan-bumi', 'tektonisme', 'vulkanisme', 'seisme-gempa-bumi']
  },
  {
    id: 'dinamika-litosfer',
    number: 19,
    title: 'Dinamika Litosfer',
    englishTitle: 'Lithospheric Dynamics and Crustal Evolution',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menyelidiki pergerakan litosfer, siklus batuan (beku, sedimen, metamorf), serta perimbangan isostasi kerak bumi.',
    keywords: ['dinamika litosfer', 'siklus batuan', 'isostasi', 'batuan beku', 'batuan sedimen', 'batuan metamorf'],
    learningObjectives: [
      'Menjelaskan konsep dinamika litosfer dan prinsip keseimbangan isostasi kerak bumi.',
      'Menganalisis siklus batuan (rock cycle) dan proses transformasi magma menjadi batuan beku, sedimen, dan metamorf.',
      'Mengidentifikasi karakteristik fisik dan nilai ekonomis dari kelompok batuan utama.'
    ],
    introduction: 'Litosfer bukanlah cangkang batu yang statis dan mati, melainkan sistem dinamis yang terus mengalami daur ulang melalui Siklus Batuan (Rock Cycle) dan mempertahankan keseimbangan gravitasional melalui mekanisme Isostasi. Beban glasial atau sedimentasi dapat menekan kerak bumi ke bawah, sementara erosi mengangkat kembali pegunungan secara perlahan. Batuan di permukaan terus berganti wujud melalui pendinginan magma, pelapukan, pembatuan (litifikasi), hingga rekristalisasi akibat tekanan dan temperatur ekstrem.',
    sections: [
      {
        subtitle: '1. Siklus Batuan (The Rock Cycle)',
        content: 'Seluruh batuan di bumi berawal dari magma cair pijar di perut bumi. Siklus batuan menjelaskan transformasi tiga kelompok batuan utama:',
        table: {
          headers: ['Kelompok Batuan', 'Proses Pembentukan Utama', 'Contoh Batuan', 'Ciri Fisik Khas'],
          rows: [
            ['Batuan Beku (Igneous)', 'Pendinginan dan pembekuan magma (intrusif/plutonik lambat di dalam tanah) atau lava (ekstrusif cepat di permukaan)', 'Granit, Diorit, Gabro (intrusif); Andesit, Basal, Obsidian, Batu Apung (ekstrusif)', 'Kristal mineral tampak jelas pada batuan intrusif; tekstur amorf kaca/berongga pada batuan ekstrusif'],
            ['Batuan Sedimen (Sedimentary)', 'Pelapukan batuan asal, transportasi agen erosi, pengendapan (sedimentasi), dan pembatuan (litifikasi/sementasi)', 'Batu Pasir, Batu Lempung, Konglomerat, Breksi (klastik); Batu Gamping, Batubara (organik)', 'Berlapis-lapis (stratifikasi), kerap mengandung fosil purba'],
            ['Batuan Metamorf / Malihan', 'Perubahan struktur mineral batuan asal akibat temperatur tinggi (termik), tekanan dahsyat (dinamik), atau keduanya (termik-pneumatolitis)', 'Marmer (dari gamping), Kuarsit (dari batu pasir), Sabak/Batu Tulis (dari serpih), Gneiss (dari granit)', 'Struktur foliasi (penjajaran mineral bergaris) atau non-foliasi yang sangat keras']
          ]
        }
      },
      {
        subtitle: '2. Prinsip Keseimbangan Isostasi',
        content: 'Isostasi adalah prinsip kesetimbangan hidrostatik di mana kerak bumi yang mengapung di atas astenosfer yang lebih padat menyesuaikan ketinggiannya tergantung ketebalan dan massa jenisnya. Konsep ini diilustrasikan oleh Teori Airy (kerak memiliki densitas seragam namun kedalaman "akar" berbeda seperti balok es mengapung) dan Teori Pratt (kerak memiliki kedalaman dasar yang sama namun variasi densitas massa berbeda).',
        keyPoints: [
          'Pegunungan tinggi seperti Himalaya memiliki "akar kerak" yang menembus sangat dalam ke mantel bumi.',
          'Post-Glacial Rebound: Pengangkatan daratan Skandinavia dan Kanada setelah lapisan es raksasa mencair di akhir zaman es.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Batuan Berdasarkan Genesis',
        items: [
          { name: 'Batuan Beku Dalam (Abisal / Plutonik)', description: 'Mendingin sangat lambat jauh di kedalaman bumi, membentuk kristal makro sempurna (contoh: granit).' },
          { name: 'Batuan Beku Luar (Efusi)', description: 'Membeku sangat cepat di udara terbuka, menghasilkan kristal halus mikro atau kaca (contoh: obsidian, andesit).' },
          { name: 'Batuan Sedimen Klastik', description: 'Tersusun dari pecahan fisik batuan terdahulu (contoh: breksi dengan fragmen menyudut, konglomerat membulat).' },
          { name: 'Batuan Metamorf Kontak', description: 'Terbentuk di dekat intrusi magma akibat terpanggang suhu tinggi (contoh: marmer).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pembekuan Magma', title: 'Kristalisasi Batuan Beku', description: 'Magma keluar mendingin membentuk batuan beku andesit atau granit.' },
      { stage: 'Erosi & Litifikasi', title: 'Pembentukan Batuan Sedimen', description: 'Pelapukan batuan diangkut sungai dan mengalami sementasi di cekungan danau/laut.' },
      { stage: 'Metamorfisme', title: 'Pemanasan & Penekanan', description: 'Tekanan tektonik dan suhu tinggi mengubah batuan menjadi marmer atau sekis.' },
      { stage: 'Pelelehan Kembali', title: 'Subduksi ke Mantel', description: 'Lempeng menunjam meleleh kembali menjadi magma baru dalam siklus tertutup.' }
    ],
    caseStudies: [
      {
        title: 'Tambang Marmer Tulungagung: Jejak Metamorfisme Batugamping Purba',
        location: 'Tulungagung, Jawa Timur, Indonesia',
        description: 'Kawasan Tulungagung terkenal sebagai sentra industri marmer nasional. Batuan marmer di sini terbentuk dari batugamping terumbu karang laut dangkal zaman Miosen yang terpanggang suhu tinggi akibat intrusi magma andesitik jutaan tahun silam.',
        takeaway: 'Batuan metamorf memiliki nilai ekonomi tinggi sekaligus mencatat sejarah termal bumi masa lampau.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Bagan Interaktif Siklus Batuan (Rock Cycle)',
        caption: 'Diagram siklus batuan yang menghubungkan magma, batuan beku, sedimen, dan metamorf dengan interaksi proses termal dan erosi.',
        badge: 'Petrology Simulator',
        interactiveLabId: 'rock-cycle'
      }
    ],
    terminology: [
      { term: 'Siklus Batuan', definition: 'Rangkaian proses berkesinambungan di mana batuan di kerak bumi terus dibentuk, diubah, dihancurkan, dan dibentuk kembali sepanjang waktu geologis.', scientificTerm: 'Rock Cycle' },
      { term: 'Isostasi', definition: 'Keadaan kesetimbangan gravitasional antara kerak bumi dan mantel di bawahnya sehingga lempeng mengapung pada ketinggian sesuai ketebalannya.', scientificTerm: 'Isostasy' },
      { term: 'Litifikasi', definition: 'Proses pemadatan (kompaksi) dan perekatan (sementasi) sedimen lepas menjadi batuan sedimen padat.', scientificTerm: 'Lithification' }
    ],
    summary: [
      'Tiga kelompok batuan di bumi adalah batuan beku, batuan sedimen, dan batuan metamorf.',
      'Siklus batuan menggambarkan daur ulang materi kerak bumi yang dipicu oleh tenaga endogen dan eksogen.',
      'Prinsip isostasi menjaga kesetimbangan terapungnya kerak bumi di atas astenosfer mantel.'
    ],
    quiz: [
      {
        id: 'q19-1',
        question: 'Batuan sedimen klastik yang tersusun atas fragmen-fragmen batuan bersudut tajam (runcing) yang direkatkan oleh massa dasar mineral disebut...',
        options: ['Konglomerat', 'Breksi', 'Batu gamping terumbu', 'Batu pasir kuarsa'],
        correctAnswer: 1,
        explanation: 'Breksi memiliki fragmen runcing tajam yang menunjukkan pengendapan dekat dari sumber erosi, sedangkan konglomerat memiliki fragmen membundar halus.'
      },
      {
        id: 'q19-2',
        question: 'Fenomena terangkatnya kembali daratan Skandinavia setelah mencairnya tudung es raksasa di akhir zaman es dijelaskan oleh konsep...',
        options: ['Pemekaran lantai samudra', 'Kesetimbangan Isostasi', 'Subduksi busur muka', 'Denudasi geomorfik'],
        correctAnswer: 1,
        explanation: 'Keseimbangan isostasi menjelaskan bahwa hilangnya beban es glasial di atas kerak benua menyebabkan daratan terangkat kembali ke atas (post-glacial rebound).'
      }
    ],
    references: ['Blatt, H., & Tracy, R. J. (1996). Petrology: Igneous, Sedimentary, and Metamorphic. W. H. Freeman.', 'Watts, A. B. (2001). Isostasy and Flexure of the Lithosphere. Cambridge University Press.'],
    relatedTopicIds: ['struktur-lapisan-bumi', 'teori-tektonik-lempeng', 'tektonisme', 'pelapukan']
  },
  {
    id: 'tektonisme',
    number: 20,
    title: 'Tektonisme',
    englishTitle: 'Tectonism: Diastrophism, Folding, and Faulting',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah tenaga tektonisme pembentuk muka bumi: gerak Epirogenesa (positif & negatif) serta gerak Orogenesa (lipatan/folds dan patahan/faults).',
    keywords: ['epirogenesa', 'orogenesa', 'lipatan antiklinal sinklinal', 'patahan horst graben', 'diastrofisme', 'deformasi batuan'],
    learningObjectives: [
      'Membedakan gerak epirogenesa (wilayah luas, lambat) dan gerak orogenesa (wilayah sempit, cepat).',
      'Menganalisis anatomi struktur lipatan: antiklinal, sinklinal, lipatan tegak, rebah, dan sesar sungkup.',
      'Menganalisis anatomi struktur patahan: horst, graben/slenk, sesar normal, sesar naik, dan sesar geser.'
    ],
    introduction: 'Tektonisme adalah tenaga endogen yang berasal dari dalam bumi yang menyebabkan pergeseran, pengangkatan, pelipatan, dan patahan pada lapisan kulit bumi (diastrofisme). Tektonisme mengubah bentang alam datar menjadi pegunungan menjulang, lembah retak dalam, atau daratan terangkat. Berdasarkan kecepatan proses dan luas wilayah yang terpengaruh, tektonisme dibagi menjadi gerak Epirogenesa dan gerak Orogenesa.',
    sections: [
      {
        subtitle: '1. Gerak Epirogenesa: Positif dan Negatif',
        content: 'Epirogenesa adalah gerakan pergeseran kerak bumi yang berlangsung sangat lambat meliputi wilayah benua yang sangat luas tanpa deformasi lipatan yang tajam:',
        table: {
          headers: ['Jenis Epirogenesa', 'Arah Gerakan Daratan', 'Pengaruh Tampak pada Garis Pantai', 'Contoh Nyata'],
          rows: [
            ['Epirogenesa Positif', 'Daratan bergerak turun ke bawah', 'Permukaan air laut tampak seolah-olah naik menenggelamkan pesisir pantai', 'Turunnya Kepulauan Maluku Selatan dan tenggelamnya muara sungai di Skandinavia'],
            ['Epirogenesa Negatif', 'Daratan bergerak naik ke atas', 'Permukaan air laut tampak seolah-olah surut menjauhi garis pantai', 'Terangkatnya teras-teras terumbu karang di Pulau Timor dan pantai Buton']
          ]
        }
      },
      {
        subtitle: '2. Gerak Orogenesa: Lipatan dan Patahan',
        content: 'Orogenesa adalah gerakan pembentukan pegunungan yang relatif cepat dan mencakup area yang lebih sempit. Tekanan mendatar (kompresi) pada batuan plastis menghasilkan Lipatan (Folds), sedangkan tegangan pada batuan kaku getas melampaui batas elastisitasnya menghasilkan Patahan / Sesar (Faults).',
        keyPoints: [
          'Anatomi Lipatan: Antiklinal (puncak lipatan cembung ke atas) dan Sinklinal (lembah lipatan cekung ke bawah).',
          'Jenis Lipatan: Lipatan tegak, miring, menggantung, rebah, hingga sesar sungkup (nappe) yang meluncur jauh.',
          'Anatomi Patahan: Horst (bagian puncak daratan yang terangkat di antara dua patahan) dan Graben / Slenk (lembah amblas di antara bidang patahan).',
          'Bidang Sesar: Footwall (blok di bawah bidang sesar) dan Hanging Wall (blok di atas bidang sesar).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Jenis Sesar (Patahan)',
        items: [
          { name: 'Sesar Normal (Dip-Slip Extension)', description: 'Hanging wall bergerak turun relatif terhadap footwall akibat gaya tarikan tegangan lempeng.' },
          { name: 'Sesar Naik (Thrust / Reverse Fault)', description: 'Hanging wall terdorong naik relatif terhadap footwall akibat kompresi himpitan lempeng.' },
          { name: 'Sesar Geser (Strike-Slip Fault)', description: 'Kedua blok batuan bergeser mendatar menyamping satu sama lain (dekstral kanan / sinistral kiri).' }
        ]
      }
    ],
    processes: [
      { stage: 'Tegangan Tektonik', title: 'Akumulasi Stress Batuan', description: 'Gaya kompresi atau ekstensi antar-lempeng menekan massa batuan litosfer.' },
      { stage: 'Deformasi Plastis', title: 'Pembentukan Lipatan', description: 'Lapisan batuan sedimen lunak melengkung membentuk bukit antiklin dan lembah sinklin.' },
      { stage: 'Ruptur Getas', title: 'Patahan & Gempa', description: 'Batas elastis batuan terlampaui sehingga batuan retak patah membentuk sesar.' }
    ],
    caseStudies: [
      {
        title: 'Sesar Besar Semangko (The Great Sumatran Fault Zone)',
        location: 'Sepanjang Pegunungan Bukit Barisan, Pulau Sumatra',
        description: 'Sesar Semangko adalah sistem sesar geser mendatar (dextral strike-slip) aktif sepanjang 1.900 km yang membelah Pulau Sumatra dari Teluk Semangka di Lampung hingga Banda Aceh. Sesar ini terbentuk akibat penunjaman miring (oblique subduction) Lempeng Indo-Australia terhadap Lempeng Eurasia dan menghasilkan deretan graben lembah subur sekaligus zona gempa dangkal.',
        takeaway: 'Tektonisme sesar menciptakan bentang alam lembah permukiman yang subur namun menyimpan ancaman gempa kerak bumi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Anatomi Struktur Lipatan dan Patahan (Horst & Graben)',
        caption: 'Diagram visual 3D antiklinal, sinklinal, horst, dan graben lengkap dengan arah gaya tekan tektonik.',
        badge: 'Structural Geology'
      }
    ],
    terminology: [
      { term: 'Orogenesa', definition: 'Gerakan tektonik relatif cepat pada wilayah sempit yang memicu pelipatan dan patahan batuan membentuk jalur pegunungan.', scientificTerm: 'Orogeny' },
      { term: 'Horst', definition: 'Blok batuan litosfer yang terangkat di antara dua patahan sesar turun yang berlawanan arah.', scientificTerm: 'Horst' },
      { term: 'Graben (Slenk)', definition: 'Blok batuan kerak bumi yang amblas ke bawah membentuk lembah di antara dua bidang patahan.', scientificTerm: 'Graben' }
    ],
    summary: [
      'Tektonisme terdiri dari gerak epirogenesa (lambat, luas) dan orogenesa (cepat, pembentuk pegunungan).',
      'Lipatan menghasilkan bentang antiklinal (puncak) dan sinklinal (lembah).',
      'Patahan menghasilkan struktur horst (tanah terangkat) dan graben/slenk (tanah amblas).'
    ],
    quiz: [
      {
        id: 'q20-1',
        question: 'Bagian kerak bumi yang amblas ke bawah di antara dua bidang patahan sesar sehingga membentuk lembah memanjang disebut...',
        options: ['Horst', 'Graben (slenk)', 'Antiklinal', 'Sinklinal'],
        correctAnswer: 1,
        explanation: 'Graben atau slenk adalah blok kerak bumi yang mengalami penurunan (amblas) di antara dua sesar normal.'
      },
      {
        id: 'q20-2',
        question: 'Terangkatnya teras-teras terumbu karang purba di pesisir Pulau Timor sehingga berada jauh di atas permukaan air laut sekarang merupakan contoh dari peristiwa...',
        options: ['Epirogenesa positif', 'Epirogenesa negatif', 'Orogenesa lipatan', 'Vulkanisme efusif'],
        correctAnswer: 1,
        explanation: 'Epirogenesa negatif adalah gerak naiknya daratan secara perlahan sehingga permukaan air laut tampak seolah-olah surut.'
      }
    ],
    references: ['Davis, G. H., Reynolds, S. J., & Kluth, C. F. (2011). Structural Geology of Rocks and Regions. John Wiley & Sons.', 'Bemmelen, R. W. van. (1949). The Geology of Indonesia. Government Printing Office.'],
    relatedTopicIds: ['teori-tektonik-lempeng', 'seisme-gempa-bumi', 'vulkanisme', 'bentuk-muka-bumi-geomorfologi']
  },
  {
    id: 'vulkanisme',
    number: 21,
    title: 'Vulkanisme',
    englishTitle: 'Volcanism: Magmatism, Eruptions, and Volcanic Landforms',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah aktivitas magma dari dalam astenosfer: intrusi magma (batolit, lakolit, sill, dyke), ekstrusi magma (tipe letusan erupsi eksplosif vs efusif), bentuk gunung api (maar, perisai, strato), dan Volcanic Explosivity Index (VEI).',
    keywords: ['vulkanisme', 'intrusi magma', 'batolit', 'tipe letusan', 'gunung api strato', 'vei', 'lahar dan piroklastik'],
    learningObjectives: [
      'Membedakan bentuk-bentuk intrusi magma di dalam lapisan batuan bumi (batolit, lakolit, sill, korok/dyke, apofisa).',
      'Menganalisis perbedaan tipe letusan gunung api berdasarkan viskositas magma, tekanan gas, dan kedalaman dapur magma.',
      'Mengklasifikasikan tiga bentuk gunung api utama (strato, perisai, dan maar) serta bahaya vulkanik primer-sekunder.'
    ],
    introduction: 'Vulkanisme adalah semua peristiwa yang berhubungan dengan naiknya magma dari dalam mantel/astenosfer bumi menuju lapisan kerak bumi atau sampai menerobos keluar ke permukaan bumi. Magma yang membeku di dalam tanah tanpa sempat mencapai permukaan disebut Intrusi Magma, sedangkan magma yang berhasil keluar ke permukaan bumi disebut Ekstrusi Magma atau Erupsi Gunung Berapi. Indonesia memiliki 127 gunung api aktif (sekitar 13% dari total gunung api dunia), menjadikannya episentrum vulkanisme global yang menentukan kesuburan tanah sekaligus risiko bencana.',
    sections: [
      {
        subtitle: '1. Intrusi Magma: Morfologi Bawah Permukaan',
        content: 'Sebelum atau tanpa meletus, magma menerobos celah batuan litosfer dan mendingin membentuk formasi batuan beku plutonik:',
        table: {
          headers: ['Bentuk Intrusi', 'Bentuk Geometris', 'Karakteristik Pembentukan'],
          rows: [
            ['Batolit (Batholith)', 'Massa batuan beku raksasa tanpa dasar jelas', 'Dapur magma purba yang membeku di kedalaman belasan kilometer, luas ribuan km²'],
            ['Lakolit (Laccolith)', 'Cembung di atas, datar di bawah (seperti kubah jamur)', 'Magma menyusup di antara perlapisan batuan dan menekan lapisan atasnya melengkung'],
            ['Sill (Keping Intrusi)', 'Lembaran tipis sejajar perlapisan batuan', 'Magma cair menyusup mendatar di antara dua lapisan batuan sedimen yang sudah ada'],
            ['Dike / Gang / Korok', 'Pipa atau dinding tegak memotong lapisan batuan', 'Magma menerobos rekahan vertikal memotong lapisan batuan secara tegak lurus'],
            ['Apofisa', 'Cabang-cabang kecil tak beraturan', 'Urat-urat magma halus yang menjalar dari korok ke segala arah']
          ]
        }
      },
      {
        subtitle: '2. Tipe-Tipe Erupsi dan Volcanic Explosivity Index (VEI)',
        content: 'Kedahsyatan letusan gunung api ditentukan oleh viskositas (kekentalan) magma dan tekanan gas. Magma asam (kaya silika SiO2) sangat kental dan menjebak gas bertekanan tinggi memicu erupsi eksplosif dahsyat (Plinian). Magma basa encer memicu lelehan lava tenang efusif (Hawaiian). Skala VEI mengukur magnitudo letusan dari skala 0 (non-eksplosif) hingga 8 (supervulkan mega-kolosal).',
        keyPoints: [
          'Gunung Api Strato (Komposit): Bentuk kerucut berlapis lava dan piroklastik, paling dominan di Indonesia (Merapi, Semeru, Sinabung).',
          'Gunung Api Perisai (Shield): Bentuk landai sangat lebar terbentuk dari lava basal encer (Mauna Loa di Hawaii).',
          'Gunung Api Maar: Gunung api corong kawah danau terbentuk dari letusan gas eksplosif tunggal (Danau Klakah di Lumajang).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Material Hasil Erupsi Gunung Api',
        items: [
          { name: 'Padat (Eflata / Piroklastik)', description: 'Bom (batu besar membulat), lapili (kerikil 2-64 mm), pasir vulkanik, abu/debu halus.' },
          { name: 'Cair (Efusi)', description: 'Lava (magma cair di permukaan), lahar panas (campuran air danau kawah dan lava), lahar dingin (hujan lebat membilas endapan piroklastik).' },
          { name: 'Gas (Ekshalasi / Fumarol)', description: 'Mofet (gas CO2 beracun), solfatara (gas belerang H2S/SO2), fumarol (uap air H2O murni).' }
        ]
      }
    ],
    processes: [
      { stage: 'Dekompresi Magma', title: 'Pelelehan Parsial Mantel', description: 'Air dari lempeng subduksi menurunkan titik leleh mantel membentuk magma cair andesitik.' },
      { stage: 'Akumulasi Gas', title: 'Migrasi ke Kantung Magma', description: 'Magma mengalir ke kantung magma (chamber) di bawah gunung api, tekanan uap air melonjak.' },
      { stage: 'Erupsi Eksplosif', title: 'Piroklastik & Kolom Letusan', description: 'Kubah lava hancur menyemburkan kolom abu ke stratosfer dan meluncurkan awan panas (pyroclastic density current).' }
    ],
    caseStudies: [
      {
        title: 'Letusan Kolosal Gunung Tambora 1815 (VEI 7) dan Tahun Tanpa Musim Panas',
        location: 'Sumbawa, Nusa Tenggara Barat, Indonesia',
        description: 'Erupsi Tambora pada April 1815 melepaskan 150 km³ batuan dan menyuntikkan jutaan ton gas sulfur ke stratosfer bumi. Partikel aerosol sulfat memantulkan radiasi matahari global dan memicu anomali penurunan suhu 0,7°C di belahan bumi utara, menyebabkan gagal panen dan kelaparan hebat di Eropa dan Amerika Utara (dikenal sebagai "The Year Without a Summer 1816").',
        takeaway: 'Vulkanisme kepulauan Indonesia memiliki daya jangkau yang mampu mengubah jalannya sejarah dan iklim planet bumi.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Anatomi Gunung Api dan Penampang Intrusi Magma',
        caption: 'Model interaktif struktur gunung api strato: kantung magma, saluran kepundan, sill, lakolit, kawah puncak, dan aliran awan panas.',
        badge: 'Volcanology Lab',
        interactiveLabId: 'volcano-anatomy'
      }
    ],
    terminology: [
      { term: 'Awan Panas (Wedhus Gembel)', definition: 'Arus densitas piroklastik berupa suspensi gas bersuhu hingga 800°C yang meluncur turun menuruni lereng dengan kecepatan lebih dari 100 km/jam.', scientificTerm: 'Pyroclastic Flow' },
      { term: 'Lahar Dingin', definition: 'Aliran lumpur debris pekat yang terjadi ketika endapan material piroklastik di lereng atas terhanyut oleh guyuran hujan lebat musiman.', scientificTerm: 'Cold Lahar / Debris Flow' },
      { term: 'Volcanic Explosivity Index (VEI)', definition: 'Skala logaritmik numerik (0–8) untuk mengukur volume material letusan dan ketinggian kolom abu letusan gunung api.', scientificTerm: 'VEI Scale' }
    ],
    summary: [
      'Intrusi magma menghasilkan struktur batolit, lakolit, sill, dan dyke di bawah permukaan bumi.',
      'Sebagian besar gunung api di Indonesia bertipe strato (komposit) dengan karakter erupsi eksplosif berseling efusif.',
      'Bahaya vulkanik mencakup ancaman primer (awan panas, abu letusan) dan sekunder (lahar dingin pasca-erupsi).'
    ],
    quiz: [
      {
        id: 'q21-1',
        question: 'Bentuk intrusi magma berupa lapisan batuan beku tipis mendatar yang membeku sejajar di antara dua lapisan batuan sedimen yang sudah ada disebut...',
        options: ['Batolit', 'Sill', 'Korok / Dyke', 'Lakolit'],
        correctAnswer: 1,
        explanation: 'Sill adalah lempengan tipis intrusi magma yang membeku secara horizontal sejajar dengan bidang perlapisan batuan di sekitarnya.'
      },
      {
        id: 'q21-2',
        question: 'Gas beracun mematikan (karbon dioksida / CO2) yang keluar dari rekahan solfatara gunung api dan sangat berbahaya karena tidak berbau dan mengumpul di dasar lembah disebut...',
        options: ['Fumarol', 'Solfatara belerang', 'Mofet', 'Lapili'],
        correctAnswer: 2,
        explanation: 'Mofet adalah gas asam arang (CO2) yang berat jenisnya lebih berat dari udara sehingga mengendap di cekungan kawah dan dapat mematikan pernapasan seketika.'
      }
    ],
    references: ['Cas, R. A., & Wright, J. V. (1987). Volcanic Successions: Modern and Ancient. Unwin Hyman.', 'Badan Geologi - Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG).'],
    relatedTopicIds: ['struktur-lapisan-bumi', 'teori-tektonik-lempeng', 'seisme-gempa-bumi', 'mitigasi-dan-adaptasi-bencana']
  },
  {
    id: 'seisme-gempa-bumi',
    number: 22,
    title: 'Seisme (Gempa Bumi)',
    englishTitle: 'Seismology: Earthquakes, Waves, and Epicenter Triangulation',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Mendalami ilmu gempa bumi: hiposentrum vs episentrum, gelombang seismik (P, S, Rayleigh, Love), rumus Hukum Laska untuk menghitung jarak episentrum, magnitudo vs intensitas (Skala MMI), serta mekanisme tsunami.',
    keywords: ['gempa bumi', 'hiposentrum', 'episentrum', 'gelombang primer sekunder', 'hukum laska', 'skala richter', 'skala mmi', 'tsunami megathrust'],
    learningObjectives: [
      'Membedakan hiposentrum (titik fokus dalam) dan episentrum (titik permukaan bumi).',
      'Menganalisis karakteristik gelombang seismik badan (P-wave dan S-wave) dan gelombang permukaan (Love dan Rayleigh).',
      'Menghitung jarak episentrum stasiun pencatat gempa menggunakan rumus Hukum Laska.'
    ],
    introduction: 'Seisme atau gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi secara tiba-tiba dari dalam litosfer yang menghasilkan gelombang seismik. Sebagian besar gempa bumi berjenis tektonik (pelepasan regangan elastis pada sesar lempeng), disusul gempa vulkanik (pergerakan fluida magma), gempa runtuhan (amblasnya gua karst/tambang bawah tanah), serta gempa tumbukan meteorit. Posisi Indonesia di persimpangan lempeng menjadikannya salah satu kawasan seismik paling aktif di dunia.',
    sections: [
      {
        subtitle: '1. Gelombang Seismik: Karakteristik dan Perambatan',
        content: 'Energi gempa merambat dalam bentuk gelombang mekanik yang dibagi menjadi Gelombang Badan (Body Waves) yang menembus interior bumi dan Gelombang Permukaan (Surface Waves) yang merambat di kerak atas:',
        table: {
          headers: ['Gelombang', 'Tipe Gerakan Partikel', 'Kecepatan Rata-Rata', 'Medium yang Dapat Ditembus', 'Efek Kerusakan'],
          rows: [
            ['Gelombang Primer (P-Wave)', 'Longitudinal / kompresional (maju-mundur searah rambatan gelombang)', 'Sangat cepat: 5 – 8 km/detik', 'Zat padat, zat cair, dan gas', 'Tiba paling awal di seismograf; dirasakan sebagai sentakan vertikal singkat'],
            ['Gelombang Sekunder (S-Wave)', 'Transversal / geser (tegak lurus arah rambat gelombang)', 'Sedang: 3 – 4,5 km/detik', 'Hanya zat padat (terhenti di zat cair)', 'Tiba kedua di stasiun seismik; guncangan ke samping'],
            ['Gelombang Love (L-Wave)', 'Gelombang permukaan geser horizontal mendatar', 'Lambat: ~2,5 – 3 km/detik', 'Hanya di permukaan litosfer padat', 'Goncangan horizontal menyamping berdaya rusak sangat tinggi pada fondasi gedung'],
            ['Gelombang Rayleigh (R-Wave)', 'Gelombang permukaan eliptis menggelinding (rolling)', 'Paling lambat: ~2 – 2,5 km/detik', 'Permukaan bumi', 'Membuat tanah bergulung naik-turun seperti ombak laut; merobohkan jembatan dan struktur tinggi']
          ]
        }
      },
      {
        subtitle: '2. Perhitungan Jarak Episentrum Menggunakan Hukum Laska',
        content: 'Karena gelombang P merambat lebih cepat dibanding gelombang S, selisih waktu kedatangan gelombang P dan S di stasiun seismograf dapat digunakan untuk menghitung jarak stasiun ke pusat gempa (jarak episentrum) menggunakan Hukum Laska:',
        keyPoints: [
          'Rumus Hukum Laska: Δ = { (S – P) – 1 menit } × 1.000 km',
          'Keterangan: Δ = jarak episentrum dari stasiun seismik (km); S = waktu tiba gelombang S (menit/detik); P = waktu tiba gelombang P (menit/detik).',
          'Triangulasi Episentrum: Dengan data jarak dari minimal 3 stasiun seismograf berbeda, dibuat 3 lingkaran di peta; titik potong persekutuan ketiga lingkaran adalah titik pusat episentrum gempa.'
        ],
        formula: {
          expression: '\\Delta = \\left[ (S - P) - 1\' \\right] \\times 1.000\\text{ km}',
          explanation: 'Rumus Laska menghitung selisih kedatangan gelombang S dan P dikurangi 1 menit lalu dikalikan 1.000 kilometer.',
          exampleCalculation: 'Jika gelombang P tercatat pukul 10:14:30 WIB dan gelombang S tercatat pukul 10:17:00 WIB, maka selisih S - P = 2 menit 30 detik (2,5 menit). Jarak Δ = (2,5 - 1) × 1.000 km = 1,5 × 1.000 = 1.500 km.'
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Gempa Berdasarkan Kedalaman Hiposentrum',
        items: [
          { name: 'Gempa Dangkal (Shallow Earthquake)', description: 'Kedalaman < 70 km; paling berbahaya dan berdaya rusak destruktif tinggi pada bangunan daratan.' },
          { name: 'Gempa Menengah (Intermediate Earthquake)', description: 'Kedalaman 70 – 300 km; getaran dirasakan luas namun dampak kerusakan permukaan lebih teredam.' },
          { name: 'Gempa Dalam (Deep Earthquake)', description: 'Kedalaman > 300 km (bisa hingga 700 km di mantel dalam, seperti Laut Jawa utara).' }
        ]
      }
    ],
    processes: [
      { stage: 'Akumulasi Regangan', title: 'Terkuncinya Bidang Sesar', description: 'Gaya tektonik menekan sesar, namun gesekan batuan menahan pergerakan sehingga energi elastis terkumpul.' },
      { stage: 'Ruptur Mendadak', title: 'Pelepasan Seismik di Hiposentrum', description: 'Batas friksi jebol, blok batuan melenting seketika memancarkan gelombang P dan S.' },
      { stage: 'Guncangan Permukaan', title: 'Penjalaran Gelombang Love & Rayleigh', description: 'Gelombang mencapai permukaan tanah di episentrum dan merambat ke sekeliling memicu kerusakan.' }
    ],
    caseStudies: [
      {
        title: 'Gempa Bumi Megathrust dan Tsunami Aceh 26 Desember 2004',
        location: 'Samudra Hindia, Barat Laut Sumatra, Indonesia',
        description: 'Gempa berkekuatan Mw 9,1 dengan kedalaman 30 km (dangkal) merobek dasar laut sepanjang 1.300 km di zona subduksi Sunda. Deformasi vertikal dasar samudra mengangkat triliunan meter kubik air laut seketika, memicu tsunami dahsyat setinggi hingga 30 meter yang menewaskan lebih dari 220.000 jiwa di 14 negara di sekeliling Samudra Hindia.',
        takeaway: 'Pemahaman geografi gempa melahirkan sistem InaTEWS (Indonesia Tsunami Early Warning System) modern berbasis pelampung buoy dan sirine pantai.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Perambatan Gelombang Seismik dan Triangulasi Episentrum Laska',
        caption: 'Simulasi interaktif grafis penjalaran gelombang P dan S, seismograf virtual, dan perhitungan jarak episentrum 3 stasiun.',
        badge: 'Interactive Seismology',
        interactiveLabId: 'earthquake-seismology'
      }
    ],
    terminology: [
      { term: 'Hiposentrum (Fokus)', definition: 'Titik pusat sumber gempa bumi yang terletak di dalam lapisan kerak atau mantel bumi tempat terjadinya patahan batuan pertama kali.', scientificTerm: 'Hypocenter / Focus' },
      { term: 'Episentrum', definition: 'Titik di permukaan bumi yang terletak tegak lurus tepat di atas hiposentrum gempa bumi.', scientificTerm: 'Epicenter' },
      { term: 'Skala Mercalli (MMI)', definition: 'Skala kualitatif deskriptif (I–XII) untuk mengukur tingkat intensitas kerusakan dan getaran yang dirasakan manusia di lokasi tertentu.', scientificTerm: 'Modified Mercalli Intensity' }
    ],
    summary: [
      'Gelombang primer (P) merambat paling cepat menembus zat padat dan cair; gelombang sekunder (S) hanya merambat pada zat padat.',
      'Jarak episentrum dihitung dari selisih waktu gelombang S dan P menggunakan Hukum Laska.',
      'Magnitudo mengukur energi total yang dilepaskan di hiposentrum, sedangkan Skala MMI mengukur intensitas kerusakan di permukaan.'
    ],
    quiz: [
      {
        id: 'q22-1',
        question: 'Sebuah stasiun BMKG mencatat gelombang primer (P) tiba pada pukul 08:20:15 WIB dan gelombang sekunder (S) tiba pada pukul 08:24:45 WIB. Berapakah jarak episentrum gempa tersebut menurut Hukum Laska?',
        options: ['2.500 km', '3.500 km', '4.500 km', '3.000 km'],
        correctAnswer: 1,
        explanation: 'Selisih S - P = 08:24:45 - 08:20:15 = 4 menit 30 detik = 4,5 menit. Jarak Δ = (4,5 - 1) × 1.000 km = 3,5 × 1.000 = 3.500 km.'
      },
      {
        id: 'q22-2',
        question: 'Titik pusat gempa bumi yang terletak jauh di dalam lapisan kerak bumi tempat energi regangan batuan pertama kali dilepaskan disebut...',
        options: ['Episentrum', 'Hiposentrum', 'Sesar geser', 'Pleistoseista'],
        correctAnswer: 1,
        explanation: 'Hiposentrum (atau fokus gempa) adalah titik sumber gempa di bawah tanah, sedangkan episentrum adalah proyeksi tegak lurusnya di permukaan bumi.'
      }
    ],
    references: ['Lay, T., & Wallace, T. C. (1995). Modern Global Seismology. Academic Press.', 'Badan Meteorologi, Klimatologi, dan Geofisika (BMKG). Katalog Gempa Bumi Indonesia.'],
    relatedTopicIds: ['teori-tektonik-lempeng', 'struktur-lapisan-bumi', 'vulkanisme', 'mitigasi-dan-adaptasi-bencana']
  },
  {
    id: 'tenaga-endogen-dan-eksogen',
    number: 23,
    title: 'Tenaga Endogen dan Eksogen',
    englishTitle: 'Endogenic and Exogenic Forces Shaping Earth',
    categoryId: 'litosfer',
    difficulty: 'Beginner',
    description: 'Menelaah dialektika dua kekuatan utama pembentuk relief muka bumi: Tenaga Endogen (konstruktif/membangun relief: tektonisme, vulkanisme, seisme) dan Tenaga Eksogen (destruktif/meratakan relief: pelapukan, erosi, sedimentasi, mass wasting).',
    keywords: ['tenaga endogen', 'tenaga eksogen', 'denudasi', 'geomorfologi', 'pelapukan erosi', 'tenaga geomorfik'],
    learningObjectives: [
      'Membedakan sumber energi, sifat kerja, dan hasil bentang alam dari tenaga endogen versus tenaga eksogen.',
      'Menjelaskan mengapa tenaga endogen disebut tenaga pembangun (konstruktif) dan tenaga eksogen disebut tenaga perata (destruktif).',
      'Menganalisis keseimbangan dinamis antara pembentukan pegunungan (orogenesis) dan perataan bentang alam (denudasi).'
    ],
    introduction: 'Bentuk muka bumi yang beraneka ragam—dari puncak Himalaya yang menjulang tinggi, jurang Grand Canyon yang menganga, hingga dataran aluvial yang subur—merupakan hasil benturan abadi dua kekuatan raksasa: Tenaga Endogen dan Tenaga Eksogen. Tenaga endogen ditenagai oleh panas internal bumi yang bekerja mengangkat, melipat, dan menumpuk material kerak bumi. Sebaliknya, tenaga eksogen ditenagai oleh radiasi matahari, gravitasi, air, angin, dan gletser yang bekerja mengikis, menghancurkan, dan meratakan kembali tonjolan-tonjolan tersebut ke tingkat dasar laut.',
    sections: [
      {
        subtitle: '1. Perbandingan Karakteristik Tenaga Endogen vs Eksogen',
        content: 'Kedua tenaga ini saling mengimbangi dalam siklus geomorfologi bentang alam:',
        table: {
          headers: ['Parameter Perbandingan', 'Tenaga Endogen', 'Tenaga Eksogen'],
          rows: [
            ['Sumber Energi Utama', 'Panas radioaktif dan sisa pembentukan di dalam mantel/inti bumi', 'Radiasi sinar matahari, atmosfer, siklus hidrologi, dan gaya gravitasi bumi'],
            ['Sifat Kerja Utama', 'Membangun (konstruktif): menambah variasi ketinggian relief bumi', 'Meratakan (destruktif / denudatif): mengikis tonjolan tinggi dan menimbun cekungan rendah'],
            ['Cabang Proses', 'Tektonisme (orogenesa & epirogenesa), Vulkanisme (magma), Seisme (gempa)', 'Pelapukan (weathering), Erosi (erosion), Sedimentasi (deposition), dan Gerakan Massa Tanah (mass wasting)'],
            ['Hasil Bentang Lahan', 'Pegunungan lipatan, kubah gunung api, patahan horst, palung samudra', 'Lembah ngarai berteras, dataran delta sungai, gumuk pasir, bukit sisa monadnock']
          ]
        }
      },
      {
        subtitle: '2. Siklus Denudasi Bentang Alam Menurut Davis',
        content: 'William Morris Davis mengemukakan Siklus Geomorfik (Cycle of Erosion) yang membagi evolusi bentang alam menjadi tiga tahap kematangan: Tahap Muda (lereng terjal, erosi vertikal kuat membentuk lembah V tajam), Tahap Dewasa (meander sungai mulai terbentuk, lembah U melebar), dan Tahap Tua (hampir seluruh daratan terkikis rata menjadi dataran nyaris rata atau Peneplain dengan bukit-bukit sisa erosi monadnock).',
        keyPoints: [
          'Tanpa tenaga endogen, permukaan bumi sudah rata ditenggelamkan air laut miliaran tahun lalu.',
          'Peneplain: Dataran sisa erosi tahap akhir yang hampir datar sempurna.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Agen Tenaga Eksogen Utama',
        items: [
          { name: 'Air Mengalir (Fluvial)', description: 'Sungai mengikis lereng dan mengendapkan sedimen aluvial di muara.' },
          { name: 'Gelombang Laut (Marin)', description: 'Abrasi pantai membentuk tebing terjal (cliff) dan gosong pasir (spit/tombolo).' },
          { name: 'Angin (Aeolian)', description: 'Deflasi dan korasi membentuk batu jamur dan bukit pasir di daerah kering.' },
          { name: 'Gletser Es (Glacial)', description: 'Massa es bergerak mengukir lembah gantung U dan danau fyord.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengangkatan Endogen', title: 'Orogenesis Membangun Relief', description: 'Tekanan tektonik mengangkat batuan dasar laut membentuk pegunungan terjal.' },
      { stage: 'Pelapukan & Pelemahan', title: 'Hancurnya Ikatan Batuan', description: 'Panas matahari dan hujan tropis melapukkan batuan padat menjadi regolit rapuh.' },
      { stage: 'Transportasi & Penimbunan', title: 'Denudasi Menuju Peneplain', description: 'Aliran air sungai mengangkut sedimen menimbun cekungan danau hingga datar kembali.' }
    ],
    caseStudies: [
      {
        title: 'Pembentukan Lembah Harau di Payakumbuh, Sumatra Barat',
        location: 'Payakumbuh, Sumatra Barat, Indonesia',
        description: 'Lembah Harau dikelilingi tebing-tebing granit tegak lurus setinggi ratusan meter. Bentang alam spektakuler ini bermula dari patahan tektonik endogen jutaan tahun silam yang mengangkat blok batuan, kemudian disempurnakan oleh tenaga eksogen berupa erosi air terjun dan pelapukan kimiawi yang memahat dinding ngarai menjadi vertikal.',
        takeaway: 'Setiap keindahan bentang alam adalah monumen kolaborasi tenaga dalam dan luar bumi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Dialektika Tenaga Endogen vs Tenaga Eksogen',
        caption: 'Diagram interaksi tenaga konstruktif endogen dan tenaga perata eksogen menuju kesetimbangan dinamis.',
        badge: 'Geomorphic Dialectics'
      }
    ],
    terminology: [
      { term: 'Tenaga Endogen', definition: 'Kekuatan geomorfik yang bersumber dari dalam perut bumi yang bersifat membangun dan membentuk variasi relief permukaan bumi.', scientificTerm: 'Endogenic Force' },
      { term: 'Tenaga Eksogen', definition: 'Kekuatan geomorfik yang bersumber dari luar permukaan bumi (atmosfer, air, matahari, organisme) yang bersifat meratakan relief.', scientificTerm: 'Exogenic Force' },
      { term: 'Peneplain (Dataran Nyaris)', definition: 'Daratan yang hampir rata sempurna akibat proses denudasi dan erosi tenaga eksogen yang berlangsung sangat lama.', scientificTerm: 'Peneplain' }
    ],
    summary: [
      'Tenaga endogen membangun relief bumi; tenaga eksogen meratakan dan mengikisnya.',
      'Tenaga endogen mencakup tektonisme, vulkanisme, dan seisme.',
      'Tenaga eksogen mencakup pelapukan, erosi, sedimentasi, dan gerakan massa batuan.'
    ],
    quiz: [
      {
        id: 'q23-1',
        question: 'Alasan utama mengapa tenaga endogen digolongkan sebagai tenaga yang bersifat "konstruktif" (membangun) adalah...',
        options: [
          'Karena memanfaatkan semen dan beton dalam pembentukan batuan',
          'Karena mengangkat lapisan kerak bumi dan menambah variasi perbedaan ketinggian relief permukaan bumi',
          'Karena mengikis puncak-puncak pegunungan menjadi dataran datar',
          'Karena ditenagai oleh panas sinar matahari sepanjang tahun'
        ],
        correctAnswer: 1,
        explanation: 'Tenaga endogen bersifat membangun (konstruktif) karena menghasilkan bentang alam baru seperti pegunungan, plato, patahan horst, dan kubah vulkanik yang meningkatkan perbedaan relief ketinggian bumi.'
      },
      {
        id: 'q23-2',
        question: 'Proses perataan permukaan bumi oleh tenaga eksogen melalui pengikisan bertahap pegunungan tinggi hingga menjadi dataran yang hampir rata disebut pembentukan...',
        options: ['Graben', 'Peneplain', 'Antiklinal', 'Kawah maar'],
        correctAnswer: 1,
        explanation: 'Peneplain (dataran nyaris rata) adalah hasil akhir dari siklus erosi dan denudasi tenaga eksogen pada bentang alam tua.'
      }
    ],
    references: ['Summerfield, M. A. (1991). Global Geomorphology. Longman.', 'Bloom, A. L. (2004). Geomorphology: A Systematic Analysis of Late Cenozoic Landforms. Prentice Hall.'],
    relatedTopicIds: ['tektonisme', 'vulkanisme', 'pelapukan', 'erosi', 'bentuk-muka-bumi-geomorfologi']
  },
  {
    id: 'pelapukan',
    number: 24,
    title: 'Pelapukan',
    englishTitle: 'Weathering: Mechanical, Chemical, and Biological Processes',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Mendalami proses disintegrasi batuan tanpa perpindahan tempat: Pelapukan Mekanis/Fisika (fluktuasi suhu, frost wedging), Pelapukan Kimiawi (oksidasi, hidrolisis, karbonasi karst), dan Pelapukan Biologis (akar tanaman, lumut).',
    keywords: ['pelapukan', 'pelapukan mekanis', 'pelapukan kimiawi', 'karstifikasi', 'frost wedging', 'eksfoliasi'],
    learningObjectives: [
      'Menjelaskan definisi pelapukan sebagai tahap awal proses denudasi batuan in-situ.',
      'Menganalisis mekanisme pelapukan mekanis (baji es, insolasi panas gurun, kristalisasi garam).',
      'Menganalisis reaksi pelapukan kimiawi (karbonasi pembentuk bentang alam karst, hidrolisis, oksidasi besi).'
    ],
    introduction: 'Pelapukan (weathering) adalah proses hancur, luruh, atau berubahnya batuan padat di permukaan bumi menjadi butiran-butiran lepas (regolit) akibat kontak berkepanjangan dengan atmosfer, hidrosfer, dan biosfer tanpa mengalami perpindahan tempat (in-situ). Pelapukan merupakan pintu gerbang utama pembentukan tanah (pedogenesis) dan penentu laju erosi. Berdasarkan agen dan proses utamanya, pelapukan diklasifikasikan menjadi tiga jenis: mekanis (fisika), kimiawi, dan biologis (organik).',
    sections: [
      {
        subtitle: '1. Tiga Macam Proses Pelapukan',
        content: 'Masing-masing jenis pelapukan dominan di zona iklim tertentu:',
        table: {
          headers: ['Jenis Pelapukan', 'Agen & Mekanisme Fisik-Kimia', 'Zona Iklim Dominan', 'Contoh Nyata'],
          rows: [
            ['Pelapukan Mekanis / Fisika', 'Pemuaian-penyusutan akibat perbedaan suhu ekstrem siang-malam (insolasi); pembekuan air di rekahan batuan (frost wedging)', 'Daerah iklim gurun kering (arid) dan daerah kutub / pegunungan bersalju', 'Batuan pecah mengelupas seperti kulit bawang (eksfoliasi) di gurun Sahara; batuan retak terbelah es'],
            ['Pelapukan Kimiawi', 'Reaksi air dan gas atmosfer yang mengubah susunan kimia mineral batuan: Karbonasi (H2CO3 melarutkan CaCO3), Oksidasi (besi berkarat kemerahan), Hidrolisis (feldspar menjadi lempung kaolin)', 'Daerah iklim tropis basah dengan curah hujan tinggi dan suhu hangat (seperti Indonesia)', 'Pembentukan gua kapur, stalaktit, stalagmit, dolina di kawasan karst Maros dan Gunungsewu'],
            ['Pelapukan Biologis / Organik', 'Penetrasi akar tanaman memperlebar rekahan; sekresi asam organik oleh lumut kerak (lichen); aktivitas cacing dan mikroba tanah', 'Hutan hujan tropis lebat dan wilayah dengan tutupan vegetasi tebal', 'Pondasi candi batu candi Borobudur yang lapuk ditumbuhi lumut dan jamur kerak']
          ]
        }
      },
      {
        subtitle: '2. Proses Karbonasi pada Bentang Alam Karst',
        content: 'Reaksi pelapukan kimiawi paling spektakuler terjadi pada batugamping (kalsium karbonat / CaCO3). Air hujan menyerap gas karbon dioksida di atmosfer membentuk asam karbonat lemah (H2O + CO2 → H2CO3). Asam ini melarutkan batugamping kalsit padat menjadi kalsium bikarbonat terlarut yang mudah hanyut terbawa air tanah (CaCO3 + H2CO3 → Ca(HCO3)2), menciptakan bentang alam karst berongga.',
        keyPoints: [
          'Eksokarst (luar): Dolina (sinkhole), uvala, polje, perbukitan kerucut menara (karst cone).',
          'Endokarst (bawah tanah): Sungai bawah tanah, gua kapur bertingkat, stalaktit (atap gua), stalagmit (lantai gua).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Reaksi Kimia Utama Pelapukan',
        items: [
          { name: 'Oksidasi', description: 'Reaksi mineral batuan kaya besi (Fe) dengan oksigen menghasilkan karat merah (hematit/limonit).' },
          { name: 'Hidrolisis', description: 'Penguraian mineral silikat oleh ion H+ dan OH- dari air (contoh: feldspar berubah menjadi mineral lempung).' },
          { name: 'Karbonasi', description: 'Pelarutan batuan karbonat oleh asam karbonat alami air hujan.' },
          { name: 'Hidrasi', description: 'Penyerapan molekul air ke dalam kisi kristal mineral batuan (contoh: anhidrit menyerap air menjadi gipsum).' }
        ]
      }
    ],
    processes: [
      { stage: 'Air Hujan Berasam Lemah', title: 'Absorpsi CO2 Atmosfer', description: 'Tetes air hujan menyerap karbon dioksida di udara membentuk larutan asam karbonat.' },
      { stage: 'Pelarutan Rekahan Kalsit', title: 'Perluasan Diklase Batuan', description: 'Air asam meresap di celah batugamping dan melarutkan kalsium karbonat sepanjang jalur retakan.' },
      { stage: 'Pengendapan Kalsit Balik', title: 'Pertumbuhan Stalaktit & Stalagmit', description: 'Tetesan air di atap gua melepaskan gas CO2 kembali sehingga mineral kalsit mengkristal menggantung.' }
    ],
    caseStudies: [
      {
        title: 'Geopark Karst Gunungsewu: Monumen Pelapukan Kimiawi Tropis Terbesar Dunia',
        location: 'Gunungkidul, Wonogiri, dan Pacitan (DIY - Jateng - Jatim)',
        description: 'Kawasan Karst Gunungsewu diakui sebagai UNESCO Global Geopark. Jutaan tahun pelapukan kimiawi melarutkan batu gamping purba setebal ratusan meter, menghasilkan sekitar 40.000 bukit kerucut karst (kegelkarst) dan ratusan gua vertikal (luweng) seperti Luweng Jomblang yang memiliki hutan purba di dasarnya.',
        takeaway: 'Pelapukan kimiawi bukan sekadar perusakan batuan, melainkan arsitek alami yang membangun lanskap geologi yang memukau.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Mekanisme Pelapukan Kimiawi Karbonasi dan Formasi Gua Karst',
        caption: 'Diagram visual reaksi H2O + CO2 melarutkan CaCO3 membentuk dolina, gua bawah tanah, stalaktit, dan stalagmit.',
        badge: 'Karst Geomorphology'
      }
    ],
    terminology: [
      { term: 'Frost Wedging (Baji Es)', definition: 'Proses pelapukan mekanis di mana air yang membeku di celah batuan memuai volumenya sekitar 9% sehingga meretakkan batuan.', scientificTerm: 'Frost Wedging' },
      { term: 'Karstifikasi', definition: 'Proses pelapukan kimiawi pelarutan batuan karbonat oleh air berasam yang menghasilkan bentang alam karst khas.', scientificTerm: 'Karstification' },
      { term: 'Regolit', definition: 'Lapisan material batuan lapuk lepas yang belum membeku menjadi tanah utuh di atas batuan induk segar.', scientificTerm: 'Regolith' }
    ],
    summary: [
      'Pelapukan adalah disintegrasi batuan padat in-situ tanpa terjadi perpindahan tempat.',
      'Pelapukan kimiawi (karbonasi, hidrolisis, oksidasi) mendominasi di wilayah iklim tropis basah Indonesia.',
      'Bentang alam karst (dolina, gua, stalaktit) merupakan mahakarya hasil pelapukan kimiawi batugamping.'
    ],
    quiz: [
      {
        id: 'q24-1',
        question: 'Fenomena pecahnya batuan di daerah gurun pasir akibat perbedaan suhu ekstrem yang sangat tinggi antara siang hari (panas menyengat) dan malam hari (dingin menggigil) termasuk dalam jenis...',
        options: ['Pelapukan mekanis / fisika', 'Pelapukan kimiawi hidrolisis', 'Pelapukan biologis oleh lumut', 'Pelapukan karbonasi'],
        correctAnswer: 0,
        explanation: 'Pemuaian mineral batuan di siang terik dan penyusutan cepat di malam dingin yang berlangsung terus-menerus merusak ikatan batuan secara fisik (pelapukan mekanis/termal).'
      },
      {
        id: 'q24-2',
        question: 'Reaksi kimia pelarutan batugamping oleh air hujan yang mengandung karbon dioksida terlarut menghasilkan bentang alam khas yang disebut...',
        options: ['Bentang lahan marin', 'Bentang lahan karst', 'Bentang lahan aeolian', 'Bentang lahan glasial'],
        correctAnswer: 1,
        explanation: 'Bentang alam karst (seperti di Gunungsewu atau Maros-Pangkep) terbentuk dari proses pelarutan kimiawi (karbonasi) pada batuan gamping/karbonat.'
      }
    ],
    references: ['Bland, W., & Rolls, D. (1998). Weathering: An Introduction to the Scientific Principles. Arnold.', 'Ford, D., & Williams, P. (2007). Karst Hydrogeology and Geomorphology. Wiley.'],
    relatedTopicIds: ['tenaga-endogen-dan-eksogen', 'erosi', 'sedimentasi', 'pedosfer-dan-pembentukan-tanah']
  },
  {
    id: 'erosi',
    number: 25,
    title: 'Erosi',
    englishTitle: 'Erosion Dynamics and Degradation Processes',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis pengikisan dan pengangkutan material permukaan bumi: erosi air (percik, lembar, alur, parit), erosi angin (korasi/deflasi), erosi es (glasial), dan erosi marin (abrasi), serta faktor pengendalinya (rumus USLE).',
    keywords: ['erosi', 'erosi parit', 'abrasi pantai', 'deflasi', 'usle', 'erosi alur', 'pengendalian erosi'],
    learningObjectives: [
      'Membedakan definisi erosi (pengikisan dan pengangkutan) dengan pelapukan (in-situ).',
      'Mengidentifikasi 4 tingkatan erosi air di daratan: erosi percik, erosi lembar, erosi alur, dan erosi parit/gully.',
      'Menghitung dan memprediksi laju kehilangan tanah menggunakan rumus Universal Soil Loss Equation (USLE).'
    ],
    introduction: 'Erosi adalah proses terlepas dan terangkutnya partikel tanah atau pecahan batuan dari suatu tempat oleh agen geomorfik yang bergerak (air mengalir, gelombang laut, hembusan angin, atau gletser es) untuk kemudian diendapkan di tempat lain. Berbeda dengan pelapukan yang terjadi di tempat (in-situ), erosi melibatkan komponen dinamika gerak dan pengangkutan material. Di daerah tropis seperti Indonesia, erosi oleh air hujan dan aliran limpasan permukaan (surface runoff) merupakan ancaman terbesar terhadap degradasi kesuburan tanah pertanian.',
    sections: [
      {
        subtitle: '1. Empat Tahapan Erosi Air di Lahan Pertanian',
        content: 'Erosi air berlangsung secara progresif dari tetesan hujan pertama hingga terbentuknya ngarai jurang raksasa:',
        table: {
          headers: ['Tahap Erosi Air', 'Mekanisme Terjadinya', 'Ciri Lapangan & Tingkat Bahaya'],
          rows: [
            ['1. Erosi Percik (Splash Erosion)', 'Tetesan butir air hujan membentur tanah telanjang dengan energi kinetik tinggi', 'Memecah agregat tanah halus dan melemparkannya ke udara hingga setinggi 50 cm'],
            ['2. Erosi Lembar (Sheet Erosion)', 'Limpasan air tipis mengalir merata di atas permukaan lereng', 'Lapisan humus tanah paling atas terkikis seragam; sulit disadari mata namun menurunkan kesuburan'],
            ['3. Erosi Alur (Rill Erosion)', 'Limpasan air memusat pada lekukan kecil membentuk alur-alur dangkal', 'Terbentuk parit-parit kecil sedalam beberapa sentimeter yang masih dapat diratakan kembali oleh bajak traktor'],
            ['4. Erosi Parit (Gully Erosion)', 'Alur-alur kecil menyatu membentuk saluran parit besar beraliran deras', 'Membentuk jurang bertebing curam sedalam >30 cm hingga beberapa meter; tidak dapat diolah lagi oleh bajak traktor (lahan kritis)']
          ]
        }
      },
      {
        subtitle: '2. Prediksi Kehilangan Tanah dengan Rumus USLE',
        content: 'Wischmeier dan Smith merumuskan model Universal Soil Loss Equation (USLE) yang digunakan para geograf untuk memprediksi rata-rata laju erosi tanah tahunan (A) per hektar:',
        keyPoints: [
          'Rumus USLE: A = R × K × L × S × C × P',
          'R (Rainfall Erosivity): Indeks erosivitas hujan tahunan berdasarkan energi kinetik tetesan hujan.',
          'K (Soil Erodibility): Indeks kepekaan tanah terhadap erosi berdasarkan tekstur dan struktur tanah.',
          'L (Slope Length): Faktor panjang lereng; S (Slope Steepness): Faktor kemiringan sudut lereng.',
          'C (Crop / Cover Management): Faktor tutupan vegetasi dan pengelolaan tanaman.',
          'P (Conservation Practice): Faktor tindakan konservasi mekanis (terasering, guludan, rorak).'
        ],
        formula: {
          expression: 'A = R \\times K \\times LS \\times C \\times P',
          explanation: 'A adalah estimasi kehilangan tanah rata-rata tahunan (ton/ha/tahun).',
          exampleCalculation: 'Jika lereng terjal tanpa terasering memiliki C=0,8 dan P=1,0 menghasilkan A=120 ton/ha/th. Bila dibuat terasering bangku (P=0,04) dan ditanami rumput pelindung (C=0,1), laju erosi terpangkas hingga A=0,6 ton/ha/th (turun drastis di bawah ambang batas toleransi).'
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Erosi Berdasarkan Agen Pengangkut',
        items: [
          { name: 'Erosi Air (Ablasi / Fluvial)', description: 'Pengikisan oleh tetesan hujan dan aliran sungai di daratan.' },
          { name: 'Erosi Gelombang Laut (Abrasi)', description: 'Hantaman gelombang air laut menghantam tebing pantai (cliff).' },
          { name: 'Erosi Angin (Korasi & Deflasi)', description: 'Angin kencang menerbangkan pasir kering (deflasi) dan mengikis batuan (korasi).' },
          { name: 'Erosi Gletser (Eksarasi)', description: 'Gesekan es glasial raksasa mengikis batuan dasar lembah.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelepasan (Detachment)', title: 'Pukulan Butir Hujan', description: 'Energi kinetik hujan melepaskan partikel lempung dan debu dari agregat tanah.' },
      { stage: 'Pengangkutan (Transport)', title: 'Aliran Limpasan Permukaan', description: 'Air larian membawa suspensi lumpur menuruni lereng dengan kecepatan bertambah.' },
      { stage: 'Pengikisan Saluran (Scour)', title: 'Pendalaman Alur & Parit', description: 'Material sedimen yang terbawa bertindak sebagai ampelas memperdalam dasar parit.' }
    ],
    caseStudies: [
      {
        title: 'Bencana Lahan Kritis Akibat Erosi Parit di DAS Cimanuk, Garut',
        location: 'Kabupaten Garut dan Sumedang, Jawa Barat, Indonesia',
        description: 'Alih fungsi lereng curam Gunung Cikuray dan Papandayan dari hutan lindung menjadi kebun sayur kentang semusim tanpa terasering memicu erosi parit masif. Jutaan ton lumpur terhanyut ke Sungai Cimanuk setiap musim hujan, memicu banjir bandang Garut 2016 dan mendangkalkan Waduk Jatigede puluhan tahun lebih cepat dari usia desainnya.',
        takeaway: 'Erosi di hulu adalah malapetaka ekologis bagi keselamatan warga di hilir.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Empat Stadium Erosi Air: Percik, Lembar, Alur, dan Parit (Gully)',
        caption: 'Diagram visual proses perkembangan erosi permukaan tanah dari splash erosion hingga gully canyon.',
        badge: 'Soil Degradation'
      }
    ],
    terminology: [
      { term: 'Erosi Parit (Gully Erosion)', definition: 'Bentuk erosi air tingkat lanjut di mana saluran pengikisan telah mencapai kedalaman lebih dari 30 cm dan tidak dapat dihilangkan dengan pengolahan tanah biasa.', scientificTerm: 'Gully Erosion' },
      { term: 'Erosivitas Hujan (Faktor R)', definition: 'Kapasitas potensial air hujan untuk memicu erosi berdasarkan intensitas dan energi kinetik tetesannya.', scientificTerm: 'Rainfall Erosivity' },
      { term: 'Erodibilitas Tanah (Faktor K)', definition: 'Tingkat kerentanan atau kepekaan alami suatu jenis tanah terhadap pelepasan dan pengangkutan oleh agen erosi.', scientificTerm: 'Soil Erodibility' }
    ],
    summary: [
      'Erosi adalah pelepasan dan pengangkutan material tanah/batuan oleh air, angin, es, atau gelombang laut.',
      'Tahapan erosi air berawal dari erosi percik, berlanjut ke erosi lembar, erosi alur, hingga erosi parit yang merusak.',
      'Model USLE (A = R × K × LS × C × P) digunakan untuk menghitung prediksi laju erosi tanah tahunan.'
    ],
    quiz: [
      {
        id: 'q25-1',
        question: 'Tahapan erosi air di mana pengikisan tanah telah membentuk saluran-saluran parit yang dalam (lebih dari 30 cm) sehingga tidak dapat lagi diratakan dengan bajak pertanian biasa disebut...',
        options: ['Erosi percik', 'Erosi lembar', 'Erosi alur (rill)', 'Erosi parit (gully)'],
        correctAnswer: 3,
        explanation: 'Erosi parit (gully erosion) adalah tahapan erosi paling parah yang membentuk ngarai jurang dalam yang merusak struktur lahan secara permanen.'
      },
      {
        id: 'q25-2',
        question: 'Dalam rumus prediksi erosi Universal Soil Loss Equation (USLE: A = R × K × LS × C × P), simbol C dan P berturut-turut mewakili faktor...',
        options: [
          'Curah hujan dan Panjang lereng',
          'Tekstur tanah dan Kemiringan sudut lereng',
          'Pengelolaan vegetasi tanaman (Crop) dan Praktik konservasi tanah',
          'Kadar air tanah dan Permeabilitas akuifer'
        ],
        correctAnswer: 2,
        explanation: 'Faktor C adalah faktor pengelolaan tanaman/vegetasi (Crop management) dan P adalah faktor tindakan khusus konservasi mekanis tanah (Conservation Practice).'
      }
    ],
    references: ['Wischmeier, W. H., & Smith, D. D. (1978). Predicting Rainfall Erosion Losses: A Guide to Conservation Planning. USDA Agriculture Handbook No. 537.', 'Morgan, R. P. (2009). Soil Erosion and Conservation. John Wiley & Sons.'],
    relatedTopicIds: ['tenaga-endogen-dan-eksogen', 'pelapukan', 'sedimentasi', 'konservasi-tanah']
  },
  {
    id: 'sedimentasi',
    number: 26,
    title: 'Sedimentasi',
    englishTitle: 'Sedimentation and Depositional Landforms',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah proses pengendapan material batuan dan tanah hasil erosi: sedimentasi fluvial (delta, meander, oxbow lake, tanggul alam), sedimentasi marin (spit, tombolo, gosong pasir), dan sedimentasi aeolian (gumuk pasir barchan).',
    keywords: ['sedimentasi', 'delta sungai', 'meander oxbow lake', 'tombolo', 'gumuk pasir parangtritis', 'tanggul alam'],
    learningObjectives: [
      'Menjelaskan konsep sedimentasi sebagai ujung akhir dari rantai proses denudasi eksogen.',
      'Mengklasifikasikan bentang alam hasil sedimentasi fluvial, marin, dan aeolian.',
      'Menganalisis syarat-syarat terbentuknya delta sungai dan evolusi danau tapal kuda (oxbow lake).'
    ],
    introduction: 'Sedimentasi adalah proses pengendapan material batuan atau tanah yang telah terkikis dan terangkut oleh aliran air, hembusan angin, gelombang laut, atau gletser ketika energi pembawa medium tersebut melemah. Jika erosi bertindak sebagai pemotong bentang alam, maka sedimentasi bertindak sebagai penimbun yang membentuk daratan baru yang subur dan datar, seperti delta sungai tempat peradaban besar dunia berkembang.',
    sections: [
      {
        subtitle: '1. Bentang Alam Hasil Sedimentasi Fluvial (Air Sungai)',
        content: 'Aliran sungai yang memasuki dataran rendah mengalami penurunan gradien kemiringan sehingga kecepatan alirannya berkurang dan mengendapkan sedimen yang dibawanya:',
        table: {
          headers: ['Bentang Lahan Fluvial', 'Proses Pembentukan', 'Contoh Nyata'],
          rows: [
            ['Delta Sungai', 'Endapan lumpur dan pasir tebal di muara sungai saat bertemu perairan danau atau laut tenang', 'Delta Sungai Mahakam (Kalimantan Timur), Delta Sungai Nil (Mesir), Delta Brantas (Sidoarjo)'],
            ['Danau Tapal Kuda (Oxbow Lake)', 'Lekukan kelokan meander sungai yang terpotong saat banjir besar, meninggalkan danau tapal kuda terisolasi', 'Danau tapal kuda di sepanjang dataran banjir Sungai Barito dan Musi'],
            ['Tanggul Alam (Natural Levee)', 'Timbunan pasir dan kerikil kasar di tepi kanan-kiri badan sungai saat air meluap melimpas tanggul saat banjir', 'Tanggul alam Sungai Bengawan Solo di Bojonegoro'],
            ['Kipas Aluvial (Alluvial Fan)', 'Endapan sedimen berbentuk kipas di kaki bukit/pegunungan akibat penurunan gradien tiba-tiba', 'Kipas aluvial di lereng bawah Gunung Merapi']
          ]
        }
      },
      {
        subtitle: '2. Bentang Alam Sedimentasi Marin dan Aeolian',
        content: 'Gelombang dan arus laut membentuk bentang pantai akumulatif, sementara angin kencang di daerah kering mengendapkan pasir menjadi gumuk pasir:',
        keyPoints: [
          'Tombolo: Jembatan gosong pasir dan kerikil yang menghubungkan pulau kecil di lepas pantai dengan daratan pulau utama (contoh: Tanah Lot di Bali saat surut).',
          'Spit: Gosong pasir memanjang yang menjorok dari garis pantai ke perairan teluk terbuka.',
          'Gumuk Pasir Barchan (Crescent Dune): Bukit pasir berbentuk bulan sabit dengan dua tanduk mengarah searah hembusan angin dominan, seperti fenomena langka di Pantai Parangtritis Yogyakarta.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Syarat Terbentuknya Delta di Muara Sungai',
        items: [
          { name: 'Pasokan Sedimen Besar', description: 'Daerah Aliran Sungai (DAS) hulu luas dengan laju erosi tanah yang memasok lumpur tinggi.' },
          { name: 'Laut / Muara Tenang', description: 'Arus laut, gelombang pantai, dan pasang surut di muara relatif tenang (tidak menyapu sedimen).' },
          { name: 'Laut Dangkal', description: 'Kedalaman laut di muara relatif dangkal sehingga sedimen cepat menumpuk di atas muka air.' },
          { name: 'Tektonik Stabil', description: 'Tidak terjadi penurunan kerak bumi yang sangat cepat di kawasan muara.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penurunan Energi Angkut', title: 'Perlambatan Aliran Fluida', description: 'Kemiringan sungai melandai saat memasuki dataran pantai, daya seret hidraulis turun.' },
      { stage: 'Presipitasi Gravitasi', title: 'Flokulasi & Pengendapan', description: 'Partikel kasar (kerikil/pasir) mengendap lebih dulu, disusul partikel lempung yang mengalami flokulasi akibat ion garam laut.' },
      { stage: 'Progradasi Garis Pantai', title: 'Pemekaran Daratan Delta', description: 'Sedimen menumpuk di atas permukaan laut membentuk lidah delta baru yang ditumbuhi mangrove.' }
    ],
    caseStudies: [
      {
        title: 'Gumuk Pasir Parangtritis: Satu-Satunya Barchan Pesisir di Asia Tenggara',
        location: 'Bantul, D.I. Yogyakarta, Indonesia',
        description: 'Gumuk Pasir Parangtritis terbentuk dari material abu vulkanik Gunung Merapi yang dihanyutkan Sungai Opak dan Progo ke Samudra Hindia. Gelombang laut menghempaskan pasir ke pantai, lalu angin monsun tenggara yang kencang meniup dan menumpuk pasir tersebut menjadi bukit pasir sabit (barchan) di iklim tropis basah—sebuah fenomena geomorfologi langka dunia.',
        takeaway: 'Sedimentasi adalah hasil kerja sama orkestrasi sungai, samudra, dan angin atmosfer.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Evolusi Pembentukan Meander Sungai Menjadi Danau Tapal Kuda (Oxbow Lake)',
        caption: 'Tahapan pemotongan leher meander sungai hingga membentuk danau tapal kuda tapal oxbow lake.',
        badge: 'Fluvial Landforms'
      }
    ],
    terminology: [
      { term: 'Delta', definition: 'Bentang alam dataran endapan aluvial di muara sungai tempat aliran air memecah menjadi cabang-cabang distributari sebelum masuk ke laut atau danau.', scientificTerm: 'River Delta' },
      { term: 'Tombolo', definition: 'Gosong pasir atau jembatan sedimen marin yang menghubungkan pulau pulau lepas pantai dengan daratan pulau induk.', scientificTerm: 'Tombolo' },
      { term: 'Barchan', definition: 'Gumuk pasir berbentuk bulan sabit dengan lereng landai menghadap angin dan dua ujung meruncing searah tiupan angin.', scientificTerm: 'Barchan Dune' }
    ],
    summary: [
      'Sedimentasi adalah proses pengendapan material hasil erosi akibat melemahnya energi pengangkut.',
      'Sedimentasi fluvial menghasilkan delta, tanggul alam, meander, dan danau tapal kuda (oxbow lake).',
      'Sedimentasi marin menghasilkan tombolo dan spit; sedimentasi aeolian menghasilkan gumuk pasir barchan.'
    ],
    quiz: [
      {
        id: 'q26-1',
        question: 'Gosong endapan pasir dan kerikil laut yang menghubungkan sebuah pulau kecil di lepas pantai dengan daratan pantai utama disebut...',
        options: ['Delta', 'Tombolo', 'Spit', 'Meander'],
        correctAnswer: 1,
        explanation: 'Tombolo adalah tanggul atau gosong pasir laut yang bertindak sebagai jembatan alami penghubung pulau kecil lepas pantai dengan pulau daratan utama.'
      },
      {
        id: 'q26-2',
        question: 'Danau berbentuk melengkung menyerupai tapal kuda yang terbentuk ketika kelokan meander sungai terpotong saat banjir besar disebut...',
        options: ['Danau kawah vulkanik', 'Danau tektovulkanik', 'Danau tapal kuda (Oxbow Lake)', 'Danau dolina karst'],
        correctAnswer: 2,
        explanation: 'Oxbow lake (danau tapal kuda) terbentuk dari terputusnya leher meander sungai yang terus tererosi di bagian luar dan terendapkan di bagian dalam.'
      }
    ],
    references: ['Reineck, H. E., & Singh, I. B. (1980). Depositional Sedimentary Environments. Springer-Verlag.', 'Bridge, J., & Demicco, R. (2008). Earth Surface Processes, Landforms and Sediment Deposits. Cambridge University Press.'],
    relatedTopicIds: ['tenaga-endogen-dan-eksogen', 'erosi', 'pelapukan', 'sungai-dan-daerah-aliran-sungai-das']
  },
  {
    id: 'gerakan-massa-tanah',
    number: 27,
    title: 'Gerakan Massa Tanah',
    englishTitle: 'Mass Wasting: Landslides, Creep, and Slope Stability',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis fenomena mass wasting: gerakan massa tanah dan batuan menuruni lereng akibat gravitasi bumi (rayapan tanah, longsoran rotasi slump, aliran lumpur debris flow, guguran batu rockfall), faktor pemicu, dan mitigasi lereng.',
    keywords: ['mass wasting', 'tanah longsor', 'rayapan tanah soil creep', 'aliran lumpur debris flow', 'kestabilan lereng', 'bidang gelincir'],
    learningObjectives: [
      'Menjelaskan definisi mass wasting dan perannya dalam evolusi bentang alam perbukitan.',
      'Mengklasifikasikan jenis-jenis gerakan massa tanah berdasarkan kecepatan gerak dan kadar air (creep, slump, rockfall, debris flow).',
      'Menganalisis faktor pendorong, faktor pemicu, dan teknik rekayasa mitigasi tanah longsor di Indonesia.'
    ],
    introduction: 'Gerakan Massa Tanah dan Batuan (Mass Wasting / Mass Movement) adalah perpindahan massa tanah, regolit, atau bongkahan batuan menuruni lereng di bawah pengaruh langsung gaya gravitasi bumi tanpa memerlukan agen pengangkut fluida yang mengalir bebas seperti sungai atau angin. Mass wasting merupakan mata rantai penting yang mengantarkan material lapuk dari puncak pegunungan ke dasar lembah sungai. Di Indonesia, tanah longsor merupakan salah satu bencana hidrometeorologi-geologi paling mematikan selama musim penghujan.',
    sections: [
      {
        subtitle: '1. Klasifikasi Jenis-Jenis Mass Wasting',
        content: 'Varnes membagi mass wasting berdasarkan mekanisme gerakan (jatuhan, gelinciran, aliran, rayapan) dan kecepatan geraknya:',
        table: {
          headers: ['Jenis Mass Wasting', 'Kecepatan Gerak', 'Kadar Air & Material', 'Tanda-Tanda di Lapangan'],
          rows: [
            ['Rayapan Tanah (Soil Creep)', 'Sangat lambat (mm – cm per tahun)', 'Kering hingga lembap; tanah penutup lereng', 'Tiang listrik dan pohon melengkung condong menuruni lereng, pagar retak bergeser'],
            ['Longsoran Rotasi (Slump)', 'Sedang hingga cepat', 'Lembap; massa tanah kohesif', 'Gerakan menggelincir pada bidang gelincir cekung, meninggalkan tebing mahkota tapal kuda'],
            ['Aliran Bahan Rombakan (Debris Flow)', 'Sangat cepat (bisa >50 km/jam)', 'Sangat basah / jenuh air; lumpur pekat bercampur batu besar dan gelondongan kayu', 'Menerjang alur lembah sungai sempit saat hujan badai ekstrem, menyapu permukiman'],
            ['Guguran Batu (Rockfall)', 'Sangat cepat (jatuh bebas gravitasi)', 'Kering; bongkahan batuan lepas dari tebing terjal', 'Batu menggelinding bebas dari tebing terjal menimpa badan jalan di perbukitan']
          ]
        }
      },
      {
        subtitle: '2. Faktor Pengendali dan Pemicu Tanah Longsor',
        content: 'Kestabilan lereng ditentukan oleh perimbangan antara Gaya Pendorong (Shear Stress: komponen gravitasi yang menarik massa ke bawah) dan Gaya Penahan (Shear Strength: friksi antarpasir dan kohesi lempung). Faktor Keamanan Lereng (FK) = Gaya Penahan / Gaya Pendorong. Jika FK < 1,0 maka longsor pasti terjadi.',
        keyPoints: [
          'Faktor Pendorong Pasif: Kemiringan sudut lereng (>20°), keberadaan bidang gelincir impermeable (lapisan lempung licin kedap air di bawah tanah), beban bangunan di bibir tebing.',
          'Faktor Pemicu Aktif: Hujan lebat berdurasi lama yang menjenuhkan tanah (menaikkan tekanan air pori dan melumasi bidang gelincir), getaran gempa bumi tektonik, pemotongan lereng bawah jalan raya.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Zonasi Kerentanan Gerakan Tanah Badan Geologi',
        items: [
          { name: 'Zona Sangat Rendah', description: 'Kemiringan lereng datar hingga landai (<5°), jarang atau tidak pernah terjadi longsor.' },
          { name: 'Zona Menengah', description: 'Lereng 15°–30°, vegetasi terganggu, longsor dapat terjadi jika dipicu hujan lebat terus menerus.' },
          { name: 'Zona Sangat Tinggi', description: 'Lereng terjal >30°, tanah pelapukan tebal bertumpu di atas batuan kedap air, potensi longsor instan saat hujan lebat.' }
        ]
      }
    ],
    processes: [
      { stage: 'Infiltrasi Air Hujan', title: 'Penjenuhan Massa Tanah', description: 'Hujan lebat meresap ke lapisan tanah gembur hingga mencapai lapisan lempung kedap air di bawahnya.' },
      { stage: 'Kenaikan Tekanan Pori', title: 'Pelumasan Bidang Gelincir', description: 'Tekanan air pori meningkat drastis, mengurangi daya ikat friksi butiran tanah.' },
      { stage: 'Runtuh Gravitasional', title: 'Pelepasan Massa Longsor', description: 'Massa tanah meluncur cepat pada bidang gelincir menuruni lereng menimbun lembah.' }
    ],
    caseStudies: [
      {
        title: 'Bencana Tanah Longsor Dusun Jemblung, Karangkobar, Banjarnegara 2014',
        location: 'Kabupaten Banjarnegara, Jawa Tengah, Indonesia',
        description: 'Bukit Telaga Legetang yang berkemiringan curam mengalami longsor luncuran masif setelah diguyur hujan lebat selama dua hari berturut-turut. Tanah pelapukan andesit setebal 5 meter meluncur di atas lapisan lempung kedap air menimbun seluruh perkampungan Dusun Jemblung dalam hitungan menit dan menelan lebih dari 100 korban jiwa.',
        takeaway: 'Pemahaman geografi zonasi kerentanan lereng dan sistem peringatan dini ekstensometer adalah kunci keselamatan permukiman perbukitan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Anatomi Mahkota Longsoran Rotasi (Slump) dan Bidang Gelincir',
        caption: 'Bagan struktur tanah longsor: tebing mahkota (scarp), bidang gelincir lempung, retakan tapak, dan zona lidah longsoran.',
        badge: 'Slope Mechanics'
      }
    ],
    terminology: [
      { term: 'Bidang Gelincir', definition: 'Bidang kontak luncur yang licin dan kedap air di bawah lapisan tanah (biasanya lempung kedap) tempat massa tanah di atasnya bergerak menggelincir.', scientificTerm: 'Slip Surface / Failure Plane' },
      { term: 'Rayapan Tanah (Soil Creep)', definition: 'Gerakan massa tanah menuruni lereng yang berlangsung sangat lambat dan hampir tidak kasat mata secara langsung.', scientificTerm: 'Soil Creep' },
      { term: 'Tekanan Air Pori', definition: 'Tekanan fluida air yang mengisi ruang pori antarbutir tanah yang mengurangi kuat geser penahan tanah.', scientificTerm: 'Pore Water Pressure' }
    ],
    summary: [
      'Mass wasting adalah perpindahan massa batuan/tanah menuruni lereng akibat gaya gravitasi bumi.',
      'Jenisnya mencakup rayapan lambat, longsoran rotasi, guguran batu jatuh bebas, dan aliran debris cair deras.',
      'Hujan lebat menjenuhkan tanah dan melumasi bidang gelincir lempung kedap air menjadi pemicu longsor utama di Indonesia.'
    ],
    quiz: [
      {
        id: 'q27-1',
        question: 'Fenomena gerakan tanah menuruni lereng yang berlangsung sangat lambat dan tidak kasat mata secara langsung, namun ditandai oleh pohon dan tiang listrik yang melengkung condong ke bawah lereng disebut...',
        options: ['Guguran batu (rockfall)', 'Rayapan tanah (soil creep)', 'Aliran bahan rombakan', 'Longsoran translasi cepat'],
        correctAnswer: 1,
        explanation: 'Rayapan tanah (soil creep) bergerak amat lambat (milimeter per tahun) akibat siklus basah-kering atau beku-cair tanah, dengan gejala khas pohon dan tiang miring.'
      },
      {
        id: 'q27-2',
        question: 'Lapisan batuan di dalam tanah yang bersifat padat, licin, dan kedap air sehingga menjadi alas tempat meluncurnya massa tanah basah di atasnya saat longsor dinamakan...',
        options: ['Bidang gelincir (slip plane)', 'Zona astenosfer', 'Lapisan humus solum A', 'Diskontinuitas Moho'],
        correctAnswer: 0,
        explanation: 'Bidang gelincir (slip plane) adalah lapisan kedap air (sering berupa lapisan batuan lempung) yang menjadi bidang luncur runtuhnya massa tanah di atasnya.'
      }
    ],
    references: ['Highland, L. M., & Bobrowsky, P. (2008). The Landslide Handbook: A Guide to Understanding Landslides. USGS Circular 1325.', 'Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG). Peta Prakiraan Wilayah Potensi Gerakan Tanah.'],
    relatedTopicIds: ['tenaga-endogen-dan-eksogen', 'pelapukan', 'erosi', 'mitigasi-dan-adaptasi-bencana']
  },
  {
    id: 'bentuk-muka-bumi-geomorfologi',
    number: 28,
    title: 'Bentuk Muka Bumi (Geomorfologi)',
    englishTitle: 'Geomorphology and Landform Classification',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Mengkaji 10 tipologi bentang lahan (landform systems) di permukaan bumi: vulkanik, struktural, fluvial, solusional (karst), marin, aeolian, glasial, organik, antropogenik, dan denudasional.',
    keywords: ['geomorfologi', 'bentang lahan landform', 'bentang lahan vulkanik', 'bentang lahan struktural', 'bentang lahan karst', 'bentang lahan fluvial'],
    learningObjectives: [
      'Menjelaskan konsep bentang alam (landscape) dan satuan bentuk lahan (landform) dalam geomorfologi.',
      'Mengklasifikasikan 10 tipologi sistem bentuk lahan menurut Verstappen (ITC Enschede).',
      'Menganalisis hubungan antara satuan bentuk lahan dengan potensi sumber daya dan kerawanan bencana wilayah.'
    ],
    introduction: 'Geomorfologi adalah cabang ilmu geografi yang mempelajari bentuk muka bumi (landforms), proses-proses pembentuknya, material penyusunnya, serta evolusi perkembangannya sepanjang waktu geologis. Herman Th. Verstappen menyusun klasifikasi 10 sistem bentang lahan geomorfologi yang menjadi standar kurikulum di Indonesia. Setiap satuan bentuk lahan memiliki karakteristik lereng, tata air hidrologi, kesuburan tanah, dan kerawanan bencana yang unik.',
    sections: [
      {
        subtitle: '1. Klasifikasi 10 Sistem Bentang Lahan Geomorfologi',
        content: 'Berdasarkan genesis proses pembentuknya, bentang lahan dibagi menjadi 10 kelas utama:',
        table: {
          headers: ['Sistem Bentang Lahan', 'Genesis Proses Utama', 'Satuan Bentuk Lahan Khas', 'Contoh di Indonesia'],
          rows: [
            ['1. Vulkanik (V)', 'Aktivitas magma dan erupsi gunung api', 'Kerucut gunung api, kawah, kaldera, lereng vulkanik, dataran kaki vulkanik', 'Kompleks Kaldera Tengger Bromo, Dataran Kaki Merapi Sleman'],
            ['2. Struktural (S)', 'Deformasi tektonik tektonisme (lipatan dan patahan)', 'Pegunungan antiklinal, lembah sinklinal, tebing gawir sesar, plato struktural', 'Pegunungan Lipatan Kendeng Jawa Timur, Lembah Sesar Semangko'],
            ['3. Fluvial (F)', 'Kerja aliran air sungai dan sedimentasi darat', 'Dataran banjir, tanggul alam, meander, danau tapal kuda, delta sungai', 'Dataran Aluvial Pantai Utara Jawa, Delta Mahakam Kalimantan'],
            ['4. Solusional / Karst (K)', 'Pelapukan kimiawi pelarutan batuan gamping', 'Perbukitan kerucut karst, dolina sinkhole, polje, gua kapur berongga', 'Kawasan Karst Gunungsewu Pacitan, Karst Maros-Pangkep Sulawesi'],
            ['5. Marin (M)', 'Aktivitas hempasan gelombang laut dan pasang surut', 'Tebing pantai terjal (cliff), rataan pasang surut, tombolo, spit pasir', 'Tebing Cliff Uluwatu Bali, Tombolo Tanah Lot'],
            ['6. Aeolian (A)', 'Pengangkutan dan pengendapan oleh hembusan angin', 'Gumuk pasir sabit (barchan), gumuk pasir memanjang (longitudinal)', 'Gumuk Pasir Parangtritis Bantul Yogyakarta'],
            ['7. Glasial (G)', 'Pengikisan dan penumpukan massa es gletser salju', 'Lembah gantung U-shaped, danau cirque, morain gletser', 'Puncak Jaya Cartensz Papua (tutupan es abadi tropis)'],
            ['8. Organik (O)', 'Pertumbuhan dan akumulasi organisme hayati', 'Terumbu karang atol, terumbu karang penghalang (barrier reef), rawa gambut', 'Taman Nasional Bunaken Manado, Kepulauan Wakatobi'],
            ['9. Antropogenik (H)', 'Modifikasi masif oleh aktivitas teknologi peradaban manusia', 'Persawahan terasering, waduk bendungan buatan, bekas kawah tambang terbuka', 'Sawah Terasering Jatiluwih Bali, Kawah Tambang Grasberg Freeport'],
            ['10. Denudasional (D)', 'Kombinasi pelapukan, erosi, dan mass wasting intensif', 'Bukit sisa erosi terisolasi (monadnock), lereng runtuhan talus, peneplain', 'Perbukitan sisa erosi di Bangka Belitung dan Natuna']
          ]
        }
      },
      {
        subtitle: '2. Penerapan Geomorfologi dalam Penataan Ruang',
        content: 'Peta geomorfologi adalah fondasi evaluasi kemampuan lahan (land capability). Misalnya dataran kaki vulkanik sangat ideal untuk permukiman dan pertanian intensif karena kaya air tanah dan tanah subur; sedangkan lereng atas vulkanik dan tebing struktural curam ditetapkan sebagai kawasan lindung konservasi resapan air.',
        keyPoints: [
          'Pendekatan Geomorfologi menganalisis 4 aspek: Morfografi (deskripsi visual), Morfometri (kuantifikasi kemiringan lereng), Morfogenesa (asal usul pembentukan), dan Morfokronologi (urutan umur relatif).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Empat Aspek Kajian Geomorfologi',
        items: [
          { name: 'Morfografi', description: 'Deskripsi kualitatif bentuk lahan: dataran, perbukitan, pegunungan, lembah.' },
          { name: 'Morfometri', description: 'Pengukuran kuantitatif: sudut lereng (%), beda tinggi (meter), kerapatan torehan erosi.' },
          { name: 'Morfogenesa', description: 'Asal usul proses tenaga pembentuk (morfostruktur aktif/pasif dan morfodinamik).' },
          { name: 'Morfokronologi', description: 'Penentuan umur relatif atau absolut pembentukan bentang lahan dalam skala geologi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Gaya Endogen', title: 'Pembentukan Orde 1 & 2', description: 'Tektonisme dan vulkanisme mengangkat massa benua dan jalur pegunungan.' },
      { stage: 'Aksi Eksogen', title: 'Pemahatan Orde 3', description: 'Erosi fluvial, pelarutan karst, dan abrasi laut memahat lembah dan tebing.' },
      { stage: 'Keseimbangan Morfologis', title: 'Evolusi Bentang Lahan', description: 'Mencapai profil kesetimbangan lereng dinamis.' }
    ],
    caseStudies: [
      {
        title: 'Pemetaan Satuan Bentuk Lahan untuk Mitigasi Bencana Erupsi Gunung Merapi',
        location: 'Kabupaten Sleman, Magelang, Boyolali, Klaten',
        description: 'Pusat Vulkanologi membagi Gunung Merapi menjadi satuan bentuk lahan: Kerucut Puncak (zona bahaya awan panas KRB III), Lereng Vulkanik Tengah (zona aliran lahar dan luncuran awan panas KRB II), Kaki Vulkanik (zona hunian warga KRB I), dan Dataran Fluvio-Vulkanik (zona aman lumbung pangan Sleman-Yogyakarta).',
        takeaway: 'Zonasi tata ruang berbasis geomorfologi memisahkan kawasan bahaya maut dengan zona pemanfaatan budidaya produktif.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Satuan Geomorfologi dan 10 Sistem Bentang Lahan',
        caption: 'Visualisasi bentang lahan vulkanik, struktural, karst, dan fluvial dalam satu kesatuan bentang alam terpadu.',
        badge: 'Landform Systems'
      }
    ],
    terminology: [
      { term: 'Bentuk Lahan (Landform)', definition: 'Kenampakan fisik tunggal di permukaan bumi yang memiliki bentuk topografi khas dan tersusun oleh material batuan tertentu melalui proses geomorfik spesifik.', scientificTerm: 'Landform' },
      { term: 'Morfometri', definition: 'Aspek geomorfologi yang mengkaji nilai kuantitatif parameter permukaan bumi, seperti persentase kelerengan, beda tinggi, dan kerapatan drainase sungai.', scientificTerm: 'Morphometry' },
      { term: 'Kaldera', definition: 'Kawah vulkanik raksasa berdiameter berkilo-kilometer yang terbentuk akibat runtuhnya atap dapur magma pasca-letusan dahsyat.', scientificTerm: 'Caldera' }
    ],
    summary: [
      'Geomorfologi mengkaji bentuk muka bumi melalui aspek morfografi, morfometri, morfogenesa, dan morfokronologi.',
      'Sepuluh sistem bentang lahan utama mencakup vulkanik, struktural, fluvial, karst, marin, aeolian, glasial, organik, antropogenik, dan denudasional.',
      'Analisis geomorfologi menjadi rujukan paling mendasar dalam evaluasi kesesuaian lahan dan mitigasi bencana spasial.'
    ],
    quiz: [
      {
        id: 'q28-1',
        question: 'Satuan bentuk lahan seperti pegunungan antiklinal, lembah sinklinal, dan gawir sesar tergolong dalam sistem bentang lahan...',
        options: ['Bentang lahan vulkanik', 'Bentang lahan struktural', 'Bentang lahan denudasional', 'Bentang lahan fluvial'],
        correctAnswer: 1,
        explanation: 'Bentang lahan struktural dibentuk oleh deformasi tektonik lempeng seperti perlipatan (antiklin/sinklin) dan patahan sesar (gawir/horst/graben).'
      },
      {
        id: 'q28-2',
        question: 'Pengukuran kuantitatif kemiringan lereng dalam derajat atau persen (%) serta pengukuran beda tinggi kontur di lapangan merupakan kajian aspek geomorfologi...',
        options: ['Morfografi', 'Morfometri', 'Morfogenesa', 'Morfokronologi'],
        correctAnswer: 1,
        explanation: 'Morfometri adalah aspek kuantitatif geomorfologi yang mengukur kemiringan sudut lereng, beda tinggi elevasi, panjang lereng, dan indeks kekasaran medan.'
      }
    ],
    references: ['Verstappen, H. Th. (1983). Applied Geomorphology: Geomorphological Surveys for Environmental Development. Elsevier.', 'Huggett, R. J. (2011). Fundamentals of Geomorphology. Routledge.'],
    relatedTopicIds: ['tektonisme', 'vulkanisme', 'sungai-dan-daerah-aliran-sungai-das', 'pelapukan']
  },
  {
    id: 'pedosfer-dan-pembentukan-tanah',
    number: 29,
    title: 'Pedosfer dan Pembentukan Tanah',
    englishTitle: 'Pedosphere and Soil Formation Processes',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah pedosfer sebagai lapisan tanah pendukung kehidupan: 5 faktor pembentuk tanah Jenny (iklim, organisme, bahan induk, relief, waktu), profil horison tanah (O, A, E, B, C, R), dan sifat fisik tanah (tekstur, struktur, porositas).',
    keywords: ['pedosfer', 'pembentukan tanah', 'horison tanah', 'profil tanah', 'faktor pembentuk tanah jenny', 'tekstur tanah'],
    learningObjectives: [
      'Menjelaskan definisi pedosfer dan fungsinya sebagai media hidup biosfer bumi.',
      'Menganalisis 5 faktor pembentuk tanah menurut Hans Jenny: Tanah = f(I, O, B, R, W).',
      'Mengidentifikasi urutan profil horison tanah vertikal dari Horison O (organik) hingga Horison R (batuan induk keras).'
    ],
    introduction: 'Pedosfer adalah lapisan tanah terluar bumi yang menjadi jembatan ekologis tempat bertemunya litosfer (batuan), atmosfer (udara), hidrosfer (air), dan biosfer (kehidupan). Tanah bukanlah sekadar debu atau kotoran biasa, melainkan tubuh alam dinamis tiga dimensi yang tersusun atas partikel mineral lapuk, bahan organik humus, air pori, udara tanah, dan triliunan mikroorganisme. Pembentukan tanah membutuhkan waktu ratusan hingga ribuan tahun hanya untuk menghasilkan beberapa sentimeter lapisan tanah subur.',
    sections: [
      {
        subtitle: '1. Lima Faktor Pembentuk Tanah (Hans Jenny)',
        content: 'Hans Jenny (1941) merumuskan persamaan matematis pembentukan tanah: S = f(Cl, O, R, P, T) di mana tanah merupakan fungsi dari lima faktor yang bekerja simultan:',
        table: {
          headers: ['Faktor Pembentuk', 'Pengaruh Spesifik terhadap Tanah', 'Bukti Pengaruh di Lapangan'],
          rows: [
            ['Iklim (Cl - Climate)', 'Suhu dan curah hujan mengendalikan laju pelapukan kimiawi batuan dan pencucian mineral (leaching)', 'Di daerah tropis basah Indonesia pelapukan tanah sangat tebal (bisa >10 meter) dibanding gurun kering'],
            ['Organisme (O - Organisms)', 'Vegetasi menghasilkan serasah daun; cacing dan bakteri menguraikan sisa hayati menjadi humus subur', 'Tanah padang rumput (mollisol) memiliki horison A gelap sangat tebal kaya bahan organik'],
            ['Bahan Induk (P - Parent Material)', 'Susunan kimia dan mineral batuan asal menentukan sifat fisik awal tanah', 'Batugamping menghasilkan tanah terarosa merah; abu vulkanik andesit menghasilkan tanah andosol gembur'],
            ['Relief / Topografi (R - Relief)', 'Kemiringan lereng mengendalikan laju drainase limpasan air dan intensitas erosi', 'Lereng curam memiliki tanah tipis karena erosi; lembah datar memiliki akumulasi tanah tebal'],
            ['Waktu (T - Time)', 'Dibutuhkan waktu ribuan tahun agar proses genesis membentuk horison tanah matang yang jelas', 'Tanah muda (entisol) belum memiliki diferensiasi horison; tanah tua (oxisol) horisonnya sangat terlapuk lanjut']
          ]
        }
      },
      {
        subtitle: '2. Profil Horison Tanah Vertikal',
        content: 'Jika tanah digali vertikal, tampak lapisan-lapisan horison tanah yang memiliki warna dan tekstur berbeda:',
        keyPoints: [
          'Horison O (Organik): Lapisan paling atas setebal beberapa cm, tersusun dari serasah daun, ranting lapuk, dan humus segar.',
          'Horison A (Topsoil / Tanah Atas): Lapisan tanah mineral paling subur, kaya humus tercampur partikel tanah halus, tempat konsentrasi akar tanaman.',
          'Horison E (Eluviasi): Lapisan pucat terkelantang di bawah A yang mengalami pencucian intensif mineral lempung dan besi oleh resapan air.',
          'Horison B (Subsoil / Iluviasi): Lapisan penumpukan (akumulasi) mineral lempung, besi, dan aluminium yang tercuci dari horison atas.',
          'Horison C (Regolit / Bahan Induk Lapuk): Lapisan batuan asal yang baru mengalami pelapukan parsial; belum memiliki sifat tanah sejati.',
          'Horison R (Bedrock): Batuan induk pejal yang belum melapuk sama sekali (batuan dasar masif).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Komposisi Ideal Tanah Subur Pertanian',
        items: [
          { name: 'Bahan Mineral (Anorganik)', description: '45% volume tanah (pasir, debu, lempung hasil pelapukan batuan).' },
          { name: 'Bahan Organik (Humus)', description: '5% volume tanah (sumber hara utama dan pengikat air).' },
          { name: 'Air Tanah (Water)', description: '25% volume pori tanah (pelarut unsur hara bagi perakaran tanaman).' },
          { name: 'Udara Tanah (Air)', description: '25% volume pori tanah (oksigen untuk respirasi akar dan mikroba aerob).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelapukan Batuan', title: 'Disintegrasi Batuan Induk', description: 'Pelapukan mekanis dan kimiawi memecah batuan induk menjadi pecahan regolit.' },
      { stage: 'Kolonisasi Perintis', title: 'Aktivitas Lumut & Asam Organik', description: 'Lumut kerak tumbuh, melepaskan asam organik yang mempercepat pembentukan mineral lempung.' },
      { stage: 'Pembentukan Humus', title: 'Humifikasi & Diferensiasi', description: 'Serasah membusuk menjadi humus, air mencuci mineral membentuk horison A, B, dan C yang matang.' }
    ],
    caseStudies: [
      {
        title: 'Kesuburan Tanah Vulkanik di Sekitar Gunung Merapi',
        location: 'Kabupaten Sleman dan Magelang, Jawa Tengah',
        description: 'Erupsi periodik Gunung Merapi menyemburkan abu vulkanik kaya mineral hara (kalsium, magnesium, fosfor, kalium). Material abu ini mengalami pelapukan cepat di iklim tropis basah membentuk tanah Andosol yang sangat subur dengan struktur remah gembur dan daya ikat air tinggi, menopang peradaban agraris Pulau Jawa selama ribuan tahun.',
        takeaway: 'Bahaya erupsi vulkanik diimbangi anugerah pembaruan kesuburan lapisan pedosfer jangka panjang.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Profil Vertikal Horison Tanah (O, A, E, B, C, R)',
        caption: 'Bagan visual profil penampang tanah lengkap dengan lapisan seresah organik, topsoil, eluviasi, subsoil, dan batuan induk.',
        badge: 'Soil Horizons'
      }
    ],
    terminology: [
      { term: 'Pedogenesis', definition: 'Proses pembentukan dan perkembangan profil tanah dari batuan induk di bawah pengaruh iklim, organisme, dan waktu.', scientificTerm: 'Pedogenesis' },
      { term: 'Horison Tanah', definition: 'Lapisan tanah yang terbentuk secara horizontal sejajar permukaan bumi dengan sifat fisik, kimia, dan biologis yang berbeda.', scientificTerm: 'Soil Horizon' },
      { term: 'Eluviasi', definition: 'Proses pencucian dan pemindahan bahan terlarut atau partikel tanah halus dari lapisan atas (horison E) ke lapisan bawah oleh perkolasi air.', scientificTerm: 'Eluviation' }
    ],
    summary: [
      'Pedosfer adalah lapisan tanah yang terbentuk dari interaksi litosfer, atmosfer, hidrosfer, dan biosfer.',
      'Lima faktor pembentuk tanah adalah Iklim, Organisme, Bahan Induk, Relief, dan Waktu (Hans Jenny).',
      'Profil tanah matang tersusun atas horison O (organik), A (topsoil), E (eluviasi), B (subsoil), C (regolit), dan R (batuan induk).'
    ],
    quiz: [
      {
        id: 'q29-1',
        question: 'Lapisan profil tanah yang paling subur, kaya akan kandungan bahan organik (humus), dan menjadi tempat utama berkembangnya sistem perakaran tanaman adalah...',
        options: ['Horison R', 'Horison C', 'Horison A (Topsoil)', 'Horison E'],
        correctAnswer: 2,
        explanation: 'Horison A (Topsoil) adalah lapisan tanah mineral teratas yang paling kaya akan humus dan aktivitas mikroorganisme sehingga paling subur untuk pertanian.'
      },
      {
        id: 'q29-2',
        question: 'Menurut formula faktor pembentuk tanah Hans Jenny [Tanah = f(I, O, B, R, W)], simbol R dan W berturut-turut mewakili faktor...',
        options: [
          'Radiasi matahari dan Wilayah administrasi',
          'Relief (kemiringan lereng) dan Waktu (Time)',
          'Resistensi batuan dan Warna tanah',
          'Reaksi kimia dan Watak iklim'
        ],
        correctAnswer: 1,
        explanation: 'R adalah faktor Relief (topografi/kelerengan lereng) dan W adalah faktor Waktu (Time) yang dibutuhkan dalam proses diferensiasi horison tanah.'
      }
    ],
    references: ['Jenny, H. (1941). Factors of Soil Formation: A System of Quantitative Pedology. McGraw-Hill.', 'Brady, N. C., & Weil, R. R. (2016). The Nature and Properties of Soils. Pearson.'],
    relatedTopicIds: ['jenis-dan-persebaran-tanah', 'konservasi-tanah', 'pelapukan', 'tenaga-endogen-dan-eksogen']
  },
  {
    id: 'jenis-dan-persebaran-tanah',
    number: 30,
    title: 'Jenis dan Persebaran Tanah',
    englishTitle: 'Soil Types and Geographic Distribution in Indonesia',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Mengidentifikasi jenis-jenis tanah utama di Indonesia menurut klasifikasi Dudal-Soepraptohardjo dan USDA Soil Taxonomy: Andosol, Latosol, Regosol, Aluvial, Organosol (Gambut), Grumosol, Kapur (Rendzina/Terarosa), serta persebaran spasialnya.',
    keywords: ['jenis tanah indonesia', 'andosol', 'tanah aluvial', 'tanah gambut organosol', 'latosol', 'grumosol', 'persebaran tanah'],
    learningObjectives: [
      'Mengidentifikasi karakteristik fisik, warna, kesuburan, dan bahan induk dari jenis-jenis tanah utama di Indonesia.',
      'Memetakan persebaran spasial tanah Andosol, Aluvial, Latosol, Organosol, dan Rendzina di pulau-pulau besar Indonesia.',
      'Menganalisis kesesuaian komoditas pertanian berdasarkan jenis tanahnya.'
    ],
    introduction: 'Sebagai negara kepulauan vulkanik beriklim tropis basah, Indonesia memiliki keragaman jenis tanah yang sangat kaya. Keragaman ini dipicu oleh perbedaan bahan induk (abu vulkanik di Jawa-Sumatra vs batuan metamorf purba di Kalimantan dan batugamping di Nusa Tenggara), variasi curah hujan, serta kelerengan bentang alam. Klasifikasi tanah nasional mengelompokkan tanah Indonesia ke dalam tipe-tipe spesifik yang menentukan potensi budidaya tanaman dan strategi pengelolaan lingkungannya.',
    sections: [
      {
        subtitle: '1. Jenis-Jenis Tanah Utama di Indonesia',
        content: 'Karakteristik tanah sangat dipengaruhi oleh bahan induk batuan pembentuknya:',
        table: {
          headers: ['Jenis Tanah', 'Bahan Induk Asal', 'Warna & Sifat Fisik', 'Tingkat Kesuburan', 'Persebaran Utama di Indonesia'],
          rows: [
            ['Tanah Andosol', 'Abu dan tuff vulkanik letusan gunung berapi', 'Hitam kelam hingga cokelat tua, sangat gembur, remah, porositas tinggi', 'Sangat Tinggi (sangat kaya mineral hara)', 'Lereng gunung api aktif di Sumatra, Jawa, Bali, Lombok, Sulawesi Utara'],
            ['Tanah Aluvial (Entisol Fluvial)', 'Endapan lumpur dan pasir luapan sungai dan banjir', 'Kelabu hingga cokelat muda, struktur butir halus berlapis', 'Tinggi (ideal untuk persawahan padi)', 'Dataran rendah pantai timur Sumatra, pantai utara Jawa, muara sungai Kalimantan'],
            ['Tanah Organosol / Gambut (Histosol)', 'Timbunan sisa vegetasi rawa yang tergenang air asam tanpa oksigen', 'Cokelat gelap hingga kehitaman, berserat gambut, sangat masam (pH < 4)', 'Rendah (kurang unsur hara mikro)', 'Rawa pasang surut pantai timur Sumatra, Kalimantan Barat, Kalimantan Tengah, Papua'],
            ['Tanah Latosol / Inseptisol', 'Batuan beku dan sedimen yang mengalami pelapukan lanjut', 'Merah kekuningan akibat oksida besi dan aluminium, drainase baik', 'Sedang hingga Rendah (tercuci hujan)', 'Dataran bergelombang Lampung, Jawa Barat, Jawa Tengah, Kalimantan'],
            ['Tanah Grumosol (Vertisol)', 'Batugamping atau lempung di daerah iklim kering musiman', 'Kelabu gelap kehitaman, lempung berat, mengembang saat basah dan retak saat kering', 'Sedang (sukar diolah saat basah)', 'Kawasan musiman: Madura, Madiun, Gunungkidul, Nusa Tenggara'],
            ['Tanah Kapur (Rendzina / Mediteran)', 'Pelapukan batugamping koral dan karst', 'Kemerahan (terarosa) atau hitam dangkal (rendzina), berkerikil kalsit', 'Rendah (sering mengalami defisit air)', 'Pegunungan Kapur Selatan Jawa, Blora, Maros, Timor, Sumba']
          ]
        }
      },
      {
        subtitle: '2. Pemanfaatan Tanah untuk Komoditas Unggulan',
        content: 'Setiap jenis tanah memiliki kecocokan budidaya komoditas pertanian tertentu:',
        keyPoints: [
          'Tanah Andosol: Sentra perkebunan teh, kopi arabika, tembakau, sayur-mayur hortikultura (wortel, kentang, kubis) di dataran tinggi.',
          'Tanah Aluvial: Sentra persawahan padi sawah irigasi teknis dan tambak budidaya perikanan pesisir.',
          'Tanah Organosol (Gambut): Jika dikelola secara bijak cocok untuk sagu, kelapa sawit pasang surut (memerlukan pengaturan muka air ketat agar tidak terbakar).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Padanan Istilah Tanah (Dudal vs USDA Soil Taxonomy)',
        items: [
          { name: 'Andosol', description: 'Andisols (tanah berbasis mineral vulkanik amorf andik).' },
          { name: 'Gambut / Organosol', description: 'Histosols (tanah yang didominasi bahan organik lebih dari 20%).' },
          { name: 'Aluvial & Regosol', description: 'Entisols / Inceptisols (tanah muda dengan perkembangan horison minimal).' },
          { name: 'Grumosol', description: 'Vertisols (tanah lempung yang memiliki sifat kembang-kerut tinggi).' },
          { name: 'Latosol Merah Tua', description: 'Oxisols / Ultisols (tanah sangat lapuk kaya seskuioksida besi-aluminium).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengendapan Abu Vulkanik', title: 'Erupsi Membawa Mineral Piroklastik', description: 'Abu andesit menyelimuti perbukitan di lereng gunung api.' },
      { stage: 'Pelapukan Kimiawi Cepat', title: 'Pembentukan Mineral Alopan', description: 'Air hujan tropis menghidrolisis abu membentuk tanah Andosol gembur.' },
      { stage: 'Akumulasi Bahan Organik', title: 'Pengikatan Humus Kuat', description: 'Mineral amorf mengikat asam humat membentuk kompleks humus stabil yang sangat subur.' }
    ],
    caseStudies: [
      {
        title: 'Pengelolaan Lahan Gambut Berkelanjutan di Semenanjung Kampar',
        location: 'Riau, Sumatra, Indonesia',
        description: 'Lahan gambut tebal di Semenanjung Kampar rentan terbakar jika dikeringkan melalui kanal buatan. Badan Restorasi Gambut dan Mangrove (BRGM) menerapkan prinsip 3R (Rewetting/pembasahan kembali melalui sekat kanal, Revegetasi dengan tanaman endemik seperti jelutung rawa, dan Revitalisasi ekonomi masyarakat) guna menjaga fungsi hidrologis kubah gambut.',
        takeaway: 'Setiap jenis tanah memerlukan kearifan ekologis tata kelola yang sesuai dengan batas daya dukungnya.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Persebaran Jenis Tanah Utama di Kepulauan Indonesia',
        caption: 'Peta tematik sebaran tanah Andosol di jalur vulkanik, Aluvial di pesisir utara Jawa-Sumatra, dan Gambut di dataran rendah rawa.',
        badge: 'Soil Geography'
      }
    ],
    terminology: [
      { term: 'Tanah Andosol', definition: 'Tanah vulkanik berwarna gelap yang berkembang dari abu dan piroklastik gunung api, berstruktur remah gembur dan sangat subur.', scientificTerm: 'Andisol' },
      { term: 'Tanah Organosol (Gambut)', definition: 'Tanah yang terbentuk dari akumulasi sisa jaringan tanaman yang membusuk secara lambat dalam kondisi jenuh air anaerobik.', scientificTerm: 'Histosol' },
      { term: 'Tanah Aluvial', definition: 'Tanah muda yang berasal dari pengendapan material sedimen halus limpasan sungai di dataran banjir dan muara.', scientificTerm: 'Alluvial Soil / Fluvents' }
    ],
    summary: [
      'Tanah di Indonesia bervariasi dari Andosol subur di gunung api hingga Organosol asam di rawa gambut.',
      'Tanah Aluvial menopang lumbung padi nasional di dataran rendah pantai utara Jawa dan timur Sumatra.',
      'Sifat fisik dan kimia jenis tanah menentukan kesesuaian komoditas dan teknik pengelolaan lahannya.'
    ],
    quiz: [
      {
        id: 'q30-1',
        question: 'Jenis tanah yang terbentuk dari abu dan material piroklastik erupsi gunung berapi, memiliki warna kehitaman, bertekstur gembur, dan sangat subur untuk perkebunan teh serta sayuran adalah...',
        options: ['Tanah Organosol', 'Tanah Andosol', 'Tanah Terarosa', 'Tanah Grumosol'],
        correctAnswer: 1,
        explanation: 'Tanah Andosol adalah tanah vulkanik subur yang kaya unsur hara mineral hasil pelapukan abu gunung api.'
      },
      {
        id: 'q30-2',
        question: 'Tanah yang memiliki sifat khas "kembang-kerut"—mengembang sangat lengket saat basah terkena hujan dan mengerut retak-retak pecah saat musim kemarau adalah...',
        options: ['Tanah Grumosol (Vertisol)', 'Tanah Podsolik merah kuning', 'Tanah Aluvial', 'Tanah Andosol'],
        correctAnswer: 0,
        explanation: 'Tanah Grumosol (Vertisol) didominasi oleh mineral lempung montmorilonit yang memiliki daya kembang-kerut sangat tinggi seiring fluktuasi kadar air.'
      }
    ],
    references: ['Hardjowigeno, S. (2003). Ilmu Tanah. Akademika Pressindo.', 'Soil Survey Staff. (2014). Keys to Soil Taxonomy (12th ed.). USDA-NRCS.'],
    relatedTopicIds: ['pedosfer-dan-pembentukan-tanah', 'konservasi-tanah', 'vulkanisme', 'pengelolaan-sumber-daya-alam']
  },
  {
    id: 'konservasi-tanah',
    number: 31,
    title: 'Konservasi Tanah',
    englishTitle: 'Soil Conservation and Land Degradation Management',
    categoryId: 'litosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis metode konservasi tanah dan air untuk mencegah degradasi lahan kritis: Metode Vegetatif (reboisasi, strip cropping, mulching), Metode Mekanik/Teknik (terasering bangku, guludan, rorak, tanggul), dan Metode Kimiawi (soil conditioner).',
    keywords: ['konservasi tanah', 'terasering', 'metode vegetatif', 'metode mekanik', 'rorak', 'strip cropping', 'lahan kritis'],
    learningObjectives: [
      'Menjelaskan tujuan dan prinsip dasar konservasi tanah dan air.',
      'Membedakan teknik konservasi tanah metode vegetatif (reboisasi, agroforestri, mulching) dan metode mekanik (terasering, rorak, guludan).',
      'Menerapkan metode konservasi tanah yang tepat berdasarkan persentase kemiringan lereng lahan pertanian.'
    ],
    introduction: 'Konservasi tanah adalah penempatan setiap bidang tanah pada cara penggunaan yang sesuai dengan kemampuan lahan dan memperlakukannya sesuai dengan syarat-syarat yang diperlukan agar tanah tidak mengalami kerusakan (erosi) dan produktivitasnya dapat dipertahankan secara lestari. Pengikisan lapisan topsoil subur oleh erosi air hujan di perbukitan tidak hanya memiskinkan petani di hulu, tetapi juga memicu pendangkalan waduk dan banjir bandang di hilir. Konservasi memadukan pendekatan vegetatif, mekanis, dan kimiawi.',
    sections: [
      {
        subtitle: '1. Tiga Metode Utama Konservasi Tanah',
        content: 'Konservasi tanah mengombinasikan pelindung hayati vegetasi dengan rekayasa fisik lereng:',
        table: {
          headers: ['Metode Konservasi', 'Prinsip Kerja Perlindungan', 'Teknik-Teknik Spesifik Lapangan'],
          rows: [
            ['Metode Vegetatif', 'Memanfaatkan tanaman atau serasah untuk melindungi permukaan tanah dari hantaman tetes hujan, menahan limpasan air, dan menambah bahan organik', '1. Reboisasi / Penghijauan: penanaman kembali hutan gundul\n2. Strip Cropping: penanaman berselang-seling tanaman pangan dan rumput penutup\n3. Crop Rotation: rotasi tanaman semusim dan legum pengikat nitrogen\n4. Mulching: penutupan permukaan tanah dengan jerami/serasah\n5. Agroforestri (Wana Tani): perpaduan pohon hutan dan tanaman pangan'],
            ['Metode Mekanik / Fisik', 'Mengubah struktur fisik permukaan tanah untuk memperpendek panjang lereng, memperkecil kemiringan sudut lereng, dan menampung air larian', '1. Terasering (Bangku, Gulud, Kredit): memotong lereng menjadi undakan datar bertingkat\n2. Pembuatan Rorak: parit buntu penampung endapan lumpur dan resapan air hujan\n3. Guludan Berkontur: tanggul tanah kecil sejajar garis kontur\n4. Saluran Pembuangan Air (SPA) berdinding batu'],
            ['Metode Kimiawi', 'Menggunakan bahan pemantap tanah (soil conditioner) sintetis atau alami untuk memperbaiki struktur agregat tanah', 'Pemberian polimer (PVA, poliakrilamida), emulsi aspal, atau kapur dolomit untuk merekatkan butiran tanah agar tidak mudah terlepas tererosi']
          ]
        }
      },
      {
        subtitle: '2. Pemilihan Tipe Terasering Berdasarkan Lereng',
        content: 'Terasering tidak boleh dibuat sembarangan, melainkan harus disesuaikan dengan kecuraman sudut lereng:',
        keyPoints: [
          'Teras Gulud: Cocok untuk lereng landai 3% – 8%, berupa guludan tanah sejajar garis kontur.',
          'Teras Kredit: Cocok untuk lereng 8% – 15%, memanfaatkan tanaman pagar penahan tanah.',
          'Teras Bangku (Bench Terrace): Cocok untuk lereng 15% – 30% dengan tanah tebal solum dalam; memotong lereng menjadi bidang olah datar dan bidang tampingan vertikal.',
          'Lereng >45%: Dilarang keras dijadikan lahan pertanian semusim; mutlak harus dihutankan sebagai Hutan Lindung Konservasi Permanen.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Kemampuan Lahan (USDA Land Capability Classes)',
        items: [
          { name: 'Kelas I – IV (Lahan Budidaya)', description: 'Lereng datar hingga sedang, kedalaman tanah baik, dapat diolah intensif dengan teknik konservasi ringan hingga sedang.' },
          { name: 'Kelas V – VII (Lahan Terbatas)', description: 'Lereng bergelombang curam, berbatu atau sering tergenang; cocok untuk penggembalaan rumput dan hutan produksi terbatas.' },
          { name: 'Kelas VIII (Kawasan Lindung Mutlak)', description: 'Lereng sangat curam >45%, tanah sangat dangkal berbatu, cagar alam perlindungan hidrologis.' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Lereng', title: 'Pemetaan Kemiringan & Kontur', description: 'Mengukur sudut lereng menggunakan klinometer dan menandai garis kontur sabuk lereng.' },
      { stage: 'Pembuatan Terasering', title: 'Cut and Fill Bertingkat', description: 'Memotong tanah lereng atas dan menimbunnya di lereng bawah membentuk undakan teras datar.' },
      { stage: 'Stabilisasi Vegetatif', title: 'Penanaman Rumput Penguat', description: 'Menanami bibir tampingan teras dengan rumput akar wangi (vetiver) penahan longsor.' }
    ],
    caseStudies: [
      {
        title: 'Keberhasilan Rumput Akar Wangi (Vetiver Grass) untuk Menstabilkan Lereng Tebing Tol',
        location: 'Jalan Tol Cikopo-Palimanan (Cipali) dan Lereng Puncak, Jawa Barat',
        description: 'Rumput vetiver (Chrysopogon zizanioides) memiliki akar serabut yang mampu menembus tanah vertikal sedalam 3 hingga 5 meter dengan kekuatan tarik setara kawat baja ringan. Penanaman vetiver secara rapat di lereng terjal terbukti menghentikan erosi lembar dan mencegah keruntuhan tebing jalan tanpa memerlukan dinding penahan beton semen yang mahal.',
        takeaway: 'Bio-engineering vegetatif menawarkan solusi konservasi tanah yang murah, alami, kokoh, dan berumur panjang.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Model Anatomi Terasering Bangku dan Parit Rorak',
        caption: 'Bagan irisan melintang terasering bangku: bidang olah datar, tampingan teras, saluran peresapan air, dan lubang rorak lumpur.',
        badge: 'Soil Conservation Design'
      }
    ],
    terminology: [
      { term: 'Rorak', definition: 'Lubang atau parit buntu yang digali sejajar garis kontur untuk menjebak aliran limpasan air hujan dan menampung endapan lumpur tanah.', scientificTerm: 'Sediment Trap / Silt Pit' },
      { term: 'Terasering Bangku', definition: 'Bangunan konservasi mekanik yang memotong lereng bukit menjadi tangga-tangga undakan datar dengan tampingan tegak untuk memperkecil erosi.', scientificTerm: 'Bench Terracing' },
      { term: 'Mulching (Pemulsaan)', definition: 'Penutupan permukaan tanah terbuka dengan sisa serasah tanaman (jerami, sekam, plastik) untuk mencegah benturan butir air hujan.', scientificTerm: 'Mulching' }
    ],
    summary: [
      'Konservasi tanah bertujuan menjaga produktivitas tanah secara lestari dan mencegah erosi.',
      'Metode vegetatif memanfaatkan tanaman (reboisasi, agroforestri, strip cropping, mulching).',
      'Metode mekanis merekayasa bentuk fisik lereng (terasering bangku, guludan kontur, parit rorak).'
    ],
    quiz: [
      {
        id: 'q31-1',
        question: 'Metode konservasi tanah mekanis berupa lubang atau parit buntu yang dibuat di antara bedengan tanaman untuk menjebak lumpur tanah tererosi dan meresapkan air ke dalam tanah disebut...',
        options: ['Teras kredit', 'Rorak', 'Mulsa plastik', 'Windbreak'],
        correctAnswer: 1,
        explanation: 'Rorak adalah lubang atau parit buntu buatan yang berfungsi menampung air limpasan dan sedimen tanah yang terhanyut di lahan pertanian lereng.'
      },
      {
        id: 'q31-2',
        question: 'Teknik konservasi tanah secara vegetatif dengan cara menanam tanaman secara berselang-seling dalam barisan tegak lurus arah lereng antara tanaman pangan dan tanaman penutup tanah disebut...',
        options: ['Strip cropping', 'Crop rotation', 'Countour plowing', 'Bench terracing'],
        correctAnswer: 0,
        explanation: 'Strip cropping adalah penanaman tanaman secara berselang-seling dalam lajur-lajur strip sejajar garis kontur untuk menahan erosi tanah.'
      }
    ],
    references: ['Arsyad, S. (2010). Konservasi Tanah dan Air. IPB Press.', 'Morgan, R. P. (2009). Soil Erosion and Conservation. Blackwell Science.'],
    relatedTopicIds: ['pedosfer-dan-pembentukan-tanah', 'jenis-dan-persebaran-tanah', 'erosi', 'tenaga-endogen-dan-eksogen']
  }
];
