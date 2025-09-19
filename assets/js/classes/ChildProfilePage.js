/**
 * @file ChildProfilePage.js
 */
export default class ChildProfilePage {
    constructor() {
        this.profileImage = null;
    }

    init() {
        this.profileImage = document.getElementById('profile-child-image');
        if (!this.profileImage) {
            return;
        }
        this._loadProfileData();
        this._attachEventListeners();
    }

    _loadProfileData() {
        const childDataJSON = localStorage.getItem('childProfileData');
        if (!childDataJSON) {
            console.warn('No se encontraron datos del perfil del niño en localStorage.');
            return;
        }

        try {
            const childData = JSON.parse(childDataJSON);
            if (this.profileImage && childData.image) {
                this.profileImage.src = childData.image;
            }

            const dataMap = {
                'profile-child-name': childData.name,
                'profile-child-desc': `Con tu apoyo, ${childData.name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.`,
                'profile-child-age': childData.age,
                'profile-child-birthday': childData.birthday,
                'profile-child-waiting': childData.waitingDays,
                'about-child-name': childData.name,
                'about-child-age': `${childData.age} años`,
                'about-child-gender': childData.gender,
                'about-child-personality': childData.personality,
                'about-child-interests': childData.interests,
                'about-child-income': `$${childData.income}/mes`,
                'about-child-siblings': childData.siblings,
                'about-child-living': childData.living,
                'about-child-language': childData.language,
                'about-child-studies': childData.studies,
                'about-child-code': childData.code,
                'home-child-walls': childData.walls,
                'home-child-roof': childData.roof,
                'home-child-floor': childData.floor,
                'home-child-water': childData.water,
                'home-child-internet': childData.internet,
                'home-child-phone': childData.phone
            };

            for (const [id, value] of Object.entries(dataMap)) {
                this._setTextContent(id, value);
            }

            localStorage.removeItem('childProfileData');

            if (typeof i18n !== 'undefined' && i18n.applyTranslations) {
                setTimeout(() => {
                    i18n.applyTranslations(i18n.currentLang);
                }, 100);
            }

        } catch (error) {
            console.error('Error al parsear o mostrar los datos del niño:', error);
        }
    }

    _attachEventListeners() {
        const shareButton = document.querySelector('.btn-outline-secondary.rounded-circle');
        if (shareButton) {
            shareButton.addEventListener('click', () => {
                alert('Función de compartir perfil. Aquí puedes implementar la funcionalidad para compartir en redes sociales.');
            });
        }

        const sponsorButtons = document.querySelectorAll('.btn-donate');
        sponsorButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Redirigiendo al formulario de apadrinamiento. Reemplaza esta alerta con tu lógica de redirección.');
            });
        });
    }

    _setTextContent(elementId, value, defaultValue = 'No especificado') {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value || defaultValue;
        }
    }
}