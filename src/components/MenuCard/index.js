import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import "./style.css";

import defaultImage from "../../assets/default.webp";

require.context("../../assets/photos/MenuPage", true);
// const imageList = images.keys().map((image) => images(image));

const MenuCard = ({ item }) => {
	const { link, image, name, id } = item;
	return (
		<div className="menu-card" key={id}>
			<Link to={link} className="card-item">
				<img
					className="card-img"
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
