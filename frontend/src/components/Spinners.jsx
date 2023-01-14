import React from "react";
import { ScaleLoader } from "react-spinners";

const Spinners = () => {
  return (
    <ScaleLoader
      color="#36d7b7"
      height={50}
      loading
      speedMultiplier={1.5}
      width={10}
    />
  );
};

export default Spinners;
