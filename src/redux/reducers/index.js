import { combineReducers } from 'redux';
import weatherForeCast from './WeatherReducer'
import favorites from './FavoritesReducer'
import temperatureUnit from './TemperatureUnitReducer'
import fetchApi from './FetchApiReducer'

const allReducers = combineReducers({
    weather: weatherForeCast,
    favorites: favorites,
    temperatureUnit: temperatureUnit,
    fetchApi: fetchApi
})

export default allReducers;