import React from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import CountriesTable from "./Components/CountriesTable";
import "./App.css";

function App() {
  const [mode, setMode] = React.useState("");
  const [searchVal, setSearchVal] = React.useState("");

  const darkModePass = (mode) => {
    setMode(mode ? "darkModeActivated" : "");
  };

  const handleSearch = (searchVal) => {
    setSearchVal(searchVal);
  };

  return (
    <div className={`App-header ${mode}`}>
      <Header darkModePass={darkModePass} />
      <Search search={handleSearch} />
      <CountriesTable searchVal={searchVal} />
    </div>
  );
}

export default App;
