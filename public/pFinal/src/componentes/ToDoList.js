import React from 'react';
import {ToDoAction} from './index';

// bootstrap
import { Grid , Col ,ListGroup , ListGroupItem} from 'react-bootstrap';

class ToDoList extends React.Component{

	

	render(){
		return (
			<Grid className="padded">
				<Col lg={12}>
					<h4>Tasks</h4>
					<hr/>
					<ListGroup>
					{
						this.props.tasks.map(function(task, index){
							let cssClass = '';
							if (task.hight) cssClass = 'danger';
							else if( task.completed ) cssClass = 'info';
							else 	cssClass = 'success';
							return (
								<ListGroupItem key={index} bsStyle={cssClass}>
									{task.text}
									<ToDoAction
										index={index}
										completed={task.completed}
										setStatus={this.props.taskAction}
										edit={this.props.edit}
										hight={this.props.hightAction}
										remove={this.props.remove}/>
								</ListGroupItem>
							)
						}, this)
					}
					</ListGroup>
				</Col>
			</Grid>
			);
	}

}


export default ToDoList;