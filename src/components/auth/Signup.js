import React, { Component } from "react";
// Local imports
import AuthForm from "./AuthForm";
import AuthModal from "./AuthModal";
import LoaderFullScreen from "../loader/LoaderFullScreen";

class Signup extends Component {
  onSubmit = (values) => {
    this.props.signUp(values);
  };

  componentWillUnmount() {
    this.props.clearSignUpState();
  }

  renderMessage = () => {
    const { signUpStatus, signUpResponse } = this.props;
    if (signUpStatus === 201) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {signUpResponse.Message}
          <button type="button" className="btn-close"></button>
        </div>
      );
    } else if (signUpStatus === 400) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {signUpResponse.username[0]}
          <button type="button" className="btn-close"></button>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    // console.log(this.props);
    if (this.props.loading) {
      return <LoaderFullScreen />;
    }
    return (
      <AuthModal name="Sign Up to access your streams">
        {this.renderMessage()}
        <AuthForm onSubmit={this.onSubmit} />
      </AuthModal>
    );
  }
}

export default Signup;
