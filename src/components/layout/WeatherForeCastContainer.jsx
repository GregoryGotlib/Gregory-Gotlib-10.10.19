import React, { Component } from "react";
import ForecastInformation from './ForecastInformation'
import '../../style/WeatherForeCastContainer.css'

export default class WeatherForeCastContainer extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    let displayData
    if(this.props.forecastObject.DailyForecasts){
      if(this.props.forecastObject.DailyForecasts.length > 0){
     displayData = this.props.forecastObject.DailyForecasts.map(date => <ForecastInformation key={date.EpochDate} dayObject={date} 
      temperatureUnit={this.props.temperatureUnit} />)
    }
    }
    else{
       displayData='NO DATA TO DISPLAY';
    }

    return (
      <div className="card-group" id="forecast-card-group">
          {displayData}
      </div>
    );
  }
}
