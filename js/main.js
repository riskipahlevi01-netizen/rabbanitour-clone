document.addEventListener("DOMContentLoaded", async () => {
  // Fungsi untuk memuat komponen HTML ke dalam elemen yang ditentukan
  async function loadComponent(selector, filePath) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`Gagal memuat ${filePath}`);
      const html = await res.text();
      el.innerHTML = html;

      // Eksekusi ulang script setelah memuat komponen
      const scripts = el.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.text = script.textContent;
        document.head.appendChild(newScript);  // Eksekusi script
      });

      // Pastikan elementor JS berjalan jika diperlukan
      if (window.ElementorFrontend) {
        window.ElementorFrontend.init();
      }
    } catch (err) {
      console.error("Error memuat komponen:", filePath, err);
    }
  }

  // Tentukan basePath berdasarkan URL
  const basePath = (() => {
    const pathname = window.location.pathname;

    if (pathname.includes("/artikel/detail/")) {
      return "../../../";
    }
    if (pathname.includes("/layanan/")) {
      return "../../../";
    }
     if (pathname.includes("/layanan/")) {
      return "../../../";
    }

    if (pathname.includes("/tentang-kami") ||
      pathname.includes("/haji-khusus") ||
      pathname.includes("/wisatamuslimhalal") ||
      pathname.includes("/kantor") ||
      pathname.includes("/artikel") ||
      pathname.includes("/layanan") ||
      pathname.includes("/syarat-dan-ketentuan") ||
      pathname.includes("/kontak-kami")) {
      return "..";
    }

    return ".";
  })();

  // Muat header dan footer
  // await loadComponent("header", `${basePath}/components/header.html`);
  await loadComponent("footer", `${basePath}/components/footer.html`);
});

$('#menu-toggle-close').click(function() {
    // Logika untuk menutup menu atau popup
    $('#menu').hide(); // Contoh, sembunyikan elemen dengan ID "menu"
});







