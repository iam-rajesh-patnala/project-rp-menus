import React from "react";

const NonVegIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			viewBox="0 0 17 17"
			className="bottom-symbol-icon"
		>
			<g transform="translate(-336 -359)">
				<g
					transform="translate(336 359)"
					fill="#fff"
					stroke="#c52031"
					strokeWidth="1"
				>
					<rect width="17" height="17" rx="3" />
					<rect
						x="0.5"
						y="0.5"
						width="16"
						height="16"
						rx="2.5"
						fill="none"
					/>
				</g>
				<circle
					cx="4.5"
					cy="4.5"
					r="4.5"
					transform="translate(340 363)"
					fill="#c52031"
				/>
			</g>
		</svg>
	);
};

export default NonVegIcon;
