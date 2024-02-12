// eje 1
var x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "green"; 
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "blue"; 

}


//EL EJEMPLO 2 Y 3 SE MANTIENEN COMENTADOS YA QUE AL TENERLOS NORMAL NO PERMITE LA EJECUCIÓN CORRECTA DEL RESTO DE EJERCICIOS//

// ejemplo 2 
/*
document.getElementById('text1').addEventListener('focus', tomarfoco1);

function tomarfoco1() {
    document.getElementById('text1').style.color = '#ff0000';
}

function perderfoco1() {
    document.getElementById('text1').style.color = '#000000';
}
*/



// ejemplo 3 
/*
document.getElementById("name").addEventListener("focus", cambia);

function cambia() {
    document.getElementById("name").style.backgroundColor = "purple";
}
*/
