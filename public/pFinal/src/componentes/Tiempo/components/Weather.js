import React, { Component } from 'react';
import {FormWeather } from './index';

class Weather extends Component {
	constructor(props){
		super(props);
		this.state ={
			city :'mostoles'
		}
	}
  render() {
    return (
		<div className='row'>
			<div className="col-md-12">
				<FormWeather />
			</div>
			
		</div>
    );
  }
}

export default Weather;