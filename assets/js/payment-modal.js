// assets/js/payment-modal.js

document.addEventListener('DOMContentLoaded', () => {
    const paymentModalEl = document.getElementById('paymentModal');
    if (!paymentModalEl) return;

    // --- Lógica de la barra de progreso ---
    // Esta lógica asumirá que estamos en el Paso 2 (Información) al abrir este modal.
    // Si más adelante hay más pasos, se puede añadir una función de actualización.
    const progressSteps = paymentModalEl.querySelectorAll('.progress-step');
    if (progressSteps.length > 0) {
        progressSteps[0].classList.add('active'); // Paso 1: Monto (ya completado)
        progressSteps[1].classList.add('active'); // Paso 2: Información (actual)
        // progressSteps[2].classList.remove('active'); // Paso 3: Pago (futuro)
    }

    // --- Lógica del selector de método de pago ---
    const paymentMethodBtns = paymentModalEl.querySelectorAll('.payment-method-btn');
    const cardDetails = paymentModalEl.querySelector('#card-details');
    const paypalDetails = paymentModalEl.querySelector('#paypal-details');

    paymentMethodBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Desactiva todos los botones
            paymentMethodBtns.forEach(btn => btn.classList.remove('active'));
            // Activa el botón clickeado
            this.classList.add('active');

            // Muestra u oculta los detalles según el método seleccionado
            const method = this.dataset.method;
            if (method === 'card') {
                cardDetails.classList.remove('d-none');
                paypalDetails.classList.add('d-none');
            } else if (method === 'paypal') {
                cardDetails.classList.add('d-none');
                paypalDetails.classList.remove('d-none');
            }
        });
    });

    // --- Lógica de validación del formulario (ejemplo simple) ---
    const completeDonationBtn = paymentModalEl.querySelector('#complete-donation-btn');
    if (completeDonationBtn) {
        completeDonationBtn.addEventListener('click', () => {
            // Aquí iría una validación más compleja de todos los campos del formulario.
            // Por ahora, solo un console.log
            console.log("Formulario de donación enviado (simulado).");
            alert("Donación completada (simulado)!");
            // paymentModal.hide(); // Podrías cerrar el modal aquí
        });
    }
});