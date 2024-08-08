import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Components

// Error Page --------------------------------------------------
import ErrorPage from "../pages/ErrorPage";

// Landing Page
import HomePage from "../pages/HomePage";

// Categories Page ----------------------------------------------
import CategoriesPage from "../pages/CategoriesPage";

// Subcategories Pages for Dine-In Menu --------------------------------
import Veg from "../pages/SubCategoriesPages/Veg";
import NonVeg from "../pages/SubCategoriesPages/NonVeg";
import Desserts from "../pages/SubCategoriesPages/Desserts";
import Beverages from "../pages/SubCategoriesPages/Beverages";

//Menu Pages ----------------------------------------------------------------
import Soups from "../pages/MenuPages/Soups";
import Starters from "../pages/MenuPages/Starters";
import Salads from "../pages/MenuPages/Salads";
import NaansBreads from "../pages/MenuPages/NaansBreads";
import Curries from "../pages/MenuPages/Curries";
import Rice from "../pages/MenuPages/Rice";
import FiredRice from "../pages/MenuPages/FiredRice";
import Biryani from "../pages/MenuPages/Biryani";
import Noodles from "../pages/MenuPages/Noodles";
import PizzasBurgers from "../pages/MenuPages/PizzasBurgers";

// Router -------------------------------------------------------------------
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories",
		element: <CategoriesPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/categories",
		children: [
			{
				path: "veg",
				element: <Veg />,
			},
			{
				path: "non-veg",
				element: <NonVeg />,
			},
			{
				path: "desserts",
				element: <Desserts />,
			},
			{
				path: "beverages",
				element: <Beverages />,
			},
		],
	},
	{
		path: "/categories/veg",
		children: [
			{
				path: "soups",
				element: <Soups />,
			},
			{
				path: "starters",
				element: <Starters />,
			},
			{
				path: "salads",
				element: <Salads />,
			},
			{
				path: "naans-breads",
				element: <NaansBreads />,
			},
			{
				path: "curries",
				element: <Curries />,
			},
			{
				path: "rice",
				element: <Rice />,
			},
			{
				path: "fired-rice",
				element: <FiredRice />,
			},
			{
				path: "biryani",
				element: <Biryani />,
			},
			{
				path: "noodles",
				element: <Noodles />,
			},
			{
				path: "pizzas-burgers",
				element: <PizzasBurgers />,
			},
		],
	},
]);

export default router;
