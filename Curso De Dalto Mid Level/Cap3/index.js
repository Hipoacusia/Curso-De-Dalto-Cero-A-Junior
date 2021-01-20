let alumnos = [{
  nombre: "Miguel Heinen",
  email: "musicapbc2@gmail.com",
  materia: "Pogramacion"
},{
  nombre: "Manopla gonzales",
  email: "manopla212@gmail.com",
  materia: "Fisica 1"
},{
  nombre: "Roberto locameto",
  email: "rober_tp@gmail.com",
  materia: "Calculo 2"
},{ 
  nombre: "maria peleta",
  email: "Maria_corazones@gmail.com",
  materia: "Literatura"
},{ 
  nombre: "Carlos angerita",
  email: "Angarita69@gmail.com",
  materia: "Recreo"
}];

const boton = document.querySelector(".btn-confirm");
const content = document.querySelector(".grid-container");

for(alumno in alumnos){
  let datos = alumnos[alumno];
  let nombre = datos["nombre"];
  let email = datos["email"];
  let materia = datos["materia"];
  let htmlcode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
          <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
          </select>
        </div>`; 
    content.innerHTML+= htmlcode;
}

boton.addEventListener("click", ()=>{
  let confirmar = confirm("¿Realemente quieres confirmar las mesas?");
  if(confirmar){
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
    }
  }
});
