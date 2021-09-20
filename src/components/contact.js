import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import {AiFillLinkedin,AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import "./contact.css"
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="contact-div" id="contact">
      <h1>Get in touch ☕</h1>
      
     <Container>
       <Row style={{color:"white"}} className="contact-row" >
        <Col className="contact-col" sm="6" md="6" lg="3" xl="3">
          <NavLink href="https://www.linkedin.com/in/arjun-tarakesh/" target="_blank" style={{color:"#64FFDA"}}>
          <AiFillLinkedin size="70"value={{color:"white",}}style={{cursor:"pointer"}}/></NavLink>
          

          </Col>
          <Col className="contact-col" sm="6" md="6" lg="3" xl="3">
          <NavLink href="https://github.com/arjun-tarakesh" target="_blank" style={{color:"#64FFDA"}}>
          <AiFillGithub size="70"value={{color:"white",}}style={{cursor:"pointer"}}/></NavLink>
          

          </Col>
          <Col className="contact-col" sm="6" md="6" lg="3" xl="3">
          <NavLink href="mailto: arjuntarakesh@gmail.com" target="_blank" style={{color:"#64FFDA"}}>
          <SiGmail size="70"value={{color:"white",}}style={{cursor:"pointer"}}/></NavLink>
          

          </Col>
          <Col className="contact-col" sm="6" md="6" lg="3" xl="3">
          <NavLink href="https://www.instagram.com/not_arjun_/" target="_blank" style={{color:"#64FFDA"}}>
          <AiOutlineInstagram size="70"value={{color:"white",}}style={{cursor:"pointer"}}/></NavLink>
          

          </Col>

       </Row>
     </Container>
    </div>
  );
};

export default Example;