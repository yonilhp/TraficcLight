// src/js/component/TrafficLightSignal.jsx
import React from "react";

const TrafficLightSignal = ({ color, handleClick }) => {
  return (
    <>
      <div
        onClick={() => handleClick("red")}
        className={`mb-2 rounded-circle ${color === "red" ? "bg-danger border border-light border-4 shadow-lg" : "bg-danger"}`}
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
      ></div>
      <div
        onClick={() => handleClick("yellow")}
        className={`mb-2 rounded-circle ${color === "yellow" ? "bg-warning border border-light border-4 shadow-lg" : "bg-warning"}`}
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
      ></div>
      <div
        onClick={() => handleClick("green")}
        className={`rounded-circle ${color === "green" ? "bg-success border border-light border-4 shadow-lg" : "bg-success"}`}
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
      ></div>
    </>
  );
};

export default TrafficLightSignal;
