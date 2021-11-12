import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
                                path="/prueba-tecnica/administrar-prueba-tecnica"
                                component={AdministerTechnicalTest}
                            />
                            <Route
                                path="/prueba-tecnica/calificar-prueba-tecnica"
                                component={QualifyTechnicalTest}
                            />
                            <Route
                                path="/administrar-prueba-tecnica/agregar"
                                component={AdministerTechnicalTestAdd}
                            />
                            <Route
                                path="/administrar-prueba-tecnica/editar"
                                component={AdministerTechnicalTestEdit}
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
                                path="/formulario/inscripción"
                                component={FormInscription}
                            />
                            <Route
                                exact
                                path="/agenda/entrevista"
                                component={InterviewAspirant}
                            />
                            <Route
                                exact
                                path="/prueba/aspirante"
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
