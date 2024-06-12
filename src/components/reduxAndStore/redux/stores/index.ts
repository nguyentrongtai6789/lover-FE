import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";
import { logActions, loginFlow } from "./../sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  sagaMiddleware.run(loginFlow);
  sagaMiddleware.run(logActions);

  return store;
}
