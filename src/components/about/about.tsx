import React, { ReactElement } from "react";
import image1 from "../../../public/DSC4721v2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";

const About = (): ReactElement => {
  AOS.init();
  return (
    <div className="about-container" id="about">
      <h1 className="about-title" data-aos="fade-right">
        About
      </h1>
      <div className="about-content-container">
        <div className="about-info-container" data-aos="fade-right">
          {/* <p className="about-paragraph"> */}
          <p className="font-semibold text-center text-white mb-[4vh]">
            I started in the industry two yeas ago primarily as a front-end
            developer but been blessed with opportunities to contribute to
            projects in a full-stack capacity. Always learning, building, and
            growing to push myself to be a better developer. I am passionate
            about building scalable, secure, user-friendly websites and
            applications through teamwork and critical thinking.
          </p>
          <h2 className="subheading">Competencies</h2>
          {/* <p className="about-paragraph"> */}
          <p className="font-semibold text-center text-white mb-[4vh]">
            HTML / CSS / JavaScript / TypeScript / React / Angular / JSON / SQL
            / AWS
          </p>
          <h2 className="subheading">Used in the Past</h2>
          {/* <p className="about-paragraph"> */}
          <p className="font-semibold text-center text-white mb-[4vh]">
            XML / DynamoDB / Node.js / Express.js / Java / PHP
          </p>
        </div>
        <div className="about-image-container" data-aos="fade-left">
          <p className="pup-title banzai-title">BANZAI</p>
          <img className="about-image" src={image1.src} alt="" />
          <p className="pup-title penny-title">
            PENNY <p>(sans snot)</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
