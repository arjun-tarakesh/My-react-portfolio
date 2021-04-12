import React from 'react'
import {useState} from 'react'
import "./Footer.css"
import {  Container, Row, Col } from 'reactstrap';

const Footer =() => {
    

  
    return (
      <div className="footer-div">
          <div className="sub-div">
          <Container className="footer-container">
              <Row className="footer-row">
              <Col className="footer-col" sm="6" md="6" lg="5" xl="5">
                <h1></h1><a href="https://drive.google.com/file/d/1t8vqklx6sxmA1B5VAlTZ5C0k3VE4DI60/view?usp=sharing" target="_blank">
                <button class="button-footer">View Resume</button></a>
                
                
             </Col>

        </Row>
        </Container>
        </div>
      </div>
    );
}

export default Footer;
