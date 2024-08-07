import React from "react";
import { useNavigate } from "react-router-dom";

const BackToMenu = () => {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate("/categories/veg")}>
			Back To Menu
		</button>
	);
};

export default BackToMenu;
