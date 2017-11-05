import React from 'react';

 class ToDoForm extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			form : {
				task : ''
			}
		};
	}


	componentWillReceiveProps(newProps){
		if(newProps.edit){
			this.refs.task.value = newProps.edit.text;
		}
	}

	 handleAddSave(e){
	 	e.preventDefault();
		let task ;
		if(this.props.edit){
			task = {
						text: this.refs.task.value,
						completed: this.props.edit.completed
					};
			this.props.save( this.props.edit.index, task );
		} else {
			task = {
						text: this.refs.task.value, 
						completed: false
					};
			this.props.add( task );
		}
		this.refs.task.value = '';
	}
	handleSubmit(ev){
		ev.preventDefault();
	}
	render(){
		return (
			<div className="jumbotron padded">
				<form onSubmit={this.handleSubmit}>
			 		<div className="row">
						<div className="col-md-12">
							<div className="form-group">
							 	<input type="text" className="form-control" placeholder="Tarea" ref="task" />
							</div>
							
						</div>
						<div className="col-md-12">
							<button type="button" onClick={this.handleAddSave.bind(this)} className="btn btn-primary btn-block">{this.props.edit  ? 'Salvar' :'Añadir'}</button>
						</div>
			 		</div> 
			 	</form>
			</div>
			);
	}

}

export default ToDoForm;