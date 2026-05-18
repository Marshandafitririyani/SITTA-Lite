const { createApp } = Vue;

createApp({
  data() {
    return {
      searchQuery: "",
      searchResult: null,
      trackingList: dataBahanAjar.tracking || {},
      paketList: dataBahanAjar.paket || [],
      ekspedisiList: ["JNE Regular", "JNE Express"],

      selectedPaketIndex: "",
      newDO: {
        nim: "",
        nama: "",
        ekspedisi: "",
        tanggalKirim: new Date().toISOString().split("T")[0],
      },
    };
  },
  computed: {
    generatedDONumber() {
      const currentYear = new Date().getFullYear();
      const prefix = `DO${currentYear}-`;

      // Cari sequence tertinggi dari nomor DO yang ada saat ini
      let maxSequence = 0;
      Object.keys(this.trackingList).forEach((key) => {
        if (key.startsWith(prefix)) {
          const seqPart = parseInt(key.replace(prefix, ""), 10);
          if (!isNaN(seqPart) && seqPart > maxSequence) {
            maxSequence = seqPart;
          }
        }
      });

      const nextSequence = String(maxSequence + 1).padStart(3, "0");
      return `${prefix}${nextSequence}`;
    },
    selectedPaket() {
      if (this.selectedPaketIndex === "") return null;
      return this.paketList[this.selectedPaketIndex];
    },
  },
  methods: {
    submitDO() {
      const query = this.searchQuery.trim();
      if (!query) {
        Swal.fire({
          icon: "warning",
          title: "Input Kosong",
          text: "Harap masukkan Nomor DO atau NIM Mahasiswa.",
          confirmButtonColor: "#0056b3",
        });
        return;
      }

      const foundEntry = Object.entries(this.trackingList).find(
        ([nomorDO, detail]) => {
          return (
            nomorDO.toLowerCase() === query.toLowerCase() ||
            detail.nim === query
          );
        },
      );

      if (foundEntry) {
        this.searchResult = {
          nomorDO: foundEntry[0],
          ...foundEntry[1],
        };
      } else {
        this.searchResult = null;
        Swal.fire({
          icon: "error",
          title: "Data Tidak Ditemukan",
          text: `Tidak ada pengiriman untuk "${query}".`,
          confirmButtonColor: "#d33",
        });
      }
    },
    saveNewDO() {
      if (
        !this.newDO.nim ||
        !this.newDO.nama ||
        !this.newDO.ekspedisi ||
        this.selectedPaketIndex === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Data Belum Lengkap",
          text: "Pastikan semua field (NIM, Nama, Ekspedisi, dan Paket) telah diisi/dipilih!",
          confirmButtonColor: "#0056b3",
        });
        return;
      }

      const currentDO = this.generatedDONumber;

      const newEntry = {
        nim: this.newDO.nim,
        nama: this.newDO.nama,
        ekspedisi: this.newDO.ekspedisi,
        paket: `${this.selectedPaket.kode} - ${this.selectedPaket.nama}`,
        tanggalKirim: this.newDO.tanggalKirim,
        total: this.selectedPaket.harga,
        perjalanan: [
          {
            waktu:
              new Date().toLocaleDateString("id-ID") +
              " " +
              new Date().toLocaleTimeString("id-ID", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            keterangan:
              "Data DO berhasil dibuat. Mempersiapkan pengiriman berkas.",
          },
        ],
      };

      this.trackingList[currentDO] = newEntry;

      if (typeof dataBahanAjar !== "undefined") {
        dataBahanAjar.tracking = this.trackingList;
      }

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: `Nomor DO ${currentDO} berhasil ditambahkan ke daftar tracking.`,
        confirmButtonColor: "#2e7d32",
      });

      this.newDO.nim = "";
      this.newDO.nama = "";
      this.newDO.ekspedisi = "";
      this.selectedPaketIndex = "";
      this.newDO.tanggalKirim = new Date().toISOString().split("T")[0];
    },
  },
}).mount("#trackingApp");
