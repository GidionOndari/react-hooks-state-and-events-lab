import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  // state to track dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
