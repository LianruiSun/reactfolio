import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faArrowDown, faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/common/animationWrappers";
import { useLanguage } from "../contexts/languageContext";
import INFO from "../data/user";
import PORTFOLIO_EN from "../data/portfolio";
import PORTFOLIO_ZH from "../data/portfolio.zh";

import "./styles/homepage.css";

const UI_COPY = {
	en: {
		pageTitle: "Darcy Sun — Software Engineer & AI Product Builder",
		metaDescription: "Lianrui (Darcy) Sun is a software engineer building full-stack AI applications, with product management experience owning a ToB media-monitoring SaaS across GUI and LUI Agent experiences at Baidu AI Cloud.",
		current: "Currently",
		explore: "Explore selected work",
		resume: "SDE resume",
		selectedWork: "Selected work",
		caseStudies: "case studies",
		workDescription: "Engineering-led work across full-stack AI systems, complemented by ownership of a ToB media-monitoring SaaS at Baidu AI Cloud.",
		case: "Case",
		experienceEyebrow: "02 / Experience",
		experience: "Experience",
		experienceDescription: "A software engineering path complemented by hands-on ownership of an enterprise AI product at Baidu.",
		rangeEyebrow: "03 / Working range",
		rangeTitle: "Engineering first, informed by product ownership.",
		rangeDescription: "These capabilities are grounded in the work above, not presented as standalone claims.",
		practiceEyebrow: "04 / Technical product practice",
		practiceTitle: "Product decisions grounded in system behavior.",
		practiceDescription: "My Baidu work adds a ToB product lens to an engineering foundation: iterate the core GUI SaaS, translate its capabilities into an LUI Agent experience, prototype key states, and validate the data path.",
		resumeEyebrow: "Two ways to go deeper",
		resumeTitle: "Explore the work from an engineering or product lens.",
		pmResume: "PM resume",
		image: "Image",
		primaryVisual: "primary visual",
		productScreen: "product screen",
		visual: "visual",
		emailLabel: "Email",
		social: { github: "GitHub Profile", linkedin: "LinkedIn Profile", email: "Email me" },
	},
	zh: {
		pageTitle: "Darcy Sun — 软件工程师与 AI 产品构建者",
		metaDescription: "孙镰瑞（Darcy Sun）专注于全栈 AI 应用，目前在百度智能云负责 Hogee 企业舆情监测 SaaS 及其 Agent 工作流。",
		current: "当前",
		explore: "查看代表项目",
		resume: "工程简历",
		selectedWork: "代表项目",
		caseStudies: "个项目案例",
		workDescription: "用三个项目说明我如何把工程实现、模型能力与产品判断连接起来。",
		case: "案例",
		experienceEyebrow: "02 / 工作经历",
		experience: "工作经历",
		experienceDescription: "从全栈工程与 AI 应用开发，到企业 AI 产品设计与交付。",
		rangeEyebrow: "03 / 技术与产品能力",
		rangeTitle: "既能把系统做出来，也能判断 AI 应该用在哪里。",
		rangeDescription: "这些能力都来自真实项目中的设计、开发、验证与交付。",
		practiceEyebrow: "04 / AI 产品方法",
		practiceTitle: "关键不是接入一个模型，而是设计一条可验证的完整链路。",
		practiceDescription: "从场景拆解和交互选型开始，明确平台计算、模型生成与人工确认的边界，再通过数据、证据和 Bad Case 持续验证。",
		resumeEyebrow: "两份简历",
		resumeTitle: "从工程与 AI 产品两个角度了解我的完整经历。",
		pmResume: "产品简历",
		image: "图片",
		primaryVisual: "主视觉",
		productScreen: "产品界面",
		visual: "项目图片",
		emailLabel: "邮箱",
		social: { github: "GitHub 主页", linkedin: "LinkedIn 主页", email: "发送邮件" },
	},
};

const SocialLinks = ({ ui }) => (
	<div className="homepage-socials">
		<a href={INFO.socials.github} target="_blank" rel="noreferrer" aria-label={ui.social.github}>
			<FontAwesomeIcon icon={faGithub} />
			<span>GitHub</span>
		</a>
		<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" aria-label={ui.social.linkedin}>
			<FontAwesomeIcon icon={faLinkedin} />
			<span>LinkedIn</span>
		</a>
		<a href={`mailto:${INFO.main.email}`} aria-label={ui.social.email}>
			<FontAwesomeIcon icon={faEnvelope} />
			<span>{ui.emailLabel}</span>
		</a>
	</div>
);

const CaseStudyVisual = ({ study, ui }) => {
	const slots = study.images.length > 0 ? study.images : Array.from({ length: study.imageSlots || 2 });
	const isLeadWithPair = study.visualLayout === "lead-with-pair" && study.images.length >= 3;

	if (isLeadWithPair) {
		return (
			<div className="case-study-visual visual-layout-lead-with-pair">
				<img src={study.images[0]} alt={`${study.title} ${ui.primaryVisual}`} loading="lazy" />
				<div className="case-study-paired-frame">
					{study.images.slice(1, 3).map((image, index) => (
						<img key={image} src={image} alt={`${study.title} ${ui.productScreen} ${index + 1}`} loading="lazy" />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className={`case-study-visual ${study.images.length === 0 ? "has-placeholders" : ""} ${study.visualLayout ? `visual-layout-${study.visualLayout}` : ""}`}>
			{slots.map((image, index) =>
				image ? (
					<img key={image} src={image} alt={`${study.title} ${ui.visual} ${index + 1}`} loading="lazy" />
				) : (
					<div className="case-study-placeholder" key={`placeholder-${index}`}>
						<span>{ui.image} {String(index + 1).padStart(2, "0")}</span>
						<small>{study.imagePlaceholder}</small>
					</div>
				)
			)}
		</div>
	);
};

const CaseStudy = ({ study, ui }) => (
	<article className="case-study">
		<div className="case-study-heading">
			<div className="case-study-eyebrow">
				<span>{ui.case} {study.index}</span>
				<span>{study.label}</span>
			</div>
			<h3>{study.title}</h3>
			<div className="case-study-meta">
				<span>{study.role}</span>
				<span>{study.timeframe}</span>
			</div>
		</div>

		<div className="case-study-grid">
			<div className="case-study-content">
				<p className="case-study-summary">{study.summary}</p>

				<div className="case-study-impact">
					<h4>{study.impactLabel}</h4>
					<div className="case-study-metrics">
						{study.metrics.map((metric) => (
							<div className="case-study-metric" key={`${metric.value}-${metric.label}`}>
								<strong>{metric.value}</strong>
								<span>{metric.label}</span>
							</div>
						))}
					</div>
				</div>

				<div className="case-study-lenses">
					{study.focusSections.map((section, index) => (
						<div className={index === 0 ? "case-study-lens-primary" : "case-study-lens-secondary"} key={section.title}>
							<h4>{section.title}</h4>
							<ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
						</div>
					))}
				</div>

				<div className="case-study-stack">
					{study.stack.map((item) => <span key={item}>{item}</span>)}
				</div>
			</div>
			<CaseStudyVisual study={study} ui={ui} />
		</div>
	</article>
);

const Homepage = () => {
	const { language } = useLanguage();
	const portfolio = language === "zh" ? PORTFOLIO_ZH : PORTFOLIO_EN;
	const ui = UI_COPY[language];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>{ui.pageTitle}</title>
				<meta
					name="description"
					content={ui.metaDescription}
				/>
				<meta name="keywords" content="Darcy Sun, Lianrui Sun, Software Engineer, AI Product, Agent, React, TypeScript" />
			</Helmet>

			<div className="page-content enhanced-homepage">
				<NavBar active="home" />

				<main className="content-wrapper">
					<section className="full-width-section hero-section">
						<div className="hero-content homepage-hero-grid">
							<div className="hero-copy">
								<FadeIn direction="up" delay={0.1}>
									<p className="eyebrow">{portfolio.profile.eyebrow}</p>
									<h1>{portfolio.profile.name}</h1>
									<div className="hero-current-role">
										<span>{ui.current}</span>
										<div>
											<strong>{portfolio.profile.currentRole}</strong>
											<p>{portfolio.profile.currentCompany}</p>
										</div>
									</div>
									<p className="hero-subtitle">{portfolio.profile.subtitle}</p>
									<div className="hero-actions">
										<a className="button button-primary" href="#selected-work">
											{ui.explore} <FontAwesomeIcon icon={faArrowRight} />
										</a>
										<a className="button button-secondary" href="/Darcy_Sun_SDE.pdf" target="_blank" rel="noreferrer">
											{ui.resume} <FontAwesomeIcon icon={faArrowDown} />
										</a>
									</div>
								</FadeIn>
							</div>

							<FadeIn direction="up" delay={0.3}>
								<aside className="hero-profile-card">
									<img src={portfolio.profile.photo} alt="Darcy Sun" />
									<div className="hero-profile-info">
										<strong>{portfolio.profile.role}</strong>
										<span>{portfolio.profile.location}</span>
									</div>
									<SocialLinks ui={ui} />
								</aside>
							</FadeIn>
						</div>
					</section>

					<section className="full-width-section work-section" id="selected-work">
						<div className="section-inner">
							<div className="section-intro work-intro">
								<div className="work-title-row">
									<h2>{ui.selectedWork}</h2>
									<span>{portfolio.caseStudies.length} {ui.caseStudies}</span>
								</div>
								<p>{ui.workDescription}</p>
							</div>
							<div className="case-studies">
								{portfolio.caseStudies.map((study) => <CaseStudy key={study.index} study={study} ui={ui} />)}
							</div>
						</div>
					</section>

					<section className="full-width-section experience-section">
						<div className="section-inner">
							<div className="section-intro">
								<p className="eyebrow">{ui.experienceEyebrow}</p>
								<h2>{ui.experience}</h2>
								<p className="section-description">{ui.experienceDescription}</p>
							</div>
							<div className="experience-list">
								{portfolio.experience.map((item) => (
									<div className="experience-item" key={`${item.company}-${item.timeframe}`}>
										<span className="experience-time">{item.timeframe}</span>
										<div><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.focus}</p></div>
										<span className="experience-location">{item.location}</span>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="full-width-section capabilities-section">
						<div className="section-inner">
							<div className="section-intro">
								<p className="eyebrow">{ui.rangeEyebrow}</p>
								<h2>{ui.rangeTitle}</h2>
								<p className="section-description">{ui.rangeDescription}</p>
							</div>
							<StaggerContainer staggerDelay={0.1}>
								<div className="capabilities-grid">
									{portfolio.capabilities.map((capability) => (
										<StaggerItem key={capability.index}>
											<article className="capability-card">
												<span className="card-index">{capability.index}</span>
												<h3>{capability.title}</h3>
												<p>{capability.description}</p>
												<strong>{capability.evidence}</strong>
											</article>
										</StaggerItem>
									))}
								</div>
							</StaggerContainer>
						</div>
					</section>

					<section className="full-width-section thinking-section">
						<div className="section-inner thinking-grid">
							<div className="section-intro">
								<p className="eyebrow">{ui.practiceEyebrow}</p>
								<h2>{ui.practiceTitle}</h2>
								<p className="section-description">{ui.practiceDescription}</p>
							</div>
							<div className="thinking-list">
								{portfolio.thinking.map((item) => (
									<div className="thinking-item" key={item.index}>
										<span className="card-index">{item.index}</span>
										<div><h3>{item.title}</h3><p>{item.text}</p><small>{item.evidence}</small></div>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className="resume-section">
						<div className="resume-inner">
							<div><p className="eyebrow">{ui.resumeEyebrow}</p><h2>{ui.resumeTitle}</h2></div>
							<div className="resume-actions">
								<a className="button button-primary" href="/Darcy_Sun_SDE.pdf" target="_blank" rel="noreferrer">{ui.resume} <FontAwesomeIcon icon={faArrowDown} /></a>
								<a className="button button-secondary" href="/Darcy_Sun_PM.pdf" target="_blank" rel="noreferrer">{ui.pmResume} <FontAwesomeIcon icon={faArrowDown} /></a>
							</div>
						</div>
					</section>
				</main>
			</div>

			<Footer />
		</>
	);
};

export default Homepage;
