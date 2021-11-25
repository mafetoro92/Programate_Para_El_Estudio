import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";

import DashboardAspirant from "../page/dasborardAspirant/DashboardAspirant";
import DashboardAdmin from "../page/dashboardAdmin/DashboardAdmin";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
//import ResultsInscription from "../page/inscription/ResultsInscription";
import Results from "../page/Results/Results";
import MotivationLetter from "../page/inscription/MotivationLetter";
import Parameterization from "../page/inscription/Inscription";
import FormInscription from "../page/formAspirant/FormInscription";
import InterviewAspirant from "../page/interviewAspirant/InterviewAspirant";
import ProofAspirant from "../page/proofAspirant/ProofAspirant";
import NewCohort from "../components/newConvocatory/NewCohort ";
import EditCohort from "../components/newConvocatory/EditCohort";
import WaitingList from "../page/waitingList/WaitingList";
import Citations from "../page/citations/Citations";

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

    return (
        <>
            <Header user={user} adminstate={adminstate} />
            <div className="d-flex hhh">
                <Nav user={user} adminstate={adminstate} />
                <Switch>
                    {admin && loged && (
                        <>
                            <Route path="/nuevacohorte" component={NewCohort} />
                            <Route
                                path="/editarcohorte"
                                component={EditCohort}
                            />
                            <Route exact path="/" component={DashboardAdmin} />
                            <Route
                                path="/convocatoria"
                                component={Convocatory}
                            />
                            <Route path="/aspirantes" component={Aspirants} />
                            <Route
                                path="/resultsinscription"
                                component={Results}
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
                            <Route
                                path="/waiting-list"
                                component={WaitingList}
                            />
                            <Route path="/citations" component={Citations} />
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
};
export default App;
