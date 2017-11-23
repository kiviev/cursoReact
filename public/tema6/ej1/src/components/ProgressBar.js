import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';

// foundation
import { ProgressBar } from 'react-foundation-components/lib/progress-bar';
class ProgressBarClass extends React.Component {

constructor(props){
	super(props);

	this.state = {
		percent :0
	}

	this.params = {
		max : 100,
		min: 0
	}
}

 complexFormatter(percent, value, min, max) {
return `percent = ${percent}, value = ${value}, min = ${min}, max = ${max}`;
}

time(){return Math.round(Math.random() * 1000)};
 percentFormatter(percent) {
const rounded = Math.round(percent * 100);
 		let progress = this.state.percent;

 	let timer = setInterval(()=>{
 		if ( progress <= this.state.percent && progress <= this.params.max){
 			this.setState({percent : progress ++});
 			console.log('porc: ' + this.state.percent);
 		}//else clearInterval(timer);
 	} , this.time()).bind(this);

return `${rounded}%`;
}


render(){
	return (
			<ProgressBar color="alert" labelFormatter={this.percentFormatter.bind(this)} max={this.params.max} min={this.params.min} value={this.state.percent} />
		)
}


}

export default ProgressBarClass;