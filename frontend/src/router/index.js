import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import Dashboard from "../page/dashboard/Dashboard";
// import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
// import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
// import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
// import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import Results from "../page/Results/Results";

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
  const admin3 = true;
  const loged3 = true;
  return (
    <BrowserRouter>
      <Header user={user} adminstate={adminstate} />
      <div className="d-flex hhh">
        <Nav user={user} adminstate={adminstate} />
        <Switch>
          
          {admin3 && loged3 && (
            <>
              <Route exact path="/" component={Dashboard} />
              <Route path="/convocatoria" component={Convocatory} />
              <Route path="/aspirantes" component={Aspirants} />
              <Route path="/resultados" component={Results} />
            </>
          )}
          {!admin2 && loged2 && (
            <>
              <Route exact path="/" component={DashboardAspirant} />
              <Route exact path="/inscripcion" component={FormInscription} />
              <Route exact path="/entrevista" component={InterviewAspirant} />
              <Route exact path="/aspirante" component={ProofAspirant} />
            </>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
