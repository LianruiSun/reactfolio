import React from "react";
import { motion } from "framer-motion";
import "./styles/loading.css";

const Loading = () => {
	return (
		<div className="loading-container">
			<div className="loading-spinner">
				<motion.div
					className="spinner-ring"
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
				></motion.div>
				<motion.div
					className="spinner-ring"
					animate={{ rotate: -360 }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
				></motion.div>
				<motion.div
					className="spinner-ring"
					animate={{ rotate: 360 }}
					transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
				></motion.div>
				<motion.div
					className="spinner-text"
					animate={{ opacity: [0.5, 1, 0.5] }}
					transition={{ duration: 1.5, repeat: Infinity }}
				>
					Loading...
				</motion.div>
			</div>
		</div>
	);
};

export default Loading;
