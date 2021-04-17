import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
//Other imports
import history from "./history";
// Components
import LoaderFullScreen from "./components/loader/LoaderFullScreen";

// Containers
import NavbarContainer from "./containers/navbar/NavbarContainer";
import SignUpContainer from "./containers/auth/SignUpContainer";
import SignInContainer from "./containers/auth/SignInContainer";
import streamCreateContainer from "./containers/streams/StreamCreateContainer";
import StreamListContainer from "./containers/streams/StreamListContainer";
import StreamEditContainer from "./containers/streams/StreamEditContainer";
import YoutubeLiveContainer from "./containers/youtube/YoutubeLiveContainer";
import StreamDeleteContainer from "./containers/streams/StreamDeleteContainer";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <NavbarContainer />
        <Switch>
          <Route
            exact
            path="/"
            component={StreamListContainer}
            key="all-streams"
          />
          <Route
            exact
            path="/streams/view/own"
            component={StreamListContainer}
            key="own-streams"
          />
          <Route
            exact
            path="/streams/create"
            component={streamCreateContainer}
          />
          <Route
            exact
            path="/streams/edit/:id"
            component={StreamEditContainer}
          />
          <Route
            exact
            path="/streams/delete/:id"
            component={StreamDeleteContainer}
          />
          <Route
            exact
            path="/streams/youtube"
            component={YoutubeLiveContainer}
          />
          <Route exact path="/loader" component={LoaderFullScreen} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/signin" component={SignInContainer} />
        </Switch>
      </Router>
    );
  }
}
