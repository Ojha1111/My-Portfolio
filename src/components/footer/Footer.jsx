import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaCode } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Amit Kumar Ojha</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/amit-kumar-ojha/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
          <BsLinkedin /> 
        </a>
        <a href="https://github.com/Ojha1111" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
          <FaGithub /> 
        </a>
        <a href="https://leetcode.com/u/Amti_Kumar_Ojha/" target="_blank" rel="noreferrer" aria-label="LeetCode Profile">
          <FaCode /> 
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Amit Kumar Ojha 2024. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
