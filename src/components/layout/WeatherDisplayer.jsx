import React, { Component } from 'react'
import '../../style/WeatherDisplayer.css'
export default class WeatherDisplayer extends Component {
    constructor(props){
        super(props)
    }
    generateWeatherIcon(weatherIcon) {
        return weatherIcon < 10
          ? "./weather-icons/0" + weatherIcon + "-s.png"
          : "./weather-icons/" + weatherIcon + "-s.png";
    }

      getTemperature = (weatherObject, tempUnit) => {
        if (JSON.stringify(weatherObject) != '{}') {
            if (tempUnit == false) {
                return weatherObject.Temperature.Metric.Value + "°"
            } else {
                return weatherObject.Temperature.Imperial.Value + "°"
            }
        }
        return null
    }
    
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <h1>{this.props.weatherText}</h1>
                    <img src={this.generateWeatherIcon(this.props.weatherObject.WeatherIcon)} />
                <div className="container">
                    {this.props.cityName}
                    <p className="lead">{this.props.countryName}</p>
                    <p className="lead">
                        {this.getTemperature(this.props.weatherObject, this.props.temperatureUnit)}
                    </p>
                </div>
            </div>
            </div>
        )
    }
}
