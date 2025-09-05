const donationModal = document.getElementById('donationModal');

if (donationModal) {
    const amountButtons = donationModal.querySelectorAll('.amount');
    const customAmountInput = donationModal.querySelector('#modalDonationInput');

    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            if (customAmountInput) {
                customAmountInput.value = this.dataset.value;
            }
        });
    });

    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }
}