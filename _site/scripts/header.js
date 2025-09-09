// Este script se encarga del efecto de encoger la barra de navegación al hacer scroll.
document.addEventListener('DOMContentLoaded', () => {
    const mainNavbar = document.getElementById('mainNavbar');

    if (mainNavbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainNavbar.classList.add('navbar-scrolled');
            } else {
                mainNavbar.classList.remove('navbar-scrolled');
            }
        });
    }
});