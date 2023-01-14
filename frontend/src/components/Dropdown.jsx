import React, { useState } from "react";

function Dropdown({ companies }) {
  // console.log(companies);
  const [selectedOption, setSelectedOption] = useState(companies[0]);
  console.log(selectedOption);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="">
        <h1
          className="text-2xl text-gray-700 m-10 font-semibold"
          style={{ textAlign: "center" }}
        >
          Select your option to get started
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4">
          <select
            className="block appearance-none text-center w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={selectedOption}
            onChange={handleChange}
          >
            {/* <option value="">Select Company</option> */}
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
