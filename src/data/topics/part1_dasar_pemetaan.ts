import { Topic } from '../../types/geography';

export const topicsPart1: Topic[] = [
  // CATEGORY A: Dasar-Dasar Ilmu Geografi (1-8)
  {
    id: 'hakikat-dan-konsep-dasar-geografi',
    number: 1,
    title: 'Hakikat dan Konsep Dasar Geografi',
    englishTitle: 'Nature and Fundamental Concepts of Geography',
    categoryId: 'dasar-geografi',
    difficulty: 'Beginner',
    description: 'Memahami hakikat geografi sebagai studi tentang geosfer, interaksi manusia dengan lingkungan, dan diferensiasi spasial permukaan bumi.',
    keywords: ['geosfer', 'ruang geosfer', 'interaksi keruangan', 'diferensiasi area', 'hakikat geografi'],
    learningObjectives: [
      'Menjelaskan definisi dan hakikat ilmu geografi menurut para ahli dunia dan Ikatan Geograf Indonesia (IGI).',
      'Mengidentifikasi ruang lingkup kajian geografi yang mencakup fenomena fisik dan sosial.',
      'Menganalisis cara pandang geografi dalam melihat keterkaitan antarfenomena di geosfer.'
    ],
    introduction: 'Geografi berasal dari bahasa Yunani, yaitu "geo" yang berarti bumi dan "graphein" yang berarti gambaran, lukisan, atau deskripsi. Lebih dari sekadar peta dan daftar nama tempat, geografi adalah ilmu dinamis yang meneliti hubungan timbal balik antara manusia dan lingkungannya dalam konteks ruang (spatial) dan waktu (temporal). Seminar dan Lokakarya IGI di Semarang tahun 1988 menyepakati rumusan penting bahwa geografi adalah ilmu yang mempelajari persamaan dan perbedaan fenomena geosfer dengan sudut pandang kelingkungan dan kewilayahan dalam konteks keruangan.',
    sections: [
      {
        subtitle: '1. Hakikat Keilmuan Geografi',
        content: 'Hakikat geografi terletak pada penelaahan keruangan (spatial analysis). Para geograf tidak hanya bertanya "di mana" suatu fenomena terjadi (where), tetapi yang lebih penting adalah "mengapa fenomena itu berada di sana" (why there), "bagaimana interaksinya dengan wilayah lain" (how), dan "apa implikasinya bagi kehidupan manusia" (what impact).',
        keyPoints: [
          'Pertanyaan mendasar geografi: What, Where, When, Why, Who, dan How (5W1H spasial).',
          'Sifat integratif: menggabungkan ilmu alam (fisik) dan ilmu sosial (humaniora).',
          'Kerangka kerja geosfer: litosfer, atmosfer, hidrosfer, biosfer, dan antroposfer.'
        ]
      },
      {
        subtitle: '2. Tokoh-Tokoh Peletak Dasar Geografi',
        content: 'Eratosthenes (276–194 SM) tercatat sebagai orang pertama yang menggunakan istilah geographika dan berhasil menghitung keliling bumi dengan presisi mencengangkan. Immanuel Kant mendudukkan geografi sebagai ilmu murni yang menelaah fenomena dalam ruang, sejajar dengan sejarah yang menelaah peristiwa dalam waktu.',
        table: {
          headers: ['Tokoh', 'Era / Asal', 'Kontribusi Utama'],
          rows: [
            ['Eratosthenes', 'Yunani Kuno', 'Bapak Geografi, perhitungan keliling bumi pertama'],
            ['Claudius Ptolemaeus', 'Romawi Kuno', 'Karya Geographia, meletakkan sistem garis lintang-bujur'],
            ['Alexander von Humboldt', 'Jerman (Abad 19)', 'Bapak Geografi Modern Fisik, studi Kosmos'],
            ['Karl Ritter', 'Jerman (Abad 19)', 'Bapak Geografi Sosial, relasi alam dan peradaban manusia'],
            ['Bintarto', 'Indonesia', 'Pengembang konsep geografi regional dan interaksi desa-kota']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Dimensi Kajian Geografi',
        items: [
          { name: 'Dimensi Keruangan (Spatial)', description: 'Analisis penyebaran fenomena fisik dan sosial di permukaan bumi.' },
          { name: 'Dimensi Kelingkungan (Ecological)', description: 'Kajian adaptasi dan dampak timbal balik manusia terhadap ekosistemnya.' },
          { name: 'Dimensi Kompleks Wilayah (Regional Complex)', description: 'Kombinasi analisis spasial dan ekologikal dalam perencanaan regional.' }
        ]
      }
    ],
    processes: [
      { stage: 'Tahap 1', title: 'Identifikasi Lokasi', description: 'Menentukan posisi absolut koordinat dan posisi relatif fenomena di permukaan bumi.' },
      { stage: 'Tahap 2', title: 'Pemetaan Pola Spasial', description: 'Memetakan sebaran, kerapatan, dan morfologi fenomena geografi.' },
      { stage: 'Tahap 3', title: 'Analisis Kausalitas & Dampak', description: 'Mengungkap faktor penyebab fenomena dan merumuskan solusi berbasis kewilayahan.' }
    ],
    caseStudies: [
      {
        title: 'Kajian Fenomena Banjir Rob di Pesisir Semarang dan Pantura Jawa',
        location: 'Semarang, Jawa Tengah, Indonesia',
        description: 'Banjir rob di pesisir utara Jawa ditinjau dari hakikat geografi melibatkan interaksi penurunan muka tanah (land subsidence akibat eksploitasi air tanah), kenaikan permukaan air laut global, serta pola permukiman padat di dataran aluvial pantai.',
        takeaway: 'Masalah lingkungan tidak dapat diselesaikan hanya dengan pendekatan teknis bendungan; diperlukan analisis komprehensif tata ruang spasial dan perlindungan akuifer.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Interaksi Sistem Geosfer',
        caption: 'Diagram keterkaitan antarsistem geosfer: Litosfer, Atmosfer, Hidrosfer, Biosfer, dan Antroposfer.',
        badge: 'Geosfer System'
      }
    ],
    terminology: [
      { term: 'Geosfer', definition: 'Lapisan yang mencakup seluruh komponen bumi yang saling berinteraksi: litosfer, hidrosfer, atmosfer, biosfer, dan antroposfer.', scientificTerm: 'Geosphere' },
      { term: 'Diferensiasi Area', definition: 'Karakteristik unik dan perbedaan potensi atau kondisi fisik antarwilayah di muka bumi.', scientificTerm: 'Areal Differentiation' },
      { term: 'Ruang (Space)', definition: 'Wadah yang meliputi ruang darat, ruang laut, dan ruang udara termasuk ruang di dalam bumi sebagai satu kesatuan wilayah.', scientificTerm: 'Spatial Domain' }
    ],
    summary: [
      'Geografi adalah ilmu sintesis yang mempelajari persamaan dan perbedaan fenomena geosfer dalam konteks keruangan, kelingkungan, dan kewilayahan.',
      'Ruang lingkup kajian mencakup 5 komponen geosfer utama yang saling berjalin kelindan.',
      'Pendekatan geografi membekali peserta didik dengan kecerdasan spasial untuk memecahkan krisis lingkungan dan pembangunan.'
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'Menurut Seminar dan Lokakarya IGI di Semarang tahun 1988, definisi geografi memfokuskan kajian pada...',
        options: [
          'Hanya pemetaan batas wilayah negara dan kontur pegunungan',
          'Persamaan dan perbedaan fenomena geosfer dengan sudut pandang kelingkungan dan kewilayahan dalam konteks keruangan',
          'Sejarah peradaban kuno dan fosil batuan purba',
          'Pencatatan statistik populasi dan perdagangan komoditas semata'
        ],
        correctAnswer: 1,
        explanation: 'Hasil Semlok IGI 1988 secara formal merumuskan geografi sebagai telaah persamaan dan perbedaan fenomena geosfer melalui sudut pandang kelingkungan dan kewilayahan dalam konteks keruangan.'
      },
      {
        id: 'q1-2',
        question: 'Siapakah ilmuwan Yunani Kuno yang pertama kali menggunakan istilah "geographika" dan menghitung keliling bumi?',
        options: ['Aristoteles', 'Claudius Ptolemaeus', 'Eratosthenes', 'Alexander von Humboldt'],
        correctAnswer: 2,
        explanation: 'Eratosthenes dikenal sebagai Bapak Geografi karena karya ilmiahnya "Geographika" dan eksperimen pengukuran busur meridian Syene–Alexandria.'
      }
    ],
    references: ['Ikatan Geograf Indonesia (IGI), 1988', 'Bintarto, R. (1987). Penuntun Geografi Sosial. Yogyakarta: UP Spring.', 'Haggett, P. (2001). Geography: A Global Synthesis. Prentice Hall.'],
    relatedTopicIds: ['sejarah-perkembangan-ilmu-geografi', 'objek-studi-geografi', 'konsep-esensial-geografi', 'prinsip-prinsip-geografi']
  },
  {
    id: 'sejarah-perkembangan-ilmu-geografi',
    number: 2,
    title: 'Sejarah Perkembangan Ilmu Geografi',
    englishTitle: 'Historical Evolution of Geographic Thought',
    categoryId: 'dasar-geografi',
    difficulty: 'Intermediate',
    description: 'Menelusuri evolusi pemikiran geografi dari era Klasik, Abad Pertengahan Islam, Zaman Penjelajahan Samudra, Geografi Modern hingga Revolusi Kuantitatif.',
    keywords: ['geografi klasik', 'abad penjelajahan', 'revolusi kuantitatif', 'posibilisme', 'determinisme lingkungan'],
    learningObjectives: [
      'Menelusuri tahapan penting perkembangan paradigma pemikiran geografi dari masa ke masa.',
      'Membandingkan paradigma determinisme lingkungan (fisis determinis) dan posibilisme.',
      'Menjelaskan dampak revolusi kuantitatif dan teknologi komputasi terhadap metodologi geografi kontemporer.'
    ],
    introduction: 'Perjalanan pemikiran geografi mencerminkan transformasi cara pandang manusia terhadap bumi. Dari catatan deskriptif perjalanan (logbook para pedagang Yunani dan pelaut Romawi), zaman keemasan geografi Islam abad pertengahan dengan karya monumental Al-Idrisi dan Ibnu Battuta, era Age of Discovery, hingga perdebatan filosofis antara determinisme fisik dan posibilisme pada awal abad ke-20.',
    sections: [
      {
        subtitle: '1. Periodisasi Perkembangan Geografi',
        content: 'Perkembangan geografi dibagi menjadi empat fase utama: Geografi Klasik (uraian mitologis dan matematis awal), Geografi Abad Pertengahan (kontribusi peradaban Islam seperti Al-Biruni dan Al-Idrisi), Geografi Abad Penjelajahan (pemetaan kartografi global pasca Columbus dan Magellan), serta Geografi Modern abad 19-20 yang dipelopori Humboldt dan Ritter.',
        keyPoints: [
          'Zaman Keemasan Islam: Tabula Rogeriana oleh Al-Idrisi (1154) merupakan peta dunia terlengkap di zamannya.',
          'Geografi Modern: Pergeseran dari sekadar katalogisasi tempat menuju analisis kausalitas ilmiah sistematis.',
          'Revolusi Kuantitatif (1950-an): Penggunaan model matematis, statistik spasial, dan teori graf dalam geografi.'
        ]
      },
      {
        subtitle: '2. Perdebatan Paradigma: Fisis Determinis vs Posibilisme',
        content: 'Fisis Determinis (tokoh: Ellsworth Huntington dan Friedrich Ratzel) meyakini bahwa kondisi alam dan iklim menentukan sepenuhnya watak, peradaban, dan kemajuan manusia. Sebaliknya, Posibilisme (tokoh: Paul Vidal de la Blache) berpendapat bahwa alam hanya menyediakan pilihan atau kemungkinan (possibilities), dan manusialah dengan akal serta teknologinya yang memilih cara merespons.',
        table: {
          headers: ['Aspek', 'Fisis Determinis', 'Posibilisme'],
          rows: [
            ['Pandangan Alam', 'Faktor dominan yang mutlak mengendalikan manusia', 'Penyedia alternatif dan peluang hidup'],
            ['Peran Manusia', 'Pasif, dibentuk oleh iklim dan topografi', 'Aktif, agen pengubah lingkungan (kultur spasial)'],
            ['Tokoh Kunci', 'Friedrich Ratzel, Ellsworth Huntington', 'Paul Vidal de la Blache'],
            ['Contoh', 'Iklim tropis dianggap membuat bangsa malas (teori bias era kolonial)', 'Pertanian terasering di lereng curam Pulau Jawa dan Bali']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Paradigma Utama Pemikiran Geografi',
        items: [
          { name: 'Paradigma Eksploratif', description: 'Fokus pada penemuan dan pencatatan wilayah-wilayah baru di bumi.' },
          { name: 'Paradigma Regional (Chorology)', description: 'Fokus pada keunikan karakter dan kepribadian masing-masing wilayah (landscape synthesis).' },
          { name: 'Paradigma Spasial Kuantitatif', description: 'Penerapan hukum geometri, model difusi spasial, dan pemodelan statistik.' },
          { name: 'Paradigma Kritis & Humanistik', description: 'Mengkritisi ketimpangan sosial-spasial, keadilan lingkungan, dan persepsi ruang manusia.' }
        ]
      }
    ],
    processes: [
      { stage: 'Era Kuno', title: 'Deskripsi & Kosmografi', description: 'Pencatatan cerita perjalanan pelaut dan pengukuran astronomis bumi.' },
      { stage: 'Era Kolonial', title: 'Kartografi & Navigasi', description: 'Pemetaan rute perdagangan rempah-rempah dan klaim teritorial imperium dunia.' },
      { stage: 'Era Modern', title: 'Sintesis Geosfer & Digital', description: 'Integrasi sistemik sains kebumian, citra satelit, dan komputasi SIG.' }
    ],
    caseStudies: [
      {
        title: 'Sistem Subak di Bali sebagai Bukti Kemenangan Posibilisme',
        location: 'Bali, Indonesia',
        description: 'Masyarakat Bali tidak menyerah pada topografi pegunungan terjal dan sungai beraliran dalam. Melalui sistem terasering dan organisasi adat Subak berlandaskan filosofi Tri Hita Karana, mereka mampu merekayasa hidrologi lereng menjadi persawahan subur dan diakui sebagai Warisan Dunia UNESCO.',
        takeaway: 'Teknologi kultural membuktikan bahwa manusia adalah pengelola dinamis ruang lingkungan, bukan budak pasif kondisi fisik bentang alam.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Evolusi Representasi Peta Dunia',
        caption: 'Perbandingan Peta Ptolemaeus (150 M), Tabula Rogeriana Al-Idrisi (1154), dan Peta Dunia Proyeksi Modern.',
        badge: 'Historical Cartography'
      }
    ],
    terminology: [
      { term: 'Fisis Determinis', definition: 'Paham geografi yang menyatakan bahwa seluruh kebudayaan dan takdir manusia ditentukan oleh kondisi lingkungan fisik.', scientificTerm: 'Environmental Determinism' },
      { term: 'Posibilisme', definition: 'Paham geografi yang menyatakan bahwa lingkungan alam menawarkan banyak peluang bagi manusia untuk berkreasi dan beradaptasi.', scientificTerm: 'Possibilism' },
      { term: 'Revolusi Kuantitatif', definition: 'Pergeseran metodologis dalam geografi pada tahun 1950-1960 yang mengadopsi analisis statistik dan model matematika formal.', scientificTerm: 'Quantitative Revolution' }
    ],
    summary: [
      'Geografi berkembang dari deskripsi penjelajahan menjadi disiplin sains spasial terstruktur.',
      'Perdebatan determinisme versus posibilisme membentuk fondasi pemahaman relasi manusia-lingkungan.',
      'Revolusi kuantitatif dan teknologi informasi mentransformasi geografi menjadi sains analisis data spasial modern.'
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'Paham geografi yang berpendapat bahwa alam hanya memberikan peluang atau potensi, sementara manusialah penentu pengembangannya adalah...',
        options: ['Determinisme lingkungan', 'Posibilisme', 'Mekanisisme', 'Fatalisme geografis'],
        correctAnswer: 1,
        explanation: 'Posibilisme yang dipelopori Paul Vidal de la Blache menegaskan bahwa manusia memiliki kehendak bebas dan daya cipta untuk memanfaatkan kemungkinan yang disediakan alam.'
      },
      {
        id: 'q2-2',
        question: 'Karya kartografi paling komprehensif pada abad pertengahan "Tabula Rogeriana" dibuat oleh geograf Muslim bernama...',
        options: ['Ibnu Battuta', 'Al-Idrisi', 'Al-Khawarizmi', 'Ibnu Khaldun'],
        correctAnswer: 1,
        explanation: 'Muhammad Al-Idrisi menyelesaikan peta monumental Tabula Rogeriana pada tahun 1154 atas permintaan Raja Roger II dari Sisilia.'
      }
    ],
    references: ['Livingstone, D. N. (1992). The Geographical Tradition. Blackwell.', 'Peet, R. (1998). Modern Geographical Thought. Wiley-Blackwell.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'konsep-esensial-geografi', 'cabang-cabang-ilmu-geografi']
  },
  {
    id: 'objek-studi-geografi',
    number: 3,
    title: 'Objek Studi Geografi',
    englishTitle: 'Objects of Study in Geography: Material and Formal',
    categoryId: 'dasar-geografi',
    difficulty: 'Beginner',
    description: 'Membedah objek material geografi (seluruh komponen geosfer) dan objek formal geografi (sudut pandang keruangan, kelingkungan, dan kompleks wilayah).',
    keywords: ['objek material', 'objek formal', 'geosfer', 'sudut pandang keruangan', 'antroposfer'],
    learningObjectives: [
      'Membedakan dengan tegas antara objek material dan objek formal dalam studi geografi.',
      'Menyebutkan dan menjelaskan 5 lapisan geosfer yang membentuk objek material geografi.',
      'Menganalisis objek formal geografi melalui kacamata keruangan, kelingkungan, dan kompleks wilayah.'
    ],
    introduction: 'Setiap cabang disiplin ilmu memiliki dua macam objek telaah: objek material (apa yang dipelajari) dan objek formal (bagaimana cara mempelajarinya). Objek material geografi sama dengan sejumlah disiplin ilmu lain seperti geologi, meteorologi, biologi, dan sosiologi, yaitu fenomena geosfer. Namun, yang membuat geografi unik dan mandiri adalah objek formalnya, yaitu sudut pandang keruangan (spatial perspective) yang menautkan dimensi fisik dan manusia dalam satu kesatuan teritorial.',
    sections: [
      {
        subtitle: '1. Objek Material Geografi: Lapisan Geosfer',
        content: 'Objek material mencakup seluruh isi permukaan bumi yang dikelompokkan ke dalam 5 lapisan fisik dan insani: Litosfer (batuan kerak bumi), Atmosfer (lapisan gas pembungkus bumi), Hidrosfer (semua wujud air permukaan dan tanah), Biosfer (kehidupan flora dan fauna), serta Antroposfer (aktivitas, demografi, dan budaya manusia).',
        keyPoints: [
          'Litosfer: Dinamika lempeng, vulkanisme, jenis tanah, dan geomorfologi.',
          'Atmosfer: Variasi suhu udara, tekanan, kelembapan, angin, dan dinamika iklim.',
          'Hidrosfer: Sungai, danau, rawa, air freatik/artesis, dan samudra.',
          'Biosfer: Sebaran bioma hutan hujan tropis, sabana, taiga, hingga tundra.',
          'Antroposfer: Pola permukiman, struktur mata pencaharian, migrasi, dan tata guna lahan.'
        ]
      },
      {
        subtitle: '2. Objek Formal Geografi: Sudut Pandang Khas',
        content: 'Objek formal adalah metode atau pendekatan khusus yang digunakan dalam menganalisis substansi material. Objek formal geografi menjawab serangkaian pertanyaan fundamental: Region mana peristiwa itu terjadi? Pola persebaran spasial apa yang tampak? Mengapa terjadi relasi antarunsur di tempat tersebut? Bagaimana cara mengoptimalkan pemanfaatan ruang tanpa merusak ekosistem?',
        table: {
          headers: ['Pendekatan Objek Formal', 'Fokus Utama Analisis', 'Contoh Aplikasi Nyata'],
          rows: [
            ['Pendekatan Keruangan (Spatial)', 'Sebaran, pola, jarak, dan aksesibilitas fenomena', 'Analisis lokasi pembangunan rumah sakit rujukan baru di suatu kabupaten'],
            ['Pendekatan Kelingkungan (Ecological)', 'Interaksi organisme (khususnya manusia) dengan habitat fisiknya', 'Dampak penebangan hutan hulu terhadap sedimentasi bendungan hilir'],
            ['Pendekatan Kompleks Wilayah (Regional Complex)', 'Kombinasi pola keruangan dan interaksi fungsional antarwilayah', 'Program kerja sama penyediaan pangan Jabodetabek dengan daerah sentra padi Jawa Barat']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Komponen Objek Material Geosfer',
        items: [
          { name: 'Abiotik', description: 'Unsur anorganik tak hidup: batuan, mineral, air, udara, suhu, kelembapan.' },
          { name: 'Biotik', description: 'Unsur organisme hidup: vegetasi alami, mikroorganisme, fauna liar.' },
          { name: 'Kultural / Sosial', description: 'Segala wujud artefak dan sosiofak manusia: kota, desa, jalan raya, sawah, industri.' }
        ]
      }
    ],
    processes: [
      { stage: 'Observasi', title: 'Pencatatan Gejala Geosfer', description: 'Mengamati dan mendokumentasikan fenomena fisik atau sosial di lapangan.' },
      { stage: 'Korelasional', title: 'Pencarian Relasi Kaidah', description: 'Menghubungkan variabel spasial (contoh: curah hujan dengan jenis vegetasi).' },
      { stage: 'Sintesis Wilayah', title: 'Perumusan Kesimpulan Ruang', description: 'Menghasilkan peta tematik dan rekomendasi tata kelola kewilayahan.' }
    ],
    caseStudies: [
      {
        title: 'Analisis Objek Formal pada Bencana Gempa dan Tsunami Palu 2018',
        location: 'Teluk Palu, Sulawesi Tengah, Indonesia',
        description: 'Kajian bencana Palu 2018 melibatkan litosfer (pergeseran mendatar sesar Palu-Koro), hidrosfer (tsunami akibat longsor bawah laut di Teluk Palu), antroposfer (likuefaksi yang melanda permukiman padat Petobo dan Balaroa). Objek formal geografi mengkaji zonasi bahaya merah untuk relokasi hunian tetap.',
        takeaway: 'Kajian geografi menyatukan data geologi batuan dengan mitigasi penataan ruang permukiman warga.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Matriks Objek Material dan Objek Formal Geografi',
        caption: 'Diagram visual irisan 5 lapisan geosfer yang dipandang melalui lensa keruangan, kelingkungan, dan kompleks wilayah.',
        badge: 'Spatial Epistemology'
      }
    ],
    terminology: [
      { term: 'Objek Material', definition: 'Substansi atau ranah fenomena nyata di permukaan bumi yang menjadi bahan kajian keilmuan geografi.', scientificTerm: 'Material Object' },
      { term: 'Objek Formal', definition: 'Cara pandang, pendekatan, dan metode khas geografi dalam menganalisis objek material.', scientificTerm: 'Formal Object' },
      { term: 'Antroposfer', definition: 'Lapisan manusia dan lingkup aktivitas sosio-ekonominya di permukaan bumi.', scientificTerm: 'Anthroposphere' }
    ],
    summary: [
      'Objek material geografi adalah geosfer (litosfer, atmosfer, hidrosfer, biosfer, dan antroposfer).',
      'Objek formal adalah metode pendekatan khas geografi melalui sudut pandang keruangan, kelingkungan, dan kompleks wilayah.',
      'Keunikan geografi terletak pada kemampuannya mensintesiskan fenomena alam dan manusia dalam konteks spasial.'
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'Hal yang membedakan geografi dari disiplin ilmu kebumian lainnya (seperti geologi atau meteorologi) terutama terletak pada...',
        options: [
          'Objek material yang diteliti',
          'Objek formal atau sudut pandang keruangan dalam mengkaji fenomena geosfer',
          'Penggunaan alat laboratorium kimia',
          'Subjek peneliti yang harus berasal dari kalangan akademisi murni'
        ],
        correctAnswer: 1,
        explanation: 'Geografi membagi objek material yang serupa dengan ilmu lain (alam dan manusia), tetapi objek formalnya (sudut pandang keruangan, kelingkungan, dan kewilayahan) menjadikannya disiplin tersendiri.'
      },
      {
        id: 'q3-2',
        question: 'Fenomena persebaran permukiman kumuh (slum area) di bantaran sungai perkotaan termasuk dalam kajian lapisan...',
        options: ['Litosfer', 'Hidrosfer', 'Biosfer', 'Antroposfer'],
        correctAnswer: 3,
        explanation: 'Permukiman manusia dan dinamika kependudukan merupakan bagian sentral dari kajian lapisan antroposfer.'
      }
    ],
    references: ['Sumaatmadja, N. (1988). Studi Geografi: Suatu Pendekatan dan Analisa Keruangan. Bandung: Alumni.', 'Rhoads, B. L. (2004). Conceptualizing the Earth Surface System. Geomorphology.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'aspek-fisik-dan-sosial-geografi', 'pendekatan-geografi']
  },
  {
    id: 'aspek-fisik-dan-sosial-geografi',
    number: 4,
    title: 'Aspek Fisik dan Sosial Geografi',
    englishTitle: 'Physical and Social Aspects of Geography',
    categoryId: 'dasar-geografi',
    difficulty: 'Beginner',
    description: 'Mengkaji pembagian aspek fisik (topologi, abiotik, biotik) dan aspek sosial (ekonomi, antropologi, politik, kependudukan) serta titik temu keduanya.',
    keywords: ['aspek fisik', 'aspek sosial', 'aspek topologi', 'aspek biotik', 'geografi manusia'],
    learningObjectives: [
      'Menguraikan tiga pilar utama dalam aspek fisik geografi (topologi, abiotik, dan biotik).',
      'Menjelaskan komponen-komponen utama dalam aspek sosial geografi (kependudukan, ekonomi, budaya, dan politik).',
      'Menganalisis contoh integrasi aspek fisik dan aspek sosial dalam memecahkan isu pembangunan.'
    ],
    introduction: 'Geografi kerap dijuluki sebagai "Mother of Sciences" sekaligus jembatan (bridge discipline) antara ilmu alam (natural sciences) dan ilmu sosial (social sciences). Realitas di permukaan bumi tidak pernah berdiri sendiri secara murni fisik atau murni sosial. Erupsi gunung berapi adalah peristiwa fisik, namun evakuasi pengungsi, kehancuran lahan pertanian, dan rekonstruksi perumahan adalah persoalan sosial. Pembagian aspek fisik dan sosial membantu memetakan rantai kausalitas fenomena secara terstruktur.',
    sections: [
      {
        subtitle: '1. Rincian Aspek Fisik Geografi',
        content: 'Aspek fisik mengkaji seluruh unsur geosfer yang bersifat alami dan bekerja berdasarkan hukum-hukum alam (nature). Aspek fisik dibagi menjadi tiga domain utama: Aspek Topologi (posisi, bentuk, ukuran, batas teritorial), Aspek Abiotik (tanah, batuan, air, iklim), dan Aspek Biotik (flora, fauna, mikroba).',
        keyPoints: [
          'Aspek Topologi: Letak strategis Selat Malaka, bentuk negara kepulauan Indonesia (archipelagic state).',
          'Aspek Abiotik: Kesuburan tanah andosol di lereng gunung api, debit air Sungai Kapuas.',
          'Aspek Biotik: Sebaran kayu ulin di Kalimantan, habitat komodo di Nusa Tenggara Timur.'
        ]
      },
      {
        subtitle: '2. Rincian Aspek Sosial (Manusia) Geografi',
        content: 'Aspek sosial mengkaji manusia sebagai agen pembentuk bentang budaya (cultural landscape). Unsur-unsur ini mencakup aspek sosial kemasyarakatan, aspek ekonomi (pemanfaatan sumber daya), aspek budaya (kearifan lokal, bahasa), serta aspek politik (batas wilayah negara, kedaulatan batas teritorial maritim).',
        table: {
          headers: ['Aspek', 'Fokus Utama', 'Variabel yang Dianalisis', 'Contoh Kajian'],
          rows: [
            ['Sosial-Demografi', 'Populasi dan manusia', 'Kelahiran, kematian, migrasi, kepadatan', 'Urbanisasi pasca libur Idulfitri ke kawasan Jabodetabek'],
            ['Ekonomi', 'Kegiatan produksi-konsumsi', 'Pasar, transportasi, industri, pariwisata', 'Agroindustri kelapa sawit di Riau dan Sumatera Utara'],
            ['Budaya', 'Adat dan pola hidup', 'Rumah adat, sistem nilai, adaptasi iklim', 'Arsitektur rumah panggung suku Bajo di atas air laut'],
            ['Politik', 'Batas dan kedaulatan', 'Geopolitik, batas ZEE, tata batas negara', 'Sengketa perbatasan wilayah Blok Ambalat di Laut Sulawesi']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Aspek Geografi',
        items: [
          { name: 'Aspek Fisik - Topologi', description: 'Mencakup letak astronomis, letak geografis, luas wilayah, dan morfologi bentuk negara.' },
          { name: 'Aspek Fisik - Non-Biotik', description: 'Karakteristik tanah, jenis batuan, hidrologi, iklim dan cuaca.' },
          { name: 'Aspek Fisik - Biotik', description: 'Komunitas vegetasi tumbuhan dan hewan dalam bioma tertentu.' },
          { name: 'Aspek Non-Fisik / Sosial', description: 'Kelembagaan sosial, dinamika demografi, relasi pasar ekonomi, dan sistem hukum adat.' }
        ]
      }
    ],
    processes: [
      { stage: 'Trigger Alami', title: 'Fenomena Fisik Terjadi', description: 'Misal: Terjadinya kemarau panjang akibat anomali iklim El Niño.' },
      { stage: 'Respon Sosial', title: 'Dampak pada Sistem Manusia', description: 'Gagal panen padi, lonjakan harga beras di pasar, migrasi musiman tenaga kerja tani.' },
      { stage: 'Mitigasi Spasial', title: 'Intervensi Tata Ruang', description: 'Pembangunan embung dan bendungan retensi, peralihan varietas tanaman tahan kering.' }
    ],
    caseStudies: [
      {
        title: 'Interaksi Aspek Fisik dan Sosial pada Tradisi Menghuni Lereng Gunung Merapi',
        location: 'Sleman, DI Yogyakarta, Indonesia',
        description: 'Secara fisik lereng Merapi memiliki bahaya awan panas (wedhus gembel) dan lahar dingin. Namun secara sosial-ekonomi, tanah vulkanis yang sangat subur, sumber air melimpah, dan material pasir bernilai ekonomi tinggi menarik ribuan warga untuk tetap bermukim di sana, diperkuat ikatan kultural juru kunci keraton.',
        takeaway: 'Rekomendasi relokasi tidak akan berhasil jika hanya mempertimbangkan aspek bahaya fisik tanpa memperhitungkan aspek keterikatan sosial-ekonomi masyarakat.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Peta Konsep Aspek Fisik dan Aspek Sosial Geografi',
        caption: 'Bagan pembagian aspek fisik (topologi, abiotik, biotik) dan aspek sosial (ekonomi, budaya, politik) berserta irisannya.',
        badge: 'Dual Aspects'
      }
    ],
    terminology: [
      { term: 'Aspek Topologi', definition: 'Aspek fisik geografi yang mempelajari batas, luas, bentuk permukaan, dan letak relatif suatu wilayah di bumi.', scientificTerm: 'Topological Aspect' },
      { term: 'Bentang Budaya', definition: 'Bentang alam yang telah diubah, ditata, atau dimodifikasi oleh aktivitas peradaban manusia.', scientificTerm: 'Cultural Landscape' },
      { term: 'Keterikatan Tempat', definition: 'Ikatan emosional dan kultural yang mendalam antara individu atau komunitas dengan wilayah geografis tertentu.', scientificTerm: 'Place Attachment' }
    ],
    summary: [
      'Aspek geografi terbagi menjadi aspek fisik (kondisi alamiah) dan aspek sosial (aktivitas manusia).',
      'Aspek fisik terdiri dari aspek topologi, abiotik, dan biotik.',
      'Geografi menjadi sains integratif yang menganalisis titik temu antara ekosistem alam dan kehidupan sosial manusia.'
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Manakah dari fenomena berikut yang tergolong dalam aspek fisik topologi?',
        options: [
          'Jenis tanah aluvial di lembah Sungai Solo',
          'Letak strategis Indonesia di antara Samudra Hindia dan Pasifik',
          'Persebaran orangutan di Hutan Hujan Kalimantan Barat',
          'Tingkat pengangguran terbuka di kawasan perkotaan metropolitan'
        ],
        correctAnswer: 1,
        explanation: 'Aspek topologi mengkaji letak, bentuk batas, dan posisi geografis wilayah di muka bumi.'
      },
      {
        id: 'q4-2',
        question: 'Dampak kekeringan terhadap gagal panen petani dan inflasi harga pangan di pasar merupakan contoh integrasi antara...',
        options: [
          'Aspek fisik murni dan astronomi',
          'Aspek fisik (abiotik iklim) dengan aspek sosial (ekonomi)',
          'Aspek biotik dan topologi',
          'Aspek politik internasional dan geologi tektonik'
        ],
        correctAnswer: 1,
        explanation: 'Kekeringan merupakan fenomena fisik abiotik iklim, sementara gagal panen dan inflasi harga adalah dampak ekonomi pada aspek sosial.'
      }
    ],
    references: ['Strahler, A. (2013). Introducing Physical Geography. John Wiley & Sons.', 'Johnston, R. J. (2000). The Dictionary of Human Geography. Blackwell.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'objek-studi-geografi', 'konsep-esensial-geografi']
  },
  {
    id: 'konsep-esensial-geografi',
    number: 5,
    title: 'Konsep Esensial Geografi',
    englishTitle: 'The 10 Essential Concepts of Geography',
    categoryId: 'dasar-geografi',
    difficulty: 'Intermediate',
    description: 'Menguasai 10 konsep esensial geografi hasil Semlok IGI 1988: Lokasi, Jarak, Keterjangkauan, Pola, Morfologi, Aglomerasi, Nilai Kegunaan, Interaksi/Interdependensi, Diferensiasi Area, dan Keterkaitan Keruangan.',
    keywords: ['10 konsep geografi', 'aglomerasi', 'diferensiasi area', 'keterjangkauan', 'interdependensi', 'lokasi absolut dan relatif'],
    learningObjectives: [
      'Menyebutkan dan menguraikan 10 konsep esensial geografi menurut IGI 1988.',
      'Membedakan lokasi absolut versus relatif dan jarak absolut versus relatif.',
      'Mengaplikasikan 10 konsep esensial dalam menganalisis fenomena kehidupan sehari-hari di Indonesia.'
    ],
    introduction: 'Dalam memahami dunia yang kompleks, para geograf merumuskan 10 konsep esensial (10 fundamental geographic concepts) sebagai pisau analisis baku dalam kurikulum geografi nasional. Sepuluh konsep ini adalah bahasa kerja geograf dalam membaca ruang: Lokasi, Jarak, Keterjangkauan, Pola, Morfologi, Aglomerasi, Nilai Kegunaan, Interaksi & Interdependensi, Diferensiasi Area, dan Keterkaitan Keruangan.',
    sections: [
      {
        subtitle: '1. Rincian 10 Konsep Esensial Geografi',
        content: 'Sepuluh konsep ini menjadi kerangka operasional ketika menginvestigasi fenomena apa pun di geosfer. Konsep ini saling melengkapi dan tidak berdiri terisolasi.',
        table: {
          headers: ['Konsep', 'Definisi Ilmiah', 'Contoh Kasus Nyata'],
          rows: [
            ['1. Lokasi', 'Posisi titik objek di muka bumi, baik absolut (koordinat lintang/bujur) maupun relatif (terhadap objek lain).', 'Indonesia terletak di 6°LU–11°LS (absolut); dekat dengan Singapura di Selat Malaka (relatif).'],
            ['2. Jarak', 'Pemisah geometris antarruang, baik terukur pasti (km, mil) maupun relatif (waktu tempuh, ongkos biaya).', 'Jarak Jakarta–Surabaya 780 km (panjang jalan tol) atau 9 jam perjalanan darat.'],
            ['3. Keterjangkauan (Accessibility)', 'Tingkat kemudahan akses mencapai suatu tempat berdasarkan ketersediaan sarana transportasi dan medan.', 'Pulau terluar Maluku sulit dijangkau saat ombak tinggi meski jarak garis lurus tidak terlalu jauh.'],
            ['4. Pola (Pattern)', 'Susunan geometris atau sebaran fenomena di ruang permukaan bumi.', 'Pola permukiman memanjang (linier) di sepanjang rel kereta api dan garis pantai.'],
            ['5. Morfologi', 'Bentuk relief permukaan bumi hasil dari tenaga endogen dan eksogen.', 'Kawasan karst Gunungkidul memiliki bentang alam bukit kerucut, gua, dan sungai bawah tanah.'],
            ['6. Aglomerasi', 'Kecenderungan pengelompokan aktivitas manusia atau industri pada wilayah strategis tertentu.', 'Kawasan Industri Jababeka Cikarang mengelompokkan ratusan pabrik manufaktur otomotif.'],
            ['7. Nilai Kegunaan', 'Kemanfaatan relatif suatu ruang bagi kelompok manusia yang berbeda.', 'Kawasan pantai pasir putih bernilai tinggi bagi wisatawan, namun bernilai sebagai tempat sandar perahu bagi nelayan.'],
            ['8. Interaksi & Interdependensi', 'Hubungan timbal balik dan saling ketergantungan antardua ruang atau lebih.', 'Desa mengirim bahan pangan ke kota, sementara kota memasok barang industri dan pupuk ke desa.'],
            ['9. Diferensiasi Area', 'Karakteristik unik yang membedakan satu wilayah dengan wilayah lainnya.', 'Dataran tinggi Dieng menghasilkan kentang dan teh, sedangkan dataran rendah Pantura memproduksi garam dan ikan.'],
            ['10. Keterkaitan Keruangan', 'Tingkat hubungan sebab-akibat antarwilayah di muka bumi.', 'Kebakaran hutan di Riau menyebabkan kabut asap pekat melintasi batas negara hingga Singapura dan Malaysia.']
          ]
        }
      },
      {
        subtitle: '2. Cara Menganalisis Kasus dengan Konsep Esensial',
        content: 'Dalam ujian dan penelitian, peserta didik harus mampu mengidentifikasi kata kunci konsep dalam studi kasus. Misalnya jika soal membicarakan "pengelompokan pabrik" itu merujuk Aglomerasi; jika membicarakan "waktu tempuh 2 jam karena jalan rusak" itu merujuk Keterjangkauan (bukan semata Jarak).',
        keyPoints: [
          'Aglomerasi vs Pola: Aglomerasi menyoroti pemusatan aktivitas karena keuntungan ekonomi/sosial; Pola menyoroti bentuk susunan spasialnya (memanjang, radial, menyebar).',
          'Diferensiasi Area vs Keterkaitan Ruang: Diferensiasi menekankan perbedaan karakteristik; Keterkaitan menyoroti dampak sebab-akibat lintas wilayah.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Kategori Konsep Berdasarkan Sifat Ruang',
        items: [
          { name: 'Konsep Geometris / Metrik', description: 'Lokasi, Jarak, Pola, Keterjangkauan, dan Morfologi.' },
          { name: 'Konsep Relasional / Fungsional', description: 'Aglomerasi, Nilai Kegunaan, Interaksi, Diferensiasi Area, dan Keterkaitan Keruangan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Identifikasi Titik', title: 'Penetapan Lokasi & Morfologi', description: 'Menentukan posisi koordinat absolut dan bentuk bentang lahannya.' },
      { stage: 'Pemetaan Pola & Akses', title: 'Keterjangkauan & Pola', description: 'Menganalisis kemudahan akses transportasi dan bentuk struktur permukiman.' },
      { stage: 'Analisis Relasi', title: 'Interaksi & Keterkaitan', description: 'Menilai aliran materi, energi, manusia, dan pengaruh timbal balik antarwilayah.' }
    ],
    caseStudies: [
      {
        title: 'Pemindahan Ibu Kota Negara ke IKN Nusantara Dilihat dari 10 Konsep',
        location: 'Penajam Paser Utara, Kalimantan Timur, Indonesia',
        description: 'Pemindahan IKN menerapkan konsep Lokasi (tengah wilayah NKRI), Morfologi (perbukitan bergelombang bebas gempa sesar aktif utama), Aglomerasi (pusat pemerintahan terpadu green city), dan Keterkaitan Keruangan (mendorong pertumbuhan ekonomi luar pulau Jawa/Indonesia Timur).',
        takeaway: 'Perencanaan megaproyek nasional mensyaratkan penerapan sinergis 10 konsep geografi agar tidak menimbulkan ketimpangan baru.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Roda 10 Konsep Esensial Geografi',
        caption: 'Diagram visual melingkar 10 konsep esensial geografi dengan ikon grafis dan definisi ringkas.',
        badge: 'Core Curriculum'
      }
    ],
    terminology: [
      { term: 'Aglomerasi Spasial', definition: 'Pengelompokan spasial perusahaan, penduduk, atau fasilitas untuk mencapai skala ekonomi efisien.', scientificTerm: 'Spatial Agglomeration' },
      { term: 'Aksesibilitas', definition: 'Derajat kemudahan suatu lokasi untuk dicapai dari lokasi lain melalui jaringan transportasi.', scientificTerm: 'Accessibility' },
      { term: 'Interdependensi', definition: 'Ketergantungan timbal balik antarwilayah di mana kekurangan satu wilayah dipenuhi oleh kelebihan wilayah lain.', scientificTerm: 'Interdependence' }
    ],
    summary: [
      'Sepuluh konsep esensial geografi dirumuskan oleh IGI Semarang 1988 sebagai standar analisis geosfer.',
      'Memahami perbedaan lokasi absolut-relatif serta jarak absolut-relatif sangat penting dalam studi keruangan.',
      'Konsep aglomerasi, diferensiasi area, dan keterkaitan keruangan menjadi dasar perencanaan pembangunan wilayah modern.'
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'Pengelompokan industri garmen dan tekstil di kawasan industri Majalaya, Bandung merupakan aplikasi dari konsep geografi...',
        options: ['Morfologi', 'Diferensiasi area', 'Aglomerasi', 'Nilai kegunaan'],
        correctAnswer: 2,
        explanation: 'Aglomerasi adalah pemusatan atau pengelompokan aktivitas manusia dan kegiatan industri pada suatu wilayah khusus guna memperoleh keuntungan efisiensi operasional.'
      },
      {
        id: 'q5-2',
        question: 'Meskipun jaraknya hanya 30 km dari pusat kota, Desa X sulit dicapai saat musim hujan karena jembatan penghubung putus dan jalannya berlumpur. Fenomena ini paling tepat dikaji menggunakan konsep...',
        options: ['Jarak absolut', 'Keterjangkauan (aksesibilitas)', 'Lokasi absolut', 'Pola keruangan'],
        correctAnswer: 1,
        explanation: 'Keterjangkauan tidak semata-mata diukur dari jarak fisik kilometer, melainkan ketersediaan dan kemudahan sarana transportasi mengatasi rintangan medan.'
      }
    ],
    references: ['Suharyono & Moch Amien. (1994). Pengantar Filsafat Geografi. Jakarta: Proyek Pembinaan Tenaga Kependidikan.', 'Getis, A., & Fellmann, J. (2011). Introduction to Geography. McGraw-Hill.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'prinsip-prinsip-geografi', 'pendekatan-geografi', 'wilayah-formal-dan-wilayah-fungsional']
  },
  {
    id: 'prinsip-prinsip-geografi',
    number: 6,
    title: 'Prinsip-Prinsip Geografi',
    englishTitle: 'The Four Fundamental Principles of Geography',
    categoryId: 'dasar-geografi',
    difficulty: 'Beginner',
    description: 'Menelaah empat pilar prinsip operasional analisis geografi: Prinsip Persebaran (Distribusi), Interelasi, Deskripsi, dan Korologi.',
    keywords: ['prinsip distribusi', 'prinsip interelasi', 'prinsip deskripsi', 'prinsip korologi', 'metode geografi'],
    learningObjectives: [
      'Menjelaskan pengertian dan fungsi 4 prinsip dasar geografi.',
      'Mengidentifikasi prinsip persebaran dan interelasi dalam berbagai kasus bencana dan fenomena sosial.',
      'Menerapkan prinsip korologi sebagai sintesis puncak analisis geografi yang komprehensif.'
    ],
    introduction: 'Untuk mengkaji fenomena geosfer secara ilmiah, geografi berpegang pada 4 prinsip dasar kerja: Prinsip Persebaran (Distribusi), Prinsip Interelasi (Keterkaitan), Prinsip Deskripsi (Penjelasan/Penyajian), dan Prinsip Korologi (Sintesis Kewilayahan). Empat prinsip ini menjamin bahwa setiap investigasi geografi tidak berhenti pada sekadar menyebutkan data, melainkan menelusuri rantai kausalitas dan menampilkannya secara transparan dalam peta, tabel, maupun model keruangan.',
    sections: [
      {
        subtitle: '1. Rincian 4 Prinsip Dasar Geografi',
        content: 'Keempat prinsip ini diterapkan secara berjenjang dari pengamatan sebaran hingga sintesis menyeluruh:',
        table: {
          headers: ['Prinsip', 'Kata Kunci & Karakteristik', 'Contoh Kasus Nyata'],
          rows: [
            ['1. Prinsip Persebaran (Distribusi)', 'Fenomena tidak tersebar merata di permukaan bumi; ada wilayah padat, jarang, atau nihil.', 'Persebaran tambang timah di Indonesia terkonsentrasi di Kepulauan Bangka Belitung dan Kundur.'],
            ['2. Prinsip Interelasi', 'Keterkaitan timbal balik antarfenomena dalam satu ruang (fisik-fisik, fisik-sosial, sosial-sosial).', 'Erosi tanah intensif di hulu akibat alih fungsi hutan menyebabkan sedimentasi cepat di waduk hilir.'],
            ['3. Prinsip Deskripsi', 'Penyajian fakta fenomena secara jelas melalui tulisan naratif, peta tematik, diagram, tabel, dan grafik data.', 'Peta sebaran zonasi gempa BMKG dilengkapi tabel magnitude, kedalaman hiposentrum, dan grafik dampak korban.'],
            ['4. Prinsip Korologi', 'Prinsip gabungan (sintesis) yang meninjau gejala dari segi persebarannya, interelasinya, dan interaksinya dalam ruang tertentu.', 'Kajian banjir Jakarta: memetakan sebaran genangan (distribusi), curah hujan hulu dan penyempitan kali (interelasi), disajikan dalam peta (deskripsi), lalu disintesiskan tata ruangnya (korologi).']
          ]
        }
      },
      {
        subtitle: '2. Prinsip Korologi sebagai Ciri Khas Puncak Geografi',
        content: 'Prinsip korologi (chorological principle) adalah mahkota pemikiran geografi yang digagas Alfred Hettner. Prinsip ini memandang wilayah bukan sebagai kumpulan titik acak, melainkan sebagai organisme spasial di mana komponen fisik dan biotik saling berinteraksi secara spesifik menciptakan kepribadian wilayah (character of regions).',
        keyPoints: [
          'Korologi menggabungkan aspek spasial, ekologikal, dan temporal secara simultan.',
          'Prinsip ini menjadi rujukan utama penyusunan rencana tata ruang wilayah (RTRW) di Indonesia.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Jenis Relasi dalam Prinsip Interelasi',
        items: [
          { name: 'Fisik dengan Fisik', description: 'Curah hujan tinggi di lereng terjal memicu tanah longsor.' },
          { name: 'Fisik dengan Manusia (Sosial)', description: 'Tanah vulkanik subur mendorong mata pencaharian pertanian hortikultura.' },
          { name: 'Manusia dengan Fisik', description: 'Penebangan hutan mangrove memicu abrasi pantai dan intrusi air laut.' },
          { name: 'Manusia dengan Manusia', description: 'Pembangunan jalan tol antarprovinsi memicu percepatan perdagangan antardaerah.' }
        ]
      }
    ],
    processes: [
      { stage: 'Langkah 1', title: 'Plotting Sebaran (Distribusi)', description: 'Memetakan titik-titik koordinat kejadian pada peta dasar.' },
      { stage: 'Langkah 2', title: 'Identifikasi Hubungan (Interelasi)', description: 'Mencari variabel pengendali dan korelasi timbal balik.' },
      { stage: 'Langkah 3', title: 'Penyajian Bukti (Deskripsi)', description: 'Menyajikan data dalam bentuk tabel, kurva tren, dan narasi ilmiah.' },
      { stage: 'Langkah 4', title: 'Sintesis Komprehensif (Korologi)', description: 'Merumuskan potret holistik kewilayahan beserta solusi mitigasi spasial.' }
    ],
    caseStudies: [
      {
        title: 'Kajian Korologi Karhutla dan Kabut Asap di Sumatera',
        location: 'Riau dan Sumatera Selatan, Indonesia',
        description: 'Penyelidikan kebakaran hutan dan lahan (karhutla) menerapkan prinsip persebaran (titik hotspot satelit MODIS/VIIRS), prinsip interelasi (kekeringan iklim El Niño dan pembukaan lahan gambut berbiaya murah), prinsip deskripsi (infografis konsentrasi PM2.5 BMKG), dan prinsip korologi (analisis dampak lintas batas negara dan evaluasi izin konsesi perkebunan).',
        takeaway: 'Hanya dengan pendekatan korologi, akar masalah lingkungan yang melibatkan hukum, ekonomi, dan iklim dapat diurai utuh.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Hierarki 4 Prinsip Geografi',
        caption: 'Bagan sintesis bagaimana Distribusi, Interelasi, dan Deskripsi berpadu menjadi Prinsip Korologi.',
        badge: 'Core Principles'
      }
    ],
    terminology: [
      { term: 'Prinsip Korologi', definition: 'Prinsip geografi komprehensif yang mengkaji fenomena geosfer melalui perpaduan persebaran, interelasi, dan deskripsi dalam ruang wilayah tertentu.', scientificTerm: 'Chorological Principle' },
      { term: 'Interelasi Keruangan', definition: 'Hubungan sebab-akibat timbal balik antara dua atau lebih unsur fisik maupun sosial di permukaan bumi.', scientificTerm: 'Spatial Interrelation' },
      { term: 'Pola Distribusi', definition: 'Cara fenomena geografi tersebar di suatu wilayah (acak, mengelompok, atau seragam).', scientificTerm: 'Distribution Pattern' }
    ],
    summary: [
      'Empat prinsip geografi adalah Distribusi, Interelasi, Deskripsi, dan Korologi.',
      'Prinsip persebaran menekankan ketidakmerataan fenomena di permukaan bumi.',
      'Prinsip korologi merupakan sintesis holistik yang menjadi ciri khas utama analisis geografis.'
    ],
    quiz: [
      {
        id: 'q6-1',
        question: 'Kajian yang menjelaskan bahwa tingginya angka abrasi di pantai utara Jawa terjadi akibat rusaknya hutan bakau (mangrove) dan penurunan tanah paling dominan menerapkan prinsip...',
        options: ['Distribusi', 'Interelasi', 'Deskripsi', 'Aglomerasi'],
        correctAnswer: 1,
        explanation: 'Prinsip interelasi mengkaji hubungan sebab-akibat timbal balik antara fenomena geosfer (rusaknya mangrove menyebabkan naiknya laju abrasi pantai).'
      },
      {
        id: 'q6-2',
        question: 'Prinsip geografi yang mengkombinasikan persebaran, hubungan timbal balik, dan penyajian data dalam konteks keruangan suatu wilayah secara komprehensif disebut...',
        options: ['Prinsip Korologi', 'Prinsip Deskripsi', 'Prinsip Morfologi', 'Prinsip Relativitas'],
        correctAnswer: 0,
        explanation: 'Prinsip Korologi adalah prinsip paling komprehensif yang memadukan prinsip persebaran, interelasi, dan deskripsi dalam satu kajian wilayah utuh.'
      }
    ],
    references: ['Hettner, A. (1927). Die Geographie: Ihre Geschichte, ihr Wesen und ihre Methoden.', 'Bintarto & Hadisumarno. (1991). Metode Analisa Geografi. LP3ES.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'konsep-esensial-geografi', 'pendekatan-geografi']
  },
  {
    id: 'pendekatan-geografi',
    number: 7,
    title: 'Pendekatan Geografi',
    englishTitle: 'Geographic Approaches: Spatial, Ecological, and Regional Complex',
    categoryId: 'dasar-geografi',
    difficulty: 'Intermediate',
    description: 'Menguasai tiga metodologi pendekatan utama geografi: Pendekatan Keruangan (Spasial), Pendekatan Kelingkungan (Ekologikal), dan Pendekatan Kompleks Wilayah.',
    keywords: ['pendekatan spasial', 'pendekatan ekologi', 'pendekatan kompleks wilayah', 'analisis keruangan', 'regional complex'],
    learningObjectives: [
      'Memahami metodologi kerja tiga pendekatan utama geografi.',
      'Membedakan fokus pertanyaan antara pendekatan keruangan, kelingkungan, dan kompleks wilayah.',
      'Menerapkan pendekatan geografi yang tepat dalam pemecahan masalah lingkungan dan tata ruang nyata.'
    ],
    introduction: 'Pendekatan geografi (geographical approach) adalah metode berpikir operasional ilmu geografi dalam membedah berbagai persoalan geosfer. Jika disiplin ilmu lain melihat fenomena berdasarkan substansinya (misalnya sosiologi melihat interaksi sosial, geologi melihat susunan batuan), geografi mendekati setiap masalah melalui tiga lensa metodologis: Pendekatan Keruangan (Spatial Approach), Pendekatan Kelingkungan (Ecological Approach), dan Pendekatan Kompleks Wilayah (Regional Complex Approach).',
    sections: [
      {
        subtitle: '1. Tiga Pendekatan Utama Geografi',
        content: 'Masing-masing pendekatan memiliki fokus variabel dan prosedur analisis yang khas:',
        table: {
          headers: ['Pendekatan', 'Fokus Pertanyaan Kunci', 'Variabel Utama', 'Contoh Kasus'],
          rows: [
            ['Pendekatan Keruangan (Spatial)', 'Di mana objek berada? Bagaimana pola sebarannya? Berapa jarak dan aksesnya?', 'Ruang (space), jarak, koordinat, arah, morfologi relief', 'Penentuan lokasi optimal pembangunan Tempat Pembuangan Akhir (TPA) sampah di luar zona permukiman'],
            ['Pendekatan Kelingkungan (Ekologikal)', 'Bagaimana manusia beradaptasi dengan alam? Bagaimana aktivitas manusia mengubah habitat fisik?', 'Interaksi organisme dengan lingkungan abiotik, rantai dampak', 'Kajian pencemaran air sungai akibat limbah pabrik tekstil yang mematikan ekosistem ikan dan sumur warga'],
            ['Pendekatan Kompleks Wilayah', 'Bagaimana hubungan timbal balik antarwilayah? Apa diferensiasi potensi antardaerah?', 'Kombinasi analisis spasial + ekologis, keterkaitan antarwilayah', 'Kajian mitigasi banjir Jabodetabek yang melibatkan hulu (Bogor/Puncak) dan hilir (Jakarta/Tangerang)']
          ]
        }
      },
      {
        subtitle: '2. Prosedur Analisis Kompleks Wilayah',
        content: 'Pendekatan kompleks wilayah adalah pendekatan paling komprehensif karena menggabungkan analisis keruangan (melihat perbedaan potensi dan disparitas wilayah) dengan analisis ekologikal (melihat bagaimana interaksi manusia-lingkungan di satu wilayah merambat mempengaruhi wilayah tetangganya).',
        keyPoints: [
          'Diferensiasi area menjadi dasar timbulnya aliran barang, manusia, dan jasa.',
          'Konsep keterpaduan Daerah Aliran Sungai (DAS) adalah model terbaik penerapan pendekatan kompleks wilayah.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tema Khusus Pendekatan Keruangan',
        items: [
          { name: 'Analisis Pola (Pattern Analysis)', description: 'Mengkaji susunan spasial titik, garis, dan poligon di peta.' },
          { name: 'Analisis Struktur (Structure Analysis)', description: 'Mengkaji hierarki susunan elemen pembentuk ruang (contoh: orde pusat pelayanan).' },
          { name: 'Analisis Proses (Process Analysis)', description: 'Mengkaji perubahan pergeseran spasial dari waktu ke waktu (contoh: pemekaran kota).' }
        ]
      }
    ],
    processes: [
      { stage: 'Pendekatan Spasial', title: 'Pemetaan Pola Geometris', description: 'Memetakan sebaran fenomena dan menganalisis parameter jarak serta kerapatan.' },
      { stage: 'Pendekatan Ekologi', title: 'Kajian Relasi Ekosistem', description: 'Menelusuri dampak perilaku manusia terhadap daya dukung lingkungan.' },
      { stage: 'Kompleks Wilayah', title: 'Integrasi Antar-Region', description: 'Merumuskan kebijakan tata ruang regional lintas batas administratif.' }
    ],
    caseStudies: [
      {
        title: 'Penerapan Pendekatan Kompleks Wilayah dalam Pengendalian Banjir Jakarta',
        location: 'Kawasan Jabodetabekjur, Jawa Barat dan DKI Jakarta',
        description: 'Banjir Jakarta tidak bisa diselesaikan hanya di dalam batas administrasi DKI Jakarta (pendekatan spasial lokal). Harus digunakan pendekatan kompleks wilayah: menata kawasan hulu Puncak Bogor (alih fungsi resapan air ke villa), menormalisasi sungai Ciliwung tengah di Depok, dan membangun tanggul laut NCICD di muara pesisir Jakarta Utara.',
        takeaway: 'Masalah kewilayahan menuntut koordinasi antarpemerintah daerah yang melintasi batas-batas administratif formal.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Triad Pendekatan Geografi',
        caption: 'Diagram segitiga metodologi geografi: Sudut Keruangan, Sudut Ekologis, dan Puncak Kompleks Wilayah.',
        badge: 'Methodological Triad'
      }
    ],
    terminology: [
      { term: 'Pendekatan Keruangan', definition: 'Metode analisis geografi yang mendasarkan penjelasannya pada variasi ruang dan sebaran fenomena di permukaan bumi.', scientificTerm: 'Spatial Approach' },
      { term: 'Pendekatan Kelingkungan', definition: 'Metode analisis geografi yang mengkaji hubungan timbal balik antara manusia dan lingkungan fisiknya dalam suatu ekosistem.', scientificTerm: 'Ecological Approach' },
      { term: 'Pendekatan Kompleks Wilayah', definition: 'Metode analisis geografi yang memadukan pendekatan keruangan dan ekologis untuk mengkaji interaksi fungsional antarwilayah.', scientificTerm: 'Regional Complex Approach' }
    ],
    summary: [
      'Tiga pendekatan geografi adalah spasial (keruangan), ekologikal (kelingkungan), dan kompleks wilayah.',
      'Pendekatan spasial meneliti "di mana dan bagaimana polanya".',
      'Pendekatan ekologis meneliti "bagaimana relasi manusia-lingkungan".',
      'Pendekatan kompleks wilayah meneliti "bagaimana ketergantungan dan interaksi antarwilayah".'
    ],
    quiz: [
      {
        id: 'q7-1',
        question: 'Penyelidikan mengenai alih fungsi lahan hutan lindung menjadi permukiman yang mengakibatkan tanah longsor dan kerusakan habitat fauna liar paling tepat dianalisis menggunakan...',
        options: ['Pendekatan keruangan', 'Pendekatan kelingkungan (ekologikal)', 'Pendekatan historis', 'Pendekatan astronomis'],
        correctAnswer: 1,
        explanation: 'Pendekatan kelingkungan secara spesifik memfokuskan kajian pada interaksi antara aktivitas manusia (antroposfer) dengan komponen biosfer dan litosfer lingkungan fisiknya.'
      },
      {
        id: 'q7-2',
        question: 'Kajian interaksi aliran pasokan sayur-mayur dari dataran tinggi Puncak ke pasar-pasar induk di Jakarta merupakan contoh penerapan...',
        options: ['Pendekatan kompleks wilayah', 'Pendekatan geomorfologi murni', 'Pendekatan atmosfer', 'Pendekatan pedologi'],
        correctAnswer: 0,
        explanation: 'Pendekatan kompleks wilayah mengkaji hubungan fungsional, ketergantungan, dan interaksi aliran materi antardua wilayah yang memiliki diferensiasi karakteristik.'
      }
    ],
    references: ['Pattison, W. D. (1964). The Four Traditions of Geography. Journal of Geography.', 'Yunus, H. S. (2010). Metodologi Penelitian Wilayah Kontemporer. Pustaka Pelajar.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'objek-studi-geografi', 'prinsip-prinsip-geografi', 'konsep-wilayah-dan-pewilayahan']
  },
  {
    id: 'cabang-cabang-ilmu-geografi',
    number: 8,
    title: 'Cabang-Cabang Ilmu Geografi',
    englishTitle: 'Branches of Geography: Physical, Human, and Technical',
    categoryId: 'dasar-geografi',
    difficulty: 'Beginner',
    description: 'Mengenal taksonomi cabang geografi: Geografi Fisik (Geomorfologi, Klimatologi, Biogeografi, Oseanografi), Geografi Manusia (Ekonomi, Politik, Sosial, Perkotaan), dan Geografi Teknik (SIG, Penginderaan Jauh, Kartografi).',
    keywords: ['cabang geografi', 'geografi fisik', 'geografi manusia', 'geografi teknik', 'geomorfologi', 'kartografi'],
    learningObjectives: [
      'Mengklasifikasikan disiplin geografi ke dalam tiga cabang utama: fisik, manusia, dan teknik.',
      'Menjelaskan ruang lingkup keilmuan geomorfologi, klimatologi, hidrologi, biogeografi, dan demografi.',
      'Menilai kontribusi geografi teknik (kartografi, penginderaan jauh, SIG) dalam mendukung pengambilan keputusan.'
    ],
    introduction: 'Karena cakupan permukaan bumi begitu luas dan multidisipliner, ilmu geografi berkembang menjadi pohon ilmu dengan banyak cabang spesialisasi. Secara garis besar, geografi terbagi menjadi tiga cabang besar: Geografi Fisik (mengkaji bentang alam dan dinamika alami geosfer), Geografi Manusia (mengkaji peradaban, budaya, ekonomi, dan politik keruangan), serta Geografi Teknik (mengkaji instrumen, teknik pengukuran, kartografi, citra satelit, dan komputasi spasial SIG).',
    sections: [
      {
        subtitle: '1. Cabang-Cabang Geografi Fisik',
        content: 'Geografi fisik berkolaborasi erat dengan ilmu alam murni, namun tetap mengedepankan telaah spasial di permukaan bumi:',
        table: {
          headers: ['Sub-Cabang', 'Objek Kajian Spesifik', 'Kaitan dengan Kehidupan'],
          rows: [
            ['Geomorfologi', 'Bentuk muka bumi, proses pembentukan relief, dan evolusi bentang lahan.', 'Penilaian kestabilan lereng jalan raya dan mitigasi tanah longsor.'],
            ['Klimatologi & Meteorologi', 'Gejala cuaca jangka pendek dan pola iklim jangka panjang di atmosfer.', 'Kalender tanam petani, navigasi penerbangan, proyeksi kekeringan.'],
            ['Hidrologi & Oseanografi', 'Siklus air darat (sungai, danau, akuifer) dan dinamika laut/samudra.', 'Manajemen ketersediaan air bersih dan potensi energi pasang surut.'],
            ['Pedologi', 'Proses genesis, sifat kimia-fisik, dan klasifikasi jenis tanah.', 'Penentuan kesesuaian lahan pertanian dan konservasi lahan kritis.'],
            ['Biogeografi', 'Persebaran geografis spesies tumbuhan (fitogeografi) dan hewan (zoogeografi).', 'Penetapan batas taman nasional dan koridor suaka margasatwa.']
          ]
        }
      },
      {
        subtitle: '2. Cabang Geografi Manusia dan Geografi Teknik',
        content: 'Geografi Manusia mencakup Geografi Penduduk (demografi spasial), Geografi Ekonomi (lokasi industri, pertanian, perdagangan), Geografi Politik/Geopolitik (kedaulatan teritorial dan hubungan internasional), serta Geografi Perkotaan & Pedesaan. Geografi Teknik menyediakan alat analisis melalui Kartografi (seni dan sains membuat peta), Penginderaan Jauh (analisis citra dari wahana satelit/drone), dan Sistem Informasi Geografis / SIG (perangkat lunak pengolah basis data spasial berlayer).',
        keyPoints: [
          'Geografi Manusia fokus pada bagaimana manusia mendiami, mengorganisasi, dan memberi makna pada ruang.',
          'Geografi Teknik menjadi pengungkit modern yang mendigitalkan seluruh pengamatan lapangan ke dalam sistem pemodelan digital.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Trisula Cabang Ilmu Geografi',
        items: [
          { name: 'Geografi Fisik (Physical Geography)', description: 'Mengkaji hukum alam, proses litosfer, hidrosfer, dan atmosfer bumi.' },
          { name: 'Geografi Manusia (Human Geography)', description: 'Mengkaji aspek antropologis, demografis, ekonomi, dan politik bentang budaya.' },
          { name: 'Geografi Teknik (Technical Geography)', description: 'Mengkaji metodologi pemetaan, geodesi, fotogrametri, remote sensing, dan GIS.' }
        ]
      }
    ],
    processes: [
      { stage: 'Data Fisik', title: 'Pengukuran Lapangan Fisik', description: 'Sensor cuaca, survei tanah, dan pemetaan kontur geomorfologi.' },
      { stage: 'Data Manusia', title: 'Survei Sosial & Sensus', description: 'Pengumpulan data kepadatan warga, fasilitas kesehatan, dan jaringan jalan.' },
      { stage: 'Integrasi Teknik', title: 'Analisis Tumpang Tindih SIG', description: 'Menggabungkan layer fisik dan sosial untuk merumuskan zonasi peruntukan lahan.' }
    ],
    caseStudies: [
      {
        title: 'Kolaborasi Cabang Geografi dalam Pemetaan Kerentanan Tsunami Pesisir Selatan Jawa',
        location: 'Pangandaran hingga Pacitan, Jawa Barat-Jawa Timur',
        description: 'Penyusunan peta risiko tsunami memerlukan kerja sama sub-cabang: Oseanografi & Geomorfologi (menghitung tinggi gelombang dan kelerengan pantai), Biogeografi (analisis kerapatan sabuk hijau mangrove), Geografi Penduduk (kepadatan permukiman nelayan), dan Geografi Teknik/SIG (pemodelan rute evakuasi tercepat menuju bukit perlindungan).',
        takeaway: 'Pemecahan masalah dunia nyata membutuhkan integrasi lintas cabang geografi fisik, manusia, dan teknik secara terpadu.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Pohon Ilmu Geografi (Tree of Geography)',
        caption: 'Diagram pohon ilmu yang memperlihatkan batang utama geografi dan percabangan fisik, manusia, dan teknik.',
        badge: 'Academic Taxonomy'
      }
    ],
    terminology: [
      { term: 'Geomorfologi', definition: 'Cabang ilmu geografi yang mempelajari bentuk muka bumi, asal usulnya, serta proses perkembangannya.', scientificTerm: 'Geomorphology' },
      { term: 'Geografi Teknik', definition: 'Cabang geografi yang mempelajari teknik visualisasi, pemodelan, dan analisis data spasial (SIG, Inderaja, Kartografi).', scientificTerm: 'Technical Geography' },
      { term: 'Biogeografi', definition: 'Cabang geografi yang mempelajari pola persebaran keanekaragaman hayati secara spasial dan temporal.', scientificTerm: 'Biogeography' }
    ],
    summary: [
      'Geografi terbagi ke dalam tiga cabang besar: Geografi Fisik, Geografi Manusia, dan Geografi Teknik.',
      'Geografi fisik mempelajari proses abiotik dan biotik alami permukaan bumi.',
      'Geografi teknik (Kartografi, Inderaja, SIG) menjadi instrumen esensial dalam pengambilan kebijakan spasial modern.'
    ],
    quiz: [
      {
        id: 'q8-1',
        question: 'Cabang ilmu geografi fisik yang khusus mempelajari bentuk permukaan bumi, proses geomorfik pembentuknya, dan bentang lahan adalah...',
        options: ['Pedologi', 'Geomorfologi', 'Meteorologi', 'Oseanografi'],
        correctAnswer: 1,
        explanation: 'Geomorfologi (dari bahasa Yunani: geo = bumi, morphe = bentuk, logos = ilmu) adalah cabang geografi fisik yang mempelajari bentuk lahan permukaan bumi.'
      },
      {
        id: 'q8-2',
        question: 'Manakah dari bidang berikut yang tergolong dalam cabang Geografi Teknik?',
        options: [
          'Geografi Perdesaan dan Demografi',
          'Sistem Informasi Geografis (SIG) dan Penginderaan Jauh',
          'Biogeografi dan Klimatologi',
          'Geopolitik dan Antropologi Spasial'
        ],
        correctAnswer: 1,
        explanation: 'Sistem Informasi Geografis (SIG), Penginderaan Jauh (Remote Sensing), dan Kartografi merupakan pilar utama dari Geografi Teknik.'
      }
    ],
    references: ['Marsh, W. M., & Kaufman, M. M. (2012). Physical Geography: Great Systems and Global Environments. Cambridge University Press.', 'Gregory, K. J. (2000). The Changing Nature of Physical Geography. Arnold.'],
    relatedTopicIds: ['hakikat-dan-konsep-dasar-geografi', 'peta-dan-kartografi', 'penginderaan-jauh-remote-sensing', 'sistem-informasi-geografis-sig']
  },

  // CATEGORY B: Pemetaan dan Teknologi Geospasial (9-16)
  {
    id: 'peta-dan-kartografi',
    number: 9,
    title: 'Peta dan Kartografi',
    englishTitle: 'Maps and Fundamentals of Cartography',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Beginner',
    description: 'Mendalami seni dan sains kartografi: definisi peta, fungsi, komponen kelengkapan peta formal menurut standar Badan Informasi Geospasial (BIG), serta jenis peta umum dan tematik.',
    keywords: ['kartografi', 'komponen peta', 'legenda', 'orientasi arah', 'peta tematik', 'peta rupa bumi indonesia'],
    learningObjectives: [
      'Menjelaskan definisi peta dan hakikat ilmu kartografi.',
      'Mengidentifikasi seluruh komponen kelengkapan peta formal (judul, skala, orientasi, legenda, inset, sumber data).',
      'Membedakan peta umum (peta topografi/RBI) dengan peta tematik khusus.'
    ],
    introduction: 'Peta adalah representasi grafis dua dimensi konvensional dari seluruh atau sebagian permukaan bumi yang diperkecil dengan skala tertentu dan digambarkan pada bidang datar melalui sistem proyeksi. Kartografi adalah seni, ilmu pengetahuan, dan teknologi pembuatan peta. Peta bukan sekadar gambar navigasi, melainkan dokumen ilmiah visual yang mengomunikasikan informasi spasial, distribusi kepadatan, dan hubungan keruangan antarentitas geografis. Di Indonesia, standar pemetaan nasional dikelola oleh Badan Informasi Geospasial (BIG).',
    sections: [
      {
        subtitle: '1. Komponen Kelengkapan Peta Standar Formal',
        content: 'Peta yang baik dan dapat dipertanggungjawabkan secara ilmiah harus memuat komponen standar sesuai kaidah kartografi:',
        table: {
          headers: ['Komponen Peta', 'Fungsi Utama', 'Kaidah Kartografis'],
          rows: [
            ['Judul Peta', 'Mencerminkan isi pokok, wilayah kajian, dan tahun data', 'Huruf kapital tegak, posisi tengah atas atau di tempat yang tidak menutupi isi peta'],
            ['Skala Peta', 'Perbandingan jarak di peta dengan jarak sebenarnya di lapangan', 'Wajib mencantumkan skala angka (numerik) dan skala grafis (garis)'],
            ['Penunjuk Arah (Orientasi)', 'Menunjukkan arah utara peta', 'Simbol panah utara sederhana dengan huruf U / N'],
            ['Legenda / Keterangan', 'Menjelaskan arti simbol titik, garis, dan area yang digunakan', 'Dikelompokkan rapi di tepi atau kotak marjin peta'],
            ['Garis Astronomis / Grid', 'Menunjukkan koordinat garis lintang (latitude) dan garis bujur (longitude)', 'Dituliskan di tepi bingkai dengan satuan derajat, menit, detik (DMS) atau UTM meter'],
            ['Inset Peta', 'Peta kecil tambahan yang memberikan konteks wilayah sekitar yang lebih luas', 'Menjelaskan posisi relatif pulau/daerah yang dipetakan terhadap kawasan induk'],
            ['Sumber & Tahun Pembuatan', 'Memberikan jaminan legalitas dan keandalan temporal data', 'Misal: Sumber: Peta RBI Skala 1:25.000 Badan Informasi Geospasial, Tahun 2023']
          ]
        }
      },
      {
        subtitle: '2. Klasifikasi Peta Berdasarkan Isi',
        content: 'Berdasarkan isi informasinya, peta dikelompokkan menjadi Peta Umum dan Peta Tematik. Peta umum menggambarkan kenampakan permukaan bumi secara luas baik fisik (sungai, gunung) maupun sosial budaya (jalan, permukiman, batas administrasi), seperti Peta Rupa Bumi Indonesia (RBI) dan Peta Korografi/Atlas. Peta tematik hanya menyajikan satu tema fenomena tertentu, seperti Peta Kepadatan Penduduk, Peta Geologi, Peta Kerawanan Banjir, atau Peta Penggunaan Lahan.',
        keyPoints: [
          'Peta Rupa Bumi Indonesia (RBI) adalah peta dasar resmi nasional berstandar BIG.',
          'Peta tematik memanfaatkan peta dasar kemudian menumpangkan data atribut khusus.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Simbol Kartografi',
        items: [
          { name: 'Simbol Titik (Point)', description: 'Mewakili objek diskret: ibu kota negara, gunung berapi, bandar udara, stasiun BMKG.' },
          { name: 'Simbol Garis (Line)', description: 'Mewakili objek memanjang: sungai, jalan tol, rel kereta, batas administrasi.' },
          { name: 'Simbol Area / Luasan (Polygon)', description: 'Mewakili kenampakan mencakup luasan: danau, rawa, kawasan hutan mangrove, sawah irigasi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengumpulan Data', title: 'Akuisisi Data Spasial', description: 'Survei terestris lapangan, citra satelit, drone fotogrametri.' },
      { stage: 'Desain Simbol', title: 'Generalisasi & Simbologi', description: 'Memilih skala, menyederhanakan detail kontur, pewarnaan standar higienis.' },
      { stage: 'Penyusunan Layout', title: 'Komposisi Kartografis', description: 'Menata judul, legenda, grid koordinat, dan skala agar seimbang estetis.' }
    ],
    caseStudies: [
      {
        title: 'Kebijakan Satu Peta (One Map Policy) Indonesia',
        location: 'Nasional Republik Indonesia',
        description: 'Sebelum adanya Kebijakan Satu Peta, berbagai kementerian memiliki peta izin konsesi yang tumpang tindih (misal izin tambang Kementerian ESDM menabrak peta kawasan lindung Kementerian LHK). Program One Map Policy menghasilkan satu standar peta rujukan tunggal skala 1:50.000 yang dikelola BIG.',
        takeaway: 'Standarisasi kartografi nasional adalah kunci kepastian hukum, penyelesaian konflik agraria, dan tata ruang berkelanjutan.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Anatomi Komponen Peta Standar BIG',
        caption: 'Diagram visual interaktif yang menunjuk bagian-bagian formal peta: Judul, Garis Tepi, Skala Grafis, Inset, dan Legenda.',
        badge: 'Cartographic Standards'
      }
    ],
    terminology: [
      { term: 'Kartografi', definition: 'Seni, ilmu, dan teknologi pembuatan peta serta studi tentang peta sebagai dokumen ilmiah visual.', scientificTerm: 'Cartography' },
      { term: 'Peta Tematik', definition: 'Peta yang menyajikan informasi spasial khusus mengenai tema atau topik tertentu di suatu wilayah.', scientificTerm: 'Thematic Map' },
      { term: 'Inset Peta', definition: 'Peta berskala lebih kecil yang disisipkan untuk memperjelas kedudukan geografis wilayah utama yang dipetakan.', scientificTerm: 'Inset Map' }
    ],
    summary: [
      'Peta adalah representasi grafis bidang datar dari kenampakan permukaan bumi dengan skala dan proyeksi tertentu.',
      'Kelengkapan formal peta mencakup judul, skala numerik/grafis, orientasi utara, legenda, garis astronomis, inset, serta sumber data.',
      'One Map Policy Indonesia menjadi rujukan pemetaan nasional tunggal berstandar BIG.'
    ],
    quiz: [
      {
        id: 'q9-1',
        question: 'Peta kecil yang disisipkan pada peta utama dengan tujuan menunjukkan posisi relatif wilayah yang dipetakan terhadap daerah sekitarnya yang lebih luas disebut...',
        options: ['Legenda', 'Inset', 'Indeks peta', 'Orientasi'],
        correctAnswer: 1,
        explanation: 'Inset adalah peta tambahan berskala lebih kecil yang disisipkan untuk memperjelas konteks lokasi wilayah kajian di peta utama.'
      },
      {
        id: 'q9-2',
        question: 'Peta yang secara khusus menyajikan data sebaran titik api (hotspot) kebakaran hutan di Pulau Kalimantan termasuk dalam kategori...',
        options: ['Peta umum', 'Peta topografi', 'Peta tematik', 'Peta korografi'],
        correctAnswer: 2,
        explanation: 'Peta tematik adalah peta yang menyajikan informasi spasial spesifik mengenai satu topik atau tema tertentu (dalam kasus ini sebaran titik api).'
      }
    ],
    references: ['Badan Informasi Geospasial (BIG). Standar Kartografi Rupa Bumi Indonesia.', 'Dent, B. D. (2008). Cartography: Thematic Map Design. McGraw-Hill.'],
    relatedTopicIds: ['skala-dan-proyeksi-peta', 'koordinat-geografis', 'sistem-informasi-geografis-sig']
  },
  {
    id: 'skala-dan-proyeksi-peta',
    number: 10,
    title: 'Skala dan Proyeksi Peta',
    englishTitle: 'Map Scales and Map Projections',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Mendalami perhitungan skala peta (angka, garis, verbal, rumus kontur ci), perbesaran/pengecilan, serta jenis proyeksi peta (silinder, kerucut, azimut) guna mengatasi distorsi permukaan bumi bulat.',
    keywords: ['skala peta', 'proyeksi mercator', 'proyeksi silinder', 'distorsi peta', 'contour interval', 'proyeksi conform'],
    learningObjectives: [
      'Menghitung jarak sebenarnya dan skala peta menggunakan rumus matematis skala angka dan skala grafis.',
      'Menghitung skala peta kontur berdasarkan nilai Contour Interval (Ci).',
      'Memahami macam-macam proyeksi peta (silinder, kerucut, azimutal) beserta sifat-sifat distorsinya (konform, ekuivalen, ekuidistan).'
    ],
    introduction: 'Bumi berbentuk bulat menyerupai geoid (elipsoida pepat pada kutub). Mentransfer permukaan bumi lengkung 3 dimensi ke atas kertas datar 2 dimensi merupakan tantangan matematis yang mustahil tanpa distorsi. Di sinilah letak peranan proyeksi peta (map projection) untuk meminimalkan penyimpangan bentuk, luas, atau jarak. Bersamaan dengan itu, skala peta (map scale) menentukan derajat pereduksian matematis agar jarak di kertas mewakili jarak sesungguhnya di muka bumi.',
    sections: [
      {
        subtitle: '1. Perhitungan Skala Peta Matematis',
        content: 'Skala adalah perbandingan antara jarak di peta (Jp) dan jarak sebenarnya di lapangan (Js): Skala = Jp / Js. Jika jarak pada peta 5 cm dan jarak sebenarnya di lapangan 10 km (1.000.000 cm), maka skala = 5 / 1.000.000 = 1 : 200.000.',
        keyPoints: [
          'Rumus Skala Kontur Topografi: Ci = (1 / 2000) × Penyebut Skala, atau Penyebut Skala = 2000 × Ci.',
          'Contoh: Jika interval kontur (Ci) suatu peta rupa bumi adalah 25 meter, maka skala peta tersebut adalah 1 : (2000 × 25) = 1 : 50.000.'
        ],
        formula: {
          expression: 'Ci = \\frac{1}{2000} \\times \\text{Penyebut Skala}',
          explanation: 'Ci (Contour Interval) adalah beda tinggi antara dua garis kontur yang berdekatan dalam satuan meter.',
          exampleCalculation: 'Jika Ci = 50 meter, maka Skala = 1 : (2000 × 50) = 1 : 100.000.'
        }
      },
      {
        subtitle: '2. Macam-Macam Proyeksi Peta dan Sifat Distorsi',
        content: 'Berdasarkan bidang proyeksi yang digunakan, proyeksi dikelompokkan menjadi Proyeksi Silinder (Cylindrical), Proyeksi Kerucut (Conical), dan Proyeksi Azimut / Datar (Azimuthal / Planar). Berdasarkan sifat distorsi yang dipertahankan, proyeksi dibagi menjadi Konform (bentuk dipertahankan sama), Ekuivalen (luas dipertahankan sama), dan Ekuidistan (jarak dipertahankan proporsional).',
        table: {
          headers: ['Jenis Proyeksi', 'Bidang Proyeksi', 'Wilayah Paling Akurat (Bebas Distorsi)'],
          rows: [
            ['Proyeksi Silinder (Contoh: Mercator)', 'Bidang silinder menyelimuti bola bumi', 'Kawasan khatulistiwa (ekuator) seperti Indonesia. Semakin ke kutub, distorsi luas membesar tajam.'],
            ['Proyeksi Kerucut (Conical)', 'Bidang kerucut menyinggung garis lintang tertentu', 'Kawasan lintang sedang (iklim subtropis 30°–60° LU/LS), seperti Eropa, AS, dan Jepang.'],
            ['Proyeksi Azimut / Planar', 'Bidang datar menyinggung salah satu kutub atau titik tertentu', 'Kawasan kutub utara (Arktik) dan kutub selatan (Antarktika).']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Sifat Asli yang Dipertahankan dalam Proyeksi',
        items: [
          { name: 'Proyeksi Konform (Conformal)', description: 'Mempertahankan sudut dan bentuk pulau/negara sesuai aslinya (penting untuk peta navigasi laut dan udara).' },
          { name: 'Proyeksi Ekuivalen (Equivalent / Equal-Area)', description: 'Mempertahankan perbandingan luas area sebenarnya (penting untuk peta sensus penduduk dan peta sebaran hutan).' },
          { name: 'Proyeksi Ekuidistan (Equidistant)', description: 'Mempertahankan jarak yang tepat dari titik pusat proyeksi ke titik lain.' }
        ]
      }
    ],
    processes: [
      { stage: 'Geoid ke Ellipsoid', title: 'Aproksimasi Matematis Bumi', description: 'Memilih model elipsoid acuan bumi (contoh: WGS 84).' },
      { stage: 'Transformasi Koordinat', title: 'Aplikasi Formula Proyeksi', description: 'Mengonversi koordinat sudut (derajat lintang/bujur) menjadi koordinat metrik datar (X, Y meter).' },
      { stage: 'Pengecekan Distorsi', title: 'Indikator Tissot Indicatrix', description: 'Menguji elips distorsi untuk memastikan batas toleransi sudut dan luas tidak terlampaui.' }
    ],
    caseStudies: [
      {
        title: 'Distorsi Greenland pada Peta Proyeksi Mercator',
        location: 'Kawasan Arktik vs Afrika',
        description: 'Peta Mercator yang umum dipakai di atlas sekolah membuat Pulau Greenland tampak berukuran sama besarnya dengan Benua Afrika. Padahal di dunia nyata, Benua Afrika (luas 30,37 juta km²) sebenarnya berukuran 14 kali lebih besar daripada Greenland (luas 2,16 juta km²).',
        takeaway: 'Setiap proyeksi memiliki kompromi; memilih proyeksi yang keliru dapat menghasilkan miskonsepsi geografis yang fatal.'
      }
    ],
    visuals: [
      {
        type: 'simulation',
        title: 'Komparasi Proyeksi Silinder, Kerucut, dan Azimut',
        caption: 'Visualisasi interaktif bidang singgung silinder pada ekuator, kerucut pada lintang sedang, dan bidang datar pada kutub.',
        badge: 'Projection Visualizer',
        interactiveLabId: 'map-projections'
      }
    ],
    terminology: [
      { term: 'Interval Kontur (Ci)', definition: 'Selisih ketinggian vertikal antara dua garis kontur yang berdekatan pada peta topografi.', scientificTerm: 'Contour Interval' },
      { term: 'Proyeksi Konform', definition: 'Proyeksi peta yang mempertahankan bentuk asli kenampakan di bumi sehingga sudut antararah terukur tepat.', scientificTerm: 'Conformal Projection' },
      { term: 'Indikatrik Tissot', definition: 'Metode grafis lingkaran elips kecil untuk mengukur tingkat distorsi bentuk dan luas pada peta proyeksi.', scientificTerm: "Tissot's Indicatrix" }
    ],
    summary: [
      'Skala peta menyatakan perbandingan antara jarak di peta dengan jarak riil di lapangan.',
      'Interval kontur (Ci) berhubungan langsung dengan penyebut skala melalui rumus Ci = 1/2000 × Penyebut Skala.',
      'Proyeksi silinder paling sesuai untuk kawasan ekuator (Indonesia), proyeksi kerucut untuk lintang sedang, dan proyeksi azimut untuk kutub.'
    ],
    quiz: [
      {
        id: 'q10-1',
        question: 'Jika suatu peta topografi memiliki nilai interval kontur (Ci) sebesar 20 meter, berapakah skala peta tersebut?',
        options: ['1 : 20.000', '1 : 40.000', '1 : 50.000', '1 : 100.000'],
        correctAnswer: 1,
        explanation: 'Penyebut Skala = 2000 × Ci = 2000 × 20 = 40.000. Jadi skala petanya adalah 1 : 40.000.'
      },
      {
        id: 'q10-2',
        question: 'Proyeksi peta yang paling tepat digunakan untuk memetakan wilayah kepulauan Indonesia yang terletak tepat di sepanjang garis khatulistiwa adalah...',
        options: ['Proyeksi Azimutal Kutub', 'Proyeksi Silinder Normal', 'Proyeksi Kerucut Oblique', 'Proyeksi Gnomonik'],
        correctAnswer: 1,
        explanation: 'Proyeksi silinder normal menyinggung bumi tepat di garis ekuator sehingga wilayah khatulistiwa seperti Indonesia memiliki distorsi mendekati nol.'
      }
    ],
    references: ['Snyder, J. P. (1987). Map Projections: A Working Manual. USGS Professional Paper 1395.', 'Maling, D. H. (1992). Coordinate Systems and Map Projections. Pergamon Press.'],
    relatedTopicIds: ['peta-dan-kartografi', 'koordinat-geografis', 'kartografi-digital-dan-webgis']
  },
  {
    id: 'koordinat-geografis',
    number: 11,
    title: 'Koordinat Geografis',
    englishTitle: 'Geographic Coordinate Systems and Projections',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Memahami sistem garis lintang (latitude), garis bujur (longitude), koordinat derajat-menit-detik (DMS), derajat desimal (DD), serta sistem Universal Transverse Mercator (UTM).',
    keywords: ['garis lintang', 'garis bujur', 'derajat menit detik', 'koordinat UTM', 'datum WGS 84', 'zona UTM indonesia'],
    learningObjectives: [
      'Menjelaskan fungsi garis lintang (paralel) dan garis bujur (meridian) sebagai acuan posisi global.',
      'Mengonversi format koordinat Derajat Menit Detik (DMS) ke format Derajat Desimal (Decimal Degrees).',
      'Memahami struktur sistem koordinat kisi Universal Transverse Mercator (UTM) dan pembagian zonanya di Indonesia.'
    ],
    introduction: 'Untuk menentukan lokasi persis objek apa pun di bumi tanpa ambiguitas, ilmu geografi mengandalkan Sistem Koordinat Geografis (Geographic Coordinate System). Sistem ini membagi bumi menggunakan jaring garis khayal lintang (latitude) yang sejajar khatulistiwa dan garis bujur (meridian) yang menghubungkan kutub utara dan kutub selatan. Setiap titik di muka bumi memiliki alamat posisi tunggal yang dinyatakan dalam koordinat geosentris atau proyeksi kisi metrik UTM.',
    sections: [
      {
        subtitle: '1. Garis Lintang dan Garis Bujur',
        content: 'Garis lintang dihitung dari 0° pada khatulistiwa (ekuator) hingga 90°LU di Kutub Utara dan 90°LS di Kutub Selatan. Garis bujur dihitung dari 0° pada Meridian Utama Greenwich (Inggris) hingga 180°BT (Bujur Timur) dan 180°BB (Bujur Barat). Pertemuan 180°BT dan 180°BB di Samudra Pasifik membentuk Garis Tanggal Internasional (International Date Line).',
        keyPoints: [
          'Garis Lintang menentukan zona iklim matahari (tropis, subtropis, sedang, kutub).',
          'Garis Bujur menentukan pembagian zona waktu dunia (setiap beda 15° bujur = beda 1 jam waktu surya).'
        ]
      },
      {
        subtitle: '2. Sistem Koordinat Universal Transverse Mercator (UTM)',
        content: 'Berbeda dengan sistem lintang-bujur yang menggunakan satuan derajat (sudut bola), sistem proyeksi UTM membagi permukaan bumi dari 80°LS hingga 84°LU ke dalam 60 zona bujur, masing-masing selebar 6°. Satuan koordinat UTM adalah meter (Easting X dan Northing Y), sehingga mempermudah perhitungan jarak, luas, dan perencanaan teknik sipil tanpa rumus trigonometri bola yang rumit.',
        table: {
          headers: ['Parameter UTM', 'Karakteristik', 'Penerapan di Indonesia'],
          rows: [
            ['Lebar Zona', '6° bujur per zona (Zona 1 dimulai dari 180°BB ke timur)', 'Indonesia terbentang dari Zona UTM 46N/S hingga Zona 54N/S'],
            ['Sumbu X (Easting)', 'Nilai awal garis tengah zona diberi false easting 500.000 meter', 'Mencegah timbulnya nilai koordinat bertanda negatif'],
            ['Sumbu Y (Northing)', 'Di belahan bumi utara dihitung dari ekuator (0 m); di selatan ekuator diberi false northing 10.000.000 m', 'Kota Jakarta (selatan ekuator) berada di zona 48S dengan koordinat metrik positif']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Format Penyajian Koordinat',
        items: [
          { name: 'DMS (Degrees, Minutes, Seconds)', description: 'Contoh: Monas Jakarta = 6° 10′ 31″ LS, 106° 49′ 38″ BT.' },
          { name: 'DD (Decimal Degrees)', description: 'Format digital SIG: Monas = -6.175278, 106.827222 (tanda minus menunjukkan Lintang Selatan).' },
          { name: 'UTM Metrik', description: 'Format meter: Monas = Zona 48M, X: 702.450 m E, Y: 9.317.120 m N.' }
        ]
      }
    ],
    processes: [
      { stage: 'Konversi Menit ke Desimal', title: 'Bagi Menit dengan 60', description: 'Menit (′) dibagi 60 untuk menghasilkan pecahan derajat.' },
      { stage: 'Konversi Detik ke Desimal', title: 'Bagi Detik dengan 3600', description: 'Detik (″) dibagi 3600 untuk menghasilkan pecahan derajat kecil.' },
      { stage: 'Penjumlahan Total', title: 'Satukan Nilai Desimal', description: 'DD = Derajat + (Menit / 60) + (Detik / 3600).' }
    ],
    caseStudies: [
      {
        title: 'Pembagian Tiga Zona Waktu Indonesia Berdasarkan Garis Bujur',
        location: 'Indonesia (WIB, WITA, WIT)',
        description: 'Wilayah Indonesia membentang dari 95°BT hingga 141°BT (rentang 46° bujur). Karena setiap 15° menghasilkan perbedaan waktu 1 jam, wilayah NKRI dibagi menjadi 3 zona waktu resmi: WIB (GMT+7 berbasis meridian 105°BT), WITA (GMT+8 berbasis meridian 120°BT), dan WIT (GMT+9 berbasis meridian 135°BT).',
        takeaway: 'Sistem koordinat bumi mendasari sinkronisasi jam biologis, pasar modal, dan navigasi nasional.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Zona UTM Wilayah Indonesia (Zona 46 - 54)',
        caption: 'Bagan pembagian zona Universal Transverse Mercator yang melintasi kepulauan Indonesia dari Sabang sampai Merauke.',
        badge: 'UTM Grid Index'
      }
    ],
    terminology: [
      { term: 'Garis Lintang (Paralel)', definition: 'Garis khayal melingkari bumi yang sejajar dengan khatulistiwa, mengukur jarak sudut ke arah utara atau selatan.', scientificTerm: 'Latitude' },
      { term: 'Garis Bujur (Meridian)', definition: 'Garis khayal setengah lingkaran menghubungkan kutub utara dan selatan, mengukur jarak sudut ke arah timur atau barat dari Greenwich.', scientificTerm: 'Longitude' },
      { term: 'Datum Geodesi', definition: 'Model referensi matematis permukaan bumi yang digunakan sebagai dasar penentuan posisi koordinat (contoh: WGS 84).', scientificTerm: 'Geodetic Datum' }
    ],
    summary: [
      'Garis lintang mengukur posisi relatif terhadap khatulistiwa; garis bujur mengukur posisi terhadap Meridian Greenwich.',
      'Sistem UTM mengonversi koordinat sudut menjadi koordinat metrik meter dalam 60 zona bujur dunia.',
      'Rentang bujur Indonesia sepanjang 46° menghasilkan tiga zona waktu resmi: WIB, WITA, dan WIT.'
    ],
    quiz: [
      {
        id: 'q11-1',
        question: 'Rentang wilayah Indonesia yang membentang dari 95°BT hingga 141°BT menyebabkan Indonesia memiliki pembagian zona waktu sebanyak...',
        options: ['Dua zona waktu', 'Tiga zona waktu (WIB, WITA, WIT)', 'Empat zona waktu', 'Satu zona waktu tunggal'],
        correctAnswer: 1,
        explanation: 'Rentang 46° bujur dibagi kelipatan 15° per jam menghasilkan tiga zona waktu resmi berjarak masing-masing 1 jam: WIB (+7), WITA (+8), dan WIT (+9).'
      },
      {
        id: 'q11-2',
        question: 'Sistem koordinat kisi proyeksi yang membagi bumi menjadi 60 zona selebar masing-masing 6° bujur dan menggunakan satuan jarak meter adalah...',
        options: ['Sistem Koordinat Kutub', 'Sistem Koordinat Kartesius Lokal', 'Universal Transverse Mercator (UTM)', 'Sistem Proyeksi Mollweide'],
        correctAnswer: 2,
        explanation: 'Sistem Universal Transverse Mercator (UTM) membagi bumi dari 80°LS hingga 84°LU menjadi 60 zona bujur selebar 6° dengan koordinat metrik Easting dan Northing.'
      }
    ],
    references: ['Iliffe, J., & Lott, R. (2008). Datums and Map Projections for Remote Sensing, GIS and Surveying. Whittles Publishing.', 'Badan Informasi Geospasial. Sistem Referensi Geospasial Indonesia (SRGI 2013).'],
    relatedTopicIds: ['peta-dan-kartografi', 'skala-dan-proyeksi-peta', 'teknologi-gnss-gps-dan-trilaterasi', 'letak-astronomis-geografis-dan-geologis-indonesia']
  },
  {
    id: 'penginderaan-jauh-remote-sensing',
    number: 12,
    title: 'Penginderaan Jauh (Remote Sensing)',
    englishTitle: 'Remote Sensing Principles and Systems',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Menelaah sains penginderaan jauh: definisi, komponen sistem (sumber tenaga aktif/pasif, atmosfer, objek, wahana, sensor, data), dan spektrum elektromagnetik.',
    keywords: ['penginderaan jauh', 'citra satelit', 'sensor aktif pasif', 'spektrum elektromagnetik', 'resolusi spasial', 'wahana inderaja'],
    learningObjectives: [
      'Menjelaskan definisi penginderaan jauh menurut Lillesand & Kiefer.',
      'Mengidentifikasi komponen-komponen sistem penginderaan jauh (sumber tenaga, atmosfer, sensor, wahana, transmisi data).',
      'Membedakan sistem penginderaan jauh pasif (sinar matahari) dan aktif (gelombang mikro radar/LiDAR).'
    ],
    introduction: 'Penginderaan Jauh (Remote Sensing) adalah ilmu dan seni untuk memperoleh informasi tentang suatu objek, area, atau fenomena melalui analisis data yang diperoleh dengan suatu alat (sensor) tanpa kontak langsung dengan objek yang dikaji (Lillesand & Kiefer). Teknologi ini memungkinkan manusia memantau penggundulan hutan Amazon dari orbit luar angkasa, mendeteksi suhu permukaan laut, hingga memetakan kerusakan gempa bumi dalam hitungan jam pascabencana.',
    sections: [
      {
        subtitle: '1. Komponen Utama Sistem Penginderaan Jauh',
        content: 'Penginderaan jauh beroperasi sebagai sistem terpadu yang terdiri atas 6 komponen yang saling bergantung:',
        table: {
          headers: ['Komponen', 'Fungsi & Mekanisme Kerja', 'Contoh Nyata'],
          rows: [
            ['Sumber Tenaga', 'Memancarkan gelombang elektromagnetik untuk menyinari permukaan bumi.', 'Tenaga alami: radiasi matahari (sistem pasif); Tenaga buatan: pulsa gelombang mikro radar (sistem aktif).'],
            ['Atmosfer', 'Medium yang dilewati gelombang radiasi; terjadi hamburan (Rayleigh/Mie) dan serapan.', 'Jendela atmosfer (atmospheric window): bagian spektrum yang dapat menembus atmosfer tanpa diserap uap air/ozon.'],
            ['Objek di Permukaan Bumi', 'Menerima energi, memantulkan, menyerap, atau memancarkannya kembali.', 'Klorofil daun memantulkan kuat inframerah dekat; air jernih menyerap kuat inframerah.'],
            ['Sensor', 'Alat perekam pantulan atau pancaran energi dari objek.', 'Sensor fotografik (kamera udara) dan sensor elektronik (multispektral scanner di satelit Landsat/Sentinel).'],
            ['Wahana (Platform)', 'Kendaraan pembawa sensor pada ketinggian tertentu.', 'Pesawat terbang tanpa awak (drone), pesawat terbang berawak, satelit orbit rendah (LEO).'],
            ['Perolehan & Analisis Data', 'Data citra analog (foto udara) atau data numerik digital yang diproses analis geografi.', 'Pengolahan citra digital Normalized Difference Vegetation Index (NDVI) untuk memantau kesehatan tanaman.']
          ]
        }
      },
      {
        subtitle: '2. Empat Resolusi Sensor Penginderaan Jauh',
        content: 'Kualitas dan ketajaman sensor penginderaan jauh diukur berdasarkan 4 tingkatan resolusi utama:',
        keyPoints: [
          'Resolusi Spasial: Ukuran terkecil objek di permukaan bumi yang masih dapat dibedakan oleh sensor (contoh: WorldView-3 = 0,31 meter; Landsat-9 = 30 meter).',
          'Resolusi Spektral: Jumlah dan lebar saluran pita spektrum elektromagnetik yang mampu direkam oleh sensor (pankromatik, multispektral, hiperspektral).',
          'Resolusi Temporal: Waktu yang dibutuhkan satelit untuk merekam ulang area geografis yang sama (revisit time, contoh: Sentinel-2 = 5 hari).',
          'Resolusi Radiometrik: Kepekaan sensor dalam membedakan gradasi nilai pantulan (bit depth: 8-bit = 256 tingkat abu-abu, 12-bit, 16-bit).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Sistem Berdasarkan Sumber Energi',
        items: [
          { name: 'Sistem Pasif (Passive Sensor)', description: 'Bergantung pada pantulan cahaya matahari atau pancaran radiasi termal bumi (hanya dapat merekam saat siang hari, terhalang awan).' },
          { name: 'Sistem Aktif (Active Sensor)', description: 'Memancarkan energinya sendiri (seperti RADAR dan LiDAR), mampu menembus awan dan merekam pada malam hari.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pancaran Energi', title: 'Radiasi Menuju Bumi', description: 'Energi elektromagnetik matahari atau pulsa radar merambat menembus atmosfer.' },
      { stage: 'Interaksi Objek', title: 'Reflektansi Spektral', description: 'Tanah, air, dan vegetasi memantulkan spektrum panjang gelombang yang unik.' },
      { stage: 'Perekaman Sensor', title: 'Deteksi Digital', description: 'Sensor satelit mengonversi radiasi menjadi nilai digital (Digital Number).' },
      { stage: 'Diseminasi Data', title: 'Transmisi ke Stasiun Bumi', description: 'Data ditransmisikan ke stasiun penerima bumi (seperti stasiun BRIN di Parepare).' }
    ],
    caseStudies: [
      {
        title: 'Pemantauan Deforestasi Hutan Hujan Tropis Kalimantan via Satelit Sentinel-2',
        location: 'Kalimantan Timur dan Tengah, Indonesia',
        description: 'Kementerian Lingkungan Hidup dan Kehutanan (KLHK) memanfaatkan satelit Sentinel-2 (resolusi 10 meter) dan citra radar Sentinel-1 untuk memantau deforestasi serta pembukaan tambang ilegal. Sinyal radar mampu menembus tutupan awan tebal tropis sepanjang musim hujan.',
        takeaway: 'Penginderaan jauh memungkinkan deteksi dini kejahatan lingkungan di wilayah terpencil tanpa perlu ekspedisi darat yang mahal.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Diagram Alir Sistem Penginderaan Jauh',
        caption: 'Bagan terintegrasi interaksi sumber radiasi matahari, hamburan atmosfer, reflektansi kanopi hutan, sensor satelit, dan stasiun bumi.',
        badge: 'Earth Observation'
      }
    ],
    terminology: [
      { term: 'Penginderaan Jauh', definition: 'Pengukuran atau perolehan informasi objek permukaan bumi menggunakan instrumen sensor tanpa kontak fisik langsung.', scientificTerm: 'Remote Sensing' },
      { term: 'Jendela Atmosfer', definition: 'Bagian spektrum elektromagnetik yang dapat merambat menembus atmosfer bumi tanpa mengalami penyerapan total oleh gas rumah kaca.', scientificTerm: 'Atmospheric Window' },
      { term: 'Resolusi Spasial', definition: 'Dimensi luas terkecil di permukaan bumi yang terwakili oleh satu piksel gambar citra.', scientificTerm: 'Spatial Resolution' }
    ],
    summary: [
      'Penginderaan jauh merekam informasi geosfer tanpa kontak langsung melalui sensor di satelit atau drone.',
      'Sistem pasif memanfaatkan sinar matahari; sistem aktif memancarkan sinyal radar/laser sendiri.',
      'Kualitas citra ditentukan oleh resolusi spasial, spektral, temporal, dan radiometrik sensor.'
    ],
    quiz: [
      {
        id: 'q12-1',
        question: 'Komponen dalam penginderaan jauh yang berfungsi sebagai wahana (platform) pembawa sensor perekam adalah...',
        options: ['Sinar matahari dan radiasi inframerah', 'Satelit, pesawat terbang udara, atau drone', 'Komputer pemroses citra digital di stasiun bumi', 'Klorofil daun dan air permukaan'],
        correctAnswer: 1,
        explanation: 'Wahana (platform) adalah kendaraan pembawa sensor, seperti satelit orbit bumi, pesawat terbang fotogrametri, atau drone.'
      },
      {
        id: 'q12-2',
        question: 'Kemampuan sensor satelit untuk membedakan objek terkecil di permukaan bumi yang terwakili dalam ukuran satu piksel gambar disebut...',
        options: ['Resolusi spektral', 'Resolusi temporal', 'Resolusi spasial', 'Resolusi radiometrik'],
        correctAnswer: 2,
        explanation: 'Resolusi spasial mengacu pada dimensi terkecil objek di lapangan yang masih dapat direkam dan dibedakan secara tegas oleh sensor satelit.'
      }
    ],
    references: ['Lillesand, T. M., Kiefer, R. W., & Chipman, J. W. (2015). Remote Sensing and Image Interpretation. John Wiley & Sons.', 'Jensen, J. R. (2007). Remote Sensing of the Environment: An Earth Resource Perspective. Pearson.'],
    relatedTopicIds: ['interpretasi-citra', 'sistem-informasi-geografis-sig', 'kartografi-digital-dan-webgis', 'peta-dan-kartografi']
  },
  {
    id: 'interpretasi-citra',
    number: 13,
    title: 'Interpretasi Citra',
    englishTitle: 'Image Interpretation and Feature Extraction',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Menguasai 8 unsur kunci interpretasi citra foto udara dan citra satelit: rona/warna, bentuk, ukuran, tekstur, pola, bayangan, situs, dan asosiasi.',
    keywords: ['unsur interpretasi citra', 'rona dan warna', 'tekstur citra', 'asosiasi spasial', 'situs geografis', 'foto udara'],
    learningObjectives: [
      'Menyebutkan dan menjelaskan 8 unsur kunci interpretasi citra secara berurutan.',
      'Menganalisis perbedaan rona, tekstur, dan bentuk untuk mengenali bentang lahan alami dan buatan manusia.',
      'Menerapkan konsep situs dan asosiasi dalam mengidentifikasi objek rumit pada foto udara.'
    ],
    introduction: 'Interpretasi citra adalah kegiatan mengidentifikasi objek yang terekam pada foto udara atau citra satelit dan menilai arti penting objek tersebut melalui serangkaian penalaran logis spasial. Para analis geografi tidak menebak-nebak objek secara acak, melainkan menggunakan 8 unsur interpretasi bertingkat: dari unsur primer yang langsung tampak (rona/warna), unsur spasial geometris (bentuk, ukuran, tekstur, pola, bayangan), hingga unsur kontekstual tingkat tinggi (situs dan asosiasi).',
    sections: [
      {
        subtitle: '1. Delapan Unsur Kunci Interpretasi Citra',
        content: 'Delapan unsur ini tersusun secara hierarkis dari yang paling mudah diamati secara visual hingga yang membutuhkan deduksi logika keruangan:',
        table: {
          headers: ['Unsur Interpretasi', 'Definisi Kartografis', 'Contoh Aplikasi Nyata'],
          rows: [
            ['1. Rona (Tone) & Warna', 'Tingkat kecerahan atau kegelapan objek pada citra hitam-putih, atau warna spektral asli.', 'Air jernih berona gelap/hitam (karena menyerap sinar); jalan aspal kering berona abu-abu terang.'],
            ['2. Bentuk (Shape)', 'Kerangka atau konfigurasi geometris visual objek.', 'Bangunan sekolah umumnya berbentuk huruf L, U, atau persegi panjang teratur; stadion berbentuk lingkaran/elips.'],
            ['3. Ukuran (Size)', 'Dimensi panjang, luas, tinggi, atau volume objek relatif terhadap skala.', 'Gedung pabrik berukuran jauh lebih besar daripada rumah tapak permukiman penduduk di sekitarnya.'],
            ['4. Tekstur (Texture)', 'Frekuensi perubahan rona pada kelompok objek (kasar, sedang, halus).', 'Hutan primer berkanopi lebat bertekstur kasar; semak belukar bertekstur sedang; padang rumput bertekstur halus.'],
            ['5. Pola (Pattern)', 'Susunan spasial keteraturan susunan objek.', 'Pola permukiman teratur memanjang di sepanjang garis pantai; kebun kelapa sawit memiliki pola larikan pohon seragam.'],
            ['6. Bayangan (Shadow)', 'Tanda jatuhnya sinar matahari yang menegaskan ketinggian atau profil vertikal objek.', 'Menara BTS, cerobong asap pabrik, atau jembatan gantung dapat dikenali jelas dari bentuk bayangannya.'],
            ['7. Situs (Site)', 'Letak atau posisi suatu objek terhadap bentang lingkungan sekitarnya.', 'Hutan bakau (mangrove) selalu bertempat di situs pesisir pantai berlumpur pasang surut.'],
            ['8. Asosiasi (Association)', 'Keterkaitan keterikatan keberadaan antara satu objek dengan objek lain.', 'Stasiun kereta api selalu berasosiasi dengan keberadaan jalur rel sepur dan emplasemen gerbong.']
          ]
        }
      },
      {
        subtitle: '2. Langkah-Langkah Sistematis Interpretasi Citra',
        content: 'Proses interpretasi citra yang baku mengikuti 4 langkah berurutan: Deteksi (menemukan adanya objek anomal/menarik), Identifikasi (mencocokkan karakteristik objek dengan 8 unsur interpretasi), Analisis (menghubungkan objek dengan kondisi geografis lingkungan sekitar), dan Deduksi (merumuskan kesimpulan akhir jenis objek).',
        keyPoints: [
          'Uji Lapangan (Ground Truth): Pengecekan sampel lapangan untuk memvalidasi akurasi hasil interpretasi citra.',
          'Kunci Interpretasi: Katalog panduan visual yang berisi foto rujukan standar objek tertentu.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Hierarki Unsur Interpretasi',
        items: [
          { name: 'Tingkat Primer (Spektral)', description: 'Rona (Tone) dan Warna objek.' },
          { name: 'Tingkat Sekunder (Geometris)', description: 'Bentuk, Ukuran, Tekstur citra.' },
          { name: 'Tingkat Tersier (Spasial)', description: 'Pola dan Bayangan objek.' },
          { name: 'Tingkat Tinggi (Kontekstual)', description: 'Situs dan Asosiasi keruangan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Tahap Deteksi', title: 'Penemuan Adanya Objek', description: 'Mata atau perangkat lunak mendeteksi adanya objek mencolok pada citra.' },
      { stage: 'Tahap Identifikasi', title: 'Penerapan 8 Unsur', description: 'Mencocokkan bentuk, ukuran, rona, tekstur, situs, dan asosiasi objek.' },
      { stage: 'Tahap Analisis', title: 'Kajian Kausalitas Lingkungan', description: 'Mengapa objek tersebut berada di lokasi itu dan bagaimana dampaknya.' },
      { stage: 'Tahap Deduksi', title: 'Pemberian Label Peta', description: 'Merumuskan klasifikasi tutupan lahan (contoh: Lahan Terbangun Komersial).' }
    ],
    caseStudies: [
      {
        title: 'Identifikasi Lapangan Sepak Bola pada Foto Udara Perkotaan',
        location: 'Jakarta, Indonesia',
        description: 'Sebuah objek persegi panjang datar (bentuk), berukuran sekitar 100m x 65m (ukuran), bertekstur halus warna hijau seragam (tekstur & rona), terdapat gawang di kedua ujungnya (asosiasi), dan dikelilingi lintasan lari atletik. Dari perpaduan unsur-unsur ini disimpulkan dengan yakin bahwa objek tersebut adalah lapangan sepak bola.',
        takeaway: 'Interpretasi akurat tidak pernah mengandalkan satu unsur saja, melainkan konvergensi bukti dari banyak unsur.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Piramida Hierarki 8 Unsur Interpretasi Citra',
        caption: 'Piramida dari tingkat dasar (Rona/Warna) menuju puncak deduktif (Situs & Asosiasi).',
        badge: 'Visual Interpretation'
      }
    ],
    terminology: [
      { term: 'Rona (Tone)', definition: 'Tingkat kecerahan atau derajat keabuan (kegelapan) suatu objek yang terekam pada citra.', scientificTerm: 'Image Tone' },
      { term: 'Situs (Site)', definition: 'Letak suatu objek terhadap objek lain atau bentang lingkungan sekitarnya.', scientificTerm: 'Geographic Site' },
      { term: 'Asosiasi Citra', definition: 'Keterkaitan yang khas dan berulang antara keberadaan suatu objek dengan objek lain.', scientificTerm: 'Spatial Association' }
    ],
    summary: [
      'Interpretasi citra menggunakan 8 unsur: rona/warna, bentuk, ukuran, tekstur, pola, bayangan, situs, dan asosiasi.',
      'Situs merujuk pada letak lingkungan objek; asosiasi merujuk pada objek pelengkap yang lazim menyertainya.',
      'Tahapan interpretasi sistematis meliputi deteksi, identifikasi, analisis, dan deduksi valid.'
    ],
    quiz: [
      {
        id: 'q13-1',
        question: 'Pada foto udara, kenampakan tajuk hutan primer lebat dapat dibedakan secara tegas dari padang rumput terutama berdasarkan unsur...',
        options: ['Bayangan dan bentuk', 'Tekstur (hutan bertekstur kasar, rumput halus)', 'Ukuran absolut', 'Situs garis lintang'],
        correctAnswer: 1,
        explanation: 'Kanopi pohon hutan yang heterogen menghasilkan perbedaan bayangan antardaun sehingga bertekstur kasar, sementara padang rumput menghasilkan tekstur yang sangat halus dan rata.'
      },
      {
        id: 'q13-2',
        question: 'Sebuah objek pada citra diidentifikasi sebagai dermaga pelabuhan karena menjorok ke perairan laut dan tampak adanya kapal yang bersandar di sampingnya. Unsur interpretasi yang digunakan dalam pengenalan kapal tersebut adalah...',
        options: ['Rona', 'Ukuran', 'Asosiasi', 'Tekstur'],
        correctAnswer: 2,
        explanation: 'Keberadaan kapal yang bersandar di samping struktur dermaga merupakan bentuk asosiasi (keterkaitan khas antara satu objek dengan objek lainnya di ruang yang sama).'
      }
    ],
    references: ['Sutanto. (1986). Penginderaan Jauh Jilid 1 & 2. Gadjah Mada University Press.', 'Avery, T. E., & Berlin, G. L. (1992). Fundamentals of Remote Sensing and Airphoto Interpretation. Prentice Hall.'],
    relatedTopicIds: ['penginderaan-jauh-remote-sensing', 'peta-dan-kartografi', 'sistem-informasi-geografis-sig']
  },
  {
    id: 'sistem-informasi-geografis-sig',
    number: 14,
    title: 'Sistem Informasi Geografis (SIG)',
    englishTitle: 'Geographic Information Systems (GIS)',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Mendalami arsitektur Sistem Informasi Geografis (SIG): subsistem input-proses-output, data spasial (vektor vs raster), data atribut, serta operasi analisis spasial (overlay, buffering, network analysis).',
    keywords: ['SIG', 'data vektor', 'data raster', 'tumpang susun overlay', 'buffering', 'basis data spasial', 'QGIS'],
    learningObjectives: [
      'Menjelaskan definisi dan 5 komponen utama pembentuk sistem SIG (perangkat keras, perangkat lunak, data, manusia, metode).',
      'Membandingkan karakteristik data spasial model vektor (titik, garis, poligon) dengan model raster (piksel grid).',
      'Mengaplikasikan operasi analisis spasial dasar seperti overlay tumpang susun (intersect, union) dan buffering dalam pemecahan masalah.'
    ],
    introduction: 'Sistem Informasi Geografis (SIG / GIS) adalah sistem berbasis komputer yang dirancang khusus untuk memasukkan, menyimpan, mengelola, memanipulasi, menganalisis, dan memvisualisasikan data yang memiliki referensi geografis (georeferenced data). Jika spreadsheet biasa hanya dapat mengurutkan nama pasien dan penyakit, SIG mampu memetakan alamat pasien tersebut, menganalisis jaraknya ke sumber air tercemar, dan memprediksi laju penularan penyakit dalam radius 5 kilometer secara visual.',
    sections: [
      {
        subtitle: '1. Model Data Spasial: Vektor vs Raster',
        content: 'Data dalam SIG terbagi menjadi Data Spasial (informasi keruangan lokasi objek) dan Data Atribut (informasi deskriptif tabel yang menjelaskan sifat objek). Data spasial disimpan dalam dua struktur utama:',
        table: {
          headers: ['Parameter', 'Model Data Vektor', 'Model Data Raster'],
          rows: [
            ['Bentuk Dasar', 'Titik (point), Garis (polyline), dan Poligon (polygon) berbasis koordinat X, Y', 'Grid sel piksel teratur dua dimensi dengan nilai kecerahan / elevasi tertentu'],
            ['Akurasi Batas', 'Sangat presisi dan tajam, tidak pecah saat diperbesar (zoom-in)', 'Tergantung ukuran piksel (resolusi spasial); batas tampak bergerigi (pixelated)'],
            ['Contoh Objek', 'Batas provinsi, rute jalan tol, lokasi sumur bor minyak, batas sertifikat tanah BPN', 'Citra satelit Sentinel, foto udara drone, Digital Elevation Model (DEM), peta suhu'],
            ['Kekuatan Utama', 'Sangat efisien untuk analisis jaringan transportasi dan perhitungan topologi batas', 'Sangat unggul untuk analisis permukaan kontinu (lereng, hidrologi, interpolasi curah hujan)']
          ]
        }
      },
      {
        subtitle: '2. Operasi Analisis Spasial Kunci dalam SIG',
        content: 'Kekuatan terbesar SIG terletak pada kemampuan analisis spasialnya, bukan sekadar menggambar peta:',
        keyPoints: [
          'Buffering (Penyanggaan): Membuat zona penyangga dengan radius jarak tertentu di sekitar objek (contoh: sempadan sungai 50 meter yang dilarang didirikan bangunan).',
          'Overlay (Tumpang Susun): Menggabungkan dua atau lebih layer tematik untuk menghasilkan satuan lahan baru (contoh: overlay layer jenis tanah + curah hujan + kelerengan lereng untuk memetakan daerah rawan longsor).',
          'Network Analysis: Menghitung rute tercepat kendaraan pemadam kebakaran berdasarkan hambatan kemacetan jalan.',
          'Interseksi & Kliping: Memotong layer data sesuai batas administrasi kabupaten tertentu.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Komponen Utama Sistem SIG',
        items: [
          { name: 'Perangkat Keras (Hardware)', description: 'Komputer kerja (CPU/GPU tinggi), digitizer, GPS receiver, monitor resolusi tinggi.' },
          { name: 'Perangkat Lunak (Software)', description: 'Aplikasi pengolah geospasial: QGIS (open-source), ArcGIS/ArcMap, GRASS GIS.' },
          { name: 'Data Geospasial', description: 'Data spasial (vektor/raster) dan data tabular atribut terintegrasi.' },
          { name: 'Sumber Daya Manusia (People)', description: 'Analis geospasial, GIS developer, dan perencana tata ruang yang mengoperasikan sistem.' },
          { name: 'Metode & Prosedur', description: 'Standar operasional prosedur (SOP) pengumpulan data, analisis tumpang susun, dan verifikasi akurasi.' }
        ]
      }
    ],
    processes: [
      { stage: 'Input Data', title: 'Akuisisi & Digitasi', description: 'Memasukkan peta analog, koordinat GPS lapangan, dan citra satelit ke sistem.' },
      { stage: 'Manajemen Basis Data', title: 'Penyimpanan & Relasi Atribut', description: 'Menghubungkan geometri objek dengan tabel data kependudukan atau fisik.' },
      { stage: 'Analisis Spasial', title: 'Overlay & Pemodelan Skor', description: 'Melakukan pembobotan multi-kriteria (Multi-Criteria Evaluation / AHP).' },
      { stage: 'Output & Visualisasi', title: 'Pencetakan Peta & WebGIS', description: 'Menghasilkan peta tematik cetak dan dashboard interaktif daring.' }
    ],
    caseStudies: [
      {
        title: 'Penentuan Lokasi Optimal Rumah Sakit Rujukan Darurat COVID-19 Menggunakan SIG',
        location: 'Surabaya, Jawa Timur, Indonesia',
        description: 'Pemerintah kota menggunakan analisis SIG dengan memasukkan parameter: jangkauan buffer jalan utama (<500 m), berada di luar zona rawan genangan banjir (overlay elevasi), dekat permukiman padat (>2000 jiwa/km²), dan berjarak minimal 5 km dari rumah sakit rujukan yang sudah ada. Hasil query menghasilkan 3 lokasi tanah aset pemda paling ideal.',
        takeaway: 'SIG mengubah data mentah menjadi keputusan spasial yang objektif, hemat waktu, dan menyelamatkan nyawa.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Arsitektur Tumpang Susun Layer Data SIG (Overlay)',
        caption: 'Visualisasi tumpukan layer: Pelanggan, Jaringan Jalan, Penggunaan Lahan, Elevasi, dan Citra Dasar.',
        badge: 'Spatial Analysis'
      }
    ],
    terminology: [
      { term: 'Data Vektor', definition: 'Format data spasial yang menyajikan objek muka bumi menggunakan koordinat titik, garis, dan poligon geometris.', scientificTerm: 'Vector Data' },
      { term: 'Data Raster', definition: 'Format data spasial yang menyajikan kenampakan bumi dalam susunan sel piksel berukuran seragam (grid).', scientificTerm: 'Raster Data' },
      { term: 'Buffering', definition: 'Operasi analisis spasial yang membentuk zona jangkauan berjarak tertentu di sekitar titik, garis, atau poligon.', scientificTerm: 'Buffer Analysis' }
    ],
    summary: [
      'SIG memadukan data spasial lokasi dan data atribut tekstual dalam basis data berbasis komputer.',
      'Data spasial terdiri dari format vektor (titik, garis, poligon presisi) dan format raster (grid piksel).',
      'Analisis tumpang susun (overlay) dan penyanggaan (buffering) menjadi fungsi inti dalam perencanaan wilayah.'
    ],
    quiz: [
      {
        id: 'q14-1',
        question: 'Dalam SIG, data spasial yang merepresentasikan kenampakan garis pantai, jaringan jalan tol, dan aliran sungai disimpan dalam struktur...',
        options: ['Poligon vektor', 'Garis (polyline) vektor', 'Titik (point) vektor', 'Tabel atribut tunggal'],
        correctAnswer: 1,
        explanation: 'Jalan tol, garis pantai, dan sungai adalah objek linear memanjang yang dalam struktur data vektor direpresentasikan menggunakan polyline (garis bersambung).'
      },
      {
        id: 'q14-2',
        question: 'Operasi spasial dalam SIG yang digunakan untuk membuat zona bebas bangunan selebar 100 meter di sepanjang kanan-kiri rel kereta api disebut...',
        options: ['Overlay union', 'Buffering', 'Network routing', 'Kriging interpolasi'],
        correctAnswer: 1,
        explanation: 'Buffering adalah proses pembuatan zona radius penyangga dengan jarak tertentu di sekitar entitas geografis.'
      }
    ],
    references: ['Longley, P. A., Goodchild, M. F., Maguire, D. J., & Rhind, D. W. (2015). Geographic Information Science and Systems. Wiley.', 'Burrough, P. A., & McDonnell, R. A. (1998). Principles of Geographical Information Systems. Oxford University Press.'],
    relatedTopicIds: ['peta-dan-kartografi', 'penginderaan-jauh-remote-sensing', 'analisis-spasial-lanjut-dan-geokomputasi', 'digital-elevation-model-dem-dan-lidar']
  },
  {
    id: 'penelitian-geografi',
    number: 15,
    title: 'Penelitian Geografi',
    englishTitle: 'Geographic Research: Fundamentals and Design',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Memahami hakikat penelitian geografi: ciri khas berpikir spasial, perumusan rumusan masalah 5W1H geosfer, variabel spasial, hipotesis penelitian, dan etika penelitian.',
    keywords: ['penelitian geografi', 'variabel spasial', 'rumusan masalah geosfer', 'metodologi geografi', 'hipotesis spasial'],
    learningObjectives: [
      'Mengidentifikasi ciri khas penelitian geografi dibanding penelitian ilmu sosial atau ilmu alam murni.',
      'Merumuskan judul dan rumusan masalah berbasis fenomena geosfer nyata di lingkungan sekitar.',
      'Menyusun variabel spasial, hipotesis, dan kerangka konseptual penelitian geografi.'
    ],
    introduction: 'Penelitian geografi adalah kegiatan ilmiah yang dilakukan secara sistematis untuk memecahkan persoalan geosfer atau menguji kebenaran teori keruangan menggunakan metode dan pendekatan khas geografi. Perbedaan mendasar antara penelitian geografi dan disiplin ilmu lainnya terletak pada keberadaan variabel spasial (lokasi, distribusi, keterjangkauan, interaksi ruang) dan penggunaan peta sebagai instrumen pengumpul data sekaligus media penyaji hasil analisis.',
    sections: [
      {
        subtitle: '1. Karakteristik Khas Penelitian Geografi',
        content: 'Penelitian geografi memiliki ciri identitas metodologis yang membedakannya secara tegas:',
        keyPoints: [
          'Berorientasi Geosfer: Mengkaji peristiwa yang melibatkan interaksi antara manusia dan komponen lingkungan fisik.',
          'Berlandaskan 3 Pendekatan Utama: Menggunakan analisis keruangan, analisis kelingkungan, atau analisis kompleks wilayah.',
          'Peta sebagai Alat Analisis Wajib: Setiap penelitian geografi selalu menghasilkan peta distribusi atau peta sintesis zonasi tematik.',
          'Menjawab Pertanyaan Spasial: Menjawab Where (di mana), Why there (mengapa di sana), dan What to do there (rekomendasi tata ruang apa yang tepat).'
        ]
      },
      {
        subtitle: '2. Tahapan Sistematika Penelitian Geografi',
        content: 'Penelitian geografi yang baik mengikuti struktur logis ilmiah baku kurikulum SMA dan perguruan tinggi:',
        table: {
          headers: ['Bab / Komponen', 'Muatan Pokok', 'Contoh Praktis'],
          rows: [
            ['I. Pendahuluan', 'Latar belakang fenomena, rumusan masalah (5W1H spasial), tujuan penelitian, manfaat praktis bagi tata ruang.', 'Latar belakang: melonjaknya banjir genangan di kawasan permukiman bantaran Sungai Citarum Hilir'],
            ['II. Tinjauan Pustaka', 'Teori geografi yang relevan (teori hidrologi DAS, teori alih fungsi lahan), kerangka berpikir, hipotesis.', 'Teori koefisien limpasan air permukaan (run-off) dan hubungan kepadatan permukiman dengan infiltrasi tanah'],
            ['III. Metode Penelitian', 'Lokasi penelitian (koordinat), jenis penelitian, populasi/sampel, teknik sampling, alat ukur, analisis SIG.', 'Sampling purposive di 10 titik muara anak sungai, analisis overlay peta tutupan lahan tahun 2013 vs 2023'],
            ['IV. Hasil dan Pembahasan', 'Deskripsi data lapangan, uji statistik, peta hasil tematik, sintesis keruangan.', 'Peta zonasi tingkat kerentanan banjir (Sangat Rendah, Sedang, Sangat Rawan) dan narasi faktor penyebab dominan'],
            ['V. Kesimpulan & Rekomendasi', 'Jawaban singkat rumusan masalah dan rekomendasi kebijakan spasial.', 'Rekomendasi relokasi sempadan sungai 30 meter dan pembuatan kolam retensi di desa terdampak']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Jenis Penelitian Geografi Berdasarkan Tujuan',
        items: [
          { name: 'Penelitian Eksploratif', description: 'Menjelajahi fenomena baru yang belum banyak diketahui pola spasialnya.' },
          { name: 'Penelitian Deskriptif', description: 'Menggambarkan kondisi sebaran dan karakteristik fisik/sosial wilayah secara terperinci.' },
          { name: 'Penelitian Eksplanatif (Korelasional)', description: 'Mencari hubungan sebab-akibat antarvariabel geosfer (contoh: hubungan kemiringan lereng dengan laju erosi).' }
        ]
      }
    ],
    processes: [
      { stage: 'Observasi Masalah', title: 'Identifikasi Fenomena Lapangan', description: 'Menemukan isu kesenjangan spasial atau kerusakan lingkungan di sekitar tempat tinggal.' },
      { stage: 'Desain Proposal', title: 'Penyusunan Desain Spasial', description: 'Menentukan batasan wilayah studi, skala peta kerja, dan instrumen kuesioner/sensor.' },
      { stage: 'Pengumpulan Data', title: 'Kerja Lapangan (Fieldwork)', description: 'Pengambilan titik koordinat GPS, wawancara warga, dan uji laboratorium sampel air/tanah.' },
      { stage: 'Sintesis Akhir', title: 'Publikasi & Rekomendasi', description: 'Menuliskan laporan ilmiah dan menyerahkan peta rekomendasi kepada pemangku kebijakan.' }
    ],
    caseStudies: [
      {
        title: 'Penelitian Dampak Pembangunan Jalan Tol Trans-Jawa terhadap Konversi Lahan Sawah',
        location: 'Kabupaten Brebes dan Tegal, Jawa Barat-Jawa Tengah',
        description: 'Peneliti geografi SMA melakukan studi eksplanatif untuk mengukur korelasi antara jarak pintu exit tol (interchange) dengan laju alih fungsi sawah irigasi teknis menjadi ruko dan gudang logistik. Hasil penelitian membuktikan bahwa dalam radius 2 km dari exit tol, konversi lahan mencapai 45% dalam kurun waktu 5 tahun.',
        takeaway: 'Penelitian geografi menyajikan bukti kuantitatif empiris yang berguna mencegah hilangnya lumbung pangan nasional.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Alur Metodologi Penelitian Geografi',
        caption: 'Bagan langkah kerja penelitian geografi dari penetapan rumusan masalah spasial hingga publikasi peta tematik.',
        badge: 'Research Design'
      }
    ],
    terminology: [
      { term: 'Variabel Spasial', definition: 'Faktor atau karakteristik terukur yang memiliki variasi nilai tergantung pada lokasi geografisnya di permukaan bumi.', scientificTerm: 'Spatial Variable' },
      { term: 'Uji Lapangan (Ground Truth)', definition: 'Kegiatan pengecekan langsung ke lokasi penelitian untuk mengonfirmasi kebenaran data peta atau citra satelit.', scientificTerm: 'Ground Truth Verification' },
      { term: 'Hipotesis Spasial', definition: 'Dugaan sementara mengenai hubungan atau persebaran fenomena geografis yang akan diuji melalui analisis data.', scientificTerm: 'Spatial Hypothesis' }
    ],
    summary: [
      'Penelitian geografi membedah fenomena geosfer dengan mengandalkan variabel spasial dan 3 pendekatan utama.',
      'Peta berfungsi ganda sebagai instrumen pengambilan data sekaligus media visual penyaji kesimpulan penelitian.',
      'Sistematika penelitian geografi mencakup pendahuluan, tinjauan pustaka, metode spasial, hasil analisis, dan rekomendasi tata ruang.'
    ],
    quiz: [
      {
        id: 'q15-1',
        question: 'Ciri pembeda paling utama dari penelitian geografi dibandingkan penelitian sosiologi atau ekonomi adalah...',
        options: [
          'Menggunakan rumus matematika yang rumit',
          'Selalu melibatkan variabel spasial (keruangan) dan menghasilkan peta tematik',
          'Hanya boleh diteliti oleh lembaga riset milik pemerintah',
          'Tidak memerlukan kajian pustaka terdahulu'
        ],
        correctAnswer: 1,
        explanation: 'Keberadaan variabel spasial (lokasi, distribusi, keterkaitan ruang) dan visualisasi peta adalah karakteristik identitas utama penelitian geografi.'
      },
      {
        id: 'q15-2',
        question: 'Seorang peneliti ingin menguji apakah ada hubungan nyata antara tingkat kemiringan lereng (lereng curam) dengan ketebalan solum tanah di pegunungan. Jenis penelitian ini tergolong...',
        options: ['Penelitian eksplanatif (korelasional)', 'Penelitian historis naratif', 'Penelitian biografi tokoh', 'Penelitian sensus murni'],
        correctAnswer: 0,
        explanation: 'Penelitian eksplanatif bertujuan mencari hubungan sebab-akibat (korelasi) antarvariabel fenomena geosfer.'
      }
    ],
    references: ['Yunus, H. S. (2010). Metodologi Penelitian Wilayah Kontemporer. Pustaka Pelajar.', 'Clifford, N., Cope, M., Gillespie, T., & French, S. (2016). Key Methods in Geography. SAGE Publications.'],
    relatedTopicIds: ['metode-dan-teknik-penelitian-geografi', 'hakikat-dan-konsep-dasar-geografi', 'pendekatan-geografi']
  },
  {
    id: 'metode-dan-teknik-penelitian-geografi',
    number: 16,
    title: 'Metode dan Teknik Penelitian Geografi',
    englishTitle: 'Geographic Research Methods and Fieldwork Techniques',
    categoryId: 'pemetaan-geospasial',
    difficulty: 'Intermediate',
    description: 'Mendalami teknik pengumpulan data geografi: survei lapangan terestris, wawancara, kuesioner, studi dokumentasi, interpretasi citra, teknik sampling spasial (random, stratified, systematic cluster), serta teknik analisis data.',
    keywords: ['survei lapangan', 'teknik sampling spasial', 'kuesioner spasial', 'interpretasi citra', 'analisis data kuantitatif kualitatif', 'fieldwork'],
    learningObjectives: [
      'Menjelaskan berbagai teknik pengumpulan data geografi primer (lapangan) dan sekunder.',
      'Memilih teknik sampling spasial yang tepat (acak sederhana, berstrata, klaster berdasar unit lahan).',
      'Memahami etika dan prosedur keselamatan kerja dalam survei lapangan (fieldwork) geografi.'
    ],
    introduction: 'Kekuatan seorang geograf berakar pada kemampuannya mengumpulkan data langsung di bentang alam melalui kerja lapangan (fieldwork). Metode dan teknik penelitian geografi memadukan instrumen sains fisik (seperti kompas geologi, klinometer pengukur lereng, GPS, bor tanah) dengan instrumen sosial humaniora (kuesioner sosial, wawancara mendalam dengan tokoh adat, analisis statistik sensus). Memilih teknik sampling yang tepat menjamin bahwa data yang dikumpulkan benar-benar mewakili keragaman spasial populasi wilayah.',
    sections: [
      {
        subtitle: '1. Teknik Pengumpulan Data Geografi',
        content: 'Data geografi dibedakan menjadi Data Primer (diambil langsung dari sumber pertama di lapangan) dan Data Sekunder (diperoleh dari publikasi instansi resmi seperti BPS, BMKG, BIG, atau BNPB):',
        table: {
          headers: ['Teknik', 'Sifat Data', 'Alat / Instrumen yang Digunakan', 'Contoh Aplikasi'],
          rows: [
            ['Survei Lapangan Terestris', 'Primer Fisik', 'GPS Garmin, kompas bidik, klinometer, pita ukur, bor tanah', 'Pengukuran ketebalan lapisan tanah humus dan kemiringan lereng di perbukitan'],
            ['Wawancara & Kuesioner', 'Primer Sosial', 'Kuesioner berstruktur, pedoman wawancara, perekam suara', 'Survei persepsi warga mengenai rencana relokasi pascabencana erupsi'],
            ['Interpretasi Citra Satelit', 'Primer / Sekunder', 'Citra Sentinel-2, perangkat lunak SIG, kunci interpretasi', 'Digitasi luasan tutupan vegetasi dan ekspansi permukiman perkotaan'],
            ['Studi Dokumentasi Instansi', 'Sekunder', 'Laporan BPS (Kabupaten Dalam Angka), data curah hujan BMKG', 'Pengambilan data historis curah hujan 10 tahun terakhir untuk analisis iklim']
          ]
        }
      },
      {
        subtitle: '2. Desain Teknik Sampling Spasial',
        content: 'Sampling dalam geografi harus mempertimbangkan variasi ruang permukaan bumi yang tidak seragam:',
        keyPoints: [
          'Spatial Random Sampling: Pengambilan titik sampel secara acak pada peta wilayah menggunakan generator koordinat acak.',
          'Stratified Spatial Sampling: Wilayah dibagi dulu menjadi zona homogen (strata) berdasarkan unit lahan atau ketinggian tempat, lalu sampel diambil dari tiap strata.',
          'Systematic Grid Sampling: Titik sampel diambil pada interval jarak kisi grid teratur (contoh: setiap jarak 500 meter diambil 1 sampel air sumur).',
          'Cluster Sampling Berbasis Unit Lahan: Pengambilan sampel pada satuan bentuk lahan yang seragam (landform units).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Pendekatan Analisis Data Geografi',
        items: [
          { name: 'Analisis Kuantitatif Spasial', description: 'Penggunaan statistik spasial, regresi linier jarak, korelasi Pearson, dan indeks Moran.' },
          { name: 'Analisis Kualitatif Deskriptif', description: 'Penafsiran makna persepsi ruang warga, narasi sejarah perubahan tempat, dan etnogeografi.' },
          { name: 'Analisis Komputasi Geospasial', description: 'Pemodelan tumpang susun bobot (Weighted Overlay), Cellular Automata, dan machine learning tutupan lahan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Persiapan Alat', title: 'Kalibrasi & Peta Kerja', description: 'Mempersiapkan peta tentatif, GPS genggam terkalibrasi, dan surat izin penelitian.' },
      { stage: 'Eksekusi Lapangan', title: 'Pengambilan Titik Sampel', description: 'Mendatangi titik koordinat di lapangan, mengambil sampel tanah/air, dan mencatat atribut.' },
      { stage: 'Uji Laboratorium', title: 'Analisis Sifat Fisik Kimia', description: 'Menguji tekstur tanah, salinitas air tanah, atau kandungan sedimen sungai.' },
      { stage: 'Interpolasi Spasial', title: 'Pembuatan Peta Kontinu', description: 'Menginterpolasi nilai titik sampel ke seluruh bidang wilayah (IDW / Kriging).' }
    ],
    caseStudies: [
      {
        title: 'Penerapan Systematic Grid Sampling untuk Menguji Intrusi Air Asin di Jakarta Utara',
        location: 'Penjaringan dan Cilincing, Jakarta Utara, Indonesia',
        description: 'Mahasiswa geografi menguji intrusi air laut dengan membuat grid peta kotak berukuran 1 km x 1 km di sepanjang pesisir. Di setiap kotak grid diambil 1 sampel air sumur warga untuk diuji daya hantar listrik (DHL) dan salinitasnya. Peta hasil interpolasi membuktikan intrusi air asin telah merangsek sejauh 8 km ke arah selatan.',
        takeaway: 'Teknik sampling grid yang terencana menghasilkan data spasial yang representatif tanpa bias titik lokasi.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Metode Sampling Spasial: Random, Stratified, dan Systematic Grid',
        caption: 'Bagan komparasi visual tiga metode peletakan titik sampel uji pada peta kerja wilayah.',
        badge: 'Spatial Sampling'
      }
    ],
    terminology: [
      { term: 'Sampling Spasial', definition: 'Proses pemilihan titik atau area pengamatan di permukaan bumi yang mewakili populasi ruang geografis.', scientificTerm: 'Spatial Sampling' },
      { term: 'Interpolasi Spasial', definition: 'Prosedur matematis untuk memperkirakan nilai suatu variabel pada lokasi yang tidak disampel berdasarkan nilai-nilai titik terdekat (misal: IDW, Kriging).', scientificTerm: 'Spatial Interpolation' },
      { term: 'Satuan Lahan (Land Unit)', definition: 'Hamparan lahan yang memiliki kombinasi kesamaan bentuk relief, litologi batuan, tanah, dan vegetasi penutup.', scientificTerm: 'Land Unit' }
    ],
    summary: [
      'Penelitian geografi memadukan survei fisik lapangan terestris dengan survei sosial kependudukan.',
      'Metode sampling spasial (random, stratified, systematic grid) memastikan keterwakilan variasi karakteristik medan.',
      'Interpolasi spasial memungkinkan pembuatan peta distribusi kontinu dari sejumlah titik sampel terukur.'
    ],
    quiz: [
      {
        id: 'q16-1',
        question: 'Pengambilan sampel tanah yang dilakukan pada titik-titik persilangan kisi-kisi peta dengan jarak teratur setiap 500 meter disebut teknik sampling...',
        options: ['Systematic Grid Sampling', 'Snowball sampling kualitatif', 'Convenience accidental sampling', 'Quota sampling terfokus'],
        correctAnswer: 0,
        explanation: 'Systematic Grid Sampling menggunakan kisi kotak berjarak teratur dan konsisten untuk menentukan titik pengambilan sampel di lapangan.'
      },
      {
        id: 'q16-2',
        question: 'Metode matematis dalam SIG yang digunakan untuk memperkirakan nilai curah hujan di suatu desa yang tidak memiliki stasiun penakar hujan berdasarkan data stasiun-stasiun terdekat di sekelilingnya disebut...',
        options: ['Buffering', 'Interpolasi spasial (misal IDW/Kriging)', 'Kliping poligon', 'Digitasi on-screen'],
        correctAnswer: 1,
        explanation: 'Interpolasi spasial (seperti Inverse Distance Weighting atau Kriging) memperkirakan nilai fenomena kontinu di titik tak bersampel berdasarkan titik-titik sampel terukur di sekitarnya.'
      }
    ],
    references: ['Clifford, N., et al. (2016). Key Methods in Geography. SAGE Publications.', 'Yunus, H. S. (2010). Metodologi Penelitian Wilayah Kontemporer.'],
    relatedTopicIds: ['penelitian-geografi', 'sistem-informasi-geografis-sig', 'analisis-spasial-lanjut-dan-geokomputasi']
  }
];
