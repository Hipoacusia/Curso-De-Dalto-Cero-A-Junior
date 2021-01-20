/*---Ajax---*/


//const peticion = new XMLHttpRequest();
//
//peticion.open("POST", "json.txt");
//
//peticion.addEventListener("load",()=>{
//  if (peticion.status == 200) respuesta = peticion.response;
//  else respuesta = "lo siento, no se ha encontra el resultado";
//  console.log(JSON.parse(respuesta));
//  
//})
//
//
//peticion.send();
//
//
//console.log(peticion);

/*---Fetch---*/

//fetch("https://reqres.in/api/users",{
//  method : "POST",
//  body   : `{"nombre" : "Miguel","apellido" : "Heinen"}`,
//  headers: {"Content-type" : "application/json"}
//}).then(res=>res.json())
//  .then(res=>console.log(res))

/*---Axios---*/

//axios("json.txt")
  //.then(res=>console.log(res.data))

const getName = async()=>{
  
  let peticion = await fetch("json.txt");
  let resultado = await peticion.json();
  let HTMLcode = `Nombre: ${resultado.nombre}<br>
		  Edades: ${resultado.edad}`;
  document.querySelector(".resultado").innerHTML = HTMLcode;
}

document.getElementById("nombre").addEventListener("click", getName);
