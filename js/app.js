
const parrafo = document.querySelector("p");
const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener("click", () => {
    console.log("click");
    contador++;
    parrafo.textContent = contador; 
});


