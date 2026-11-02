# Pasar UMKM — Prototype Katalog UMKM

Prototype website katalog sederhana untuk membantu pelaku **Usaha Mikro, Kecil, dan Menengah (UMKM)** memperkenalkan produknya secara online.

Dibuat dengan **HTML + CSS + JavaScript murni** — tanpa framework, tanpa instalasi, tanpa database.

## Cara Menjalankan

1. Buka folder `Desktop\umkm-web`.
2. Klik dua kali file `index.html` (otomatis terbuka di browser).

Atau lewat terminal:

```powershell
start "C:\Users\HYPE AMD\Desktop\umkm-web\index.html"
```

## Fitur

- 🔍 Pencarian berdasarkan nama usaha, produk, kategori, atau kota
- 🏷️ Filter kategori: Makanan, Minuman, Fashion, Kerajinan, Pertanian, Jasa
- ↕️ Urutkan berdasarkan rating tertinggi atau nama A–Z
- 📄 Modal detail usaha berisi deskripsi, alamat, jam buka, dan daftar produk
- 💬 Tombol hubungi via WhatsApp (nomor masih contoh)
- 📱 Responsif untuk HP, tablet, dan desktop
- ⌨️ Bisa diakses dengan keyboard (Enter/Spasi untuk buka detail, Esc untuk tutup)

## Struktur Folder

```
umkm-web/
├── index.html        # Halaman utama
├── css/
│   └── style.css     # Semua tampilan & responsif
├── js/
│   ├── data.js       # Data contoh UMKM (edit di sini)
│   └── app.js        # Logika pencarian, filter, modal
└── README.md
```

## Cara Menambah / Mengubah Data UMKM

Buka `js/data.js`, lalu tambahkan object baru ke dalam array `UMKM_DATA`:

```js
{
  id: 13,
  name: "Nama Usaha",
  category: "Makanan",           // Makanan | Minuman | Fashion | Kerajinan | Pertanian | Jasa
  emoji: "🍰",                   // Ikon yang tampil di kartu
  city: "Jakarta",
  address: "Alamat lengkap usaha",
  hours: "Setiap hari, 08.00–20.00",
  description: "Deskripsi singkat usaha.",
  rating: 4.7,
  priceRange: "Rp10.000 – Rp50.000",
  whatsapp: "6281234567890",     // format internasional, tanpa "+"
  products: [
    { name: "Nama Produk", note: "Keterangan singkat", price: "Rp25.000" }
  ]
}
```

> **Penting:** semua nomor WhatsApp di `data.js` masih **dummy**. Ganti dengan nomor asli sebelum dipakai.

## Kustomisasi Tampilan

Warna utama ada di bagian atas `css/style.css`:

```css
:root {
  --green-600: #1a8a5f;   /* warna utama tombol & aksen */
  --green-900: #0d3b2c;   /* warna footer & hero */
  --bg: #f7f7f3;          /* warna latar halaman */
}
```

Ganti nilai tersebut untuk menyesuaikan warna dengan identitas usaha/daerah.

## Catatan

Ini adalah **prototype**. Data disimpan statis di file JavaScript, sehingga:

- Perubahan data harus dilakukan lewat `js/data.js`.
- Belum ada login, keranjang, pembayaran, atau database.
- Untuk versi produksi, data bisa dipindahkan ke backend/API atau CMS.

Jika ingin dikembangkan menjadi marketplace dengan keranjang dan pembayaran, atau dipasang di hosting, tinggal beri tahu.
