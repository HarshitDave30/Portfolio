import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import KeepApp from "../assets/images/keep-app.png";
import BootstrapTemplate from "../assets/images/bootstrap-template.png";
import WeatherApp from "../assets/images/Weather-App.png";

function Projects() {
  return (
    <>
      <div className="projects">
        <Container>
          <Row>
            <Col lg="12">
              <h4 className="section-title">Projects</h4>
            </Col>
            <Col lg="4">
              <a
                href="https://keep-clone-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="projects-block">
                  <img src={KeepApp} alt="" />
                  <h5>Keep Clone</h5>
                  <p>Created a keep clone for todo purpose.</p>
                </div>
              </a>
            </Col>
            <Col lg="4">
              <a
                href="https://bootstrap-template.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="projects-block">
                  <img src={BootstrapTemplate} alt="" />
                  <h5>Bootstrap Landing Page</h5>
                  <p>
                    Created a bootstrap landing page with responsive using HTML,
                    CSS, Javascript And Bootstrap.
                  </p>
                </div>
              </a>
            </Col>
            <Col lg="4">
              <a
                href="https://react-js-weather-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="projects-block">
                  <img src={WeatherApp} alt="" />
                  <h5>Weather App</h5>
                  <p>
                    Created a weather app using react js. The app was designed to access weather data for any location, The connection is made via an API Key.
                  </p>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
