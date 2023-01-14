import React from "react";

const DisplayData = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        if (index == 0) {
          return (
            <div key={index}>
              <h1>{item.Date}</h1>
              <h1>{item.Open}</h1>
              <h1>{item.High}</h1>
              <h1>{item.Low}</h1>
              <h1>{item.Close}</h1>
              <h1>{item.Volume}</h1>
            </div>
          );
        }
      })}
    </>
  );
};

export default DisplayData;
