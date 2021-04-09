import { SIGN_OUT } from "./types";
import history from "../history";

export const signOut = () => {
  history.push("/");
  localStorage.clear();
  return {
    type: SIGN_OUT,
  };
};
