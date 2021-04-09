import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavLink extends Component {
  render() {
    const { title, link } = this.props;
    return (
      <li className="nav-item">
        <Link className="nav-link" to={link}>
          {title}
        </Link>
      </li>
    );
  }
}
