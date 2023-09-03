import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function NabarAdmin() {
  const{handleCerrarSesion}=useLogin();
  return(<>
 <Navbar expand="lg" className="bg-primary mb-3">
  <Container>
    <Navbar.Brand href="#" className="text-white fs-3">TASKMANAGER</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white fs-3">TASKMANAGER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="taskmanager" className="text-white fs-5">Gestor de tareas</Nav.Link>
          <Nav.Link as={Link} to="perfil" className="text-white fs-5">Perfil</Nav.Link>
          <Nav.Link as={Button} onClick={handleCerrarSesion} className="text-white fs-5">Cerrar Sesión</Nav.Link>

          
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  </>
  )
}

export default NabarAdmin;