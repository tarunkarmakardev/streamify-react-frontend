import React, { Component } from "react";
import { Redirect } from "react-router";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = (formvalues) => {
    // console.log(formvalues);
    this.props.streamCreate(formvalues);
  };
  render() {
    // console.log(this.props);

    return this.props.isSignedIn == null ? (
      <Redirect referer="/streams/create" to="/signin" />
    ) : (
      <div className="container">
        <h2>Create a Stream: </h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default StreamCreate;
