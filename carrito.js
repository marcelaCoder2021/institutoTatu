const carrito = document.getElementById ("exampleModal");
const claseElegida=document.getElementById("formularioInscripcion");
const listaTurnos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let materia = document.getElementById ("materia1");
let profesor = document.getElementsByClassName ("profesor1");
let horario = document.getElementById ("horario1");
const tbody = document.querySelector (".tbody");
let profeElegido = document.getElementById("profesorMatematica1").value;
let horarioElegido = document.getElementById("horario1").value;//ok
//let matElegida = document.getElementById("materia").value;//ok
//agendar turno al carrito
$(document).ready(function(){
    
class Turno{
    constructor(matElegida, profeElegido, horarioElegido){
        this.materia = matElegida.value;
        this.profesor= profeElegido.value;
        this.horario = horarioElegido.value;
    }
}
let turnos = [];
let turno = new Turno (materia, profesor, horario)

turnos.push(turno)
console.log(turno)
$("#btnModalInicio").on("click",turno)
localStorage.setItem("turno",JSON.stringify(turno))
    })


function eventslisteners() 
{
// cuando se presiona agregar carrito
claseElegida.addEventListener('click', comprarCurso);

//eliminar curso en el carrito
carrito.addEventListener('click', eliminarCurso);

//vaciar carrito de compras
vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

//mostrar lista de cursos en carrito de compra al cargar DOM-LS
document.addEventListener('DOMContentLoaded', leerLS)

}
// insertar turno en el carrito
function insertarTurno(turno) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${turno.materia}</td>
        <td>${turno.profesor}</td>
        <td>${turno.horario}</td>   
    `;
    listaTurnos.appendChild(row);
    guardarCursoLocalStorage(turno);
}



