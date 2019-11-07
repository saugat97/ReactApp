import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./app/layout/App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from './app/common/util/ScrollToTop'

const rootEl = document.getElementById("root");

const store = configureStore();

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
       <ScrollToTop>
          <App />
       </ScrollToTop>
       
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();

