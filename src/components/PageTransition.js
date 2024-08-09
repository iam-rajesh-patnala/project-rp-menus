import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const OpacityAnimation = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

// const SlideAnimation = {};

const PageTransition = ({ children }) => {
	const location = useLocation();

	return (
		// Framer Motion animation for page transitions based on the current location.
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				location={location}
				key={location.pathname}
				variants={OpacityAnimation}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ ease: "easeInOut", duration: 0.12 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
