import { connect } from "react-redux";
import StreamCreate from "../../components/streams/StreamCreate";
import { streamCreate } from "../../actions";

const mapStateToProps = ({
  signInOutReducer: { isSignedIn },
  streamCreate,
}) => {
  return {
    isSignedIn,
    streamCreate,
  };
};

export default connect(mapStateToProps, { streamCreate })(StreamCreate);
