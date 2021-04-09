import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavButton extends Component {
  render() {
    const { title, link, onClick } = this.props;
    return (
      <li className="nav-item ms-3">
        <Link className="btn btn-primary" to={link} onClick={onClick}>
          {title}
        </Link>
      </li>
    );
  }
}
