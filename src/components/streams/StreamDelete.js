import React, { Component } from "react";
import ReactDOM from "react-dom";
import history from "../../history";
import LoaderFullScreen from "../loader/LoaderFullScreen";

export default class StreamDelete extends Component {
  closeModal = () => {
    history.push("/");
  };
  render() {
    // console.log(this.props);
    const {
      match: {
        params: { id },
      },
      deleteStream,
      loading,
    } = this.props;
    if (loading) {
      return <LoaderFullScreen />;
    }
    return ReactDOM.createPortal(
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.42)" }}
        onClick={this.closeModal}
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Stream</h5>
              <button
                type="button"
                className="btn-close"
                onClick={this.closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Do you really want to delete this stream?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteStream(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
