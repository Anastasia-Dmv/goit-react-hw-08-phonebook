import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
//import App from "./components/app/App";
import AppNew from "./components/app/AppNew";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Provider store={store}>
        <AppNew />
        {/* <App /> */}
      </Provider>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </div>,

  document.getElementById("root")
);
