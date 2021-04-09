import { connect } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import { signOut } from "../../actions/index";

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.signInOutReducer.isSignedIn,
  };
};

export default connect(mapStateToProps, { signOut })(Navbar);
