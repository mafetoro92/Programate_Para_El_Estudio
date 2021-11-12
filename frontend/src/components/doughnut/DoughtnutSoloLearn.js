import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughtnutSoloLearn.scss";
import "chart.piecelabel.js";
const data = {
    datasets: [
        {
            label: "# of Votes",
            data: [40, 60],
            backgroundColor: ["#FF6384", "grey"],
            hoverBackgroundColor: ["#FF6384", "grey"],
        },
    ],
    labels: ["Progreso", "Pendiente"],
    subtitles: [
        {
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true,
        },
    ],
};

const DoughtnutSoloLearn = () => {
    return (
        <div className="section__dashboard">
            <div className="content">
                <h2>SoloLearn</h2>
                <Doughnut data={data} />
                <div className="legend">
                    <i className="fas fa-circle html"></i>
                    Html
                </div>
            </div>
        </div>
    );
};

export default DoughtnutSoloLearn;
