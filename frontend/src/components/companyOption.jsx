import { companies } from "../utils/companies";

export function companyOption(selectedCompany, handleChange) {
  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <select
          className="block appearance-none text-center w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          value={selectedCompany}
          onChange={handleChange}
        >
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
