import { connect } from "react-redux";
import StreamList from "../../components/streams/streamList/StreamList";
import { streamList } from "../../actions";

const mapStateToProps = ({
  streamListReducer: { streamListItems, loading },
}) => {
  return {
    streamListItems,
    loading,
  };
};

export default connect(mapStateToProps, { streamList })(StreamList);
