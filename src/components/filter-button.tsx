import React from "react";

export const FilterButton: React.FC = () => {
  return (
    <button className="w-full flex items-center justify-center py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
      <span className="mr-2">Filters</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 001.293.957l4-1.2A1 1 0 0121 18V9.586L17.707 6.293A1 1 0 0117 6V5H7v1a1 1 0 01-.293.707L3.293 10.293A1 1 0 013 10V4z" />
      </svg>
    </button>
  );
};
