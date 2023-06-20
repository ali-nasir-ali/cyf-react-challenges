import React, { useState } from "react";

function Header({ darkModePass }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    // console.info({ darkMode }, "print mode inside");
    setDarkMode(!darkMode);
    darkModePass(darkMode);
  };

  return (
    <header>
      <h1>
        Where in the world? <button onClick={toggleDarkMode}>{darkMode ? "Dark  Mode" : "Light Mode"}</button>
      </h1>
    </header>
  );
}

export default Header;
