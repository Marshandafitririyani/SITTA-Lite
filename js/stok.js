const { createApp } = Vue;

createApp({
  data() {
    return {
      daftarStok: dataBahanAjar.stok || [],
    };
  },
  computed: {
    bukuKosongCount() {
      return this.daftarStok.filter((item) => item.qty === 0).length;
    },
    bukuKritisCount() {
      return this.daftarStok.filter(
        (item) => item.qty > 0 && item.qty < item.safety,
      ).length;
    },
    isGudangAman() {
      return this.bukuKosongCount === 0 && this.bukuKritisCount === 0;
    },
  },
}).mount("#app");
