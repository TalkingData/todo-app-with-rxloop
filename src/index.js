import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

//redux store
import store1 from "./redux/store";

// rxloop store
import store2 from "./models";

import TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");

// console.log(store1.getState());
// // == 
// console.log(store2.getState());

// store1.subscribe(() => {
//   console.log(store1.getState());
// });

// TODO 需要实现 subscribe 方法
// store2.subscribe(() => {
//   console.log(store2.getState());
// });

ReactDOM.render(
  <Provider store={store2}>
    <TodoApp />
  </Provider>,
  rootElement
);
