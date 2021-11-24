import React from "react";
import ReactDom from "react-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { InscriptionProvider } from "./inscription/InscriptionContext";
import App from "./router";
import { store } from "./store/store";
import "./styles/app.scss";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <InscriptionProvider>
        <App />
      </InscriptionProvider>
    </Router>
  </Provider>,
  document.getElementById("app")
);
