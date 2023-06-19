import React, { useState } from "react";
import data from "../Data/babyNamesData.json";
import SearchBar from "./SearchBar";

const BabyNamesList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const boysNames = data.filter((name) => name.sex === "m");
  const girlsNames = data.filter((name) => name.sex === "f");

  const renderNames = (names) => {
    return names
      .filter((name) => name.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((name) => (
        <span key={name.id} className={`baby-name ${name.sex}`}>
          {name.name}
        </span>
      ));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="names-container">{renderNames(boysNames.concat(girlsNames))}</div>
    </div>
  );
};

export default BabyNamesList;
