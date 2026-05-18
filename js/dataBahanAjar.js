var dataBahanAjar = {
  upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar"],
  kategoriList: ["BMP", "MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],
  pengirimanList: [
    { kode: "REG", nama: "Reguler (3-5 hari)" },
    { kode: "EXP", nama: "Ekspres (1-2 hari)" },
  ],
  paket: [
    {
      kode: "PAKET-UT-001",
      nama: "PAKET IPS Dasar",
      isi: ["EKMA4116", "EKMA4115"],
      harga: 120000,
      detail:
        "Berisi Buku Materi Pokok (BMP) Kepemimpinan (EKMA4116) dan Pengantar Bisnis (EKMA4115) untuk kompetensi dasar sosial.",
    },
    {
      kode: "PAKET-UT-002",
      nama: "PAKET IPA Dasar",
      isi: ["BIOL4201", "FISIP4001"],
      harga: 140000,
      detail:
        "Berisi Buku Materi Pokok (BMP) Biologi Umum (BIOL4201) dan Ilmu Alamiah Dasar (FISIP4001) untuk kompetensi sains.",
    },
  ],
  stok: [
    {
      kode: "EKMA4116",
      judul: "Kepemimpinan",
      kategori: "BMP",
      upbjj: "Surabaya",
      lokasiRak: "0SBY02",
      harga: 65000,
      qty: 28,
      safety: 20,
      catatanHTML: "<em>Edisi 2024, cetak ulang</em>",
    },
    {
      kode: "EKMA4213",
      judul: "Manajemen Keuangan",
      kategori: "BMP",
      upbjj: "Jakarta",
      lokasiRak: "0JKT01",
      harga: 85000,
      qty: 15,
      safety: 20,
      catatanHTML: "<em>Stok Baru</em>",
    },
    {
      kode: "BIOL4110",
      judul: "Mikrobiologi",
      kategori: "BMP",
      upbjj: "Padang",
      lokasiRak: "0MLG01",
      harga: 70000,
      qty: 5,
      safety: 10,
      catatanHTML: "<strong>Stok Menipis</strong>",
    },
    {
      kode: "SKOM4101",
      judul: "Pengantar Komunikasi",
      kategori: "BMP",
      upbjj: "Jakarta",
      lokasiRak: "0TMP01",
      harga: 55000,
      qty: 100,
      safety: 20,
      catatanHTML: "<em>Edisi Terbaru</em>",
    },
    {
      kode: "PAUD4306",
      judul: "Perkembangan Anak Usia Dini",
      kategori: "BMP",
      upbjj: "Jakarta",
      lokasiRak: "0UPBJJBDG",
      harga: 60000,
      qty: 40,
      safety: 15,
      catatanHTML: "<em>Edisi 2, Penulis: Siti Aisyah, dkk.</em>",
    },
  ],
  tracking: {
    "DO2026-001": {
      nim: "053341521",
      nama: "Rina Wulandari",
      status: "Dalam Perjalanan",
      ekspedisi: "JNE Regular",
      tanggalKirim: "2026-05-10",
      paket: "PAKET-UT-001 - PAKET IPS Dasar",
      alamat: "JALAN RAYA PONDOK CABE NO. 15, TANGSEL, BANTEN",
      total: 120000,
      perjalanan: [
        {
          waktu: "10-05-2026 10:12",
          keterangan:
            "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
        },
        {
          waktu: "10-05-2026 14:07",
          keterangan: "Tiba di Hub: TANGERANG SELATAN",
        },
        {
          waktu: "11-05-2026 09:15",
          keterangan: "Diteruskan ke Kantor Hub Utama Tujuan",
        },
      ],
    },
    "DO2026-002": {
      nim: "051785429",
      nama: "Agus Pranoto",
      status: "Dikirim",
      ekspedisi: "JNE Express",
      tanggalKirim: "2026-05-12",
      paket: "PAKET-UT-002 - PAKET IPA Dasar",
      alamat:
        "JL. PERINTIS KEMERDEKAAN KM. 10, KOTA MAKASSAR, SULAWESI SELATAN",
      total: 140000,
      perjalanan: [
        {
          waktu: "12-05-2026 10:12",
          keterangan:
            "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
        },
        {
          waktu: "12-05-2026 14:07",
          keterangan: "Tiba di Hub: TANGERANG SELATAN",
        },
        {
          waktu: "13-05-2026 16:30",
          keterangan: "Diteruskan ke Sortation Hub Makassar",
        },
        {
          waktu: "14-05-2026 20:00",
          keterangan: "Selesai Antar. Penerima: Agus Pranoto (Ybs)",
        },
      ],
    },
    "DO2026-003": {
      nim: "0500654271",
      nama: "Siti Marlina",
      status: "Proses Packing",
      ekspedisi: "JNE Regular",
      tanggalKirim: "2026-05-15",
      paket: "PAKET-UT-001 - PAKET IPS Dasar",
      alamat: "JL. SETIABUDI NO. 193, GEGERKALONG, KOTA BANDUNG, JAWA BARAT",
      total: 120000,
      perjalanan: [
        {
          waktu: "15-05-2026 08:00",
          keterangan:
            "Verifikasi pembayaran berhasil. Menunggu antrean manifest.",
        },
        {
          waktu: "15-05-2026 10:00",
          keterangan:
            "Bahan ajar sedang diproses dan dipacking di gudang pusat",
        },
      ],
    },
  },
};
