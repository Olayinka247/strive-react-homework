import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">History Book</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#deets">Home</Nav.Link>
        <Nav.Link href="#deets">About</Nav.Link>
        <Nav.Link href="#deets">Browse</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
