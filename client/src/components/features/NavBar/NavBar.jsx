import "../NavBar/NavStyle.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";

function NavBarapp() {
const defaultLinks = ["HOME","POSTS", "SignIn/SignUp"];
const logedInLinks = ["HOME","POSTS", "NEW POST","PROFILE"];

const isLoggedIn=useSelector(state=>state.isLoggedIn)

  return (
    <Navbar collapseOnSelect expand="lg"  className=" text-dark navbarcontain">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
      
          </Nav>
          <Nav>
            
            {isLoggedIn?logedInLinks.map((link)=>{
              return (
                <Nav.Link as={Link}  to={`/${link === "HOME" ? "" : link}`}>
              {link}
            </Nav.Link> 
              )
            })
            :(defaultLinks.map((link)=>{
              return (
                <Nav.Link as={Link} to={`/${link=="HOME" ? "":link}`}>
              {link}
            </Nav.Link> 
              )
            }))}
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