import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fade in animation component (optimized with useMemo)
export const FadeIn = ({ children, delay = 0, duration = 0.6, direction = "up" }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: "50px", // Start animation slightly before element enters viewport
	});

	const directionOffset = useMemo(() => ({
		up: { y: 40 },
		down: { y: -40 },
		left: { x: 40 },
		right: { x: -40 },
	}), []);

	const initial = useMemo(() => ({
		opacity: 0,
		...directionOffset[direction],
	}), [direction, directionOffset]);

	const animate = useMemo(() => 
		inView ? { opacity: 1, x: 0, y: 0 } : {},
	[inView]);

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
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

// Scale up animation (optimized)
export const ScaleIn = ({ children, delay = 0, duration = 0.5 }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: "50px",
	});

	const animate = useMemo(() => 
		inView ? { opacity: 1, scale: 1 } : {},
	[inView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={animate}
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

// Stagger children animation (optimized)
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: "50px",
	});

	const variants = useMemo(() => ({
		visible: {
			transition: {
				staggerChildren: staggerDelay,
			},
		},
	}), [staggerDelay]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

// Item for stagger container (memoized variants)
export const StaggerItem = ({ children }) => {
	const variants = useMemo(() => ({
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	}), []);

	return (
		<motion.div variants={variants}>
			{children}
		</motion.div>
	);
};

// Hover scale effect (memoized)
export const HoverScale = ({ children, scale = 1.05 }) => {
	const hoverProps = useMemo(() => ({
		whileHover: {
			scale,
			transition: { duration: 0.2 },
		},
		whileTap: { scale: 0.98 },
	}), [scale]);

	return (
		<motion.div {...hoverProps}>
			{children}
		</motion.div>
	);
};

// Floating animation (memoized)
export const FloatingElement = ({ children, duration = 3 }) => {
	const animateProps = useMemo(() => ({
		animate: {
			y: [0, -10, 0],
		},
		transition: {
			duration,
			repeat: Infinity,
			ease: "easeInOut",
		},
	}), [duration]);

	return (
		<motion.div {...animateProps}>
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
