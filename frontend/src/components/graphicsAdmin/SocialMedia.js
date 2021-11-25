import React, { useContext } from "react";
import { Chart } from "chart.js";
//import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import "./GraphicsAdmin.scss";
import { providerContext } from "../../Context/status";
//import "chart.piecelabel.js";

const SocialMedia = ({ item }) => {
    const { profiles } = useContext(providerContext);
    const { usersRegisted } = item
    let instagram = 0
    let facebook = 0
    let web = 0
    for (let i of usersRegisted) {
        for (let j of profiles) {
            if (j.user_id === i) {
                if (j.heardFromUs !== undefined) {

                    if (j.heardFromUs.instagram === true) {
                        instagram += 1
                    } else if (j.heardFromUs.facebook === true) {
                        facebook += 1
                    } else if (j.heardFromUs.web === true) {
                        web += 1
                    }
                }

            }
        }
    }
    const data = {
        labels: [
            "Página web Educamás",
            "Recomendación de un amigo",
            "Facebook",
            "Instagram",
            "Google",
            "Compensar",
            "Alianza educativa",
            "Embajada de venezuela",
            "Politécnico Internacional",
            "PNUD",
            "Otro",
        ],
        datasets: [
            {
                axis: "y",
                label: "Redes sociales",
                data: [`${web}`, 50, `${facebook}`, `${instagram}`, 40, 50, 80, 78, 40, 50, 80],
                fill: false,
                backgroundColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
                borderColor: [
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                    "#92C149",
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        indexAxis: "y",
    };
    return (
        <div>
            <div className="graph mt-2">
                <Bar data={data} options={options} width={400} height={400} />
            </div>
        </div>
    );
};

export default SocialMedia;
