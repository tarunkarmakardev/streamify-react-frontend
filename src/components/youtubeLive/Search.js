import React, { Component } from "react";

export default class Search extends Component {
  state = {
    term: "",
  };
  handleOnSubmit = (e) => {
    const { getYoutubeList } = this.props;
    e.preventDefault();
    getYoutubeList(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form
        className="row justify-content-start g-0 mt-4"
        onSubmit={this.handleOnSubmit}
      >
        <div className="col-12 col-lg-2">
          <label className="form-label">Search a Live video: </label>
        </div>

        <div className="col-10 col-lg-6">
          <input
            type="text"
            className="form-control"
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
        <div className="col-1 ms-1">
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    );
  }
}
