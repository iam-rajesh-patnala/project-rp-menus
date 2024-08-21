import React, { useState } from "react";
import CustomPlaceHolder from "../CustomPlaceholder";
import defaultImage from "../../assets/default.webp";

const ImageWithPlaceHolder = ({ src, alt, className }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handelImageLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div>
			{!isLoaded && <CustomPlaceHolder />}

			<img
				src={src} // Ensure you have a valid path for the default image
				alt={alt}
				onLoad={handelImageLoad}
				style={{
					display: isLoaded ? "block" : "none",
				}}
				// className="item-img"
				className={className}
				// loading="lazy"
				onError={(e) => {
					e.target.src = defaultImage; // Set the fallback image
					e.target.onerror = null; // Prevent infinite loop in case the fallback image fails
				}}
			/>
		</div>
	);
};

export default ImageWithPlaceHolder;
