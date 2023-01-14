import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Data from "./components/Data";
import Signup from "./components/Signup";
import Spinners from "./components/Spinners";
import NavigationBar from "./container/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      {/* Set routes to /signup */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/data" element={<Data />} />
          <Route path="/spinners" element={<Spinners />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
