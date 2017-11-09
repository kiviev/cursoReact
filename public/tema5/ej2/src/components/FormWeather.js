import React, { Component } from 'react';



class FormWeather extends Component {

	constructor(props){
		super(props);
	}


handleSubmit(ev){
	ev.preventDefault();
}

handleSend(){
	console.log('enviando...');
}


  render() {
    return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-12">
								<div class="form-group">
								    <label >Tu ciudad</label>
								    <input type="text" class="form-control" id="city" placeholder="Escribe aquí tu ciudad" />
								</div>
								<div className="col-md-12">
									<button type="button" onClick={this.handleSend.bind(this)} className="btn btn-primary btn-block">Enviar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
    );
  }
}

export default FormWeather;