import {
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_LIST_LOADING,
} from "../../actions/types";

const initialState = {
  streamListItems: [],
  loading: null,
};

const streamListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        streamListItems: action.payload.data,
        loading: false,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        streamListItems: action.payload.data,
        loading: false,
      };
    case FETCH_LIST_LOADING:
      return {
        ...state,
        streamListItems: [],
        loading: true,
      };
    default:
      return { ...state };
  }
};

export default streamListReducer;
