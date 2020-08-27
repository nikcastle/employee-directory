import React from "react";
import SearchName from "./SearchForm.js";
import "../styles/Navbar.css";

function Nav(props) {
  return (
    <nav className="navbar">
        <div className="search-area col-4">
          <SearchName handleSearchChange={props.handleSearchChange}/>
        </div>
    </nav>
  );
}
export default Nav;