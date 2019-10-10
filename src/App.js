import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import { createGeolocation, createForecastByLocation,getWeatherByLocation } from './utilities/ApiConnection'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather ,fetchApiFailed ,fetchApiSuccess } from './redux/actions/ApiActions'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Main from './components/pages/Main';
import FavoritesContainer from './components/pages/FavoritesContainer';


class App extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.updateStoreMainWeather(position.coords.latitude, position.coords.longitude)
        return
      })
    }
    //this.updateStoreMainWeather(32.0853, 34.7818)
  }

  async updateStoreMainWeather(lat, lon) {
    var geolocation = createGeolocation(lat, lon)

    var locationObject = await fetch(geolocation)
      .then(res => res.json())
      .catch(error => alert('location object problem:',error))

    if (locationObject === undefined){
      return
    } 
    
    var cityKey = locationObject.Key
    var cityName = locationObject.LocalizedName 
    var countryName = locationObject.Country.LocalizedName
    var currentWeather = getWeatherByLocation(cityKey)

    var weatherObject = await fetch(currentWeather)
      .then(res => res.json())
      .catch(error => alert('There are no more free calls! limit is 50',error))

    if (weatherObject === undefined){
      return
    } 

    var weatherForeCast = createForecastByLocation(cityKey)

    var weatherForeCastObject = await fetch(weatherForeCast)
      .then(res => res.json())
      .catch(error => alert('forecast problem:',error))

    if (weatherForeCastObject === undefined) 
    {
      return
    }

    const weatherObjectBody = {
      cityKey: cityKey,
      cityName: cityName,
      isFavorite: false,
      countryName: countryName,
      weatherObject: weatherObject,
      forecastObject: weatherForeCastObject
    };
    localStorage.setItem('weatherData', JSON.stringify(weatherObjectBody));
    this.props.fetchApiSuccess()
    this.props.fetchWeather(weatherObjectBody)
  }

render(){
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/"  component={Main}/>
        <Route  path="/favorites" component={FavoritesContainer}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchWeather: fetchWeather,
    fetchApiSuccess: fetchApiSuccess,
    fetchApiFailed: fetchApiFailed
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(App)
