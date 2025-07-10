# Sidi - Sistem Digitalisasi

Proyek ini adalah website statis responsive untuk domain **sidi.my.id** menggunakan HTML, CSS, dan JavaScript yang di-hosting di Vercel dan kode sumber berada di GitHub.

## 📁 Struktur Folder

```
sidi-site/
├── public/
│   └── sidi.png              # Gambar latar belakang/logo
├── pages/
│   └── index.html            # Halaman utama (Beranda + Halaman konten)
├── css/
│   └── style.css             # File CSS eksternal
├── js/
│   └── script.js             # File JavaScript eksternal
├── vercel.json               # Konfigurasi routing untuk Vercel
└── README.md                 # Dokumentasi proyek ini
```

## 🌐 Fitur Website

- Desain responsif dengan header tetap (sticky)
- Tampilan navigasi mobile dengan hamburger menu
- Background gambar otomatis menyesuaikan
- Layout beranda dan halaman konten

## 🚀 Cara Deploy ke Vercel

1. Buat akun dan login ke [vercel.com](https://vercel.com)
2. Import repository GitHub ini
3. Atur build output directory: `pages/` atau gunakan `vercel.json`
4. Klik **Deploy**

## 🌍 Koneksi Domain (Custom Domain)

1. Masuk ke Dashboard Vercel > Project > Settings > Domains
2. Tambahkan domain: `sidi.my.id`
3. Atur DNS domain Anda:
   - Tambahkan **A record**: `76.76.21.21`
   - Atau **CNAME** ke `cname.vercel-dns.com`

## 📸 Preview

![Tampilan Beranda](public/sidi.png)

## 🧑‍💻 Author

- Dibuat oleh [Umar A. Piantae. S.IP]
- Hak Cipta © 2025 Sidi - Sistem Digitalisasi

---

Untuk pertanyaan atau bantuan, silakan hubungi melalui halaman Kontak pada situs.
