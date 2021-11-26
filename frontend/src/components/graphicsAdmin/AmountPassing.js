import React from "react";
import { Bar } from "react-chartjs-2";

const AmountPassing = () => {
    const dataBar = {
        labels: ["Inscritos", "Prueba", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "proceso de selección",
                backgroundColor: "#EC932F",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81],
            },
        ],
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
            <Bar data={dataBar} options={options} width={400} height={200} />
        </div>
    );
};

export default AmountPassing;
