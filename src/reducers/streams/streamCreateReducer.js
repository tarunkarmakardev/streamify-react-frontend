import {
  STREAM_CREATE_SUCCESS,
  STREAM_CREATE_FAILURE,
  STREAM_CREATE_LOADING,
} from "../../actions/types";

const initialState = {
  data: null,
  status: null,
  loading: null,
};

const streamCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREAM_CREATE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case STREAM_CREATE_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case STREAM_CREATE_LOADING:
      return {
        ...state,
        data: null,
        status: null,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default streamCreateReducer;
