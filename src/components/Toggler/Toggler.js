import React from "react";
import "./Toggler.css";

const Toggler = ({ handleToggle }) => {
  return (
    <div className="toggleBtn ml-auto">
      <label className="switch ml-auto">
        <input type="checkbox" onClick={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Toggler;
