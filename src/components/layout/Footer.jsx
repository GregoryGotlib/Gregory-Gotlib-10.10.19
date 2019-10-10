import React, { Component } from "react";
import '../../style/Main.css'
export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light mt-5 p-4 text-center" id="footer">
        &copy; {new Date().getFullYear()} Weather Application by Gregory
        Gotlib
      </footer>
    );
  }
}
