import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, index = 0 } = props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			className="enhanced-project"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<Link to={link} className="enhanced-project-link">
				<motion.div
					className="enhanced-project-container"
					whileHover={{
						y: -8,
						transition: { duration: 0.3 },
					}}
				>
					{/* Animated gradient background */}
					<div className="enhanced-project-bg"></div>

					{/* Glow effect */}
					<motion.div
						className="enhanced-project-glow"
						animate={{
							opacity: isHovered ? 1 : 0,
						}}
						transition={{ duration: 0.3 }}
					></motion.div>

					{/* Logo section with animation */}
					<motion.div
						className="enhanced-project-logo"
						whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
						transition={{ duration: 0.5 }}
					>
						<img src={logo} alt="logo" />
					</motion.div>

					{/* Title with gradient */}
					<motion.div className="enhanced-project-title">{title}</motion.div>

					{/* Description */}
					<div className="enhanced-project-description">{description}</div>

					{/* Interactive link button */}
					<motion.div
						className="enhanced-project-link-button"
						whileHover={{ x: 5 }}
						transition={{ duration: 0.2 }}
					>
						<div className="enhanced-project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="enhanced-project-link-text">{linkText}</div>
						<motion.div
							className="enhanced-project-arrow"
							animate={{
								x: isHovered ? 5 : 0,
							}}
							transition={{ duration: 0.2 }}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</motion.div>
					</motion.div>

					{/* Decorative corner elements */}
					<div className="corner-decoration corner-top-left"></div>
					<div className="corner-decoration corner-bottom-right"></div>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default Project;
