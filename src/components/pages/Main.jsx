import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';

import {
  addToFavorite,
  removeFromFavorites} from "../../redux/actions/FavoritesActions";
import SearchBar from "../layout/SearchBar";
import Loader from "react-loader-spinner";
import WeatherForeCastContainer from "../layout/WeatherForeCastContainer";
import WeatherDisplayer from "../layout/WeatherDisplayer";
import AddToFavorites from "../layout/AddToFavorites";
import "../../style/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  toggleFavorite=()=>{
    if (this.props.isFavorite) {
      this.props.removeFromFavorites(this.props.cityKey);
    } 
    else {
      this.props.addToFavorite({
          cityKey: this.props.cityKey,
          cityName: this.props.cityName,
          countryName: this.props.countryName,
          weatherObject: this.props.weatherObject,
          forecastObject: this.props.forecastObject
      });
    }
  }

  render() {
    const response = this.props.fetchApi;
    let displayGrid;

    switch (response) {
      case "loading":
        displayGrid = (
          <Loader type="Rings" color="blueviolet" height={80} width={80} />
        );
        break;
      case "failed":
        displayGrid = <h1>Fetching error!</h1>;
        break;
      default:
        displayGrid =( 
          <div className="block-container">
            <div className="weather-container">
              <WeatherDisplayer
                cityName={this.props.cityName ? this.props.cityName : ''}
                countryName={this.props.countryName ? this.props.countryName : ''}
                weatherObject={this.props.weatherObject[0]}
                temperatureUnit={this.props.temperatureUnit}
                weatherText={this.props.weatherObject[0].WeatherText}
              />
            </div>
            <div className="favorite-container">
              <AddToFavorites
                isFavorite={this.props.isFavorite}
                toggleFavorite={() => this.toggleFavorite()}
                weatherForeCast={this.props.weatherForeCast}
              />
            </div>
            <div className="forecast-container">
              <WeatherForeCastContainer
                forecastObject={this.props.forecastObject}
                temperatureUnit={this.props.temperatureUnit}
              />
            </div>
          </div>
        )
    }

    return (
      <div className="grid-container">
        <SearchBar />
        {displayGrid}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const weatherForeCast = state.weather;
  const tempUnit = state.temperatureUnit;
  const fetchApi = state.fetchApi;
  return {
    cityKey: weatherForeCast.cityKey,
    cityName: weatherForeCast.cityName,
    countryName: weatherForeCast.countryName,
    weatherObject: weatherForeCast.weatherObject,
    isFavorite: weatherForeCast.isFavorite,
    forecastObject: weatherForeCast.forecastObject,
    temperatureUnit: tempUnit,
    fetchApi: fetchApi,
    weatherForeCast:weatherForeCast
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToFavorite: addToFavorite,
      removeFromFavorites: removeFromFavorites,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(Main));
