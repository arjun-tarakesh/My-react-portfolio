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
              <Col className="footer-col" sm="6" md="4" lg="4" xl="4">
                <h1></h1><a href="https://drive.google.com/file/d/1ixtC2xDHac4qyYb4NTSVfwhXO92HAMzD/view?usp=sharing" target="_blank">
                <button class="button-footer">View Resume</button></a>
              </Col>
  <Col className="footer-col" sm="6" md="6" lg="4" xl="4">
                <h1></h1><a href="https://drive.google.com/file/d/1JyPq0CsgeExFna1jS5J_zO8acdTTbmeJ/view?usp=sharing" target="_blank">
                <button class="button-footer">More Achievements</button></a>
              </Col>
  <Col className="footer-col" sm="6" md="4" lg="4" xl="4">
                <h1></h1><a href="https://www.instagram.com/arjun_tarakesh/" target="_blank">
                <button class="button-footer">Design works</button></a>
              </Col>

        </Row>
        </Container>
        </div>
      </div>
    );
}

export default Footer;
