const input= document.querySelector("input");
const agregarBoton= document.querySelector(".agregar-boton");
const ul= document.querySelector("ul");
const vacio= document.querySelector(".vacio");
const eliminarTodasBoton = document.querySelector(".eliminar-todas-boton");

agregarBoton.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value.trim(); 

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(agregarEliminarBtn());
        ul.appendChild(li);

        input.value = "";
        vacio.style.display = "none";
        eliminarTodasBoton.style.display = "block"; 
    }
});

eliminarTodasBoton.addEventListener("click", () => {
    ul.innerHTML = "";
    vacio.style.display = "block";  
    eliminarTodasBoton.style.display = "none";  
});

function agregarEliminarBtn() {
    const eliminarBoton = document.createElement('button');
    eliminarBoton.textContent = " X ";
    eliminarBoton.className = "eliminar-boton";

    eliminarBoton.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            vacio.style.display = "block";
            eliminarTodasBoton.style.display = "none"; 
        }
    });
    return eliminarBoton;
}