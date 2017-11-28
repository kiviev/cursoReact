import React from 'react';
import ReactDOM from 'react-dom';
import './foundation.min.css';

// foundation
import { ProgressBar } from 'react-foundation-components/lib/progress-bar';
import { Thumbnail } from 'react-foundation-components/lib/thumbnail';
class ProgressBarClass extends React.Component {

constructor(props){
	super(props);

	this.state = {
		percent :0
	}

	this.params = {
		max : 100,
		min: 0,
		interval : 200
	}
}

randomNumber(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

 complexFormatter(percent, value, min, max) {
return `percent = ${percent}, value = ${value}, min = ${min}, max = ${max}`;
}

 percentFormatter(percent) {
	const rounded = Math.round(percent * 100);
	let progress = this.state.percent;
	let max = this.params.max;

	let interval = setInterval(()=>{
		if(progress <= max){
			let rand = this.randomNumber(1,3);
			progress = progress + rand;
			if (progress >= this.params.max){
				progress = this.params.max;
			}	clearInterval(interval);
			this.setState({percent : progress})
		}
	},this.params.interval);

return `${rounded}%`;
}


render(){
	const thumpStyle ={
		display : this.state.percent >= this.params.max ? 'block' : 'none'
	}
	return (
		<div>
			<ProgressBar color="alert" labelFormatter={this.percentFormatter.bind(this)} max={this.params.max} min={this.params.min} value={this.state.percent} />
			<Thumbnail style={thumpStyle}
					alt="Photo of Uranus."
					width="100%"
					src="https://www.viajejet.com/wp-content/viajes/paisajes-del-campo-flores.jpg"
					/>
		</div>
		)
}


}

export default ProgressBarClass;