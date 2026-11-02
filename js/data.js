/* =========================================================
   Data contoh UMKM
   ---------------------------------------------------------
   Silakan tambah, ubah, atau hapus data di bawah ini.
   - id          : angka unik
   - rating      : 1.0 – 5.0
   - whatsapp    : format internasional tanpa "+" (contoh 6281234567890)
   - produk      : daftar produk beserta harga
   Catatan: semua nomor WhatsApp di bawah ini masih dummy/contoh.
   ========================================================= */

const UMKM_DATA = [
  {
    id: 1,
    name: "Dapur Bu Siti",
    category: "Makanan",
    emoji: "🍛",
    city: "Bandung",
    address: "Jl. Cihampelas No. 12, Bandung, Jawa Barat",
    hours: "Setiap hari, 08.00–20.00",
    description:
      "Masakan rumahan Sunda dengan bumbu segar, dimasak setiap pagi. Cocok untuk makan siang keluarga.",
    rating: 4.8,
    priceRange: "Rp15.000 – Rp35.000",
    whatsapp: "6281234500001",
    products: [
      { name: "Nasi Timbel Komplit", note: "Nasi, ayam, tahu, tempe, sambal", price: "Rp35.000" },
      { name: "Ayam Goreng Lengkuas", note: "Porsi 1 ekor kecil", price: "Rp25.000" },
      { name: "Sambal Dadak", note: "Botol 100 ml", price: "Rp8.000" }
    ]
  },
  {
    id: 2,
    name: "Kopi Rakyat",
    category: "Minuman",
    emoji: "☕",
    city: "Yogyakarta",
    address: "Jl. Kaliurang Km. 5, Sleman, DI Yogyakarta",
    hours: "Senin–Sabtu, 09.00–21.00",
    description:
      "Kopi robusta dan arabika dari petani lokal, disangrai sendiri setiap minggu.",
    rating: 4.7,
    priceRange: "Rp12.000 – Rp28.000",
    whatsapp: "6281234500002",
    products: [
      { name: "Kopi Robusta 200 g", note: "Biji atau bubuk", price: "Rp28.000" },
      { name: "Es Kopi Susu", note: "Gula aren, 250 ml", price: "Rp18.000" },
      { name: "Americano", note: "Panas atau dingin", price: "Rp15.000" }
    ]
  },
  {
    id: 3,
    name: "Batik Sekar Arum",
    category: "Fashion",
    emoji: "👘",
    city: "Solo",
    address: "Jl. Slamet Riyadi No. 88, Surakarta, Jawa Tengah",
    hours: "Senin–Sabtu, 09.00–17.00",
    description:
      "Batik tulis dan cap dengan motif klasik Surakarta, dibuat oleh pengrajin lokal.",
    rating: 4.9,
    priceRange: "Rp150.000 – Rp750.000",
    whatsapp: "6281234500003",
    products: [
      { name: "Kain Batik Tulis", note: "2 m, motif parang", price: "Rp750.000" },
      { name: "Kemeja Batik Cap", note: "Ukuran M–XL", price: "Rp285.000" },
      { name: "Selendang Batik", note: "Motif bunga", price: "Rp150.000" }
    ]
  },
  {
    id: 4,
    name: "Anyaman Rotan Pakde",
    category: "Kerajinan",
    emoji: "🧺",
    city: "Cirebon",
    address: "Desa Tegalwangi, Cirebon, Jawa Barat",
    hours: "Setiap hari, 08.00–17.00",
    description:
      "Kerajinan rotan handmade untuk furnitur dan dekorasi rumah dengan finishing rapi.",
    rating: 4.6,
    priceRange: "Rp50.000 – Rp400.000",
    whatsapp: "6281234500004",
    products: [
      { name: "Kursi Rotan", note: "Finishing natural", price: "Rp400.000" },
      { name: "Tempat Buah Rotan", note: "Diameter 25 cm", price: "Rp75.000" },
      { name: "Keranjang Serbaguna", note: "Ukuran sedang", price: "Rp50.000" }
    ]
  },
  {
    id: 5,
    name: "Sambal Bu Rina",
    category: "Makanan",
    emoji: "🌶️",
    city: "Surabaya",
    address: "Jl. Rungkut Asri No. 21, Surabaya, Jawa Timur",
    hours: "Senin–Sabtu, 08.00–18.00",
    description:
      "Sambal botol tanpa pengawet dengan resep turun-temurun. Tersedia berbagai level pedas.",
    rating: 4.8,
    priceRange: "Rp18.000 – Rp45.000",
    whatsapp: "6281234500005",
    products: [
      { name: "Sambal Bawang", note: "Botol 200 ml", price: "Rp25.000" },
      { name: "Sambal Terasi", note: "Botol 200 ml", price: "Rp22.000" },
      { name: "Paket 3 Sambal", note: "Pilih varian sendiri", price: "Rp45.000" }
    ]
  },
  {
    id: 6,
    name: "Sayur Segar Pak Tani",
    category: "Pertanian",
    emoji: "🥬",
    city: "Malang",
    address: "Jl. Raya Batu No. 45, Malang, Jawa Timur",
    hours: "Setiap hari, 05.00–12.00",
    description:
      "Sayuran organik langsung dari kebun petani Malang, dipanen setiap pagi.",
    rating: 4.5,
    priceRange: "Rp5.000 – Rp30.000",
    whatsapp: "6281234500006",
    products: [
      { name: "Paket Sayur Harian", note: "5 jenis sayur", price: "Rp25.000" },
      { name: "Tomat Segar 1 kg", note: "Panen hari ini", price: "Rp12.000" },
      { name: "Bayam 1 ikat", note: "Organik", price: "Rp5.000" }
    ]
  },
  {
    id: 7,
    name: "Kue Kering Ibu Ani",
    category: "Makanan",
    emoji: "🍪",
    city: "Medan",
    address: "Jl. Gatot Subroto No. 77, Medan, Sumatera Utara",
    hours: "Senin–Sabtu, 09.00–19.00",
    description:
      "Kue kering homemade untuk hari raya dan hampers, dibuat tanpa pengawet.",
    rating: 4.9,
    priceRange: "Rp45.000 – Rp120.000",
    whatsapp: "6281234500007",
    products: [
      { name: "Nastar 500 g", note: "Isi selai nanas", price: "Rp85.000" },
      { name: "Kastengel 500 g", note: "Keju premium", price: "Rp90.000" },
      { name: "Hampers Kue", note: "3 toples + kartu", price: "Rp120.000" }
    ]
  },
  {
    id: 8,
    name: "Hijab Ayu Collection",
    category: "Fashion",
    emoji: "🧕",
    city: "Pekalongan",
    address: "Jl. Hayam Wuruk No. 9, Pekalongan, Jawa Tengah",
    hours: "Senin–Sabtu, 09.00–18.00",
    description:
      "Hijab voal dan pashmina dengan warna lembut, bahan adem dan tidak mudah kusut.",
    rating: 4.6,
    priceRange: "Rp35.000 – Rp120.000",
    whatsapp: "6281234500008",
    products: [
      { name: "Pashmina Premium", note: "12 pilihan warna", price: "Rp75.000" },
      { name: "Hijab Voal", note: "Ukuran 115 x 115 cm", price: "Rp55.000" },
      { name: "Bandana Sport", note: "Bahan stretch", price: "Rp35.000" }
    ]
  },
  {
    id: 9,
    name: "Servis Elektronik Mas Budi",
    category: "Jasa",
    emoji: "🔧",
    city: "Semarang",
    address: "Jl. Majapahit No. 150, Semarang, Jawa Tengah",
    hours: "Senin–Sabtu, 08.00–17.00",
    description:
      "Servis AC, kulkas, dan mesin cuci. Bisa panggil ke rumah dengan garansi 30 hari.",
    rating: 4.7,
    priceRange: "Rp50.000 – Rp300.000",
    whatsapp: "6281234500009",
    products: [
      { name: "Cuci AC", note: "Per unit, include freon", price: "Rp75.000" },
      { name: "Servis Kulkas", note: "Diagnosa + perbaikan ringan", price: "Rp150.000" },
      { name: "Servis Mesin Cuci", note: "Semua merek", price: "Rp125.000" }
    ]
  },
  {
    id: 10,
    name: "Madu Hutan Borneo",
    category: "Pertanian",
    emoji: "🍯",
    city: "Balikpapan",
    address: "Jl. Soekarno-Hatta Km. 8, Balikpapan, Kalimantan Timur",
    hours: "Setiap hari, 08.00–20.00",
    description:
      "Madu hutan asli dari Kalimantan, tanpa campuran gula dan tanpa pemanasan.",
    rating: 4.9,
    priceRange: "Rp65.000 – Rp220.000",
    whatsapp: "6281234500010",
    products: [
      { name: "Madu Hutan 250 ml", note: "Botol kaca", price: "Rp65.000" },
      { name: "Madu Hutan 500 ml", note: "Botol kaca", price: "Rp120.000" },
      { name: "Madu Hutan 1 Liter", note: "Botol kaca", price: "Rp220.000" }
    ]
  },
  {
    id: 11,
    name: "Tas Kulit Cerdas",
    category: "Kerajinan",
    emoji: "👜",
    city: "Garut",
    address: "Jl. Ciledug No. 33, Garut, Jawa Barat",
    hours: "Senin–Sabtu, 08.00–17.00",
    description:
      "Tas dan dompet kulit sapi asli buatan pengrajin Garut, jahitan rapi dan tahan lama.",
    rating: 4.8,
    priceRange: "Rp120.000 – Rp650.000",
    whatsapp: "6281234500011",
    products: [
      { name: "Dompet Kulit", note: "Model bifold", price: "Rp120.000" },
      { name: "Sling Bag Kulit", note: "Kulit sapi asli", price: "Rp350.000" },
      { name: "Tas Ransel Kulit", note: "Kapasitas 20 L", price: "Rp650.000" }
    ]
  },
  {
    id: 12,
    name: "Es Dawet Pak Karto",
    category: "Minuman",
    emoji: "🥤",
    city: "Semarang",
    address: "Jl. Pandanaran No. 5, Semarang, Jawa Tengah",
    hours: "Setiap hari, 10.00–18.00",
    description:
      "Dawet tradisional dengan gula jawa asli dan santan segar. Tersedia versi botol untuk oleh-oleh.",
    rating: 4.5,
    priceRange: "Rp8.000 – Rp45.000",
    whatsapp: "6281234500012",
    products: [
      { name: "Es Dawet", note: "Gelas 250 ml", price: "Rp8.000" },
      { name: "Dawet Botol", note: "500 ml", price: "Rp12.000" },
      { name: "Paket Dawet Keluarga", note: "5 botol", price: "Rp45.000" }
    ]
  }
];
