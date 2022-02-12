import React from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";

function MySkills() {
  return (
    <>
      <div className="skills">
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="section-title">Skills</h4>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>HTML</h5>
                <ProgressBar now={95} />
              </div>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>CSS</h5>
                <ProgressBar now={98} />
              </div>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>Bootstrap</h5>
                <ProgressBar now={94} />
              </div>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>JavaScript</h5>
                <ProgressBar now={80} />
              </div>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>React JS</h5>
                <ProgressBar now={75} />
              </div>
            </Col>
            <Col lg="4">
              <div className="skills-block">
                <h5>Web Design</h5>
                <ProgressBar now={90} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MySkills;
