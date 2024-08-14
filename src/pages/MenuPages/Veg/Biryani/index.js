import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Biryani = () => {
	return (
		<div>
			<h1> This is Biryani Page</h1>
			<p>This is a delicious biryanis recipe.</p>
			<BackToMenu viewUrl={"/categories/veg"}/>
		</div>
	);
};

export default Biryani;
