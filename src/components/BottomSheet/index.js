import React, { forwardRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import "./style.css";
import "./bsmq.css";

import VegIcon from "../../utils/VegIcon";
import NonVegIcon from "../../utils/NonVegIcon";

const BottomSheet = forwardRef((props, ref) => {
	const { isVisible, onClose, content = {}, itemCategory } = props;
	console.log(itemCategory);
	const {
		item_name,
		price = 0,
		category = "veg",
		customizable = {},
	} = content;

	const [totalPrice, setTotalPrice] = useState(price);

	// Memoize the icon to avoid unnecessary re-renders
	const icon = useMemo(() => {
		switch (category) {
			case "nonVeg":
				return <NonVegIcon />;
			case "veg":
			default:
				return <VegIcon />;
		}
	}, [category]);

	// Radio Button On Change handler
	const radioButtonOnChange = (extraPrice) => {

		// Exception for selected category
		let categoryItems = ["Pizzas & Burgers"];

		if (categoryItems.includes(itemCategory)) {
			// Update with only	the total price
			setTotalPrice(extraPrice);
		} else {
			// Add extraPrice to total price and update state
			setTotalPrice(price + Number(extraPrice));
		}
	};

	return (
		<div
			className={`bottom-sheet ${isVisible ? "open" : "close"}`}
			ref={ref}
		>
			<div className="bottom-sheet-content">
				<div className="bottom-sheet-header-container">
					<div className="bottom-sheet-item-text-container">
						{icon}
						<div className="bottom-sheet-item-name-container">
							<p className="bottom-sheet-item-name">
								{item_name}
							</p>
							<p className="bottom-sheet-item-price">{`₹ ${price}.00`}</p>
						</div>
					</div>

					<button
						className="bottom-sheet-close-btn"
						onClick={onClose}
					>
						<RiCloseCircleFill
							className="close-icon"
							size={24}
							fill="#fff"
						/>
					</button>
				</div>

				<hr className="bottom-sheet-hr" />

				<div className="bottom-sheet-customizable-container">
					<div className="star-category-container">
						<BsStars className="bottom-sheet-star" />
						<p className="bottom-sheet-item-category">
							{itemCategory}
						</p>
					</div>

					{Object.entries(customizable).map(([key, value], index) => (
						<div className="extra-items-container" key={index}>
							<p className="extra-items-quantity">{key}</p>
							<div className="price-with-radio-button">
								{/* Label For Radio Button */}
								<label
									className="bottom-sheet-radio-label"
									htmlFor={index}
								>
									{`₹ ${value}.00`}
								</label>
								{/* Radio Button */}
								<input
									type="radio"
									name="customizable"
									className="bottom-sheet-radio"
									value={value}
									id={index}
									onChange={(e) =>
										radioButtonOnChange(e.target.value)
									}
								/>
							</div>
						</div>
					))}

					<div className="total-price-container">
						<p className="total-price-text">{`Total: ₹ ${totalPrice}.00`}</p>
					</div>
				</div>
			</div>
		</div>
	);
});

BottomSheet.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	content: PropTypes.shape({
		item_name: PropTypes.string,
		price: PropTypes.number,
		category: PropTypes.oneOf(["veg", "nonVeg", "desserts", "beverages"]),
		customizable: PropTypes.objectOf(PropTypes.number),
	}),
	itemCategory: PropTypes.string.isRequired,
};

export default BottomSheet;
