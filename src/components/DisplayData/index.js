import React, { useState, useEffect } from "react";
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

// No Search Results
import NoSearchResults from "../../components/NoSearchResults";

// Data Base
import vegDB from "../../data/ItemData/veg.json";
import nonVegDB from "../../data/ItemData/non-veg.json";
import dessertsDB from "../../data/ItemData/desserts.json";
import beveragesDB from "../../data/ItemData/beverages.json";

const DisplayData = ({ dbCategory, itemCategory, placeholder }) => {
	// Javascript code Goes here

	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchFilteredData, setSearchFilteredData] = useState([]);

	useEffect(() => {
		const db = {
			veg: vegDB,
			"non-veg": nonVegDB,
			desserts: dessertsDB,
			beverages: beveragesDB,
		};

		// Fetching The data
		const fetchedData = db[dbCategory];

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
		setData(filterData);
	}, [dbCategory, itemCategory]);

	// View Button Click
	const viewButtonClick = ({ item_name }) => {
		console.log(`View button clicked for ${item_name}`);
	};

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);

		const newData = query
			? data.filter((item) =>
					item.item_name.toLowerCase().includes(query)
			  )
			: [];
		setSearchFilteredData(newData);
	};

	// Search Bar Clear Handler
	const clearSearch = () => {
		setSearchQuery("");
        setSearchFilteredData([]);
	};

	return (
		<section className="page-background-container">
			{/* Automatic Scroll Restoration. */}
			<ScrollRestoration />
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={placeholder || "Search for food items..."}
				clearSearch={clearSearch}
			/>
			{/* Checking if data is available else displaying no data message */}

			{searchQuery.length > 0 ? (
				<>
					{searchFilteredData.length > 0 ? (
						<div className="items-container">
							{searchFilteredData.map((item) => (
								<ItemCard
									key={item.id}
									item_name={item.item_name}
									price={item.price}
									isAvailable={item.isAvailable}
									image={item.image}
									viewButtonClick={viewButtonClick}
								/>
							))}
						</div>
					) : (
						<NoSearchResults message={"No Search Results Found"} />
					)}
				</>
			) : data.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">{`Choose Your ${itemCategory}`}</h1>
						<div className="back-btn-container">
							<BackToMenu viewUrl={`/categories/${dbCategory}`} />
						</div>
					</div>

					<div className="items-container">
						{data.map((item) => (
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
