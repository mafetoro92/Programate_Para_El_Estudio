import React, { useContext, useEffect } from "react";
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
    const { getAcept, acept } = useContext(providerContext);
    const items = usersRegisted;
    useEffect(() => {
        getAcept()
    }, [])
    let acepts = []
    for (let i of items) {
        if (acept[0] !== undefined) {
            for (let j of acept) {
                if (j.rol.student === true) {
                    let id = j.id
                    if (i === id) {
                        acepts = [...acepts, j.id]
                    }
                }
            }
        }
    }
    let totalAcept = acepts.length
    let total = maxQuotas - totalAcept
    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${totalAcept}`, `${total}`],
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
                color: "#000",
                formatter: function (value, context) {
                    return Math.round(value);
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
