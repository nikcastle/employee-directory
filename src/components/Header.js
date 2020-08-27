import React from 'react';
import "../styles/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on a heading to filter employees or enter a name in the search box.</p>
      </div>
    )
  }

export default Header;
