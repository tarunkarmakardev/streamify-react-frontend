import React, { Component } from "react";
import AuthForm from "./AuthForm";
import AuthModal from "./AuthModal";
import LoaderFullScreen from "../loader/LoaderFullScreen";

class SignIn extends Component {
  onSubmit = (values) => {
    const { signIn } = this.props;
    signIn(values);
  };

  render() {
    // console.log(this.props);
    if (this.props.loading) {
      return <LoaderFullScreen />;
    }
    return (
      <AuthModal name="Sign In to access your streams">
        <AuthForm onSubmit={this.onSubmit} />
      </AuthModal>
    );
  }
}

export default SignIn;
