    import React from "react";
import '../Stylesheets/Skills.css';
import CLogo from '../logos/c-logo.svg';                     // C logo
import JavaLogo from '../logos/java-logo.svg';               // Java logo
import PHPLogo from '../logos/php-seeklogo.svg';            // PHP logo (EPS, may need conversion)
import JSSLogo from '../logos/javascript-seeklogo.svg';                 // JavaScript logo (if available)
import ReactLogo from '../logos/react-seeklogo.svg';        // React logo
import ExpressLogo from '../logos/express-seeklogo.svg'; // Express logo
import NodeLogo from '../logos/node-js-seeklogo.svg';       // Node.js logo
import ChartLogo from '../logos/chart-js-seeklogo.png';     // Chart.js logo (PNG format)
import ThreeLogo from '../logos/three-js-seeklogo.svg';     // Three.js logo
import VSCodeLogo from '../logos/visual-studio-code-seeklogo.svg'; // VS Code logo
import GitHubLogo from '../logos/github-seeklogo.svg';      // GitHub logo
import PostmanLogo from '../logos/postman-seeklogo.svg';    // Postman logo
import MySQLLogo from '../logos/mysql-seeklogo.svg';        // MySQL logo
import MongoDBLogo from '../logos/mongodb-seeklogo.svg';    // MongoDB logo

function Skills() {
  const skillsData = [
    {
      id: 1,
      name: "C",
      logo: CLogo,
      proficiency: 95,
    },
    {
      id: 2,
      name: "Java",
      logo: JavaLogo,
      proficiency: 90,
    },
    {
      id: 3,
      name: "PHP",
      logo: PHPLogo,
      proficiency: 85,
    },
    {
      id: 4,
      name: "JavaScript",
      logo: JSSLogo,
      proficiency: 80,
    },
    {
      id: 5,
      name: "React.js",
      logo: ReactLogo,
      proficiency: 75,
    },
    {
      id: 6,
      name: "Express.js",
      logo: ExpressLogo,
      proficiency: 70,
    },
    {
      id: 7,
      name: "Node.js",
      logo: NodeLogo,
      proficiency: 70,
    },
    {
      id: 8,
      name: "Chart.js",
      logo: ChartLogo,
      proficiency: 65,
    },
    {
      id: 9,
      name: "Three.js",
      logo: ThreeLogo,
      proficiency: 65,
    },
    {
      id: 10,
      name: "VS Code",
      logo: VSCodeLogo,
      proficiency: 60,
    },
    {
      id: 12,
      name: "Git-hub",
      logo: GitHubLogo,
      proficiency: 60,
    },
    {
      id: 13,
      name: "Postman",
      logo: PostmanLogo,
      proficiency: 60,
    },
    {
      id: 14,
      name: "Cursor.sh",
      logo: "cursor_logo.png",
      proficiency: 60,
    },
    {
      id: 16,
      name: "MySQL",
      logo: MySQLLogo,
      proficiency: 55,
    },
    {
      id: 17,
      name: "MongoDB",
      logo: MongoDBLogo,
      proficiency: 75,
    },
  ];
  return (
    <div className="skill-main">
      <div className="skill-header">Skills</div>
      <div className="inner-frame">
        {skillsData.map((skill) => (
          <div key={skill.id} className="skill">
            <img src={skill.logo} alt={skill.name} className="skill-logo"/>
            <p>{skill.name} - Proficiency: {skill.proficiency}%</p>
            <div className="proficiency-bar" style={{ width: `${skill.proficiency}%` }}></div>
          </div>
        ))}
      </div>
      {/* <div id="image-2"></div> */}
    </div>
  );
}

export default Skills;
