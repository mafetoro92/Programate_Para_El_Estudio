import React from "react";
import CohorteGoal from "../../components/graphicsAdmin/cohorteGoal";
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
                        <div className="cohorteGoal__container title d-flex justify-content-center aling-items-center">
                            <h2 className="m-0">Meta de la cohorte</h2>
                        </div>
                        <div
                            className="cohoteGoal__container-graph
                        "
                        >
                            <CohorteGoal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
