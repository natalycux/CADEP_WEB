// assets/js/header.js
document.addEventListener('DOMContentLoaded', async () => {
  const siteHeader = document.getElementById('site-header');
  if (!siteHeader) return;

  // ¿Estoy dentro de /pages/ ?
  const inPages = window.location.pathname.includes('/pages/');

  // Elige el fragmento correcto
  const headerFile = inPages
    ? '../components/header-apadrinar.html'   // para pages/apadrinar.html
    : 'components/header-index.html';          // para index.html

  try {
    const res = await fetch(headerFile, { cache: 'no-cache' });
    const html = await res.text();
    siteHeader.innerHTML = html;

    // Efecto: encoger navbar al hacer scroll
    const navbar = document.querySelector('#mainNavbar');
    if (navbar) {
      const threshold = 50;
      const onScroll = () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > threshold);
      };
      onScroll();
      window.addEventListener('scroll', onScroll);
    }
  } catch (err) {
    console.error('No se pudo cargar el header:', err);
  }
});
