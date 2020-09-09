import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = () => {
 

  const [darkMode, toggleDarkMode] = useDarkMode();

  
  


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => toggleDarkMode(!darkMode)}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
