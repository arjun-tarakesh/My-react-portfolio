import React from 'react'
import "./herosection.css"

import Tilt from "react-tilt"

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
                <Col xs="auto" className="col1">
                <Tilt >
                    < img src={dp1} className="image" />
                </Tilt> 
                </Col>
                
                <Col xs="auto" className="col2">
                <h1 className="display-3" style={{fontWeight:"600"}} >Hello World!</h1>
                                <h2 >This is Arjun ,</h2>
                                <Tilt>
                                <h3 className="typical"> 
                                    <Typical
                                    steps={['A ', 1000, 'A student.', 2000,'A Developer.', 2000,
                                    'A Cloud enthusiast.', 2000,'A Technology enthusiast.', 2000,'A Designer.', 2000,'A Gamer ;)', 2000,]}
                                    loop={Infinity}
                                    wrapper="p"
                                  /> 
                                
                                </h3>
                                </Tilt>
                    
                </Col>
                </Row>
               
                
                     
        </Container>
            </Jumbotron>
            
            
      </div>
    );
  };
  
  export default Example;