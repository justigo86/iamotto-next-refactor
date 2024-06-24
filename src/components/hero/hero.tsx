import React, { ReactElement, useRef, useEffect } from "react";
import { Link } from "react-scroll";
// import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import resume from "../../../public/Justin_Otto_Resume.pdf";
import "./hero.scss";
import Typed from "typed.js";
// import image1 from "../../../public/coffee1.jpg";

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
    <div
      id="home"
      className="h-[110vh] text-left text-white text-3xl overflow-hidden relative bg-transparent mt-36 text-shadow-md"
    >
      <div className="absolute bg-hero bg-no-repeat bg-cover bg-center w-full h-full grayscale brightness-[0.45]"></div>
      <div className="relative top-88 left-28 font-extrabold animate-[heroLoad_0.7s]">
        <h1 className="inline-block text-8xl mb-2">J. Otto</h1>
        <p className="mb-2">Web Developer</p>
        <p className="mb-2">
          and I&nbsp;
          <span className="font-bold" ref={el}></span>
        </p>
        <div className="flex items-center space-x-2">
          <Link to="projects" smooth={true} duration={1000}>
            <a
              className="text-blue-600 hover:text-pink-500 hover:text-shadow-md"
              href="#projects"
            >
              Projects
            </a>
          </Link>
          <span className="mx-1 text-white bg-clip-text text-shadow-md">/</span>
          <Link to="about" smooth={true} duration={1000}>
            <a
              className="text-blue-600 hover:text-pink-500 hover:text-shadow-md"
              href="#about"
            >
              About
            </a>
          </Link>
          <span className="mx-1 text-white bg-clip-text text-shadow-md">/</span>
          <Link to="connect" smooth={true} duration={1000}>
            <a
              className="text-blue-600 hover:text-pink-500 hover:text-shadow-md"
              href="#connect"
            >
              Connect
            </a>
          </Link>
        </div>
      </div>
      <ul className="fixed right-1 bottom-2 list-none z-10 flex flex-col items-end space-y-2">
        <li className="mr-2">
          <a
            id="git"
            href="https://github.com/justigo86"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white hover:text-[#0473fc]"
          >
            <FaGithub />
          </a>
        </li>
        <li className="mr-2">
          <a
            id="mail"
            href="mailto: justigo86@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white hover:text-[#7b00ac]"
          >
            <FaEnvelope />
          </a>
        </li>
        <li className="mr-2">
          <a
            id="linked"
            href="https://www.linkedin.com/in/justin-otto-m-s-ed-s-60b449100"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white hover:text-[#bc0098]"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="mr-2">
          <a
            id="resume"
            href={resume.src}
            target="_blank"
            rel="noreferrer noopener"
            className="text-white hover:text-[#ff0099]"
          >
            <FaRegFileAlt />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
