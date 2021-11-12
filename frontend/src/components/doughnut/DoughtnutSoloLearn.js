import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./DoughtnutSoloLearn.scss";
const data = {
    labels: ["Html", "css", "javascript"],
    datasets: [
        {
            label: "# of Votes",
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#92C149", "#FFCC02"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
    ],
};
const DoughtnutSoloLearn = () => {
    return (
        <div className="section__dashboard">
            <div className="content">
                <h2>SoloLearn</h2>
                <Doughnut data={data} />
            </div>
        </div>
    );
};

export default DoughtnutSoloLearn;
