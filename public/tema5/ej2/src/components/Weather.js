import React, { Component } from 'react';
import {FormWeather} from './index';

import {Request} from 'react-http-request';
class Weather extends Component {
  render() {
    return (
		<div>
			<div className='col-md-5'>
				<FormWeather />
			</div>

			Estoy en weather
		</div>
    );
  }
}

export default Weather;