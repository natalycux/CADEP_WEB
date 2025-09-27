/**
 * @file main.js (Bundled)
 * @description Contiene todas las clases y la lógica de inicialización de la aplicación.
 * Este archivo es generado para evitar problemas con ES6 Modules en ciertos entornos.
 */

// ===================================================================================
// DEFINICIÓN DE CLASES
// ===================================================================================

/**
 * @class I18nManager
 * @description Gestiona la internacionalización (i18n), aplicando traducciones al DOM.
 */
class I18nManager {
    translations = {
        es: {
            'sponsor_page_title': 'Vista de Apadrinamiento de Niños', 'sponsor_title': 'Te presentamos a', 'sponsor_description': 'Con un ingreso familiar promedio de $597.00 al mes en su comunidad, las familias como la de', 'sponsor_description_2': 'apenas ganan lo suficiente para cubrir las necesidades básicas.', 'sponsor_age': 'Edad:', 'sponsor_birthday': 'Fecha de cumpleaños:', 'sponsor_country': 'País:', 'sponsor_impact': 'Solamente se requiere una persona para generar un cambio positivo y duradero en la vida de', 'sponsor_impact_2': 'Tu donación mensual de $39 es invertida en la vida de algunos de los niños más vulnerables del mundo.', 'sponsor_button': 'APADRINAR', 'sponsor_find_title': 'Encuentra un niño que necesita ser apoyado!', 'sponsor_filter': 'Buscar por: Waiting the longest', 'sponsor_filter_option1': 'Waiting the longest', 'sponsor_filter_option2': 'Edad', 'sponsor_filter_option3': 'Primer Nombre', 'sponsor_whatis_title': '¿Qué es el apadrinamiento de niños y jóvenes?', 'sponsor_whatis_desc1': 'El apadrinamiento establece una conexión personal entre dos personas —un padrino con el deseo de ayudar y un niño con el deseo de superarse a pesar de su situación económica—.', 'sponsor_whatis_desc2': 'Nuestro programa de apadrinamiento equipa a los niños y adolescentes con habilidades laborales y de vida esenciales para romper el círculo vicioso de la pobreza para siempre.', 'sponsor_video_desc': 'opcional** un video de que es el padrinamiento y lo que eso ayuda', 'profile_page_title': 'Perfil de Niño - Apadrinamiento', 'profile_child_name': 'Carlos Rodríguez', 'profile_child_desc': 'Con tu apoyo, {name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.', 'profile_sponsor_button': 'APADRINAR AHORA', 'profile_share': 'Compartir', 'profile_age': 'Años', 'profile_birthday': 'Fecha de Nacimiento', 'profile_days_waiting': 'Días de espera', 'profile_find_more': 'Buscar más Niños', 'profile_about_title': 'ACERCA DE MI Y MI FAMILIA', 'profile_name': 'Nombre:', 'profile_gender': 'Género:', 'profile_personality': 'Personalidad:', 'profile_interests': 'Intereses:', 'profile_income': 'Ingreso familiar:', 'profile_siblings': 'Hermanos:', 'profile_living': 'Vive con:', 'profile_language': 'Idioma:', 'profile_studies': 'Estudia:', 'profile_code': 'Código de apadrinamiento:', 'profile_home_title': 'ACERCA DE MI HOGAR', 'profile_walls': 'Paredes de la casa:', 'profile_roof': 'Techería de la casa:', 'profile_floor': 'Piso de la casa:', 'profile_water': 'Fuente de agua:', 'profile_internet': 'Acceso a internet:', 'profile_phone': 'Acceso a línea telefónica:', 'profile_context_title': 'CONTEXTO: POBREZA EN GUATEMALA', 'profile_context_desc1': 'En Guatemala, el 59.3% de la población vive en situación de pobreza. En áreas rurales como la comunidad de Carlos, este porcentaje aumenta al 75%. Las familias con niños pequeños son las más afectadas, con limitado acceso a educación, salud y nutrición adecuada.', 'profile_context_desc2': 'La pobreza afecta especialmente a niños con discapacidades o problemas de salud, quienes enfrentan barreras adicionales para su desarrollo integral.', 'profile_context_img_desc': 'Imagen que muestra las condiciones de vida en comunidades vulnerables de Guatemala', 'profile_impact_title': 'IMPACTO DE TU APOYO', 'profile_impact_intro': 'Tu donación mensual de $39 proveerá a Carlos:', 'profile_impact_list1': 'Acceso a educación y materiales escolares', 'profile_impact_list2': 'Alimentación balanceada y suplementos nutricionales', 'profile_impact_list3': 'Atención médica y dental regular', 'profile_impact_list4': 'Programas de desarrollo comunitario', 'profile_impact_list5': 'Apoyo psicosocial y actividades recreativas', 'profile_impact_desc': 'Con tu apoyo, Carlos podrá romper el ciclo de pobreza y construir un futuro lleno de oportunidades.', 'profile_impact_img_desc': 'Imagen de un niño participando en programas de apadrinamiento', 'profile_usage_title': '¿CÓMO SE UTILIZAN TUS DONATIVOS?', 'profile_usage_education': '40% Educación', 'profile_usage_food': '25% Alimentación', 'profile_usage_health': '20% Salud', 'profile_usage_admin': '15% Administración', 'profile_how_title': 'Así es como funciona el apadrinamiento', 'profile_how_what_title': '¿Qué recibe el niño?', 'profile_how_what_desc': 'El niño recibe apoyo integral que incluye educación, alimentación balanceada, atención médica regular, y participación en programas de desarrollo comunitario que le brindan las herramientas necesarias para superarse.', 'profile_how_sponsor_title': '¿Qué recibe como padrino/madrina?', 'profile_how_sponsor_desc': 'Como padrino, recibirás actualizaciones periódicas sobre el progreso del niño, cartas de agradecimiento, la oportunidad de comunicarte con él/ella, y reportes detallados del impacto de tu donación en su comunidad.'
        },
        en: {
            'sponsor_page_title': 'Child Sponsorship View', 'sponsor_title': 'We present to you', 'sponsor_description': 'With an average family income of $597.00 per month in their community, families like', 'sponsor_description_2': 'barely earn enough to cover basic needs.', 'sponsor_age': 'Age:', 'sponsor_birthday': 'Birthday:', 'sponsor_country': 'Country:', 'sponsor_impact': 'It only takes one person to generate a positive and lasting change in the life of', 'sponsor_impact_2': 'Your monthly donation of $39 is invested in the lives of some of the world\'s most vulnerable children.', 'sponsor_button': 'SPONSOR', 'sponsor_find_title': 'Find a child who needs support!', 'sponsor_filter': 'Search by: Waiting the longest', 'sponsor_filter_option1': 'Waiting the longest', 'sponsor_filter_option2': 'Age', 'sponsor_filter_option3': 'First Name', 'sponsor_whatis_title': 'What is child and youth sponsorship?', 'sponsor_whatis_desc1': 'Sponsorship establishes a personal connection between two people - a sponsor with the desire to help and a child with the desire to overcome despite their economic situation.', 'sponsor_whatis_desc2': 'Our sponsorship program equips children and adolescents with essential work and life skills to break the vicious cycle of poverty forever.', 'sponsor_video_desc': 'optional** a video about what sponsorship is and how it helps', 'profile_child_desc': 'With your support, {name} can have access to education, proper nutrition and opportunities for a better future.', 'profile_sponsor_button': 'SPONSOR NOW', 'profile_share': 'Share', 'profile_age': 'Years', 'profile_birthday': 'Birth Date', 'profile_days_waiting': 'Days waiting', 'profile_find_more': 'Find more Children', 'profile_about_title': 'ABOUT ME AND MY FAMILY', 'profile_name': 'Name:', 'profile_gender': 'Gender:', 'profile_personality': 'Personality:', 'profile_interests': 'Interests:', 'profile_income': 'Family income:', 'profile_siblings': 'Siblings:', 'profile_living': 'Lives with:', 'profile_language': 'Language:', 'profile_studies': 'Studies:', 'profile_code': 'Sponsorship code:', 'profile_home_title': 'ABOUT MY HOME', 'profile_walls': 'House walls:', 'profile_roof': 'House roofing:', 'profile_floor': 'House floor:', 'profile_water': 'Water source:', 'profile_internet': 'Internet access:', 'profile_phone': 'Telephone access:', 'profile_context_title': 'CONTEXT: POVERTY IN GUATEMALA', 'profile_context_desc1': 'In Guatemala, 59.3% of the population lives in poverty. In rural areas like Carlos\' community, this percentage increases to 75%. Families with young children are the most affected, with limited access to education, health and adequate nutrition.', 'profile_context_desc2': 'Poverty especially affects children with disabilities or health problems, who face additional barriers to their comprehensive development.', 'profile_context_img_desc': 'Image showing living conditions in vulnerable communities of Guatemala', 'profile_impact_title': 'IMPACT OF YOUR SUPPORT', 'profile_impact_intro': 'Your monthly donation of $39 will provide Carlos with:', 'profile_impact_list1': 'Access to education and school materials', 'profile_impact_list2': 'Balanced nutrition and nutritional supplements', 'profile_impact_list3': 'Regular medical and dental care', 'profile_impact_list4': 'Community development programs', 'profile_impact_list5': 'Psychosocial support and recreational activities', 'profile_impact_desc': 'With your support, Carlos will be able to break the cycle of poverty and build a future full of opportunities.', 'profile_impact_img_desc': 'Image of a child participating in sponsorship programs', 'profile_usage_title': 'HOW ARE YOUR DONATIONS USED?', 'profile_usage_education': '40% Education', 'profile_usage_food': '25% Food', 'profile_usage_health': '20% Health', 'profile_usage_admin': '15% Administration', 'profile_how_title': 'This is how sponsorship works', 'profile_how_what_title': 'What does the child receive?', 'profile_how_what_desc': 'The child receives comprehensive support that includes education, balanced nutrition, regular medical care, and participation in community development programs that provide the necessary tools to succeed.', 'profile_how_sponsor_title': 'What do you receive as a sponsor?', 'profile_how_sponsor_desc': 'As a sponsor, you will receive periodic updates on the child\'s progress, thank you letters, the opportunity to communicate with him/her, and detailed reports on the impact of your donation on their community.'
        }
    };
    constructor() { this.currentLang = this.getSavedLang() || 'es'; }
    init() { this.applyTranslations(this.currentLang); this.updateLanguageSelector(); this.setHtmlLangAttribute(); if (!this.getSavedLang() && this.isIndexPage()) { setTimeout(() => { this.showLanguageModal(); }, 1000); } }
    isIndexPage() { return window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'); }
    getSavedLang() { return localStorage.getItem('site_lang'); }
    setLang(lang) { if (this.translations[lang]) { localStorage.setItem('site_lang', lang); this.currentLang = lang; this.applyTranslations(lang); this.updateLanguageSelector(); this.setHtmlLangAttribute(); this.hideLanguageModal(); } }
    applyTranslations(lang) { const childSpecificData = {}; const childDataSelectors = ['#profile-child-name', '#about-child-name', '#profile-child-age', '#about-child-age', '#profile-child-birthday', '#profile-child-waiting', '#about-child-gender', '#about-child-personality', '#about-child-interests', '#about-child-income', '#about-child-siblings', '#about-child-living', '#about-child-language', '#about-child-studies', '#about-child-code', '#home-child-walls', '#home-child-roof', '#home-child-floor', '#home-child-water', '#home-child-internet', '#home-child-phone']; childDataSelectors.forEach(selector => { const element = document.querySelector(selector); if (element) { childSpecificData[selector] = element.textContent; } }); document.querySelectorAll('[data-i18n]').forEach(element => { const key = element.getAttribute('data-i18n'); if (this.translations[lang][key]) { let translation = this.translations[lang][key]; if (key === 'profile_child_desc' && document.getElementById('profile-child-name')) { const childName = document.getElementById('profile-child-name').textContent; translation = translation.replace('{name}', childName); } if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') { element.value = translation; } else { element.innerHTML = translation; } } }); Object.keys(childSpecificData).forEach(selector => { const element = document.querySelector(selector); if (element) { element.textContent = childSpecificData[selector]; } }); document.querySelectorAll('[data-i18n-attr]').forEach(element => { const attrConfig = element.getAttribute('data-i18n-attr'); const attrPairs = attrConfig.split(';'); attrPairs.forEach(pair => { const [attr, key] = pair.split(':'); if (this.translations[lang][key]) { element.setAttribute(attr, this.translations[lang][key]); } }); }); const pageTitle = document.querySelector('title'); if (pageTitle && this.translations[lang]['site_title']) { pageTitle.textContent = this.translations[lang]['site_title']; } const metaDescription = document.querySelector('meta[name="description"]'); if (metaDescription && this.translations[lang]['site_description']) { metaDescription.setAttribute('content', this.translations[lang]['site_description']); } }
    showLanguageModal() { if (document.getElementById('languageModal')) { return; } const modalHTML = `<div class="modal fade" id="languageModal" tabindex="-1" aria-labelledby="languageModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="languageModalLabel" data-i18n="language_modal_title">¿Quieres continuar en Ingles o español?</h5></div><div class="modal-body text-center"><p data-i18n="language_modal_title">¿Quieres continuar en Ingles o español?</p><div class="d-flex justify-content-center gap-3 mt-4"><button type="button" class="btn btn-primary" id="btn-lang-en" data-i18n="language_btn_english">Ingles</button><button type="button" class="btn btn-secondary" id="btn-lang-es" data-i18n="language_btn_spanish">español</button></div></div></div></div></div>`; document.body.insertAdjacentHTML('beforeend', modalHTML); this.applyTranslations(this.currentLang); document.getElementById('btn-lang-en')?.addEventListener('click', () => this.setLang('en')); document.getElementById('btn-lang-es')?.addEventListener('click', () => this.setLang('es')); const languageModal = new bootstrap.Modal(document.getElementById('languageModal')); languageModal.show(); document.getElementById('languageModal').addEventListener('hidden.bs.modal', () => { this.hideLanguageModal(); }); }
    hideLanguageModal() { const modalElement = document.getElementById('languageModal'); if (modalElement) { modalElement.remove(); } }
    updateLanguageSelector() { const selector = document.getElementById('languageSelector'); if (selector) { selector.value = this.currentLang; } }
    setHtmlLangAttribute() { document.documentElement.setAttribute('lang', this.currentLang); }
    changeLanguage() { const selector = document.getElementById('languageSelector'); if (selector) { this.setLang(selector.value); } }
}

/**
 * @class HeaderManager
 * @description Gestiona el comportamiento dinámico del header (ej. efecto al hacer scroll).
 */
class HeaderManager {
    constructor(navbarSelector, scrolledClass = 'navbar-scrolled', scrollThreshold = 50) { this.navbarSelector = navbarSelector; this.scrolledClass = scrolledClass; this.scrollThreshold = scrollThreshold; this.navbar = null; }
    init() { this.navbar = document.querySelector(this.navbarSelector); if (!this.navbar) { return; } this.initScrollEffect(); }
    initScrollEffect() { window.addEventListener('scroll', () => { if (window.scrollY > this.scrollThreshold) { this.navbar.classList.add(this.scrolledClass); } else { this.navbar.classList.remove(this.scrolledClass); } }); }
}

/**
 * @class DonationModal
 * @description Gestiona la lógica interna del modal de donación (selección de monto, etc.).
 */
class DonationModal {
    constructor(modalElement) { this.modalElement = modalElement; this.amountButtons = null; this.customAmountInput = null; this.errorMessage = null; this.confirmButton = null; this.MIN_DONATION = 5; }
    init() { this.amountButtons = this.modalElement.querySelectorAll('.amount'); this.customAmountInput = this.modalElement.querySelector('#modalDonationInput'); this.errorMessage = this.modalElement.querySelector('#modal-amount-error'); this.confirmButton = this.modalElement.querySelector('#confirm-amount-button'); this.amountButtons.forEach(button => { button.addEventListener('click', () => { this.amountButtons.forEach(btn => btn.classList.remove('active')); button.classList.add('active'); this.customAmountInput.value = button.dataset.value; this.hideError(); }); }); this.customAmountInput.addEventListener('input', () => { this.amountButtons.forEach(btn => btn.classList.remove('active')); const amount = parseFloat(this.customAmountInput.value); if (this.customAmountInput.value && amount > 0 && amount < this.MIN_DONATION) { this.showError(`El importe mínimo para donar es de $${this.MIN_DONATION}. ¡Gracias por tu apoyo!`); } else { this.hideError(); } }); } 
    getAmount() { const amount = parseFloat(this.customAmountInput.value); if (this.customAmountInput.value && amount >= this.MIN_DONATION) { return amount; } this.showError(`Por favor, ingresa un monto igual o mayor a $${this.MIN_DONATION}.`); return null; } 
    showError(message) { this.errorMessage.textContent = message; this.errorMessage.classList.remove('d-none'); } 
    hideError() { this.errorMessage.classList.add('d-none'); } 
}

/**
 * @class PaymentModal
 * @description Gestiona la lógica interna del modal de pago.
 */
class PaymentModal {
    constructor(modalElement) { this.modalElement = modalElement; this.summaryAmountEl = null; this.backButton = null; this.progressSteps = null; this.paymentMethodBtns = null; } 
    init() { this.summaryAmountEl = this.modalElement.querySelector('#summary-amount'); this.backButton = this.modalElement.querySelector('#back-to-donation-modal'); this.progressSteps = this.modalElement.querySelectorAll('.progress-step'); this.paymentMethodBtns = this.modalElement.querySelectorAll('.nav-link'); this.updateProgress(2); this.paymentMethodBtns.forEach(button => { button.addEventListener('click', () => {}); }); } 
    setSummaryAmount(amount) { if (this.summaryAmountEl) { this.summaryAmountEl.textContent = `$${amount.toFixed(2)}`; } } 
    updateProgress(stepNumber) { this.progressSteps.forEach((step, index) => { const currentStep = index + 1; if (currentStep < stepNumber) { step.classList.add('completed', 'active'); } else if (currentStep === stepNumber) { step.classList.remove('completed'); step.classList.add('active'); } else { step.classList.remove('completed', 'active'); } }); } 
}

/**
 * @class ModalOrchestrator
 * @description Carga el HTML de los modales y gestiona el flujo de navegación entre ellos.
 */
class ModalOrchestrator {
    constructor(basePath) { this.basePath = basePath; this.donationModalContainer = null; this.paymentModalContainer = null; } 
    async init() { this.donationModalContainer = document.getElementById('donation-modal-container'); this.paymentModalContainer = document.getElementById('payment-modal-container'); if (!this.donationModalContainer || !this.paymentModalContainer) { return; } await this.loadModalHTML(); this.setupModals(); } 
    async loadModalHTML() { const donationURL = `${this.basePath}components/donation-modal.html`; const paymentURL = `${this.basePath}components/payment-modal.html`; try { const [donationResponse, paymentResponse] = await Promise.all([fetch(donationURL), fetch(paymentURL)]); if (!donationResponse.ok || !paymentResponse.ok) { throw new Error('Failed to fetch modal HTML'); } const [donationHTML, paymentHTML] = await Promise.all([donationResponse.text(), paymentResponse.text()]); this.donationModalContainer.innerHTML = donationHTML; this.paymentModalContainer.innerHTML = paymentHTML; } catch (error) { console.error("Error loading modal HTML:", error); } } 
    setupModals() {
        // Este método configura los eventos que comunican los modales. 
        // BACKEND: El punto para enviar la donación a un servidor estaría aquí, 
        // después de validar el formulario de pago y antes de mostrar un mensaje de éxito.
        const donationModalEl = document.getElementById('donationModal'); const paymentModalEl = document.getElementById('paymentModal'); if (!donationModalEl || !paymentModalEl) return; const bsDonationModal = new bootstrap.Modal(donationModalEl); const bsPaymentModal = new bootstrap.Modal(paymentModalEl); const donationModal = new DonationModal(donationModalEl); donationModal.init(); const paymentModal = new PaymentModal(paymentModalEl); paymentModal.init(); donationModal.confirmButton.addEventListener('click', () => { const amount = donationModal.getAmount(); if (amount !== null) { paymentModal.setSummaryAmount(amount); donationModalEl.addEventListener('hidden.bs.modal', () => { bsPaymentModal.show(); }, { once: true }); bsDonationModal.hide(); } }); paymentModal.backButton.addEventListener('click', () => { paymentModalEl.addEventListener('hidden.bs.modal', () => { bsDonationModal.show(); }, { once: true }); bsPaymentModal.hide(); }); } 
}

/**
 * @class ChildCatalog
 * @description Gestiona la página del catálogo de niños, renderizando las tarjetas y manejando interacciones.
 */
class ChildCatalog {
    constructor() { this._featuredChildData = { name: "Alexander Juarez", image: "assets/img/Foto5.jpg", gender: "Masculino", age: 15, birthday: "22/11/2009", language: "Español", waitingDays: 365, country: "Guatemala", personality: "Alegre, curioso", interests: "Fútbol, dibujo", income: "120", siblings: "2 hermanos menores", living: "Madre y abuela", studies: "Sí, tercer grado", code: "NINO-2023-0875", walls: "Block y cemento", roof: "Lamina galvanizada", floor: "Cemento", water: "Tubería comunitaria", internet: "No", phone: "Sí, teléfono comunitario" }; this._childrenData = [{ name: "Jose Hernandez", image: "assets/img/Foto10.jpg", gender: "Masculino", age: 73, birthday: "05/03/1952", language: "Español", waitingDays: 280, country: "Guatemala", personality: "Tranquilo, trabajador", interests: "Agricultura, música", income: "150", siblings: "3 hermanos", living: "Esposa e hijos", studies: "No", code: "NINO-2023-1001", walls: "Adobe", roof: "Teja", floor: "Tierra", water: "Pozo", internet: "No", phone: "Sí" }, { name: "Juanita de Paz", image: "assets/img/Foto3.jpg", gender: "Femenino", age: 2, birthday: "12/08/2023", language: "Español", waitingDays: 47, country: "Guatemala", personality: "Juguetona, sonriente", interests: "Juegos, canciones", income: "80", siblings: "1 hermano", living: "Padres", studies: "No", code: "NINO-2023-1002", walls: "Madera", roof: "Lámina", floor: "Tierra", water: "Río", internet: "No", phone: "No" }, { name: "Conrado Capulo", image: "assets/img/Foto14.jpg", gender: "Masculino", age: 67, birthday: "20/06/1957", language: "Español", waitingDays: 61, country: "Guatemala", personality: "Sabio, paciente", interests: "Lectura, naturaleza", income: "200", siblings: "4 hermanos", living: "Solo", studies: "Primaria completa", code: "NINO-2023-1003", walls: "Block", roof: "Concreto", floor: "Cemento", water: "Tubería", internet: "No", phone: "Sí" }, { name: "Roberto Chavez", image: "assets/img/Foto15.jpg", gender: "Masculino", age: 3, birthday: "10/12/2021", language: "Español", waitingDays: 120, country: "Guatemala", personality: "Curioso, activo", interests: "Correr, animales", income: "100", siblings: "2 hermanas", living: "Madre", studies: "No", code: "NINO-2023-1004", walls: "Cartón", roof: "Plástico", floor: "Tierra", water: "Comunitario", internet: "No", phone: "No" }, { name: "Hilda Cante", image: "assets/img/Foto16.jpg", gender: "Femenino", age: 20, birthday: "01/05/2005", language: "Español", waitingDays: 240, country: "Guatemala", personality: "Responsable, amable", interests: "Costura, cocina", income: "180", siblings: "Sin hermanos", living: "Padres", studies: "Secundaria", code: "NINO-2023-1005", walls: "Ladrillo", roof: "Lámina", floor: "Cemento", water: "Pila", internet: "No", phone: "Sí" }, { name: "Yuri Esperanza", image: "assets/img/Foto12.png", gender: "Femenino", age: 15, birthday: "05/09/2010", language: "Español", waitingDays: 180, country: "Guatemala", personality: "Creativa, estudiosa", interests: "Pintura, lectura", income: "130", siblings: "1 hermano", living: "Abuelos", studies: "Secundaria", code: "NINO-2023-1006", walls: "Adobe", roof: "Teja", floor: "Tierra", water: "Pozo", internet: "No", phone: "Comunitario" }, { name: "Maria Fernanda", image: "assets/img/Foto1.jpg", gender: "Femenino", age: 7, birthday: "22/02/2018", language: "Español", waitingDays: 300, country: "Guatemala", personality: "Alegre, sociable", interests: "Muñecas, baile", income: "90", siblings: "3 hermanos", living: "Padres", studies: "Primaria", code: "NINO-2023-1007", walls: "Madera", roof: "Paja", floor: "Tierra", water: "Río", internet: "No", phone: "No" }, { name: "Sebastián José", image: "assets/img/Foto18.jpg", gender: "Masculino", age: 5, birthday: "18/07/2020", language: "Español", waitingDays: 90, country: "Guatemala", personality: "Energético, divertido", interests: "Fútbol, colores", income: "110", siblings: "1 hermana", living: "Madre", studies: "Kinder", code: "NINO-2023-1008", walls: "Block", roof: "Lámina", floor: "Cemento", water: "Tubería", internet: "No", phone: "Sí" }, { name: "Daniela Sophia", image: "assets/img/Foto19.jpg", gender: "Femenino", age: 9, birthday: "03/11/2016", language: "Español", waitingDays: 150, country: "Guatemala", personality: "Inteligente, amable", interests: "Matemáticas, juegos", income: "140", siblings: "2 hermanos", living: "Padres", studies: "Primaria", code: "NINO-2023-1009", walls: "Ladrillo", roof: "Concreto", floor: "Cemento", water: "Pila", internet: "No", phone: "Sí" }]; this._currentMainChild = { ...this._featuredChildData }; this.container = null; this.featuredSponsorBtn = null; } 
    init() { this.container = document.getElementById('children-cards-container'); if (!this.container) { return; } this.featuredSponsorBtn = document.getElementById('featured-sponsor-btn'); this._renderCards(); this._attachAllEventListeners(); } 
    _renderCards() { let cardsHtml = ''; this._childrenData.forEach((child, index) => { cardsHtml += this._createChildCard(child, index); }); this.container.innerHTML = cardsHtml; } 
    _attachAllEventListeners() { this._attachCardClickEvents(); this._attachSponsorButtonEvents(); this._assignDetailEvents(); this._attachFeaturedSponsorButtonEvent(); } 
    _createChildCard(child, index) { const cardHtml = `
            <div class="child-card card h-100 shadow-sm" data-child='${JSON.stringify(child).replace(/'/g, "&#39;")}'>
                <div class="card-img-container">
                    <img src="${child.image}" class="card-img-top child-image" alt="Imagen de ${child.name}">
                    <div class="details-overlay">
                        <div class="details-content">
                            <h4>Detalles de ${child.name}</h4>
                            <p><strong>Género:</strong> ${child.gender}</p>
                            <p><strong>Edad:</strong> ${child.age}</p>
                            <p><strong>Cumpleaños:</strong> ${child.birthday}</p>
                            <p><strong>Idioma:</strong> ${child.language}</p>
                            <p><strong>Días de Espera:</strong> ${child.waitingDays}</p>
                            <p><strong>País:</strong> ${child.country}</p>
                        </div>
                    </div>
                    <div class="toggle-details rounded-pill">+ Detalles</div>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${child.name}</h5>
                    <p class="card-text text-muted mb-2">${child.country}</p>
                    <div class="d-grid gap-2">
                        <button class="btn btn-green w-100 rounded-pill fw-bold sponsor-btn" data-child-id="${index}">APADRINAR AHORA</button>
                    </div>
                </div>
            </div>
        `; return `<div class="col-12 col-md-6 col-lg-4 mb-4">${cardHtml}</div>`; } 
    _updateMainChild(child) { document.getElementById('main-child-img').src = child.image; document.getElementById('main-child-name').textContent = child.name; document.getElementById('main-child-name2').textContent = child.name; document.getElementById('main-child-age').textContent = child.age; document.getElementById('main-child-birthday').textContent = child.birthday; document.getElementById('main-child-country').textContent = child.country; document.getElementById('main-child-name-desc').textContent = child.name; document.getElementById('main-child-desc').textContent = `Con un ingreso familiar promedio de $${child.income || '597'}.00 al mes en su comunidad, las familias como la de ${child.name} apenas ganan lo suficiente para cubrir las necesidades básicas.`; const mainSection = document.querySelector('.py-5'); mainSection.classList.add('highlight-animation'); setTimeout(() => { mainSection.classList.remove('highlight-animation'); }, 1000); } 
    _swapMainChild(newMainChild) { const oldMainChild = { ...this._currentMainChild }; this._currentMainChild = { ...newMainChild }; this._updateMainChild(this._currentMainChild); const childCards = document.querySelectorAll('.child-card'); childCards.forEach(card => { const childData = JSON.parse(card.getAttribute('data-child').replace(/&#39;/g, "'")); if (childData.name === newMainChild.name) { const newCardHtml = this._createChildCard(oldMainChild); const colElement = card.closest('.col-12'); colElement.outerHTML = newCardHtml; this._attachAllEventListeners(); } }); } 
    _assignDetailEvents() { const detailsButtons = document.querySelectorAll('.toggle-details'); detailsButtons.forEach(button => { button.addEventListener('click', (e) => { e.stopPropagation(); const card = button.closest('.child-card'); const overlay = card.querySelector('.details-overlay'); overlay.classList.toggle('show'); button.textContent = overlay.classList.contains('show') ? '- Detalles' : '+ Detalles'; }); }); } 
    _attachCardClickEvents() { const childCards = document.querySelectorAll('.child-card'); childCards.forEach(card => { card.addEventListener('click', (e) => { if (e.target.closest('.sponsor-btn') || e.target.closest('.toggle-details')) { return; } const childData = JSON.parse(card.getAttribute('data-child').replace(/&#39;/g, "'")); this._swapMainChild(childData); }); }); } 
    _attachSponsorButtonEvents() {
        // BACKEND: Este es un punto de integración. 
        // Al hacer clic en "Apadrinar", se debería enviar el ID del niño al backend para iniciar el proceso.
        const sponsorButtons = document.querySelectorAll('.sponsor-btn'); sponsorButtons.forEach(button => { button.addEventListener('click', (e) => { e.stopPropagation(); const childId = button.getAttribute('data-child-id'); alert(`Redirigiendo a página de apadrinamiento para el niño con ID: ${childId}`); }); }); } 
    _attachFeaturedSponsorButtonEvent() { if (this.featuredSponsorBtn) { this.featuredSponsorBtn.addEventListener('click', () => { localStorage.setItem('childProfileData', JSON.stringify(this._currentMainChild)); window.location.href = 'perfil-nino.html'; }); } } 
}

/**
 * @class ChildProfilePage
 * @description Gestiona la página de perfil de un niño, cargando datos desde localStorage.
 */
class ChildProfilePage {
    constructor() { this.profileImage = null; } 
    init() { this.profileImage = document.getElementById('profile-child-image'); if (!this.profileImage) { return; } this._loadProfileData(); this._attachEventListeners(); } 
    _loadProfileData() {
        // Esta función es de interés para el frontend. Carga datos que fueron guardados en la página anterior.
        // No interactúa con el backend.
        const childDataJSON = localStorage.getItem('childProfileData'); if (!childDataJSON) { console.warn('No se encontraron datos del perfil del niño en localStorage.'); return; } try { const childData = JSON.parse(childDataJSON); if (this.profileImage && childData.image) { this.profileImage.src = childData.image; } const dataMap = { 'profile-child-name': childData.name, 'profile-child-desc': `Con tu apoyo, ${childData.name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.`, 'profile-child-age': childData.age, 'profile-child-birthday': childData.birthday, 'profile-child-waiting': childData.waitingDays, 'about-child-name': childData.name, 'about-child-age': `${childData.age} años`, 'about-child-gender': childData.gender, 'about-child-personality': childData.personality, 'about-child-interests': childData.interests, 'about-child-income': `$${childData.income}/mes`, 'about-child-siblings': childData.siblings, 'about-child-living': childData.living, 'about-child-language': childData.language, 'about-child-studies': childData.studies, 'about-child-code': childData.code, 'home-child-walls': childData.walls, 'home-child-roof': childData.roof, 'home-child-floor': childData.floor, 'home-child-water': childData.water, 'home-child-internet': childData.internet, 'home-child-phone': childData.phone }; for (const [id, value] of Object.entries(dataMap)) { this._setTextContent(id, value); } localStorage.removeItem('childProfileData'); if (typeof i18n !== 'undefined' && i18n.applyTranslations) { setTimeout(() => { i18n.applyTranslations(i18n.currentLang); }, 100); } } catch (error) { console.error('Error al parsear o mostrar los datos del niño:', error); } } 
    _attachEventListeners() { const shareButton = document.querySelector('.btn-outline-secondary.rounded-circle'); if (shareButton) { shareButton.addEventListener('click', () => { alert('Función de compartir perfil. Aquí puedes implementar la funcionalidad para compartir en redes sociales.'); }); } const sponsorButtons = document.querySelectorAll('.btn-donate'); sponsorButtons.forEach(button => { button.addEventListener('click', () => { alert('Redirigiendo al formulario de apadrinamiento. Reemplaza esta alerta con tu lógica de redirección.'); }); }); } 
    _setTextContent(elementId, value, defaultValue = 'No especificado') { const element = document.getElementById(elementId); if (element) { element.textContent = value || defaultValue; } } 
}

/**
 * @class SparkleWhatsAppButton
 * @description Gestiona el botón flotante de WhatsApp con efecto de destellos.
 */
class SparkleWhatsAppButton {
    constructor(phoneNumber, basePath, message = "Hola, me gustaría obtener más información.") {
        this.phoneNumber = phoneNumber;
        this.basePath = basePath;
        this.message = message;
        this.whatsappLink = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
        this._createButton();
    }

    _createButton() {
        const buttonContainer = document.createElement('a');
        buttonContainer.href = this.whatsappLink;
        buttonContainer.target = '_blank';
        buttonContainer.rel = 'noopener noreferrer';
        buttonContainer.className = 'sparkle-whatsapp-button';
        buttonContainer.setAttribute('aria-label', 'Contactar por WhatsApp');

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';

        // Usar un icono de Bootstrap en lugar de una imagen
        const whatsappIcon = document.createElement('i');
        whatsappIcon.className = 'bi bi-whatsapp';
        whatsappIcon.style.fontSize = '35px'; // Ajustar tamaño del icono

        const sparklesContainer = document.createElement('div');
        sparklesContainer.className = 'sparkles';

        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparklesContainer.appendChild(sparkle);
        }

        iconWrapper.appendChild(whatsappIcon);
        buttonContainer.appendChild(iconWrapper);
        buttonContainer.appendChild(sparklesContainer);

        document.body.appendChild(buttonContainer);
    }
}

// ===================================================================================
// CLASE PRINCIPAL DE LA APLICACIÓN
// ===================================================================================

/**
 * @class App
 * @description Orquestador principal de la aplicación. Inicializa todos los módulos y componentes.
 */
class App {
    constructor() {
        // Determina la ruta base para encontrar componentes. Vital para que `fetch` funcione
        // tanto en la raíz del sitio (index.html) como en subcarpetas (pages/pagina.html).
        this.basePath = window.location.pathname.includes('/pages/') ? '../' : './';
    }

    /**
     * Punto de entrada principal. Se ejecuta después de que el DOM esté cargado.
     * La secuencia de inicialización es crítica para evitar errores.
     */
    async init() {
        // 1. Carga componentes base (header/footer). Es asíncrono.
        // Usamos `await` para asegurar que el DOM se modifica ANTES de continuar.
        await this.loadSharedComponents();
        
        // 2. Ahora que el header/footer existen en el DOM, inicializamos los demás módulos.
        this.initI18n();
        this.initHeader();
        this.initModals();
        this.initCatalog();
        this.initProfilePage();
        this.initWhatsAppButton();
    }

    /**
     * Utilidad para cargar HTML externo en un elemento del DOM.
     * @param {string} url - Ruta al archivo .html del componente.
     * @param {string} elementId - ID del elemento donde se inyectará el HTML.
     */
    async loadComponent(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error al cargar componente: ${url} (Status: ${response.status})`);
            }
            const data = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                // Este log es útil si un ID de contenedor es incorrecto en el HTML.
                console.warn(`Elemento con ID '${elementId}' no encontrado para cargar componente.`);
            }
        } catch (error) {
            // Este error es CRÍTICO. Si aparece, es probable que el servidor local no esté funcionando
            // o las rutas a los archivos de componentes son incorrectas.
            console.error("FALLO CRÍTICO AL CARGAR COMPONENTES:", error);
            alert("Error: No se pudieron cargar los componentes base de la página. El sitio puede no funcionar correctamente.");
        }
    }

    /** Carga Header y Footer en sus contenedores respectivos. */
    loadSharedComponents() {
        const headerPromise = this.loadComponent(`${this.basePath}components/header.html`, 'site-header');
        const footerPromise = this.loadComponent(`${this.basePath}components/footer.html`, 'site-footer');
        return Promise.all([headerPromise, footerPromise]);
    }

    /** Inicializa el gestor de traducciones. */
    initI18n() {
        const i18n = new I18nManager();
        window.i18n = i18n; // Se asigna a `window` para compatibilidad con `onchange` en el HTML.
        i18n.init();
    }

    /** Inicializa los efectos y lógica del header. */
    initHeader() {
        const header = new HeaderManager('#mainNavbar');
        header.init();
    }

    /** Inicializa el gestor de modales. */
    initModals() {
        const modalOrchestrator = new ModalOrchestrator(this.basePath);
        modalOrchestrator.init();
    }

    /** Inicializa la página de catálogo (si los elementos necesarios existen). */
    initCatalog() {
        const catalog = new ChildCatalog();
        catalog.init();
    }

    /** Inicializa la página de perfil de niño (si los elementos necesarios existen). */
    initProfilePage() {
        const profilePage = new ChildProfilePage();
        profilePage.init();
    }

    /** Inicializa el botón flotante de WhatsApp. */
    initWhatsAppButton() {
        // BACKEND: El número de teléfono debería venir de una configuración o variable de entorno.
        const phoneNumber = "50212345678"; // Reemplazar con el número de teléfono real.
        const whatsAppButton = new SparkleWhatsAppButton(phoneNumber, this.basePath);
    }
}

// ===================================================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
