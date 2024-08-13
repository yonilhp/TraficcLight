// src/js/component/TrafficLightPole.jsx
import React from "react";

const TrafficLightPole = () => {
  return (
    <div
      className="bg-dark"
      style={{
        width: "10px",
        height: "100px",
        margin: "0 auto",
        position: "relative",
        top: "0" // Ajusta para que el palo esté justo encima del semáforo
      }}
    ></div>
  );
};

export default TrafficLightPole;
