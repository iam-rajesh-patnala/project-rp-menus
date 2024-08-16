import React from "react";
import "./style.css";

// React Router Dom for Routing
import { ScrollRestoration } from "react-router-dom";

// Generates Unique ID
import { v4 as uuid } from "uuid";

// Back Button Component
import BackToMenu from "../../utils/BackToMenu";

// Header Component
import Header from "../../components/Header";

// Component for Displaying No Data Message
import NoDataMessage from "../../components/NoDataMessage";

// Component to display list of Items
import ItemCard from "../../components/ItemCard";

// Data Base
import vegDB from "../../data/ItemData/veg.json";
import nonVegDB from "../../data/ItemData/non-veg.json";
import dessertsDB from "../../data/ItemData/desserts.json";
import beveragesDB from "../../data/ItemData/beverages.json";


const DisplayData = ({ dbCategory, itemCategory }) => {
	// Javascript code Goes here
	const db = {
		veg: vegDB,
		"non-veg": nonVegDB,
		desserts: dessertsDB,
		beverages: beveragesDB,
	};

	// Fetching The data
	const fetchedData = db[dbCategory];

//To Get Images from folder -------------------
// const images = require.context("../../assets/photos/Beverages//Non-Alcoholic Beverages/Cold/8__Extras", true);
// const imageList = images.keys().map((image) => images(image));
// imageList.map((image) => console.log(image));


	// Filtering the data
	const filterData = fetchedData[dbCategory].reduce(
		(accumulator, currentItem) => {
			// Check if the current item has a "db.category" property
			if (currentItem[itemCategory]) {
				let data = currentItem[itemCategory].map((item) => ({
					...item,
					id: uuid(),
				}));
				return accumulator.concat(data);
			}
			// Otherwise, return the accumulator unchanged
			return accumulator;
		},
		[]
	);

	// View Button Click
	const viewButtonClick = ({ item_name }) => {
		console.log(`View button clicked for ${item_name}`);
	};

	return (
		<section className="page-background-container">
			{/* Automatic Scroll Restoration. */}
			<ScrollRestoration />
			<Header />
			{/* Checking if data is available else displaying no data message */}
			{filterData.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">{`Choose Your ${itemCategory}`}</h1>
						<div className="back-btn-container">
							<BackToMenu viewUrl={`/categories/${dbCategory}`} />
						</div>
					</div>

					<div className="items-container">
						{filterData.map((item) => (
							<ItemCard
								key={item.id}
								item_name={item.item_name}
								price={item.price}
								isAvailable={item.isAvailable}
								image={item.image}
								category={dbCategory}
								viewButtonClick={viewButtonClick}
							/>
						))}
					</div>
				</>
			) : (
				<NoDataMessage
					message={`No ${itemCategory} Found`}
					backTo={"Menu"}
					backUrlPath={`/categories/${dbCategory}`}
				/>
			)}
		</section>
	);
};

export default DisplayData;
