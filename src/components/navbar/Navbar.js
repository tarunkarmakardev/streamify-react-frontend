import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import NavButton from "./NavButton";
import MenuButton from "./MenuButton";

class Navbar extends Component {
  state = {
    menuOpen: false,
  };
  renderNavButtons = () => {
    const { isSignedIn, signOut } = this.props;
    if (!isSignedIn) {
      return (
        <>
          <NavButton title="Login" link="/signin" />
          <NavButton title="Sign up" link="/signup" />
        </>
      );
    }
    return <NavButton title="Sign Out" link="/signout" onClick={signOut} />;
  };
  renderNavLinks = () => {
    const { isSignedIn } = this.props;
    return (
      <>
        {isSignedIn ? (
          <>
            <NavLink title="All Streams" link="/" />
            <NavLink title="Your streams" link="/streams/view/own" />
            <NavLink title="Create a stream" link="/streams/create" />
          </>
        ) : null}
        <NavLink title="YouTube Live" link="/streams/youtube" />
      </>
    );
  };
  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Streamify
            </Link>
            <MenuButton
              onClick={(e) => this.setState({ menuOpen: !menuOpen })}
            />
            <div
              className={`navbar-collapse collapse ${menuOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav">{this.renderNavLinks()}</ul>
              <ul className="navbar-nav ms-auto me-4">
                {this.renderNavButtons()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
