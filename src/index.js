import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import "./index.css";
//import App from "./components/app/App";
import AppNew from "./components/app/AppNew";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <div>
    {/* <React.StrictMode> */}

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppNew />
          {/* <App /> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>

    {/* </React.StrictMode> */}
  </div>,

  document.getElementById("root")
);
