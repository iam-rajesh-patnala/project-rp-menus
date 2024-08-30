import React, { forwardRef } from "react";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import "./style.css";

// Route Data here

import routeData from "../../data/RouteData/routeData.json";

const ItemListModel = forwardRef(
	(
		{
			isClosing,
			closeModal,
			dataCategory,
			currentCategory,
			itemsCountData,
		},
		ref
	) => {
		// JavaScript code

		// filtering the data based on the category
		const filteredData = routeData.filter(
			(item) => item.category === dataCategory
		);

		return (
			<div className="modal-overlay" ref={ref}>
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
									<NavLink
										to={item.route}
										className={
											currentCategory === item.name
												? "active"
												: "inactive"
										}
										draggable="false"
										onContextMenu={(e) =>
											e.preventDefault()
										}
									>
										<span className="item-name">
											{item.name}
										</span>
										<span className="count">
											{itemsCountData[item.name]}
										</span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
);

export default ItemListModel;
