import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Components
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import ParticleBackground from "../components/common/ParticleBackground";
import Project from "../components/projects/Project";
import {
	FadeIn,
	ScaleIn,
	StaggerContainer,
	StaggerItem,
	HoverScale,
	FloatingElement,
} from "../components/common/AnimationWrappers";

// Data
import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Featured works data
	const featuredWorks = useMemo(() => INFO.featuredWorks || [], []);

	// Get projects from INFO
	const projects = useMemo(() => INFO.projects || [], []);

	// Scroll effects
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = Math.round(window.pageYOffset);
			const newLogoSize = 80 - (scroll * 4) / 10;

			// Update scroll progress for effects
			const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scroll / windowHeight) * 100;
			setScrollProgress(progress);

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
				}
			} else {
				setLogoSize(newLogoSize);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			{/* Scroll progress indicator */}
			<motion.div
				className="scroll-progress"
				style={{ scaleX: scrollProgress / 100 }}
			></motion.div>

			{/* Particle background */}
			<ParticleBackground />

			<div className="page-content enhanced-homepage">
				<NavBar active="home" />
				<div className="content-wrapper">
					{/* Animated Logo - Floating */}
					<div className="homepage-logo-container">
						<FloatingElement duration={4}>
							<Logo width={46} link={false} />
						</FloatingElement>
					</div>

					{/* Hero Section - Full Width */}
					<div className="full-width-section hero-section">
						<div className="hero-content">
							<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<FadeIn direction="left" delay={0.1}>
									<motion.div
										className="title homepage-title"
										initial={{ backgroundPosition: "0% 50%" }}
										animate={{ backgroundPosition: "100% 50%" }}
										transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
									>
										{INFO.homepage.title}
									</motion.div>
								</FadeIn>

								<FadeIn direction="left" delay={0.2}>
									<div className="homepage-tagline">{INFO.homepage.subtitle}</div>
								</FadeIn>

								<FadeIn direction="left" delay={0.3}>
									<div className="homepage-description">
										<p className="description-intro">{INFO.homepage.description.intro}</p>
										<ul className="description-highlights">
											{INFO.homepage.description.highlights.map((highlight, index) => (
												<li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
											))}
										</ul>
										<p className="description-closing">{INFO.homepage.description.closing}</p>
									</div>
								</FadeIn>

								{/* Animated CTA Buttons */}
								<FadeIn direction="left" delay={0.4}>
									<div className="cta-buttons-group">
										<HoverScale scale={1.05}>
											<motion.a
												href="#projects"
												className="cta-button cta-primary"
												whileHover={{
													boxShadow: "0 10px 40px rgba(59, 130, 246, 0.5)",
												}}
												aria-label="View my projects"
											>
												<span>View My Projects</span>
												<motion.span
													className="cta-arrow"
													animate={{ x: [0, 5, 0] }}
													transition={{ duration: 1.5, repeat: Infinity }}
												>
													→
												</motion.span>
											</motion.a>
										</HoverScale>
										<HoverScale scale={1.05}>
											<motion.a
												href="/resume.pdf"
												className="cta-button cta-secondary"
												whileHover={{
													backgroundColor: "rgba(255, 255, 255, 0.15)",
												}}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Download my resume"
											>
												<span>Download Resume</span>
												<motion.span
													className="cta-icon"
												>
													↓
												</motion.span>
											</motion.a>
										</HoverScale>
									</div>
								</FadeIn>
							</div>

							<div className="homepage-first-area-right-side">
								<ScaleIn delay={0.5}>
									<div className="homepage-image-container">
										<motion.div
											className="homepage-image-wrapper"
											whileHover={{ scale: 1.03 }}
											transition={{ duration: 0.3 }}
										>
											<div className="image-glow"></div>
											<img src={INFO.homepage.photo} alt={`${INFO.homepage.name} - ${INFO.homepage.role}`} className="homepage-image" />
										</motion.div>
										<div className="profile-info">
											<h3 className="profile-name">{INFO.homepage.name}</h3>
											<p className="profile-role">{INFO.homepage.role}</p>
										</div>
									</div>
								</ScaleIn>

								{/* Social Links with Animation - Positioned near photo */}
								<FadeIn delay={0.6}>
									<div className="homepage-socials">
									{[
										{ icon: faGithub, link: INFO.socials.github, label: "GitHub Profile" },
										{ icon: faLinkedin, link: INFO.socials.linkedin, label: "LinkedIn Profile" },
										{ icon: faMailBulk, link: `mailto:${INFO.main.email}`, label: "Email me" },
									].map((social, index) => (
										<motion.a
											key={index}
											href={social.link}
											target="_blank"
											rel="noreferrer"
											className="homepage-social-icon-wrapper"
											whileHover={{ y: -5, scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.7 + index * 0.1 }}
											aria-label={social.label}
										>
											<FontAwesomeIcon icon={social.icon} className="homepage-social-icon" />
										</motion.a>
									))}
									</div>
								</FadeIn>
							</div>
						</div>
						</div>
					</div>

				{/* Featured Works Section - Full Width */}
				<div className="full-width-section feature-full-section">
					<FadeIn direction="up" delay={0.1}>
						<div className="homepage-feature-section">
							<h2 className="section-title">Featured Works</h2>
							<StaggerContainer staggerDelay={0.2}>
								<div className="featured-works-container">
									{featuredWorks.map((work, index) => (
										<StaggerItem key={index}>
											<motion.div
												className="featured-work-card"
												whileHover={{ y: -8 }}
												transition={{ duration: 0.3 }}
											>
												<div className="homepage-feature-content">
													<ScaleIn delay={0.3}>
														<div className="homepage-feature-image-wrapper">
															<Carousel
																showThumbs
																showStatus={false}
																infiniteLoop
																emulateTouch
																autoPlay
																interval={5000}
																className="homepage-feature-carousel"
															>
																{work.images.map((src, idx) => (
																	<div key={idx} className="homepage-feature-slide">
																		<img
																			src={src}
																			alt={`${work.title} - Screenshot ${idx + 1}`}
																			className="homepage-feature-image feature-image"
																		/>
																	</div>
																))}
															</Carousel>
														</div>
													</ScaleIn>

													<FadeIn direction="right" delay={0.5}>
														<div className="homepage-feature-description">
															<div className="feature-header">
																<h3 className="feature-title">{work.title}</h3>
																<div className="feature-meta">
																	<span className="feature-company">{work.company}</span>
																	<span className="feature-timeframe">{work.timeframe}</span>
																</div>
															</div>
															
															{work.tags && work.tags.length > 0 && (
																<div className="feature-tags">
																	{work.tags.map((tag, tagIdx) => (
																		<span key={tagIdx} className="feature-tag">
																			{tag}
																		</span>
																	))}
																</div>
															)}
															
															<p>{work.description}</p>
															
															{work.link && (
																<HoverScale>
																	<a
																		href={work.link}
																		className="view-more-button"
																		target="_blank"
																		rel="noreferrer"
																	>
																		View More →
																	</a>
																</HoverScale>
															)}
														</div>
													</FadeIn>
												</div>
											</motion.div>
										</StaggerItem>
									))}
								</div>
							</StaggerContainer>
						</div>
					</FadeIn>
				</div>

				{/* Works Section - Full Width Dark */}
				<div className="full-width-section works-full-section">
					<FadeIn direction="up" delay={0.2}>
						<div className="homepage-works">
							<Works />
						</div>
					</FadeIn>
				</div>					{/* Projects Section - Full Width */}
					<div className="full-width-section projects-full-section">
						<FadeIn direction="up" delay={0.1}>
							<div className="homepage-projects" id="projects">
								<FadeIn delay={0.2}>
									<h2 className="section-title">Projects</h2>
								</FadeIn>
							<StaggerContainer staggerDelay={0.15}>
								<div className="enhanced-projects-grid">
									{projects.map((project, index) => (
										<StaggerItem key={index}>
											<Project
												logo={project.logo}
												title={project.title}
												description={project.description}
												linkText={project.linkText}
												link={project.link}
												index={index}
											/>
										</StaggerItem>
								))}
								</div>
							</StaggerContainer>
							</div>
						</FadeIn>
					</div>

					{/* Articles Section - Full Width */}
					<div className="full-width-section articles-full-section">
						<FadeIn direction="up" delay={0.1}>
							<div className="homepage-after-title">
								<FadeIn delay={0.2}>
									<h2 className="section-title">Latest Articles</h2>
								</FadeIn>
							<StaggerContainer staggerDelay={0.1}>
								<div className="homepage-articles">
									{myArticles.map((article, index) => (
										<StaggerItem key={index}>
											<motion.div
												className="homepage-article"
												whileHover={{ y: -5 }}
												transition={{ duration: 0.2 }}
											>
												<Article
													date={article().date}
													title={article().title}
													description={article().description}
													link={`/article/${index + 1}`}
												/>
											</motion.div>
										</StaggerItem>
									))}
								</div>
							</StaggerContainer>
							</div>
						</FadeIn>
					</div>

				</div>
			</div>

			{/* Footer - Full Width */}
			<Footer />
		</>
	);
};

export default Homepage;

