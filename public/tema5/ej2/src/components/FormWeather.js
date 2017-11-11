import React, { Component } from 'react';

import {ApiOpenweathermap} from './index';


class FormWeather extends Component {

	constructor(props){
		super(props);
		this.state = {
			city : '',
			send : false
		}

	}




handleSubmit(ev){
	ev.preventDefault();
	this.setState({send:false});
}

handleSend(){
	console.log('enviando...');
	if(this.state.city !== '') {
		this.setState({send:true});
	}
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
renderApi(){
	console.log(this.state.send);
	if(this.state.send) return <ApiOpenweathermap city={this.state.city} />;
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
								    <label >Tu ciudad</label>
								    <input type="text" className="form-control" 
								    	onKeyPress={this.manejarEventoTeclado.bind(this)} 
								    	onKeyDown={this.handelReturn.bind(this)} value={this.state.city} id="city" placeholder="Escribe aquí tu ciudad" />
								</div>
								<div className="col-md-12">
									<button type="button" onClick={this.handleSend.bind(this)}   className="btn btn-primary btn-block">Enviar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="col-md-12">


				{this.renderApi()}

			</div>
		</div>
    );
  }
}

export default FormWeather;