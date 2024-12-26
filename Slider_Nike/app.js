// Obtención de elementos HTML principales del carrusel
let prevBtn = document.getElementById('prev'); // Botón para retroceder
let nextBtn = document.getElementById('next'); // Botón para avanzar
let carousel = document.querySelector('.carousel'); // Contenedor del carrusel
let items = carousel.querySelectorAll('.list .item'); // Todos los elementos (items) del carrusel
let indicator = carousel.querySelector('.indicators'); // Contenedor de indicadores
let dots = indicator.querySelectorAll('.indicators ul li'); // Puntos indicadores

// Variables para manejar el estado del carrusel
let active = 0; // Índice del elemento actualmente activo
let firstPosition = 0; // Índice del primer elemento
let lastPosition = items.length - 1; // Índice del último elemento
let autoPlay; // Variable para controlar el autoplay (reproducción automática)

// Función para iniciar la reproducción automática del carrusel
const startAutoPlay = () => {
    clearInterval(autoPlay); // Detener cualquier autoplay existente
    autoPlay = setInterval(() => {
        nextBtn.click(); // Simula un clic en el botón "siguiente"
    }, 5000); // Cambia de elemento cada 5 segundos
}
startAutoPlay(); // Inicia el autoplay al cargar la página

// Función para actualizar el estado del carrusel
const setSlider = () => {
    // Remueve la clase 'active' del elemento previamente activo
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');

    // Añade la clase 'active' al nuevo elemento activo
    items[active].classList.add('active');

    // Remueve la clase 'active' del punto indicador previamente activo
    let dotActiveOld = indicator.querySelector('.indicators ul li.active');
    if (dotActiveOld) dotActiveOld.classList.remove('active');

    // Añade la clase 'active' al punto indicador correspondiente al elemento activo
    dots[active].classList.add('active');

    // Actualiza el número mostrado en los indicadores (formato "01", "02", etc.)
    indicator.querySelector('.number').innerText = '0' + (active + 1);

    // Reinicia el autoplay después de una interacción manual
    startAutoPlay();
}
setSlider(); // Configura el estado inicial del carrusel

// Evento para avanzar al siguiente elemento del carrusel
nextBtn.onclick = () => {
    // Calcula el nuevo índice activo (vuelve al primer elemento si se pasa del último)
    active = active + 1 > lastPosition ? 0 : active + 1;

    // Actualiza una variable CSS (opcional para manejar animaciones)
    carousel.style.setProperty('--calculation', 1);

    // Actualiza el estado visual del carrusel
    setSlider();
}

// Evento para retroceder al elemento anterior del carrusel
prevBtn.onclick = () => {
    // Calcula el nuevo índice activo (vuelve al último elemento si se pasa del primero)
    active = active - 1 < firstPosition ? lastPosition : active - 1;

    // Actualiza una variable CSS (opcional para manejar animaciones)
    carousel.style.setProperty('--calculation', -1);

    // Actualiza el estado visual del carrusel
    setSlider();

    // Reinicia el autoplay después de la interacción manual
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}

// Evento para seleccionar un elemento del carrusel al hacer clic en un punto indicador
dots.forEach((item, position) => {
    item.onclick = () => {
        active = position; // Actualiza el índice activo al del punto clicado
        setSlider(); // Actualiza el estado visual del carrusel
    }
});
