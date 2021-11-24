import "./Navbar.css";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <div className="Navbar">
      <Navbar light expand="md">
        <Link to="/">
          <img
            src="./asset/logo.png"
            className="Logo"
            width="60px"
            alt="logo of website"
          />
        </Link>
        <Nav navbar>
          <NavItem className="Navitem">
            <Link to="/Share" style={{ textDecoration: "none" }}>
              <p className="send">Share</p>
            </Link>
          </NavItem>
          <span />
          <NavItem className="Navitem">
            <Link to="/Receive" style={{ textDecoration: "none" }}>
              <p className="send">Receive</p>
            </Link>
          </NavItem>
          <NavItem className="Navitem">
            <Link
              to="/signin"
              style={{ textDecoration: "none" }}
              onClick={props.signOut}
            >
              <p className="send">Signout</p>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
