const getInfo = async ()=>{
  let aprobados = document.querySelector(".num-aprobados");
  let desaprobados = document.querySelector(".num-desaprobados"); 
  try{
    resultado = await axios("json.txt")
    aprobados.innerHTML = resultado.data.aprobados;
    desaprobados.innerHTML = resultado.data.desaprobados;
  }catch(e){
    aprobados.textContent = "La API fallo";
    desaprobados.textContent = "La API fallo";
  }
}

document.querySelector("#getInfo").addEventListener('click', getInfo)
