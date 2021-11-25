import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { providerContext } from "../../Context/status";

const FunnelDos = ({ item }) => {
    const { getAcept, acept, profiles } = useContext(providerContext);
    const { usersRegisted } = item;
    const items = usersRegisted
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
                data: [`${usersRegisted.length}`, 59, 10, `${acepts.length}`],
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
                data: [`${usersRegisted.length}`, 59, 100, `${acepts.length}`],
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
