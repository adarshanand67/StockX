import React, { useEffect, useState } from "react";

const Data = () => {
  // Read BSE.NS data from ./data/BSE.NS.csv
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // fetch json file from src/data/json/BSE.json
    const response = await fetch("src/data/json/BSE.json");
    const data = await response.json();
    console.log(data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // Read BSE.NS data from ./data/BSE.NS.csv
   
  );
};

export default Data;
