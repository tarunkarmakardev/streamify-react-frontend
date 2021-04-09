import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signUpReducer from "./signUpReducer";
import signInOutReducer from "./signInOutReducer";
import refreshTokenReducer from "./refreshTokenReducer";
import streamCreateReducer from "./streams/streamCreateReducer";
import streamListReducer from "./streams/streamListReducer";

export default combineReducers({
  form: formReducer,
  signUpReducer,
  signInOutReducer,
  refreshTokenReducer,
  streamCreateReducer,
  streamListReducer,
});
