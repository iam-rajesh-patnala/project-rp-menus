import "../style.css";
import "../scpmq.css";
import { useState, useEffect, useMemo, useRef } from "react";
import { useLoaderData } from "react-router-dom";

// Importing Data
import dessertsSearchData from "../../../data/SearchableData/dessertsSearch.json";

// Importing Components
import Header from "../../../components/Header";
import BackButton from "../../../components/BackButton";
import MenuCard from "../../../components/MenuCard";
import ItemCard from "../../../components/ItemCard";
import BottomSheet from "../../../components/BottomSheet";
import NoSearchResults from "../../../components/NoSearchResults";
import NoDataMessage from "../../../components/NoDataMessage";

// ----------------------------------------------------------------
// Main Desserts Component
const Desserts = () => {
	const rawDessertsData = useLoaderData(); // Access the pre-fetched data using useLoaderData

	const [dessertsData, setDessertsData] = useState(rawDessertsData || []);
	const [searchQuery, setSearchQuery] = useState("");
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // State to manage the bottom sheet visibility
	const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item

	// ------------------- Refs for bottom sheet content -------------------
	const bottomSheetRef = useRef(null);

	//-------------------- Assigning Data -------------------
	useEffect(() => {
		if (rawDessertsData?.length) {
			setDessertsData(rawDessertsData);
		}
	}, [rawDessertsData]);

	// ------------------- Filtering the data using Search Handler -------------------
	const filteredData = useMemo(() => {
		const data = searchQuery
			? dessertsSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(searchQuery)
			  )
			: dessertsData;

		return data;
	}, [searchQuery, dessertsData]);

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
				placeholder={"Ex: Brownie, Kulfi"}
				clearSearch={clearSearch}
			/>

			{/* Checking if data is available else displaying no data message */}
			{searchQuery ? (
				filteredData.length > 0 ? (
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
									ref={bottomSheetRef}
								/>
							</div>
						)}
					</>
				) : (
					<NoSearchResults
						message={"No Search Results Found"}
						searchHandler={searchHandler}
					/>
				)
			) : dessertsData.length > 0 ? (
				<>
					<div className="menu-page-title-container">
						<h1 className="menu-page-title">Choose Your Menu</h1>
						<div className="menu-page-back-btn-container">
							<BackButton viewUrl={"/categories"} />
						</div>
					</div>
					<div className="menu-cards-bg-container">
						{dessertsData.map((item) => (
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

export default Desserts;
