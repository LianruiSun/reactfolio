import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
const { active } = props;
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
setIsMenuOpen(false);
};

return (
<React.Fragment>
<div className="nav-container">
<nav className="navbar">
<div className="nav-background">
<button 
className="hamburger-menu" 
onClick={toggleMenu}
aria-label="Toggle navigation menu"
>
<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
</button>
<ul className={isMenuOpen ? "nav-list open" : "nav-list"}>
<li
className={
active === "home"
? "nav-item active"
: "nav-item"
}
>
<Link to="/" onClick={closeMenu}>Home</Link>
</li>
<li
className={
active === "about"
? "nav-item active"
: "nav-item"
}
>
<Link to="/about" onClick={closeMenu}>About</Link>
</li>
<li
className={
active === "projects"
? "nav-item active"
: "nav-item"
}
>
<Link to="/projects" onClick={closeMenu}>Projects</Link>
</li>
<li
className={
active === "articles"
? "nav-item active"
: "nav-item"
}
>
<Link to="/articles" onClick={closeMenu}>Articles</Link>
</li>
<li
className={
active === "contact"
? "nav-item active"
: "nav-item"
}
>
<Link to="/contact" onClick={closeMenu}>Contact</Link>
</li>
</ul>
</div>
</nav>
</div>
</React.Fragment>
);
};

export default NavBar;
