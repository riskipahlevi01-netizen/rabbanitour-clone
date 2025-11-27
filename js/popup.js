document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan elemen popup dan tombol close
    const popup = document.querySelector('.elementor-location-popup');
    const closeButton = document.querySelector('.popup-close-button');

    // Fungsi untuk menutup popup
    function closePopup() {
        popup.classList.remove('active');
    }

    // Menambahkan event listener pada tombol close
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }

    // Menampilkan popup saat halaman dimuat
    setTimeout(() => {
        popup.classList.add('active');
    }, 1000); // Menunggu 1 detik sebelum menampilkan popup
});
