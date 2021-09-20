import React from 'react';
import { Container, Progress } from 'reactstrap';
import "./skills.css"

const Skills = (props) => {
  return (
    <div className="skills" id="skills">
     
        
    
      
        <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>What I am good at?</h1>
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div>
        <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>What I am good at?</h1>
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
        </div>
      </div>
    </div>


      
      
      
    </div>
  );
};

export default Skills;