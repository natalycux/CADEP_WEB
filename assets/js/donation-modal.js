const donationModal = document.getElementById('donationModal');

if (donationModal) {
    const amountButtons = donationModal.querySelectorAll('.amount');
    const customAmountInput = donationModal.querySelector('#modalDonationInput');
    const errorMessage = donationModal.querySelector('#modal-amount-error'); // 1. Selecciona el contenedor del mensaje
    const MIN_DONATION = 5; // 2. Define el monto mínimo

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            if (customAmountInput) {
                customAmountInput.value = this.dataset.value;
                // Al seleccionar un botón, nos aseguramos de que el error esté oculto
                errorMessage.classList.add('d-none');
            }
        });
    });

    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            // Deselecciona los botones predefinidos al escribir
            amountButtons.forEach(btn => btn.classList.remove('active'));

            // 3. Lógica de validación
            const amount = parseFloat(this.value);
            if (this.value && amount > 0 && amount < MIN_DONATION) {
                // Si el monto es inválido, muestra el mensaje
                errorMessage.textContent = `El importe mínimo para donar es de $${MIN_DONATION}. ¡Gracias por tu apoyo!`;
                errorMessage.classList.remove('d-none');
            } else {
                // Si el monto es válido o el campo está vacío, oculta el mensaje
                errorMessage.classList.add('d-none');
            }
        });
    }
}