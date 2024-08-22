import React from "react";
import "./style.css";

require.context("../../assets/photos/NoDataFound", true);

const NoSearchResults = ({ message, searchHandler }) => {
	
	// Search Bar Clear Handler
	const clearInput = () => {
		const input = document.querySelector(".input");
		input.value = "";
		searchHandler({ target: { value: "" } });
	};

	return (
		<div className="no-results-message-container">
			<div className="no-results-image-container">
				<img
					src="/static/media/no-result-data.4f0b17db7485df079ed9.webp"
					alt="No Results Found"
					className="no-results-found-img"
					draggable="false"
					onContextMenu={(e) => e.preventDefault()}
				/>
			</div>
			<div className="text-container">
				<h1 className="no-results-message">
					{message || "No Results Found"}
				</h1>
				<p className="no-results-sub-message">
					Please contact your restaurant administrator <br /> for
					assistance.
				</p>
			</div>

			<div className="button-container">
				<button
					onClick={clearInput}
					className="go-back-button"
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NoSearchResults;
