import React from 'react';

class Formulario extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			value : '',
			form : {
				name : '',
				surname : '',
				age : '',
				prof : ''
			},
			toString : ''
		};
	}


	handleChanges(ev){
		let formx = this.state.form;
		formx[ev.target.id] = ev.target.value;
		this.setState({form : formx});
	}

	handleSend(ev){
		console.log(this.state.form);
		this.setState({toString : this.toString()})
		ev.preventDefault();
		
	}

	toString(){
		return ("Nombre: " + this.state.form.name + ", Apellidos: " + this.state.form.surname + ", Edad: " + this.state.form.age + ", Profesion: " + this.state.form.prof + ".");
	}

	render(){

		return(
			<form onSubmit={this.handleSend.bind(this)}>
				<div className='form-group' >
					<label>Nombre:</label>
					<input type="text" value={this.state.form.name} id='name'
							onChange={this.handleChanges.bind(this)} />
				</div>
				<div className='form-group' >
					<label>Apellidos:</label>
					<input type="text" value={this.state.form.surname} id='surname'
						onChange={this.handleChanges.bind(this)} />
				</div>
				<div className='form-group' >
					<label>Edad:</label>
					<input type="number" value={this.state.form.age} id='age'
							onChange={this.handleChanges.bind(this)} />
				</div>
				<div className='form-group' >
					<label>Profesion:</label>
					<input type="text" value={this.state.form.prof} id='prof'
							onChange={this.handleChanges.bind(this)} />
				</div>
				<input type="submit" value="Enviar" />
				<p>{this.state.toString}</p>
			</form>
			);	

	}


}


export default Formulario;