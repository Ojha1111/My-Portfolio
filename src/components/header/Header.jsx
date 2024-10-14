import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  const name = "Amit Kumar Ojha";
  const [letters, setLetters] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const splitName = name
      .split("")
      .map((letter) => (letter === " " ? " " : letter));
    setLetters(splitName);

    const timeoutId = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [name]);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (section) => {
    setDropdownOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1 className={`name ${isAnimating ? "animate" : ""}`}>
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`letter ${
                isAnimating && letter !== " " ? "start-animation" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h4 className="text-light">Full Stack Developer</h4>
        <CTA />

        <div className="dropdown">
          <button onClick={handleDropdownToggle} className="dropdown-button">
            Menu
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a onClick={() => handleLinkClick("home")}>Home</a>
              <a onClick={() => handleLinkClick("about")}>About</a>
              <a onClick={() => handleLinkClick("experience")}>Experience</a>
              <a onClick={() => handleLinkClick("certifications")}>
                Certifications
              </a>
              <a onClick={() => handleLinkClick("portfolio")}>Portfolio</a>
              <a onClick={() => handleLinkClick("testimonials")}>
                Testimonials
              </a>
              <a onClick={() => handleLinkClick("contact")}>Contact</a>
            </div>
          )}
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
          <span className="arrow">&#8595;</span>
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
