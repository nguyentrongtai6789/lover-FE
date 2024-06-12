import axios, { AxiosError } from "axios";
import { call, cancel, cancelled, fork, put, take } from "redux-saga/effects";
import httpMethod from "../../../services/httpMethod";
import NotificationCustom from "../../../customComponents/NotificationCustom";

interface ILoginValues {
  username: string;
  password: string;
}

export function handleLogin(values: ILoginValues) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:8080/api/login", values);
      if (res.status === 200) {
        NotificationCustom("Đăng nhập thành công", "success");
      }
      resolve(res.data);
    } catch (error: any) {
      if (error?.response?.status === 401) {
        NotificationCustom("Tài khoản hoặc mật khẩu không đúng", "error");
      }
      if (error?.code === AxiosError.ERR_NETWORK) {
        NotificationCustom("Lỗi kết nối mạng", "error");
      }
      reject(error);
    }
  });
}

export function* authorize(values: ILoginValues): Generator<any, void, any> {
  try {
    const data = yield call(handleLogin, values);
    yield put({ type: "LOGIN_SUCCESS" });
    yield put({ type: "SAVE_DATA", data });
    httpMethod.attachTokenToHeader(data.token);
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  } finally {
    if (yield cancelled()) {
      yield put({ type: "LOGIN_CANCELLED" });
    }
  }
}

export function* loginFlow(): Generator<any, void, any> {
  while (true) {
    const { values } = yield take("LOGIN_REQUEST");
    const task = yield fork(authorize, values);
    const action = yield take(["LOGOUT", "LOGIN_ERROR"]);
    if (action.type === "LOGOUT") {
      localStorage.clear();
      yield cancel(task);
      yield put({ type: "DELETE_TOKEN" });
      window.location.reload();
    }
  }
}

export function* logActions(): Generator<any, void, any> {
  while (true) {
    const action = yield take("*");
    console.log(action.type);
  }
}
