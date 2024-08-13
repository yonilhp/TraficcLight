// src/js/component/TrafficLight.jsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrafficLightSignal from "./TrafficLight/TrafficLightSignal";
import TrafficLightPole from "./TrafficLight/TrafficLightPole";

const TrafficLight = () => {
  const [color, setColor] = useState(""); // Inicialmente no hay color seleccionado

  const handleClick = (selectedColor) => {
    setColor(selectedColor); // Establece el color seleccionado al hacer clic
  };

  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col xs="auto">
          <TrafficLightPole />
          <div className="bg-dark rounded-3 p-3" style={{ width: "150px" }}>
            <TrafficLightSignal color={color} handleClick={handleClick} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrafficLight;
