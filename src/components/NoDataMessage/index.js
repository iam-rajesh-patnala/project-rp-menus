import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

require.context("../../assets/photos/NoDataFound", true);

const NoDataMessage = ({message, backTo, backUrlPath}) => {
	const navigate = useNavigate();
	return (
		<div className="no-data-message-container">
			<div className="image-container">
				<img
					src="/static/media/no-data-found.19644fa8d3023cbaa1ee.webp"
					alt="No Data Found"
					className="no-data-found-img"
					draggable="false"
				/>
			</div>
			<h1 className="no-data-message">{message || "No data found"}</h1>
			<p className="no-data-sub-message">
				Please contact your restaurant administrator <br /> for
				assistance.
			</p>

			<div className="buttons-container">
				<button
					onClick={() => navigate(backUrlPath)}
					className="back-button btn"
				>
					{`Back to ${backTo }`}
				</button>
			</div>
		</div>
	);
};

export default NoDataMessage;
