import HighchartsReact from "highcharts-react-official";
import more from "highcharts/highcharts-more";
import Highcharts from "highcharts/highstock";
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
import { stockExchangeOption } from "./stockExchangeOption";

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

const TechAnalysis = ({
  data,
  company,
  duration,
  handleDuration,
  handleChange,
}) => {
  // console.log(data);
  const date_ohlc = data.map((item) => [
    parseUnixTime(item.Date),
    parseFloat(item.Open),
    parseFloat(item.High),
    parseFloat(item.Low),
    parseFloat(item.Close),
  ]);

  const path = companyToSvgPath(company);

  const volume = data.map((item) => [
    parseUnixTime(item.Date),
    parseFloat(item.Volume),
  ]);
  const options = {
    chart: {
      height: 600,
    },
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
    subtitle: {
      text: "All indicators",
    },
    accessibility: {
      series: {
        descriptionFormat: "{seriesDescription}.",
      },
      description:
        "Use the dropdown menus above to display different indicator series on the chart.",
      screenReaderSection: {
        beforeChartFormat:
          "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div>",
      },
    },
    legend: {
      enabled: true,
    },
    rangeSelector: {
      selected: 2,
    },
    yAxis: [
      {
        height: "60%",
      },
      {
        top: "60%",
        height: "20%",
      },
      {
        top: "80%",
        height: "20%",
      },
    ],
    plotOptions: {
      series: {
        showInLegend: true,
        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    },
    series: [
      {
        type: "candlestick",
        id: "company1",
        name: `${company}`,
        data: date_ohlc,
      },
      {
        type: "column",
        id: "volume",
        name: "Volume",
        data: volume,
        yAxis: 1,
      },
      {
        type: "pc",
        id: "overlay",
        linkedTo: "company1",
        yAxis: 0,
      },
      {
        type: "macd",
        id: "oscillator",
        linkedTo: "company1",
        yAxis: 2,
      },
    ],
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
    <div className="w-5/6 m-auto">
      <div className="my-10">
        {companyOption(company, handleChange, duration, handleDuration)}
      </div>
      <div className="text-3xl flex justify-center h-50 my-3">
        <img src={path} alt="company" width={150} />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default TechAnalysis;
