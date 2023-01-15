import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { companyOption } from "./components/companyOption";
import Compare from "./components/Compare";
import Data from "./components/Data";
import DisplayCharts from "./components/DisplayCharts";
import Dropdown from "./components/Dropdown";
import Modals from "./components/Modals";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Spinners from "./components/Spinners";
import StockCharts from "./components/StockCharts";
import { stockExchangeOption } from "./components/stockExchangeOption";
import {
  default as TechAnalysis,
  default as TechnicalAnalysis,
} from "./components/TechnicalAnalysis";
import Feed from "./container/Feed";
import Footers from "./container/Footers";
import NavigationBar from "./container/Nav";
import { companies, stockExchange } from "./utils/companies";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedStockExchange, setSelectedStockExchange] = useState(
    stockExchange[0]
  );

  const companyNames = companies.map((company) => company);

  const [duration, setDuration] = useState("3M");
  const toast = useToast();

  const handleChange = (e) => {
    setSelectedCompany(e.target.value);
    toast({
      title: `Selected Company: ${e.target.value}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleExchangeChange = (e) => {
    setSelectedStockExchange(e.target.value);
    toast({
      title: `Selected Stock Exchange: ${e.target.value}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
    toast({
      title: `Selected Duration: ${e.target.value}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const fetchCompanyData = async (company, duration) => {
    // TODO - Fetch Data from API
    const URL = `src/data/json/${company}.json`;
    const response = await fetch(URL);
    const data = await response.json();

    if (duration == "1D" && data.length > 1) {
      // only the last day
      data.splice(0, data.length - 1);
    } else if (duration == "1W" && data.length > 6) {
      // only the last 7 days
      data.splice(0, data.length - 6);
    } else if (duration == "1M" && data.length > 30) {
      // only the last 30 days
      data.splice(0, data.length - 30);
    } else if (duration == "3M" && data.length > 90) {
      // only the last 90 days
      data.splice(0, data.length - 90);
    } else if (duration == "6M" && data.length > 180) {
      // only the last 180 days
      data.splice(0, data.length - 180);
    } else if (duration == "1Y" && data.length > 365) {
      // only the last 365 days
      data.splice(0, data.length - 365);
    } else if (duration == "2Y" && data.length > 730) {
      // only the last 730 days
      data.splice(0, data.length - 730);
    } else if (duration == "5Y" && data.length > 1825) {
      // only the last 1825 days
      data.splice(0, data.length - 1825);
    }

    setData(data);
    setLoading(false);
  };
  // console.log("selectedCompany: ", selectedCompany, "duration: ", duration);

  useEffect(() => {
    const url = window.location.href;
    if (
      url.includes("company") ||
      url.includes("TechnicalAnalysis") ||
      url.includes("Compare")
    ) {
      fetchCompanyData(selectedCompany, duration);
    } else {
      fetchCompanyData(selectedStockExchange, duration);
    }
  }, [selectedCompany, duration, selectedStockExchange]);

  // console.log(data);

  return (
    <>
      <NavigationBar />
      {/* Set routes to /signup */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/data" element={<Data />} />
          <Route path="/spinners" element={<Spinners />} />
          {/* <Route path="/stocks" element={} /> */}
          <Route
            path="/company"
            element={
              <>
                {/* <Dropdown companies={companies} /> */}
                {companyOption(
                  selectedCompany,
                  handleChange,
                  duration,
                  handleDuration
                )}
                <DisplayCharts
                  data={data}
                  company={selectedCompany}
                  duration={duration}
                />
              </>
            }
          />
          <Route
            path="/stockExchange"
            element={
              <>
                {stockExchangeOption(
                  selectedStockExchange,
                  handleExchangeChange,
                  duration,
                  handleDuration
                )}
                <DisplayCharts
                  data={data}
                  company={selectedStockExchange}
                  duration={duration}
                />
              </>
            }
          />
          <Route
            path="/StockCharts"
            element={
              <>
                <StockCharts data={data} company={selectedCompany} />
                {/* <TechnicalAnalysis /> */}
              </>
            }
          />
          <Route
            path="/TechnicalAnalysis"
            element={
              <>
                <TechnicalAnalysis
                  data={data}
                  company={selectedCompany}
                  duration={duration}
                  handleDuration={handleDuration}
                  handleChange={handleChange}
                />
              </>
            }
          />
          <Route
            path="/Compare"
            element={
              <>
                <Compare data = {data} company = {selectedCompany} duration = {duration} handleDuration = {handleDuration} handleChange = {handleChange} />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Feed />
                <Modals />
              </>
            }
          />
        </Routes>
        <Footers />
      </Router>
    </>
  );
}

export default App;
