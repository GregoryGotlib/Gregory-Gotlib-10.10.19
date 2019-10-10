import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

export default class AddToFavorites extends Component {
  constructor(props) {
    super(props)
}

  handleClick=()=>{
    this.props.toggleFavorite();
  }

  render() {
    let checkIfFavorite = this.props.isFavorite
    let temp = []
    if(checkIfFavorite === false && JSON.parse(localStorage.getItem('favsObject'))!==null && JSON.parse(localStorage.getItem('favsObject')).length > 0 && this.props.weatherForeCast.cityKey > 0){
      temp = JSON.parse(localStorage.getItem('favsObject'))
      if(temp.filter(obj=> obj.cityName == this.props.weatherForeCast.cityName)[0]!==undefined){
        checkIfFavorite = temp.filter(obj=> obj.cityName == this.props.weatherForeCast.cityName)[0].isFavorite
      }
      if (checkIfFavorite){
        this.handleClick()
      }
    } 
    
    return (
      <div>
        {this.props.isFavorite ? (
          <Icon
            name="thumbs up"
            size="large"
            color="red"
            onClick={this.handleClick}
          />
        ) : (
          <Icon
            name="thumbs up"
            size="large"
            color="black"
            onClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}
