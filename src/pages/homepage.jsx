import React, { useEffect } from "react";
import Seo from "../components/common/seo";
import { faArrowDown, faArrowRight, faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
		pageTitle: "Darcy (Lianrui) Sun — Software Engineer, AI Applications",
		metaDescription: "Lianrui (Darcy) Sun is a software engineer who turns generative AI into reliable production products, currently shipping model integrations, billing reliability, and developer SDKs at Astorie.",
		current: "Currently",
		explore: "Explore selected work",
		resume: "Resume",
		selectedWork: "Selected work",
		caseStudies: "case studies",
		workDescription: "Four projects, one thread: getting generative AI into real products and keeping it reliable once it is there.",
		case: "Case",
		liveProduct: "Live product",
		experienceEyebrow: "02 / Experience",
		experience: "Experience",
		experienceDescription: "From full-stack engineering to production AI systems, with hands-on product ownership along the way.",
		rangeEyebrow: "03 / Working range",
		rangeTitle: "Fast with agents, careful in production.",
		rangeDescription: "These capabilities are grounded in the work above, not presented as standalone claims.",
		practiceEyebrow: "04 / How I ship",
		practiceTitle: "Agents for speed, release gates for reliability.",
		practiceDescription: "Most of my code is written with parallel coding agents. What makes that safe is the process around them: explicit plans, isolated changes, and checks that every release has to pass.",
		resumeEyebrow: "Resume",
		resumeTitle: "The one-page version of everything above.",
		image: "Image",
		primaryVisual: "primary visual",
		productScreen: "product screen",
		visual: "visual",
		emailLabel: "Email",
		social: { github: "GitHub Profile", linkedin: "LinkedIn Profile", email: "Email me" },
	},
	zh: {
		pageTitle: "孙镰瑞（Darcy Sun）— 软件工程师｜AI 应用",
		metaDescription: "孙镰瑞（Darcy Sun）是把生成式 AI 做成可靠生产产品的软件工程师，目前在 Astorie 负责模型接入、计费可靠性和开发者 SDK。",
		current: "当前",
		explore: "查看代表项目",
		resume: "简历",
		selectedWork: "代表项目",
		caseStudies: "个项目案例",
		workDescription: "四个项目，一条主线：把生成式 AI 放进真实产品，并让它上线后依然可靠。",
		case: "案例",
		liveProduct: "产品链接",
		experienceEyebrow: "02 / 工作经历",
		experience: "工作经历",
		experienceDescription: "从全栈工程到生产级 AI 系统，过程中也亲手负责过产品。",
		rangeEyebrow: "03 / 能力范围",
		rangeTitle: "用 Agent 求快，在生产上求稳。",
		rangeDescription: "这些能力都来自上面项目中的真实设计、开发、验证与交付。",
		practiceEyebrow: "04 / 我如何交付",
		practiceTitle: "Agent 负责速度，上线关卡负责可靠。",
		practiceDescription: "我的大部分代码由并行的编程 Agent 完成。让这件事可靠的是它周围的流程：明确的方案、隔离的改动，以及每次上线都必须通过的检查。",
		resumeEyebrow: "简历",
		resumeTitle: "上面所有内容的一页版本。",
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

				{study.links?.length > 0 && (
					<div className="case-study-links">
						<span>{ui.liveProduct}</span>
						{study.links.map((link) => (
							<a key={link.href} href={link.href} target="_blank" rel="noreferrer">
								{link.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
							</a>
						))}
					</div>
				)}
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
		if (!window.location.hash) {
			window.scrollTo(0, 0);
			return undefined;
		}
		// Wait for the lazy-loaded page and its entrance animations to settle before jumping to the anchor.
		const timer = window.setTimeout(() => {
			document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "instant", block: "start" });
		}, 300);
		return () => window.clearTimeout(timer);
	}, []);

	return (
		<>
			<Seo fullTitle={ui.pageTitle} description={ui.metaDescription} path="/" />

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
