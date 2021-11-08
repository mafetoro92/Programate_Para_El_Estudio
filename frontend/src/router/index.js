import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Convocatory from "../page/convocatory/Convocatory";
import Dashboard from "../page/dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="d-flex hhh">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/convocatoria" component={Convocatory} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
