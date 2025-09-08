// Datos del niño destacado (actualizado para consistencia)
const featuredChildData = {
    name: "Alexander Juarez",
    image: "assets/img/Foto5.jpg",  
    gender: "Masculino",
    age: 15,
    birthday: "22/11/2009",
    language: "Español",
    waitingDays: 365,
    country: "Guatemala",
    personality: "Alegre, curioso",
    interests: "Fútbol, dibujo",
    income: "120",
    siblings: "2 hermanos menores",
    living: "Madre y abuela",
    studies: "Sí, tercer grado",
    code: "NINO-2023-0875",
    walls: "Block y cemento",
    roof: "Lamina galvanizada",
    floor: "Cemento",
    water: "Tubería comunitaria",
    internet: "No",
    phone: "Sí, teléfono comunitario"
};

// Datos de ejemplo para los niños con campos adicionales
const childrenData = [
    { name: "Jose Hernandez", image: "assets/img/Foto10.jpg", gender: "Masculino", age: 73, birthday: "05/03/1952", language: "Español", waitingDays: 280, country: "Guatemala", personality: "Tranquilo, trabajador", interests: "Agricultura, música", income: "150", siblings: "3 hermanos", living: "Esposa e hijos", studies: "No", code: "NINO-2023-1001", walls: "Adobe", roof: "Teja", floor: "Tierra", water: "Pozo", internet: "No", phone: "Sí" },
    { name: "Juanita de Paz", image: "assets/img/Foto3.jpg", gender: "Femenino", age: 2, birthday: "12/08/2023", language: "Español", waitingDays: 47, country: "Guatemala", personality: "Juguetona, sonriente", interests: "Juegos, canciones", income: "80", siblings: "1 hermano", living: "Padres", studies: "No", code: "NINO-2023-1002", walls: "Madera", roof: "Lámina", floor: "Tierra", water: "Río", internet: "No", phone: "No" },
    { name: "Conrado Capulo", image: "assets/img/Foto14.jpg", gender: "Masculino", age: 67, birthday: "20/06/1957", language: "Español", waitingDays: 61, country: "Guatemala", personality: "Sabio, paciente", interests: "Lectura, naturaleza", income: "200", siblings: "4 hermanos", living: "Solo", studies: "Primaria completa", code: "NINO-2023-1003", walls: "Block", roof: "Concreto", floor: "Cemento", water: "Tubería", internet: "No", phone: "Sí" },
    { name: "Roberto Chavez", image: "assets/img/Foto15.jpg", gender: "Masculino", age: 3, birthday: "10/12/2021", language: "Español", waitingDays: 120, country: "Guatemala", personality: "Curioso, activo", interests: "Correr, animales", income: "100", siblings: "2 hermanas", living: "Madre", studies: "No", code: "NINO-2023-1004", walls: "Cartón", roof: "Plástico", floor: "Tierra", water: "Comunitario", internet: "No", phone: "No" },
    { name: "Hilda Cante", image: "assets/img/Foto16.jpg", gender: "Femenino", age: 20, birthday: "01/05/2005", language: "Español", waitingDays: 240, country: "Guatemala", personality: "Responsable, amable", interests: "Costura, cocina", income: "180", siblings: "Sin hermanos", living: "Padres", studies: "Secundaria", code: "NINO-2023-1005", walls: "Ladrillo", roof: "Lámina", floor: "Cemento", water: "Pila", internet: "No", phone: "Sí" },
    { name: "Yuri Esperanza", image: "assets/img/Foto12.png", gender: "Femenino", age: 15, birthday: "05/09/2010", language: "Español", waitingDays: 180, country: "Guatemala", personality: "Creativa, estudiosa", interests: "Pintura, lectura", income: "130", siblings: "1 hermano", living: "Abuelos", studies: "Secundaria", code: "NINO-2023-1006", walls: "Adobe", roof: "Teja", floor: "Tierra", water: "Pozo", internet: "No", phone: "Comunitario" },
    { name: "Maria Fernanda", image: "assets/img/Foto1.jpg", gender: "Femenino", age: 7, birthday: "22/02/2018", language: "Español", waitingDays: 300, country: "Guatemala", personality: "Alegre, sociable", interests: "Muñecas, baile", income: "90", siblings: "3 hermanos", living: "Padres", studies: "Primaria", code: "NINO-2023-1007", walls: "Madera", roof: "Paja", floor: "Tierra", water: "Río", internet: "No", phone: "No" },
    { name: "Sebastián José", image: "assets/img/Foto18.jpg", gender: "Masculino", age: 5, birthday: "18/07/2020", language: "Español", waitingDays: 90, country: "Guatemala", personality: "Energético, divertido", interests: "Fútbol, colores", income: "110", siblings: "1 hermana", living: "Madre", studies: "Kinder", code: "NINO-2023-1008", walls: "Block", roof: "Lámina", floor: "Cemento", water: "Tubería", internet: "No", phone: "Sí" },
    { name: "Daniela Sophia", image: "assets/img/Foto19.jpg", gender: "Femenino", age: 9, birthday: "03/11/2016", language: "Español", waitingDays: 150, country: "Guatemala", personality: "Inteligente, amable", interests: "Matemáticas, juegos", income: "140", siblings: "2 hermanos", living: "Padres", studies: "Primaria", code: "NINO-2023-1009", walls: "Ladrillo", roof: "Concreto", floor: "Cemento", water: "Pila", internet: "No", phone: "Sí" }
];

// Variable para almacenar el niño principal actual (usando featuredChildData como base)
let currentMainChild = {...featuredChildData};

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
    document.getElementById('main-child-name-desc').textContent = child.name;
    document.getElementById('main-child-desc').textContent = `Con un ingreso familiar promedio de $${child.income || '597'}.00 al mes en su comunidad, las familias como la de ${child.name} apenas ganan lo suficiente para cubrir las necesidades básicas.`;

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

    // Redirección a perfil de niño con datos - BOTÓN DESTACADO (CORREGIDO)
    const featuredSponsorBtn = document.getElementById('featured-sponsor-btn');
    if (featuredSponsorBtn) {
        featuredSponsorBtn.addEventListener('click', function() {
            // Guardar en localStorage para usar en la página de perfil
            // Usar currentMainChild en lugar de featuredChildData
            localStorage.setItem('childProfileData', JSON.stringify(currentMainChild));
            
            // Redirigir a la página de perfil
            window.location.href = 'perfil-nino.html';
        });
    }
});





