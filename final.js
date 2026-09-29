// Contador inicial
let contador = 0;

// Seleccionar elementos HTML
const valorPantalla = document.querySelector("#valor");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnRestar = document.querySelector("#btn-restar");

// Función para actualizar el color
function actualizarColor() {

    if (contador > 0) {
        valorPantalla.style.color = "#16a34a";

    } else if (contador < 0) {
        valorPantalla.style.color = "#dc2626";

    } else {
        valorPantalla.style.color = "#0f172a";
    }
}

// Botón para sumar
btnIncrementar.addEventListener("click", () => {

    contador++;

    valorPantalla.textContent = contador;

    actualizarColor();
});

// Botón para restar
btnRestar.addEventListener("click", () => {

    contador--;

    valorPantalla.textContent = contador;

    actualizarColor();
});