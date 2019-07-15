import {
  // redux自体のcreateStoreを被るので、`reduxCreateStore`として定義
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import logger from "redux-logger";
import { routerReducer, routerMiddleware } from "react-router-redux";

import * as reducers from "./reducers";

// historyはsrc/index.jsから渡すようにする
export default function createStore(history) {
  return reduxCreateStore(
    // Reducerは最初からcombineする前提にしておく
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  );
}
