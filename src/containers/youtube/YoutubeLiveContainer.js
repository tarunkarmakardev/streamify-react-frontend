import { connect } from "react-redux";
import youtubeLive from "../../components/youtubeLive/YoutubeLive";
import { getYoutubeList } from "../../actions";

const mapStateToProps = ({ youtubeList }) => {
  return {
    videos: youtubeList,
    loading: youtubeList.loading,
  };
};

export default connect(mapStateToProps, { getYoutubeList })(youtubeLive);
