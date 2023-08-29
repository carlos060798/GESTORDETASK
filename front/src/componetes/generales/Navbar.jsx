import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary text-light">
      <Container>
        <Navbar.Brand href="#home">Tasks Manager </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to="/inicio" className="nav-link">Inicio</Link>
            <Link to="/about" className="nav-link">acerca de</Link>
           
            
         
          </Nav>
          <Nav>
          <Link to="/login" className="nav-link">Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Menu;
