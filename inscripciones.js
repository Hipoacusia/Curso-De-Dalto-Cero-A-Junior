let materias = {
	 fisica: ["perez","pedro","pepito","acalchofa","maria"],
	 pogramacion: ["dalto","pedro","pepito","acalchofa","maria"],
	 logica: ["ramon","pedro","pepito","acalchofa","maria"],
    quimica: ["clara","pedro","pepito","acalchofa","maria"]
}

const inscripciones = (alumno,materia)=>{
  personas = materias[materia];
  if(personas.length >= 21){
	 document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b>, ya estan llenas<br>`); 
  }else{
	 personas.push(alumno);
	 if(materia == "fisica"){
		materias = {
		  fisica: personas,
		  pogramacion: materias["pogramacion"],
		  logica: materias["logica"],
		  quimica: materias["quimica"]
		}
	 }
	 else if(materia == "pogramacion"){
		  materias = {
			 fisica: materias["fisica"],
			 pogramacion: personas,
			 logica: materias["logica"],
			 quimica: materias["quimica"]
		}
	 }
	 else if(materia == "logica"){
		  materias = {
			 fisica: materias["fisica"],
			 pogramacion: materias["pogramacion"],
			 logica: personas,
			 quimica: materias["quimica"]
		}
	 }
	 else if(materia == "quimica"){
		  materias = {
			 fisica: materias["fisica"],
			 pogramacion: materias["quimica"],
			 logica: materias["logica"],
			 quimica: personas
		}
	 }
	 document.write(`Felicidades <b>${alumno}</b> te has inscrito a: <b>${materia}</b><br>`);
  }
}

document.write(materias['fisica'] + "<br><br>");

inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");
inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");
inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");
inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");
inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");
inscripciones("mario","fisica");
inscripciones("fabian","fisica");
inscripciones("carlos","fisica");

document.write("<br><br>" + materias['fisica'])
