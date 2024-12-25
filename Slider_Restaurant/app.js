// Selecciona los elementos necesarios del DOM
let circle = document.querySelector('.circle'); // Elemento con texto en forma de círculo.
let slider = document.querySelector('.slider'); // Contenedor principal del carrusel.
let list = document.querySelector('.list'); // Lista de elementos deslizables en el carrusel.
let prev = document.getElementById('prev'); // Botón de navegación hacia atrás.
let next = document.getElementById('next'); // Botón de navegación hacia adelante.
let items = document.querySelectorAll('.list .item'); // Todos los elementos individuales del carrusel.
let count = items.length; // Número total de elementos en el carrusel.
let active = 1; // Índice del elemento actualmente activo.
let leftTransform = 0; // Variable para manejar la posición de desplazamiento en píxeles.
let width_item = items[active].offsetWidth; // Ancho de un elemento del carrusel (utilizado para calcular el desplazamiento).

// Maneja el evento de clic en el botón "next" para avanzar al siguiente elemento
next.onclick = () => {
    // Si el índice activo es el último, se queda en el último; si no, avanza al siguiente.
    active = active >= count - 1 ? count - 1 : active + 1;
    runCarousel(); // Llama a la función que actualiza la posición y el estado del carrusel.
};

// Maneja el evento de clic en el botón "prev" para retroceder al elemento anterior
prev.onclick = () => {
    // Si el índice activo es el primero, se queda en el primero; si no, retrocede al anterior.
    active = active <= 0 ? active : active - 1;
    runCarousel(); // Llama a la función que actualiza la posición y el estado del carrusel.
};

// Función para actualizar el estado del carrusel
function runCarousel() {
    // Mostrar u ocultar los botones de navegación según el índice activo
    prev.style.display = (active == 0) ? 'none' : 'block'; // Oculta "prev" si estamos en el primer elemento.
    next.style.display = (active == count - 1) ? 'none' : 'block'; // Oculta "next" si estamos en el último elemento.

    // Encuentra el elemento que actualmente tiene la clase "active" y la elimina
    let old_active = document.querySelector('.item.active');
    if (old_active) old_active.classList.remove('active');

    // Agrega la clase "active" al nuevo elemento activo
    items[active].classList.add('active');

    // Calcula el desplazamiento de la lista basado en el índice activo
    leftTransform = width_item * (active - 1) * -1; // Desplazamiento hacia la izquierda en píxeles.
    list.style.transform = `translateX(${leftTransform}px)`; // Aplica el desplazamiento al estilo transform.
}

// Inicializa el carrusel llamando a la función una vez
runCarousel();

// --- Manejo del texto en forma de círculo ---

// Divide el texto dentro del elemento "circle" en un array de caracteres
let textCircle = circle.innerText.split(''); // Cada carácter se convierte en un elemento del array.
circle.innerText = ''; // Limpia el texto existente en el elemento "circle".

// Itera sobre cada carácter en el texto dividido
textCircle.forEach((value, key) => {
    // Crea un nuevo elemento <span> para cada carácter
    let newSpan = document.createElement("span");
    newSpan.innerText = value; // Asigna el carácter al span.

    // Calcula la rotación para cada carácter basado en su posición en el círculo
    let rotateThisSpan = (360 / textCircle.length) * (key + 1); // Distribuye uniformemente los caracteres en un círculo.
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg'); // Define una propiedad CSS personalizada para la rotación.

    // Añade el span al contenedor "circle"
    circle.appendChild(newSpan);
});
