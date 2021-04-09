import React, { Component } from "react";
import AuthForm from "./AuthForm";
import AuthModal from "./AuthModal";

class SignIn extends Component {
  onSubmit = (values) => {
    const { signIn } = this.props;
    signIn(values);
  };

  render() {
    // console.log(this.props);
    return (
      <AuthModal name="Sign In to access your streams">
        <AuthForm onSubmit={this.onSubmit} />
      </AuthModal>
    );
  }
}

export default SignIn;
