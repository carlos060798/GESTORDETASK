
  import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NabarAdmin() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" onClick={handleShow} />
        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NabarAdmin;