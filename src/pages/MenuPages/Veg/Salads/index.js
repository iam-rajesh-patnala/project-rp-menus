import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Salads = () => {
	return (
		<div>
			<h1>This is Salads Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default Salads;
