import "./style.css";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Importing Data
import menuDB from "../../../data/MenuData/menu.json";
import nonVegSearchData from "../../../data/SearchableData/nonVegSearch.json";

// Importing Components
import Header from "../../../components/Header";
import BackToCategories from "../../../utils/BackToCategories";
import MenuCard from "../../../components/MenuCard";
import NoDataMessage from "../../../components/NoDataMessage";
import NoSearchResults from "../../../components/NoSearchResults";
import ItemCard from "../../../components/ItemCard";

// ----------------------------------------------------------------
// Main NonVeg Component
const NonVeg = () => {
	const [data, setData] = useState([]);
	// const [hasLoaded, setHasLoaded] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// Extracting veg data from the JSON data ---------
	useEffect(() => {
		const nonVegData = menuDB.reduce((accumulator, currentItem) => {
			if (currentItem.nonVeg) {
				let data = currentItem.nonVeg.map((item) => ({
					...item,
					id: uuid(),
				}));
				return accumulator.concat(data);
			}
			return accumulator;
		}, []);
		setData(nonVegData);
	}, []);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);

		const newData = query
			? nonVegSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(query)
			  )
			: [];
		setFilteredData(newData);
		// console.log(newData);
	};

	return (
		<section className="veg-menu-page">
			<Header data={true} searchHandler={searchHandler} placeholder={"Ex: Chicken, Prawns"}/>

			{/* Checking if data is available else displaying no data message */}
			{searchQuery.length > 0 ? (
				<>
					{filteredData.length > 0 ? (
						<div className="items-container">
							{filteredData.map((item) => (
								<ItemCard
									key={item.id}
									item_name={item.item_name}
									price={item.price}
									isAvailable={item.isAvailable}
									viewButtonClick={() =>
										console.log(item.item_name)
									}
									category={"nonVeg"}
									imagePath={item.imagePath}
								/>
							))}
						</div>
					) : (
						<NoSearchResults message={"No search results found"} />
					)}
				</>
			) : data.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					{/* NonVeg Menu Cards */}
					<div className="veg-menu-cards-container">
						{data.map((item) => (
							<MenuCard key={item.id || item.name} item={item} />
						))}
					</div>
				</>
			) : (
				<NoDataMessage
					backTo={"Categories"}
					backUrlPath={"/categories"}
				/>
			)}
		</section>
	);
};

export default NonVeg;
