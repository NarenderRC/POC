import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import AlfaisalImage from "../../images/alfisal.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <div className="alfaisalLogo">
          <img src={AlfaisalImage} alt="Alfaisal" />
        </div>
        <div>
          <Nav>
            {/* <Bars /> */}

            <NavMenu>
              <NavLink to="/home" activeStyle>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle>
                AboutUs
              </NavLink>
              <NavLink to="/media" activeStyle>
                Media
              </NavLink>
            </NavMenu>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
