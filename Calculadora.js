class Calculadora{
  constructor(){
  }
  sumar(num1,num2){
	 return parseInt(num1) + parseInt(num2);
  }
  restar(num1,num2){
	 return parseInt(num1) - parseInt(num2);
  }
  dividir(num1,num2){
	 return parseInt(num1) / parseInt(num2);
  }
  multiplicar(num1,num2){
	 return parseInt(num1) * parseInt(num2);
  }
  potenciar(num,exp){
	 let numero = num
	 for(var i =1; i < exp; i++){
		numero = numero * num;
	 }
	 return numero;
  }
  raizCuadrada(num){
	 return Math.sqrt(num);
  }
  raizCubica(num){
	 return Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion, 5: ponteciar, 6: raizcuadrada, 7: raizcubica");

if(operacion == 1){
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("Segundo numero para sumar");
  resultado = calculadora.sumar(numero1,numero2);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 2){
  let numero1 = prompt("primer resta para sumar");
  let numero2 = prompt("Segundo resta para sumar");
  resultado = calculadora.restar(numero1,numero2);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 3){
  let numero1 = prompt("primer dividir para sumar");
  let numero2 = prompt("Segundo dividir para sumar");
  resultado = calculadora.dividir(numero1,numero2);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 4){
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("Segundo numero para sumar");
  resultado = calculadora.multiplicar(numero1,numero2);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 5){
  let numero1 = prompt("numero desea potenciar");
  let numero2 = prompt("exponente");
  resultado = calculadora.potenciar(numero1,numero2);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 6){
  let numero1 = prompt("Conocer la Raiz cuadrada");
  resultado = calculadora.raizCuadrada(numero1);
  alert("Tu resultado es " + resultado);
}
else if(operacion == 7){
  let numero1 = prompt("Conocer la Raiz cubica");
  resultado = calculadora.raizCubica(numero1);
  alert("Tu resultado es " + resultado);
}
else{
  alert("No hay ninguna operacion");
}


