import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Data from "./components/Data";
import Dropdown from "./components/Dropdown";
import Feed from "./components/Feed";
import Footers from "./components/Footers";
import Modals from "./components/Modals";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Spinners from "./components/Spinners";
import Stocks from "./components/Stocks";
import NavigationBar from "./container/Nav";
import { companies, stockExchange } from "./utils/companies";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // fetch json file from src/data/json/BSE.json
    const response = await fetch("src/data/json/BSE.json");
    const data = await response.json();

    setData(data);
    setLoading(false);
  };
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

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
                <Dropdown companies={companies} />
                <Stocks data={data} />
              </>
            }
          />
          <Route
            path="/stockExchange"
            element={
              <>
                <Dropdown companies={stockExchange} />
                <Stocks data={data} />
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
