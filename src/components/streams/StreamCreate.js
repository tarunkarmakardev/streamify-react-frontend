import React, { Component } from "react";
import { Redirect } from "react-router";
import StreamForm from "./StreamForm";
import LoaderFullScreen from "../loader/LoaderFullScreen";

class StreamCreate extends Component {
  onSubmit = (formvalues) => {
    // console.log(formvalues);
    this.props.streamCreate(formvalues);
  };
  render() {
    const { loading } = this.props;
    // console.log(this.props);

    if (loading) {
      return <LoaderFullScreen />;
    }

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
