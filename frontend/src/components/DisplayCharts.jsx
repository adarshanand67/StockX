import axios from "axios";
import Chart from "chart.js/auto";
import React from "react";
import { Bar, Bubble, Doughnut, Line, Scatter } from "react-chartjs-2";
// import svg
import { ReactSVG } from "react-svg";
import ashokley from "../assets/svg/ashokley.svg";
import bse from "../assets/svg/bse.svg";
import cipla from "../assets/svg/cipla.svg";
import eicher from "../assets/svg/eicher.svg";
import nse from "../assets/svg/nse.svg";
import reliance from "../assets/svg/reliance.svg";
import tatasteel from "../assets/svg/tatasteel.svg";

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

const parseDate = (date) => {
  // Convert 2023-01-04T00:00:00.000Z to 2023-01-04 to be used in dateFormater
  const dateArray = date.split("T");
  return dateFormater(dateArray[0]);
};

const parseDuration = (duration) => {
  if (duration === "1D") {
    return 1;
  } else if (duration === "1W") {
    return 7;
  } else if (duration === "1M") {
    return 30;
  } else if (duration === "3M") {
    return 90;
  } else if (duration === "6M") {
    return 180;
  } else if (duration === "1Y") {
    return 365;
  } else if (duration === "2Y") {
    return 730;
  } else if (duration === "5Y") {
    return 1825;
  } else {
    return 365;
  }
};

const companyToSvgPath = (company) => {
  if (company === "RELIANCE") {
    return reliance;
  }
  if (company === "ASHOKLEY") {
    return ashokley;
  }
  if (company === "CIPLA") {
    return cipla;
  }
  if (company === "EICHERMOT") {
    return eicher;
  }
  if (company === "TATASTEEL") {
    return tatasteel;
  }
  if (company === "BSE") {
    return bse;
  }
  if (company === "NSE") {
    return nse;
  }
};

const DisplayCharts = ({ data, company, duration }) => {
  console.log(data);
  const RupeeSymbol = "\u20B9";
  const dateLabels = data.map((item) => dateFormater(item.Date));
  // console.log(dateLabels);
  const pureDates = data.map((item) => item.Date);
  const openPrices = data.map((item) => item.Open);
  const closePrices = data.map((item) => item.Close);
  const highPrices = data.map((item) => item.High);
  const lowPrices = data.map((item) => item.Low);
  const volume = data.map((item) => item.Volume);
  const adjClose = data.map((item) => item["Adj Close"]);
  // volatility high - low) / close.
  const volatility = data.map((item) => {
    const high = item.High;
    const low = item.Low;
    const close = item.Close;
    return ((high - low) / close).toFixed(2);
  });

  const WeekHigh52 = Math.max(...highPrices).toFixed(2);
  const WeekLow52 = Math.min(...lowPrices).toFixed(2);
  // console.log(WeekHigh52, WeekLow52);

  const lastClosingPrice = parseInt(
    closePrices[closePrices.length - 1]
  ).toFixed(2);
  const FirstOpeningPrice = parseInt(openPrices[0]).toFixed(2);
  // const latestDate = parseDate(pureDates[pureDates.length - 1]);
  const latestDate = pureDates[pureDates.length - 1];
  console.log(latestDate);

  const priceChange = (lastClosingPrice - FirstOpeningPrice).toFixed(2);

  const priceChangePercentage = (
    (priceChange / FirstOpeningPrice) *
    100
  ).toFixed(2);
  const greenOrRed = priceChange > 0 ? "green" : "red";
  const upOrDownArrow = priceChange > 0 ? "▲" : "▼";

  const path = companyToSvgPath(company);

  const Open_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Open Price vs Date",
        data: openPrices,
        backgroundColor: "#CCE4FF",
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
        backgroundColor: "#CCE4FF",
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
        backgroundColor: "#CCE4FF",
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
        backgroundColor: "#CCE4FF",
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
        backgroundColor: "#CCE4FF",
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
        backgroundColor: "#CCE4FF",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };

  const Volatility_vs_Date = {
    labels: dateLabels,
    datasets: [
      {
        label: "Volatility vs Date",
        data: volatility,
        backgroundColor: "#CCE4FF",
        borderColor: "#1A5BE3",
        borderWidth: 1,
      },
    ],
  };
  // console.log(path)

  return (
    <>
      <div className="w-5/6 mt-5 m-auto p-5 border border-gray-400 rounded-lg">
        {/* Company Name */}
        <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 m-5 rounded-lg ">
          {/* 1 */}
          <div className="m-5 flex justify-start sm:justify-center">
            <h1 className="text-3xl font-bold text-gray-500 lg:text-left ">
              {company} <br />
              <span
                className={`text-xl font-bold text-${greenOrRed}-500`}
              >{` ${upOrDownArrow} ${priceChange} (${priceChangePercentage}%) `}</span>
              <br />
              <span className="text-gray-400 font-thin text-lg">
                Last Updated:{latestDate}
              </span>
            </h1>
          </div>
          {/* 2 */}
          <div className="flex justify-center sm:justify-end mx-5">
            <img src={path} alt="company" width="200px" />
          </div>
          {/* 3- 52 week data */}
          <div className="flex gap-5 items-center justify-left mt-5 mx-5">
            <div className="">
              <h1 className=" font-bold bg-green-300 text-center ">
                52 Week High
              </h1>
              <h1 className=" text-center">{RupeeSymbol + WeekHigh52}</h1>
            </div>
            <div className="">
              <h1 className="bg-red-400 font-bold text-center ">52 Week Low</h1>
              <h1 className=" text-center">{RupeeSymbol + WeekLow52}</h1>
            </div>
          </div>
          {/* 4-  Last closeing + first FirstOpeningPrice*/}
          <div className="flex gap-5 items-center justify-end mt-5 mx-5">
            <div className="">
              <h1 className=" font-bold bg-green-300 text-center">
                Last Closing Price
              </h1>
              <h1 className=" text-center">{RupeeSymbol + lastClosingPrice}</h1>
            </div>
            <div className="">
              <h1 className="bg-red-400 font-bold text-center">
                First Opening Price
              </h1>
              <h1 className=" text-center">
                {RupeeSymbol + FirstOpeningPrice}
              </h1>
            </div>
          </div>
        </div>
        {/* Charts */}
        {/* 2 columns in general 1 in small screens */}
        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center sm:max-w-xs lg:max-w-lg">
            <h1 className="text-2xl font-bold">Open Price vs Date</h1>
            <Bar data={Open_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs  lg:max-w-lg">
            <h1 className="text-2xl font-bold">Close Price vs Date</h1>
            <Bar data={Close_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs lg:max-w-lg">
            <h1 className="text-2xl font-bold">High Price vs Date</h1>
            <Bar data={High_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs  lg:max-w-lg">
            <h1 className="text-2xl font-bold">Low Price vs Date</h1>
            <Bar data={Low_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs  lg:max-w-lg">
            <h1 className="text-2xl font-bold">Adj Close vs Date</h1>
            <Bar data={AdjClose_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs  lg:max-w-lg">
            <h1 className="text-2xl font-bold">Volume vs Date</h1>
            <Bar data={Volume_vs_Date} options={options} />
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs  lg:max-w-lg">
            <h1 className="text-2xl font-bold">Volatility vs Date</h1>
            <Bar data={Volatility_vs_Date} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCharts;
