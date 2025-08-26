// Datos de ejemplo para los niños con campos adicionales
const childrenData = [
    { name: "Nestor Andrés", image: "https://placehold.co/400x500/007bff/ffffff?text=Nestor", gender: "Male", age: 11, birthday: "05/03/2014", language: "Español", waitingDays: 280, country: "Ecuador" },
    { name: "Joany Marbelle", image: "https://placehold.co/400x500/dc3545/ffffff?text=Joany", gender: "Female", age: 2, birthday: "12/08/2023", language: "Español", waitingDays: 47, country: "Guatemala" },
    { name: "Ramses", image: "https://placehold.co/400x500/28a745/ffffff?text=Ramses", gender: "Male", age: 11, birthday: "20/06/2014", language: "Español", waitingDays: 61, country: "Mexico" },
    { name: "Thiago Andres", image: "https://placehold.co/400x500/17a2b8/ffffff?text=Thiago", gender: "Male", age: 8, birthday: "10/01/2017", language: "Español", waitingDays: 120, country: "Argentina" },
    { name: "Deivis Gabriel", image: "https://placehold.co/400x500/ffc107/ffffff?text=Deivis", gender: "Male", age: 12, birthday: "01/05/2013", language: "Español", waitingDays: 240, country: "Perú" },
    { name: "Yuri Esperanza", image: "https://placehold.co/400x500/6c757d/ffffff?text=Yuri", gender: "Female", age: 10, birthday: "15/09/2015", language: "Español", waitingDays: 180, country: "Chile" },
    { name: "Maria Fernanda", image: "https://placehold.co/400x500/fd7e14/ffffff?text=Maria", gender: "Female", age: 7, birthday: "22/02/2018", language: "Español", waitingDays: 300, country: "Colombia" },
    { name: "Sebastián José", image: "https://placehold.co/400x500/6f42c1/ffffff?text=Sebastián", gender: "Male", age: 5, birthday: "18/07/2020", language: "Español", waitingDays: 90, country: "Venezuela" },
    { name: "Daniela Sophia", image: "https://placehold.co/400x500/20c997/ffffff?text=Daniela", gender: "Female", age: 9, birthday: "03/11/2016", language: "Español", waitingDays: 150, country: "Ecuador" }
];

// Función para crear el HTML de una tarjeta de niño
function createChildCard(child) {
    const cardHtml = `
        <div class="child-card card h-100 shadow-sm">
            <div class="card-img-container">
                <img src="${child.image}" class="card-img-top" alt="Imagen de ${child.name}">
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
                <div class="toggle-details rounded-pill" style="cursor: pointer;">
                    + Detalles
                </div>
            </div>
            <div class="card-body text-center">
                <h5 class="card-title fw-bold">${child.name}</h5>
                <p class="card-text text-muted mb-2">${child.country}</p>
                <div class="d-grid gap-2">
                    <button class="btn btn-green w-100 rounded-pill fw-bold">APADRINAR AHORA</button>
                </div>
            </div>
        </div>
    `;
    return `<div class="col-12 col-md-6 col-lg-4 mb-4">${cardHtml}</div>`;
}

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor donde se insertarán las tarjetas
    const container = document.getElementById('children-cards-container');

    // Verifica si el contenedor existe y si es así, genera las tarjetas
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
            // Obtiene la tarjeta y la capa de detalles más cercana
            const card = button.closest('.child-card');
            const overlay = card.querySelector('.details-overlay');

            // Alterna la clase 'show' para mostrar/ocultar la capa de detalles
            overlay.classList.toggle('show');

            // Cambia el texto del botón basado en la visibilidad de la capa
            if (overlay.classList.contains('show')) {
                button.textContent = '- Detalles';
            } else {
                button.textContent = '+ Detalles';
            }
        });
    });
});