let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/logo_microsoft_edge.jpg') {
      miImage.setAttribute('src','images/foto2.jpg');
    } else {
      miImage.setAttribute('src', 'images/logo_microsoft_edge.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor introduce tu nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Programar es genial, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Programar es genial, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/* function estableceNombreUsuario(){
    let nombre = prompt("Por favor introduzca su nombre:");
    localStorage.setItem('nombre',nombre);
    miTitulo.textContent = 'Programar es genial, ' + miNombre;
}

if (!localStorage.getItem('nombre')){
    estableceNombreUsuario();
} else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Programar es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsuario;
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1'); */