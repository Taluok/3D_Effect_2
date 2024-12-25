// Obtén referencias a los elementos del DOM
let nextButton = document.getElementById('next'); // Botón "siguiente".
let prevButton = document.getElementById('prev'); // Botón "anterior".
let carousel = document.querySelector('.carousel'); // Contenedor principal del carrusel.
let listHTML = document.querySelector('.carousel .list'); // Lista de elementos deslizables dentro del carrusel.
let seeMoreButtons = document.querySelectorAll('.seeMore'); // Botones para mostrar más detalles.
let backButton = document.getElementById('back'); // Botón para regresar al carrusel principal.

// Agrega eventos de clic a los botones "siguiente" y "anterior"
nextButton.onclick = function() {
    showSlider('next'); // Llama a la función para manejar el deslizamiento hacia adelante.
}
prevButton.onclick = function() {
    showSlider('prev'); // Llama a la función para manejar el deslizamiento hacia atrás.
}

// Variable para evitar múltiples clics rápidos
let unAcceppClick;

// Función para manejar el desplazamiento del carrusel
const showSlider = (type) => {
    // Deshabilita los botones para evitar múltiples clics mientras se realiza la animación
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    // Limpia las clases existentes de animación
    carousel.classList.remove('next', 'prev');

    // Obtén los elementos actuales en la lista del carrusel
    let items = document.querySelectorAll('.carousel .list .item');

    // Si se hace clic en "siguiente"
    if (type === 'next') {
        listHTML.appendChild(items[0]); // Mueve el primer elemento al final de la lista.
        carousel.classList.add('next'); // Agrega la clase "next" para la animación.
    } 
    // Si se hace clic en "anterior"
    else {
        listHTML.prepend(items[items.length - 1]); // Mueve el último elemento al principio de la lista.
        carousel.classList.add('prev'); // Agrega la clase "prev" para la animación.
    }

    // Restablece los eventos de clic después de un tiempo
    clearTimeout(unAcceppClick); // Elimina cualquier temporizador previo.
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto'; // Habilita el botón "siguiente".
        prevButton.style.pointerEvents = 'auto'; // Habilita el botón "anterior".
    }, 2000); // Retraso de 2 segundos para evitar clics rápidos.
};

// Agrega eventos de clic a los botones "ver más detalles"
seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        // Limpia las clases de animación
        carousel.classList.remove('next', 'prev');

        // Agrega la clase "showDetail" para mostrar los detalles
        carousel.classList.add('showDetail');
    };
});

// Agrega un evento de clic al botón "regresar"
backButton.onclick = function() {
    // Quita la clase "showDetail" para regresar al estado original del carrusel
    carousel.classList.remove('showDetail');
};
