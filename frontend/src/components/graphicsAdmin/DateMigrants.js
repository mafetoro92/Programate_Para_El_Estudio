// import React, { useContext, useEffect } from "react";
// import { Chart } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Doughnut, defaults } from "react-chartjs-2";
// import "./GraphicsAdmin.scss";
// import { providerContext } from "../../Context/status";
// //import "chart.piecelabel.js";

// Chart.register(ChartDataLabels);
// Chart.defaults.plugins.datalabels;
// defaults.plugins.legend.position = "bottom";

// const DateMigrants = ({ item }) => {
//     const { profiles } = useContext(providerContext)
//     const { usersRegisted } = item
//     let migrants = []
//     let notMigrants = []
//     for (let i of usersRegisted) {
//         for (let j of profiles) {
//             if (j.user_id === i) {
//                 if (j.migrant === true) {
//                     migrants = [...migrants, j.user_id]
//                 } else if (j.migrant === false) {
//                     notMigrants = [...notMigrants, j.user_id]
//                 }
//             }
//         }
//     }
//     let no = Math.round(notMigrants.length * 100 / usersRegisted.length)
//     let yes = Math.round(migrants.length * 100 / usersRegisted.length)
//     const data = {
//         datasets: [
//             {
//                 label: "# of Votes",
//                 data: [`${yes}`, `${no}`],
//                 backgroundColor: [
//                     /*Red*/'rgba(255, 99, 132)',
//                     /*Green*/'rgba(75, 192, 192)',
//                 ],
//                 borderColor: [
//                     /*Red*/'rgba(255, 99, 132)',
//                     /*Green*/'rgba(75, 192, 192)',
//                 ],
//                 hoverBackgroundColor: ["rgba(255, 99, 132)", "rgba(75, 192, 192)"],
//             },
//         ],
//         labels: ["Migrantes", "No migrantes"],
//     };

//     const options = {
//         maintainAspectRatio: true,
//         responsive: false,
//         plugins: {
//             datalabels: {
//                 color: "#6c757d",
//                 formatter: function (value, context) {
//                     return Math.round(value) + "%";
//                 },
//             },
//         },
//     };

//     return (
//         <div className="graph mt-2">
//             <Doughnut data={data} options={options} width={400} height={200} />
//         </div>
//     );
// };

// export default DateMigrants;


import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import "./GraphicsAdmin.scss";
//import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const DateMigrants = () => {
    /*const { htmlScore } = item;
    let pendiente = 100 - htmlScore;
    console.log(pendiente);
    */ const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [20, 40],
                backgroundColor: ["#FF6384", "#D7D7D7"],
                hoverBackgroundColor: ["#FF6384", "#D7D7D7"],
            },
        ],
        labels: ["Migrantes", "No migrantes"],
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

export default DateMigrants;
