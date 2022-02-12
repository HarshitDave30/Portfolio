import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <div className="navigationbar">
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Harshit Dave</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About Me</Nav.Link>
                <Nav.Link href="#pricing">Skills</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link href="#pricing">Experience</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
