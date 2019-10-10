import React, { Component } from "react";
import '../../style/ForecastInformation.css'

export default class ForecastInformation extends Component {
  constructor(props) {
    super(props)
}
  getDayFromEpochDate(epochDate) {
    var date = new Date(epochDate * 1000).toLocaleDateString("en-us", {
      weekday: "long"
    });
    return date;
  }

  convertFarenheitToCelsius(val) {
    return (((val - 32) * 5) / 9).toFixed(1);
  }

  generateWeatherIcon(weatherIcon) {
    return weatherIcon < 10
      ? "./weather-icons/0" + weatherIcon + "-s.png"
      : "./weather-icons/" + weatherIcon + "-s.png";
  }

  render() {

    return (
      <div className="card text-center">
        <div className="card-header">
          {this.getDayFromEpochDate(this.props.dayObject.EpochDate)}
          <div className="card-body">
            <img src={this.generateWeatherIcon(this.props.dayObject.Day.Icon)}></img>
            <div className="card-text">
              {this.props.temperatureUnit === false
                ? this.convertFarenheitToCelsius(
                    this.props.dayObject.Temperature.Maximum.Value
                  ) + "°"
                : this.props.dayObject.Temperature.Maximum.Value + "°"}
            </div>
            <div className="card-text">
              {this.props.temperatureUnit === false
                ? this.convertFarenheitToCelsius(
                    this.props.dayObject.Temperature.Minimum.Value
                  ) + "°"
                : this.props.dayObject.Temperature.Minimum.Value + "°"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
