import "./style.css";
import React, { useState, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

// Importing Data
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
	const rawNonVegData = useLoaderData(); // Access the pre-fetched data using useLoaderData

	const [nonVegData, setNonVegData] = useState(rawNonVegData || []);
	const [searchQuery, setSearchQuery] = useState("");

	// Extracting veg data from the JSON data ---------
	useEffect(() => {
		if (rawNonVegData?.length) {
			setNonVegData(rawNonVegData);
		}
	}, [rawNonVegData]);

	// Filtering the data using Search Handler
	const filteredData = useMemo(() => {
		const data = searchQuery
			? nonVegSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(searchQuery)
			  )
			: nonVegData;
		return data;
	}, [searchQuery, nonVegData]);

	// Search Query Handler
	const searchHandler = (event) => {
		setSearchQuery(event.target.value.toLowerCase().trim());
	};

	// Clear Search
	const clearSearch = () => {
		setSearchQuery("");
	};

	// Render Items
	const renderItems = (items) =>
		items.map((item) => (
			<ItemCard
				key={item.id}
				item_name={item.item_name}
				price={item.price}
				isAvailable={item.isAvailable}
				viewButtonClick={() => console.log(item.item_name)}
				category={item.category}
				imagePath={item.imagePath}
			/>
		));

	return (
		<section className="veg-menu-page">
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={"Ex: Chicken, Prawns"}
				clearSearch={clearSearch}
			/>

			{/* Checking if data is available else displaying no data message */}

			{searchQuery ? (
				filteredData.length > 0 ? (
					<div className="items-container">
						{renderItems(filteredData)}
					</div>
				) : (
					<NoSearchResults
						message={"No search results found"}
						searchHandler={searchHandler}
					/>
				)
			) : nonVegData.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					<div className="veg-menu-cards-container">
						{nonVegData.map((item) => (
							<MenuCard key={item.id} item={item} />
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
