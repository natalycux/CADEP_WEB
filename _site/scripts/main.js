// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Mensaje de confirmación de que el script se está ejecutando
    console.log("Sitio CADEP cargado correctamente. Iniciando scripts...");

    // --- Lógica para el botón flotante de WhatsApp ---
    const whatsappBtn = document.getElementById('whatsapp-btn');

    // Nos aseguramos de que el botón exista en la página antes de continuar
    if (whatsappBtn) {
        
        // Función para mostrar u ocultar el botón
        const toggleWhatsAppButton = () => {
            // Si el usuario ha bajado más de 200 píxeles...
            if (window.scrollY > 200) {
                // ...añadimos la clase 'show' para que aparezca
                whatsappBtn.classList.add('show');
            } else {
                // ...si no, quitamos la clase 'show' para que se oculte
                whatsappBtn.classList.remove('show');
            }
        };

        // Escuchamos el evento de scroll en la ventana
        window.addEventListener('scroll', toggleWhatsAppButton);

        // También ejecutamos la función una vez al cargar por si la página ya está scrolleada
        toggleWhatsAppButton();
    }
});