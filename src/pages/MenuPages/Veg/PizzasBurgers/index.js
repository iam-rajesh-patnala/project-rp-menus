import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const PizzasBurgers = () => {
	return (
		<div>
			<h1>This is PizzasBurgers Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default PizzasBurgers;
