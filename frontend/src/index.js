import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./router";
import "./styles/app.scss";
import StateContext from './Context/status'
ReactDom.render(
  <React.StrictMode>
    <Router>
      <StateContext>
        <App />

      </StateContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
