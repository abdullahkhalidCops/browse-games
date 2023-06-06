import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Browse Games</Navbar.Brand>
        <Nav>
          <Nav.Link href="#browse">Browse</Nav.Link>
          <Nav.Link href="#favourite">Favourite</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default TopNavbar;
