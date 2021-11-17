<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
<<<<<<< HEAD
import Dashboard from "../page/dashboard/Dashboard";
=======
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import Dashboard from "../page/dashboard/Dashboard";
// import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
// import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
// import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
// import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";



>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a

const App = () => {
    const initialState = {
        nameAdmin: "Diego Admin",
        admin: true,
        loged: false,
    };

    const initialState2 = {
        name: "Kevin",
        admin2: false,
        loged2: true,
    };

    const [adminstate, setAdmin] = useState(initialState);
    const [user, setUser] = useState(initialState2);

    const { admin, loged } = adminstate;
    const { admin2, loged2 } = user;


  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Header/>
      <div className="d-flex hhh">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/convocatoria" component={Convocatory} />
          <Route path="/aspirantes" component={Aspirants} />
=======
      <Header user={user} adminstate={adminstate} />
      <div className="d-flex hhh">
        <Nav user={user} adminstate={adminstate} />
        <Switch>
          {admin && loged && (
            <>
              <Route exact path="/" component={Dashboard} />
              <Route path="/convocatoria" component={Convocatory} />
              <Route path="/aspirantes" component={Aspirants} />
            </>
          )}
          {!admin2 && loged2 && (
            <>
              <Route exact path="/" component={DashboardAspirant} />
              <Route exact path="/inscripción" component={FormInscription} />
              <Route exact path="/entrevista" component={InterviewAspirant} />
              <Route exact path="/aspirante" component={ProofAspirant} />
            </>
          )}
>>>>>>> fbef2457b2d6238b8d7f1d4f009af17d5b2cba9a
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
