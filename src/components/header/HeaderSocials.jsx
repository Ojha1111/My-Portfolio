import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/amit-kumar-ojha/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
      >
        <BsLinkedin /> LinkedIn
      </a>
      <a
        href="https://github.com/Ojha1111"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
      >
        <FaGithub /> GitHub
      </a>
      <a
        href="https://leetcode.com/u/Amti_Kumar_Ojha/"
        target="_blank"
        rel="noreferrer"
        aria-label="LeetCode Profile"
      >
        <FaCode /> LeetCode
      </a>
    </div>
  );
};

export default HeaderSocials;
