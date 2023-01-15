import { companies } from "../utils/companies";

export function companyOption(
  selectedCompany,
  handleChange,
  duration,
  handleDuration
) {
  return (
    <>
      <div className="flex justify-center gap-5">
        <div className="w-1/3">
          <select
            className="block appearance-none text-center w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            // value={selectedCompany}
            onChange={handleChange}
          >
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          {/* Select Duration */}
          <select
            className="appearance-none text-center w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={duration}
            onChange={handleDuration}
          >
            {/* All, 1D, 1W, 1M, 3M, 6M, 1Y, 2Y, 5Y */}
            <option value="1D">1 Day</option>
            <option value="1W">1 Week</option>
            <option value="1M">1 Month</option>
            <option value="3M">3 Months</option>
            <option value="6M">6 Months</option>
            <option value="1Y">1 Year</option>
            <option value="2Y">2 Years</option>
          </select>
        </div>
      </div>
    </>
  );
}
