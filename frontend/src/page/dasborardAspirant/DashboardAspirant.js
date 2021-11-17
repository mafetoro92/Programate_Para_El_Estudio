import React from "react";
import "./DashboardAspirant.scss";
import BarChart from "../../components/BarChart";
import DonitaSoloLearn from "../../components/doughnut/DonitaSoloLearn";

function DashboardAspirant() {
    return (
        <div className="section__dash">
            <div className="section__content d-flex justify-content-between">
                <span className="upperCase bold">Dashboard Aspirante</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Dashboard</span>
                </div>
            </div>
            <BarChart />
            <DonitaSoloLearn />
        </div>
    );
}

export default DashboardAspirant;
