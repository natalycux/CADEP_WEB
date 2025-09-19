/**
 * @file PaymentModal.js
 */
export default class PaymentModal {
    constructor(modalElement) {
        this.modalElement = modalElement;
        this.summaryAmountEl = null;
        this.backButton = null;
        this.progressSteps = null;
        this.paymentMethodBtns = null;
    }

    init() {
        this.summaryAmountEl = this.modalElement.querySelector('#summary-amount');
        this.backButton = this.modalElement.querySelector('#back-to-donation-modal');
        this.progressSteps = this.modalElement.querySelectorAll('.progress-step');
        this.paymentMethodBtns = this.modalElement.querySelectorAll('.nav-link');

        this.updateProgress(2);

        this.paymentMethodBtns.forEach(button => {
            button.addEventListener('click', () => {});
        });
    }

    setSummaryAmount(amount) {
        if (this.summaryAmountEl) {
            this.summaryAmountEl.textContent = `$${amount.toFixed(2)}`;
        }
    }

    updateProgress(stepNumber) {
        this.progressSteps.forEach((step, index) => {
            const currentStep = index + 1;
            if (currentStep < stepNumber) {
                step.classList.add('completed', 'active');
            } else if (currentStep === stepNumber) {
                step.classList.remove('completed');
                step.classList.add('active');
            } else {
                step.classList.remove('completed', 'active');
            }
        });
    }
}