import './Navbar.css'
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

const NavBar = () => {
  return (
      <div className="Navbar">
         <Navbar light expand="md" > 
         <a to=""><img src="./asset/logo.jpg" className="Logo" width="60px" alt="logo of website"/></a>
            <Nav className="links" navbar >
              <NavItem className="Navitem">
                <a to=""><p className="send">Share</p></a>
              </NavItem>
              <span />
              <NavItem className="Navitem">
              <a to=""><p className="send">Receive</p></a>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  );
}

export default NavBar;