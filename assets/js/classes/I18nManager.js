/**
 * @file I18nManager.js
 * @class I18nManager
 * @description Gestiona la internacionalización (i18n) del sitio, permitiendo cambiar entre idiomas y aplicando las traducciones correspondientes.
 */
export default class I18nManager {
    /**
     * @description Contiene todas las traducciones para los idiomas soportados.
     */
    translations = {
        es: {
            // ... (mantén todas las traducciones existentes en español) ...
            
            // Nuevas traducciones para Pagina.html
            'sponsor_page_title': 'Vista de Apadrinamiento de Niños',
            'sponsor_title': 'Te presentamos a',
            'sponsor_description': 'Con un ingreso familiar promedio de $597.00 al mes en su comunidad, las familias como la de',
            'sponsor_description_2': 'apenas ganan lo suficiente para cubrir las necesidades básicas.',
            'sponsor_age': 'Edad:',
            'sponsor_birthday': 'Fecha de cumpleaños:',
            'sponsor_country': 'País:',
            'sponsor_impact': 'Solamente se requiere una persona para generar un cambio positivo y duradero en la vida de',
            'sponsor_impact_2': 'Tu donación mensual de $39 es invertida en la vida de algunos de los niños más vulnerables del mundo.',
            'sponsor_button': 'APADRINAR',
            'sponsor_find_title': 'Encuentra un niño que necesita ser apoyado!',
            'sponsor_filter': 'Buscar por: Waiting the longest',
            'sponsor_filter_option1': 'Waiting the longest',
            'sponsor_filter_option2': 'Edad',
            'sponsor_filter_option3': 'Primer Nombre',
            'sponsor_whatis_title': '¿Qué es el apadrinamiento de niños y jóvenes?',
            'sponsor_whatis_desc1': 'El apadrinamiento establece una conexión personal entre dos personas —un padrino con el deseo de ayudar y un niño con el deseo de superarse a pesar de su situación económica—.',
            'sponsor_whatis_desc2': 'Nuestro programa de apadrinamiento equipa a los niños y adolescentes con habilidades laborales y de vida esenciales para romper el círculo vicioso de la pobreza para siempre.',
            'sponsor_video_desc': 'opcional** un video de que es el padrinamiento y lo que eso ayuda',

            // Nuevas traducciones para perfil-nino.html
            'profile_page_title': 'Perfil de Niño - Apadrinamiento',
            'profile_child_name': 'Carlos Rodríguez',
            'profile_child_desc': 'Con tu apoyo, {name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.',
            'profile_sponsor_button': 'APADRINAR AHORA',
            'profile_share': 'Compartir',
            'profile_age': 'Años',
            'profile_birthday': 'Fecha de Nacimiento',
            'profile_days_waiting': 'Días de espera',
            'profile_find_more': 'Buscar más Niños',
            'profile_about_title': 'ACERCA DE MI Y MI FAMILIA',
            'profile_name': 'Nombre:',
            'profile_gender': 'Género:',
            'profile_personality': 'Personalidad:',
            'profile_interests': 'Intereses:',
            'profile_income': 'Ingreso familiar:',
            'profile_siblings': 'Hermanos:',
            'profile_living': 'Vive con:',
            'profile_language': 'Idioma:',
            'profile_studies': 'Estudia:',
            'profile_code': 'Código de apadrinamiento:',
            'profile_home_title': 'ACERCA DE MI HOGAR',
            'profile_walls': 'Paredes de la casa:',
            'profile_roof': 'Techería de la casa:',
            'profile_floor': 'Piso de la casa:',
            'profile_water': 'Fuente de agua:',
            'profile_internet': 'Acceso a internet:',
            'profile_phone': 'Acceso a línea telefónica:',
            'profile_context_title': 'CONTEXTO: POBREZA EN GUATEMALA',
            'profile_context_desc1': 'En Guatemala, el 59.3% de la población vive en situación de pobreza. En áreas rurales como la comunidad de Carlos, este porcentaje aumenta al 75%. Las familias con niños pequeños son las más afectadas, con limitado acceso a educación, salud y nutrición adecuada.',
            'profile_context_desc2': 'La pobreza afecta especialmente a niños con discapacidades o problemas de salud, quienes enfrentan barreras adicionales para su desarrollo integral.',
            'profile_context_img_desc': 'Imagen que muestra las condiciones de vida en comunidades vulnerables de Guatemala',
            'profile_impact_title': 'IMPACTO DE TU APOYO',
            'profile_impact_intro': 'Tu donación mensual de $39 proveerá a Carlos:',
            'profile_impact_list1': 'Acceso a educación y materiales escolares',
            'profile_impact_list2': 'Alimentación balanceada y suplementos nutricionales',
            'profile_impact_list3': 'Atención médica y dental regular',
            'profile_impact_list4': 'Programas de desarrollo comunitario',
            'profile_impact_list5': 'Apoyo psicosocial y actividades recreativas',
            'profile_impact_desc': 'Con tu apoyo, Carlos podrá romper el ciclo de pobreza y construir un futuro lleno de oportunidades.',
            'profile_impact_img_desc': 'Imagen de un niño participando en programas de apadrinamiento',
            'profile_usage_title': '¿CÓMO SE UTILIZAN TUS DONATIVOS?',
            'profile_usage_education': '40% Educación',
            'profile_usage_food': '25% Alimentación',
            'profile_usage_health': '20% Salud',
            'profile_usage_admin': '15% Administración',
            'profile_how_title': 'Así es como funciona el apadrinamiento',
            'profile_how_what_title': '¿Qué recibe el niño?',
            'profile_how_what_desc': 'El niño recibe apoyo integral que incluye educación, alimentación balanceada, atención médica regular, y participación en programas de desarrollo comunitario que le brindan las herramientas necesarias para superarse.',
            'profile_how_sponsor_title': '¿Qué recibe como padrino/madrina?',
            'profile_how_sponsor_desc': 'Como padrino, recibirás actualizaciones periódicas sobre el progreso del niño, cartas de agradecimiento, la oportunidad de comunicarte con él/ella, y reportes detallados del impacto de tu donación en su comunidad.'
        },
        en: {
            // ... (mantén todas las traducciones existentes en inglés) ...
            
            // Nuevas traducciones para Pagina.html
            'sponsor_page_title': 'Child Sponsorship View',
            'sponsor_title': 'We present to you',
            'sponsor_description': 'With an average family income of $597.00 per month in their community, families like',
            'sponsor_description_2': 'barely earn enough to cover basic needs.',
            'sponsor_age': 'Age:',
            'sponsor_birthday': 'Birthday:',
            'sponsor_country': 'Country:',
            'sponsor_impact': 'It only takes one person to generate a positive and lasting change in the life of',
            'sponsor_impact_2': 'Your monthly donation of $39 is invested in the lives of some of the world\'s most vulnerable children.',
            'sponsor_button': 'SPONSOR',
            'sponsor_find_title': 'Find a child who needs support!',
            'sponsor_filter': 'Search by: Waiting the longest',
            'sponsor_filter_option1': 'Waiting the longest',
            'sponsor_filter_option2': 'Age',
            'sponsor_filter_option3': 'First Name',
            'sponsor_whatis_title': 'What is child and youth sponsorship?',
            'sponsor_whatis_desc1': 'Sponsorship establishes a personal connection between two people - a sponsor with the desire to help and a child with the desire to overcome despite their economic situation.',
            'sponsor_whatis_desc2': 'Our sponsorship program equips children and adolescents with essential work and life skills to break the vicious cycle of poverty forever.',
            'sponsor_video_desc': 'optional** a video about what sponsorship is and how it helps',

            // Nuevas traducciones para perfil-nino.html
            // NOTA: Eliminamos 'profile_child_name' para evitar que sobrescriba el nombre específico
            'profile_child_desc': 'With your support, {name} can have access to education, proper nutrition and opportunities for a better future.',
            'profile_sponsor_button': 'SPONSOR NOW',
            'profile_share': 'Share',
            'profile_age': 'Years',
            'profile_birthday': 'Birth Date',
            'profile_days_waiting': 'Days waiting',
            'profile_find_more': 'Find more Children',
            'profile_about_title': 'ABOUT ME AND MY FAMILY',
            'profile_name': 'Name:',
            'profile_gender': 'Gender:',
            'profile_personality': 'Personality:',
            'profile_interests': 'Interests:',
            'profile_income': 'Family income:',
            'profile_siblings': 'Siblings:',
            'profile_living': 'Lives with:',
            'profile_language': 'Language:',
            'profile_studies': 'Studies:',
            'profile_code': 'Sponsorship code:',
            'profile_home_title': 'ABOUT MY HOME',
            'profile_walls': 'House walls:',
            'profile_roof': 'House roofing:',
            'profile_floor': 'House floor:',
            'profile_water': 'Water source:',
            'profile_internet': 'Internet access:',
            'profile_phone': 'Telephone access:',
            'profile_context_title': 'CONTEXT: POVERTY IN GUATEMALA',
            'profile_context_desc1': 'In Guatemala, 59.3% of the population lives in poverty. In rural areas like Carlos\' community, this percentage increases to 75%. Families with young children are the most affected, with limited access to education, health and adequate nutrition.',
            'profile_context_desc2': 'Poverty especially affects children with disabilities or health problems, who face additional barriers to their comprehensive development.',
            'profile_context_img_desc': 'Image showing living conditions in vulnerable communities of Guatemala',
            'profile_impact_title': 'IMPACT OF YOUR SUPPORT',
            'profile_impact_intro': 'Your monthly donation of $39 will provide Carlos with:',
            'profile_impact_list1': 'Access to education and school materials',
            'profile_impact_list2': 'Balanced nutrition and nutritional supplements',
            'profile_impact_list3': 'Regular medical and dental care',
            'profile_impact_list4': 'Community development programs',
            'profile_impact_list5': 'Psychosocial support and recreational activities',
            'profile_impact_desc': 'With your support, Carlos will be able to break the cycle of poverty and build a future full of opportunities.',
            'profile_impact_img_desc': 'Image of a child participating in sponsorship programs',
            'profile_usage_title': 'HOW ARE YOUR DONATIONS USED?',
            'profile_usage_education': '40% Education',
            'profile_usage_food': '25% Food',
            'profile_usage_health': '20% Health',
            'profile_usage_admin': '15% Administration',
            'profile_how_title': 'This is how sponsorship works',
            'profile_how_what_title': 'What does the child receive?',
            'profile_how_what_desc': 'The child receives comprehensive support that includes education, balanced nutrition, regular medical care, and participation in community development programs that provide the necessary tools to succeed.',
            'profile_how_sponsor_title': 'What do you receive as a sponsor?',
            'profile_how_sponsor_desc': 'As a sponsor, you will receive periodic updates on the child\'s progress, thank you letters, the opportunity to communicate with him/her, and detailed reports on the impact of your donation on their community.'
        }
    };

    /**
     * @constructor
     */
    constructor() {
        this.currentLang = this.getSavedLang() || 'es';
    }

    /**
     * Inicializa el sistema de i18n.
     * @returns {void}
     */
    init() {
        this.applyTranslations(this.currentLang);
        this.updateLanguageSelector();
        this.setHtmlLangAttribute();
        
        if (!this.getSavedLang() && this.isIndexPage()) {
            setTimeout(() => {
                this.showLanguageModal();
            }, 1000);
        }
    }

    /**
     * Verifica si la página actual es la página de inicio.
     * @returns {boolean} - True si es la página de inicio.
     */
    isIndexPage() {
        return window.location.pathname.endsWith('index.html') || 
               window.location.pathname.endsWith('/');
    }

    /**
     * Obtiene el idioma guardado en localStorage.
     * @returns {string|null} - El código del idioma o null.
     */
    getSavedLang() {
        return localStorage.getItem('site_lang');
    }

    /**
     * Establece y guarda el idioma seleccionado.
     * @param {string} lang - El código del idioma (ej. 'es', 'en').
     * @returns {void}
     */
    setLang(lang) {
        if (this.translations[lang]) {
            localStorage.setItem('site_lang', lang);
            this.currentLang = lang;
            this.applyTranslations(lang);
            this.updateLanguageSelector();
            this.setHtmlLangAttribute();
            this.hideLanguageModal();
        }
    }

    /**
     * Aplica las traducciones al DOM.
     * @param {string} lang - El código del idioma a aplicar.
     * @returns {void}
     */
    applyTranslations(lang) {
        const childSpecificData = {};
        const childDataSelectors = [
            '#profile-child-name', '#about-child-name', 
            '#profile-child-age', '#about-child-age',
            '#profile-child-birthday', '#profile-child-waiting',
            '#about-child-gender', '#about-child-personality',
            '#about-child-interests', '#about-child-income',
            '#about-child-siblings', '#about-child-living',
            '#about-child-language', '#about-child-studies',
            '#about-child-code', '#home-child-walls',
            '#home-child-roof', '#home-child-floor',
            '#home-child-water', '#home-child-internet',
            '#home-child-phone'
        ];
        
        childDataSelectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                childSpecificData[selector] = element.textContent;
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang][key]) {
                let translation = this.translations[lang][key];
                
                if (key === 'profile_child_desc' && document.getElementById('profile-child-name')) {
                    const childName = document.getElementById('profile-child-name').textContent;
                    translation = translation.replace('{name}', childName);
                }
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    element.value = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        Object.keys(childSpecificData).forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = childSpecificData[selector];
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrConfig = element.getAttribute('data-i18n-attr');
            const attrPairs = attrConfig.split(';');
            
            attrPairs.forEach(pair => {
                const [attr, key] = pair.split(':');
                if (this.translations[lang][key]) {
                    element.setAttribute(attr, this.translations[lang][key]);
                }
            });
        });

        const pageTitle = document.querySelector('title');
        if (pageTitle && this.translations[lang]['site_title']) {
            pageTitle.textContent = this.translations[lang]['site_title'];
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && this.translations[lang]['site_description']) {
            metaDescription.setAttribute('content', this.translations[lang]['site_description']);
        }
    }

    /**
     * Muestra el modal de selección de idioma.
     * @returns {void}
     */
    showLanguageModal() {
        if (document.getElementById('languageModal')) {
            return;
        }
        
        const modalHTML = "" +
            "<div class=\"modal fade\" id=\"languageModal\" tabindex=\"-1\" aria-labelledby=\"languageModalLabel\" aria-hidden=\"true\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\">" +
                "<div class=\"modal-dialog modal-dialog-centered\">
                    <div class=\"modal-content\">
                        <div class=\"modal-header\">
                            <h5 class=\"modal-title\" id=\"languageModalLabel\" data-i18n=\"language_modal_title\">¿Quieres continuar en Ingles o español?</h5>
                        </div>
                        <div class=\"modal-body text-center\">
                            <p data-i18n=\"language_modal_title\">¿Quieres continuar en Ingles o español?</p>
                            <div class=\"d-flex justify-content-center gap-3 mt-4\">
                                <button type=\"button\" class=\"btn btn-primary\" id=\"btn-lang-en\" data-i18n=\"language_btn_english\">Ingles</button>
                                <button type=\"button\" class=\"btn btn-secondary\" id=\"btn-lang-es\" data-i18n=\"language_btn_spanish\">español</button>
                            </div>
                        </div>
                    </div>
                </div>" +
            "</div>";
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        this.applyTranslations(this.currentLang);
        
        document.getElementById('btn-lang-en')?.addEventListener('click', () => this.setLang('en'));
        document.getElementById('btn-lang-es')?.addEventListener('click', () => this.setLang('es'));
        
        const languageModal = new bootstrap.Modal(document.getElementById('languageModal'));
        languageModal.show();
        
        document.getElementById('languageModal').addEventListener('hidden.bs.modal', () => {
            this.hideLanguageModal();
        });
    }

    /**
     * Oculta y elimina el modal de selección de idioma del DOM.
     * @returns {void}
     */
    hideLanguageModal() {
        const modalElement = document.getElementById('languageModal');
        if (modalElement) {
            modalElement.remove();
        }
    }

    /**
     * Actualiza el valor del selector de idioma en la UI.
     * @returns {void}
     */
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = this.currentLang;
        }
    }

    /**
     * Establece el atributo 'lang' en la etiqueta <html>.
     * @returns {void}
     */
    setHtmlLangAttribute() {
        document.documentElement.setAttribute('lang', this.currentLang);
    }

    /**
     * Cambia el idioma basado en la selección del usuario en el dropdown.
     * @returns {void}
     */
    changeLanguage() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            this.setLang(selector.value);
        }
    }
}
