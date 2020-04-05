import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Menubar.css';

const menubar = () => (
    <div className="Menubar white">
      <Navbar className="navbar-dark">
      <Navbar.Brand href="#home">PartyWeb</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Casas de Festas</Nav.Link>
        <Nav.Link href="#pricing">Serviços</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Nome, Cidade ou Bairro" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  </div>
);

export default menubar;