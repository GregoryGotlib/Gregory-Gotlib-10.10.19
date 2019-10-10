import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmptyFavoriteMassage from './EmptyFavoriteMassage'
import FavoriteCard from './FavoriteCard'

class Favorites extends Component {
    
    render() {
        var favsObject = JSON.parse(localStorage.getItem('favsObject'));
        return (
            <div className="fav-container">
                {favsObject ? favsObject.length > 0 ? 
                    <div className="card-group" id="favs-card-group">
                        {favsObject.map(favorite =>
                            <FavoriteCard
                                key={favorite.cityKey}
                                cityKey={favorite.cityKey}
                                cityName={favorite.cityName}
                                countryName={favorite.countryName}
                                weatherObject={favorite.weatherObject[0]}
                                forecastObject={favorite.forecastObject}
                                mainWeatherCityKey={this.props.mainWeatherCityKey}
                                temperatureUnit={this.props.temperatureUnit}
                            />
                        )
                        }
                    </div>
                    :
                    <EmptyFavoriteMassage />
                : ''}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const favorites = state.favorites
    const mainWeatherCityKey = state.weather.cityKey
    const tempUnit = state.temperatureUnit
    return {
        mainWeatherCityKey: mainWeatherCityKey,
        favoritesArray: favorites,
        temperatureUnit: tempUnit
    }
}

export default connect(mapStateToProps, null)(Favorites)
