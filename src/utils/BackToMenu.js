import React from "react";
import { useNavigate } from "react-router-dom";
import "./btn-style.css";	
import BackIcon from "./BackIcon";

const BackToMenu = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate("/categories/veg")}
			className="back-btn"
		>
			<BackIcon />
			<span className="back-text">Back</span>
		</button>
	);
};

export default BackToMenu;
