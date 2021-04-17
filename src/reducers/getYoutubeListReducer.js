import {
  YOUTUBE_SUCCESS,
  YOUTUBE_FAILURE,
  YOUTUBE_LOADING,
} from "../actions/types";
const initialState = {
  data: null,
  loading: null,
};

const getYoutubeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case YOUTUBE_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case YOUTUBE_LOADING:
      return {
        ...state,
        data: null,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default getYoutubeListReducer;
