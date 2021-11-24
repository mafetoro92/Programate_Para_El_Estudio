import React from "react";
import { Bar } from "react-chartjs-2";

const FunnelDos = () => {
    const dataBar = {
        labels: ["Inscritos", "Prueba", "Entrevista", "Aceptados"],
        datasets: [
            {
                label: "Hombres",
                backgroundColor: [
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [

                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(54, 162, 235)",
                hoverBorderColor: "rgba(54, 162, 235)",
                data: [65, 59, 80, 81],
            },
            {
                label: "Mujeres",
                backgroundColor: [
                    /*Red*/'rgba(255, 99, 132)',
                ],
                borderColor: [
                    /*Red*/'rgba(255, 99, 132)',

                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255, 99, 132)",
                hoverBorderColor: "rgba(255, 99, 132)",
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
