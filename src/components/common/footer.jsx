import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
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
							Building innovative solutions with modern technologies
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
						<h4 className="footer-nav-title">Navigate</h4>
						<ul className="footer-nav-list">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/articles">Articles</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
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
						<h4 className="footer-social-title">Connect</h4>
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
						<h4 className="footer-contact-title">Get in Touch</h4>
						<a href={`mailto:${INFO.main.email}`} className="footer-email">
							{INFO.main.email}
						</a>
						<p className="footer-cta">Let's create something amazing together!</p>
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
						© {currentYear} {INFO.main.name}. Made with{" "}
						<FontAwesomeIcon icon={faHeart} className="footer-heart" /> using React & Framer
						Motion
					</p>
					<p className="footer-rights">All rights reserved</p>
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
