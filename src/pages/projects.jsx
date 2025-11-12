import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import { FadeIn, FloatingElement } from "../components/common/animationWrappers";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content projects-page">
				<NavBar active="projects" />
				
				{/* Hero Section */}
				<div className="projects-hero-section">
					<div className="projects-logo-container">
						<FloatingElement duration={4}>
							<Logo width={46} />
						</FloatingElement>
					</div>
					
					<div className="projects-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<motion.h1 className="projects-hero-title">
								My Projects
							</motion.h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="projects-hero-subtitle">
								Things I've made trying to improve myself and improve the world
							</p>
						</FadeIn>
					</div>
				</div>

				{/* Projects Grid Section */}
				<div className="projects-main-section">
					<div className="projects-container">
						<FadeIn direction="up" delay={0.2}>
							<p className="projects-intro">
								Within the last few years, I have completed different projects in different areas. 
								These projects have not only helped the world but also enhanced my learning and knowledge.
							</p>
						</FadeIn>

						<FadeIn direction="up" delay={0.4}>
							<div className="projects-list">
								<AllProjects />
							</div>
						</FadeIn>
					</div>
				</div>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Projects;
