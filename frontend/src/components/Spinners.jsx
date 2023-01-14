import React from "react";
import { ScaleLoader } from "react-spinners";

const Spinners = () => {
  return (
    <ScaleLoader
      color="#1A5BE3"
      height={50}
      loading
      speedMultiplier={1.5}
      width={10}
    />
  );
};

export default Spinners;
