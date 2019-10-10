import SaveDataToLocalStorage from '../../utilities/LocalStorageUtil'
import RemoveDataFromLocalStorage from '../../utilities/RemoveFromLocalStorageUtil'
import RemoveDataFromLocalStorageByKey from  '../../utilities/RemoveDataFromLocalStorageByKey'

const initialState = {
    cityKey: 0,
    cityName: "",
    countryName: "",
    isFavorite: false,
    weatherObject: [{}],
    forecastObject: {
        headline: {},
        dailyForecasts: []
    }
}

const weatherForeCast = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER':
            return action.payload
        case 'ADD_FAVORITE':
            SaveDataToLocalStorage(state)
            return Object.assign({}, state, {
                isFavorite: true
            });
        case 'REMOVE_FAVORITE':
            if (state.cityKey === action.payload) {
            RemoveDataFromLocalStorage(state)
                return Object.assign({}, state, {
                    isFavorite: false
                });
            } else {
                RemoveDataFromLocalStorageByKey(action.payload)
                return Object.assign({}, state, {
                    isFavorite: false
                });
            }
        default:
            return state
    }
}

export default weatherForeCast;