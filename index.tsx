import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./main/App";
import { store } from "./redux/store";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

const app = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
