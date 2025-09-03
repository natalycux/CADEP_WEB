// Datos aleatorios para demostración
document.addEventListener('DOMContentLoaded', function() {
    // Generar días aleatorios de espera
    const randomDays = Math.floor(Math.random() * 200) + 50;
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length >= 3) {
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
    
    // Simular carga de datos desde una API (ejemplo)
    /*
    fetch('https://api.ejemplo.com/nino/123')
        .then(response => response.json())
        .then(data => {
            // Actualizar los datos en la página
            document.getElementById('nombre-nino').textContent = data.nombre;
            document.getElementById('edad-nino').textContent = data.edad;
            // ... más asignaciones de datos
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
    */
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