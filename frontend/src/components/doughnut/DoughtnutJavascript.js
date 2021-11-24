import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import "./Doughtnut.scss";
//import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const DoughtnutJavascript = ({ item }) => {
    //console.log(item);
    const { javascriptScore } = item;
    let pendiente = 100 - javascriptScore;
    //console.log(pendiente);
    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${javascriptScore}`, `${pendiente}`],
                backgroundColor: ["#FFCC02", "#D7D7D7"],
                hoverBackgroundColor: ["#FFCC02", "#D7D7D7"],
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
        <div className="graph mt-2">
            <Doughnut data={data} options={options} width={400} height={200} />
        </div>
    );
};

export default DoughtnutJavascript;
