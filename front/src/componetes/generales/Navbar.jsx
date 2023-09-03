import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Menu() {
  return (
<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
  <Container>
    <Navbar.Brand  className="fs-3 text-primary fw-bold">TASKMANAGER</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav ">
      <Nav className="ms-auto text-center fw-bold">
        <Link to="/inicio" className="nav-link fs-md-4 fs-md-3 text-primary">Inicio</Link>
        <Link to="/about" className="nav-link fs-md-4 fs-sm-3 text-primary">Acerca de</Link>
      </Nav>
      <Nav className="d-flex align-items-center">
        <Button variant="primary" as={Link} to="/login" className="fs-md-4 fs-sm-3 fw-bolder">Login</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      );
    }
    

export default Menu;
