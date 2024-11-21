import React from 'react';
import './Skills.css';

const skills = ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'Redux', 'C#', "Express", "SQL"];

const Skills = () => (
  <div id="skills" className="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
