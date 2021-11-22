import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line, defaults } from "react-chartjs-2";
import "./graphics  Admin.scss";
//import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const cohorteGoal = () => {
    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${htmlScore}`, `${pendiente}`],
                backgroundColor: ["#FF6384", "#D7D7D7"],
                hoverBackgroundColor: ["#FF6384", "#D7D7D7"],
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

    return (
        <div>
            <div className="graph mt-2">
                <Line data={data} options={options} width={400} height={200} />
            </div>
        </div>
    );
};

export default cohorteGoal;
