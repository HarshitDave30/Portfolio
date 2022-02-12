import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <h4 className="section-title">Contact Me</h4>
            </Col>
            <Col lg="8">
              <div className="contact-box">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name Here..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Here..."
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter Your Message Here..."
                      rows={3}
                    />
                  </Form.Group>
                  <a className="btn btn-secondary" href="/">
                    Send
                  </a>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
