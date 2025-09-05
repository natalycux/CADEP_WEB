document.addEventListener("DOMContentLoaded", function() {
    const getBasePath = () => {
        return window.location.pathname.includes('/pages/') ? '../' : './';
    };
    const basePath = getBasePath();

    // ... (código para cargar header y footer sin cambios) ...
    fetch(`${basePath}components/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-header').innerHTML = data;
        });

    fetch(`${basePath}components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('site-footer').innerHTML = data;
        });


    // Cargar Modal de Donación y LUEGO su script
    fetch(`${basePath}components/donation-modal.html`)
        .then(response => response.text())
        .then(data => {
            const modalContainer = document.getElementById('donation-modal-container');
            if (modalContainer) {
                // 1. Inyectar el HTML del modal
                modalContainer.innerHTML = data;

                // 2. Crear y añadir la etiqueta <script> para la lógica del modal
                // Esto asegura que el script se ejecuta DESPUÉS de que el HTML del modal exista
                const modalScript = document.createElement('script');
                modalScript.src = `${basePath}assets/js/donation-modal.js`;
                document.body.appendChild(modalScript);
            }
        });
});
