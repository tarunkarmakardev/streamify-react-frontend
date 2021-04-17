import React, { Component } from "react";

export default class MenuButton extends Component {
  render() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        onClick={this.props.onClick}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  }
}
