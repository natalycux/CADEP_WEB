// Datos de ejemplo para los niños con campos adicionales
const childrenData = [
    { name: "Nestor Andrés", image: "https://placehold.co/400x500/007bff/ffffff?text=Nestor", gender: "Male", age: 11, birthday: "05/03/2014", language: "Español", waitingDays: 280, country: "Ecuador" },
    { name: "Joany Marbelle", image: "https://placehold.co/400x500/dc3545/ffffff?text=Joany", gender: "Female", age: 2, birthday: "12/08/2023", language: "Español", waitingDays: 47, country: "Guatemala" },
    { name: "Ramses", image: "https://placehold.co/400x500/28a745/ffffff?text=Ramses", gender: "Male", age: 11, birthday: "20/06/2014", language: "Español", waitingDays: 61, country: "Mexico" },
    { name: "Thiago Andres", image: "https://placehold.co/400x500/17a2b8/ffffff?text=Thiago", gender: "Male", age: 8, birthday: "10/01/2017", language: "Español", waitingDays: 120, country: "Argentina" },
    { name: "Deivis Gabriel", image: "https://placehold.co/400x500/ffc107/000000?text=Deivis", gender: "Male", age: 10, birthday: "25/04/2015", language: "Español", waitingDays: 95, country: "Colombia" },
    { name: "Mateo Everardo", image: "https://placehold.co/400x500/6c757d/ffffff?text=Mateo", gender: "Male", age: 9, birthday: "15/09/2016", language: "Español", waitingDays: 78, country: "Perú" }
];

// Función para crear una tarjeta de niño
function createChildCard(child) {
    const cardHtml = `
        <div class="col">
            <div class="card child-card h-100">
                <!-- Nuevo contenedor para la imagen y los detalles, con posición relativa -->
                <div class="card-img-container">
                    <!-- Capa de detalles que se mostrará al hacer clic -->
                    <div class="details-overlay" data-child-id="${child.name}">
                        <h6 class="fw-bold mb-3 text-center">Más Detalles</h6>
                        <p class="mb-0"><strong>Sexo:</strong> ${child.gender === 'Male' ? 'Masculino' : 'Femenino'}</p>
                        <p class="mb-0"><strong>Cumpleaños:</strong> ${child.birthday}</p>
                        <p class="mb-0"><strong>Edad:</strong> ${child.age} años</p>
                        <p class="mb-0"><strong>Idioma:</strong> ${child.language}</p>
                        <button class="btn btn-outline-light rounded-pill mt-3 px-4 align-self-center">Leer más</button>
                    </div>

                    <!-- Aca debes poner la foto del niño -->
                    <!-- Imagen y botón de detalles -->
                    <img src="${child.image}" class="card-img-top" alt="Foto de ${child.name}">
                    <div class="toggle-details" data-child-id="${child.name}">+ Detalles</div>
                </div>

                <!-- Contenido principal de la tarjeta -->
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold mb-0">${child.name}</h5>
                    <p class="card-text text-muted small mt-1">
                        ${child.age} años | Espera ${child.waitingDays} días | ${child.country}
                    </p>
                    <div class="mt-auto pt-3">
                        <button class="btn btn-green w-100 rounded-pill">SPONSOR ${child.gender === 'Male' ? 'HIM' : 'HER'} NOW</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return cardHtml;
}

// Generar las tarjetas y agregar los listeners de eventos
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('children-cards-container');
    if (container) {
        let cardsHtml = '';
        childrenData.forEach(child => {
            cardsHtml += createChildCard(child);
        });
        container.innerHTML = cardsHtml;
    } else {
        console.error("No se encontró el contenedor de tarjetas.");
    }

    // Selecciona todos los botones de "+ Detalles"
    const detailsButtons = document.querySelectorAll('.toggle-details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Obtiene la tarjeta y la capa de detalles
            const card = button.closest('.child-card');
            const overlay = card.querySelector('.details-overlay');
            
            // Alterna la visibilidad de la capa
            overlay.classList.toggle('show');

            // Cambia el texto del botón basado en la visibilidad de la capa
            if (overlay.classList.contains('show')) {
                button.textContent = '- Detalles';
            } else {
                button.textContent = '+ Detalles';
            }
        });
    });

    // Agrega un listener para cerrar la capa al hacer clic en ella
    const overlays = document.querySelectorAll('.details-overlay');
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            
            // También cambia el texto del botón cuando se cierra el overlay
            const card = overlay.closest('.child-card');
            const button = card.querySelector('.toggle-details');
            button.textContent = '+ Detalles';
        });
    });
});