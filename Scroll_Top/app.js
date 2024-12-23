// Selecciona el elemento con el ID 'toTop'
let toTop = document.getElementById('toTop');

// Inicialmente oculta el botón 'toTop' estableciendo su estilo display a 'none'
toTop.style.display = 'none';

// Agrega un evento que se dispara cuando se detecta un desplazamiento en la ventana
window.addEventListener('scroll', () => {
    // Comprueba si el desplazamiento vertical (scrollY) es mayor a 500 píxeles
    if (this.scrollY > 500) {
        // Si se supera la distancia de 500 píxeles, muestra el botón estableciendo display a 'block'
        toTop.style.display = 'block';
    } else {
        // Si el desplazamiento es menor o igual a 500 píxeles, oculta el botón estableciendo display a 'none'
        toTop.style.display = 'none';
    }
});

// Define una acción al hacer clic en el botón 'toTop'
toTop.onclick = function() {
    // Desplaza la ventana hacia la parte superior (top: 0) con un efecto de desplazamiento suave (behavior: 'smooth')
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
