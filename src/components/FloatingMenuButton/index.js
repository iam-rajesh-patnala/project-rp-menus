import React from "react";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

const FloatingMenuButton = ({ onClick }) => {
	return (
		<button className="floating-menu-button" onClick={onClick}>
			<FaShoppingCart size={24} color="#fff" />{" "}
			{/* Customize icon and size */}
		</button>
	);
};

export default FloatingMenuButton;
