import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_LOADING } from "./types";
import history from "../history";
import Streamify from "../api/Streamify";

export const signIn = (credentials) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_LOADING,
  });
  try {
    const response = await Streamify.post(
      "token/",
      JSON.stringify(credentials)
    );
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: response,
    });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    history.push("/");
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: err.response,
    });
  }
};
