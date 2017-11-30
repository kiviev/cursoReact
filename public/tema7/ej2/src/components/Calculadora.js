import React, { Component } from 'react';
import '../App.css';


class Calculadora extends Component {

 constructor(props) {
	 super(props);
	 this.state = {
		 resultado: 0,
		 x: 0,
		 y: 0,
	 };
	 this.sumar = this.sumar.bind(this);
	 this.restar = this.restar.bind(this);
	 this.multiplicar = this.multiplicar.bind(this);
	 this.dividir = this.dividir.bind(this);
	 this.handleChange = this.handleChange.bind(this);
	 this.handleChange2 = this.handleChange2.bind(this);
 }
 render() {
	 return (
			 <div>
				 <div>
					 <label>Primer número:
					 <input type="number" onChange={ this.handleChange } value={this.state.x}/>
				 </label>
				 </div>
			 <div>
				 <label>Segundo número:
				 <input type="number" onChange={ this.handleChange2 } value={this.state.y}/>
				 </label>
			 </div>
			 <div>
				 <button onClick={this.sumar}>Suma</button>
				 <button onClick={this.restar}>Resta</button>
				 <button onClick={this.multiplicar}>Multiplicación</button>
				 <button onClick={this.dividir}>División</button>
			 </div>
			 <label>Resultado: {this.state.resultado}</label>
			 </div>
	 );
 }


 handleChange(e) {
 	this.setState({x: (e.target.value)});
 }
 handleChange2(e) {
 	this.setState({y: (e.target.value)});
 }
 sumar() {
	 let res = parseInt(this.state.x)+parseInt(this.state.y);
	 this.setState({resultado: res});
	 this.suma(this.state.x, this.state.y);
 }
 suma(x,y){
	 let res = parseInt(x)+parseInt(y);
	 console.log(res);
 }
 resta(x,y){
	 let res = parseInt(x)-parseInt(y);
	 console.log(res);
 }
 mult(x,y){
	 let res = parseInt(x)*parseInt(y);
	 console.log(res);
 }
 div(x,y){
	 let res = parseInt(x)/parseInt(y);
	 console.log(res);
 }
 restar() {
	 let res = this.state.x-this.state.y;
	 this.setState({resultado: res});
	 this.resta(this.state.x, this.state.y);
 }
 multiplicar() {
	 let res = this.state.x*this.state.y;
	 this.setState({resultado: res});
	 this.mult(this.state.x, this.state.y);
 }
 dividir() {
	 let res = this.state.x/this.state.y;
	 this.setState({resultado: res});
	 this.div(this.state.x, this.state.y);
 }

}

export default Calculadora;