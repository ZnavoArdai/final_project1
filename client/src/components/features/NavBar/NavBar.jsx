import "../NavBar/NavStyle.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbarapp() {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 90) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  console.log(bgColor);

  window.addEventListener("scroll", changeBgColor);

  const links = ["Posts", "signIn/signUp"];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      bg="red"
      className={bgColor ? "navbar fixed-top navbar-bg" : "navbar fixed-top mt-2"}
    >
      <Container className="w-50">
        <Navbar.Brand className="acc w-25 ">
          <Image src="image/logo.jpeg" width={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center "></Nav>

          <Nav>
            <Nav.Link></Nav.Link>

            <Nav.Link as={Link} to={"/"} className="active">
              HOME
            </Nav.Link>
            {links.map((res) => {
              return (
                <Nav.Link as={Link} to={res}>
                  {res}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarapp;
