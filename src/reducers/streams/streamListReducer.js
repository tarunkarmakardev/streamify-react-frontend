import { FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from "../../actions/types";

const initialState = {
  streamListItems: [],
};

const streamListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        streamListItems: action.payload.data,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        streamListItems: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default streamListReducer;
