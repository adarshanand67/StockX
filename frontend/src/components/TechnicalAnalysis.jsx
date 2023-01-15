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
