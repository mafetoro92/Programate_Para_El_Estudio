import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie, defaults } from "react-chartjs-2";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
// defaults.plugins.legend.position = "bottom";

const BarChart = () => {
    const data = {
        labels: ["Estados Unidos", "Mexico", "Itali", "Colombia"],
        datasets: [
            {
                label: "Habitantes",
                backgroundColor: "rgba(0,255,0,0,0.2)",
                borderColor: "black",
                borderWidth: 1,
                // hoverBackgroundColor: 'rgba(0.255,0,0.2)',
                hoverBorderColor: "#FF0000",
                data: [10, 20, 15, 13, 18],
            },
        ],
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
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
        <>
            <div className="container d-flex">
                <div className="container">
                    <Bar data={data} options={options} />
                    <div className="container">
                        {/* <Pie
          data={{
            labels: ["Red", "Blue"],
            datasets: [
              {
                datalabels: {
                  color: "#ffffff",
                },
                data: [40, 60],
                backgroundColor: ["#4EADEB", "#3F86CB"],
                hoverOffset: 4,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            plugins: {
              datalabels: {
                //   color: "#ffffff",

                formatter: function (value, context) {
                  return Math.round(value) + "%";
                },
              },
            },
          }}
        /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarChart;
