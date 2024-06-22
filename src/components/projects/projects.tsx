import React, { ReactElement } from "react";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/RoboFriendsCap.jpg";
import image2 from "../../../public/PennyGalleryCapture2.jpg";
import image3 from "../../../public/SmartBrainCapture.jpg";
import image5 from "../../../public/CrownClothingHomepage.png";

interface ProjectInfo {
  projectId: number;
  projectTitle: string;
  projectDetails: string;
  projectLink1: string;
  projectLink2: string;
  projectImg: string;
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
    projectImg: image5,
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
    projectImg: image3,
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
    projectImg: image2,
  },
  {
    projectId: 1,
    projectTitle: "Dynamic Search Bar App",
    projectDetails: `React App used to dynamically search hash database. 
      Project part of Zero to Mastery Web Development course.
      Front End: React (HTML5, CSS3, JSX)`,
    projectLink1: "https://justigo86.github.io/robofriends/",
    projectLink2: "https://github.com/justigo86/SmartBrain",
    projectImg: image1,
  },
];

const Projects = (): ReactElement => {
  AOS.init();
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-header-title" data-aos="fade-right">
        Projects
      </h1>
      <div className="project-card-container">
        {cardInfo.map((card: ProjectInfo) => {
          return (
            <div
              key={card.projectId}
              className="project-card"
              data-aos="fade-left"
            >
              <div
                className="project-card-header"
                style={{
                  backgroundImage: `url("${card.projectImg}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <div className="project-details">
                  <p className="project-details-text">{card.projectDetails}</p>
                </div>
              </div>
              <div className="project-card-footer">
                <p className="project-footer-title">{card.projectTitle}</p>
                <div className="project-footer-links-container">
                  <div className="project-footer-link">
                    <a
                      href={card.projectLink1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      DEMO
                    </a>
                    <span> | </span>
                    <a
                      href={card.projectLink2}
                      target="_blank"
                      rel="noreferrer"
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
