import React, { Component } from 'react';

// css 
import './FechaHora.css';


class FechaHora extends Component{
 constructor(props){
 	super(props);
 	this.state = {
			 date : new Date(),
			 interval : parseInt(this.props.interval),
			 mensaje : {
			 		enpunto : 'Son en punto',
			 		media : 'Son y media',
			 		cuartos : 'Es y cuarto o menos cuarto'
			 			},
			 mostrarMensaje: false
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
 		let ocultar ={
 			enpunto : (this.enPunto() ? '' : 'ocultar'),
 			media 	: (this.media() ? '' : 'ocultar'),
 			cuartos : (this.cuartos() ? '' : 'ocultar')
 		}
		return (
			<div className="hora">
				<p className={ocultar.enpunto + ' red'} > {this.state.mensaje.enpunto}</p>
				<p className={ocultar.media + ' green'} > {this.state.mensaje.media}</p>
				<p className={ocultar.cuartos + ' yellow'} > {this.state.mensaje.cuartos}</p>
			 	<p>Hora: {this.state.date.toLocaleTimeString()}</p>
			</div>
		);
	}

	enPunto(){
		return (this.state.date.getMinutes() === 0);
	}

	media(){
		return (this.state.date.getMinutes() === 34);
	}
	cuartos(){
		return (this.state.date.getMinutes() === 15 || this.state.date.getMinutes() === 45);
	}

	componentDidMount() {
		 this.timerID = setInterval(
			 () => this.tick(),
			 this.state.interval
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
		 <div className="p">
			 {this.getFecha()}
			 {this.getHora()}
		 </div>
 		);
 }
}
export default FechaHora;