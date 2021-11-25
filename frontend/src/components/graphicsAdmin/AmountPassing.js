import React from "react";
import { Bar } from "react-chartjs-2";

const AmountPassing = ({ item }) => {
    const { usersRegisted } = item
    let InscripTotal = usersRegisted.length

    const dataBar = {
        labels: ["Inscritos", "Prueba", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "proceso de selección",
                backgroundColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                hoverBorderColor: "rgba(255, 205, 86)",
                data: [`${InscripTotal}`, 59, 80, 81],
            },
        ],
    };

    const options = {
        maintainAspectRatio: true,
        responsive: false,
        plugins: {
            datalabels: {
                color: "#6c757d",
                formatter: function (value, context) {
                    return Math.round(value);
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
