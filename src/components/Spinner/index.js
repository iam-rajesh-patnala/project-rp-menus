import React from "react";
import "./style.css";

const Spinner = () => {
	return (
		<div className="loader-container">
			<div className="ui-loader loader-blk">
				<svg viewBox="22 22 44 44" className="multiColor-loader">
					<circle
						cx="44"
						cy="44"
						r="20.2"
						fill="none"
						strokeWidth="3.6"
						className="loader-circle loader-circle-animation"
					></circle>
				</svg>
			</div>
		</div>
	);
};

export default Spinner;
