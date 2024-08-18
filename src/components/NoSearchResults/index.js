import React from "react";
import "./style.css";

require.context("../../assets/photos/NoDataFound", true);

const NoSearchResults = ({ message }) => {
	return (
		<div className="no-results-message-container">
			<div className="image-container">
				<img
					src="/static/media/no-result-data.4f0b17db7485df079ed9.webp"
					alt="No Results Found"
					className="no-results-found-img"
					draggable="false"
				/>
			</div>
			<h1 className="no-results-message">{message || "No Results Found"}</h1>
			<p className="no-results-sub-message">
				Please contact your restaurant administrator <br /> for
				assistance.
			</p>

			<div className="button-container">
				<button
					onClick={() => window.location.reload()}
					className="refresh-button btn"
				>
					Refresh
				</button>
			</div>
		</div>
	);
};

export default NoSearchResults;
