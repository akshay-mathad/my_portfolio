import React from "react";
import "../Stylesheets/About.css";
import Experience from "./Experience";

function About() {
  return (
    <div id="about-main">
      <div id="about-container-1">
        <div className="about-bento" id="Image-1"></div>
        <div id="intro-container">
          <div className="about-bento" id="Introdunction">
            <div id="name">Akshay Mathad</div>
            <div id="course">Computer Science Engineer.</div>
            <div id="brief-intro">
              As a passionate Computer Science student at SDMCET Dharwad, I'm on
              a mission to blend theoretical knowledge with hands-on experience.
              Currently in my 7th semester, I thrive on coding challenges and
              innovative projects. I bring a relentless curiosity and a
              commitment to excellence.
            </div>
          </div>
        </div>
      </div>
      <Experience />
    </div>
  );
}

export default About;
