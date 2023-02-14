import React from "react";
import ApexCharts from "react-apexcharts";

const MainChart = () => {
  const chart = {
    series: [70],
    options: {
      chart: {
        height: 450,
        width: 450,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["80,000"],
    },
  };
  return (
    <>
      <div id="chart">
        <ApexCharts
          options={chart.options}
          series={chart.series}
          type="radialBar"
          height={450}
          width={450}
        />
      </div>
    </>
  );
};

export default MainChart;
