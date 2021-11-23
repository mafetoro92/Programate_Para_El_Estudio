import React from "react";
import ReactDom from "react-dom";
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
        </Router>
    </React.StrictMode>,
    document.getElementById("app")
);
