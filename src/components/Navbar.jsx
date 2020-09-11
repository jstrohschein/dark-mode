import React from "react";

const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
