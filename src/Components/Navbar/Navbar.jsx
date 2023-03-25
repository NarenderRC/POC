
import { useEffect,useState } from 'react';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import AlfaisalImage from "../../images/alfisal.png";

import "./Navbar.css";
import { getNavbarData } from "../../contentful";

const Navbar = () => {

  const [navbar, setNavbar] = useState([]);
  
  useEffect( () => {
    
    getNavbarData().then((nav) => {
      setNavbar(nav);
    });
    
  },[])

  console.log("navbarrr",navbar)
  return (
    <>
      <div className="navBar">
        <div className="alfaisalLogo">
          {/* <img src={AlfaisalImage} alt="Alfaisal" /> */}
          <img src={navbar?.logo?.fields.file.url} alt="Alfaisal" />
        </div>
        <div>
          <Nav>
            <NavMenu>
              {navbar?.links?.map((link,i)=>{
              return  <NavLink to={link.fields.url} activeStyle>
                {link.fields.text}
              </NavLink>
              })}
              {/* <NavLink to="/home" activeStyle>
                Home
              </NavLink>
              <NavLink to="/about" activeStyle>
                AboutUs
              </NavLink>
              <NavLink to="/media" activeStyle>
                Media
              </NavLink> */}
            </NavMenu>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
