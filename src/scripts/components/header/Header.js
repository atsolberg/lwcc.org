import React from 'react';
import Navbar from 'react-bootstrap/es/Navbar';
import Nav from 'react-bootstrap/es/Nav';
import NavDropdown from 'react-bootstrap/es/NavDropdown';

import styles from './styles';

/**
 * Header component for the site.
 */
function Header() {
  return (
    <header css={styles}>
      <div className="navbar-topper">top bar</div>
      <Navbar collapseOnSelect expand="md" sticky="top">
        <Navbar.Brand href="#home">LWCC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
