import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import "./style.css";

import defaultImage from "../../assets/default.webp";

// Importing Images
require.context("../../assets/photos/MenuPage/Veg", true);
require.context("../../assets/photos/MenuPage/NonVeg", true);
require.context("../../assets/photos/MenuPage/Desserts", true);
require.context("../../assets/photos/MenuPage/Beverages", true);


// ----------------------------------------------------------------

// Menu Card Component
const MenuCard = ({ item }) => {
	// Javascript code Goes here

	const { link, image, name } = item;

	return (
		<div className="menu-card">
			<Link to={link} className="card-item">
				<img
					className="card-img"
					loading="lazy"
					src={image || defaultImage} // Ensure you have a valid path for the default image
					alt={name || "Veg Menu Item"}
					onError={(e) => {
						e.target.src = defaultImage; // Set the fallback image
						e.target.onerror = null; // Prevent infinite loop in case the fallback image fails
					}}
				/>
				<span className="card-text">{name || "Unnamed Item"}</span>
			</Link>
		</div>
	);
};

MenuCard.propTypes = {
	item: PropTypes.shape({
		link: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
	}).isRequired,
};

export default MenuCard;
