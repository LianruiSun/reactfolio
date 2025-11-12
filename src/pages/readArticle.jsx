import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
const navigate = useNavigate();
let { slug } = useParams();

const article = myArticles[slug - 1];

useEffect(() => {
window.scrollTo(0, 0);
}, [article]);

ArticleStyle = styled.div`
${article().style}
`;

return (
<React.Fragment>
<Helmet>
<title>{`${article().title} | ${INFO.main.title}`}</title>
<meta name="description" content={article().description} />
<meta name="keywords" content={article().keywords.join(", ")} />
</Helmet>

<div className="page-content read-article-page">
<NavBar />

<section className="read-article-hero-section">
<div className="read-article-logo-container">
<Logo width={46} />
</div>

<motion.div 
className="read-article-back"
onClick={() => navigate(-1)}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.95 }}
>
<img
src="../back-button.png"
alt="back"
className="read-article-back-button"
/>
</motion.div>

<motion.div 
className="read-article-hero-content"
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
<div className="read-article-date-badge">
{article().date}
</div>
<h1 className="read-article-hero-title">
{article().title}
</h1>
</motion.div>
</section>

<section className="read-article-main-section">
<motion.div 
className="read-article-container"
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
>
<div className="read-article-body">
<ArticleStyle>{article().body}</ArticleStyle>
</div>
</motion.div>
</section>

<Footer />
</div>
</React.Fragment>
);
};

export default ReadArticle;
