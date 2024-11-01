import React from "react";
import "../Stylesheets/Projects.css";

function Projects() {
  return (
    <div id="projects-main">
      <div id="project-heading">Hobby Projects</div>
      <div className="projects-bento">
        <div className="project-bento-col-1">
          <div className="project-title">Chronotrack</div>

          <div className="project-desc">
            <ul>
              <li>
                A simple and intuitive web app to track personal attendance for
                various subjects.
              </li>
              <li>Add or delete subject names easily.</li>
              <li>Mark attended or missed classes for each subject.</li>
              <li>
                View attendance data with a visual doughnut chart along with the
                last updated date and time.
              </li>
            </ul>
          </div>
          <div className="github-link">
            Github Link: <br></br>
            <a
              className="link"
              href=" https://github.com/akshay-mathad/attendance-tracker"
            >
              https://github.com/akshay-mathad/attendance-tracker
            </a>
          </div>
        </div>

        <div className="project-bento-col-2">
          <div className="project-title">Nexus</div>
          <div className="project-desc">
            <ul>
              <li>
                Connects Artisans & Clients: Direct link for service needs.
              </li>
              <li>
                Showcases Expertise: Profiles for electricians, plumbers, more.
              </li>
              <li>Trusted Platform: Reliable hub for skilled professionals.</li>
            </ul>
          </div>
          <div className="github-link">
            Github Link: <br></br>
            <a className="link" href="https://github.com/akshay-mathad/nexus">
              https://github.com/akshay-mathad/nexus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
