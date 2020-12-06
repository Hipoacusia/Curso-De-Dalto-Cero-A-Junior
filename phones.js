class App{
  constructor(descargas,puntuacion,peso){
	 this.descargas = descargas;
	 this.puntuacion = puntuacion;
	 this.peso = peso;
	 this.iniciado = false;
	 this.instalada = false;
  }
  abir(){
	 if(this.iniciado == false){
		(this.iniciado = true);
		alert("app ecendido");
	 }
  }
  cerrar(){
	 if(this.iniciado == true){
		(this.iniciado = false);
		alert("app cerrado");
	 }
  }
  instalar(){
	 if(this.instalada == false){
		this.instalada = true;
		alert("app instalada correctamente");
	 }
  }
  desinstalar(){
	 if(this.instalada == true){
		this.instalada = false;
		alert("app desinstado correctamente");
	 }
  }
  abrir(){
	 if(this.instalada == false && this.instalada == true){
		this.instalada = true;
		alert("app iniciado");
	 }
  }
  cerrar(){
	 if(this.instalada == true && this.instalada == true){
		this.instalada = false;
		alert("app cerrada");
	 }
  }
  appInfo(){
	 return` 
	 descargas: <b>${this.descargas}</b><br>
	 puntuaciones: <b>${this.puntuacion}</b><br>
	 peso: <b>${this.peso}</b><br>`
		
  }
}

app = new App("16.000","5 Estrellas", "800mb");
app2 = new App("12.000","4.5 Estrellas", "120mb");
app3 = new App("10.000","4 Estrellas", "300mb");
app4 = new App("8.000","3.4 Estrellas", "400mb");
app5 = new App("9.000","3 Estrellas", "530mb");
app6 = new App("9.000","4 Estrellas", "20mb");
app7 = new App("15.000","5 Estrellas", "80mb");

document.write(`
  ${app.appInfo()}<br>
  ${app2.appInfo()}<br>
  ${app3.appInfo()}<br>
  ${app4.appInfo()}<br>
  ${app5.appInfo()}<br>
  ${app6.appInfo()}<br>
  ${app7.appInfo()}<br>
`);

