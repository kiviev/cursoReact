import React, { Component } from 'react';

// css 
import './FechaHora.css';


class FechaHora extends Component{
 constructor(props){
 	super(props);
 	this.state = {
			 date : new Date()
			 };
 }

  getFecha(){
		return (
			<div className="fecha">
			 	<p>Fecha: {this.state.date.toLocaleDateString()}</p>
			</div>
		);
 	}

 	getHora(){
		return (
			<div className="hora">
			 	<p>Hora: {this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}

	componentDidMount() {
		 this.timerID = setInterval(
		 () => this.tick(),
		 1000
		 );
	 }
	 
	 componentWillUnmount() {
		 clearInterval(this.timerID);
		 }

	 tick() {
		 this.setState({
		 date: new Date()
		 });
	 }

 render(){
	 return (
		 <div>
			 {this.getFecha()}
			 {this.getHora()}
		 </div>
 		);
 }
}
export default FechaHora;