import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/Amit-Ojha-Pic.png";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Amit Kumar Ojha" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3.7 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a dedicated Java Full Stack Developer with over 3.7 years of
            experience in Telecom, Ecommerce, Healthcare, Financial Services,
            and Insurance. My expertise spans backend development with Java and
            Spring Boot, building scalable enterprise applications and
            microservices. On the frontend, I specialize in ReactJS, HTML, CSS,
            and JavaScript to create dynamic, responsive UIs. I am skilled in
            SQL, JDBC for efficient database interaction, and have experience
            with AWS for cloud deployment. Familiar with Agile methodologies, I
            implement CI/CD pipelines using Jenkins and GitLab CI. I am also
            expanding my knowledge in containerization and orchestration with
            Docker and Kubernetes. Additionally, I provide production support to
            maintain system reliability and performance. Always eager to learn,
            I am focused on delivering high-quality solutions in full-stack
            development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
