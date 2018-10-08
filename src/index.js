import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

// redux store
// import store from "./redux/store";

// rxloop store
import store from "./models";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
