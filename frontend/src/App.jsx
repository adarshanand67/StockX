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
import { CheckDuration } from "./utils/CheckDuration";
import { companies, stockExchange } from "./utils/companies";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedExchange, setSelectedExchange] = useState(stockExchange[0]);

  // console.log(selectedCompany, selectedExchange);
  const [duration, setDuration] = useState("6M");
  const toast = useToast();

  const handleChangeCompany = (e) => {
    setSelectedCompany(e.target.value);
    toast({
      title: `Selected Company: ${e.target.value}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleChangeExchange = (e) => {
    setSelectedExchange(e.target.value);
    toast({
      title: `Selected Exchange: ${e.target.value}`,
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

    CheckDuration(duration, data);

    setData(data);
    setLoading(false);
  };
  // console.log("selectedCompany: ", selectedCompany, "duration: ", duration);

  const fetchExchangeData = async (exchange, duration) => {
    // TODO - Fetch Data from API
    const URL = `src/data/json/${exchange}.json`;
    const response = await fetch(URL);
    const data = await response.json();

    CheckDuration(duration, data);

    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCompanyData(selectedCompany, duration); //fetch data from whenever company changes
  }, [selectedCompany, duration]);

  useEffect(() => {
    fetchExchangeData(selectedExchange, duration); //fetch data from whenever exchange changes
  }, [selectedExchange, duration]);

  // console.log(data);

  return (
    <>
      <NavigationBar />
      {/* Set routes to /signup */}
      <div className="">
        <h1
          className="text-2xl text-gray-700 m-2 font-semibold"
          style={{ textAlign: "center" }}
        >
          Chose company and duration
        </h1>
      </div>

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
                  handleChangeCompany,
                  duration,
                  setDuration
                )}
                <DisplayCharts data={data} company={selectedCompany} />
              </>
            }
          />
          <Route
            path="/stockExchange"
            element={
              <>
                {/* <Dropdown companies={stockExchange} /> */}
                {stockExchangeOption(
                  selectedExchange,
                  handleChangeExchange,
                  duration,
                  setDuration
                )}
                <DisplayCharts data={data} company={selectedExchange} />
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
