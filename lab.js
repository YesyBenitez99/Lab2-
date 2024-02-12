// ejemplo 1
const nombre = document.querySelector(".nombre");
const btn = document.querySelector("button");

btn.addEventListener("Click", CambiaColor);

function CambiaColor(){
    nombre.style.color ="pink";
}

//ejemplo 2

const cli = document.querySelector("cli");
cli.addEventListener("Click", mifun);

function mifun(){
    alert('Se ha dado click al boton!');
}


// ejemplo 3
/*
document.getElementById("demo").addEventListener("click", myfuncion);

function myfuncion(){
    document.getElementById("demo").innerHTML = "Haz hecho click aqui!";
}
*/

