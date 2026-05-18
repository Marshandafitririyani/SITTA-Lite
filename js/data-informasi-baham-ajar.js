const { createApp } = Vue;

createApp({
  data() {
    return {
      stok: typeof dataBahanAjar !== "undefined" ? dataBahanAjar.stok : [],
      user: JSON.parse(localStorage.getItem("userLoggedIn")) || {},
      ucapan: "",
      selectedUpbjj: "",
      selectedKategori: "",
      sortBy: "",
      isSafety: false,
      upbjjList: ["Pusat", "Semarang", "Jakarta", "Surabaya"],
      kategoriList: ["MK Wajib", "MK Umum", "Karya Ilmiah"],
    };
  },
  computed: {
    filteredData() {
      let result = [...this.stok];

      if (this.selectedUpbjj)
        result = result.filter((i) => i.upbjj === this.selectedUpbjj);
      if (this.selectedKategori)
        result = result.filter((i) => i.kategori === this.selectedKategori);
      if (this.isSafety) result = result.filter((i) => i.qty <= i.safety);

      if (this.sortBy === "judul")
        result.sort((a, b) => a.judul.localeCompare(b.judul));
      if (this.sortBy === "qty") result.sort((a, b) => b.qty - a.qty);
      if (this.sortBy === "harga") result.sort((a, b) => a.harga - b.harga);

      return result;
    },
    kategoriListFiltered() {
      return this.kategoriList;
    },
  },
  methods: {
    setUcapan() {
      const jam = new Date().getHours();
      if (jam >= 5 && jam < 11) this.ucapan = "Selamat Pagi";
      else if (jam >= 11 && jam < 15) this.ucapan = "Selamat Siang";
      else if (jam >= 15 && jam < 18) this.ucapan = "Selamat Sore";
      else this.ucapan = "Selamat Malam";
    },
    formatImageName(judul) {
      return judul.toLowerCase().replace(/\s+/g, "_");
    },
    onImageError(e) {
      e.target.src = "image/img_not_found.jpeg";
    },
    resetFilter() {
      this.selectedUpbjj = "";
      this.selectedKategori = "";
      this.sortBy = "";
      this.isSafety = false;
    },
    async openAddModal() {
      const { value: formValues } = await Swal.fire({
        title: "Tambah Bahan Ajar",
        html:
          `<input id="swal-kode" class="swal2-input" placeholder="Kode">` +
          `<input id="swal-judul" class="swal2-input" placeholder="Judul">` +
          `<select id="swal-kategori" class="swal2-select">
                        <option value="MK Wajib">MK Wajib</option>
                        <option value="MK Umum">MK Umum</option>
                    </select>` +
          `<input id="swal-upbjj" class="swal2-input" placeholder="UPBJJ">` +
          `<input id="swal-rak" class="swal2-input" placeholder="Lokasi Rak">` +
          `<input id="swal-harga" type="number" class="swal2-input" placeholder="Harga">` +
          `<input id="swal-qty" type="number" class="swal2-input" placeholder="Jumlah">`,
        focusConfirm: false,
        preConfirm: () => {
          return {
            kode: document.getElementById("swal-kode").value,
            judul: document.getElementById("swal-judul").value,
            kategori: document.getElementById("swal-kategori").value,
            upbjj: document.getElementById("swal-upbjj").value,
            lokasiRak: document.getElementById("swal-rak").value,
            harga: parseInt(document.getElementById("swal-harga").value),
            qty: parseInt(document.getElementById("swal-qty").value),
            safety: 10,
          };
        },
      });

      if (formValues) {
        this.stok.push(formValues);
        Swal.fire("Berhasil!", "Data telah ditambahkan.", "success");
      }
    },
    hapusData(kode) {
      Swal.fire({
        title: "Hapus data?",
        text: "Data dengan kode " + kode + " akan dihapus",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Ya, Hapus!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.stok = this.stok.filter((i) => i.kode !== kode);
          Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
        }
      });
    },
  },
  mounted() {
    this.setUcapan();
  },
}).mount("#app");
