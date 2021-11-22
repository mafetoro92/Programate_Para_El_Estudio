import React from "react";
import { Chart } from "chart.js";
//import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import "./GraphicsAdmin.scss";
//import "chart.piecelabel.js";

const SocialMedia = () => {
    const data = {
        labels: ["Facebook", "Twiter", "Instagram"],
        datasets: [
            {
                axis: "y",
                label: ["Facebook", "Twiter", "Instagram"],
                data: [40, 50, 80],
                fill: false,
                backgroundColor: ["#FFCC02", "#FF6384", "#92C149"],
                borderColor: ["#FFCC02", "#FF6384", "#92C149"],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        indexAxis: "y",
    };
    return (
        <div>
            <div className="graph mt-2">
                <Bar data={data} options={options} width={400} height={200} />
            </div>
        </div>
    );
};

export default SocialMedia;
