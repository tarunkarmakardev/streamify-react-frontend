import { connect } from "react-redux";
import StreamCreate from "../../components/streams/StreamCreate";
import { streamCreate } from "../../actions";

const mapStateToProps = ({
  signInOutReducer: { isSignedIn },
  streamCreateReducer: { loading },
}) => {
  return {
    isSignedIn,
    loading,
  };
};

export default connect(mapStateToProps, { streamCreate })(StreamCreate);
