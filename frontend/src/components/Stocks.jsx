import axios from "axios";
import Chart from "chart.js/auto";
import React from "react";
import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";

const url = "https://localhost:3000";
// export const fetchData = async (country) => {
//   let changeableUrl = url;
//   if (country) {
//     changeableUrl = `${url}/countries/${country}`;
//   }
//   try {
//     const {
//       data: { confirmed, recovered, deaths, lastUpdate },
//     } = await axios.get(changeableUrl);
//     const modifiedData = { confirmed, recovered, deaths, lastUpdate };
//     return modifiedData;
//   } catch (err) {
//     console.log(err);
//   }
// };

const options = {
  responsive: false,
  // maintainAspectRatio: false,
  // canvas: {
  // height: 1500,
  // width: 500,
  // },
};

const Stocks = ({ data }) => {
  const labels = data.map((item) => item.Date);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Open Price",
        backgroundColor: "green",
        borderColor: "green",
        data: data.map((item) => item.Open),
      },
    ],
  };
  return (
    <>
      <div className="">
        <Bar data={chartData} />
        <Line data={chartData} />
      </div>
      {/* <Chart type="line" data={chartData} /> */}
      {/* <Doughnut data={chartData} /> */}
      {/* <Scatter data={chartData} /> */}
      {/* <Bubble data={chartData} /> */}
    </>
  );
};

export default Stocks;
