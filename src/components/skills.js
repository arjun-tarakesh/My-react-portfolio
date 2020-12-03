import React from 'react';
import { Container, Progress } from 'reactstrap';
import "./skills.css"

const Skills = (props) => {
  return (
    <div className="skills" id="skills">
        <h1>Skills</h1>
        
    <Container className="skill-container">
      <div className="text-center">HTML & CSS</div>
      <Progress className="padding"color="success" value="100"/>
      <div className="text-center">Javascript</div>
      <Progress className="padding"color="success" value="80" />
      <div className="text-center">React JS</div>
      <Progress className="padding"color="success" value="90" />
      <div className="text-center">C++</div>
      <Progress className="padding"color="success" value={75}  />
      <div className="text-center">Python</div>
      <Progress className="padding"color="success" value="75" />
      <div className="text-center">AWS</div>
      <Progress className="padding"color="success" value="90" />
      <div className="text-center">Cloud Computing</div>
      <Progress className="padding"color="success" value="90" />
      <div className="text-center">UI/UX Design</div>
      <Progress className="padding"color="success" value="100" />
      

      
      
      </Container>
    </div>
  );
};

export default Skills;