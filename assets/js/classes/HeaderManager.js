/**
 * @file HeaderManager.js
 */
export default class HeaderManager {
    constructor(navbarSelector, scrolledClass = 'navbar-scrolled', scrollThreshold = 50) {
        this.navbarSelector = navbarSelector;
        this.scrolledClass = scrolledClass;
        this.scrollThreshold = scrollThreshold;
        this.navbar = null;
    }

    init() {
        this.navbar = document.querySelector(this.navbarSelector);
        if (!this.navbar) {
            return;
        }
        this.initScrollEffect();
    }

    initScrollEffect() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.scrollThreshold) {
                this.navbar.classList.add(this.scrolledClass);
            } else {
                this.navbar.classList.remove(this.scrolledClass);
            }
        });
    }
}