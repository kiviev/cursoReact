import Persona from './persona';

class Joven extends Persona{

	constructor(nombre , apellidos , edad , colegio , numJuguetes){
		super(nombre,apellidos,edad);

		this.colegio = colegio;
 		this.numJuguetes = numJuguetes;
	}


	mostrar(){
		return "La Persona " + this.nombreCompleto() + " es Joven y va al colegio: " + this.colegio + "y tiene " + this.numJuguetes + "juguete" + (this.numJuguetes > 1 ? "s" : "");
	}

}

export default Joven;