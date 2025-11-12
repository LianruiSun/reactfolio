import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { FadeIn, FloatingElement } from "../components/common/animationWrappers";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content about-page">
				<NavBar active="about" />
				
				{/* Hero Section - Full Width */}
				<div className="about-hero-section">
					<div className="about-logo-container">
						<FloatingElement duration={4}>
							<Logo width={46} />
						</FloatingElement>
					</div>

					<div className="about-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<motion.h1 className="about-hero-title">
								About Me
							</motion.h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="about-hero-subtitle">
								Passionate developer dedicated to creating innovative solutions
							</p>
						</FadeIn>
					</div>
				</div>

				{/* Main Content - Full Width */}
				<div className="about-main-section">
					<div className="about-container">
						<div className="about-main">
							<FadeIn direction="left" delay={0.2}>
								<div className="about-content-side">
									<h2 className="about-title">
										{INFO.about.title}
									</h2>

									<p className="about-description">
										{INFO.about.description}
									</p>
								</div>
							</FadeIn>

							<FadeIn direction="right" delay={0.4}>
								<div className="about-image-side">
									<motion.div 
										className="about-image-wrapper"
										whileHover={{ scale: 1.05, rotate: 0 }}
										transition={{ duration: 0.3 }}
									>
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</motion.div>

									<div className="about-socials">
										<Socials />
									</div>
								</div>
							</FadeIn>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</div>

				{/* Footer */}
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default About;
