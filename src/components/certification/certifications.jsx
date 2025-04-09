
import React, { useState } from "react";
import { FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./certifications.css";
import C1 from "../../assets/Upgrad.jpg";
import C2 from "../../assets/Oracle Certified Java Associate.pdf";
import C3 from "../../assets/1Z0-819 - Java SE 11 Developer.pdf";
import C4 from "../../assets/SQL.pdf";
import C5 from "../../assets/AWS Certified Developer - Associate certificate.pdf";
import C6 from "../../assets/AWS Certified Solutions Architect - Associate certificate.pdf";
const certificationsData = [
  {
    id: 1,
    title: "Full Stack Development Certification",
    institution: "upGrad",
    year: "2020",
    downloadLink: C1,
    learningOutcomes: [
      "The Full Stack Development Certification provides comprehensive training in both front-end and back-end technologies, equipping candidates with the skills to build dynamic web applications.",
      "I learn to design responsive user interfaces using HTML, CSS, and JavaScript frameworks like React , while also mastering server-side programming with languages such as Node.js or Python.",
      "The certification covers database management, RESTful API development, and version control with Git.",
      "Emphasizing best practices in web development, candidates gain practical experience in deploying applications, ensuring security, and optimizing performance.",
    ],
  },
  {
    id: 2,
    title: "Oracle Certified Java Associate: Java SE 8 Programmer I",
    institution: "Oracle",
    year: "2022",
    downloadLink: C2,
    learningOutcomes: [
      "The Oracle Certified Java Associate: Java SE 8 Programmer I certification focuses on fundamental Java programming skills.",
      "It covers essential topics such as data types, operators, control structures, and object-oriented programming principles like encapsulation, inheritance, and polymorphism.",
      "Learners create and manipulate classes and objects, handle exceptions, and utilize the Java Collections Framework.",
      "The certification includes string manipulation, basic I/O operations, and the use of common Java APIs.",
    ],
  },
  {
    id: 3,
    title: "Oracle Certified Professional: Java SE 11 Developer",
    institution: "Oracle",
    year: "2022",
    downloadLink: C3,
    learningOutcomes: [
      "The Oracle Certified Professional: Java SE 11 Developer certification builds on foundational Java skills, focusing on advanced features and best practices.",
      "It emphasizes a deep understanding of the Java language and its core libraries, including the Java Streams API.",
      "Candidates learn to design and implement modular applications using the Java Platform Module System (JPMS).",
      "The certification covers best practices for code maintenance, security, and effective use of Java's new language features.",
    ],
  },
  {
    id: 4,
    title: "Oracle Database SQL Certified Associate",
    institution: "Oracle",
    year: "2022",
    downloadLink: C4,
    learningOutcomes: [
      "The Oracle Database SQL Certified Associate certification provides individuals with a strong foundation in SQL, essential for working with Oracle databases.",
      "I learn to write complex SQL queries to retrieve and manipulate data effectively.",
      "The certification covers key concepts such as data modeling, table creation, and the use of various SQL functions, including aggregate and analytical functions.",
      "I gain hands-on experience with database objects, including indexes and views, and learn to manage data through insertion, updating, and deletion processes.",
      "This certification not only enhances SQL skills but also prepares individuals for more advanced roles in database administration and development.",
    ],
  },
  {
    id: 5,
    title: "AWS Certified Developer – Associate",
    institution: "Amazon",
    year: "2022",
    downloadLink: C5,
    learningOutcomes: [
      "The AWS Certified Developer – Associate certification equips individuals with the essential skills needed to develop and maintain applications on the Amazon Web Services (AWS) platform.",
      "I learn to effectively utilize AWS services, including AWS Lambda, DynamoDB, and API Gateway, to build scalable and resilient applications.",
      "The certification emphasizes best practices in application design, including security, monitoring, and troubleshooting, as well as efficient deployment strategies using AWS tools like Elastic Beanstalk and CloudFormation.",
      "This certification not only validates an individual's proficiency in developing cloud-based applications but also enhances their ability to contribute to modern software development practices within AWS environments.",
    ],
  },
  {
    id: 6,
    title: "AWS Certified Solutions Architect – Associate",
    institution: "Amazon",
    year: "2022",

    downloadLink: C6,
    learningOutcomes: [
      "The AWS Certified Solutions Architect – Associate certification provides individuals with a comprehensive understanding of designing and deploying scalable, highly available, and fault-tolerant systems on the Amazon Web Services (AWS) platform.",
      "I learn to select appropriate AWS services for various applications, understand architectural best practices, and implement security measures for cloud-based solutions.",
      "The certification covers critical areas such as data storage options, networking, and disaster recovery strategies.",
      "By mastering these concepts, individuals are equipped to create efficient, cost-effective solutions that meet business requirements, making them valuable assets in cloud architecture and design roles.",
    ],
  },
];

const Certifications = () => {
  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    if (page >= 0 && page < Math.ceil(certificationsData.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  const displayedCertifications = certificationsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="certifications">
      <h5>My Certifications</h5>
      <h2>Certifications</h2>
      <div className="certification__container">
        {displayedCertifications.map((cert) => (
          <div className="certification__card" key={cert.id}>
            <h3>
              <a
                href={cert.downloadLink}
                download
                aria-label={`Download certification for ${cert.title}`}
                className="download-button"
              >
                {cert.title}
                <FaDownload style={{ marginLeft: "8px" }} />
              </a>
            </h3>
            <p>
              <strong>Institution:</strong> {cert.institution}
            </p>
            <p>
              <strong>Year:</strong> {cert.year}
            </p>
            <h4>Learning Outcomes:</h4>
            <ul>
              {cert.learningOutcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pagination">
        <FaChevronLeft 
          onClick={() => handlePageChange(currentPage - 1)} 
          className={`arrow ${currentPage === 0 ? 'disabled' : ''}`} 
        />
        {Array.from({ length: Math.ceil(certificationsData.length / itemsPerPage) }, (_, index) => (
          <span 
            key={index} 
            className={`dot ${currentPage === index ? 'active' : ''}`} 
            onClick={() => handlePageChange(index)} 
          />
        ))}
        <FaChevronRight 
          onClick={() => handlePageChange(currentPage + 1)} 
          className={`arrow ${currentPage >= Math.ceil(certificationsData.length / itemsPerPage) - 1 ? 'disabled' : ''}`} 
        />
      </div>
    </section>
  );
};


export default Certifications;
