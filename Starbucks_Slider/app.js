// Elementos del DOM necesarios para controlar el carrusel
let next = document.getElementById('next'); // Botón para avanzar al siguiente elemento
let prev = document.getElementById('prev'); // Botón para retroceder al elemento anterior
let carousel = document.querySelector('.carousel'); // Contenedor principal del carrusel
let items = document.querySelectorAll('.carousel .item'); // Todos los elementos del carrusel
let countItem = items.length; // Número total de elementos en el carrusel
let active = 1; // Índice del elemento actualmente activo
let other_1 = null; // Índice del primer elemento secundario (adyacente al activo)
let other_2 = null; // Índice del segundo elemento secundario (siguiente al `other_1`)

// Evento para avanzar al siguiente elemento del carrusel
next.onclick = () => {
    // Cambiar la clase principal del carrusel a 'next'
    carousel.classList.remove('prev'); // Elimina la clase de transición hacia atrás
    carousel.classList.add('next'); // Añade la clase de transición hacia adelante

    // Actualizar el índice del elemento activo al siguiente (o al inicio si es el último)
    active = active + 1 >= countItem ? 0 : active + 1;

    // Actualizar los índices de los elementos secundarios
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1; // Si es el primero, ir al último
    other_2 = active + 1 >= countItem ? 0 : active + 1; // Si es el último, ir al primero

    // Aplicar los cambios visuales al carrusel
    changeSlider();
}

// Evento para retroceder al elemento anterior del carrusel
prev.onclick = () => {
    // Cambiar la clase principal del carrusel a 'prev'
    carousel.classList.remove('next'); // Elimina la clase de transición hacia adelante
    carousel.classList.add('prev'); // Añade la clase de transición hacia atrás

    // Actualizar el índice del elemento activo al anterior (o al final si es el primero)
    active = active - 1 < 0 ? countItem - 1 : active - 1;

    // Actualizar los índices de los elementos secundarios
    other_1 = active + 1 >= countItem ? 0 : active + 1; // Si es el último, ir al primero
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1; // Si es el penúltimo, volver al inicio

    // Aplicar los cambios visuales al carrusel
    changeSlider();
}

// Función que actualiza las clases y animaciones del carrusel
const changeSlider = () => {
    // Quitar las clases de los elementos previamente activos y secundarios
    let itemOldActive = document.querySelector('.carousel .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    // Reiniciar las animaciones de las imágenes y leyendas
    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none'; // Detener animación de la imagen
        e.querySelector('.image figcaption').style.animation = 'none'; // Detener animación del texto
        void e.offsetWidth; // Forzar el reflujo del DOM para reiniciar las animaciones
        e.querySelector('.image img').style.animation = ''; // Reactivar animación de la imagen
        e.querySelector('.image figcaption').style.animation = ''; // Reactivar animación del texto
    });

    // Añadir las clases a los nuevos elementos activo y secundarios
    items[active].classList.add('active'); // Nuevo elemento activo
    items[other_1].classList.add('other_1'); // Primer elemento secundario
    items[other_2].classList.add('other_2'); // Segundo elemento secundario

    // Reiniciar el autoplay del carrusel
    clearInterval(autoPlay); // Detener el autoplay actual
    autoPlay = setInterval(() => {
        next.click(); // Simular clic en el botón "next"
    }, 5000); // Cambiar cada 5 segundos
}

// Autoplay: Avanzar automáticamente cada 5 segundos
let autoPlay = setInterval(() => {
    next.click(); // Simular clic en el botón "next"
}, 5000);
