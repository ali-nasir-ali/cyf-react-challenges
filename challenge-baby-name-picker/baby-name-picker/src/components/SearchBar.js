import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return <input type="text" placeholder="Search..." value={searchQuery} onChange={handleChange} />;
};

export default SearchBar;
