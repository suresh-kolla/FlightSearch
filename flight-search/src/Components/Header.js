import React, { Component } from "react";
import "./../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="App-header" data-test="component-header">
        <h1 className="App-title" data-test="header-word">
          {this.props.title}
        </h1>
      </div>
    );
  }
}
