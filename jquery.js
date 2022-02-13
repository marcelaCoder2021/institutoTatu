//animacionPostIt  
$(()=>{  //funcion ready
  $(".postIt").on("click",function(){//funcion on
  $(".postIt img").addClass("animacionPostIt")//agrego la clase 
    $(".animacionPostIt").animate({ //animacion
      left:'250px',
      height:'+=50px',
      width:'+=50px',
    },"slow");
    $(".animacionPostIt").animate({ //animacion
      right:'250px',
      height:'-=40px',
      width:'-=40px',
    },"slow");
    e.preventDefault();
  });   
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//muestro opciones de profesores según la materia
$(()=>{ 
  $("#materia1").on("click",function(){
    $("#segunMateria").show();
  });
});
//eleccion de materias
function materiaElegida() {
const opcionMateria = materia.value;
const divGlobal = document.querySelector("#segunMateria").querySelectorAll(".datosProfesores");
switch (opcionMateria) {
  case 'Matemática':
      divGlobal.forEach(elemento => {
          elemento.style.display = "none";
      });
      profesorMatematica.style.display = "block";
      break;
  case 'Lengua':
      divGlobal.forEach(elemento => {
          elemento.style.display = "none";
      });
      profesorLengua.style.display = "block";
      break;
  case 'Historia':
      divGlobal.forEach(elemento => {
          elemento.style.display = "none";
      });
      profesorHistoria.style.display = "block";
      break;
  case 'Geografía':
      divGlobal.forEach(elemento => {
          elemento.style.display = "none";
      });
      profesorGeografia.style.display = "block";
      break;
  case 'Ingreso':
      divGlobal.forEach(elemento => {
          elemento.style.display = "none";
      });
      profesorIngreso.style.display = "block";
      break;
}
}
materia.onchange = ()=> {  //evento onchage
materiaElegida();
localStorage.setItem("Materia", materia.value); //guardo en localStorage la materia seleccionada
}

function  maestroElegido() {
  const opcionMaestro = profesor.value;
  const divGlobal = document.querySelector(".datosProfesores").querySelectorAll(".profesor1");
  if (opcionMaestro===profesorMatematica1) {
    localStorage.setItem("Profesor", profesorMatematica.value); //guardo en localStorage el profe seleccionado
  }
  if (opcionMaestro===profesorLengua) {
    localStorage.setItem("Profesor", profesorLengua.value); 
  }
  if (opcionMaestro===profesorGeografia) {
    localStorage.setItem("Profesor", profesorGeografia.value);
  }   
  if (opcionMaestro===profesorHistoria) {
    localStorage.setItem("Profesor", profesorHistoria.value); 
  }
  if (opcionMaestro===profesorIngreso) {
    localStorage.setItem("Profesor", profesorIngreso.value);      
  }  
  return divGlobal 
}
////////////////////////////////////////////////////
//Obtengo, almaceno, borro, recupero del localStoge y uso los datos ingresados en inputs
$(()=>{     
  $('#submit').on("click",function(){        
    //Capturo de datos de los inputs inputs      
    let nom = document.getElementById("nombre").value;
    let mail = document.getElementById("email").value;
    //Guardo los datos en el LocalStorage
    localStorage.setItem("nombre",JSON.stringify(nom));
    localStorage.setItem("email", JSON.stringify(mail));
    //Borro los inputs
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    //Obtengo datos guardados en localStorage*/
    let nombre = localStorage.getItem("nombre");
    let email = localStorage.getItem("email");
    //Muestro datos almacenados con Alert
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("email").innerHTML = email; 
    alert ("Bienvenida/o " + nombre)
    //mandando info a API
    $.ajax({
      type: "POST",
      url:'https://jsonplaceholder.typicode.com/posts',
      data:{
        nombre: nombre,
        email: email
        },
      success: function (respuesta){
        console.log(respuesta)
      }
    });
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//obtengo materia, profesor, y horario seleccionados en el localStorage, los recupero y pido confirmación
$(()=>{     
  $('#btnAgendar').on("click",function(){        
    //Capturo de datos de los inputs inputs      
    //let matElegida = document.getElementById("materia").value;//ok
    let profeElegido = document.getElementById("profesorMatematica1").value;
    let horarioElegido = document.getElementById("horario1").value;//ok
    //Guardo los datos en el LocalStorage
    //localStorage.setItem("Materia", matElegida);
    localStorage.setItem("Profesor",JSON.stringify( profeElegido));
    localStorage.setItem("Horario", JSON.stringify(horarioElegido));
    //Obtengo datos guardados en localStorage*/
    let matElegidaStorage = localStorage.getItem("materia1");
    let profeElegidoStorage = localStorage.getItem("profesorMatematica1");
    let horarioElegidoStorage=localStorage.getItem("horario1");//let nombre = localStorage.getItem("nombre");
    //Muestro datos almacenados con Alert
    document.getElementById("materia1").innerHTML = matElegidaStorage;//document.getElementById("email").innerHTML = email; 
    //alert ("Bienvenida/o " + nombre)
    document.getElementById("profesorMatematica1").innerHTML = profeElegidoStorage; 
    document.getElementById("horario1").innerHTML= horarioElegidoStorage;
  });
})    
