import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleInput, handleSubmit }) => {
  return (
    <div className="SearchContainer">
      <div className="searchBox">
        <input
          type="text"
          onChange={handleInput}
          placeholder="Search a topic ..."
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
          href="#"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
