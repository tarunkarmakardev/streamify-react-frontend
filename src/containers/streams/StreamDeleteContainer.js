import { connect } from "react-redux";
import StreamDelete from "../../components/streams/StreamDelete";
import { deleteStream } from "../../actions";

const mapStateToProps = ({ deleteStream: { loading } }) => {
  return {
    loading,
  };
};

export default connect(mapStateToProps, { deleteStream })(StreamDelete);
