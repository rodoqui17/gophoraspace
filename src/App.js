import React from "react";
import "./App.css";
import CountdownTimer from "./components/cuenta";
import options from "./components/data";
<<<<<<< HEAD
import imagen from "./img/mars2.png";
import { useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";


 


=======
import Buttoncomponent from "./components/button";
import Buttoncomponentlive from "./components/buttonlive";
import imagen from "./img/starship.png";
import { Row, Col, Container, Card } from "react-bootstrap";
>>>>>>> 86a4d50356bf42efb0071f0ad1a750c4b6448072
const App = () => {
  const urlExterna = 'http://www.r3colecta.com';
  return (
    <div>
      {/*  <Navbar /> */}
      {/* <h3 className="planet-inner"></h3> */}
      <CountdownTimer />

<<<<<<< HEAD
      <div className="mars-title">
        <h3 className="planet"></h3>
        <h2>#reforestemoselplaneta</h2>
        <h1>24 DE OCTUBRE, 2023</h1>
        <p>Vive una experiencia de triple impacto</p>
=======
        <h3 className="flotar"></h3>
        <br />

        <Buttoncomponent url="https://forms.gle/oRzn4hdUv9dHLfsL9" />
>>>>>>> 86a4d50356bf42efb0071f0ad1a750c4b6448072
      </div>
      
        <div className="d-grid gap-2 mars-button">
          <Button variant="outline-success" size="lg"  href={urlExterna} target="_blank" rel="noopener noreferrer">
            TICKET
          </Button>
        </div>
      
      <div className="mars-background">
        <h1>ARBOLES RESERVADOS</h1>
        <Container>
          <Row>
            {options.map((option, index) => (
              <Col xs={12} lg={4}>
                <div ClassName="tarjeta">
                  <Card
                    style={{
                      width: "auto",
                      padding: "10px",
                      margin: "10px",
                      fontfamily: "'Courier New', Courier, monospace",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={option.img}
                      style={{
                        width: "auto",
                        height: "350px",
                        padding: "5px",
                        fontfamily: "'Courier New', Courier, monospace",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>Lugar: Palca</Card.Title>
                      <Card.Text>Nombre: {option.nombre}</Card.Text>

                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
          <div className="mars-footer">
          
          <Buttoncomponentlive url="https://discord.gg/WvPMNTqa" />
        </div>
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
