import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    NavLink
  } from 'reactstrap';
  import {AiFillGithub} from "react-icons/ai"
  import {CgWebsite} from "react-icons/cg"

import "./projects.css"
import one from "../cards/one.jpg"
import tfjs from "../cards/three.jpg"
import inr from "../cards/four.jpg"
import two from "../cards/two.jpg"
import def from "../cards/default.png"

const Cards = (props) => {
  return (
      <div className="card-div">
        
      <Container >
      <h1 className="projtitle">Projects</h1>
    <Row className="cardrow">
    <Col sm="12" md="12" lg="4" xl="4" className="projcol">
                   
                    <img className="project-img" src={tfjs} alt="Mission"/>
                  
                    </Col>
                    <Col sm="12" md="12" lg="8" xl="8" className="projtxt">
                    <h1>Handpose Recognizer</h1>
                    <p>A web App that uses tensorflowJs and reactJS to detect handpose</p>
                    <div className="projarea">
                    <NavLink style={{color:"white"}} href="https://github.com/arjun-tarakesh/handposerecognizer" target="_blank"><AiFillGithub className="projarea1" size="25" color="#64FFDA"/> Github</NavLink>
                    </div>
                    <div className="projarea">
                    <NavLink style={{color:"white"}} href="https://handposerecognizer.netlify.app/" target="_blank"><CgWebsite size="25" color="#64FFDA"/> Website</NavLink>
                    
                    </div>
                    </Col>
  </Row>
  <Row className="cardrow">
    <Col sm="12" md="12" lg="4" xl="4" className="projcol">
                   
                    <img className="project-img" src={inr} alt="Mission"/>
                  
                    </Col>
                    <Col sm="12" md="12" lg="8" xl="8" className="projtxt">
                    <h1>INR Crypto-tracker</h1>
                    <p>A Live cryptocurrency value tracker</p>
                    <div className="projarea">
                    <NavLink style={{color:"white"}} href="https://github.com/arjun-tarakesh/live-crypto-tracker" target="_blank"><AiFillGithub className="projarea1" size="25" color="#64FFDA"/> Github</NavLink>
                    </div>
                    <div className="projarea">
                    <NavLink style={{color:"white"}} href="https://inrcryptotracker.netlify.app/" target="_blank"><CgWebsite size="25" color="#64FFDA"/> Website</NavLink>
                    
                    </div>
                    </Col>
  </Row>
   <Row className="cardrow">
    <Col sm="12" md="12" lg="4" xl="4" className="projcol">
                   
                    <img className="project-img" src={one} alt="Mission"/>
                  
                    </Col>
                    <Col sm="12" md="12" lg="8" xl="8" className="projtxt">
                    <h1>Rock Paper Scissor</h1>
                    <p>A simple rock paper scissor game against computer</p>
                    <div className="projarea">
                    <NavLink style={{color:"white"}} href="https://github.com/arjun-tarakesh/RockPaperScissors" target="_blank"><AiFillGithub className="projarea1" size="25" color="#64FFDA"/> Github</NavLink>
                    </div>
                    
                    </Col> 
  </Row>
  <Row className="cardrow">
  <Col sm="12" md="12" lg="4" xl="4" className="projcol">
                   
                   <img className="project-img" src={two} alt="Mission"/>
                 
                   </Col>
                   <Col sm="12" md="12" lg="8" xl="8" className="projtxt">
                   <h1>Progress</h1>
                   <p>Check out more of what I do on my github profile :)</p>
                   <div className="projarea">
                   <NavLink style={{color:"white"}} href="https://github.com/arjun-tarakesh" target="_blank"><AiFillGithub className="projarea1" size="25" color="#64FFDA"/> Github</NavLink>
                   </div>
                   
                   </Col>
  </Row>
  
  
    </Container>
   
    </div>
    
  );
}

export default Cards;