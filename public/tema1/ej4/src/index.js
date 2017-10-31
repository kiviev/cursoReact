import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// model
import Persona from './model/persona';
import Adulto from './model/adulto';
import Joven from './model/joven';


let persona = new Persona('Juan' , 'Perez' , 14);
let adulto = new Adulto('Luis', 'Gutierrez', 35, 'Desarrollador', true);

let array = [
		new Persona('Juan' , 'Perez' , 14),
		new Adulto('Pepe', 'Fernandez', 35, 'Albañil', false),
		new Persona('Maribel' , 'Alonso' , 18),
		new Adulto('Luis', 'Gutierrez', 35, 'Desarrollador', true),
		new Joven('Ana', 'Muñoz', 14, 'IES Luis Buñuel', 0),
		new Persona('Juan' , 'Perez' , 14),
		new Joven('Javier', 'Pelaez', 5, 'CP Luis Alvarez Lencero', 15)
	]


function printArray(arr){
	let print = [];
	arr.forEach((el,index)=>{
		print.push(<li>{el.mostrar()}</li>);
	})

	return print;

}

ReactDOM.render(
	<div>
		<div>{persona.hablar()}</div>
		<div>{adulto.mostrar()}</div>
		<div>
			<ul>
			{printArray(array)}
			</ul>
		</div>

	</div>
	, 

	document.getElementById('root'));
registerServiceWorker();
