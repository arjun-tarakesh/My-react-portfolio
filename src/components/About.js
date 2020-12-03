import React from 'react'
import { Container, Col, Row , Jumbotron} from 'reactstrap'
import Particles1 from './particles'
import "./about.css"
import dp1 from "../dp.png"
import Tilt from "react-tilt"

const about =()=> {
    return (
        <div >
            <Jumbotron className="main-about" >
            <Container className="About-sec" id="hsec" >
            <Row className="rows-about" id="about" >
                <Col xs="auto" className="col1-about">
                    <Tilt>
                    < img src="https://i.pinimg.com/originals/a5/f0/5f/a5f05f2b8326abd955c787d446e30366.gif" className="image-about" />
                    </Tilt>
                </Col>
                
                <Col xs="auto" className="col2-about">
                <h1>A short summary </h1>
                <ul className="about-list">
                    <li>Computer science engineering student</li>
                    <li>Front-end Developer</li>
                    <li>Cloud enthusiast</li>
                    <li>Designer</li>
                    <li>Active learner</li>
                    <li>Technology enthusiast</li>
                </ul>
                              
                               
                    
                </Col>
                </Row>
               
                
                     
        </Container>
            </Jumbotron>
                
            
           
        </div>
    )
}

export default about;
