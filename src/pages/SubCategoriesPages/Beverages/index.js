import "../style.css";
import "./style.css";
import "../scpmq.css";
import { useState, useEffect, useMemo, useRef } from "react";
import { useLoaderData } from "react-router-dom";
// Importing Data
import beveragesSearchData from "../../../data/SearchableData/beveragesSearch.json";

// Importing Components
import Header from "../../../components/Header";
import BackButton from "../../../components/BackButton";
import MenuCard from "../../../components/MenuCard";
import ItemCard from "../../../components/ItemCard";
import BottomSheet from "../../../components/BottomSheet";
import NoSearchResults from "../../../components/NoSearchResults";
import NoDataMessage from "../../../components/NoDataMessage";

// ----------------------------------------------------------------
// Main Beverages Component
const Beverages = () => {
	const rawBeveragesData = useLoaderData(); // Access the pre-fetched data using useLoaderData

	const [beveragesData, setBeveragesData] = useState(rawBeveragesData || []);
	const [searchQuery, setSearchQuery] = useState("");

	// State to manage the Radio Buttons
	const [radioFilteredData, setRadioFilteredData] = useState([]);
	// State to manage the transition effect when filtering
	const [transitioning, setTransitioning] = useState(false);

	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // State to manage the bottom sheet visibility
	const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item

	// ------------------- Refs for bottom sheet content -------------------
	const bottomSheetRef = useRef(null);

	//-------------------- Assigning Data -------------------
	useEffect(() => {
		if (rawBeveragesData?.length) {
			setBeveragesData(rawBeveragesData);
			setRadioFilteredData(rawBeveragesData);
		}
	}, [rawBeveragesData]);

	// ------------------- Filtering the data using Search Handler -------------------
	const filteredData = useMemo(() => {
		const data = searchQuery
			? beveragesSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(searchQuery)
			  )
			: beveragesData;

		return data;
	}, [searchQuery, beveragesData]);

	// ------------------- Search Query Handler -------------------
	const searchHandler = (event) => {
		setSearchQuery(event.target.value.toLowerCase().trim());
	};

	// ------------------- Clear Search Handler -------------------
	const clearSearch = () => {
		setSearchQuery("");
	};

	// ------------------- Rendering the Items -------------------
	const renderItems = (items) =>
		items.map((item) => (
			<ItemCard
				key={item.id}
				item_name={item.item_name}
				price={item.price}
				isAvailable={item.isAvailable}
				imagePath={item.imagePath}
				category={item.category}
				customizable={item.customizable || false}
				handleViewClick={() => handleViewClick(item)}
			/>
		));

	//-------------------View Button Click handler-------------------
	const handleViewClick = (item) => {
		setIsBottomSheetVisible(true); // Open the bottom sheet
		document.body.style.overflow = "hidden"; // Disable scrolling on body when modal is open
		setSelectedItem(item);
		/* console.log(item); */
	};

	const handleCloseClick = () => {
		setIsBottomSheetVisible(false); // Close the bottom sheet
		document.body.style.overflow = "auto"; // Enable scrolling on body when modal is closed
	};

	// Close bottom sheet when clicking outside of it
	const handleBottomSheetBackgroundClick = (event) => {
		if (
			bottomSheetRef.current &&
			!bottomSheetRef.current.contains(event.target)
		) {
			handleCloseClick();
		}
	};

	// -------------------Filtering the data based on the selected Radio Button with transition-------------------
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

	//------------------- Scroll Restoration -------------------
	useEffect(() => {
		// Scroll to top when search query changes or the component mounts
		window.scrollTo(0, 0);
	}, [searchQuery]);

	/* ---------------------------------------------------------------------------- */
	return (
		<section className="menu-page">
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={"Ex: Chai, Mojito"}
				clearSearch={clearSearch}
			/>

			{searchQuery ? (
				<>
					{filteredData.length > 0 ? (
						<>
							<div className="searched-items-container">
								{renderItems(filteredData)}
							</div>

							{/* Conditionally render BottomSheet */}
							{isBottomSheetVisible && (
								<div
									className="bottom-sheet-bg-container-open"
									onClick={handleBottomSheetBackgroundClick}
								>
									<BottomSheet
										isVisible={isBottomSheetVisible}
										onClose={handleCloseClick}
										content={selectedItem}
										itemCategory={
											selectedItem.searchItemCategory
										}
										ref={bottomSheetRef}
									/>
								</div>
							)}
						</>
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
							<div className="menu-page-title-container">
								<h1 className="menu-page-title">
									Choose Your Menu
								</h1>
								<div className="menu-page-back-btn-container">
									<BackButton viewUrl={"/categories"} />
								</div>
							</div>
							<div
								className={`menu-cards-bg-container ${
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
