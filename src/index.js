import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import Menu from "./componentes/menu";
import reducer from "./store/index";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export const App = () => (
  <Provider store={store}>
    <Menu />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
