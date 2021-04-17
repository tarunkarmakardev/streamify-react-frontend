import { YOUTUBE_SUCCESS, YOUTUBE_FAILURE, YOUTUBE_LOADING } from "./types";
import Youtube from "../api/Youtube";

export const getYoutubeList = (term) => async (dispatch) => {
  dispatch({
    type: YOUTUBE_LOADING,
  });

  try {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
        eventType: "live",
        type: "video",
      },
    });
    // console.log(response);
    dispatch({
      type: YOUTUBE_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: YOUTUBE_FAILURE,
      payload: err.response,
    });
  }
};
