import React from 'react';
import CV from '../../assets/Amit-Kumar-Ojha-Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
      View My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
      Connect With Me
      </a>
    </div>
  );
};

export default CTA;
