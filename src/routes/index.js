import React from "react";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";

// Error Page
import ErrorPage from "../pages/ErrorPage";

// Landing Page
import HomePage from "../pages/HomePage";

// Categories Page
import CategoriesPage from "../pages/CategoriesPage";

// Subcategories Pages for Dine-In Menu
import Veg from "../pages/SubCategoriesPages/Veg";
import NonVeg from "../pages/SubCategoriesPages/NonVeg";
import Desserts from "../pages/SubCategoriesPages/Desserts";
import Beverages from "../pages/SubCategoriesPages/Beverages";

// Veg Menu Pages
import VegSoups from "../pages/MenuPages/Veg/Soups";
import VegStarters from "../pages/MenuPages/Veg/Starters";
import VegSalads from "../pages/MenuPages/Veg/Salads";
import VegNaansBreads from "../pages/MenuPages/Veg/NaansBreads";
import VegCurries from "../pages/MenuPages/Veg/Curries";
import VegRice from "../pages/MenuPages/Veg/Rice";
import VegFriedRice from "../pages/MenuPages/Veg/FriedRice";
import VegBiryani from "../pages/MenuPages/Veg/Biryani";
import VegNoodles from "../pages/MenuPages/Veg/Noodles";
import VegPizzasBurgers from "../pages/MenuPages/Veg/PizzasBurgers";

// Non-Veg Menu Pages
import NonVegSoups from "../pages/MenuPages/NonVeg/Soups";
import NonVegStarters from "../pages/MenuPages/NonVeg/Starters";
import NonVegCurries from "../pages/MenuPages/NonVeg/Curries";
import NonVegFriedRice from "../pages/MenuPages/NonVeg/FriedRice";
import NonVegBiryani from "../pages/MenuPages/NonVeg/Biryani";
import NonVegNoodles from "../pages/MenuPages/NonVeg/Noodles";
import NonVegPizzasBurgers from "../pages/MenuPages/NonVeg/PizzasBurgers";

// Desserts Menu Pages
import Sweets from "../pages/MenuPages/Desserts/Sweets";
import Pastries from "../pages/MenuPages/Desserts/Pastries";
import Cakes from "../pages/MenuPages/Desserts/Cakes";
import IceCreams from "../pages/MenuPages/Desserts/IceCreams";

// Beverages Menu Pages
import Juices from "../pages/MenuPages/Beverages/Juices";
import SoftDrinks from "../pages/MenuPages/Beverages/SoftDrinks";
import Mocktails from "../pages/MenuPages/Beverages/Mocktails";
import Smoothies from "../pages/MenuPages/Beverages/Smoothies";
import Milkshakes from "../pages/MenuPages/Beverages/Milkshakes";
import IcedTea from "../pages/MenuPages/Beverages/IcedTea";
import IcedCoffee from "../pages/MenuPages/Beverages/IcedCoffee";
import ColdExtras from "../pages/MenuPages/Beverages/ColdExtras";

import Tea from "../pages/MenuPages/Beverages/Tea";
import Coffee from "../pages/MenuPages/Beverages/Coffee";
import HotExtras from "../pages/MenuPages/Beverages/HotExtras";

// Page Transition Component
import PageTransition from "../components/PageTransition";

// Router
const router = createBrowserRouter([
	// Home Page ---------------------------------
	{
		path: "/",
		element: (
			<PageTransition>
				<HomePage />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	// Categories Page
	{
		path: "/categories",
		element: (
			<PageTransition>
				<ScrollRestoration />
				<CategoriesPage />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	// SubCategories Pages ---------------------------------
	{
		path: "/categories/veg",
		element: (
			<PageTransition>
				<Veg />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	{
		path: "/categories/non-veg",
		element: (
			<PageTransition>
				<NonVeg />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	{
		path: "/categories/desserts",
		element: (
			<PageTransition>
				<Desserts />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	{
		path: "/categories/beverages",
		element: (
			<PageTransition>
				<Beverages />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	// Veg Menu Pages ---------------------------------
	{
		path: "/categories/veg/soups",
		element: (
			<PageTransition>
				<VegSoups />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/starters",
		element: (
			<PageTransition>
				<VegStarters />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/salads",
		element: (
			<PageTransition>
				<VegSalads />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/naans-breads",
		element: (
			<PageTransition>
				<VegNaansBreads />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/curries",
		element: (
			<PageTransition>
				<VegCurries />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/rice",
		element: (
			<PageTransition>
				<VegRice />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/fried-rice",
		element: (
			<PageTransition>
				<VegFriedRice />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/biryani",
		element: (
			<PageTransition>
				<VegBiryani />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/noodles",
		element: (
			<PageTransition>
				<VegNoodles />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/pizzas-burgers",
		element: (
			<PageTransition>
				<VegPizzasBurgers />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	// NonVeg Menu Pages ---------------------------------
	{
		path: "/categories/non-veg/soups",
		element: (
			<PageTransition>
				<NonVegSoups />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/starters",
		element: (
			<PageTransition>
				<NonVegStarters />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/curries",
		element: (
			<PageTransition>
				<NonVegCurries />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/fired-rice",
		element: (
			<PageTransition>
				<NonVegFriedRice />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/biryani",
		element: (
			<PageTransition>
				<NonVegBiryani />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/noodles",
		element: (
			<PageTransition>
				<NonVegNoodles />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/non-veg/pizzas-burgers",
		element: (
			<PageTransition>
				<NonVegPizzasBurgers />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	// Desserts Menu Pages ---------------------------------
	{
		path: "/categories/desserts/sweets",
		element: (
			<PageTransition>
				<Sweets />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/desserts/pastries",
		element: (
			<PageTransition>
				<Pastries />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/desserts/cakes",
		element: (
			<PageTransition>
				<Cakes />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/desserts/ice-creams",
		element: (
			<PageTransition>
				<IceCreams />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	// Beverages Menu Pages ---------------------------------
	{
		path: "/categories/beverages/juices",
		element: (
			<PageTransition>
				<Juices />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/soft-drinks",
		element: (
			<PageTransition>
				<SoftDrinks />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/mocktails",
		element: (
			<PageTransition>
				<Mocktails />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/smoothies",
		element: (
			<PageTransition>
				<Smoothies />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/milkshakes",
		element: (
			<PageTransition>
				<Milkshakes />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/iced-tea",
		element: (
			<PageTransition>
				<IcedTea />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/iced-coffee",
		element: (
			<PageTransition>
				<IcedCoffee />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/cold-extras",
		element: (
			<PageTransition>
				<ColdExtras />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	{
		path: "/categories/beverages/tea",
		element: (
			<PageTransition>
				<Tea />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/coffee",
		element: (
			<PageTransition>
				<Coffee />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/beverages/hot-extras",
		element: (
			<PageTransition>
				<HotExtras />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	//
]);

export default router;
