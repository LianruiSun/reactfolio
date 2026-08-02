import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import { FadeIn, FloatingElement } from "../components/common/animationWrappers";

import INFO from "../data/user";
import SEO from "../data/seo";
import { useLanguage } from "../contexts/languageContext";

import "./styles/projects.css";

const Projects = () => {
	const { language } = useLanguage();
	const copy = language === "zh"
		? {
			title: "项目",
			subtitle: "通过持续构建，拓展技术能力并解决真实问题",
			intro: "这些项目覆盖 Web、数据、桌面应用与游戏开发，记录了我在不同工程领域中的学习与实践。",
		}
		: {
			title: "My Projects",
			subtitle: "Things I've made trying to improve myself and improve the world",
			intro: "Within the last few years, I have completed different projects in different areas. These projects have not only helped the world but also enhanced my learning and knowledge.",
		};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${language === "zh" ? "作品" : "Projects"} | ${INFO.main.title}`}</title>
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
					
					<div className="projects-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<motion.h1 className="projects-hero-title">
								{copy.title}
							</motion.h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="projects-hero-subtitle">
								{copy.subtitle}
							</p>
						</FadeIn>
					</div>
				</div>

				{/* Projects Grid Section */}
				<div className="projects-main-section">
					<div className="projects-container">
						<FadeIn direction="up" delay={0.2}>
							<p className="projects-intro">
								{copy.intro}
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
