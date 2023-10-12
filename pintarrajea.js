"use strict";

let lienzo = document.querySelector(".lienzo");
let seleccionado = document.querySelector(".seleccionado");
let pintar = false;
let color;

//genero una tabla al cargarse la página.
function generarTabla() {
  let tabla = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (var i = 0; i < 60; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < 50; j++) {
      let td = document.createElement("td");
      td.setAttribute('name','celdas');
      td.setAttribute('onclick','esPintar()');
      td.setAttribute('onmouseover','pintarCelda(this)');
      tr.appendChild(td);
    }
    tblBody.appendChild(tr);
  }
  tabla.appendChild(tblBody);

  lienzo.appendChild(tabla);
}


let selector = document.getElementById("selector");
selector.onclick = seleccionarColor;

//selecciono el color a pintar.
function seleccionarColor(e){
  color = e.target.classList.value;
  //además informo al usuario el color a pintar.
  if(color === 'rojo'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: rojo';
  }else if(color === 'amarillo'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: amarillo';
  }else if(color === 'verde'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: verde';
  }else if(color === 'azul'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: azul';
  }else if(color === 'lila'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: lila';
  }else if(color === 'blanco'){
    selector.setAttribute('class',`celda${color}`);
    seleccionado.innerHTML = 'SELECCIONADO: blanco';
  }
  
}

//añado la clase css para el color elegido.
function pintarCelda(celda){
  if(pintar){
    celda.setAttribute('class',`celda${color}`);
  }
}

//inicio o detengo pintar, según el click.
function esPintar(){
  if(pintar){
    pintar = false;
  }else{
    pintar = true;
  }
}

//limpio el lienzo.
let boton = document.querySelector('.btn');
boton.addEventListener('click', () => {
  let celdas = document.getElementsByName('celdas');
  for(let i=0; i<celdas.length; i++){
    celdas[i].removeAttribute('class');
  }
});


//al cargar la página llamo a la función.
window.addEventListener("load", generarTabla, false);
