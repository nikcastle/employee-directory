import React from "react";
// import DataAreaContext from "../utils/DataAreaContext";

const SearchName = (props) => {

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter a Name"
          aria-label="Search"
          onChange={e => props.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchName;