import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./index.css";
import BackToCategories from "../../../utils/BackToCategories";
import { v4 as uuid } from "uuid";
import mdb from "../../../data/MenuData/menu.json";

// Menu Card Component
import MenuCard from "../../../components/MenuCard";

// Main Veg Component
const Veg = () => {
	const vegData =
		mdb[0]?.veg.map((item) => ({
			...item,
			id: uuid(),
		})) || []; // Optional chaining to prevent errors

	return (
		<section className="veg-menu-page">
			<MenuHeader title="Choose Menu" />
			<div className="veg-menu-cards-container">
				{vegData.length > 0 ? (
					vegData.map((item) => (
						<MenuCard key={item.id || item.name} item={item} />
					))
				) : (
					<NoDataMessage message="No menu items available" />
				)}
			</div>
			<BackToCategories />
		</section>
	);
};

// Header Component for Menu Title
const MenuHeader = ({ title }) => (
	<header className="menu-header">
		<h1>{title}</h1>
	</header>
);

MenuHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

// Component for Displaying No Data Message
const NoDataMessage = ({ message }) => (
	<p className="no-data-message">{message}</p>
);

NoDataMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

// Component for Displaying Error Message (not used in this snippet, but defined)
const ErrorMessage = ({ message }) => (
	<p className="error-message">{message}</p>
);

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Veg;
