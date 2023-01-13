import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Data from "./components/Data";
import Spinners from "./components/Spinners";
import NavigationBar from "./container/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1 className="text-3xl bg-pink-400 font-bold underline">Hello world!</h1> */}
      <NavigationBar />
      <Data />
    </div>
  );
}

export default App;
