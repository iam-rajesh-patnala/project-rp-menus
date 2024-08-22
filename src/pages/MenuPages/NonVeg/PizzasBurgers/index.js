import React from "react";
import DisplayData from "../../../../components/DisplayData";

const PizzasBurgers = () => {
	return (
		<DisplayData
			dbCategory={"nonVeg"}
			itemCategory={"Pizzas & Burgers"}
			placeholder={"Ex: Chicken Pizza"}
		/>
	);
};

export default PizzasBurgers;
