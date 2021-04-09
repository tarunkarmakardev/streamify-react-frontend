import React, { Component } from "react";

export default class StreamDisplay extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <iframe
          width="760"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
