import { date } from "yup";
import actionTypes from "../actions/actionTypes";
import {
  LOGGED_IN,
  LOGGED_OUT,
  LOGIN_CANCELLED,
  LOGIN_ERROR,
  LOGIN_REQUEST,
} from "../statusTypes";
import httpMethod from "../../../services/httpMethod";

const initialState = {
  login: {
    data: null,
    status: LOGGED_OUT,
    loading: false,
  },
};

export default function userRole(
  state = initialState.login,
  action: { type: any; data: any }
) {
  let newState;
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      newState = { ...state, status: LOGGED_IN, loading: false };
      return newState;
    case actionTypes.SAVE_DATA:
      newState = { ...state, data: action.data, loading: false };
      localStorage.setItem("user_info", JSON.stringify(action.data));
      newState.data = action.data;
      return newState;
    case actionTypes.DELETE_TOKEN:
      newState = { ...state, token: null, loading: false };
      newState.token = null;
      return newState;
    case actionTypes.LOGOUT:
      newState = { ...state, status: LOGGED_OUT, loading: false };
      return newState;
    case actionTypes.LOGIN_ERROR:
      newState = { ...state, status: LOGIN_ERROR, loading: false };
      return newState;
    case actionTypes.LOGIN_CANCELLED:
      newState = { ...state, status: LOGIN_CANCELLED, loading: false };
      return newState;
    case actionTypes.LOGIN_REQUEST:
      newState = { ...state, status: LOGIN_REQUEST, loading: true };
      return newState;
    default:
      return { ...state, loading: false };
  }
}
