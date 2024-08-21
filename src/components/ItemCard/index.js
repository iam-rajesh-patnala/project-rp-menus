import "./style.css";
import defaultImage from "../../assets/default.webp";


// Icons
import vegIcon from "../../assets/svg/Veg/veg.svg";
import nonVegIcon from "../../assets/svg/Non-Veg/nonVeg.svg";

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
const ItemCard = ({
	imagePath,
	item_name,
	isAvailable,
	price,
	viewButtonClick,
	category,
}) => {
	// Javascript code Goes here
	
	const img = getImage(imagePath);

	return (
		<div className="card">
			<img
				src={img}
				alt={item_name || "Item Image"}
				className="item-img"
				loading="lazy"
				onError={(e) => {
					e.target.src = defaultImage;
					e.target.onerror = null;
				}}
			/>

			{/* <ImageWithPlaceHolder src={img} alt={item_name || "Item Image"}/> */}

			{/* Item Info Container Starts*/}
			<div className="item-info-container">
				<div className="item-info">
					{category === "veg" ? (
						<img
							src={vegIcon}
							alt="icon"
							className="category-icon"
							loading="lazy"
						/>
					) : category === "nonVeg" ? (
						<img
							src={nonVegIcon}
							alt="icon"
							className="category-icon"
							loading="lazy"
						/>
					) : (
						""
					)}
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
