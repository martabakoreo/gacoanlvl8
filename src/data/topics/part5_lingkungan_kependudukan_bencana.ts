import { Topic } from '../../types/geography';

export const topicsPart5: Topic[] = [
  // CATEGORY I: Lingkungan Hidup dan Pembangunan Berkelanjutan (62-68)
  {
    id: 'lingkungan-hidup-dan-ekosistem',
    number: 62,
    title: 'Lingkungan Hidup dan Ekosistem',
    englishTitle: 'Environmental Systems and Human-Ecology Interactions',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Beginner',
    description: 'Menelaah kesatuan ruang lingkungan hidup menurut UU No. 32/2009: interaksi komponen biotik, abiotik, dan sosial-budaya, rantai aliran energi, siklus biogeokimia, serta homeostatis ekosistem.',
    keywords: ['lingkungan hidup', 'komponen biotik abiotik', 'siklus biogeokimia', 'homeostatis ekosistem', 'keseimbangan ekologi'],
    learningObjectives: [
      'Menjelaskan definisi lingkungan hidup menurut Undang-Undang RI Nomor 32 Tahun 2009.',
      'Mengidentifikasi peranan komponen biotik, abiotik, dan kultural dalam menjaga keseimbangan dinamis lingkungan.',
      'Menganalisis konsep homeostatis lingkungan dan batas ambang toleransi ekosistem terhadap gangguan.'
    ],
    introduction: 'Lingkungan hidup adalah kesatuan ruang dengan semua benda, daya, keadaan, dan makhluk hidup, termasuk manusia dan perilakunya, yang mempengaruhi alam itu sendiri, kelangsungan perikehidupan, dan kesejahteraan manusia serta makhluk hidup lain (UU No. 32/2009). Bumi beroperasi sebagai satu ekosistem raksasa yang saling terikat: energi mengalir searah dari radiasi matahari melalui jejaring makanan, sedangkan materi zat hara didaur ulang tanpa henti melalui siklus biogeokimia. Ketika manusia mengganggu siklus ini melebihi daya lentingnya, sistem lingkungan akan mengalami degradasi.',
    sections: [
      {
        subtitle: '1. Tiga Komponen Pembentuk Lingkungan Hidup',
        content: 'Lingkungan hidup merupakan perpaduan harmonis antara tiga subsistem:',
        table: {
          headers: ['Komponen Lingkungan', 'Cakupan Elemen', 'Peranan dalam Sistem Kehidupan'],
          rows: [
            ['Komponen Abiotik (Fisik)', 'Tanah, batuan, air, udara, suhu, sinar matahari, kelembapan', 'Menyediakan medium ruang, mineral hara kimia, dan energi penopang kehidupan'],
            ['Komponen Biotik (Hayati)', 'Produsen (tumbuhan hijau), Konsumen (herbivora, karnivora, manusia), Dekomposer (bakteri, jamur)', 'Menggerakkan aliran energi, rantai makanan, dan siklus daur ulang materi organik'],
            ['Komponen Kultural (Sosio-Budaya)', 'Sistem nilai moral, norma adat, ilmu pengetahuan, teknologi, pranata hukum, dan kebijakan tata ruang', 'Menjadi pengarah utama bagaimana manusia berinteraksi, memelihara, atau mengeksploitasi alam sekitarnya']
          ]
        }
      },
      {
        subtitle: '2. Konsep Homeostatis dan Daya Lenting Lingkungan',
        content: 'Ekosistem alami memiliki kemampuan bawaan untuk memulihkan diri kembali menuju kondisi kesetimbangan dinamis pasca-gangguan (resiliensi / daya lenting lingkungan). Mekanisme ini disebut Homeostatis Ekosistem. Namun, jika intervensi manusia (seperti pembuangan racun kimia atau deforestasi total) melampaui batas ambang kritisnya (tipping point), ekosistem akan runtuh (collapse) dan kehilangan fungsinya secara permanen.',
        keyPoints: [
          'Daya Lenting Lingkungan (Resilience): Kemampuan lingkungan hidup untuk pulih kembali ke kondisi seimbang setelah mengalami tekanan atau bencana.',
          'Siklus Biogeokimia: Peredaran unsur-unsur kimia (Karbon, Nitrogen, Fosfor, Air) dari lingkungan abiotik masuk ke dalam tubuh makhluk hidup dan kembali lagi ke lingkungan abiotik.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Empat Siklus Biogeokimia Kunci',
        items: [
          { name: 'Siklus Karbon (C)', description: 'Fotosintesis mengikat CO2 atmosfer menjadi biomassa, respirasi dan pembakaran melepaskannya kembali.' },
          { name: 'Siklus Nitrogen (N)', description: 'Fiksasi bakteri akar legum (Rhizobium) mengubah N2 udara menjadi nitrat/amonium yang diserap tanaman.' },
          { name: 'Siklus Fosfor (P)', description: 'Pelapukan batuan fosfat melepaskan mineral fosfor ke tanah dan rantai makanan tanpa fase gas.' },
          { name: 'Siklus Air (Hidrologi)', description: 'Evaporasi, kondensasi, presipitasi, dan infiltrasi menjaga ketersediaan air tawar global.' }
        ]
      }
    ],
    processes: [
      { stage: 'Fiksasi Energi Surya', title: 'Produksi Primer Bersih', description: 'Klorofil daun menyerap foton matahari mengonversi air dan CO2 menjadi glukosa.' },
      { stage: 'Transfer Trofik Konsumen', title: 'Hukum Efisiensi 10%', description: 'Hanya sekitar 10% energi kimia yang berhasil diteruskan dari satu tingkat trofik ke tingkat trofik berikutnya.' },
      { stage: 'Mineralisasi Dekomposer', title: 'Pengembalian Unsur Hara', description: 'Jamur dan mikroba menguraikan sisa organisme mati melepaskan fosfat dan amonium ke tanah.' }
    ],
    caseStudies: [
      {
        title: 'Keseimbangan Ekologis Tradisi Hutan Adat Baduy Dalam',
        location: 'Kabupaten Lebak, Banten, Indonesia',
        description: 'Masyarakat adat Kanekes (Baduy Dalam) memegang teguh pikukuh adat "Gunung teu meunang dilebur, lebak teu meunang dirusak" (Gunung tidak boleh dihancurkan, lembah tidak boleh dirusak). Mereka melarang penggunaan bahan kimia sintetis, traktor, dan sabun kimiawi di sungai, menjaga Hutan Larangan mereka tetap perawan sehingga DAS Ciujung hulu bebas banjir dan airnya tetap jernih alami.',
        takeaway: 'Kearifan kultural manusia adalah benteng pertahanan ekosistem yang paling efektif.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Aliran Energi dan Siklus Biogeokimia dalam Ekosistem Terpadu',
        caption: 'Bagan terintegrasi aliran energi matahari satu arah dan daur ulang materi biogeokimiawi siklis.',
        badge: 'Ecological Systems'
      }
    ],
    terminology: [
      { term: 'Homeostatis Ekosistem', definition: 'Kemampuan alami suatu sistem ekologi untuk menjaga keseimbangan dinamis internalnya di tengah fluktuasi dan gangguan lingkungan.', scientificTerm: 'Ecosystem Homeostasis' },
      { term: 'Daya Lenting Lingkungan', definition: 'Kapasitas ekosistem untuk menyerap gangguan dan melakukan reorganisasi diri sehingga tetap mempertahankan fungsi dasarnya.', scientificTerm: 'Ecological Resilience' },
      { term: 'Siklus Biogeokimia', definition: 'Jalur peredaran unsur atau senyawa kimia organik dan anorganik yang melintasi komponen biotik dan abiotik biosfer bumi.', scientificTerm: 'Biogeochemical Cycle' }
    ],
    summary: [
      'Lingkungan hidup adalah kesatuan ruang yang memadukan komponen abiotik, biotik, dan sosio-kultural manusia.',
      'Energi mengalir searah dari matahari melintasi jaring makanan; materi berputar dalam siklus biogeokimia.',
      'Homeostatis menjaga keseimbangan ekosistem sepanjang gangguan tidak melampaui ambang batas daya lentingnya.'
    ],
    quiz: [
      {
        id: 'q62-1',
        question: 'Kemampuan alami suatu ekosistem lingkungan hidup untuk mempertahankan keseimbangan dinamisnya dan pulih kembali setelah mengalami gangguan atau bencana disebut...',
        options: ['Daya dukung lingkungan', 'Daya lenting (resiliensi) lingkungan', 'Degradasi lingkungan', 'Suksesi primer'],
        correctAnswer: 1,
        explanation: 'Daya lenting lingkungan (resiliensi) adalah kapasitas ekosistem untuk menyerap tekanan atau gangguan dan kembali pulih menuju kesetimbangan alami.'
      },
      {
        id: 'q62-2',
        question: 'Siklus daur ulang materi unsur kimia (seperti karbon, nitrogen, dan fosfor) yang berpindah secara berkesinambungan antara makhluk hidup dan lingkungan fisiknya disebut...',
        options: ['Siklus geomorfik', 'Siklus biogeokimia', 'Siklus batuan petrologi', 'Siklus tektonik'],
        correctAnswer: 1,
        explanation: 'Siklus biogeokimia adalah peredaran unsur-unsur kimiawi antara komponen hayati (bio), litosfer/atmosfer (geo), dan reaksi kimia (kimia).'
      }
    ],
    references: ['Undang-Undang Republik Indonesia Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup.', 'Miller, G. T., & Spoolman, S. (2018). Living in the Environment. Cengage Learning.'],
    relatedTopicIds: ['pencemaran-lingkungan', 'kerusakan-lingkungan', 'daya-dukung-dan-daya-tampung-lingkungan', 'pembangunan-berkelanjutan']
  },
  {
    id: 'pencemaran-lingkungan',
    number: 63,
    title: 'Pencemaran Lingkungan',
    englishTitle: 'Environmental Pollution: Air, Water, Soil, and Noise',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Menganalisis pencemaran lingkungan menurut UU 32/2009: Pencemaran Air (BOD, COD, DO, logam berat merkuri Minamata), Pencemaran Udara (ISPU, partikulat PM2.5, hujan asam), Pencemaran Tanah (pestisida kimia, sampah mikroplastik), dan Pencemaran Suara bising.',
    keywords: ['pencemaran air bod cod', 'pencemaran udara pm25', 'hujan asam acid rain', 'pencemaran tanah plastik', 'ispu indeks standar pencemar udara'],
    learningObjectives: [
      'Menjelaskan definisi pencemaran lingkungan hidup dan baku mutu lingkungan.',
      'Membedakan parameter kualitas air: Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD), dan Dissolved Oxygen (DO).',
      'Menganalisis proses terjadinya fenomena hujan asam (acid rain) dan dampak partikulat halus PM2.5 terhadap kesehatan pernapasan manusia.'
    ],
    introduction: 'Pencemaran Lingkungan Hidup adalah masuk atau dimasukkannya makhluk hidup, zat, energi, dan/atau komponen lain ke dalam lingkungan hidup oleh kegiatan manusia sehingga melampaui baku mutu lingkungan hidup yang telah ditetapkan (UU No. 32/2009). Ketika zat pencemar (polutan) melampaui konsentrasi ambang batas alami, sistem lingkungan kehilangan kemampuan asimilasinya. Pencemaran menyerang empat matra utama: air, udara, tanah, dan kebisingan akustik perkotaan.',
    sections: [
      {
        subtitle: '1. Pencemaran Air dan Parameter Kualitas Air',
        content: 'Kualitas air limbah diuji melalui tiga parameter kimia biologis utama:',
        table: {
          headers: ['Parameter Air', 'Kepanjangan & Definisi Ilmiah', 'Arti Nilai bagi Kualitas Perairan'],
          rows: [
            ['DO (Dissolved Oxygen)', 'Oksigen Terlarut: jumlah miligram gas oksigen bebas yang terlarut di dalam 1 liter air (mg/L)', 'Air bersih sehat memiliki DO tinggi (> 6 mg/L); jika DO anjlok mendekati 0 mg/L ikan mati masal'],
            ['BOD (Biochemical Oxygen Demand)', 'Kebutuhan Oksigen Biokimia: jumlah oksigen yang dibutuhkan bakteri mikroorganisme untuk menguraikan bahan organik di air selama 5 hari pada suhu 20°C', 'Semakin tinggi nilai BOD, semakin parah tingkat pencemaran bahan organik limbah perairan'],
            ['COD (Chemical Oxygen Demand)', 'Kebutuhan Oksigen Kimiawi: jumlah oksigen yang dibutuhkan untuk mengoksidasi total seluruh bahan organik secara kimiawi menggunakan oksidator kuat', 'Nilai COD selalu lebih besar daripada BOD; mencerminkan limbah kimia industri yang sukar diurai bakteri'],
            ['Bioakumulasi Logam Berat', 'Penumpukan zat kimia beracun (Merkuri Hg, Timbal Pb, Kadmium Cd) pada jaringan tubuh ikan predator', 'Memperbesar konsentrasi racun pada puncak rantai makanan (Biomagnifikasi), memicu penyakit neurologis saraf']
          ]
        }
      },
      {
        subtitle: '2. Pencemaran Udara dan Fenomena Hujan Asam (Acid Rain)',
        content: 'Gas buang cerobong industri dan kendaraan bermotor melepaskan Sulfur Dioksida (SO2) dan Nitrogen Oksida (NOx). Di atmosfer, gas ini bereaksi dengan uap air hujan membentuk Asam Sulfat (H2SO4) dan Asam Nitrat (HNO3). Air hujan yang jatuh memiliki derajat keasaman ekstrem (pH < 5,6) yang disebut Hujan Asam (Acid Rain).',
        keyPoints: [
          'Dampak Hujan Asam: Merusak kutikula daun pohon hutan hingga gundul kering, melarutkan logam berat beracun aluminium di dalam tanah, mematikan ikan di danau, dan mengikis bangunan candi batu serta jembatan besi.',
          'Partikulat PM2.5: Partikel debu polusi berukuran mikroskopis (< 2,5 mikron) yang mampu menembus masker biasa dan masuk langsung ke alveolus paru-paru hingga aliran darah, memicu kanker paru dan penyakit jantung koroner.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Zat Pencemar (Polutan)',
        items: [
          { name: 'Polutan Kimiawi', description: 'Logam berat (merkuri, timbal), tumpahan minyak mentah, senyawa pestisida klorin, gas beracun CO/SO2.' },
          { name: 'Polutan Fisik', description: 'Limbah sampah plastik padat, botol kaca, serbuk debu partikulat, limbah radioaktif, air panas buangan PLTU.' },
          { name: 'Polutan Biologis', description: 'Bakteri patogen Escherichia coli dan Salmonella dari rembesan tangki septik yang mencemari air sumur gali.' }
        ]
      }
    ],
    processes: [
      { stage: 'Emisi Sumber Polutan', title: 'Pelepasan Gas SO2 & NOx', description: 'Pembangkit listrik batubara membakar bahan bakar fosil melepas gas sulfur ke troposfer.' },
      { stage: 'Reaksi Fotokimia Udara', title: 'Oksidasi Menjadi Asam Kuat', description: 'Sinar matahari mengatalisis SO2 bereaksi dengan hidroksil dan air membentuk kabut H2SO4.' },
      { stage: 'Presipitasi Asam', title: 'Pencucian Lingkungan Asam', description: 'Hujan asam mengguyur daratan mengasamkan danau dan mematikan mikroflora tanah.' }
    ],
    caseStudies: [
      {
        title: 'Tragedi Teluk Buyat: Kontroversi Pencemaran Limbah Tailing Merkuri dan Arsenik',
        location: 'Kabupaten Minahasa Selatan, Sulawesi Utara, Indonesia',
        description: 'Pembuangan tailing tambang emas bawah laut (submarine tailings disposal) di Teluk Buyat memicu keluhan kesehatan berat pada warga nelayan lokal berupa benjolan kulit, kram saraf, dan pembengkakan persendian. Analisis membuktikan konsentrasi logam berat merkuri dan arsenik terakumulasi dalam biota bentik dasar laut dan ikan konsumsi warga setempat.',
        takeaway: 'Pembuangan limbah industri beracun ke laut tanpa penetralan mengancam kesehatan generasi manusia.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Mekanisme Terjadinya Hujan Asam dan Penurunan Nilai DO Akibat Limbah Organik',
        caption: 'Bagan reaksi emisi SO2/NOx menjadi hujan asam dan kurva defisit oksigen terlarut (Oxygen Sag Curve) di sungai tercemar.',
        badge: 'Pollution Dynamics'
      }
    ],
    terminology: [
      { term: 'BOD (Biochemical Oxygen Demand)', definition: 'Ukuran jumlah oksigen terlarut yang dibutuhkan mikroorganisme untuk memecah bahan organik dalam air selama periode 5 hari pada suhu 20°C.', scientificTerm: 'Biochemical Oxygen Demand' },
      { term: 'Biomagnifikasi', definition: 'Proses pelipatgandaan konsentrasi zat beracun (seperti merkuri atau pestisida DDT) pada setiap tingkatan trofik rantai makanan.', scientificTerm: 'Biomagnification' },
      { term: 'ISPU', definition: 'Indeks Standar Pencemar Udara: angka tanpa satuan yang digunakan untuk menggambarkan kondisi mutu udara ambien di lokasi tertentu kepada publik.', scientificTerm: 'Air Pollutant Index' }
    ],
    summary: [
      'Pencemaran lingkungan terjadi saat polutan masuk melampaui baku mutu daya tampung lingkungan.',
      'Kualitas air diukur melalui DO (oksigen terlarut tinggi = sehat) serta BOD dan COD (tinggi = tercemar berat).',
      'Hujan asam (pH < 5,6) dipicu oleh reaksi gas buang SO2 dan NOx dengan uap air atmosfer.'
    ],
    quiz: [
      {
        id: 'q63-1',
        question: 'Sebuah sampel air sungai diuji di laboratorium dan menunjukkan nilai Biochemical Oxygen Demand (BOD) yang sangat tinggi sementara nilai Dissolved Oxygen (DO) mendekati nol. Kondisi ini mengindikasikan bahwa perairan tersebut...',
        options: [
          'Sangat bersih dan kaya akan oksigen segar',
          'Mengalami pencemaran berat oleh bahan organik yang membusuk',
          'Sangat cocok untuk tempat bertelur ikan salmon',
          'Mengalami pendinginan suhu air secara ekstrem'
        ],
        correctAnswer: 1,
        explanation: 'Nilai BOD yang tinggi berarti bakteri pengurai membutuhkan sangat banyak oksigen untuk mencerna tumpukan limbah organik, sehingga menghabiskan cadangan oksigen terlarut (DO).'
      },
      {
        id: 'q63-2',
        question: 'Gas polutan udara utama yang dihasilkan dari pembakaran batubara di PLTU dan industri peleburan logam yang menjadi penyebab utama terjadinya fenomena hujan asam adalah...',
        options: ['Oksigen (O2)', 'Sulfur Dioksida (SO2) dan Nitrogen Oksida (NOx)', 'Argon murni', 'Helium cair'],
        correctAnswer: 1,
        explanation: 'Gas belerang (SO2) dan nitrogen oksida (NOx) bereaksi dengan uap air hujan di awan membentuk asam sulfat (H2SO4) dan asam nitrat (HNO3) yang memicu hujan asam.'
      }
    ],
    references: ['Masters, G. M., & Ela, W. P. (2008). Introduction to Environmental Engineering and Science. Prentice Hall.', 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK). Laporan Kualitas Lingkungan Hidup Indonesia.'],
    relatedTopicIds: ['lingkungan-hidup-dan-ekosistem', 'kerusakan-lingkungan', 'analisis-mengenai-dampak-lingkungan-amdal', 'proses-terjadinya-hujan']
  },
  {
    id: 'kerusakan-lingkungan',
    number: 64,
    title: 'Kerusakan Lingkungan',
    englishTitle: 'Environmental Degradation: Deforestation, Desertification, and Coastal Abrasion',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Menganalisis bentuk-bentuk kerusakan lingkungan global dan nasional: Deforestasi hutan tropis, Desertifikasi lahan kering, Lahan Kritis (Critical Land), Salinisasi tanah pertanian, Abrasi pantai pesisir, serta penambangan terbuka liar (illegal mining).',
    keywords: ['kerusakan lingkungan', 'deforestasi hutan', 'lahan kritis', 'desertifikasi', 'abrasi pantai', 'salinisasi tanah'],
    learningObjectives: [
      'Menjelaskan definisi kerusakan lingkungan sebagai kemunduran fungsi ekologis permukaan bumi.',
      'Menganalisis penyebab utama deforestasi di Indonesia (perkebunan monokultur, kebakaran hutan, tambang terbuka).',
      'Mengidentifikasi proses pembentukan lahan kritis dan teknik pemulihannya melalui restorasi lahan.'
    ],
    introduction: 'Kerusakan Lingkungan Hidup adalah perubahan langsung dan/atau tidak langsung terhadap sifat fisik, kimia, dan/atau hayati lingkungan hidup yang melampaui kriteria baku kerusakan lingkungan hidup (UU No. 32/2009). Jika pencemaran lebih ditekankan pada masuknya zat asing beracun ke dalam media air dan udara, maka kerusakan lingkungan berfokus pada rusaknya struktur fisik bentang alam, hilangnya tutupan kanopi vegetasi, hilangnya lapisan tanah subur, serta lenyapnya fungsi penyangga hidrologis daratan.',
    sections: [
      {
        subtitle: '1. Bentuk-Bentuk Utama Kerusakan Lingkungan di Indonesia',
        content: 'Berbagai aktivitas ekstraktif manusia memicu rantai degradasi bentang lahan:',
        table: {
          headers: ['Bentuk Kerusakan', 'Aktivitas Pemicu Utama', 'Dampak Kerusakan Lingkungan Langsung', 'Contoh Kasus Lapangan'],
          rows: [
            ['Deforestasi Hutan Tropis', 'Pembalakan liar (illegal logging), pembukaan perkebunan sawit monokultur skala besar, kebakaran hutan gambut disengaja', 'Hilangnya habitat satwa terancam punah (orangutan/harimau), erosi tanah dahsyat, pelepasan triliunan ton cadangan emisi karbon ke atmosfer', 'Penggundulan hutan dataran rendah di Riau, Jambi, dan Kalimantan Barat'],
            ['Lahan Kritis (Critical Land)', 'Erosi parit yang menelanjangi topsoil akibat pertanian lereng curam tanpa terasering dan bekas tambang', 'Tanah kehilangan kesuburan alaminya secara permanen; solum tanah sangat tipis dan berbatu, tidak dapat ditanami tanaman pangan', 'Kawasan lahan kritis di sekitar Danau Toba, Pegunungan Kendeng, dan lereng Gunung Batur'],
            ['Abrasi Pantai Pesisir', 'Penebangan sabuk hijau hutan bakau mangrove untuk tambak udang intensif dan pengambilan pasir laut', 'Gelombang laut menghantam langsung garis pantai; pemukiman pesisir roboh tergerus ombak dan hilangnya daratan pulau', 'Abrasi parah di pesisir Sayung (Demak) dan pesisir utara Karawang Jawa Barat'],
            ['Desertifikasi', 'Penggembalaan ternak berlebihan (overgrazing) dan kekeringan berkepanjangan di kawasan semi-arid', 'Tanah subur berubah menjadi gurun pasir tandus yang tandus gersang', 'Kawasan semi-arid di Afrika Sahel dan tepi Gurun Gobi Tiongkok'],
            ['Kerusakan Lubang Bekas Tambang', 'Penambangan batubara dan emas terbuka yang ditinggalkan tanpa reklamasi revegetasi', 'Ribuan danau lubang tambang beracun berair asam (pH < 3) yang merenggut nyawa anak-anak tenggelam dan mencemari akuifer', 'Lubang tambang batubara terbengkalai di Samarinda dan Kutai Kartanegara']
          ]
        }
      },
      {
        subtitle: '2. Kriteria dan Klasifikasi Lahan Kritis di Indonesia',
        content: 'Kementerian LHK menetapkan klasifikasi tingkat kekritisan lahan berdasarkan 5 parameter:',
        keyPoints: [
          'Parameter Evaluasi: Persentase penutupan vegetasi (%), tingkat kemiringan lereng (%), tingkat bahaya erosi (TBE), kedalaman solum tanah efektif (cm), dan manajemen pengelolaan lahan.',
          'Klasifikasi Kekritisan Lahan: Sangat Kritis, Kritis, Agak Kritis, Potensial Kritis, dan Tidak Kritis.',
          'Bahaya Hilangnya Topsoil: Dibutuhkan waktu 100 hingga 400 tahun bagi alam untuk membentuk 1 sentimeter lapisan topsoil subur, namun dapat lenyap terkikis erosi hanya dalam 1 jam hujan badai di lahan gundul.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Sumber Kerusakan Lingkungan',
        items: [
          { name: 'Faktor Alami (Natural Hazards)', description: 'Letusan gunung api yang menimbun abu, tsunami yang mengikis pantai, gempa bumi yang meretakkan bukit.' },
          { name: 'Faktor Antropogenik (Ulah Manusia)', description: 'Deforestasi, pertambangan liar, pembakaran lahan gambut, urbanisasi sempadan sungai, penangkapan ikan dengan sianida/bom.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pembukaan Kanopi Hutan', title: 'Penebangan Vegetasi Primer', description: 'Pohon pelindung ditebang, sinar matahari langsung membakar lapisan humus dan mengeringkan tanah.' },
      { stage: 'Pencucian Erosi Masif', title: 'Hanyutnya Lapisan Topsoil', description: 'Hujan deras menghanyutkan seluruh partikel humus dan lempung menyisakan batuan induk keras.' },
      { stage: 'Degradasi Permanen', title: 'Terbentuknya Lahan Kritis', description: 'Tanah menjadi tandus dan gersang, kapasitas infiltrasi nol memicu banjir bandang kilat.' }
    ],
    caseStudies: [
      {
        title: 'Tenggelamnya Kampung Sriwulan Demak Akibat Abrasi dan Hilangnya Hutan Mangrove',
        location: 'Kecamatan Sayung, Kabupaten Demak, Jawa Tengah, Indonesia',
        description: 'Pembabatan ribuan hektar hutan mangrove pesisir Pantura Demak pada era 1990-an untuk tambang udang memicu malapetaka abrasi laut terparah di Pulau Jawa. Tanpa benteng akar bakau, gelombang Laut Jawa merangsek masuk mengikis daratan sejauh lebih dari 5 kilometer, menenggelamkan dua pedukuhan (Dusun Bedono dan Sriwulan) secara permanen dan memaksa ribuan warga mengungsi.',
        takeaway: 'Menghancurkan benteng alami vegetasi pesisir mendatangkan kehancuran teritorial ruang hidup.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Siklus Kerusakan Lingkungan: Dari Deforestasi Menuju Lahan Kritis dan Banjir Hilir',
        caption: 'Bagan berantai hilangnya kanopi hutan → erosi tanah parit → pendangkalan waduk → banjir bandang.',
        badge: 'Land Degradation'
      }
    ],
    terminology: [
      { term: 'Lahan Kritis', definition: 'Lahan yang telah mengalami kerusakan fisik, kimia, dan biologi sedemikian rupa sehingga kehilangan fungsinya sebagai media produksi maupun tata air.', scientificTerm: 'Degraded / Critical Land' },
      { term: 'Desertifikasi', definition: 'Proses degradasi lahan di kawasan kering (arid/semi-arid) yang menyebabkan lahan subur berubah menjadi bentang padang gurun gersang.', scientificTerm: 'Desertification' },
      { term: 'Deforestasi', definition: 'Konversi permanen tutupan hutan alam menjadi penggunaan lahan lain yang tidak berhutan (perkebunan, permukiman, pertambangan).', scientificTerm: 'Deforestation' }
    ],
    summary: [
      'Kerusakan lingkungan melibatkan kemunduran struktur fisik bentang alam dan hilangnya tutupan kanopi vegetasi.',
      'Deforestasi hutan hujan memicu kepunahan keanekaragaman hayati dan pelepasan gas rumah kaca.',
      'Lahan kritis dan abrasi pantai adalah contoh nyata kerusakan bentang lahan akibat kelalaian pemanfaatan ruang.'
    ],
    quiz: [
      {
        id: 'q64-1',
        question: 'Lahan yang telah mengalami kerusakan sedemikian rupa akibat erosi tanah yang parah sehingga kehilangan fungsi kesuburan dan fungsi hidrologis tata airnya disebut...',
        options: ['Lahan gambut lebak', 'Lahan kritis', 'Lahan aluvial pasang surut', 'Lahan konservasi'],
        correctAnswer: 1,
        explanation: 'Lahan kritis adalah lahan yang telah mengalami kerusakan fisik, kimia, dan biologis parah sehingga tidak mampu lagi berfungsi sebagai media produksi maupun pengatur air.'
      },
      {
        id: 'q64-2',
        question: 'Pengikisan daratan garis pantai oleh hantaman energi gelombang laut dan pasang surut yang diperparah oleh rusaknya hutan bakau (mangrove) disebut...',
        options: ['Deflasi', 'Abrasi pantai', 'Eksarasi glasial', 'Erosi lembar'],
        correctAnswer: 1,
        explanation: 'Abrasi pantai adalah pengikisan garis daratan pantai oleh gaya hantam gelombang laut yang terjadi sangat parah ketika sabuk hijau pelindung mangrove dihancurkan.'
      }
    ],
    references: ['Kementerian Lingkungan Hidup dan Kehutanan (KLHK). (2021). Peta Lahan Kritis Nasional.', 'Lal, R. (2015). Restoring Soil Quality to Mitigate Soil Degradation. Sustainability.'],
    relatedTopicIds: ['lingkungan-hidup-dan-ekosistem', 'pencemaran-lingkungan', 'daya-dukung-dan-daya-tampung-lingkungan', 'erosi']
  },
  {
    id: 'daya-dukung-dan-daya-tampung-lingkungan',
    number: 65,
    title: 'Daya Dukung dan Daya Tampung Lingkungan',
    englishTitle: 'Carrying Capacity and Assimilative Capacity of the Environment',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Menelaah konsep batas ekologis: Daya Dukung Lingkungan Hidup / DDLH (Carrying Capacity: kemampuan mendukung perikehidupan manusia dan makhluk lain) vs Daya Tampung Lingkungan Hidup / DTLH (Assimilative Capacity: kemampuan menyerap beban polusi tanpa menjadi rusak), Jejak Ekologis (Ecological Footprint), dan Biokapasitas.',
    keywords: ['daya dukung lingkungan ddlh', 'daya tampung lingkungan dtlh', 'carrying capacity', 'jejak ekologis ecological footprint', 'biokapasitas', 'overshoot day'],
    learningObjectives: [
      'Membedakan definisi Daya Dukung Lingkungan Hidup (DDLH) dan Daya Tampung Lingkungan Hidup (DTLH) menurut UU 32/2009.',
      'Menganalisis konsep Jejak Ekologis (Ecological Footprint) versus Biokapasitas bumi.',
      'Menerapkan perhitungan status daya dukung air dan lahan pangan dalam penyusunan tata ruang wilayah.'
    ],
    introduction: 'Planet bumi memiliki batas-batas biofisik alami yang tegas (planetary boundaries). Segala aktivitas manusia membutuhkan pasokan sumber daya dari alam (pangan, air, serat kayu, ruang hunian) dan menghasilkan limbah yang harus diserap kembali oleh biosfer. Dua konsep fundamental dalam perencanaan ruang geografi lingkungan adalah Daya Dukung Lingkungan Hidup (Carrying Capacity) dan Daya Tampung Lingkungan Hidup (Assimilative Capacity). Melampaui batas ini berarti meminjam masa depan generasi mendatang (ecological debt).',
    sections: [
      {
        subtitle: '1. Perbedaan Mendasar DDLH dan DTLH (UU No. 32/2009)',
        content: 'Kedua konsep ini menjadi rambu hukum mutlak dalam penataan ruang wilayah (RTRW):',
        table: {
          headers: ['Istilah Konseptual', 'Definisi Yuridis Ilmiah UU No. 32/2009', 'Fokus Kajian Pokok', 'Indikator Ambang Batas'],
          rows: [
            ['Daya Dukung Lingkungan Hidup (DDLH)', 'Kemampuan lingkungan hidup untuk mendukung perikehidupan manusia, makhluk hidup lain, dan keseimbangan antarkeduanya', 'Ketersediaan pasokan sumber daya esensial: air bersih, lahan pangan, udara bersih, dan ruang hidup', 'Rasio ketersediaan air (water availability) vs kebutuhan air; rasio ketersediaan beras vs konsumsi beras'],
            ['Daya Tampung Lingkungan Hidup (DTLH)', 'Kemampuan lingkungan hidup untuk menyerap zat, energi, dan/atau komponen lain yang masuk atau dimasukkan ke dalamnya', 'Kapasitas asimilasi alami lingkungan untuk mengencerkan, menguraikan, dan menetralkan beban limbah pencemaran tanpa menjadi rusak', 'Beban alokasi pencemaran maksimum sungai (Total Maximum Daily Load / TMDL) sebelum kadar DO turun di bawah baku mutu']
          ]
        }
      },
      {
        subtitle: '2. Jejak Ekologis (Ecological Footprint) vs Biokapasitas',
        content: 'Mathis Wackernagel mengembangkan indikator Jejak Ekologis untuk mengukur dampak konsumsi manusia:',
        keyPoints: [
          'Jejak Ekologis (Ecological Footprint): Luas total daratan dan perairan produktif biologis yang dibutuhkan untuk memproduksi seluruh sumber daya yang dikonsumsi manusia dan menyerap seluruh limbah yang dihasilkannya (satuan Global Hectare / gha per kapita).',
          'Biokapasitas (Biocapacity): Kapasitas produktif biologis alami yang tersedia di suatu wilayah untuk memperbarui sumber daya dan menyerap limbah.',
          'Earth Overshoot Day: Tanggal kalender tahunan di mana konsumsi manusia telah melampaui seluruh kemampuan regenerasi ekologis bumi untuk tahun tersebut. Sejak tahun 1970-an, bumi berada dalam status defisit ekologis (saat ini manusia mengonsumsi setara 1,75 planet bumi).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Pendekatan Analisis DDLH Kementerian LHK',
        items: [
          { name: 'DDLH Berbasis Ketersediaan Air', description: 'Membandingkan total potensi pasokan air permukaan dan air tanah dengan total kebutuhan air penduduk, industri, dan irigasi.' },
          { name: 'DDLH Berbasis Pangan (Beras)', description: 'Membandingkan luas lahan sawah produktif dan produktivitas padi dengan jumlah penduduk yang harus diberi makan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Perhitungan Pasokan Alami', title: 'Inventarisasi Biokapasitas', description: 'Menghitung debit andalan air sungai dan luas sawah irigasi teknis di suatu kabupaten.' },
      { stage: 'Perhitungan Konsumsi Penduduk', title: 'Estimasi Beban Kebutuhan', description: 'Mengalikan jumlah penduduk dengan standar kebutuhan air per orang (120 liter/hari) dan konsumsi beras.' },
      { stage: 'Penentuan Status Spasial', title: 'Status Surplus atau Defisit', description: 'Jika Pasokan > Kebutuhan = Surplus DDLH; jika Pasokan < Kebutuhan = Defisit DDLH (Wajib moratorium izin pabrik baru).' }
    ],
    caseStudies: [
      {
        title: 'Analisis Status Daya Dukung Air Pulau Jawa: Menuju Titik Defisit Permanen',
        location: 'Pulau Jawa, Indonesia',
        description: 'Kajian Daya Dukung Lingkungan Hidup yang disusun Kementerian LHK menunjukkan bahwa sebagian besar wilayah perkotaan di Pulau Jawa (Jabodetabek, Bandung Raya, Semarang, Gerbangkertosusila Surabaya) telah berstatus "Defisit Air Merah". Kebutuhan air penduduk perkotaan dan industri melebihi pasokan air permukaan yang tersedia, memaksa penyedotan akuifer air tanah dalam yang merusak lingkungan.',
        takeaway: 'Penataan ruang yang melampaui daya dukung air akan memicu konflik sosial dan bencana krisis air.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Kurva Keseimbangan Daya Dukung Lingkungan (Carrying Capacity K-Limit)',
        caption: 'Grafik logistik pertumbuhan populasi yang stabil di garis Carrying Capacity (K) versus overshoot keruntuhan ekologis.',
        badge: 'Carrying Capacity Dynamics'
      }
    ],
    terminology: [
      { term: 'Daya Dukung Lingkungan (DDLH)', definition: 'Kemampuan lingkungan hidup untuk menopang kehidupan manusia dan makhluk lain secara berkelanjutan melalui penyediaan sumber daya alam.', scientificTerm: 'Carrying Capacity' },
      { term: 'Daya Tampung Lingkungan (DTLH)', definition: 'Kemampuan lingkungan hidup untuk menyerap dan mengasimilasi beban polutan atau limbah tanpa mengalami kerusakan fungsi ekosistem.', scientificTerm: 'Assimilative Capacity' },
      { term: 'Jejak Ekologis', definition: 'Ukuran luasan area biologis produktif yang diperlukan untuk menopang gaya hidup dan konsumsi sumber daya suatu populasi manusia.', scientificTerm: 'Ecological Footprint' }
    ],
    summary: [
      'DDLH mengukur kemampuan alam menyediakan sumber daya pangan dan air untuk menopang populasi.',
      'DTLH mengukur kemampuan alam mengasimilasi dan menyerap beban polusi limbah tanpa menjadi rusak.',
      'Jejak Ekologis manusia saat ini telah melampaui Biokapasitas bumi (overshoot), menciptakan krisis ekologis global.'
    ],
    quiz: [
      {
        id: 'q65-1',
        question: 'Kemampuan lingkungan hidup untuk menyerap zat buangan limbah atau energi pencemar yang dimasukkan ke dalamnya tanpa menyebabkan kerusakan fungsi ekosistem disebut...',
        options: [
          'Daya dukung lingkungan hidup (DDLH)',
          'Daya tampung lingkungan hidup (DTLH)',
          'Jejak ekologis per kapita',
          'Biokapasitas hutan'
        ],
        correctAnswer: 1,
        explanation: 'Daya Tampung Lingkungan Hidup (DTLH) secara spesifik mengacu pada kemampuan lingkungan menyerap dan mengasimilasi zat pencemar/limbah.'
      },
      {
        id: 'q65-2',
        question: 'Ukuran luasan daratan dan perairan produktif biologis yang dibutuhkan untuk memproduksi seluruh sumber daya yang dikonsumsi dan menyerap limbah manusia dinamakan...',
        options: ['Bioma terestrial', 'Jejak Ekologis (Ecological Footprint)', 'Rasio ketergantungan', 'Indeks moran'],
        correctAnswer: 1,
        explanation: 'Jejak Ekologis (Ecological Footprint) mengukur luasan area bioproduktif bumi yang dibutuhkan untuk menopang konsumsi sumber daya dan penyerapan limbah suatu populasi.'
      }
    ],
    references: ['Wackernagel, M., & Rees, W. (1998). Our Ecological Footprint: Reducing Human Impact on the Earth. New Society Publishers.', 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK). Pedoman Penentuan Daya Dukung dan Daya Tampung Lingkungan Hidup Daerah.'],
    relatedTopicIds: ['lingkungan-hidup-dan-ekosistem', 'pembangunan-berkelanjutan', 'kerusakan-lingkungan', 'rencana-tata-ruang-wilayah-rtrw']
  },
  {
    id: 'pembangunan-berkelanjutan',
    number: 66,
    title: 'Pembangunan Berkelanjutan',
    englishTitle: 'Sustainable Development: Paradigms, Principles, and Trajectories',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Menelaah doktrin pembangunan berkelanjutan (sustainable development): Laporan Brundtland 1987 "Our Common Future", integrasi 3 pilar utama (pertumbuhan ekonomi, keberlanjutan ekologi, keadilan sosial inklusif), keadilan antargenerasi (intergenerational equity), dan ekonomi hijau (green economy).',
    keywords: ['pembangunan berkelanjutan', 'sustainable development', 'laporan brundtland our common future', 'keadilan antargenerasi', 'ekonomi hijau green economy'],
    learningObjectives: [
      'Menjelaskan definisi baku pembangunan berkelanjutan menurut Komisi Brundtland PBB (1987).',
      'Menganalisis keterkaitan tiga pilar utama pembangunan berkelanjutan (sosial, ekonomi, dan lingkungan).',
      'Memahami prinsip keadilan antargenerasi (intergenerational equity) dan keadilan intragenerasi dalam pemanfaatan ruang bumi.'
    ],
    introduction: 'Pembangunan Berkelanjutan (Sustainable Development) adalah paradigma pembangunan global yang dirumuskan oleh Komisi Dunia untuk Lingkungan dan Pembangunan PBB (World Commission on Environment and Development / WCED) dalam laporan bersejarah "Our Common Future" pada tahun 1987. Doktrin ini mendefinisikan pembangunan berkelanjutan sebagai "pembangunan yang memenuhi kebutuhan generasi masa kini tanpa mengorbankan hak dan kemampuan generasi masa depan untuk memenuhi kebutuhan mereka sendiri". Paradigma ini menolak doktrin lama yang menganggap degradasi alam sebagai ongkos lumrah kemajuan ekonomi.',
    sections: [
      {
        subtitle: '1. Tiga Pilar Utama Pembangunan Berkelanjutan (The Three Pillars)',
        content: 'Pembangunan berkelanjutan berada di titik perjumpaan harmonis tiga pilar setara:',
        table: {
          headers: ['Pilar Pembangunan', 'Fokus Dimensi', 'Tuntutan Keseimbangan'],
          rows: [
            ['Pilar Ekonomi (Economic Viability)', 'Peningkatan pendapatan, efisiensi produksi, penciptaan lapangan kerja, inovasi industri', 'Pertumbuhan ekonomi harus hemat sumber daya (decoupling) dan tidak merusak cadangan modal alam'],
            ['Pilar Lingkungan (Environmental Sustainability)', 'Pelestarian keanekaragaman hayati, integritas ekosistem, pengurangan emisi gas rumah kaca', 'Menjaga agar pemanfaatan sumber daya tidak melampaui daya dukung dan daya tampung biosfer'],
            ['Pilar Sosial (Social Equity & Inclusivity)', 'Pengurangan kemiskinan, kesetaraan gender, perlindungan hak adat, akses pendidikan dan kesehatan bermutu', 'Pembangunan harus adil, tidak meminggirkan kelompok rentan, dan menjamin hak-hak asasi manusia']
          ]
        }
      },
      {
        subtitle: '2. Dua Dimensi Keadilan Lingkungan',
        content: 'Pembangunan berkelanjutan menegakkan dua prinsip etika keadilan universal:',
        keyPoints: [
          'Keadilan Antargenerasi (Intergenerational Equity): Setiap generasi di muka bumi berkewajiban mewariskan bumi dalam kondisi yang sama baiknya atau lebih baik kepada anak cucu di masa depan; dilarang menghabiskan minyak, menebang habis hutan, atau mewariskan krisis iklim.',
          'Keadilan Intragenerasi (Intragenerational Equity): Keadilan pemenuhan hak dan akses atas sumber daya alam yang setara di antara sesama generasi manusia saat ini, menuntut pengentasan kemiskinan global dan penutupan jurang ketimpangan antara negara maju dan negara berkembang.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Paradigma Keberlanjutan',
        items: [
          { name: 'Weak Sustainability (Keberlanjutan Lemah)', description: 'Menganggap modal buatan manusia (teknologi, infrastruktur pabrik) dapat menggantikan modal alam (natural capital).' },
          { name: 'Strong Sustainability (Keberlanjutan Kuat)', description: 'Menegaskan bahwa modal alam (lapisan ozon, iklim stabil, keanekaragaman hayati) bersifat mutlak dan tidak dapat digantikan oleh uang atau teknologi buatan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Eksploitasi Linier', title: 'Ekonomi Linier Lama', description: 'Pola konvensional: Ambil dari alam (Take) → Buat produk (Make) → Buang jadi sampah (Waste).' },
      { stage: 'Transisi Hijau', title: 'Penerapan Regulasi Berkelanjutan', description: 'Pajak karbon, kewajiban sertifikasi kelestarian hutan FSC, dan insentif energi bersih.' },
      { stage: 'Ekonomi Sirkular', title: 'Siklus Tertutup Regeneratif', description: 'Model berkelanjutan: Desain ramah lingkungan → Daur ulang materi → Nol limbah ke alam.' }
    ],
    caseStudies: [
      {
        title: 'Kota Hijau Berkelanjutan: Desain Masterplan Ibu Kota Nusantara (IKN)',
        location: 'Kabupaten Penajam Paser Utara, Kalimantan Timur, Indonesia',
        description: 'Pembangunan IKN Nusantara dirancang dengan filosofi "Smart Forest City" yang mengalokasikan 75% wilayahnya sebagai kawasan hijau (hutan tropis dan ruang terbuka hijau). Seluruh listrik dipasok dari energi terbarukan (PLTS dan PLTA), 80% mobilitas didukung transportasi umum listrik, dan gedung-gedung dirancang dengan standar bangunan hijau ramah energi (green building).',
        takeaway: 'Pembangunan kota baru modern wajib menempatkan keberlanjutan ekologis sebagai fondasi utama.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Diagram Venn Tiga Pilar Pembangunan Berkelanjutan: Ekonomi, Sosial, dan Lingkungan',
        caption: 'Diagram irisan tiga lingkaran: Adil (Sosial-Ekonomi), Layak (Ekonomi-Lingkungan), dan Berkelanjutan (Pusat ketiga pilar).',
        badge: 'Sustainability Paradigm'
      }
    ],
    terminology: [
      { term: 'Pembangunan Berkelanjutan', definition: 'Pembangunan yang memenuhi kebutuhan masa kini tanpa mengorbankan pemenuhan kebutuhan generasi masa depan.', scientificTerm: 'Sustainable Development' },
      { term: 'Keadilan Antargenerasi', definition: 'Prinsip etika moral bahwa generasi sekarang berkewajiban mewariskan kualitas lingkungan hidup yang lestari kepada generasi berikutnya.', scientificTerm: 'Intergenerational Equity' },
      { term: 'Ekonomi Hijau (Green Economy)', definition: 'Perekonomian yang menghasilkan peningkatan kesejahteraan manusia seraya menurunkan risiko lingkungan dan kelangkaan ekologis secara signifikan.', scientificTerm: 'Green Economy' }
    ],
    summary: [
      'Pembangunan berkelanjutan dirumuskan oleh Laporan Brundtland 1987 "Our Common Future".',
      'Pembangunan berkelanjutan menyeimbangkan pilar ekonomi, pilar lingkungan, dan pilar keadilan sosial.',
      'Prinsip intinya adalah keadilan antargenerasi dan keadilan intragenerasi.'
    ],
    quiz: [
      {
        id: 'q66-1',
        question: 'Definisi pembangunan berkelanjutan sebagai "pembangunan yang memenuhi kebutuhan generasi masa kini tanpa mengorbankan hak dan kemampuan generasi masa depan untuk memenuhi kebutuhannya" dirumuskan dalam laporan...',
        options: ['Deklarasi Djuanda 1957', 'Laporan Brundtland (Our Common Future) 1987', 'Protokol Kyoto 1997', 'Perjanjian Renville'],
        correctAnswer: 1,
        explanation: 'Laporan Brundtland (Our Common Future) pada tahun 1987 oleh Komisi Dunia untuk Lingkungan dan Pembangunan PBB merumuskan definisi baku pembangunan berkelanjutan.'
      },
      {
        id: 'q66-2',
        question: 'Prinsip etika moral dalam pembangunan berkelanjutan yang menegaskan bahwa generasi saat ini dilarang mengeksploitasi habis minyak bumi dan hutan hingga merugikan anak cucu di masa mendatang dinamakan prinsip...',
        options: ['Keadilan antargenerasi (intergenerational equity)', 'Fisis determinisme', 'Aglomerasi spasial', 'Diferensiasi area'],
        correctAnswer: 0,
        explanation: 'Keadilan antargenerasi adalah kewajiban moral generasi saat ini untuk tidak merusak modal alam yang menjadi hak hidup generasi masa depan.'
      }
    ],
    references: ['WCED. (1987). Our Common Future: Report of the World Commission on Environment and Development. Oxford University Press.', 'Sachs, J. D. (2015). The Age of Sustainable Development. Columbia University Press.'],
    relatedTopicIds: ['sustainable-development-goals-sdgs', 'analisis-mengenai-dampak-lingkungan-amdal', 'lingkungan-hidup-dan-ekosistem', 'daya-dukung-dan-daya-tampung-lingkungan']
  },
  {
    id: 'sustainable-development-goals-sdgs',
    number: 67,
    title: 'Sustainable Development Goals (SDGs)',
    englishTitle: 'The 17 Sustainable Development Goals (SDGs 2030 Agenda)',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Menganalisis 17 Tujuan Pembangunan Berkelanjutan (SDGs / Agenda 2030 PBB): prinsip "No One Left Behind", 4 pilar pembangunan SDGs di Indonesia (Sosial, Ekonomi, Lingkungan, Hukum & Tata Kelola), target indikator iklim dan keanekaragaman hayati.',
    keywords: ['sdgs 17 tujuan', 'agenda 2030 pbb', 'no one left behind', 'tujuan pembangunan berkelanjutan', 'pilar lingkungan sdgs'],
    learningObjectives: [
      'Menyebutkan dan memahami esensi 17 tujuan dalam kerangka Sustainable Development Goals (SDGs).',
      'Menganalisis implementasi 4 pilar SDGs di Indonesia berdasarkan Peraturan Presiden No. 59/2017 dan No. 111/2022.',
      'Menghubungkan SDGs Goal 13 (Climate Action), Goal 14 (Life Below Water), dan Goal 15 (Life on Land) dengan isu geografi lingkungan.'
    ],
    introduction: 'Pada September 2015, 193 kepala negara anggota PBB (termasuk Indonesia) secara bulat mengesahkan resolusi bersejarah "Transforming Our World: The 2030 Agenda for Sustainable Development" yang memuat 17 Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals / SDGs). Menggantikan program Millennium Development Goals (MDGs 2000-2015), SDGs memiliki cakupan yang jauh lebih komprehensif dengan 169 target terukur dan berpegang pada prinsip universal "Leave No One Behind" (Tidak Meninggalkan Satu Orang Pun).',
    sections: [
      {
        subtitle: '1. Struktur 17 Tujuan Pembangunan Berkelanjutan (SDGs)',
        content: 'Tujuh belas tujuan SDGs dikelompokkan ke dalam 5 dimensi utama (5P: People, Planet, Prosperity, Peace, Partnership):',
        table: {
          headers: ['Nomor & Nama Tujuan SDGs', 'Fokus Sasaran Utama Global', 'Kaitan Erat dengan Geografi'],
          rows: [
            ['SDG 1: Tanpa Kemiskinan', 'Menghapus kemiskinan ekstrem di mana pun', 'Geografi kemiskinan dan ketimpangan spasial daerah tertinggal'],
            ['SDG 2: Tanpa Kelaparan', 'Mengakhiri kelaparan, mencapai ketahanan pangan dan gizi', 'Geografi pertanian, lahan sawah, dan kedaulatan pangan'],
            ['SDG 6: Air Bersih & Sanitasi', 'Menjamin ketersediaan air bersih dan sanitasi layak', 'Hidrologi air tanah, konservasi DAS, dan pencegahan pencemaran'],
            ['SDG 7: Energi Bersih & Terjangkau', 'Menjamin akses energi terbarukan yang andal dan modern', 'Transisi energi fosil ke EBT (geotermal, surya, mikrohidro)'],
            ['SDG 11: Kota & Permukiman Berkelanjutan', 'Membangun kota yang inklusif, aman, tangguh, dan ramah lingkungan', 'Geografi perkotaan, penataan ruang, dan penanganan permukiman kumuh'],
            ['SDG 13: Penanganan Perubahan Iklim', 'Mengambil tindakan cepat mengatasi krisis perubahan iklim global', 'Klimatologi, reduksi emisi gas rumah kaca, dan adaptasi banjir rob'],
            ['SDG 14: Ekosistem Lautan', 'Konservasi dan pemanfaatan berkelanjutan samudra dan laut', 'Oseanografi, perlindungan terumbu karang, dan perikanan lestari ZEE'],
            ['SDG 15: Ekosistem Daratan', 'Melindungi, merestorasi, dan mengelola hutan secara lestari', 'Biogeografi hutan hujan tropis, penanggulangan lahan kritis']
          ]
        }
      },
      {
        subtitle: '2. Empat Pilar SDGs di Indonesia (Perpres No. 111/2022)',
        content: 'Bappenas membagi 17 tujuan SDGs ke dalam 4 pilar pembangunan terpadu:',
        keyPoints: [
          'Pilar Pembangunan Sosial: Meliputi SDG 1, 2, 3 (Kesehatan), 4 (Pendidikan), dan 5 (Kesetaraan Gender).',
          'Pilar Pembangunan Ekonomi: Meliputi SDG 7, 8 (Pekerjaan Layak & Pertumbuhan Ekonomi), 9 (Industri, Inovasi & Infrastruktur), 10 (Berkurangnya Kesenjangan), dan 17 (Kemitraan Global).',
          'Pilar Pembangunan Lingkungan: Meliputi SDG 6, 11, 12 (Konsumsi & Produksi Bertanggung Jawab), 13, 14, dan 15.',
          'Pilar Pembangunan Hukum dan Tata Kelola: Meliputi SDG 16 (Perdamaian, Keadilan, dan Kelembagaan yang Tangguh).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Dimensi Inti SDGs (The 3 Dimensions)',
        items: [
          { name: 'Kesejahteraan Sosial (Social Equity)', description: 'Pendidikan bermutu, kesehatan universal, kesetaraan akses kelompok rentan.' },
          { name: 'Keberlanjutan Lingkungan (Ecological Integrity)', description: 'Pelestarian biosfer, aksi iklim, perlindungan hutan dan terumbu karang.' },
          { name: 'Kelayakan Ekonomi (Economic Viability)', description: 'Pekerjaan layak, infrastruktur hijau inovatif, dan pola konsumsi sirkular.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penyelarasan RPJMN', title: 'Integrasi ke Rencana Pembangunan', description: 'Bappenas mengintegrasikan 169 target SDGs ke dalam Rencana Pembangunan Jangka Menengah Nasional.' },
      { stage: 'Aksi Daerah (RAD SDGs)', title: 'Lokalisasi di Tingkat Provinsi', description: 'Pemerintah daerah menyusun Rencana Aksi Daerah untuk mencapai target penurunan stunting dan emisi.' },
      { stage: 'Monitoring & Evaluasi', title: 'Dashboard Satu Data SDGs', description: 'BPS dan Bappenas mempublikasikan data capaian indikator secara transparan dan terbuka.' }
    ],
    caseStudies: [
      {
        title: 'Penerapan SDGs Desa di Indonesia: Mengakar dari Tingkat Komunitas Akar Rumput',
        location: 'Desa Ponggok, Kabupaten Klaten, Jawa Tengah, Indonesia',
        description: 'Kementerian Desa mengadaptasi SDGs global menjadi "SDGs Desa". Desa Ponggok berhasil mengimplementasikan SDG 6 (Air Bersih) dan SDG 8 (Pekerjaan Layak) dengan mengelola mata air alami (Umbul Ponggok) melalui Badan Usaha Milik Desa (BUMDes). Pendapatan desa melonjak hingga belasan miliar rupiah per tahun, menghapus kemiskinan ekstrem di desa tersebut, dan menyediakan beasiswa kuliah bagi seluruh pemuda desa.',
        takeaway: 'Tujuan pembangunan global hanya akan berhasil jika dilokalisasi menjadi aksi nyata di tingkat desa.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Grid Matriks 17 Logo Tujuan Pembangunan Berkelanjutan (SDGs 2030)',
        caption: 'Bagan 17 ikon resmi SDGs PBB: dari Tanpa Kemiskinan (1) hingga Kemitraan untuk Mencapai Tujuan (17).',
        badge: 'SDGs Architecture'
      }
    ],
    terminology: [
      { term: 'SDGs (Sustainable Development Goals)', definition: 'Tujuh belas tujuan pembangunan global yang disepakati oleh negara-negara anggota PBB sebagai cetak biru bersama menuju kemakmuran dan kelestarian planet hingga 2030.', scientificTerm: 'Sustainable Development Goals' },
      { term: 'Leave No One Behind', definition: 'Prinsip moral dasar SDGs yang menjamin bahwa seluruh agenda pembangunan harus menjangkau dan memprioritaskan kelompok paling miskin, rentan, dan terisolasi.', scientificTerm: 'Leave No One Behind (LNOB)' },
      { term: 'Aksi Iklim (Climate Action)', definition: 'SDG Goal 13 yang mewajibkan seluruh negara mengambil tindakan mitigasi dan adaptasi darurat untuk memerangi krisis perubahan iklim global.', scientificTerm: 'Climate Action' }
    ],
    summary: [
      'SDGs terdiri dari 17 tujuan dan 169 target terukur yang berpegang pada prinsip "Leave No One Behind".',
      'Di Indonesia, SDGs dibagi menjadi 4 pilar: Sosial, Ekonomi, Lingkungan, serta Hukum & Tata Kelola.',
      'Isu geografi lingkungan berada pada pilar inti SDGs (SDG 6 Air Bersih, 13 Iklim, 14 Laut, 15 Daratan).'
    ],
    quiz: [
      {
        id: 'q67-1',
        question: 'Prinsip moral universal yang menjadi ruh utama pelaksanaan Sustainable Development Goals (SDGs 2030) adalah...',
        options: [
          'Survival of the fittest',
          'Leave No One Behind (Tidak meninggalkan satu orang pun)',
          'Eksploitasi sumber daya tanpa batas',
          'Pertumbuhan ekonomi di atas segalanya'
        ],
        correctAnswer: 1,
        explanation: 'Prinsip "Leave No One Behind" adalah komitmen mendasar SDGs untuk memastikan bahwa manfaat pembangunan dirasakan oleh seluruh lapisan masyarakat terutama kelompok rentan.'
      },
      {
        id: 'q67-2',
        question: 'Tujuan dalam SDGs yang secara khusus menargetkan pelestarian dan pemanfaatan berkelanjutan atas sumber daya samudra, laut, dan keanekaragaman maritim adalah...',
        options: ['SDG 7 (Energi Bersih)', 'SDG 11 (Kota Berkelanjutan)', 'SDG 14 (Life Below Water / Ekosistem Lautan)', 'SDG 4 (Pendidikan Bermutu)'],
        correctAnswer: 2,
        explanation: 'SDG 14 (Life Below Water) memfokuskan aksi global pada konservasi perairan laut, pencegahan pencemaran sampah plastik laut, dan penghentian overfishing perikanan.'
      }
    ],
    references: ['United Nations. (2015). Transforming Our World: The 2030 Agenda for Sustainable Development. A/RES/70/1.', 'Bappenas. (2020). Peta Jalan SDGs Indonesia Menuju 2030.'],
    relatedTopicIds: ['pembangunan-berkelanjutan', 'lingkungan-hidup-dan-ekosistem', 'perubahan-iklim-dan-pemanasan-global', 'analisis-mengenai-dampak-lingkungan-amdal']
  },
  {
    id: 'analisis-mengenai-dampak-lingkungan-amdal',
    number: 68,
    title: 'Analisis Mengenai Dampak Lingkungan (AMDAL)',
    englishTitle: 'Environmental Impact Assessment (AMDAL): Framework and Regulations',
    categoryId: 'lingkungan-hidup',
    difficulty: 'Intermediate',
    description: 'Mendalami instrumen hukum pencegahan kerusakan lingkungan AMDAL menurut UU 32/2009 dan PP 22/2021: Kriteria Usaha Wajib AMDAL, Dokumen KA-ANDAL, ANDAL, RKL (Rencana Pengelolaan Lingkungan), RPL (Rencana Pemantauan Lingkungan), UKL-UPL, serta SPPL.',
    keywords: ['amdal', 'andal', 'rkl rpl', 'ukl upl', 'dampak penting hipotetik', 'baku mutu lingkungan'],
    learningObjectives: [
      'Menjelaskan definisi AMDAL dan fungsinya sebagai instrumen kelayakan lingkungan untuk izin berusaha.',
      'Membedakan 4 dokumen utama dalam AMDAL (KA-ANDAL, ANDAL, RKL, dan RPL).',
      'Membedakan jenis usaha yang wajib AMDAL, wajib UKL-UPL, dan cukup memiliki SPPL.'
    ],
    introduction: 'Analisis Mengenai Dampak Lingkungan Hidup (AMDAL) adalah kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup yang diperlukan bagi proses pengambilan keputusan tentang penyelenggaraan usaha dan/atau kegiatan (UU No. 32/2009 jo PP No. 22/2021). AMDAL bertindak sebagai "rem pengaman ekologis" sebelum suatu proyek raksasa—seperti jalan tol, bendungan waduk, pelabuhan, atau tambang batubara—diizinkan beroperasi, guna memastikan dampak negatif dapat diminimalkan sedini mungkin.',
    sections: [
      {
        subtitle: '1. Empat Dokumen Utama dalam Proses AMDAL',
        content: 'Penyusunan studi AMDAL melibatkan empat tahapan dokumen ilmiah berurutan:',
        table: {
          headers: ['Dokumen AMDAL', 'Kepanjangan & Fungsi Dokumen', 'Muatan Substansi Pokok'],
          rows: [
            ['1. KA-ANDAL', 'Kerangka Acuan Analisis Dampak Lingkungan', 'Dokumen pelingkupan (scoping) yang merumuskan ruang lingkup kajian, batasan wilayah studi, dan daftar Dampak Penting Hipotetik (DPH) yang akan diteliti'],
            ['2. ANDAL', 'Analisis Dampak Lingkungan Hidup', 'Dokumen telaah ilmiah mendalam yang memprediksi besaran dampak (magnitude) dan sifat penting dampak lingkungan (fisik, biotik, sosial-ekonomi) akibat proyek'],
            ['3. RKL', 'Rencana Pengelolaan Lingkungan Hidup', 'Dokumen panduan operasional teknis, teknologi, dan institusional yang wajib dijalankan pemrakarsa untuk mencegah, menanggulangi, dan meminimalkan dampak negatif'],
            ['4. RPL', 'Rencana Pemantauan Lingkungan Hidup', 'Dokumen prosedur pemantauan berkala (metode pengukuran, frekuensi sampling, lokasi titik pantau) untuk mengevaluasi efektivitas pelaksanaan RKL']
          ]
        }
      },
      {
        subtitle: '2. Tiga Tingkatan Dokumen Lingkungan Usaha',
        content: 'Berdasarkan besaran skala usaha dan risiko dampaknya, izin lingkungan dibagi menjadi tiga tingkatan:',
        keyPoints: [
          '1. Wajib AMDAL: Untuk proyek skala besar yang berpotensi menimbulkan dampak penting luas (contoh: bandar udara baru, bendungan tinggi, PLTU batubara, tambang emas).',
          '2. Wajib UKL-UPL (Upaya Pengelolaan & Pemantauan Lingkungan): Untuk usaha yang tidak berdampak penting namun memerlukan pengelolaan standar (contoh: rumah sakit tipe C, SPBU, hotel berbintang di perkotaan).',
          '3. Cukup SPPL (Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan): Untuk usaha mikro dan kecil berisiko rendah (contoh: bengkel motor kecil, toko kelontong, usaha katering rumahan).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tujuh Kriteria Penentu "Dampak Penting" (UU 32/2009)',
        items: [
          { name: 'Besarnya Jumlah Penduduk', description: 'Berapa banyak jiwa warga yang akan terkena dampak langsung dari proyek.' },
          { name: 'Luas Wilayah Persebaran Dampak', description: 'Cakupan spasial paparan polusi atau kebisingan (lokal, kabupaten, lintas provinsi).' },
          { name: 'Intensitas & Lamanya Dampak', description: 'Kekuatan paparan polutan dan durasi berlangsungnya dampak (harian atau puluhan tahun).' },
          { name: 'Banyaknya Komponen Lingkungan Lain', description: 'Apakah mencemari air sekaligus udara, tanah, dan habitat satwa liar.' },
          { name: 'Sifat Kumulatif Dampak', description: 'Apakah polutan terakumulasi seiring waktu di dalam rantai makanan.' },
          { name: 'Berbalik atau Tidaknya Dampak', description: 'Apakah kerusakan ekosistem bersifat permanen (irreversible) atau dapat dipulihkan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pelingkupan (Scoping)', title: 'Penyusunan KA-ANDAL', description: 'Konsultasi publik dengan warga terdampak dan menetapkan batas wilayah studi AMDAL.' },
      { stage: 'Kajian Ilmiah Laboratorium', title: 'Penyusunan ANDAL', description: 'Pengambilan sampel rona awal lingkungan dan pemodelan matematis sebaran polusi cerobong.' },
      { stage: 'Uji Kelayakan Lingkungan', title: 'Sidang Komisi Penilai AMDAL', description: 'Komisi penilai dan pakar independen menguji dokumen hingga diterbitkan Surat Keputusan Kelayakan Lingkungan Hidup (SKKL).' }
    ],
    caseStudies: [
      {
        title: 'Penyusunan AMDAL Pembangunan Kereta Cepat Jakarta-Bandung (Whoosh)',
        location: 'Jalur Jakarta – Karawang – Walini – Tegalluar Bandung',
        description: 'Studi AMDAL proyek Kereta Cepat Jakarta-Bandung mengkaji dampak geologis terowongan menembus formasi batuan lempung lempung ekspansif rawan longsor di Purwakarta, mitigasi kebisingan suara kereta berkecepatan 350 km/jam di dekat kawasan permukiman melalui dinding peredam suara (sound barrier), serta kompensasi ganti untung pembebasan lahan warga.',
        takeaway: 'AMDAL memastikan megaproyek transportasi modern berjalan aman tanpa mengorbankan keselamatan geoteknik dan sosial.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Alur Prosedur Penyusunan dan Penilaian Dokumen AMDAL (KA-ANDAL, ANDAL, RKL, RPL)',
        caption: 'Bagan tahapan alur AMDAL: Pengumuman Publik → Konsultasi Warga → KA-ANDAL → ANDAL → RKL-RPL → SKKL Izin Lingkungan.',
        badge: 'EIA Workflow'
      }
    ],
    terminology: [
      { term: 'AMDAL', definition: 'Kajian mengenai dampak penting suatu usaha dan/atau kegiatan yang direncanakan pada lingkungan hidup yang diperlukan bagi proses pengambilan keputusan.', scientificTerm: 'Environmental Impact Assessment' },
      { term: 'RKL (Rencana Pengelolaan Lingkungan)', definition: 'Dokumen yang memuat upaya penanganan dampak terhadap lingkungan hidup yang ditimbulkan oleh rencana usaha.', scientificTerm: 'Environmental Management Plan' },
      { term: 'RPL (Rencana Pemantauan Lingkungan)', definition: 'Dokumen yang memuat sistem pemantauan komponen lingkungan hidup yang terkena dampak dari rencana usaha.', scientificTerm: 'Environmental Monitoring Plan' }
    ],
    summary: [
      'AMDAL adalah instrumen preventif wajib bagi usaha berisiko tinggi yang berpotensi menimbulkan dampak penting.',
      'Empat dokumen AMDAL adalah KA-ANDAL (pelingkupan), ANDAL (kajian ilmiah), RKL (pengelolaan), dan RPL (pemantauan).',
      'Usaha dibagi menjadi 3 kategori kelayakan: Wajib AMDAL, Wajib UKL-UPL, dan Cukup SPPL.'
    ],
    quiz: [
      {
        id: 'q68-1',
        question: 'Dokumen dalam studi AMDAL yang memuat rencana terperinci mengenai langkah-langkah teknis, teknologi, dan operasional untuk mengelola dan meminimalkan dampak negatif lingkungan disebut...',
        options: ['KA-ANDAL', 'ANDAL', 'RKL (Rencana Pengelolaan Lingkungan)', 'RPL (Rencana Pemantauan Lingkungan)'],
        correctAnswer: 2,
        explanation: 'RKL (Rencana Pengelolaan Lingkungan) memuat petunjuk pelaksanaan operasional bagaimana cara mengelola, mengolah limbah, dan mencegah dampak buruk proyek.'
      },
      {
        id: 'q68-2',
        question: 'Bagi usaha atau kegiatan yang tidak menimbulkan dampak penting terhadap lingkungan hidup (seperti klinik pratama atau bengkel motor), pemrakarsa usaha tidak diwajibkan menyusun AMDAL melainkan cukup menyusun dokumen...',
        options: ['UKL-UPL atau SPPL', 'Peta Rupa Bumi', 'Kajian Litosfer', 'Naskah Proklamasi'],
        correctAnswer: 0,
        explanation: 'Usaha yang tidak wajib AMDAL dikelompokkan ke dalam kategori wajib UKL-UPL atau cukup memiliki SPPL tergantung pada skala dan tingkat risikonya.'
      }
    ],
    references: ['Peraturan Pemerintah RI Nomor 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup.', 'Canter, L. W. (1996). Environmental Impact Assessment. McGraw-Hill.'],
    relatedTopicIds: ['pembangunan-berkelanjutan', 'lingkungan-hidup-dan-ekosistem', 'pencemaran-lingkungan', 'rencana-tata-ruang-wilayah-rtrw']
  },

  // CATEGORY J: Kependudukan (69-78)
  {
    id: 'dinamika-kependudukan',
    number: 69,
    title: 'Dinamika Kependudukan',
    englishTitle: 'Demographic Dynamics and Data Sources',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menelaah sains demografi spasial: konsep dinamika penduduk (kelahiran natalitas, kematian mortalitas, migrasi), serta 3 metode perolehan data kependudukan resmi: Sensus Penduduk (de jure vs de facto, canvasser vs householder), Survei Sampel (SUPAS), dan Registrasi Penduduk.',
    keywords: ['dinamika kependudukan', 'sensus penduduk', 'de jure de facto', 'canvasser householder', 'supas', 'registrasi penduduk'],
    learningObjectives: [
      'Menjelaskan konsep dinamika penduduk dan faktor-faktor pengubah jumlah penduduk (natalitas, mortalitas, migrasi).',
      'Membedakan metode Sensus Penduduk de jure dan de facto, serta metode canvasser dan householder.',
      'Membandingkan kelebihan dan kelemahan antara sensus penduduk, survei sampel (SUPAS), dan registrasi kependudukan.'
    ],
    introduction: 'Dinamika Kependudukan adalah perubahan jumlah, struktur, komposisi, dan persebaran penduduk di suatu wilayah dari waktu ke waktu yang dipicu oleh tiga variabel demografi utama: kelahiran (fertilitas/natalitas), kematian (mortalitas), dan perpindahan penduduk (migrasi). Untuk merencanakan pembangunan sekolah, fasilitas kesehatan, penyediaan lapangan kerja, dan perumahan, negara membutuhkan data kependudukan yang akurat, komprehensif, dan mutakhir yang diperoleh melalui tiga instrumen pengumpulan data resmi.',
    sections: [
      {
        subtitle: '1. Tiga Variabel Utama Pengubah Populasi Penduduk',
        content: 'Perubahan populasi penduduk dihitung melalui Persamaan Demografi Berimbang (Balancing Equation):',
        keyPoints: [
          'Rumus Pertumbuhan Penduduk: Pt = P0 + (B – D) + (Mi – Mo)',
          'Pt = Jumlah penduduk pada tahun akhir perhitungan',
          'P0 = Jumlah penduduk pada tahun awal perhitungan',
          'B (Birth) = Jumlah kelahiran hidup selama periode waktu tersebut',
          'D (Death) = Jumlah kematian selama periode waktu tersebut',
          'Mi (In-migration) = Jumlah migran masuk ke wilayah tersebut',
          'Mo (Out-migration) = Jumlah migran keluar meninggalkan wilayah tersebut'
        ],
        formula: {
          expression: 'P_t = P_0 + (B - D) + (M_i - M_o)',
          explanation: 'Persamaan perimbangan demografi menghitung pertumbuhan total (pertumbuhan alami B-D ditambah migrasi neto Mi-Mo).',
          exampleCalculation: 'Jika kota X berpenduduk awal 100.000 jiwa, lahir 2.500 bayi, meninggal 800 orang, imigran masuk 1.200 jiwa, dan emigran pindah 400 jiwa, maka Pt = 100.000 + (2.500 - 800) + (1.200 - 400) = 100.000 + 1.700 + 800 = 102.500 jiwa.'
        }
      },
      {
        subtitle: '2. Tiga Sumber Data Kependudukan Resmi',
        content: 'Badan Pusat Statistik (BPS) dan Ditjen Dukcapil mengumpulkan data melalui tiga mekanisme:',
        table: {
          headers: ['Metode Sumber Data', 'Cakupan Responden', 'Periodisitas Waktu', 'Kelebihan & Kekurangan'],
          rows: [
            ['1. Sensus Penduduk (Cacah Jiwa)', 'Menghitung seluruh penduduk tanpa kecuali (total enumeration) yang berdomisili di dalam batas teritorial negara', 'Dilaksanakan secara serentak setiap 10 tahun sekali (tahun berakhiran angka 0)', 'Kelebihan: data sangat lengkap dan bebas sampling error; Kekurangan: biaya sangat mahal dan waktu olah data lama'],
            ['2. Survei Sampel (Contoh: SUPAS, Susenas)', 'Hanya mencacah sebagian sampel penduduk yang dipilih secara statistik representatif', 'Dilaksanakan secara berkala di antara dua masa sensus (misal SUPAS setiap 5 tahun)', 'Kelebihan: biaya lebih murah, pertanyaan dapat lebih mendalam dan spesifik; Kekurangan: memiliki margin of error sampling'],
            ['3. Registrasi Penduduk', 'Pencatatan peristiwa vital harian (kelahiran, kematian, pernikahan, perceraian, dan kepindahan) secara mandiri oleh warga ke kantor kelurahan/Dukcapil', 'Berlangsung terus-menerus secara real-time setiap hari', 'Kelebihan: data selalu terbarui setiap waktu; Kekurangan: sering tidak akurat jika kesadaran warga melapor rendah']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Pendekatan Status Kehadiran Sensus Penduduk',
        items: [
          { name: 'Sensus De Jure', description: 'Pencacahan penduduk yang didasarkan pada bukti hukum tempat tinggal resmi KTP/Kartu Keluarga, tanpa memandang di mana ia berada saat sensus.' },
          { name: 'Sensus De Facto', description: 'Pencacahan yang dilakukan kepada siapa saja yang nyata-nyata berada di wilayah tersebut saat petugas sensus datang, tanpa memandang KTP asalnya.' }
        ]
      },
      {
        categoryName: 'Dua Metode Pengisian Formulir Sensus',
        items: [
          { name: 'Metode Canvasser', description: 'Petugas sensus mendatangi rumah warga, membacakan pertanyaan, dan mengisi kuesioner sensus secara langsung (efektif untuk masyarakat dengan literasi rendah).' },
          { name: 'Metode Householder', description: 'Petugas menitipkan formulir kuesioner kepada kepala keluarga untuk diisi sendiri secara mandiri (cocok untuk masyarakat perkotaan berpendidikan tinggi).' }
        ]
      }
    ],
    processes: [
      { stage: 'Prapelaksanaan Sensus', title: 'Pemetaan Blok Sensus', description: 'BPS memetakan blok sensus spasial berbasis citra satelit dan data wilayah administrasi.' },
      { stage: 'Pelaksanaan Lapangan', title: 'Sensus Online & Wawancara Tatap Muka', description: 'Warga mengisi sensus mandiri secara daring (SP Online), sisanya didatangi petugas canvasser.' },
      { stage: 'Pengolahan & Rilis', title: 'Tabulasi & Publikasi Nasional', description: 'Data ditabulasi menjadi buku statistik resmi "Hasil Sensus Penduduk Indonesia".' }
    ],
    caseStudies: [
      {
        title: 'Transformasi Digital Sensus Penduduk 2020: Sensus Daring Pertama Indonesia',
        location: 'Nasional Republik Indonesia',
        description: 'Sensus Penduduk 2020 (SP2020) mencatatkan sejarah baru sebagai sensus pertama di Indonesia yang menggunakan metode kombinasi: memanfaatkan data administrasi kependudukan Ditjen Dukcapil Kemendagri sebagai basis data dasar, dipadukan dengan sensus daring mandiri (Sensus Penduduk Online yang diikuti lebih dari 52 juta jiwa), disusul verifikasi lapangan oleh petugas.',
        takeaway: 'Digitalisasi geospasial memangkas biaya sensus dan meningkatkan akurasi data kependudukan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Komparasi Metodologi Pengumpulan Data Kependudukan: Sensus, Survei, dan Registrasi',
        caption: 'Bagan perbandingan cakupan responden, interval waktu, dan kelebihan antara Sensus, SUPAS, dan Registrasi.',
        badge: 'Demographic Methods'
      }
    ],
    terminology: [
      { term: 'Sensus De Jure', definition: 'Pencacahan penduduk yang dilakukan berdasarkan bukti hukum administrasi kependudukan resmi (KTP atau Kartu Keluarga).', scientificTerm: 'De Jure Census' },
      { term: 'Sensus De Facto', definition: 'Pencacahan penduduk yang dilakukan kepada setiap orang yang nyata-nyata berada di suatu wilayah pada saat pencacahan dilakukan.', scientificTerm: 'De Facto Census' },
      { term: 'Metode Canvasser', definition: 'Teknik pengumpulan data sensus di mana petugas sensus secara aktif mendatangi responden dan mengisi sendiri lembar kuesioner.', scientificTerm: 'Canvasser Method' }
    ],
    summary: [
      'Dinamika kependudukan dipengaruhi oleh tiga variabel utama: kelahiran, kematian, dan migrasi penduduk.',
      'Tiga sumber data resmi adalah Sensus Penduduk (10 tahunan), Survei Sampel (SUPAS), dan Registrasi harian.',
      'Sensus de jure mencatat berdasarkan KTP; sensus de facto mencatat berdasarkan keberadaan fisik nyata di lapangan.'
    ],
    quiz: [
      {
        id: 'q69-1',
        question: 'Metode sensus penduduk di mana petugas sensus mendatangi langsung rumah warga, mewawancarai kepala keluarga, dan mengisi sendiri lembar jawaban kuesioner dinamakan metode...',
        options: ['Householder', 'Canvasser', 'De jure', 'Registrasi mandiri'],
        correctAnswer: 1,
        explanation: 'Metode canvasser adalah metode sensus di mana petugas sensus datang langsung mencatat dan mengisi kuesioner melalui wawancara tatap muka.'
      },
      {
        id: 'q69-2',
        question: 'Seorang mahasiswa asal Padang yang sedang kuliah di Yogyakarta didata oleh petugas sensus di tempat kosnya di Yogyakarta karena ia nyata-nyata berada di sana saat pencacahan berlangsung. Praktik pencacahan ini menerapkan sistem...',
        options: ['Sensus De Jure', 'Sensus De Facto', 'Registrasi penduduk', 'Survei acak'],
        correctAnswer: 1,
        explanation: 'Sensus de facto mendata siapa saja yang nyata-nyata berada di tempat saat petugas datang tanpa memandang status alamat KTP resminya.'
      }
    ],
    references: ['BPS. (2020). Pedoman Teknis Sensus Penduduk 2020. Badan Pusat Statistik.', 'Weeks, J. R. (2015). Population: An Introduction to Concepts and Issues. Cengage Learning.'],
    relatedTopicIds: ['komposisi-dan-struktur-penduduk', 'piramida-penduduk', 'kelahiran-kematian-dan-migrasi', 'pertumbuhan-dan-kepadatan-penduduk']
  },
  {
    id: 'komposisi-dan-struktur-penduduk',
    number: 70,
    title: 'Komposisi dan Struktur Penduduk',
    englishTitle: 'Population Composition and Dependency Structure',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis pengelompokan penduduk berdasarkan karakteristik biologis (umur dan jenis kelamin), sosial (pendidikan, agama), dan ekonomi (lapangan kerja), serta perhitungan Rasio Jenis Kelamin (Sex Ratio) dan Rasio Ketergantungan (Dependency Ratio).',
    keywords: ['komposisi penduduk', 'sex ratio rasio jenis kelamin', 'rasio ketergantungan dependency ratio', 'usia produktif non produktif', 'struktur demografi'],
    learningObjectives: [
      'Menjelaskan definisi komposisi penduduk dan berbagai kriteria pengelompokannya.',
      'Menghitung Rasio Jenis Kelamin (Sex Ratio) dan menginterpretasikan maknanya dalam perencanaan spasial.',
      'Menghitung Rasio Ketergantungan (Dependency Ratio) antara kelompok umur belum produktif, produktif, dan lansia.'
    ],
    introduction: 'Komposisi Penduduk adalah susunan atau pengelompokan penduduk di suatu wilayah berdasarkan kriteria-kriteria tertentu yang relevan dengan pembangunan, seperti kriteria biologis (usia dan jenis kelamin), kriteria sosial (tingkat pendidikan, status pernikahan, agama), serta kriteria ekonomi (lapangan pekerjaan dan pendapatan). Mengetahui komposisi umur dan jenis kelamin sangat krusial bagi pemerintah karena menentukan beban tanggungan generasi produktif terhadap generasi non-produktif.',
    sections: [
      {
        subtitle: '1. Perhitungan Rasio Jenis Kelamin (Sex Ratio)',
        content: 'Sex Ratio (SR) adalah angka yang menunjukkan perbandingan jumlah penduduk laki-laki dengan jumlah penduduk perempuan dalam setiap 100 penduduk perempuan:',
        keyPoints: [
          'Rumus Sex Ratio: SR = (Jumlah Penduduk Laki-laki / Jumlah Penduduk Perempuan) × 100',
          'Interpretasi: Jika SR = 102, artinya dalam setiap 100 penduduk perempuan terdapat 102 penduduk laki-laki (jumlah laki-laki lebih banyak). Jika SR = 98, artinya dalam setiap 100 penduduk perempuan terdapat 98 laki-laki.',
          'Kecenderungan Global: Saat lahir bayi laki-laki lebih banyak (SR ~105), namun angka harapan hidup perempuan lebih tinggi sehingga pada usia lanjut jumlah perempuan mendominasi.'
        ],
        formula: {
          expression: 'SR = \\frac{L}{P} \\times 100',
          explanation: 'L adalah jumlah total penduduk laki-laki; P adalah jumlah total penduduk perempuan.',
          exampleCalculation: 'Jika suatu kabupaten memiliki penduduk laki-laki 255.000 jiwa dan perempuan 250.000 jiwa, maka SR = (255.000 / 250.000) × 100 = 102.'
        }
      },
      {
        subtitle: '2. Perhitungan Rasio Ketergantungan (Dependency Ratio)',
        content: 'Berdasarkan kemampuan ekonominya, penduduk dibagi menjadi tiga kelompok umur: Usia Belum Produktif (0–14 tahun), Usia Produktif (15–64 tahun), dan Usia Tidak Produktif Lanjut Usia (≥ 65 tahun):',
        keyPoints: [
          'Rumus Dependency Ratio: DR = { (Penduduk 0-14 th + Penduduk ≥ 65 th) / (Penduduk 15-64 th) } × 100',
          'Makna Ekonomi: Menunjukkan berapa banyak orang non-produktif (anak-anak dan lansia) yang harus ditanggung secara ekonomi oleh setiap 100 orang penduduk usia kerja produktif.',
          'Ambang Batas Bonus Demografi: Suatu negara dikatakan memasuki era Bonus Demografi ketika nilai Dependency Ratio berada di bawah angka 50 (artinya 100 orang produktif menanggung kurang dari 50 orang non-produktif).'
        ],
        formula: {
          expression: 'DR = \\frac{P_{0-14} + P_{\\ge 65}}{P_{15-64}} \\times 100',
          explanation: 'P0-14 adalah anak-anak; P≥65 adalah lansia; P15-64 adalah angkatan kerja produktif.',
          exampleCalculation: 'Jika kota Y memiliki penduduk usia 0-14 th = 30.000 jiwa, usia ≥65 th = 10.000 jiwa, dan usia produktif 15-64 th = 80.000 jiwa, maka DR = { (30.000 + 10.000) / 80.000 } × 100 = (40.000 / 80.000) × 100 = 50. Artinya, setiap 100 penduduk usia produktif menanggung 50 jiwa non-produktif.'
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Kategori Komposisi Penduduk',
        items: [
          { name: 'Komposisi Biologis', description: 'Pengelompokan berdasarkan umur dan jenis kelamin (menjadi dasar piramida penduduk).' },
          { name: 'Komposisi Sosial', description: 'Tingkat melek huruf, jenjang tamatan sekolah (SD, SMP, SMA, PT), status perkawinan, bahasa, dan agama.' },
          { name: 'Komposisi Ekonomi', description: 'Mata pencaharian sektor primer (pertanian/tambang), sekunder (industri manufaktur), dan tersier (jasa/perdagangan).' }
        ]
      }
    ],
    processes: [
      { stage: 'Agregasi Data Sensus', title: 'Pemisahan Kelompok Umur 5 Tahunan', description: 'Mengelompokkan data warga ke dalam kohort usia 0-4, 5-9, 10-14 hingga 75+ tahun.' },
      { stage: 'Kalkulasi Rasio Beban', title: 'Penghitungan Nilai Dependency Ratio', description: 'Menghitung rasio ketergantungan muda, ketergantungan tua, dan ketergantungan total.' },
      { stage: 'Perumusan Kebijakan', title: 'Perencanaan Fasilitas Publik', description: 'Jika penduduk muda dominan dibangun sekolah; jika lansia dominan diperkuat jaminan sosial geriatri.' }
    ],
    caseStudies: [
      {
        title: 'Penurunan Dependency Ratio Indonesia Menuju Puncak Bonus Demografi 2030',
        location: 'Nasional Republik Indonesia',
        description: 'Hasil Sensus Penduduk 2020 menunjukkan proporsi penduduk usia produktif (15-64 tahun) Indonesia mencapai 70,72% dari total populasi. Angka Rasio Ketergantungan (Dependency Ratio) nasional turun drastis ke angka 44,33 (terendah dalam sejarah Indonesia). Penurunan beban tanggungan ini menciptakan jendela peluang emas (window of opportunity) untuk mendorong lompatan ekonomi menjadi negara maju.',
        takeaway: 'Struktur demografi usia produktif yang melimpah adalah mesin pengungkit pertumbuhan ekonomi nasional.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Struktur Kelompok Umur Produktif vs Non-Produktif dalam Dependency Ratio',
        caption: 'Bagan perbandingan proporsi kelompok usia belum produktif (0-14 th), usia kerja (15-64 th), dan usia lanjut (65+ th).',
        badge: 'Demographic Ratios'
      }
    ],
    terminology: [
      { term: 'Sex Ratio (Rasio Jenis Kelamin)', definition: 'Perbandingan banyaknya penduduk laki-laki per 100 orang penduduk perempuan dalam suatu wilayah tertentu.', scientificTerm: 'Sex Ratio' },
      { term: 'Rasio Ketergantungan (Dependency Ratio)', definition: 'Angka yang menyatakan perbandingan antara banyaknya penduduk usia non-produktif dengan penduduk usia produktif.', scientificTerm: 'Age Dependency Ratio' },
      { term: 'Usia Produktif', definition: 'Rentang kelompok usia kerja yang secara ekonomi mampu menghasilkan barang dan jasa (standar BPS: usia 15 hingga 64 tahun).', scientificTerm: 'Working-Age Population' }
    ],
    summary: [
      'Komposisi penduduk mengelompokkan warga berdasarkan variabel biologis, sosial, dan ekonomi.',
      'Sex Ratio mengukur jumlah laki-laki per 100 perempuan; Dependency Ratio mengukur beban tanggungan non-produktif per 100 penduduk produktif.',
      'Nilai Dependency Ratio di bawah 50 menandakan terbukanya jendela peluang emas Bonus Demografi.'
    ],
    quiz: [
      {
        id: 'q70-1',
        question: 'Sebuah kecamatan memiliki penduduk usia belum produktif (0-14 tahun) sebanyak 20.000 jiwa, usia lanjut (≥65 tahun) sebanyak 5.000 jiwa, dan penduduk usia produktif (15-64 tahun) sebanyak 50.000 jiwa. Berapakah Rasio Ketergantungan (Dependency Ratio) kecamatan tersebut?',
        options: ['25', '40', '50', '60'],
        correctAnswer: 2,
        explanation: 'DR = { (20.000 + 5.000) / 50.000 } × 100 = (25.000 / 50.000) × 100 = 50. Artinya, setiap 100 penduduk usia produktif menanggung 50 jiwa non-produktif.'
      },
      {
        id: 'q70-2',
        question: 'Jika suatu wilayah memiliki nilai Sex Ratio sebesar 95, hal ini berarti...',
        options: [
          'Dalam setiap 100 penduduk perempuan terdapat 95 penduduk laki-laki (jumlah perempuan lebih banyak)',
          'Dalam setiap 100 penduduk laki-laki terdapat 95 penduduk perempuan',
          'Jumlah laki-laki dan perempuan persis seimbang',
          'Sebagian besar penduduk berusia di atas 95 tahun'
        ],
        correctAnswer: 0,
        explanation: 'Sex Ratio dihitung per 100 perempuan; nilai 95 berarti terdapat 95 laki-laki per 100 perempuan sehingga jumlah perempuan lebih banyak.'
      }
    ],
    references: ['BPS. (2021). Indikator Kesejahteraan Rakyat Indonesia. Badan Pusat Statistik.', 'Mantra, I. B. (2000). Demografi Umum. Pustaka Pelajar.'],
    relatedTopicIds: ['dinamika-kependudukan', 'piramida-penduduk', 'bonus-demografi', 'pertumbuhan-dan-kepadatan-penduduk']
  },
  {
    id: 'piramida-penduduk',
    number: 71,
    title: 'Piramida Penduduk',
    englishTitle: 'Population Pyramids: Expansive, Stationary, and Constrictive Types',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Mendalami visualisasi demografi melalui piramida penduduk: sumbu umur vertikal dan jenis kelamin horizontal, serta 3 tipe piramida utama: Piramida Ekspansif (muda/kerucut segitiga), Piramida Stasioner (granat/batu nisan), dan Piramida Konstruktif (tua/sarang tawon), beserta implikasi kebijakan negaranya.',
    keywords: ['piramida penduduk', 'piramida ekspansif segitiga', 'piramida stasioner', 'piramida konstruktif sarang tawon', 'kohort umur demografi'],
    learningObjectives: [
      'Menjelaskan struktur anatomi dan cara membaca grafik piramida penduduk.',
      'Membandingkan bentuk, ciri angka kelahiran-kematian, dan karakteristik dari 3 tipe piramida penduduk.',
      'Menganalisis pergeseran bentuk piramida penduduk Indonesia dari masa ke masa dan proyeksi penuaan penduduk (aging population).'
    ],
    introduction: 'Piramida Penduduk adalah representasi grafis dua dimensi yang menyajikan komposisi umur dan jenis kelamin suatu populasi penduduk pada waktu tertentu. Grafik ini membagi populasi menjadi kelompok laki-laki di sisi kiri dan perempuan di sisi kanan, dengan susunan kelompok umur (kohort) 5 tahunan membentang vertikal dari usia termuda di dasar (0-4 tahun) hingga usia tertua di puncak. Bentuk geometri piramida penduduk merekam sejarah kelahiran, kematian, epidemi penyakit, peperangan, dan migrasi suatu bangsa selama berabad-abad.',
    sections: [
      {
        subtitle: '1. Tiga Tipe Utama Piramida Penduduk',
        content: 'Bentuk geometris piramida mencerminkan tahap transisi demografi suatu negara:',
        table: {
          headers: ['Tipe Piramida', 'Bentuk Geometris Visual', 'Karakteristik Kelahiran & Kematian', 'Karakter Kelompok Umur', 'Contoh Negara di Dunia'],
          rows: [
            ['1. Piramida Ekspansif (Muda)', 'Segitiga kerucut limas: alas dasar melebar lebar, semakin meruncing tajam ke puncak atas', 'Tingkat kelahiran (fertilitas) sangat tinggi dan tingkat kematian bayi tinggi', 'Mayoritas penduduk berusia muda (anak-anak); rasio ketergantungan muda sangat tinggi', 'Negara-negara berkembang: Indonesia (era 1970–1990), Filipina, Nigeria, Kenya, Afganistan'],
            ['2. Piramida Stasioner (Granat)', 'Bentuk granat atau lonceng tegak: lebar alas bawah dan bagian tengah hampir seragam sama', 'Tingkat kelahiran rendah dan tingkat kematian rendah (seimbang seimbang)', 'Proporsi penduduk usia muda, dewasa, dan tua hampir seimbang; pertumbuhan penduduk mendekati nol', 'Negara maju: Swedia, Belanda, Prancis, Jerman, Inggris'],
            ['3. Piramida Konstruktif (Tua)', 'Bentuk guci terbalik atau sarang tawon: alas dasar menyempit kuncup, bagian tengah menggembung lebar', 'Tingkat kelahiran turun drastis sangat rendah; tingkat kematian rendah dengan usia harapan hidup sangat panjang', 'Mayoritas penduduk berada pada usia dewasa dan lansia; terjadi krisis penuaan penduduk (aging population) dan kekurangan angkatan kerja', 'Jepang, Korea Selatan, Singapura, Italia, Jerman']
          ]
        }
      },
      {
        subtitle: '2. Evolusi Bentuk Piramida Penduduk Indonesia',
        content: 'Indonesia sedang mengalami transisi demografi yang dramatis dari bentuk ekspansif menuju stasioner-konstruktif:',
        keyPoints: [
          'Era 1970-an: Piramida Indonesia bertipe ekspansif murni segitiga tajam akibat angka kelahiran tinggi (TFR ~5,6 anak per wanita).',
          'Era Keberhasilan KB (Keluarga Berencana): Program KB nasional menekan angka kelahiran hingga TFR mendekati angka pergantian 2,1 anak per wanita.',
          'Piramida Sensus 2020: Alas dasar piramida (kelompok usia 0-4 dan 5-9 tahun) mulai menyusut menciut, sementara bagian tengah (usia 15-39 tahun) menggembung sangat lebar, menandai fase keemasan Bonus Demografi.',
          'Tantangan Menuju 2045: Bagian puncak piramida penduduk usia 65+ tahun diproyeksikan melebar cepat, menandai Indonesia mulai memasuki fase penuaan penduduk (aging society).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Implikasi Kebijakan Berdasarkan Tipe Piramida',
        items: [
          { name: 'Negara dengan Piramida Ekspansif', description: 'Kebijakan fokus pada: pembangunan gedung sekolah dasar, imunisasi gizi anak, dan pengendalian kelahiran (KB).' },
          { name: 'Negara dengan Piramida Stasioner', description: 'Kebijakan fokus pada: pemeliharaan kesempatan kerja yang stabil dan jaminan kesehatan merata.' },
          { name: 'Negara dengan Piramida Konstruktif', description: 'Kebijakan darurat: insentif keuangan bagi keluarga yang mau melahirkan anak, penaikan usia pensiun, dan impor tenaga kerja asing.' }
        ]
      }
    ],
    processes: [
      { stage: 'Tahap 1: Pra-Transisi', title: 'Kelahiran & Kematian Tinggi', description: 'Bentuk ekspansif murni: banyak anak lahir namun banyak pula yang meninggal akibat penyakit.' },
      { stage: 'Tahap 2: Transisi Awal', title: 'Kematian Turun Drastis', description: 'Kemajuan sanitasi menurunkan angka kematian bayi, populasi melonjak ledakan penduduk.' },
      { stage: 'Tahap 3 & 4: Pasca-Transisi', title: 'Kelahiran Turun Rendah', description: 'Urbanisasi dan emansipasi perempuan menurunkan angka kelahiran, piramida menggembung di tengah.' }
    ],
    caseStudies: [
      {
        title: 'Krisis Demografi Jepang: Piramida Konstruktif Ekstrem dan Fenomena Kodokushi',
        location: 'Jepang (Asia Timur)',
        description: 'Jepang memiliki piramida penduduk paling konstruktif di dunia dengan lebih dari 29% populasinya berusia 65 tahun ke atas (super-aging society) dan angka kelahiran (TFR) hanya 1,2. Dampaknya mencakup ribuan sekolah dasar tutup setiap tahun karena ketiadaan murid baru, kekurangan parah tenaga perawat lansia, dan fenomena kesepian warga lansia (kodokushi).',
        takeaway: 'Membaca piramida penduduk adalah membaca masa depan eksistensi suatu bangsa.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Simulator Piramida Penduduk Interaktif: Ekspansif, Stasioner, dan Konstruktif',
        caption: 'Model interaktif grafik piramida penduduk dengan slider angka kelahiran, harapan hidup, dan simulasi transisi demografi.',
        badge: 'Demographic Pyramid Simulator',
        interactiveLabId: 'population-pyramid'
      }
    ],
    terminology: [
      { term: 'Piramida Penduduk Ekspansif', definition: 'Piramida dengan dasar melebar yang menggambarkan populasi dengan tingkat kelahiran sangat tinggi dan didominasi penduduk usia muda.', scientificTerm: 'Expansive Pyramid' },
      { term: 'Piramida Penduduk Konstruktif', definition: 'Piramida dengan dasar mengecil yang menggambarkan penurunan tajam angka kelahiran dan dominasi penduduk usia tua.', scientificTerm: 'Constrictive Pyramid' },
      { term: 'Kohort Demografi', definition: 'Kelompok individu yang mengalami peristiwa demografi yang sama (seperti tahun kelahiran) dalam interval waktu yang sama.', scientificTerm: 'Demographic Cohort' }
    ],
    summary: [
      'Piramida penduduk memvisualisasikan komposisi umur dan jenis kelamin suatu bangsa.',
      'Tiga tipe piramida adalah Ekspansif (muda/segitiga), Stasioner (granat/seimbang), dan Konstruktif (tua/sarang tawon).',
      'Piramida Indonesia saat ini berada pada transisi menggembung di tengah (fase bonus demografi) menuju penuaan populasi.'
    ],
    quiz: [
      {
        id: 'q71-1',
        question: 'Sebuah negara memiliki piramida penduduk berbentuk kerucut segitiga dengan bagian alas dasar yang sangat lebar dan semakin meruncing ke atas. Hal ini menandakan bahwa negara tersebut memiliki...',
        options: [
          'Tingkat kematian lansia yang sangat rendah',
          'Tingkat kelahiran yang sangat tinggi dan mayoritas penduduknya berusia muda',
          'Pertumbuhan penduduk yang bernilai negatif',
          'Jumlah penduduk lansia lebih banyak dibanding anak-anak'
        ],
        correctAnswer: 1,
        explanation: 'Piramida ekspansif (segitiga) memiliki dasar lebar karena angka kelahiran bayi sangat tinggi dan proporsi penduduk usia anak-anak muda sangat mendominasi.'
      },
      {
        id: 'q71-2',
        question: 'Piramida penduduk dengan bagian dasar alas menyempit kuncup dan bagian atas menggembung lebar mencerminkan negara yang mengalami krisis penuaan penduduk (aging population) seperti di Jepang. Tipe piramida ini dinamakan piramida...',
        options: ['Ekspansif', 'Konstruktif', 'Stasioner', 'Regresif linier'],
        correctAnswer: 1,
        explanation: 'Piramida konstruktif (sarang tawon/guci terbalik) memiliki alas sempit akibat rendahnya angka kelahiran dan puncak menggembung akibat tingginya proporsi lansia.'
      }
    ],
    references: ['BPS. (2020). Profil Penduduk Indonesia Hasil SP2020.', 'Poston, D. L., & Bouvier, L. F. (2010). Population and Society: An Introduction to Demography. Cambridge University Press.'],
    relatedTopicIds: ['komposisi-dan-struktur-penduduk', 'dinamika-kependudukan', 'bonus-demografi', 'kelahiran-kematian-dan-migrasi']
  },
  {
    id: 'pertumbuhan-dan-kepadatan-penduduk',
    number: 72,
    title: 'Pertumbuhan dan Kepadatan Penduduk',
    englishTitle: 'Population Growth Calculations and Spatial Density Metrics',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menguasai perhitungan demografi: Pertumbuhan Alami vs Pertumbuhan Total, rumus Pertumbuhan Geometris & Eksponensial, Doubling Time (Aturan 70), serta 3 metrik kepadatan penduduk: Kepadatan Aritmatik, Kepadatan Fisiologis, dan Kepadatan Agraris.',
    keywords: ['pertumbuhan penduduk alami total', 'rumus doubling time', 'kepadatan aritmatik', 'kepadatan fisiologis', 'kepadatan agraris', 'pertumbuhan eksponensial'],
    learningObjectives: [
      'Menghitung angka pertumbuhan penduduk alami dan pertumbuhan penduduk total di suatu wilayah.',
      'Menghitung waktu penggandaan penduduk (Doubling Time) menggunakan rumus Aturan 70 (Rule of 70).',
      'Membedakan dan menghitung tiga jenis kepadatan penduduk: kepadatan aritmatik, fisiologis, dan agraris.'
    ],
    introduction: 'Pertumbuhan dan persebaran kepadatan penduduk adalah dua variabel inti dalam analisis geografi kependudukan. Pertumbuhan penduduk menentukan seberapa cepat jumlah mulut yang harus diberi makan bertambah, sedangkan kepadatan penduduk (population density) mengukur tekanan demografi terhadap ruang permukaan bumi. Seringkali angka kepadatan penduduk rata-rata (aritmatik) memberikan gambaran semu; oleh karena itu geograf menggunakan metrik kepadatan fisiologis dan agraris untuk mengukur tekanan riil penduduk terhadap daya dukung lahan pangan.',
    sections: [
      {
        subtitle: '1. Rumus Pertumbuhan Penduduk dan Waktu Penggandaan (Doubling Time)',
        content: 'Pertumbuhan penduduk dihitung melalui metode alami atau total:',
        table: {
          headers: ['Metode Pertumbuhan', 'Rumus Matematis', 'Keterangan Variabel', 'Contoh Perhitungan Singkat'],
          rows: [
            ['Pertumbuhan Alami (Natural Growth)', 'Pn = (B – D)', 'B = Total Kelahiran;\nD = Total Kematian', 'Kelahiran 1.500, Kematian 500 → Pn = 1.000 jiwa'],
            ['Pertumbuhan Total (Total Growth)', 'Pt = (B – D) + (I – E)', 'I = Imigrasi masuk;\nE = Emigrasi keluar', 'Kelahiran 1.500, Kematian 500, Masuk 400, Keluar 100 → Pt = 1.000 + 300 = 1.300 jiwa'],
            ['Laju Pertumbuhan Eksponensial', 'Pt = P0 × e^(r × t)', 'r = laju pertumbuhan desimal;\nt = interval tahun; e = 2,718', 'Digunakan BPS untuk proyeksi jumlah penduduk masa depan'],
            ['Doubling Time (Rule of 70)', 'DT = 70 / r%', 'DT = Waktu penggandaan (tahun);\nr% = Laju pertumbuhan (%)', 'Jika laju pertumbuhan penduduk 2% per tahun, maka jumlah penduduk wilayah itu akan berlipat ganda menjadi 2 kali lipat dalam waktu: DT = 70 / 2 = 35 tahun!']
          ]
        }
      },
      {
        subtitle: '2. Tiga Jenis Kepadatan Penduduk (Population Density)',
        content: 'Geografi membedakan tiga metrik kepadatan untuk melihat tekanan ruang nyata:',
        table: {
          headers: ['Jenis Kepadatan Penduduk', 'Rumus Perhitungan', 'Makna Analisis Geografis'],
          rows: [
            ['1. Kepadatan Aritmatik (Crude Density)', 'Jumlah Total Penduduk (jiwa) / Total Luas Seluruh Wilayah (km²)', 'Angka kepadatan kasar umum; mengasumsikan penduduk tersebar merata di seluruh daratan (termasuk gunung dan rawa)'],
            ['2. Kepadatan Fisiologis (Physiological Density)', 'Jumlah Total Penduduk (jiwa) / Luas Lahan Pertanian Produktif (km²)', 'Mengukur tekanan riil seluruh populasi manusia terhadap ketersediaan lahan penghasil pangan'],
            ['3. Kepadatan Agraris (Agricultural Density)', 'Jumlah Penduduk Petani Saja (jiwa) / Luas Lahan Pertanian Produktif (km²)', 'Mengukur intensitas ketenagakerjaan dan efisiensi lahan tani; semakin tinggi angkanya, semakin sempit rata-rata lahan garapan tiap keluarga petani']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Kategori Laju Pertumbuhan Penduduk (BPS)',
        items: [
          { name: 'Rendah', description: 'Laju pertumbuhan < 1% per tahun.' },
          { name: 'Sedang', description: 'Laju pertumbuhan antara 1% hingga 2% per tahun (Indonesia saat ini ~1,25%).' },
          { name: 'Tinggi', description: 'Laju pertumbuhan > 2% per tahun (risiko ledakan penduduk / population explosion).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengumpulan Data Sensus', title: 'Data Populasi & Tutupan Lahan', description: 'BPS dan Kementerian Pertanian mengumpulkan data jumlah jiwa dan luas sawah baku.' },
      { stage: 'Kalkulasi Rasio Metrik', title: 'Perhitungan Tiga Kepadatan', description: 'Menghitung kepadatan aritmatik, fisiologis, dan agraris tingkat kabupaten.' },
      { stage: 'Analisis Tekanan Pangan', title: 'Evaluasi Kerentanan Spasial', description: 'Mengidentifikasi kabupaten dengan kepadatan fisiologis ekstrem untuk relokasi atau intensifikasi.' }
    ],
    caseStudies: [
      {
        title: 'Komparasi Kepadatan Aritmatik vs Fisiologis di Daerah Istimewa Yogyakarta',
        location: 'Kabupaten Gunungkidul dan Sleman, D.I. Yogyakarta',
        description: 'Kabupaten Gunungkidul memiliki kepadatan aritmatik rendah (~530 jiwa/km²) karena wilayahnya sangat luas berbukit kapur karst. Namun ketika dihitung Kepadatan Fisiologisnya (penduduk dibagi lahan sawah subur yang sempit), nilainya melonjak tajam melebihi 2.200 jiwa/km² lahan pangan. Ini membuktikan bahwa tekanan riil terhadap lahan subur di Gunungkidul sangat tinggi meski wilayah fisiknya tampak lengang.',
        takeaway: 'Kepadatan fisiologis mengungkap realitas daya dukung pangan yang tersembunyi di balik kepadatan aritmatik.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Komparasi Tiga Jenis Kepadatan Penduduk: Aritmatik, Fisiologis, dan Agraris',
        caption: 'Bagan perbandingan luas wilayah total, luas lahan pertanian, dan jumlah petani dalam mengukur kepadatan.',
        badge: 'Spatial Density Metrics'
      }
    ],
    terminology: [
      { term: 'Kepadatan Fisiologis', definition: 'Perbandingan antara jumlah total seluruh penduduk suatu wilayah dengan luas lahan pertanian produktif yang tersedia.', scientificTerm: 'Physiological Density' },
      { term: 'Kepadatan Agraris', definition: 'Perbandingan antara jumlah penduduk yang bermata pencaharian sebagai petani dengan luas total lahan pertanian.', scientificTerm: 'Agricultural Density' },
      { term: 'Doubling Time (Waktu Penggandaan)', definition: 'Perkiraan jumlah tahun yang dibutuhkan oleh suatu populasi untuk bertambah menjadi dua kali lipat pada tingkat pertumbuhan konstan.', scientificTerm: 'Doubling Time' }
    ],
    summary: [
      'Pertumbuhan penduduk total memperhitungkan kelahiran, kematian, dan migrasi neto.',
      'Waktu penggandaan (Doubling Time) dihitung dengan aturan 70: DT = 70 / r%.',
      'Kepadatan fisiologis dan agraris memberikan gambaran akurat mengenai tekanan penduduk terhadap lahan pangan dibanding kepadatan aritmatik biasa.'
    ],
    quiz: [
      {
        id: 'q72-1',
        question: 'Sebuah wilayah memiliki laju pertumbuhan penduduk sebesar 1,4% per tahun secara konstan. Berdasarkan aturan Doubling Time (Rule of 70), dalam berapa tahunkah jumlah penduduk wilayah tersebut akan berlipat ganda menjadi dua kali lipat?',
        options: ['25 tahun', '35 tahun', '50 tahun', '70 tahun'],
        correctAnswer: 2,
        explanation: 'Doubling Time = 70 / laju pertumbuhan (%) = 70 / 1,4 = 50 tahun.'
      },
      {
        id: 'q72-2',
        question: 'Metrik kepadatan penduduk yang membagi jumlah seluruh penduduk dengan luas lahan pertanian produktif yang tersedia di suatu wilayah dinamakan...',
        options: ['Kepadatan penduduk aritmatik', 'Kepadatan penduduk agraris', 'Kepadatan penduduk fisiologis', 'Kepadatan penduduk ekonomis'],
        correctAnswer: 2,
        explanation: 'Kepadatan penduduk fisiologis membagi total penduduk suatu wilayah dengan luas lahan pertanian produktif tempat menghasilkan bahan pangan.'
      }
    ],
    references: ['Weeks, J. R. (2015). Population: An Introduction to Concepts and Issues. Cengage Learning.', 'Mantra, I. B. (2000). Demografi Umum. Pustaka Pelajar.'],
    relatedTopicIds: ['dinamika-kependudukan', 'persebaran-penduduk', 'komposisi-dan-struktur-penduduk', 'daya-dukung-dan-daya-tampung-lingkungan']
  },
  {
    id: 'persebaran-penduduk',
    number: 73,
    title: 'Persebaran Penduduk',
    englishTitle: 'Population Distribution and Spatial Disparities in Indonesia',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis disparitas persebaran spasial penduduk Indonesia: konsentrasi ekstrem di Pulau Jawa (56% populasi di 6,7% luas daratan), faktor pendorong konsentrasi spasial (sejarah agraris, tanah vulkanis, pusat industri/politik), serta kebijakan pemerataan pembangunan Indonesia-sentris.',
    keywords: ['persebaran penduduk', 'konsentrasi penduduk jawa', 'disparitas spasial', 'pemerataan penduduk', 'kepadatan pulau jawa'],
    learningObjectives: [
      'Menganalisis peta persebaran penduduk Indonesia dan data statistik konsentrasi di Pulau Jawa.',
      'Mengidentifikasi faktor fisik (tanah vulkanik, air, relief) dan sosial (sejarah, ekonomi, pusat pemerintahan) yang memicu ketimpangan persebaran penduduk.',
      'Mengevaluasi kebijakan pemerintah dalam mengatasi ketimpangan persebaran penduduk (transmigrasi, tol laut, pembangunan IKN Nusantara).'
    ],
    introduction: 'Persebaran Penduduk (Population Distribution) adalah bentuk penyebaran atau agihan penduduk pada suatu wilayah atau negara, apakah penduduk tersebar secara merata atau memusat pada kantung-kantung wilayah tertentu. Masalah kependudukan paling krusial di Indonesia bukanlah semata-mata jumlah total penduduknya yang mencapai 275 juta jiwa (peringkat 4 terbesar dunia), melainkan ketimpangan persebaran spasialnya yang luar biasa ekstrem: lebih dari separuh penduduk menumpuk di satu pulau kecil, yaitu Pulau Jawa.',
    sections: [
      {
        subtitle: '1. Potret Disparitas Persebaran Penduduk Indonesia (Sensus BPS 2020)',
        content: 'Ketimpangan persebaran demografi antarpulau di Indonesia sangat kontras:',
        table: {
          headers: ['Pulau / Wilayah Kepulauan', 'Persentase Luas Daratan Indonesia (%)', 'Persentase Total Penduduk Nasional (%)', 'Kepadatan Penduduk Rata-Rata (jiwa/km²)'],
          rows: [
            ['Pulau Jawa', '6,75%', '56,10% (~151,6 juta jiwa)', 'Sangat Padat: 1.166 jiwa/km² (bahkan Jakarta > 15.000 jiwa/km²)'],
            ['Pulau Sumatra', '25,60%', '21,68% (~58,5 juta jiwa)', 'Sedang: 123 jiwa/km²'],
            ['Pulau Sulawesi', '9,90%', '7,36% (~19,9 juta jiwa)', 'Sedang: 114 jiwa/km²'],
            ['Kepulauan Kalimantan', '28,10%', '6,15% (~16,6 juta jiwa)', 'Jarang: 31 jiwa/km²'],
            ['Bali & Nusa Tenggara', '3,90%', '5,54% (~15,0 juta jiwa)', 'Padat: 205 jiwa/km² (Bali sangat padat ~750 jiwa/km²)'],
            ['Kepulauan Maluku', '4,10%', '1,17% (~3,1 juta jiwa)', 'Sangat Jarang: 41 jiwa/km²'],
            ['Pulau Papua', '21,65%', '2,02% (~5,4 juta jiwa)', 'Sangat Lengang: hanya 13 jiwa/km²']
          ]
        }
      },
      {
        subtitle: '2. Faktor Penyebab Konsentrasi Penduduk di Pulau Jawa',
        content: 'Konsentrasi demografi di Pulau Jawa merupakan hasil interaksi faktor sejarah dan fisik selama ratusan tahun:',
        keyPoints: [
          'Faktor Geologis & Kesuburan Tanah: Rantai puluhan gunung api aktif di Jawa meremajakan tanah abu vulkanik (Andosol) secara berkala, menyediakan hara subur bagi pertanian padi sawah intensif berdaya dukung pangan tinggi.',
          'Faktor Sejarah Peradaban Agraris: Sejak zaman Kerajaan Mataram Kuno, Majapahit, hingga masa Tanam Paksa kolonial Belanda, pusat kekuasaan politik dan investasi infrastruktur kereta api/jalan raya terpusat di Jawa.',
          'Faktor Aglomerasi Ekonomi & Industri Modern: Lebih dari 55% Produk Domestik Bruto (PDB) nasional berputar di Jawa; pelabuhan laut Tanjung Priok, kawasan industri Jabodetabek, dan perguruan tinggi terbaik terkonsentrasi di Jawa, menarik jutaan pendatang dari luar Jawa.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dampak Negatif Ketimpangan Persebaran Penduduk',
        items: [
          { name: 'Dampak di Pulau Jawa (Overcrowded)', description: 'Alih fungsi sawah subur menjadi perumahan, kemacetan lalu lintas, krisis air tanah bersih, dan banjir perkotaan.' },
          { name: 'Dampak di Luar Jawa (Underpopulated)', description: 'Kekurangan tenaga kerja terampil untuk mengelola kekayaan sumber daya alam tambang, kehutanan, dan perkebunan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Konsentrasi Historis', title: 'Pusat Agraris Tradisional', description: 'Tanah vulkanis subur Jawa menopang kepadatan penduduk tinggi sejak ribuan tahun silam.' },
      { stage: 'Sentralisasi Pembangunan', title: 'Aglomerasi Industri Modern', description: 'Pabrik manufaktur dan universitas terbaik dibangun di Jawa memicu urbanisasi massal.' },
      { stage: 'Redistribusi Spasial', title: 'Transformasi Indonesia-Sentris', description: 'Pembangunan IKN di Kalimantan dan infrastruktur KEK luar Jawa untuk menyebarkan titik pertumbuhan.' }
    ],
    caseStudies: [
      {
        title: 'Pemindahan Ibu Kota Negara ke IKN Nusantara sebagai Solusi Spasial Ketimpangan Penduduk',
        location: 'Kalimantan Timur, Indonesia',
        description: 'Pulau Jawa sudah menampung beban lingkungan yang melampaui daya dukungnya dengan konsentrasi 150 juta jiwa. Pemindahan pusat pemerintahan ke IKN Nusantara di Kalimantan Timur bertujuan mendistribusikan pusat gravitasi ekonomi baru di luar Jawa, membuka koridor investasi Indonesia Timur, dan mendorong persebaran penduduk yang lebih berkeadilan secara spasial.',
        takeaway: 'Mengubah pola persebaran penduduk menuntut intervensi berani pengalihan pusat gravitasi kekuasaan politik.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Anomali Persebaran Penduduk Indonesia: Kontras Jawa vs Papua',
        caption: 'Peta densitas choropleth: Pulau Jawa yang merah menyala (>1.000 jiwa/km²) berdampingan dengan Kalimantan dan Papua yang hijau lengang (<30 jiwa/km²).',
        badge: 'Spatial Distribution'
      }
    ],
    terminology: [
      { term: 'Persebaran Penduduk', definition: 'Bentuk penyebaran spasial penduduk di suatu wilayah atau negara, yang menunjukkan tingkat pemusatan atau ketidakmerataan geografis.', scientificTerm: 'Population Distribution' },
      { term: 'Aglomerasi Penduduk', definition: 'Pemusatan spasial penduduk dan aktivitas ekonomi di suatu wilayah metropolitan tertentu akibat keuntungan kedekatan fasilitas.', scientificTerm: 'Population Agglomeration' },
      { term: 'Daya Dukung Lingkungan Terlampaui (Overshoot)', definition: 'Kondisi di mana jumlah populasi manusia di suatu wilayah telah melampaui kemampuan alam menyediakan air bersih dan pangan.', scientificTerm: 'Ecological Overshoot' }
    ],
    summary: [
      'Persebaran penduduk Indonesia sangat timpang: 56% penduduk menempati Pulau Jawa yang hanya 6,7% luas daratan.',
      'Faktor pemicu konsentrasi di Jawa adalah kesuburan tanah vulkanik, sejarah peradaban, dan aglomerasi ekonomi modern.',
      'Pembangunan berparadigma Indonesia-sentris dan IKN bertujuan merestrukturisasi ketimpangan persebaran spasial ini.'
    ],
    quiz: [
      {
        id: 'q73-1',
        question: 'Berdasarkan hasil Sensus Penduduk 2020, berapakah persentase penduduk Indonesia yang terkonsentrasi mendiami Pulau Jawa, padahal luas Pulau Jawa hanya sekitar 6,75% dari total luas daratan NKRI?',
        options: ['Sekitar 25%', 'Sekitar 40%', 'Sekitar 56%', 'Sekitar 85%'],
        correctAnswer: 2,
        explanation: 'Data Sensus Penduduk BPS 2020 mencatat sekitar 56,1% (~151,6 juta jiwa) penduduk Indonesia tinggal di Pulau Jawa, menciptakan disparitas spasial ekstrem.'
      },
      {
        id: 'q73-2',
        question: 'Faktor fisik alamiah yang paling mendasari mengapa Pulau Jawa mampu menampung kepadatan penduduk yang sangat tinggi sejak zaman kuno adalah...',
        options: [
          'Memiliki cadangan minyak bumi terbesar',
          'Tingginya kesuburan tanah vulkanis andosol akibat banyaknya gunung api aktif dan ketersediaan air melimpah',
          'Suhu udaranya paling dingin di Indonesia',
          'Tidak memiliki kawasan hutan'
        ],
        correctAnswer: 1,
        explanation: 'Tanah vulkanik subur dan sistem hidrologi air yang stabil di Jawa memungkinkan budidaya pertanian padi sawah intensif berdaya dukung pangan tinggi penopang peradaban padat.'
      }
    ],
    references: ['BPS. (2020). Sensus Penduduk 2020: Potret Sensus Kependudukan Menuju Satu Data Kependudukan Indonesia.', 'Jones, G. W. (2013). The Population of Southeast Asia. ISEAS Publishing.'],
    relatedTopicIds: ['pertumbuhan-dan-kepadatan-penduduk', 'kondisi-fisik-dan-sosial-wilayah-indonesia', 'urbanisasi-dan-transmigrasi', 'komposisi-dan-struktur-penduduk']
  },
  {
    id: 'kelahiran-kematian-dan-migrasi',
    number: 74,
    title: 'Kelahiran, Kematian, dan Migrasi',
    englishTitle: 'Fertility, Mortality, and Migration Dynamics',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menguasai tiga komponen determinan demografi: Fertilitas/Kelahiran (CBR, ASBR, TFR), Mortalitas/Kematian (CDR, ASDR, IMR / Angka Kematian Bayi), serta Migrasi (migrasi neto, migrasi internasional: imigrasi/emigrasi/remigrasi, migrasi nasional: transmigrasi/urbanisasi/ruralisasi/sirkuler).',
    keywords: ['crude birth rate cbr', 'angka kematian bayi imr', 'total fertility rate tfr', 'crude death rate cdr', 'migrasi internasional nasional', 'migrasi sirkuler komuter'],
    learningObjectives: [
      'Menghitung angka kelahiran kasar (CBR) dan angka kelahiran menurut kelompok umur (ASBR).',
      'Menghitung angka kematian kasar (CDR) dan menganalisis signifikansi Angka Kematian Bayi (IMR) sebagai indikator kesehatan.',
      'Mengklasifikasikan jenis-jenis migrasi internasional dan migrasi nasional permanen serta non-permanen (sirkuler/komuter).'
    ],
    introduction: 'Tiga pilar pendorong dinamika kependudukan adalah Kelahiran (Fertilitas), Kematian (Mortalitas), dan Perpindahan Penduduk (Migrasi). Kelahiran menambah jumlah penduduk, kematian mengurangi jumlah penduduk, sedangkan migrasi dapat menambah atau mengurangi populasi tergantung arah arusnya. Para demograf menghitung laju peristiwa vital ini menggunakan angka-angka rasio per 1.000 penduduk untuk membandingkan derajat kesehatan dan perkembangan sosial antarwilayah secara objektif.',
    sections: [
      {
        subtitle: '1. Pengukuran Fertilitas (Kelahiran)',
        content: 'Angka kelahiran diukur melalui indikator kasar maupun spesifik umur:',
        table: {
          headers: ['Indikator Fertilitas', 'Rumus Matematis', 'Definisi & Signifikansi'],
          rows: [
            ['Crude Birth Rate (CBR)', 'CBR = (B / P) × 1.000', 'B = Total Kelahiran setahun; P = Total Penduduk pertengahan tahun.\nMenunjukkan jumlah kelahiran hidup per 1.000 penduduk dalam setahun'],
            ['Age Specific Birth Rate (ASBR)', 'ASBRx = (Bx / Pfx) × 1.000', 'Bx = Kelahiran dari wanita kelompok umur x; Pfx = Jumlah wanita kelompok umur x.\nLebih akurat karena memperhitungkan wanita usia subur (15-49 tahun)'],
            ['Total Fertility Rate (TFR)', 'TFR = 5 × Σ ASBR / 1.000', 'Rata-rata perkiraan jumlah anak yang akan dilahirkan oleh seorang wanita sepanjang masa reproduksinya.\nTFR Indonesia saat ini mendekati 2,1 anak per wanita (replacement level)']
          ]
        }
      },
      {
        subtitle: '2. Pengukuran Mortalitas (Kematian)',
        content: 'Angka kematian mencerminkan kualitas sanitasi dan pelayanan kesehatan:',
        table: {
          headers: ['Indikator Mortalitas', 'Rumus Matematis', 'Definisi & Signifikansi'],
          rows: [
            ['Crude Death Rate (CDR)', 'CDR = (D / P) × 1.000', 'D = Total Kematian setahun; P = Total Penduduk pertengahan tahun.\nMenunjukkan jumlah kematian per 1.000 penduduk dalam satu tahun'],
            ['Infant Mortality Rate (IMR)', 'IMR = (D0 / B) × 1.000', 'D0 = Jumlah kematian bayi berusia di bawah 1 tahun; B = Total kelahiran hidup.\nIndikator paling sensitif untuk mengukur derajat kesehatan masyarakat dan kemiskinan suatu negara']
          ]
        }
      },
      {
        subtitle: '3. Klasifikasi Lengkap Migrasi Penduduk',
        content: 'Migrasi adalah perpindahan penduduk melintasi batas wilayah administratif tertentu dengan tujuan menetap:',
        keyPoints: [
          'Migrasi Internasional: Imigrasi (masuknya penduduk negara lain menetap ke dalam negeri), Emigrasi (keluarnya penduduk ke luar negeri), dan Remigrasi/Repatriasi (kembalinya migran ke negara asalnya).',
          'Migrasi Nasional: Urbanisasi (desa ke kota), Ruralisasi (kembali dari kota ke desa), Transmigrasi (pulau padat ke pulau jarang penduduk), Evakuasi (pindah darurat karena bencana alam).',
          'Mobilitas Non-Permanen (Sirkuler): Komuter/Ulang-Alik (pergi-pulang kerja di kota lain dalam hari yang sama) dan Menginap/Sirkuler (tinggal sementara mingguan/bulanan di kota tanpa berniat mengganti KTP domisili).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Faktor Pendorong dan Penarik Migrasi (Everett S. Lee)',
        items: [
          { name: 'Faktor Pendorong di Daerah Asal (Push Factors)', description: 'Penyempitan lahan pertanian, pengangguran di desa, bencana kekeringan, fasilitas pendidikan minim.' },
          { name: 'Faktor Penarik di Daerah Tujuan (Pull Factors)', description: 'Upah kerja lebih tinggi di kota, kelengkapan sarana hiburan dan pendidikan, persepsi kemudahan hidup.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pencatatan Peristiwa Vital', title: 'Registrasi Kelahiran & Kematian', description: 'Rumah sakit dan kelurahan mencatat kelahiran akta lahir dan surat kematian.' },
      { stage: 'Kalkulasi Angka IMR', title: 'Evaluasi Kesehatan Ibu dan Anak', description: 'Menghitung rasio kematian bayi per 1.000 kelahiran hidup sebagai rapor kinerja puskesmas.' },
      { stage: 'Analisis Migrasi Risen', title: 'Pelacakan Mobilitas Spasial', description: 'Sensus BPS menanyakan tempat tinggal 5 tahun lalu untuk memetakan arus migrasi neto antardaerah.' }
    ],
    caseStudies: [
      {
        title: 'Fenomena Jutaan Komuter "Bodetabek" yang Menyerbu Jakarta Setiap Hari Kerja',
        location: 'Kawasan Metropolitan Jabodetabek, Indonesia',
        description: 'Setiap hari kerja dari Senin hingga Jumat, lebih dari 3,5 juta penduduk dari daerah penyangga (Bogor, Depok, Tangerang, Bekasi) bergerak melakukan mobilitas non-permanen (komuter) menggunakan KRL Commuter Line, LRT, dan jalan tol menuju pusat bisnis Jakarta pada pagi hari, lalu kembali pulang pada sore dan malam hari.',
        takeaway: 'Mobilitas sirkuler harian menuntut integrasi sistem transportasi massal lintas batas provinsi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Taksonomi Migrasi Penduduk: Internasional, Nasional, dan Sirkuler Komuter',
        caption: 'Bagan pembagian migrasi internasional (imigrasi, emigrasi) dan nasional (urbanisasi, transmigrasi, komuter harian).',
        badge: 'Migration Typology'
      }
    ],
    terminology: [
      { term: 'Infant Mortality Rate (IMR)', definition: 'Banyaknya kematian bayi berusia di bawah satu tahun per 1.000 kelahiran hidup dalam kurun waktu satu tahun kalender.', scientificTerm: 'Infant Mortality Rate' },
      { term: 'Total Fertility Rate (TFR)', definition: 'Rata-rata jumlah anak hidup yang akan dilahirkan oleh seorang wanita sepanjang masa reproduksi suburnya (15-49 tahun).', scientificTerm: 'Total Fertility Rate' },
      { term: 'Komuter (Ulang-Alik)', definition: 'Bentuk mobilitas penduduk non-permanen di mana seseorang bepergian melintasi batas kota untuk bekerja atau sekolah dan pulang pada hari yang sama.', scientificTerm: 'Commuter' }
    ],
    summary: [
      'Determinan kependudukan mencakup kelahiran (CBR, ASBR, TFR), kematian (CDR, IMR), dan migrasi.',
      'IMR adalah indikator paling sensitif untuk menilai derajat kesehatan dan kesejahteraan masyarakat.',
      'Migrasi terbagi menjadi internasional (imigrasi/emigrasi) dan nasional, serta mobilitas non-permanen komuter.'
    ],
    quiz: [
      {
        id: 'q74-1',
        question: 'Indikator demografi yang mengukur banyaknya kematian bayi berusia di bawah satu tahun per 1.000 kelahiran hidup dalam kurun waktu satu tahun dan menjadi indikator paling sensitif derajat kesehatan suatu negara adalah...',
        options: ['Crude Death Rate (CDR)', 'Age Specific Death Rate (ASDR)', 'Infant Mortality Rate (IMR)', 'Maternal Mortality Rate (MMR)'],
        correctAnswer: 2,
        explanation: 'Infant Mortality Rate (IMR) adalah angka kematian bayi di bawah usia 1 tahun per 1.000 kelahiran hidup yang mencerminkan kualitas gizi, imunisasi, dan sanitasi air bersih.'
      },
      {
        id: 'q74-2',
        question: 'Seorang pekerja yang berdomisili di Kota Depok setiap pagi menaiki kereta KRL menuju kantornya di Jakarta Pusat dan kembali pulang ke Depok pada sore harinya melakukan bentuk perpindahan yang disebut...',
        options: ['Urbanisasi permanen', 'Transmigrasi bedol desa', 'Mobilitas komuter (ulang-alik)', 'Emigrasi internasional'],
        correctAnswer: 2,
        explanation: 'Mobilitas komuter (ulang-alik) adalah gerakan penduduk non-permanen yang bepergian ke tempat kerja atau sekolah di luar daerah domisilinya dan kembali pulang pada hari yang sama.'
      }
    ],
    references: ['BPS. (2020). Indikator Kependudukan Indonesia Hasil SP2020.', 'Lee, E. S. (1966). A Theory of Migration. Demography.'],
    relatedTopicIds: ['dinamika-kependudukan', 'urbanisasi-dan-transmigrasi', 'komposisi-dan-struktur-penduduk', 'kualitas-penduduk-dan-indeks-pembangunan-manusia-ipm']
  },
  {
    id: 'urbanisasi-dan-transmigrasi',
    number: 75,
    title: 'Urbanisasi dan Transmigrasi',
    englishTitle: 'Urbanization and Transmigration Programs in Indonesia',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis dua fenomena arus migrasi terbesar di Indonesia: Urbanisasi (faktor penarik kota vs pendorong desa, aglomerasi megacity Jabodetabek, kemacetan, permukiman kumuh slum area) dan Transmigrasi (sejarah kolonisasi Belanda hingga era Republik, transmigrasi umum vs swakarsa, serta peran transmigrasi membuka sentra ekonomi baru luar Jawa).',
    keywords: ['urbanisasi', 'transmigrasi umum swakarsa', 'permukiman kumuh slum', 'push pull factor', 'kolonisasi belanda lampung', 'aglomerasi megapolitan'],
    learningObjectives: [
      'Menjelaskan definisi urbanisasi dan menganalisis faktor penarik kota serta faktor pendorong desa.',
      'Menelusuri sejarah program Transmigrasi di Indonesia dari era kolonisasi Belanda 1905 di Gedong Tataan Lampung hingga masa kini.',
      'Mengevaluasi dampak positif dan tantangan sosial-ekologis dari program transmigrasi di luar Pulau Jawa.'
    ],
    introduction: 'Urbanisasi dan Transmigrasi adalah dua arus gerak spasial penduduk paling transformatif yang membentuk wajah demografi, ekonomi, dan bentang lahan Indonesia modern. Urbanisasi menyedot jutaan pemuda desa menuju gemerlap kawasan metropolitan Jawa, melahirkan aglomerasi megapolitan raksasa Jabodetabekpunjur dengan segala tantangan permukiman kumuh dan kemacetannya. Di sisi lain, Transmigrasi adalah program rekayasa demografi terencana tertua di dunia yang memindahkan jutaan keluarga dari Jawa-Bali menuju pulau-pulau luar Jawa untuk membuka lumbung pangan baru dan memperkuat integrasi nasional.',
    sections: [
      {
        subtitle: '1. Fenomena Urbanisasi di Indonesia: Penyebab dan Dampak',
        content: 'Urbanisasi adalah proses pengkotaan atau pertambahan proporsi penduduk yang tinggal di kawasan perkotaan:',
        table: {
          headers: ['Aspek Urbanisasi', 'Faktor & Kondisi Lapangan', 'Manifestasi Geografis'],
          rows: [
            ['Faktor Pendorong dari Desa (Push Factors)', 'Penyempitan lahan waris pertanian menjadi sempit tak ekonomis; upah tani rendah; minimnya lapangan kerja non-pertanian; fasilitas hiburan dan pendidikan tinggi nihil', 'Pemuda desa usia produktif berbondong-bondong meninggalkan sektor pertanian menuju kota'],
            ['Faktor Penarik ke Kota (Pull Factors)', 'Pusat perputaran uang dan industri; upah minimum regional (UMR) lebih tinggi; fasilitas pendidikan dan kesehatan lengkap; gaya hidup modern', 'Konsentrasi jutaan pendatang di kota metropolitan Jakarta, Surabaya, Bandung, Medan, Makassar'],
            ['Dampak Negatif di Perkotaan', 'Pertumbuhan penduduk kota melampaui daya dukung infrastruktur perkotaan', 'Menjamurnya permukiman kumuh liar (slum area) di bantaran kali dan kolong jembatan; kemacetan parah; melonjaknya sektor informal (pedagang kaki lima/asongan); polusi udara dan sampah'],
            ['Dampak Negatif di Pedesaan', 'Kekurangan tenaga kerja muda di sektor pertanian (aging farmer)', 'Lahan sawah terbengkalai tidak tergarap; terhambatnya adopsi teknologi agribisnis modern di pedesaan']
          ]
        }
      },
      {
        subtitle: '2. Program Transmigrasi: Sejarah dan Jenis-Jenisnya',
        content: 'Transmigrasi adalah pemindahan penduduk secara sukarela dari wilayah padat (Jawa, Bali, Lombok) ke wilayah yang jarang penduduknya (Sumatra, Kalimantan, Sulawesi, Papua) di dalam wilayah NKRI:',
        keyPoints: [
          'Sejarah Awal (Kolonisasi 1905): Dimulai oleh pemerintah kolonial Belanda pada November 1905 dengan memindahkan 155 keluarga dari Kedu (Jawa Tengah) ke Gedong Tataan, Lampung.',
          'Transmigrasi Umum: Dibiayai sepenuhnya oleh APBN pemerintah (diberi rumah panggung sederhana, lahan pekarangan, lahan usaha pertanian 2 hektar, dan jaminan hidup gratis selama 1-1,5 tahun pertama).',
          'Transmigrasi Swakarsa Mandiri (TSM): Diprakarsai dan dibiayai sendiri oleh transmigran dengan bimbingan pemerintah.',
          'Transmigrasi Bedol Desa: Pemindahan seluruh warga satu desa beserta perangkat desanya karena desa asalnya terancam proyek strategis nasional (contoh: pemindahan warga Wonogiri ke Sitiung Sumatra Barat akibat pembangunan Waduk Gajah Mungkur 1976).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Sisi Dampak Transmigrasi',
        items: [
          { name: 'Dampak Positif', description: 'Membuka hutan menjadi sentra pangan dan sawit baru (seperti Lampung, Riau, Sumsel); menciptakan integrasi pembauran suku bangsa; mengurangi tekanan penduduk Jawa.' },
          { name: 'Tantangan Ekologis & Sosial', description: 'Konflik sengketa lahan ulayat dengan masyarakat adat lokal; kegagalan panen di tanah gambut asam; kecemburuan sosial fasilitas bantuan transmigran.' }
        ]
      }
    ],
    processes: [
      { stage: 'Seleksi & Pelatihan Calon', title: 'Pemberkasan Transmigran', description: 'Dinas Tenaga Kerja dan Transmigrasi melatih keterampilan bertani lahan kering dan menjahit.' },
      { stage: 'Penyiapan Lahan UPT', title: 'Pembangunan Permukiman Baru', description: 'Membuka Unit Permukiman Transmigrasi (UPT) lengkap dengan jalan poros, rumah, dan puskesmas pembantu.' },
      { stage: 'Kemandirian Ekonomi', title: 'Pelepasan Menjadi Desa Definitif', description: 'Setelah 5 tahun mandiri dan lahan produktif menghasilkan panen, UPT dilepas menjadi desa administratif otonom.' }
    ],
    caseStudies: [
      {
        title: 'Transformasi Provinsi Lampung dari Hutan Belantara Menjadi Lumbung Pangan Hasil Transmigrasi',
        location: 'Provinsi Lampung, Sumatra Bagian Selatan',
        description: 'Lampung adalah laboratorium transmigrasi paling sukses di Indonesia. Dimulai dari kolonisasi 1905, gelombang transmigrasi selama puluhan tahun telah mengubah lanskap Lampung menjadi sentra perkebunan kopi, lada, ubi kayu, dan persawahan padi termaju di Sumatra, di mana lebih dari 65% populasi Lampung saat ini merupakan keturunan transmigran suku Jawa dan Sunda yang hidup berdampingan harmonis dengan suku Lampung asli.',
        takeaway: 'Transmigrasi mampu merekayasa bentang alam liar menjadi pusat pertumbuhan ekonomi regional baru.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Rute Aliran Transmigrasi Historis dari Jawa ke Luar Jawa',
        caption: 'Peta rute migrasi transmigrasi dari Jawa-Bali menuju sentra UPT di Sumatra (Lampung/Riau), Kalimantan, Sulawesi, dan Papua.',
        badge: 'Transmigration Atlas'
      }
    ],
    terminology: [
      { term: 'Urbanisasi', definition: 'Proses pertambahan proporsi penduduk yang tinggal di daerah perkotaan yang dipicu oleh perpindahan penduduk desa ke kota dan pemekaran wilayah pedesaan menjadi kota.', scientificTerm: 'Urbanization' },
      { term: 'Transmigrasi Bedol Desa', definition: 'Pemindahan transmigrasi yang dilakukan terhadap seluruh penduduk satu desa beserta aparat pemerintah desanya karena wilayah asalnya terkena proyek pembangunan bendungan waduk.', scientificTerm: 'Bedol Desa Transmigration' },
      { term: 'Permukiman Kumuh (Slum Area)', definition: 'Kawasan hunian perkotaan yang tidak layak huni dengan kepadatan bangunan sangat tinggi, sanitasi buruk, dan tidak memiliki akses legal tanah.', scientificTerm: 'Urban Slum' }
    ],
    summary: [
      'Urbanisasi dipicu oleh faktor pendorong kemiskinan desa dan faktor penarik peluang ekonomi kota.',
      'Urbanisasi tak terkendali memicu timbulnya permukiman kumuh (slum), kemacetan, dan polusi di megacity.',
      'Transmigrasi memindahkan penduduk secara sukarela dari Jawa-Bali ke luar Jawa untuk membuka sentra pertumbuhan ekonomi pangan baru.'
    ],
    quiz: [
      {
        id: 'q75-1',
        question: 'Program pemindahan seluruh penduduk satu desa beserta aparat pemerintahannya secara serentak karena wilayah desa asalnya ditenggelamkan oleh proyek pembangunan bendungan waduk (seperti kasus Waduk Gajah Mungkur ke Sitiung) disebut transmigrasi...',
        options: ['Transmigrasi swakarsa mandiri', 'Transmigrasi bedol desa', 'Transmigrasi sektoral', 'Transmigrasi lokal'],
        correctAnswer: 1,
        explanation: 'Transmigrasi bedol desa adalah pemindahan seluruh komunitas satu desa secara utuh karena wilayah asalnya terkena proyek strategis nasional seperti waduk air.'
      },
      {
        id: 'q75-2',
        question: 'Manakah dari fenomena berikut yang merupakan faktor pendorong (push factor) terjadinya urbanisasi dari desa ke kota besar?',
        options: [
          'Upah minimum kerja di kota yang lebih tinggi',
          'Penyempitan luas kepemilikan lahan sawah pertanian di desa dan upah buruh tani yang rendah',
          'Kelengkapan fasilitas hiburan dan pusat perbelanjaan di kota',
          'Keberadaan kampus perguruan tinggi ternama di ibu kota'
        ],
        correctAnswer: 1,
        explanation: 'Faktor pendorong (push factors) adalah kondisi negatif yang berasal dari daerah asal desa (seperti sempitnya sawah garapan dan kemiskinan) yang memaksa warga pergi.'
      }
    ],
    references: ['Hardjono, J. M. (1977). Transmigration in Indonesia. Oxford University Press.', 'Bappenas & BPS. (2018). Analisis Lanskap Urbanisasi Indonesia Menuju 2045.'],
    relatedTopicIds: ['kelahiran-kematian-dan-migrasi', 'dinamika-kependudukan', 'persebaran-penduduk', 'karakteristik-dan-potensi-desa']
  },
  {
    id: 'bonus-demografi',
    number: 76,
    title: 'Bonus Demografi',
    englishTitle: 'The Demographic Dividend: Opportunities, Requirements, and Challenges',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis jendela peluang emas Bonus Demografi (Demographic Dividend) di Indonesia periode 2020–2035: penurunan Rasio Ketergantungan di bawah 50, syarat mutlak pemanfaatan (pendidikan, vokasi, kesehatan, pembukaan lapangan kerja formal), serta ancaman "bencana demografi" (pengangguran terdidik dan jebakan pendapatan menengah / middle-income trap).',
    keywords: ['bonus demografi indonesia', 'demographic dividend', 'rasio ketergantungan rendah', 'indonesia emas 2045', 'middle income trap', 'angkatan kerja produktif'],
    learningObjectives: [
      'Menjelaskan konsep Bonus Demografi dan periode waktu berlangsungnya jendela peluang (window of opportunity) di Indonesia.',
      'Mengidentifikasi syarat-syarat mutlak agar bonus demografi bertransformasi menjadi pertumbuhan ekonomi riil.',
      'Menganalisis ancaman "Bencana Demografi" jika jutaan angkatan kerja usia produktif gagal diserap oleh lapangan kerja berkualitas.'
    ],
    introduction: 'Bonus Demografi (Demographic Dividend) adalah suatu fenomena keuntungan ekonomis yang dinikmati suatu negara ketika struktur umur populasinya didominasi oleh penduduk usia kerja produktif (15–64 tahun), sementara proporsi penduduk non-produktif (anak-anak 0-14 tahun dan lansia ≥65 tahun) berada pada titik terendah dalam sejarah, menghasilkan Rasio Ketergantungan (Dependency Ratio) di bawah 50. Jendela peluang emas ini hanya terjadi satu kali dalam sejarah peradaban suatu bangsa (hanya berlangsung sekitar 20–30 tahun) sebelum negara tersebut bergeser menjadi masyarakat menua (aging society).',
    sections: [
      {
        subtitle: '1. Jendela Peluang Emas Bonus Demografi Indonesia (2020–2035)',
        content: 'Data Sensus Penduduk 2020 membuktikan bahwa Indonesia saat ini sedang berada tepat di jantung puncak bonus demografi:',
        keyPoints: [
          'Komposisi Usia Emas: Sebanyak 70,72% populasi Indonesia (sekitar 191 juta jiwa) berada pada usia produktif 15–64 tahun.',
          'Rasio Ketergantungan Rendah: Nilai Dependency Ratio nasional mencapai 44,3, artinya setiap 100 orang usia produktif hanya menanggung beban 44 orang non-produktif.',
          'Potensi Tabungan Nasional (National Savings): Karena beban tanggungan anak sedikit, keluarga dapat menabung lebih banyak uang di bank, memicu akumulasi modal investasi domestik dan percepatan industrialisasi.',
          'Peluang Indonesia Emas 2045: Menjadi momentum strategis untuk membawa Indonesia keluar dari jebakan negara berpendapatan menengah (Middle-Income Trap) menuju jajaran 5 besar ekonomi dunia pada 100 tahun kemerdekaan Indonesia (2045).'
        ]
      },
      {
        subtitle: '2. Syarat Mutlak dan Ancaman "Bencana Demografi"',
        content: 'Bonus demografi bukanlah keajaiban otomatis yang datang dengan sendirinya (it is not a windfall, but an opportunity):',
        table: {
          headers: ['Aspek Kunci Penentu', 'Syarat Pemanfaatan Sukses', 'Risiko Jika Gagal (Bencana Demografi)'],
          rows: [
            ['Pendidikan & Vokasi', 'Peningkatan keterampilan STEM (Sains, Teknologi, Rekayasa, Matematika), link-and-match SMK dengan industri modern', 'Jutaan pemuda lulusan sekolah menganggur karena keahliannya usang tidak cocok dengan kebutuhan industri otomatisasi'],
            ['Kesehatan & Gizi', 'Pemberantasan stunting pada 1.000 Hari Pertama Kehidupan (HPK) agar kapasitas kognitif otak anak berkembang optimal', 'Generasi muda mengalami gangguan kecerdasan kognitif permanen dan produktivitas kerja rendah'],
            ['Penciptaan Lapangan Kerja', 'Iklim investasi kondusif, kepastian hukum, kemudahan berusaha UMKM, dan industrialisasi hilirisasi', 'Ledakan angka pengangguran terbuka usia muda (youth unemployment), lonjakan kriminalitas, dan instabilitas politik sosial'],
            ['Jebakan Pendapatan Menengah', 'Pertumbuhan ekonomi di atas 6-7% per tahun yang didorong oleh inovasi bernilai tambah tinggi', 'Terjebak dalam Middle-Income Trap: negara menjadi tua sebelum sempat menjadi kaya (growing old before getting rich)']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Macam Dividen Demografi (Demographic Dividends)',
        items: [
          { name: 'Dividen Demografi Pertama', description: 'Pertumbuhan ekonomi langsung yang dipicu oleh lonjakan jumlah tenaga kerja usia produktif yang bekerja.' },
          { name: 'Dividen Demografi Kedua', description: 'Akumulasi kekayaan dan investasi modal pensiun jangka panjang yang diinvestasikan kembali ke perekonomian pasar modal.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penurunan Fertilitas KB', title: 'Penciutan Usia Anak', description: 'Program KB menurunkan angka kelahiran anak, mengecilkan proporsi usia 0-14 tahun di dasar piramida.' },
      { stage: 'Pematangan Angkatan Kerja', title: 'Penggelembungan Usia Produktif', description: 'Jutaan anak masa lalu tumbuh dewasa menjadi pemuda usia 20-40 tahun yang siap bekerja produktif.' },
      { stage: 'Penuaan Penduduk (Aging)', title: 'Penutupan Jendela Peluang', description: 'Setelah 2035-2040, angkatan kerja menua menjadi lansia pensiunan, menaikkan kembali rasio ketergantungan.' }
    ],
    caseStudies: [
      {
        title: 'Pelajaran dari Keberhasilan Korea Selatan vs Kegagalan Amerika Latin Memanfaatkan Bonus Demografi',
        location: 'Korea Selatan (Asia Timur) vs Brasil (Amerika Latin)',
        description: 'Pada era 1970–1990, Korea Selatan berhasil memanfaatkan bonus demografinya dengan berinvestasi besar-besaran pada pendidikan teknologi tinggi, riset sains semikonduktor (Samsung/Hyundai), dan disiplin industri sehingga melompat dari negara miskin hancur perang menjadi negara maju terkaya dunia. Sebaliknya, beberapa negara Amerika Latin menyia-nyiakan bonus demografinya karena korupsi dan gagal menciptakan lapangan kerja, sehingga rasio ketergantungannya kini kembali naik sementara rakyatnya tetap miskin.',
        takeaway: 'Bonus demografi adalah kesempatan satu kali; tanpa investasi kualitas SDM ia akan berubah menjadi kutukan demografi.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Grafik Kurva Window of Opportunity Bonus Demografi Indonesia (1970–2050)',
        caption: 'Kurva penurunan Dependency Ratio di bawah 50 pada periode 2020-2035 yang membuka jendela peluang emas Indonesia Emas.',
        badge: 'Demographic Dividend'
      }
    ],
    terminology: [
      { term: 'Bonus Demografi', definition: 'Keuntungan ekonomis yang dinikmati suatu negara ketika jumlah penduduk usia produktif (15-64 tahun) jauh melebihi jumlah penduduk usia non-produktif.', scientificTerm: 'Demographic Dividend' },
      { term: 'Jendela Peluang (Window of Opportunity)', definition: 'Periode waktu terbatas (~20-30 tahun) ketika rasio ketergantungan berada pada titik terendah dalam sejarah sebelum negara memasuki fase penuaan penduduk.', scientificTerm: 'Window of Opportunity' },
      { term: 'Middle-Income Trap', definition: 'Kondisi ekonomi di mana suatu negara berpenghasilan menengah terperangkap stagnan dan gagal naik kelas menjadi negara maju berpendapatan tinggi.', scientificTerm: 'Middle-Income Trap' }
    ],
    summary: [
      'Bonus Demografi terjadi saat proporsi usia produktif (15-64 th) melebihi 70% dan rasio ketergantungan di bawah 50.',
      'Periode emas Indonesia berlangsung sekitar tahun 2020–2035 menuju visi Indonesia Emas 2045.',
      'Syarat mutlak pemanfaatan adalah mutu pendidikan vokasi, penurunan stunting, dan penciptaan lapangan kerja berkualitas.'
    ],
    quiz: [
      {
        id: 'q76-1',
        question: 'Kondisi demografi di mana suatu negara memiliki jumlah penduduk usia kerja produktif (15–64 tahun) yang sangat melimpah melebihi jumlah penduduk non-produktif sehingga Rasio Ketergantungan berada di bawah 50 dinamakan...',
        options: ['Ledakan penduduk (baby boom)', 'Bonus Demografi (Demographic Dividend)', 'Krisis penuaan penduduk', 'Transmigrasi massal'],
        correctAnswer: 1,
        explanation: 'Bonus demografi adalah kondisi di mana komposisi penduduk usia kerja produktif mendominasi dan rasio ketergantungan turun di bawah 50, memberikan peluang akselerasi pertumbuhan ekonomi.'
      },
      {
        id: 'q76-2',
        question: 'Dampak buruk yang dapat terjadi (Bencana Demografi) jika jutaan generasi muda usia produktif pada masa bonus demografi tidak memiliki keahlian kerja dan gagal diserap oleh lapangan kerja adalah...',
        options: [
          'Penurunan drastis jumlah lansia di perkotaan',
          'Tingginya angka pengangguran terbuka usia muda, kriminalitas meningkat, dan terjebak dalam Middle-Income Trap',
          'Gagalnya panen raya padi di pulau Jawa',
          'Hilangnya garis batas kedaulatan laut ZEE'
        ],
        correctAnswer: 1,
        explanation: 'Jika gagal dikelola dengan penyediaan lapangan kerja dan mutu pendidikan yang baik, bonus demografi akan menjadi bencana demografi berupa pengangguran masal dan kemiskinan.'
      }
    ],
    references: ['Bappenas. (2019). Bonus Demografi 2020-2035: Sebuah Peluang Emas Menuju Indonesia Maju.', 'Bloom, D. E., & Williamson, J. G. (1998). Demographic Transitions and Economic Miracles in Emerging Asia. World Bank Economic Review.'],
    relatedTopicIds: ['komposisi-dan-struktur-penduduk', 'piramida-penduduk', 'kualitas-penduduk-dan-indeks-pembangunan-manusia-ipm', 'permasalahan-kependudukan']
  },
  {
    id: 'kualitas-penduduk-dan-indeks-pembangunan-manusia-ipm',
    number: 77,
    title: 'Kualitas Penduduk dan Indeks Pembangunan Manusia (IPM)',
    englishTitle: 'Population Quality and Human Development Index (HDI)',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis mutu sumber daya manusia: konsep Indeks Pembangunan Manusia (IPM / Human Development Index), tiga dimensi komposit IPM menurut UNDP (Kesehatan/UHH, Pendidikan/HLS & RLS, Standar Hidup Layak/Pengeluaran per Kapita Paritas Daya Beli PPP), serta peta kesenjangan IPM antardaerah di Indonesia.',
    keywords: ['ipm indeks pembangunan manusia', 'hdi human development index', 'usia harapan hidup uhh', 'rata rata lama sekolah rls', 'harapan lama sekolah hls', 'paritas daya beli ppp'],
    learningObjectives: [
      'Menjelaskan definisi Indeks Pembangunan Manusia (IPM) sebagai indikator kemajuan manusia melampaui PDB murni.',
      'Mengidentifikasi 3 dimensi dan 4 indikator komposit penyusun rumus perhitungan IPM standar UNDP.',
      'Menganalisis disparitas spasial skor IPM antarprovinsi di Indonesia (Jawa-Bali vs Papua/NTT).'
    ],
    introduction: 'Kemajuan suatu bangsa tidak dapat hanya diukur dari angka pertumbuhan ekonomi atau Produk Domestik Bruto (PDB) semata. Ekonom Mahbub ul Haq dan Amartya Sen (Pemenang Nobel Ekonomi) merumuskan Indeks Pembangunan Manusia (IPM / Human Development Index / HDI) yang diadopsi oleh Program Pembangunan PBB (UNDP) sejak 1990. IPM mendudukkan manusia sebagai tujuan akhir pembangunan, bukan sekadar alat produksi. IPM mengukur capaian pembangunan manusia berbasis tiga dimensi fundamental: umur panjang dan hidup sehat, pengetahuan, serta standar hidup yang layak.',
    sections: [
      {
        subtitle: '1. Tiga Dimensi dan Empat Indikator Komposit IPM (Metode Baru BPS)',
        content: 'BPS mengukur IPM menggunakan metodologi geometris mutakhir UNDP:',
        table: {
          headers: ['Dimensi Pembangunan', 'Indikator Komposit Terukur', 'Satuan Standar', 'Nilai Maksimum & Minimum Standar'],
          rows: [
            ['1. Kesehatan & Umur Panjang', 'Usia Harapan Hidup saat Lahir (UHH / Life Expectancy)', 'Tahun', 'Maksimum: 85 tahun;\nMinimum: 20 tahun'],
            ['2. Pengetahuan & Pendidikan', 'a. Harapan Lama Sekolah (HLS / Expected Years of Schooling)\nb. Rata-rata Lama Sekolah (RLS / Mean Years of Schooling)', 'Tahun', 'HLS: Maks 18 th, Min 0 th;\nRLS: Maks 15 th, Min 0 th (untuk penduduk usia ≥ 25 tahun)'],
            ['3. Standar Hidup Layak', 'Pengeluaran Riil per Kapita yang Disesuaikan (Purchasing Power Parity / PPP)', 'Rupiah per orang per tahun (dihitung berbasis paritas daya beli)', 'Maksimum: Rp 26.572.000;\nMinimum: Rp 1.007.000']
          ]
        }
      },
      {
        subtitle: '2. Rumus Penghitungan IPM dan Kategori Capaian',
        content: 'IPM dihitung sebagai rata-rata geometris dari ketiga indeks dimensi:',
        keyPoints: [
          'Rumus Dimensi: Indeks = (Nilai Aktual – Nilai Minimum) / (Nilai Maksimum – Nilai Minimum)',
          'Rumus Komposit IPM: IPM = ∛(Indeks Kesehatan × Indeks Pendidikan × Indeks Pengeluaran) × 100',
          'Kategori Status Capaian IPM (BPS): Sangat Tinggi (IPM ≥ 80,00); Tinggi (70,00 ≤ IPM < 80,00); Sedang (60,00 ≤ IPM < 70,00); Rendah (IPM < 60,00).',
          'Peta Kesenjangan Nasional: DKI Jakarta, DI Yogyakarta, dan Bali telah berstatus IPM Sangat Tinggi (>80), sementara beberapa kabupaten di pedalaman Papua pegunungan masih berstatus IPM Rendah (<60).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Empat Kategori Capaian Status IPM Menurut BPS',
        items: [
          { name: 'Sangat Tinggi (Very High)', description: 'Skor IPM ≥ 80,00 (contoh: DKI Jakarta 81,65; Kota Yogyakarta 87,00).' },
          { name: 'Tinggi (High)', description: 'Skor IPM 70,00 – 79,99 (Rata-rata nasional Indonesia berada di kategori ini: ~72,9).' },
          { name: 'Sedang (Medium)', description: 'Skor IPM 60,00 – 69,99 (sebagian provinsi di Sulawesi, Maluku, NTT).' },
          { name: 'Rendah (Low)', description: 'Skor IPM < 60,00 (beberapa kabupaten perdesaan terpencil di Papua Pegunungan).' }
        ]
      }
    ],
    processes: [
      { stage: 'Survei Susenas Tahunan', title: 'Pengumpulan Data Sosial Ekonomi', description: 'BPS menyurvei ratusan ribu rumah tangga mengukur riwayat sekolah, angka morbiditas, dan konsumsi pangan.' },
      { stage: 'Standardisasi Indeks Dimensi', title: 'Normalisasi Nilai ke Skala 0 - 1', description: 'Nilai mentah UHH, HLS, RLS, dan PPP dihitung ke dalam indeks dimensi standar geometris.' },
      { stage: 'Publikasi Peta Kesenjangan', title: 'Evaluasi Dana Alokasi Umum (DAU)', description: 'Pemerintah menggunakan skor IPM sebagai dasar penyaluran dana transfer daerah afirmasi.' }
    ],
    caseStudies: [
      {
        title: 'DI Yogyakarta: Provinsi dengan Skor IPM Pendidikan Tertinggi di Indonesia',
        location: 'Daerah Istimewa Yogyakarta, Indonesia',
        description: 'Kota Yogyakarta memiliki skor IPM mendekati 88 (setara negara maju Eropa Barat). Kendati tidak memiliki tambang mineral atau minyak bumi, tingginya kualitas SDM di Yogyakarta ditopang oleh ekosistem Kota Pendidikan dengan lebih dari 100 perguruan tinggi, akses fasilitas kesehatan terpadu, dan budaya gemar membaca yang menghasilkan Rata-rata Lama Sekolah (RLS) tertinggi nasional.',
        takeaway: 'Investasi pada pendidikan dan kesehatan manusia adalah kunci kemajuan yang melampaui kekayaan sumber daya tambang.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Tiga Dimensi dan Empat Indikator Penyusun Indeks Pembangunan Manusia (IPM)',
        caption: 'Bagan pohon komponen IPM: Dimensi Kesehatan (UHH), Dimensi Pendidikan (HLS & RLS), dan Dimensi Pengeluaran (PPP).',
        badge: 'HDI Framework'
      }
    ],
    terminology: [
      { term: 'Indeks Pembangunan Manusia (IPM)', definition: 'Pengukuran perbandingan dari harapan hidup, melek huruf, pendidikan, dan standar hidup untuk semua negara di seluruh dunia.', scientificTerm: 'Human Development Index (HDI)' },
      { term: 'Usia Harapan Hidup (UHH)', definition: 'Perkiraan rata-rata jumlah tahun yang dapat ditempuh oleh seseorang sejak lahir dengan asumsi pola mortalitas tidak berubah.', scientificTerm: 'Life Expectancy at Birth' },
      { term: 'Rata-rata Lama Sekolah (RLS)', definition: 'Jumlah tahun belajar yang telah diselesaikan oleh penduduk berusia 25 tahun ke atas dalam pendidikan formal.', scientificTerm: 'Mean Years of Schooling' }
    ],
    summary: [
      'IPM mengukur mutu pembangunan manusia berbasis 3 dimensi: Kesehatan (UHH), Pendidikan (HLS & RLS), dan Standar Hidup Layak (PPP).',
      'IPM dihitung menggunakan rata-rata geometris dan dikelompokkan menjadi Rendah, Sedang, Tinggi, dan Sangat Tinggi.',
      'Disparitas IPM di Indonesia menuntut percepatan pembangunan fasilitas pendidikan dan kesehatan di daerah 3T luar Jawa.'
    ],
    quiz: [
      {
        id: 'q77-1',
        question: 'Dimensi kesehatan dalam penghitungan Indeks Pembangunan Manusia (IPM) standar UNDP diukur menggunakan indikator komposit...',
        options: ['Jumlah dokter per rumah sakit', 'Usia Harapan Hidup saat Lahir (UHH)', 'Angka kematian lansia', 'Konsumsi kalori harian'],
        correctAnswer: 1,
        explanation: 'Dimensi kesehatan dan umur panjang dalam IPM diukur secara internasional melalui Usia Harapan Hidup saat Lahir (Life Expectancy at Birth / UHH).'
      },
      {
        id: 'q77-2',
        question: 'Dua indikator yang digunakan untuk menyusun Dimensi Pendidikan dalam penghitungan IPM metode baru adalah...',
        options: [
          'Angka Melek Huruf dan Rasio Guru-Murid',
          'Harapan Lama Sekolah (HLS) dan Rata-rata Lama Sekolah (RLS)',
          'Jumlah gedung sekolah dan Anggaran pendidikan APBD',
          'Nilai ujian nasional dan Angka kelulusan universitas'
        ],
        correctAnswer: 1,
        explanation: 'Dimensi pendidikan IPM metode baru disusun oleh dua indikator terukur: Harapan Lama Sekolah (HLS) dan Rata-rata Lama Sekolah (RLS penduduk usia ≥25 tahun).'
      }
    ],
    references: ['UNDP. (1990). Human Development Report 1990: Concept and Measurement of Human Development. Oxford University Press.', 'BPS. (2022). Indeks Pembangunan Manusia 2022. Badan Pusat Statistik.'],
    relatedTopicIds: ['bonus-demografi', 'dinamika-kependudukan', 'permasalahan-kependudukan', 'kondisi-fisik-dan-sosial-wilayah-indonesia']
  },
  {
    id: 'permasalahan-kependudukan',
    number: 78,
    title: 'Permasalahan Kependudukan',
    englishTitle: 'Population Challenges: Quantitative and Qualitative Issues',
    categoryId: 'kependudukan',
    difficulty: 'Intermediate',
    description: 'Menganalisis spektrum permasalahan kependudukan di Indonesia: Masalah Kuantitatif (jumlah penduduk raksasa, laju pertumbuhan, persebaran tidak merata) vs Masalah Kualitatif (tingkat pendidikan rendah, prevalensi stunting gizi, pengangguran terbuka, permukiman kumuh, dan beban masyarakat menua / aging society).',
    keywords: ['permasalahan kependudukan', 'masalah kuantitatif kualitatif', 'stunting gizi kronis', 'pengangguran terbuka', 'permukiman kumuh urban', 'aging population'],
    learningObjectives: [
      'Membedakan masalah kependudukan yang bersifat kuantitatif (angka/jumlah) dan kualitatif (mutu kehidupan).',
      'Menganalisis dampak masalah stunting (gizi buruk kronis) terhadap kapasitas SDM masa depan Indonesia.',
      'Merumuskan solusi kebijakan terintegrasi dalam mengatasi pengangguran terdidik dan permukiman kumuh perkotaan.'
    ],
    introduction: 'Sebagai negara berpenduduk terbanyak ke-4 di dunia dengan lebih dari 275 juta jiwa, Indonesia menghadapi tantangan demografi multidimensional yang kompleks. Masalah kependudukan di Indonesia secara garis besar terbagi menjadi dua ranah utama: Masalah Kuantitatif yang berkaitan dengan besaran angka agregat (jumlah penduduk besar, pertumbuhan penduduk yang masih menambah jutaan jiwa per tahun, persebaran timpang di Jawa) dan Masalah Kualitatif yang berkaitan dengan derajat mutu sumber daya manusia (kesehatan fisik, kapasitas intelektual, produktivitas ekonomi, dan kesejahteraan sosial).',
    sections: [
      {
        subtitle: '1. Masalah Kuantitatif Kependudukan Indonesia',
        content: 'Tantangan yang bersumber dari besaran volume dan distribusi spasial:',
        table: {
          headers: ['Masalah Kuantitatif', 'Kondisi Fakta Data Nyata', 'Dampak Negatif terhadap Pembangunan'],
          rows: [
            ['1. Jumlah Penduduk Sangat Besar', 'Mencapai lebih dari 275 juta jiwa (peringkat 4 dunia setelah India, Tiongkok, dan AS)', 'Beban pemenuhan pangan, perumahan, energi, dan air bersih yang sangat masif membebani keuangan negara'],
            ['2. Laju Pertumbuhan Penduduk', 'Tumbuh sekitar 1,25% per tahun (bertambah ~3,5 juta jiwa setiap tahun setara populasi negara Singapura)', 'Tuntutan penyediaan fasilitas publik baru yang harus dibangun secara maraton setiap tahun'],
            ['3. Persebaran Penduduk yang Sangat Timpang', '56% penduduk terkonsentrasi di Pulau Jawa yang luasnya hanya 6,7% luas daratan NKRI', 'Beban ekologis Pulau Jawa terlampaui (overshoot), kemacetan parah, dan keterbelakangan pembangunan di wilayah 3T luar Jawa']
          ]
        }
      },
      {
        subtitle: '2. Masalah Kualitatif Kependudukan Indonesia',
        content: 'Tantangan yang berkaitan dengan mutu kapasitas sumber daya manusia:',
        table: {
          headers: ['Masalah Kualitatif', 'Akar Penyebab Permasalahan', 'Solusi Kebijakan Terpadu'],
          rows: [
            ['1. Masalah Stunting (Gizi Buruk Kronis)', 'Kekurangan asupan gizi kronis pada 1.000 Hari Pertama Kehidupan (HPK) dan sanitasi air kotor (prevalensi nasional ~21%)', 'Program pemberian makanan tambahan posyandu, sanitasi jamban sehat, pendampingan calon pengantin'],
            ['2. Mutu Pendidikan & Keterampilan', 'Rata-rata lama sekolah nasional masih berkisar 8,7 tahun (setara tamat SMP kelas 3), kualitas literasi sains PISA rendah', 'Wajib belajar 12 tahun, beasiswa KIP Kuliah, pembenahan kurikulum vokasi berbasis teknologi digital'],
            ['3. Pengangguran Terbuka & Sektor Informal', 'Sekitar 59% tenaga kerja Indonesia masih terserap di sektor informal (pekerja serabutan tanpa jaminan pensiun/kesehatan)', 'Kemudahan perizinan UMKM, pelatihan kartu prakerja, hilirisasi industri padat karya'],
            ['4. Permukiman Kumuh (Slum Area)', 'Urbanisasi liar keluarga miskin ke bantaran sungai dan rel kereta api karena mahalnya harga tanah di kota', 'Program bedah rumah kumuh, pembangunan rumah susun sewa (Rusunawa), dan konsolidasi tanah perkotaan']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kategori Besar Masalah Kependudukan',
        items: [
          { name: 'Masalah Bersifat Kuantitatif', description: 'Jumlah penduduk besar, laju pertumbuhan penduduk tinggi, persebaran tidak merata antarwilayah.' },
          { name: 'Masalah Bersifat Kualitatif', description: 'Tingkat pendidikan rendah, derajat kesehatan dan gizi buruk (stunting), pendapatan per kapita rendah, tingginya pengangguran.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Akar Masalah', title: 'Pemetaan Spasial Kantung Kemiskinan', description: 'BPS dan Bappenas memetakan data P3KE (Pensasaran Percepatan Penghapusan Kemiskinan Ekstrem).' },
      { stage: 'Intervensi Lintas Sektor', title: 'Konvergensi Penanganan Stunting', description: 'Kemenkes, Kemensos, dan PUPR menyalurkan air bersih dan bantuan pangan bergizi terpadu.' },
      { stage: 'Pemberdayaan Kemandirian', title: 'Peningkatan Daya Saing Ekonomi', description: 'Memberikan akses permodalan Kredit Usaha Rakyat (KUR) dan sertifikasi keahlian vokasi.' }
    ],
    caseStudies: [
      {
        title: 'Gerakan Nasional Penurunan Stunting: Menyelamatkan Modal Otak Generasi Indonesia Emas',
        location: 'Kabupaten Timor Tengah Selatan (NTT) dan Pandeglang (Banten)',
        description: 'Stunting bukan sekadar tubuh anak bertubuh pendek, melainkan kegagalan perkembangan sel saraf otak anak yang menurunkan kecerdasan IQ secara permanen. Pemerintah Indonesia menetapkan penurunan stunting sebagai program prioritas nasional dipimpin BKKBN dengan target memangkas prevalensi stunting di bawah 14% melalui pemantauan gizi sejak masa kehamilan.',
        takeaway: 'Mengatasi masalah kualitatif gizi adalah syarat mutlak meraih keberhasilan bonus demografi.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Matriks Klasifikasi Permasalahan Kependudukan Kuantitatif vs Kualitatif',
        caption: 'Bagan perbandingan masalah kuantitatif (jumlah, pertumbuhan, sebaran) dan masalah kualitatif (kesehatan, pendidikan, pengangguran).',
        badge: 'Population Issues'
      }
    ],
    terminology: [
      { term: 'Stunting', definition: 'Kondisi gagal tumbuh pada anak balita akibat kekurangan gizi kronis dan infeksi berulang pada 1.000 Hari Pertama Kehidupan (HPK) yang menghambat perkembangan otak.', scientificTerm: 'Child Stunting' },
      { term: 'Pengangguran Terbuka', definition: 'Bagian dari angkatan kerja yang tidak memiliki pekerjaan, sedang aktif mencari pekerjaan, atau sedang mempersiapkan usaha baru.', scientificTerm: 'Open Unemployment' },
      { term: 'Sektor Informal', definition: 'Kegiatan ekonomi berskala kecil yang tidak terdaftar secara resmi, tidak memiliki izin usaha formal, dan pekerjanya tidak terlindungi jaminan sosial hukum ketenagakerjaan.', scientificTerm: 'Informal Economy Sector' }
    ],
    summary: [
      'Masalah kependudukan Indonesia mencakup aspek kuantitatif (jumlah besar, sebaran timpang di Jawa) dan kualitatif (stunting, pendidikan rendah).',
      'Stunting mengancam kapasitas intelektual dan produktivitas generasi penerus bangsa.',
      'Penanganan terpadu menuntut perbaikan mutu sekolah vokasi, jaminan gizi ibu-anak, dan penciptaan lapangan kerja formal.'
    ],
    quiz: [
      {
        id: 'q78-1',
        question: 'Manakah di antara masalah kependudukan berikut yang tergolong dalam permasalahan kependudukan yang bersifat kualitatif?',
        options: [
          'Jumlah penduduk Indonesia yang mencapai lebih dari 275 juta jiwa',
          'Tingginya angka anak yang mengalami stunting (gizi buruk kronis) dan rendahnya rata-rata lama sekolah',
          'Sebagian besar penduduk menumpuk di Pulau Jawa',
          'Laju pertumbuhan penduduk yang menambah jutaan jiwa per tahun'
        ],
        correctAnswer: 1,
        explanation: 'Masalah kualitatif berkaitan dengan mutu kualitas hidup sumber daya manusia (kesehatan, gizi stunting, dan tingkat pendidikan), bukan sekadar angka jumlah penduduk.'
      },
      {
        id: 'q78-2',
        question: 'Kondisi gagal tumbuh pada anak balita akibat kekurangan asupan gizi kronis terutama pada 1.000 Hari Pertama Kehidupan (HPK) yang menghambat perkembangan otak dinamakan...',
        options: ['Kwashiorkor', 'Stunting', 'Marasmus akut', 'Obesitas morbid'],
        correctAnswer: 1,
        explanation: 'Stunting adalah masalah gizi kronis akibat kekurangan nutrisi jangka panjang sejak janin dalam kandungan hingga usia 2 tahun yang mengganggu perkembangan kognitif dan fisik anak.'
      }
    ],
    references: ['Bappenas. (2020). Rencana Aksi Nasional Penanganan Stunting 2020-2024.', 'Todaro, M. P., & Smith, S. C. (2015). Economic Development (12th ed.). Pearson.'],
    relatedTopicIds: ['kualitas-penduduk-dan-indeks-pembangunan-manusia-ipm', 'bonus-demografi', 'persebaran-penduduk', 'dinamika-kependudukan']
  },

  // CATEGORY K: Mitigasi dan Kebencanaan (79-83)
  {
    id: 'mitigasi-dan-adaptasi-bencana',
    number: 79,
    title: 'Mitigasi dan Adaptasi Bencana',
    englishTitle: 'Disaster Risk Reduction: Mitigation, Adaptation, and Disaster Management Cycle',
    categoryId: 'mitigasi-bencana',
    difficulty: 'Beginner',
    description: 'Menelaah sains penanggulangan bencana menurut UU No. 24/2007: konsep Bencana, Siklus Penanggulangan Bencana 3 fase (Prabencana: mitigasi & kesiapsiagaan; Tanggap Darurat; Pascabencana: rehabilitasi & rekonstruksi), Mitigasi Struktural vs Non-Struktural, serta strategi adaptasi iklim.',
    keywords: ['mitigasi bencana', 'siklus penanggulangan bencana', 'tanggap darurat', 'rehabilitasi rekonstruksi', 'mitigasi struktural non struktural', 'bnpb'],
    learningObjectives: [
      'Menjelaskan definisi bencana dan tiga fase dalam Siklus Penanggulangan Bencana menurut UU No. 24/2007.',
      'Membedakan tindakan mitigasi struktural (rekayasa fisik teknik) dan mitigasi non-struktural (kebijakan hukum & edukasi).',
      'Menganalisis prinsip "Build Back Better and Safer" dalam tahap rehabilitasi dan rekonstruksi pascabencana.'
    ],
    introduction: 'Bencana adalah peristiwa atau rangkaian peristiwa yang mengancam dan mengganggu kehidupan dan penghidupan masyarakat yang disebabkan oleh faktor alam, faktor non-alam, maupun faktor manusia sehingga mengakibatkan timbulnya korban jiwa manusia, kerusakan lingkungan, kerugian harta benda, dan dampak psikologis (UU No. 24/2007). Berada di pertemuan tiga lempeng tektonik aktif dan sabuk gunung api Ring of Fire, kepulauan Indonesia sering dijuluki sebagai "Supermarket Bencana". Menghadapi keniscayaan alam ini, paradigma penanggulangan bencana bertransformasi dari sekadar respon darurat reaktif pascabencana menuju mitigasi proaktif dan pengurangan risiko bencana (Disaster Risk Reduction / DRR).',
    sections: [
      {
        subtitle: '1. Siklus Manajemen Penanggulangan Bencana',
        content: 'Penanggulangan bencana terbagi menjadi tiga tahapan berkesinambungan:',
        table: {
          headers: ['Fase Siklus Bencana', 'Situasi Kondisi', 'Tindakan Kunci Lapangan'],
          rows: [
            ['1. Fase Prabencana (Pre-Disaster)', 'Situasi tidak terjadi bencana dan situasi terdapat potensi bencana', 'a. Pencegahan & Mitigasi: upaya mengurangi risiko bencana jangka panjang\nb. Kesiapsiagaan (Preparedness): rencana evakuasi, penyediaan logistik, gladi simulasi darurat\nc. Peringatan Dini (Early Warning): penyampaian informasi ancaman sebelum bencana menerpa'],
            ['2. Fase Saat Bencana (Emergency Response)', 'Saat terjadi peristiwa bencana sesaat hingga beberapa minggu', 'Tanggap Darurat (Emergency Response): pencarian dan penyelamatan korban (SAR), evakuasi pengungsi ke shelter darurat, penyediaan dapur umum, penanganan medis luka-luka, dan penegakan keamanan'],
            ['3. Fase Pascabencana (Post-Disaster)', 'Pascabencana masa pemulihan', 'a. Rehabilitasi: perbaikan sarana dasar publik darurat, pelayanan kesehatan, pemulihan trauma psikologis anak\nb. Rekonstruksi: pembangunan kembali sarana prasarana fisik dan rumah warga dengan standar tahan gempa (Build Back Better)']
          ]
        }
      },
      {
        subtitle: '2. Mitigasi Struktural vs Mitigasi Non-Struktural',
        content: 'Upaya mitigasi dirancang untuk memperkecil dampak kerugian korban dan harta benda:',
        keyPoints: [
          'Mitigasi Struktural: Pengurangan risiko bencana melalui rekayasa teknik fisik dan pembangunan infrastruktur tahan bencana (contoh: rumah panggung tahan gempa, pembangunan tanggul penahan banjir laut, penanaman sabuk hijau sabo dam penahan lahar dingin, sistem sirine peringatan dini tsunami).',
          'Mitigasi Non-Struktural: Pengurangan risiko bencana melalui pendekatan kebijakan, regulasi hukum, penataan ruang, dan peningkatan kapasitas manusia (contoh: pembuatan peta zonasi daerah rawan bencana KRB, peraturan daerah IMB bangunan tahan gempa, gladi simulasi evakuasi mandiri sekolah, dan edukasi kurikulum kebencanaan).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Strategi Menghadapi Ancaman Bencana',
        items: [
          { name: 'Mitigasi Bencana', description: 'Upaya proaktif untuk memperkecil risiko bencana sebelum peristiwa terjadi (baik melalui pembangunan fisik maupun penyadaran).' },
          { name: 'Adaptasi Bencana', description: 'Penyesuaian perilaku, mata pencaharian, dan struktur bangunan agar selaras dengan lingkungan yang rentan bencana (contoh: rumah apung di daerah langganan banjir rob).' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Risiko Prabencana', title: 'Pemetaan Ancaman & Kerentanan', description: 'BNPB memetakan bahaya sesar gempa dan menghitung kapasitas mitigasi masyarakat.' },
      { stage: 'Tanggap Darurat', title: 'Operasi SAR & Logistik Pengungsi', description: 'Tim Basarnas mengevakuasi korban tertimbun dan mendirikan tenda darurat serta dapur umum.' },
      { stage: 'Rekonstruksi Berkelanjutan', title: 'Build Back Better and Safer', description: 'Membangun kembali permukiman yang relokasi di luar zona merah bahaya sesar aktif.' }
    ],
    caseStudies: [
      {
        title: 'Prinsip "Build Back Better" Pascagempa Bumi Yogyakarta 2006',
        location: 'Kabupaten Bantul dan Sleman, D.I. Yogyakarta, Indonesia',
        description: 'Gempa bumi tektonik Sesar Opak Mw 5,9 pada Mei 2006 merobohkan lebih dari 300.000 rumah tradisional bertembok bata tanpa kolom penguat semen di Bantul dan Klaten, menelan lebih dari 5.700 korban jiwa. Dalam fase rekonstruksi pascabencana, pemerintah bersama akademisi UGM menerapkan program rehabilitasi rumah tahan gempa berstruktur rangka beton bertulang terikat (retrofitting) yang terbukti kokoh bertahan saat diguncang gempa susulan.',
        takeaway: 'Bencana gempa tidak membunuh manusia; bangunan yang runtuhlah yang merenggut nyawa.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Siklus Manajemen Penanggulangan Bencana Tiga Fase BNPB',
        caption: 'Bagan melingkar: Prabencana (Mitigasi & Kesiapsiagaan) → Tanggap Darurat → Pascabencana (Rehabilitasi & Rekonstruksi).',
        badge: 'Disaster Cycle'
      }
    ],
    terminology: [
      { term: 'Mitigasi Bencana', definition: 'Serangkaian upaya untuk mengurangi risiko bencana, baik melalui pembangunan fisik maupun penyadaran dan peningkatan kemampuan menghadapi ancaman bencana.', scientificTerm: 'Disaster Mitigation' },
      { term: 'Tanggap Darurat', definition: 'Serangkaian kegiatan yang dilakukan dengan segera pada saat kejadian bencana untuk menangani dampak buruk yang ditimbulkan.', scientificTerm: 'Emergency Response' },
      { term: 'Build Back Better', definition: 'Prinsip pemulihan pascabencana yang mengintegrasikan pengurangan risiko bencana ke dalam pembangunan kembali infrastruktur agar lebih tangguh dari sebelumnya.', scientificTerm: 'Build Back Better and Safer' }
    ],
    summary: [
      'Penanggulangan bencana beroperasi dalam 3 fase: Prabencana (mitigasi/kesiapsiagaan), Tanggap Darurat, dan Pascabencana (pemulihan).',
      'Mitigasi struktural menggunakan rekayasa fisik (bangunan tahan gempa, tanggul); mitigasi non-struktural menggunakan regulasi, tata ruang, dan simulasi edukasi.',
      'Rekonstruksi pascabencana wajib menerapkan prinsip "Build Back Better and Safer" untuk memutus rantai risiko masa depan.'
    ],
    quiz: [
      {
        id: 'q79-1',
        question: 'Tindakan pembuatan peta zonasi daerah rawan bencana letusan gunung api, penyelenggaraan simulasi gladi evakuasi mandiri gempa di sekolah, dan penerbitan Perda izin mendirikan bangunan tahan gempa termasuk dalam kegiatan...',
        options: [
          'Tanggap darurat saat bencana',
          'Mitigasi non-struktural pada fase prabencana',
          'Rehabilitasi pascabencana',
          'Kompensasi asuransi bencana'
        ],
        correctAnswer: 1,
        explanation: 'Pembuatan peta zonasi, regulasi tata ruang IMB, dan simulasi edukasi kesiapsiagaan merupakan bentuk mitigasi non-struktural yang dilakukan pada fase prabencana.'
      },
      {
        id: 'q79-2',
        question: 'Prinsip pembangunan kembali sarana prasarana fisik dan perumahan warga pada fase rekonstruksi pascabencana agar lebih kokoh, aman, dan tahan bencana dibanding sebelum hancur dikenal dengan istilah...',
        options: ['Emergency relief', 'Build Back Better and Safer', 'Natural hazard reduction', 'Quick response recovery'],
        correctAnswer: 1,
        explanation: 'Prinsip "Build Back Better and Safer" menekankan bahwa proses rekonstruksi harus memperbaiki kelemahan struktur masa lalu agar bangunan tahan terhadap bencana serupa di masa depan.'
      }
    ],
    references: ['Undang-Undang Republik Indonesia Nomor 24 Tahun 2007 tentang Penanggulangan Bencana.', 'BNPB. (2021). Rencana Nasional Penanggulangan Bencana (Renas PB) 2020-2024.'],
    relatedTopicIds: ['jenis-jenis-bencana-alam', 'risiko-kerentanan-dan-kapasitas-bencana', 'pemetaan-daerah-rawan-bencana', 'kesiapsiagaan-dan-penanggulangan-bencana']
  },
  {
    id: 'jenis-jenis-bencana-alam',
    number: 80,
    title: 'Jenis-Jenis Bencana Alam',
    englishTitle: 'Natural Hazard Typologies: Geological, Hydrometeorological, and Biological',
    categoryId: 'mitigasi-bencana',
    difficulty: 'Intermediate',
    description: 'Mengklasifikasikan tipologi bencana menurut sains kebumian: Bencana Geologis (gempa tektonik, letusan gunung api, tsunami megathrust, likuefaksi tanah), Bencana Hidrometeorologis (banjir bandang, longsor, kekeringan, angin puting beliung, siklon tropis), Bencana Biologis (pandemi zoonosis, hama tanaman), serta Bencana Ekstra-Terestrial (tumbukan asteroid).',
    keywords: ['jenis bencana alam', 'bencana geologis', 'bencana hidrometeorologis', 'likuefaksi tanah petobo', 'puting beliung', 'siklon tropis seroja'],
    learningObjectives: [
      'Mengklasifikasikan jenis-jenis bencana alam ke dalam kelompok geologis, hidrometeorologis, dan biologis.',
      'Menganalisis fenomena likuefaksi tanah (soil liquefaction) sebagai bencana geologis ikutan pascagempa.',
      'Mengidentifikasi karakteristik bencana hidrometeorologis di Indonesia yang mendominasi lebih dari 90% kejadian bencana tahunan.'
    ],
    introduction: 'Bencana alam adalah bencana yang diakibatkan oleh peristiwa atau serangkaian peristiwa yang disebabkan oleh alam semesta. Di Indonesia, Badan Nasional Penanggulangan Bencana (BNPB) mencatat rata-rata 3.000 hingga 5.000 kejadian bencana setiap tahunnya. Berdasarkan sumber pemicu dan media geofisik yang terlibat, bencana alam dikelompokkan menjadi Bencana Geologis (bersumber dari litosfer), Bencana Hidrometeorologis (bersumber dari atmosfer dan hidrosfer), Bencana Biologis (bersumber dari biosfer), serta Bencana Ekstra-Terestrial (antartariksa).',
    sections: [
      {
        subtitle: '1. Klasifikasi Bencana Alam Berdasarkan Sumber Pemicu',
        content: 'Masing-masing kategori bencana memiliki mekanisme fisika pembentukan yang khas:',
        table: {
          headers: ['Tipologi Bencana', 'Proses Geofisika Pemicu', 'Bentuk Ancaman Bahaya Nyata', 'Contoh Peristiwa Nyata di Indonesia'],
          rows: [
            ['Bencana Geologis', 'Aktivitas tenaga endogen dari dalam litosfer bumi (tektonisme dan vulkanisme)', '1. Gempa Bumi: guncangan seismik merobohkan gedung\n2. Tsunami: gelombang pasang raksasa akibat sesar naik dasar laut\n3. Erupsi Gunung Api: awan panas piroklastik, hujan abu, lahar dingin\n4. Likuefaksi: tanah jenuh air kehilangan daya dukung berubah jadi lumpur cair', 'Gempa dan Tsunami Aceh 2004, Erupsi Merapi 2010, Likuefaksi Palu 2018'],
            ['Bencana Hidrometeorologis', 'Dinamika cuaca, anomali sirkulasi atmosfer, dan siklus hidrologi di permukaan bumi (>90% bencana di Indonesia)', '1. Banjir Bandang: luapan air deras bercampur debris kayu dari hulu\n2. Tanah Longsor: gerakan massa tanah lereng basah dipicu hujan lebat\n3. Kekeringan: defisit curah hujan ekstrem akibat anomali El Niño\n4. Angin Puting Beliung: pusaran angin kencang awan Cumulonimbus\n5. Gelombang Pasang & Abrasi Pantai', 'Banjir Jabodetabek 2020, Banjir Bandang Sentani Papua 2019, Siklon Tropis Seroja NTT 2021'],
            ['Bencana Biologis', 'Wabah patogen organisme hidup, penyakit zoonosis menular, dan serangan hama', 'Wabah penyakit menular epidemik/pandemik, serangan ulat grayak tanaman jagung, flu burung (H5N1)', 'Pandemi COVID-19 (2020-2022), epidemi demam berdarah dengue (DBD) musiman'],
            ['Bencana Ekstra-Terestrial', 'Benda-benda antariksa angkasa luar yang memasuki atmosfer bumi', 'Jatuhan meteorit besar, badai radiasi elektromagnetik matahari (solar flare)', 'Ledakan meteorit Chelyabinsk Rusia 2013']
          ]
        }
      },
      {
        subtitle: '2. Fenomena Likuefaksi Tanah (Soil Liquefaction)',
        content: 'Likuefaksi adalah fenomena geologis di mana tanah pasir halus yang jenuh air kehilangan kekuatan gesernya (shear strength) akibat getaran gempa bumi yang dahsyat, sehingga tanah padat mendadak berperilaku seperti cairan lumpur hisap kental:',
        keyPoints: [
          'Syarat Terjadinya: Lapisan tanah berpasir halus lepas, muka air tanah dangkal (jenuh air 100%), dan guncangan gempa bumi bermagnitudo kuat (M > 6,0) berdurasi puluhan detik.',
          'Mekanisme Fisik: Gelombang gempa menekan partikel pasir, meningkatkan tekanan air pori seketika hingga setara dengan beban tanah di atasnya. Butir-butir pasir melayang di dalam air (daya dukung nol), menyebabkan rumah-rumah di atasnya ambles terbenam lumpur atau bergeser hanyut ratusan meter menuruni lereng landai (lateral spreading).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kategori Dampak Bencana Gunung Berapi',
        items: [
          { name: 'Bahaya Primer (Saat Erupsi)', description: 'Awan panas guguran (pyroclastic flow), lontaran batu bom/lapili pijar, lelehan lava, gas beracun mofet.' },
          { name: 'Bahaya Sekunder (Pasca-Erupsi)', description: 'Banjir lahar dingin di sungai lereng bawah saat hujan lebat membilas tumpukan abu pasir puncak.' }
        ]
      }
    ],
    processes: [
      { stage: 'Guncangan Gempa Sesar', title: 'Perambatan Gelombang Geser', description: 'Gelombang S gempa mengguncang lapisan pasir aluvial jenuh air di dataran endapan.' },
      { stage: 'Lonjakan Tekanan Air Pori', title: 'Pelepasan Ikatan Pasir', description: 'Tekanan air pori mendesak keluar, memutus kontak antarpasir dan meloloskan pasir ke atas.' },
      { stage: 'Amblas & Likuefaksi', title: 'Tanah Berubah Jadi Fluida Cair', description: 'Bangunan terbenam lumpur hisap atau tergelincir hanyut (seperti di Perumnas Balaroa Palu).' }
    ],
    caseStudies: [
      {
        title: 'Bencana Likuefaksi Tanah Terdahsyat Abad 21 di Petobo dan Balaroa, Palu',
        location: 'Kota Palu dan Sigi, Sulawesi Tengah, Indonesia',
        description: 'Pascagempa Sesar Palu-Koro Mw 7,5 pada September 2018, kawasan permukiman Petobo dan Balaroa yang bertengger di atas endapan aluvial jenuh air mengalami likuefaksi masif. Lumpur cair bertekanan tinggi menyembur keluar dari rekahan bumi menelan ribuan rumah bertingkat ke dalam tanah sedalam 3-5 meter dan menyeret perkampungan sejauh lebih dari 1 kilometer menuruni lereng landai.',
        takeaway: 'Penyusunan peta zonasi geologi tata ruang mutlak melarang pembangunan perumahan di atas zona rawan likuefaksi tinggi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Mekanisme Fisika Likuefaksi Tanah: Dari Kondisi Padat Menjadi Fluida Lumpur Hisap',
        caption: 'Bagan penampang tanah: butir pasir padat stabil → getaran gempa menaikkan tekanan air pori → butir pasir melayang ambles.',
        badge: 'Liquefaction Mechanics'
      }
    ],
    terminology: [
      { term: 'Bencana Geologis', definition: 'Bencana alam yang dipicu oleh tenaga endogen di dalam lapisan litosfer bumi, seperti gempa bumi, letusan gunung api, tsunami, dan likuefaksi.', scientificTerm: 'Geological Hazard' },
      { term: 'Bencana Hidrometeorologis', definition: 'Bencana alam yang dipicu oleh parameter siklus cuaca dan iklim di atmosfer dan hidrosfer, seperti banjir, kekeringan, puting beliung, dan longsor.', scientificTerm: 'Hydrometeorological Hazard' },
      { term: 'Likuefaksi (Soil Liquefaction)', definition: 'Fenomena hilangnya kekuatan geser tanah pasir jenuh air akibat guncangan gempa kuat sehingga tanah padat berperilaku seperti cairan lumpur.', scientificTerm: 'Soil Liquefaction' }
    ],
    summary: [
      'Bencana alam terbagi menjadi bencana geologis (litosfer), hidrometeorologis (atmosfer-hidrosfer), dan biologis.',
      'Lebih dari 90% kejadian bencana tahunan di Indonesia adalah bencana hidrometeorologis (banjir, longsor, puting beliung).',
      'Likuefaksi adalah bahaya geologis sekunder di mana tanah pasir jenuh air berubah menjadi lumpur cair saat diguncang gempa.'
    ],
    quiz: [
      {
        id: 'q80-1',
        question: 'Fenomena hilangnya kekuatan geser lapisan tanah berpasir halus yang jenuh air akibat getaran gempa bumi dahsyat sehingga tanah padat mendadak berubah menjadi lumpur hisap cair yang menelan bangunan (seperti peristiwa di Petobo Palu 2018) disebut...',
        options: ['Denudasi', 'Likuefaksi (Soil Liquefaction)', 'Subsidence eustatik', 'Sesar geser transform'],
        correctAnswer: 1,
        explanation: 'Likuefaksi (soil liquefaction) terjadi saat getaran gempa menaikkan tekanan air pori pada tanah pasir jenuh air, menghilangkan daya dukung tanah sehingga berperilaku seperti cairan lumpur.'
      },
      {
        id: 'q80-2',
        question: 'Kelompok bencana berikut yang seluruhnya tergolong ke dalam kategori bencana hidrometeorologis adalah...',
        options: [
          'Gempa bumi tektonik, Tsunami, Letusan gunung api',
          'Banjir bandang, Tanah longsor terpicu hujan, Angin puting beliung, Kekeringan',
          'Likuefaksi, Tsunami megathrust, Erupsi efusif',
          'Jatuhan meteorit antariksa, Pandemi virus, Gempa runtuhan'
        ],
        correctAnswer: 1,
        explanation: 'Banjir, tanah longsor akibat hujan lebat, puting beliung, dan kekeringan adalah bencana yang dipicu oleh dinamika cuaca, iklim, dan hidrosfer (hidrometeorologi).'
      }
    ],
    references: ['BNPB. (2022). Data Informasi Bencana Indonesia (DIBI). Badan Nasional Penanggulangan Bencana.', 'Kramer, S. L. (1996). Geotechnical Earthquake Engineering. Prentice Hall.'],
    relatedTopicIds: ['mitigasi-dan-adaptasi-bencana', 'seisme-gempa-bumi', 'vulkanisme', 'gerakan-massa-tanah']
  },
  {
    id: 'risiko-kerentanan-dan-kapasitas-bencana',
    number: 81,
    title: 'Risiko, Kerentanan, dan Kapasitas Bencana',
    englishTitle: 'Disaster Risk Assessment: Hazard, Vulnerability, and Capacity Formulation',
    categoryId: 'mitigasi-bencana',
    difficulty: 'Intermediate',
    description: 'Menganalisis rumus ilmiah Pengkajian Risiko Bencana menurut UN-ISDR dan BNPB: Risiko = (Bahaya × Kerentanan) / Kapasitas [R = (H × V) / C], empat jenis kerentanan (fisik, sosial, ekonomi, lingkungan), serta indikator kapasitas ketahanan komunitas.',
    keywords: ['rumus risiko bencana', 'kerentanan fisik sosial ekonomi', 'kapasitas kesiapsiagaan', 'hazard vulnerability capacity', 'kajian risiko bencana krb bnpb'],
    learningObjectives: [
      'Menjelaskan formula matematis penilaian risiko bencana: Risiko = (Bahaya × Kerentanan) / Kapasitas.',
      'Membedakan empat dimensi kerentanan: kerentanan fisik, kerentanan sosial, kerentanan ekonomi, dan kerentanan lingkungan.',
      'Menganalisis strategi intervensi untuk menurunkan risiko bencana dengan cara memperkecil kerentanan dan meningkatkan kapasitas masyarakat.'
    ],
    introduction: 'Dalam sains kebencanaan modern, bencana tidak lagi dipandang sebagai "takdir nasib buruk" yang tak terelakkan, melainkan sebagai fungsi interaksi probabilitas matematis antara tiga variabel utama: Bahaya (Hazard), Kerentanan (Vulnerability), dan Kapasitas (Capacity). Suatu fenomena alam (seperti gempa bumi berkekuatan M 7,0 di tengah gurun tak berpenghuni) hanyalah peristiwa alam biasa dan BUKAN bencana. Peristiwa tersebut baru menjadi bencana jika melanda permukiman manusia yang rapuh (rentan) dan masyarakatnya tidak siap (kapasitas rendah).',
    sections: [
      {
        subtitle: '1. Formula Matematis Pengkajian Risiko Bencana (UN-ISDR)',
        content: 'Tingkat risiko bencana (Risk) dihitung melalui formula rasio fundamental:',
        keyPoints: [
          'Formula Risiko Bencana: R = (H × V) / C',
          'R (Disaster Risk): Potensi kerugian yang ditimbulkan akibat bencana pada suatu wilayah dalam kurun waktu tertentu (korban jiwa, luka-luka, kerugian ekonomi, kerusakan lingkungan).',
          'H (Hazard / Bahaya): Suatu peristiwa fisik alamiah atau buatan yang berpotensi memicu kerusakan (contoh: tinggi genangan banjir, magnitudo gempa, percepatan getaran tanah PGA). Bahaya alamiah ini tidak bisa dihilangkan manusia.',
          'V (Vulnerability / Kerentanan): Sekumpulan kondisi yang memperlemah daya tahan masyarakat dalam menghadapi bahaya.',
          'C (Capacity / Kapasitas): Penguasaan sumber daya, keterampilan, infrastruktur, kearifan lokal, dan kelembagaan yang memperkuat kemampuan masyarakat dalam mencegah, merespons, dan pulih dari bencana.'
        ],
        formula: {
          expression: 'R = \\frac{H \\times V}{C}',
          explanation: 'Risiko berbanding lurus dengan Bahaya dan Kerentanan, namun berbanding terbalik dengan Kapasitas.',
          exampleCalculation: 'Jika bahaya tsunami (H) bernilai tinggi = 8, masyarakat tinggal di rumah bambu rapuh dekat pantai tanpa tabungan (V=8), namun mereka memiliki sirine tsunami, jalur evakuasi jelas, dan sering gladi tanggap darurat (Kapasitas tinggi C=8), maka Risiko R = (8 × 8) / 8 = 8 (Terkendali sedang). Jika kapasitas nol C=1, risiko melonjak menjadi R=64 (Bencana Dahsyat).'
        }
      },
      {
        subtitle: '2. Empat Dimensi Kerentanan (Vulnerability) Penduduk',
        content: 'Kerentanan mencakup empat aspek struktural di dalam masyarakat:',
        table: {
          headers: ['Dimensi Kerentanan', 'Faktor Penentu Kerentanan', 'Indikator Terukur Lapangan'],
          rows: [
            ['1. Kerentanan Fisik', 'Kualitas konstruksi bangunan infrastruktur dan kepadatan tata letak pemukiman', 'Rumah berdinding bata tanpa kolom beton bertulang, bangunan bertingkat di atas zona sesar aktif, ketiadaan jalur evakuasi'],
            ['2. Kerentanan Sosial', 'Kondisi demografi kelompok rentan yang membutuhkan bantuan khusus saat evakuasi', 'Tingginya proporsi lansia, balita, ibu hamil, penyandang disabilitas fisik, serta rendahnya tingkat melek huruf mitigasi'],
            ['3. Kerentanan Ekonomi', 'Kondisi keuangan finansial masyarakat dalam menyerap guncangan kerugian', 'Tingkat kemiskinan tinggi, ketiadaan tabungan darurat, mata pencaharian tunggal yang bergantung pada cuaca, ketiadaan asuransi bencana'],
            ['4. Kerentanan Lingkungan', 'Kondisi daya dukung ekosistem alami di sekitar permukiman', 'Hilangnya hutan mangrove di pantai, rusaknya hutan lindung resapan air di hulu bukit, penggundulan sempadan sungai']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Strategi Menurunkan Nilai Risiko Bencana (R)',
        items: [
          { name: '1. Mengurangi Keterpaparan (Exposure)', description: 'Menata ruang agar tidak mendirikan permukiman di zona merah bahaya sesar aktif atau bantaran banjir.' },
          { name: '2. Menurunkan Kerentanan (Vulnerability)', description: 'Memperkuat struktur fisik rumah tahan gempa, mengentaskan kemiskinan, dan menanam sabuk hijau pantai.' },
          { name: '3. Meningkatkan Kapasitas (Capacity)', description: 'Membangun sistem sirine peringatan dini (EWS), melatih tim tanggap bencana desa (Destana), dan menyediakan jalur evakuasi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Bahaya (H)', title: 'Pemetaan Karakteristik Ancaman', description: 'Menghitung periode ulang banjir 50 tahunan atau percepatan puncak tanah gempa.' },
      { stage: 'Survei Kerentanan (V)', title: 'Analisis Demografi & Kemiskinan', description: 'Mencacah jumlah lansia, rumah kayu lapuk, dan warga miskin di zona bahaya.' },
      { stage: 'Penilaian Kapasitas (C)', title: 'Audit Kesiapsiagaan Komunitas', description: 'Memeriksa ketersediaan shelter evakuasi, sirine tsunami, dan pos relawan desa.' }
    ],
    caseStudies: [
      {
        title: 'Komparasi Korban Gempa Haiti 2010 vs Gempa Chili 2010: Bukti Telak Peran Kapasitas',
        location: 'Haiti (M 7,0) vs Chili (M 8,8)',
        description: 'Pada Januari 2010, gempa bumi M 7,0 mengguncang ibu kota Haiti (Port-au-Prince), menewaskan lebih dari 220.000 jiwa akibat kerentanan fisik ekstrem (bangunan beton rapuh) dan kapasitas nol. Satu bulan kemudian, gempa berkekuatan 500 kali lebih dahsyat (M 8,8) mengguncang Chili. Berkat kapasitas tinggi (regulasi ketat bangunan tahan gempa dan simulasi rutin), korban jiwa di Chili "hanya" sekitar 500 orang.',
        takeaway: 'Tingkat keparahan bencana ditentukan oleh kapasitas peradaban manusia, bukan semata kekuatan alamnya.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Model Formula Risiko Bencana: Interaksi Bahaya (H), Kerentanan (V), dan Kapasitas (C)',
        caption: 'Bagan segitiga risiko bencana R = (H × V) / C: Bahaya diperkuat Kerentanan lalu dibagi oleh Kapasitas.',
        badge: 'Disaster Risk Formula'
      }
    ],
    terminology: [
      { term: 'Bahaya (Hazard)', definition: 'Suatu peristiwa, fenomena fisik, atau aktivitas manusia yang berpotensi menimbulkan korban jiwa, kerusakan properti, dan degradasi lingkungan.', scientificTerm: 'Hazard' },
      { term: 'Kerentanan (Vulnerability)', definition: 'Kondisi fisik, sosial, ekonomi, dan lingkungan yang menurunkan kemampuan suatu komunitas dalam mencegah atau menghadapi bencana.', scientificTerm: 'Vulnerability' },
      { term: 'Kapasitas (Capacity)', definition: 'Kombinasi semua kekuatan, atribut, dan sumber daya yang tersedia dalam komunitas untuk mengelola dan mengurangi risiko bencana.', scientificTerm: 'Disaster Capacity' }
    ],
    summary: [
      'Risiko bencana adalah hasil interaksi: Risiko = (Bahaya × Kerentanan) / Kapasitas.',
      'Bahaya alamiah sulit dicegah; cara menurunkan risiko adalah memperkecil kerentanan dan memperbesar kapasitas masyarakat.',
      'Kerentanan mencakup dimensi fisik (konstruksi), sosial (lansia/anak), ekonomi (kemiskinan), dan lingkungan (ekosistem rusak).'
    ],
    quiz: [
      {
        id: 'q81-1',
        question: 'Berdasarkan formula baku penilaian risiko bencana UN-ISDR dan BNPB [Risiko = (Bahaya × Kerentanan) / Kapasitas], cara paling efektif bagi manusia untuk memperkecil nilai risiko bencana di suatu wilayah adalah...',
        options: [
          'Menaikkan kerentanan fisik bangunan',
          'Menurunkan kapasitas kesiapsiagaan masyarakat',
          'Memperkecil kerentanan (vulnerability) dan meningkatkan kapasitas (capacity) ketahanan masyarakat',
          'Meniadakan fenomena hujan di atmosfer'
        ],
        correctAnswer: 2,
        explanation: 'Karena bahaya alamiah (seperti gempa) tidak dapat ditiadakan, risiko dapat ditekan mendekati nol dengan memperkecil kerentanan (pembongkaran rumah rapuh) dan menaikkan kapasitas (edukasi, EWS, jalur evakuasi).'
      },
      {
        id: 'q81-2',
        question: 'Tingginya proporsi warga lanjut usia (lansia), balita, ibu hamil, serta warga penyandang disabilitas di suatu desa rawan banjir tergolong dalam dimensi kerentanan...',
        options: ['Kerentanan fisik', 'Kerentanan sosial', 'Kerentanan ekonomi', 'Kerentanan geologis'],
        correctAnswer: 1,
        explanation: 'Kerentanan sosial berkaitan dengan karakteristik demografi kelompok masyarakat rentan yang membutuhkan bantuan evakuasi khusus saat bencana terjadi.'
      }
    ],
    references: ['UNISDR. (2009). Terminology on Disaster Risk Reduction. United Nations International Strategy for Disaster Reduction.', 'BNPB. (2012). Peraturan Kepala BNPB Nomor 02 Tahun 2012 tentang Pedoman Umum Pengkajian Risiko Bencana.'],
    relatedTopicIds: ['mitigasi-dan-adaptasi-bencana', 'pemetaan-daerah-rawan-bencana', 'kesiapsiagaan-dan-penanggulangan-bencana', 'jenis-jenis-bencana-alam']
  },
  {
    id: 'pemetaan-daerah-rawan-bencana',
    number: 82,
    title: 'Pemetaan Daerah Rawan Bencana',
    englishTitle: 'Disaster Prone Area Mapping and Spatial Hazard Zonation',
    categoryId: 'mitigasi-bencana',
    difficulty: 'Intermediate',
    description: 'Menelaah metodologi pembuatan Peta Kawasan Rawan Bencana (KRB) menggunakan analisis spasial SIG: pembobotan multi-kriteria AHP (Analytical Hierarchy Process), tumpang susun layer bahaya (hazard), kerentanan (vulnerability), dan kapasitas (capacity), serta integrasi KRB dalam Rencana Tata Ruang Wilayah (RTRW).',
    keywords: ['pemetaan daerah rawan bencana krb', 'overlay sig kebencanaan', 'kawasan rawan bencana merapi krb 1 2 3', 'zonasi risiko', 'multi criteria evaluation'],
    learningObjectives: [
      'Menjelaskan tahapan metodologi pembuatan Peta Kawasan Rawan Bencana (KRB) berbasis Sistem Informasi Geografis (SIG).',
      'Menganalisis sistem zonasi KRB gunung berapi menurut PVMBG (KRB I, KRB II, dan KRB III).',
      'Menerapkan peta risiko bencana sebagai instrumen hukum wajib dalam pengendalian izin tata ruang wilayah.'
    ],
    introduction: 'Peta Kawasan Rawan Bencana (KRB / Hazard Zonation Map) adalah representasi kartografis spasial yang menggambarkan zonasi tingkat kerawanan suatu wilayah terhadap ancaman bencana tertentu (tingkat rendah, sedang, tinggi). Pemetaan risiko bencana menjadi instrumen paling krusial dalam perencanaan tata ruang kota modern. Tanpa peta rawan bencana yang akurat, pemerintah daerah dapat melakukan kesalahan fatal dengan mengizinkan pembangunan perumahan, rumah sakit, atau sekolah tepat di atas jalur sesar gempa aktif atau zona bahaya awan panas gunung berapi.',
    sections: [
      {
        subtitle: '1. Tiga Tingkatan Kawasan Rawan Bencana (KRB) Gunung Api PVMBG',
        content: 'Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG) membagi zonasi bahaya gunung api menjadi 3 zona standar:',
        table: {
          headers: ['Tingkat Kawasan', 'Zona Radius Bahaya', 'Ancaman Bahaya Primer & Sekunder', 'Ketentuan Arahan Tata Ruang'],
          rows: [
            ['Kawasan Rawan Bencana III (KRB III - Merah)', 'Zona puncak dan lereng atas (radius 0 – 3 atau 5 km dari kawah aktif)', 'Selalu terancam bahaya awan panas (wedhus gembel), lontaran batu pijar, lelehan lava, gas beracun mematikan', 'Zona Merah Mutlak: dilarang keras mendirikan bangunan hunian permanen; peruntukan hanya untuk kawasan konservasi hutan lindung'],
            ['Kawasan Rawan Bencana II (KRB II - Kuning)', 'Zona lereng tengah gunung api dan lembah aliran sungai', 'Berpotensi terlanda awan panas, lontaran batu, dan aliran lahar jika terjadi letusan berskala besar', 'Boleh dihuni bersyarat dengan pembatasan kepadatan ketat, wajib memiliki sistem peringatan dini dan jalur evakuasi siap pakai'],
            ['Kawasan Rawan Bencana I (KRB I - Hijau)', 'Zona kaki lereng bawah dan dataran fluvio-vulkanik', 'Berpotensi terlanda bahaya sekunder aliran lahar dingin di sepanjang bantaran sungai saat hujan lebat', 'Boleh untuk permukiman dan budidaya pertanian dengan syarat tidak mendirikan bangunan di sempadan alur sungai lahar']
          ]
        }
      },
      {
        subtitle: '2. Metodologi Pembuatan Peta Risiko Bencana dengan SIG',
        content: 'Pembuatan peta risiko bencana menggunakan teknik tumpang susun tumpuk layer (overlay) berbobot:',
        keyPoints: [
          'Layer Bahaya (Hazard Layer): Peta kemiringan lereng (DEM) + peta intensitas curah hujan BMKG + peta jenis tanah erodibel.',
          'Layer Kerentanan (Vulnerability Layer): Peta kepadatan penduduk + peta kepadatan bangunan fisik + peta kemiskinan warga.',
          'Layer Kapasitas (Capacity Layer): Peta sebaran posko SAR/pemadam kebakaran + peta jaringan jalan evakuasi + peta shelter darurat.',
          'Operasi Spasial: Dilakukan pembobotan matriks AHP (Analytical Hierarchy Process) dan kalkulasi raster calculator: Peta Risiko = (Peta Bahaya × Peta Kerentanan) / Peta Kapasitas.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Kategori Peta Kebencanaan Resmi Nasional (BNPB)',
        items: [
          { name: 'Peta Bahaya (Hazard Map)', description: 'Menampilkan probabilitas spasial dan intensitas fisik fenomena alam (contoh: Peta Ketinggian Tsunami).' },
          { name: 'Peta Kerentanan (Vulnerability Map)', description: 'Menampilkan lokasi konsentrasi penduduk rentan, bangunan rapuh, dan aset ekonomi kritis.' },
          { name: 'Peta Risiko Bencana (Risk Map)', description: 'Sintesis komprehensif yang menampilkan estimasi korban jiwa dan kerugian rupiah per zona.' }
        ]
      }
    ],
    processes: [
      { stage: 'Akuisisi Data Penginderaan Jauh', title: 'Ekstraksi Citra & LiDAR', description: 'Mengunduh data DEMNAS elevasi mikro dan citra resolusi tinggi tutupan lahan.' },
      { stage: 'Pemodelan Numerik Spasial', title: 'Simulasi Perambatan Bahaya', description: 'Memodelkan simulasi gelombang tsunami atau jangkauan luncuran aliran lahar 3D.' },
      { stage: 'Integrasi Dokumen RTRW', title: 'Penetapan Perda Zonasi Merah', description: 'DPRD dan Bappeda menetapkan batas zona merah bebas hunian dalam perda tata ruang.' }
    ],
    caseStudies: [
      {
        title: 'Pemetaan Patahan Sesar Lembang untuk Mitigasi Risiko Gempa Bandung Raya',
        location: 'Kabupaten Bandung Barat dan Kota Bandung, Jawa Barat',
        description: 'Pusat Studi Gempa Nasional (PuSGeN) dan Badan Geologi memetakan jalur Sesar Lembang sepanjang 29 km yang membelah utara Bandung. Peta geologi mikrozonasi membuktikan sesar ini aktif dengan potensi gempa hingga Mw 6,8. Berdasarkan peta rawan bencana tersebut, pemerintah Jawa Barat melarang izin pembangunan perumahan baru di sepanjang koridor sempadan 50 meter dari jalur patahan sesar.',
        takeaway: 'Peta rawan bencana adalah kompas sains yang memandu keselamatan investasi infrastruktur masa depan.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Kawasan Rawan Bencana (KRB) Gunung Merapi I, II, dan III',
        caption: 'Peta zonasi resmi PVMBG: KRB III (merah puncak dilarang huni), KRB II (kuning aliran lahar), dan KRB I (hijau kaki gunung).',
        badge: 'Disaster Hazard Zonation'
      }
    ],
    terminology: [
      { term: 'Kawasan Rawan Bencana (KRB)', definition: 'Kawasan yang memiliki kondisi atau karakteristik geologis, biologis, hidrologis, atau geografis yang berpotensi memicu timbulnya bencana.', scientificTerm: 'Hazard-Prone Area' },
      { term: 'KRB III (Zona Merah)', definition: 'Kawasan yang paling sering atau berpotensi sangat tinggi terlanda awan panas, gas beracun, dan lontaran batu pijar sehingga dilarang untuk permukiman.', scientificTerm: 'High Risk Hazard Zone' },
      { term: 'Overlay Berbobot (Weighted Overlay)', definition: 'Operasi analisis spasial SIG yang menggabungkan beberapa layer peta tematik dengan memberikan bobot persentase kepentingan tertentu.', scientificTerm: 'Weighted Overlay Analysis' }
    ],
    summary: [
      'Peta KRB membagi wilayah ke dalam tingkat risiko bencana (rendah, sedang, tinggi) berbasis analisis spasial SIG.',
      'Zonasi KRB gunung api terdiri dari KRB III (zona merah mutlak dilarang huni), KRB II, dan KRB I (waspada lahar sungai).',
      'Peta risiko bencana wajib diintegrasikan ke dalam Rencana Tata Ruang Wilayah (RTRW) untuk mengendalikan izin bangunan.'
    ],
    quiz: [
      {
        id: 'q82-1',
        question: 'Kawasan pada lereng atas gunung api aktif yang selalu terancam bahaya awan panas guguran, lontaran batu pijar kawah, dan gas beracun mematikan sehingga mutlak dilarang keras untuk didirikan bangunan hunian menurut PVMBG adalah...',
        options: ['Kawasan Rawan Bencana I (KRB I)', 'Kawasan Rawan Bencana II (KRB II)', 'Kawasan Rawan Bencana III (KRB III - Zona Merah)', 'Kawasan Budidaya Pertanian Terbuka'],
        correctAnswer: 2,
        explanation: 'KRB III (Zona Merah) adalah zona bahaya paling dekat dengan kawah aktif yang sering terlanda awan panas dan lontaran batu pijar sehingga mutlak terlarang untuk permukiman.'
      },
      {
        id: 'q82-2',
        question: 'Metode analisis spasial dalam Sistem Informasi Geografis (SIG) yang menumpangkan beberapa layer peta tematik (seperti peta kemiringan lereng, curah hujan, dan jenis tanah) dengan pembobotan skor tertentu untuk menghasilkan peta daerah rawan longsor disebut...',
        options: ['Buffering', 'Digitasi on-screen', 'Tumpang susun berbobot (Weighted Overlay)', 'Transformasi Fourier'],
        correctAnswer: 2,
        explanation: 'Weighted Overlay (tumpang susun berbobot) adalah teknik analisis multi-kriteria dalam SIG untuk menggabungkan banyak layer data dengan bobot kepentingan tertentu.'
      }
    ],
    references: ['PVMBG - Badan Geologi. (2014). Peta Kawasan Rawan Bencana Gunungapi Indonesia.', 'BNPB. (2016). Pedoman Pelaksanaan Pengkajian Risiko Bencana Daerah. BNPB.'],
    relatedTopicIds: ['risiko-kerentanan-dan-kapasitas-bencana', 'mitigasi-dan-adaptasi-bencana', 'sistem-informasi-geografis-sig', 'kesiapsiagaan-dan-penanggulangan-bencana']
  },
  {
    id: 'kesiapsiagaan-dan-penanggulangan-bencana',
    number: 83,
    title: 'Kesiapsiagaan dan Penanggulangan Bencana',
    englishTitle: 'Disaster Preparedness, Early Warning Systems, and Community Resilience',
    categoryId: 'mitigasi-bencana',
    difficulty: 'Intermediate',
    description: 'Menelaah implementasi kesiapsiagaan bencana: Rencana Kontinjensi, Sistem Peringatan Dini (Early Warning System / EWS: InaTEWS BMKG, sirine tsunami, sensor pergerakan tanah ekstensometer), Desa Tangguh Bencana (Destana), serta kearifan lokal kesiapsiagaan tsunami "Smong" di Pulau Simeulue.',
    keywords: ['kesiapsiagaan bencana', 'early warning system ews', 'inatews tsunami', 'kearifan lokal smong simeulue', 'desa tangguh bencana destana', 'tas siaga bencana'],
    learningObjectives: [
      'Menjelaskan definisi kesiapsiagaan bencana dan penyusunan Tas Siaga Bencana (TSB) keluarga.',
      'Memahami mekanisme kerja Sistem Peringatan Dini Tsunami Indonesia (InaTEWS) dari sensor seismik BMKG hingga sirine pantai.',
      'Menganalisis kearifan lokal "Smong" masyarakat Pulau Simeulue yang berhasil menyelamatkan ribuan nyawa saat Tsunami Aceh 2004.'
    ],
    introduction: 'Kesiapsiagaan (Preparedness) adalah serangkaian kegiatan yang dilakukan untuk mengantisipasi bencana melalui pengorganisasian serta melalui langkah yang tepat guna dan berdaya guna (UU No. 24/2007). Kesiapsiagaan adalah jembatan emas antara kesadaran mitigasi dan keselamatan nyawa saat detik-detik krisis tiba. Memiliki sistem peringatan dini (Early Warning System) berteknologi satelit tidak akan banyak menolong jika masyarakat di garis pantai tidak memahami arti bunyi sirine dan tidak tahu ke mana harus berlari menyelamatkan diri.',
    sections: [
      {
        subtitle: '1. Arsitektur Sistem Peringatan Dini Tsunami Indonesia (InaTEWS)',
        content: 'Indonesia Tsunami Early Warning System (InaTEWS) yang dioperasikan BMKG beroperasi dengan batas waktu ketat:',
        table: {
          headers: ['Tahapan Peringatan Dini', 'Waktu Target Maksimal', 'Instrumen Sensor & Tindakan'],
          rows: [
            ['Deteksi Gempa & Penentuan Parameter', '< 3 Menit pasca-gempa', 'Jaringan 400+ seismograf BMKG mendeteksi gelombang P dan S, menghitung magnitudo (M > 7,0), kedalaman (< 60 km), dan letak episentrum di laut'],
            ['Pemodelan Numerik & Diseminasi EWS', '< 5 Menit pasca-gempa', 'Sistem komputer otomatis mencocokkan skenario database tsunami, mengirim peringatan Berita 1 (Waspada, Siaga, Awas) ke BPBD, TV, radio, dan SMS blast'],
            ['Verifikasi Gelombang Laut Lapangan', 'Menit ke 5 – 10', 'Tide gauge pesisir dan buoy radar tsunami mengukur tinggi muka air laut riil untuk memperbarui tingkat ancaman bahaya'],
            ['Aktivasi Sirine Evakuasi Pantai', 'Seketika pasca-peringatan', 'Pusdalops BPBD menekan tombol sirine menara pantai berkekuatan suara hingga radius 3 kilometer untuk evakuasi warga']
          ]
        }
      },
      {
        subtitle: '2. Kearifan Lokal "Smong" Pulau Simeulue: Warisan Penyelamat Jiwa',
        content: 'Bukti paling menakjubkan dari kekuatan kesiapsiagaan berbasis kearifan lokal terjadi saat gempa dan tsunami 2004:',
        keyPoints: [
          'Tragedi Tsunami Masa Lalu 1907: Pulau Simeulue (Aceh) pernah dilanda gempa dan tsunami dahsyat pada tahun 1907 yang menewaskan banyak penduduk.',
          'Pewarisan Tradisi Lisan "Smong": Tetua adat mengabadikan pengalaman traumatis tersebut ke dalam cerita pengantar tidur anak, syair lagu, dan petuah adat: "Jika terjadi gempa kuat disusul surutnya air laut secara mendadak hingga ikan menggelepar di pasir, jangan ambil ikan itu! Segera berteriak Smong! Smong! dan lari secepat mungkin ke bukit tertinggi!"',
          'Hasil Menakjubkan 2004: Ketika gempa Mw 9,1 terjadi pada 26 Desember 2004 di mana episentrum gempa berada sangat dekat dengan Simeulue (tsunami setinggi 10 meter tiba hanya dalam waktu 10-15 menit), dari 78.000 penduduk pulau tersebut, korban jiwa kurang dari 1% (hanya 7 orang), sementara di daratan Aceh puluhan ribu orang tewas karena mendekati pantai menonton air surut.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Komponen Kesiapsiagaan Mandiri Keluarga',
        items: [
          { name: 'Tas Siaga Bencana (TSB)', description: 'Tas darurat tahan air berisi dokumen penting, senter, peluit, P3K, makanan tahan lama 3 hari, dan pakaian darurat.' },
          { name: 'Rencana Evakuasi Keluarga', description: 'Menentukan titik kumpul keluarga yang aman dan nomor kontak darurat jika terpisah saat gempa.' },
          { name: 'Pelatihan Simulasi Rutin', description: 'Gladi evakuasi "Drop, Cover, and Hold On" (Tiarap, Lindungi Kepala di Bawah Meja, Berpegangan) saat gempa.' }
        ]
      }
    ],
    processes: [
      { stage: 'Guncangan Gempa Bumi', title: 'Aksi Tanggap Spontan Mandiri', description: 'Masyarakat melakukan aksi berlindung kepala di bawah meja dan mematikan kompor gas.' },
      { stage: 'Deteksi Tanda Alam / Sirine', title: 'Evakuasi Cepat 20-20-20', description: 'Jika gempa berlangsung 20 detik, segera evakuasi dalam 20 menit menuju ketinggian minimal 20 meter.' },
      { stage: 'Aktivasi Destana', title: 'Komando Pos Relawan Desa', description: 'Relawan desa tangguh bencana memeriksa shelter, mendata warga rentan, dan mendistribusikan logistik.' }
    ],
    caseStudies: [
      {
        title: 'Program Desa Tangguh Bencana (Destana) di Pesisir Selatan Kulon Progo',
        location: 'Kabupaten Kulon Progo, D.I. Yogyakarta, Indonesia',
        description: 'Menghadapi potensi gempa megathrust selatan Jawa, desa-desa di sekitar Bandara Internasional Yogyakarta (YIA) dilatih menjadi Desa Tangguh Bencana (Destana). Warga memetakan sendiri jalur evakuasi menuju gedung shelter bandara yang dirancang khusus tahan gempa M 8,8 dan tsunami 12 meter, memasang rambu jalur evakuasi di setiap gang desa, serta menggelar gladi simulasi evakuasi setiap tanggal 26 setiap bulannya.',
        takeaway: 'Masyarakat yang terlatih dan memiliki rencana evakuasi mandiri adalah penyelamat pertama dalam bencana.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Alir Sistem Peringatan Dini InaTEWS dan Protokol Evakuasi Tsunami Mandiri 20-20-20',
        caption: 'Bagan rantai peringatan dini BMKG ke Pusdalops serta protokol evakuasi mandiri gempa 20 detik menuju bukit 20 meter.',
        badge: 'Early Warning Architecture'
      }
    ],
    terminology: [
      { term: 'InaTEWS', definition: 'Sistem Peringatan Dini Tsunami Indonesia yang mengintegrasikan jaringan seismograf, akselerometer, dan stasiun pasang surut untuk merilis peringatan dalam waktu kurang dari 5 menit.', scientificTerm: 'InaTEWS' },
      { term: 'Smong', definition: 'Kearifan lokal tradisi lisan masyarakat Pulau Simeulue yang mengajarkan evakuasi instan ke bukit tinggi saat air laut surut pascagempa besar.', scientificTerm: 'Smong Local Wisdom' },
      { term: 'Tas Siaga Bencana (TSB)', definition: 'Tas darurat khusus yang dipersiapkan di rumah berisi kebutuhan pokok darurat untuk bertahan hidup selama minimal 3 hari pascabencana.', scientificTerm: 'Emergency Go-Bag' }
    ],
    summary: [
      'Kesiapsiagaan bencana menghubungkan kesadaran mitigasi dengan aksi penyelamatan nyawa saat krisis.',
      'Sistem InaTEWS BMKG merilis peringatan dini tsunami dalam waktu kurang dari 5 menit pasca-gempa.',
      'Kearifan lokal "Smong" di Simeulue membuktikan bahwa budaya kesiapsiagaan lisan mampu menyelamatkan puluhan ribu nyawa dari amukan tsunami.'
    ],
    quiz: [
      {
        id: 'q83-1',
        question: 'Kearifan lokal masyarakat Pulau Simeulue (Aceh) berupa tradisi lisan yang mengajarkan anak-cucu untuk segera berlari ke atas bukit saat air laut surut pascagempa besar terbukti berhasil menyelamatkan hampir seluruh warga dari Tsunami 2004 dikenal dengan istilah...',
        options: ['Subak', 'Smong', 'Sasi laut', 'Nyabuk gunung'],
        correctAnswer: 1,
        explanation: 'Smong adalah kearifan lokal suku Simeulue yang berakar dari tsunami 1907 dan mengajarkan respon evakuasi kilat menuju perbukitan saat terjadi gempa dan laut surut.'
      },
      {
        id: 'q83-2',
        question: 'Berapakah batas waktu target maksimal bagi BMKG melalui sistem InaTEWS untuk memproses data seismik dan merilis peringatan dini potensi tsunami pertama ke publik pascakejadian gempa bumi laut?',
        options: ['Kurang dari 5 menit', '30 menit', '1 jam', '24 jam'],
        correctAnswer: 0,
        explanation: 'Standar operasional prosedur InaTEWS BMKG mewajibkan peringatan dini potensi tsunami pertama diterbitkan ke publik dalam waktu kurang dari 5 menit pascagempa bumi.'
      }
    ],
    references: ['BMKG. (2019). Katalog Tsunami Indonesia dan Pedoman InaTEWS. Badan Meteorologi, Klimatologi, dan Geofisika.', 'Rahman, A., et al. (2017). Smong: Local Wisdom in Mitigating Tsunami in Simeulue Island. Disaster Prevention and Management.'],
    relatedTopicIds: ['mitigasi-dan-adaptasi-bencana', 'seisme-gempa-bumi', 'pemetaan-daerah-rawan-bencana', 'risiko-kerentanan-dan-kapasitas-bencana']
  }
];
