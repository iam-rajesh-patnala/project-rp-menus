import React from "react";
import "./style.css";
// import { MdRestaurantMenu } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";

const FloatingMenuButton = ({ onClick }) => {
	return (
		<button className="floating-menu-button" onClick={onClick}>
			<BiFoodMenu size={35} color="#fff" />{" "}
			{/* Customize icon and size */}
			<span>Menu</span>
		</button>
	);
};

export default FloatingMenuButton;
