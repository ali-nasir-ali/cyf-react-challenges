import React, { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }
  //
  function handleSubmit(e) {
    e.preventDefault();
    props.search(searchInput);
  }
  //
  return (
    <div className="search">
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <div className="search-row">
              <h4>
                Search Country <input type="text" className="form-control" placeholder="Customer name" value={searchInput} onChange={handleSearchInput} />
                <button className="btn btn-primary">Search</button>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
