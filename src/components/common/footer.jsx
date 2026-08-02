import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import { useLanguage } from "../../contexts/languageContext";

import "./styles/footer.css";

const FOOTER_COPY = {
	en: {
		tagline: "Engineer-first AI product builder",
		navigate: "Navigate",
		connect: "Connect",
		contact: "Get in touch",
		cta: "Let's build something useful together.",
		rights: "All rights reserved",
		builtWith: "Built with React & Framer Motion",
		nav: ["Home", "About", "Work", "Notes", "Contact"],
	},
	zh: {
		tagline: "以工程能力构建 AI 产品",
		navigate: "导航",
		connect: "关注",
		contact: "联系我",
		cta: "期待一起构建真正有用的产品。",
		rights: "保留所有权利",
		builtWith: "使用 React 与 Framer Motion 构建",
		nav: ["首页", "关于", "项目", "文章", "联系"],
	},
};

const Footer = () => {
	const { language } = useLanguage();
	const copy = FOOTER_COPY[language];
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="modern-footer">
			<div className="footer-content">
				{/* Top Section */}
				<div className="footer-top">
					<div className="footer-brand">
						<motion.h3
							className="footer-logo"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							{INFO.main.name}
						</motion.h3>
						<motion.p
							className="footer-tagline"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							{copy.tagline}
						</motion.p>
					</div>

					{/* Navigation Links */}
					<motion.div
						className="footer-nav"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4 className="footer-nav-title">{copy.navigate}</h4>
						<ul className="footer-nav-list">
							<li>
								<Link to="/">{copy.nav[0]}</Link>
							</li>
							<li>
								<Link to="/about">{copy.nav[1]}</Link>
							</li>
							<li>
								<Link to="/projects">{copy.nav[2]}</Link>
							</li>
							<li>
								<Link to="/articles">{copy.nav[3]}</Link>
							</li>
							<li>
								<Link to="/contact">{copy.nav[4]}</Link>
							</li>
						</ul>
					</motion.div>

					{/* Social Links */}
					<motion.div
						className="footer-social"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="footer-social-title">{copy.connect}</h4>
						<div className="footer-social-links">
							<motion.a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								whileHover={{ y: -3, scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="footer-social-icon"
							>
								<FontAwesomeIcon icon={faGithub} />
							</motion.a>
							<motion.a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
								whileHover={{ y: -3, scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="footer-social-icon"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</motion.a>
							<motion.a
								href={`mailto:${INFO.main.email}`}
								whileHover={{ y: -3, scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="footer-social-icon"
							>
								<FontAwesomeIcon icon={faEnvelope} />
							</motion.a>
						</div>
					</motion.div>

					{/* Quick Contact */}
					<motion.div
						className="footer-contact"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h4 className="footer-contact-title">{copy.contact}</h4>
						<a href={`mailto:${INFO.main.email}`} className="footer-email">
							{INFO.main.email}
						</a>
						<p className="footer-cta">{copy.cta}</p>
					</motion.div>
				</div>

				{/* Divider */}
				<motion.div
					className="footer-divider"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
				></motion.div>

				{/* Bottom Section */}
				<motion.div
					className="footer-bottom"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<p className="footer-copyright">
						© {currentYear} {INFO.main.name}. {copy.builtWith}{" "}
						<FontAwesomeIcon icon={faHeart} className="footer-heart" />
					</p>
					<p className="footer-rights">{copy.rights}</p>
				</motion.div>

				{/* Scroll to Top Button */}
				<motion.button
					className="scroll-to-top"
					onClick={scrollToTop}
					whileHover={{ y: -3, scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<FontAwesomeIcon icon={faArrowUp} />
				</motion.button>
			</div>
		</footer>
	);
};

export default Footer;
