import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import "./projects.css"
import one from "../cards/one.jpg"
import two from "../cards/two.jpg"
import def from "../cards/default.png"

const Cards = (props) => {
  return (
      <div className="card-div">
      <Container >
    <Row>
    <Col sm="6" md="4" xl="3" className="cards">
      <Card body className="cardbody">
      <img width="100%" src={one} alt="Card image cap" />
        <CardTitle style={{marginTop:"12px"}}tag="h5">Tic Tac Toe</CardTitle>
        <CardText>A simple Tic tac toe game using winning logic algorithm</CardText>
        <Button href="https://tictactoer.netlify.app/" target="_blank" color="success">View project</Button>
      </Card>
    </Col>
    <Col sm="6" md="4"  xl="3" className="cards">
      <Card body className="cardbody">
      <img width="100%" src={two} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>React website Template</CardTitle>
        <CardText>A website template/theme similar to this website to get started with</CardText>
        <Button href="https://react-website-layout.netlify.app/" target="_blank" color="success">View project</Button>
      </Card>
    </Col>
    <Col sm="6" md="4" xl="3" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src={def} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>Tkinter clock</CardTitle>
        <CardText>A digital clock built using python tkinter</CardText>
        <Button href="https://github.com/arjun-tarakesh/tkinter_clock" target="_blank" color="success">View project</Button>
      </Card>
    </Col>   
     <Col sm="6" md="4" xl="3" className="cards">
      <Card body  className="cardbody">
      <img width="100%" src={def} alt="Card image cap" />
        <CardTitle tag="h5" style={{marginTop:"12px"}}>Progress</CardTitle>
        <CardText>Building new skills and documenting the progress</CardText>
        <Button href="https://github.com/arjun-tarakesh" target="_blank" color="success">View progress</Button>
      </Card>
    </Col>
  </Row>
    </Container>
    </div>
  );
}

export default Cards;