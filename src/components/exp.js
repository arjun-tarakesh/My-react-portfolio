import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import xp from "../cards/exp1.jpg"

import "./exp.css"

const experience = (props) => {
  return (
    <div className="contact-div" id="contact">
      <h1>Experience</h1>
     <Container>
       <Row style={{color:"white"}} className="contact-row" >
        <Col className="contact-col" sm="6" md="6" lg="4" xl="4">
          
        <img classname="expimg" width="100%" src={xp}  />
        <h1>Junior developer (inte</h1>
        

          </Col>
          <Col className="contact-col" sm="6" md="6" lg="4" xl="4">
          <h1>Test</h1>
          </Col>
          <Col className="contact-col" sm="6" md="6" lg="4" xl="4">
          <h1>Test</h1>

          </Col>
         

       </Row>
     </Container>
    </div>
  );
};

export default experience;