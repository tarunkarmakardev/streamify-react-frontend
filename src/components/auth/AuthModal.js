import React, { Component } from "react";
import ReactDOM from "react-dom";
import history from "../../history";

export default class AuthModal extends Component {
  redirectHome = () => {
    history.push("/");
  };
  render() {
    return ReactDOM.createPortal(
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.42)" }}
        onClick={this.redirectHome}
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {this.props.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={this.redirectHome}
              ></button>
            </div>
            <div className="modal-body">{this.props.children}</div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
