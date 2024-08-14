import "./style.css";
import defaultImage from "../../assets/default.webp";

// VEG Icon
import icon from "../../assets/svg/Veg/veg.svg";

// Importing Images
require.context("../../assets/photos/Veg/1__Veg-Soups", true);

const ItemCard = ({
	image,
	item_name,
	isAvailable,
	price,
	viewButtonClick,
}) => {
	// Javascript code Goes here

	return (
		<div className="card">
			<img
				src={image || defaultImage}
				alt="img"
				className="item-img"
				onError={(e) => {
					e.target.src = defaultImage;
					e.target.onerror = null;
				}}
			/>

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
							onClick={viewButtonClick}
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
