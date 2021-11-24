import React from "react";
import { Chart } from "chart.js";
//import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import "./GraphicsAdmin.scss";
//import "chart.piecelabel.js";

const SocialMedia = () => {
    const data = {
        labels: [
            "Página web Educamás",
            "Recomendación de un amigo",
            "Facebook",
            "Instagram",
            "Google",
            "Compensar",
            "Alianza educativa",
            "Embajada de venezuela",
            "Politécnico Internacional",
            "PNUD",
            "Otro",
        ],
        datasets: [
            {
                axis: "y",
                label: "Redes sociales",
                data: [40, 50, 80, 78, 40, 50, 80, 78, 40, 50, 80],
                fill: false,
                backgroundColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
                borderColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
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
                <Bar data={data} options={options} width={400} height={400} />
            </div>
        </div>
    );
};

export default SocialMedia;
