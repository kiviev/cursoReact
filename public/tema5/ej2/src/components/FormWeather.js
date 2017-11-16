import React, { Component } from 'react';

import {ApiOpenweathermap} from './index';


class FormWeather extends Component {

	constructor(props){
		super(props);
		this.state = {
			city : 'madrid',
			send : true
		}

	}

handleSubmit(ev){
	ev.preventDefault();
}

handleSend(){
	console.log('enviando...');
	let cityValue = document.getElementById('city').value;
		this.setState({
			city : cityValue
		});
}

manejarEventoTeclado(ev){
	if(ev.charCode !== 13){
		let tx = this.state.city + ev.key;
		this.setState({city : tx})
	}

}
handelReturn(ev){
	if(ev.keyCode === 8 ){
		let text = this.state.city;
		let str = text.substring(0,text.length -1 );
		this.setState({
			city : str
		});
	}
}
  render() {
    return (
    	<div>
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								<div className="form-group">
								    <label >El tiempo en tu ciudad</label>
								    <input type="text" className="form-control" 
								    	id="city" 
								    	// onKeyPress={this.manejarEventoTeclado.bind(this)} 
								    	// onKeyDown={this.handelReturn.bind(this)} 
								    	// value={this.state.city} id="city" 
								    	placeholder="Escribe aquí tu ciudad" />
								</div>
								<div className="col-md-12">
									<button type="button" onClick={this.handleSend.bind(this)} className="btn btn-primary btn-block">Enviar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="col-md-12">

<ApiOpenweathermap city={this.state.city} />

			</div>
		</div>
    );
  }
}

export default FormWeather;