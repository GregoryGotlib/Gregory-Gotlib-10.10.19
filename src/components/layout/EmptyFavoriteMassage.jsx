import React, { Component } from "react";
import '../../style/EmptyFavoriteMassage.css'

export default class EmptyFavoriteMassage extends Component {
  render() {
    return (
      <div class="jumbotron" id="empty-fav-jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p id="empty-fav-p">Unfortunately there are not favorite locations selected yet..</p>
      </div>
    );
  }
}
