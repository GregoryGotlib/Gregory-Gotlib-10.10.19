import React, { Component } from "react";
import "../../style/SearchBar.css";
import { Dropdown } from 'semantic-ui-react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createForecastByLocation,
  getWeatherByLocation,
  buildAutoLocation
} from "../../utilities/ApiConnection";
import { fetchWeather } from "../../redux/actions/ApiActions";

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      locations: []
    };
  
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSearchChange(event, { searchQuery }) {
    if (searchQuery !== "" && searchQuery !== undefined) {
      var autoLocation = buildAutoLocation(searchQuery);
      fetch(autoLocation)
        .then(res => res.json())
        .then(data => this.handleInputChange(data))
        .catch(error => alert("Something went wrong:",error));
    } else {
      this.setState({ data: [] });
    }
  }

  handleChange(event, { value }) {
    this.updateWeaterViaStore(value);
  }

  handleInputChange(data) {
    this.setState({
      data: data.map(this.convertDataToObject),
      locations: data
    });
  }

  convertDataToObject(data) {
    return {
      key: data.Key,
      text: data.LocalizedName + ", " + data.Country.LocalizedName,
      value: data.Key
    };
  }

  async updateWeaterViaStore(key) {
    var weatherResponse = await fetch(getWeatherByLocation(key)).then(
      res => res.json()
    );

    var forecastResponse = await fetch(createForecastByLocation(key)).then(
      res => res.json()
    );

    var locationObject = this.state.locations.filter(
      location => location.Key === key
    );

    const weatherObjectBody = {
      cityKey: key,
      cityName: locationObject[0].LocalizedName,
      isFavorite: false,
      countryName: locationObject[0].Country.LocalizedName,
      weatherObject: weatherResponse,
      forecastObject: forecastResponse
    };

    this.props.fetchWeather(weatherObjectBody);
  }


  render() {
    const placeholder = "Search city to get 5 days weather forecast";
    let displayData
    if(this.props.fetchApi === 'loading' || this.props.fetchApi === 'failed' ){
      displayData=''
    }
    else{
      displayData = (<Dropdown
        button
        className="icon teal big"
        selectOnNavigation={false}
        floating
        labeled
        icon="map"
        options={this.state.data}
        search
        text={placeholder}
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
      />)
    }
  
    return (
      <div className="row">
        <div className="col-12">
          <div className="container">
            {displayData}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather:fetchWeather }, dispatch);
}

function mapStateToProps(state) {
  return { fetchApi: state.fetchApi };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
