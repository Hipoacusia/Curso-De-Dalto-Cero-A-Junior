const materias = {
  fisica: [90,6,4,"fisica"],
  matematica: [90,8,8,"matematica"],
  logica: [91,8,4,"logica"],
  quimica: [91,6,3,"quimica"],
  calculo: [79,7,4,"calculo"],
  biologia: [84,7,6,"biologia"],
  algebra: [75,10,2,"algebra"]
}

const aprobo = ()=>{
  for (materia in materias){

	 let asistencia = materias[materia][0];
	 let promedio = materias[materia][1];
	 let trabajos = materias[materia][2];

		console.log(materias[materia][3]);

	 if(asistencia >= 90){
		console.log("%c   Asistencia en orden","color:green");
	 }else{
		console.log("%c   Falta de Asistencia","color:red");
	 }
	 if (promedio >= 7){
		console.log("%c	Promedio en orden", "color:green");
	 }else{
		console.log("%c	Promedio Desaprobado", "color:red");
	 }
	 if(trabajos >=3){
		console.log("%c	Trabajos Practicos en orden", "color: green");
	 }else{
		console.log("%c	Faltan Trabajos Practicos", "color:red");
	 }
  }
}
aprobo();
