import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	/* ───────── Feature data from INFO ───────── */
	const feature = INFO.feature || {};
	const projectImages = feature.images || [];
	const featureDescription = feature.description;
	const featureLink = feature.link;

	/* ───────── Scroll-dependent logo resize ───────── */
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = Math.round(window.pageYOffset);
			const newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	/* ───────── SEO data ───────── */
	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={INFO.homepage.photo}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* ───── Social Links ───── */}
						<div className="homepage-socials">
							<a href={INFO.socials.github} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
							</a>
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon" />
							</a>
							<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" />
							</a>
						</div>

						{/* ───── Feature / Recent Experience ───── */}
						<div className="homepage-feature-section">
							<div className="homepage-feature-image-wrapper">
								<Carousel
									showThumbs
									showStatus={false}
									infiniteLoop
									emulateTouch
									className="homepage-feature-carousel"
								>
									{projectImages.map((src, idx) => (
										<div key={idx} className="homepage-feature-slide">
											<img
												src={src}
												alt={`Project ${idx + 1}`}
												className="homepage-feature-image feature-image"
											/>
										</div>
									))}
								</Carousel>
							</div>

							<div className="homepage-feature-description">
								<p>{featureDescription}</p>
								<a href={featureLink} className="view-more-button" target="_blank" rel="noreferrer">
									View More
								</a>
							</div>
						</div>

						<div className="homepage-works">
							<Works />
						</div>

						{/* ───── Projects List ───── */}
						<div className="homepage-projects">
							<AllProjects />
						</div>

						{/* ───── Articles & Works ───── */}
						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div className="homepage-article" key={(index + 1).toString()}>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={`/article/${index + 1}`}
										/>
									</div>
								))}
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
