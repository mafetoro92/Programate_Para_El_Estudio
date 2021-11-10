import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Aspirants from "../page/aspirants/Aspirants";
import Convocatory from "../page/convocatory/Convocatory";
import Dashboard from "../page/dashboard/Dashboard";
import AdministerTechnicalTest from "../page/technicalTest/AdministerTechnicalTest";
import QualifyTechnicalTest from "../page/technicalTest/QualifyTechnicalTest";
import AdministerTechnicalTestAdd from "../page/technicalTest/AdministerTechnicalTestAdd";
import AdministerTechnicalTestEdit from "../page/technicalTest/AdministerTechnicalTestEdit";
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="d-flex hhh">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/convocatoria" component={Convocatory} />
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
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default App;
