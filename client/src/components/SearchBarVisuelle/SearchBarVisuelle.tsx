import { useState } from "react";

const SearchBarVisuelle = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-container">
      <input
        placeholder="Rechercher des séries..."
        aria-label="Rechercher des séries"
        className={`search-input ${isFocused ? "focused" : ""} text-black`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type="button" className="search-button">
        Parcourir
      </button>
    </div>
  );
};

export default SearchBarVisuelle;
