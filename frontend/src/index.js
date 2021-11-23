import React from "react";
import ReactDom from "react-dom";
<<<<<<< HEAD
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { InscriptionProvider } from "./inscription/InscriptionContext";
import App from "./router";
import "./styles/app.scss";

ReactDom.render(
  <React.StrictMode>
    <Router>
      <InscriptionProvider>
        <App />
      </InscriptionProvider>
=======
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
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
