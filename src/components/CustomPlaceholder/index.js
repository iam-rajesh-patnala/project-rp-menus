import React from "react";
import placeHolderImage from "../../assets/photos/PlaceHolders/placeholder-2.webp";

const CustomPlaceHolder = () => {
	return (
		<img
			src={placeHolderImage}
			alt="Placeholder"
			style={{
				width: "100%",
				objectFit: "cover",
				borderRadius: "6px",
			}}
		/>
	);
};

export default CustomPlaceHolder;
