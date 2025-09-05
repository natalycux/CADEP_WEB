// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
    // --- Lógica para la ruta base (sin cambios) ---
    const getBasePath = () => {
        return window.location.pathname.includes('/pages/') ? '../' : './';
    };
    const basePath = getBasePath();

    // --- Cargar Header y Footer (sin cambios) ---
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

    // --- Cargar HTML de AMBOS modales ---
    const donationModalContainer = document.getElementById('donation-modal-container');
    const paymentModalContainer = document.getElementById('payment-modal-container');

    // Usamos Promise.all para cargar todo en paralelo y luego ejecutar la lógica
    Promise.all([
        fetch(`${basePath}components/donation-modal.html`).then(res => res.text()),
        fetch(`${basePath}components/payment-modal.html`).then(res => res.text())
    ]).then(([donationHTML, paymentHTML]) => {
        // 1. Inyectamos el HTML de ambos modales
        if (donationModalContainer) donationModalContainer.innerHTML = donationHTML;
        if (paymentModalContainer) paymentModalContainer.innerHTML = paymentHTML;

        // 2. Cargamos los SCRIPTS de ambos modales
        loadScript(`${basePath}assets/js/donation-modal.js`);
        loadScript(`${basePath}assets/js/payment-modal.js`);

        // 3. INICIAMOS LA LÓGICA DE TRANSICIÓN (El Orquestador)
        initializeModalTransition();
    });

    // Función auxiliar para cargar scripts
    function loadScript(src) {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
    }

    // --- LÓGICA DE TRANSICIÓN ENTRE MODALES ---
    function initializeModalTransition() {
        const donationModalEl = document.getElementById('donationModal');
        const paymentModalEl = document.getElementById('paymentModal');
        
        // Esperamos un instante para que Bootstrap detecte los modales recién añadidos
        setTimeout(() => {
            if (!donationModalEl || !paymentModalEl) return;

            const donationModal = new bootstrap.Modal(donationModalEl);
            const paymentModal = new bootstrap.Modal(paymentModalEl);

            const confirmBtn = donationModalEl.querySelector('#confirm-amount-button');
            const backBtn = paymentModalEl.querySelector('#back-to-donation-modal');
            const customAmountInput = donationModalEl.querySelector('#modalDonationInput');
            const summaryAmount = paymentModalEl.querySelector('#summary-amount');
            const errorMessage = donationModalEl.querySelector('#modal-amount-error');
            const MIN_DONATION = 5;
            
            confirmBtn.addEventListener('click', () => {
                const amount = parseFloat(customAmountInput.value);
                if (customAmountInput.value && amount >= MIN_DONATION) {
                    summaryAmount.textContent = `$${amount.toFixed(2)}`;
                    
                    // Lógica para transición fluida
                    donationModalEl.addEventListener('hidden.bs.modal', () => {
                        paymentModal.show();
                    }, { once: true }); // 'once: true' asegura que este evento solo se dispare una vez

                    donationModal.hide();
                } else {
                    errorMessage.textContent = `Por favor, ingresa un monto igual o mayor a $${MIN_DONATION}.`;
                    errorMessage.classList.remove('d-none');
                }
            });

            backBtn.addEventListener('click', () => {
                 // Lógica para transición fluida de regreso
                 paymentModalEl.addEventListener('hidden.bs.modal', () => {
                    donationModal.show();
                }, { once: true });

                paymentModal.hide();
            });

        }, 200); // Pequeña demora para asegurar que todo esté listo
    }
});
