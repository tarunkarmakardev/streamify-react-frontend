import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { description, title, link, handleOnClick } = this.props;
    return (
      <div className="list-group">
        <div
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
          onClick={() => handleOnClick(link.split("?v=")[1])}
        >
          <div className="d-flex w-100 justify-content-start">
            <i className="bi bi-tv-fill fs-5"></i>
            <h5 className="mb-1 ms-2">{title}</h5>
          </div>
          <p className="mb-1">{description}</p>
        </div>
      </div>
    );
  }
}
