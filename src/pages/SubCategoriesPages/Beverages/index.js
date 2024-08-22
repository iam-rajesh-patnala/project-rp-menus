import "./style.css";
import { useState, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";
// Importing Data
import beveragesSearchData from "../../../data/SearchableData/beveragesSearch.json";

// Importing Components
import Header from "../../../components/Header";
import BackToCategories from "../../../utils/BackToCategories";
import MenuCard from "../../../components/MenuCard";
import NoDataMessage from "../../../components/NoDataMessage";
import NoSearchResults from "../../../components/NoSearchResults";
import ItemCard from "../../../components/ItemCard";

// ----------------------------------------------------------------
// Main Beverages Component
const Beverages = () => {
	const rawBeveragesData = useLoaderData();

	const [beveragesData, setBeveragesData] = useState(rawBeveragesData || []);
	const [searchQuery, setSearchQuery] = useState("");

	const [radioFilteredData, setRadioFilteredData] = useState([]);
	const [transitioning, setTransitioning] = useState(false);

	// Extracting beverages data from the JSON data and setting initial state
	// useEffect(() => {
	// 	const beveragesData = menuDB.reduce((accumulator, currentItem) => {
	// 		if (currentItem.beverages) {
	// 			let data = currentItem.beverages.map((item) => ({
	// 				...item,
	// 				id: uuid(),
	// 			}));
	// 			return accumulator.concat(data);
	// 		}
	// 		return accumulator;
	// 	}, []);
	// 	setData(beveragesData);
	// 	setRadioFilteredData(beveragesData);
	// }, []);

	useEffect(() => {
		if (rawBeveragesData?.length) {
			setBeveragesData(rawBeveragesData);
			setRadioFilteredData(rawBeveragesData);
		}
	}, [rawBeveragesData]);

	const filteredData = useMemo(() => {
		const data = searchQuery
			? beveragesSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(searchQuery)
			  )
			: beveragesData;

		return data;
	}, [searchQuery, beveragesData]);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		setSearchQuery(event.target.value.toLowerCase().trim());
	};

	// Clear Search
	const clearSearch = () => {
		setSearchQuery("");
	};

	// Rendering the Items
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

	// Filtering the data based on the selected Radio Button with transition
	const radioButtonOnChange = (event) => {
		setTransitioning(true);
		setTimeout(() => {
			let newData = [];

			const radioSortedData = beveragesData.filter(
				(item) => item.subCategory === event.target.value
			);

			newData = radioSortedData.length ? radioSortedData : beveragesData;

			setRadioFilteredData(newData);
			setTransitioning(false);
		}, 200); // Delay for transition effect

		// console.log(data);
	};

	return (
		<section className="veg-menu-page">
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={"Ex: Chai, Mojito"}
				clearSearch={clearSearch}
			/>

			{searchQuery ? (
				<>
					{filteredData.length > 0 ? (
						<div className="items-container">
							{renderItems(filteredData)}
						</div>
					) : (
						<NoSearchResults
							message={"No search results found"}
							searchHandler={searchHandler}
						/>
					)}
				</>
			) : beveragesData.length > 0 ? (
				<>
					{/* Radio Buttons Container */}
					<div className="radio-inputs">
						<label htmlFor="all" className="radio">
							<input
								type="radio"
								id="all"
								name="radio"
								value="all"
								defaultChecked
								onChange={radioButtonOnChange}
							/>
							<span className="name all">All</span>
						</label>

						<label htmlFor="cold" className="radio">
							<input
								type="radio"
								id="cold"
								name="radio"
								value="cold"
								onChange={radioButtonOnChange}
							/>
							<span className="name cold">Cold</span>
						</label>

						<label htmlFor="hot" className="radio">
							<input
								type="radio"
								id="hot"
								name="radio"
								value="hot"
								onChange={radioButtonOnChange}
							/>
							<span className="name hot">Hot</span>
						</label>
					</div>
					{/* Menu Cards Container */}
					{radioFilteredData.length > 0 ? (
						<>
							<div className="title-container">
								<h1 className="title">Choose Your Menu</h1>
								<div className="back-btn-container">
									<BackToCategories />
								</div>
							</div>
							<div
								className={`veg-menu-cards-container ${
									transitioning ? "fade-out" : "fade-in"
								}`}
							>
								{radioFilteredData.map((item) => (
									<MenuCard
										key={item.id || item.name}
										item={item}
									/>
								))}
							</div>
						</>
					) : (
						<NoSearchResults message={"No Filter results found"} />
					)}
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

export default Beverages;
