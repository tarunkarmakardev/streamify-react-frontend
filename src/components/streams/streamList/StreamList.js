import React, { Component } from "react";
import List from "./List";
import StreamDisplay from "./StreamDisplay";

export default class StreamList extends Component {
  state = {
    own: false,
  };
  componentDidMount() {
    const {
      match: { url },
    } = this.props;
    if (url === "/streams/view/own") {
      this.props.streamList(true);
      // console.log("true");
    }
    if (url === "/") {
      this.props.streamList();
    }
  }

  handleOnClick = (id) => {
    this.setState({ id: id });
  };

  renderList = (streamListItems) => {
    return streamListItems.map(({ description, title, link }) => {
      return (
        <List
          description={description}
          title={title}
          key={link}
          link={link}
          handleOnClick={(id) => this.handleOnClick(id)}
        />
      );
    });
  };

  render() {
    const { streamListItems } = this.props;
    // console.log(this.props);
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <h2 className="p-3">Pick up a Streams: </h2>
            {streamListItems.length > 0
              ? this.renderList(streamListItems)
              : null}
          </div>
          <div className="col-8">
            <h2 className="p-3">Playback: </h2>
            <StreamDisplay id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}
