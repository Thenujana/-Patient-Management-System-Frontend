import React from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-4 mb-6">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border border-green-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
      
      />
   
    </div>
  );
};

export default Search;
