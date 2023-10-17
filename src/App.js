import React from "react";
import "./App.css";

import Navbar from "./components/navbar";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
// import Navbar from "./navbar";

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

import { Row, Col, Container, Card } from "react-bootstrap";
const App = () => {
  console.log(Row);
  return (
    <div>

      <Navbar />
      {/* <h3 className="planet-inner"></h3> */}
      <div className="mars-title">
        <h2>#lanzatunombrealespacio</h2>
        <h1>11 DE NOVIEMBRE</h1>

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

        <h1>TRIPULANTES</h1>
        <Container>
          <Row>
            {options.map((option, index) => (
              <Col xs={12} lg={3}>
                <Card style={{ width: "auto", padding: "10px", margin: "4px" }}>
                  <Card.Img variant="top" src={option.img} />
                  <Card.Body>
                    <Card.Title>{option.nombre}</Card.Title>
                    <Card.Text>Tripulante # {option.id}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* <Container>
          <Row>
            <Col xs={6} lg={3}>
              <Card style={{ width: "28rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}

      </div>
    </div>
  );
};

export default App;
