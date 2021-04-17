import React, { Component } from "react";
import Search from "./Search";
import StreamDisplay from "../streams/streamList/StreamDisplay";
import List from "../streams/streamList/List";
import LoaderFullScreen from "../loader/LoaderFullScreen";

class youtubeLive extends Component {
  state = {
    id: null,
  };
  componentDidMount() {
    const { getYoutubeList } = this.props;
    getYoutubeList("lofi");
  }

  handleOnClick = (id) => {
    this.setState({ id: id });
  };

  renderList = (videos) => {
    return videos.map(
      ({ snippet: { description, title }, id: { videoId } }) => {
        return (
          <List
            description={description}
            title={title}
            key={videoId}
            youtubeId={videoId}
            handleOnClick={(id) => this.handleOnClick(id)}
          >
            <div className="d-lg-none">
              {this.state.id === videoId ? (
                <StreamDisplay id={this.state.id} />
              ) : null}
            </div>
          </List>
        );
      }
    );
  };

  render() {
    const { videos, getYoutubeList, loading } = this.props;
    // console.log(this.props);
    if (loading) {
      return <LoaderFullScreen />;
    }
    return (
      <div className="container">
        <Search getYoutubeList={getYoutubeList} />
        <div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <h2 className="p-3">Pick up a Stream: </h2>
              {videos.data ? this.renderList(videos.data.items) : null}
            </div>
            <div className="col-12 col-lg-8 d-none d-lg-block">
              <h2 className="p-3">Playback: </h2>
              <StreamDisplay id={this.state.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default youtubeLive;
