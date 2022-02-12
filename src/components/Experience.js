import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Experience() {
  return (
    <>
      <div className="experience">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <h4 className="section-title">Experience</h4>
            </Col>
            <Col lg="6">
              <div className="experience-block">
                <h5>Codewhiz Solutions – Gandhinagar, Gujrat, India</h5>
                <h6>Front End Developer – August 2020 – Current</h6>
                <p>
                  Responsible for working on a range of projects, designing
                  appealing websites and interacting on a daily basis with
                  graphic designers, back-end developers.
                </p>
                <ul>
                  <li>
                    Developing and maintaining the front end functionality of
                    websites.
                  </li>
                  <li>
                    Participating in discussions with clients to clarify what
                    they want.
                  </li>
                  <li>Designing prototypes for apps and websites.</li>
                  <li>Creating logos, banners for websites.</li>
                  <li>
                    Writing cross-browser compliant XHTML, CSS & JavaScript.
                  </li>
                  <li>
                    Developing websites that have a consistent feel and look
                    throughout all web properties.
                  </li>
                  <li>Providing technical support to end users.</li>
                  <li>Identifying and correcting software deficiencies.</li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience-block">
                <h5>Full Time Freelancer</h5>
                <h6>Front End Developer – August 2019 – July 2020</h6>
                <ul>
                  <li>
                    Developing and maintaining the front end functionality of
                    websites.
                  </li>
                  <li>
                    Participating in discussions with clients to clarify what
                    they want.
                  </li>
                  <li>Designing prototypes for apps and websites.</li>
                  <li>Creating logos, banners for websites.</li>
                  <li>
                    Writing cross-browser compliant XHTML, CSS & JavaScript.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience-block">
                <h5>Samaj Infotech – Gandhinagar, Gujrat, India</h5>
                <h6>Web Designer – June 2018 – July 2019</h6>
                <p>
                  Worked as part of a multi-disciplinary team, carrying out
                  ad-hoc tasks as requested by the IT Manager. Had a specific
                  brief to ensure the websites build for customer’s precisely
                  matched their requirements.Developing and maintaining the
                  front end functionality of websites.
                </p>
                <ul>
                  <li>
                    Wrote internal and external design specifications Designing
                    prototypes for apps and websites.
                  </li>
                  <li>
                    Performed maintenance and updates to existing client Web
                    sites.
                  </li>
                  <li>Involved in creating a comparison site from scratch.</li>
                  <li>Documented software and technical specifications.</li>
                  <li>Addressed cross-browser compatibility issues.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Experience;
