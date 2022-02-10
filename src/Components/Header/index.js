import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import UserContext from "../../Context/UserContext";
import Logo from "../Logo";

const Header = (props) => {
  const ctx = useContext(UserContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {ctx.state.cardId ? (
              <Nav.Link href="logout">Гарах</Nav.Link>
            ) : (
              <Nav.Link href="/">Нэвтрэх</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
