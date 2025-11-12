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

import "./styles/contact.css";

const Contact = () => {
useEffect(() => {
window.scrollTo(0, 0);
}, []);

const currentSEO = SEO.find((item) => item.page === "contact");

return (
<React.Fragment>
<Helmet>
<title>{`Contact | ${INFO.main.title}`}</title>
<meta name="description" content={currentSEO.description} />
<meta
name="keywords"
content={currentSEO.keywords.join(", ")}
/>
</Helmet>

<div className="page-content contact-page">
<NavBar active="contact" />

<div className="contact-hero-section">
<div className="contact-logo-container">
<FloatingElement duration={4}>
<Logo width={46} />
</FloatingElement>
</div>

<div className="contact-hero-content">
<FadeIn direction="up" delay={0.2}>
<motion.h1 className="contact-hero-title">
Get in Touch
</motion.h1>
</FadeIn>
<FadeIn direction="up" delay={0.4}>
<p className="contact-hero-subtitle">
Let''s connect and create something amazing together
</p>
</FadeIn>
</div>
</div>

<div className="contact-main-section">
<div className="contact-container">
<FadeIn direction="up" delay={0.2}>
<div className="contact-content">
<h2 className="contact-section-title">
Let''s Get in Touch: Ways to Connect with Me
</h2>

<p className="contact-text">
Thank you for your interest in getting in touch with me. 
I welcome your feedback, questions, and suggestions. 
If you have a specific question or comment, please feel 
free to email me directly at{" "}
<a href={`mailto:${INFO.main.email}`} className="contact-email">
{INFO.main.email}
</a>
. Thanks again for your interest, and I look forward to 
hearing from you!
</p>

<div className="contact-socials-section">
<h3 className="socials-title">Connect with me</h3>
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
