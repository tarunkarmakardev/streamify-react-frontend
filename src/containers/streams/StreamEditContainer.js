import { connect } from "react-redux";
import StreamEdit from "../../components/streams/StreamEdit";
import { fetchSingleStream } from "../../actions";
import { updateStream } from "../../actions";

const mapStateToProps = ({ fetchSingleStream, updateStream }) => {
  //   console.log(state);
  let initialValues = null;
  if (fetchSingleStream.data) {
    const {
      data: { description, title, link },
    } = fetchSingleStream;
    initialValues = {
      description,
      title,
      link,
    };
  }

  return {
    initialValues,
    fetchLoading: fetchSingleStream.loading,
    updateStreamData: updateStream,
    updateLoading: updateStream.loading,
  };
};
export default connect(mapStateToProps, {
  fetchSingleStream,
  updateStream,
})(StreamEdit);
