import React from 'react';
import ReactDOM from 'react-dom';
import './components/foundation.min.css';
import { Button } from 'react-foundation-components/lib/global/button';
import App from './App.js';


class Ejemplo extends React.Component {

 constructor(){
	 super();
	 this.state = {resta: 0, x: 0, y: 0};
	 this.botonPulsado = this.botonPulsado.bind(this);
	 this.handleChange = this.handleChange.bind(this);
	 this.handleChange2 = this.handleChange2.bind(this);
 }

 handleChange(e) {
 	this.setState({x: parseInt(e.target.value)});
 }

 handleChange2(e) {
 	this.setState({y: parseInt(e.target.value)});
 }

 botonPulsado(e){
 	this.setState({resta: this.state.x - this.state.y});
 }

 keyUpRestaX(e){
 	this.setState({resta: e.target.value - this.state.y});
 }

 keyUpRestaY(e){
 	this.setState({resta: this.state.x - e.target.value});
 }


 render() {
	 return (
			 <div>
				 <input type="text" onChange={ this.handleChange } onKeyUp={this.keyUpRestaX.bind(this)} value={this.state.x}/>
				 <input type="text" onChange={ this.handleChange2 } onKeyUp={this.keyUpRestaY.bind(this)}  value={this.state.y}/>
				 <Button color="success" onClick={this.botonPulsado}>Restar</Button> <br/>
				 <input type="text" value={this.state.resta}></input>
			 </div>
	 	);
 }
 
}



ReactDOM.render(
 <div><Ejemplo /> </div>,
 document.getElementById('root')
);