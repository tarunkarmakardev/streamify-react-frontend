import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CLEAR_SIGNUP_STATE } from "./types";
import Streamify from "../api/Streamify";

export const signUp = (credentials) => async (dispatch) => {
  try {
    const response = await Streamify.post(
      "signup/",
      JSON.stringify(credentials)
    );
    console.log(response);
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response,
    });
    console.log(response);
  } catch (err) {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: err.response,
    });
  }
};

// Clear signupstate when signup modal is closed. The states are used to show messages when signing up
export const clearSignUpState = () => {
  return {
    type: CLEAR_SIGNUP_STATE,
  };
};
