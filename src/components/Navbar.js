import React, { useState } from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
import { Link, animateScroll as scroll } from "react-scroll"; //smooth scroll
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import "./Navbar.css"

// navbar from reactstrap with a lil style - found in navbar css

const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  dark  expand="md" style={{backgroundColor:"black"}} className="main-nav" fixed="top">
      <Link
              
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900} 
          >
        <NavbarBrand className="brand" href="hero">AT.</NavbarBrand></Link>
        <NavbarToggler onClick={toggle} className="navbar-toggler" ><BiMenuAltRight color="white" /></NavbarToggler>
        
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="navBar" navbar >
            {/* nav1 */}
            <NavItem className="nav-item">
              {/* smooth scroll link here is a smoothscroll element*/}
              <Link
              
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
              ><NavLink  style={{color:"white"}} className="nav-item-text" href="">About</NavLink></Link>
              {/* end of smooth scroll */}
            </NavItem>
            {/* nav2 */}
            <NavItem className="nav-item">
             
              <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Work</NavLink></Link>


             
            </NavItem>
            {/* nav2 */}
            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Projects</NavLink></Link>

              
            </NavItem>
            {/* nav3 */}

            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="certs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Achievements</NavLink></Link>

              
            </NavItem>
            {/* nav3 */}

            <NavItem className="nav-item">
            <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900} 
                > <NavLink className="nav-item-text" style={{color:"white"}}href="">Contact</NavLink></Link>

              
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;