import React, { useState } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Parameterization from "../components/inscription/Parameterization";
import MotivationLetter from "../components/inscription/MotivationLetterTable";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
// import Inscription from "../page/inscription/ResultsInscription";
// import MotivationLetter from "../page/inscription/MotivationLetter";
// import Parameterization from "../page/inscription/Inscription";
import Results from "../page/Results/Results";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import InterviewDay from "../page/citation/InterviewDay";
import NewCohort from "../components/newConvocatory/NewCohort ";
import EditCohort from "../components/newConvocatory/EditCohort";
import LoginFull from "../components/auth/LoginFull";
import WaitingList from "../page/waitingList/WaitingList";

const App = () => {
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

  const [adminstate, setAdmin] = useState(initialState);
  const [user, setUser] = useState(initialState2);
  const { admin, loged } = adminstate;
  const { admin2, loged2 } = user;

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && <Header user={user} adminstate={adminstate} />}

      <div className="d-flex top">
        {pathname !== "/login" && <Nav user={user} adminstate={adminstate} />}

        <Switch>
          <Route exact path="/login" component={LoginFull} />
          {/* <Redirect to="/login" /> */}
          {admin && loged && (
            <>
              <Route path="/dasboard" component={DashboardAdmin} />
              <Route path="/dia-de-entrevista">
                <InterviewDay user={user} adminstate={adminstate} />
              </Route>
              <Route path="/convocatoria" component={Convocatory} />
              <Route path="/nuevacohorte" component={NewCohort} />
              <Route path="/editarcohorte" component={EditCohort} />
              <Route path="/aspirantes" component={Aspirants} />
              <Route path="/prueba" component={AdministerTechnicalTest} />
              <Route path="/agregar" component={AdministerTechnicalTestAdd} />
              <Route path="/editar" component={AdministerTechnicalTestEdit} />
              <Route path="/calificar" component={QualifyTechnicalTest} />
              {/* <Route path="/inscripcion" component={Inscription} /> */}
              {/* <Route
                  path="/resultsInscription"
                  component={ResultsInscription}
                /> */}
              <Route path="/resultsInscription" component={Results} />
              <Route path="/waiting-list" component={WaitingList} />
              <Route path="/motivationLetter" component={MotivationLetter} />
              <Route path="/parameterization" component={Parameterization} />
            </>
          )}
          {!admin2 && loged2 && (
            <>
              <Route exact path="/inscripcion" component={FormInscription} />
              <Route exact path="/entrevista">
                <InterviewAspirant user={user} adminstate={adminstate} />
              </Route>
              <Route exact path="/aspirante" component={ProofAspirant} />
              <Route
                exact
                path="/dashboardAspirant"
                component={DashboardAspirant}
              />
            </>
          )}
        </Switch>
      </div>
    </>
  );
};
export default App;