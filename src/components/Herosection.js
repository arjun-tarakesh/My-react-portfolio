import React from 'react'
import "./herosection.css"
import { Link, animateScroll as scroll } from "react-scroll"; //smooth scroll

import {AiFillLinkedin,AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';
import Typical from "react-typical";
import {Container, Row, Col,Jumbotron,Button} from "react-bootstrap"
import dp1 from "../dp.png"
import img from '../undraw_coding_6mjf.svg'


const Example = (props) => {
    return (
      <div style={{backgroundColor:"#192A56"}} id="hero">
            <Jumbotron className="main">
            <Container className="heroSec" id="hsec" >
            <Row className="rows"  >
               
                
                <Col xs="auto" sm="12" md="12" lg="6" xl="6" className="col2">
                <h1  >Hello World!</h1>
                                <h2 >This is Arjun,</h2>
                                
                                <h3 className="typical"> 
                                    <Typical
                                    steps={['A ', 1000, 'A student 🎓', 2000,'A Developer 💻', 2000,
                                    'A Computer security enthusiast 🔐', 2000,'A Cloud enthusiast ☁️', 2000,'A Designer 🎨', 2000,'A Gamer 🎮', 2000,]}
                                    loop={Infinity}
                                    wrapper="p"
                                  /> 
                                
                                </h3>
                                <div className="morediv">
                                <Link
              
                                  activeClass="active"
                                  to="about"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={900} 
                              > <button className="more">More</button>
                              
                               
                            </Link> 
                            </div>
                            
                                
                    
                </Col>
                <Col xs="auto" sm="12" md="12" lg="6" xl="6" className="col1">
                <div className="himgdiv">
                    < img src={dp1} className="image" />
                </div>
                </Col>
                </Row>
               
                
                     
        </Container>
            </Jumbotron>
            
            
      </div>
    );
  };
  
  export default Example;