import React from 'react';
import './work.css'
import { Container, Row, Col } from 'reactstrap';
import { FiArrowRightCircle } from "react-icons/fi";
import { NavLink } from 'reactstrap';




const Work = (props) => {
    return(
        <div id="work">
          <h1 className="workhead">Work</h1>
            <Container >
    <Row>
    <Col sm="12" md="12" xl="6" >
    <div className="workexp">
      <h1>React Developer Intern</h1>
      <h6>@ Immigreat Global</h6>
      <ul>
          <li>developed modern websites and webapp</li>
          <li>Communicated and collaborated with a multi-disciplinary team</li>
          <li>Worked with JavaScript, ReactJS and Git</li>
      </ul>
      <NavLink  href="https://drive.google.com/file/d/1gXFa0I3KoCoGLhW67yhJ4DyisjkxmYH3/view?usp=sharing" target="_blank"><FiArrowRightCircle color="#64FFDA" size="25" /></NavLink>
    </div>
    </Col>
    <Col sm="12" md="12" xl="6" >
    <div className="workexp">
      <h1>Machine Learning Intern</h1>
      <h6>@ Verzeo</h6>
      <ul>
          <li>Worked with experienced mentors</li>
          
          <li>Ganied a deeper understanding of Python and Machine learning conepts</li>
          <li>collaborated with a huge creative team</li>
          <li>Worked on a live project partnered with Zebo.ai</li>
      </ul>
      <NavLink  href="https://drive.google.com/file/d/1fobYpHxwdrPUSf6CF9pP_Zwu_2b61uoN/view?usp=sharing" target="_blank"><FiArrowRightCircle color="#64FFDA" size="25" /></NavLink>
    </div>
    </Col>
    
     
  </Row>
    </Container>
        </div>
 )
}
export default Work;