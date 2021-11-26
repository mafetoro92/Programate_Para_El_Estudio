import React from "react";
import DoughtnutHtml from "../../components/doughnut/DoughtnutHtml";
import DoughtnutCss from "../../components/doughnut/DoughtnutCss";
import DoughtnutJavascript from "../../components/doughnut/DoughtnutJavascript";
import DoughtnutPython from "../../components/doughnut/DoughtnutPython";
import { PROFILE_SOLOLEARN } from "../../api/data";
import "./DashboardAspirant.scss";



function DashboardAspirant() {

    return (
        <div className="dash">
            <div className="dash__content d-flex justify-content-between">
                <span className="upperCase bold">Dashboard Aspirante</span>
                <div className="box__content">
                    <span className="text-crumbs bold-500">Programate</span>
                    <i className="fas fa-chevron-right subtitle" />
                    <span className="text-crumbs">Dashboard</span>
                </div>
            </div>
            <div className="status d-flex flex-column align-items-end">
                <p className="status__container">
                    <em>Estado del aspirante:</em> Aceptado
                </p>
            </div>
            <div className="title__section d-flex justify-content-center">
                <h2>SoloLearn</h2>
            </div>
            <div className="doughtnut d-flex flex-wrap justify-content-around">
                <div className="doughtnut__container">
                    <div className="doughtnut__container-title d-flex justify-content-center align-items-center gap-4">
                        <h2 className="m-0">Html</h2>
                        <i className="fab fa-html5 icon-soloLearn" />
                    </div>
                    <div className="doughtnut__container-graph">
                        {PROFILE_SOLOLEARN.map((item) => (
                            <DoughtnutHtml
                                key={item.userFullName}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
                <div className="doughtnut__container">
                    <div className="doughtnut__container-title d-flex justify-content-center align-items-center">
                        <h2 className="m-0">Css</h2>
                        <i className="fab fa-css3-alt icon-soloLearn" />
                    </div>
                    <div className="doughtnut__container-graph">
                        {PROFILE_SOLOLEARN.map((item) => (
                            <DoughtnutCss key={item.userFullName} item={item} />
                        ))}
                    </div>
                </div>
                <div className="doughtnut__container spacing">
                    <div className="doughtnut__container">
                        <div className="doughtnut__container-title d-flex justify-content-center align-items-center">
                            <h2>Javascript</h2>
                            <i className="fab fa-js icon-soloLearn" />
                        </div>
                        <div className="doughtnut__container-graph">
                            {PROFILE_SOLOLEARN.map((item) => (
                                <DoughtnutJavascript
                                    key={item.userFullName}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="doughtnut__container spacing">
                    <div className="doughtnut__container-title d-flex justify-content-center align-items-center">
                        <h2 className="m-0">Python</h2>
                        <i className="fab fa-python icon-soloLearn" />
                    </div>
                    <div className="doughtnut__container-graph">
                        {PROFILE_SOLOLEARN.map((item) => (
                            <DoughtnutPython
                                key={item.userFullName}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAspirant;