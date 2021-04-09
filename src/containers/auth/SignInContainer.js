import { connect } from "react-redux";
import SignIn from "../../components/auth/SignIn";
import { signIn } from "../../actions";

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.signInOutReducer.isSignedIn,
    token: state.signInOutReducer.token,
    responseData: state.signInOutReducer.responseData,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);
