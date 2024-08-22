import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./cpmq.css";

// HeaderPage component
import Header from "../../components/Header";

// Loading component
import Loading from "../../components/Loading";

// images
import veg from "../../assets/photos/CategoryPage/veg.webp";
import nonVeg from "../../assets/photos/CategoryPage/nonVeg.webp";
import desserts from "../../assets/photos/CategoryPage/desserts.webp";
import beverages from "../../assets/photos/CategoryPage/beverages.webp";

// Placeholder SVG
import SvgImgPlaceholder from "../../utils/MenuImgPlaceholder"; // Ensure this path is correct

const CategoriesPage = () => {
	const [loading, setLoading] = useState(true);
	const [imagesLoaded, setImagesLoaded] = useState({
		veg: false,
		nonVeg: false,
		desserts: false,
		beverages: false,
	});
	const [fadeIn, setFadeIn] = useState(false);

	const handleImageLoad = (name) => {
		setImagesLoaded((prev) => ({ ...prev, [name]: true }));
	};

	useEffect(() => {
		const imageSources = [veg, nonVeg, desserts, beverages];

		const imageLoadPromises = imageSources.map((src) => {
			return new Promise((resolve) => {
				const img = new Image();
				img.src = src;
				img.onload = resolve;
				img.onerror = resolve; // Resolve even on error to avoid blocking
			});
		});

		const minimumLoadingTime = 1500;
		const timeoutPromise = new Promise((resolve) =>
			setTimeout(resolve, minimumLoadingTime)
		);

		Promise.all([...imageLoadPromises, timeoutPromise]).then(() => {
			setLoading(false);
			setFadeIn(true); // Trigger fade-in transition
		});
	}, []);


	const placeholderImg = `data:image/svg+xml;base64,${btoa(SvgImgPlaceholder)}`;

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<section
					className={`categories-page fade-in-transition ${fadeIn ? "active" : ""
						}`}
				>
					<Header />
					<div className="categories-page-background-container">
						{/* Title Container */}
						<div className="title-container">
							<h1 className="title">Select the Categories</h1>
						</div>

						{/* Cards Container */}
						<div className="categories-container">
							<Link to={"/categories/veg"}>
								<button className="category-btn">
									<img
										src={
											imagesLoaded.veg
												? veg
												: placeholderImg
										}
										alt="Veg"
										className={`bg-img ${imagesLoaded.veg
												? "loaded"
												: "loading"
											}`}
										onLoad={() => handleImageLoad("veg")}
										loading="lazy"
									/>
									<span className="category-text">Veg</span>
								</button>
							</Link>
							<Link to={"/categories/nonVeg"}>
								<button className="category-btn non-veg">
									<img
										src={
											imagesLoaded.nonVeg
												? nonVeg
												: placeholderImg
										}
										alt="Non-Veg"
										className={`bg-img ${imagesLoaded.nonVeg
												? "loaded"
												: "loading"
											}`}
										onLoad={() => handleImageLoad("nonVeg")}
									/>
									<span className="category-text">
										Non-Veg
									</span>
								</button>
							</Link>
							<Link to={"/categories/desserts"}>
								<button className="category-btn desserts">
									<img
										src={
											imagesLoaded.desserts
												? desserts
												: placeholderImg
										}
										alt="Desserts"
										className={`bg-img ${imagesLoaded.desserts
												? "loaded"
												: "loading"
											}`}
										onLoad={() =>
											handleImageLoad("desserts")
										}
									/>
									<span className="category-text">
										Desserts
									</span>
								</button>
							</Link>
							<Link to={"/categories/beverages"}>
								<button className="category-btn beverages">
									<img
										src={
											imagesLoaded.beverages
												? beverages
												: placeholderImg
										}
										alt="Beverages"
										className={`bg-img ${imagesLoaded.beverages
												? "loaded"
												: "loading"
											}`}
										onLoad={() =>
											handleImageLoad("beverages")
										}
									/>
									<span className="category-text">
										Beverages
									</span>
								</button>
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default CategoriesPage;
