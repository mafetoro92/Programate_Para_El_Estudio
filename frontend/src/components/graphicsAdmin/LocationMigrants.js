import React from "react";
import { Bar } from "react-chartjs-2"


const LocationMigrants = () => {
    const dataBar = {
        labels: ["Amazonas", "Cundinamarca", "Antioquia", "Arauca"],
        datasets: [
            {
                label: "Department",
                backgroundColor: ["#5f83fc", "#92C149", "#fc5fe2"],
                borderColor: ["#5f83fc", "#92C149", "#fc5fe2"],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81],
            },
        ],
    };

    return (
        <div className="graph mt-2">
            <Bar data={dataBar} options={options} width={400} height={200} />
        </div>
    );
};

export default LocationMigrants;
