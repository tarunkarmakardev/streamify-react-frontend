import {
  UPDATE_STREAM_SUCCESS,
  UPDATE_STREAM_FAILURE,
  UPDATE_STREAM_LOADING,
} from "../../actions/types";
const initialState = {
  data: null,
  loading: null,
};
const updateStreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREAM_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case UPDATE_STREAM_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case UPDATE_STREAM_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default updateStreamReducer;
