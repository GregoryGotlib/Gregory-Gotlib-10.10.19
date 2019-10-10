const apiKey = "xxxM8OGG5lXk1IxWl9wvYu3s7M7LkBBb"

export const buildAutoLocation = (q) => {
    return "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + apiKey + "&q=" + q
}

export const getWeatherByLocation = (cityKey) => {
    return "https://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + apiKey
}

export const createForecastByLocation = (cityKey) => {
    return "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + apiKey
}



export const createGeolocation = (lat, lon) => {
    return "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + apiKey + "&q=" + lat + "%2C" + lon
}