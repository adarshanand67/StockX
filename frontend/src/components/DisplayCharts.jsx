import axios from "axios";
import Chart from "chart.js/auto";
import React from "react";
import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";

const url = "https://localhost:3000";

const options = {
  responsive: false,
  // maintainAspectRatio: false,
  // canvas: {
  //   height: 1500,
  //   width: 1500,
  // },
};

const DisplayCharts = ({ data }) => {
  const dateLabels = data.map((item) => item.Date);
  console.log(dateLabels);
  const openPrices = data.map((item) => item.Open);
  const closePrices = data.map((item) => item.Close);
  const highPrices = data.map((item) => item.High);
  const lowPrices = data.map((item) => item.Low);
  const volume = data.map((item) => item.Volume);
  const adjClose = data.map((item) => item["Adj Close"]);

  const Open_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Open Price vs Date",
        data: openPrices,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const Close_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Close Price vs Date",
        data: closePrices,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const High_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "High Price vs Date",
        data: highPrices,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const Low_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Low Price vs Date",
        data: lowPrices,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const Volume_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Volume vs Date",
        data: volume,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const AdjClose_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Adj Close vs Date",
        data: adjClose,
        backgroundColor: "#1A5BE3",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 gap-4 m-5 p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Open Price vs Date</h1>
          <Bar data={Open_vs_Date} options={options} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Close Price vs Date</h1>
          <Bar data={Close_vs_Date} options={options} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">High Price vs Date</h1>
          <Bar data={High_vs_Date} options={options} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Low Price vs Date</h1>
          <Bar data={Low_vs_Date} options={options} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Volume vs Date</h1>
          <Bar data={Volume_vs_Date} options={options} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">Adj Close vs Date</h1>
          <Bar data={AdjClose_vs_Date} options={options} />
        </div>
      </div>
      {/* Create a 3X2 grid */}
    </>
  );
};

export default DisplayCharts;
