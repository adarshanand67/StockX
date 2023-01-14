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
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
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

  const fetchCompanyData = async (company) => {
    // TODO - Fetch Data from API
    const URL = `src/data/json/${company}.json`;
    const response = await fetch(URL);
    const data = await response.json();

    setData(data);
    setLoading(false);
  };
  // console.log(data);

  useEffect(() => {
    fetchCompanyData(selectedCompany); //fetch data from whenever company changes
  }, [selectedCompany]);

  console.log(data);

  return (
    <>
      <NavigationBar />
      {/* Set routes to /signup */}
      <div className="">
        <h1
          className="text-2xl text-gray-700 m-10 font-semibold"
          style={{ textAlign: "center" }}
        >
          Select your option to get started
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
                {companyOption(selectedCompany, handleChange)}
                <DisplayCharts data={data} />
              </>
            }
          />
          <Route
            path="/stockExchange"
            element={
              <>
                {/* <Dropdown companies={stockExchange} /> */}
                {stockExchangeOption(selectedCompany, handleChange)}
                <DisplayCharts data={data} />
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
