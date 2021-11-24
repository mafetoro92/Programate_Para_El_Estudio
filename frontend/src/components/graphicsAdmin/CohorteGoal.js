import React, { useContext } from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie, defaults } from "react-chartjs-2";
import "./GraphicsAdmin.scss";
import { providerContext } from "../../Context/status";
//import "chart.piecelabel.js";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const CohorteGoal = ({ item }) => {
    const { maxQuotas, usersRegisted } = item;
    const { acept } = useContext(providerContext);
    //let acepts = acept.rol.student;
    //console.log(usersRegisted);
    const users = [usersRegisted];
    console.log(users);
    let acepts = acept.id;
    console.log(acept.id);

    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${acept.lenght}`, `${maxQuotas}`],
                backgroundColor: ["#FFCC02", "#D7D7D7"],
                hoverBackgroundColor: ["#FFCC02", "#D7D7D7"],
            },
        ],
        labels: ["Aceptados", "Faltan"],
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
            <div className="graph">
                <Pie
                    data={data}
                    options={options}
                    width={400}
                    height={"auto"}
                />
            </div>
        </div>
    );
};

export default CohorteGoal;
