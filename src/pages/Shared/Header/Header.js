import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <div className="header-logo">
              <img className="me-3 " src={logo} alt="" />
              <h5>Tour & Tourism</h5>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Plans
              </Nav.Link>
            </Nav>
            <Nav>
              {user.email ? (
                <div className="d-flex flex-md-row">
                  <Nav.Link as={Link} to="/my_tour">
                    My tour plans
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage_plan">
                    Manage all plan
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add_plan">
                    Add a plan
                  </Nav.Link>
                  <Nav.Link onClick={logOut} as={Link} to="/">
                    Logout
                  </Nav.Link>
                </div>
              ) : (
                <Nav.Link onClick={logOut} as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
