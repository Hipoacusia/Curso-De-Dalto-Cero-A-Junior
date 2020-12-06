const obtenerInformacion = (materia)=>{
  materias = {
	 fisica: ["perez","pedro", "pepito", "cofla", "maria"],
	 pogramaciom: ["dalto","pedro", "juan", "pepito", "cofla", "maria"],
	 logica: ["hernandez","pedro", "juan", "pepito", "maria"],
	 quimica: ["rodriguez","pedro", "juan", "pepito", "cofla",]
  }
  if (materias[materia] !== undefined){
	return [materias[materia],materia,materias]; 
  }else{
	 return materias;
  }
}

const mostrarInformacion = (materia)=>{
  let informacion = obtenerInformacion(materia);

  if(informacion !== false){
	 let profesor = informacion[0][0];
	 alumnos = informacion[0];
	 alumnos.shift();
	 document.write("El profesor de " + informacion[1] + "<b>:" + profesor + "</b><br> los alumnos son: <b>" + alumnos + "</b><br><br>");
  }
}


const cantidadDeClases = (alumno)=>{
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for(info in informacion){
	 if(informacion[info].includes(alumno)){
		cantidadTotal++;
		clasesPresentes.push(" " + info);
	 }
  }
  return alumno + " esta en: <b>" + cantidadTotal + " clases: <b>" + clasesPresentes + "</b>" + "<br> <br>";
}

mostrarInformacion("fisica");
mostrarInformacion("pogramaciom");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));
document.write(cantidadDeClases("pepito"));
document.write(cantidadDeClases("maria"));
