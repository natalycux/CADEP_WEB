// Datos aleatorios para demostración
document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del niño desde localStorage
    const childDataJSON = localStorage.getItem('childProfileData');
    if (childDataJSON) {
        try {
            const childData = JSON.parse(childDataJSON);
            
            // Función auxiliar para establecer texto con valor por defecto
            function setTextContent(elementId, value, defaultValue = 'No especificado') {
                const element = document.getElementById(elementId);
                if (element) {
                    element.textContent = value || defaultValue;
                }
            }
            
            // Actualizar todos los elementos con los datos del niño
            setTextContent('profile-child-name', childData.name);
            setTextContent('profile-child-desc', `Con tu apoyo, ${childData.name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.`);
            
            setTextContent('profile-child-age', childData.age);
            setTextContent('profile-child-birthday', childData.birthday);
            setTextContent('profile-child-waiting', childData.waitingDays);
            
            setTextContent('about-child-name', childData.name);
            setTextContent('about-child-age', `${childData.age} años`);
            setTextContent('about-child-gender', childData.gender);
            setTextContent('about-child-personality', childData.personality);
            setTextContent('about-child-interests', childData.interests);
            setTextContent('about-child-income', `$${childData.income}/mes`);
            setTextContent('about-child-siblings', childData.siblings);
            setTextContent('about-child-living', childData.living);
            setTextContent('about-child-language', childData.language);
            setTextContent('about-child-studies', childData.studies);
            setTextContent('about-child-code', childData.code);
            
            setTextContent('home-child-walls', childData.walls);
            setTextContent('home-child-roof', childData.roof);
            setTextContent('home-child-floor', childData.floor);
            setTextContent('home-child-water', childData.water);
            setTextContent('home-child-internet', childData.internet);
            setTextContent('home-child-phone', childData.phone);
            
            // Actualizar imagen de perfil
            const profileImage = document.getElementById('profile-child-image');
            if (profileImage && childData.image) {
                profileImage.src = childData.image;
            }
            
            // Limpiar localStorage después de usar los datos
            localStorage.removeItem('childProfileData');
        } catch (error) {
            console.error('Error al parsear los datos del niño:', error);
        }
    }
    
    // Generar días aleatorios de espera (si no se cargaron datos)
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length >= 3 && !childDataJSON) {
        const randomDays = Math.floor(Math.random() * 200) + 50;
        statElements[2].textContent = randomDays;
    }
    
    // Aquí puedes agregar más funcionalidades JavaScript según sea necesario
    
    // Ejemplo: Funcionalidad para el botón de compartir
    const shareButton = document.querySelector('.btn-outline-secondary.rounded-circle');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            alert('Función de compartir perfil. Aquí puedes implementar la funcionalidad para compartir en redes sociales.');
        });
    }
    
    // Ejemplo: Funcionalidad para los botones de apadrinar
    const sponsorButtons = document.querySelectorAll('.btn-donate');
    sponsorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes redirigir al formulario de apadrinamiento
            alert('Redirigiendo al formulario de apadrinamiento. Reemplaza esta alerta con tu lógica de redirección.');
            // window.location.href = 'formulario-apadrinamiento.html';
        });
    });
});

// Funciones adicionales que puedas necesitar
function actualizarDiasEspera(dias) {
    const diasElement = document.querySelector('.stat-number:last-child');
    if (diasElement) {
        diasElement.textContent = dias;
    }
}

function mostrarInformacionAdicional() {
    // Aquí puedes implementar la lógica para mostrar información adicional
    console.log('Mostrando información adicional del niño');
}