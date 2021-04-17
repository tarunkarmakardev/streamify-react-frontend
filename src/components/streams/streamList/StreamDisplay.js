import React, { Component } from "react";
import Loader from "../../loader/Loader";

export default class StreamDisplay extends Component {
  render() {
    // console.log(this.props);
    const { id } = this.props;
    if (id) {
      return (
        <div>
          <iframe
            className="w-100 video-player"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return (
      <div
        style={{ height: "500px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Loader />
      </div>
    );
  }
}
