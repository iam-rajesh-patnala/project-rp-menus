import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Rice = () => {
	return (
		<div>
			<h1>This is Rice Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default Rice;
