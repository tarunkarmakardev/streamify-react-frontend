import React, { Component } from "react";
import history from "../../../history";

export default class List extends Component {
  editStream = (id) => {
    history.push(`/streams/edit/${id}`);
  };
  deleteStream = (id) => {
    history.push(`/streams/delete/${id}`);
  };
  render() {
    // console.log(this.props);

    const {
      description,
      title,
      youtubeId,
      handleOnClick,
      displayButtons,
      id,
    } = this.props;
    return (
      <div className="list-group">
        <div
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action"
          onClick={() => {
            handleOnClick(youtubeId);
          }}
        >
          <div className="d-flex w-100 justify-content-evenly">
            <i className="bi bi-tv-fill fs-5"></i>
            <h5 className="mb-1 ms-2">{title}</h5>
          </div>
          <p className="mb-1">{description}</p>
          {displayButtons ? (
            <>
              <button
                className="btn btn-primary"
                onClick={() => this.editStream(id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => this.deleteStream(id)}
              >
                Delete
              </button>
            </>
          ) : null}
          {this.props.children}
        </div>
      </div>
    );
  }
}
