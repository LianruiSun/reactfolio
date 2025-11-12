import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<motion.div 
			className="article-card"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<Link to={link} className="article-card-link">
				<div className="article-card-container">
					<div className="article-card-header">
						<div className="article-card-date">
							<FontAwesomeIcon icon={faCalendar} className="article-date-icon" />
							{date}
						</div>
					</div>
					
					<h3 className="article-card-title">{title}</h3>
					<p className="article-card-description">{description}</p>
					
					<div className="article-card-link-button">
						Read Article
						<FontAwesomeIcon icon={faChevronRight} className="article-arrow-icon" />
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default Article;
