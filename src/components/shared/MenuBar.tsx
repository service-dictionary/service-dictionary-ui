import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

const MenuBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect={true} expand="sm" bg="primary" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand className="header">RabbitHole</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mr-auto">
            <LinkContainer to="/sources">
              <Nav.Link>
                <Button>DataSources</Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/datasets">
              <Nav.Link>
                <Button>DataSets</Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
