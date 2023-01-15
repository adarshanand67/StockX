import HighchartsReact from "highcharts-react-official";
import more from "highcharts/highcharts-more";
import Highcharts from "highcharts/highstock";
import Indicators from "highcharts/indicators/indicators-all.js";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
import DragPanes from "highcharts/modules/drag-panes.js";
import FullScreen from "highcharts/modules/full-screen.js";
import PriceIndicator from "highcharts/modules/price-indicator.js";
import StockTools from "highcharts/modules/stock-tools.js";
import React from "react";
import ashokley from "../assets/svg/ashokley.svg";
import bse from "../assets/svg/bse.svg";
import cipla from "../assets/svg/cipla.svg";
import eicher from "../assets/svg/eicher.svg";
import nse from "../assets/svg/nse.svg";
import reliance from "../assets/svg/reliance.svg";
import tatasteel from "../assets/svg/tatasteel.svg";
import "../styles/TechnicalAnalysis.module.css";
import { parseUnixTime } from "../utils/parseUnix";
import { companyOption } from "./companyOption";

// init the module
Indicators(Highcharts);
DragPanes(Highcharts);
AnnotationsAdvanced(Highcharts);
PriceIndicator(Highcharts);
FullScreen(Highcharts);
StockTools(Highcharts);

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

const TechnicalAnalysis = ({
  data,
  company,
  duration,
  handleDuration,
  handleChange,
}) => {
  console.log(data, company);
  const date_ohlc = data.map((item) => [
    parseUnixTime(item.Date),
    parseFloat(item.Open),
    parseFloat(item.High),
    parseFloat(item.Low),
    parseFloat(item.Close),
  ]);
  const volume = data.map((item) => [
    parseUnixTime(item.Date),
    parseFloat(item.Volume),
  ]);

  const path = companyToSvgPath(company);

  const options = {
    yAxis: [
      {
        height: "100%",
      },
      {
        top: "80%",
        height: "20%",
        offset: 0,
      },
    ],
    series: [
      {
        type: "ohlc",
        data: date_ohlc,
        yAxis: 0,
      },
      {
        type: "column",
        data: volume,
        yAxis: 1,
      },
    ],
    chart: {
      backgroundColor: "#f5f5f5",
    },
    xAxis: {
      gridLineWidth: 1,
      gridLineColor: "#e0e0e0",
    },
    plotOptions: {
      ohlc: {
        color: "#00ff00",
        upColor: "#ff0000",
        lineColor: "#000000",
        lineWidth: 1,
      },
      column: {
        color: "#1A58DF",
        borderWidth: 1,
      },
    },
    tooltip: {
      split: true,
      formatter: function () {
        return (
          Highcharts.dateFormat("%A, %b %e, %Y", this.x) +
          "<br/>" +
          "Open: " +
          this.points[0].point.open.toFixed(2) +
          "<br/>" +
          "High: " +
          this.points[0].point.high.toFixed(2) +
          "<br/>" +
          "Low: " +
          this.points[0].point.low.toFixed(2) +
          "<br/>" +
          "Close: " +
          this.points[0].point.close.toFixed(2) +
          "<br/>" +
          "Volume: " +
          this.points[1].point.y.toFixed(2)
        );
      },
    },
    rangeSelector: {
      selected: 1,
    },
    // navigator: {
    //   enabled: false,
    // },
    scrollbar: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center w-5/6 m-auto my-5">
        {companyOption(company, handleChange, duration, handleDuration)}
        {/* Title of company  */}
        <div className="flex justify-center my-10">
          <img src={path} alt="company" width="200px" />
        </div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </div>
    </>
  );
};

export default TechnicalAnalysis;
