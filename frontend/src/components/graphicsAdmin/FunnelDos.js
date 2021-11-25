import React from "react";
import { Bar } from "react-chartjs-2";

const FunnelDos = () => {
    const dataBar = {
        labels: ["Inscritos", "Prueba", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "Hombres",
                backgroundColor: "#EC932F",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81],
            },
            {
                label: "Mujeres",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81],
            },
        ],
    };
    return (
        <div>
            <Bar data={dataBar} width={400} height={200} />
        </div>
    );
};

export default FunnelDos;
