import "./style.css";
import "./mcmq.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

import defaultImage from "../../assets/default.webp";

//Placeholder image
import SvgImgPlaceholder from "../../utils/MenuImgPlaceholder";

// Function to get image from path
const getImage = (imagePath) => {
	try {
		return require(`../../assets/photos/${imagePath}`);
	} catch (error) {
		console.error("Image not found:", imagePath);
		return defaultImage; // Fallback to a default image
	}
};

// Caching Images
const cacheImage = (imagePath, imgSrc) => {
	try {
		localStorage.setItem(imagePath, imgSrc);
	} catch (error) {
		console.error("Error caching image:", error);
	}
};

// Retrieving Cached Images
const getCachedImage = (imagePath) => {
	try {
		return localStorage.getItem(imagePath);
	} catch (error) {
		console.error("Error retrieving cached image:", error);
		return null;
	}
};

// ----------------------------------------------------------------

// Menu Card Component
const MenuCard = ({ item }) => {
	// Javascript code Goes here
	const { link, imagePath, name } = item;

	// const [imgSrc, setImgSrc] = useState(placeholderImage);
	const [imgSrc, setImgSrc] = useState(
		getCachedImage(imagePath) ||
			`data:image/svg+xml;base64,${btoa(SvgImgPlaceholder)}`
	);

	const img = getImage(imagePath);

	useEffect(() => {
		const cachedImage = getCachedImage(imagePath);

		if (cachedImage) {
			setImgSrc(cachedImage);
		} else {
			const imgElement = new Image();
			imgElement.src = img;
			imgElement.onload = () => {
				const imgSrcUrl = imgElement.src;
				setImgSrc(imgSrcUrl);
				cacheImage(imagePath, imgSrcUrl);
			};
			imgElement.onerror = (e) => {
				setImgSrc(defaultImage);
				e.target.onerror = null; // Prevent infinite loop in case the image fails to load properly.
			};
		}
	}, [img, imagePath]);

	return (
		<div className="menu-card-container">
			<Link to={link} className="menu-card-item">
				<img
					className="menu-card-img"
					// loading="lazy"
					src={imgSrc} // Ensure you have a valid path for the default image
					alt={name || "Item Image"}
				/>
				<span className="menu-card-text">{name || "Unnamed Item"}</span>
			</Link>
		</div>
	);
};

MenuCard.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		imagePath: PropTypes.string,
		name: PropTypes.string,
	}).isRequired,
};

export default MenuCard;
