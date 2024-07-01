import React, { ReactElement, useRef, useEffect } from "react";
import { Link } from "react-scroll";
// import Typed from "react-typed";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import resume from "../../../public/Justin_Otto_Resume.pdf";
import "./hero.scss";
import Typed from "typed.js";
import image1 from "../../../public/coffee1.jpg";
import { motion } from "framer-motion";

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
      //className="hero-container"
      className="h-[110vh] text-left text-white text-lg md:text-2xl overflow-hidden relative bg-transparent -mt-36 text-shadow-md mb-[20vh]"
    >
      <div
        //className="hero-background-img"
        className="absolute bg-hero bg-no-repeat bg-cover bg-center w-full h-full grayscale-40 brightness-50"
        style={{
          backgroundImage: `url("${image1.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
      <div
        //className="intro-container"
        className="relative md:left-28 top-96 left-5 font-extrabold animate-[heroLoad_0.7s]"
      >
        <h1 className="inline-block text-7xl mb-2">J. Otto</h1>
        <p className="mb-2">Web Developer</p>
        <p
          //className="hero-descriptions"
          className="mb-2"
        >
          and I&nbsp;
          <span
            //className="typed"
            className="font-bold"
            ref={el}
          ></span>
        </p>
        <div
          //className="hero-links"
          className="flex items-center space-x-2"
        >
          <Link
            //className="hero-link"
            to="projects"
            smooth={true}
            duration={1000}
          >
            <a
              //className="hero-link-atag"
              className="text-blue-600 hover:text-pink-500"
              href="#projects"
            >
              Projects
            </a>
          </Link>
          <span className="mx-1 text-white">/</span>
          <Link to="about" smooth={true} duration={1000}>
            <a className="text-blue-600 hover:text-pink-500" href="#about">
              About
            </a>
          </Link>
          <span className="mx-1 text-white">/</span>
          <Link to="connect" smooth={true} duration={1000}>
            <a className="text-blue-600 hover:text-pink-500" href="#connect">
              Connect
            </a>
          </Link>
        </div>
      </div>
      <ul
        //className="hero-icons-container"
        className="fixed right-1 bottom-2 list-none z-10 flex flex-col items-end space-y-2"
      >
        <li
          //className="hero-icons"
          className="mr-4"
        >
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <a
              id="git"
              href="https://github.com/justigo86"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#0473fc] w-20 h-20"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </motion.div>
        </li>
        <li className="mr-4">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <a
              id="mail"
              href="mailto: justigo86@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#7b00ac]"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </motion.div>
        </li>
        <li className="mr-4">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <a
              id="linked"
              href="https://www.linkedin.com/in/justin-otto-m-s-ed-s-60b449100"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#bc0098]"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </li>
        <li className="mr-4">
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <a
              id="resume"
              href={resume.src}
              target="_blank"
              rel="noreferrer noopener"
              className="text-white hover:text-[#ff0099]"
            >
              <FaRegFileAlt className="w-8 h-8" />
            </a>
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
