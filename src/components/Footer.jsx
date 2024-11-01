import React from "react";
import '../Stylesheets/Footer.css'; // Adjust the path if necessary
import githubLogo from '../logos/github-seeklogo.svg';
import linkedinLogo from '../logos/linkedin-new-2020-seeklogo.svg';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/akshay-mathad" target="_blank" rel="noopener noreferrer" className="logo-link">
          <img src={githubLogo} alt="GitHub Logo" className="logo-img" />
        </a>
        <a href="https://www.linkedin.com/in/akshay-mathad-5a237a259/" target="_blank" rel="noopener noreferrer" className="logo-link">
          <img src={linkedinLogo} alt="LinkedIn Logo" className="logo-img" />
        </a>
      </div>
      <div className="footer-section">
        <div className="thank-you-note">
          Thank you for visiting our website!
        </div>
        <a href="/resume1.pdf" download>
          Download Resume 1
        </a>
        <a href="/resume2.pdf" download>
          Download Resume 2
        </a>
      </div>
      <div>&copy; 2024 My Portfolio | Author: Akshay Mathad</div>
    </footer>
  );
}

export default Footer;
