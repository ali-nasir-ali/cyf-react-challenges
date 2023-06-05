import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className={`App ${darkMode ? "dark" : ""}`}>
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;

//   return (
//     <div className={`App ${darkMode ? "dark" : ""}`}>
//       <header>
//         <h1>Where in the world?</h1>
//         <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
//       </header>
