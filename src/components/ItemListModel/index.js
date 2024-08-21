import React from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import './style.css'

// Route Data here

import routeData from "../../data/RouteData/routeData.json";

const ItemListModel = ({ onClose, dataCategory }) => {
	// JavaScript code

	const navigate = useNavigate();

	const handleItemClick = (route) => {
		onClose();
		navigate(route);
	};

	// filtering the data based on the category
	const filteredData = routeData.filter(
		(item) => item.category === dataCategory
	);

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-button" onClick={onClose}>
					X
				</button>
				<h2>Menu</h2>
				<ul className="item-list">
					{filteredData.map((item) => {
						const id = uuid() || item.id;

						return (
							<li
								key={id || item.id}
								onClick={() => handleItemClick(item.route)}
							>
								{item.name} - {item.count}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ItemListModel;
