import { connect } from "react-redux";
import Signup from "../../components/auth/Signup";
import { signUp, clearSignUpState } from "../../actions";

const mapStateToProps = (state) => {
  const { signUpResponse, signUpStatus, loading } = state.signUpReducer;
  return {
    signUpResponse,
    signUpStatus,
    loading,
  };
};

export default connect(mapStateToProps, { signUp, clearSignUpState })(Signup);
