import {
  // redux自体のcreateStoreを被るので、`reduxCreateStore`として定義
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";
import { routerReducer, routerMiddleware } from "react-router-redux";

import * as reducers from "./reducers";

// loggerの設定
const logger = createLogger({
  diff:true,
  collapsed:true,
})

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
      thunk,
      routerMiddleware(history)
    )
  );
}
