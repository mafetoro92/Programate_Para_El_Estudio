import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
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
          <Route path="/aspirantes" component={Aspirants} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
