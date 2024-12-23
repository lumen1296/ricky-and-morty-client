import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search or filter results"
        className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};