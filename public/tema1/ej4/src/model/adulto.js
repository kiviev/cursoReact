import Persona from './persona';

class Adulto extends Persona{

	constructor(nombre , apellidos , edad , trabajo , coche){
		super(nombre,apellidos,edad);

		this.trabajo = trabajo;
 		this.coche = coche;
	}

	tieneCoche(){
		return this.coche ? 'Si' : 'No';
	}

	mostrar(){
		return "La Persona " + this.nombreCompleto() + " es Adulta y trabaja en '" + this.trabajo +"'. ¿Tiene coche? " + this.tieneCoche();
	}

}

export default Adulto;