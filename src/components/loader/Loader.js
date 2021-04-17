import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="spinner-grow "
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
