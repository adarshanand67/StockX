import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Data from "./components/Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1 className="text-3xl bg-pink-400 font-bold underline">Hello world!</h1> */}
      <Data/>
    </div>
  );
}

export default App;
