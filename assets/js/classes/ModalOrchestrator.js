/**
 * @file ModalOrchestrator.js
 */
import DonationModal from './DonationModal.js';
import PaymentModal from './PaymentModal.js';

export default class ModalOrchestrator {
    constructor(basePath) {
        this.basePath = basePath;
        this.donationModalContainer = null;
        this.paymentModalContainer = null;
    }

    async init() {
        this.donationModalContainer = document.getElementById('donation-modal-container');
        this.paymentModalContainer = document.getElementById('payment-modal-container');

        if (!this.donationModalContainer || !this.paymentModalContainer) {
            return;
        }

        await this.loadModalHTML();
        this.setupModals();
    }

    async loadModalHTML() {
        const donationURL = `${this.basePath}components/donation-modal.html`;
        const paymentURL = `${this.basePath}components/payment-modal.html`;

        try {
            const [donationResponse, paymentResponse] = await Promise.all([
                fetch(donationURL),
                fetch(paymentURL)
            ]);

            if (!donationResponse.ok || !paymentResponse.ok) {
                throw new Error('Failed to fetch modal HTML');
            }

            const [donationHTML, paymentHTML] = await Promise.all([
                donationResponse.text(),
                paymentResponse.text()
            ]);

            this.donationModalContainer.innerHTML = donationHTML;
            this.paymentModalContainer.innerHTML = paymentHTML;
        } catch (error) {
            console.error("Error loading modal HTML:", error);
        }
    }

    setupModals() {
        const donationModalEl = document.getElementById('donationModal');
        const paymentModalEl = document.getElementById('paymentModal');

        if (!donationModalEl || !paymentModalEl) return;

        const bsDonationModal = new bootstrap.Modal(donationModalEl);
        const bsPaymentModal = new bootstrap.Modal(paymentModalEl);

        const donationModal = new DonationModal(donationModalEl);
        donationModal.init();

        const paymentModal = new PaymentModal(paymentModalEl);
        paymentModal.init();

        donationModal.confirmButton.addEventListener('click', () => {
            const amount = donationModal.getAmount();
            if (amount !== null) {
                paymentModal.setSummaryAmount(amount);
                donationModalEl.addEventListener('hidden.bs.modal', () => {
                    bsPaymentModal.show();
                }, { once: true });
                bsDonationModal.hide();
            }
        });

        paymentModal.backButton.addEventListener('click', () => {
            paymentModalEl.addEventListener('hidden.bs.modal', () => {
                bsDonationModal.show();
            }, { once: true });
            bsPaymentModal.hide();
        });
    }
}