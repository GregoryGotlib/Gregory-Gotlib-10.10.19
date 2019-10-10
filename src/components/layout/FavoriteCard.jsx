import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeFromFavorites } from '../../redux/actions/FavoritesActions'
import { fetchWeather } from '../../redux/actions/ApiActions'
import '../../style/FavoriteCard.css'
import { withRouter } from 'react-router-dom';




class FavoriteCard extends Component {

    constructor(props) {
        super(props)
    }

    handleRemove=()=>{
        this.props.removeFromFavorites(this.props.cityKey)
    }

    showInHomePage=(key)=>{
        if (this.props.mainWeatherCityKey === key) {
            this.props.history.push('/');
        } else {
            this.props
                .fetchWeather({
                    cityKey: this.props.cityKey,
                    cityName: this.props.cityName,
                    isFavorite:true,
                    countryName: this.props.countryName,
                    weatherObject: [this.props.weatherObject],
                    forecastObject: this.props.forecastObject
                })
                console.log(this.props)
                this.props.history.push('/');
            }
    }

    generateWeatherIcon=(weatherIcon)=>{
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
            <div className="card" id="fav-card">
                <div className="card-header">
                    {this.props.cityName}
                </div>
                <div className="card-body">
                    <img src={this.generateWeatherIcon(this.props.weatherObject.WeatherIcon)}/>
                    <div className="card-title">
                        {this.getTemperature(this.props.weatherObject,this.props.temperatureUnit)}
                    </div>
                    <div className="card-title">
                        {this.props.weatherObject.WeatherText}
                    </div>
                    <div className="row-6">
                    <div className="btn btn-danger" onClick={this.handleRemove}>Delete</div>
                    <div className="btn btn-primary" onClick={ ()=>this.showInHomePage(this.props.cityKey)}>Details</div>
                    </div>
                </div>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchWeather: fetchWeather,
            removeFromFavorites: removeFromFavorites
        }, dispatch);
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(FavoriteCard))
