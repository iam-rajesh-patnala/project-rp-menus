import "./style.css";
import { useState, useEffect } from "react";
import defaultImage from "../../assets/default.webp";

// Icons
import vegIcon from "../../assets/svg/Veg/veg.svg";
import nonVegIcon from "../../assets/svg/Non-Veg/nonVeg.svg";

// Placeholder image
import SvgImgPlaceholder from "../../utils/MenuImgPlaceholder";

// Importing Images
const getImage = (imagePath) => {
	try {
		return require(`../../assets/photos/${imagePath}`);
	} catch (error) {
		console.error("Image not found:", imagePath);
		return defaultImage; // Fallback to a default image
	}
};

// ----------------------------------------------------------------
// Main ItemCard 
const ItemCard = ({
	imagePath,
	item_name,
	isAvailable,
	price,
	viewButtonClick,
	category,
}) => {
	// Javascript code Goes here

	// const [imgSrc, setImgSrc] = useState(placeholderImage);
	const [imgSrc, setImgSrc] = useState(
		`data:image/svg+xml;base64,${btoa(SvgImgPlaceholder)}`
	);

	const img = getImage(imagePath);

	useEffect(() => {
		const imgElement = new Image();
		imgElement.src = img;
		imgElement.onload = () => {
			setImgSrc(img);
		};
		imgElement.onerror = (e) => {
			setImgSrc(defaultImage);
			e.target.onerror = null; // Prevent infinite loop in case the image fails to load properly.
		};
	}, [img]);


	let icon = "";
	switch (category) {
		case "veg":
			icon = vegIcon;
			break;
		case "nonVeg":
			icon = nonVegIcon;
			break;
		default:
			icon = vegIcon;
			break;
	}

	return (
		<div className="card">
			<img
				src={imgSrc}
				alt={item_name || "Item Image"}
				className="item-img"
				// loading="lazy"
				onError={(e) => {
					e.target.src = defaultImage;
					e.target.onerror = null;
				}}
			/>

			{/* <ImageWithPlaceHolder src={img} alt={item_name || "Item Image"}/> */}

			{/* Item Info Container Starts*/}
			<div className="item-info-container">
				<div className="item-info">
					<img src={icon} alt="icon" className="category-icon" />
					<h3 className="item-title">{item_name}</h3>
				</div>

				<div className="price-info">
					<div>
						<p className="starts">Starts From</p>
						<p className="item-price">
							<span className="currency">₹</span>
							{price}
						</p>
					</div>

					<div>
						<button
							type="button"
							className="card-btn"
							onClick={(e) => {
								e.preventDefault();
								return viewButtonClick({ item_name });
							}}
						>
							View
						</button>
						<p className="customizable-text">Customizable</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
