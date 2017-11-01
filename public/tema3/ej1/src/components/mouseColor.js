import React, {Component} from 'react';
import './mouseColor.css';

class MouseColor extends Component{

constructor(props){
	super(props);
	this.state = {
		color : {
			red : 220,
			green : 220,
			blue : 220
		},
		block : false
	};
}

randomInt(max = 255){
	return Math.floor((Math.random() * max) + 1);
}

randomColour(){
	let col = {
		red :  this.randomInt(),
		green : this.randomInt() ,
		blue : this.randomInt()
	};
	this.setState({color : col});
}

handleMouseMove(ev){
	let x = ev.clientX;
	let y = ev.clientY;

	let valX = parseInt(( x * 255 ) / ev.target.clientWidth);
	let valY = parseInt(( y * 255 ) / ev.target.clientHeight);

	if(this.state.block) return;
	this.setState({
		color : {
			red : parseInt(valX/10),
			green : valX,
			blue : valY
		}
	});
}

handleInMouse(ev){
	console.log('mouse entra');
	if(this.state.block) return;
	this.randomColour();
}

handleOutMouse(ev){
	console.log('mouse sale');
	if(this.state.block) return;
	this.randomColour();
}

handleDoubleClick(ev){
	console.log('doubleclick');
	this.setState({
		block : !this.state.block
	});
	if(this.state.block) return;
	this.randomColour();

}

render(){

	const style = {
		backgroundColor : 'rgb(' + this.state.color.red + ' , ' + this.state.color.green + ' , ' + this.state.color.blue + ')'
	};

	return (
		<div className="contenedor" style={style} 
			onMouseMove={this.handleMouseMove.bind(this)} 
			onMouseEnter={this.handleInMouse.bind(this)}
			onMouseLeave={this.handleOutMouse.bind(this)} 
			onDoubleClick={this.handleDoubleClick.bind(this)} >
		</div>
		);
}
// 

}


export default MouseColor