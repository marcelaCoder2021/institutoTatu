//simil carrito de compras
//variables globales para carrito
//const agendarMateria = document.querySelector("#btnModalInicio");
//const tbody = document.querySelector (".tbody"); pasada
//let carrito = [];

//agendar clases al carrito
//$(document).ready(function(){
//    $("#btnModalInicio").on("click",agregarClaseAgendada)
//    })

// function comprarCurso(clase) {
 //   clase.preventDefault();
    //delegation para agregar carrito
 //       if (e.target.classList.contains("agregar-carrito")) {
 //           const curso = e.target.parentElement.parentElement;
 //           //enviamos el curso seleccionado para tomar sus datos
 //           agregarClaseAgendada(clase);
 //       }    
//}


//funcion agregarClaseAgendada
//function agregarClaseAgendada (){
//    const infoClase = {
//    materia: document.querySelector("#materia1").textContent,
//    profesor: document.querySelector (".profesor1").textContent,
//    horario: document.querySelector ("#horario1").textContent
//    };
//    agregarClaseNueva(infoClase); 
//};

//funcion para actualizar carrito
//function tablaCarrito (){
//    tbody.innerHTML ="";
 //   carrito.map(turnos=>{
 //       const tr = document.createElement ("tr");
 //       tr.classList.add("infoClase");
 //       const contenido = `
 //           <td class="tablaClases">
 //               <h5 class="tablaH">${materia}</h5>
 ///           </td>
 //           <td class="tablaH"><p>${profesor}</p></td>
 //           <td class="tablaClases">
 //               <h5 class="tablaH">${horario}</h5>
 //           </td>
 ////           <td class="tabla_cantidad">
 //               <button class="delete btn btn-danger boton_carrito_borrar">Cancelar</button>
 //           </td>
 //       `
 //       turnos()
 //       infoClase()
 //       tr.innerHTML = contenido;
 //       tbody.append(tr);
 //       tr.querySelector(".delete").addEventListener('click', borrarClase);
 //   });
//};
//function insertarCurso(curso) {
///    const row = document.createElement('tr');
//    row.innerHTML = `
 //       <td><img src="${curso.imagen}" width="100"></td>
///       <td>${curso.titulo}</td>
 //       <td>${curso.precio}</td>
   //     <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>    
 //   `;
 //   listaCursos.appendChild(row);
 //   guardarCursoLocalStorage(curso);
//}
//funcion borrar clase del carrito
/*function borrarClase (e){
    e.preventDefault ();
    const tr = botonBorrar.closest ("infoClase");
    tr.remove();
}
//guardo en localSorage al cerrar navegador, para que quede el historial
function addLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(carrito));
};
window.onload = function(){
    const storage= JSON.parse(localStorage.getItem("carrito"));
    if (storage){
        carrito=storage;
        tablaCarrito();
    };
};
*/
//alerta de confirmacion
$("#confirmarClase").on ("click",function(e){
    e.preventDefault();
    swal({
        title: "¡Muchas gracias por confiar en nosotros!",
        text: "Vas a recibir la confirmacion por mail",
        icon: "success",
        button:false,
        timmer:5000,
    });
});



//navMenuHamburguesa
const toggleButton = document.getElementById("buttonMenu"); // elijoClickeables
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {     //toggleAgregaClaseYSacaClase
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
});
navWrapper.addEventListener("click", e => {     //escondoMenu
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
//fin boton hamburguesa
/*************************************************************************************************************/
//animacion boton inscribite ahora
let animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },900);
  };
  let bubblyButtons = document.getElementsByClassName("btnInscripcion");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
  };
//fin animacion botn inscribite ahora
/************************************************************************************************************/
//modal inicio sesión
if(document.getElementById("btnModalInicio")){
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("btnModalInicio");
    let span = document.getElementsByClassName("confirmar")[0];
    let body = document.getElementsByTagName("body")[0];
    btn.onclick = function() {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}
/***********************************************************************************************************/
//formulario de inscripcion
//variables formulario
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
//const materia = document.querySelector("#materia"); // en carrito
//const profe = document.querySelector("#profe");//en carito
//const horario = document.querySelector ("#horario");
const matematica = document.querySelector("#matematica");
const lengua = document.querySelector("#lengua");
const historia = document.querySelector("#historia");
const geografia = document.querySelector("#geografia");
const ingreso = document.querySelector("#ingreso");
const boton = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");
const profesorMatematica=document.querySelector("#profesorMatematica");
const profesorLengua=document.querySelector("#profesorLengua");
const profesorHistoria=document.querySelector("#profesorHistoria");
const profesorGeografia=document.querySelector("#profesorGeografia");
const profesorIngreso=document.querySelector("#profesorIngreso");
const enviar = document.querySelector("#btn");

// validacion de nombre
const showError = (input, mensaje) => {
    const formField = input.parentElement;
    formField.classList.remove("valido");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = mensaje;
}
const showValido = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("valido");
    const error = formField.querySelector("small");
    error.textContent = '';
}
const checkUsuario = ()=> {
    let valido = false;
    const min = 6;
    const max = 20;
    const usuario = nombre.value.trim();
    if (usuario == '') {
        showError(nombre,"No ingresaste tu nombre");
    } else if (usuario.length < min || usuario.length > max) {
        showError(nombre, `El nombre tiene que tener entre ${min} y ${max} caracteres`);
    } else {
        showValido(nombre);
        valido = true;
    return valido;
    }
}
//validacion email
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const checkEmail = () => {
    let valido = false;
    const mail = email.value.trim();
    if (email == "") {
        showError(email, "Ingresá tu email");
    } else if (!isEmailValid(email)) {
        showError(email, "El email no es valido")
    } else {
        showValido(email);
        valido = true;
    }
    return valido;
}

/*************************************************************************************************************/