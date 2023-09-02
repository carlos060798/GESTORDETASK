import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NabarAdmin() {
  return(<>
  <Navbar expand="lg" className="bg-body-tertiary mb-3 ">
  <Container >
    <Navbar.Brand href="#">TASKMANAGER</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">TASKMANAGER</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link as={Link} to="taskmanager">Gestor de tareas</Nav.Link> {/* Usar as={Link} */}
              <NavDropdown
                title="Cuenta"
                id="offcanvasNavbarDropdown"
              >
                <NavDropdown.Item as={Link} to="perfil">Perfil</NavDropdown.Item> {/* Usar as={Link} */}
                <NavDropdown.Divider />
                <NavDropdown.Item >Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
        </Nav>
     
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  </>
  )
}

export default NabarAdmin;