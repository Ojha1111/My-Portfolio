import React from "react";
import "./education.css";
import LPUP from "../../assets/LPU.png";
import CMSL from "../../assets/cms.png";
import HBECK from "../../assets/hbec.png";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Lovely Professional University",
    year: "2021",
    image: LPUP,
    details: [
      "Graduated with a 6.94 CGPA",
      "Participated in various extracurricular activities",
      "Conducted research on hexacopter drone",
    ],
  },
  {
    id: 2,
    degree: "Intermediate in Science",
    institution: "Heliger Borden Education Center",
    year: "2016",
    image: CMSL,
    details: [
      "Passed with a score of 67.5%",
      "Member of the Computer Science Club",
      "Participated in various competitive exams",
    ],
  },
  {
    id: 3,
    degree: "High School Science",
    institution: "City Montessori School",
    year: "2014",
    image: HBECK,
    details: [
      "Passed with a score of 64%",
      "Member of the Computer Science Club",
      "Participated in NTSE Maths Olympiad",
    ],
  },
];

const Education = () => {
  return (
    <section id="education">
      <h5>My Education</h5>
      <h2>Education Journey</h2>
      <div className="education__steps">
        {educationData.map((edu, index) => (
          <div 
            className={`education__card ${index % 2 === 0 ? "left" : "right"}`} 
            key={edu.id}
          >
            <div className="education__content">
              <h3>{edu.degree}</h3>
              <p>
                <strong>Institution:</strong> {edu.institution}
              </p>
              <p>
                <strong>Year:</strong> {edu.year}
              </p>
              <h4>Details:</h4>
              <ul>
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <img src={edu.image} alt={`${edu.degree} image`} className="education__image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
