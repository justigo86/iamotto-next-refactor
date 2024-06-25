import React, { ReactElement } from "react";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/RoboFriendsCap.jpg";
import image2 from "../../../public/PennyGalleryCapture2.jpg";
import image3 from "../../../public/SmartBrainCapture.jpg";
import image5 from "../../../public/CrownClothingHomepage.png";
import { StaticImageData } from "next/image";

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
  AOS.init();
  return (
    // <div id="projects" className="projects-container">
    //   <h1 className="project-header-title" data-aos="fade-right">
    //     Projects
    //   </h1>
    //   <div className="project-card-container">
    //     {cardInfo.map((card: ProjectInfo) => {
    //       return (
    //         <div
    //           key={card.projectId}
    //           className="project-card"
    //           data-aos="fade-left"
    //         >
    //           <div
    //             className="project-card-header"
    //             style={{
    //               backgroundImage: `url("${card.projectImg}")`,
    //               backgroundSize: "cover",
    //               backgroundPosition: "center top",
    //             }}
    //           >
    //             <div className="project-details">
    //               <p className="project-details-text">{card.projectDetails}</p>
    //             </div>
    //           </div>
    //           <div className="project-card-footer">
    //             <p className="project-footer-title">{card.projectTitle}</p>
    //             <div className="project-footer-links-container">
    //               <div className="project-footer-link">
    //                 <a
    //                   href={card.projectLink1}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                 >
    //                   DEMO
    //                 </a>
    //                 <span> | </span>
    //                 <a
    //                   href={card.projectLink2}
    //                   target="_blank"
    //                   rel="noreferrer"
    //                 >
    //                   GITHUB
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-[80vh] overflow-hidden mb-[10vh]"
    >
      <h1
        className="my-[5vh] text-white font-extrabold drop-shadow-md"
        data-aos="fade-right"
      >
        Projects
      </h1>
      <div className="flex items-center justify-center flex-wrap md:flex-col">
        {cardInfo.map((card: ProjectInfo) => {
          return (
            <div
              key={card.projectId}
              className="border-2 border-white flex flex-col items-center justify-center relative h-[39vh] w-[30vw] rounded-[30px] overflow-hidden my-[1vh] mx-[1vw] md:w-[90vw] md:min-w-[15rem] md:my-4"
              data-aos="fade-left"
            >
              <div
                className="flex flex-col items-center justify-center w-full h-full filter grayscale transition duration-300 ease-in-out"
                style={{
                  backgroundImage: `url("${card.projectImg}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <div className="w-[90%] bg-black bg-opacity-50 rounded-[20px] transform scale-0 transition duration-500 ease-in-out text-white whitespace-pre-wrap">
                  <p className="text-center my-[4%] font-medium text-sm md:text-base">
                    {card.projectDetails}
                  </p>
                </div>
              </div>
              <div className="h-[8vh] w-[24vw] rounded-[8px] absolute flex justify-center items-center text-center flex-col bottom-[15vh] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition duration-500 ease-in-out md:w-[60vw]">
                <p className="text-white font-bold text-base md:text-lg drop-shadow-md">
                  {card.projectTitle}
                </p>
                <div className="transform scale-0 transition duration-500 ease-in-out h-0 flex justify-center items-center">
                  <div className="flex">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
