const itinerary = [
  {
    dates: "8-12 Temmuz",
    nights: 4,
    place: "Bangkok",
    country: "Tayland",
    base: "BTS/MRT yakininda mutfakli apart veya uygun otel",
    reason: "Ucustan sonra toparlanma, market, eczane, SIM ve bebek duzeni.",
    transfer: "BKK varis, sehir ici Grab/BTS; ilk gun program koyma.",
    baby: "1 gezi gunu + 1 mola gunu ritmine burada basla; yakin AVM, park ve eczane odakli kal.",
    budget: "$40-65/gece"
  },
  {
    dates: "12-18 Temmuz",
    nights: 6,
    place: "Phuket",
    country: "Tayland",
    base: "Kata/Karon veya Rawai tarafinda mutfakli apart",
    reason: "Bangkok sonrasi once Tayland guneyini gezme istegine uygun kisa Andaman blogu; Temmuz yagmur riskli oldugu icin tadimlik tutulur.",
    transfer: "Bangkok-Phuket ic hat ucusu; varis gununu bos birak.",
    baby: "Deniz dalgali olabilir; plajdan cok havuzlu apart, market ve kisa sahil yuruyusu planla.",
    budget: "$35-60/gece / yagmur sezonu indirimi ara"
  },
  {
    dates: "18-30 Temmuz",
    nights: 12,
    place: "Koh Samui / Koh Phangan",
    country: "Tayland",
    base: "Samui Mae Nam/Bophut veya Phangan Srithanu Airbnb",
    reason: "Asil deniz dinlenmesi burada. Temmuz-agustosta Korfez tarafi Phuket'e gore daha iyi hava sansi verir.",
    transfer: "Phuket-Samui direkt ucus pahali olabilir; butce icin Phuket-Donsak kara yolu + feribot kombinasyonunu fiyatla.",
    baby: "Ayni plaj bolgesinde kal; scooter yerine Grab/taksi. Bir plaj gunu, bir ev/havuz gunu.",
    budget: "$35-60/gece / Samui pahaliysa Phangan veya Cha-Am alternatifi"
  },
  {
    dates: "30 Temmuz-12 Agustos",
    nights: 13,
    place: "Chiang Mai",
    country: "Tayland",
    base: "Nimman, Santitham veya Old City kenari Airbnb",
    reason: "Guney blogu bittikten sonra kuzeye uzun ve ucuz us. Kultur, cafe, park ve yarim gun geziler icin ideal.",
    transfer: "Samui/Surat Thani-Chiang Mai ucusu genelde Bangkok aktarmali olur; aktarma suresini uzun tut.",
    baby: "Her gezi gununden sonra bir ev/havuz/park gunu. Uzun tur yerine 3-4 saatlik bloklar.",
    budget: "$28-45/gece / 13 gece indirim hedefle"
  },
  {
    dates: "12-24 Agustos",
    nights: 12,
    place: "Da Nang / Hoi An ussu",
    country: "Vietnam",
    base: "Da Nang My Khe plaji civari mutfakli apart",
    reason: "Vietnam icin en iyi yavas us: uygun fiyat, plaj, market, Hoi An'a gunubirlik gecis.",
    transfer: "Chiang Mai-Da Nang direkt/aktarmali ucus fiyatla; pahaliysa Bangkok aktarmali bak.",
    baby: "Hoi An'i ayri tasinma yerine gunubirlik yap. 1 gezi gunu, 1 deniz/ev gunu.",
    budget: "$25-45/gece / 12 gece indirim hedefle"
  },
  {
    dates: "24-31 Agustos",
    nights: 7,
    place: "Sanur",
    country: "Bali",
    base: "Sanur sahil yuruyus yolu yakini, mutfakli apart",
    reason: "Phuket eklendigi icin Bali butceyi korumak adina 7 gece tek sakin us olarak tutulur. Ubud gunubirlik opsiyonel.",
    transfer: "Da Nang-Denpasar aktarmali ucus fiyatla; pahaliysa Bali'yi daha da kisalt veya Tayland'a don.",
    baby: "Sanur'da kal, Canggu/Seminyak trafigini azalt. Bir gun plaj, bir gun ev/havuz.",
    budget: "$45-75/gece / Bali 7 gece tavan"
  },
  {
    dates: "31 Agustos-4 Eylul",
    nights: 4,
    place: "Bangkok",
    country: "Tayland",
    base: "BKK havalimanina kolay erisen apart/otel",
    reason: "Donus ucusu oncesi tampon, bavul, alisveris ve bebek ritmini duzeltme.",
    transfer: "DPS-BKK ucusu sonrasi 4 Eylul sabah BKK-SHJ.",
    baby: "Son 2 gunu bos birak; hastalik, gecikme veya uyku bozulmasina tampon olsun.",
    budget: "$40-65/gece"
  }
];

const budgetRows = [
  ["Aylik hedef", "Ayda harcanabilir tutar", "$2.000-2.500"],
  ["Toplam temel hedef", "Yaklasik 2 ay, ana Istanbul-Bangkok bileti haric", "$4.000-5.000"],
  ["Airbnb/konaklama", "58 gece, uzun kalis indirimiyle ortalama $30-50/gece", "$1.750-2.900"],
  ["Yeme-icme", "Mutfak + market + lokal restoran; her gun turistik restoran degil", "$1.000-1.500"],
  ["Sehir ici ulasim", "Grab/Bolt/Gojek, tren, feribot, az transfer", "$450-800"],
  ["Bolgesel ucuslar", "BKK-HKT, HKT-Samui, Samui/URT-CNX, CNX-DAD, DAD-DPS, DPS-BKK", "$1.250-2.200"],
  ["Vize/levy/evrak", "Vietnam e-vize, Bali e-VOA, Bali levy", "$300-500"],
  ["Tampon", "Bebek saglik, gecikme, ekstra bagaj, beklenmeyen gunler", "$500-800"]
];

const usdTryRate = 46.44;

const confirmedTicket = {
  pnr: "685PGF",
  airline: "Air Arabia",
  note: "Ekranda gorunen saatler segment kalkis saatleridir. Varis saatleri Booking Details/PDF bilet uzerinden ayrica kontrol edilecek.",
  flights: [
    {
      type: "Gidis",
      route: "IST -> SHJ",
      flightNo: "G9322",
      date: "07 Temmuz 2026",
      time: "14:10",
      status: "Confirmed",
      planNote: "Istanbul cikis gunu. Bebekle havalimanina erken gidilecek; bu gun rota aktivitesi yok."
    },
    {
      type: "Gidis",
      route: "SHJ -> BKK",
      flightNo: "G9821",
      date: "07 Temmuz 2026",
      time: "22:15",
      status: "Confirmed",
      planNote: "Bangkok varisi 8 Temmuz kabul edilerek ilk Bangkok blogu tamamen toparlanma odakli tutuldu."
    },
    {
      type: "Donus",
      route: "BKK -> SHJ",
      flightNo: "G9822",
      date: "04 Eylul 2026",
      time: "08:55",
      status: "Confirmed",
      planNote: "3 Eylul gecesi BKK havalimanina kolay erisen otel/apart sart."
    },
    {
      type: "Donus",
      route: "SHJ -> IST",
      flightNo: "G9287",
      date: "04 Eylul 2026",
      time: "13:20",
      status: "Confirmed",
      planNote: "Aktarma gunu. Bebek icin yedek kiyafet, atistirmalik ve sivi/ilac cantasi kabinde olmali."
    }
  ]
};

const flightDeals = [
  {
    route: "Bangkok -> Phuket",
    date: "12 Temmuz 2026",
    airports: "BKK/DMK -> HKT",
    priceNote: "$16-58 / kisi basi tek yon",
    familyUsd: [90, 180],
    buyRule: "2 yetiskin + infant + bagaj toplam $180 altindaysa iyi.",
    risk: "BKK ve DMK ikisini de ara; ucuz bilette bagaj eklenince fiyat degisebilir.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/bkkt/hkt/bangkok-to-phuket.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/bkk/hkt/bangkok-to-phuket"],
      ["Trip.com", "https://us.trip.com/flights/bangkok-to-phuket/airfares-bkk-hkt/"]
    ]
  },
  {
    route: "Phuket -> Koh Samui",
    date: "18 Temmuz 2026",
    airports: "HKT -> USM",
    priceNote: "$58-111 / kisi basi tek yon",
    familyUsd: [180, 340],
    buyRule: "Direkt ucus kisi basi $100 altindaysa bebekle konfor icin deger.",
    risk: "USM pahali havaalani; fiyat yukselirse kara yolu + feribot alternatifi bak.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/hkt/usm/phuket-to-samui-international.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/hkt/usm/phuket-to-samui-intl-airport"],
      ["Google Flights", "https://www.google.com/travel/flights/flights-from-phuket-to-ko-samui.html"]
    ]
  },
  {
    route: "Koh Samui -> Chiang Mai",
    date: "30 Temmuz 2026",
    airports: "USM -> CNX",
    priceNote: "$152-212 / kisi basi tek yon",
    familyUsd: [360, 560],
    buyRule: "Direkt USM-CNX toplam aile $450 altina inerse konforlu secenek.",
    risk: "Bu rota butceyi en cok zorlayan hat. Pahaliysa alttaki URT-CNX alternatifini kullan.",
    links: [
      ["Trip.com", "https://us.trip.com/flights/city-usm-airport-cnx/"],
      ["Expedia", "https://www.expedia.com/lp/flights/usm/cnx/samui-intl-airport-to-chiang-mai"],
      ["Google Flights", "https://www.google.com/travel/flights/flights-from-ko-samui-to-chiang-mai.html"]
    ]
  },
  {
    route: "Surat Thani -> Chiang Mai",
    date: "30 Temmuz 2026",
    airports: "URT -> CNX",
    priceNote: "$49-85 / kisi basi tek yon",
    familyUsd: [140, 260],
    buyRule: "Samui'den feribot + URT ucusu toplamda aile $300-350 altindaysa butce icin iyi.",
    risk: "Bebekle yorucu transfer; Samui/Phangan'dan Surat Thani'ye feribot gununu bos birak.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/urt/cnx/surat-thani-to-chiang-mai.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/urt/cnx/surat-thani-to-chiang-mai"],
      ["AirAsia", "https://www.airasia.com/flights/from-surat-thani-urt-to-chiang-mai-cnx/"]
    ]
  },
  {
    route: "Chiang Mai -> Da Nang",
    date: "12 Agustos 2026",
    airports: "CNX -> DAD",
    priceNote: "$75-166 / kisi basi tek yon",
    familyUsd: [190, 380],
    buyRule: "Kisi basi $120 altina bulunursa alinir; aktarma cok uzunsa Bangkok uzerinden bak.",
    risk: "Direkt/aktarmali saatleri bebek uykusuna gore kontrol et.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/cnx/dad/chiang-mai-to-da-nang.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/cnx/dad/chiang-mai-to-da-nang"],
      ["FlightsFrom", "https://www.flightsfrom.com/CNX-DAD"]
    ]
  },
  {
    route: "Da Nang -> Bali",
    date: "24 Agustos 2026",
    airports: "DAD -> DPS",
    priceNote: "$100-165 / kisi basi tek yon",
    familyUsd: [260, 440],
    buyRule: "Aile toplam $400 altindaysa Bali 7 gece mantikli kalir.",
    risk: "Bu hat pahali cikarsa Bali'yi kisaltmak veya Tayland'a donmek butceyi korur.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/dad/dps/da-nang-to-bali-denpasar.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/dad/dps/da-nang-to-denpasar"],
      ["Trip.com", "https://us.trip.com/flights/da-nang-to-bali/airfares-dad-dps/"]
    ]
  },
  {
    route: "Bali -> Bangkok",
    date: "31 Agustos 2026",
    airports: "DPS -> BKK/DMK",
    priceNote: "$101-125 / kisi basi tek yon",
    familyUsd: [260, 430],
    buyRule: "Aile toplam $400 altindaysa uygun; Bangkok'a en az 3 gece tampon birak.",
    risk: "DMK varis olursa BKK cikis ucusuna baglama; son gun havalimanina yakin kal.",
    links: [
      ["Skyscanner", "https://www.skyscanner.com/routes/dps/bkkt/bali-denpasar-to-bangkok.html"],
      ["Expedia", "https://www.expedia.com/lp/flights/dps/bkk/denpasar-to-bangkok"],
      ["Google Flights", "https://www.google.com/travel/flights/flights-from-denpasar-to-bangkok.html"]
    ]
  }
];

const activities = [
  {
    date: "9 Temmuz Persembe",
    window: "Bangkok / 8-12 Temmuz",
    place: "ICONSIAM + Chao Phraya nehri",
    priority: "Yumusak baslangic",
    cost: "Tekne 40 THB tek yon veya 150 THB gunluk pass; yemek/alisveris size bagli.",
    duration: "3-5 saat, ogleden sonra/aksam",
    babyFit: "Bebekle uygun. Klima, bebek arabasi ve yemek secenegi var.",
    restRule: "10 Temmuz'u otel, havuz, market ve uyku toparlama gunu yap.",
    details: "Bangkok'a iner inmez tapinak maratonu yapma. Nehir teknesiyle ICONSIAM'a gec, SookSiam tarafinda yemek ye, hava uygunsa kisa nehir turu ekle. Bebek arabasi icin en rahat ilk aktivite.",
    links: [
      ["ICONSIAM", "https://www.iconsiam.com/en"],
      ["Chao Phraya Tourist Boat", "https://chaophrayatouristboat.com/tourist_boat"]
    ]
  },
  {
    date: "11 Temmuz Cumartesi",
    window: "Bangkok / 8-12 Temmuz",
    place: "SEA LIFE Bangkok Ocean World",
    priority: "Bebek dostu kapali alan",
    cost: "Online cocuk bileti 2 yas ustu icin 799 THB'den; 0-1 yas genelde ucretsiz notu var.",
    duration: "2-3 saat",
    babyFit: "Cok uygun. Sicak/yagmur gunu icin guvenli kapali alan.",
    restRule: "12 Temmuz Phuket ucusu oldugu icin aksam erken otele don.",
    details: "Siam Paragon altinda oldugu icin ulasim kolay. Cok uzun kalma; oglen uykusundan once veya sonra 2 saatlik blok yeter.",
    links: [
      ["Official SEA LIFE tickets", "https://www.visitsealife.com/bangkok/en/tickets/"],
      ["GetYourGuide notes", "https://www.getyourguide.com/bangkok-l169/bangkok-sea-life-bangkok-ocean-world-entry-ticket-t1023972/"]
    ]
  },
  {
    date: "14 Temmuz Sali",
    window: "Phuket / 12-18 Temmuz",
    place: "James Bond Adasi + Phang Nga Bay",
    priority: "Olmazsa olmaz ama onayli al",
    cost: "Grup turlari yaklasik $45-115 kisi basi; park ucreti/tur dahil bilgisi yazili sorulmali.",
    duration: "7-9 saat tam gun",
    babyFit: "Orta risk. Bebekle olur ama big boat/katamaran, golge, can yelegi ve otel transferli tur sec.",
    restRule: "15 Temmuz kesin mola: havuz, market, camasir, erken uyku.",
    details: "Phuket'teki ana aktivite bu olsun, fakat Temmuz icin kaynaklarda yagmur sezonu/park kapanisi ve tur satislari arasinda celiski var. Tur almadan once operatorle James Bond Island'a gercek giris, hava iptali ve iade kosulunu yazili netlestir. Speedboat yerine daha stabil big boat veya premium catamaran ara. Plan B: Samet Nangshe viewpoint + Phuket Old Town + Aquarium.",
    links: [
      ["Klook Ao Phang Nga tours", "https://www.klook.com/en-US/destination/p50236191-ao-phang-nga-national-park/"],
      ["GetYourGuide James Bond Island", "https://www.getyourguide.com/james-bond-island-l158697/"],
      ["Park fee reference", "https://www.thainationalparks.com/ao-phang-nga-national-park"]
    ]
  },
  {
    date: "16 Temmuz Persembe",
    window: "Phuket / 12-18 Temmuz",
    place: "YONA Beach Club veya Rawai/Nai Harn alternatifi",
    priority: "Yetiskin opsiyonu",
    cost: "YONA fiyatlari tarihe/passa gore degisir; resmi bookingden kontrol et. Alternatif plaj gunu dusuk maliyetli.",
    duration: "YONA sabah 9:30-14:00 veya alternatif 2-4 saat",
    babyFit: "Bebekle uygun degil. YONA minimum yas sabah paketinde 4+, ogleden sonra 20+.",
    restRule: "YONA yapilirsa bir ebeveyn giderken digeri bebekle otel/havuz gunu yapmali.",
    details: "YONA guzel bir deneyim ama 19 aylik bebekle binis kabul edilmiyor. 30 Mart-12 Kasim 2026 doneminde kalkis noktasi Royal Phuket Marina gorunuyor; transferi buna gore planla. Bu aktiviteyi 'anne-baba bebeksiz kacamak' olarak tut. Bebekle aile alternatifi: Rawai seafood + Nai Harn kisa plaj + Promthep gun batimi.",
    links: [
      ["YONA FAQ", "https://yonabeach.com/faq-page/"],
      ["YONA booking", "https://yonabeach.com/booking/"],
      ["YONA conditions", "https://yonabeach.com/general-conditions/"]
    ]
  },
  {
    date: "21 Temmuz Sali",
    window: "Koh Samui / 18-30 Temmuz",
    place: "Ang Thong National Marine Park",
    priority: "Hava iyiyse buyuk gun",
    cost: "Big boat yaklasik $35-45, speedboat $60+; park ucreti 300 THB yetiskin, 150 THB cocuk olabilir.",
    duration: "07:30-16:00 civari tam gun",
    babyFit: "Orta risk. Deniz sakin degilse iptal et; big boat ve golgeli alan tercih et.",
    restRule: "22 Temmuz kesin mola. Ertesi gun sadece plaj/market.",
    details: "Korfez tarafinin en guzel gunluk turu. Bebekle kayak/snorkel zorunlu degil; manzara ve tekne deneyimi yeter. Tur operatorune infant can yelegi ve iptal/hava kosulunu yazili sor.",
    links: [
      ["Klook Ang Thong", "https://www.klook.com/en-US/destination/p50291067-mu-ko-ang-thong-national-marine-park/"],
      ["Park fee reference", "https://angthongmarinepark.com/fees-and-permits/"]
    ]
  },
  {
    date: "24 Temmuz Cuma",
    window: "Koh Samui / 18-30 Temmuz",
    place: "Fisherman's Village Night Market",
    priority: "Kolay aksam",
    cost: "Ucretsiz giris; yemek/alisveris degisken.",
    duration: "17:30-20:30",
    babyFit: "Uygun ama kalabalik. Bebek arabasi yerine kanguru daha rahat olabilir.",
    restRule: "Gunduzu bos birak, sadece aksam cik.",
    details: "Bophut bolgesinde kalirsan cok rahat. Yemek, muzik, kisa yuruyus. Cok kalabalik olursa 1 saat gezip cikmak yeter.",
    links: [
      ["Fisherman's Village guide", "https://www.garrya.com/en/destinations/samui/experiences/guide-fishermans-village-koh-samui"],
      ["Samui night markets schedule", "https://lubd.com/eat-shop-like-a-local-koh-samui-night-markets-schedule/"]
    ]
  },
  {
    date: "31 Temmuz Cuma",
    window: "Chiang Mai / 30 Temmuz-12 Agustos",
    place: "Doi Suthep + Wat Pha Lat",
    priority: "Kultur olmazsa olmaz",
    cost: "Kendi arac/Grab + dusuk giris ucreti; turlar genelde $20-35 kisi basi.",
    duration: "3-5 saat, sabah erken veya gun batimina yakin",
    babyFit: "Uygun. Merdiven icin kanguru kullan; sicakta oglen gitme.",
    restRule: "1 Agustos ev/park/cafe gunu.",
    details: "Chiang Mai'nin en iyi yarim gun aktivitesi. Tapinak kiyafeti icin omuz/diz kapali olsun. Bebekle 306 basamagi zor gelirse funicular veya daha kisa rota sec.",
    links: [
      ["Tourism Thailand Doi Suthep", "https://www.tourismthailand.org/Attraction/wat-phra-that-doi-suthep"],
      ["Doi Suthep tours", "https://www.getyourguide.com/wat-phra-that-doi-suthep-l88793/"]
    ]
  },
  {
    date: "3 Agustos Pazartesi",
    window: "Chiang Mai / 30 Temmuz-12 Agustos",
    place: "Elephant Nature Park",
    priority: "Etik hayvan deneyimi",
    cost: "Programa gore yuksek olabilir; resmi siteden gunluk program sec.",
    duration: "Yarim gun veya tam gun",
    babyFit: "Yarim gun daha mantikli. Bebekle tam gun yorabilir.",
    restRule: "4 Agustos mola gunu.",
    details: "Fil deneyimi yapilacaksa etik merkez sec. Banyo yaptirma/binme gibi aktivitelerden kacin. Bebekle golge, su, atistirmalik ve kisa program onemli.",
    links: [
      ["Elephant Nature Park official", "https://www.elephantnaturepark.org/"],
      ["ENP booking example", "https://www.elephantnaturepark.org/enp/index.php?Itemid=103&lang=en&option=com_jomres&property_uid=108&task=viewproperty"]
    ]
  },
  {
    date: "6 Agustos Persembe",
    window: "Chiang Mai / 30 Temmuz-12 Agustos",
    place: "Chiang Mai Night Safari",
    priority: "Bebekle kolay aksam",
    cost: "100 cm alti cocuklar icin ucretsiz notu var; yetiskin fiyati pakete gore degisir.",
    duration: "2-3 saat",
    babyFit: "Uygun. Stroller/wheelchair-accessible notu var; cok gec saate kalma.",
    restRule: "7 Agustos sabah gec kalkma ve bos gun.",
    details: "Bebekle gece pazari yerine kontrollu bir aksam aktivitesi. Hayvanlara parfum/koku hassasiyeti notu var; guclu koku kullanma.",
    links: [
      ["Chiang Mai Night Safari child policy", "https://chiangmainightsafari.com/en/promotions/%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81-%E0%B8%AA%E0%B9%88/"],
      ["Klook Night Safari", "https://www.klook.com/en-US/activity/1112-night-safari-park-chiang-mai/"]
    ]
  },
  {
    date: "15 Agustos Cumartesi",
    window: "Da Nang / 12-24 Agustos",
    place: "Hoi An Old Town + Lantern Boat",
    priority: "Vietnam olmazsa olmaz",
    cost: "Old Town yabanci yetiskin yaklasik 120.000 VND; lantern boat 150.000-200.000 VND/tekne.",
    duration: "16:30-20:30",
    babyFit: "Uygun ama kalabalik. Tekne 20 dk civari; can yelegi sor.",
    restRule: "16 Agustos Da Nang plaj/ev gunu.",
    details: "Da Nang'da kalip Hoi An'i gunubirlik yap. Aracla 45-60 dk. Aksam cok kalabalik olursa tekne sirasini atlayip sadece yuruyus ve yemek yap.",
    links: [
      ["Hoi An lantern boat guide", "https://vinwonders.com/en/wonderpedia/news/hoi-an-lantern-boat-ride/"],
      ["Hoi An Old Town ticket guide", "https://hoiandaytrip.com/hoi-an-old-town-ticket/"]
    ]
  },
  {
    date: "18 Agustos Sali",
    window: "Da Nang / 12-24 Agustos",
    place: "Ba Na Hills + Golden Bridge",
    priority: "Opsiyonel buyuk gun",
    cost: "Cable car/ticket resmi kampanyaya gore degisir; cocuk ucreti boya gore.",
    duration: "Tam gun",
    babyFit: "Orta risk. Kalabalik, sis/yagmur ve uzun gun olabilir; iyi hava yoksa atla.",
    restRule: "19 Agustos kesin mola.",
    details: "Instagramlik ama butce ve bebek acisindan zorlayabilir. Hava kapaliysa degeri duser. Gitmeye karar verirsen erken cik, bebek arabasi + yagmurluk + ince hirkayi al.",
    links: [
      ["Sun World Ba Na Hills", "https://sunworld.vn/en/banahills"],
      ["Ba Na Hills ticket policy", "https://danaticket.com/san-pham/ba-na-hills-ticket"]
    ]
  },
  {
    date: "21 Agustos Cuma",
    window: "Da Nang / 12-24 Agustos",
    place: "Hoi An Memories Show",
    priority: "Gece show opsiyonu",
    cost: "Cocuk 1m alti ucretsiz; 1m-1.4m icin 300.000 VND notu var.",
    duration: "Park 16:00+, show 20:00-21:00",
    babyFit: "Riskli. Saat gec; bebek uyku duzenine gore karar ver.",
    restRule: "Gunduzu tamamen bos tut.",
    details: "Gorse guzel ama 19 aylik bebekle gec saat olabilir. Sadece bebek o saatlerde uyuyabiliyorsa veya ebeveynlerden biri donuse hazirsa planla.",
    links: [
      ["Hoi An Memories official", "https://hoianmemoriesshow.com/"],
      ["Klook Hoi An Memories", "https://www.klook.com/en-US/activity/17514-hoi-an-memories-show-ticket/"]
    ]
  },
  {
    date: "25 Agustos Sali",
    window: "Bali Sanur / 24-31 Agustos",
    place: "Sanur sunrise promenade + Turtle Conservation Center",
    priority: "Bebek dostu Bali",
    cost: "Sanur yuruyus ucretsiz; TCEC genelde bagis usulu/serbest giris notlari var.",
    duration: "Sabah 2-4 saat",
    babyFit: "Cok uygun. Sanur sakin su ve yuruyus yolu ile aile icin iyi.",
    restRule: "26 Agustos havuz/ev gunu.",
    details: "Bali'de ilk aktiviteyi hafif tut. Gun dogumunda Sanur sahil yolu, kahvalti, sonra kaplumbaga merkezi. Nakit IDR bagis icin hazir olsun.",
    links: [
      ["TCEC official/info", "https://tcecserangan.jimdofree.com/"],
      ["Turtle center visit info", "https://grassrootsvolunteering.org/businesses/turtle-conservation-and-education-center/"],
      ["Sanur family guide", "https://bhataravillasanur.com/sanur-bali-travel-guide/"]
    ]
  },
  {
    date: "27 Agustos Persembe",
    window: "Bali Sanur / 24-31 Agustos",
    place: "Waterbom Bali",
    priority: "Aile eglencesi",
    cost: "Resmi fiyatlarda yetiskin 630.000 IDR, cocuk 2-11 yas 495.000 IDR notu var.",
    duration: "4-6 saat",
    babyFit: "Uygun ama pahali. Bebek 2 yas altiysa cocuk bileti politikasini tekrar kontrol et.",
    restRule: "28 Agustos bos gun.",
    details: "Bali'de tek pahali aile aktivitesi secilecekse bu daha kontrol edilebilir. Havuz, golge, locker ve havlu masraflarini hesaba kat.",
    links: [
      ["Waterbom official tickets", "https://www.waterbom-bali.com/ticket"],
      ["Waterbom Klook", "https://www.klook.com/en-US/activity/175-waterbom-bali/"]
    ]
  },
  {
    date: "29 Agustos Cumartesi",
    window: "Bali Sanur / 24-31 Agustos",
    place: "Ubud gunubirlik + Monkey Forest dis/erken ziyaret",
    priority: "Opsiyonel Bali klasigi",
    cost: "Monkey Forest resmi/rezervasyon fiyatlari degisebilir; 3 yas alti icin ucretsiz notlari var.",
    duration: "Yarim/tam gun",
    babyFit: "Dikkatli. Maymunlar yiyecek/parlak esya kapabilir; bebekle iceri girmek yerine kisa ve erken ziyaret ya da disaridan Ubud yap.",
    restRule: "30 Agustos valiz ve son Bali dinlenme gunu.",
    details: "Ubud'u gormek istersen erken cik: pirinc tarlasi/cafe/kisa merkez yuruyusu. Monkey Forest'a girersen yiyecek tasima, gozluk/sapka dikkat, bebek arabasi yerine kanguru.",
    links: [
      ["Monkey Forest official", "https://monkeyforestubud.com/"],
      ["Monkey Forest ticket note", "https://www.water-sports-bali.com/monkey-forest-ubud-entrance-fee/"]
    ]
  },
  {
    date: "1 Eylul Sali",
    window: "Bangkok donus / 31 Agustos-4 Eylul",
    place: "Son alisveris + river dinner light",
    priority: "Donus tamponu",
    cost: "Dusuk/orta; aktivite degil toparlanma gunu.",
    duration: "2-4 saat",
    babyFit: "Uygun. Havalimanina yakinlik ve uyku oncelik.",
    restRule: "2-3 Eylul'u esnek tut; hastalik/gecikme/bavul tampona kalsin.",
    details: "Son Bangkok blogunu aktiviteyle doldurma. Eksik alisveris, ilac, bavul, bebek uyku duzeni ve 4 Eylul sabah ucusu icin sakin plan.",
    links: [
      ["ICONSIAM", "https://www.iconsiam.com/en"],
      ["Chao Phraya Tourist Boat", "https://chaophrayatouristboat.com/tourist_boat"]
    ]
  }
];

const activityAlternatives = [
  {
    dates: "13 Temmuz Pazartesi veya 17 Temmuz Cuma",
    region: "Phuket",
    place: "Phi Phi Islands + Maya Bay + Pileh Lagoon",
    energy: "Cok yuksek enerji",
    bestFor: "Phuket'in en ikonik ada gunu; Maya Bay, Pileh Lagoon, Viking Cave, Monkey Beach, Khai veya Bamboo Island.",
    cost: "$48-118 kisi basi; milli park ucreti cogu turda 400 THB yetiskin, 200 THB cocuk olarak ayrica cikabilir.",
    babyFit: "19 aylik bebekle zor. Temmuz denizi dalgali olabilir; speedboat yerine catamaran/big boat sec, hava kotuyse iptal et.",
    swapRule: "Phi Phi yapilirsa YONA'yi cikar. James Bond da yapilacaksa araya mutlaka tam mola koy; 17 Temmuz yapilirsa 18 Temmuz Samui transferinden once aksam erken don.",
    details: "Maya Bay 1 Agustos-30 Eylul 2026 kapanis donemine girmeden sizin Phuket tarihlerinizde teorik olarak mumkun. Yine de park/tur kosulunu satin almadan once yazili kontrol et. Infant icin can yelegi ve golgeli oturma sor.",
    links: [
      ["Maya Bay 2026 rules", "https://www.phuket101.net/maya-bay-in-phi-phi-island/"],
      ["Phi Phi price guide", "https://mythailandtours.com/phi-phi-island-tour-package-price/"],
      ["Family Phi Phi guide", "https://www.lovephukettours.com/family-friendly-phi-phi-tours-safe-easy-phuket-day-trips-2025.html"],
      ["Park fee example", "https://www.phukettoursdirect.com/phi-phi-khai-speedboat.html"]
    ]
  },
  {
    dates: "15 veya 16 Temmuz",
    region: "Phuket",
    place: "Racha Island + Coral Island",
    energy: "Orta-yuksek enerji",
    bestFor: "Phi Phi cok uzun/dalgali gelirse daha kisa ada gunu.",
    cost: "$35-80 kisi basi; tur ve transfer kapsamina gore degisir.",
    babyFit: "Phi Phi'ye gore daha kolay olabilir ama yine tekne gunu. Bebek icin golge, can yelegi ve kisa rota sor.",
    swapRule: "James Bond veya Phi Phi yerine kullan. Ayni Phuket haftasinda uc tekne gunu yapma.",
    details: "Daha kisa deniz aktivitesi istiyorsan iyi plan B. Hava raporu ve dalga durumuna gore bir gun once karar ver.",
    links: [
      ["Racha/Coral tours", "https://www.klook.com/en-US/city/7-phuket-things-to-do/"],
      ["GetYourGuide Phuket islands", "https://www.getyourguide.com/phuket-l32123/island-tours-tc313/"]
    ]
  },
  {
    dates: "Herhangi bir yagmurlu Phuket gunu",
    region: "Phuket",
    place: "Phuket Old Town + Aquarium + Rawai seafood",
    energy: "Dusuk-orta enerji",
    bestFor: "Tekne iptal olursa veya bebek yorulursa yagmur gunu alternatifi.",
    cost: "Dusuk/orta; ulasim + yemek + giris ucretleri.",
    babyFit: "Bebekle en guvenli Phuket alternatifi. Klima, kisa yuruyus ve esnek donus var.",
    swapRule: "YONA yerine ailece yapilabilir. James Bond/Phi Phi iptal olursa kurtarma plani.",
    details: "Old Town'da kisa foto/yemek, sonra Aquarium veya Rawai. Sicak bastirirsa aktiviteyi iki parcaya bol.",
    links: [
      ["Phuket Aquarium", "https://www.phuketaquarium.org/"],
      ["Phuket Old Town guide", "https://www.tourismthailand.org/Attraction/phuket-old-town"]
    ]
  },
  {
    dates: "23 veya 27 Temmuz",
    region: "Koh Samui",
    place: "Pig Island / Koh Madsum + Koh Tan",
    energy: "Orta enerji",
    bestFor: "Ang Thong kadar uzun olmayan ada gunu.",
    cost: "$35-70 kisi basi; ozel longtail daha pahali olabilir.",
    babyFit: "Orta. Kisa tekne iyi ama adada golge ve domuzlarla mesafe onemli.",
    swapRule: "Ang Thong yerine daha hafif ada gunu. Ang Thong yapildiysa bunu sadece deniz cok sakinse ekle.",
    details: "Sabah erken cik, oglen sicagindan once don. Domuzlarla bebek arasina mesafe koy; yiyecekleri ortada birakma.",
    links: [
      ["Koh Madsum tours", "https://www.getyourguide.com/koh-samui-l898/koh-madsum-tc313/"],
      ["Klook Samui tours", "https://www.klook.com/en-US/city/180-koh-samui-things-to-do/"]
    ]
  },
  {
    dates: "25 veya 28 Temmuz",
    region: "Koh Samui / Koh Phangan",
    place: "Koh Tao + Nang Yuan",
    energy: "Cok yuksek enerji",
    bestFor: "Deniz cok sakin ve siz cok enerjikseniz snorkel/gorsel ada gunu.",
    cost: "$60-110 kisi basi; park/ada ucreti ayrica olabilir.",
    babyFit: "Bebekle genelde zor. Uzun tekne, snorkel odakli program ve sicak yuzunden dikkat.",
    swapRule: "Ang Thong yapildiysa bunu yapma. Sadece bir buyuk deniz turu secmek butce ve uyku icin daha iyi.",
    details: "Cok guzel ama bebekle luks degil, efor. Aileyle yapilacaksa daha buyuk tekne, erken donus ve esnek iptal aransin.",
    links: [
      ["Koh Tao tours from Samui", "https://www.getyourguide.com/koh-samui-l898/koh-tao-tc313/"],
      ["Nang Yuan info", "https://www.tourismthailand.org/Attraction/ko-nang-yuan"]
    ]
  },
  {
    dates: "2 veya 8 Agustos",
    region: "Chiang Mai",
    place: "Bua Tong Sticky Waterfall",
    energy: "Orta enerji",
    bestFor: "Dogal, farkli ve yarim gunluk aktivite.",
    cost: "Ulasim/sofor maliyeti; giris genelde dusuk/ucretsiz notlari var.",
    babyFit: "Bebekle olur ama ebeveynlerden biri tirmanirken digeri bebekle golgede kalmali.",
    swapRule: "Night Safari veya ikinci tapinak gunu yerine kullan.",
    details: "Sabah erken git. Islak zeminde bebekle dikkat; su ayakkabisi, havlu ve yedek kiyafet al.",
    links: [
      ["Tourism Thailand Bua Tong", "https://www.tourismthailand.org/Attraction/bua-tong-waterfall"],
      ["Chiang Mai day trips", "https://www.getyourguide.com/chiang-mai-l271/day-trips-tc172/"]
    ]
  },
  {
    dates: "2 Agustos Pazar veya 8 Agustos Cumartesi",
    region: "Chiang Mai",
    place: "Sunday Walking Street / Saturday Night Market",
    energy: "Dusuk-orta enerji",
    bestFor: "Yemek, hediyelik, sokak atmosferi.",
    cost: "Ucretsiz giris; yemek/alisveris degisken.",
    babyFit: "Uygun ama kalabalik. Kanguru bebek arabasindan daha rahat.",
    swapRule: "Gunduz aktivitesi yapildiysa pazari kisa tut. Arka arkaya gece gec kalma.",
    details: "18:00 gibi erken gir, kalabalik basmadan cik. Bebek kulakligi ve su iyi olur.",
    links: [
      ["Chiang Mai Sunday Market", "https://www.tourismthailand.org/Attraction/sunday-walking-street"],
      ["Chiang Mai markets", "https://www.tourismthailand.org/Destinations/Provinces/chiang-mai/101"]
    ]
  },
  {
    dates: "14 veya 20 Agustos",
    region: "Da Nang / Hoi An",
    place: "Marble Mountains + Lady Buddha",
    energy: "Orta enerji",
    bestFor: "Da Nang klasiklerini tek yarim gunde gormek.",
    cost: "Dusuk/orta; giris + Grab/sofor.",
    babyFit: "Orta. Merdiven ve sicak var; kanguru kullan, oglen gitme.",
    swapRule: "Ba Na Hills pahali/yorucu gelirse bunu sec.",
    details: "Sabah erken Marble Mountains, sonra Linh Ung/Lady Buddha. Bebekle magara ve merdivenleri kisalt.",
    links: [
      ["Marble Mountains guide", "https://danangfantasticity.com/en/discover/attractions/the-marble-mountains.html"],
      ["Linh Ung Pagoda", "https://danangfantasticity.com/en/discover/attractions/linh-ung-pagoda.html"]
    ]
  },
  {
    dates: "17 veya 22 Agustos",
    region: "Hoi An",
    place: "Coconut Basket Boat + An Bang Beach",
    energy: "Orta enerji",
    bestFor: "Hoi An'a eglenceli, kisa ve fotografik bir alternatif.",
    cost: "$8-25 kisi basi; tur/transfer dahil olup olmamasina gore.",
    babyFit: "Orta. Su ustu aktivitesi oldugu icin can yelegi ve kisa sure sart.",
    swapRule: "Lantern boat yerine veya Hoi An'a ikinci kez gidilecekse kullan.",
    details: "Cok turistik ama eglenceli. Bebek yorulursa sepet tekne yerine An Bang'da kahve/plaj molasi yap.",
    links: [
      ["Hoi An basket boat tours", "https://www.getyourguide.com/hoi-an-l831/basket-boat-tours-tc272/"],
      ["An Bang Beach", "https://vietnam.travel/places-to-go/central-vietnam/hoi-an"]
    ]
  },
  {
    dates: "27 veya 29 Agustos",
    region: "Bali",
    place: "Uluwatu Temple + Kecak Dance",
    energy: "Orta-yuksek enerji",
    bestFor: "Bali gun batimi klasigi.",
    cost: "Tapinak + Kecak biletleri; fiyat resmi/acenteye gore degisir.",
    babyFit: "Riskli. Ucurum, maymunlar, kalabalik ve gec saat var.",
    swapRule: "Waterbom veya Ubud gunubirlik yerine sec. Ayni gun uzun plaj/transfer yapma.",
    details: "Cok guzel ama bebekle sadece enerjiniz iyiyse. Gozluk/sapka/yiyecek sakla; maymunlara dikkat. Kecak gec saate kalabilir.",
    links: [
      ["Uluwatu info", "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/bali/uluwatu"],
      ["Kecak tickets", "https://www.klook.com/en-US/activity/1091-uluwatu-temple-kecak-fire-dance-bali/"]
    ]
  },
  {
    dates: "28 veya 29 Agustos",
    region: "Bali",
    place: "Nusa Lembongan veya Nusa Penida",
    energy: "Cok yuksek enerji",
    bestFor: "Kartpostal Bali manzaralari.",
    cost: "$50-120+ kisi basi; tekne ve tur kapsamina gore.",
    babyFit: "19 aylik bebekle onermem. Dalga, hizli tekne, dik yollar ve uzun gun riski yuksek.",
    swapRule: "Sadece bebeksiz ebeveyn kacamagina cevir. Aileyle Sanur + Waterbom daha mantikli.",
    details: "Nusa Penida sosyal medyada guzel ama bebekle eziyete donebilir. Bu karti 'ileriki seyahat' ya da anne-baba donusumlu aktivite olarak tut.",
    links: [
      ["Nusa Penida guide", "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/nusa-penida"],
      ["Nusa Lembongan tours", "https://www.getyourguide.com/nusa-lembongan-l89767/"]
    ]
  }
];

const checklist = [
  { id: "passport", group: "Evrak", text: "3 pasaportta 6+ ay gecerlilik ve bos sayfa kontrolu" },
  { id: "birth", group: "Evrak", text: "Bebek dogum belgesi, anne-baba bagi ve varsa Turkiye ikamet kaniti" },
  { id: "main-ticket", group: "Ucus", text: "PNR 685PGF ana Air Arabia biletinin PDF/Booking Details varis saatlerini kaydet" },
  { id: "tdac1", group: "Tayland", text: "Ilk Tayland girisi icin TDAC: 5-7 Temmuz arasi" },
  { id: "tdac2", group: "Tayland", text: "Bali donusu Tayland girisi icin TDAC: 25-28 Agustos arasi" },
  { id: "vietnam", group: "Vietnam", text: "Vietnam e-vize: 3 pasaport icin tek giris" },
  { id: "indonesia", group: "Bali", text: "Endonezya e-VOA/Visitor Visa: 3 pasaport icin ayri basvuru" },
  { id: "levy", group: "Bali", text: "Love Bali levy QR kodlarini offline sakla" },
  { id: "doctor", group: "Saglik", text: "Cocuk doktoru: MMR, Hepatit A, rutin asilar, sinek ve ates plani" },
  { id: "flights", group: "Rezervasyon", text: "BKK-HKT, HKT-Samui, Samui-CNX, CNX-DAD, DAD-DPS ve DPS-BKK hatlarini fiyatla" },
  { id: "jamesbond", group: "Aktivite", text: "James Bond Adasi icin Temmuz operasyonunu, iade kosulunu, park ucretini ve bebek can yelegini yazili onaylat" },
  { id: "phiphi", group: "Aktivite", text: "Phi Phi yapilacaksa Maya Bay kapanis tarihini, deniz durumunu, park ucretini ve bebek icin tekne tipini kontrol et" },
  { id: "yona", group: "Aktivite", text: "YONA Beach Club bebekle uygun degil: 4 yas alti kabul edilmedigi icin sadece bebeksiz opsiyon olarak tut" },
  { id: "activities", group: "Aktivite", text: "Her aktiviteden sonraki gunu mola/ev/havuz gunu olarak takvime yaz" },
  { id: "airbnb", group: "Rezervasyon", text: "Chiang Mai ve Da Nang icin 12-13 gece Airbnb indirimi ara" },
  { id: "hotels", group: "Rezervasyon", text: "Mutfak, klima, buzdolabi, camasir, havuz ve asansor filtrelerini zorunlu yap" }
];

const bookingPriorities = [
  ["1", "Phuket'i kisa tut", "Temmuz Phuket icin yagmur sezonu; 6 gece tadimlik kal, asil sahil dinlenmesini Samui/Phangan'a birak."],
  ["2", "USM-CNX yerine URT-CNX kontrolu", "Samui'den Chiang Mai'ye direkt ucus pahali. Surat Thani ucusu + feribot ailece $300-350 bandina inerse butceyi kurtarir."],
  ["3", "Airbnb uzun usler", "Chiang Mai ve Da Nang'da 12-13 gece kalis icin indirim kovala; mutfak ve camasir sart."],
  ["4", "Bali tavan karari", "DAD-DPS + DPS-BKK toplam aile $800'u asarsa Bali'yi kisalt veya sonraki seyahate birak."],
  ["5", "Bebek saglik cantasi", "Bebek ilaclari, rehidrasyon, termometre, gunes/sinek urunleri ve doktor notu ilk rezervasyon kadar onemli."]
];

const sources = [
  ["Thai Embassy Ankara", "https://ankara.thaiembassy.org/en/publicservice/60-day-visa-exemption-and-visa-on-arrival?menu=5fe9beb783a23d7cdc2637f2&page=5d7717d815e39c2f34004f93"],
  ["Thai Embassy Buenos Aires", "https://buenos-aires.thaiembassy.org/en/publicservice/general-information?menu=688b1b65ff9cd562bc6e0da2&page=6895b9255ab93755fe62dde3"],
  ["Thailand TDAC", "https://tdac.immigration.go.th/manual/en/index.html"],
  ["Vietnam e-visa", "https://evisa.xuatnhapcanh.gov.vn/trang-chu-ttdt"],
  ["Indonesia eVisa", "https://evisa.imigrasi.go.id/front/info/evoa"],
  ["Love Bali levy", "https://lovebali.baliprov.go.id/faq"],
  ["Vietnam weather", "https://vietnam.travel/things-to-do/weather-and-climate-vietnam"],
  ["Da Nang weather", "https://www.vietnamairlines.com/go/vi/wcag/useful-information/travel-guide/best-time-to-visit-da-nang-vietnam"],
  ["Bali season", "https://www.selectiveasia.com/indonesia-holidays/weather"],
  ["Koh Samui weather", "https://www.kuoni.co.uk/destinations/south-east-asia/thailand/koh-samui/best-time-to-visit/"],
  ["Phuket rainy season", "https://www.phuket.net/visit-phuket/about/info/climate/"],
  ["Phuket to Samui transfer", "https://www.ministryofvillas.com/how-to-get-from-phuket-to-koh-samui/"],
  ["USD/TRY 19 Jun 2026", "https://wise.com/us/currency-converter/usd-to-try-rate/history"]
];

const stateKey = "taylandAileRotasiChecklist";

function getChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(stateKey)) || {};
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function renderStats() {
  const totalNights = itinerary.reduce((sum, item) => sum + item.nights, 0);
  const countries = new Set(itinerary.map((item) => item.country)).size;
  const stats = [
    ["Gun", "59", "Ana bilet araligi"],
    ["Gece", totalNights.toString(), "Planli konaklama"],
    ["Ulke", countries.toString(), "Tayland, Vietnam, Bali"],
    ["Butce", "$2k-2.5k/ay", "Slow travel hedefi"]
  ];

  document.querySelector("#stats").innerHTML = stats.map(([label, value, note]) => `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderTimeline(filter = "all") {
  const filtered = filter === "all" ? itinerary : itinerary.filter((item) => item.country === filter);
  document.querySelector("#timeline").innerHTML = filtered.map((item, index) => `
    <article class="timeline-card">
      <div class="timeline-index">${index + 1}</div>
      <div class="timeline-content">
        <div class="timeline-head">
          <span>${item.dates} / ${item.nights} gece</span>
          <strong>${item.place}</strong>
        </div>
        <dl>
          <div><dt>Us</dt><dd>${item.base}</dd></div>
          <div><dt>Neden</dt><dd>${item.reason}</dd></div>
          <div><dt>Transfer</dt><dd>${item.transfer}</dd></div>
          <div><dt>Bebek Notu</dt><dd>${item.baby}</dd></div>
          <div><dt>Konaklama</dt><dd>${item.budget}</dd></div>
        </dl>
      </div>
    </article>
  `).join("");
}

function renderBudget() {
  document.querySelector("#budget-rows").innerHTML = budgetRows.map((row) => `
    <tr>
      <th scope="row">${row[0]}</th>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
    </tr>
  `).join("");
}

function formatUsdRange(range) {
  return `$${range[0]}-${range[1]}`;
}

function formatTryRange(range) {
  const low = Math.round(range[0] * usdTryRate / 10) * 10;
  const high = Math.round(range[1] * usdTryRate / 10) * 10;
  return `${low.toLocaleString("tr-TR")}-${high.toLocaleString("tr-TR")} TL`;
}

function renderFlights() {
  document.querySelector("#confirmed-ticket").innerHTML = `
    <article class="ticket-card">
      <div class="ticket-card-head">
        <span>PNR ${confirmedTicket.pnr}</span>
        <strong>${confirmedTicket.airline} ana bilet</strong>
        <small>${confirmedTicket.note}</small>
      </div>
      <div class="confirmed-flight-grid">
        ${confirmedTicket.flights.map((flight) => `
          <article class="confirmed-flight-card">
            <span>${flight.type}</span>
            <strong>${flight.route}</strong>
            <small>${flight.flightNo} / ${flight.date} / ${flight.time}</small>
            <p>${flight.planNote}</p>
            <em>${flight.status}</em>
          </article>
        `).join("")}
      </div>
    </article>
  `;

  document.querySelector("#flight-list").innerHTML = flightDeals.map((flight) => `
    <article class="flight-card">
      <div class="flight-card-head">
        <span>${flight.date}</span>
        <strong>${flight.route}</strong>
        <small>${flight.airports}</small>
      </div>
      <div class="flight-price">
        <span>Canli fiyat notu</span>
        <strong>${flight.priceNote}</strong>
      </div>
      <dl>
        <div><dt>Aile tahmini</dt><dd>${formatUsdRange(flight.familyUsd)} / ${formatTryRange(flight.familyUsd)}</dd></div>
        <div><dt>Alim kurali</dt><dd>${flight.buyRule}</dd></div>
        <div><dt>Risk</dt><dd>${flight.risk}</dd></div>
      </dl>
      <div class="flight-links">
        ${flight.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderActivities() {
  document.querySelector("#activity-list").innerHTML = activities.map((activity) => `
    <article class="activity-card">
      <div class="activity-card-head">
        <span>${activity.date}</span>
        <strong>${activity.place}</strong>
        <small>${activity.window}</small>
      </div>
      <div class="activity-meta">
        <span>${activity.priority}</span>
        <span>${activity.duration}</span>
      </div>
      <p>${activity.details}</p>
      <dl>
        <div><dt>Tahmini maliyet</dt><dd>${activity.cost}</dd></div>
        <div><dt>Bebek durumu</dt><dd>${activity.babyFit}</dd></div>
        <div><dt>Mola kurali</dt><dd>${activity.restRule}</dd></div>
      </dl>
      <div class="flight-links">
        ${activity.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join("")}
      </div>
    </article>
  `).join("");

  document.querySelector("#activity-alternative-list").innerHTML = activityAlternatives.map((activity) => `
    <article class="activity-card activity-card-alt">
      <div class="activity-card-head">
        <span>${activity.dates}</span>
        <strong>${activity.place}</strong>
        <small>${activity.region}</small>
      </div>
      <div class="activity-meta">
        <span>${activity.energy}</span>
        <span>${activity.bestFor}</span>
      </div>
      <p>${activity.details}</p>
      <dl>
        <div><dt>Tahmini maliyet</dt><dd>${activity.cost}</dd></div>
        <div><dt>Bebek durumu</dt><dd>${activity.babyFit}</dd></div>
        <div><dt>Degisim kurali</dt><dd>${activity.swapRule}</dd></div>
      </dl>
      <div class="flight-links">
        ${activity.links.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderChecklist() {
  const saved = getChecklistState();
  const container = document.querySelector("#checklist");
  container.innerHTML = checklist.map((item) => `
    <label class="check-row">
      <input type="checkbox" data-check="${item.id}" ${saved[item.id] ? "checked" : ""}>
      <span>
        <small>${item.group}</small>
        ${item.text}
      </span>
    </label>
  `).join("");

  container.addEventListener("change", (event) => {
    const input = event.target.closest("[data-check]");
    if (!input) return;
    const nextState = getChecklistState();
    nextState[input.dataset.check] = input.checked;
    saveChecklistState(nextState);
    updateProgress();
  });

  updateProgress();
}

function updateProgress() {
  const saved = getChecklistState();
  const done = checklist.filter((item) => saved[item.id]).length;
  const percent = Math.round((done / checklist.length) * 100);
  document.querySelector("#progress-label").textContent = `${done}/${checklist.length} tamam`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
}

function renderBookings() {
  document.querySelector("#booking-list").innerHTML = bookingPriorities.map(([rank, title, text]) => `
    <article class="priority-row">
      <span>${rank}</span>
      <div>
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
    </article>
  `).join("");
}

function renderSources() {
  document.querySelector("#sources").innerHTML = sources.map(([label, href]) => `
    <a href="${href}" target="_blank" rel="noopener">${label}</a>
  `).join("");
}

function bindTabs() {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach((tab) => tab.setAttribute("aria-pressed", "false"));
      document.querySelectorAll("[data-panel]").forEach((panel) => panel.hidden = true);
      button.setAttribute("aria-pressed", "true");
      document.querySelector(`[data-panel="${button.dataset.tab}"]`).hidden = false;
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      renderTimeline(button.dataset.filter);
    });
  });

  document.querySelector("#print-plan").addEventListener("click", () => window.print());
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderTimeline();
  renderActivities();
  renderBudget();
  renderFlights();
  renderChecklist();
  renderBookings();
  renderSources();
  bindTabs();
});
