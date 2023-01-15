import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { companyOption } from "./components/companyOption";
import Data from "./components/Data";
import DisplayCharts from "./components/DisplayCharts";
import Dropdown from "./components/Dropdown";
import Modals from "./components/Modals";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Spinners from "./components/Spinners";
import { stockExchangeOption } from "./components/stockExchangeOption";
import Feed from "./container/Feed";
import Footers from "./container/Footers";
import NavigationBar from "./container/Nav";
import { companies } from "./utils/companies";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let [selectedCompany, setSelectedCompany] = useState(companies[0]);
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
    fetchCompanyData(selectedCompany, duration); //fetch data from whenever company changes
  }, [selectedCompany, duration]);

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
                {/* <Dropdown companies={stockExchange} /> */}
                {stockExchangeOption(
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
