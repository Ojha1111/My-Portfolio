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
              <small>3.2 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a dedicated software full-stack developer with over 3 years of
            experience in the Telecom ,Ecommerce and Healthcare domains,
            specializing as a full stack developer. My expertise encompasses
            Java, Spring Boot, and ReactJS, with a strong foundation in core
            Java, object-oriented programming, and data structures. I have
            successfully developed dynamic, responsive user interfaces using
            HTML, CSS, and JavaScript, and I am adept at building scalable
            applications with React. Proficient in SQL and JDBC, I ensure
            efficient data interaction and management. My experience with the
            Spring Framework enhances my ability to create enterprise-level
            applications, while my knowledge of AWS supports cloud deployment
            and optimization. I embrace AGILE methodologies and DevOps
            practices, implementing CI/CD pipelines with Jenkins and GitLab CI
            for streamlined development processes. Additionally, I have
            experience in providing production support to maintain system
            reliability and performance. I am also eager to expand my skills in
            containerization and orchestration with Docker and Kubernetes.
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
