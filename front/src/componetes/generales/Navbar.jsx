

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Menu() {
  return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="mb-3">
          <Container>
            <Navbar.Brand href="#" className="fs-3">TASKMANAGER</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/inicio" className="nav-link fs-4">Inicio</Link>
                <Link to="/about" className="nav-link fs-4">Acerca de</Link>
              </Nav>
              <Nav>
                <Button variant="success" as={Link} to="/login" className="fs-4">Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default Menu;
