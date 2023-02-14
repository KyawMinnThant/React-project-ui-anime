import React from "react";
import "../Component-css/Searchbar.css";
const Searchbar = () => {
  return (
    <div className=" ms-5">
      <div className="d-flex">
        <i className="bi bi-search fs-5"></i>
        <input
          type="text"
          className=" forinput p-2"
          placeholder="Search anime series/movies"
        />
      </div>
    </div>
  );
};

export default Searchbar;
