import React, { Component } from "react";
import List from "./List";
import StreamDisplay from "./StreamDisplay";
import LoaderFullScreen from "../../loader/LoaderFullScreen";

export default class StreamList extends Component {
  state = {
    id: null,
    own: false,
  };
  componentDidMount() {
    const {
      match: { url },
    } = this.props;
    this.setState({ own: false });
    if (url === "/streams/view/own") {
      this.props.streamList(true);
      this.setState({ own: true });
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
    const { own } = this.state;
    return streamListItems.map(({ id, description, title, link }) => {
      const youtubeId = link.search("v=") === -1 ? link : link.split("?v=")[1];
      return (
        <List
          id={id}
          description={description}
          title={title}
          key={link}
          youtubeId={youtubeId}
          handleOnClick={(id) => this.handleOnClick(id)}
          displayButtons={own}
        >
          <div className="d-lg-none">
            {this.state.id === youtubeId ? (
              <StreamDisplay id={this.state.id} />
            ) : null}
          </div>
        </List>
      );
    });
  };

  render() {
    const { streamListItems, loading } = this.props;
    if (loading) {
      return <LoaderFullScreen />;
    }
    // console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h2 className="p-3">Pick up a Stream: </h2>
            {streamListItems.length > 0
              ? this.renderList(streamListItems)
              : null}
          </div>
          <div className="col-12 col-lg-8 d-none d-lg-block">
            <h2 className="p-3">Playback: </h2>
            <StreamDisplay id={this.state.id} />
          </div>
        </div>
      </div>
    );
  }
}
