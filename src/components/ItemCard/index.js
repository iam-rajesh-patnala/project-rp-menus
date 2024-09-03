import "./style.css";
import "./icmq.css";
import { useState, useEffect } from "react";
// import { FaLeaf } from 'react-icons/fa'; // You can use any icon library
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

// Caching Images
const cacheImage = (imagePath, imgSrc) => {
	try {
		localStorage.setItem(imagePath, imgSrc);
	} catch (error) {
		console.error("Error caching image:", error);
	}
};

// Retrieving Cached Images
const getCachedImage = (imagePath) => {
	try {
		return localStorage.getItem(imagePath);
	} catch (error) {
		console.error("Error retrieving cached image:", error);
		return null;
	}
};

// ----------------------------------------------------------------
// Main ItemCard
const ItemCard = ({
	imagePath,
	item_name,
	isAvailable,
	price,
	category,
	customizable,
	handleViewClick,
}) => {
	// Javascript code Goes here

	const [imgSrc, setImgSrc] = useState(
		getCachedImage(imagePath) ||
			`data:image/svg+xml;base64,${btoa(SvgImgPlaceholder)}`
	);

	const img = getImage(imagePath);

	useEffect(() => {
		const cachedImage = getCachedImage(imagePath);

		if (cachedImage) {
			setImgSrc(cachedImage);
		} else {
			const imgElement = new Image();
			imgElement.src = img;
			imgElement.onload = () => {
				const imgSrcUrl = imgElement.src;
				setImgSrc(imgSrcUrl);
				cacheImage(imagePath, imgSrcUrl);
			};
			imgElement.onerror = (e) => {
				setImgSrc(defaultImage);
				e.target.onerror = null; // Prevent infinite loop in case the image fails to load properly.
			};
		}
	}, [img, imagePath]);

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
		<div className={`card ${!isAvailable ? "disabled" : ""}`}>
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
						<p className="starts">
							{customizable ? "Starts From" : "Price of"}
						</p>
						<p className="item-price">
							<span className="currency">₹</span>
							{price}
						</p>
					</div>

					{customizable ? (
						<div>
							<button
								type="button"
								className="card-btn"
								onClick={handleViewClick}
								disabled={!isAvailable}
							>
								View
							</button>
							<p className="customizable-text">Customizable</p>
						</div>
					) : (
						// <div>
						// 	{/* Placeholder Icon */}
						// 	<FaLeaf className="placeholder-icon" />
						// </div>
						<div className="animated-placeholder"></div>
					)}
				</div>
			</div>

			{/* Item Unavailable Overlay */}
			{!isAvailable && (
				<div className="overlay">
					<span>Not Available</span>
				</div>
			)}
		</div>
	);
};

export default ItemCard;
