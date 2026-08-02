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
			subtitle: "以工程能力构建可靠、真正解决问题的产品",
			title: "我是孙镰瑞，目前在纽约大学攻读计算机科学硕士。",
			description: "我的经历横跨全栈工程、AI 应用开发与企业 AI 产品。作为工程师，我独立构建过多租户餐饮 SaaS，也带领团队完成过结合云端视觉大模型与端侧小模型的视障辅助 App；作为产品经理，我目前在百度智能云负责 Hogee 舆情分析数字员工，推进 GUI SaaS、LUI、报告生成和 Bad Case 迭代。我关注的不只是模型能做什么，更关心它如何进入真实业务流程，并形成可验证、可交付的产品。",
		}
		: {
			heading: "About Me",
			subtitle: "Passionate developer dedicated to creating innovative solutions",
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
