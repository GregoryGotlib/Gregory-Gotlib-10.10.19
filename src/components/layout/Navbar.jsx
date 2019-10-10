import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Icon, Header, Checkbox, Container } from 'semantic-ui-react'
import changeTemperatureUnit from "../../redux/actions/TemperatureActions";
import '../../style/Navbar.css';

class Navbar extends Component {

  toggleTempUnit = ()=>{
    this.props.changeTemperatureUnit()
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Herolo Weather Task
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li id="toggle-container">
            <li id="toggle-header">
              <Header.Subheader>{"°C"} | {"°F"}</Header.Subheader>
              </li>
              <li>
                <Checkbox onChange={this.toggleTempUnit} toggle />
              </li>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/favorites" className="nav-link">
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
      {
        changeTemperatureUnit: changeTemperatureUnit
      }, dispatch);
}

export default connect(null, matchDispatchToProps)(Navbar)


