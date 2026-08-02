import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../contexts/languageContext";

import "./styles/navBar.css";

const NAV_COPY = {
	en: {
		home: "Home",
		about: "About",
		projects: "Work",
		articles: "Notes",
		contact: "Contact",
		menuLabel: "Toggle navigation menu",
		switchLabel: "切换至中文",
	},
	zh: {
		home: "首页",
		about: "关于",
		projects: "项目",
		articles: "文章",
		contact: "联系",
		menuLabel: "展开或收起导航菜单",
		switchLabel: "Switch to English",
	},
};

const NAV_ITEMS = [
	{ key: "home", to: "/" },
	{ key: "about", to: "/about" },
	{ key: "projects", to: "/projects" },
	{ key: "articles", to: "/articles" },
	{ key: "contact", to: "/contact" },
];

const NavBar = ({ active }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { language, toggleLanguage } = useLanguage();
	const copy = NAV_COPY[language];

	return (
		<div className="nav-container">
			<nav className="navbar" aria-label={language === "zh" ? "主导航" : "Primary navigation"}>
				<div className="nav-background">
					<ul className={isMenuOpen ? "nav-list open" : "nav-list"}>
						{NAV_ITEMS.map((item) => (
							<li className={active === item.key ? "nav-item active" : "nav-item"} key={item.key}>
								<Link to={item.to} onClick={() => setIsMenuOpen(false)}>{copy[item.key]}</Link>
							</li>
						))}
					</ul>

					<div className="nav-actions">
						<button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={copy.switchLabel}>
							<span lang={language === "zh" ? "en" : "zh-CN"}>{language === "zh" ? "EN" : "中文"}</span>
						</button>
						<button
							className="hamburger-menu"
							type="button"
							onClick={() => setIsMenuOpen((open) => !open)}
							aria-label={copy.menuLabel}
							aria-expanded={isMenuOpen}
						>
							<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
							<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
							<span className={isMenuOpen ? "hamburger-line open" : "hamburger-line"}></span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
