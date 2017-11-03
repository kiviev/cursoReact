import React from 'react';
import ReactDOM from 'react-dom';
class Formulario extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			value : ''
		};
	}

	handleChanges(ev){
		this.setState({value : ev.target.value});
	}

	handleSend(ev){
		console.log('Enviado: ' + this.state.value);
		ev.preventDefault();
	}


	render(){

		return(
			<form onSubmit={this.handleSend.bind(this)}>
				<label>Nombre:</label>
					<input type="text" value={this.state.value}
						onChange={this.handleChanges.bind(this)} />
					<input type="submit" value="Enviar" />
			</form>
			);	

	}


}


export default Formulario;