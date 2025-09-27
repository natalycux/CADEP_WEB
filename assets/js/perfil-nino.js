// Datos aleatorios para demostración
document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del niño desde localStorage
    const childDataJSON = localStorage.getItem('childProfileData');
    if (childDataJSON) {
        const childData = JSON.parse(childDataJSON);
        
        // Actualizar todos los elementos con los datos del niño
        document.getElementById('profile-child-name').textContent = childData.name;
        document.getElementById('profile-child-desc').textContent = `Con tu apoyo, ${childData.name} puede tener acceso a educación, alimentación adecuada y oportunidades para un futuro mejor.`;
        
        document.getElementById('profile-child-age').textContent = childData.age;
        document.getElementById('profile-child-birthday').textContent = childData.birthday;
        document.getElementById('profile-child-waiting').textContent = childData.waitingDays;
        
        document.getElementById('about-child-name').textContent = childData.name;
        document.getElementById('about-child-age').textContent = `${childData.age} años`;
        document.getElementById('about-child-gender').textContent = childData.gender;
        document.getElementById('about-child-personality').textContent = childData.personality;
        document.getElementById('about-child-interests').textContent = childData.interests;
        document.getElementById('about-child-income').textContent = `$${childData.income}/mes`;
        document.getElementById('about-child-siblings').textContent = childData.siblings;
        document.getElementById('about-child-living').textContent = childData.living;
        document.getElementById('about-child-language').textContent = childData.language;
        document.getElementById('about-child-studies').textContent = childData.studies;
        document.getElementById('about-child-code').textContent = childData.code;
        
        document.getElementById('home-child-walls').textContent = childData.walls;
        document.getElementById('home-child-roof').textContent = childData.roof;
        document.getElementById('home-child-floor').textContent = childData.floor;
        document.getElementById('home-child-water').textContent = childData.water;
        document.getElementById('home-child-internet').textContent = childData.internet;
        document.getElementById('home-child-phone').textContent = childData.phone;
        
        document.getElementById('profile-child-image').src = childData.image;
        
        // Limpiar localStorage después de usar los datos
        localStorage.removeItem('childProfileData');
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