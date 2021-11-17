import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar, Pie, defaults } from "react-chartjs-2";

const Torta = ({ item }) => {
  const { htmlScore, userFullName } = item;
  let pendiente = 100 - htmlScore;
  return (
    <div className="mt-4">
      <Pie
        data={{
          labels: [`${userFullName}`, "Falta"],
          datasets: [
            {
              datalabels: {
                color: "#ffffff",
              },

              data: [`${htmlScore}`, `${pendiente}`],
              backgroundColor: ["#4EADEB", "#c2c2c2"],
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
              //  color: "#ffffff",

              formatter: function (value, context) {
                return Math.round(value) + "%";
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Torta;
