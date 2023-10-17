import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "./components/cuenta";
import options from "./components/data";
import Tarjeta from "./components/card";
import { Row, Col } from "react-bootstrap";
import perfil from "./assets/perfil.jpg"
const App = () => {
  console.log(Row);
  return (
    <div className="container-fluid">
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
          
            <ul className="row column-list">
              {options.map((option, index) => (
                <li key={index} className="col-lg-3 col-md-4">
                  <div className="contenedor-tarjetas">
                    <Tarjeta
                      titulo={option.nombre}
                      descripcion={option.id}
                      imagenURL={perfil}
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
