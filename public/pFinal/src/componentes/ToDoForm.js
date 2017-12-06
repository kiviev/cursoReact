import React from 'react';

// bootstrap
import { Button  ,Row , Col ,Jumbotron , FormGroup} from 'react-bootstrap';

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
			<Jumbotron className="padded">
				<h2 className="text-center">Tareas</h2>
				<form onSubmit={this.handleSubmit}>
			 		<Row >
						<Col md={12}>
							<FormGroup>
							 	<input type="text" className="form-control" placeholder="Tarea" ref="task" />
							</FormGroup>
							
						</Col>
						<Col md={12}>
							<Button bsStyle="primary" bsSize="large" block onClick={this.handleAddSave.bind(this)}>{this.props.edit  ? 'Salvar' :'Añadir'}</Button>
						</Col>
			 		</Row> 
			 	</form>
			</Jumbotron>
			);
	}

}

export default ToDoForm;