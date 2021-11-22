import React from "react";
import CohorteGoal from "../../components/graphicsAdmin/CohorteGoal";
import SocialMedia from "../../components/graphicsAdmin/SocialMedia";
import Funnel from "../../components/graphicsAdmin/Funnel";
import FunnelDos from "../../components/graphicsAdmin/FunnelDos";
import DateMigrants from "../../components/graphicsAdmin/DateMigrants";
import AmountPassing from "../../components/graphicsAdmin/AmountPassing";
import { CONVOCATORY } from "../../api/data";

import "./DashboardAdmin.scss";

const DashboardAdmin = () => {
    return (
        <>
            <div className="section__dash">
                <div className="section__content d-flex justify-content-between">
                    <span className="upperCase bold">
                        Dashboard Administrador
                    </span>
                    <div className="box__content">
                        <span className="text-crumbs bold-500">Programate</span>
                        <i className="fas fa-chevron-right subtitle" />
                        <span className="text-crumbs">
                            Dashboard Administrador
                        </span>
                    </div>
                </div>
                <div className="graphcsAdmin d-flex flex-wrap justify-content-around">
                    <div className="cohorteGoal__container">
                        <div className="cohorteGoal__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">Meta de la cohorte</h2>
                        </div>
                        <div className="cohorteGoal__container-graph">
                            <CohorteGoal />
                        </div>
                    </div>

                    <div className="socialMedia__container">
                        <div className="socialMedia__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">
                                ¿Dónde te enteraste de nosotros?
                            </h2>
                        </div>
                        <div className="socialMedia__container-graph">
                            <SocialMedia />
                        </div>
                    </div>

                    <div className="funnel__container">
                        <div className="funnel__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">
                                Número de registrados a entrevista y fecha
                            </h2>
                        </div>
                        <div className="funnel__container-graph">
                            <Funnel />
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">Embudo de selección</h2>
                        </div>
                        <div className="funnel__container-graph">
                            <FunnelDos />
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">Porcentaje que van pasando</h2>
                        </div>
                        <div className="funnel__container-graph">
                            <AmountPassing />
                        </div>
                    </div>
                    <div className="funnel__container">
                        <div className="funnel__container-title d-flex justify-content-center align-items-center">
                            <h2 className="m-0">Datos generales migrantes</h2>
                        </div>
                        <div className="funnel__container-graph">
                            <DateMigrants />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
