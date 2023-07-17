import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';



export default function Navigation({currentPage, handlePageChange}) {
    return (
        <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Danny Lindquist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handlePageChange('about')} href="#home" id="about">About</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('projects')}href="#link" id="projects">Projects</Nav.Link>
              <Nav.Link onClick={() => handlePageChange('contact')}href="#contact" id="contact">Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}