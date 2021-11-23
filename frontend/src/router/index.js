import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
<<<<<<< HEAD
<<<<<<< HEAD
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
=======
import Dashboard from "../page/dashboard/Dashboard";
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
<<<<<<< HEAD
<<<<<<< HEAD
import ResultsInscription from "../page/inscription/ResultsInscription"; 
import MotivationLetter from "../page/inscription/MotivationLetter"; 
import Parameterization from "../page/inscription/Inscription"; 
=======
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555
=======
import ResultsInscription from "../page/inscription/ResultsInscription";
import MotivationLetter from "../page/inscription/MotivationLetter";
import Parameterization from "../page/inscription/Inscription";
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";

const App = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
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
<<<<<<< HEAD
=======
  const initialState = {
    nameAdmin: "Diego Admin",
    admin: true,
    loged: false,
  };
>>>>>>> 1d55c4409c00b2f957f5bf3bc1cee8c1c9a1d555

  const initialState2 = {
    name: "Kevin",
    admin2: false,
    loged2: true,
  };
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1

    const [adminstate, setAdmin] = useState(initialState);
    const [user, setUser] = useState(initialState2);
    const { admin, loged } = adminstate;
    const { admin2, loged2 } = user;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
    return (
        <>
            <Header user={user} adminstate={adminstate} />
            <div className="d-flex hhh">
                <Nav user={user} adminstate={adminstate} />
                <Switch>
                    {admin && loged && (
                        <>
                            <Route exact path="/" component={DashboardAdmin} />
                            <Route
                                path="/convocatoria"
                                component={Convocatory}
                            />
                            <Route path="/aspirantes" component={Aspirants} />
                            <Route
                                path="/resultsInscription"
                                component={ResultsInscription}
                            />
                            <Route
                                path="/motivationLetter"
                                component={MotivationLetter}
                            />
                            <Route
                                path="/parameterization"
                                component={Parameterization}
                            />
                            <Route
                                path="/administertechnicaltest"
                                component={AdministerTechnicalTest}
                            />
                            <Route
                                path="/administertechnicaltestadd"
                                component={AdministerTechnicalTestAdd}
                            />
                            <Route
                                path="/administertechnicaltestedit"
                                component={AdministerTechnicalTestEdit}
                            />
                            <Route
                                path="/qualifytechnicaltest"
                                component={QualifyTechnicalTest}
                            />
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
        </>
    );
<<<<<<< HEAD
=======
  const { admin, loged } = adminstate;
  const { admin2, loged2 } = user;

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
=======
>>>>>>> 2d505cd1030a6310982f216a089eb2b5852b89a1
};
export default App;
