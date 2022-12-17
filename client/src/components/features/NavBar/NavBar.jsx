import "../NavBar/NavStyle.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarapp() {
const links = ["POSTS", "SignIn/SignUp"];

  return (
    <Navbar collapseOnSelect expand="lg"  className="text-dark navbarcontain">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
      
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            

            {links.map((link)=>{
              return (
                <Nav.Link as={Link} to={link}>
              {link}
            </Nav.Link> 
              )
            })}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarapp;