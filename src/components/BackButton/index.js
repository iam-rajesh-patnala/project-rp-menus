import React from "react";
import "./style.css";
import "./bbmq.css";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../utils/BackIcon";

const BackButton = ({ viewUrl }) => {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate(viewUrl)} className="back-btn">
			<p className="back-text">
				<BackIcon />
				Back
			</p>
		</button>
	);
};

export default BackButton;
