import React from "react";
import "./App.css";
import CountdownTimer from "./components/cuenta";
import options from "./components/data";
import optionslist from "./components/datalist";
import Buttoncomponent from "./components/button";
import Buttoncomponentlive from "./components/buttonlive";
import imagen from "./img/astronauta.png";
import { Row, Col, Container, Card } from "react-bootstrap";
const App = () => {
  console.log(Row);
  return (
    <div>
      {/*  <Navbar /> */}
      {/* <h3 className="planet-inner"></h3> */}
      <CountdownTimer />
      <div className="mars-title">
        <h2>#gophoralanzatunombrealespacio</h2>
        <h1>11 DE NOVIEMBRE, 2023</h1>

        {/* <h3 className="flotar"></h3> */}
        <br />

        <Row className="text-center">
          <Col lg={6} sm={12} className="mb-12">
            <Buttoncomponent url="https://forms.gle/oRzn4hdUv9dHLfsL9" />
          </Col>
          <Col lg={6} sm={12} className="mb-3">
            <Buttoncomponentlive url="https://discord.gg/zjdaEPQGa" />
          </Col>
        </Row>
      </div>

      <div className="mars-background">
        <h1>TRIPULANTES MARTE</h1>
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
                        borderRadius:"50%",
                        fontfamily: "'Courier New', Courier, monospace",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{option.nombre}</Card.Title>
                      <Card.Text>Tripulante # {option.id}</Card.Text>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <h1>TRIPULANTES LUNA</h1>
        <Container>
          <Row>
            {optionslist.map((optionslist, index) => (
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
                      src={imagen}
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: "5px",
                        borderRadius:"50%",
                        fontfamily: "'Courier New', Courier, monospace",
                      }}
                    />
                    <Card.Body>
                      {/* <Card.Img variant="top" src={imagen} /> */}
                      <Card.Title>{optionslist.Nombre}</Card.Title>
                      <Card.Text>Tripulante # {optionslist.ID}</Card.Text>
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
