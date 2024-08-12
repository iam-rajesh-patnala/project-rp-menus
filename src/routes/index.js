import React from "react";
import { createBrowserRouter } from "react-router-dom";

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

// Menu Pages
import Soups from "../pages/MenuPages/Soups";
import Starters from "../pages/MenuPages/Starters";
import Salads from "../pages/MenuPages/Salads";
import NaansBreads from "../pages/MenuPages/NaansBreads";
import Curries from "../pages/MenuPages/Curries";
import Rice from "../pages/MenuPages/Rice";
import FriedRice from "../pages/MenuPages/FriedRice"; // Corrected the typo
import Biryani from "../pages/MenuPages/Biryani";
import Noodles from "../pages/MenuPages/Noodles";
import PizzasBurgers from "../pages/MenuPages/PizzasBurgers";

// Page Transition Component
import PageTransition from "../components/PageTransition";

// Router
const router = createBrowserRouter([
	// Home Page
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
				<CategoriesPage />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},

	// SubCategories Pages
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

	// Menu Pages
	{
		path: "/categories/veg/soups",
		element: (
			<PageTransition>
				<Soups />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/starters",
		element: (
			<PageTransition>
				<Starters />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/salads",
		element: (
			<PageTransition>
				<Salads />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/naans-breads",
		element: (
			<PageTransition>
				<NaansBreads />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/curries",
		element: (
			<PageTransition>
				<Curries />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/rice",
		element: (
			<PageTransition>
				<Rice />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/fried-rice",
		element: (
			<PageTransition>
				<FriedRice />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/biryani",
		element: (
			<PageTransition>
				<Biryani />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/noodles",
		element: (
			<PageTransition>
				<Noodles />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories/veg/pizzas-burgers",
		element: (
			<PageTransition>
				<PizzasBurgers />
			</PageTransition>
		),
		errorElement: <ErrorPage />,
	},
]);

export default router;
