import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import { Context } from "../context/context";
import RequestService from "../config/index";

const App = () => {
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

    const [adminstate, setAdmin] = useState(initialState);
    const [user, setUser] = useState(initialState2);

    const { admin, loged } = adminstate;
    const { admin2, loged2 } = user;

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
};
export default App;
