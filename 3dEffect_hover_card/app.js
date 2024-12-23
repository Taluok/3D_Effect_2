// Selecciona todos los elementos con la clase 'item' en el DOM
let items = document.querySelectorAll('.item');

// Muestra en la consola los elementos seleccionados (una NodeList de elementos)
console.log(items);

// Itera sobre cada elemento seleccionado
items.forEach(item => {
    
    // Agrega un evento 'mousemove' a cada elemento
    item.addEventListener('mousemove', (e) => {
        // Calcula la posición horizontal del cursor relativa al elemento
        let positionPx = e.x - item.getBoundingClientRect().left; 
        // Convierte la posición horizontal del cursor en un porcentaje (de 0 a 100)
        let positionX = (positionPx / item.offsetWidth) * 100;

        // Muestra en consola el porcentaje horizontal (positionX) y la posición en píxeles (positionPx)
        console.log(positionX, positionPx);

        // Calcula la posición vertical del cursor relativa al elemento
        let positionPy = e.y - item.getBoundingClientRect().top; 
        // Convierte la posición vertical del cursor en un porcentaje (de 0 a 100)
        let positionY = (positionPy / item.offsetHeight) * 100;

        // Actualiza las propiedades CSS personalizadas ('--rX' y '--rY') para realizar una rotación en 3D
        // --rX controla la rotación en el eje X (vertical) basado en la posición del cursor
        item.style.setProperty('--rX', (0.5) * (50 - positionY) + 'deg');
        // --rY controla la rotación en el eje Y (horizontal) basado en la posición del cursor
        item.style.setProperty('--rY', -(0.5) * (50 - positionX) + 'deg');
    });

    // Agrega un evento 'mouseout' para restablecer las rotaciones cuando el cursor abandona el elemento
    item.addEventListener('mouseout', () => {
        // Restablece las propiedades CSS personalizadas a 0 grados (sin rotación)
        item.style.setProperty('--rX', '0deg');
        item.style.setProperty('--rY', '0deg');
    });
});
