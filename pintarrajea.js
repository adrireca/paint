"use strict";

let lienzo = document.querySelector(".lienzo");
let seleccionado = document.querySelector(".seleccionado");
let pintar = false;
let color;

//Genera una tabla al cargarse la página.
function generarTabla() {
  let tabla = document.createElement("table");
  tabla.setAttribute('class', 'tabla');

  let tblBody = document.createElement("tbody");

  for (var i = 0; i < 30; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < 50; j++) {
      let td = document.createElement("td");
      td.setAttribute('name', 'celdas');
      td.setAttribute('onclick', 'esPintar()');
      td.setAttribute('onmouseover', 'pintarCelda(this)');
      tr.appendChild(td);
    }
    tblBody.appendChild(tr);
  }
  tabla.appendChild(tblBody);

  lienzo.appendChild(tabla);
}


let selector = document.getElementById("selector");
selector.onclick = seleccionarColor;

let selectorBorrar = document.querySelector('.borrar');
selectorBorrar.onclick = seleccionarColorBorrar;


function seleccionarColorBorrar(e) {
  console.log(e.target.classList[0]);
  color = e.target.classList[0];

  if (color === 'blanco') {
    selectorBorrar.setAttribute('id', `celda${color}`);
  }
}

let rojo = document.querySelector('.rojo');
let amarillo = document.querySelector('.amarillo');
let verde = document.querySelector('.verde');
let azul = document.querySelector('.azul');
let lila = document.querySelector('.lila');
let rosa = document.querySelector('.rosa');

//selecciona el color a pintar.
function seleccionarColor(e) {
  color = e.target.classList.value;



  //Informa al usuario el nombre del color a pintar.
  if (color === 'rojo') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    rojo.innerHTML = 'Rojo';
  } else if (color === 'amarillo') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    amarillo.innerHTML = 'Amarillo';
  } else if (color === 'verde') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    verde.innerHTML = 'Verde';
  } else if (color === 'azul') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    azul.innerHTML = 'Azul';
  } else if (color === 'lila') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    lila.innerHTML = 'Lila';
  } else if (color === 'rosa') {
    selector.setAttribute('class', `celda${color}`);
    reset();
    rosa.innerHTML = 'Rosa';
  }

}

//Añade la clase css para el color elegido.
function pintarCelda(celda) {
  if (pintar) {
    celda.setAttribute('class', `celda${color}`);
  }
}

//Inicia o detiene pintar, según el click.
function esPintar() {
  if (pintar) {
    pintar = false;
  } else {
    pintar = true;
  }
}

//Resetea el lienzo.
let boton = document.querySelector('.reset');
boton.addEventListener('click', () => {
  let celdas = document.getElementsByName('celdas');
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].removeAttribute('class');
  }
  reset();
});


function reset() {
  rojo.innerHTML = '';
  amarillo.innerHTML = '';
  verde.innerHTML = '';
  azul.innerHTML = '';
  lila.innerHTML = '';
  rosa.innerHTML = '';
}

//al cargar la página llama a la función.
window.addEventListener("load", generarTabla, false);
