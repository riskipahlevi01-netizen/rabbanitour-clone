
  document.addEventListener("DOMContentLoaded", function() {
    // Ambil tombol close
    const closeButton = document.getElementById("menu-toggle-close");

    // Pastikan tombol ada di DOM sebelum menambahkan event listener
    if (closeButton) {
      closeButton.addEventListener("click", function() {
        // Fungsi untuk menutup menu (contohnya sembunyikan elemen popup)
        const popup = document.querySelector(".ast-mobile-popup-header");
        if (popup) {
          popup.style.display = "none";  // Atau menggunakan class untuk sembunyikan
        }
      });
    }
  });