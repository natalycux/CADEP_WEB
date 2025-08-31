document.addEventListener("DOMContentLoaded", function() {
    // Cargar Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-header').innerHTML = data;
        });

    // Cargar Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-footer').innerHTML = data;
        });

    // Cargar Modal de Donación
    fetch('components/donation-modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('donation-modal-container').innerHTML = data;
        });

    // ... resto de tu código de main.js ...
});