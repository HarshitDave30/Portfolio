import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <div className="about">
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="section-title">About Me</h4>
              <p>
                An ambitious problem solver with a passion for online
                businesses, and who would like to join a team of like-minded
                developers. Harshit has much experience of creating logical and
                innovative solutions to complex problems. He is thorough and
                precise in everything he does, and has a keen interest in
                technology, Web applications and user experience. As someone who
                takes responsibility for his own personal development, he is
                continually evaluating and upgrading his skills so that he stays
                at the cutting edge of web development. He is a natural problem
                solver, who has proven himself by successfully completing
                projects for IT consultancies, software houses, web design
                agencies, and IT departments.
              </p>
              <a
                className="btn btn-secondary"
                href="https://github.com/HarshitDave30"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github me-1"></i> GitHub
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutMe;
