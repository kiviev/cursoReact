import React, { Component } from 'react';
// import {FormWeather , ApiOpenweathermap} from './index';


import './weather-card.css';
class PresentWeather extends Component {
	constructor(props){
		super(props);
	}


	getTemp(){
		return this.props.params.main.temp;
	}
	getTempMax(){
		return this.props.params.main.temp_max + '°C';
	}
	getTempMin(){
		return this.props.params.main.temp_min + '°C';
	}

	getIcon(){
		return this.props.params.weather[0].icon;
	}
	getCityName(){
		return this.props.params.city;
	}
	getDescription(){
		return this.props.params.weather[0].description;
	}
	getWeatherIconUrl(){
		return this.props.params.weatherIcon;
	}

	getTimeString(time ,hour){
		let date = new Date(time);
		if(hour) return date.toLocaleTimeString('es-ES');
		return date.toLocaleString('es-ES');
	}

	getSunriseTime(time){
		return this.getTimeString(this.props.params.sol.amanece ,true);
	}
	getSunsetTime(time){
		return this.getTimeString(this.props.params.sol.anochece ,true);
	}

	getDateToday(){
		return  this.getTimeString(Date.now());
	}

  render() {
    return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="weather-card one">
						<div className="top">
							<div className="wrapper">
								<div className="mynav">
								<h4> {this.getDateToday()}</h4>
								</div>
								<h1 className="heading">{this.getDescription()}</h1>
								<h3 className="location">{this.getCityName()}</h3>
								<p className="weatherIcon">
									<img src={this.getWeatherIconUrl()}/>
								</p>
								<p className="temp">
									<span className="temp-value">{this.getTemp()}</span>
									<span className="deg">0</span>
									<a href="javascript:;"><span className="temp-type">C</span></a>
								</p>
								<div className="row dataWeather">
									<div className="col col-md-6">
										<div className='sun text-left'>
											<p className="sunrise ">
												<i className="wi wi-sunrise"></i>
													{this.getSunriseTime()}
											</p>
											<p className="sunset">
												<i className="wi wi-sunset"></i>
													{this.getSunsetTime()}
											</p>
										</div>

									</div>
									<div className="col-md-6">
										<div className='max-min-temp text-right'>
											<p className="temperature-max">
												<span className="temp-value">{this.getTempMax()}</span>
												<i className="wi wi-thermometer"></i>
											</p>
											<p className="temperature-min">
												<span className="temp-value">{this.getTempMin()}</span>
												<i className="wi wi-thermometer-exterior"></i>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom">
							<div className="wrapper">
								<ul className="forecast">
									<a href="javascript:;"><span className="lnr lnr-chevron-up go-up"></span></a>
									<li className="active">
										<span className="date">Yesterday</span>
										<span className="lnr lnr-sun condition">
											<span className="temp">23<span className="deg">0</span><span className="temp-type">C</span></span>
										</span>
									</li>
									<li>
										<span className="date">Tomorrow</span>
										<span className="lnr lnr-cloud condition">
											<span className="temp">21<span className="deg">0</span><span className="temp-type">C</span></span>
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default PresentWeather;



/*
<div className="container">
			<div className="row">
				<div className="col-md-6">
					<div>
						icono
					</div>
				</div>
				<div className="col-md-6">
					<ul className="list-group">
						<li className="list-group-item">Temperatura Actual : {this.getTemp()}</li>
						<li className="list-group-item">Máxima : {this.getTempMax()}</li>
						<li className="list-group-item">Mínima : {this.getTempMin()}</li>
					</ul>
				</div>
			</div>
			
		</div>


 */