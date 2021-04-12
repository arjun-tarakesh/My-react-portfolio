import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

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
    <Row>
    <Col sm="6" md="4" xl="3" className="cards">
      <Card body className="cardbody">
      <img width="100%" src={tfjs} alt="Card image cap" />
        <CardTitle style={{marginTop:"12px"}}tag="h5">Hand Pose Recognizer</CardTitle>
        <CardText>A WebApp that detects hand pose and movements. Built with ReactJS and TensorFlowJS</CardText>
        <Button className="Button" href="https://handposerecognizer.netlify.app/" target="_blank" color="success">Live Demo</Button>
      </Card>
    </Col>
    <Col sm="6" md="4"  xl="3" className="cards">
      <Card body className="cardbody">
      <img width="100%" src={inr} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>INR Crypto Tracker</CardTitle>
        <CardText>A live cryptocurrency tracker built with CoinGecko API</CardText>
        
        <Button className="Button" href="https://inrcryptotracker.netlify.app/" target="_blank" color="success">Live Demo</Button>
      </Card>
    </Col>
    <Col sm="6" md="4" xl="3" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src={two} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>To Do App</CardTitle>
        <CardText>A simple todo app</CardText>
        <Button className="Button" href="https://todousingreact.netlify.app/" target="_blank" color="success">Live demo</Button>
      </Card>
    </Col>
   <Col sm="6" md="4" xl="3" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src={one} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>Tic Tac Toe</CardTitle>
        <CardText>A tic tac toe game built with winning logic algorithm and ReactJS</CardText>
        <Button className="Button" href="https://github.com/arjun-tarakesh/tkinter_clock" target="_blank" color="success">Live demo</Button>
      </Card>
    </Col>   
     <Col sm="6" md="4" xl="3" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src={def} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>Progress</CardTitle>
        <CardText>Building new skills and documenting the progress</CardText>
        <Button className="Button" href="https://github.com/arjun-tarakesh" target="_blank" color="success">View progress</Button>
      </Card>
    </Col>
  </Row>
    </Container>
    </div>
  );
}

export default Cards;