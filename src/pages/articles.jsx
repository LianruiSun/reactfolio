import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Article from "../components/articles/article";
import { FadeIn } from "../components/common/animationWrappers";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";
import { useLanguage } from "../contexts/languageContext";

import "./styles/articles.css";

const Articles = () => {
	const { language } = useLanguage();
	const copy = language === "zh"
		? {
			title: "技术文章与项目记录",
			description: "记录我对软件工程、AI 系统与项目实践的思考。",
		}
		: {
			title: INFO.articles.title,
			description: INFO.articles.description,
		};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${language === "zh" ? "文章" : "Articles"} | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content articles-page">
				<NavBar active="articles" />
				
				<div className="articles-hero-section">

					
					<div className="articles-hero-content">
						<FadeIn direction="up" delay={0.2}>
							<motion.h1 className="articles-hero-title">
								{copy.title}
							</motion.h1>
						</FadeIn>
						<FadeIn direction="up" delay={0.4}>
							<p className="articles-hero-subtitle">
								{copy.description}
							</p>
						</FadeIn>
					</div>
				</div>

				<div className="articles-main-section">
					<div className="articles-container">
						<FadeIn direction="up" delay={0.2}>
							<div className="articles-timeline">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article(language).date}
											title={article(language).title}
											description={article(language).description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</FadeIn>
					</div>
				</div>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Articles;
