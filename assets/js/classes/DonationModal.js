/**
 * @file DonationModal.js
 */
export default class DonationModal {
    constructor(modalElement) {
        this.modalElement = modalElement;
        this.amountButtons = null;
        this.customAmountInput = null;
        this.errorMessage = null;
        this.confirmButton = null;
        this.MIN_DONATION = 5;
    }

    init() {
        this.amountButtons = this.modalElement.querySelectorAll('.amount');
        this.customAmountInput = this.modalElement.querySelector('#modalDonationInput');
        this.errorMessage = this.modalElement.querySelector('#modal-amount-error');
        this.confirmButton = this.modalElement.querySelector('#confirm-amount-button');

        this.amountButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.amountButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.customAmountInput.value = button.dataset.value;
                this.hideError();
            });
        });

        this.customAmountInput.addEventListener('input', () => {
            this.amountButtons.forEach(btn => btn.classList.remove('active'));
            const amount = parseFloat(this.customAmountInput.value);
            if (this.customAmountInput.value && amount > 0 && amount < this.MIN_DONATION) {
                this.showError(`El importe mínimo para donar es de $${this.MIN_DONATION}. ¡Gracias por tu apoyo!`);
            } else {
                this.hideError();
            }
        });
    }

    getAmount() {
        const amount = parseFloat(this.customAmountInput.value);
        if (this.customAmountInput.value && amount >= this.MIN_DONATION) {
            return amount;
        }
        this.showError(`Por favor, ingresa un monto igual o mayor a $${this.MIN_DONATION}.`);
        return null;
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('d-none');
    }

    hideError() {
        this.errorMessage.classList.add('d-none');
    }
}