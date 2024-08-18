import "./style.css";
import defaultImage from "../../assets/default.webp";

// Icons
import vegIcon from "../../assets/svg/Veg/veg.svg";
import nonVegIcon from "../../assets/svg/Non-Veg/non-veg.svg";

// Importing Images

// ----------------VEG-------------------------------
require.context("../../assets/photos/Veg", true);
require.context("../../assets/photos/Veg/1__Veg-Soups", true);
require.context("../../assets/photos/Veg/2__Veg-Starters", true);
require.context("../../assets/photos/Veg/3__Veg-Salads", true);
require.context("../../assets/photos/Veg/4__Naan-&-Bread", true);
require.context("../../assets/photos/Veg/5__Curries", true);
require.context("../../assets/photos/Veg/6__Rice", true);
require.context("../../assets/photos/Veg/7__Veg-Fired-Rice", true);
require.context("../../assets/photos/Veg/8__Veg-Biryani", true);
require.context("../../assets/photos/Veg/9__Noodles", true);
require.context("../../assets/photos/Veg/10__Pizza_& _Burgers_&_Wraps", true);

// ----------------NON-VEG-------------------------------
require.context("../../assets/photos/Non-Veg", true);
require.context("../../assets/photos/Non-Veg/1__Non-Veg-Soups", true);
require.context("../../assets/photos/Non-Veg/2__Non-Veg-Starters", true);
require.context("../../assets/photos/Non-Veg/3__Fried_Rice", true);
require.context("../../assets/photos/Non-Veg/4__Curries", true);
require.context("../../assets/photos/Non-Veg/5__Biryani", true);
require.context("../../assets/photos/Non-Veg/6__Noodles", true);
require.context("../../assets/photos/Non-Veg/7__Pizzas_&_Burgers", true);

// ------------------DESERTS-------------------------------
require.context("../../assets/photos/Desserts/", true);
require.context("../../assets/photos/Desserts/1__Sweets", true);
require.context("../../assets/photos/Desserts/2__Pastries", true);
require.context("../../assets/photos/Desserts/3__Ice_Creams", true);
require.context("../../assets/photos/Desserts/4__Cakes", true);

// ------------------BEVERAGES-------------------------------
require.context("../../assets/photos/Beverages/Non-Alcoholic Beverages/", true);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/1__Juices",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/2__Soft_Drinks",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/3__Mocktails",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/4__Smoothies",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/5__Milkshakes",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/6__Iced_Tea",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/7__Iced_Coffee",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Cold/8__Extras",
	true
);

require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Hot/1__Tea",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Hot/2__Coffee",
	true
);
require.context(
	"../../assets/photos/Beverages/Non-Alcoholic Beverages/Hot/3__Extras",
	true
);


// const images = require.context("../../assets/photos/Veg/1__Veg-Soups", true);
// const imageList = images.keys().map((image) => images(image));
// imageList.map((image) => console.log(image));



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

	const img = require(`/${image}`).default;

	return (
		<div className="card">
			<img
				// src={require(image) || defaultImage}
				src={img}
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
