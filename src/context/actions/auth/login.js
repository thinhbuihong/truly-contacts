import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCES } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const login = ({
  password, username,
}) => dispatch => {
  dispatch({ type: LOGIN_LOADING, })
  axiosInstance.post("/auth/login", {
    password, username,
  })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN_SUCCES,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "cloud not connect",
      })
    })
}