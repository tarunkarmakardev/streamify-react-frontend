import { TOKEN_REFRESH_SUCCESS, TOKEN_REFRESH_FAILURE } from "./types";

import Streamify from "../api/Streamify";

// Declaring API call function outside the action creator
const getRefreshToken = (refreshToken) => {
  return Streamify.post(
    "token/refresh/",
    JSON.stringify({
      refresh: `${refreshToken}`,
    })
  );
};

// Action creator to
export const refreshToken = () => async (dispatch) => {
  const token = localStorage.getItem("refresh");
  try {
    if (token) {
      const response = await getRefreshToken(token);
      // console.log(response);
      dispatch({
        type: TOKEN_REFRESH_SUCCESS,
        payload: response,
      });
      localStorage.setItem("access", response.data.access);
    } else {
      dispatch({
        type: TOKEN_REFRESH_FAILURE,
        payload: {
          data: {
            detail: "Please sign in again!",
          },
          status: 401,
        },
      });
    }
  } catch (err) {
    const { data, status } = err.response;
    dispatch({
      type: TOKEN_REFRESH_FAILURE,

      payload: {
        data,
        status,
      },
    });
  }
};
