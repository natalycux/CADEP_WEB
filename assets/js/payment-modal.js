// assets/js/payment-modal.js

document.addEventListener('DOMContentLoaded', () => {
    const paymentModalEl = document.getElementById('paymentModal');
    if (!paymentModalEl) return;

    // --- Lógica del selector de método de pago ---
    const paymentMethodBtns = paymentModalEl.querySelectorAll('.payment-method-btn');
    const tabPanes = paymentModalEl.querySelectorAll('.tab-pane');

    paymentMethodBtns.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Quitar la clase 'active' de todos los botones
            paymentMethodBtns.forEach(btn => btn.classList.remove('active'));
            // 2. Añadir la clase 'active' solo al botón clickeado
            this.classList.add('active');

            const targetPaneId = this.getAttribute('data-bs-target');
            
            // 3. Ocultar todos los paneles de contenido
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });

            // 4. Mostrar solo el panel de contenido asociado al botón
            const targetPane = document.querySelector(targetPaneId);
            if(targetPane) {
                targetPane.classList.add('show', 'active');
            }
        });
    });

    // --- Lógica de validación del formulario (ejemplo simple) ---
    const completeDonationBtn = paymentModalEl.querySelector('#complete-donation-btn');
    if (completeDonationBtn) {
        completeDonationBtn.addEventListener('click', () => {
            // Aquí iría una validación más compleja
            console.log("Formulario de donación enviado (simulado).");
            alert("¡Gracias por tu donación! (simulado)");
            // const modal = bootstrap.Modal.getInstance(paymentModalEl);
            // modal.hide();
        });
    }
    
    // Aquí puedes añadir la lógica para el botón "Volver" si es necesario
});