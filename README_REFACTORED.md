# README - Arquitectura JavaScript Refactorizada a POO

Este documento describe la nueva arquitectura orientada a objetos del frontend del proyecto, diseñada para mejorar la modularidad, mantenibilidad y escalabilidad.

---

## 1. Arquitectura General

El proyecto ha sido migrado de múltiples scripts funcionales a una arquitectura basada en clases y módulos de ES6.

- **Punto de Entrada Único:** El archivo `assets/js/app.js` es ahora el único punto de entrada de la aplicación. Se carga en los HTML como un módulo (`<script type="module">`).
- **Directorio de Clases:** Toda la lógica de negocio está encapsulada en clases que se encuentran en `assets/js/classes/`.
- **Clase Orquestadora `App`:** La clase `App` (dent 색깔n `app.js`) se encarga de inicializar todos los módulos y gestores necesarios para que la aplicación funcione.

---

## 2. Diagrama de Clases

Esta es una representación de cómo se relacionan las clases principales:

```
[App]
  |
  |-- initializes --> [I18nManager]         (Gestiona traducciones)
  |-- initializes --> [HeaderManager]       (Gestiona efectos del header)
  |-- initializes --> [ModalOrchestrator]
  |                   | (Carga y gestiona el flujo de modales)
  |                   |-- crea --> [DonationModal]
  |                   |-- crea --> [PaymentModal]
  |
  |-- initializes --> [ChildCatalog]        (Gestiona la pág. del catálogo)
  |-- initializes --> [ChildProfilePage]    (Gestiona la pág. de perfil de niño)
```

---

## 3. Descripción de Clases

#### `App`
- **Archivo:** `assets/js/app.js`
- **Responsabilidad:** Es el corazón de la aplicación. Su método `init()` se llama al cargar el DOM y se encarga de instanciar todas las demás clases. También gestiona la carga de componentes HTML compartidos como el `header` y el `footer`.

#### `I18nManager`
- **Archivo:** `assets/js/classes/I18nManager.js`
- **Responsabilidad:** Gestiona todo lo relacionado con la internacionalización (i18n). Contiene las traducciones y los métodos para cambiar de idioma y aplicar los textos al DOM.

#### `HeaderManager`
- **Archivo:** `assets/js/classes/HeaderManager.js`
- **Responsabilidad:** Controla los comportamientos dinámicos del header, como el efecto de encogimiento al hacer scroll.

#### `ModalOrchestrator`
- **Archivo:** `assets/js/classes/ModalOrchestrator.js`
- **Responsabilidad:** Orquesta todo el flujo de los modales. Carga su HTML, inicializa las instancias de Bootstrap y gestiona la transición entre el modal de donación y el de pago.

#### `DonationModal` y `PaymentModal`
- **Archivos:** `.../classes/DonationModal.js`, `.../classes/PaymentModal.js`
- **Responsabilidad:** Gestionan la lógica *interna* de sus respectivos modales. `DonationModal` se ocupa de la selección y validación del monto, mientras que `PaymentModal` se ocupa de la selección del método de pago y la visualización del resumen.

#### `ChildCatalog`
- **Archivo:** `assets/js/classes/ChildCatalog.js`
- **Responsabilidad:** Controla toda la funcionalidad de la página de apadrinamiento (`Pagina.html`). Renderiza la cuadrícula de niños, gestiona los datos y maneja las interacciones como el intercambio del niño destacado.

#### `ChildProfilePage`
- **Archivo:** `assets/js/classes/ChildProfilePage.js`
- **Responsabilidad:** Controla la página de perfil de un niño (`perfil-nino.html`). Lee los datos del niño desde `localStorage` y los inyecta en los elementos correspondientes del DOM.

---

## 4. Mantenimiento y Extensión

La nueva estructura facilita la modificación y adición de funcionalidades.

- **Para modificar una funcionalidad existente:**
  1. Identifica qué clase es responsable de esa funcionalidad (ej. para un cambio en el flujo de donación, mira `ModalOrchestrator` o `DonationModal`).
  2. Ve al archivo correspondiente en `assets/js/classes/` y realiza los cambios allí. La lógica está encapsulada y es más fácil de seguir.

- **Para añadir una nueva funcionalidad (ej. una nueva galería de imágenes interactiva):**
  1. Crea una nueva clase, por ejemplo, `ImageGallery.js` en la carpeta `classes`.
  2. Escribe toda la lógica de tu nueva galería dentro de esa clase.
  3. Importa tu nueva clase en `app.js`: `import ImageGallery from './classes/ImageGallery.js';`
  4. En la clase `App`, añade un método `initImageGallery()`.
  5. Dentro de ese método, crea una instancia de tu clase: `const gallery = new ImageGallery(); gallery.init();`.
  6. Llama a `this.initImageGallery()` desde el método `init()` de la clase `App`.

Este enfoque mantiene el código organizado y desacoplado, asegurando que el proyecto pueda crecer de manera ordenada.
