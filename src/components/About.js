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
                <Col  className="col1-about">
                    
                   
                <h1>A short summary... </h1>
               <p>
               Hello! My name is Arjun T. I am a computer science engineering student. I am currently in my fourth 
               year of study in my bachelor's degree. Advancing and updgrading myself with the latest technologies is what
               I love the most. My interest for computer science started when I was a kid. I've always been excited about the tech world. I've had the privelage
               of learning web development and working at a startup as an Internet. My main focus these days is on learning more about
               Cybersecurity and Cloud Technologies. 
               </p>
               <h6>Skills</h6>
               <ul>
                   <li>C++</li>
                   <li>JavaScript and React JS</li>
                   <li>Python</li>
                   
                   <li>AWS</li>
                   <li>Computer Networks</li>
                   <li>HTML & CSS</li>
                   <li>UI/UX design</li>
               </ul>
                
                              
                               
                    
                </Col>
                </Row>
               
                
                     
        </Container>
            </Jumbotron>
                
            
           
        </div>
    )
}

export default about;