import React from "react";
import { Bar } from "react-chartjs-2";
import "./GraphicsAdmin.scss";


const LocationMigrants = () => {
    const dataBar = {
        labels: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar","Boyacá","Caldas","Caquetá","Casanare","Cauca","Cesar","Chocó","Córdoba","Cundinamarca","Guainía","Guaviare","Huila","Guajira","Magdalena","Meta","Nariño","Norte de Santander","Putumayo","Quindío","Risaralda","San Andrés y Providencia","Santander","Tolima","Valle del Cauca","Vaupés","Vichada"],
        datasets: [
            {   
                axis: "y",
                label: "Departamentos",
                borderWidth: 1,
                backgroundColor: [
                    /*Red*/'rgba(255, 99, 132)',
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                borderColor: [
                    /*Red*/'rgba(255, 99, 132)',
                    /*Orange*/'rgba(255, 159, 64)',
                    /*Yellow*/'rgba(255, 205, 86)',
                    /*Green*/'rgba(75, 192, 192)',
                    /*Blue*/'rgba(54, 162, 235)',
                ],
                data: [65, 80, 90, 25, 12, 34, 65, 43, 86, 65, 80, 90, 25, 12, 34, 65, 43, 86, 65, 80, 90, 25, 12, 34, 65, 43, 86, 34, 45, 21, 87],
            },
        ],
    };

    const options = {
        indexAxis: "y",
    };

    return (
        <div className="graph mt-2">
            <Bar data={dataBar} options={options} width={750} height={700} />
        </div>
    );
};

export default LocationMigrants;
