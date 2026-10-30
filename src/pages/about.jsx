import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import { FadeIn } from "../components/common/animationWrappers";

import INFO from "../data/user";
import SEO from "../data/seo";
import { useLanguage } from "../contexts/languageContext";

import "./styles/about.css";

const About = () => {
	const { language } = useLanguage();
	const copy = language === "zh"
		? {
			heading: "关于我",
			subtitle: "把生成式 AI 做成可靠的生产产品",
			title: "我是孙镰瑞（Darcy Sun），在纽约攻读计算机科学硕士的软件工程师。",
			description: "我在纽约大学攻读计算机科学硕士，同时在 AI 视频画布 Astorie 兼职担任全栈工程师：接入图像和视频生成模型、保证生成计费正确、构建公开 SDK，并维护 astorie.ai 背后的内容平台。在此之前，我在百度智能云设计多 Agent 工作流，创办过 AI 餐饮点评 SaaS，也在 WPI 带队完成了双模式 AI 视障辅助 App。我的大部分代码由并行的编程 Agent 完成，再用方案、测试和上线检查保证这种速度是可靠的。",
		}
		: {
			heading: "About Me",
			subtitle: "Turning generative AI into reliable production products",
			title: INFO.about.title,
			description: INFO.about.description,
		};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${language === "zh" ? "关于" : "About"} | ${INFO.main.title}`}</title>
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


					<div className="about-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<motion.h1 className="about-hero-title">
								{copy.heading}
							</motion.h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="about-hero-subtitle">
								{copy.subtitle}
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
										{copy.title}
									</h2>

									<p className="about-description">
										{copy.description}
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
