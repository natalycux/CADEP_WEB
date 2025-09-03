// Datos de ejemplo para los niños con campos adicionales
const childrenData = [
    { name: "Jose Hernandez", image: "assets/img/Foto10.jpg", gender: "Male", age: 73, birthday: "05/03/1952", language: "Español", waitingDays: 280, country: "Guatemala" },
    { name: "Juanita de Paz", image: "assets/img/Foto3.jpg", gender: "Female", age: 2, birthday: "12/08/2023", language: "Español", waitingDays: 47, country: "Guatemala" },
    { name: "Jeferson Ramirez", image: "assets/img/Foto2.jpg", gender: "Male", age: 6, birthday: "20/06/2019", language: "Español", waitingDays: 61, country: "Guatemala" },
    { name: "Thiago Fernandez", image: "assets/img/Foto13.png", gender: "Male", age: 10, birthday: "10/01/2015", language: "Español", waitingDays: 120, country: "Guatemala" },
    { name: "Carina Valdez", image: "assets/img/Foto12.png", gender: "Female", age: 15, birthday: "01/05/2010", language: "Español", waitingDays: 240, country: "Guatemala" },
    { name: "Yuri Esperanza", image: "https://placehold.co/400x500/6c757d/ffffff?text=Yuri", gender: "Female", age: 10, birthday: "15/09/2015", language: "Español", waitingDays: 180, country: "Guatemala" },
    { name: "Maria Fernanda", image: "https://placehold.co/400x500/fd7e14/ffffff?text=Maria", gender: "Female", age: 7, birthday: "22/02/2018", language: "Español", waitingDays: 300, country: "Guatemala" },
    { name: "Sebastián José", image: "https://placehold.co/400x500/6f42c1/ffffff?text=Sebastián", gender: "Male", age: 5, birthday: "18/07/2020", language: "Español", waitingDays: 90, country: "Guatemala" },
    { name: "Daniela Sophia", image: "https://placehold.co/400x500/20c997/ffffff?text=Daniela", gender: "Female", age: 9, birthday: "03/11/2016", language: "Español", waitingDays: 150, country: "Guatemala" }
];

// Variable para almacenar el niño principal actual
let currentMainChild = {
    name: "Alexander Juarez",
    image: "assets/img/Foto5.jpg",  
    gender: "Male",
    age: 15,
    birthday: "22/11/2018",
    language: "Español",
    waitingDays: 365,
    country: "Guatemala"
};

// Función para crear el HTML de una tarjeta de niño
function createChildCard(child, index) {
    const cardHtml = `
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
                <div class="toggle-details rounded-pill">
                    + Detalles
                </div>
            </div>
            <div class="card-body text-center">
                <h5 class="card-title fw-bold">${child.name}</h5>
                <p class="card-text text-muted mb-2">${child.country}</p>
                <div class="d-grid gap-2">
                    <button class="btn btn-green w-100 rounded-pill fw-bold sponsor-btn" data-child-id="${index}">APADRINAR AHORA</button>
                </div>
            </div>
        </div>
    `;
    return `<div class="col-12 col-md-6 col-lg-4 mb-4">${cardHtml}</div>`;
}

// Función para actualizar el niño principal
function updateMainChild(child) {
    document.getElementById('main-child-img').src = child.image;
    document.getElementById('main-child-name').textContent = child.name;
    document.getElementById('main-child-name2').textContent = child.name;
    document.getElementById('main-child-age').textContent = child.age;
    document.getElementById('main-child-birthday').textContent = child.birthday;
    document.getElementById('main-child-country').textContent = child.country;
    document.getElementById('main-child-desc').textContent = `Con un ingreso familiar promedio de $597.00 al mes en su comunidad, las familias como la de ${child.name} apenas ganan lo suficiente para cubrir las necesidades básicas.`;
    
    // Añadir animación de destacado
    const mainSection = document.querySelector('.py-5');
    mainSection.classList.add('highlight-animation');
    setTimeout(() => {
        mainSection.classList.remove('highlight-animation');
    }, 1000);
}

// Función para intercambiar el niño principal
function swapMainChild(newMainChild) {
    // Guardar el niño principal actual
    const oldMainChild = {...currentMainChild};
    
    // Actualizar el niño principal
    currentMainChild = {...newMainChild};
    updateMainChild(currentMainChild);
    
    // Encontrar y actualizar la tarjeta del niño que era principal
    const childCards = document.querySelectorAll('.child-card');
    childCards.forEach(card => {
        const childData = JSON.parse(card.getAttribute('data-child').replace(/&#39;/g, "'"));
        if (childData.name === newMainChild.name) {
            // Reemplazar con el niño que era principal
            const newCardHtml = createChildCard(oldMainChild);
            const colElement = card.closest('.col-12');
            colElement.outerHTML = newCardHtml;
            
            // Agregar el evento click a la nueva tarjeta
            const newCard = document.querySelector(`.child-card[data-child='${JSON.stringify(oldMainChild).replace(/'/g, "&#39;")}']`);
            if (newCard) {
                newCard.addEventListener('click', function() {
                    const childData = JSON.parse(this.getAttribute('data-child').replace(/&#39;/g, "'"));
                    swapMainChild(childData);
                });
            }
        }
    });
    
    // Reasignar eventos a los botones de detalles
    assignDetailEvents();
}

// Función para asignar eventos a los botones de detalles
function assignDetailEvents() {
    const detailsButtons = document.querySelectorAll('.toggle-details');
    detailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevenir que el evento se propague al card
            const card = button.closest('.child-card');
            const overlay = card.querySelector('.details-overlay');
            overlay.classList.toggle('show');
            
            if (overlay.classList.contains('show')) {
                button.textContent = '- Detalles';
            } else {
                button.textContent = '+ Detalles';
            }
        });
    });
}

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor donde se insertarán las tarjetas
    const container = document.getElementById('children-cards-container');

    // Verifica si el contenedor existe y si es así, genera las tarjetas
    if (container) {
        let cardsHtml = '';
        childrenData.forEach((child, index) => {
            cardsHtml += createChildCard(child, index);
        });
        container.innerHTML = cardsHtml;
        
        // Agregar evento click a cada imagen de niño
        const childImages = document.querySelectorAll('.child-image');
        childImages.forEach(image => {
            image.addEventListener('click', function(e) {
                const card = this.closest('.child-card');
                const childData = JSON.parse(card.getAttribute('data-child').replace(/&#39;/g, "'"));
                swapMainChild(childData);
            });
        });
        
        // Agregar evento click a cada tarjeta (pero no a los botones)
        const childCards = document.querySelectorAll('.child-card');
        childCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // No hacer nada si el clic fue en el botón de apadrinar
                if (!e.target.closest('.sponsor-btn')) {
                    const childData = JSON.parse(this.getAttribute('data-child').replace(/&#39;/g, "'"));
                    swapMainChild(childData);
                }
            });
        });
        
        // Agregar evento a los botones de apadrinar
        const sponsorButtons = document.querySelectorAll('.sponsor-btn');
        sponsorButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation(); // Evitar que el evento se propague a la tarjeta
                const childId = this.getAttribute('data-child-id');
                // Aquí va tu código para redirigir a la página de apadrinamiento
                alert(`Redirigiendo a página de apadrinamiento para el niño con ID: ${childId}`);
                // window.location.href = `apadrinar.html?id=${childId}`; // Ejemplo de redirección
            });
        });
        
        // Asignar eventos a los botones de detalles
        assignDetailEvents();
    } else {
        console.error("No se encontró el contenedor de tarjetas.");
    }
});