import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { providerContext } from "../../Context/status";

const AmountPassing = ({ item }) => {
    const { usersRegisted } = item
    let InscripTotal = usersRegisted.length
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
                data: [`${InscripTotal}`, 59, 80, `${acepts.length}`],
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
