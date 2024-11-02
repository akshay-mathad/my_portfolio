import React from "react";
import { Link } from "react-router-dom"; // Import Link
import '../Stylesheets/Header.css';

function Header() {
    const elements = [
        { name: "HOME", link: "/my_portfolio" }, // Home link
        { name: "EXPERIENCE", link: "/experience" },
        { name: "SKILLS", link: "/skills" }, // Skills link
        { name: "PROJECTS", link: "/projects" },
    ];
    
    const listItems = elements.map((element, index) => (
        <Link to={element.link} id="header-list-items" key={index}>
            {element.name}
        </Link>
    ));

    return (
        <div id="header-main">
            {listItems}
        </div>
    );
}

export default Header;
