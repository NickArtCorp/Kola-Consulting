import React from "react";
import "./Spinner.css";
import img from "./Kola-nut-5.png";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={img} alt="Loading..." className="spinner-image" />
    </div>
  );
};

export default Spinner;