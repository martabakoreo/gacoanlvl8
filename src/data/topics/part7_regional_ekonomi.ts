import { Topic } from '../../types/geography';

export const topicsPart7: Topic[] = [
  // ==========================================
  // CATEGORY O: Geografi Regional Dunia (106-116)
  // ==========================================
  {
    id: 'karakteristik-negara-maju-dan-berkembang',
    number: 106,
    title: 'Karakteristik Negara Maju dan Berkembang',
    englishTitle: 'Developed vs Developing Nations: Structural Distinctions',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah komparasi negara maju (developed countries) dan berkembang (developing countries): indikator ekonomi pendapatan per kapita (GNI/capita Bank Dunia), struktur angkatan kerja (primer vs tersier), angka harapan hidup, angka melek huruf, serta garis Brandt (North-South Divide).',
    keywords: ['negara maju berkembang', 'pendapatan per kapita', 'garis brandt north south', 'angka harapan hidup', 'struktur ekonomi'],
    learningObjectives: [
      'Membedakan tolok ukur ekonomi dan demografis negara maju vs berkembang menurut Bank Dunia dan PBB.',
      'Menganalisis konsep Garis Brandt (North-South Divide) dan relevansinya di era kontemporer.',
      'Mengevaluasi tantangan transisi struktural negara berkembang menuju status negara berpenghasilan tinggi.'
    ],
    introduction: 'Dalam kajian geografi regional dunia, negara-negara di bumi diklasifikasikan ke dalam Negara Maju (Developed/High-Income Countries) dan Negara Berkembang (Developing/Middle-to-Low Income Countries). Klasifikasi ini tidak semata-mata diukur dari jumlah uang dan Produk Domestik Bruto (PDB), melainkan mencakup kualitas hidup manusia secara holistik: tingkat pendidikan, kualitas sanitasi kesehatan, penguasaan sains teknologi, serta keadilan distribusi pendapatan antardaerah.',
    sections: [
      {
        subtitle: '1. Matriks Komparasi Karakteristik Pokok',
        content: 'Perbandingan komprehensif antara negara maju dan berkembang:',
        table: {
          headers: ['Parameter Indikator', 'Negara Berkembang (Developing)', 'Negara Maju (Developed)'],
          rows: [
            ['Pendapatan Per Kapita (GNI)', 'Rendah hingga Menengah Bawah/Atas (< $13.845 per kapita/thn)', 'Tinggi (> $13.845 per kapita/thn standar Bank Dunia)'],
            ['Struktur Mata Pencaharian', 'Mayoritas bekerja di sektor primer (pertanian, tambang mentah, buruh kasar)', 'Didominasi sektor tersier (jasa keuangan, IT, bioteknologi, riset)'],
            ['Angka Harapan Hidup (AHH)', 'Rata-rata berkisar 65–73 tahun', 'Tinggi melampaui 80–84 tahun (Jepang, Swiss, Singapura)'],
            ['Pertumbuhan Penduduk', 'Tinggi (> 1,2% - 2,5% per tahun), piramida ekspansif kerucut', 'Sangat rendah (< 0,5% atau minus), piramida stasioner/konstruktif'],
            ['Tingkat Melek Huruf & Riset', 'Angka melek huruf bervariasi, anggaran R&D rendah (< 1% PDB)', 'Melek huruf mencapai 99%, investasi riset R&D tinggi (> 2,5% - 4% PDB)']
          ]
        }
      },
      {
        subtitle: '2. Konsep Garis Brandt (The Brandt Line / North-South Divide)',
        content: 'Pada tahun 1980, mantan Kanselir Jerman Barat Willy Brandt merumuskan batas pembagian spasial kesejahteraan global:',
        keyPoints: [
          'Garis Pemisah Spasial: Garis imajiner yang membagi dunia menjadi dua belahan: Negara-Negara Utara (Global North yang kaya dan maju) dan Negara-Negara Selatan (Global South yang miskin dan berkembang).',
          'Anomali Geografis: Meskipun sebagian besar negara maju berada di belahan bumi utara, terdapat pengecualian geografis penting: Australia dan Selandia Baru yang terletak jauh di belahan selatan bumi secara fungsional tergolong sebagai bagian dari "Utara" karena tingkat kemajuan ekonominya.',
          'Dinamika Abad ke-21: Garis Brandt mengalami pergeseran menyusul lompatan industrialisasi "Macan Asia" (Korea Selatan, Singapura, Taiwan) dan kebangkitan ekonomi Tiongkok dan India.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Bank Dunia Berdasarkan Pendapatan GNI Per Kapita (2024)',
        items: [
          { name: 'Low Income', description: 'GNI per kapita < $1.145 (contoh: Afghanistan, Chad, Madagaskar).' },
          { name: 'Lower-Middle Income', description: 'GNI per kapita $1.146 - $4.515 (contoh: India, Vietnam, Filipina).' },
          { name: 'Upper-Middle Income', description: 'GNI per kapita $4.516 - $14.005 (contoh: Indonesia, Malaysia, Thailand, Brasil).' },
          { name: 'High Income (Negara Maju)', description: 'GNI per kapita > $14.005 (contoh: Singapura, Jepang, Jerman, AS).' }
        ]
      }
    ],
    processes: [
      { stage: 'Tahap Agrikultur', title: 'Ekonomi Tradisional', description: 'Mayoritas angkatan kerja mengolah lahan pertanian subsisten dengan produktivitas rendah.' },
      { stage: 'Tahap Manufaktur', title: 'Industrialisasi Lepas Landas', description: 'Pabrik-pabrik manufaktur menyerap jutaan buruh pedesaan, memacu urbanisasi pesat.' },
      { stage: 'Tahap Ekonomi Pengetahuan', title: 'Masyarakat Pascaindustri', description: 'Perekonomian didorong oleh inovasi digital, paten sains, industri keuangan, dan jasa bernilai tinggi.' }
    ],
    caseStudies: [
      {
        title: 'Lompatan Korea Selatan: Dari Negara Miskin Pascaperang Menjadi Raksasa Teknologi Dunia',
        location: 'Republik Korea (Asia Timur)',
        description: 'Pada era 1950-an, Korea Selatan merupakan salah satu negara termiskin di dunia dengan pendapatan per kapita di bawah $100. Melalui kebijakan Saemaul Undong (Gerakan Desa Baru), investasi masif pada sains pendidikan, dan pembinaan konglomerasi industri (Chaebol: Samsung, Hyundai, LG), Korea Selatan berhasil melompat menjadi negara maju terdepan dunia dengan pendapatan per kapita melampaui $33.000.',
        takeaway: 'Investasi pada sumber daya manusia dan sains teknologi adalah kunci utama keluar dari jebakan pendapatan menengah (middle-income trap).'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Skematik Garis Brandt (North-South Divide) dan Spektrum Klasifikasi Pendapatan Dunia',
        caption: 'Bagan garis batas Brandt memisahkan Global North dan Global South dengan anomali Australia-Selandia Baru.',
        badge: 'Global Divide'
      }
    ],
    terminology: [
      { term: 'Garis Brandt (Brandt Line)', definition: 'Garis imajiner visual yang diperkenalkan tahun 1980 yang membagi bumi menjadi Global North yang makmur dan Global South yang berkembang.', scientificTerm: 'Brandt Line' },
      { term: 'Middle-Income Trap', definition: 'Kondisi stagnasi di mana suatu negara berkembang berhasil mencapai pendapatan menengah namun gagal melompat menjadi negara berpenghasilan tinggi.', scientificTerm: 'Middle-Income Trap' },
      { term: 'GNI Per Kapita', definition: 'Pendapatan Nasional Bruto dibagi dengan jumlah total penduduk suatu negara.', scientificTerm: 'Gross National Income per Capita' }
    ],
    summary: [
      'Negara maju dicirikan pendapatan tinggi, dominasi sektor jasa teknologi, angka harapan hidup panjang, dan pertumbuhan populasi rendah.',
      'Garis Brandt membagi spasialitas bumi menjadi belahan Utara makmur dan Selatan berkembang.',
      'Indonesia saat ini berada di kategori Upper-Middle Income dan berjuang keluar dari middle-income trap menuju Indonesia Emas 2045.'
    ],
    quiz: [
      {
        id: 'q106-1',
        question: 'Garis imajiner yang diperkenalkan pada tahun 1980 oleh sebuah komisi internasional independen untuk membagi dunia secara spasial antara negara-negara kaya di belahan utara dan negara-negara berkembang di belahan selatan dikenal sebagai...',
        options: ['Garis Weber', 'Garis Wallace', 'Garis Brandt', 'Garis Khatulistiwa'],
        correctAnswer: 2,
        explanation: 'Garis Brandt (The Brandt Line) dirumuskan oleh Willy Brandt pada tahun 1980 untuk mengilustrasikan jurang ketimpangan antara Global North dan Global South.'
      },
      {
        id: 'q106-2',
        question: 'Meskipun secara astronomis terletak di belahan bumi bagian selatan, negara berikut ini tetap dikategorikan sebagai bagian dari "Negara Maju (Global North)" dalam Garis Brandt karena taraf hidupnya yang sangat tinggi, yaitu...',
        options: ['Madagaskar dan Mozambik', 'Australia dan Selandia Baru', 'Brasil dan Argentina', 'Indonesia dan Papua Nugini'],
        correctAnswer: 1,
        explanation: 'Australia dan Selandia Baru merupakan anomali geografis dalam konsep Garis Brandt; keduanya terletak di selatan tetapi tergolong negara maju berperekonomian tinggi.'
      }
    ],
    references: ['World Bank. (2024). World Development Report. World Bank Group.', 'Brandt, W. (1980). North-South: A Programme for Survival. Pan Books.'],
    relatedTopicIds: ['indikator-pembangunan-dan-kemajuan-negara', 'disparitas-dan-ketimpangan-global', 'kerja-sama-internasional-dan-organisasi-global', 'globalisasi-dan-interdependensi-global']
  },
  {
    id: 'indikator-pembangunan-dan-kemajuan-negara',
    number: 107,
    title: 'Indikator Pembangunan dan Kemajuan Negara',
    englishTitle: 'Development Indicators: HDI, GDP/GNI, Gini Ratio, and Planetary Pressure',
    categoryId: 'regional-dunia',
    difficulty: 'Advanced',
    description: 'Menganalisis sistem pengukuran kemajuan multidimensi: PDB/GNP, Purchasing Power Parity (PPP), Indeks Pembangunan Manusia (Human Development Index / HDI), Indeks Ketimpangan Gender (GII), Rasio Gini (Gini Index), serta Planetary pressures-adjusted Human Development Index (PHDI).',
    keywords: ['indikator pembangunan', 'purchasing power parity ppp', 'human development index hdi', 'rasio gini kurva lorenz', 'phdi beban planet'],
    learningObjectives: [
      'Menjelaskan perbedaan perhitungan PDB nominal vs PDB berbasis Keseimbangan Kemampuan Berbelanja (Purchasing Power Parity / PPP).',
      'Menganalisis kurva Lorenz dan rumus koefisien Rasio Gini dalam mengukur ketimpangan distribusi pendapatan.',
      'Memahami inovasi indeks pembangunan berkelanjutan baru: Planetary pressures-adjusted HDI (PHDI) yang memperhitungkan jejak karbon.'
    ],
    introduction: 'Mengukur kemajuan suatu bangsa tidak lagi cukup hanya dengan menghitung laju pertumbuhan Produk Domestik Bruto (PDB). Pertumbuhan ekonomi yang tinggi seringkali menipu jika hanya dinikmati oleh segelintir konglomerat seraya merusak alam sekitar. Lembaga-lembaga global seperti UNDP dan Bank Dunia telah mengembangkan seperangkat indikator komposit multidimensi untuk mengukur keadilan sosial, kualitas kesehatan, pendidikan, dan keberlanjutan lingkungan hidup secara transparan.',
    sections: [
      {
        subtitle: '1. Perbandingan Indikator-Indikator Pembangunan Utama',
        content: 'Matriks indikator kemajuan negara di dunia:',
        table: {
          headers: ['Nama Indikator', 'Lembaga Penggagas', 'Dimensi yang Diukur', 'Kelebihan & Batasan'],
          rows: [
            ['PDB / GNI per Kapita PPP', 'Bank Dunia / IMF', 'Kekuatan ekonomi riil disesuaikan dengan harga barang lokal di pasar domestik', 'Mencerminkan daya beli nyata, namun tidak mengukur ketimpangan dan kerusakan lingkungan'],
            ['Indeks Pembangunan Manusia (HDI)', 'UNDP (Mahbub ul Haq & Amartya Sen)', 'Tiga dimensi: Umur panjang & sehat, Pengetahuan/Pendidikan, dan Standar hidup layak', 'Fokus pada kualitas manusia, namun belum menghitung kebebasan politik'],
            ['Rasio Gini (Gini Index)', 'Corrado Gini (1912)', 'Derajat ketimpangan distribusi pendapatan penduduk (skala 0 = merata sempurna hingga 1 = timpang mutlak)', 'Sangat akurat mendeteksi jurang kaya-miskin melalui Kurva Lorenz'],
            ['Planetary-adjusted HDI (PHDI)', 'UNDP (Sejak 2020)', 'Mengurangi skor HDI standar dengan beban jejak karbon (CO2) dan jejak material per kapita', 'Negara maju penghasil polusi tinggi mengalami anjlok skor peringkat']
          ]
        }
      },
      {
        subtitle: '2. Analisis Kurva Lorenz dan Koefisien Gini',
        content: 'Rasio Gini mengukur luas bidang antara kurva ketimpangan dengan garis pemerataan sempurna:',
        keyPoints: [
          'Garis Diagonal Kemandirian Sempurna: Garis lurus 45 derajat yang menunjukkan 20% penduduk termiskin menikmati persis 20% total pendapatan negara.',
          'Kurva Lorenz: Kurva lengkung nyata yang merekam persentase kumulatif pendapatan riil yang diterima oleh persentase kumulatif penduduk.',
          'Rentang Nilai Koefisien Gini: Angka Gini berkisar antara 0 hingga 1. Jika Gini < 0,3 (ketimpangan rendah); 0,3 - 0,4 (ketimpangan moderat sedang); > 0,4 (ketimpangan tinggi yang membahayakan stabilitas sosial).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Empat Kategori Peringkat IPM Dunia (UNDP)',
        items: [
          { name: 'Very High Human Development', description: 'Skor HDI ≥ 0,800 (contoh: Swiss 0,967, Norwegia 0,966, Singapura 0,949).' },
          { name: 'High Human Development', description: 'Skor HDI 0,700 - 0,799 (contoh: Indonesia 0,713, Thailand 0,803, Brasil 0,760).' },
          { name: 'Medium Human Development', description: 'Skor HDI 0,550 - 0,699 (contoh: India 0,644, Kamboja 0,600).' },
          { name: 'Low Human Development', description: 'Skor HDI < 0,550 (contoh: Yaman, Chad, Republik Afrika Tengah 0,387).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengumpulan Data Sensus', title: 'Agregasi Data Tiga Dimensi', description: 'Mengambil angka harapan hidup, rata-rata lama sekolah, dan PDB per kapita.' },
      { stage: 'Normalisasi Indeks', title: 'Perhitungan Rata-Rata Geometrik', description: 'UNDP menghitung akar pangkat tiga perkalian ketiga dimensi indeks.' },
      { stage: 'Koreksi Tekanan Planet', title: 'Kalkulasi PHDI Berkelanjutan', description: 'Mengalikan skor HDI dengan faktor diskon emisi karbon untuk memeringkat negara hijau.' }
    ],
    caseStudies: [
      {
        title: 'Penurunan Skor PHDI Negara-Negara Teluk Kaya Minyak Akibat Emisi Karbon Masif',
        location: 'Wilayah Teluk Persia (Qatar, Uni Emirat Arab, Kuwait)',
        description: 'Negara-negara monarki minyak Teluk memiliki skor HDI konvensional sangat tinggi (> 0,850) berkat fasilitas kesehatan gratis dan pendapatan per kapita melimpah. Namun, ketika UNDP memperkenalkan indikator PHDI (Planetary-adjusted HDI) yang memperhitungkan jejak karbon emisi gas rumah kaca ekstrem dari AC dan kilang minyak, peringkat negara-negara ini anjlok bebas puluhan tingkat di dunia.',
        takeaway: 'Kemakmuran materiil yang mengorbankan biosfer bumi bukanlah pembangunan sejati.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Kurva Lorenz dan Bidang Rasio Gini Ketimpangan Pendapatan Serta Tiga Pilar Indeks HDI',
        caption: 'Bagan Kurva Lorenz menunjukkan bidang ketimpangan A/(A+B) dan tiga pilar IPM: Kesehatan, Pendidikan, Standar Hidup.',
        badge: 'Development Metrics'
      }
    ],
    terminology: [
      { term: 'Purchasing Power Parity (PPP)', definition: 'Tingkat kurs penyesuaian harga yang menyetarakan daya beli mata uang di berbagai negara terhadap satu keranjang komoditas barang yang sama.', scientificTerm: 'Purchasing Power Parity' },
      { term: 'Rasio Gini', definition: 'Ukuran statistik ketimpangan distribusi pendapatan yang nilainya berkisar antara 0 (pemerataan sempurna) hingga 1 (ketimpangan mutlak).', scientificTerm: 'Gini Coefficient' },
      { term: 'Kurva Lorenz', definition: 'Grafik yang menggambarkan persentase kumulatif penerimaan pendapatan nasional terhadap persentase kumulatif populasi penduduk.', scientificTerm: 'Lorenz Curve' }
    ],
    summary: [
      'Indikator kemajuan negara mencakup PDB PPP, Indeks Pembangunan Manusia (HDI), Rasio Gini, dan PHDI.',
      'Rasio Gini mengukur ketimpangan via Kurva Lorenz (nilai >0,4 menandakan ketimpangan tinggi rawan konflik).',
      'PHDI adalah paradigma baru yang mendiskon skor HDI jika negara menghasilkan emisi polusi karbon berlebih.'
    ],
    quiz: [
      {
        id: 'q107-1',
        question: 'Jika suatu negara memiliki nilai koefisien Rasio Gini sebesar 0,48, hal ini menunjukkan bahwa kondisi distribusi pendapatan di negara tersebut tergolong...',
        options: [
          'Merata sempurna tanpa kesenjangan',
          'Ketimpangan pendapatan tergolong tinggi dan mencemaskan',
          'Seluruh penduduknya berada di bawah garis kemiskinan',
          'Bebas dari utang luar negeri'
        ],
        correctAnswer: 1,
        explanation: 'Nilai Rasio Gini di atas 0,4 menunjukkan tingkat ketimpangan distribusi pendapatan yang tinggi di mana sebagian besar kue ekonomi dikuasai segelintir elite.'
      },
      {
        id: 'q107-2',
        question: 'Indikator pembangunan komposit baru yang digagas UNDP yang mengoreksi skor Indeks Pembangunan Manusia (IPM) dengan memperhitungkan besaran emisi karbon dioksida dan jejak material eksploitasi alam per kapita dinamakan...',
        options: ['Planetary pressures-adjusted HDI (PHDI)', 'Gross National Product (GNP)', 'Purchasing Power Parity (PPP)', 'Consumer Price Index (CPI)'],
        correctAnswer: 0,
        explanation: 'PHDI (Planetary pressures-adjusted Human Development Index) adalah metrik baru UNDP yang mendiskon skor IPM suatu negara berdasarkan kerusakan ekologis dan jejak karbon yang dihasilkannya.'
      }
    ],
    references: ['UNDP. (2020). Human Development Report: The Next Frontier - Human Development and the Anthropocene.', 'Sen, A. (1999). Development as Freedom. Oxford University Press.'],
    relatedTopicIds: ['karakteristik-negara-maju-dan-berkembang', 'disparitas-dan-ketimpangan-global', 'kualitas-penduduk-dan-indeks-pembangunan-manusia-ipm', 'pembangunan-berkelanjutan']
  },
  {
    id: 'disparitas-dan-ketimpangan-global',
    number: 108,
    title: 'Disparitas dan Ketimpangan Global',
    englishTitle: 'Global Disparities, Unequal Exchange, and Dependency Theory',
    categoryId: 'regional-dunia',
    difficulty: 'Advanced',
    description: 'Menelaah sains ketimpangan spasial global: Teori Ketergantungan (Dependency Theory - Raul Prebisch & Andre Gunder Frank), Teori Sistem Dunia (World-Systems Theory - Immanuel Wallerstein: Inti/Core, Semi-Periferi, dan Periferi), dinamika Perdagangan Tak Seimbang (Unequal Exchange), serta kolonialisme digital.',
    keywords: ['ketimpangan global', 'teori dependensi ketergantungan', 'teori sistem dunia wallerstein', 'core semi periferi periferi', 'unequal exchange perdagangan tak seimbang'],
    learningObjectives: [
      'Menjelaskan Teori Ketergantungan (Dependency Theory) Raul Prebisch mengenai penurunan nilai tukar perdagangan komoditas primer.',
      'Menganalisis 3 zona hierarki spasial Teori Sistem Dunia Immanuel Wallerstein (Core, Semi-Periphery, Periphery).',
      'Mengevaluasi jebakan utang luar negeri dan ekstraksi modal yang melanggengkan ketimpangan Utara-Selatan.'
    ],
    introduction: 'Ketimpangan Global (Global Inequality) adalah jurang disparitas yang sangat lebar dalam hal penguasaan kekayaan, teknologi, dan kekuasaan geopolitik antarbangsa di muka bumi. Mengapa sebagian kecil negara di Eropa Barat dan Amerika Utara menikmati kemakmuran luar biasa sementara miliaran manusia di Afrika Sub-Sahara dan Asia Selatan terperangkap dalam kemiskinan struktural? Para ahli geografi kritis menolak pandangan bahwa kemiskinan disebabkan oleh kemalasan warga; mereka membuktikan adanya struktur sejarah kolonialisme dan sistem perdagangan dunia yang timpang secara sistematis.',
    sections: [
      {
        subtitle: '1. Teori Sistem Dunia Immanuel Wallerstein (World-Systems Theory)',
        content: 'Wallerstein membagi seluruh negara di dunia ke dalam tiga zona hierarki fungsional:',
        table: {
          headers: ['Zona Sistem Dunia', 'Karakteristik Ekonomi & Politik', 'Peran dalam Rantai Nilai Global', 'Contoh Negara Anggota'],
          rows: [
            ['1. Negara Inti (Core Nations)', 'Perekonomian maju berteknologi tinggi, institusi perbankan global, kekuatan militer raksasa, upah buruh sangat tinggi', 'Mengimpor bahan mentah murah dari periferi, memprosesnya menjadi barang teknologi tinggi mahal, dan mengekstrak surplus laba global', 'Amerika Serikat, Jerman, Inggris, Jepang, Prancis'],
            ['2. Negara Semi-Periferi (Semi-Periphery)', 'Perekonomian industri menengah yang sedang berkembang pesat; bertindak sebagai penyangga (buffer) geopolitik', 'Mengekstraksi sumber daya dari periferi namun sekaligus dieksploitasi oleh negara inti; menjadi basis relokasi pabrik manufaktur padat karya', 'Tiongkok, Indonesia, Brasil, India, Meksiko, Afrika Selatan, Turki'],
            ['3. Negara Periferi (Periphery Nations)', 'Perekonomian lemah bergantung pada ekspor bahan mentah tambang atau perkebunan tanpa pengolahan, upah buruh sangat murah, pemerintahan rapuh', 'Menjadi penyedia tenaga kerja murah dan cadangan sumber daya alam yang dikuras oleh negara inti; menanggung beban degradasi lingkungan terberat', 'Kongo, Madagaskar, Mali, Haiti, Papua Nugini']
          ]
        }
      },
      {
        subtitle: '2. Teori Ketergantungan Raul Prebisch: Tesis Prebisch-Singer',
        content: 'Ekonom Argentina Raul Prebisch membuktikan adanya fenomena Penurunan Nilai Tukar Perdagangan (Declining Terms of Trade):',
        keyPoints: [
          'Kesenjangan Elastisitas Komoditas: Produk primer yang diekspor negara berkembang (kopi, karet, bijih tembaga) memiliki elastisitas permintaan pendapatan yang rendah (inelastic); sedangkan produk manufaktur teknologi negara maju (mesin turbin, laptop, pesawat) memiliki elastisitas tinggi.',
          'Penurunan Nilai Tukar: Seiring berjalannya waktu, harga barang manufaktur impor naik jauh lebih cepat daripada harga komoditas tambang mentah. Akibatnya, negara berkembang harus menjual lebih banyak ton tembaga mentah hanya untuk membeli satu unit traktor mesin yang sama.',
          'Solusi Industrialisasi Substitusi Impor (ISI): Prebisch menyarankan negara berkembang melakukan hilirisasi industri dan menutup ketergantungan impor melalui manufaktur dalam negeri.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Mekanisme Pemindahan Surplus Kekayaan Global',
        items: [
          { name: 'Repatriasi Laba Korporasi Multinasional (TNC)', description: 'Perusahaan tambang asing mengeruk emas dan mentransfer 90% keuntungannya kembali ke kantor pusat di negara inti.' },
          { name: 'Beban Pembayaran Bunga Utang Luar Negeri', description: 'Sebagian besar pendapatan devisa negara miskin tersedot untuk membayar cicilan bunga utang lembaga donor internasional.' },
          { name: 'Brain Drain (Eksodus Intelektual)', description: 'Dokter, insinyur, dan ilmuwan terbaik dari negara berkembang bermigrasi menetap ke negara maju karena tawaran gaji tinggi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Era Kolonialisme Klasik', title: 'Perampasan Tanah dan Tanam Paksa', description: 'Kekuatan imperium Barat mengeksploitasi rempah-rempah dan mineral mentah jajahan.' },
      { stage: 'Era Neokolonialisme', title: 'Perangkap Utang & Liberalisasi Pasar', description: 'Mekanisme pasar bebas memaksa negara berkembang membuka tambang bagi konsorsium asing.' },
      { stage: 'Resistensi Hilirisasi', title: 'Proteksi Kebijakan Nasional', description: 'Negara semi-periferi melarang ekspor bijih mentah dan mewajibkan pembangunan smelter pemurnian lokal.' }
    ],
    caseStudies: [
      {
        title: 'Kebijakan Larangan Ekspor Bijih Nikel Mentah Indonesia: Melawan Jebakan Periferi',
        location: 'Nasional Republik Indonesia',
        description: 'Selama puluhan tahun, Indonesia terperangkap dalam status negara periferi yang hanya mengekspor tanah bijih nikel mentah berkadar rendah ke negara maju dengan nilai tambah sangat kecil. Melalui kebijakan hilirisasi nikel (larangan ekspor bijih mentah 2020), Indonesia mewajibkan pembangunan smelter di dalam negeri. Nilai ekspor produk turunan nikel melesat dari Rp 45 triliun menjadi lebih dari Rp 500 triliun per tahun, membuktikan keberhasilan keluar dari status periferi menuju kekuatan semi-periferi.',
        takeaway: 'Hilirisasi sumber daya alam adalah instrumen spasial paling ampuh mematahkan rantai eksploitasi unequal exchange.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Tiga Zona Sistem Dunia Immanuel Wallerstein: Inti (Core), Semi-Periferi, dan Periferi',
        caption: 'Bagan tiga lingkaran konsentris Wallerstein: Core (modal teknologi) mengekstrak surplus dari Periferi (bahan mentah & buruh murah).',
        badge: 'World-Systems Model'
      }
    ],
    terminology: [
      { term: 'Teori Sistem Dunia (World-Systems)', definition: 'Pendekatan sosiologi geografi yang memandang dunia sebagai satu kesatuan sistem ekonomi kapitalis terintegrasi yang terbagi atas Core, Semi-Periphery, dan Periphery.', scientificTerm: 'World-Systems Theory' },
      { term: 'Teori Dependensi (Ketergantungan)', definition: 'Teori yang menyatakan keterbelakangan negara-negara Selatan bukan karena faktor internal, melainkan akibat eksploitasi terstruktur oleh negara-negara imperialis Utara.', scientificTerm: 'Dependency Theory' },
      { term: 'Unequal Exchange', definition: 'Pola perdagangan internasional di mana negara pinggiran menukarkan sejumlah besar tenaga kerja dan bahan mentah dengan produk manufaktur negara inti berharga mahal.', scientificTerm: 'Unequal Exchange' }
    ],
    summary: [
      'Ketimpangan global berakar pada struktur sejarah kolonialisme dan arsitektur perdagangan internasional yang timpang.',
      'Immanuel Wallerstein membagi negara dunia ke dalam 3 hierarki: Inti (Core), Semi-Periferi, dan Periferi.',
      'Tesis Prebisch-Singer membuktikan tren penurunan nilai tukar komoditas primer terhadap barang industri manufaktur.'
    ],
    quiz: [
      {
        id: 'q108-1',
        question: 'Dalam Teori Sistem Dunia yang dikemukakan oleh sosiolog Immanuel Wallerstein, negara-negara industri berteknologi maju yang menguasai sistem perbankan global, memiliki angkatan militer kuat, dan mengekstraksi surplus kekayaan dari negara lain dikelompokkan ke dalam zona...',
        options: ['Negara Periferi (Periphery)', 'Negara Inti (Core)', 'Negara Semi-Periferi', 'Negara Terasing'],
        correctAnswer: 1,
        explanation: 'Negara Inti (Core Nations) dalam model Wallerstein adalah negara-negara hegemonik kaya (seperti AS, Jerman, Jepang) yang mengendalikan modal dan teknologi dunia.'
      },
      {
        id: 'q108-2',
        question: 'Tesis Prebisch-Singer dalam Teori Ketergantungan (Dependency Theory) menyatakan bahwa negara-negara berkembang terus mengalami ketertinggalan ekonomi karena...',
        options: [
          'Rakyat negara berkembang menolak menggunakan teknologi internet',
          'Nilai tukar perdagangan (terms of trade) komoditas primer mentah cenderung terus merosot jika dibandingkan dengan harga barang industri manufaktur',
          'Negara berkembang memiliki cadangan mineral yang terlalu banyak',
          'Kurangnya bantuan militer dari negara tetangga'
        ],
        correctAnswer: 1,
        explanation: 'Tesis Prebisch-Singer membuktikan bahwa harga ekspor bahan mentah negara berkembang terus menurun secara relatif terhadap harga impor barang jadi manufaktur dari negara maju.'
      }
    ],
    references: ['Wallerstein, I. (1974). The Modern World-System. Academic Press.', 'Frank, A. G. (1966). The Development of Underdevelopment. Monthly Review.'],
    relatedTopicIds: ['karakteristik-negara-maju-dan-berkembang', 'indikator-pembangunan-dan-kemajuan-negara', 'kerja-sama-internasional-dan-organisasi-global', 'geografi-transportasi-dan-perdagangan']
  },
  {
    id: 'karakteristik-kawasan-regional-asia',
    number: 109,
    title: 'Karakteristik Kawasan Regional Asia',
    englishTitle: 'Regional Geography of Asia: Subregions, Landforms, and Megacities',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah geografi regional Benua Asia sebagai benua terluas dan terpadat di bumi: pembagian lima subkawasan (Asia Tenggara, Asia Timur, Asia Selatan, Asia Barat Daya/Timur Tengah, dan Asia Tengah); bentang alam ekstrem (Atap Dunia Dataran Tinggi Tibet, Pegunungan Himalaya, Gurun Gobi); dinamika demografi; serta kebangkitan ekonomi Asia abad ke-21.',
    keywords: ['benua asia', 'asia tenggara timur selatan', 'pegunungan himalaya tibet', 'jalur sutra belt and road', 'demografi asia'],
    learningObjectives: [
      'Mengidentifikasi batas-batas geografis dan pembagian lima subkawasan regional Benua Asia.',
      'Menganalisis faktor tektonik dan geomorfologi yang membentuk kenampakan fisik ekstrem di Asia (Himalaya, Palung Mariana, Laut Mati).',
      'Mengevaluasi peran geopolitik dan geoekonomi Asia sebagai lokomotif pertumbuhan ekonomi global abad ke-21.'
    ],
    introduction: 'Benua Asia adalah benua terbesar di planet bumi, mencakup sekitar 30% dari total daratan bumi dan dihuni oleh lebih dari 4,7 miliar jiwa penduduk (sekitar 60% dari total populasi umat manusia). Asia membentang dari tundra Arktik yang beku di utara Siberia hingga hutan hujan tropis basah di kepulauan Indonesia. Karakteristik geografis Asia dicirikan oleh kontras yang spektakuler: tempat bertemunya titik tertinggi di bumi (Gunung Everest 8.848 mdpl) dengan depresi daratan terendah (Laut Mati -430 m dpl), serta peradaban sungai purba yang bertransformasi menjadi megakota teknologi paling dinamis di dunia.',
    sections: [
      {
        subtitle: '1. Lima Subkawasan Regional Benua Asia',
        content: 'Pembagian regional Benua Asia beserta karakteristik khususnya:',
        table: {
          headers: ['Subkawasan Regional', 'Negara-Negara Anggota Utama', 'Bentang Alam & Iklim Dominan', 'Pilar Perekonomian & Karakteristik'],
          rows: [
            ['Asia Tenggara (ASEAN)', 'Indonesia, Malaysia, Singapura, Thailand, Vietnam, Filipina, dll.', 'Kepulauan vulkanik, paparan benua (Sunda & Sahul), iklim tropis monsun basah', 'Lumbung beras dunia, cadangan nikel & sawit, manufaktur elektronik, perairan maritim strategis Selat Malaka'],
            ['Asia Timur', 'Tiongkok, Jepang, Korea Selatan, Taiwan, Mongolia, Korea Utara', 'Dataran rendah aluvial sungai besar (Huang He, Yangtze), kepulauan busur cincin api Pasifik, iklim sedang', 'Raksasa manufaktur teknologi tinggi, semikonduktor, otomotif, bursa finansial dunia, megakota terpadat'],
            ['Asia Selatan', 'India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maladewa', 'Benteng Pegunungan Himalaya, dataran banjir Gangga-Brahmaputra, iklim monsun ekstrem', 'Konsentrasi populasi raksasa (India negara terpadat di dunia), pusat industri teknologi IT, pertanian intensif'],
            ['Asia Barat (Timur Tengah)', 'Arab Saudi, Uni Emirat Arab, Iran, Irak, Turki, Israel, Qatar', 'Hamparan gurun pasir tandus (Rub al Khali), iklim arid kering gersang, cekungan Teluk Persia', 'Cadangan minyak bumi dan gas alam cair terbesar di bumi, simpul tiga benua (Asia, Eropa, Afrika), kota futuristik'],
            ['Asia Tengah', 'Kazakhstan, Uzbekistan, Turkmenistan, Tajikistan, Kirgistan', 'Padang rumput stepa luas, gurun pasir dingin, pegunungan Tian Shan dan Pamir, iklim kontinental ekstrem', 'Kawasan terkurung daratan (landlocked), cadangan uranium dan gas alam masif, jalur utama koridor kuno Jalur Sutra']
          ]
        }
      },
      {
        subtitle: '2. Bentang Alam Ekstrem: Atap Dunia dan Tektonik Tabrakan',
        content: 'Fisiografi Asia didominasi oleh peristiwa tumbukan lempeng tektonik paling dahsyat:',
        keyPoints: [
          'Tumbukan Benua India-Eurasia: Bergeraknya Lempeng Indo-Australia menabrak Lempeng Eurasia sekitar 50 juta tahun lalu mengangkat Pegunungan Himalaya setinggi 8.848 mdpl dan mencuatkan Dataran Tinggi Tibet (ketinggian rata-rata 4.500 mdpl).',
          'Menara Air Asia (The Water Tower of Asia): Gletser es di Dataran Tinggi Tibet dan Himalaya menjadi hulu bagi 10 sungai terbesar di Asia (Indus, Gangga, Brahmaputra, Mekong, Yangtze, Huang He) yang menghidupi lebih dari 2 miliar manusia.',
          'Gurun Pasir Ekstrem: Keberadaan Gurun Gobi di Mongolia dan Gurun Taklamakan di Tiongkok barat terbentuk akibat efek bayangan hujan (rain shadow effect) masif dari benteng Pegunungan Himalaya yang memblokir uap air monsun dari Samudra Hindia.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Episentrum Megapolitan Asia',
        items: [
          { name: 'Kawasan Delta Sungai Mutiara (Greater Bay Area)', description: 'Aglomerasi megakota raksasa di Tiongkok selatan (Guangzhou, Shenzhen, Hong Kong, Macau) berpenduduk 86+ juta jiwa.' },
          { name: 'Kawasan Megapolitan Tokyo-Kanto', description: 'Wilayah metropolitan terpadat di dunia berpenduduk 38 juta jiwa yang menjadi episentrum ekonomi Jepang.' }
        ]
      }
    ],
    processes: [
      { stage: 'Tumbukan Orogenesis', title: 'Pengangkatan Puncak Himalaya', description: 'Dorongan konvergen benua terus mendesak puncak Everest naik sekitar 4 milimeter per tahun.' },
      { stage: 'Sirkulasi Monsun', title: 'Pemberian Berkah Hujan Sawah Basah', description: 'Angin monsun musim panas membawa curah hujan lebat bagi ribuan kilometer persegi sawah di Asia Selatan dan Tenggara.' },
      { stage: 'Transformasi Manufaktur', title: 'Inisiatif Sabuk dan Jalan (BRI)', description: 'Pembangunan jaringan kereta api cepat trans-Asia menghubungkan pabrik-pabrik Asia hingga ke Eropa.' }
    ],
    caseStudies: [
      {
        title: 'Krisis Pencairan Gletser Himalaya dan Ketahanan Air Dua Miliar Penduduk Asia',
        location: 'Kawasan Dataran Tinggi Tibet dan Pegunungan Himalaya',
        description: 'Pemanasan global menyebabkan laju pencairan gletser es Himalaya berkecepatan dua kali lipat dalam empat dekade terakhir. Meskipun pada awalnya memicu pembentukan danau glasial rawan banjir bandang luapan (GLOF), dalam jangka panjang pencairan es ini akan mengurangi debit air sungai Indus, Gangga, dan Mekong secara drastis saat musim kemarau, mengancam produksi pangan dan pasokan air minum bagi lebih dari 2 miliar jiwa warga Asia.',
        takeaway: 'Stabilitas ekologis Atap Dunia Himalaya menentukan hidup matinya ketahanan peradaban di Benua Asia.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Regional Benua Asia: Pembagian Lima Subkawasan dan Pola Aliran Sungai Besar Menara Air Tibet',
        caption: 'Peta komparasi lima subkawasan regional Asia dan bagan sungai raksasa mengalir dari puncak Dataran Tinggi Tibet.',
        badge: 'Asian Geography'
      }
    ],
    terminology: [
      { term: 'Menara Air Asia (Water Tower of Asia)', definition: 'Sebutan untuk Dataran Tinggi Tibet dan Himalaya yang menyimpan cadangan es terbesar di luar kutub yang memasok sungai-sungai utama Asia.', scientificTerm: 'Third Pole / Tibetan Plateau' },
      { term: 'Rain Shadow Effect (Bayang-Bayang Hujan)', definition: 'Wilayah kering di balik lereng pegunungan tinggi yang terhalang dari massa udara basah pembawa hujan.', scientificTerm: 'Rain Shadow' },
      { term: 'Belt and Road Initiative (BRI)', definition: 'Megaproyek strategi konektivitas infrastruktur global yang digagas Tiongkok untuk menghidupkan kembali rute perdagangan Jalur Sutra kuno.', scientificTerm: 'Belt and Road Initiative' }
    ],
    summary: [
      'Asia adalah benua terbesar dan terpadat (60% populasi dunia) yang terbagi dalam 5 subkawasan.',
      'Fisiografinya spektakuler: Pegunungan Himalaya, Menara Air Tibet, Gurun Gobi, dan cekungan minyak Teluk Persia.',
      'Asia menjadi episentrum geoekonomi global abad ke-21 berkat raksasa manufaktur, inovasi digital, dan pasar raksasa.'
    ],
    quiz: [
      {
        id: 'q109-1',
        question: 'Dataran Tinggi Tibet di Benua Asia sering dijuluki oleh para ilmuwan dan geografer dunia sebagai "Menara Air Asia (The Water Tower of Asia)" karena...',
        options: [
          'Memiliki sistem irigasi pipa terbesar yang dibangun oleh manusia purba',
          'Gletser es di kawasan tersebut menjadi sumber mata air utama bagi sungai-sungai raksasa seperti Indus, Gangga, Mekong, dan Yangtze yang menghidupi miliaran orang',
          'Satu-satunya tempat di bumi di mana hujan badai turun setiap hari tanpa henti',
          'Dikelilingi oleh laut terdalam di dunia'
        ],
        correctAnswer: 1,
        explanation: 'Dataran Tinggi Tibet dan Himalaya menyimpan cadangan es glasial raksasa yang mencair mengalirkan air ke sungai-sungai terbesar Asia yang menjadi tumpuan hidup miliaran penduduk.'
      },
      {
        id: 'q109-2',
        question: 'Terbentuknya Gurun Gobi di pedalaman Asia (wilayah Tiongkok utara dan Mongolia) secara geografis disebabkan oleh fenomena...',
        options: [
          'Pencemaran limbah industri pabrik kimia secara masif',
          'Efek bayangan hujan (rain shadow effect) di mana uap air laut dari Samudra Hindia terhalang sepenuhnya oleh benteng tinggi Pegunungan Himalaya',
          'Terkena paparan radiasi sinar ultraviolet langsung akibat ketiadaan atmosfer',
          'Tingginya aktivitas letusan gunung api aktif di sekitar gurun'
        ],
        correctAnswer: 1,
        explanation: 'Pegunungan Himalaya yang menjulang tinggi memblokir seluruh angin muson lembap dari Samudra Hindia, sehingga kawasan pedalaman di baliknya menjadi sangat kering dan membentuk Gurun Gobi.'
      }
    ],
    references: ['Rowland, J. C., et al. (2010). The Tibetan Plateau and the Asian Monsoon. Nature Geoscience.', 'PwC. (2017). The World in 2050: The Long View. PricewaterhouseCoopers.'],
    relatedTopicIds: ['karakteristik-kawasan-regional-eropa', 'karakteristik-kawasan-regional-afrika', 'karakteristik-kawasan-regional-amerika', 'geopolitik-dan-geostrategi-global']
  },
  {
    id: 'karakteristik-kawasan-regional-eropa',
    number: 110,
    title: 'Karakteristik Kawasan Regional Eropa',
    englishTitle: 'Regional Geography of Europe: Peninsulas, Rhine Corridor, and Demographic Aging',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah geografi regional Benua Eropa: konsep "Semenanjung dari Benua Eurasia", empat wilayah fisik (Dataran Rendah Eropa Utara, Dataran Tinggi Tengah, Pegunungan Alpin, Dataran Tinggi Barat Laut); sistem integrasi Uni Eropa (Schengen & Zona Euro); Koridor Pisang Biru (Blue Banana); serta tantangan demografi penuaan penduduk (aging population).',
    keywords: ['benua eropa', 'semenanjung eurasia', 'uni eropa schengen', 'blue banana koridor industri', 'dataran rendah eropa utara', 'pegunungan alpin'],
    learningObjectives: [
      'Menjelaskan karakteristik fisiografi Benua Eropa sebagai semenanjung benua dengan garis pantai yang sangat berkelok (fjord dan teluk).',
      'Menganalisis konsep spasial "Blue Banana" (Koridor Pisang Biru) sebagai poros konsentrasi industri dan populasi Eropa barat.',
      'Mengevaluasi integrasi pasar tunggal Uni Eropa dan tantangan krisis penuaan demografi terhadap sistem ketenagakerjaan.'
    ],
    introduction: 'Secara fisik kebumian, Benua Eropa sebenarnya bukanlah benua yang terpisah secara lautan dari Asia, melainkan merupakan sebuah semenanjung barat raksasa dari daratan superkontinen Eurasia, yang dibatasi oleh Pegunungan Ural, Sungai Ural, dan Laut Kaspia di sisi timur. Meskipun luas daratannya relatif kecil dibandingkan benua lain, Eropa memiliki pengaruh sejarah, sains, dan geopolitik global yang luar biasa sebagai tempat lahirnya Revolusi Industri, konsep negara-bangsa modern, serta integrasi regional paling maju di dunia melalui Uni Eropa.',
    sections: [
      {
        subtitle: '1. Empat Wilayah Fisiografi Utama Benua Eropa',
        content: 'Bentang alam Eropa terbagi ke dalam empat unit geomorfologi utama dari utara ke selatan:',
        table: {
          headers: ['Unit Fisiografi', 'Cakupan Wilayah Geografis', 'Karakteristik Batuan & Bentang Lahan', 'Fungsi Ekonomi & Sumber Daya'],
          rows: [
            ['1. Dataran Tinggi Barat Laut (Northwestern Highlands)', 'Skandinavia (Norwegia, Swedia), Skotlandia, Islandia', 'Batuan kristalin purba Pra-Kambrium, topografi glasial berupa fjord curam memukau, danau gletser, dan tanah berbatu tipis', 'Pembangkit listrik tenaga air (PLTA), kehutanan kayu pinus, perikanan laut Atlantik, geotermal di Islandia'],
            ['2. Dataran Rendah Eropa Utara (North European Plain)', 'Membentang dari Prancis barat, Belgia, Belanda, Jerman utara, Polandia hingga Rusia barat', 'Hamparan dataran aluvial datar sangat luas, tanah loss (loess) yang sangat subur terendapkan oleh angin glasial purba', 'Kawasan pertanian intensif penghasil gandum dan bit gula, koridor jaringan rel kereta api tercepat, dan konsentrasi kota-kota besar'],
            ['3. Dataran Tinggi Tengah (Central Uplands)', 'Prancis tengah (Massif Central), Jerman selatan (Black Forest), Ceko', 'Perbukitan bergelombang sedang, lembah sungai berhutan lebat, kaya akan singkapan formasi sedimen purba', 'Cadangan batu bara dan bijih besi bersejarah yang memicu Revolusi Industri pertama di Eropa'],
            ['4. Sistem Pegunungan Alpin (Alpine System)', 'Pegunungan Alpen (Swiss, Austria, Prancis), Pirenia, Apenina, Karpatia, Kaukasus', 'Pegunungan lipatan muda yang terjal, puncak-puncak es glasial abadi (Mont Blanc 4.808 mdpl), aktivitas seismik di Mediterania', 'Pusat pariwisata ski salju musim dingin, hulu sungai-sungai besar Eropa (Sungai Rhine, Rhone, Danube, Po)']
          ]
        }
      },
      {
        subtitle: '2. Koridor Megalopolitan "Pisang Biru" (The Blue Banana)',
        content: 'Geografer Prancis Roger Brunet (1989) memetakan koridor konsentrasi kekuatan ekonomi Eropa:',
        keyPoints: [
          'Geometri Spasial Koridor: Jalur melengkung berbentuk pisang yang membentang dari Manchester dan London (Inggris), melintasi Benelux (Belanda, Belgia), Lembah Sungai Rhine di Jerman barat, Swiss, hingga Milan dan Turin di Italia utara.',
          'Pusat Gravitasi Eropa: Kawasan ini dihuni oleh lebih dari 110 juta jiwa dengan kepadatan penduduk dan konsentrasi industri, kantor pusat perbankan bursa, universitas riset, serta infrastruktur pelabuhan tersibuk (Rotterdam dan Antwerp).',
          'Arteri Sungai Rhine: Sungai Rhine bertindak sebagai jalan tol air alami yang mengangkut jutaan ton kargo batu bara, baja, dan kontainer kimia antara pedalaman industri Jerman langsung ke laut lepas.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Pilar Integrasi Uni Eropa (European Union)',
        items: [
          { name: 'Kawasan Bebas Paspor Schengen', description: 'Penghapusan pos pemeriksaan perbatasan imigrasi internal antaranegara anggota yang memungkinkan kebebasan gerak manusia tanpa paspor.' },
          { name: 'Mata Uang Tunggal Euro (Eurozone)', description: 'Penggunaan satu mata uang bersama Euro (€) yang dikendalikan oleh Bank Sentral Eropa (ECB) di Frankfurt untuk mengeliminasi risiko fluktuasi kurs.' }
        ]
      }
    ],
    processes: [
      { stage: 'Erosi Glasial Fjord', title: 'Pembentukan Pesisir Skandinavia', description: 'Lidah es gletser zaman es mengikis lembah batuan granit menghasilkan ceruk fjord laut yang dalam.' },
      { stage: 'Integrasi Pasar Tunggal', title: 'Harmonisasi Standar Perdagangan', description: 'Truk kargo melintasi 5 negara dari Belanda ke Italia dalam satu hari tanpa hambatan bea cukai.' },
      { stage: 'Krisis Penuaan Populasi', title: 'Kebijakan Imigrasi Terpilih', description: 'Pemerintah Eropa membuka visa kerja bagi tenaga perawat dan insinyur terampil dari Asia dan Afrika.' }
    ],
    caseStudies: [
      {
        title: 'Pengelolaan Terpadu Sungai Rhine: Dari Selokan Beracun Menjadi Urat Nadi Ekologis Eropa',
        location: 'DAS Sungai Rhine (Swiss, Jerman, Prancis, Belanda)',
        description: 'Pada era 1970-an, Sungai Rhine mengalami pencemaran bahan kimia industri yang sangat parah hingga dijuluki "selokan pembuangan limbah beracun Eropa". Melalui Komisi Internasional Perlindungan Sungai Rhine (ICPR), negara-negara yang dilintasi sungai ini menyatukan undang-undang standar pembuangan limbah, merestorasi dataran banjir alami, dan membangun instalasi pemurnian air. Hasilnya, ikan salmon kembali berenang bebas di Sungai Rhine dan airnya kini aman menjadi air baku minum jutaan warga Rotterdam.',
        takeaway: 'Kerja sama tata ruang DAS lintas negara mampu memulihkan kerusakan ekologis sungai internasional.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Spasial Koridor Industri "Pisang Biru" (Blue Banana) dan Empat Zona Fisiografi Benua Eropa',
        caption: 'Bagan koridor melengkung Blue Banana dari London hingga Milan di atas peta kontur empat zona fisik Eropa.',
        badge: 'European Spatial Model'
      }
    ],
    terminology: [
      { term: 'Blue Banana', definition: 'Koridor spasial konsentrasi populasi dan industri paling padat di Eropa barat yang membentang dari Inggris hingga Italia utara.', scientificTerm: 'European Megalopolis / Blue Banana' },
      { term: 'Fjord', definition: 'Teluk sempit dan dalam di tepi laut dengan dinding tebing batuan yang sangat curam yang terbentuk akibat erosi gletser es yang terendam air laut.', scientificTerm: 'Fjord' },
      { term: 'Perjanjian Schengen', definition: 'Perjanjian internasional di Eropa yang menghapuskan pemeriksaan paspor dan kontrol imigrasi di perbatasan bersama negara-negara anggotanya.', scientificTerm: 'Schengen Agreement' }
    ],
    summary: [
      'Eropa adalah semenanjung barat raksasa Eurasia yang terbagi dalam 4 unit fisiografi utama.',
      'Koridor "Blue Banana" adalah jantung konsentrasi industri dan populasi terkaya Eropa (London-Rhine-Milan).',
      'Integrasi Uni Eropa (Schengen & Euro) menghadapi tantangan demografi penuaan penduduk (aging society).'
    ],
    quiz: [
      {
        id: 'q110-1',
        question: 'Istilah geografis "Blue Banana" (Koridor Pisang Biru) yang dipopulerkan oleh geografer Prancis Roger Brunet digunakan untuk mendeskripsikan...',
        options: [
          'Kawasan perkebunan pisang transgenik terbesar di Spanyol selatan',
          'Koridor melengkung konsentrasi populasi, industri, dan perbankan paling padat dan makmur di Eropa barat dari London hingga Milan',
          'Rute pelayaran laut khusus pengangkut gas alam beku di Laut Baltik',
          'Zona perbatasan terlarang sisa Perang Dingin di Eropa timur'
        ],
        correctAnswer: 1,
        explanation: 'Blue Banana adalah istilah untuk koridor megalopolitan Eropa barat yang membentang dari Inggris, Benelux, lembah Rhine Jerman, hingga Italia utara dengan kepadatan industri tertinggi.'
      },
      {
        id: 'q110-2',
        question: 'Kenampakan pantai pesisir Norwegia yang memiliki teluk sempit menjorok jauh ke daratan dengan tebing batuan granit tegak sangat curam hasil erosi lidah gletser zaman es purba dinamakan...',
        options: ['Tombolo', 'Estuaria', 'Fjord', 'Spit pasir'],
        correctAnswer: 2,
        explanation: 'Fjord adalah lembah glasial berbentuk huruf U yang terendam oleh air laut pasca-mencairnya es zaman Pleistosen, menjadi ciri khas pesisir Norwegia.'
      }
    ],
    references: ['Brunet, R. (1989). Les Villes Européennes. Datar-Reclus.', 'Eurostat. (2023). Demography of Europe: Statistics Visualized.'],
    relatedTopicIds: ['karakteristik-kawasan-regional-asia', 'karakteristik-kawasan-regional-afrika', 'karakteristik-kawasan-regional-amerika', 'kerja-sama-internasional-dan-organisasi-global']
  },
  {
    id: 'karakteristik-kawasan-regional-afrika',
    number: 111,
    title: 'Karakteristik Kawasan Regional Afrika',
    englishTitle: 'Regional Geography of Africa: Plateaus, Great Rift Valley, and Sahel Desertification',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah geografi regional Benua Afrika: julukan "Benua Dataran Tinggi" (Plateau Continent); dinamika tektonik retakan raksasa Lembah Retak Besar (Great Rift Valley); zona transisi rawan kekeringan Sahel; Sungai Nil sebagai oasis peradaban gurun; kekayaan mineral melimpah vs perangkap "Resource Curse"; serta ledakan demografi pemuda.',
    keywords: ['benua afrika', 'great rift valley afrika', 'kawasan sahel desertifikasi', 'sungai nil', 'kutukan sumber daya resource curse', 'plateau continent'],
    learningObjectives: [
      'Menjelaskan karakteristik fisiografi Afrika sebagai Benua Dataran Tinggi dan proses pemekaran tektonik Great Rift Valley.',
      'Menganalisis fenomena degradasi lingkungan dan desertifikasi (perluasan gurun) di zona transisi Sahel.',
      'Mengevaluasi paradoks "Kutukan Sumber Daya Alam" (Resource Curse) di tengah kelimpahan mineral berlian, emas, kobalt, dan minyak bumi.'
    ],
    introduction: 'Benua Afrika adalah benua terbesar kedua di dunia setelah Asia, mencakup luas daratan sekitar 30,3 juta kilometer persegi dengan populasi melampaui 1,4 miliar jiwa. Berbeda dari benua lain yang memiliki jalur pegunungan lipatan linier panjang di tepinya, sebagian besar daratan Afrika berbentuk plato atau dataran tinggi masif yang dikelilingi lereng tebing curam (escarpment) yang langsung menghunjam ke garis pantai sempit tanpa paparan benua luas. Afrika adalah tanah air peradaban manusia tertua sekaligus kawasan dengan dinamika demografi pemuda paling pesat di abad ke-21.',
    sections: [
      {
        subtitle: '1. Fisiografi Unik: Great Rift Valley dan Sistem Danau Tektonik',
        content: 'Geologi Afrika mencatat proses pemisahan kerak bumi aktif terbesar di daratan:',
        table: {
          headers: ['Bentang Alam Utama', 'Proses Geologis Pembentukan', 'Dimensi & Lokasi Spasial', 'Makna Signifikansi Lingkungan'],
          rows: [
            ['Lembah Retak Besar (Great Rift Valley)', 'Pemekaran kerak bumi (divergen intra-kontinental) yang membelah Lempeng Somalia dari Lempeng Nubia', 'Membentang sejauh 6.000 km dari Suriah, Laut Merah, Ethiopia hingga Mozambik', 'Memicu pembentukan gunung api aktif kerucut raksasa (Gunung Kilimanjaro 5.895 mdpl) dan jurang tektonik sangat dalam'],
            ['Danau-Danau Retakan Tektonik', 'Pengisian air pada graben palung patahan amblas di sepanjang sistem retakan', 'Danau Tanganyika (danau terdalam kedua di dunia 1.470 m) dan Danau Victoria (danau air tawar terluas di Afrika)', 'Menyimpan 25% cadangan air tawar permukaan bumi dan menjadi pusat keanekaragaman ikan cichlid endemik'],
            ['Gurun Sahara & Sungai Nil', 'Sirkulasi sel Hadley subtropis kering dipadukan dengan sungai eksotik melintasi gurun', 'Gurun panas terluas di dunia (9,2 juta km²); Sungai Nil sepanjang 6.650 km mengalir ke Laut Mediterania', 'Lembah Sungai Nil menjadi oasis penyelamat kehidupan peradaban Mesir kuno hingga modern di tengah gurun pasir']
          ]
        }
      },
      {
        subtitle: '2. Krisis Desertifikasi Kawasan Sahel dan Proyek Tembok Hijau Raksasa',
        content: 'Kawasan Sahel merupakan zona biogeografi paling rentan di muka bumi:',
        keyPoints: [
          'Zona Transisi Ekologis: Sahel adalah jalur sabuk semi-arid selebar ratusan kilometer yang membentang dari Samudra Atlantik (Senegal) hingga Laut Merah (Eritrea), memisahkan Gurun Sahara kering di utara dengan sabana tropis basah di selatan.',
          'Ancaman Desertifikasi: Kombinasi perubahan iklim global, kekeringan dahsyat berulang, overgrazing (penggembalaan ternak kambing berlebih), dan penebangan kayu bakar menyebabkan pasir Gurun Sahara merembet maju ke selatan sejauh beberapa kilometer setiap tahun.',
          'Inisiatif Tembok Hijau Raksasa (The Great Green Wall): Proyek ambisius Uni Afrika untuk menanam sabuk pepohonan akasia selebar 15 km sepanjang 8.000 km melintasi 11 negara guna menahan laju debu pasir Sahara dan memulihkan 100 juta hektar lahan kritis.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Paradoks Pembangunan Afrika',
        items: [
          { name: 'Kutukan Sumber Daya (Resource Curse)', description: 'Kelimpahan mineral bernilai triliunan dolar (kobalt Kongo, minyak Nigeria, intan Sierra Leone) justru memicu perang saudara, korupsi, dan kemiskinan warga.' },
          { name: 'Dividen Demografi Pemuda Terbesar', description: 'Lebih dari 60% populasi Afrika berusia di bawah 25 tahun; menjadi potensi tenaga kerja dan pasar digital raksasa jika memperoleh pendidikan layak.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pemekaran Divergen', title: 'Pemisahan Kerak Benua Afrika', description: 'Magma mantel membubung meretakkan daratan Afrika timur menjadi dua lempeng terpisah.' },
      { stage: 'Penggundulan Vegetasi', title: 'Erosi Angin Sahel', description: 'Angin harmattan kering meniup lapisan humus tanah tandus memperluas jangkauan bukit pasir gurun.' },
      { stage: 'Penanaman Tembok Hijau', title: 'Restorasi Hutan Agroforestri', description: 'Komunitas lokal menanam pohon akasia tahan kering untuk memulihkan kelembapan air tanah.' }
    ],
    caseStudies: [
      {
        title: 'Tambang Kobalt di Republik Demokratik Kongo: Tulang Punggung Baterai Kendaraan Listrik Dunia',
        location: 'Provinsi Lualaba dan Katanga, Republik Demokratik Kongo',
        description: 'Republik Demokratik Kongo (RDC) memasok lebih dari 70% kebutuhan kobalt dunia—mineral krusial pembuat baterai litium untuk mobil listrik dan smartphone global. Namun, kekayaan luar biasa ini menjadi potret nyata Resource Curse: puluhan ribu anak-anak bekerja sebagai penambang liar artesanal di lubang sempit beracun tanpa alat pelindung diri, sementara keuntungan ekspor diserap oleh perusahaan multinasional dan kelompok milisi bersenjata.',
        takeaway: 'Transisi energi hijau global tidak boleh dibangun di atas penderitaan kemanusiaan dan eksploitasi perusakan alam di Afrika.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Geologis Lembah Retak Besar (Great Rift Valley) dan Garis Sabuk Tembok Hijau Sahel di Benua Afrika',
        caption: 'Peta retakan tektonik dari Danau Victoria ke Laut Merah serta sabuk reboisasi Tembok Hijau Sahel melintasi 11 negara.',
        badge: 'African Plate Dynamics'
      }
    ],
    terminology: [
      { term: 'Great Rift Valley', definition: 'Sistem palung retakan tektonik divergen raksasa sepanjang 6.000 km yang membelah kawasan Afrika bagian timur.', scientificTerm: 'East African Rift System (EARS)' },
      { term: 'Desertifikasi', definition: 'Proses degradasi lahan subur di wilayah kering, semi-kering, dan kering sub-lembab menjadi bentang lahan gurun pasir tandus.', scientificTerm: 'Desertification' },
      { term: 'Resource Curse (Kutukan Sumber Daya)', definition: 'Paradoks ekonomi di mana negara yang kaya sumber daya alam tambang justru cenderung memiliki pertumbuhan ekonomi rendah dan stabilitas politik rapuh.', scientificTerm: 'Resource Curse' }
    ],
    summary: [
      'Afrika adalah Benua Dataran Tinggi dengan patahan aktif raksasa Great Rift Valley di sisi timur.',
      'Kawasan Sahel berjuang melawan desertifikasi melalui megaproyek Tembok Hijau Raksasa (The Great Green Wall).',
      'Afrika menghadapi tantangan paradoks kutukan sumber daya alam seraya memegang potensi bonus demografi pemuda terbesar dunia.'
    ],
    quiz: [
      {
        id: 'q111-1',
        question: 'Fenomena geologis dahsyat berupa pemekaran kerak bumi (divergen) sepanjang 6.000 km yang membelah kawasan Afrika bagian timur dan membentuk rangkaian danau-danau patahan yang sangat dalam serta gunung api Kilimanjaro dinamakan...',
        options: ['Sesar San Andreas', 'Great Rift Valley (Lembah Retak Besar Afrika)', 'Palung Mariana', 'Patahan Semangko'],
        correctAnswer: 1,
        explanation: 'Great Rift Valley (Sistem Retakan Afrika Timur) adalah retakan tektonik divergen benua aktif yang sedang membelah daratan Afrika menjadi dua lempeng terpisah.'
      },
      {
        id: 'q111-2',
        question: 'Proyek lingkungan ambisius yang dicanangkan oleh negara-negara Uni Afrika untuk menanam sabuk pepohonan tahan kering melintasi 11 negara guna menahan laju perluasan pasir Gurun Sahara ke kawasan Sahel dikenal sebagai...',
        options: ['The Great Barrier Reef', 'The Great Green Wall (Tembok Hijau Raksasa)', 'Amazonian Green Belt', 'Nordic Pine Line'],
        correctAnswer: 1,
        explanation: 'The Great Green Wall adalah inisiatif restorasi ekologis menanam sabuk pepohonan melintasi benua Afrika dari Senegal hingga Djibouti untuk menahan desertifikasi.'
      }
    ],
    references: ['Chorowicz, J. (2005). The East African Rift System. Journal of African Earth Sciences.', 'UNCCD. (2020). The Great Green Wall: Implementation Status and Way Ahead to 2030.'],
    relatedTopicIds: ['karakteristik-kawasan-regional-asia', 'karakteristik-kawasan-regional-eropa', 'karakteristik-kawasan-regional-amerika', 'disparitas-dan-ketimpangan-global']
  },
  {
    id: 'karakteristik-kawasan-regional-amerika',
    number: 112,
    title: 'Karakteristik Kawasan Regional Amerika',
    englishTitle: 'Regional Geography of the Americas: North America vs Latin America Dynamics',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah geografi regional Benua Amerika: pembagian fisiografis Amerika Utara (Pegunungan Rocky, Dataran Great Plains, Perisai Kanada) vs Amerika Selatan/Latin (Tulang Punggung Andes, Lembah Amazon, Hutan Tropis Terluas Dunia); dinamika perbatasan geopolitik Sungai Rio Grande; serta megadiversitas hayati.',
    keywords: ['benua amerika', 'amerika utara latin', 'pegunungan andes', 'hutan hujan amazon', 'great plains lumbung gandum', 'rocky mountains'],
    learningObjectives: [
      'Membedakan pembagian fisik dan sosio-kultural antara Anglo-Amerika (Amerika Utara) dan Amerika Latin.',
      'Menganalisis karakteristik morfologi tulang punggung Pegunungan Andes dan cekungan DAS Sungai Amazon.',
      'Mengevaluasi peran sistem pertanian skala luas Corn Belt dan Wheat Belt di dataran Great Plains dalam rantai pasok pangan dunia.'
    ],
    introduction: 'Benua Amerika adalah benua terpanjang di planet bumi, membentang sejauh lebih dari 14.000 kilometer dari Kepulauan Arktik Kanada di lintang utara ekstrem hingga ke Tanjung Horn di dekat Antarktika di ujung selatan. Secara fisiografis dan kultural, benua ini terbagi menjadi dua ranah peradaban besar: Anglo-Amerika (Amerika Serikat dan Kanada yang berbahasa Inggris dan berbudaya Anglo-Saxon) serta Amerika Latin (Meksiko, Amerika Tengah, Karibia, dan Amerika Selatan yang dipengaruhi oleh budaya Hispanik-Iberia Spanyol dan Portugis).',
    sections: [
      {
        subtitle: '1. Komparasi Fisiografi: Amerika Utara vs Amerika Selatan',
        content: 'Perbandingan bentang alam dua belahan Benua Amerika:',
        table: {
          headers: ['Aspek Geografis', 'Karakteristik Amerika Utara (Anglo-Amerika)', 'Karakteristik Amerika Selatan (Amerika Latin)'],
          rows: [
            ['Jalur Pegunungan Barat', 'Pegunungan Rocky & Sierra Nevada: Lipatan muda tinggi kaya mineral tembaga dan taman nasional geologis (Yellowstone)', 'Pegunungan Andes: Jalur pegunungan lipatan kontinental terpanjang di dunia (7.000 km) dengan puncak Aconcagua 6.961 mdpl'],
            ['Dataran Rendah Tengah', 'Great Plains & Lembah Mississippi: Dataran aluvial subur luas beriklim sedang, menjadi lumbung gandum dan jagung dunia', 'Cekungan Amazon & Dataran Pampas: Hutan hujan tropis terluas di dunia (Amazon) serta padang rumput peternakan sapi intensif di Argentina'],
            ['Sistem Perairan Sungai', 'Sistem Sungai Mississippi-Missouri (sungai terpanjang di Amerika Utara) dan Danau-Danau Besar (Great Lakes)', 'Sungai Amazon: Sungai dengan debit air terbesar di dunia (mencakup 20% total debit air tawar dunia ke samudra)'],
            ['Tingkat Perekonomian', 'Negara maju berteknologi tinggi (AS & Kanada), PDB terbesar, industri kedirgantaraan, IT Silicon Valley', 'Negara berkembang dan emerging markets (Brasil, Argentina, Chili), berbasis ekspor komoditas pertanian dan mineral']
          ]
        }
      },
      {
        subtitle: '2. Paru-Paru Dunia: Hutan Hujan Tropis Amazon dan Sungai Terbang',
        content: 'Hutan Amazon memiliki fungsi krusial dalam menyetabilkan sistem iklim global:',
        keyPoints: [
          'Megabiodiversitas Hayati: Membentang di 9 negara (terutama Brasil) seluas 5,5 juta km², menampung 10% dari seluruh spesies flora dan fauna yang dikenal di bumi serta menyimpan 150–200 miliar ton cadangan karbon biologis.',
          'Fenomena "Sungai Terbang" (Flying Rivers): Pepohonan raksasa kanopi Amazon melepaskan triliunan liter uap air ke atmosfer setiap hari melalui evapotranspirasi, membentuk koridor uap air masif tak kasat mata di langit yang tertiup angin memicu hujan bagi lumbung pertanian Brasil selatan.',
          'Ancaman Deforestasi Lahan: Pembabatan hutan secara liar untuk peternakan sapi potong dan perkebunan kedelai ekspor telah menghilangkan hampir 17% luas asli Amazon, mendekati titik kritis pembalikan (tipping point) di mana hutan hujan berisiko berubah menjadi sabana kering tandus.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Zonasi Pertanian Sabuk Komoditas Amerika Utara (Agricultural Belts)',
        items: [
          { name: 'Corn Belt (Sabuk Jagung)', description: 'Wilayah Midwest (Iowa, Illinois, Indiana) yang memproduksi jagung pakan ternak dan bahan bioetanol terbesar dunia.' },
          { name: 'Wheat Belt (Sabuk Gandum)', description: 'Wilayah Great Plains kering (Kansas, Dakota) yang memproduksi gandum musim dingin dan musim semi.' },
          { name: 'Cotton Belt (Sabuk Kapas)', description: 'Wilayah selatan AS yang hangat dan lembap untuk industri serat tekstil kapas.' }
        ]
      }
    ],
    processes: [
      { stage: 'Subduksi Lempeng Nazca', title: 'Pengangkatan Tulang Punggung Andes', description: 'Penunjaman lempeng samudra Nazca di bawah lempeng benua Amerika Selatan melahirkan rangkaian gunung api raksasa Andes.' },
      { stage: 'Mekanisme Tipping Point', title: 'Pelepasan Emisi Karbon Hutan', description: 'Kebakaran hutan Amazon mengubah peran hutan dari penyerap karbon (carbon sink) menjadi pelepas karbon.' },
      { stage: 'Perdagangan Bebas USMCA', title: 'Integrasi Industri Manufaktur', description: 'Perjanjian perdagangan bebas memicu berdirinya pabrik perakitan mobil Maquiladora di perbatasan Meksiko-AS.' }
    ],
    caseStudies: [
      {
        title: 'Tambang Litium Atacama: Segitiga Emas Energi Bersih di Gurun Terkering di Bumi',
        location: 'Gurun Atacama, Wilayah Chili Utara',
        description: 'Gurun Atacama merupakan salah satu tempat paling kering di muka bumi dengan curah hujan nyaris 0 mm/tahun. Di balik kegersangannya, Atacama bersama Bolivia dan Argentina membentuk "Segitiga Litium" yang menyimpan lebih dari 50% cadangan litium dunia di bawah danau garamnya (Salar de Atacama). Air garam berkonsentrasi litium tinggi disedot ke kolam penguapan surya raksasa untuk diekspor ke pabrik baterai mobil listrik di seluruh dunia.',
        takeaway: 'Gurun tandus Amerika Selatan memegang kunci transisi energi bersih terbarukan global.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Komparasi Benua Amerika: Jalur Pegunungan Andes-Rocky, Cekungan Amazon, dan Sabuk Pertanian AS',
        caption: 'Bagan fisiografi benua Amerika: Tulang punggung pegunungan barat Pasifik, lumbung Great Plains, dan paru-paru hutan Amazon.',
        badge: 'Pan-American Geography'
      }
    ],
    terminology: [
      { term: 'Sungai Terbang (Flying Rivers)', definition: 'Arus uap air atmosferik raksasa yang diproduksi oleh evapotranspirasi hutan Amazon yang membawa presipitasi hujan ke Amerika Selatan.', scientificTerm: 'Atmospheric Flying Rivers' },
      { term: 'Tipping Point Amazon', definition: 'Ambang batas deforestasi (sekitar 20–25%) di mana ekosistem hutan hujan tropis Amazon kehilangan kelembapannya dan berubah permanen menjadi sabana kering.', scientificTerm: 'Amazon Tipping Point' },
      { term: 'Anglo-Amerika', definition: 'Wilayah Amerika Utara (AS dan Kanada) yang mayoritas penduduknya berbahasa Inggris dan berakar pada kebudayaan kolonial Inggris.', scientificTerm: 'Anglo-America' }
    ],
    summary: [
      'Benua Amerika terbagi secara fisik dan kultural menjadi Anglo-Amerika (Utara) dan Amerika Latin (Selatan).',
      'Amerika Utara memiliki lumbung pangan Great Plains; Amerika Selatan memiliki paru-paru biosfer Hutan Amazon.',
      'Pegunungan Andes adalah rangkaian pegunungan kontinental terpanjang di dunia hasil subduksi Lempeng Nazca.'
    ],
    quiz: [
      {
        id: 'q112-1',
        question: 'Rangkaian pegunungan lipatan kontinental terpanjang di muka bumi yang membentang sepanjang lebih dari 7.000 kilometer di pesisir barat Amerika Selatan adalah...',
        options: ['Pegunungan Rocky', 'Pegunungan Alpen', 'Pegunungan Andes', 'Pegunungan Himalaya'],
        correctAnswer: 2,
        explanation: 'Pegunungan Andes membentang sepanjang 7.000 km melintasi 7 negara di pesisir barat Amerika Selatan, menjadikannya pegunungan kontinental terpanjang di dunia.'
      },
      {
        id: 'q112-2',
        question: 'Fenomena hidrometeorologis penting yang dihasilkan oleh pelepasan uap air dalam jumlah raksasa oleh tajuk pepohonan Hutan Hujan Tropis Amazon ke atmosfer yang mengalirkan curah hujan ke bagian selatan Brasil dikenal dengan sebutan...',
        options: ['El Niño Southern Oscillation', 'Sungai Terbang (Flying Rivers)', 'Monsun barat', 'Siklon tropis Atlantik'],
        correctAnswer: 1,
        explanation: 'Sungai Terbang (Flying Rivers) adalah massa uap air masif yang dipompa oleh evapotranspirasi kanopi pohon Amazon yang mengalir di troposfer membawa hujan ke benua Amerika Selatan.'
      }
    ],
    references: ['Lovejoy, T. E., & Nobre, C. (2018). Amazon Tipping Point. Science Advances.', 'Harden, C. A. (2006). Human Impacts on Headwater Fluvial Systems in the Northern and Central Andes. Geomorphology.'],
    relatedTopicIds: ['karakteristik-kawasan-regional-asia', 'karakteristik-kawasan-regional-eropa', 'karakteristik-kawasan-regional-afrika', 'karakteristik-kawasan-regional-australia-oseania']
  },
  {
    id: 'karakteristik-kawasan-regional-australia-oseania',
    number: 113,
    title: 'Karakteristik Kawasan Regional Australia dan Oseania',
    englishTitle: 'Regional Geography of Australia and Oceania: The Outback, Atolls, and Rising Sea Levels',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah geografi regional Benua Australia dan Kepulauan Oseania: fisiografi Australia (Great Dividing Range, Gurun Pedalaman The Outback, Cekungan Danau Eyre, Karang Penghalang Terbesar Great Barrier Reef); pembagian subkawasan Oseania (Melanesia, Mikronesia, Polinesia); fauna marsupial endemik; serta kerentanan eksistensial negara kepulauan atol terhadap kenaikan muka air laut global.',
    keywords: ['australia dan oseania', 'gurun the outback', 'great barrier reef terumbu karang', 'melanesia mikronesia polinesia', 'ancaman kenaikan air laut atol', 'fauna marsupial'],
    learningObjectives: [
      'Menjelaskan karakteristik fisiografi Benua Australia sebagai benua tertua, terdatar, dan terkering yang dihuni manusia.',
      'Membedakan tiga subkawasan budaya kepulauan di Samudra Pasifik: Melanesia, Mikronesia, dan Polinesia.',
      'Menganalisis dampak nyata perubahan iklim pemanasan global terhadap pemutihan karang Great Barrier Reef dan nasib negara pulau kecil (seperti Tuvalu dan Kiribati).'
    ],
    introduction: 'Benua Australia adalah benua terkecil di dunia sekaligus pulau terbesar di muka bumi. Terletak sepenuhnya di belahan bumi selatan, Australia bersama ribuan pulau kecil yang tersebar di hamparan luas Samudra Pasifik membentuk kawasan regional Australia dan Oseania. Karena terisolasi secara geografis dari daratan benua lain selama lebih dari 40 juta tahun pasca-pecahnya superkontinen Gondwana, kawasan ini mengembangkan keanekaragaman hayati unik yang tidak dijumpai di belahan bumi mana pun, terutama mamalia berkantong (marsupialia) dan karang laut terkaya di planet bumi.',
    sections: [
      {
        subtitle: '1. Fisiografi Benua Australia: Dari Garis Pantai Subur Menuju The Outback',
        content: 'Bentang alam Australia terbagi ke dalam tiga zonasi utama dari timur ke barat:',
        table: {
          headers: ['Zona Geomorfologi', 'Bentang Alam Dominan', 'Iklim & Kondisi Lingkungan', 'Konsentrasi Penduduk & Ekonomi'],
          rows: [
            ['1. Dataran Tinggi Timur (Eastern Highlands)', 'Pegunungan Great Dividing Range & Pegunungan Salju (Gunung Kosciuszko 2.228 mdpl)', 'Iklim sedang hingga subtropis basah, curah hujan tinggi tersaring dari laut Pasifik', 'Dihuni lebih dari 80% populasi Australia; lokasi kota-kota metropolitan utama: Sydney, Melbourne, Brisbane, Canberra'],
            ['2. Dataran Rendah Tengah (Central Lowlands)', 'Cekungan Artesis Besar (Great Artesian Basin) dan Danau Eyre (-15 m dpl)', 'Iklim semi-arid kering; air tanah artesis dalam menjadi tumpuan hidup peternakan domba merino', 'Sentra peternakan domba wol dan sapi potong terluas di dunia (stasiun peternakan raksasa)'],
            ['3. Plato Barat (Western Plateau / The Outback)', 'Gurun pasir dan semak belukar gersang (Gurun Pasir Besar, Gurun Gibson, Gurun Victoria, Monolit Uluru)', 'Iklim arid gurun sangat panas dan gersang tanpa sungai permanen', 'Deposit mineral tambang raksasa: bijih besi Pilbara, emas Kalgoorlie, bauksit, dan tanah jarang']
          ]
        }
      },
      {
        subtitle: '2. Tiga Ranah Kepulauan Oseania: Melanesia, Mikronesia, dan Polinesia',
        content: 'Ribuan kepulauan di Samudra Pasifik diklasifikasikan ke dalam 3 wilayah etnogeografis:',
        keyPoints: [
          'Melanesia ("Kepulauan Hitam"): Terletak di Pasifik barat daya dekat khatulistiwa, dihuni oleh penduduk berkulit gelap dan berambut keriting. Meliputi Papua Nugini, Kepulauan Solomon, Vanuatu, Kaledonia Baru, dan Fiji. Pulau-pulaunya berukuran besar dan berpegunungan vulkanik tinggi.',
          'Mikronesia ("Kepulauan Kecil"): Terletak di Pasifik barat utara khatulistiwa. Terdiri dari ribuan pulau kecil dan pulau karang (atol). Meliputi Federasi Mikronesia, Palau, Kepulauan Marshall, Nauru, dan Kiribati.',
          'Polinesia ("Banyak Pulau"): Membentuk formasi Segitiga Polinesia raksasa yang membentang dari Kepulauan Hawaii di utara, Selandia Baru di barat daya, hingga Pulau Paskah (Rapa Nui) di timur. Dikenal dengan budaya maritim penjelajah samudra tradisional.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Ancaman Lingkungan Eksistensial di Oseania',
        items: [
          { name: 'Pemutihan Massal Karang (Coral Bleaching)', description: 'Gelombang panas laut membunuh alga zooxanthellae pada ekosistem karang Great Barrier Reef seluas 2.300 km.' },
          { name: 'Tenggelamnya Negara Atol Pasifik', description: 'Kenaikan muka air laut menenggelamkan pulau-pulau rendah Tuvalu dan Kiribati yang hanya bertinggi 1–2 meter di atas laut.' }
        ]
      }
    ],
    processes: [
      { stage: 'Isolasi Evolusioner Gondwana', title: 'Perkembangan Mamalia Berkantong', description: 'Ketiadaan mamalia berplasenta pemangsa memungkinkan kanguru dan koala berevolusi mendominasi relung ekologis Australia.' },
      { stage: 'Pemanasan Suhu Samudra', title: 'Stres Termal Ekosistem Karang', description: 'Suhu laut naik memicu karang memutih dan mengalami kematian massal.' },
      { stage: 'Pengungsi Iklim (Climate Refugees)', title: 'Evakuasi Warga Negara Atol', description: 'Pemerintah Tuvalu menandatangani perjanjian dengan Selandia Baru dan Australia untuk merelokasi warganya.' }
    ],
    caseStudies: [
      {
        title: 'Tuvalu dan Kiribati: Menghadapi Kemungkinan Menjadi Negara Pertama yang Lenyap dari Peta Bumi',
        location: 'Kepulauan Atol Samudra Pasifik Tengah',
        description: 'Negara pulau atol Tuvalu dan Kiribati menghadapi ancaman eksistensial nyata akibat pemanasan global. Dengan elevasi daratan rata-rata kurang dari 2 meter di atas permukaan laut pasang, intrusi air laut asin telah mencemari seluruh sumur air tawar dan mematikan tanaman ubi keladi tumpuan pangan warga. Tuvalu telah menciptakan salinan digital negaranya di ranah virtual (Digital Twin Nation) sebagai antisipasi jika seluruh daratan fisik mereka tenggelam permanen ke dasar samudra.',
        takeaway: 'Kenaikan muka air laut bukan lagi sekadar prediksi ilmiah masa depan, melainkan tragedi kemanusiaan riil di Kepulauan Oseania.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Kawasan Australia dan Tiga Ranah Oseania (Melanesia, Mikronesia, Polinesia) Serta Great Barrier Reef',
        caption: 'Peta pembagian Segitiga Polinesia, sabuk Melanesia-Mikronesia, garis Great Barrier Reef, dan gurun Outback Australia.',
        badge: 'Oceanic Geography'
      }
    ],
    terminology: [
      { term: 'The Outback', definition: 'Wilayah pedalaman terpencil dan sangat kering yang mencakup sebagian besar daratan Benua Australia.', scientificTerm: 'The Outback' },
      { term: 'Atol (Atoll)', definition: 'Pulau karang berbentuk cincin melingkar yang mengelilingi sebuah laguna air laut di tengahnya.', scientificTerm: 'Coral Atoll' },
      { term: 'Great Artesian Basin', definition: 'Cekungan air tanah artesis bawah tanah terbesar dan terdalam di dunia yang menopang kehidupan di pedalaman Australia kering.', scientificTerm: 'Great Artesian Basin' }
    ],
    summary: [
      'Australia adalah benua terkering dan tertua yang didominasi oleh gurun The Outback dan benteng Great Dividing Range.',
      'Oseania terbagi dalam 3 ranah budaya kepulauan Pasifik: Melanesia, Mikronesia, dan Polinesia.',
      'Great Barrier Reef terancam pemutihan karang dan negara-negara atol rendah terancam tenggelam akibat kenaikan muka air laut.'
    ],
    quiz: [
      {
        id: 'q113-1',
        question: 'Gugusan terumbu karang laut terluas dan termegah di dunia yang membentang sepanjang lebih dari 2.300 kilometer di lepas pantai timur laut Queensland Australia dikenal dengan sebutan...',
        options: ['Great Barrier Reef', 'Palung Sunda', 'Kepulauan Galapagos', 'Laut Kaspia'],
        correctAnswer: 0,
        explanation: 'Great Barrier Reef adalah sistem terumbu karang terbesar di dunia yang terletak di Laut Koral lepas pantai Queensland, Australia.'
      },
      {
        id: 'q113-2',
        question: 'Pembagian kawasan kepulauan di Samudra Pasifik yang mencakup Papua Nugini, Kepulauan Solomon, Vanuatu, dan Fiji yang dihuni oleh penduduk mayoritas berkulit gelap dan berambut ikal dinamakan...',
        options: ['Polinesia', 'Mikronesia', 'Melanesia', 'Eurasia'],
        correctAnswer: 2,
        explanation: 'Melanesia (berasal dari bahasa Yunani mela = hitam, nesos = pulau) adalah subkawasan Oseania barat daya yang meliputi Papua Nugini, Solomon, Vanuatu, dan Fiji.'
      }
    ],
    references: ['Hughes, T. P., et al. (2017). Global Warming and Recurrent Mass Bleaching of Corals. Nature.', 'Connell, J. (2013). Islands at Risk? Environments, Economies and Contemporary Change. Edward Elgar.'],
    relatedTopicIds: ['karakteristik-kawasan-regional-asia', 'karakteristik-kawasan-regional-amerika', 'perubahan-iklim-dan-pemanasan-global', 'laut-dan-karakteristiknya']
  },
  {
    id: 'karakteristik-kawasan-kutub-antarktika-arktik',
    number: 114,
    title: 'Karakteristik Kawasan Kutub: Antarktika dan Arktik',
    englishTitle: 'Polar Geography: The Arctic Ocean vs Antarctic Ice Sheet Dynamics',
    categoryId: 'regional-dunia',
    difficulty: 'Advanced',
    description: 'Menelaah geografi kawasan kutub bumi: perbedaan fundamental Arktik (Samudra beku yang dikelilingi daratan) vs Antarktika (Benua daratan beku yang dikelilingi samudra); Perjanjian Antarktika 1959 (The Antarctic Treaty System); dinamika lapisan permafrost dan pelepasan gas metana; serta pembukaan rute pelayaran Jalur Barat Laut (Northwest Passage) akibat mencairnya es kutub.',
    keywords: ['kawasan kutub', 'antarktika vs arktik', 'perjanjian antarktika 1959', 'pencairan es kutub permafrost', 'jalur barat laut northwest passage'],
    learningObjectives: [
      'Membandingkan karakteristik geografis, oseanografis, dan biologis antara Kutub Utara (Arktik) dan Kutub Selatan (Antarktika).',
      'Menganalisis status hukum internasional Benua Antarktika berdasarkan Traktat Antarktika 1959 (zona perdamaian dan sains bebas militer).',
      'Mengevaluasi konsekuensi geopolitik dan lingkungan dari mencairnya es laut Arktik terhadap rute pelayaran pelayaran global dan pelepasan metana permafrost.'
    ],
    introduction: 'Kutub Utara (Arktik) dan Kutub Selatan (Antarktika) sering dianggap serupa sebagai padang es yang membekukan. Namun dalam kacamata sains geografi, kedua kawasan kutub ini merupakan kebalikan polar yang sempurna: Arktik pada dasarnya adalah sebuah samudra air laut dalam yang tertutup lapisan tipis es laut terapung yang dikelilingi oleh daratan benua-benua (Amerika Utara, Eropa, Asia). Sebaliknya, Antarktika adalah sebuah benua daratan benua raksasa bergunung-gunung yang tertutup kubah es setebal hingga 4 kilometer dan dikelilingi oleh Samudra Selatan yang ganas tanpa penghuni asli manusia permanen.',
    sections: [
      {
        subtitle: '1. Matriks Komparasi Kutub: Arktik vs Antarktika',
        content: 'Perbandingan komprehensif antara kedua ujung kutub bumi:',
        table: {
          headers: ['Dimensi Karakteristik', 'Kawasan Arktik (Kutub Utara)', 'Kawasan Antarktika (Kutub Selatan)'],
          rows: [
            ['Hakikat Fisik Dasar', 'Samudra air laut beku (Samudra Arktik) yang dikelilingi oleh daratan benua', 'Benua daratan sejati (luas 14,2 juta km²) yang tertutup es dan dikelilingi lautan luas'],
            ['Suhu Udara Rata-Rata', 'Sangat dingin, namun teredam hangatnya samudra di bawahnya (rata-rata musim dingin -34°C)', 'Jauh lebih dingin ekstrem (tempat terdingin di bumi, rekor stasiun Vostok mencapai -89,2°C)'],
            ['Ketebalan Lapisan Es', 'Es laut terapung tipis (rata-rata tebal 1 hingga 3 meter, sangat dinamis mencair saat musim panas)', 'Kubah tudung es daratan raksasa (ketebalan es rata-rata 2.100 meter, menyimpan 70% air tawar bumi)'],
            ['Fauna Karakteristik', 'Beruang kutub (Polar Bear), rubah arktik, anjing laut, paus narwhal (TIDAK ADA penguin)', 'Penguin kaisar dan Adelie, anjing laut weddell, krill raksasa (TIDAK ADA beruang kutub)'],
            ['Penduduk Asli Manusia', 'Dihuni jutaan penduduk asli yang beradaptasi ribuan tahun (Suku Inuit, Yupik, Saami)', 'Tidak memiliki penduduk asli permanen; hanya dihuni ribuan ilmuwan di stasiun riset internasional'],
            ['Status Kedaulatan Hukum', 'Terbagi dalam klaim teritorial negara lingkar Arktik (Rusia, AS, Kanada, Norwegia, Denmark)', 'Netral tanpa klaim kedaulatan militer; dilindungi oleh Perjanjian Antarktika 1959 (khusus sains)']
          ]
        }
      },
      {
        subtitle: '2. Perjanjian Antarktika 1959 dan Ancaman Umpan Balik Positif Arktik',
        content: 'Dua dinamika tata kelola dan krisis lingkungan kutub:',
        keyPoints: [
          'Perjanjian Antarktika (Antarctic Treaty 1959): Traktat internasional yang menetapkan Benua Antarktika hanya boleh digunakan untuk tujuan damai dan riset ilmiah bebas, melarang segala bentuk aktivitas militer, uji coba senjata nuklir, pembuangan limbah radioaktif, serta membekukan seluruh klaim batas kepemilikan teritorial negara.',
          'Pencairan Permafrost dan Bom Waktu Metana: Di tundra Arktik Siberia dan Alaska, pemanasan global mencairkan tanah beku abadi (permafrost). Pencairan ini memicu dekomposisi materi organik purba yang melepaskan miliaran ton gas metana (CH4) dan CO2 ke atmosfer, mempercepat pemanasan global dalam siklus lingkaran setan (positive feedback loop).',
          'Perebutan Jalur Barat Laut (Northwest Passage): Mencairnya es laut Arktik membuka rute pelayaran laut baru yang memangkas jarak kapal antara Asia Timur dan Eropa hingga 40% dibandingkan melalui Terusan Suez, memicu perlombaan geopolitik klaim dasar laut kaya migas oleh Rusia dan negara-negara NATO.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Bentuk Lapisan Es Kutub',
        items: [
          { name: 'Es Laut Terapung (Sea Ice)', description: 'Air laut yang membeku di permukaan; pencairannya tidak menaikkan muka air laut global secara langsung (hukum Archimedes).' },
          { name: 'Tudung Es Daratan (Ice Sheet & Glaciers)', description: 'Endapan salju ribuan tahun yang memadat di atas daratan benua; pencairannya ke samudra langsung menaikkan tinggi muka air laut global.' }
        ]
      }
    ],
    processes: [
      { stage: 'Efek Albedo Es Berkurang', title: 'Pemanasan Laut Terbuka', description: 'Es putih pemantul panas mencair, air laut gelap menyerap 90% radiasi matahari dan memanaskan Arktik lebih cepat.' },
      { stage: 'Runtuhnya Lapisan Es Gletser', title: 'Calving Gunung Es Antarktika', description: 'Gletser Thwaites (Doomsday Glacier) meleleh dari bawah oleh arus laut hangat memicu runtuhnya dinding es.' },
      { stage: 'Aktivasi Pelayaran Arktik', title: 'Operasi Kapal Pemecah Es Komersial', description: 'Kapal tanker gas LNG melintasi Rute Laut Utara (Northern Sea Route) Siberia tanpa kawalan es tebal.' }
    ],
    caseStudies: [
      {
        title: 'Gletser Kiamat (Thwaites Glacier) di Antarktika Barat: Kunci Kenaikan Muka Air Laut Global',
        location: 'Lapisan Es Antarktika Barat (WAIS)',
        description: 'Gletser Thwaites di Antarktika Barat dijuluki para glasiolog sebagai "Doomsday Glacier" (Gletser Kiamat). Gletser seukuran pulau Britania Raya ini menahan seluruh kubah es Antarktika Barat agar tidak meluncur jatuh ke samudra. Arus laut dalam yang menghangat akibat perubahan iklim telah mengikis dasar gletser dari bawah. Jika gletser penahan ini runtuh total, limpasan esnya akan menaikkan tinggi muka air laut global setinggi 65 sentimeter, cukup untuk menenggelamkan kota-kota pesisir dunia.',
        takeaway: 'Kestabilan kubah es Antarktika adalah benteng terakhir keselamatan kota-kota pesisir peradaban manusia.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Komparasi Spasial Kutub: Samudra Arktik Dikelilingi Benua vs Benua Antarktika Dikelilingi Samudra',
        caption: 'Bagan lingkaran kutub: Peta Arktik (laut beku di tengah dikelilingi daratan) dan peta Antarktika (daratan beku di tengah dikelilingi samudra).',
        badge: 'Polar Opposites'
      }
    ],
    terminology: [
      { term: 'Permafrost', definition: 'Lapisan tanah, batuan, atau sedimen yang membeku pada suhu di bawah 0°C secara terus-menerus selama minimal dua tahun berturut-turut.', scientificTerm: 'Permafrost' },
      { term: 'Traktat Antarktika (1959)', definition: 'Perjanjian internasional yang menetapkan benua Antarktika sebagai cagar ilmiah yang didedikasikan semata-mata untuk perdamaian dan sains.', scientificTerm: 'The Antarctic Treaty System' },
      { term: 'Albedo', definition: 'Fraksi atau persentase radiasi sinar matahari yang dipantulkan kembali ke angkasa oleh suatu permukaan bumi (es memiliki albedo tinggi ~85%).', scientificTerm: 'Albedo Effect' }
    ],
    summary: [
      'Arktik adalah samudra laut beku dikelilingi benua; Antarktika adalah benua daratan beku dikelilingi samudra.',
      'Antarktika dilindungi Traktat 1959 sebagai zona bebas militer untuk riset perdamaian sains dunia.',
      'Mencairnya es kutub mengurangi efek albedo bumi, melepaskan gas metana permafrost, dan memicu perlombaan geopolitik rute Arktik.'
    ],
    quiz: [
      {
        id: 'q114-1',
        question: 'Perbedaan mendasar antara kondisi fisik Kutub Utara (Arktik) dan Kutub Selatan (Antarktika) dalam kajian geografi kebumian adalah...',
        options: [
          'Arktik adalah samudra laut beku yang dikelilingi daratan benua, sedangkan Antarktika adalah benua daratan sejati yang tertutup lapisan es tebal dan dikelilingi samudra',
          'Arktik memiliki suhu jauh lebih dingin daripada Antarktika',
          'Antarktika dihuni oleh jutaan penduduk asli suku bangsa purba, sedangkan Arktik tidak berpenghuni',
          'Beruang kutub hidup melimpah di Antarktika bersama kawanan penguin'
        ],
        correctAnswer: 0,
        explanation: 'Arktik adalah samudra air laut beku yang dikitari oleh benua-benua, sedangkan Antarktika adalah sebuah benua daratan luas yang dikelilingi samudra terbuka.'
      },
      {
        id: 'q114-2',
        question: 'Kawasan Benua Antarktika dilindungi dari eksploitasi militer, uji coba nuklir, dan pertambangan komersial melalui sebuah traktat hukum internasional bersejarah yang disahkan pada tahun 1959 yang dikenal sebagai...',
        options: ['Protokol Kyoto', 'Traktat Antarktika (The Antarctic Treaty)', 'Perjanjian Paris', 'Konvensi Jenewa'],
        correctAnswer: 1,
        explanation: 'The Antarctic Treaty (Perjanjian Antarktika 1959) menetapkan benua Antarktika secara permanen hanya untuk kegiatan ilmiah damai dan melarang aktivitas militer serta klaim batas wilayah.'
      }
    ],
    references: ['Berkman, P. A., et al. (2011). Science Diplomacy: Antarctica, Science, and the Governance of International Spaces. Smithsonian.', 'IPCC. (2019). Special Report on the Ocean and Cryosphere in a Changing Climate.'],
    relatedTopicIds: ['perubahan-iklim-dan-pemanasan-global', 'laut-dan-karakteristiknya', 'karakteristik-kawasan-regional-eropa', 'geopolitik-dan-geostrategi-global']
  },
  {
    id: 'globalisasi-dan-interdependensi-global',
    number: 115,
    title: 'Globalisasi dan Interdependensi Global',
    englishTitle: 'Globalization, Time-Space Compression, and Global Supply Chains',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah sains globalisasi keruangan: konsep Pemampatan Ruang-Waktu (Time-Space Compression karya David Harvey); jaringan rantai pasok global (Global Supply Chains & GVC); deindustrialisasi Barat vs manufaktur Asia; homogenisasi budaya vs glokalisasi; serta guncangan disrupsi logistik antardaerah.',
    keywords: ['globalisasi', 'time space compression david harvey', 'global supply chains rantai pasok', 'glokalisasi', 'interdependensi keruangan'],
    learningObjectives: [
      'Menjelaskan konsep Time-Space Compression (pemampatan ruang dan waktu) akibat revolusi transportasi dan telekomunikasi.',
      'Menganalisis anatomi Rantai Pasok Global (Global Value Chains) dalam produksi barang modern lintas benua.',
      'Membedakan fenomena homogenisasi budaya global dengan resistensi kultural lokal (Glokalisasi).'
    ],
    introduction: 'Globalisasi (Globalization) dalam perspektif geografi adalah proses intensifikasi relasi sosial dan ekonomi lintas batas teritorial di seluruh dunia yang menghubungkan lokasi-lokasi yang terpisah ribuan kilometer sedemikian rupa sehingga kejadian di satu tempat dipengaruhi oleh peristiwa yang terjadi di tempat lain yang sangat jauh (Anthony Giddens). Geografer Marxis David Harvey merumuskan bahwa esensi dari globalisasi modern adalah Pemampatan Ruang dan Waktu (Time-Space Compression), di mana teknologi internet dan jet supersonik meruntuhkan batasan jarak geografis.',
    sections: [
      {
        subtitle: '1. Konsep Pemampatan Ruang-Waktu (David Harvey, 1989)',
        content: 'Evolusi kecepatan transportasi manusia melenyapkan persepsi hambatan jarak:',
        table: {
          headers: ['Era Sejarah Transportasi', 'Kecepatan Rata-Rata Perjalanan', 'Waktu Mengelilingi Bumi', 'Persepsi Ukuran Dunia'],
          rows: [
            ['Era Kuda & Perahu Layar (1500–1840)', 'Rata-rata 15–25 km/jam', 'Berbulan-bulan hingga tahunan', 'Bumi terasa sangat luas, komunikasi antardua benua butuh waktu berminggu-minggu via surat pos kapal'],
            ['Era Kereta Api Uap & Kapal Baja (1850–1930)', 'Rata-rata 60–100 km/jam', 'Dapat ditempuh dalam hitungan hari/minggu', 'Dunia menyusut drastis; telegraf kabel bawah laut memungkinkan transmisi berita instan'],
            ['Era Pesawat Jet & Internet Optik (1960–Kini)', 'Pesawat jet 900 km/jam; sinyal internet 300.000 km/detik (kecepatan cahaya)', 'Pesawat keliling bumi 24 jam; data internet seketika dalam hitungan milidetik', 'Dunia menjadi "Desa Global" (Global Village); transaksi finansial triliunan dolar berpindah dalam detik']
          ]
        }
      },
      {
        subtitle: '2. Anatomi Rantai Nilai Global (Global Value Chain / GVC)',
        content: 'Produk teknologi modern tidak lagi dibuat oleh satu negara secara utuh:',
        keyPoints: [
          'Fragmentasi Produksi Spasial: Proses manufaktur dipecah menjadi puluhan tahap yang disebar ke berbagai negara berdasarkan keunggulan komparatif biaya (comparative advantage).',
          'Kasus Produksi Smartphone Modern: Desain perangkat lunak dan arsitektur chip dirancang di California (AS), chip memori diproduksi di Korea Selatan, lensa kamera dibuat di Jerman dan Jepang, casing logam diproduksi di Vietnam, dan perakitan akhir dilakukan di Tiongkok.',
          'Kerentanan Sistemik (Just-In-Time): Sistem efisiensi pergudangan tanpa stok (just-in-time) membuat rantai pasok global sangat rapuh terhadap disrupsi bencana alam, perang selat pelayaran, atau penutupan pelabuhan karantina pandemi.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Respons Kultural Terhadap Globalisasi',
        items: [
          { name: 'Homogenisasi Budaya (McDonaldisasi)', description: 'Penyeragaman gaya hidup konsumtif global: gerai makanan cepat saji, busana denim, dan musik pop Barat mendominasi seluruh kota dunia.' },
          { name: 'Glokalisasi (Glocalization)', description: 'Adaptasi produk global dengan cita rasa dan kearifan budaya lokal (contoh: menu burger rendang di Indonesia, nasi ayam di gerai waralaba global).' }
        ]
      }
    ],
    processes: [
      { stage: 'Penurunan Tarif Bea Cukai', title: 'Liberalisasi Perdagangan WTO', description: 'Kesepakatan tarif perdagangan bebas memangkas bea masuk kontainer barang impor.' },
      { stage: 'Relokasi Pabrik', title: 'Offshoring Industri ke Asia', description: 'Pabrik tekstil dan sepatu memindahkan fasilitas produksi dari Eropa barat ke Asia Tenggara untuk menekan upah buruh.' },
      { stage: 'Disrupsi Rantai Pasok', title: 'Bottleneck Pelayaran Selat', description: 'Kapal kontainer mogok di Terusan Suez memicu kelangkaan suku cadang mobil di pabrik Jerman.' }
    ],
    caseStudies: [
      {
        title: 'Insiden Terjepitnya Kapal Kontainer Ever Given di Terusan Suez: Bukti Nyata Kerapuhan Rantai Pasok Global',
        location: 'Terusan Suez, Mesir',
        description: 'Pada Maret 2021, kapal kargo raksasa Ever Given (panjang 400 meter) tersangkut miring dan menyumbat total Terusan Suez selama 6 hari. Karena terusan ini dilewati oleh 12% total perdagangan dunia, sumbatan ini menahan lebih dari 360 kapal kargo dan menghentikan arus logistik senilai $9,6 miliar per hari. Pabrik perakitan mobil di Eropa terpaksa menghentikan shift kerja karena kehabisan pasokan mikrochip yang tertahan di laut merah.',
        takeaway: 'Globalisasi menciptakan efisiensi raksasa namun melahirkan ketergantungan spasial yang sangat rentan kolaps.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Pemampatan Ruang-Waktu (Time-Space Compression) dan Jaringan Peta Rantai Nilai Global (GVC)',
        caption: 'Bagan dunia menyusut dari era kuda ke era serat optik serta alur produksi satu produk smartphone melintasi 5 benua.',
        badge: 'Time-Space Compression'
      }
    ],
    terminology: [
      { term: 'Time-Space Compression', definition: 'Fenomena di mana inovasi teknologi transportasi dan komunikasi mempercepat laju kehidupan dan memampatkan jarak spasial.', scientificTerm: 'Time-Space Compression' },
      { term: 'Global Value Chain (GVC)', definition: 'Rangkaian tahapan produksi barang yang tersebar di berbagai negara di dunia dari desain, bahan baku, manufaktur, hingga pemasaran.', scientificTerm: 'Global Value Chain' },
      { term: 'Glokalisasi', definition: 'Penyelarasan atau penyesuaian produk, layanan, atau gagasan global dengan karakteristik adat dan selera kebudayaan lokal.', scientificTerm: 'Glocalization' }
    ],
    summary: [
      'Globalisasi mempercepat interkonektivitas dunia melalui fenomena Time-Space Compression David Harvey.',
      'Produksi manufaktur modern diorganisasikan dalam Rantai Nilai Global (Global Value Chains) lintas benua.',
      'Globalisasi memicu dialektika antara penyeragaman budaya homogen dengan resistensi adaptif Glokalisasi lokal.'
    ],
    quiz: [
      {
        id: 'q115-1',
        question: 'Konsep geografi yang dirumuskan oleh David Harvey untuk menjelaskan bagaimana kemajuan revolusi teknologi transportasi cepat dan telekomunikasi digital seolah-olah "mengecilkan bumi" dan melenyapkan batasan jarak spasial dinamakan...',
        options: [
          'Time-Space Compression (Pemampatan Ruang-Waktu)',
          'Fisis Determinisme',
          'Polarisasi Backwash Effect',
          'Gentrifikasi spasial'
        ],
        correctAnswer: 0,
        explanation: 'Time-Space Compression adalah konsep yang dicetuskan David Harvey (1989) untuk menjelaskan pemampatan jarak dan percepatan waktu akibat kemajuan teknologi komunikasi dan transportasi.'
      },
      {
        id: 'q115-2',
        question: 'Sebuah perusahaan waralaba restoran cepat saji global asal Amerika Serikat yang membuka cabang di Indonesia kemudian menciptakan menu khusus Burger Rendang dan Nasi Ayam Sambal Matah merupakan contoh penerapan strategi budaya...',
        options: ['Westernisasi total', 'Glokalisasi (Glocalization)', 'Kolonialisme ekonomi', 'Slumisasi'],
        correctAnswer: 1,
        explanation: 'Glokalisasi adalah strategi adaptasi di mana produk atau merek global disesuaikan dengan selera, lidah, norma, dan karakteristik budaya lokal setempat.'
      }
    ],
    references: ['Harvey, D. (1989). The Condition of Postmodernity: An Enquiry into the Origins of Cultural Change. Blackwell.', 'Gereffi, G. (2018). Global Value Chains and Development: Redefining the Contours of 21st Century Capitalism. Cambridge University Press.'],
    relatedTopicIds: ['karakteristik-negara-maju-dan-berkembang', 'geografi-transportasi-dan-perdagangan', 'kerja-sama-internasional-dan-organisasi-global', 'disparitas-dan-ketimpangan-global']
  },
  {
    id: 'kerja-sama-internasional-dan-organisasi-global',
    number: 116,
    title: 'Kerja Sama Internasional dan Organisasi Global',
    englishTitle: 'International Cooperation, Geopolitical Blocs, and Multilateral Treaties',
    categoryId: 'regional-dunia',
    difficulty: 'Intermediate',
    description: 'Menelaah arsitektur kerja sama antarwilayah dunia: bentuk kerja sama bilateral, regional, dan multilateral; organisasi kawasan (ASEAN, Uni Eropa, NAFTA/USMCA, APEC, African Union); blok ekonomi baru (BRICS+); serta pakta lingkungan dan keamanan global (PBB, Paris Agreement, WTO, WHO).',
    keywords: ['kerja sama internasional', 'asean meea', 'brics blok ekonomi', 'organisasi multilateral pbb', 'perjanjian paris iklim', 'blok regional'],
    learningObjectives: [
      'Mengklasifikasikan bentuk-bentuk kerja sama internasional berdasarkan jumlah negara peserta dan letak geografisnya.',
      'Menganalisis peran strategis ASEAN dan pilar Komunitas Ekonomi ASEAN (MEA) bagi perekonomian Indonesia.',
      'Mengevaluasi dinamika pergeseran kekuatan multipolar global dengan ekspansi blok ekonomi baru BRICS+.'
    ],
    introduction: 'Dalam era interdependensi global, tidak ada satu negara pun yang dapat menyelesaikan krisis geopolitik, perubahan iklim, wabah penyakit, dan perdagangan seorang diri. Kerja Sama Internasional (International Cooperation) adalah instrumen spasial dan diplomatik di mana negara-negara berdaulat mengikatkan diri dalam pakta perjanjian bilateral, regional, maupun multilateral. Melalui pembentukan organisasi antarbangsa, dunia berusaha memelihara perdamaian, menciptakan pasar bersama yang efisien, dan mengatasi krisis ekologis bumi secara terkoordinasi.',
    sections: [
      {
        subtitle: '1. Tipologi Kerja Sama Internasional Berdasarkan Cakupan Geografis',
        content: 'Berdasarkan jumlah dan kedekatan lokasi anggota, kerja sama dibedakan menjadi:',
        table: {
          headers: ['Bentuk Kerja Sama', 'Definisi & Cakupan Wilayah', 'Contoh Nyata Perjanjian / Organisasi'],
          rows: [
            ['1. Kerja Sama Bilateral', 'Kerja sama yang dijalin antara dua negara berdaulat secara langsung untuk kepentingan timbal balik', 'Perjanjian Ekstradisi Indonesia-Singapura, Kerja Sama Investasi RI-Jepang (IJEPA)'],
            ['2. Kerja Sama Regional', 'Kerja sama antarbeberapa negara yang berada dalam satu kawasan geografis yang sama', 'ASEAN (Asia Tenggara), Uni Eropa (Eropa), USMCA (Amerika Utara), Uni Afrika (Afrika)'],
            ['3. Kerja Sama Sub-Regional', 'Kerja sama perbatasan sempit antarwilayah berdekatan dari negara berbeda', 'Segitiga Pertumbuhan SIJORI (Singapura-Johor-Riau), IMT-GT (Indonesia-Malaysia-Thailand Growth Triangle)'],
            ['4. Kerja Sama Multilateral', 'Kerja sama komprehensif yang melibatkan banyak negara dari berbagai kawasan benua di seluruh penjuru bumi', 'Perserikatan Bangsa-Bangsa (PBB), World Trade Organization (WTO), WHO, UNESCO, IMF']
          ]
        }
      },
      {
        subtitle: '2. Blok Regional Penting dan Kebangkitan BRICS+',
        content: 'Konstelasi kekuatan geoekonomi dunia digerakkan oleh blok-blok strategis:',
        keyPoints: [
          'ASEAN (Association of Southeast Asian Nations): Didirikan 1967 di Bangkok oleh 5 negara perintis (termasuk Indonesia). Mengembangkan Masyarakat Ekonomi ASEAN (MEA) yang membebaskan arus barang, jasa, investasi, dan tenaga kerja terampil di Asia Tenggara.',
          'APEC (Asia-Pacific Economic Cooperation): Forum kerja sama ekonomi 21 negara lingkar Samudra Pasifik (mencakup AS, Tiongkok, Jepang, Australia, Indonesia) yang menyumbang lebih dari 60% PDB dunia.',
          'Kebangkitan Blok BRICS+ (Multipolaritas): Aliansi ekonomi negara-negara kekuatan selatan (Brasil, Rusia, India, Tiongkok, Afrika Selatan, kini diperluas mencakup Mesir, Ethiopia, Iran, UEA) yang bertujuan mengurangi dominasi hegemoni dolar AS (dedolarisasi) dan mempromosikan tatanan dunia multipolar yang lebih adil bagi negara berkembang.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Pilar Utama Komunitas ASEAN (ASEAN Community)',
        items: [
          { name: 'Pilar Politik-Keamanan (APSC)', description: 'Menjaga kawasan Asia Tenggara bebas senjata nuklir, damai, dan mengedepankan hukum laut UNCLOS di Laut Cina Selatan.' },
          { name: 'Pilar Ekonomi (AEC / MEA)', description: 'Menciptakan pasar tunggal dan basis produksi kompetitif yang terintegrasi penuh ke ekonomi global.' },
          { name: 'Pilar Sosial-Budaya (ASCC)', description: 'Meningkatkan perlindungan tenaga kerja migran, penanggulangan kabut asap lintas batas, dan pelestarian cagar budaya.' }
        ]
      }
    ],
    processes: [
      { stage: 'Negosiasi Diplomatik', title: 'Perundingan Konsensus Traktat', description: 'Para diplomat merumuskan klausul perjanjian perdagangan bebas (FTA) bebas tarif impor.' },
      { stage: 'Ratifikasi Parlemen', title: 'Pengesahan Menjadi Undang-Undang', description: 'Dewan Perwakilan Rakyat mengesahkan traktat internasional menjadi hukum nasional yang mengikat.' },
      { stage: 'Operasionalisasi Bersama', title: 'Harmonisasi Tarif dan Standar', description: 'Pelabuhan dan pos perbatasan menerapkan prosedur satu pintu otomatis (ASEAN Single Window).' }
    ],
    caseStudies: [
      {
        title: 'Perjanjian Iklim Paris 2015 (The Paris Agreement): Pakta Multilateral Penyelamatan Bumi',
        location: 'Konferensi Perubahan Iklim PBB (COP21), Paris, Prancis',
        description: 'Perjanjian Paris 2015 adalah tonggak sejarah kerja sama multilateral paling monumental abad ke-21. Sebanyak 196 negara anggota menyepakati komitmen hukum bersama yang mengikat untuk menahan laju kenaikan suhu rata-rata global jauh di bawah 2°C (dan mengupayakan ambang 1,5°C) di atas tingkat pra-industri. Setiap negara wajib menyusun dan melaporkan Dokumen Target Penurunan Emisi Nasional (Nationally Determined Contributions / NDC) yang dievaluasi berkala.',
        takeaway: 'Tantangan eksistensial global hanya dapat diatasi jika seluruh bangsa bersatu menundukkan ego kedaulatan sempit.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Arsitektur Kerja Sama Internasional: Dari Bilateral, Regional (ASEAN, Uni Eropa) Menuju Multilateral (PBB, BRICS+)',
        caption: 'Bagan struktur payung kerja sama: Tingkat Bilateral (2 negara) → Regional (blok kawasan) → Multilateral (PBB & pakta global).',
        badge: 'Multilateral Architecture'
      }
    ],
    terminology: [
      { term: 'Masyarakat Ekonomi ASEAN (MEA)', definition: 'Integrasi kawasan ekonomi di Asia Tenggara yang memfasilitasi kebebasan arus barang, jasa, investasi, dan tenaga kerja profesional.', scientificTerm: 'ASEAN Economic Community (AEC)' },
      { term: 'BRICS+', definition: 'Blok koalisi kekuatan ekonomi berkembang terkemuka yang mempromosikan kerja sama perdagangan antarnegara Selatan dan tatanan global multipolar.', scientificTerm: 'BRICS Alliance' },
      { term: 'Perjanjian Multilateral', definition: 'Perjanjian internasional yang disepakati dan ditandatangani oleh tiga negara atau lebih yang tunduk pada aturan hukum internasional.', scientificTerm: 'Multilateral Treaty' }
    ],
    summary: [
      'Kerja sama internasional terbagi atas bentuk bilateral (2 negara), regional (satu kawasan seperti ASEAN), dan multilateral (dunia seperti PBB).',
      'ASEAN beroperasi berlandaskan tiga pilar: Politik-Keamanan, Ekonomi (MEA), dan Sosial-Budaya.',
      'Ekspansi aliansi BRICS+ menandai transisi menuju tatanan geopolitik global yang bersifat multipolar.'
    ],
    quiz: [
      {
        id: 'q116-1',
        question: 'Bentuk kerja sama ekonomi yang dijalin antara Indonesia, Malaysia, dan Thailand dalam lingkup kawasan perbatasan yang berdekatan guna memacu pertumbuhan industri dan pariwisata segitiga dikenal sebagai...',
        options: [
          'Kerja sama global multilateral',
          'Kerja sama sub-regional (IMT-GT)',
          'Kerja sama bilateral tertutup',
          'Aliansi pertahanan militer NATO'
        ],
        correctAnswer: 1,
        explanation: 'IMT-GT (Indonesia-Malaysia-Thailand Growth Triangle) adalah bentuk kerja sama sub-regional yang berfokus pada integrasi wilayah perbatasan sempit antar-tiga negara tetangga.'
      },
      {
        id: 'q116-2',
        question: 'Kesepakatan hukum internasional multilateral yang ditandatangani oleh hampir seluruh negara di dunia pada Konferensi COP21 tahun 2015 untuk menahan kenaikan suhu rata-rata permukaan bumi di bawah 1,5–2 derajat Celsius dinamakan...',
        options: ['Protokol Madrid', 'Perjanjian Paris (The Paris Agreement)', 'Deklarasi Bangkok', 'Perjanjian Linggajati'],
        correctAnswer: 1,
        explanation: 'The Paris Agreement (Perjanjian Paris 2015) adalah pakta iklim multilateral paling penting di bawah naungan PBB untuk memitigasi emisi gas rumah kaca global.'
      }
    ],
    references: ['United Nations. (2015). The Paris Agreement. UNFCCC.', 'ASEAN Secretariat. (2020). ASEAN Economic Community Blueprint 2025.'],
    relatedTopicIds: ['karakteristik-negara-maju-dan-berkembang', 'globalisasi-dan-interdependensi-global', 'disparitas-dan-ketimpangan-global', 'geopolitik-dan-geostrategi-global']
  },

  // ==========================================
  // CATEGORY P: Geografi Ekonomi dan Politik (117-122)
  // ==========================================
  {
    id: 'ruang-lingkup-geografi-ekonomi',
    number: 117,
    title: 'Ruang Lingkup Geografi Ekonomi',
    englishTitle: 'Economic Geography: Foundations, Spatial Systems, and Industrial Clusters',
    categoryId: 'ekonomi-politik',
    difficulty: 'Intermediate',
    description: 'Menelaah sains geografi ekonomi: ruang lingkup studi (produksi, distribusi, dan konsumsi spasial); klasifikasi sektor perekonomian (primer, sekunder, tersier, kuaterner, dan kuiner); konsep Aglomerasi Ekonomi; eksternalitas spasial; serta klaster industri modern (Industrial Clusters Michael Porter).',
    keywords: ['geografi ekonomi', 'sektor primer sekunder tersier', 'aglomerasi ekonomi', 'klaster industri michael porter', 'eksternalitas spasial'],
    learningObjectives: [
      'Menjelaskan definisi dan ruang lingkup geografi ekonomi dalam mengkaji variasi spasial aktivitas ekonomi manusia.',
      'Membedakan 5 tingkatan sektor ekonomi dari sektor primer ekstraktif hingga sektor kuiner pembuat keputusan.',
      'Menganalisis keuntungan aglomerasi spasial (ekonomi lokalisasi dan urbanisasi) dan pembentukan klaster industri.'
    ],
    introduction: 'Geografi Ekonomi (Economic Geography) adalah cabang geografi manusia yang mengkaji variasi keruangan tentang bagaimana manusia mencari nafkah, mengorganisasikan aktivitas produksi, mendistribusikan barang dan jasa, serta mengonsumsi sumber daya di berbagai belahan bumi. Pertanyaan mendasar geografi ekonomi bukan sekadar "apa yang diproduksi?", melainkan "di mana aktivitas itu berlokasi, mengapa berada di sana, dan apa konsekuensi keruangannya bagi kesejahteraan wilayah sekitarnya?"',
    sections: [
      {
        subtitle: '1. Lima Tingkatan Klasifikasi Sektor Ekonomi',
        content: 'Aktivitas ekonomi manusia berevolusi ke dalam lima tingkatan sektor:',
        table: {
          headers: ['Sektor Ekonomi', 'Nama Sektor', 'Hakikat Aktivitas Spasial', 'Contoh Nyata Lapangan Kerja'],
          rows: [
            ['Tingkat 1', 'Sektor Primer (Ekstraktif)', 'Aktivitas yang mengambil atau mengekstraksi bahan mentah secara langsung dari biosfer dan litosfer', 'Petani padi sawah, nelayan tangkap laut, penambang batu bara, pemanen getah karet perkebunan'],
            ['Tingkat 2', 'Sektor Sekunder (Manufaktur)', 'Aktivitas yang mengolah bahan mentah primer menjadi barang setengah jadi atau barang jadi siap pakai', 'Buruh pabrik perakitan mobil, pekerja pabrik tekstil, industri penyulingan petrokimia, konstruksi gedung'],
            ['Tingkat 3', 'Sektor Tersier (Jasa Pelayanan)', 'Aktivitas penyediaan layanan jasa komersial, perdagangan, dan pemindahan orang serta barang', 'Sopir truk logistik, dokter rumah sakit, guru sekolah dasar, kasir perbankan, pemandu wisata'],
            ['Tingkat 4', 'Sektor Kuaterner (Informasi & Riset)', 'Aktivitas berbasis manipulasi informasi, analisis big data, rekayasa perangkat lunak, dan penelitian sains', 'Pengembang software AI, analis data satelit GIS, ilmuwan peneliti vaksin bioteknologi, arsitek sistem cloud'],
            ['Tingkat 5', 'Sektor Kuiner (Pengambilan Keputusan)', 'Aktivitas tingkat tertinggi yang melibatkan perumusan kebijakan strategis, kepemimpinan publik, dan hukum peradilan', 'Presiden dan menteri kabinet, dewan direksi korporasi multinasional, hakim agung, rektor universitas']
          ]
        }
      },
      {
        subtitle: '2. Aglomerasi Ekonomi dan Teori Klaster Michael Porter',
        content: 'Mengapa perusahaan-perusahaan sejenis cenderung berkumpul di satu lokasi yang sama?',
        keyPoints: [
          'Penghematan Aglomerasi (Agglomeration Economies): Efisiensi penghematan biaya produksi yang dinikmati perusahaan karena berlokasi saling berdekatan dalam satu kawasan industri.',
          'Ekonomi Lokalisasi (Localization Economies): Keuntungan berkumpulnya perusahaan dalam satu industri yang sama (contoh: puluhan pabrik sepatu dan kulit berkumpul di Cibaduyut Bandung sehingga mempermudah pasokan sol sepatu, lem perekat, dan tenaga kerja penjahit terampil).',
          'Klaster Industri (Michael Porter): Konsentrasi geografis dari perusahaan-perusahaan yang saling terhubung, pemasok terspesialisasi, penyedia jasa, dan institusi riset terkait yang bersaing sekaligus berkolaborasi memicu inovasi tinggi (contoh: Silicon Valley di California untuk industri teknologi perangkat lunak).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Sisi Mata Uang Aglomerasi',
        items: [
          { name: 'Keuntungan Aglomerasi', description: 'Kolam tenaga kerja terampil melimpah, biaya logistik antarpemasok murah, transfer pengetahuan dan teknologi instan.' },
          { name: 'Kerugian Deglomerasi (Diseconomies)', description: 'Harga sewa tanah melonjak mahal, kemacetan lalu lintas kronis, upah buruh naik, polusi limbah padat dan cair pekat.' }
        ]
      }
    ],
    processes: [
      { stage: 'Konsentrasi Spasial', title: 'Pembentukan Sentra Industri Awal', description: 'Beberapa bengkel pengrajin logam mendirikan usaha di koridor jalan strategis.' },
      { stage: 'Spesialisasi Rantai Pasok', title: 'Kedatangan Pemasok Komponen', description: 'Pabrik baut, cat, dan pelapisan krom mendirikan gudang di dekat perajin utama.' },
      { stage: 'Klaster Inovasi Kompetitif', title: 'Kolaborasi Lembaga Vokasi', description: 'Politeknik lokal membuka jurusan khusus pengelasan dan permesinan untuk memasok tenaga terampil ke klaster.' }
    ],
    caseStudies: [
      {
        title: 'Klaster Industri Kerajinan Kulit Cibaduyut: Warisan Aglomerasi Spasial Lokal',
        location: 'Kecamatan Bojongloa Kidul, Kota Bandung, Jawa Barat, Indonesia',
        description: 'Kawasan Cibaduyut di selatan Kota Bandung adalah contoh klasik klaster industri ekonomi lokalisasi di Indonesia. Sejak era 1920-an, kawasan ini memusatkan ratusan unit usaha kecil dan menengah pembuatan sepatu kulit asli buatan tangan. Berkumpulnya pengrajin di sepanjang koridor satu jalan raya menarik pedagang bahan baku kulit garut, toko sol karet, hingga butik etalase sepatu, menjadikannya destinasi wisata belanja legendaris bertaraf nasional.',
        takeaway: 'Aglomerasi industri lokal menciptakan identitas tempat (sense of place) dan daya saing ekonomi kolektif.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Lima Sektor Geografi Ekonomi dan Dinamika Aglomerasi Klaster Industri Michael Porter',
        caption: 'Bagan piramida 5 sektor (Primer hingga Kuiner) dan interkoneksi klaster Porter: Perusahaan, Pemasok, Riset, Infrastruktur.',
        badge: 'Economic Geography'
      }
    ],
    terminology: [
      { term: 'Aglomerasi Ekonomi', definition: 'Pemusatan spasial aktivitas ekonomi dan industri di kawasan tertentu yang melahirkan penghematan biaya produksi bersama.', scientificTerm: 'Agglomeration Economies' },
      { term: 'Klaster Industri (Industrial Cluster)', definition: 'Konsentrasi geografis perusahaan-perusahaan yang saling terhubung dan lembaga pendukung dalam bidang tertentu yang bersinergi.', scientificTerm: 'Industrial Cluster (Michael Porter)' },
      { term: 'Sektor Kuaterner', definition: 'Sektor ekonomi berbasis pengetahuan, sains, riset teknologi informasi, dan rekayasa data.', scientificTerm: 'Quaternary Economic Sector' }
    ],
    summary: [
      'Geografi ekonomi mempelajari produksi, distribusi, dan konsumsi spasial di muka bumi.',
      'Aktivitas ekonomi terbagi dalam 5 sektor: Primer (alam), Sekunder (pabrik), Tersier (jasa), Kuaterner (riset IT), dan Kuiner (kebijakan tertinggi).',
      'Aglomerasi industri menciptakan keuntungan eksternalitas bersama melalui pembentukan klaster spesialisasi.'
    ],
    quiz: [
      {
        id: 'q117-1',
        question: 'Aktivitas pekerjaan seorang peneliti sains bioteknologi yang sedang merekayasa genetika bibit padi tahan kekeringan serta analis data geospasial satelit diklasifikasikan ke dalam sektor ekonomi...',
        options: ['Sektor Primer', 'Sektor Sekunder', 'Sektor Kuaterner (Pengetahuan & Riset)', 'Sektor Tradisional'],
        correctAnswer: 2,
        explanation: 'Sektor kuaterner adalah sektor ekonomi berbasis pengetahuan, analisis informasi, riset sains, dan rekayasa teknologi tinggi.'
      },
      {
        id: 'q117-2',
        question: 'Penghematan biaya produksi yang diperoleh suatu perusahaan manufaktur karena berlokasi di kawasan industri yang sama dengan ratusan pabrik lain sehingga dapat berbagi jaringan listrik, pengolahan limbah bersama, dan akses jalan tol dinamakan keuntungan...',
        options: ['Aglomerasi ekonomi (Agglomeration economies)', 'Disparitas spasial', 'Degradasi industri', 'Suburbanisasi'],
        correctAnswer: 0,
        explanation: 'Aglomerasi ekonomi adalah penghematan biaya produksi dan efisiensi eksternal yang dinikmati perusahaan akibat pemusatan spasial bersama di satu lokasi.'
      }
    ],
    references: ['Porter, M. E. (1998). Clusters and the New Economics of Competition. Harvard Business Review.', 'Clark, G. L., et al. (2018). The New Oxford Handbook of Economic Geography. Oxford University Press.'],
    relatedTopicIds: ['teori-lokasi-industri-alfred-weber', 'teori-lokasi-pertanian-von-thunen', 'geografi-transportasi-dan-perdagangan', 'pusat-pertumbuhan-growth-pole']
  },
  {
    id: 'teori-lokasi-industri-alfred-weber',
    number: 118,
    title: 'Teori Lokasi Industri Alfred Weber',
    englishTitle: 'Alfred Weber Least Cost Theory: Locational Triangle and Material Index',
    categoryId: 'ekonomi-politik',
    difficulty: 'Advanced',
    description: 'Menguasai Teori Lokasi Industri Biaya Minimum (Least Cost Theory) karya ekonom Jerman Alfred Weber (1909): Segitiga Lokasi (Locational Triangle), Indeks Material (Material Index / MI), klasifikasi bahan baku Ubiquitous vs Lokalisasi, Gross vs Pure Materials, serta pengaruh biaya tenaga kerja dan gaya aglomerasi terhadap pergeseran lokasi pabrik (Isodapane).',
    keywords: ['teori lokasi alfred weber', 'least cost theory biaya minimum', 'segitiga lokasi locational triangle', 'indeks material mi', 'isodapane', 'weight losing vs gaining'],
    learningObjectives: [
      'Menjelaskan asumsi dasar Teori Biaya Minimum (Least Cost Theory) Alfred Weber.',
      'Menghitung Indeks Material (Material Index = Berat Bahan Baku / Berat Produk Jadi) dan menentukan orientasi lokasi pabrik.',
      'Menganalisis konsep garis Isodapane dan pergeseran titik lokasi akibat biaya tenaga kerja murah atau aglomerasi.'
    ],
    introduction: 'Pada tahun 1909, ekonom Jerman Alfred Weber menerbitkan karya klasik "Über den Standort der Industrien" (Theory of the Location of Industries). Weber berusaha memecahkan dilema mendasar bagi pemilik pabrik: "Di manakah lokasi paling optimal untuk mendirikan pabrik industri agar biaya transportasi total (biaya mengangkut bahan mentah dari tambang ditambah biaya mengangkut barang jadi ke pasar) bernilai paling minimum?" Model matematis ini melahirkan konsep Segitiga Lokasi dan Indeks Material yang menjadi landasan tata ruang kawasan industri di seluruh dunia.',
    sections: [
      {
        subtitle: '1. Indeks Material (Material Index / MI) dan Orientasi Lokasi Pabrik',
        content: 'Weber merumuskan Indeks Material untuk memprediksi ke mana pabrik harus mendekat:',
        keyPoints: [
          'Rumus Indeks Material: MI = Berat Total Bahan Baku / Berat Total Produk Akhir Jadi',
          'Industri Berorientasi Bahan Baku (Raw Material Oriented / Weight-Losing): Jika nilai MI > 1, artinya bahan baku mengalami penyusutan bobot besar selama proses pabrikasi (contoh: pabrik semen batu kapur, pabrik peleburan timah). Lokasi pabrik HARUS didirikan di dekat sumber bahan mentah untuk menghemat biaya angkut bahan mentah berat yang menyusut terbuang.',
          'Industri Berorientasi Pasar (Market Oriented / Weight-Gaining): Jika nilai MI < 1, artinya produk akhir jadi justru lebih berat atau lebih bervolume daripada bahan bakunya (contoh: pabrik minuman botol bersoda yang mencampur sirup kering dengan air lokal, pabrik perakitan roti). Lokasi pabrik HARUS didirikan mendekat ke pasar konsumen.',
          'Industri Netral / Bebas (Footloose Industry): Jika nilai MI = 1 (Pure Material), artinya bahan baku tidak susut (contoh: benang menjadi kain katun). Pabrik bebas didirikan di mana saja di antara bahan baku dan pasar.'
        ],
        formula: {
          expression: 'MI = \\frac{\\text{Berat Bahan Baku (kg)}}{\\text{Berat Produk Jadi (kg)}}',
          explanation: 'Jika MI > 1 pabrik mendekati bahan baku; jika MI < 1 pabrik mendekati pasar; jika MI = 1 pabrik bebas berlokasi.',
          exampleCalculation: 'Sebuah pabrik gula membutuhkan 1.000 ton batang tebu untuk menghasilkan 100 ton gula kristal putih bersih. Nilai MI = 1.000 / 100 = 10 (MI > 1). Maka pabrik gula tersebut mutlak harus didirikan di tengah kebun tebu, bukan di pasar kota.'
        }
      },
      {
        subtitle: '2. Segitiga Lokasi Weber dan Konsep Isodapane',
        content: 'Dalam lanskap di mana terdapat dua sumber bahan mentah (M1 dan M2) dan satu titik pasar (C):',
        table: {
          headers: ['Konsep Geometris Weber', 'Definisi & Karakteristik Spasial', 'Pengaruh Terhadap Lokasi Pabrik'],
          rows: [
            ['Segitiga Lokasi (Locational Triangle)', 'Bentuk segitiga imajiner yang titik-titik sudutnya dibentuk oleh Lokasi Bahan Baku 1 (M1), Bahan Baku 2 (M2), dan Titik Pasar Konsumen (C)', 'Titik pabrik optimal (P) terletak di dalam segitiga pada titik keseimbangan gaya tarik vektor bobot terendah'],
            ['Isotim (Isotim Lines)', 'Garis imajiner yang menghubungkan titik-titik yang memiliki kesamaan biaya transportasi untuk satu jenis barang tertentu', 'Membentuk lingkaran-lingkaran konsentris di sekitar sumber bahan baku atau pasar'],
            ['Isodapane (Isodapane Lines)', 'Garis imajiner yang menghubungkan titik-titik dengan total biaya transportasi gabungan yang sama', 'Garis Critical Isodapane menentukan apakah pabrik layak digeser ke kota lain demi mendapatkan upah buruh murah']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Tipe Bahan Baku Menurut Weber',
        items: [
          { name: 'Ubiquitous Materials (Bahan Baku Di Mana Saja)', description: 'Bahan baku yang tersedia melimpah di semua tempat di permukaan bumi (contoh: air, udara, sinar matahari, pasir bangunan biasa).' },
          { name: 'Localized Materials (Bahan Baku Terlokalisasi)', description: 'Bahan baku yang hanya dijumpai di deposit titik-titik geografis tertentu (contoh: bijih besi, tembaga, bauksit, minyak bumi).' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Bobot Bahan', title: 'Perhitungan Nilai Indeks Material', description: 'Menghitung rasio penyusutan bahan baku input terhadap berat barang output jadi.' },
      { stage: 'Plotting Segitiga Lokasi', title: 'Penentuan Titik Biaya Transport Terendah', description: 'Menemukan titik P dengan biaya transportasi ton-kilometer terendah.' },
      { stage: 'Analisis Isodapane Tenaga Kerja', title: 'Pengecekan Biaya Upah Buruh', description: 'Jika selisih penghematan upah buruh di luar titik P lebih besar dari kenaikan ongkos angkut pada Critical Isodapane, lokasi pabrik digeser.' }
    ],
    caseStudies: [
      {
        title: 'Lokasi Pabrik Semen Gresik di Tuban: Penerapan Nyata Prinsip Weight-Losing Material',
        location: 'Kabupaten Tuban, Jawa Timur, Indonesia',
        description: 'PT Semen Indonesia mendirikan kompleks pabrik semen raksasa di Tuban, Jawa Timur, persis menempel pada formasi perbukitan batu kapur karst dan lempung. Pembuatan satu ton semen membutuhkan sekitar 1,5 ton batu kapur dan tanah liat yang mengalami penyusutan bobot besar akibat pembakaran klinker di tungku putar (rotary kiln) yang melepaskan CO2. Dengan nilai MI > 1, keputusan mendirikan pabrik di lokasi tambang kapur (bukan di kota konsumen Surabaya) memangkas biaya transportasi triliunan rupiah per tahun.',
        takeaway: 'Industri yang mengalami penyusutan bobot tinggi (weight-losing) mutlak berorientasi pada lokasi bahan baku.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Segitiga Lokasi Alfred Weber (Locational Triangle) dan Garis Kontur Biaya Total Isodapane',
        caption: 'Bagan segitiga M1, M2, Pasar C dengan titik biaya minimum P di tengah dan kontur cincin Isodapane di sekitarnya.',
        badge: 'Weberian Location Model'
      }
    ],
    terminology: [
      { term: 'Least Cost Theory', definition: 'Teori lokasi industri karya Alfred Weber yang menyatakan bahwa lokasi pabrik industri dipilih pada titik yang meminimalkan total biaya transportasi dan tenaga kerja.', scientificTerm: 'Least Cost Theory' },
      { term: 'Indeks Material (Material Index)', definition: 'Angka perbandingan antara berat bahan mentah yang digunakan dengan berat produk jadi yang dihasilkan.', scientificTerm: 'Material Index' },
      { term: 'Isodapane', definition: 'Garis di atas peta yang menghubungkan titik-titik yang memiliki jumlah total biaya transportasi gabungan yang sama.', scientificTerm: 'Isodapane' }
    ],
    summary: [
      'Alfred Weber merumuskan lokasi pabrik optimal pada titik total biaya transportasi minimum.',
      'Jika Indeks Material MI > 1 (weight-losing), pabrik mendekati bahan baku; jika MI < 1 (weight-gaining), pabrik mendekati pasar.',
      'Biaya upah buruh murah atau aglomerasi dapat menggeser lokasi pabrik jika penghematannya melampaui garis Critical Isodapane.'
    ],
    quiz: [
      {
        id: 'q118-1',
        question: 'Sebuah pabrik peleburan bijih tembaga membutuhkan 500 ton batuan bijih mentah untuk menghasilkan hanya 5 ton pelat tembaga murni batangan. Berdasarkan Teori Lokasi Industri Alfred Weber, di manakah lokasi paling ideal untuk mendirikan pabrik tersebut?',
        options: [
          'Di pelabuhan kota tujuan ekspor',
          'Mendekat ke pusat permukiman pasar konsumen di kota besar',
          'Di dekat lokasi tambang bahan baku tembaga (Raw Material Oriented)',
          'Di sembarang tempat karena bahan tembaga bersifat netral'
        ],
        correctAnswer: 2,
        explanation: 'Nilai MI = 500 ton / 5 ton = 100 (MI > 1). Industri ini mengalami penyusutan bobot masif (weight-losing), sehingga pabrik harus didirikan di dekat lokasi tambang bahan baku guna meminimalkan biaya angkut ampas batuan.'
      },
      {
        id: 'q118-2',
        question: 'Dalam model segitiga lokasi Alfred Weber, garis khayal di atas peta yang menghubungkan titik-titik yang memiliki total biaya transportasi gabungan yang sama persis dinamakan garis...',
        options: ['Isotim', 'Isodapane', 'Isobar', 'Isoseista'],
        correctAnswer: 1,
        explanation: 'Isodapane adalah garis imajiner yang menghubungkan titik-titik dengan kesamaan total biaya transportasi gabungan (bahan baku plus produk jadi).'
      }
    ],
    references: ['Weber, A. (1929). Theory of the Location of Industries. University of Chicago Press.', 'Dicken, P., & Lloyd, P. E. (1990). Location in Space: Theoretical Perspectives in Economic Geography. Harper & Row.'],
    relatedTopicIds: ['teori-lokasi-pertanian-von-thunen', 'ruang-lingkup-geografi-ekonomi', 'geografi-transportasi-dan-perdagangan', 'pusat-pertumbuhan-growth-pole']
  },
  {
    id: 'teori-lokasi-pertanian-von-thunen',
    number: 119,
    title: 'Teori Lokasi Pertanian Johann Heinrich von Thünen',
    englishTitle: 'Von Thünen Isolated State Model: Agricultural Rings and Economic Rent',
    categoryId: 'ekonomi-politik',
    difficulty: 'Advanced',
    description: 'Menelaah Teori Lokasi Penggunaan Lahan Pertanian (Isolated State / Der isolirte Staat 1826) karya Johann Heinrich von Thünen: asumsi Negara Terisolasi, konsep Sewa Lokasi Ekonomi (Economic / Locational Rent R = Y(p - c) - YFm), 6 cincin konsentris komoditas pertanian, modifikasi sungai navigasi, serta relevansi zonasi agrikultur modern.',
    keywords: ['teori von thunen', 'negara terisolasi isolated state', 'sewa ekonomi locational rent', 'cincin konsentris pertanian', 'daya tahan komoditas pembusukan'],
    learningObjectives: [
      'Menjelaskan asumsi dasar model Negara Terisolasi (The Isolated State) Von Thünen.',
      'Menghitung Sewa Lokasi (Locational Rent) menggunakan rumus matematis R = Y(p - c) - Y·F·m.',
      'Menganalisis alasan terbentuknya 6 cincin konsentris pertanian dari pusat kota: susu/sayur mudah busuk, kayu bakar berat, gandum, hingga peternakan ekstensif terluar.'
    ],
    introduction: 'Pada tahun 1826, seorang tuan tanah dan ekonom agraris Jerman, Johann Heinrich von Thünen, mempublikasikan karya seminal "Der isolirte Staat in Beziehung auf Landwirthschaft und Nationalökonomie" (The Isolated State). Von Thünen adalah orang pertama dalam sejarah ilmu pengetahuan yang mengembangkan analisis lokasi spasial matematis. Ia menjelaskan bagaimana mekanisme sewa lahan ekonomi dan biaya transportasi menentukan zonasi melingkar jenis tanaman pertanian dan peternakan di sekeliling sebuah kota pasar tunggal.',
    sections: [
      {
        subtitle: '1. Rumus Sewa Lokasi Ekonomi Von Thünen',
        content: 'Kemampuan petani menyewa lahan ditentukan oleh formula Sewa Lokasi (Economic Rent):',
        keyPoints: [
          'Rumus Sewa Lokasi: R = Y ( p - c ) - Y × F × m',
          'R = Sewa Lokasi per satuan luas lahan (Economic / Locational Rent)',
          'Y = Hasil panen produk per satuan luas lahan (Yield per acre/hectare)',
          'p = Harga pasar produk per satuan bobot di pusat kota pasar',
          'c = Biaya produksi panen per satuan bobot produk',
          'F = Tarif biaya angkut transportasi per satuan bobot per kilometer jarak',
          'm = Jarak mutlak dari ladang lahan pertanian menuju ke pusat pasar kota',
          'Makna Matematis: Pada titik pusat kota (jarak m = 0), sewa lahan bernilai paling tinggi. Semakin jauh jarak m dari kota pasar, sewa lahan akan melandai turun linear karena terpotong oleh biaya transportasi angkutan (Y·F·m) hingga mencapai titik impas nol di mana lahan tidak lagi ekonomis diolah.'
        ],
        formula: {
          expression: 'R = Y(p - c) - Y \\cdot F \\cdot m',
          explanation: 'R adalah sewa lahan, Y adalah hasil panen, p harga pasar, c biaya produksi, F tarif transport, dan m jarak ke pasar.',
          exampleCalculation: 'Sayuran: Y=10 ton/ha, p=Rp 10 jt/ton, c=Rp 4 jt/ton, F=Rp 1 jt/ton/km. Di pusat kota (m=0), R = 10(10-4) = Rp 60 jt/ha. Pada jarak 4 km, R = 10(6) - 10(1)(4) = 60 - 40 = Rp 20 jt/ha. Pada jarak 6 km, R = 60 - 60 = 0 (batas luar cincin sayuran).'
        }
      },
      {
        subtitle: '2. Enam Cincin Konsentris Penggunaan Lahan Von Thünen',
        content: 'Berdasarkan kurva sewa lahan tertinggi (bid-rent), ruang tertata menjadi 6 cincin:',
        table: {
          headers: ['Zona Cincin Konsentris', 'Komoditas Pertanian Dominan', 'Alasan Lokasional Pertimbangan Biaya & Sifat Barang'],
          rows: [
            ['Titik Pusat (Central City)', 'Pasar Kota Tunggal', 'Pusat konsumsi tunggal yang menyerap seluruh hasil panen pedalaman'],
            ['Cincin 1 (Terdalam)', 'Pertanian Hortikultura & Peternakan Susu Segar (Dairying & Market Gardening)', 'Produk sangat mudah membusuk (perishable: susu segar, stroberi, sayur kol segar) dan membutuhkan penanganan kilat terdekat ke konsumen'],
            ['Cincin 2', 'Kehutanan & Produksi Kayu Bakar (Wood and Timber)', 'Pada abad ke-19 kayu adalah bahan bakar pemanas dan material konstruksi utama kota; kayu sangat berat dan bervolume besar sehingga biaya angkutnya sangat mahal jika didatangkan dari jauh'],
            ['Cincin 3', 'Pertanian Tanaman Pangan Intensif (Rotasi Tanaman Enam Tahun)', 'Gandum dan serealia intensif tanpa masa bera lahan; hasil panen per hektar tinggi dengan biaya angkut menengah'],
            ['Cincin 4', 'Pertanian Tanaman Pangan Kurang Intensif (Tujuh Tahun Rotasi)', 'Pertanian tanaman pangan yang diselingi masa bera lahan (fallow) dan peternakan padang rumput berkala'],
            ['Cincin 5', 'Sistem Tiga Lapangan (Three-Field System)', 'Pertanian biji-bijian ekstensif di mana sepertiga lahan selalu diistirahatkan menjadi padang rumput bera'],
            ['Cincin 6 (Terluar)', 'Peternakan Penggembalaan Ekstensif (Livestock Ranching)', 'Ternak sapi dan domba dapat digiring berjalan kaki sendiri menuju pasar kota tanpa memerlukan biaya gerobak angkut yang mahal'],
            ['Luar Cincin 6', 'Hutan Belantara Terpencil (Wilderness)', 'Biaya angkut transportasi melebihi seluruh harga jual barang sehingga tidak ada komoditas yang menguntungkan diproduksi']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Asumsi Dasar Model "Negara Terisolasi" Von Thünen',
        items: [
          { name: 'Satu Kota Pasar Tunggal', description: 'Hanya ada satu kota pusat pasar tunggal yang dikelilingi oleh daratan pertanian terpencil.' },
          { name: 'Lanskap Isotropik Seragam', description: 'Tanah memiliki kesuburan dan iklim yang persis sama di semua titik tanpa rintangan gunung atau rawa.' },
          { name: 'Satu Moda Transportasi', description: 'Seluruh petani mengangkut hasil panen menggunakan gerobak kuda di jalan tanah dengan tarif seragam.' }
        ]
      }
    ],
    processes: [
      { stage: 'Mekanisme Bid-Rent', title: 'Kompetisi Lahan Terdekat', description: 'Petani sayur susu sanggup membayar sewa tanah termahal mendesak petani gandum menjauh dari kota.' },
      { stage: 'Diferensiasi Jarak', title: 'Perhitungan Friksi Angkut Kereta Kuda', description: 'Semakin jauh jarak ke kota, biaya angkut memakan habis margin keuntungan panen.' },
      { stage: 'Modifikasi Sungai Navigasi', title: 'Distorsi Cincin Memanjang', description: 'Keberadaan sungai yang dapat dilayari perahu mendistorsi cincin lingkaran menjadi memanjang sepanjang sungai karena biaya angkut perahu lebih murah.' }
    ],
    caseStudies: [
      {
        title: 'Zonasi Agrikultur Pasokan Pangan Segar Kota Megapolitan Jabodetabek',
        location: 'Kawasan Puncak, Bogor, Lembang, dan Koridor Jawa Barat',
        description: 'Meskipun teknologi transportasi pendingin (cold-storage truck) modern telah melonggarkan batasan jarak, model Von Thünen masih terlihat nyata di sekitar Jakarta. Cincin terdalam (Puncak dan Bogor) mendominasi pasokan sayuran daun basah mudah busuk (bayam, sawi, selada) dan susu sapi segar murni; Cincin menengah (Karawang dan Subang) menyediakan beras padi intensif; sedangkan Cincin luar (peternakan sapi potong di Jawa Timur, NTT, dan Australia) menyediakan daging ternak hidup.',
        takeaway: 'Sifat mudah rusaknya barang (perishability) dan ongkos angkut tetap menjadi faktor determinan zonasi pertanian modern.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Enam Cincin Konsentris Von Thünen dan Modifikasi Sungai yang Dapat Dilayari (Navigable River)',
        caption: 'Bagan lingkaran cincin Von Thünen: Cincin 1 Susu/Sayur hingga Cincin 6 Peternakan, serta distorsi elips memanjang di sepanjang sungai.',
        badge: 'Von Thünen Model'
      }
    ],
    terminology: [
      { term: 'Sewa Lokasi (Locational Rent)', definition: 'Keuntungan ekonomi bersih per satuan luas lahan pertanian setelah dikurangi biaya produksi dan seluruh biaya transportasi angkutan menuju pasar.', scientificTerm: 'Locational Rent' },
      { term: 'The Isolated State', definition: 'Asumsi lanskap ideal Von Thünen berupa sebuah negara terisolasi dengan satu kota pasar tunggal di tengah dataran seragam.', scientificTerm: 'The Isolated State' },
      { term: 'Perishable Goods', definition: 'Komoditas pangan yang sangat cepat membusuk dan rusak dalam hitungan hari (seperti susu murni segar, sayuran daun hijau, dan buah lunak).', scientificTerm: 'Perishable Goods' }
    ],
    summary: [
      'Von Thünen merumuskan zonasi pertanian melingkar berdasarkan jarak ke kota pasar dan biaya angkut transportasi.',
      'Sewa Lokasi: R = Y(p - c) - Y·F·m; sewa tertinggi di dekat kota dan menurun linear menjauhi pusat.',
      'Cincin 1 ditempati sayur dan susu mudah busuk, cincin 2 kayu bakar berat, cincin 3-5 biji-bijian, dan cincin 6 peternakan ekstensif.'
    ],
    quiz: [
      {
        id: 'q119-1',
        question: 'Menurut Teori Lokasi Pertanian Johann Heinrich von Thünen, jenis aktivitas pertanian yang menempati Cincin 1 (cincin paling dalam yang paling dekat menempel dengan batas kota pasar) adalah...',
        options: [
          'Peternakan sapi potong ekstensif padang rumput terbuka',
          'Pertanian tanaman hortikultura sayur-mayur dan peternakan sapi perah (susu segar)',
          'Hutan belantara tempat perburuan binatang liar',
          'Perkebunan gandum ekstensif dengan sistem tiga lapangan'
        ],
        correctAnswer: 1,
        explanation: 'Cincin 1 Von Thünen ditempati oleh sayuran segar dan susu perah karena komoditas ini bernilai tinggi per satuan luas dan sangat cepat membusuk (perishable) sehingga butuh akses instan ke konsumen.'
      },
      {
        id: 'q119-2',
        question: 'Jika di dalam wilayah model Von Thünen terdapat sebuah sungai yang dapat dilayari perahu (navigable river) yang melintas menembus pusat kota pasar, maka bentuk formasi zonasi cincin pertanian konsentris akan berubah menjadi...',
        options: [
          'Bentuk lingkaran sempurna yang semakin membesar',
          'Bentuk memanjang (mengular) sejajar mengikuti sepanjang aliran sungai karena biaya angkut perahu air jauh lebih murah daripada gerobak darat',
          'Tidak mengalami perubahan bentuk sama sekali',
          'Berubah menjadi kotak persegi empat'
        ],
        correctAnswer: 1,
        explanation: 'Sungai yang dapat dilayari menawarkan biaya angkut yang jauh lebih murah daripada jalan darat, sehingga zona pertanian akan terdistorsi melebar memanjang mengikuti koridor aliran sungai.'
      }
    ],
    references: ['Von Thünen, J. H. (1826). Der isolirte Staat in Beziehung auf Landwirthschaft und Nationalökonomie.', 'Hall, P. (1966). Von Thünen\'s Isolated State. Pergamon Press.'],
    relatedTopicIds: ['teori-lokasi-industri-alfred-weber', 'ruang-lingkup-geografi-ekonomi', 'geografi-transportasi-dan-perdagangan', 'struktur-ruang-kota-dan-zonasi']
  },
  {
    id: 'geografi-transportasi-dan-perdagangan',
    number: 120,
    title: 'Geografi Transportasi dan Perdagangan',
    englishTitle: 'Transport Geography, Chokepoints, Containerization, and Trade Corridors',
    categoryId: 'ekonomi-politik',
    difficulty: 'Intermediate',
    description: 'Menelaah sains geografi transportasi dan rute perdagangan global: revolusi peti kemas kontainer (Containerization karya Malcolm McLean); titik sumbatan maritim strategis dunia (Maritime Chokepoints: Selat Malaka, Terusan Suez, Terusan Panama, Selat Hormuz, Bab el Mandeb); serta perbandingan efisiensi moda multimoda.',
    keywords: ['geografi transportasi', 'maritime chokepoints titik sumbat', 'revolusi kontainer peti kemas', 'selat malaka suez panama hormuz', 'transportasi multimoda intermodal'],
    learningObjectives: [
      'Menjelaskan dampak revolusioner kontainerisasi (peti kemas standar TEU) terhadap efisiensi rantai logistik maritim global.',
      'Memetakan dan menganalisis peran geopolitik titik-titik sumbatan maritim kritis dunia (Maritime Chokepoints).',
      'Membandingkan struktur biaya transportasi intermodal antara moda darat truk, rel kereta api, kapal laut, dan pesawat kargo.'
    ],
    introduction: 'Transportasi adalah urat nadi perekonomian global yang mengatasi kendala friksi jarak ruang dan waktu. Tanpa sistem transportasi yang efisien, perdagangan internasional tidak akan pernah terwujud. Di era modern, geografi transportasi mengalami lompatan revolusioner berkat standardisasi peti kemas (kontainer) dan kapal kargo raksasa yang melintasi rute-rute pelayaran maritim dunia. Namun, pelayaran global sangat bergantung pada beberapa celah selat dan terusan sempit alami dan buatan yang dikenal sebagai Titik Sumbat Maritim (Maritime Chokepoints).',
    sections: [
      {
        subtitle: '1. Enam Titik Sumbatan Maritim Kritis Dunia (Maritime Chokepoints)',
        content: 'Selat-selat sempit yang menjadi simpul leher botol pelayaran energi dan perdagangan global:',
        table: {
          headers: ['Titik Sumbatan (Chokepoint)', 'Lokasi Geografis & Penghubung', 'Volume Arus & Signifikansi Strategis', 'Potensi Kerentanan & Risiko Geopolitik'],
          rows: [
            ['1. Selat Malaka', 'Antara Pulau Sumatera, Semenanjung Malaysia, dan Singapura', 'Dilewati lebih dari 100.000 kapal/tahun; mengangkut sepertiga perdagangan dunia dan 80% pasokan minyak bumi impor Tiongkok dan Jepang', 'Kedalaman alur dangkal (Draft Philip Channel 25 m), rawan pembajakan perompak, ancaman tabrakan kapal karam'],
            ['2. Selat Hormuz', 'Pintu keluar Teluk Persia antara Oman dan Iran', 'Urat nadi minyak bumi terpenting di bumi; dilewati 21 juta barel minyak mentah per hari (20% konsumsi minyak dunia)', 'Sangat rentan terhadap blokade ranjau laut dan konflik militer geopolitik Teluk Persia'],
            ['3. Terusan Suez', 'Mesir; menghubungkan Laut Merah dengan Laut Mediterania', 'Memangkas jarak pelayaran Asia-Eropa hingga 9.000 km tanpa memutari Benua Afrika (dilewati 12% kargo dunia)', 'Rentan terhadap kapal kandas tersangkut (kasus Ever Given 2021) dan serangan rudal di mulut Laut Merah'],
            ['4. Bab el-Mandeb', 'Pintu masuk selatan Laut Merah antara Yaman, Djibouti, dan Eritrea', 'Jalur pengumpan masuk ke Terusan Suez; dilewati kapal tanker minyak dari Teluk menuju Eropa', 'Konflik perang sipil Yaman, ancaman serangan drone milisi Houthi yang memaksa kapal memutar ke Tanjung Harapan'],
            ['5. Terusan Panama', 'Panama; menghubungkan Samudra Atlantik dan Samudra Pasifik', 'Sistem pintu air bertingkat (locks) yang memangkas pelayaran kapal pantai timur dan barat benua Amerika', 'Sangat rentan krisis kekeringan danau air tawar Gatun akibat El Niño yang membatasi draft kapal draft neopanamax'],
            ['6. Selat Bosphorus & Dardanella', 'Turki; menghubungkan Laut Hitam dengan Laut Tengah', 'Jalur transit ekspor utama gandum Rusia-Ukraina dan minyak bumi Kaukasus ke pasar Eropa', 'Alur sangat sempit melintasi tengah kota metropolitan Istanbul, diatur ketat oleh Konvensi Montreux 1936']
          ]
        }
      },
      {
        subtitle: '2. Revolusi Kontainerisasi (Malcolm McLean, 1956)',
        content: 'Standardisasi peti kemas mengubah wajah logistik dunia selamanya:',
        keyPoints: [
          'Standardisasi Ukuran TEU: Pengenalan ukuran kotak besi standar Twenty-foot Equivalent Unit (TEU: panjang 20 kaki) dan FEU (40 kaki).',
          'Efisiensi Bongkar Muat Radikal: Sebelum ada kontainer, membongkar barang karung beras dan peti kayu dari lambung kapal membutuhkan waktu 8-10 hari oleh ratusan kuli panggul dermaga. Dengan kontainer crane raksasa, kapal dapat dibongkar dalam hitungan jam.',
          'Intermodalitas Mulus: Kontainer dapat dipindahkan secara instan dari lambung kapal kontainer ke gerbong datar kereta api (flatbed train) lalu dinaikkan ke truk trailer tanpa perlu menyentuh atau membongkar isi muatan barang di dalamnya.',
          'Anjloknya Biaya Angkut: Biaya pengiriman barang dari satu belahan bumi ke belahan bumi lain anjlok hingga kurang dari 1% dari nilai harga barang.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Komparasi Moda Transportasi Berdasarkan Karakteristik Biaya',
        items: [
          { name: 'Kapal Laut Kargo', description: 'Biaya tetap kapal tinggi, biaya variabel per ton-km paling murah sedunia; sangat ideal untuk barang curah berat jarak jauh.' },
          { name: 'Kereta Api Logistik', description: 'Biaya variabel rendah untuk jarak menengah-jauh daratan kontinental; tidak terhambat kemacetan jalan raya.' },
          { name: 'Truk Jalan Raya', description: 'Paling fleksibel melayani pengantaran pintu-ke-pintu (door-to-door), namun biaya variabel per ton-km tinggi dan rawan macet.' },
          { name: 'Pesawat Terbang Kargo', description: 'Paling cepat di dunia, namun biaya per ton-km termahal; hanya cocok untuk barang bernilai tinggi (emas, mikrochip, vaksin).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengepakan di Pabrik', title: 'Penyegelan Kontainer Segel Bea Cukai', description: 'Barang dimasukkan ke peti kemas di pabrik dan disegel dengan nomor unik pelacak GPS.' },
      { stage: 'Pelayaran Lintas Samudra', title: 'Transit Melalui Alur Chokepoints', description: 'Kapal mega-kontainer (24.000 TEU) melintasi Selat Malaka dipandu sistem radar VTS.' },
      { stage: 'Penyaluran Multimoda', title: 'Bongkar Muat di Pelabuhan Hub', description: 'Crane gantry pelabuhan memindahkan kontainer ke truk trailer untuk dikirim langsung ke gudang supermarket.' }
    ],
    caseStudies: [
      {
        title: 'Krisis Jalur Pelayaran Laut Merah 2024: Disrupsi Selat Bab el-Mandeb dan Lonjakan Inflasi Global',
        location: 'Selat Bab el-Mandeb, Laut Merah, Yaman',
        description: 'Serangan drone dan rudal milisi Houthi terhadap kapal-kapal kargo di Selat Bab el-Mandeb memaksa perusahaan pelayaran raksasa dunia (Maersk, MSC, Hapag-Lloyd) mengalihkan ribuan kapal menghindari Laut Merah. Kapal-kapal terpaksa memutar jauh mengitari Tanjung Harapan di ujung selatan Benua Afrika. Pengalihan rute ini menambah jarak tempuh sejauh 6.500 km, memperpanjang waktu berlayar 12–14 hari, melipatgandakan premi asuransi perang laut, dan memicu lonjakan tarif kontainer global hingga 300%.',
        takeaway: 'Kerentanan satu celah sempit maritime chokepoint berdampak instan terhadap inflasi dan rantai pasok global.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Lokasi Enam Titik Sumbatan Maritim Kritis Dunia (Maritime Chokepoints) dan Koridor Arus Minyak Bumi',
        caption: 'Peta rute pelayaran maritim dunia dengan lingkaran sorot pada 6 selat leher botol: Malaka, Hormuz, Bab el-Mandeb, Suez, Panama, Bosphorus.',
        badge: 'Maritime Chokepoints'
      }
    ],
    terminology: [
      { term: 'Maritime Chokepoint', definition: 'Selat atau terusan perairan sempit strategis yang memiliki volume pelayaran internasional sangat tinggi dan rawan tersumbat atau diblokade.', scientificTerm: 'Maritime Chokepoint' },
      { term: 'TEU (Twenty-foot Equivalent Unit)', definition: 'Satuan ukuran standar kapasitas kargo peti kemas peti kemas yang didasarkan pada volume kontainer berukuran panjang 20 kaki.', scientificTerm: 'TEU' },
      { term: 'Transportasi Intermodal / Multimoda', definition: 'Pengangkutan barang dari asal ke tujuan menggunakan dua atau lebih moda transportasi berbeda secara terpadu tanpa membongkar isi kontainer.', scientificTerm: 'Intermodal Freight Transport' }
    ],
    summary: [
      'Transportasi maritim global ditopang oleh revolusi peti kemas kontainer (standardisasi TEU).',
      'Pelayaran dunia sangat rentan terhadap gangguan pada 6 Maritime Chokepoints (termasuk Selat Malaka dan Selat Hormuz).',
      'Setiap moda transportasi memiliki keunggulan komparatif biaya: kapal laut paling hemat untuk kargo berat jarak jauh.'
    ],
    quiz: [
      {
        id: 'q120-1',
        question: 'Titik sumbatan maritim (maritime chokepoint) yang terletak di antara Semenanjung Arab dan Iran yang menjadi urat nadi perlintasan sekitar 20% dari total konsumsi minyak bumi dunia setiap hari adalah...',
        options: ['Selat Malaka', 'Selat Hormuz', 'Terusan Panama', 'Selat Gibraltar'],
        correctAnswer: 1,
        explanation: 'Selat Hormuz menghubungkan Teluk Persia dengan Laut Arab dan merupakan titik sumbatan energi minyak bumi terpenting di muka bumi.'
      },
      {
        id: 'q120-2',
        question: 'Inovasi teknologi logistik abad ke-20 yang dipelopori oleh Malcolm McLean yang merevolusi perdagangan internasional dengan menurunkan biaya angkut kapal laut secara radikal adalah...',
        options: [
          'Penggunaan mesin uap batu bara',
          'Standardisasi peti kemas / kontainer (Containerization TEU)',
          'Pembuatan kapal kayu tradisional',
          'Pembangunan jalan pos kuda'
        ],
        correctAnswer: 1,
        explanation: 'Kontainerisasi (standardisasi peti kemas ukuran 20 dan 40 kaki) merevolusi logistik dunia dengan memungkinkan perpindahan multimoda yang sangat cepat dan murah.'
      }
    ],
    references: ['Rodrigue, J. P. (2020). The Geography of Transport Systems. Routledge.', 'Levinson, M. (2006). The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger. Princeton University Press.'],
    relatedTopicIds: ['ruang-lingkup-geografi-ekonomi', 'teori-lokasi-industri-alfred-weber', 'globalisasi-dan-interdependensi-global', 'geopolitik-dan-geostrategi-global']
  },
  {
    id: 'geografi-pariwisata-dan-hospitality',
    number: 121,
    title: 'Geografi Pariwisata dan Hospitality',
    englishTitle: 'Tourism Geography: Destination Life Cycle, Carrying Capacity, and Ecotourism',
    categoryId: 'ekonomi-politik',
    difficulty: 'Intermediate',
    description: 'Menelaah sains geografi kepariwisataan: tipologi daya tarik wisata (alam, budaya, buatan); Teori Siklus Hidup Destinasi Wisata Butler (Tourism Area Life Cycle / TALC: Eksplorasi hingga Peremajaan/Penurunan); Daya Dukung Lingkungan Wisata (Tourism Carrying Capacity); fenomena Kelebihan Turis (Overtourism); serta Ekowisata Berkelanjutan.',
    keywords: ['geografi pariwisata', 'siklus butler talc', 'overtourism kelebihan turis', 'daya dukung wisata carrying capacity', 'ekowisata berkelanjutan', 'sapta pesona'],
    learningObjectives: [
      'Menganalisis 6 tahapan evolusi kawasan wisata menurut model Tourism Area Life Cycle (TALC) Richard Butler.',
      'Menghitung dan mengevaluasi Daya Dukung Lingkungan Wisata (Tourism Carrying Capacity) fisik, ekologis, dan sosial.',
      'Menganalisis dampak negatif Overtourism serta strategi mitigasi melalui pengembangan ekowisata berbasis komunitas.'
    ],
    introduction: 'Geografi Pariwisata (Tourism Geography) mengkaji perjalanan manusia di luar tempat tinggal biasanya, persebaran spasial atraksi wisata, interaksi pelancong dengan bentang alam dan budaya lokal, serta transformasi ekonomi dan lingkungan yang ditimbulkannya pada destinasi tujuan. Pariwisata merupakan salah satu industri terbesar di dunia penyumbang devisa dan lapangan kerja. Namun, perkembangan wisata yang tidak terkendali dapat menghancurkan aset alam dan budaya yang menjadi modal aslinya melalui fenomena "Overtourism".',
    sections: [
      {
        subtitle: '1. Model Siklus Hidup Kawasan Wisata Butler (TALC, 1980)',
        content: 'Geografer Richard Butler merumuskan bahwa destinasi wisata mengalami siklus evolusi kurva S (Sigmoid):',
        table: {
          headers: ['Tahap Butler TALC', 'Nama Tahapan Kawasan Wisata', 'Ciri Karakteristik Wisatawan & Sarana', 'Kondisi Lingkungan & Dampak Sosial'],
          rows: [
            ['Tahap 1', 'Eksplorasi (Exploration)', 'Jumlah pelancong sangat sedikit (backpacker/petualang mandiri); belum ada fasilitas hotel komersial', 'Alam masih asli lestari, masyarakat lokal ramah menyambut tamu dengan kehangatan asli'],
            ['Tahap 2', 'Keterlibatan (Involvement)', 'Warga lokal mulai membuka homestay sederhana, warung makan, dan pemandu lokal', 'Pemerintah mulai membangun akses jalan beraspal dan pos retribusi tiket masuk'],
            ['Tahap 3', 'Pembangunan (Development)', 'Investor korporasi luar masuk membangun hotel berbintang, resort mewah, dan kafe modern', 'Jumlah turis melonjak drastis melebihi jumlah penduduk asli saat musim puncak (peak season)'],
            ['Tahap 4', 'Konsolidasi (Consolidation)', 'Pertumbuhan jumlah turis mulai melandai namun volume total sangat masif; ekonomi lokal bergantung mutlak pada pariwisata', 'Mulai timbul gesekan budaya, kemacetan jalan raya, dan penurunan kualitas lingkungan'],
            ['Tahap 5', 'Stagnasi (Stagnation)', 'Kawasan mencapai daya dukung lingkungan maksimal; atraksi kehilangan keaslian dan citra eksklusifnya', 'Pencemaran sampah, kerusakan terumbu karang, turis kelas atas mulai menghindar'],
            ['Tahap 6 (Dua Opsi)', 'Penurunan (Decline) ATAU Peremajaan (Rejuvenation)', 'Decline: Destinasi ditinggalkan, berubah menjadi kawasan murah kumuh. Rejuvenation: Dilakukan revitalisasi atraksi baru atau penataan ulang ekologis berkelanjutan', 'Menentukan hidup matinya masa depan kawasan pariwisata']
          ]
        }
      },
      {
        subtitle: '2. Daya Dukung Wisata (Tourism Carrying Capacity) dan Overtourism',
        content: 'Batas toleransi maksimal suatu destinasi wisata sebelum mengalami kerusakan:',
        keyPoints: [
          'Daya Dukung Fisik (Physical Carrying Capacity): Jumlah wisatawan maksimal yang secara fisik dapat ditampung oleh ruang kawasan pada satu waktu tertentu tanpa berdesak-desakan membahayakan keselamatan.',
          'Daya Dukung Ekologis (Ecological Carrying Capacity): Batas toleransi ekosistem alami (air bersih, terumbu karang, populasi satwa liar) sebelum mengalami kepunahan atau degradasi permanen akibat sampah dan jejak kaki manusia.',
          'Daya Dukung Sosial-Psikologis: Ambang batas toleransi masyarakat lokal terhadap gangguan privasi budaya dan kepadatan turis sebelum timbul kemarahan atau penolakan anti-turis.',
          'Fenomena Overtourism: Kondisi di mana kepadatan wisatawan melebihi daya dukung lingkungan dan sosial, merusak kualitas hidup warga lokal dan menurunkan kepuasan wisatawan itu sendiri (contoh: Venesia, Barcelona, Bali Selatan).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Kategori Komponen Pariwisata (4A)',
        items: [
          { name: 'Attraction (Daya Tarik)', description: 'Pesona keindahan alam (pantai, gunung berapi, danau), warisan budaya candi, atau festival kesenian.' },
          { name: 'Accessibility (Aksesibilitas)', description: 'Kemudahan moda transportasi menuju lokasi: bandara, jalan tol, ketersediaan angkutan umum.' },
          { name: 'Amenities & Ancillary (Fasilitas & Kelembagaan)', description: 'Ketersediaan hotel akomodasi, restoran, toilet bersih, pemandu wisata berlisensi, dan regulasi dinas pariwisata.' }
        ]
      }
    ],
    processes: [
      { stage: 'Promosi Media Sosial', title: 'Viralitas Destinasi Tersembunyi', description: 'Unggahan foto pantai terpencil di Instagram memicu ledakan kunjungan turis mendadak.' },
      { stage: 'Pembangunan Tak Terkendali', title: 'Konversi Sawah Menjadi Villa', description: 'Investor memborong lahan tebing dan sawah untuk membangun kelab malam dan hotel kolam renang.' },
      { stage: 'Penerapan Daya Dukung', title: 'Pembatasan Kuota & Pajak Wisata', description: 'Pengelola menetapkan kuota harian tiket online dan memungut retribusi konservasi lingkungan.' }
    ],
    caseStudies: [
      {
        title: 'Penutupan dan Rehabilitasi Teluk Maya Bay di Thailand Akibat Overtourism',
        location: 'Taman Nasional Hat Noppharat Thara-Mu Ko Phi Phi, Thailand',
        description: 'Maya Bay yang terkenal mendunia berkat film "The Beach" dikunjungi hingga 5.000 wisatawan dan ratusan perahu cepat per hari di atas pantai kecil sepanjang 250 meter. Jangkar perahu dan tabir surya kimia turis memusnahkan lebih dari 80% terumbu karang teluk tersebut. Pemerintah Thailand mengambil langkah berani dengan menutup total Maya Bay bagi publik selama lebih dari 3 tahun. Hasilnya menakjubkan: terumbu karang pulih dan kawanan hiu sirip hitam kembali berenang bebas di teluk.',
        takeaway: 'Penegakan daya dukung lingkungan melalui moratorium kunjungan mampu menyelamatkan ekosistem wisata dari kehancuran fatal.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Kurva Siklus Hidup Destinasi Wisata Butler (TALC) dan Ambang Batas Daya Dukung (Carrying Capacity)',
        caption: 'Kurva S Butler: Eksplorasi → Keterlibatan → Pembangunan → Konsolidasi → Stagnasi → (Rejuvenasi vs Penurunan).',
        badge: 'Butler TALC Model'
      }
    ],
    terminology: [
      { term: 'Tourism Area Life Cycle (TALC)', definition: 'Model teori karya Richard Butler yang menggambarkan evolusi pertumbuhan destinasi wisata dari tahap eksplorasi awal hingga stagnasi.', scientificTerm: 'TALC Model' },
      { term: 'Overtourism', definition: 'Dampak negatif kepariwisataan di mana lonjakan turis berlebih merusak lingkungan alam dan mengganggu kenyamanan hidup masyarakat lokal.', scientificTerm: 'Overtourism' },
      { term: 'Ekowisata (Ecotourism)', definition: 'Bentuk pariwisata bertanggung jawab ke kawasan alami yang mengedepankan konservasi lingkungan, pemberdayaan ekonomi lokal, dan edukasi budaya.', scientificTerm: 'Ecotourism' }
    ],
    summary: [
      'Richard Butler merumuskan evolusi kawasan wisata dalam 6 tahapan TALC (Eksplorasi hingga Stagnasi dan Rejuvenasi/Decline).',
      'Pariwisata dibatasi oleh Daya Dukung Fisik, Ekologis, dan Sosial-Psikologis lingkungan.',
      'Overtourism dapat dicegah melalui pembatasan kuota pengunjung, diversifikasi atraksi, dan penerapan prinsip ekowisata berkelanjutan.'
    ],
    quiz: [
      {
        id: 'q121-1',
        question: 'Model teoritis dalam geografi pariwisata yang menggambarkan evolusi perkembangan suatu destinasi wisata melalui tahapan Eksplorasi, Keterlibatan, Pembangunan, Konsolidasi, Stagnasi, hingga Rejuvenasi atau Penurunan dirumuskan oleh...',
        options: ['Richard Butler (TALC)', 'Walter Christaller', 'Alfred Weber', 'Ernest Burgess'],
        correctAnswer: 0,
        explanation: 'Richard Butler (1980) merumuskan model Tourism Area Life Cycle (TALC) yang memetakan siklus hidup destinasi pariwisata.'
      },
      {
        id: 'q121-2',
        question: 'Fenomena di mana lonjakan jumlah wisatawan ke sebuah destinasi wisata (seperti di Kuta Bali atau Venesia) melampaui batas kemampuan lingkungan sehingga memicu kemacetan, krisis sampah, krisis air bersih, dan terusirnya warga lokal dinamakan...',
        options: ['Overtourism (Kelebihan Turis)', 'Glokalisasi', 'Ekowisata lestari', 'Urban sprawl'],
        correctAnswer: 0,
        explanation: 'Overtourism adalah kondisi kepadatan kunjungan wisatawan yang melampaui daya dukung (carrying capacity) fisik, ekologis, dan sosial kawasan wisata.'
      }
    ],
    references: ['Butler, R. W. (1980). The Concept of a Tourist Area Cycle of Evolution. Canadian Geographer.', 'UNWTO. (2018). \'Overtourism\'? Understanding and Managing Urban Tourism Growth beyond Perceptions.'],
    relatedTopicIds: ['ruang-lingkup-geografi-ekonomi', 'geografi-transportasi-dan-perdagangan', 'lingkungan-hidup-dan-ekosistem', 'pembangunan-berkelanjutan']
  },
  {
    id: 'geopolitik-dan-geostrategi-global',
    number: 122,
    title: 'Geopolitik dan Geostrategi Global',
    englishTitle: 'Geopolitics and Geostrategy: Mackinder Heartland, Mahan Seapower, and Spykman Rimland',
    categoryId: 'ekonomi-politik',
    difficulty: 'Advanced',
    description: 'Menguasai teori klasik dan kontemporer geopolitik dunia: Teori Daerah Jantung (Heartland Theory Halford Mackinder: "Who rules East Europe commands the Heartland..."), Teori Kekuatan Laut (Seapower Theory Alfred Thayer Mahan), Teori Daerah Tepi (Rimland Theory Nicholas Spykman), serta pergeseran poros perang dingin baru di Kawasan Indo-Pasifik.',
    keywords: ['geopolitik geostrategi', 'mackinder heartland theory', 'alfred mahan seapower', 'spykman rimland theory', 'indo pasifik', 'wawasan nusantara'],
    learningObjectives: [
      'Menjelaskan Teori Daerah Jantung (Heartland Theory) Sir Halford Mackinder dan signifikansi daratan Eurasia.',
      'Membandingkan doktrin Kekuatan Maritim Alfred Mahan dengan Teori Daerah Tepi (Rimland Theory) Nicholas Spykman.',
      'Menganalisis posisi geostrategis Indonesia dalam persaingan hegemoni maritim Indo-Pasifik berlandaskan doktrin Wawasan Nusantara.'
    ],
    introduction: 'Geopolitik (Geopolitics) adalah studi tentang bagaimana faktor-faktor geografi fisik, ruang, lokasi teritorial, iklim, dan sumber daya alam mempengaruhi kebijakan politik luar negeri, strategi militer, dan persaingan hegemoni kekuasaan antarbangsa. Geostrategi adalah penerapan nyata pertimbangan geografis ke dalam perencanaan militer dan keamanan nasional. Tiga teori klasik—Teori Kekuatan Laut Mahan, Teori Daerah Jantung Mackinder, dan Teori Daerah Tepi Spykman—menjadi fondasi utama pemikiran strategis yang memandu strategi negara-negara adidaya hingga era modern.',
    sections: [
      {
        subtitle: '1. Tiga Teori Klasik Geopolitik Terbesar Dunia',
        content: 'Perbandingan tiga paradigma geopolitik global utama:',
        table: {
          headers: ['Pencetus Teori', 'Nama Teori Geopolitik', 'Gagasan Inti & Postulat Spasial', 'Kunci Wilayah Strategis'],
          rows: [
            ['Sir Halford Mackinder (1904)', 'Heartland Theory (Teori Daerah Jantung)', '"Barangsiapa menguasai Eropa Timur akan menguasai Daerah Jantung (Heartland); barangsiapa menguasai Daerah Jantung akan menguasai Pulau Dunia (World-Island: Eurasia-Afrika); barangsiapa menguasai Pulau Dunia akan menguasai seluruh dunia."', 'Daratan pedalaman Eurasia (Rusia dan Asia Tengah) yang tidak dapat dijangkau oleh armada kapal perang laut'],
            ['Alfred Thayer Mahan (1890)', 'Seapower Theory (Kekuatan Maritim)', 'Kejayaan dan hegemoni suatu bangsa ditentukan oleh penguasaan samudra dan armada laut; bangsa maritim yang menguasai rute pelayaran laut dan chokepoints akan mengurung kekuatan daratan.', 'Penguasaan pangkalan angkatan laut, armada kapal dagang, dan selat pelayaran sempit dunia'],
            ['Nicholas J. Spykman (1942)', 'Rimland Theory (Teori Daerah Tepi)', '"Barangsiapa menguasai Daerah Tepi (Rimland) akan menguasai Eurasia; barangsiapa menguasai Eurasia akan mengendalikan takdir seluruh dunia." Memodifikasi Mackinder.', 'Kawasan pesisir lingkar pinggiran Eurasia (Eropa Barat, Timur Tengah, Asia Selatan, Asia Tenggara, Asia Timur) yang mempertemukan kekuatan darat dan laut']
          ]
        }
      },
      {
        subtitle: '2. Pergeseran Geostrategis ke Kawasan Indo-Pasifik',
        content: 'Di abad ke-21, episentrum kompetisi geopolitik global bergeser dari Atlantik ke Indo-Pasifik:',
        keyPoints: [
          'Poros Indo-Pasifik: Kawasan maritim yang membentang dari pantai timur Afrika melintasi Samudra Hindia dan Samudra Pasifik barat hingga ke Pasifik tengah, menjadi rute pelayaran 60% perdagangan maritim dunia.',
          'Konflik Laut Cina Selatan (Nine-Dash Line): Klaim teritorial sepihak Tiongkok atas 90% perairan Laut Cina Selatan yang bersinggungan dengan ZEE negara-negara ASEAN (Filipina, Vietnam, Malaysia, Brunei, dan perairan Natuna Indonesia).',
          'Posisi Geostrategis Silang Indonesia: Berada di persimpangan dua benua (Asia dan Australia) serta dua samudra (Hindia dan Pasifik) dengan 4 Alur Laut Kepulauan Indonesia (ALKI). Indonesia menerapkan doktrin Wawasan Nusantara dan politik luar negeri Bebas Aktif untuk menjadi poros maritim netral yang meredam eskalasi perang terbuka.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Pembagian Ruang Geopolitik Mackinder',
        items: [
          { name: 'Heartland (Daerah Jantung)', description: 'Dataran luas terisolasi dari Volga ke Yangtze yang terlindung dari akses kapal perang samudra.' },
          { name: 'Inner Crescent / Rimland (Bulan Sabit Dalam)', description: 'Jalur tepian pantai Eropa barat, Timur Tengah, India, dan Tiongkok.' },
          { name: 'Outer Crescent (Bulan Sabit Luar)', description: 'Kekuatan insular kepulauan samudra: Inggris, Amerika Serikat, Jepang, dan Australia.' }
        ]
      }
    ],
    processes: [
      { stage: 'Analisis Peta Spasial', title: 'Perumusan Doktrin Militer', description: 'Para jenderal merancang pangkalan militer di celah selat chokepoint untuk mengamankan jalur logistik.' },
      { stage: 'Pembentukan Pakta Aliansi', title: 'Pembentukan Blok Keamanan', description: 'Negara-negara maritim membentuk aliansi pertahanan (seperti AUKUS dan Quad di kawasan Indo-Pasifik).' },
      { stage: 'Proyeksi Kekuatan Teritorial', title: 'Patroli Kebebasan Bernavigasi (FONOP)', description: 'Armada kapal perang mengawal jalur ALKI menegakkan hukum laut internasional UNCLOS 1982.' }
    ],
    caseStudies: [
      {
        title: 'Ketegangan di Laut Natuna Utara: Ujian Ketahanan Geopolitik Maritim Indonesia',
        location: 'Kepulauan Natuna, Provinsi Kepulauan Riau, Indonesia',
        description: 'Wilayah Laut Natuna Utara kaya akan cadangan gas alam cair (Blok Tuna dan East Natuna) serta perikanan tangkap bernilai miliaran dolar. Klaim sepihak Sepuluh Garis Putus-Putus (Ten-Dash Line) Tiongkok menabrak Zona Ekonomi Eksklusif (ZEE) 200 mil laut Indonesia di perairan ini. Pemerintah Indonesia memperkuat pangkalan militer terpadu di Pulau Ranai Natuna, mengerahkan kapal patroli Bakamla dan TNI AL mengusir kapal coast guard asing, serta meresmikan nama "Laut Natuna Utara" di peta resmi PBB untuk menegakkan kedaulatan spasial.',
        takeaway: 'Penegakan kedaulatan batas geospasial mutlak ditopang oleh kekuatan kehadiran fisik kapal patroli di garis terdepan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Geopolitik Klasik Dunia: Daerah Jantung (Heartland Mackinder) vs Daerah Tepi (Rimland Spykman)',
        caption: 'Peta proyeksi dunia geopolitik: Zona Heartland di daratan Eurasia, sabuk Rimland di pesisir lingkar, dan kekuatan Seapower di samudra.',
        badge: 'Classical Geopolitics'
      }
    ],
    terminology: [
      { term: 'Heartland Theory', definition: 'Teori geopolitik Halford Mackinder yang menyatakan bahwa penguasaan atas daratan pedalaman Eurasia (Heartland) adalah kunci menguasai dunia.', scientificTerm: 'Heartland Theory' },
      { term: 'Rimland Theory', definition: 'Teori geopolitik Nicholas Spykman yang menyatakan bahwa penguasaan atas kawasan tepian maritim Eurasia (Rimland) adalah kunci mengendalikan takdir global.', scientificTerm: 'Rimland Theory' },
      { term: 'Wawasan Nusantara', definition: 'Cara pandang bangsa Indonesia tentang diri dan lingkungannya sebagai satu kesatuan kepulauan yang bulat dan utuh meliputi darat, laut, dan udara.', scientificTerm: 'Archipelagic Geopolitical Doctrine' }
    ],
    summary: [
      'Geopolitik mempelajari pengaruh konstelasi ruang bumi terhadap strategi kekuasaan politik antarbangsa.',
      'Mackinder menekankan kekuatan daratan Daerah Jantung (Heartland); Mahan menekankan Armada Laut (Seapower); Spykman menekankan Daerah Tepi (Rimland).',
      'Posisi silang Indonesia di Indo-Pasifik menuntut penguatan doktrin Wawasan Nusantara untuk menjaga stabilitas alur maritim ALKI.'
    ],
    quiz: [
      {
        id: 'q122-1',
        question: 'Pakar geopolitik Inggris Sir Halford Mackinder mencetuskan teori yang sangat terkenal bahwa barangsiapa yang mampu menguasai kawasan daratan pedalaman Eurasia yang kaya sumber daya dan terlindung dari serangan armada laut akan menguasai dunia, teori ini dikenal sebagai...',
        options: [
          'Heartland Theory (Teori Daerah Jantung)',
          'Rimland Theory (Teori Daerah Tepi)',
          'Seapower Theory (Teori Kekuatan Laut)',
          'Organic State Theory'
        ],
        correctAnswer: 0,
        explanation: 'Heartland Theory (1904) oleh Sir Halford Mackinder menempatkan daratan pedalaman Eurasia (Rusia-Asia Tengah) sebagai daerah jantung paling strategis di dunia.'
      },
      {
        id: 'q122-2',
        question: 'Nicholas J. Spykman memodifikasi teori Mackinder dengan menyatakan bahwa wilayah yang paling menentukan hegemoni kekuasaan dunia bukanlah kawasan pedalaman beku, melainkan wilayah pesisir lingkar perairan Eurasia yang dikenal sebagai...',
        options: ['Heartland', 'Rimland (Daerah Tepi)', 'World-Island', 'Outback'],
        correctAnswer: 1,
        explanation: 'Nicholas Spykman mencetuskan Rimland Theory (1942), yang menyatakan bahwa kawasan tepian pantai Eurasia (Rimland) adalah kunci sejati pengendalian kekuatan dunia.'
      }
    ],
    references: ['Mackinder, H. J. (1904). The Geographical Pivot of History. The Geographical Journal.', 'Spykman, N. J. (1944). The Geography of the Peace. Harcourt, Brace & World.', 'Mahan, A. T. (1890). The Influence of Sea Power upon History, 1660–1783.'],
    relatedTopicIds: ['ruang-lingkup-geografi-ekonomi', 'geografi-transportasi-dan-perdagangan', 'kerja-sama-internasional-dan-organisasi-global', 'posisi-strategis-indonesia']
  }
];
