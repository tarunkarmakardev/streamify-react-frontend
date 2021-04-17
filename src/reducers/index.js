import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signUpReducer from "./signUpReducer";
import signInOutReducer from "./signInOutReducer";
import refreshTokenReducer from "./refreshTokenReducer";
import streamCreateReducer from "./streams/streamCreateReducer";
import streamListReducer from "./streams/streamListReducer";
import youtubeList from "./getYoutubeListReducer";
import fetchSingleStream from "./streams/fetchSingleStreamReducer";
import updateStream from "./streams/updateStreamReducer";
import deleteStream from "./streams/deleteStreamReducer";

export default combineReducers({
  form: formReducer,
  signUpReducer,
  signInOutReducer,
  refreshTokenReducer,
  streamCreateReducer,
  streamListReducer,
  youtubeList,
  fetchSingleStream,
  updateStream,
  deleteStream,
});
