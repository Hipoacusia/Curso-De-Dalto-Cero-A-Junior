/*---callback---*/

/*function prueba(callback){
  callback("pedro");
}


prueba(nombre => console.log(nombre));*/

class Persona{
  constructor(nombre,instagram){
    this.nombre = nombre;
    this.instagram = instagram;
  }
}

const datosPersonas = [
  ["Miguel Heinen"],
  ["Robertico","@Robertico"],
  ["RancioRamirez","@RancioRamirez"],
  ["Gilberto Achaua","@AchauaGil"],
  ["Camila nesa","@Milanesa"],
  ["Portuano Duran","@PortuanoDuran"],
];

const personas = [];

for(let i = 0; i < datosPersonas.length; i++){
  personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1]);
}

const obtenerPersona = (id)=>{
  return new Promise((resolve,reject)=>{
    if (personas[id] == undefined) reject("no se a encontrado la pesona")
    else{resolve(personas[id])}
  })
}

const obtenerInstagram = (id) =>{
  return new Promise((resolve,reject)=>{
    if (personas[id].instagram == undefined) reject("no se a encontrado el instagram")
    else{resolve(personas[id].instagram)} 
  })
}

let id = 2

obtenerPersona(id).then((persona) =>{
  console.log(persona.nombre);
  return obtenerInstagram(id);
  }).then((instagram)=>{
    console.log(instagram)
  }).catch((e)=>{
    console.log(e)
  })


/*---Promesas---*/

//let nombre = "pedro";
//
//const promesa = new Promise((resolve,reject)=>{
//  if(nombre !== "pedro") reject("lo siento, el nombre no es pedro");
//  else resolve(nombre);
//})
//
//promesa.then((resultado)=>{
//  console.log(resultado);
//}).catch((e)=>{
//  console.log(e);
//})
