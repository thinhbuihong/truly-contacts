import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCES } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const register = ({ email,
  password, username,
  lastName, firstName }) => dispatch => {
    dispatch({ type: REGISTER_LOADING, })
    axiosInstance.post("/auth/register", {
      email,
      password, username,
      lastName, firstName
    })
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCES,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: REGISTER_ERROR,
          payload: err.response.data,
        })
      })
  }