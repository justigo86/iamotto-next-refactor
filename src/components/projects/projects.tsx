import React, { ReactElement } from "react";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/RoboFriendsCap.jpg";
import image2 from "../../../public/PennyGalleryCapture2.jpg";
import image3 from "../../../public/SmartBrainCapture.jpg";
import image5 from "../../../public/CrownClothingHomepage.png";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectInfo {
  projectId: number;
  projectTitle: string;
  projectDetails: string;
  projectLink1: string;
  projectLink2: string;
  projectImg: string | StaticImageData;
}

const cardInfo: ProjectInfo[] = [
  {
    projectId: 4,
    projectTitle: "E-Commerce Shopping App",
    projectDetails: `E-commerce inspired clothing store app. 
      User account with shopping cart capability.
      Project part of Complete React Developer course.
      Front End: React (HTML5, CSS3, JSX), Redux
      Back End: Firebase/Firestore`,
    projectLink1: "https://justigo86.github.io/crd_capstone_dev/",
    projectLink2: "https://github.com/justigo86/crd_capstone_dev",
    projectImg: image5.src,
  },
  {
    projectId: 3,
    projectTitle: "Face Detection App",
    projectDetails: `PERN stack React App with AI face-detection. 
      User account capability with upload history.
      Project part of Zero to Mastery Web Development course.
      Front End: React (HTML5, CSS3, JSX)
      Back End: Node.js, Express.js, PostgreSQL`,
    projectLink1: "http://smart-brain-jotto.herokuapp.com/",
    projectLink2: "https://github.com/justigo86/SmartBrain",
    projectImg: image3.src,
  },
  {
    projectId: 2,
    projectTitle: "Image Gallery App",
    projectDetails: `Unfinished React App. View, add, and delete gallery images.
      A learning project that grew to memorialize a beloved pup.
      Front End: React (HTML5, CSS3, JSX)
      Back End: Firebase Firestore`,
    projectLink1: "https://justigo86.github.io/gallery4pen/",
    projectLink2: "https://github.com/justigo86/gallery4pen",
    projectImg: image2.src,
  },
  {
    projectId: 1,
    projectTitle: "Dynamic Search Bar App",
    projectDetails: `React App used to dynamically search hash database. 
      Project part of Zero to Mastery Web Development course.
      Front End: React (HTML5, CSS3, JSX)`,
    projectLink1: "https://justigo86.github.io/robofriends/",
    projectLink2: "https://github.com/justigo86/SmartBrain",
    projectImg: image1.src,
  },
];

const Projects = (): ReactElement => {
  const cardColorVariants = {
    initialColor: {
      grayscale: 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hoverColor: {
      grayscale: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const cardFooterVariants = {
    floatDown: {
      bottom: 0,
      width: "100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const cardDetailsVariants = {
    initialDetails: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    showDetails: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  AOS.init();
  return (
    <div
      id="projects"
      //className="projects-container"
      className="flex flex-col items-center justify-center min-h-[80vh] overflow-hidden mb-[10vh]"
    >
      <h1
        //className="project-header-title"
        className="my-[6vh] text-3xl md:text-4xl text-white font-extrabold text-shadow-md"
        data-aos="fade-right"
      >
        Projects
      </h1>
      <div
        //className="project-card-container"
        className="flex items-center justify-center md:flex-col flex-wrap"
      >
        {cardInfo.map((card: ProjectInfo) => {
          return (
            <motion.div
              key={card.projectId}
              //className="project-card"
              className="border-2 border-white flex flex-col items-center justify-center relative h-[50vh] w-[90vw] md:w-[50vw] rounded-[30px] overflow-hidden md:my-4 my-[1.5vh] mx-[1vw] min-w-[15rem]"
              data-aos="fade-left"
              // variants={cardFooterVariants}
              initial={["initialDetails"]}
              whileHover={["floatDown", "showDetails"]}
              whileTap={["floatDown", "showDetails"]}
            >
              <motion.div
                //className="project-card-header"
                className="flex flex-col items-center justify-center w-full h-full filter grayscale hover:grayscale-0"
                style={{
                  backgroundImage: `url("${card.projectImg}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
                variants={cardColorVariants}
              >
                <motion.div
                  //className="project-details"
                  className="w-[90%] bg-black bg-opacity-70 rounded-[20px] text-white whitespace-pre-wrap"
                  variants={cardDetailsVariants}
                >
                  <p
                    //className="project-details-text"
                    className="text-center my-[4%] font-medium text-sm md:text-base"
                  >
                    {card.projectDetails}
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                variants={cardFooterVariants}
                //className="project-card-footer"
                className="h-[8vh] w-[60vw] md:w-[24vw] rounded-[8px] absolute flex justify-center items-center text-center flex-col bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition"
              >
                <p
                  //className="project-footer-title"
                  className="text-white font-bold text-base md:text-lg text-shadow-md"
                >
                  {card.projectTitle}
                </p>
                <div
                  //className="project-footer-links-container"
                  className="transform scale-0 transition duration-500 ease-in-out h-0 flex justify-center items-center"
                >
                  <div
                    //className="project-footer-link"
                    className="flex"
                  >
                    <a
                      href={card.projectLink1}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-[1vw] px-1.5 py-0.5 text-white font-semibold rounded-lg hover:bg-black hover:bg-opacity-50"
                    >
                      DEMO
                    </a>
                    <span> | </span>
                    <a
                      href={card.projectLink2}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-[1vw] px-1.5 py-0.5 text-white font-semibold rounded-lg hover:bg-black hover:bg-opacity-50"
                    >
                      GITHUB
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

// Custom Heights and Margins: Tailwind does not have built-in classes for certain heights or margins, so you need to add these values to the Tailwind configuration.
// Animations: Defined custom keyframes and animations in the Tailwind configuration.
// Text Shadow: Tailwind does not natively support text shadows, so a plugin like tailwindcss-textshadow can be used.
// Colors: For hover effects with gradients and custom colors, directly use Tailwind's utility classes and extended configurations.
