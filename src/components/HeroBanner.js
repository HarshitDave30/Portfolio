import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ManImage from "../assets/images/man.png";
import MyCV from "../assets/images/Harshit_Dave_CV.pdf";

function HeroBanner() {
  return (
    <>
      <div className="hero-banner">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" sm="6">
              <h1>
                Hi! I’m <span> Harshit Dave </span> Front End Developer.
              </h1>
              <a
                href={MyCV}
                download="Harshit_Dave_CV.pdf"
                className="btn btn-primary"
              >
                Download My CV
              </a>
            </Col>
            <Col lg="6" sm="6">
              <img src={ManImage} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HeroBanner;
