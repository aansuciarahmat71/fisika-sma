# Fisika SMA — Wadah Web

Situs ini adalah **wadah/hub** untuk menampung file-file HTML materi Fisika SMA.
Kamu tinggal menambahkan file HTML materimu, mendaftarkannya di satu file data,
dan halaman utama akan menampilkannya sebagai kartu yang rapi dan bisa difilter
per kategori.

## Struktur folder

```
fisika-sma/
├── index.html          <- halaman utama (jangan perlu diubah)
├── assets/
│   ├── style.css        <- tampilan (tema papan tulis)
│   ├── script.js         <- logika render & filter kartu (jangan perlu diubah)
│   └── data.js            <- SATU-SATUNYA FILE YANG PERLU KAMU EDIT
└── materi/
    └── contoh-hukum-newton.html   <- contoh, boleh dihapus/diganti
```

## Cara menambah materi baru

1. Taruh file HTML materimu di dalam folder `materi/`.
   Contoh: `materi/glbb.html`

2. Buka `assets/data.js`, lalu tambahkan satu objek baru ke dalam larik
   `topics`:

   ```js
   {
     title: "Gerak Lurus Berubah Beraturan",
     category: "mekanika",
     kelas: "X",
     file: "materi/glbb.html",
     desc: "Konsep kecepatan dan percepatan pada gerak lurus."
   }
   ```

   Kategori yang tersedia: `mekanika`, `gelombang`, `listrik-magnet`,
   `termodinamika`, `fisika-modern`.

3. Simpan file, lalu buka/refresh `index.html`. Kartu baru akan otomatis
   muncul — tidak perlu menyentuh `index.html` sama sekali.

4. Hapus atau ganti entri "Contoh: Hukum Newton..." di `data.js` kapan pun
   kamu mau, begitu juga file contohnya di `materi/`.

## Tombol "kembali ke daftar materi" — otomatis

Saat siswa klik sebuah kartu materi, file HTML-nya dibuka **di dalam** halaman
utama (lewat jendela mini), lengkap dengan bar berisi tombol "Kembali ke
daftar materi" di atasnya. Ini berlaku otomatis untuk **semua** file materi,
lama maupun baru — kamu tidak perlu menambahkan tombol kembali secara manual
di setiap file HTML materimu.

Tombol back fisik di browser/HP juga akan menutup jendela materi dan kembali
ke daftar, bukan langsung keluar dari situs.

Kalau siswa menekan tombol Ctrl/Cmd sambil klik kartu (atau klik tombol
"Buka di tab baru" di jendela viewer), file materi tetap bisa dibuka di tab
baru seperti biasa.

## Cara menaruhnya online (opsional)

Karena semuanya file statis (HTML/CSS/JS biasa, tanpa server/database),
kamu bisa meng-hosting-nya gratis di berbagai tempat, misalnya:

- **GitHub Pages** — upload folder ini ke repo GitHub, aktifkan Pages.
- **Netlify / Vercel** — drag-and-drop folder ini ke dashboard mereka.

Tidak ada langkah build/compile — folder ini sudah siap pakai apa adanya.
