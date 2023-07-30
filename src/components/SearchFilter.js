import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedStatus,
  setSelectedType,
  setSelectedLaunchDate,
} from "../redux/actions/CardsActions";

function SearchFilter() {
  const dispatch = useDispatch();
  const selectedStatus = useSelector((state) => state.cards.selectedStatus);
  const selectedType = useSelector((state) => state.cards.selectedType);
  const selectedLaunchDate = useSelector(
    (state) => state.cards.selectedLaunchDate
  );

  const filterOptions = {
    status: ["All Status", "unknown", "retired", "active", "destroyed"],
    type: ["All Types", "Dragon 1.0", "Dragon 1.1", "Dragon 2.0"],
    launchDate: ["All Launch Dates", "2012", "2014", "2015", "2016", "2017"],
  };

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    dispatch(setSelectedStatus(selectedStatus));
  };

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    dispatch(setSelectedType(selectedType));
  };

  const handleLaunchDateChange = (event) => {
    const selectedLaunchDate = event.target.value;
    dispatch(setSelectedLaunchDate(selectedLaunchDate));
  };

  return (
    <div>
      <div className="bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Search By Filters</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Search Filter 1 */}
          <div className="flex-1 mb-4 lg:mb-0">
            <label htmlFor="filter1" className="block font-medium mb-1">
              Status
            </label>
            <select
              id="filter1"
              value={selectedStatus}
              onChange={handleStatusChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {filterOptions.status.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Search Filter 2 */}
          <div className="flex-1 mb-4 lg:mb-0">
            <label htmlFor="filter2" className="block font-medium mb-1">
              Launch Date
            </label>
            <select
              id="filter2"
              value={selectedLaunchDate}
              onChange={handleLaunchDateChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {filterOptions.launchDate.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="filter3" className="block font-medium mb-1">
              Type
            </label>
            <select
              id="filter3"
              value={selectedType}
              onChange={handleTypeChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              {filterOptions.type.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
