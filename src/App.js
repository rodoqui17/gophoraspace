import React from "react";
import "./App.css";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "./components/cuenta";
import options from "./components/data";
import Tarjeta from "./components/card";
import { Row, Col } from "react-bootstrap";
const App = () => {
  console.log(Row);
  return (
    <div className="container">
      <Navbar />
      <h3 className="planet-inner"></h3>
      <div className="mars-title">
        <h1>#GOPHORALANZATUNOMBREALESPACIO</h1>
        <h2 className="h2">OCTUBRE 2023</h2>
        <h3 className="planet"></h3>

        <br />
      </div>

      <CountdownTimer />

      <div className="mars-background">
        <div>
          <div className="name-list">
            <h1>Tripulantes</h1>
          
            <ul className="column-list">
              {options.map((option, index) => (
                <li key={index}>
                  <div className="contenedor-tarjetas">
                    <Tarjeta
                      titulo={option.nombre}
                      descripcion={option.id}
                      imagenURL="imagen1.jpg"
                    />
                  
                 
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
