/*X. Eventos
    *definicion
    *de eventos o 'Event handlers'
    *El objeto event
    *flujo de eventos o 'event flow'
    *event bubling v Event capturing
    *event.stopPogation()          */


const button = document.querySelector("#button");
const contenedor1 = document.querySelector(".contenedor-1");
const inputPrueba = document.querySelector(".input-prueba");
    

/*contenedor1.addEventListener("click",(e)=>{
    alert("Di click en el contenedor rojo");
});*/
    

//contenedor2.addEventListener("click",(e)=>{
//    alert("Di click en el contenedor azul");
//});
    

/*Eventos de mouse
    *click - ocurre con un click
    *dbclick - ocurre con un doble click
    *mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre sus hijos
    *mouseout - ocurre cuando se mueve el puntero fuera de un elemento o sus elementos secundarios 
    ---otros---
    *constextmenu - ocurre con un click en el boton derecho en un elemento para abri un menut contextual
    *mouseenter - ocurre cuando el puntero se mueve sobre un elemento
    *mouseeleave - ocurre cuando el puntero se mueve fuera de un elemento
    *mouseup - ocurre cuando un usuario suelte un boton del mouse sobre un elemento
    *mosemove - ocurre cuando el puntero se mueve mientas esta sobre un elemento.
    */

/*contenedor1.addEventListener("contextmenu",(e)=>{
  alert("esto sobre un elemento rojo")
});*/

//button.addEventListener("dblclick",(e)=>{
  //alert("di dobleclick en un botton");
//});




/*X.Eventos del taclado
    *keypress - ocurre cuando una tecla se presiona
    *keydown - ocurre cuando una tecla deja de presionar
    *onkeyup - ocurre despues de que los dos eventos anteriores
     hayan concluido consecutivamente.*/

/*inputPrueba.addEventListener("keydown",(e)=>{
  console.log(`una tecla fue presionada`);
});*/

/*inputPrueba.addEventListener("keypress",(e)=>{
  console.log(`un usuarios presiono el teclado`);
});*/

/*inputPrueba.addEventListener("keyup",(e)=>{
  console.log(`una tecla fue soltado`);
});*/

/*X.Eventos de la interfaz
* error - ocurre cuando sucede un error durante la carga
* load - ocurre cuando un objeto se ha cargado
* unidad - ocurre una vez que se descargado una pagina.
* resize - ocurre cuando se cambia el tamaño de la vista del depositivo
* scroll - ocurre cuando se desplaza ula barra de desplazamiento de un elemento
* select - ocurre despues de que el usuario selecciona algun texto de <input> o <textarea> 
*/

const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".selection");

input.addEventListener("select",(e)=>{
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let textoCompleto = input.value;
  contenedor.innerHTML = textoCompleto.substring(start,end);
});

/*X.Timers (temporizadores)
 *  setTimeout()
 *  setTimeinterval()
 *  clearTimeout()
 *  clearInterval()
 *  */

const temporizador = setInterval(()=>{
  document.write("hola")
},2000)

setTimeout(()=>{
  clearInterval(temporizador);
},5000)

//clearTimeout(temporizador)
