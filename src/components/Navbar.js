import React from "react";
import SearchName from "./SearchForm.js";
// import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
        <div className="search-area col-4">
          <SearchName />
        </div>
    </nav>
  );
}
export default Nav;