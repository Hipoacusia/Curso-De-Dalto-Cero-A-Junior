class celulares{
  constructor(color,peso,rdp,rdc,ram){
	 this.color = color;
	 this.peso = peso;
	 this.resolucionDePantalla = rdp;
	 this.resolucinDeCamara = rdc;
	 this.memoriaRam = ram;
	 this.ecendido = false;
  }
  BottomEcendido(){
	 if (this.ecendido == false){
		alert("Encendiendo")
		this.ecendido = true;
	 }else{
		alert("celular apagado");
		this.ecendido == false;
    }
  }
  reniciar(){
	 if (this.ecendido == true);
		alert("reiniciando celular");
  }   
  tomarFotos(){
	 alert("foto tomada en una resolucion de: " + this.resolucinDeCamara);
  }
  gabrarVideo(){
	 alert("Grabando video en " + this.resolucinDeCamara);
  }
  mostrarInfo(){
	 return `
	 Color: <b>${this.color}</b></br>
	 Peso: <b>${this.peso}</b></br>
	 Tamaño: <b>${this.resolucionDePantalla}</b></br>
	 Resolucion de Camara: <b>${this.resolucinDeCamara}</b></br>
	 Resolucin de video: <b>${this.resolucinDeCamara}</b></br>
	 Memoria ram: <b>${this.memoriaRam}</b></br>
	 `
  }
}

class CelularAltaGama extends celulares{
  constructor(color,peso,rdp,rdc,ram,rdce){
	 super(color,peso,rdp,rdc,ram);
	 this.resolucionDeCamaraExtra = rdce;
  }
  grabarVideoLento(){
	 alert("Estas grabando en camara lenta");
  }
  reconocimientoFacial()
  {
    alert("Vamos a iniciar un reconomiento facial");
  }
  infoAltaGama(){
	 return this.mostrarInfo() + `Resoulucin de camara Extra ${this.resolucionDeCamaraExtra}
	 `
  }
}

//celular1 = new celulares("rojo","150g","5'","hd","1gb");
//celular2 = new celulares("negro","110g","4.5'","full hd","2gb");
//celular3 = new celulares("blanco","90g","3.5'","full hd","4gb");

//celular1.BottomEcendido();
//celular1.tomarFotos();
//celular1.grabarVideo();
//celular1.reniciar();
//celular1.apagar();

celular1 = new CelularAltaGama("verde","130g","5.4","4k","3gb","full hd");
celular2 = new CelularAltaGama("negro","120g","4.5","4k","4gb","full hd");

document.write(`
  ${celular1.infoAltaGama()}</br></br>
  ${celular2.infoAltaGama()}</br>`
);
