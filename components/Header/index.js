
import React from 'react';
import { Button, Form, Link, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Antônio S</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="https://github.com/tonybsilvadev">Anywhere Solutions</Nav.Link>
        </Nav>
        <Form inline>
        <NavDropdown title="Options" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">About me</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/Tonybsilva-dev">Github</NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/tony-silva/">LinkendIn</NavDropdown.Item>
            <NavDropdown.Item href="https://www.instagram.com/tonybsilvadev/">Instagram</NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-success">
            Talk to me
            </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;