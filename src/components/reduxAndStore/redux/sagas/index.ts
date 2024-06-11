import axios from "axios";
import { call, cancel, cancelled, fork, put, take } from "redux-saga/effects";

export function fakeAuthorize(user: string, password: string) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post("http://localhost:8080/api/login", {
        username: user,
        password: password,
      });
      resolve(result.data.token);
    } catch (error) {
      reject(error);
    }
  });
}

export function* authorize(
  user: string,
  password: string
): Generator<any, void, any> {
  try {
    const token = yield call(fakeAuthorize, user, password);
    yield put({ type: "LOGIN_SUCCESS" });
    yield put({ type: "SAVE_TOKEN", token });
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
    const { user, password } = yield take("LOGIN_REQUEST");
    const task = yield fork(authorize, user, password);
    const action = yield take(["LOGOUT", "LOGIN_ERROR"]);
    if (action.type === "LOGOUT") {
      yield cancel(task);
      yield put({ type: "DELETE_TOKEN" });
    }
  }
}

export function* logActions(): Generator<any, void, any> {
  while (true) {
    const action = yield take("*");
    console.log(action.type);
  }
}
