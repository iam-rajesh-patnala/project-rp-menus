import React from "react";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import "./style.css";

// Route Data here

import routeData from "../../data/RouteData/routeData.json";

const ItemListModel = ({ closeModal, dataCategory, currentCategory }) => {
	// JavaScript code

	// filtering the data based on the category
	const filteredData = routeData.filter(
		(item) => item.category === dataCategory
	);

	console.log(currentCategory);

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				{/* <button className="close-button" onClick={closeModal
				}>
					X
				</button> */}
				{/* <h2>Menu</h2> */}
				<ul className="item-list">
					{filteredData.map((item) => {
						const id = uuid() || item.id;

						return (
							<li
								key={id || item.id}
								onClick={() => closeModal()}
							>
								<NavLink to={item.route} className={currentCategory === item.name ? 'active' : 'inactive'}>
									<span className="item-name">
										{item.name}
									</span>
									<span className="count">{item.count}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ItemListModel;
