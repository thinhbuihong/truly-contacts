import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCES, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCES } from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: true,
          error: false,
        }
      }

    case REGISTER_SUCCES:
    case LOGIN_SUCCES:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          data: payload,
        }
      }

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: {
          ...state.auth,
          loading: false,
          error: payload,
        }
      }
    default:
      return state;
  }
}
export default auth;