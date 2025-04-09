import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const frontendSkills = [
  "HTML / CSS",
  "JavaScript",
  "Bootstrap", "Tailwind",
  "ReactJs",
  "Typescript",
  "Node.js", "JavaScript.js",
  "Responsive Design",
  "Redux", "Redux-toolkit", "Context API"
];

const backendSkills = [
  "Java",
  "Spring Boot", "Spring Core",
  "Microservices",
  "RESTful APIs",
  "Database Management (MySQL, MongoDB)",
  "Docker", "Kubernetes",
  "Amazon Web Services (AWS)","Design Pattern",
  "Data Structure And Algorithms",
  "Maven"
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
