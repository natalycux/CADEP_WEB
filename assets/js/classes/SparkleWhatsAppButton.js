/**
 * Clase para gestionar el botón flotante de WhatsApp con efecto de destellos.
 * Se encarga de crear e inyectar el botón en el DOM y de gestionar su comportamiento.
 */
class SparkleWhatsAppButton {
    /**
     * @param {string} phoneNumber - El número de teléfono al que se enviará el mensaje.
     * @param {string} message - El mensaje predeterminado que se enviará.
     */
    constructor(phoneNumber, message = "Hola, me gustaría obtener más información.") {
        this.phoneNumber = phoneNumber;
        this.message = message;
        this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
        
        this._createButton();
    }

    /**
     * Crea el elemento del botón y lo añade al cuerpo del documento.
     * @private
     */
    _createButton() {
        // Crear el contenedor principal del botón
        const buttonContainer = document.createElement('a');
        buttonContainer.href = this.whatsappLink;
        buttonContainer.target = '_blank';
        buttonContainer.rel = 'noopener noreferrer';
        buttonContainer.className = 'sparkle-whatsapp-button';
        buttonContainer.setAttribute('aria-label', 'Contactar por WhatsApp');

        // Crear el wrapper del ícono
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';

        // Crear el ícono de WhatsApp
        const whatsappIcon = document.createElement('img');
        whatsappIcon.src = 'assets/img/Whatsapp.png'; // Ruta a tu imagen
        whatsappIcon.alt = 'WhatsApp Icon';

        // Crear el contenedor de destellos
        const sparklesContainer = document.createElement('div');
        sparklesContainer.className = 'sparkles';

        // Añadir 5 destellos
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparklesContainer.appendChild(sparkle);
        }

        // Ensamblar los elementos
        iconWrapper.appendChild(whatsappIcon);
        buttonContainer.appendChild(iconWrapper);
        buttonContainer.appendChild(sparklesContainer);

        // Añadir el botón al body
        document.body.appendChild(buttonContainer);
    }
}

// Exportar la clase para poder importarla en otros módulos
export default SparkleWhatsAppButton;
