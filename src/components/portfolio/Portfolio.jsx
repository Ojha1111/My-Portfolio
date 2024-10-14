import "./portfolio.css";
import IMG1 from "../../assets/GraphiteUi.png";
import IMG2 from "../../assets/hms.jpg";
import IMG4 from "../../assets/Ecom.png";
import IMG5 from "../../assets/telicom.jpg";
import IMG3 from "../../assets/Niq.png";
import React, { useState } from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Graphite UI - Mandate-UI Payment Service",
      img: IMG1,
      description: [
        "Upgraded Mandate-UI Payment Service from Java 8 to 17, enhancing performance.",
        "Developed backend components with Spring Boot, ensured compatibility, and deployed on AWS EKS for scalable management.",
        "Collaborated on tool integration and optimized the CI/CD pipeline, overseeing the deployment lifecycle for operational excellence.",
      ],
      technologies: "Java | Spring-Boot | MySql | BitBucket | Jira | Agile",
      github:
        "https://github.com/Ojha1111/jpTaskcrud/tree/main/javacrudoperation",
    },
    {
      id: 2,
      title: "Ecommerce Application",
      img: IMG4,
      description: [
        "Enhanced front-end functionalities with RESTful web services for improved user interaction.",
        "Developed a secure login and user creation module with role-based access control using Java and Spring Boot, incorporating JWT token authentication.",
        "Deployed the updated system, ensuring robust security through enhanced authentication and authorization mechanisms.",
      ],
      technologies:
        "HTML | CSS | JavaScript | React | Java | Spring-Boot | MySql | Postman",
      github: "https://github.com/Ojha1111/employees-app-management",
    },
    {
      id: 3,
      title: "Health Management System",
      img: IMG2,
      description: [
        "Implemented RESTful web services to enhance front-end functionality and user experience.",
        "Directed clinical onboarding with a user-friendly UI, secure access, and efficient CRUD APIs.",
        "Integrated operational systems for seamless patient onboarding and treatment data storage, while designing an intuitive UI for patient information that delivered feature updates to boost user engagement.",
      ],
      technologies:
        "HTML | CSS | JavaScript | React | Java | Spring-Boot | MySql | Postman",
      github:
        "https://github.com/Ojha1111/jpTaskcrud/tree/main/javacrudoperation",
    },
    {
      id: 4,
      title: "Personalized-Data-APIs",
      img: IMG3,
      description: [
        "This assignment closely simulates our day-to-day work at NIQ Activate and is designed to evaluate your design and coding skills.",
        "By engaging in this task, you will gain practical experience that mirrors the challenges and responsibilities encountered in our projects.",
        "This exercise aims to assess not only your technical abilities but also your problem-solving skills and creativity in delivering effective solutions.",
      ],
      technologies: "Java | Spring-Boot | MySql | Postman",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Ojha1111/Personalized-Data-APIs",
    },
    {
      id: 5,
      title: "SIM (Space Inventory Management)",
      img: IMG5,
      description: [
        "I monitored and addressed defects during migration while using MySQL for effective data management.",
        "I enhanced front-end functionalities through the implementation of RESTful web services, improving user interaction. In addition, I managed Oracle Database operations, focusing on query crafting and error resolution, and enforced data quality rules with triggers on various tables.",
        "These efforts resulted in feature updates that significantly increased user engagement.",
      ],
      technologies: "Java | Spring-Boot | MySql | Postman",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Ojha1111/Personalized-Data-APIs",
    },
    {
      id: 5,
      title: "My-Portfolio",
      img: IMG5,
      description: [
       "I developed my own portfolio using React, HTML, CSS, TypeScript, JavaScript, and Tailwind CSS." ,
"This project showcases my skills and projects, reflecting my journey as a developer." ,
"It features a responsive design, smooth navigation, and interactive components, demonstrating my proficiency in modern web technologies."
      ],
      technologies: "Java | Spring-Boot | MySql | Postman",
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/Ojha1111/Personalized-Data-APIs",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(soloProjects.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = soloProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {currentProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <ul>
                {pro.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <p>
                <strong>Technologies:</strong> {pro.technologies}
              </p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="pagination">
        <span
          className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevious}
        >
          &#8592; {}
        </span>

        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          />
        ))}

        <span
          className={`arrow ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={handleNext}
        >
          &#8594; {}
        </span>
      </div>
    </section>
  );
};

export default Portfolio;
