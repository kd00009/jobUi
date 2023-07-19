import React, { useState } from "react";
import { AiFillFilter } from "react-icons/ai";

const Header = ({
  searchTerm,
  handleInputChange,
  resetItems,
  sortByTime,
  sortByTimeAsc,
}) => {
  const [showSortingButtons, setShowSortingButtons] = useState(false);

  const handleFilterClick = () => {
    setShowSortingButtons(!showSortingButtons);
  };

  const handleResetClick = () => {
    resetItems();
    setShowSortingButtons(false);
  };

  return (
    <div className="flex justify-between items-center my-10 mx-40">
      <div>
        <span className="text-4xl font-bold">Recommended Jobs</span>
        <span className="bg-gray-200 w-20 h-10 rounded-full text-black-500 text-center font-bold text-2xl p-1 ml-5">
          386
        </span>
      </div>
      <span className="relative cursor-pointer flex items-center">
        <span className="mr-2">Sort by :</span>
        <AiFillFilter
          className="w-8 h-8 text-black"
          onClick={handleFilterClick}
        />
        <div
          className={`sorting-buttons absolute top-full left-0 ${
            showSortingButtons ? "block" : "hidden"
          } bg-white py-2 px-4 mt-2 rounded-lg shadow-lg z-10 flex flex-col`}
        >
          <input
            type="text"
            placeholder="Search by job name..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleResetClick}>Reset</button>
          <button onClick={sortByTime}>
            ({sortByTimeAsc ? "past week" : "most recent"})
          </button>
        </div>
      </span>
    </div>
  );
};

export default Header;
