import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ placeholder = "Search", extraClass = "" }) => {
  return (
    <div
      className={`relative flex items-center bg-[#EEEFEF] rounded-full h-[45.15px] mb-[20px] ${extraClass}`}
    >
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-3 flex items-center">
        <FiSearch className="text-[#B3B3B3] h-[20px] w-[20px]" />
      </div>
      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 pl-10 pr-4 rounded-full bg-[#EEEFEF] text-gray-500 placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
};

export default SearchInput;
