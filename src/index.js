import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./App";
import createStore from "./createStore";

// historyインスタンスを生成
const history = createBrowserHistory();

// storeを生成
const store = createStore(history);

ReactDOM.render(
  // 最上位のコンポーネントを<PRovider>でラップ。propsにstoreを与える。
  <Provider store={store}>
    {/*  historyをConnectedRouterに渡す */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
