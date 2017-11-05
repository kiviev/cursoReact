import React from 'react';
import {ToDoAction} from './index';

class ToDoList extends React.Component{


	render(){
		return (
			<div className="row padded">
				<div className="col-lg-12">
					<h4>Tasks</h4>
					<hr/>
					<ul className="list-group">
					{
					this.props.tasks.map(function(task, index){
						var cssClass = 'list-group-item list-group-item-';
						if (task.hight) cssClass += 'danger';
						else if( task.completed ) cssClass += 'info';
						else 	cssClass += 'success';
						return (
							<li key={index} className = {cssClass}>
								{task.text}
								<ToDoAction
									index={index}
									completed={task.completed}
									setStatus={this.props.taskAction}
									edit={this.props.edit}
									hight={this.props.hightAction}
									remove={this.props.remove}/>
							</li>
						)
					}, this)
					}
					</ul>
				</div>
			</div>
			);
	}

}


export default ToDoList;