import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import Dashboard from "../page/dashboard/Dashboard";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import { Context } from "../context/context";
import RequestService from "../config/index";

const App = () => {
<<<<<<< HEAD
    const getUser = async () => {
        const data = await RequestService.get("/candidate/candidate");

        console.log(data);
    };
    getUser();

    const initialState = {
        nameAdmin: "Diego Admin",
        admin: true,
        loged: true,
    };

    const initialState2 = {
        name: "Kevin",
        admin2: false,
        loged2: false,
    };
=======
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
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555

  const [adminstate, setAdmin] = useState(initialState);
  const [user, setUser] = useState(initialState2);

  const { admin, loged } = adminstate;
  const { admin2, loged2 } = user;

<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Header user={user} adminstate={adminstate} />
            <div className="d-flex">
                <Nav user={user} adminstate={adminstate} />
                <Switch>
                    {admin && loged && (
                        <>
                            <Route exact path="/" component={Dashboard} />
                            <Route
                                path="/convocatoria"
                                component={Convocatory}
                            />
                            <Route path="/aspirantes" component={Aspirants} />
                        </>
                    )}
                    {!admin2 && loged2 && (
                        <>
                            <Route
                                exact
                                path="/"
                                component={DashboardAspirant}
                            />
                            <Route
                                exact
                                path="/inscripción"
                                component={FormInscription}
                            />
                            <Route
                                exact
                                path="/entrevista"
                                component={InterviewAspirant}
                            />
                            <Route
                                exact
                                path="/aspirante"
                                component={ProofAspirant}
                            />
                        </>
                    )}
                </Switch>
            </div>
        </BrowserRouter>
    );
=======
  return (
    <>
      <Header user={user} adminstate={adminstate} />
      <div className="d-flex hhh">
        <Nav user={user} adminstate={adminstate} />
        <Switch>
          {admin && loged && (
            <>
              <Route path="/convocatoria" component={Convocatory} />
              <Route path="/aspirantes" component={Aspirants} />
              <Route exact path="/" component={Dashboard} />
            </>
          )}
          {!admin2 && loged2 && (
            <>
              <Route exact path="/inscripción" component={FormInscription} />
              <Route exact path="/entrevista" component={InterviewAspirant} />
              <Route exact path="/aspirante" component={ProofAspirant} />
              <Route exact path="/" component={DashboardAspirant} />
            </>
          )}
        </Switch>
      </div>
    </>
  );
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
};
export default App;
