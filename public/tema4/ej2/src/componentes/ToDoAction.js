import React from 'react';

class ToDoAction extends React.Component{
 constructor(props){
	super(props);
	this.handleStatus = this.handleStatus.bind(this);
	this.handleEdit = this.handleEdit.bind(this);
	this.handleRemove = this.handleRemove.bind(this);
	this.handleHight = this.handleHight.bind(this);
	// this.getButtonPrincipal = this.getButtonPrincipal.bind(this);
	 }
 handleStatus(){
 	this.props.setStatus(this.props.index);
 }
 handleEdit(){
 	this.props.edit(this.props.index);
 }
 handleRemove(){
 	this.props.remove(this.props.index);
 }

 handleHight(){
 	this.props.hight(this.props.index);
 }

 getButton(params){
 	 return (
			 <button type="button"
				 	 onClick={params.click ? params.click : null}
				 	 onDoubleClick={params.doubleClick ? params.doubleClick : null}
				 	 onTouchEnd={params.touchEnd ? params.touchEnd : null}
				 	className={"btn btn-xs btn-" + params.className}>
			 	<i className={"glyphicon glyphicon-" + params.icon}></i>
			 </button>
		 )
 }

 getButtonPrincipal(){
 	let params = {
 		click 	: this.handleStatus,
 		className : 'success',
 		icon 	: 'ok'
 	};
	 if( this.props.completed ){
	 	params = {
	 		click : this.handleStatus,
	 		className : 'info',
	 		icon : 'repeat'
	 	}; 
	 } 
	 return this.getButton(params);
 }

 getButtonEdit(){; 
	 return this.getButton({
			 		click 	: this.handleEdit,
			 		className : 'primary',
			 		icon 	: 'pencil'
			 	});
 
 }

  getButtonDelete(){
	 return this.getButton({
		 		click 	: this.handleRemove,
		 		className : 'warning',
		 		icon 	: 'remove'
		 	});
 
 }
 getButtonHight(){
	 return this.getButton({
		 		click 	: this.handleHight,
		 		className : 'danger',
		 		icon 	: 'warning-sign'
		 	});
 }

	render(){
		return (
			<div className="btn-group btn-group-xs pull-right" role="group">
				{this.getButtonHight()}
				{this.getButtonPrincipal()}
				{this.getButtonEdit()}
				{this.getButtonDelete()}
			</div>
			);
	}

}


export default ToDoAction;