import Axios from "@api/index";
import { LOGIN_USER } from "./types";

export function loginUser(dataTosubmit) {
  const request = Axios.post("/login", dataTosubmit).then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
