import React, { Component } from "react";
import ReactDOM from "react-dom";

class LoaderFullScreen extends Component {
  render() {
    return ReactDOM.createPortal(
      <div
        className="modal fade show d-flex justify-content-center align-items-center"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.42)" }}
        onClick={this.redirectHome}
      >
        <div
          className="spinner-grow "
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default LoaderFullScreen;
