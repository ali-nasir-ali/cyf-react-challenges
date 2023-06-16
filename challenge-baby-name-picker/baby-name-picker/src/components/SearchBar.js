import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} className="search-box" />
    </div>
  );
};

export default SearchBar;
