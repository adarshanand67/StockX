import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Data from "./components/Data";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Spinners from "./components/Spinners";
import Stocks from "./components/Stocks";
import NavigationBar from "./container/Nav";

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
          {/* <Route path="/spinners" element={<Spinners />} /> */}
          <Route path="/stocks" element={<Stocks />} />
          {/* <Route path="/" element={<Data />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
