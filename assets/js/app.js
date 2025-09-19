/**
 * @file app.js
 * @description Punto de entrada principal de la aplicación. Inicializa los módulos y clases.
 */
import I18nManager from './classes/I18nManager.js';
import HeaderManager from './classes/HeaderManager.js';
import ModalOrchestrator from './classes/ModalOrchestrator.js';
import ChildCatalog from './classes/ChildCatalog.js';
import ChildProfilePage from './classes/ChildProfilePage.js';

/**
 * @class App
 * @description Clase principal que orquesta la aplicación.
 */
class App {
    /**
     * @constructor
     */
    constructor() {
        this.basePath = window.location.pathname.includes('/pages/') ? '../' : './';
    }

    /**
     * Inicializa todos los componentes y gestores de la aplicación de forma secuencial y segura.
     */
    async init() {
        // Primero, esperamos a que los componentes base (header/footer) se carguen.
        await this.loadSharedComponents();
        
        // Una vez que la estructura base del DOM está lista, inicializamos el resto de módulos.
        this.initI18n();
        this.initHeader();
        this.initModals();
        this.initCatalog();
        this.initProfilePage();
    }

    /**
     * Carga y renderiza un componente HTML en un elemento específico.
     * @param {string} url - La URL del componente HTML.
     * @param {string} elementId - El ID del elemento donde se inyectará el HTML.
     * @returns {Promise<void>}
     */
    async loadComponent(url, elementId) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching component: ${url}`);
            }
            const data = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Carga los componentes compartidos como el header y el footer.
     * @returns {Promise<void[]>}
     */
    loadSharedComponents() {
        const headerPromise = this.loadComponent(`${this.basePath}components/header.html`, 'site-header');
        const footerPromise = this.loadComponent(`${this.basePath}components/footer.html`, 'site-footer');
        return Promise.all([headerPromise, footerPromise]);
    }

    /**
     * Inicializa el gestor de internacionalización.
     */
    initI18n() {
        const i18n = new I18nManager();
        window.i18n = i18n; // For backward compatibility
        i18n.init();
    }

    /**
     * Inicializa el gestor del header.
     */
    initHeader() {
        const header = new HeaderManager('#mainNavbar');
        header.initScrollEffect();
    }

    /**
     * Inicializa el orquestador de modales.
     */
    initModals() {
        const modalOrchestrator = new ModalOrchestrator(this.basePath);
        modalOrchestrator.init();
    }

    /**
     * Inicializa la lógica del catálogo de niños.
     */
    initCatalog() {
        const catalog = new ChildCatalog();
        catalog.init();
    }

    /**
     * Inicializa la lógica de la página de perfil de niño.
     */
    initProfilePage() {
        const profilePage = new ChildProfilePage();
        profilePage.init();
    }
}

// Inicializar la aplicación cuando el DOM esté listo.
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
