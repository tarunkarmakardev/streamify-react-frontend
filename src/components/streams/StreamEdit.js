import React, { Component } from "react";
import StreamForm from "./StreamForm";
import LoaderFullScreen from "../loader/LoaderFullScreen";

export default class StreamEdit extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      fetchSingleStream,
    } = this.props;
    fetchSingleStream(id);
  }
  onSubmit = (formValues) => {
    const {
      match: {
        params: { id },
      },
      updateStream,
    } = this.props;
    updateStream(id, formValues);
    // console.log(formValues);
  };
  render() {
    // console.log(this.props);
    const { fetchLoading, updateLoading, initialValues } = this.props;
    if (fetchLoading || updateLoading) {
      return <LoaderFullScreen />;
    }
    return (
      <div className="container">
        <StreamForm onSubmit={this.onSubmit} initialValues={initialValues} />
      </div>
    );
  }
}
