const button = document.getElementById("snd-nota");

button.addEventListener("click", ()=>{
  let resultado,mensaje;
  try{
    prevRes = parseInt(document.getElementById("nota").value);
    if(isNaN(prevRes)){
      throw "Gracioso";
    }
    mensaje = definirMensjae(prevRes);
    resultado = verificarAprobacion(8,5,prevRes)
  } catch(e){
    resultado = "¿Sos Gracioso?";
    mensaje = "he descubier que intestaste hackear el sitio"
  }
  abrirModal(resultado,mensaje);
})

const definirMensjae = (pr)=>{
  switch (pr){
    case 1: resultado = "no podes ser tan HDP";
    break
    case 2: resultado = "Sos malisimo para mi materia";
    break
    case 3: resultado = "no sabes casia nada";
    break
    case 4: resultado = "muy mal";
    break
    case 5: resultado = "mal";
    break
    case 6: resultado = "regular";
    break
    case 7: resultado = "bien";
    break
    case 8: resultado = "muy bien";
    break
    case 9: resultado = "excelente";
    break
    case 10: resultado = "Increible";
    break
    default: resultado = null;
  }
  return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
  promedio = (nota1 + nota2 + prevRes) / 3;
  if(promedio >= 7){
    return "<span class='green'>APROBADO<span>";
  }
  return "<span class='red'>DESAPROBADO<span>";
}

const abrirModal = (res,msg)=>{
  document.querySelector(".resultado").innerHTML = res;
  document.querySelector(".mensaje").innerHTML = msg;
  let modal = document.querySelector(".modal-background");
  modal.style.display = "flex";
  modal.style.animation = "aparecer 1s forwards";
}
