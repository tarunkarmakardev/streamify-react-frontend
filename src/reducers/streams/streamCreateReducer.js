import {
  STREAM_CREATE_SUCCESS,
  STREAM_CREATE_FAILURE,
  STREAM_CREATE_CLEAR,
} from "../../actions/types";

const initialState = {
  data: null,
  status: null,
};

const streamCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case STREAM_CREATE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case STREAM_CREATE_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case STREAM_CREATE_CLEAR:
      return {
        ...state,
        data: null,
        status: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default streamCreateReducer;
