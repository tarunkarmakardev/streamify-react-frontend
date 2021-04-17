import {
  FETCH_SINGLE_STREAM_SUCCESS,
  FETCH_SINGLE_STREAM_FAILURE,
  FETCH_SINGLE_STREAM_LOADING,
} from "../../actions/types";

const initialState = {
  data: null,
  loading: false,
};

const fetchSingleStreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_STREAM_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case FETCH_SINGLE_STREAM_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case FETCH_SINGLE_STREAM_LOADING:
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

export default fetchSingleStreamReducer;
