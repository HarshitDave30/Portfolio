import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg="4" md="4">
              <h6>Name</h6>
              <h4>Harshit Dave</h4>
            </Col>
            <Col lg="4" md="4">
              <h6>Email</h6>
              <h4>hdave04@gmail.com</h4>
            </Col>
            <Col lg="4" md="4">
              <h6>Phone</h6>
              <h4>+44 7423610436</h4>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-copyright">
          <hr />
          <Container>
              <Row>
                  <Col lg="12">
                      <p>Copyright ©2022 Designed & Developed by Harshit Dave</p>
                  </Col>
              </Row>
          </Container>
      </div>
    </>
  );
}

export default Footer;
