import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fade in animation component
export const FadeIn = ({ children, delay = 0, duration = 0.6, direction = "up" }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const directionOffset = {
		up: { y: 40 },
		down: { y: -40 },
		left: { x: 40 },
		right: { x: -40 },
	};

	return (
		<motion.div
			ref={ref}
			initial={{
				opacity: 0,
				...directionOffset[direction],
			}}
			animate={
				inView
					? {
							opacity: 1,
							x: 0,
							y: 0,
					  }
					: {}
			}
			transition={{
				duration,
				delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};

// Scale up animation
export const ScaleIn = ({ children, delay = 0, duration = 0.5 }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={
				inView
					? {
							opacity: 1,
							scale: 1,
					  }
					: {}
			}
			transition={{
				duration,
				delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};

// Stagger children animation
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={{
				visible: {
					transition: {
						staggerChildren: staggerDelay,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
};

// Item for stagger container
export const StaggerItem = ({ children }) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
						ease: "easeOut",
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
};

// Hover scale effect
export const HoverScale = ({ children, scale = 1.05 }) => {
	return (
		<motion.div
			whileHover={{
				scale,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.98 }}
		>
			{children}
		</motion.div>
	);
};

// Floating animation
export const FloatingElement = ({ children, duration = 3 }) => {
	return (
		<motion.div
			animate={{
				y: [0, -10, 0],
			}}
			transition={{
				duration,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	);
};

// Parallax effect
export const ParallaxScroll = ({ children, speed = 0.5 }) => {
	const [ref, inView] = useInView({
		triggerOnce: false,
	});

	return (
		<motion.div
			ref={ref}
			style={{
				y: inView ? 0 : -50 * speed,
			}}
			transition={{
				duration: 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};
