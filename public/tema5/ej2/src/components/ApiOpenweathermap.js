import React, { Component } from 'react';
import Request from 'react-http-request';
import CONFIG from '../config/config';

import {PresentWeather} from './index';
class ApiOpenweathermap extends Component {

	url = CONFIG.apiWeather.url ;
	appid = CONFIG.apiWeather.appid ;
	data = CONFIG.apiWeather.data;
	version = CONFIG.apiWeather.version;
	type = CONFIG.apiWeather.type;
	iconPath = CONFIG.apiWeather.imgIconPath;

	
	constructor(props){
		super(props);
		this.state = {
			city : this.props.city,
		}
		this.city = this.props.city;
		this.result = this.getWeather();
	}

	geturl(){
		return this.url + this.data + this.version + this.type +'?appid=' + this.appid + this.getUnits() + this.getLang();
	}
	getUrlIcon(icon){
		return this.url + this.iconPath + '/' + icon + '.png';
	}
	getCity(){
		return '&q=' + this.props.city
	}
	getUnits(){
		return '&units=metric';
	}
	getLang(){
		return '&lang=es';
	}
	getWeather(){
		if(this.props.city){
				return (
					<Request
				        url={this.geturl() + this.getCity()}
				        method='get'
				        accept='application/json'
				        verbose={true}
				      >
				        {
				          ({error, result, loading}) => {
				            if (loading) {
				              return <div>loading...</div>;
				            }
				            else if (error){
				            	if(error.response){
					            	return <div> 
					            			<h3>Ha habido un error</h3>
					            	 			<p> {error.response.statusText}</p>
					            	 			<p> {error.response.body.message}</p>
					            	 		</div>
				            		
				            	}else if (error.crossDomain) {
				            		return <div> cross Domain</div>
				            	}
				            	else {
				            		return <div> Error</div>
				            	}
				            }
				             else {
				             	let params = {
				             		main : result.body.main,
				             		weather : result.body.weather,
				             		weatherIcon : this.getUrlIcon(result.body.weather[0].icon),
				             		wind : result.body.wind,
				             		city : result.body.name,
				             		coordenadas : result.body.coord,
				             		sol : {
				             				amanece : result.body.sys.sunrise * 1000,
				             				anochece : result.body.sys.sunset * 1000,
				             				},

				             	}
				            	return <PresentWeather 
				            		params={params}
				            	/>
				            }
				          }
				        }
				    </Request>
		      );
			
		}
	}

  render() {
    return (
		<div>
			{this.state.city !== '' ? this.getWeather() : ''}
		</div>
    );
  }
}

export default ApiOpenweathermap;