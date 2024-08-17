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
import nonVeg from "../../assets/photos/CategoryPage/non-veg.webp";
import desserts from "../../assets/photos/CategoryPage/desserts.webp";
import beverages from "../../assets/photos/CategoryPage/beverages.webp";

// Default image
import defaultImage from "../../assets/main-default.webp";

const CategoriesPage = () => {
	const [loading, setLoading] = useState(true);

	// Function to check if all images are loaded
	const checkImagesLoaded = (images, callback) => {
		let loadedImages = 0;
		const totalImages = images.length;

		images.forEach((img) => {
			const image = new Image();
			image.src = img.src;
			image.onload = () => {
				loadedImages += 1;
				if (loadedImages === totalImages) {
					callback();
				}
			};
			image.onerror = () => {
				loadedImages += 1;
				if (loadedImages === totalImages) {
					callback();
				}
			};
		});
	};

	useEffect(() => {
		const images = [
			{ src: veg },
			{ src: nonVeg },
			{ src: desserts },
			{ src: beverages },
		];

		// Start with a delay of 1.5 seconds
		const minimumLoadingTime = 1500;

		// Track when image loading completes
		const imageLoadPromise = new Promise((resolve) => {
			checkImagesLoaded(images, resolve);
		});

		// Use Promise.all to ensure minimum loading time is respected
		const timeoutPromise = new Promise((resolve) => {
			setTimeout(resolve, minimumLoadingTime);
		});

		// Show loader until either images are loaded or the minimum loading time is reached
		Promise.all([imageLoadPromise, timeoutPromise]).then(() => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<section className="categories-page fade-in">
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
										src={veg || defaultImage}
										alt="Veg"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">Veg</span>
								</button>
							</Link>
							<Link to={"/categories/non-veg"}>
								<button className="category-btn non-veg">
									<img
										src={nonVeg || defaultImage}
										alt="Non-Veg"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">
										Non-Veg
									</span>
								</button>
							</Link>
							<Link to={"/categories/desserts"}>
								<button className="category-btn desserts">
									<img
										src={desserts || defaultImage}
										alt="Desserts"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">
										Desserts
									</span>
								</button>
							</Link>
							<Link to={"/categories/beverages"}>
								<button className="category-btn beverages">
									<img
										src={beverages || defaultImage}
										alt="Beverages"
										className="bg-img"
										loading="lazy"
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
