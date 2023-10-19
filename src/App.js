import React from "react";
import "./App.css";
import CountdownTimer from "./components/cuenta";
import options from "./components/data";
import imagen from "./img/mars2.png";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
const App = () => {
  console.log(Row);
  return (
    <div>
      {/*  <Navbar /> */}
      {/* <h3 className="planet-inner"></h3> */}
      <CountdownTimer />

      <div className="mars-title">
        <h3 className="planet"></h3>
        <h2>#reforestemoselplaneta</h2>
        <h1>24 DE OCTUBRE, 2023</h1>
        <p>Vive una experiencia de triple impacto</p>

        <br />
      </div>
      <div>
        <Button variant="success">RESERVAR</Button>
      </div>
      <div className="mars-background">
        <h1>ARBOLES CON TU NOMBRE</h1>
        <Container>
          <Row>
            {options.map((option, index) => (
              <Col xs={12} lg={3}>
                <div ClassName="tarjeta">
                  <Card
                    style={{
                      width: "auto",
                      padding: "10px",
                      margin: "10px",
                      fontfamily: "'Courier New', Courier, monospace",
                    }}
                  >
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                      <Card.Text>Nombre de la Planta:</Card.Text>
                      <Card.Title>{option.nombre}</Card.Title>

                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
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
