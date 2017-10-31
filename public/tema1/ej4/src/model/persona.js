

class Persona {


	constructor(nombre,apellidos,edad){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
	}

	nombreCompleto(){
		return this.nombre + ' ' + this.apellidos;
	}

	mostrar(){
		return "Esta es una persona y se llama: " + this.nombreCompleto();
	}
	hablar(){
		return "La persona: " + this.nombreCompleto() + ' está hablando ahora';
	}

}

export default Persona;