import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie, defaults } from "react-chartjs-2";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.tooltip.enabled = false;
defaults.plugins.legend.position = "bottom";

const BarChart = () => {
  return (
    <>
    <div className="container d-flex">
      <div>
        <Pie
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
        />
      </div>

      <div>
        <Pie
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
        />
      </div>
      </div>
    </>
  );
};

export default BarChart;
