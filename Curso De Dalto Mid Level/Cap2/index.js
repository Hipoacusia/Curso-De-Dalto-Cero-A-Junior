let name = document.querySelector("#name");
let mail = document.querySelector("#mail");
let materi = document.querySelector("#materi");
let btn = document.querySelector("#btn-send");
const result =  document.querySelector(".resultado");


btn.addEventListener('click',(e)=>{
  e.preventDefault()
  let error = validarCampos();
  if(error[0]){
    result.innerHTML = error[1];
    result.classList.add("red");
  }else{
    result.innerHTML = "Solicitud enviada correctamente ";
    result.classList.add("green");
    result.classList.remove("red");
  }
})

const validarCampos = ()=>{
  let error = [];
  if(name.value.length < 5){
    error[0] = true;
    error[1] = "El nombre no puede contener menos de 5 caracteres";
    return error;
  }else if (name.value.length > 40){
    error[0] = true;
    error[1] = "El nombre no puede contener mas de 40 caracteres";
    return error;
  }else if(mail.value.length < 5 || 
	mail.value.lengt > 40 || 
	mail.value.indexOf("@") == -1 ||
	mail.value.indexOf(".") == -1 ||
	mail.value.indexOf("com") == -1){
	  error[0] = true;
	  error[1] = "el mail es invalido";
	  return error; 
  }else if(materi.value < 4 || materi.value > 40){
	error[0] = true;
	error[1] = "La materia no existe";
	}

	error[0] = false;
	return error;
}
