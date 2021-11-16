import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import "./DoughtnutSoloLearn.scss";
import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const pruebas1 = [
    {
        user_id: 1,
        userFullName: "Pedro",
        htmlScore: 23,
        cssScore: 25,
        javascriptScore: 27,
        pythonScore: 34,
        Score: 28,
        soloLearnScore: 28,
        personalProfileScore: 28,
        motivationScore: 28,
        finalScore: 23,
    },
    {
        user_id: 2,
        userFullName: "Pedro",
        htmlScore: 23,
        cssScore: 25,
        javascriptScore: 27,
        pythonScore: 34,
        Score: 28,
        soloLearnScore: 28,
        personalProfileScore: 28,
        motivationScore: 28,
        finalScore: 23,
    },
];

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
};

const options = {
    maintainAspectRatio: true,
    responsive: false,
    plugins: {
        datalabels: {
            color: "#ffffff",
            formatter: function (value, context) {
                return Math.round(value) + "%";
            },
        },
    },
};
const DoughtnutSoloLearn = () => {
    return (
        <div className="section__dashboard">
            <div className="content">
                <h2>SoloLearn</h2>
                <Doughnut data={data} options={options} />
                <div className="legend">html</div>
            </div>
        </div>
    );
};

export default DoughtnutSoloLearn;
