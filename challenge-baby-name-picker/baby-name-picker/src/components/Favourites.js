import React, { useState, useEffect } from "react";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Get the user's favourites from localStorage
    const localStorageFavourites = localStorage.getItem("favourites");
    if (localStorageFavourites) {
      setFavourites(JSON.parse(localStorageFavourites));
    }
  }, []);

  const handleFavourite = (name) => {
    // Add the name to the user's favourites
    if (!favourites.includes(name)) {
      favourites.push(name);
    }

    // Save the user's favourites to localStorage
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  const handleUnfavourite = (name) => {
    // Remove the name from the user's favourites
    const newFavourites = favourites.filter((favourite) => favourite !== name);
    setFavourites(newFavourites);

    // Save the user's favourites to localStorage
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favourites.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={() => handleFavourite("name")}>Add to favourites</button>
      <button onClick={() => handleUnfavourite("name")}>Remove from favourites</button>
    </div>
  );
};

export default Favourites;
