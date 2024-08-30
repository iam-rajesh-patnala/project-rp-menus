import React from "react";
import "./style.css";
// import { MdRestaurantMenu } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";

const FloatingMenuButton = ({ onClick }) => {
	return (
		// Floating Menu Button
		<div className="floating-menu-button-container">
			<div className="floating-menu-button-background">
				<button className="floating-menu-button" onClick={onClick}>
					<BiFoodMenu className="floating-menu-button-icon" />{" "}
					{/* Customize icon and size */}
					<span className="floating-menu-button-text">Menu</span>
				</button>
			</div>
		</div>
	);
};

export default FloatingMenuButton;
