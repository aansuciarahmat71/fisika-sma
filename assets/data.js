/**
 * DATA MATERI FISIKA
 * ===================
 * Ini satu-satunya file yang perlu kamu ubah untuk menambah materi baru.
 *
 * Cara pakai:
 * 1. Taruh file HTML materimu di dalam folder "materi/".
 * 2. Tambahkan satu objek baru ke dalam larik `topics` di bawah ini.
 * 3. Simpan file ini, lalu buka/refresh index.html — kartu baru akan
 *    otomatis muncul, tidak perlu mengubah index.html sama sekali.
 *
 * Kategori yang tersedia (harus salah satu dari ini, huruf kecil semua):
 *   "mekanika", "gelombang", "listrik-magnet", "termodinamika", "fisika-modern", "lab-maya"
 *
 * Field:
 *   title    -> judul materi, tampil di kartu
 *   category -> salah satu kategori di atas
 *   kelas     -> "X", "XI", atau "XII" (boleh diisi bebas juga, mis. "X-XII")
 *   file     -> lokasi file HTML materi, relatif dari index.html
 *   desc     -> deskripsi singkat 1 kalimat
 */

const topics = [
  {
    title: "Contoh: Hukum Newton tentang Gerak",
    category: "mekanika",
    kelas: "XI",
    file: "materi/contoh-hukum-newton.html",
    desc: "— silakan buka"
  },
  {
    title: "Game Misteri Dunia Kuantum",
    category: "Fisika Modern",
    kelas: "XII",
    file: "materi/AanS_Game_misteri-dunia-kuantum.html",
    desc: "Yuk berpetualang di dunia Kuantum dengan beragam tantangan"
  },

  {
    title: "Pengukuran",
    category: "mekanika",
    kelas: "X",
    file: "materi/Pengukuran.html",
    desc: "~ Ukur apa yang dapat diukur, dan buatlah dapat diukur apa yang belum dapat diukur(Galileo Galilei).~"
  }
  // Tambahkan materi barumu di bawah ini, contoh:
  // {
  //   title: "Gerak Lurus Berubah Beraturan",
  //   category: "mekanika",
  //   kelas: "X",
  //   file: "materi/glbb.html",
  //   desc: "Konsep kecepatan dan percepatan pada gerak lurus."
  // },
];

const categories = [
  { key: "all", label: "Semua" },
  { key: "mekanika", label: "Mekanika" },
  { key: "gelombang", label: "Gelombang & Optik" },
  { key: "listrik-magnet", label: "Listrik & Magnet" },
  { key: "termodinamika", label: "Termodinamika" },
  { key: "fisika-modern", label: "Fisika Modern" },
  { key: "Lab-Maya", label: "Lab Maya" },
];
