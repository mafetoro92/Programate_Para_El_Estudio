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
                            <Route exact path="/" component={Dashboard} />
                            <Route
                                path="/convocatoria"
                                component={Convocatory}
                            />
                            <Route path="/aspirantes" component={Aspirants} />
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
};
export default App;
