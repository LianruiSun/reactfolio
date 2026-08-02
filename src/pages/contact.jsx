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

import "./styles/contact.css";

const Contact = () => {
const { language } = useLanguage();
useEffect(() => {
window.scrollTo(0, 0);
}, []);

const currentSEO = SEO.find((item) => item.page === "contact");

return (
<React.Fragment>
<Helmet>
<title>{`${language === "zh" ? "联系" : "Contact"} | ${INFO.main.title}`}</title>
<meta name="description" content={currentSEO.description} />
<meta
name="keywords"
content={currentSEO.keywords.join(", ")}
/>
</Helmet>

<div className="page-content contact-page">
<NavBar active="contact" />

<div className="contact-hero-section">
<div className="contact-hero-content">
<FadeIn direction="up" delay={0.2}>
<motion.h1 className="contact-hero-title">
{language === "zh" ? "联系我" : "Get in Touch"}
</motion.h1>
</FadeIn>
<FadeIn direction="up" delay={0.4}>
<p className="contact-hero-subtitle">
{language === "zh" ? "欢迎交流，也期待一起构建有价值的产品" : "Let's connect and create something useful together"}
</p>
</FadeIn>
</div>
</div>

<div className="contact-main-section">
<div className="contact-container">
<FadeIn direction="up" delay={0.2}>
<div className="contact-content">
<h2 className="contact-section-title">
{language === "zh" ? "与我取得联系" : "Ways to Connect with Me"}
</h2>

<p className="contact-text">
{language === "zh"
? "感谢你的关注。如果你希望交流软件工程、AI 产品或合作机会，可以直接发送邮件至 "
: "Thank you for your interest. For questions, feedback, or collaboration opportunities, email me directly at "}
<a href={`mailto:${INFO.main.email}`} className="contact-email">
{INFO.main.email}
</a>
{language === "zh" ? "。期待收到你的消息。" : ". I look forward to hearing from you."}
</p>

<div className="contact-socials-section">
<h3 className="socials-title">{language === "zh" ? "其他联系方式" : "Connect with me"}</h3>
<div className="contact-socials">
<Socials />
</div>
</div>
</div>
</FadeIn>
</div>
</div>

<Footer />
</div>
</React.Fragment>
);
};

export default Contact;
