import React, { ReactElement, useRef, useEffect } from "react";
import { Link } from "react-scroll";
// import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import resume from "../../../public/Justin_Otto_Resume.pdf";
import "./hero.scss";
import Typed from "typed.js";

const intros = [
  "am committed to improving every day.",
  "believe hard work pays off.",
  "hope you like it here.",
  "think dogs are the best.",
  "eat more tacos than I should.",
  "know what you did last summer.",
  // "am not convinced I know how to read. I've just memorized a lot of words.",
];

// const cycleIntros = () => {
//     let key = Object.keys(intros);
//     let rand = key[Math.floor(Math.random() * key.length)];
//     return intros[rand].text;
// }

const Hero = (): ReactElement => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: intros,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1800,
      startDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <div id="home" className="hero-container">
      <div className="hero-background-img" />
      <div className="intro-container">
        <h1>J. Otto</h1>
        <p>Web Developer</p>
        <p className="hero-descriptions">
          and I&nbsp;
          <span className="typed" ref={el}></span>
        </p>
        <div className="hero-links">
          <Link
            className="hero-link"
            to="projects"
            smooth={true}
            duration={1000}
          >
            <a className="hero-link-atag" href="#projects">
              Projects
            </a>
          </Link>
          <span>/</span>
          <Link className="hero-link" to="about" smooth={true} duration={1000}>
            <a className="hero-link-atag" href="#about">
              About
            </a>
          </Link>
          <span>/</span>
          <Link
            className="hero-link"
            to="connect"
            smooth={true}
            duration={1000}
          >
            <a className="hero-link-atag" href="#connect">
              Connect
            </a>
          </Link>
        </div>
      </div>
      <ul className="hero-icons-container">
        <li className="hero-icons">
          <a
            id="git"
            href="https://github.com/justigo86"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="mail"
            href="mailto: justigo86@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaEnvelope />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="linked"
            href="https://www.linkedin.com/in/justin-otto-m-s-ed-s-60b449100"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="hero-icons">
          <a
            id="resume"
            href={resume.src}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaRegFileAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
