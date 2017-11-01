import React, {Component} from 'react';


class ComponenteEventos extends Component{

constructor(props){
	super(props);
	this.state = {
		texto : ''
	};
	this.handlePressKeyBoard = this.handlePressKeyBoard.bind(this);
}

handlePressKeyBoard(ev){
//	console.log(ev.key);
	if(ev.charCode !== 13){
		let tx = this.state.texto + ev.key;
		this.setState({texto : tx})
	}

}

handelReturn(ev){
	if(ev.keyCode === 8 ){
		var text = this.state.texto;
		var str = text.substring(0,text.length -1 );
		this.setState({
			texto : str
		});
	}
}

render(){

	return (
		<div>
			<input type="text" onKeyPress={ this.handlePressKeyBoard } onKeyDown={this.handelReturn.bind(this)} />
			<p>{this.state.texto} </p>
		</div>
		);
}


}


export default ComponenteEventos