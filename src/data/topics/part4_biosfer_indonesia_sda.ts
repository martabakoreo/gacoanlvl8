import { Topic } from '../../types/geography';

export const topicsPart4: Topic[] = [
  // CATEGORY F: Biosfer dan Keanekaragaman Hayati (47-53)
  {
    id: 'biosfer-dan-ekosistem',
    number: 47,
    title: 'Biosfer dan Ekosistem',
    englishTitle: 'Biosphere and Ecological Systems',
    categoryId: 'biosfer',
    difficulty: 'Beginner',
    description: 'Menelaah biosfer sebagai lapisan kehidupan di bumi: konsep hierarki organisasi kehidupan (individu, populasi, komunitas, ekosistem, bioma, biosfer), faktor pendukung dan penghambat persebaran makhluk hidup (klimatik, edafik, fisiografik, biotik).',
    keywords: ['biosfer', 'ekosistem', 'faktor edafik', 'faktor klimatik', 'hierarki kehidupan', 'daya dukung lingkungan'],
    learningObjectives: [
      'Menjelaskan definisi biosfer dan batas-batas zona kehidupan di planet bumi.',
      'Mengidentifikasi tingkatan hierarki organisasi kehidupan dari tingkat individu hingga biosfer.',
      'Menganalisis 4 faktor utama yang mengendalikan persebaran flora dan fauna di permukaan bumi.'
    ],
    introduction: 'Biosfer (berasal dari kata Yunani "bios" yang berarti hidup dan "sphaira" yang berarti lapisan) adalah sistem kehidupan global yang menyatukan seluruh organisme hidup beserta hubungan timbal baliknya dengan litosfer, hidrosfer, dan atmosfer. Zona biosfer di bumi terbilang sangat tipis jika dibandingkan ukuran planet: membentang dari palung laut terdalam (sekitar 11 km di bawah laut) hingga batas atas troposfer tempat spora bakteri dan burung pengembara terbang (sekitar 8-10 km di atas permukaan laut). Namun, kelimpahan kehidupan tertinggi terkonsentrasi pada lapisan tipis beberapa meter di atas dan di bawah permukaan tanah.',
    sections: [
      {
        subtitle: '1. Hierarki Organisasi Kehidupan dalam Geografi',
        content: 'Dalam biosfer, kehidupan beroperasi dalam tingkatan sistemik yang saling bertingkat:',
        table: {
          headers: ['Tingkatan', 'Definisi Konseptual', 'Contoh Nyata di Alam'],
          rows: [
            ['Individu', 'Satu makhluk hidup tunggal yang otonom', 'Seekor Orangutan Sumatra (Pongo abelii)'],
            ['Populasi', 'Kumpulan individu sejenis yang mendiami ruang dan waktu yang sama', 'Sekelompok orangutan yang mendiami Hutan Taman Nasional Gunung Leuser'],
            ['Komunitas', 'Kumpulan berbagai populasi berbeda yang hidup berdampingan di suatu habitat', 'Populasi orangutan, harimau sumatra, gajah, pohon meranti, dan anggrek hutan'],
            ['Ekosistem', 'Tatanan kesatuan utuh antara komunitas hayati (biotik) dengan lingkungan fisiknya (abiotik)', 'Ekosistem hutan hujan tropis dataran rendah Aceh dengan siklus hara dan aliran energi'],
            ['Bioma', 'Ekosistem terestrial berskala regional benua yang dicirikan oleh vegetasi dominan dan iklim khas', 'Bioma Hutan Hujan Tropis, Bioma Sabana, Bioma Taiga, Bioma Gurun'],
            ['Biosfer', 'Seluruh zona di bumi yang mendukung kehidupan dan menjadi wadah bagi seluruh bioma dunia', 'Planet Bumi secara keseluruhan sebagai satu kesatuan sistem penyangga kehidupan']
          ]
        }
      },
      {
        subtitle: '2. Empat Faktor Pengendali Persebaran Flora dan Fauna',
        content: 'Tidak semua organisme dapat hidup di sembarang tempat. Persebarannya dibatasi oleh empat faktor lingkungan:',
        keyPoints: [
          'Faktor Klimatik (Iklim): Suhu udara, kelembapan, curah hujan, penyinaran matahari, dan hembusan angin. Iklim adalah faktor paling dominan yang menentukan batas bioma di bumi.',
          'Faktor Edafik (Kondisi Tanah): Tekstur tanah, struktur aerasi, derajat keasaman (pH tanah), kadar air tanah, dan ketersediaan unsur hara makro/mikro.',
          'Faktor Fisiografis / Geomorfologis: Ketinggian tempat (elevasi), sudut kemiringan lereng, dan orientasi lereng terhadap sinar matahari (aspek lereng).',
          'Faktor Biotik: Peranan makhluk hidup lain, termasuk aktivitas peradaban manusia (antropogenik) yang mengubah habitat, domestikasi, perburuan liar, atau konservasi alam.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Adaptasi Flora Berdasarkan Ketersediaan Air',
        items: [
          { name: 'Xerofit', description: 'Tumbuhan adaptif lingkungan sangat kering/gurun dengan daun berduri, batang berdaging sukulen penyimpan air (kaktus, lidah buaya).' },
          { name: 'Hidrofit', description: 'Tumbuhan yang hidup terapung atau terendam di dalam air dengan rongga udara dan daun lebar (teratai, eceng gondok).' },
          { name: 'Higrofit', description: 'Tumbuhan yang hidup di habitat lembap teduh dengan transpirasi tinggi (tumbuhan paku, lumut, begonia).' },
          { name: 'Mesofit', description: 'Tumbuhan di lingkungan kelembapan sedang rata-rata (pohon mangga, jati, beringin).' }
        ]
      }
    ],
    processes: [
      { stage: 'Penyinaran Surya', title: 'Fotosintesis Primer', description: 'Produsen vegetasi hijau menyerap energi matahari mengikat CO2 menjadi biomassa glukosa.' },
      { stage: 'Rantai Makanan', title: 'Aliran Energi Trofik', description: 'Herbivora mengonsumsi produsen, diteruskan ke karnivora dalam piramida biomassa.' },
      { stage: 'Dekomposisi Tanah', title: 'Daur Ulang Nutrien', description: 'Bakteri dan jamur dekomposer menguraikan bangkai mengembalikan unsur hara ke litosfer.' }
    ],
    caseStudies: [
      {
        title: 'Pengaruh Faktor Edafik terhadap Tumbuhan Kantong Semar (Nepenthes) di Lahan Basah Tropis',
        location: 'Kalimantan Barat dan Belitung, Indonesia',
        description: 'Kantong semar (Nepenthes) mampu tumbuh subur di tanah berpasir kuarsa dan rawa gambut yang sangat miskin unsur hara nitrogen. Karena faktor edafik tanah tidak menyediakan nitrogen yang cukup, tanaman ini beradaptasi secara morfologis dengan memodifikasi ujung daunnya menjadi kantong penjebak serangga kaya enzim pencerna protein untuk memperoleh nitrogen tambahan dari tubuh serangga.',
        takeaway: 'Tekanan faktor lingkungan memicu keajaiban adaptasi evolusioner keanekaragaman hayati.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Hierarki Organisasi Kehidupan dari Individu hingga Biosfer',
        caption: 'Bagan berjenjang: Individu → Populasi → Komunitas → Ekosistem → Bioma → Biosfer.',
        badge: 'Ecological Organization'
      }
    ],
    terminology: [
      { term: 'Biosfer', definition: 'Lapisan tipis di permukaan bumi yang mencakup seluruh organisme hidup beserta ruang interaksinya dengan lingkungan fisik.', scientificTerm: 'Biosphere' },
      { term: 'Faktor Edafik', definition: 'Kondisi fisik, kimia, dan biologis tanah yang membatasi dan mempengaruhi pertumbuhan komunitas tumbuhan di suatu wilayah.', scientificTerm: 'Edaphic Factor' },
      { term: 'Bioma', definition: 'Komunitas ekologis regional berskala luas yang dicirikan oleh bentuk kehidupan vegetasi dominan dan adaptasi iklim yang sama.', scientificTerm: 'Biome' }
    ],
    summary: [
      'Biosfer adalah lapisan kehidupan yang terbentang tipis di persimpangan litosfer, hidrosfer, dan atmosfer.',
      'Hierarki kehidupan tersusun dari individu, populasi, komunitas, ekosistem, bioma, hingga biosfer.',
      'Persebaran flora-fauna dikendalikan oleh faktor klimatik, edafik (tanah), fisiografis (topografi), dan biotik (termasuk manusia).'
    ],
    quiz: [
      {
        id: 'q47-1',
        question: 'Faktor yang berkaitan dengan kondisi fisik dan kimia tanah seperti tekstur, kegemburan, porositas, dan tingkat keasaman (pH) yang mempengaruhi persebaran tumbuhan disebut faktor...',
        options: ['Klimatik', 'Edafik', 'Fisiografis', 'Biotik'],
        correctAnswer: 1,
        explanation: 'Faktor edafik adalah faktor yang berkaitan dengan karakteristik tanah (struktur, tekstur, kelembapan tanah, dan kandungan hara) yang mempengaruhi kehidupan tumbuhan.'
      },
      {
        id: 'q47-2',
        question: 'Kelompok tumbuhan yang memiliki adaptasi khusus untuk hidup di lingkungan yang sangat kering dan minim air (seperti kaktus dengan daun berbentuk duri tebal) dikelompokkan ke dalam jenis...',
        options: ['Hidrofit', 'Higrofit', 'Xerofit', 'Halofit'],
        correctAnswer: 2,
        explanation: 'Xerofit adalah kelompok tumbuhan yang teradaptasi hidup pada habitat kering dan bersuhu tinggi dengan modifikasi daun duri dan batang sukulen penyimpan air.'
      }
    ],
    references: ['Begon, M., Townsend, C. R., & Harper, J. L. (2006). Ecology: From Individuals to Ecosystems. Blackwell.', 'Odum, E. P. (1971). Fundamentals of Ecology. W. B. Saunders.'],
    relatedTopicIds: ['bioma-dunia', 'persebaran-flora-dan-fauna-dunia', 'keanekaragaman-hayati', 'pedosfer-dan-pembentukan-tanah']
  },
  {
    id: 'bioma-dunia',
    number: 48,
    title: 'Bioma Dunia',
    englishTitle: 'Terrestrial Biomes of the World',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis 7 bioma terestrial utama di dunia: Hutan Hujan Tropis, Hutan Gugur (Deciduous Forest), Sabana (Savanna), Padang Rumput (Stepa/Praire/Pampa), Gurun (Desert), Hutan Boreal/Taiga, dan Tundra Arktik-Alpin.',
    keywords: ['bioma dunia', 'hutan hujan tropis', 'taiga', 'tundra permafrost', 'sabana vs stepa', 'hutan gugur temperate'],
    learningObjectives: [
      'Menjelaskan definisi bioma dan kaitannya dengan grafik temperatur dan curah hujan tahunan (Whittaker Diagram).',
      'Mengidentifikasi ciri fisik, adaptasi flora, dan fauna khas dari 7 bioma terestrial dunia.',
      'Membedakan bioma Sabana (padang rumput diselingi pohon) dan bioma Stepa (padang rumput murni tanpa pohon).'
    ],
    introduction: 'Bioma adalah ekosistem daratan berskala luas yang menempati wilayah geografis benua tertentu dan dicirikan oleh bentuk kehidupan vegetasi klimaks dominan serta fauna yang telah beradaptasi dengan kondisi iklim regionalnya. Robert Whittaker menunjukkan bahwa tipe bioma terestrial di bumi ditentukan secara langsung oleh dua variabel utama: rata-rata temperatur tahunan dan rata-rata curah hujan tahunan. Dari ekuator yang hangat basah hingga kutub yang beku, bumi terbagi ke dalam 7 bioma utama.',
    sections: [
      {
        subtitle: '1. Rincian 7 Bioma Terestrial Utama di Dunia',
        content: 'Masing-masing bioma memiliki ciri adaptasi iklim dan keanekaragaman hayati yang khas:',
        table: {
          headers: ['Nama Bioma', 'Karakteristik Iklim', 'Ciri Vegetasi Dominan', 'Fauna Khas', 'Wilayah Persebaran Dunia'],
          rows: [
            ['1. Hutan Hujan Tropis', 'Suhu hangat 25°–28°C stabil sepanjang tahun, curah hujan sangat tinggi > 2.000 mm/tahun tanpa musim kering', 'Pohon kanopi rapat tinggi (>40 m), liana merambat, epifit (anggrek), keanekaragaman hayati tertinggi di dunia', 'Orangutan, jaguar, harimau, toucan, burung cenderawasih, serangga raksasa', 'Amazon (Amerika Selatan), Kongo (Afrika Tengah), Nusantara (Indonesia & Malaysia)'],
            ['2. Hutan Gugur (Deciduous)', 'Mengalami 4 musim (panas, gugur, dingin, semi); curah hujan merata 750 – 1.000 mm/tahun', 'Pohon berdaun lebar yang meranggas menggugurkan daunnya pada musim gugur untuk menghemat air', 'Rusa kutub, rubah, beruang cokelat, tupai, burung pelatuk', 'Amerika Serikat timur, Eropa Barat dan Tengah, Asia Timur (Jepang, Korea, Tiongkok timur)'],
            ['3. Sabana (Savanna)', 'Iklim tropis dengan musim kemarau panjang; curah hujan 900 – 1.500 mm/tahun', 'Padang rumput luas yang diselingi oleh pohon-pohon yang tumbuh terpencar (pohon akasia, baobab)', 'Zebra, jerapah, gajah afrika, singa, cheetah, hyena, komodo', 'Afrika Timur (Serengeti), Brasil (Cerrado), Australia utara, Nusa Tenggara Timur (Indonesia)'],
            ['4. Stepa (Grassland)', 'Iklim semi-kering (semi-arid); curah hujan rendah 250 – 500 mm/tahun', 'Hamparan padang rumput pendek tanpa pepohonan sama sekali (prairie, pampa, puszta)', 'Bison amerika, kuda liar mustang, kijang saiga, anjing prairi, serigala', 'Great Plains Amerika Utara, Pampa Argentina, Stepa Eurasia (Rusia selatan – Mongolia)'],
            ['5. Gurun (Desert)', 'Sangat kering; curah hujan sangat rendah < 250 mm/tahun, penguapan melebihi presipitasi, amplitudo suhu siang-malam ekstrem', 'Tumbuhan xerofit berdaun duri tebal sukulen, semak akasia berduri, efemera gurun', 'Unta dromedaris, ular derik, kalajengking, rubah fennec, kadal bertanduk', 'Gurun Sahara & Kalahari (Afrika), Gurun Arab, Gurun Gobi (Asia), Gurun Gibson (Australia)'],
            ['6. Taiga (Hutan Boreal)', 'Musim dingin sangat panjang dan membeku, musim panas sangat singkat sejuk; presipitasi salju sedang', 'Hutan homogen jarum (konifer evergreen) berdaun lilin tahan beku: pinus, cemara, spruce, fir', 'Beruang grizzly, serigala abu-abu, rusa besar moose,猞猁 lynx, rubah kutub', 'Rusia (Siberia), Kanada utara, Alaska, kawasan Skandinavia'],
            ['7. Tundra', 'Sangat dingin beku; tidak ada musim panas nyata, tanah lapisan bawah beku permanen (permafrost)', 'Vegetasi kerdil tanpa pohon: lumut kerak (lichen), lumut daun, rumput teki kerdil', 'Rusa kutub kutub (caribou), musk ox, beruang kutub, kelinci arktik', 'Pesisir Samudra Arktik paling utara di belahan bumi utara, puncak Pegunungan Alpen/Himalaya']
          ]
        }
      },
      {
        subtitle: '2. Perbedaan Krusial antara Sabana dan Stepa',
        content: 'Sering terjadi kekeliruan antara Sabana dan Stepa dalam ujian:',
        keyPoints: [
          'Sabana: Merupakan padang rumput tropis yang diselingi oleh kelompok pohon-pohon tinggi yang berdiri menyendiri (seperti pohon Akasia atau Palem). Curah hujannya masih cukup untuk menopang kehidupan pohon terpencar.',
          'Stepa: Merupakan padang rumput murni yang sama sekali tidak ditumbuhi pepohonan karena curah hujannya terlalu rendah untuk mendukung pertumbuhan pohon.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Zonasi Bioma Berdasarkan Lintang Geografis',
        items: [
          { name: 'Bioma Lintang Rendah (Tropis)', description: 'Hutan Hujan Tropis, Hutan Musim Tropis, Sabana Tropis.' },
          { name: 'Bioma Lintang Sedang (Subtropis)', description: 'Hutan Gugur Iklim Sedang, Stepa Prairi, Chaparral Mediterania.' },
          { name: 'Bioma Lintang Tinggi (Kutub)', description: 'Hutan Boreal Taiga Konifer dan Tundra Permafrost.' }
        ]
      }
    ],
    processes: [
      { stage: 'Variasi Insolasi Lintang', title: 'Gradien Radiasi Matahari', description: 'Energi surya maksimum di khatulistiwa dan minimum di kutub menciptakan sabuk temperatur dunia.' },
      { stage: 'Sirkulasi Global Sel Udara', title: 'Distribusi Presipitasi Hujan', description: 'Udara naik di ekuator menurunkan hujan hutan tropis; udara turun di 30° menciptakan sabuk gurun.' },
      { stage: 'Adaptasi Morfologis', title: 'Spesiasi & Suksesi Vegetasi', description: 'Tumbuhan mengembangkan adaptasi daun jarum di taiga atau daun lilin di hutan hujan.' }
    ],
    caseStudies: [
      {
        title: 'Taman Nasional Baluran: "Africa van Java" sebagai Representasi Bioma Sabana Indonesia',
        location: 'Situbondo dan Banyuwangi, Jawa Timur, Indonesia',
        description: 'Taman Nasional Baluran terletak di daerah bayangan hujan Gunung Baluran dengan curah hujan rendah. Kondisi iklim monsun kering ini membentuk bioma Sabana alami seluas sekitar 10.000 hektar yang didominasi padang rumput rumput gebang dan pohon akasia (Acacia nilotica), menjadi habitat kawanan banteng jawa (Bos javanicus), rusa timor, merak hijau, dan macan tutul.',
        takeaway: 'Meskipun Indonesia beriklim tropis basah, anomali orografis mampu melahirkan kantung bioma sabana yang eksotis.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Persebaran 7 Bioma Terestrial Dunia',
        caption: 'Peta global pembagian bioma dunia dari Hutan Hujan Tropis khatulistiwa hingga Tundra di lingkar Arktik.',
        badge: 'Global Biomes'
      }
    ],
    terminology: [
      { term: 'Permafrost', definition: 'Lapisan tanah bawah permukaan di bioma tundra yang membeku beku secara permanen selama minimal dua tahun berturut-turut.', scientificTerm: 'Permafrost' },
      { term: 'Hutan Konifer (Taiga)', definition: 'Hutan berdaun jarum yang selalu hijau (evergreen) yang didominasi oleh spesies pinus, cemara, dan spruce yang tahan dingin ekstrem.', scientificTerm: 'Boreal Forest / Taiga' },
      { term: 'Liana', definition: 'Tumbuhan berkayu yang merambat pada pohon-pohon hutan hujan tropis untuk mencapai sinar matahari di tajuk kanopi atas (contoh: rotan).', scientificTerm: 'Liana' }
    ],
    summary: [
      'Bioma adalah ekosistem daratan berskala luas yang dicirikan oleh iklim dan vegetasi dominan yang khas.',
      'Tujuh bioma utama adalah Hutan Hujan Tropis, Hutan Gugur, Sabana, Stepa, Gurun, Taiga, dan Tundra.',
      'Suhu rata-rata tahunan dan curah hujan tahunan adalah dua parameter utama penentu tipe bioma bumi.'
    ],
    quiz: [
      {
        id: 'q48-1',
        question: 'Bioma yang terletak di kawasan kutub utara beriklim sangat dingin tanpa pohon sama sekali, dengan tanah lapisan bawah membeku beku permanen (permafrost) dan vegetasi berupa lumut kerak (lichen) adalah bioma...',
        options: ['Taiga', 'Tundra', 'Hutan gugur', 'Stepa'],
        correctAnswer: 1,
        explanation: 'Tundra adalah bioma tanpa pohon (treeless) di kawasan lingkar Arktik dan puncak gunung es yang tanah bawahnya membeku permanen (permafrost).'
      },
      {
        id: 'q48-2',
        question: 'Perbedaan mendasar antara bentang alam bioma Sabana dan bioma Stepa terletak pada...',
        options: [
          'Sabana berada di daerah kutub sedangkan stepa di ekuator',
          'Sabana adalah padang rumput yang diselingi pepohonan terpencar, sedangkan stepa adalah padang rumput murni tanpa pohon',
          'Stepa memiliki curah hujan jauh lebih tinggi dibanding hutan hujan',
          'Sabana hanya ditumbuhi tanaman kaktus berduri'
        ],
        correctAnswer: 1,
        explanation: 'Sabana adalah padang rumput luas yang masih diselingi pohon-pohon tinggi terpencar (seperti akasia), sedangkan stepa adalah padang rumput murni tanpa pepohonan.'
      }
    ],
    references: ['Whittaker, R. H. (1975). Communities and Ecosystems. Macmillan.', 'Walter, H. (1985). Vegetation of the Earth and Ecological Systems of the Geo-biosphere. Springer-Verlag.'],
    relatedTopicIds: ['biosfer-dan-ekosistem', 'persebaran-flora-dan-fauna-dunia', 'klasifikasi-iklim', 'keanekaragaman-hayati']
  },
  {
    id: 'persebaran-flora-dan-fauna-dunia',
    number: 49,
    title: 'Persebaran Flora dan Fauna Dunia',
    englishTitle: 'Global Zoogeographic and Phytogeographic Realms',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis 6 kawasan zoogeografi dunia menurut Alfred Russel Wallace: Region Paleartik, Neartik, Ethiopian (Afrotropikal), Oriental, Australis, dan Neotropikal, beserta fauna endemik representatifnya.',
    keywords: ['wilayah fauna wallace', 'region neotropik', 'region oriental', 'region ethiopian', 'region paleartik neartik', 'zoogeografi dunia'],
    learningObjectives: [
      'Menyebutkan dan memetakan 6 region zoogeografi fauna dunia menurut Alfred Russel Wallace.',
      'Mengidentifikasi spesies fauna representatif dari masing-masing region zoogeografi.',
      'Menghubungkan sejarah tektonik lempeng dan pemisahan benua dengan isolasi biogeografis fauna dunia.'
    ],
    introduction: 'Mengapa kanguru hanya dijumpai secara alami di Australia? Mengapa penguin hidup di belahan bumi selatan sementara beruang kutub hanya hidup di lingkar Arktik utara? Alfred Russel Wallace (1876) meletakkan fondasi sains Zoogeografi (Geografi Hewan) dengan membagi daratan bumi ke dalam 6 kawasan (realm) zoogeografi utama berdasarkan kemiripan taksonomi, sejarah evolusi, serta isolasi geografis penghalang samudra dan pegunungan.',
    sections: [
      {
        subtitle: '1. Enam Kawasan Zoogeografi Dunia Menurut Wallace',
        content: 'Masing-masing wilayah fauna dipisahkan oleh penghalang geografis alamiah (geographic barriers):',
        table: {
          headers: ['Region Zoogeografi', 'Cakupan Wilayah Geografis', 'Ciri Khas & Taksonomi', 'Contoh Fauna Representatif'],
          rows: [
            ['1. Region Oriental', 'Asia Selatan (India), Asia Tenggara (Indonesia barat, Malaysia, Thailand), dan Tiongkok selatan', 'Mamalia berukuran sangat besar, banyak jenis kera/primata arboreal, burung bersuara merdu', 'Gajah asia, harimau, badak bercula satu, orangutan, tapir asia, bekantan'],
            ['2. Region Paleartik', 'Seluruh daratan Benua Eropa, Rusia (Siberia), Asia Tengah, Jepang, dan Afrika bagian utara Sahara', 'Fauna yang teradaptasi dengan iklim sedang dan dingin beku; keanekaragaman jenis sedang', 'Panda raksasa, beruang kutub, serigala eurasia, rusa kutub reindeer, bison eropa, burung robin'],
            ['3. Region Neartik', 'Amerika Utara mencakup seluruh Kanada, Amerika Serikat, dan dataran tinggi Meksiko tengah', 'Mirip dengan Paleartik karena pernah terhubung oleh Jembatan Darat Bering (Beringia)', 'Bison amerika, beruang grizzly, kalkun liar, domba bighorn, musk ox, anjing padang rumput'],
            ['4. Region Ethiopian (Afrotropik)', 'Seluruh Benua Afrika di selatan Gurun Sahara, dan Pulau Madagaskar', 'Mamalia darat raksasa terbanyak di dunia, hewan pemangsa buas, primata tingkat tinggi', 'Jerapah, zebra, gorila, simpanse, singa, cheetah, badak putih afrika, kuda nil, lemur (Madagaskar)'],
            ['5. Region Neotropik', 'Amerika Tengah, Meksiko dataran rendah, Kepulauan Karibia, dan seluruh Benua Amerika Selatan', 'Banyak mamalia bergelantungan (prehensile tail), amfibi warna-warni beracun, burung eksotis', 'Trenggiling raksasa, kungkang (sloth), jaguar, llama, alpaka, ikan piranha, burung tukan, anaconda'],
            ['6. Region Australis', 'Benua Australia, Selandia Baru, Papua / Irian, dan kepulauan kecil di Samudra Pasifik', 'Didominasi hewan berkantung (marsupialia) dan mamalia bertelur primitif (monotremata), nihil mamalia berplasenta besar', 'Kanguru, koala, platipus berparuh bebek, echidna, wombat, burung kiwi, burung emu, cenderawasih']
          ]
        }
      },
      {
        subtitle: '2. Penghalang Biogeografis (Geographic Barriers)',
        content: 'Persebaran fauna terhenti pada batas-batas rintangan alami:',
        keyPoints: [
          'Rintangan Fisik / Topografi: Rantai Pegunungan Himalaya yang menjulang tinggi memisahkan Region Oriental di selatan dengan Region Paleartik di utara.',
          'Rintangan Iklim / Air: Lautan luas (seperti Samudra Atlantik) dan Gurun Sahara yang membentang memisahkan fauna Afrika (Ethiopian) dengan fauna Eropa (Paleartik).',
          'Jembatan Darat Purba (Land Bridges): Tanah genting Panama yang menyatukan Amerika Utara dan Selatan memicu pertukaran fauna massal (Great American Biotic Interchange).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kerajaan Flora Dunia (Floristic Kingdoms)',
        items: [
          { name: 'Kerajaan Holarktik', description: 'Mencakup kawasan belahan bumi utara (Amerika Utara dan Eurasia) dengan vegetasi konifer dan gugur.' },
          { name: 'Kerajaan Paleotropik', description: 'Kawasan tropis dunia lama (Afrika, Asia Selatan, Asia Tenggara / Malesiana).' },
          { name: 'Kerajaan Neotropik', description: 'Kawasan hutan tropis Amerika Selatan (Flora Amazonia).' },
          { name: 'Kerajaan Australis & Antarktika', description: 'Vegetasi pohon Eucalyptus, Acacia Australia, dan flora purba Notofagus.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pecahnya Gondwana & Laurasia', title: 'Hanyutan Benua Purba', description: 'Benua purba terpisah mengisolasi moyang fauna marsupial di Australia dan plasenta di Asia.' },
      { stage: 'Evolusi Radiasi Adaptif', title: 'Diversifikasi Spesies Terisolasi', description: 'Marsupial di Australia mengisi seluruh relung ekologis menjadi pemakan rumput, pemanjat, dan predator.' },
      { stage: 'Pembentukan Garis Batas', title: 'Demarkasi Biogeografi Wallace', description: 'Palung laut dalam menjadi batas permanen yang tidak dapat diseberangi hewan darat.' }
    ],
    caseStudies: [
      {
        title: 'Isolasi Evolusioner Madagaskar: Laboratorium Kehidupan Endemik Dunia',
        location: 'Pulau Madagaskar (lepas pantai timur Afrika)',
        description: 'Pulau Madagaskar telah terpisah dari daratan Afrika dan India selama lebih dari 88 juta tahun. Karena isolasi geografis samudra yang sangat lama, sekitar 90% dari seluruh flora dan faunanya bersifat endemik dan tidak ditemukan di belahan bumi lain mana pun, termasuk lebih dari 100 spesies primata Lemur purba, bunglon bunglon kerdil, dan pohon baobab botol.',
        takeaway: 'Isolasi geografis adalah mesin pencipta spesiasi keanekaragaman hayati unik bumi.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta 6 Region Zoogeografi Dunia Menurut Alfred Russel Wallace',
        caption: 'Peta rujukan zoogeografi global: Region Paleartik, Neartik, Neotropik, Ethiopian, Oriental, dan Australis.',
        badge: 'Zoogeographic Realms'
      }
    ],
    terminology: [
      { term: 'Zoogeografi', definition: 'Cabang ilmu biogeografi yang mempelajari pola persebaran geografis spesies hewan di muka bumi dan faktor-faktor sejarah geologis pembentuknya.', scientificTerm: 'Zoogeography' },
      { term: 'Fauna Marsupialia', definition: 'Kelompok mamalia betina yang memiliki kantung perut (marsupium) untuk mengasuh dan menyusui bayinya yang lahir prematur (contoh: kanguru).', scientificTerm: 'Marsupials' },
      { term: 'Monotremata', definition: 'Ordo mamalia paling primitif yang tidak melahirkan melainkan berkembang biak dengan bertelur (contoh: platipus dan echidna).', scientificTerm: 'Monotremes' }
    ],
    summary: [
      'Alfred Russel Wallace membagi fauna dunia ke dalam 6 region: Paleartik, Neartik, Ethiopian, Oriental, Neotropik, dan Australis.',
      'Region Oriental didominasi mamalia berplasenta besar; Region Australis didominasi mamalia berkantung (marsupial).',
      'Persebaran fauna dibatasi oleh penghalang geografis seperti pegunungan tinggi, gurun pasir, dan palung samudra luas.'
    ],
    quiz: [
      {
        id: 'q49-1',
        question: 'Spesies fauna seperti jerapah leher panjang, zebra belang, gorila gunung, dan singa secara alami merupakan fauna khas yang mendiami kawasan zoogeografi...',
        options: ['Region Oriental', 'Region Ethiopian (Afrotropik)', 'Region Neartik', 'Region Australis'],
        correctAnswer: 1,
        explanation: 'Region Ethiopian (Afrotropik) mencakup wilayah Benua Afrika di selatan Gurun Sahara yang terkenal dengan mamalia darat raksasa padang sabana.'
      },
      {
        id: 'q49-2',
        question: 'Kawasan zoogeografi yang dicirikan oleh dominasi hewan berkantung (marsupialia) seperti kanguru, koala, dan wombat, serta mamalia bertelur platipus adalah...',
        options: ['Region Paleartik', 'Region Neotropik', 'Region Australis', 'Region Oriental'],
        correctAnswer: 2,
        explanation: 'Region Australis (Australia, Papua, Selandia Baru) terisolasi secara geologis sangat lama sehingga didominasi oleh fauna marsupialia dan monotremata.'
      }
    ],
    references: ['Wallace, A. R. (1876). The Geographical Distribution of Animals. Macmillan and Co.', 'Cox, C. B., Moore, P. D., & Ladle, R. J. (2016). Biogeography: An Ecological and Evolutionary Approach. Wiley-Blackwell.'],
    relatedTopicIds: ['persebaran-flora-dan-fauna-indonesia', 'garis-wallace-weber-dan-lydekker', 'bioma-dunia', 'biosfer-dan-ekosistem']
  },
  {
    id: 'persebaran-flora-dan-fauna-indonesia',
    number: 50,
    title: 'Persebaran Flora dan Fauna Indonesia',
    englishTitle: 'Indonesian Biogeography: Asiatic, Wallacea, and Australasian Zones',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Menelaah pembagian biogeografi Indonesia ke dalam 3 zona: Wilayah Asiatis/Barat (Paparan Sunda: badak, orangutan, meranti), Wilayah Peralihan/Tengah (Wallacea: anoa, babirusa, komodo, kayu cendana), dan Wilayah Australis/Timur (Paparan Sahul: kasuari, cenderawasih, matoa).',
    keywords: ['flora fauna indonesia', 'tipe asiatis paparan sunda', 'tipe peralihan wallacea', 'tipe australis paparan sahul', 'anoa babirusa komodo', 'flora malesiana'],
    learningObjectives: [
      'Menjelaskan pembagian tiga kawasan biogeografi Indonesia (Asiatis, Peralihan, Australis).',
      'Mengidentifikasi spesies flora dan fauna representatif dari masing-masing zona biogeografi Indonesia.',
      'Menganalisis mengapa wilayah peralihan (Wallacea) memiliki tingkat endemisitas fauna tertinggi di dunia.'
    ],
    introduction: 'Indonesia adalah salah satu dari 17 negara megabiodiversitas (megadiverse countries) terkaya di dunia, menempati urutan kedua dunia setelah Brasil dalam keanekaragaman hayati terestrial. Kendati luas daratan Indonesia hanya 1,3% dari total luas daratan bumi, Indonesia menampung 17% spesies burung dunia, 12% mamalia dunia, 16% reptil dan amfibi, serta lebih dari 30.000 spesies tumbuhan berbunga. Keistimewaan hayati ini terjadi karena Indonesia berada di titik temu dua benua besar (Asia dan Australia) yang melahirkan tiga zona biogeografi unik.',
    sections: [
      {
        subtitle: '1. Tiga Zona Biogeografi Flora dan Fauna Indonesia',
        content: 'Batas geologis Paparan Sunda dan Paparan Sahul membagi Nusantara ke dalam tiga zona hayati:',
        table: {
          headers: ['Zona Biogeografi', 'Cakupan Wilayah Kepulauan', 'Karakteristik Hayati', 'Fauna Khas', 'Flora Khas'],
          rows: [
            ['1. Zona Asiatis (Barat / Paparan Sunda)', 'Pulau Sumatra, Jawa, Bali, Kalimantan, dan pulau-pulau kecil di sekitarnya', 'Sangat mirip dengan fauna dan flora daratan Benua Asia; mamalia berkuran sangat besar, banyak kera, sedikit kantung, sedikit burung warna cerah', 'Gajah sumatra, badak bercula satu ujung kulon, harimau sumatra, orangutan kalimantan, bekantan, tapir, banteng jawa', 'Pohon famili Dipterocarpaceae (meranti, keruing, ulin), Raflesia arnoldii, bunga bangkai Titan Arum'],
            ['2. Zona Peralihan (Tengah / Kawasan Wallacea)', 'Pulau Sulawesi, Kepulauan Maluku, Nusa Tenggara Barat, dan Nusa Tenggara Timur', 'Fauna endemik murni yang tidak ada padanannya di Asia maupun Australia; percampuran sifat evolusioner pulau terisolasi', 'Komodo (kadal purba terbesar dunia), Anoa (kerbau kerdil), Babirusa (taring mencuat), Burung Maleo (bertelur di pasir panas), Tarsius kerdil', 'Kayu eboni hitam Sulawesi, kayu cendana wangi NTT, cengkih ternate, pala banda'],
            ['3. Zona Australis (Timur / Paparan Sahul)', 'Pulau Papua dan pulau-pulau kecil di sekitarnya (Kepulauan Aru, Raja Ampat)', 'Sangat mirip dengan fauna Benua Australia; didominasi hewan berkantung (marsupialia), mamalia berukuran kecil, burung berbulu sangat indah warna-warni', 'Kanguru pohon (Dendrolagus), kuskus bertutul, burung cenderawasih surga, burung kasuari gelambir, burung mambruk, walabi', 'Pohon matoa papua, sagu (Metroxylon sagu), kayu putih ekaliptus, anggrek hitam papua']
          ]
        }
      },
      {
        subtitle: '2. Kekayaan Flora Malesiana Indonesia',
        content: 'Secara botani (fitogeografi), seluruh wilayah kepulauan Indonesia termasuk ke dalam kawasan Flora Malesiana (mencakup Malaysia, Filipina, Indonesia, dan Papua Nugini):',
        keyPoints: [
          'Kanopi Hutan Dipterocarpaceae: Hutan hujan tropis Kalimantan dan Sumatra didominasi pohon meranti (Shorea spp.) yang tingginya mencapai 50-60 meter dan menjadi primadona industri kayu lestari.',
          'Rafflesia arnoldii: Tumbuhan parasit obligat tanpa akar, daun, atau batang sejati yang menghasilkan bunga mekar terbesar di dunia (diameter hingga 1 meter) di hutan Bengkulu dan Sumatra.',
          'Pohon Ulin (Kayu Besi): Kayu endemik Kalimantan yang sangat padat, tahan rayap, dan semakin keras jika terendam di dalam air laut.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Status Perlindungan Spesies Kritis (IUCN Red List)',
        items: [
          { name: 'Kritis Terancam Punah (Critically Endangered / CR)', description: 'Badak jawa, harimau sumatra, orangutan tapanuli, jalak bali.' },
          { name: 'Genting Terancam (Endangered / EN)', description: 'Gajah sumatra, anoa pegunungan, komodo, bekantan kalimantan.' },
          { name: 'Rentan (Vulnerable / VU)', description: 'Burung maleo, macan tutul jawa, duyung (dugong).' }
        ]
      }
    ],
    processes: [
      { stage: 'Zaman Glasial Pleistosen', title: 'Penyatuan Daratan Paparan', description: 'Muka laut surut 120 m, Sumatra-Jawa-Kalimantan tersambung ke Asia; Papua tersambung ke Australia.' },
      { stage: 'Migrasi Fauna Massal', title: 'Persebaran Spesies Benua', description: 'Gajah, harimau, dan badak bermigrasi dari Asia ke Paparan Sunda; marsupialia menyebar di Sahul.' },
      { stage: 'Isolasi Interglasial', title: 'Tenggelamnya Jembatan Laut', description: 'Laut naik memisahkan pulau-pulau, mengunci fauna dalam evolusi spesiasi pulau mandiri.' }
    ],
    caseStudies: [
      {
        title: 'Komodo Dragon (Varanus komodoensis): Relikui Purba Raksasa Kawasan Wallacea',
        location: 'Taman Nasional Komodo, Nusa Tenggara Timur, Indonesia',
        description: 'Biawak komodo adalah spesies kadal terbesar yang masih hidup di bumi dengan panjang mencapai 3 meter dan bobot hingga 100 kg. Komodo merupakan fauna endemik zona peralihan Wallacea yang berhasil bertahan hidup dari kepunahan zaman pleistosen berkat gigitan berbisanya dan isolasi geografis di pulau-pulau sabana kering NTT (Komodo, Rinca, Padar, Gili Motang).',
        takeaway: 'Wallacea adalah suaka alamiah bagi makhluk hidup peninggalan era geologi purba.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Tiga Zona Biogeografi Indonesia: Asiatis, Peralihan, dan Australis',
        caption: 'Peta sebaran fauna Indonesia lengkap dengan Garis Wallace di barat dan Garis Weber/Lydekker di timur.',
        badge: 'Indonesian Biogeography'
      }
    ],
    terminology: [
      { term: 'Kawasan Wallacea', definition: 'Wilayah biogeografi peralihan di Indonesia tengah (Sulawesi, Maluku, Nusa Tenggara) yang dibatasi Garis Wallace di barat dan Garis Weber di timur.', scientificTerm: 'Wallacea' },
      { term: 'Flora Malesiana', definition: 'Kawasan floristik tropis yang mencakup kepulauan Indonesia, Malaysia, Filipina, dan Papua Nugini yang kaya akan famili Dipterocarpaceae.', scientificTerm: 'Malesian Floristic Region' },
      { term: 'Spesies Endemik', definition: 'Spesies flora atau fauna yang hanya ditemukan secara alami hidup di satu wilayah geografis tertentu dan tidak dijumpai di belahan bumi lain.', scientificTerm: 'Endemic Species' }
    ],
    summary: [
      'Indonesia terbagi menjadi 3 zona biogeografi: Asiatis (Paparan Sunda), Peralihan (Wallacea), dan Australis (Paparan Sahul).',
      'Zona Asiatis kaya mamalia besar plasenta; Zona Peralihan kaya fauna endemik (anoa, babirusa, komodo); Zona Australis kaya marsupialia dan burung bersuara/berbulu indah.',
      'Flora Indonesia termasuk dalam wilayah Malesiana dengan dominasi pohon Dipterocarpaceae (meranti) dan tanaman paku epifit.'
    ],
    quiz: [
      {
        id: 'q50-1',
        question: 'Fauna endemik Indonesia seperti Anoa, Babirusa, Burung Maleo, dan Komodo secara biogeografis mendiami wilayah...',
        options: ['Zona Asiatis (Paparan Sunda)', 'Zona Peralihan (Wallacea)', 'Zona Australis (Paparan Sahul)', 'Zona Neartik'],
        correctAnswer: 1,
        explanation: 'Anoa, Babirusa, Maleo, dan Komodo adalah fauna khas pulau-pulau di kawasan peralihan Wallacea (Sulawesi dan Nusa Tenggara).'
      },
      {
        id: 'q50-2',
        question: 'Manakah dari kelompok fauna berikut yang seluruhnya merupakan fauna khas tipe Australis di wilayah Indonesia Timur (Papua)?',
        options: [
          'Gajah, Harimau, Badak bercula satu',
          'Kanguru pohon, Burung Cenderawasih, Burung Kasuari',
          'Anoa, Babirusa, Bekantan',
          'Tapir, Siamang, Komodo'
        ],
        correctAnswer: 1,
        explanation: 'Kanguru pohon, burung cenderawasih, dan kasuari adalah fauna khas zona Australis Papua yang berkerabat dekat dengan fauna Benua Australia.'
      }
    ],
    references: ['Whitten, T., et al. (2002). The Ecology of Sulawesi. Gadjah Mada University Press.', 'van Steenis, C. G. G. J. (1950). Flora Malesiana. Noordhoff-Kolff.'],
    relatedTopicIds: ['garis-wallace-weber-dan-lydekker', 'persebaran-flora-dan-fauna-dunia', 'keanekaragaman-hayati', 'konservasi-flora-dan-fauna']
  },
  {
    id: 'garis-wallace-weber-dan-lydekker',
    number: 51,
    title: 'Garis Wallace, Weber, dan Lydekker',
    englishTitle: 'The Wallace, Weber, and Lydekker Biogeographic Lines',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Memahami demarkasi biogeografi kepulauan Indonesia: Garis Wallace (pemisah Asiatis dan Peralihan melewati Selat Makassar dan Selat Lombok), Garis Weber (garis keseimbangan faunistik 50:50), dan Garis Lydekker (batas barat fauna Australis Paparan Sahul).',
    keywords: ['garis wallace', 'garis weber', 'garis lydekker', 'selat lombok', 'selat makassar', 'kawasan wallacea', 'biogeografi nusantara'],
    learningObjectives: [
      'Menelusuri sejarah penemuan Garis Wallace oleh naturalis Alfred Russel Wallace dalam ekspedisinya di Nusantara (1854-1862).',
      'Membedakan letak geografis dan makna ekologis Garis Wallace, Garis Weber, dan Garis Lydekker pada peta Indonesia.',
      'Menjelaskan mengapa Selat Lombok yang sempit (lebar 35 km) mampu menjadi batas pemisah biogeografi yang sangat tegas.'
    ],
    introduction: 'Kepulauan Indonesia adalah panggung penemuan salah satu teori terbesar dalam sejarah biologi evolusi dan biogeografi dunia. Pada tahun 1859, naturalis Inggris Alfred Russel Wallace mencatat pengamatan mengejutkan saat berlayar menyeberangi Selat Lombok yang lebarnya hanya 35 kilometer: burung-burung di Pulau Bali sangat mirip dengan burung di Jawa dan daratan Asia, namun setibanya di Pulau Lombok, jenis burung berubah drastis menjadi burung khas Australia seperti kakatua jambul kuning. Garis batas imajiner ini diabadikan sebagai Garis Wallace, yang kemudian dilengkapi oleh Garis Weber dan Garis Lydekker.',
    sections: [
      {
        subtitle: '1. Tiga Garis Biogeografi Pembatas Nusantara',
        content: 'Ketiga garis batas imajiner ini membagi wilayah kepulauan Indonesia ke dalam tiga domain hayati yang terpisah:',
        table: {
          headers: ['Nama Garis Batas', 'Tokoh Penemu / Tahun', 'Jalur Koordinat Geografis', 'Makna Signifikansi Biologis'],
          rows: [
            ['Garis Wallace', 'Alfred Russel Wallace (1859)', 'Membentang dari utara Selat Makassar (antara Kalimantan dan Sulawesi) turun ke selatan membelah Selat Lombok (antara Bali dan Lombok)', 'Batas timur persebaran fauna mamalia dan burung tipe Asiatis sejati; memisahkan Zona Asiatis dengan Zona Peralihan Wallacea'],
            ['Garis Weber', 'Max Wilhelm Carl Weber (1902)', 'Membentang di sebelah timur Sulawesi, menyusuri Kepulauan Tanimbar dan perairan Laut Banda hingga barat Kepulauan Maluku', 'Garis Keseimbangan Hayati (faunal balance): titik imbang di mana proporsi fauna bercorak Asia dan bercorak Australia seimbang 50% : 50%'],
            ['Garis Lydekker', 'Richard Lydekker (1895)', 'Menyusuri tepi barat landas kontinen Paparan Sahul, di sebelah barat Kepulauan Aru dan Papua', 'Batas barat persebaran fauna benua Australia murni; memisahkan Kawasan Wallacea dengan Zona Australis Paparan Sahul']
          ]
        }
      },
      {
        subtitle: '2. Mengapa Selat Lombok Menjadi Batas Begitu Tegas?',
        content: 'Banyak orang bertanya-tanya mengapa selat sempit seperti Selat Lombok (hanya 35 km) bisa memisahkan dua dunia fauna yang sama sekali berbeda, sementara Selat Sunda (antara Jawa dan Sumatra) faunanya sama persis:',
        keyPoints: [
          'Kedalaman Dasar Laut: Selat Sunda dan Laut Jawa berada di atas Paparan Sunda dengan kedalaman dangkal hanya 40–80 meter; saat zaman es muka laut surut 120 m sehingga daratan Jawa, Sumatra, dan Bali menyatu menjadi satu daratan kering benua Asia.',
          'Palung Dalam Selat Lombok: Selat Lombok memiliki palung laut dalam dengan kedalaman lebih dari 250 hingga 1.000 meter. Bahkan pada puncak zaman es terdingin saat laut surut maksimal, Selat Lombok dan Selat Makassar tidak pernah mengering dan tetap menjadi perintang air laut dalam yang tak dapat diseberangi mamalia darat Asia.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kawasan Paparan Benua Purba',
        items: [
          { name: 'Paparan Sunda (Sundaland)', description: 'Daratan benua purba di barat yang menyatukan Sumatra, Jawa, Bali, dan Kalimantan dengan daratan Asia.' },
          { name: 'Kawasan Wallacea', description: 'Zona kepulauan terisolasi di tengah yang tidak pernah tersambung ke benua mana pun sepanjang sejarah bumi.' },
          { name: 'Paparan Sahul (Sahulland)', description: 'Daratan benua purba di timur yang menyatukan Papua dan Kepulauan Aru dengan Benua Australia.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengamatan Lapangan', title: 'Ekspedisi Wallace 1854-1862', description: 'Wallace mengumpulkan 125.000 spesimen fauna melintasi ribuan pulau di Hindia Belanda.' },
      { stage: 'Demarkasi Kartografis', title: 'Penarikan Garis Batas', description: 'Menarik garis batas pemisah fauna mamalia besar Asia dengan burung marsupial Australia.' },
      { stage: 'Validasi Tektonik Lempeng', title: 'Pembuktian Teori Geologi', description: 'Geologi modern membuktikan garis tersebut bertepatan dengan batas lempeng benua purba Sunda dan Sahul.' }
    ],
    caseStudies: [
      {
        title: 'Buku Monumental "The Malay Archipelago" Karya Alfred Russel Wallace',
        location: 'Kepulauan Nusantara (Indonesia, Malaysia, Singapura)',
        description: 'Selama 8 tahun menjelajah Nusantara, Wallace menulis surat bersejarah dari Pulau Ternate (Ternate Essay) kepada Charles Darwin yang menguraikan teori seleksi alam secara independen. Bukunya "The Malay Archipelago" (1869) menjadi mahakarya literatur perjalanan ilmiah dunia dan mengabadikan kepulauan Nusantara sebagai laboratorium sains evolusi modern.',
        takeaway: 'Biogeografi Indonesia adalah fondasi sejarah sains biologi dan geografi modern dunia.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Tiga Garis Imajiner Biogeografi: Wallace, Weber, dan Lydekker',
        caption: 'Peta batas demarkasi Garis Wallace (Selat Makassar-Lombok), Garis Weber (timur Sulawesi), dan Garis Lydekker (tepi barat Sahul).',
        badge: 'Biogeographical Boundaries'
      }
    ],
    terminology: [
      { term: 'Garis Wallace', definition: 'Garis khayal yang memisahkan wilayah persebaran fauna Asiatis (barat) dengan fauna peralihan Wallacea (tengah) melalui Selat Makassar dan Selat Lombok.', scientificTerm: 'Wallace Line' },
      { term: 'Garis Weber', definition: 'Garis khayal yang ditarik Max Weber yang menunjukkan batas keseimbangan faunistik di mana proporsi hewan tipe Asia dan Australia berimbang 50:50.', scientificTerm: 'Weber Line' },
      { term: 'Garis Lydekker', definition: 'Garis khayal yang ditarik Richard Lydekker di sepanjang tepi barat landas kontinen Paparan Sahul sebagai batas barat fauna tipe Australis murni.', scientificTerm: 'Lydekker Line' }
    ],
    summary: [
      'Garis Wallace memisahkan Zona Asiatis dengan Zona Peralihan melalui Selat Makassar dan Selat Lombok.',
      'Garis Weber adalah garis keseimbangan faunistik (50% Asia, 50% Australia) di sebelah timur Sulawesi.',
      'Garis Lydekker menandai batas barat fauna tipe Australis murni di tepi barat Paparan Sahul (Papua).',
      'Kedalaman laut palung Selat Lombok (>250 m) menjadi alasan mengapa batas tersebut tidak pernah mengering saat zaman es.'
    ],
    quiz: [
      {
        id: 'q51-1',
        question: 'Garis imajiner biogeografi yang memisahkan wilayah fauna bercorak Asiatis (seperti di Bali dan Kalimantan) dengan wilayah fauna peralihan (seperti di Lombok dan Sulawesi) adalah...',
        options: ['Garis Weber', 'Garis Wallace', 'Garis Lydekker', 'Garis Khatulistiwa'],
        correctAnswer: 1,
        explanation: 'Garis Wallace ditarik oleh Alfred Russel Wallace melewati Selat Makassar dan Selat Lombok, memisahkan fauna tipe Asiatis di barat dengan fauna Peralihan di tengah.'
      },
      {
        id: 'q51-2',
        question: 'Garis biogeografi yang dirumuskan oleh Max Weber dan dikenal sebagai garis keseimbangan faunistik (proporsi fauna bercorak Asia dan Australia seimbang 50% : 50%) adalah...',
        options: ['Garis Wallace', 'Garis Weber', 'Garis Lydekker', 'Garis Bujur Greenwich'],
        correctAnswer: 1,
        explanation: 'Garis Weber adalah garis faunal balance di mana hewan tipe Asiatis dan Australis hidup berdampingan dengan perbandingan seimbang 50% berbanding 50%.'
      }
    ],
    references: ['Wallace, A. R. (1869). The Malay Archipelago: The Land of the Orang-Utan and the Bird of Paradise. Macmillan.', 'Simpson, G. G. (1977). Too Many Lines; The Limits of the Oriental and Australian Zoogeographic Regions. Proceedings of the American Philosophical Society.'],
    relatedTopicIds: ['persebaran-flora-dan-fauna-indonesia', 'persebaran-flora-dan-fauna-dunia', 'keanekaragaman-hayati', 'posisi-strategis-indonesia']
  },
  {
    id: 'keanekaragaman-hayati',
    number: 52,
    title: 'Keanekaragaman Hayati',
    englishTitle: 'Biodiversity: Genetic, Species, and Ecosystem Diversity',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis tiga tingkatan keanekaragaman hayati (keanekaragaman genetik, keanekaragaman spesies/jenis, keanekaragaman ekosistem), manfaat keanekaragaman hayati (nilai konsumtif, produktif, ekologis, estetika), serta ancaman kepunahan antropogenik (HIPPO).',
    keywords: ['keanekaragaman hayati biodiversity', 'tingkat gen jenis ekosistem', 'nilai ekologis', 'ancaman kepunahan hippo', 'jasa ekosistem'],
    learningObjectives: [
      'Membedakan tiga tingkatan keanekaragaman hayati: genetik, spesies (jenis), dan ekosistem berserta contohnya.',
      'Mengidentifikasi nilai manfaat keanekaragaman hayati bagi kehidupan manusia (pangan, farmasi obat, pengatur tata air, jasa iklim).',
      'Menganalisis akronim ancaman kepunahan keanekaragaman hayati HIPPO (Habitat loss, Invasive species, Pollution, Population growth, Overexploitation).'
    ],
    introduction: 'Keanekaragaman Hayati (Biodiversitas) adalah variabilitas di antara makhluk hidup dari semua sumber daya alamiah, termasuk ekosistem terestrial, laut, perairan tawar, dan kompleks-kompleks ekologis tempat organisme tersebut menjadi bagian darinya. Biodiversitas bukan sekadar daftar panjang nama hewan dan tumbuhan, melainkan infrastruktur alami penopang peradaban manusia yang menyediakan oksigen bersih, penyerbukan tanaman pangan, senyawa obat-obatan farmasi, dan stabilitas siklus iklim global.',
    sections: [
      {
        subtitle: '1. Tiga Tingkatan Keanekaragaman Hayati',
        content: 'Biodiversitas beroperasi pada tiga jenjang biologis yang berbeda:',
        table: {
          headers: ['Tingkatan Biodiversitas', 'Definisi Konseptual', 'Penyebab Variasi', 'Contoh Nyata Kasus'],
          rows: [
            ['1. Keanekaragaman Gen', 'Variasi susunan genetik di antara individu-individu dalam satu spesies yang sama', 'Perbedaan kombinasi alel DNA hasil rekombinasi perkawinan silang dan adaptasi', 'Variasi varietas beras padi (padi rojolele, pandanwangi, ir64, beras merah, beras hitam); variasi warna bunga mawar; ras anjing'],
            ['2. Keanekaragaman Jenis (Spesies)', 'Keanekaragaman antar-spesies organisme yang berbeda dalam satu famili atau genus', 'Perbedaan struktur morfologi, anatomi, dan genetik lintas spesies', 'Perbedaan dalam famili Felidae (kucing): Harimau (Panthera tigris), Singa (Panthera leo), Macan Tutul (Panthera pardus), Kucing rumah (Felis catus); famili palem (kelapa, pinang, aren, sawit)'],
            ['3. Keanekaragaman Ekosistem', 'Variasi tatanan komunitas biotik beserta lingkungan abiotiknya di berbagai bentang alam', 'Perbedaan kondisi iklim, ketinggian relief, jenis batuan/tanah, dan suplai air', 'Ekosistem Hutan Mangrove, Ekosistem Padang Lamun, Ekosistem Terumbu Karang, Ekosistem Hutan Lumut Pegunungan']
          ]
        }
      },
      {
        subtitle: '2. Ancaman Kepunahan Biodiversitas Model HIPPO',
        content: 'Ahli biologi Edward O. Wilson merumuskan 5 pemicu utama kehancuran keanekaragaman hayati yang disingkat HIPPO:',
        keyPoints: [
          'H - Habitat Loss (Kehilangan & Fragmentasi Habitat): Penggundulan hutan untuk perkebunan monokultur, pertambangan, dan jalan tol yang memutus koridor jelajah satwa liar.',
          'I - Invasive Species (Spesies Asing Invasif): Masuknya spesies luar yang memangsa atau mengalahkan spesies lokal endemik (contoh: ikan arapaima dan eceng gondok di danau Indonesia).',
          'P - Pollution (Pencemaran Lingkungan): Pencemaran pestisida kimia sintetis, limbah merkuri tambang emas liar, dan mikroplastik yang meracuni rantai makanan.',
          'P - Population Growth (Ledakan Populasi Manusia): Melonjaknya populasi manusia yang melipatgandakan konsumsi sumber daya alam melampaui daya dukung bumi.',
          'O - Overexploitation (Eksploitasi Berlebih): Perburuan satwa langka, perdagangan ilegal gading gajah dan trenggiling, serta penangkapan ikan pukat harimau (overfishing).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Empat Kategori Jasa Ekosistem (Ecosystem Services)',
        items: [
          { name: 'Jasa Penyediaan (Provisioning)', description: 'Penyediaan bahan pangan, kayu pertukangan, serat sandang, dan senyawa fitofarmaka obat herbal.' },
          { name: 'Jasa Pengaturan (Regulating)', description: 'Pengaturan iklim mikro, penyerapan karbon, penyerbukan lebah, dan perlindungan abrasi oleh mangrove.' },
          { name: 'Jasa Budaya (Cultural)', description: 'Ekowisata alam, rekreasi, inspirasi spiritual, dan tradisi budaya adat nusantara.' },
          { name: 'Jasa Pendukung (Supporting)', description: 'Pembentukan solum tanah, siklus hara biogeokimia, dan produksi oksigen fotosintesis.' }
        ]
      }
    ],
    processes: [
      { stage: 'Mutasi & Rekombinasi Genetik', title: 'Diversifikasi Intraspesies', description: 'Perubahan materi genetik DNA melahirkan variasi sifat unggul tahan hama pada tanaman.' },
      { stage: 'Spesiasi & Isolasi Ruang', title: 'Pembentukan Spesies Baru', description: 'Populasi terisolasi ratusan ribu tahun berdiferensiasi menjadi spesies baru yang unik.' },
      { stage: 'Integrasi Ekosistemik', title: 'Keseimbangan Rantai Makanan', description: 'Komunitas spesies saling berinteraksi membentuk jaring makanan yang tangguh terhadap guncangan.' }
    ],
    caseStudies: [
      {
        title: 'Hutan Hujan Tropis Bukit Barisan Selatan: Benteng Terakhir 4 Mamalia Besar Sumatra',
        location: 'Lampung dan Bengkulu, Sumatra, Indonesia',
        description: 'Taman Nasional Bukit Barisan Selatan (TNBBS) merupakan salah satu dari segelintir habitat di muka bumi tempat bertemunya empat spesies mamalia darat terancam punah sekaligus dalam satu ekosistem: Gajah Sumatra, Harimau Sumatra, Badak Sumatra bercula dua, dan Tapir. Fragmentasi hutan akibat perambahan kebun kopi ilegal menjadi ancaman utama yang memicu konflik manusia dan satwa liar.',
        takeaway: 'Kehilangan satu spesies kunci (keystone species) dapat meruntuhkan seluruh struktur ekosistem.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Tiga Tingkatan Keanekaragaman Hayati: Genetik, Spesies, dan Ekosistem',
        caption: 'Bagan komparasi visual: varietas padi (genetik), famili kucing besar (spesies), dan lanskap hutan-terumbu karang (ekosistem).',
        badge: 'Biodiversity Levels'
      }
    ],
    terminology: [
      { term: 'Keanekaragaman Hayati', definition: 'Keanekaragaman organisme hidup dari semua sumber termasuk keanekaragaman di dalam spesies, antar-spesies, dan antar-ekosistem.', scientificTerm: 'Biodiversity' },
      { term: 'Spesies Kunci (Keystone Species)', definition: 'Spesies yang memiliki pengaruh raksasa yang tidak proporsional terhadap struktur dan keberlangsungan komunitas ekosistemnya.', scientificTerm: 'Keystone Species' },
      { term: 'Spesies Invasif', definition: 'Spesies asing non-pribumi yang berkembang biak tak terkendali di habitat baru dan mengancam kelangsungan hidup spesies lokal asli.', scientificTerm: 'Invasive Alien Species' }
    ],
    summary: [
      'Biodiversitas mencakup tiga tingkatan: genetik (variasi DNA sejenis), spesies (lintas jenis), dan ekosistem (bentang alam).',
      'Keanekaragaman hayati menyediakan jasa ekosistem penyediaan pangan, pengaturan iklim, budaya, dan pendukung siklus hara.',
      'Ancaman terbesar kepunahan hayati dirumuskan dalam model HIPPO (Habitat loss, Invasive species, Pollution, Population, Overexploitation).'
    ],
    quiz: [
      {
        id: 'q52-1',
        question: 'Variasi sifat yang dijumpai antara padi rojolele, padi pandan wangi, padi gogo, dan padi ketan hitam merupakan contoh dari keanekaragaman hayati tingkat...',
        options: ['Tingkat spesies (jenis)', 'Tingkat ekosistem', 'Tingkat genetik (gen)', 'Tingkat filum'],
        correctAnswer: 2,
        explanation: 'Seluruh jenis padi tersebut tergolong dalam satu spesies yang sama (Oryza sativa); perbedaannya terletak pada susunan genetik intraspesies (keanekaragaman gen).'
      },
      {
        id: 'q52-2',
        question: 'Dalam akronim model ancaman kepunahan keanekaragaman hayati HIPPO karya E. O. Wilson, huruf H mewakili ancaman...',
        options: ['Human evolution', 'Habitat loss (hilangnya dan rusaknya habitat alami)', 'Heavy metal toxicity', 'Hunting license'],
        correctAnswer: 1,
        explanation: 'H adalah Habitat Loss (kehilangan dan fragmentasi habitat alami) yang diakui sebagai penyebab utama paling masif dari kepunahan spesies dunia.'
      }
    ],
    references: ['Wilson, E. O. (1992). The Diversity of Life. Harvard University Press.', 'Convention on Biological Diversity (CBD). (1992). Earth Summit, Rio de Janeiro.'],
    relatedTopicIds: ['biosfer-dan-ekosistem', 'persebaran-flora-dan-fauna-indonesia', 'konservasi-flora-dan-fauna', 'bioma-dunia']
  },
  {
    id: 'konservasi-flora-dan-fauna',
    number: 53,
    title: 'Konservasi Flora dan Fauna',
    englishTitle: 'Flora and Fauna Conservation: In-situ and Ex-situ Strategies',
    categoryId: 'biosfer',
    difficulty: 'Intermediate',
    description: 'Menganalisis strategi pelestarian keanekaragaman hayati: Konservasi In-situ (Taman Nasional, Suaka Margasatwa, Cagar Alam, Taman Wisata Alam) vs Konservasi Ex-situ (Kebun Raya, Taman Safari, Kebun Binatang, Bank Gen Seed Bank), peraturan perundang-undangan, dan kearifan lokal konservasi nusantara.',
    keywords: ['konservasi in situ', 'konservasi ex situ', 'taman nasional', 'cagar alam', 'suaka margasatwa', 'kebun raya bogor', 'kearifan lokal leuweung titipan'],
    learningObjectives: [
      'Membedakan metode konservasi in-situ (di habitat asli) dan konservasi ex-situ (di luar habitat asli).',
      'Mengklasifikasikan kawasan konservasi suaka alam (Cagar Alam, Suaka Margasatwa) dan pelestarian alam (Taman Nasional, TWA).',
      'Menganalisis contoh kearifan lokal masyarakat adat Indonesia dalam menjaga kelestarian hutan dan biota alam.'
    ],
    introduction: 'Konservasi sumber daya alam hayati adalah pengelolaan sumber daya alam hayati yang pemanfaatannya dilakukan secara bijaksana untuk menjamin kesinambungan persediaannya dengan tetap memelihara dan meningkatkan kualitas keanekaragaman dan nilainya (UU No. 5 Tahun 1990). Menghadapi kepunahan massal spesies di abad Antroposen, konservasi menerapkan strategi ganda yang terpadu: perlindungan ekosistem utuh di dalam habitat aslinya (In-situ) dan penyelamatan populasi darurat di luar habitat aslinya (Ex-situ).',
    sections: [
      {
        subtitle: '1. Perbandingan Strategi Konservasi: In-situ vs Ex-situ',
        content: 'Kedua pendekatan konservasi saling melengkapi dalam mencegah kepunahan spesies:',
        table: {
          headers: ['Parameter', 'Konservasi In-Situ (Di Dalam Habitat Asli)', 'Konservasi Ex-Situ (Di Luar Habitat Asli)'],
          rows: [
            ['Definisi Baku', 'Pelestarian flora dan fauna yang dilakukan langsung di dalam habitat alamiah aslinya', 'Pelestarian flora dan fauna yang dilakukan di luar habitat aslinya dengan membuat lingkungan buatan terkontrol'],
            ['Tujuan Utama', 'Melindungi seluruh dinamika ekosistem, rantai makanan, dan proses evolusi alami yang sedang berlangsung', 'Menyelamatkan spesies kritis yang habitat aslinya telah hancur total, penangkaran riset ilmiah, dan edukasi publik'],
            ['Bentuk Kawasan / Lembaga', '1. Taman Nasional (zonasi terpadu)\n2. Cagar Alam (perlindungan ketat vegetasi & ekosistem)\n3. Suaka Margasatwa (fokus perlindungan satwa)\n4. Taman Wisata Alam (TWA)\n5. Suaka Alam Perairan / Taman Nasional Laut', '1. Kebun Raya (contoh: Kebun Raya Bogor, Cibodas, Purwodadi)\n2. Kebun Binatang & Taman Safari\n3. Pusat Penangkaran & Rehabilitasi Orangutan (contoh: Nyaru Menteng)\n4. Bank Benih (Seed Bank) dan Bank Sperma/Embrio'],
            ['Kelebihan & Tantangan', 'Kelebihan: mempertahankan perilaku liar dan relung ekologis asli; Tantangan: rawan perburuan liar dan kebakaran hutan', 'Kelebihan: aman dari ancaman predator dan perburuan; Tantangan: hilangnya insting liar alami satwa saat dilepasliarkan kembali']
          ]
        }
      },
      {
        subtitle: '2. Zonasi Pengelolaan Taman Nasional',
        content: 'Taman Nasional di Indonesia dikelola melalui sistem zonasi berjenjang:',
        keyPoints: [
          'Zona Inti: Wilayah mutlak terlindung yang tidak boleh diubah sedikit pun oleh manusia, bebas dari aktivitas apa pun kecuali penelitian sains terbatas dan pemantauan polisi hutan.',
          'Zona Rimba: Wilayah penyangga perlindungan habitat satwa liar dan sarana penunjang penelitian ekologi.',
          'Zona Pemanfaatan: Wilayah yang dapat dikembangkan untuk pariwisata alam ramah lingkungan (ekowisata), pendidikan konservasi, dan rekreasi publik.',
          'Zona Tradisional: Wilayah yang diperuntukkan bagi pemanfaatan sumber daya alam secara tradisional oleh masyarakat adat setempat yang telah bermukim turun-temurun.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Bentuk Kearifan Lokal Konservasi Adat di Indonesia',
        items: [
          { name: 'Sasi Laut (Maluku & Papua)', description: 'Larangan adat menangkap ikan, teripang, atau lola di zona laut tertentu selama periode waktu tertentu agar biota sempat memijah.' },
          { name: 'Leuweung Titipan (Masyarakat Adat Sunda Wiwitan)', description: 'Zonasi hutan larangan suci di hulu gunung yang sama sekali tidak boleh ditebang rantingnya untuk menjaga mata air.' },
          { name: 'Lubuk Larangan (Sumatra Barat & Riau)', description: 'Bagian lubuk sungai yang dilindungi secara adat dan hanya boleh dipanen ikannya setahun sekali secara bersama-sama.' },
          { name: 'Tana Ulen (Masyarakat Dayak Kenyah Kaltara)', description: 'Kawasan hutan primer yang dijaga ketat oleh hukum adat dan hanya boleh diambil kayunya untuk kebutuhan sosial mendesak.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penangkaran Ex-situ', title: 'Breeding & Pembiakan Terkontrol', description: 'Satwa langka (seperti Jalak Bali) dikembangbiakkan di pusat penangkaran berstandar ilmiah.' },
      { stage: 'Sekolah Hutan & Habituasi', title: 'Latihan Bertahan Hidup', description: 'Anak satwa dilatih mencari makan mandiri, mengenali predator, dan memanjat pohon kanopi.' },
      { stage: 'Pelepasliaran ke Alam (Release)', title: 'Restorasi Populasi Liar', description: 'Satwa dilepasliarkan kembali ke Taman Nasional habitat aslinya dan dipantau sinyal GPS collar.' }
    ],
    caseStudies: [
      {
        title: 'Keberhasilan Penyelamatan Jalak Bali (Leucopsar rothschildi) dari Jurang Kepunahan',
        location: 'Taman Nasional Bali Barat, Indonesia',
        description: 'Pada awal tahun 2000-an, populasi Jalak Bali di alam liar habitat aslinya merosot tajam hingga tersisa kurang dari 15 ekor akibat perburuan liar burung kicau sangkar. Melalui kolaborasi konservasi in-situ di Taman Nasional Bali Barat dan penangkaran ex-situ terakreditasi oleh asosiasi penangkar bersertifikat, ratusan burung hasil tangkaran berhasil dilepasliarkan kembali sehingga populasi liarnya kini melampaui 400 ekor.',
        takeaway: 'Integrasi sinergis in-situ, ex-situ, dan penegakan hukum mampu menarik spesies keluar dari ancaman kepunahan.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Komparasi Matriks Konservasi In-Situ dan Konservasi Ex-Situ',
        caption: 'Bagan pembagian kawasan perlindungan in-situ (Taman Nasional, Suaka Margasatwa) dan fasilitas ex-situ (Kebun Raya, Taman Safari).',
        badge: 'Conservation Biology'
      }
    ],
    terminology: [
      { term: 'Konservasi In-Situ', definition: 'Pelestarian keanekaragaman hayati spesies tumbuhan dan satwa liar yang dilakukan langsung di dalam habitat alamiah aslinya.', scientificTerm: 'In-Situ Conservation' },
      { term: 'Konservasi Ex-Situ', definition: 'Pelestarian keanekaragaman hayati yang dilakukan di luar habitat aslinya dalam lingkungan buatan manusia yang dikendalikan.', scientificTerm: 'Ex-Situ Conservation' },
      { term: 'Taman Nasional', definition: 'Kawasan pelestarian alam yang memiliki ekosistem asli, dikelola dengan sistem zonasi, dan dimanfaatkan untuk penelitian, pendidikan, dan rekreasi.', scientificTerm: 'National Park' }
    ],
    summary: [
      'Konservasi in-situ melindungi spesies di dalam habitat aslinya (Taman Nasional, Suaka Margasatwa, Cagar Alam).',
      'Konservasi ex-situ melindungi spesies di luar habitat aslinya (Kebun Raya, Taman Safari, Bank Gen).',
      'Kearifan lokal adat Nusantara (Sasi Laut, Leuweung Titipan, Lubuk Larangan) menjadi pilar konservasi berbasis masyarakat yang tangguh.'
    ],
    quiz: [
      {
        id: 'q53-1',
        question: 'Pelestarian satwa langka badak bercula satu yang dilakukan langsung di habitat aslinya di kawasan Taman Nasional Ujung Kulon merupakan bentuk konservasi...',
        options: ['Konservasi Ex-situ', 'Konservasi In-situ', 'Konservasi Domestikasi', 'Konservasi Agroforestri'],
        correctAnswer: 1,
        explanation: 'Konservasi in-situ adalah pelestarian flora dan fauna yang dilakukan langsung di habitat aslinya (seperti badak di TN Ujung Kulon).'
      },
      {
        id: 'q53-2',
        question: 'Kearifan lokal masyarakat adat Maluku berupa aturan adat yang melarang penangkapan ikan dan teripang di kawasan perairan laut tertentu dalam jangka waktu tertentu dinamakan tradisi...',
        options: ['Subak', 'Sasi', 'Leuweung Titipan', 'Tana Ulen'],
        correctAnswer: 1,
        explanation: 'Sasi (Sasi Laut) adalah kearifan lokal konservasi adat di Maluku dan Papua yang melarang pengambilan biota laut tertentu selama musim tertentu demi pemulihan stok.'
      }
    ],
    references: ['Primack, R. B., et al. (2010). Biologi Konservasi. Yayasan Obor Indonesia.', 'Undang-Undang Republik Indonesia Nomor 5 Tahun 1990 tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya.'],
    relatedTopicIds: ['keanekaragaman-hayati', 'persebaran-flora-dan-fauna-indonesia', 'lingkungan-hidup-dan-ekosistem', 'sumber-daya-hutan-dan-laut']
  },

  // CATEGORY G: Geografi Indonesia (54-56)
  {
    id: 'letak-astronomis-geografis-dan-geologis-indonesia',
    number: 54,
    title: 'Letak Astronomis, Geografis, dan Geologis Indonesia',
    englishTitle: 'Astronomical, Geographical, and Geological Position of Indonesia',
    categoryId: 'geografi-indonesia',
    difficulty: 'Beginner',
    description: 'Menelaah trilogi letak wilayah Negara Kesatuan Republik Indonesia: Letak Astronomis (6°LU – 11°LS dan 95°BT – 141°BT), Letak Geografis (lintang silang antara dua benua dan dua samudra), serta Letak Geologis (pertemuan lempeng tektonik dan dangkalan Sunda-Sahul).',
    keywords: ['letak astronomis indonesia', 'letak geografis', 'letak geologis', 'paparan sunda sahul', 'iklim tropis indonesia', 'lempeng tektonik indonesia'],
    learningObjectives: [
      'Menyebutkan batas letak astronomis Indonesia dan menganalisis implikasinya terhadap iklim dan zona waktu.',
      'Menganalisis keuntungan dan tantangan dari letak geografis silang Indonesia di antara dua benua dan dua samudra.',
      'Menjelaskan letak geologis Indonesia pada titik temu 3 lempeng tektonik dunia serta jalur pegunungan Sirkum Mediterania dan Pasifik.'
    ],
    introduction: 'Kedudukan suatu negara di permukaan bumi menentukan takdir iklim, potensi sumber daya alam, keanekaragaman hayati, hingga peta geopolitik dan perekonomiannya. Wilayah Negara Kesatuan Republik Indonesia (NKRI) dikaruniai letak yang sangat istimewa di mata geografi dunia: secara astronomis terletak di sabuk khatulistiwa tropis, secara geografis berada di persimpangan silang jalur perdagangan maritim global, dan secara geologis terletak pada pertemuan tiga lempeng tektonik raksasa.',
    sections: [
      {
        subtitle: '1. Trilogi Letak Wilayah Indonesia dan Implikasinya',
        content: 'Tiga sudut pandang letak Indonesia membentuk karakter bangsa maritim kepulauan:',
        table: {
          headers: ['Aspek Letak', 'Batas Koordinat / Posisi Geografis', 'Dampak & Implikasi Nyata'],
          rows: [
            ['1. Letak Astronomis', '6° Lintang Utara (Pulau Weh) – 11° Lintang Selatan (Pulau Rote)\ndan 95° Bujur Timur (Sabang) – 141° Bujur Timur (Merauke)', '1. Beriklim Tropis: suhu hangat sepanjang tahun (~26°C), curah hujan tinggi, penyinaran matahari 12 jam/hari\n2. Bebas dari Siklon Tropis mematikan karena gaya Coriolis di ekuator bernilai nol\n3. Terbagi menjadi 3 Zona Waktu: WIB (GMT+7), WITA (GMT+8), dan WIT (GMT+9)'],
            ['2. Letak Geografis', 'Terletak di antara dua benua: Benua Asia di barat laut dan Benua Australia di tenggara;\nserta di antara dua samudra: Samudra Pasifik di timur laut dan Samudra Hindia di barat daya', '1. Mengalami pergantian Angin Muson Barat dan Muson Timur setiap 6 bulan (dua musim: hujan dan kemarau)\n2. Menjadi jalur silang pelayaran dan perdagangan internasional tersibuk di dunia (Selat Malaka)\n3. Terjadi akulturasi budaya yang kaya sejak era Jalur Sutra Maritim rempah-rempah'],
            ['3. Letak Geologis', 'Pertemuan 3 lempeng tektonik aktif utama: Lempeng Eurasia, Lempeng Indo-Australia, dan Lempeng Pasifik;\nserta diapit dua dangkalan: Dangkalan Sunda dan Dangkalan Sahul', '1. Memiliki 127 gunung berapi aktif (Ring of Fire) yang menyuburkan tanah vulkanis (Andosol)\n2. Sangat kaya cebakan mineral logam (nikel, tembaga, emas) dan energi geotermal\n3. Rawan bencana gempa bumi tektonik, tsunami, dan letusan vulkanik']
          ]
        }
      },
      {
        subtitle: '2. Dua Busur Pegunungan Lipatan Dunia di Indonesia',
        content: 'Wilayah Indonesia menjadi titik pertemuan dua jalur pegunungan muda dunia:',
        keyPoints: [
          'Sirkum Mediterania: Jalur pegunungan dari Eropa masuk ke Indonesia melalui Sumatra, Jawa, Bali, Nusa Tenggara, hingga Kepulauan Banda (berkarakteristik vulkanik andesitik aktif).',
          'Sirkum Pasifik: Jalur pegunungan dari Amerika melintasi Pasifik, Jepang, Filipina, masuk ke Indonesia melalui Sulawesi Utara, Maluku Utara, hingga Papua.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Paparan Benua (Dangkalan) Indonesia',
        items: [
          { name: 'Paparan Sunda (Sundaland)', description: 'Laut dangkal (<200 m) di barat (Laut Jawa, Selat Malaka) yang dahulunya menyatu dengan Benua Asia.' },
          { name: 'Paparan Sahul (Sahulland)', description: 'Laut dangkal (<200 m) di timur (Laut Arafura) yang dahulunya menyatu dengan Benua Australia.' },
          { name: 'Kawasan Laut Dalam Tengah (Wallacea)', description: 'Perairan laut dalam (Laut Banda, Laut Sulawesi) yang memisahkan kedua paparan dangkal tersebut.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penetapan Astronomis', title: 'Perhitungan Grid Bujur & Lintang', description: 'Rentang bujur 46° dibagi interval 15° menghasilkan tiga zona waktu standar.' },
      { stage: 'Pergerakan Muson Geografis', title: 'Sirkulasi Angin Lintas Benua', description: 'Perbedaan termal Asia-Australia memicu hembusan muson basah dan kering secara periodik.' },
      { stage: 'Tumbukan Geologis Lempeng', title: 'Aktivitas Subduksi Orogenesa', description: 'Penunjaman lempeng samudra Indo-Australia melelehkan batuan memicu deretan gunung api.' }
    ],
    caseStudies: [
      {
        title: 'Pulau Rote: Batas Astronomis Paling Selatan NKRI dan Potensi Kelautan',
        location: 'Kabupaten Rote Ndao, Nusa Tenggara Timur (11° LS)',
        description: 'Pulau Rote dan Pulau Ndana menandai batas astronomis 11°LS paling selatan wilayah kedaulatan Indonesia. Letak astronomis dan geografisnya yang berbatasan langsung dengan perairan Australia menjadikan kawasan ini titik pantau strategis perbatasan Zona Ekonomi Eksklusif (ZEE) dan zona upwelling arus laut kaya ikan tuna sirip kuning.',
        takeaway: 'Letak astronomis batas terluar mendasari kedaulatan teritorial dan kekayaan sumber daya maritim nasional.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Letak Astronomis, Geografis, dan Geologis Indonesia',
        caption: 'Peta komprehensif letak koordinat batas NKRI, posisi silang dua benua/samudra, dan jalur pertemuan lempeng tektonik.',
        badge: 'Strategic Coordinates'
      }
    ],
    terminology: [
      { term: 'Letak Astronomis', definition: 'Letak suatu wilayah di permukaan bumi yang didasarkan pada garis lintang dan garis bujur pada jaring koordinat bola bumi.', scientificTerm: 'Astronomical Location' },
      { term: 'Letak Geografis', definition: 'Letak suatu daerah dilihat dari kenyataan posisinya terhadap wilayah-wilayah lain yang mengelilinginya di permukaan bumi.', scientificTerm: 'Geographical Location' },
      { term: 'Letak Geologis', definition: 'Letak suatu wilayah berdasarkan struktur susunan batuan litosfer dan konfigurasi lempeng tektonik bumi.', scientificTerm: 'Geological Location' }
    ],
    summary: [
      'Secara astronomis, Indonesia terletak di 6°LU – 11°LS dan 95°BT – 141°BT (beriklim tropis, 3 zona waktu).',
      'Secara geografis, Indonesia berada di posisi silang antara Benua Asia-Australia dan Samudra Pasifik-Hindia.',
      'Secara geologis, Indonesia terletak pada pertemuan Lempeng Eurasia, Indo-Australia, dan Pasifik serta diapit Paparan Sunda dan Sahul.'
    ],
    quiz: [
      {
        id: 'q54-1',
        question: 'Dampak langsung dari letak astronomis Indonesia yang berada pada koordinat 6°LU – 11°LS (di sabuk khatulistiwa) adalah...',
        options: [
          'Memiliki empat musim (panas, gugur, dingin, semi)',
          'Memiliki iklim tropis dengan suhu hangat sepanjang tahun dan penyinaran matahari stabil',
          'Sering dilanda badai salju dan badai tornado',
          'Memiliki padang gurun pasir terluas di dunia'
        ],
        correctAnswer: 1,
        explanation: 'Wilayah yang dilintasi garis khatulistiwa (0°) dan berada di antara 6°LU – 11°LS menerima radiasi matahari sepanjang tahun dengan suhu rata-rata tinggi (iklim tropis).'
      },
      {
        id: 'q54-2',
        question: 'Secara geologis, wilayah kepulauan Indonesia bagian barat (Sumatra, Jawa, Kalimantan) berada di atas paparan benua dangkal yang dinamakan...',
        options: ['Paparan Sahul', 'Paparan Sunda (Sundaland)', 'Paparan Pasifik', 'Paparan Atlantik'],
        correctAnswer: 1,
        explanation: 'Paparan Sunda (Sundaland) adalah landas kontinen dangkal di Indonesia barat yang dahulu menyatukan kepulauan Sunda Besar dengan Benua Asia.'
      }
    ],
    references: ['Badan Informasi Geospasial (BIG). Atlas Spasial Indonesia.', 'Bemmelen, R. W. van. (1949). The Geology of Indonesia. Government Printing Office.'],
    relatedTopicIds: ['posisi-strategis-indonesia', 'kondisi-fisik-dan-sosial-wilayah-indonesia', 'teori-tektonik-lempeng', 'angin-muson']
  },
  {
    id: 'posisi-strategis-indonesia',
    number: 55,
    title: 'Posisi Strategis Indonesia',
    englishTitle: 'Strategic Maritime Position of Indonesia and Global Chokepoints',
    categoryId: 'geografi-indonesia',
    difficulty: 'Intermediate',
    description: 'Menganalisis doktrin Poros Maritim Dunia (Global Maritime Fulcrum), Alur Laut Kepulauan Indonesia (ALKI I, II, III), titik sempit strategis dunia (Global Chokepoints: Selat Malaka, Selat Sunda, Selat Lombok, Selat Makassar), dan batas wilayah kedaulatan laut ZEE.',
    keywords: ['poros maritim dunia', 'alki 1 2 3', 'chokepoint selat malaka', 'deklarasi djuanda', 'zee zona ekonomi eksklusif', 'unclos 1982'],
    learningObjectives: [
      'Menjelaskan konsep Deklarasi Djuanda 1957 dan pengakuan status Negara Kepulauan (Archipelagic State) dalam UNCLOS 1982.',
      'Menganalisis jalur Alur Laut Kepulauan Indonesia (ALKI I, II, dan III) sebagai koridor hak lintas alur laut damai internasional.',
      'Menilai signifikansi geopolitik dan geoekonomi Selat Malaka dan Selat Lombok sebagai jalur sempit (chokepoints) energi global.'
    ],
    introduction: 'Berdasarkan hukum laut internasional UNCLOS 1982 (United Nations Convention on the Law of the Sea), Indonesia diakui secara sah sebagai Negara Kepulauan (Archipelagic State). Titik tolak kedaulatan maritim ini berakar dari Deklarasi Djuanda tanggal 13 Desember 1957 yang menyatakan bahwa seluruh perairan di sekitar, di antara, dan yang menghubungkan pulau-pulau di Nusantara merupakan satu kesatuan mutlak wilayah kedaulatan NKRI. Di abad ke-21, posisi geografis ini dikembangkan menjadi doktrin Poros Maritim Dunia (Global Maritime Fulcrum) yang mengoptimalkan tol laut dan diplomasi pertahanan maritim.',
    sections: [
      {
        subtitle: '1. Batas-Batas Wilayah Laut Kedaulatan Indonesia Menurut UNCLOS 1982',
        content: 'UNCLOS 1982 membagi batas yurisdiksi laut dari garis pangkal kepulauan (archipelagic baseline):',
        table: {
          headers: ['Batas Zona Laut', 'Jarak Maksimum dari Garis Pangkal', 'Status Hukum & Hak Kedaulatan Negara'],
          rows: [
            ['Laut Teritorial', '12 mil laut (sekitar 22,22 km)', 'Kedaulatan mutlak NKRI atas ruang udara, badan air, dasar laut, dan kandungan tambang di bawahnya; kapal asing hanya memiliki hak lintas damai (innocent passage)'],
            ['Zona Tambahan (Contiguous Zone)', '24 mil laut (sekitar 44,44 km)', 'Negara berhak mencegah dan menghukum pelanggaran hukum kepabeanan (bea cukai), fiskal, imigrasi, dan sanitasi kesehatan'],
            ['Zona Ekonomi Eksklusif (ZEE)', '200 mil laut (sekitar 370,4 km)', 'Hak berdaulat eksklusif untuk mengeksplorasi, mengeksploitasi, mengonservasi, dan mengelola sumber daya hayati (ikan) dan non-hayati (tambang); kapal asing bebas berlayar bebas'],
            ['Landas Kontinen (Continental Shelf)', 'Hingga 350 mil laut (kelanjutan alamiah dasar benua)', 'Hak berdaulat mutlak atas dasar laut dan tanah di bawahnya untuk penambangan minyak bumi dan mineral dasar laut']
          ]
        }
      },
      {
        subtitle: '2. Tiga Alur Laut Kepulauan Indonesia (ALKI)',
        content: 'Sebagai konsekuensi negara kepulauan, Indonesia menetapkan tiga koridor Alur Laut Kepulauan Indonesia (ALKI) bagi pelayaran internasional:',
        table: {
          headers: ['Jalur ALKI', 'Rute Pelayaran yang Dilewati', 'Fungsi Strategis Global'],
          rows: [
            ['ALKI I', 'Laut Natuna Selatan → Selat Karimata → Laut Jawa → Selat Sunda', 'Menghubungkan Laut Cina Selatan dan Samudra Pasifik barat dengan Samudra Hindia bagian barat'],
            ['ALKI II', 'Laut Sulawesi → Selat Makassar → Laut Flores → Selat Lombok', 'Jalur utama kapal tanker minyak raksasa (super-tanker) yang sarat muatannya terlalu dalam untuk Selat Malaka'],
            ['ALKI III-A', 'Samudra Pasifik → Laut Maluku → Laut Seram → Laut Banda → Selat Ombai → Laut Sawu', 'Menghubungkan Samudra Pasifik utara dengan Australia dan Samudra Hindia'],
            ['ALKI III-B & III-C', 'Percabangan melalui Laut Maluku ke Selat Leti dan Laut Arafura', 'Jalur navigasi kapal dagang menuju Australia utara dan Papua Nugini']
          ]
        }
      }
    ],
    classifications: [
      {
        categoryName: 'Chokepoints (Titik Sempit Maritim) Strategis Indonesia',
        items: [
          { name: 'Selat Malaka', description: 'Jalur perdagangan tersibuk di dunia; dilalui lebih dari 80.000 kapal per tahun dan mengangkut 25% minyak mentah dunia dari Timur Tengah ke Asia Timur.' },
          { name: 'Selat Sunda', description: 'Titik sempit alternatif ALKI I penghubung Samudra Pasifik dan Samudra Hindia.' },
          { name: 'Selat Lombok', description: 'Jalur laut sangat dalam yang aman bagi kapal induk militer dan kapal selam nuklir.' },
          { name: 'Selat Makassar', description: 'Koridor logistik ALKI II yang berada tepat di depan Ibu Kota Nusantara (IKN).' }
        ]
      }
    ],
    processes: [
      { stage: 'Deklarasi Djuanda 1957', title: 'Pernyataan Kedaulatan Maritim', description: 'Menggantikan Territoriale Zee en Maritieme Kringen Ordonnantie 1939 kolonial Belanda yang hanya 3 mil.' },
      { stage: 'Diplomasi UNCLOS 1982', title: 'Perjuangan Hukum Internasional', description: 'Prof. Mochtar Kusumaatmadja memperjuangkan pengakuan asas negara kepulauan selama 25 tahun di PBB.' },
      { stage: 'Penetapan ALKI', title: 'Harmonisasi Hukum & Navigasi', description: 'Pemerintah menetapkan rute ALKI I, II, dan III melalui PP No. 37 Tahun 2002.' }
    ],
    caseStudies: [
      {
        title: 'Signifikansi Selat Malaka dalam Pasokan Energi Minyak Mentah Tiongkok ("Malacca Dilemma")',
        location: 'Selat Malaka (Indonesia, Malaysia, Singapura)',
        description: 'Lebih dari 80% impor minyak mentah Tiongkok dari Timur Tengah dan Afrika harus melewati Selat Malaka yang titik tersempitnya di Selat Philips (dekat Kepulauan Riau) hanya selebar 2,8 km. Ketergantungan ekstrem ini dikenal sebagai "Dilema Malaka", menjadikan stabilitas keamanan laut patroli bersama Indonesia (TNI AL) sangat menentukan roda ekonomi dunia.',
        takeaway: 'Penguasaan chokepoints maritim memberikan posisi tawar geopolitik yang luar biasa bagi Indonesia.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Tiga Jalur ALKI (I, II, III) dan 4 Chokepoints Maritim Indonesia',
        caption: 'Peta rute Alur Laut Kepulauan Indonesia, batas ZEE 200 mil laut, dan chokepoint Selat Malaka serta Selat Lombok.',
        badge: 'Maritime Geopolitics'
      }
    ],
    terminology: [
      { term: 'UNCLOS 1982', definition: 'Konvensi Hukum Laut PBB yang menjadi piagam internasional kedaulatan laut, hak lintas kapal, dan batas yurisdiksi maritim negara pantai.', scientificTerm: 'UNCLOS 1982' },
      { term: 'ALKI', definition: 'Alur laut kepulauan yang ditetapkan pemerintah Indonesia untuk memfasilitasi hak lintas alur laut damai bagi kapal dan pesawat asing.', scientificTerm: 'Archipelagic Sea Lanes' },
      { term: 'Chokepoint Maritim', definition: 'Titik sempit strategis pada selat pelayaran dunia yang ramai dilalui kapal dagang dan rentan terganggu oleh konflik atau blokade.', scientificTerm: 'Maritime Chokepoint' }
    ],
    summary: [
      'Deklarasi Djuanda 1957 dan UNCLOS 1982 mengesahkan Indonesia sebagai Negara Kepulauan berdaulat penuh.',
      'Batas laut mencakup Laut Teritorial (12 mil), Zona Tambahan (24 mil), dan ZEE (200 mil).',
      'Indonesia memiliki 3 jalur ALKI dan menguasai chokepoints energi tersibuk dunia di Selat Malaka dan Selat Lombok.'
    ],
    quiz: [
      {
        id: 'q55-1',
        question: 'Deklarasi bersejarah yang dicetuskan pada 13 Desember 1957 yang menyatakan bahwa seluruh laut di antara pulau-pulau Indonesia adalah satu kesatuan utuh wilayah kedaulatan NKRI adalah...',
        options: ['Deklarasi Bangkok', 'Deklarasi Djuanda', 'Perjanjian Renville', 'Deklarasi Malindo'],
        correctAnswer: 1,
        explanation: 'Deklarasi Djuanda 1957 menyatukan perairan laut antarpulau menjadi wilayah kedaulatan mutlak Indonesia, menggantikan ordonansi kolonial yang membatasi hanya 3 mil dari garis pantai.'
      },
      {
        id: 'q55-2',
        question: 'Batas wilayah laut di mana suatu negara pantai memiliki hak berdaulat eksklusif untuk mengeksplorasi dan memanfaatkan seluruh sumber daya alam ikan dan mineral hingga jarak 200 mil laut dinamakan...',
        options: ['Laut Teritorial', 'Zona Tambahan', 'Zona Ekonomi Eksklusif (ZEE)', 'Landas Kontinen'],
        correctAnswer: 2,
        explanation: 'Zona Ekonomi Eksklusif (ZEE) membentang sejauh 200 mil laut dari garis pangkal, memberi hak berdaulat ekonomi penuh atas sumber daya hayati dan non-hayati.'
      }
    ],
    references: ['Kusumaatmadja, M. (1978). Hukum Laut Internasional. Binacipta.', 'UNCLOS. (1982). United Nations Convention on the Law of the Sea. United Nations.'],
    relatedTopicIds: ['letak-astronomis-geografis-dan-geologis-indonesia', 'kondisi-fisik-dan-sosial-wilayah-indonesia', 'geopolitik-dan-geostrategi-global']
  },
  {
    id: 'kondisi-fisik-dan-sosial-wilayah-indonesia',
    number: 56,
    title: 'Kondisi Fisik dan Sosial Wilayah Indonesia',
    englishTitle: 'Physical and Socio-Cultural Geography of the Indonesian Archipelago',
    categoryId: 'geografi-indonesia',
    difficulty: 'Intermediate',
    description: 'Menyintesiskan karakteristik bentang alam fisik kepulauan Nusantara (kepulauan 17.000+ pulau, iklim tropis, kekayaan vulkanik) dengan bentang sosial budaya (pluralitas suku bangsa, persebaran penduduk yang timpang di Jawa, dan kearifan ekologis lokal).',
    keywords: ['kondisi fisik indonesia', 'kondisi sosial indonesia', 'disparitas spasial jawa luar jawa', 'pluralitas budaya', 'negara kepulauan'],
    learningObjectives: [
      'Menjelaskan karakteristik bentang alam fisik kepulauan Indonesia (morfologi, iklim, hidrologi).',
      'Menganalisis disparitas spasial sosial-ekonomi antara Pulau Jawa dan Luar Jawa.',
      'Menghubungkan kondisi fisik kepulauan dengan diversitas kebudayaan suku bangsa di Indonesia.'
    ],
    introduction: 'Indonesia adalah mozaik megah yang memadukan bentang alam fisik kepulauan vulkanik tropis dengan bentang sosial budaya peradaban maritim tertua di dunia. Dengan lebih dari 17.500 pulau yang membentang sepanjang 5.120 km dari timur ke barat (setara jarak London ke Baghdad), Indonesia memiliki kontras fisik yang kaya: dari hutan hujan tropis lebat di Kalimantan, puncak salju abadi Pegunungan Jayawijaya Papua, hingga sabana kering di Nusa Tenggara. Keragaman fisik ini berbanding lurus dengan kekayaan sosial lebih dari 1.300 suku bangsa yang mendiami pulau-pulau tersebut.',
    sections: [
      {
        subtitle: '1. Sintesis Karakteristik Fisik Wilayah Indonesia',
        content: 'Bentang fisik Indonesia memiliki keunikan yang jarang dijumpai di wilayah lain di dunia:',
        table: {
          headers: ['Komponen Fisik', 'Karakteristik Dominan', 'Implikasi Keruangan'],
          rows: [
            ['Morfologi Relief', 'Pulau-pulau bergunung-gunung terjal di jalur vulkanik aktif, diapit dataran aluvial sempit di pesisir', 'Keterbatasan lahan datar untuk perluasan kota; daerah rawan longsor namun tanahnya sangat subur'],
            ['Iklim & Hidrologi', 'Iklim tropis maritim dengan kelembapan tinggi (>80%), curah hujan rata-rata >2.000 mm/tahun, jaringan ribuan sungai besar', 'Mendukung pertanian padi sawah berkelanjutan dan keanekaragaman hutan hujan tropis'],
            ['Kelautan & Pesisir', 'Dua pertiga wilayah adalah laut dengan garis pantai sepanjang 108.000 km, terumbu karang Coral Triangle', 'Potensi ekonomi perikanan tangkap, budidaya rumput laut, dan pariwisata bahari kelas dunia']
          ]
        }
      },
      {
        subtitle: '2. Dinamika Sosial: Disparitas Penduduk dan Pluralitas Budaya',
        content: 'Kondisi fisik kepulauan mempengaruhi persebaran demografi dan diferensiasi budaya:',
        keyPoints: [
          'Ketimpangan Demografi Jawa vs Luar Jawa: Pulau Jawa hanya mencakup 6,7% dari total luas daratan Indonesia, namun menampung lebih dari 55% total populasi penduduk nasional (kepadatan >1.100 jiwa/km²), sementara Papua yang luasnya 22% daratan hanya menampung 1,5% penduduk.',
          'Diferensiasi Budaya Adaptif: Suku Baduy di Banten mempertahankan kelestarian hutan titipan; Suku Bajo di perairan Sulawesi teradaptasi secara biologis dan budaya hidup di atas perahu laut; Suku Dayak di pedalaman Kalimantan menerapkan perladangan gilir balik.',
          'Tantangan Konektivitas Antarpulau: Keterisolasian pulau-pulau terdepan, terluar, dan tertinggal (3T) memicu disparitas harga komoditas pangan dan logistik yang diatasi melalui program Tol Laut.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Lima Pulau Besar Utama di Indonesia',
        items: [
          { name: 'Papua (Luas 421.981 km²)', description: 'Pulau terbesar, relief pegunungan puncak es tertinggi, cadangan tembaga/emas terbesar, kepadatan penduduk paling rendah.' },
          { name: 'Kalimantan (Luas 539.460 km²)', description: 'Daratan lempeng tua stabil bebas gempa, dilintasi sungai-sungai raksasa, lumbung batubara, dan lokasi IKN Nusantara.' },
          { name: 'Sumatra (Luas 473.481 km²)', description: 'Pegunungan Bukit Barisan di barat, dataran rendah rawa gambut di timur, sentra perkebunan kelapa sawit dan minyak bumi.' },
          { name: 'Sulawesi (Luas 174.600 km²)', description: 'Bentuk pulau berlekuk empat semenanjung menyerupai huruf K, pegunungan terjal karst, sentra nikel dunia.' },
          { name: 'Jawa (Luas 128.297 km²)', description: 'Pulau paling subur dengan deretan gunung api andesit, pusat perekonomian, industri manufaktur, dan konsentrasi 150 juta jiwa.' }
        ]
      }
    ],
    processes: [
      { stage: 'Isolasi Geografis Kepulauan', title: 'Diferensiasi Suku Bangsa', description: 'Rintangan selat laut mengisolasi komunitas melahirkan lebih dari 700 bahasa daerah yang unik.' },
      { stage: 'Konsentrasi Sejarah Tanah Subur', title: 'Akumulasi Demografi di Jawa', description: 'Tanah vulkanik subur Jawa mendorong peradaban agraris intensif sejak zaman kerajaan Hindu-Buddha.' },
      { stage: 'Pembangunan Indonesia Sentris', title: 'Pemerataan Infrastruktur 3T', description: 'Pembangunan jalan Trans-Papua, bendungan luar Jawa, dan IKN untuk mengikis ketimpangan antardaerah.' }
    ],
    caseStudies: [
      {
        title: 'Pemindahan Ibu Kota Negara ke IKN Nusantara sebagai Simbol Transformasi Indonesia-Sentris',
        location: 'Kabupaten Penajam Paser Utara dan Kutai Kartanegara, Kalimantan Timur',
        description: 'Pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur merupakan koreksi geografis terbesar atas paradigma pembangunan "Jawa-sentris" menuju "Indonesia-sentris". Pemindahan ini didasarkan pada pertimbangan fisik (Kalimantan aman dari ancaman gempa sesar aktif dan letusan gunung api, memiliki ketersediaan lahan luas) dan pertimbangan spasial (berada tepat di tengah wilayah geografis NKRI di tepi ALKI II).',
        takeaway: 'Penataan ruang nasional berorientasi pada pemerataan keadilan sosial dan keberlanjutan masa depan.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Kepadatan Penduduk dan Sebaran 5 Pulau Besar Indonesia',
        caption: 'Peta tematik disparitas kepadatan penduduk Pulau Jawa (>1.000 jiwa/km²) dibandingkan luar Jawa (<50 jiwa/km²).',
        badge: 'Spatial Disparity'
      }
    ],
    terminology: [
      { term: 'Disparitas Spasial', definition: 'Ketimpangan atau ketidakmerataan kemajuan pembangunan ekonomi, fasilitas infrastruktur, dan kepadatan penduduk antarwilayah.', scientificTerm: 'Spatial Disparity' },
      { term: 'Indonesia-Sentris', definition: 'Paradigma pembangunan nasional yang memandang seluruh wilayah kepulauan Indonesia secara setara, bukan lagi berpusat di Pulau Jawa semata.', scientificTerm: 'Indonesia-Centric Paradigm' },
      { term: 'Wilayah 3T', definition: 'Wilayah Terdepan, Terluar, dan Tertinggal di perbatasan negara yang memerlukan afirmasi kebijakan percepatan pembangunan infrastruktur.', scientificTerm: 'Borderland & Frontier Regions' }
    ],
    summary: [
      'Kondisi fisik Indonesia dicirikan oleh negara kepulauan beriklim tropis dengan pegunungan vulkanik aktif.',
      'Kondisi sosial dicirikan oleh pluralitas budaya yang luar biasa dan disparitas kepadatan penduduk tinggi di Pulau Jawa.',
      'Paradigma pembangunan Indonesia-sentris dan pembangunan IKN di Kalimantan bertujuan memeratakan kesejahteraan spasial.'
    ],
    quiz: [
      {
        id: 'q56-1',
        question: 'Faktor fisik geografis utama yang menyebabkan Pulau Jawa menjadi pulau paling padat penduduknya di Indonesia sejak zaman dahulu adalah...',
        options: [
          'Memiliki wilayah daratan paling luas di Indonesia',
          'Didominasi oleh deretan gunung api aktif yang menyuburkan tanah pertanian secara berkala dan ketersediaan air melimpah',
          'Satu-satunya pulau yang bebas dari gempa bumi',
          'Memiliki cadangan minyak bumi terbesar di dunia'
        ],
        correctAnswer: 1,
        explanation: 'Jawa memiliki rantai gunung api aktif yang menyuplai abu vulkanis kaya hara tanah (Andosol) dan air melimpah, mendukung pertanian padi sawah intensif berkapasitas daya dukung pangan tinggi.'
      },
      {
        id: 'q56-2',
        question: 'Kebijakan pembangunan nasional yang menggeser orientasi pembangunan dari berpusat di Pulau Jawa menuju pemerataan seluruh pelosok kepulauan dan perbatasan dinamakan paradigma...',
        options: ['Jawa-sentris', 'Indonesia-sentris', 'Kontinental-sentris', 'Sentralisasi mutlak'],
        correctAnswer: 1,
        explanation: 'Paradigma Indonesia-sentris menekankan pembangunan yang merata di seluruh pelosok tanah air, termasuk daerah perbatasan 3T dan luar Jawa.'
      }
    ],
    references: ['BPS. (2020). Sensus Penduduk 2020: Profil Kependudukan Indonesia.', 'Bappenas. (2021). Rencana Induk Ibu Kota Nusantara. Kementerian PPN/Bappenas.'],
    relatedTopicIds: ['letak-astronomis-geografis-dan-geologis-indonesia', 'posisi-strategis-indonesia', 'dinamika-kependudukan', 'persebaran-penduduk']
  },

  // CATEGORY H: Sumber Daya Alam (57-61)
  {
    id: 'sumber-daya-alam',
    number: 57,
    title: 'Sumber Daya Alam',
    englishTitle: 'Natural Resources: Classification and Valuation',
    categoryId: 'sumber-daya-alam',
    difficulty: 'Beginner',
    description: 'Menelaah konsep dasar Sumber Daya Alam (SDA): definisi, klasifikasi berdasarkan kelestarian (terbarukan / renewable vs tak terbarukan / non-renewable), berdasarkan materi (hayati vs non-hayati), serta nilai ekonomi dan jasa lingkungan.',
    keywords: ['sumber daya alam', 'renewable resources', 'non-renewable resources', 'sda hayati dan anorganik', 'ekoefisiensi'],
    learningObjectives: [
      'Menjelaskan definisi sumber daya alam dan perannya dalam perekonomian nasional.',
      'Mengklasifikasikan sumber daya alam berdasarkan sifat kelestariannya (terbarukan vs tak terbarukan).',
      'Menganalisis prinsip pemanfaatan sumber daya alam berwawasan lingkungan dan berkelanjutan.'
    ],
    introduction: 'Sumber Daya Alam (SDA / Natural Resources) adalah segala unsur lingkungan biosfer, litosfer, hidrosfer, dan atmosfer yang ada di alam dan dapat dimanfaatkan oleh manusia untuk memenuhi kebutuhan hidup serta meningkatkan kesejahteraan peradaban. Suatu materi baru disebut sebagai "sumber daya" ketika manusia memiliki pengetahuan, teknologi, dan kebutuhan ekonomi untuk memanfaatkannya. Berdasarkan kemampuan pemulihannya, sumber daya alam diklasifikasikan menjadi sumber daya yang dapat diperbarui dan yang tidak dapat diperbarui.',
    sections: [
      {
        subtitle: '1. Klasifikasi Sumber Daya Alam Berdasarkan Kelestarian',
        content: 'Kemampuan regenerasi alami menjadi pembeda utama kelompok SDA:',
        table: {
          headers: ['Kelompok SDA', 'Mekanisme Pemulihan / Regenerasi', 'Contoh Sumber Daya', 'Tantangan Pengelolaan'],
          rows: [
            ['Dapat Diperbarui (Renewable Resources)', 'Dapat memperbarui diri secara alami melalui siklus biologis atau siklus hidrologi sepanjang laju pemanfaatannya tidak melampaui daya dukung lestarinya', 'Hutan kayu, hasil perikanan laut, hewan ternak, tanaman pangan, air bersih, tanah subur', 'Rentan rusak dan punah permanen jika terjadi eksploitasi berlebihan (overexploitation) dan pencemaran'],
            ['Tidak Dapat Diperbarui (Non-Renewable)', 'Jumlahnya terbatas di kerak bumi dan proses pembentukannya membutuhkan waktu geologis jutaan tahun sehingga akan habis terkuras jika ditambang terus-menerus', 'Minyak bumi, gas alam, batubara, bijih besi, tembaga, emas, nikel, bauksit', 'Menuntut efisiensi tinggi, daur ulang (recycling), dan transisi ke energi alternatif'],
            ['Tidak Habis / Selalu Tersedia (Inexhaustible)', 'Tersedia melimpah tanpa batas dan tidak akan habis digunakan oleh konsumsi manusia', 'Radiasi sinar matahari, energi angin, energi pasang surut laut, energi panas bumi (geotermal)', 'Memerlukan investasi teknologi tinggi dan infrastruktur jaringan transmisi listrik modern']
          ]
        }
      },
      {
        subtitle: '2. Klasifikasi Berdasarkan Materi dan Habitat',
        content: 'Berdasarkan wujud materinya, SDA dibagi menjadi SDA Hayati (Biotik) yang bersumber dari makhluk hidup (kayu, getah karet, daging, ikan) dan SDA Non-Hayati (Abiotik) yang bersumber dari benda mati (batuan, pasir, mineral logam, air, udara). Berdasarkan habitatnya, SDA dibagi menjadi SDA Terestrial (daratan) dan SDA Akuatik/Bahari (perairan).',
        keyPoints: [
          'Undang-Undang Pengelolaan SDA di Indonesia berlandaskan Pasal 33 ayat (3) UUD 1945: "Bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besar kemakmuran rakyat."',
          'Prinsip Ekoefisiensi: Mengoptimalkan hasil ekonomi dengan meminimalkan pemborosan bahan baku dan mencegah degradasi lingkungan.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Klasifikasi Barang Tambang (UU No. 11/1967 & UU Minerba)',
        items: [
          { name: 'Golongan A (Strategis)', description: 'Penting bagi pertahanan, keamanan, dan kedaulatan negara (minyak bumi, gas alam, batubara, uranium radioaktif).' },
          { name: 'Golongan B (Vital)', description: 'Menjamin hajat hidup orang banyak dan bahan baku industri nasional (emas, perak, tembaga, nikel, bauksit, besi).' },
          { name: 'Golongan C (Bahan Galian Industri)', description: 'Bahan galian non-logam untuk konstruksi bangunan (pasir, batu kali, batu kapur, marmer, kaolin, tanah liat).' }
        ]
      }
    ],
    processes: [
      { stage: 'Eksplorasi Spasial', title: 'Penyelidikan Geologi Lapangan', description: 'Survei geofisika dan pengeboran sampel untuk menghitung cadangan terbukti.' },
      { stage: 'Eksploitasi & Pengolahan', title: 'Hilirisasi Tambang', description: 'Penambangan ramah lingkungan dan pemurnian di fasilitas smelter domestik.' },
      { stage: 'Reklamasi Pascatambang', title: 'Rehabilitasi Lahan Kritis', description: 'Menutup lubang galian tambang dan merevegetasi kembali dengan pohon pionir.' }
    ],
    caseStudies: [
      {
        title: 'Kebijakan Hilirisasi Nikel Indonesia: Mengubah Ekspor Mentah Menjadi Rantai Pasok Baterai EV Dunia',
        location: 'Morowali (Sulawesi Tengah) dan Weda Bay (Maluku Utara)',
        description: 'Sebelum 2020, Indonesia mengekspor bijih nikel mentah berkadar rendah dengan nilai tambah minim. Melalui pelarangan ekspor bijih mentah dan kewajiban pembangunan smelter pengolahan feronikel dan HPAL (High-Pressure Acid Leach), nilai ekspor produk turunan nikel Indonesia melonjak lebih dari 10 kali lipat, menempatkan Indonesia sebagai pemain kunci dalam ekosistem transisi kendaraan listrik (Electric Vehicle) global.',
        takeaway: 'Pengelolaan sumber daya alam menuntut peningkatan nilai tambah teknologi di dalam negeri.'
      }
    ],
    visuals: [
      {
        type: 'chart',
        title: 'Matriks Klasifikasi Sumber Daya Alam Berdasarkan Kelestarian dan Materi',
        caption: 'Bagan pembagian SDA Renewable, Non-renewable, Hayati, dan Non-hayati beserta contoh pemanfaatannya.',
        badge: 'Resource Classification'
      }
    ],
    terminology: [
      { term: 'Sumber Daya Alam Terbarukan', definition: 'Sumber daya alam yang dapat diproduksi kembali secara alami melalui proses reproduksi biologis atau daur hidrologis.', scientificTerm: 'Renewable Resources' },
      { term: 'Hilirisasi Sumber Daya', definition: 'Strategi peningkatan nilai tambah komoditas mineral dan pertanian mentah melalui proses pengolahan dan pemurnian di dalam negeri.', scientificTerm: 'Downstream Mineral Processing' },
      { term: 'Ekoefisiensi', definition: 'Prinsip pengelolaan sumber daya alam yang bertujuan meminimalkan limbah dan penggunaan energi seraya memaksimalkan output ekonomi lestari.', scientificTerm: 'Eco-efficiency' }
    ],
    summary: [
      'SDA adalah kekayaan biosfer dan litosfer yang bernilai guna bagi peradaban manusia.',
      'SDA terbagi menjadi terbarukan (biologis/hidrologi), tak terbarukan (mineral fosil), dan tak habis (matahari/angin).',
      'Pasal 33 ayat 3 UUD 1945 mengamanatkan pemanfaatan SDA untuk sebesar-besar kemakmuran rakyat dengan prinsip ekoefisiensi.'
    ],
    quiz: [
      {
        id: 'q57-1',
        question: 'Manakah dari kelompok sumber daya alam berikut yang tergolong dalam sumber daya alam yang tidak dapat diperbarui (non-renewable)?',
        options: [
          'Hutan jati, perikanan laut, dan air tanah',
          'Minyak bumi, gas alam, batubara, dan bijih nikel',
          'Sinar matahari, energi angin, dan biomassa',
          'Getah karet, kelapa sawit, dan ternak sapi'
        ],
        correctAnswer: 1,
        explanation: 'Minyak bumi, gas alam, batubara, dan bijih nikel adalah sumber daya alam fosil dan mineral yang membutuhkan waktu jutaan tahun untuk terbentuk sehingga tergolong tidak dapat diperbarui.'
      },
      {
        id: 'q57-2',
        question: 'Berdasarkan UU Minerba, bahan galian tambang yang bersifat strategis bagi pertahanan dan keamanan negara (seperti minyak bumi, gas alam, batubara, dan uranium) digolongkan sebagai bahan galian...',
        options: ['Golongan A (Strategis)', 'Golongan B (Vital)', 'Golongan C (Non-logam industri)', 'Golongan D (Bebas)'],
        correctAnswer: 0,
        explanation: 'Bahan galian Golongan A adalah bahan galian strategis yang mutlak dikuasai negara untuk pertahanan, keamanan, dan stabilitas ekonomi nasional.'
      }
    ],
    references: ['Soerjani, M., et al. (1987). Lingkungan: Sumberdaya Alam dan Kependudukan dalam Pembangunan. UI Press.', 'Undang-Undang RI Nomor 3 Tahun 2020 tentang Perubahan atas UU No. 4/2009 tentang Pertambangan Mineral dan Batubara.'],
    relatedTopicIds: ['persebaran-sumber-daya-mineral', 'sumber-daya-energi', 'sumber-daya-hutan-dan-laut', 'pengelolaan-sumber-daya-alam']
  },
  {
    id: 'persebaran-sumber-daya-mineral',
    number: 58,
    title: 'Persebaran Sumber Daya Mineral',
    englishTitle: 'Geographic Distribution of Mineral Resources in Indonesia',
    categoryId: 'sumber-daya-alam',
    difficulty: 'Intermediate',
    description: 'Memetakan persebaran spasial sumber daya tambang dan mineral strategis di Indonesia: minyak bumi dan gas alam, batubara, nikel, tembaga, emas, bauksit, dan timah beserta sentra-sentra tambang utamanya.',
    keywords: ['tambang nikel pomalaa', 'tambang emas grasberg', 'batubara sawahlunto bukit asam', 'minyak bumi blok cepu', 'timah bangka belitung', 'bauksit pulau bintan'],
    learningObjectives: [
      'Memetakan sentra-sentra penambangan mineral logam utama di kepulauan Indonesia (nikel, emas, tembaga, bauksit, timah).',
      'Menganalisis lokasi cekungan minyak bumi, gas alam, dan batubara terbesar di Indonesia.',
      'Menilai kontribusi komoditas tambang terhadap devisa ekspor dan penerimaan negara bukan pajak (PNBP).'
    ],
    introduction: 'Posisi geologis Indonesia di persimpangan tiga lempeng tektonik aktif dan busur magmatik (magmatic arc) Ring of Fire menganugerahi Nusantara dengan kekayaan cebakan mineral hidrotermal dan cekungan sedimen hidrokarbon terbesar di dunia. Dari tambang emas dan tembaga bawah tanah raksasa di Puncak Grasberg Papua, cadangan nikel laterit terbesar di dunia di Pulau Sulawesi dan Maluku, lumbung batubara kalori tinggi di Kalimantan dan Sumatra, hingga endapan timah aluvial kepulauan Bangka Belitung.',
    sections: [
      {
        subtitle: '1. Peta Sentra Persebaran Mineral Logam Indonesia',
        content: 'Persebaran mineral logam di Indonesia sangat spesifik mengikuti jalur geologi batuan induknya:',
        table: {
          headers: ['Komoditas Tambang', 'Formasi Geologi Batuan', 'Sentra-Sentra Tambang Utama di Indonesia', 'Kegunaan Industri Utama'],
          rows: [
            ['Nikel (Ni)', 'Batuan ultramafik terlapuk (laterit nikel) di jalur ofiolit tektonik', 'Pomalaa & Kolaka (Sulawesi Tenggara), Sorowako (Sulawesi Selatan), Morowali (Sulawesi Tengah), Pulau Gag & Halmahera (Maluku Utara)', 'Bahan baku utama baja tahan karat (stainless steel) dan katoda baterai lithium mobil listrik (NMC)'],
            ['Emas (Au) & Tembaga (Cu)', 'Endapan porfiri hidrotermal intrusi tembaga-emas di zona magmatik', 'Grasberg Tembagapura (Papua Tengah), Batu Hijau & Elang (Sumbawa, NTB), Gosowong (Halmahera), Pongkor (Bogor)', 'Konduktor listrik elektronik presisi tinggi, perhiasan, cadangan devisa emas moneter dunia'],
            ['Bauksit (Bijih Aluminium)', 'Pelapukan kimiawi batuan beku kaya feldspar di iklim tropis', 'Pulau Bintan (Kepulauan Riau), Tayan (Kalimantan Barat), Mempawah (Kalimantan Barat)', 'Bahan baku alumina yang dielektrolisis menjadi logam aluminium untuk bodi pesawat dan kemasan kaleng'],
            ['Timah (Sn)', 'Jalur timah Asia Tenggara (The SE Asian Tin Belt) dari batuan beku granit', 'Pulau Bangka, Pulau Belitung, Pulau Singkep, Pulau Karimun, Kundur (Kepulauan Riau)', 'Penyolderan sirkuit elektronik mikrochip, pelapis kaleng baja anti-karat, paduan perunggu']
          ]
        }
      },
      {
        subtitle: '2. Persebaran Bahan Bakar Fosil: Minyak Bumi, Gas Alam, dan Batubara',
        content: 'Cekungan sedimen tersier purba menghasilkan kekayaan energi fosil:',
        keyPoints: [
          'Minyak Bumi: Blok Rokan (Riau - produsen minyak bumi terbesar nasional), Blok Cepu (Bojonegoro, Jawa Timur), Blok Mahakam (Kalimantan Timur), Laut Natuna, Sorong (Papua Barat Daya).',
          'Gas Alam: Kilang LNG Arun (Aceh), Kilang LNG Bontang (Kalimantan Timur), Kilang LNG Tangguh (Teluk Bintuni, Papua Barat), Natuna Timur (sumber gas hidrokarbon terbesar).',
          'Batubara: Cekungan Ombilin Sawahlunto & Tanjung Enim Bukit Asam (Sumatra Selatan), Samarinda, Kutai Timur, dan Muara Teweh (Kalimantan Timur dan Tengah).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Peringkat Cadangan Mineral Global Indonesia (USGS 2023)',
        items: [
          { name: 'Nikel (Nickel)', description: 'Peringkat 1 dunia (memiliki sekitar 21 juta metrik ton atau 22% dari total cadangan nikel dunia).' },
          { name: 'Timah (Tin)', description: 'Peringkat 2 dunia setelah Tiongkok (produsen dan eksportir balok timah murni terbesar).' },
          { name: 'Tembaga & Emas', description: 'Grasberg di Papua adalah tambang emas nomor 1 terbesar di dunia dan tambang tembaga nomor 2 terbesar dunia.' },
          { name: 'Batubara (Coal)', description: 'Eksportir batubara termal bahan bakar PLTU nomor 1 terbesar di dunia.' }
        ]
      }
    ],
    processes: [
      { stage: 'Proses Hidrotermal Magma', title: 'Mineralisasi Emas-Tembaga', description: 'Fluida panas magma membawa larutan tembaga-emas mengendap di rekahan porfiri batuan beku.' },
      { stage: 'Pelapukan Lateritisasi', title: 'Pengayaan Supergen Nikel', description: 'Hujan tropis mencuci silika batuan ultramafik, memperkaya konsentrasi nikel laterit di horison saprolit.' },
      { stage: 'Sedimentasi Gambut Purba', title: 'Pembentukan Batubara (Inkoling)', description: 'Hutan rawa jutaan tahun lalu tertimbun, mengalami pemadatan panas dan tekanan menjadi antrasit.' }
    ],
    caseStudies: [
      {
        title: 'Tambang Bawah Tanah Raksasa Grasberg Block Cave Freeport Indonesia',
        location: 'Pegunungan Sudirman, Mimika, Papua Tengah, Indonesia',
        description: 'Setelah tambang terbuka (open pit) Grasberg selesai pada 2019, penambangan bertransformasi penuh menjadi tambang bawah tanah (underground mine) terbesar di dunia yang menggunakan kereta listrik otomatis tanpa awak di kedalaman ratusan meter di bawah puncak salju abadi. Tambang ini memproduksi rata-rata 3 juta pon tembaga dan 5.000 ons emas murni per hari.',
        takeaway: 'Eksploitasi mineral strategis membutuhkan rekayasa geoteknik mutakhir dan pengelolaan limbah tailing ketat.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta Persebaran Sumber Daya Tambang dan Mineral Indonesia',
        caption: 'Peta sebaran sentra tambang nikel (Sulawesi-Halmahera), emas (Papua-Sumbawa), batubara (Kalimantan-Sumsel), dan timah (Babel).',
        badge: 'Mineral Atlas'
      }
    ],
    terminology: [
      { term: 'Nikel Laterit', definition: 'Endapan bijih nikel sekunder yang terbentuk dari pelapukan kimiawi mendalam batuan ultramafik di kawasan iklim tropis basah.', scientificTerm: 'Nickel Laterite' },
      { term: 'Endapan Porfiri', definition: 'Cebakan mineral logam bernilai ekonomi tinggi (tembaga-emas-molibdenum) yang terikat pada batuan beku intrusif bertekstur porfiritik.', scientificTerm: 'Porphyry Deposit' },
      { term: 'Smelter', definition: 'Fasilitas pabrik pengolahan metalurgi yang memanaskan dan memurnikan konsentrat bijih mentah menjadi logam murni siap industri.', scientificTerm: 'Smelter Facility' }
    ],
    summary: [
      'Indonesia memiliki kekayaan mineral raksasa akibat tatanan geologis magmatik lempeng tektonik aktif.',
      'Sentra nikel berpusat di Sulawesi dan Maluku; emas-tembaga di Papua dan Sumbawa; timah di Bangka Belitung; batubara di Kalimantan dan Sumatra.',
      'Indonesia memegang peringkat 1 cadangan nikel dunia dan menjadi eksportir batubara terbesar di dunia.'
    ],
    quiz: [
      {
        id: 'q58-1',
        question: 'Wilayah di Indonesia yang terkenal sebagai sentra penambangan timah terbesar sejak era kolonial hingga kini (The Tin Belt) adalah...',
        options: ['Kepulauan Bangka Belitung dan Singkep', 'Pulau Buton dan Pulau Gag', 'Sorowako dan Morowali', 'Tembagapura Papua'],
        correctAnswer: 0,
        explanation: 'Kepulauan Bangka Belitung dan Kundur/Singkep adalah sentra sabuk timah (tin belt) Indonesia yang menghasilkan cadangan timah aluvial terbesar nasional.'
      },
      {
        id: 'q58-2',
        question: 'Komoditas mineral tambang di mana Indonesia saat ini menguasai cadangan nomor 1 terbesar di dunia dan menjadi rebutan industri baterai mobil listrik global adalah...',
        options: ['Uranium', 'Nikel', 'Minyak tanah', 'Batu bara muda'],
        correctAnswer: 1,
        explanation: 'Indonesia memegang sekitar 21 juta metrik ton (22% cadangan nikel dunia), menjadikannya pemegang cadangan nikel terbesar di planet bumi.'
      }
    ],
    references: ['USGS. (2023). Mineral Commodity Summaries: Nickel, Tin, Copper, Gold. U.S. Geological Survey.', 'Badan Geologi - Kementerian ESDM. Neraca Sumber Daya Mineral dan Batubara Indonesia.'],
    relatedTopicIds: ['sumber-daya-alam', 'sumber-daya-energi', 'letak-astronomis-geografis-dan-geologis-indonesia', 'transisi-energi-dan-dekarbonisasi']
  },
  {
    id: 'sumber-daya-energi',
    number: 59,
    title: 'Sumber Daya Energi',
    englishTitle: 'Energy Resources: Fossil Fuels and Renewable Alternatives in Indonesia',
    categoryId: 'sumber-daya-alam',
    difficulty: 'Intermediate',
    description: 'Menganalisis bauran energi nasional: Energi Fosil (minyak bumi, gas bumi, batubara) vs Energi Baru dan Terbarukan / EBT (panas bumi/geotermal, tenaga surya PLTS, tenaga angin PLTB, mikrohidro PLTMH, dan bioenergi biomassa).',
    keywords: ['sumber daya energi', 'energi terbarukan ebt', 'panas bumi geotermal', 'plts surya terapung cirata', 'pltb bayu sidrap', 'bauran energi nasional'],
    learningObjectives: [
      'Menjelaskan komposisi bauran energi nasional dan target transisi menuju net-zero emission 2060.',
      'Mengidentifikasi potensi energi panas bumi (geotermal) Indonesia yang mencapai 40% dari total potensi dunia.',
      'Menganalisis proyek-proyek percontohan pembangkit EBT nasional (PLTS Terapung Cirata, PLTB Sidrap, bioenergi kelapa sawit).'
    ],
    introduction: 'Energi adalah darah penggerak industri, transportasi, dan peradaban modern. Selama lebih dari satu abad, perekonomian Indonesia ditopang oleh energi fosil konvensional (minyak bumi, gas bumi, dan batubara). Namun, cadangan bahan bakar fosil yang terus menipis, polusi udara, serta komitmen perubahan iklim global menuntut percepatan transisi energi menuju Energi Baru dan Terbarukan (EBT). Diberkahi 127 gunung api aktif, sinar matahari tropis sepanjang tahun, garis pantai terpanjang, dan sungai-sungai berarus deras, Indonesia memiliki potensi EBT raksasa melebihi 3.600 Gigawatt.',
    sections: [
      {
        subtitle: '1. Potensi Energi Baru dan Terbarukan (EBT) Indonesia',
        content: 'Kekayaan geografis menghasilkan aneka ragam sumber daya energi bersih:',
        table: {
          headers: ['Jenis Energi Terbarukan', 'Potensi Teoritis Nasional', 'Prinsip Kerja Pembangkit', 'Lokasi Proyek Unggulan Nasional'],
          rows: [
            ['Panas Bumi (Geotermal)', 'Sekitar 24 Gigawatt (40% cadangan dunia)', 'Uap panas bumi bertekanan tinggi dari kantung magma disedot untuk memutar turbin generator', 'PLTP Kamojang & Wayang Windu (Jabar), PLTP Sarulla (Sumut), PLTP Dieng (Jateng), PLTP Lahendong (Sulut)'],
            ['Tenaga Surya (PLTS)', 'Lebih dari 3.200 Gigawatt (radiasi 4,8 kWh/m²/hari)', 'Fotovoltaik (solar cell) mengonversi foton sinar matahari menjadi arus listrik direct current (DC)', 'PLTS Terapung Cirata Jawa Barat (145 MWac, PLTS terapung terbesar di Asia Tenggara), PLTS Likupang (Sulut)'],
            ['Tenaga Angin / Bayu (PLTB)', 'Sekitar 155 Gigawatt (terutama pesisir selatan & timur)', 'Kincir angin raksasa digerakkan hembusan angin kencang memutar generator alternator', 'PLTB Sidrap 75 MW (Sidenreng Rappang, Sulsel), PLTB Tolo Jeneponto 72 MW (Sulsel)'],
            ['Tenaga Air (PLTA & Mikrohidro)', 'Sekitar 95 Gigawatt', 'Debit aliran air sungai atau bendungan dijatuhkan memutar sudu-sudu turbin hidraulik', 'PLTA Cirata, PLTA Saguling, PLTA Batang Toru (Sumut), PLTA Kayan Cascade (Kaltara 9.000 MW)'],
            ['Bioenergi & Biomassa', 'Sekitar 57 Gigawatt', 'Pemanfaatan limbah kelapa sawit (POME/cangkang), ampas tebu, serbuk kayu, dan biogas kotoran ternak', 'Pembangkit Biomasa Pelet Kayu dan program mandatori Biodiesel B35/B40 nasional']
          ]
        }
      },
      {
        subtitle: '2. Target Bauran Energi Nasional (National Energy Mix)',
        content: 'Pemerintah Indonesia melalui Dewan Energi Nasional (DEN) menetapkan target transformasi bauran energi:',
        keyPoints: [
          'Target Porsi EBT: Mendorong porsi pembangkit energi bersih mencapai 23% pada tahun 2025 dan terus meningkat menuju target Net Zero Emission (NZE) pada tahun 2060 atau lebih cepat.',
          'Pensiun Dini PLTU Batubara: Penghentian bertahap pembangkit listrik tenaga uap (PLTU) batubara tertua melalui mekanisme Energy Transition Mechanism (ETM) dan kemitraan pendanaan Just Energy Transition Partnership (JETP).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Dua Kelompok Besar Sumber Daya Energi',
        items: [
          { name: 'Energi Fosil Konvensional', description: 'Minyak bumi, gas bumi, batubara (penyumbang emisi karbon GRK terbesar).' },
          { name: 'Energi Baru dan Terbarukan (EBT)', description: 'Geotermal, surya fotovoltaik, bayu/angin, hidroelektrik, pasang surut laut, nuklir thorium/uranium, dan bioenergi hijau.' }
        ]
      }
    ],
    processes: [
      { stage: 'Pengeboran Sumur Geotermal', title: 'Penyedotan Uap Magmatik', description: 'Sumur bor menembus reservoar batuan panas bumi sedalam 2.000 meter di lereng gunung api.' },
      { stage: 'Pemisahan Separator Uap', title: 'Pemutaran Turbin Listrik', description: 'Separator memisahkan uap kering murni dari air garam untuk memutar turbin berkecepatan 3.000 rpm.' },
      { stage: 'Injeksi Kondensat Kembali', title: 'Siklus Sirkular Tertutup', description: 'Uap didinginkan kembali menjadi air dan diinjeksikan kembali ke dalam bumi untuk dipanaskan ulang tanpa limbah.' }
    ],
    caseStudies: [
      {
        title: 'PLTS Terapung Cirata: Tonggak Sejarah Pembangkit Surya Terbesar di Asia Tenggara',
        location: 'Waduk Cirata, Purwakarta - Cianjur - Bandung Barat, Jawa Barat',
        description: 'Diresmikan pada November 2023, PLTS Terapung Cirata memiliki kapasitas 192 MWp (145 MWac) yang membentang di atas permukaan air waduk seluas 250 hektar. Memasang panel surya di atas air waduk meningkatkan efisiensi pendinginan panel sebesar 10% dibanding di darat, mengurangi penguapan air waduk saat kemarau, dan tidak memerlukan pembebasan lahan pertanian produktif.',
        takeaway: 'Inovasi spasial floating solar mengatasi dilema persaingan pemanfaatan ruang darat.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Sistem Pembangkit Listrik Tenaga Panas Bumi (PLTP) Siklus Tertutup',
        caption: 'Bagan alir PLTP: sumur produksi, separator uap, turbin generator, kondensor, dan sumur reinjeksi ramah lingkungan.',
        badge: 'Renewable Energy Lab'
      }
    ],
    terminology: [
      { term: 'Energi Terbarukan', definition: 'Energi yang berasal dari proses alamiah yang terus berkelanjutan dan terbarukan secara alami tanpa khawatir habis terkuras (surya, angin, geotermal).', scientificTerm: 'Renewable Energy' },
      { term: 'Geotermal (Panas Bumi)', definition: 'Energi termal alami yang tersimpan di dalam perut bumi yang berasosiasi dengan aktivitas magmatik di jalur gunung api.', scientificTerm: 'Geothermal Energy' },
      { term: 'Net Zero Emission (NZE)', definition: 'Kondisi kesetimbangan di mana jumlah total emisi gas rumah kaca yang dilepaskan ke atmosfer seimbang dengan jumlah emisi yang diserap kembali oleh biosfer.', scientificTerm: 'Net Zero Emission' }
    ],
    summary: [
      'Indonesia tengah mentransisikan bauran energi dari dominasi fosil (batubara/minyak) menuju EBT ramah lingkungan.',
      'Potensi geotermal Indonesia adalah salah satu yang terbesar di dunia (~40% cadangan bumi) berkat Ring of Fire.',
      'PLTS Terapung Cirata dan PLTB Sidrap membuktikan komitmen pemanfaatan potensi surya dan angin kepulauan.'
    ],
    quiz: [
      {
        id: 'q59-1',
        question: 'Indonesia memiliki potensi energi panas bumi (geotermal) yang sangat melimpah mencapai sekitar 40% cadangan dunia. Faktor fisik utama yang menyebabkannya adalah...',
        options: [
          'Memiliki garis pantai yang sangat panjang',
          'Letak geologis Indonesia yang berada tepat pada jalur sabuk gunung berapi aktif dunia (Ring of Fire)',
          'Tingginya curah hujan di hutan hujan tropis',
          'Kedalaman rata-rata perairan laut Jawa yang dangkal'
        ],
        correctAnswer: 1,
        explanation: 'Keberadaan 127 gunung api aktif di sepanjang jalur subduksi lempeng tektonik Ring of Fire memanaskan reservoar batuan hidrotermal di dalam litosfer Indonesia.'
      },
      {
        id: 'q59-2',
        question: 'Pembangkit Listrik Tenaga Bayu (PLTB) komersial skala besar pertama di Indonesia dengan puluhan kincir angin raksasa berada di daerah...',
        options: ['Sidrap (Sidenreng Rappang), Sulawesi Selatan', 'Cilegon, Banten', 'Bontang, Kalimantan Timur', 'Kuala Tanjung, Sumatra Utara'],
        correctAnswer: 0,
        explanation: 'PLTB Sidrap di Sulawesi Selatan (kapasitas 75 MW) diresmikan pada 2018 sebagai ladang kincir angin turbin angin komersial skala utilitas pertama di Indonesia.'
      }
    ],
    references: ['Kementerian ESDM. (2023). Rencana Usaha Penyediaan Tenaga Listrik (RUPTL) PT PLN 2021-2030.', 'International Renewable Energy Agency (IRENA). (2022). Indonesia Energy Transition Outlook.'],
    relatedTopicIds: ['sumber-daya-alam', 'persebaran-sumber-daya-mineral', 'transisi-energi-dan-dekarbonisasi', 'perubahan-iklim-dan-pemanasan-global']
  },
  {
    id: 'sumber-daya-hutan-dan-laut',
    number: 60,
    title: 'Sumber Daya Hutan dan Laut',
    englishTitle: 'Forest and Marine Resources in the Indonesian Maritime Realm',
    categoryId: 'sumber-daya-alam',
    difficulty: 'Intermediate',
    description: 'Menelaah dua pilar ekosistem kekayaan alam hayati Nusantara: Sumber Daya Hutan (klasifikasi hutan: produksi, lindung, konservasi, hasil hutan bukan kayu HHBK) dan Sumber Daya Kelautan (potensi perikanan tangkap 12 juta ton/tahun di 11 WPP-NRI, mangrove, padang lamun, dan terumbu karang Segitiga Karang Dunia).',
    keywords: ['sumber daya hutan', 'hutan lindung produksi konservasi', 'wpp-nri perikanan', 'coral triangle segitiga karang', 'hutan mangrove', 'padang lamun seagrass'],
    learningObjectives: [
      'Mengklasifikasikan 3 fungsi pokok kawasan hutan di Indonesia menurut UU Kehutanan (Produksi, Lindung, Konservasi).',
      'Menganalisis potensi perikanan laut di 11 Wilayah Pengelolaan Perikanan Negara Republik Indonesia (WPP-NRI).',
      'Menjelaskan peranan ekologis hutan mangrove dan padang lamun sebagai penyerap karbon biru (blue carbon) pesisir.'
    ],
    introduction: 'Sebagai negara yang dikaruniai hutan hujan tropis terluas ketiga di dunia dan laut tropis terluas di dunia, Indonesia memiliki dua benteng modal alam (natural capital) terbesar di bumi: Hutan dan Laut. Hutan Indonesia menutupi lebih dari 95 juta hektar daratan yang menyediakan oksigen, kayu, dan keanekaragaman genetik. Sementara laut Indonesia membentang seluas 6,4 juta km² yang menjadi jantung Segitiga Terumbu Karang Dunia (Coral Triangle) dengan potensi perikanan lestari melampaui 12 juta ton per tahun.',
    sections: [
      {
        subtitle: '1. Tiga Fungsi Pokok Kawasan Hutan Indonesia (UU No. 41/1999)',
        content: 'Kawasan hutan negara dibagi secara ketat berdasarkan fungsi ekologis dan ekonominya:',
        table: {
          headers: ['Fungsi Kawasan Hutan', 'Tujuan Pokok Pengelolaan', 'Batas Toleransi Pemanfaatan', 'Contoh Nyata Lapangan'],
          rows: [
            ['1. Hutan Konservasi (HK)', 'Pengawetan keanekaragaman tumbuhan dan satwa beserta ekosistemnya', 'Dilarang keras menebang pohon; hanya untuk penelitian ilmiah, pendidikan, dan ekowisata terbatas', 'Taman Nasional Gunung Leuser, Cagar Alam Pananjung Pangandaran, Suaka Margasatwa Muara Angke'],
            ['2. Hutan Lindung (HL)', 'Perlindungan sistem penyangga kehidupan untuk mengatur tata air, mencegah banjir, mengendalikan erosi, mencegah intrusi air laut, dan memelihara kesuburan tanah', 'Tidak boleh ditebang kayunya; pemanfaatan hanya diperbolehkan untuk Hasil Hutan Bukan Kayu (HHBK: madu, getah, rotan) dan jasa lingkungan air', 'Hutan lindung di lereng hulu Gunung Gede-Pangrango, lereng Gunung Merbabu, perbukitan karst'],
            ['3. Hutan Produksi (HP)', 'Menghasilkan bahan baku kayu dan hasil hutan untuk kebutuhan industri manufaktur dan ekspor', 'Dikelola melalui sistem tebang pilih tanam Indonesia (TPTI) atau Hutan Tanaman Industri (HTI) bersertifikat lestari', 'Hutan Tanaman Industri kayu akasia/eukaliptus untuk bubur kertas (pulp) di Riau; hutan jati Perhutani di Jawa Tengah']
          ]
        }
      },
      {
        subtitle: '2. Potensi Kelautan dan 11 WPP-NRI',
        content: 'Wilayah perairan laut Indonesia dibagi menjadi 11 Wilayah Pengelolaan Perikanan (WPP-NRI):',
        keyPoints: [
          'Potensi Ikan Laut: Potensi lestari (Maximum Sustainable Yield / MSY) perikanan tangkap Indonesia mencapai 12,01 juta ton per tahun dengan nilai ekonomi ratusan triliun rupiah.',
          'Coral Triangle (Pusat Segitiga Karang Dunia): Indonesia menampung lebih dari 76% spesies karang dunia dan 37% spesies ikan karang dunia di Raja Ampat, Bunaken, Derawan, dan Wakatobi.',
          'Karbon Biru (Blue Carbon): Hutan mangrove dan padang lamun Indonesia mampu menyerap dan mengunci karbon organik di dalam sedimen lumpur pesisir 5 kali lebih cepat dan 10 kali lebih padat dibanding hutan daratan biasa.'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Tiga Ekosistem Kunci Pesisir Laut Tropis',
        items: [
          { name: 'Hutan Mangrove (Bakau)', description: 'Luas 3,36 juta ha (23% mangrove dunia); benteng abrasi pantai, perangkap sedimen, pemijahan udang/ikan.' },
          { name: 'Padang Lamun (Seagrass)', description: 'Tumbuhan berbunga sejati di laut dangkal; habitat makan duyung (dugong) dan penyu hijau, penstabil dasar laut.' },
          { name: 'Terumbu Karang (Coral Reef)', description: 'Struktur kalsium karbonat koloni polip karang; lumbung keanekaragaman hayati 2.500 jenis ikan laut.' }
        ]
      }
    ],
    processes: [
      { stage: 'Fotosintesis Blue Carbon', title: 'Penyerapan Karbon Pesisir', description: 'Akar mangrove menyerap CO2 atmosfer mengendapkannya ke dalam lapisan tanah gambut pesisir anaerob.' },
      { stage: 'Pemijahan Nursery Ground', title: 'Perlindungan Larva Ikan', description: 'Akar tunjang bakau melindungi benih ikan kakap dan udang dari incaran predator laut lepas.' },
      { stage: 'Rekrutmen ke Laut Lepas', title: 'Migrasi Ikan Dewasa', description: 'Ikan muda yang telah dewasa berenang ke zona neritik laut lepas mengisi stok tangkapan nelayan.' }
    ],
    caseStudies: [
      {
        title: 'Restorasi Terumbu Karang dan Pariwisata Bahari Berkelanjutan di Kepulauan Raja Ampat',
        location: 'Kabupaten Raja Ampat, Papua Barat Daya, Indonesia',
        description: 'Raja Ampat dikenal sebagai episentrum keanekaragaman hayati laut terkaya di planet bumi dengan lebih dari 550 spesies karang keras dan 1.400 jenis ikan. Melalui penetapan Kawasan Konservasi Perairan Daerah (KKPD), penegakan larangan destructive fishing (bom ikan), dan penerapan tiket konservasi lingkungan bagi wisatawan menyelam (diving), stok ikan melonjak drastis dan menopang ekonomi masyarakat adat setempat.',
        takeaway: 'Konservasi laut terbukti menghasilkan keuntungan ekonomi yang jauh melampaui perusakan eksploitatif.'
      }
    ],
    visuals: [
      {
        type: 'map',
        title: 'Peta 11 Wilayah Pengelolaan Perikanan (WPP-NRI) dan Segitiga Karang Dunia',
        caption: 'Peta pembagian 11 zona WPP perikanan laut Indonesia dari WPP 571 (Selat Malaka) hingga WPP 718 (Laut Arafura).',
        badge: 'Marine Fisheries Zones'
      }
    ],
    terminology: [
      { term: 'Karbon Biru (Blue Carbon)', definition: 'Karbon dioksida atmosfer yang diserap, disimpan, dan dikunci secara alami oleh ekosistem vegetasi pesisir dan laut (mangrove, lamun, dan rawa asin).', scientificTerm: 'Blue Carbon' },
      { term: 'WPP-NRI', definition: 'Wilayah Pengelolaan Perikanan Negara Republik Indonesia yang membagi perairan laut ke dalam 11 satuan ruang pengelolaan perikanan terpadu.', scientificTerm: 'Fisheries Management Area' },
      { term: 'Maximum Sustainable Yield (MSY)', definition: 'Batas jumlah tangkapan ikan maksimum yang dapat diambil dari populasi ikan secara berkelanjutan tanpa merusak daya pemulihan alaminya.', scientificTerm: 'Maximum Sustainable Yield' }
    ],
    summary: [
      'Kawasan hutan terbagi menjadi Hutan Konservasi, Hutan Lindung (penjaga air dan erosi), dan Hutan Produksi.',
      'Potensi perikanan laut Indonesia tersebar di 11 WPP-NRI dengan batas tangkapan lestari ~12 juta ton/tahun.',
      'Ekosistem mangrove dan padang lamun Indonesia merupakan penyerap karbon biru (blue carbon) terbesar di dunia.'
    ],
    quiz: [
      {
        id: 'q60-1',
        question: 'Kawasan hutan yang memiliki fungsi pokok menjaga sistem penyangga kehidupan, mengatur tata air tanah, mencegah bahaya banjir, dan mengendalikan erosi tanah tanpa boleh ditebang kayunya adalah...',
        options: ['Hutan Produksi Terbatas', 'Hutan Lindung', 'Hutan Tanaman Industri', 'Hutan Konversi'],
        correctAnswer: 1,
        explanation: 'Hutan Lindung dikelola secara mutlak untuk fungsi hidrologis penata tata air dan pencegah erosi/banjir sehingga dilarang keras untuk dieksploitasi kayunya.'
      },
      {
        id: 'q60-2',
        question: 'Kawasan perairan laut Indonesia bersama Filipina, Malaysia, Papua Nugini, Kepulauan Solomon, dan Timor Leste yang menjadi pusat keanekaragaman terumbu karang terkaya di dunia dikenal dengan julukan...',
        options: ['Ring of Fire', 'The Coral Triangle (Segitiga Terumbu Karang Dunia)', 'Sunda Shelf', 'Great Barrier Reef'],
        correctAnswer: 1,
        explanation: 'The Coral Triangle (Segitiga Terumbu Karang Dunia) adalah kawasan perairan tropis di Pasifik barat yang menampung lebih dari 76% seluruh spesies karang di bumi.'
      }
    ],
    references: ['Undang-Undang RI Nomor 41 Tahun 1999 tentang Kehutanan.', 'Kementerian Kelautan dan Perikanan (KKP). (2022). Keputusan Menteri KP tentang Estimasi Potensi Sumber Daya Ikan 11 WPP-NRI.'],
    relatedTopicIds: ['sumber-daya-alam', 'konservasi-flora-dan-fauna', 'laut-dan-karakteristiknya', 'posisi-strategis-indonesia']
  },
  {
    id: 'pengelolaan-sumber-daya-alam',
    number: 61,
    title: 'Pengelolaan Sumber Daya Alam',
    englishTitle: 'Sustainable Natural Resource Management and Governance',
    categoryId: 'sumber-daya-alam',
    difficulty: 'Intermediate',
    description: 'Menganalisis prinsip-prinsip tata kelola sumber daya alam berkelanjutan: Prinsip Berkelanjutan (Sustainable Use), Prinsip Ekoefisiensi, Valuasi Ekonomi Lingkungan, serta instrumen AMDAL (Analisis Mengenai Dampak Lingkungan) dan KLHS.',
    keywords: ['pengelolaan sda berkelanjutan', 'ekoefisiensi', 'amdal', 'klhs', 'valuasi ekonomi lingkungan', 'pembangunan berkelanjutan'],
    learningObjectives: [
      'Menjelaskan tiga pilar utama pengelolaan sumber daya alam berkelanjutan (ekonomi, ekologi, sosial).',
      'Menerapkan prinsip ekoefisiensi dalam pemanfaatan energi, kehutanan, pertambangan, dan industri.',
      'Memahami peranan instrumen pencegahan kerusakan lingkungan AMDAL dan Kajian Lingkungan Hidup Strategis (KLHS).'
    ],
    introduction: 'Pengelolaan Sumber Daya Alam Berkelanjutan adalah pemanfaatan kekayaan alam yang dilakukan secara bijaksana untuk memenuhi kebutuhan generasi saat ini tanpa mengorbankan kemampuan dan hak generasi masa depan untuk memenuhi kebutuhan mereka sendiri. Paradigma pembangunan lama yang mengeksploitasi alam secara serakah demi pertumbuhan ekonomi jangka pendek telah memicu kerusakan lingkungan hidup, kepunahan spesies, dan krisis iklim. Tata kelola modern memadukan prinsip ekoefisiensi dengan instrumen hukum lingkungan preventif.',
    sections: [
      {
        subtitle: '1. Tiga Prinsip Utama Tata Kelola SDA Berkelanjutan',
        content: 'Pemanfaatan sumber daya alam harus memenuhi tiga pilar keselarasan:',
        table: {
          headers: ['Pilar Pengelolaan', 'Fokus Sasaran', 'Kriteria Keberhasilan Lapangan'],
          rows: [
            ['Pilar Ekologis (Keberlanjutan Lingkungan)', 'Menjaga keutuhan fungsi ekosistem, kapasitas asimilasi polusi, dan keanekaragaman genetik', 'Pemanfaatan tidak melampaui daya dukung dan daya tampung lingkungan; rehabilitasi lahan pascatambang'],
            ['Pilar Ekonomi (Efisiensi & Nilai Tambah)', 'Meningkatkan kemakmuran dan pertumbuhan ekonomi yang efisien tanpa pemborosan', 'Penerapan prinsip ekoefisiensi, daur ulang materi (circular economy), dan hilirisasi produk dalam negeri'],
            ['Pilar Sosial-Keadilan (Pemberdayaan Masyarakat)', 'Menjamin pemerataan akses dan keadilan bagi masyarakat adat dan penduduk lokal', 'Penghormatan terhadap hak ulayat adat, penyerapan tenaga kerja lokal, dan penyelesaian konflik agraria']
          ]
        }
      },
      {
        subtitle: '2. Instrumen Pengendalian: AMDAL dan KLHS',
        content: 'Hukum lingkungan Indonesia mewajibkan instrumen penilaian risiko sebelum proyek dimulai:',
        keyPoints: [
          'Kajian Lingkungan Hidup Strategis (KLHS): Analisis sistematis yang wajib dibuat oleh pemerintah untuk memastikan bahwa prinsip pembangunan berkelanjutan telah menjadi dasar dalam penyusunan kebijakan, rencana, dan program (KRP) tata ruang (RTRW).',
          'Analisis Mengenai Dampak Lingkungan (AMDAL): Kajian mengenai dampak penting suatu usaha atau kegiatan yang direncanakan pada lingkungan hidup yang diperlukan bagi proses pengambilan keputusan izin berusaha (terdiri dari KA-ANDAL, ANDAL, RKL, dan RPL).'
        ]
      }
    ],
    classifications: [
      {
        categoryName: 'Prinsip 4R dalam Pengelolaan Sumber Daya Mineral & Energi',
        items: [
          { name: 'Reduce (Pengurangan)', description: 'Mengurangi pemakaian bahan baku dan konsumsi energi yang boros.' },
          { name: 'Reuse (Penggunaan Kembali)', description: 'Memanfaatkan kembali barang-barang bekas tanpa perlu meleburnya terlebih dahulu.' },
          { name: 'Recycle (Daur Ulang)', description: 'Mengolah kembali sampah aluminium, tembaga, dan plastik menjadi produk baru.' },
          { name: 'Recovery / Replace (Penggantian)', description: 'Menggantikan penggunaan bahan bakar fosil dengan energi bersih terbarukan.' }
        ]
      }
    ],
    processes: [
      { stage: 'Penyusunan Amdal', title: 'Studi Baseline Lingkungan', description: 'Tim ahli mengukur kualitas rona awal air, udara, keanekaragaman hayati, dan sosial warga.' },
      { stage: 'Pelibatan Publik', title: 'Konsultasi Masyarakat', description: 'Mendengarkan aspirasi warga terdampak langsung proyek pembangunan pabrik/tambang.' },
      { stage: 'Audit RKL & RPL', title: 'Pemantauan Berkala Operasional', description: 'Memantau instalasi pengolahan air limbah (IPAL) dan emisi cerobong secara berkala.' }
    ],
    caseStudies: [
      {
        title: 'Pengelolaan Pertanian Organik dan Pengendalian Hama Terpadu (PHT) di Alami Beras Merah Jatiluwih',
        location: 'Tabanan, Bali, Indonesia',
        description: 'Petani sawah terasering Jatiluwih menggabungkan teknologi ramah lingkungan dengan sistem irigasi adat Subak. Mereka menghentikan pemakaian pestisida kimia sintetis beracun dan beralih ke Pengendalian Hama Terpadu (PHT) memanfaatkan musuh alami burung hantu dan bebek pemakan keong sawah. Beras merah organik Jatiluwih kini memiliki sertifikasi ekologis internasional bernilai jual tinggi.',
        takeaway: 'Pengelolaan ramah lingkungan meningkatkan nilai ekonomi sekaligus menjaga kesehatan akuifer tanah.'
      }
    ],
    visuals: [
      {
        type: 'diagram',
        title: 'Bagan Tiga Pilar Pembangunan Berkelanjutan dan Integrasi Instrumen AMDAL',
        caption: 'Diagram irisan 3 pilar: Keberlanjutan Ekologi, Kelayakan Ekonomi, dan Keadilan Sosial menuju Pembangunan Berkelanjutan.',
        badge: 'Environmental Governance'
      }
    ],
    terminology: [
      { term: 'AMDAL', definition: 'Kajian komprehensif mengenai dampak penting suatu usaha atau kegiatan yang direncanakan terhadap lingkungan hidup untuk izin berusaha.', scientificTerm: 'Environmental Impact Assessment (EIA)' },
      { term: 'KLHS', definition: 'Analisis sistematis dan menyeluruh untuk memastikan prinsip pembangunan berkelanjutan terintegrasi dalam perencanaan tata ruang wilayah.', scientificTerm: 'Strategic Environmental Assessment' },
      { term: 'Ekonomi Sirkular (Circular Economy)', definition: 'Model ekonomi regeneratif yang meminimalkan limbah dan emisi melalui perancangan ulang, daur ulang, dan penggunaan kembali produk.', scientificTerm: 'Circular Economy' }
    ],
    summary: [
      'Tata kelola SDA berkelanjutan menyeimbangkan pilar ekologis, pertumbuhan ekonomi, dan keadilan sosial.',
      'Prinsip ekoefisiensi mengoptimalkan manfaat materi dengan meminimalkan pemborosan energi dan limbah.',
      'AMDAL (pada skala proyek) dan KLHS (pada skala kebijakan tata ruang) menjadi instrumen hukum preventif pelindung lingkungan hidup.'
    ],
    quiz: [
      {
        id: 'q61-1',
        question: 'Prinsip pemanfaatan sumber daya alam yang bertujuan meminimalkan penggunaan bahan baku mentah dan energi serta meminimalkan limbah pencemaran tanpa mengurangi kualitas output ekonomi disebut prinsip...',
        options: ['Ekoefisiensi', 'Eksploitasi maksimal', 'Determinisme lingkungan', 'Konsumsi primer'],
        correctAnswer: 0,
        explanation: 'Ekoefisiensi (ekologi + efisiensi) adalah prinsip pemanfaatan sumber daya alam yang hemat bahan, hemat energi, dan berwawasan pelestarian lingkungan hidup.'
      },
      {
        id: 'q61-2',
        question: 'Kajian ilmiah komprehensif yang wajib disusun oleh pemrakarsa proyek besar (seperti pembangunan jalan tol atau pabrik semen) untuk mengidentifikasi dampak penting lingkungan sebelum izin usaha diterbitkan disebut...',
        options: ['AMDAL (Analisis Mengenai Dampak Lingkungan)', 'Sensus Penduduk', 'Peta Rupa Bumi', 'Kompensasi CSR'],
        correctAnswer: 0,
        explanation: 'AMDAL adalah instrumen kajian kelayakan lingkungan hidup wajib untuk proyek-proyek yang berpotensi menimbulkan dampak penting terhadap lingkungan.'
      }
    ],
    references: ['Undang-Undang RI Nomor 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup.', 'Peraturan Pemerintah RI Nomor 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup.'],
    relatedTopicIds: ['sumber-daya-alam', 'analisis-mengenai-dampak-lingkungan-amdal', 'pembangunan-berkelanjutan', 'lingkungan-hidup-dan-ekosistem']
  }
];
