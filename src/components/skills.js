import React from 'react';
import { Container, Progress } from 'reactstrap';
import "./skills.css"

const Skills = (props) => {
  return (
    <div className="skills" id="skills">
        <h1>Skills</h1>
        
    <Container className="skill-container">
      
      <button class="button-skills">HTML</button>
      <button class="button-skills">CSS</button>
      <button class="button-skills">C</button>
      <button class="button-skills">C++</button>
      <button class="button-skills">Javascript</button>
      <button class="button-skills">ReactJS</button>
      <button class="button-skills">Python</button>
      <button class="button-skills">AWS</button>
      <button class="button-skills">Git</button>
      <button class="button-skills">UI/UX Design</button>

      
      
      </Container>
    </div>
  );
};

export default Skills;