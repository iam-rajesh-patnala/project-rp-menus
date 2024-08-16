import "./style.css";
import defaultImage from "../../assets/default.webp";

// Icons
import vegIcon from "../../assets/svg/Veg/veg.svg";
import nonVegIcon from "../../assets/svg/Non-Veg/non-veg.svg";

// Importing Images

// ----------------VEG-------------------------------
require.context("../../assets/photos/Veg", true);

// ----------------NON-VEG-------------------------------
require.context("../../assets/photos/Non-Veg", true);

// ------------------DESERTS-------------------------------
require.context("../../assets/photos/Desserts/", true);

// ------------------BEVERAGES-------------------------------
require.context("../../assets/photos/Beverages", true);

// ----------------------------------------------------------------
const ItemCard = ({
	image,
	item_name,
	isAvailable,
	price,
	viewButtonClick,
	category,
}) => {
	// Javascript code Goes here

	return (
		<div className="card">
			<img
				src={image || defaultImage}
				alt="img"
				className="item-img"
				loading="lazy"
				onError={(e) => {
					e.target.src = defaultImage;
					e.target.onerror = null;
				}}
			/>

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
					) : category === "non-veg" ? (
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
