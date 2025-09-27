document.addEventListener('DOMContentLoaded', function() {
    
    // Selecciona la barra de navegación por su ID
    const navbar = document.querySelector('#mainNavbar');

    // Si el navbar no existe, no se ejecuta nada
    if (!navbar) return;

    // Define cuántos píxeles debe bajar el usuario para que el navbar cambie
    const scrollThreshold = 50;

    // Función que se activa al hacer scroll
    window.addEventListener('scroll', function() {
        // Si hemos bajado en la página más allá del umbral
        if (window.scrollY > scrollThreshold) {
            // Se añade la clase para encoger el navbar
            navbar.classList.add('navbar-scrolled');
        } else {
            // Si estamos arriba, se quita la clase para que vuelva a la normalidad
            navbar.classList.remove('navbar-scrolled');
        }
    });
});