import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import TIS146 from './assets/TIS146.png';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="navClass" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={TIS146} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinksContainer me-auto">
            <Nav.Link href="#home">
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">
                <Link to="/aboutus">About us</Link>
            </Nav.Link>
            <Nav.Link href="#link">
                <Link to="/partners">Partners</Link>
            </Nav.Link>
            <Nav.Link href="#link">
                <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>

          <Nav.Link href="#link">
                <Link to="/signup"><button className="signUpBttn">Sign Up</button></Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;