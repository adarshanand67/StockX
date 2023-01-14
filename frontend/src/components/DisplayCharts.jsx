import axios from "axios";
import Chart from "chart.js/auto";
import React from "react";
import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";

const url = "https://localhost:3000";

const options = {
  responsive: true,
  maintainAspectRatio: true,
};

const dateFormater = (date) => {
  // Convert 2020-12-31 to Dec 2020
  const dateArray = date.split("-");
  const month = dateArray[1];
  const year = dateArray[0];
  const monthName = new Date(year, month - 1).toLocaleString("default", {
    month: "short",
  });
  return `${monthName} ${year}`;
};

const DisplayCharts = ({ data, company }) => {
  const dateLabels = data.map((item) => dateFormater(item.Date));
  console.log(dateLabels);
  const openPrices = data.map((item) => item.Open);
  const closePrices = data.map((item) => item.Close);
  const highPrices = data.map((item) => item.High);
  const lowPrices = data.map((item) => item.Low);
  const volume = data.map((item) => item.Volume);
  const adjClose = data.map((item) => item["Adj Close"]);

  const WeekHigh52 = Math.max(...highPrices).toString();
  const WeekLow52 = Math.min(...lowPrices).toString();
  console.log(WeekHigh52, WeekLow52);

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
      <div className="w-5/6 mt-5 m-auto p-5 border border-gray-400 rounded-lg">
        {/* Company Name */}
        <h1 className="text-3xl font-bold text-center">{company}</h1>
        <div className="grid grid-rows-1 grid-cols-2 gap-4 m-5 p-4 border border-gray-400 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-bold bg-green-300">52 Week High</h1>
            <h1 className=" ">{WeekHigh52}</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-bold bg-red-400">52 Week Low</h1>
            <h1 className=" ">{WeekLow52}</h1>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default DisplayCharts;
