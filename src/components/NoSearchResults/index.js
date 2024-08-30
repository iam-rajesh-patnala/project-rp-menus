import React from "react";
import "./style.css";

require.context("../../assets/photos/NoDataFound", true);

const NoSearchResults = ({ message, searchHandler }) => {
	// Search Bar Clear Handler
	const clearInput = () => {
		const input = document.querySelector(".input");
		input.value = "";
		searchHandler({ target: { value: "" } });
	};

	return (
		<div className="no-results-message-container">
			<div className="no-results-image-container">
				{/* <img
					src="/static/media/no-result-data.4f0b17db7485df079ed9.webp"
					alt="No Results Found"
					className="no-results-found-img"
					draggable="false"
					onContextMenu={(e) => e.preventDefault()}
				/> */}

				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 500 500"
					style={{ enableBackground: "new 0 0 500 500" }}
					xmlSpace="preserve"
					className="no-results-found-img"
					draggable="false"
					onContextMenu={(e) => e.preventDefault()}
				>
					<g id="BACKGROUND">
						<rect
							style={{
								fill: "transparent",
								width: "500",
								height: "500",
							}}
						/>
					</g>
					<g id="OBJECTS">
						<g>
							<path
								style={{ fill: "#EB725F" }}
								d="M89.572,285.839c-0.256-0.345-0.506-0.694-0.764-1.037c-2.906-3.861-5.99-7.589-9.244-11.159
			c0.081-7.194-0.091-34.399-7.381-32.999c-6.731,1.293,2.055,22.833,5.803,31.323c-1.42-1.511-2.868-2.996-4.351-4.446
			c-4.918-6.383-21.454-26.943-26.301-21.377c-4.491,5.157,15.162,16.537,23.799,21.182c1.604,1.53,3.18,3.091,4.711,4.692
			c-8.324-4.157-29.077-13.764-30.922-7.199c-2,7.118,25.136,8.624,32.509,8.901c3.829,4.131,7.426,8.477,10.787,13.002
			c-7.455-4.723-28.089-17.051-30.628-10.542c-2.72,6.974,24.859,11.146,31.761,12.075c3.628,5.006,6.97,10.223,10.034,15.596
			c-7.127-6.04-24.931-20.233-28.276-14.308c-3.632,6.432,22.31,14.338,29.437,16.371c0.494,0.893,0.987,1.785,1.466,2.686
			c2.428,4.572,4.671,9.254,6.734,14.016c-6.46-6.331-23.708-22.324-27.52-16.556c-4.091,6.19,21.488,15.952,28.318,18.424
			c3.055,7.259,5.656,14.71,7.769,22.283c-5.519-7.185-20.33-25.403-24.91-20.231c-4.919,5.555,19.043,18.811,25.461,22.217
			c0.085,0.32,0.182,0.637,0.265,0.957c0.677,2.596,1.336,5.217,1.796,7.863c0.176,1.013,1.754,0.77,1.578-0.245
			c-0.458-2.63-1.048-5.248-1.718-7.85c3.274-6.584,14.823-30.917,7.686-32.823c-6.494-1.735-8.039,20.555-8.403,30.165
			c-1.217-4.332-2.644-8.612-4.136-12.805c-1.069-3.003-2.214-5.981-3.426-8.934c2.252-6.759,10.441-32.828,3.056-33.721
			c-6.741-0.815-5.044,21.925-4.06,31.324c-2.362-5.545-4.979-10.985-7.858-16.282c1.774-6.898,8.121-33.479,0.691-33.853
			c-6.854-0.345-3.427,22.714-1.808,31.829c-3.137-5.604-6.568-11.041-10.301-16.263c0.811-7.501,3.166-33.997-4.144-33.324
			C80.431,255.399,86.572,276.605,89.572,285.839z"
							/>
							<path
								style={{ fill: "#EB725F" }}
								d="M434.429,242.012c0.181-0.389,0.368-0.776,0.546-1.167c2.003-4.398,3.804-8.888,5.386-13.452
			c6.358-3.366,30.175-16.516,25.462-22.25c-4.352-5.296-19.076,12.715-24.743,20.064c0.649-1.97,1.262-3.951,1.827-5.947
			c3.258-7.37,13.419-31.72,6.213-33.318c-6.675-1.481-7.283,21.221-7.236,31.027c-0.578,2.141-1.196,4.27-1.871,6.381
			c-0.325-9.299-1.802-32.12-8.45-30.604c-7.209,1.644,4.434,26.201,7.714,32.811c-1.799,5.338-3.898,10.573-6.268,15.688
			c0.586-8.806,1.558-32.823-5.374-31.943c-7.426,0.943,2.086,27.163,4.567,33.671c-2.664,5.579-5.65,11.007-8.906,16.266
			c1.901-9.147,5.863-31.568-0.941-31.676c-7.386-0.118-1.936,26.449-0.316,33.681c-0.548,0.86-1.097,1.72-1.659,2.571
			c-2.856,4.318-5.898,8.525-9.095,12.613c2.475-8.699,8.283-31.493,1.395-32.086c-7.393-0.637-3.747,26.498-2.655,33.679
			c-4.917,6.152-10.219,11.997-15.863,17.471c3.675-8.281,12.602-29.997,5.871-31.549c-7.23-1.667-7.426,25.716-7.352,32.982
			c-0.24,0.228-0.473,0.464-0.714,0.69c-1.957,1.835-3.945,3.666-6.049,5.335c-0.806,0.639,0.162,1.909,0.969,1.269
			c2.092-1.659,4.109-3.428,6.075-5.26c7.348-0.27,34.241-1.75,32.506-8.93c-1.579-6.534-21.898,2.759-30.514,7.031
			c3.224-3.139,6.302-6.437,9.273-9.752c2.127-2.373,4.196-4.803,6.211-7.278c7.014-1.251,33.827-6.513,31.083-13.427
			c-2.505-6.311-21.671,6.045-29.457,11.4c3.743-4.724,7.271-9.623,10.549-14.682c6.907-1.737,33.29-8.862,30.07-15.568
			c-2.971-6.186-21.591,7.842-28.824,13.619c3.424-5.434,6.561-11.045,9.365-16.819c6.977-2.871,31.378-13.462,27.294-19.562
			C456.802,219.438,441.108,234.965,434.429,242.012z"
							/>
							<g>
								<g>
									<path
										style={{ fill: "#6E7FDD" }}
										d="M142.609,262.877c0,0,2.624-5.581,3.963-12.946c-0.224-2.31-0.544-4.554-0.969-6.727
					c-0.362-1.9-0.814-3.739-1.308-5.548c-1.324,2.266-2.986,4.63-4.842,6.16c0,0,2.08-4.418,3.483-10.58
					c-1.439-4.168-3.232-8.092-5.336-11.803c-0.679,2.235-1.583,4.505-2.774,6.208c0,0,0.736-4.027,0.742-9.576
					c-0.404-0.632-0.801-1.269-1.223-1.889c-2.346-3.419-4.989-6.635-7.932-9.644c-0.239,2.534-0.717,5.22-1.639,7.305
					c0,0-0.008-4.262-1.043-9.903c-2.98-2.735-6.254-5.268-9.871-7.566c0.103,2.444,0.006,5.019-0.561,7.119
					c0,0-0.56-3.774-2.151-8.783c-3.229-1.867-6.733-3.545-10.541-5.014c0.434,2.024,0.711,4.101,0.612,5.924
					c0,0-1.046-2.908-3.093-6.838c-2.753-0.956-5.691-1.784-8.826-2.476c-3.189-0.705-6.557-1.286-10.489-1.481
					c-1.227,3.741-1.89,7.094-2.374,10.324c-0.476,3.175-0.755,6.215-0.848,9.128c2.937,3.319,5.277,5.337,5.277,5.337
					c-1.738-0.56-3.578-1.563-5.312-2.693c0.009,4.081,0.32,7.954,0.908,11.637c4.106,3.28,7.43,5.154,7.43,5.154
					c-2.164-0.223-4.603-1.054-6.848-2.026c0.85,4.2,2.043,8.164,3.53,11.926c4.896,2.986,8.872,4.52,8.872,4.52
					c-2.276,0.114-4.955-0.402-7.407-1.086c1.756,3.825,3.812,7.444,6.164,10.859c0.428,0.616,0.88,1.215,1.326,1.819
					c5.183,1.981,9.207,2.736,9.207,2.736c-2.017,0.503-4.46,0.534-6.79,0.367c2.711,3.293,5.733,6.373,9.109,9.209
					c6.256,0.897,11.125,0.537,11.125,0.537c-2.094,1.186-4.896,1.891-7.486,2.315c1.512,1.11,3.066,2.19,4.711,3.208
					c1.877,1.174,3.857,2.277,5.934,3.313c7.356,1.387,13.507,0.936,13.507,0.936c-1.83,1.036-4.202,1.704-6.499,2.141
					c0.654,0.25,1.315,0.494,1.986,0.732c2.791,0.979,5.767,1.83,8.95,2.539c3.182,0.71,6.538,1.3,10.454,1.505
					c1.211-3.73,1.862-7.075,2.338-10.3c0.478-3.226,0.749-6.309,0.835-9.266c0.018-0.712,0.027-1.417,0.028-2.117
					C145.705,259.565,144.232,261.54,142.609,262.877z"
									/>
									<g>
										<defs>
											<path
												id="SVGID_1_"
												d="M142.609,262.877c0,0,2.624-5.581,3.963-12.946c-0.224-2.31-0.544-4.554-0.969-6.727
							c-0.362-1.9-0.814-3.739-1.308-5.548c-1.324,2.266-2.986,4.63-4.842,6.16c0,0,2.08-4.418,3.483-10.58
							c-1.439-4.168-3.232-8.092-5.336-11.803c-0.679,2.235-1.583,4.505-2.774,6.208c0,0,0.736-4.027,0.742-9.576
							c-0.404-0.632-0.801-1.269-1.223-1.889c-2.346-3.419-4.989-6.635-7.932-9.644c-0.239,2.534-0.717,5.22-1.639,7.305
							c0,0-0.008-4.262-1.043-9.903c-2.98-2.735-6.254-5.268-9.871-7.566c0.103,2.444,0.006,5.019-0.561,7.119
							c0,0-0.56-3.774-2.151-8.783c-3.229-1.867-6.733-3.545-10.541-5.014c0.434,2.024,0.711,4.101,0.612,5.924
							c0,0-1.046-2.908-3.093-6.838c-2.753-0.956-5.691-1.784-8.826-2.476c-3.189-0.705-6.557-1.286-10.489-1.481
							c-1.227,3.741-1.89,7.094-2.374,10.324c-0.476,3.175-0.755,6.215-0.848,9.128c2.937,3.319,5.277,5.337,5.277,5.337
							c-1.738-0.56-3.578-1.563-5.312-2.693c0.009,4.081,0.32,7.954,0.908,11.637c4.106,3.28,7.43,5.154,7.43,5.154
							c-2.164-0.223-4.603-1.054-6.848-2.026c0.85,4.2,2.043,8.164,3.53,11.926c4.896,2.986,8.872,4.52,8.872,4.52
							c-2.276,0.114-4.955-0.402-7.407-1.086c1.756,3.825,3.812,7.444,6.164,10.859c0.428,0.616,0.88,1.215,1.326,1.819
							c5.183,1.981,9.207,2.736,9.207,2.736c-2.017,0.503-4.46,0.534-6.79,0.367c2.711,3.293,5.733,6.373,9.109,9.209
							c6.256,0.897,11.125,0.537,11.125,0.537c-2.094,1.186-4.896,1.891-7.486,2.315c1.512,1.11,3.066,2.19,4.711,3.208
							c1.877,1.174,3.857,2.277,5.934,3.313c7.356,1.387,13.507,0.936,13.507,0.936c-1.83,1.036-4.202,1.704-6.499,2.141
							c0.654,0.25,1.315,0.494,1.986,0.732c2.791,0.979,5.767,1.83,8.95,2.539c3.182,0.71,6.538,1.3,10.454,1.505
							c1.211-3.73,1.862-7.075,2.338-10.3c0.478-3.226,0.749-6.309,0.835-9.266c0.018-0.712,0.027-1.417,0.028-2.117
							C145.705,259.565,144.232,261.54,142.609,262.877z"
											/>
										</defs>
										<clipPath id="SVGID_00000062888789978449119530000018254349182717944475_">
											<use
												xlinkHref="#SVGID_1_"
												style={{ overflow: "visible" }}
											/>
										</clipPath>
										<path
											style={{
												clipPath:
													"url(#SVGID_00000062888789978449119530000018254349182717944475_)",
												fill: "#B3C9F9",
											}}
											d="M132.732,208.106
						l-1.024-0.117c-0.008,0.18-0.875,17.908-12.687,34.439l-8.873-12.906c12.162-16.915,10.644-38.651,10.627-38.87l-1.021,0.011
						c0.016,0.215,1.487,21.337-10.252,37.92l-7.894-11.482c12.114-17.039,0.656-41.069,0.538-41.311l-0.91,0.417
						c0.114,0.236,11.157,23.427-0.277,39.951l-8.464-12.311c4.451-16.922-7.097-38.26-7.215-38.475l-0.885,0.468
						c0.113,0.207,11.077,20.483,7.306,36.853l-17.435-25.36l-0.824,0.566l17.435,25.36c-16.634-2.341-31.64-19.838-31.793-20.018
						l-0.754,0.658c0.158,0.187,15.946,18.61,33.34,20.514l8.464,12.311c-19.522,4.758-37.221-13.857-37.401-14.047l-0.715,0.7
						c0.184,0.197,18.518,19.499,38.765,14.291l7.894,11.482c-19.674,5.019-38.882-3.915-39.076-4.007l-0.376,0.95
						c0.198,0.095,19.95,9.295,40.098,3.996l8.873,12.906c-19.65,5.105-36.528-0.429-36.699-0.486l-0.257,0.998
						c0.173,0.058,17.512,5.756,37.601,0.426l6.675,9.709c-19.641,5.194-34.203,3.059-34.349,3.037l-0.084,1.04
						c0.149,0.023,15.061,2.219,35.076-3.141l7.28,10.589c-16.457,4.331-28.65,2.555-28.773,2.535l-0.083,1.041
						c0.126,0.02,12.668,1.86,29.501-2.638l6.066,8.823c-10.334,2.753-17.929,1.742-18.006,1.731l-0.072,1.042
						c0.326,0.046,8.021,1.081,18.721-1.837l11.821,17.193l0.824-0.566l-11.821-17.193c6.556-8.945,8.346-16.501,8.419-16.822
						l-0.999-0.306c-0.018,0.076-1.793,7.529-8.064,16.192l-6.066-8.823c10.227-14.107,13.001-26.476,13.027-26.601l-1.001-0.295
						c-0.026,0.122-2.734,12.142-12.671,25.957l-7.28-10.589c12.171-16.769,15.461-31.478,15.493-31.626l-1.001-0.294
						c-0.032,0.144-3.253,14.505-15.136,30.984l-6.675-9.709C131.836,226.518,132.725,208.289,132.732,208.106z"
										/>
									</g>
								</g>
								<path
									style={{ opacity: "0.1", fill: "#0046A0" }}
									d="M135.567,218.067c-0.404-0.632-0.801-1.269-1.223-1.889
				c-2.346-3.419-4.989-6.635-7.932-9.644c-0.239,2.534-0.717,5.22-1.639,7.305c0,0-0.008-4.262-1.043-9.903
				c-2.98-2.735-6.254-5.268-9.871-7.566c0.103,2.444,0.006,5.019-0.561,7.119c0,0-0.56-3.774-2.151-8.783
				c-3.229-1.867-6.733-3.545-10.541-5.014c0.434,2.024,0.711,4.101,0.612,5.924c0,0-1.046-2.908-3.093-6.838
				c-2.753-0.956-5.691-1.784-8.826-2.476c-3.189-0.705-6.557-1.286-10.489-1.481l64.926,94.437c1.211-3.73,1.862-7.075,2.338-10.3
				c0.478-3.226,0.749-6.309,0.835-9.266c0.018-0.712,0.027-1.417,0.028-2.117c-1.231,1.989-2.704,3.964-4.326,5.302
				c0,0,2.624-5.581,3.963-12.946c-0.224-2.31-0.544-4.554-0.969-6.727c-0.362-1.9-0.814-3.739-1.308-5.548
				c-1.324,2.266-2.986,4.63-4.842,6.16c0,0,2.08-4.418,3.483-10.58c-1.439-4.168-3.232-8.092-5.336-11.803
				c-0.679,2.235-1.583,4.505-2.774,6.208C134.825,227.643,135.561,223.615,135.567,218.067z"
								/>
							</g>
							<g>
								<g>
									<path
										style={{ fill: "#6E7FDD" }}
										d="M414.555,350.19c0,0,6.154,0.396,13.498-1.056c2.068-1.055,4.038-2.175,5.904-3.366
					c1.636-1.033,3.181-2.127,4.682-3.25c-2.594-0.402-5.402-1.082-7.506-2.249c0,0,4.873,0.317,11.121-0.636
					c3.35-2.866,6.345-5.972,9.027-9.289c-2.328,0.187-4.772,0.178-6.793-0.307c0,0,4.017-0.791,9.182-2.818
					c0.44-0.608,0.887-1.21,1.31-1.83c2.322-3.436,4.345-7.073,6.067-10.913c-2.446,0.706-5.12,1.245-7.397,1.152
					c0,0,3.962-1.569,8.832-4.599c1.454-3.775,2.611-7.75,3.423-11.957c-2.236,0.992-4.668,1.844-6.829,2.087
					c0,0,3.307-1.903,7.384-5.22c0.555-3.688,0.831-7.564,0.804-11.645c-1.724,1.145-3.555,2.164-5.288,2.74
					c0,0,2.322-2.038,5.229-5.384c-0.119-2.911-0.425-5.949-0.93-9.12c-0.513-3.226-1.206-6.573-2.466-10.303
					c-3.93,0.229-7.293,0.841-10.476,1.574c-3.129,0.721-6.06,1.575-8.804,2.555c-2.012,3.949-3.032,6.865-3.032,6.865
					c-0.115-1.822,0.144-3.902,0.559-5.929c-3.794,1.503-7.284,3.212-10.496,5.108c-1.547,5.023-2.073,8.801-2.073,8.801
					c-0.585-2.095-0.705-4.669-0.624-7.114c-3.596,2.33-6.848,4.892-9.803,7.654c-0.985,5.65-0.955,9.911-0.955,9.911
					c-0.94-2.076-1.442-4.758-1.704-7.29c-2.916,3.035-5.53,6.274-7.845,9.714c-0.417,0.624-0.808,1.264-1.206,1.9
					c0.055,5.548,0.827,9.569,0.827,9.569c-1.207-1.692-2.131-3.954-2.829-6.183c-2.071,3.729-3.829,7.669-5.231,11.85
					c1.457,6.15,3.577,10.549,3.577,10.549c-1.87-1.514-3.553-3.862-4.897-6.117c-0.478,1.813-0.914,3.655-1.259,5.559
					c-0.405,2.176-0.706,4.423-0.909,6.735c1.405,7.353,4.078,12.91,4.078,12.91c-1.634-1.323-3.125-3.285-4.373-5.263
					c0.007,0.7,0.022,1.405,0.047,2.116c0.112,2.955,0.41,6.036,0.917,9.258c0.505,3.221,1.186,6.56,2.43,10.278
					c3.914-0.24,7.265-0.86,10.44-1.598c3.177-0.737,6.145-1.615,8.927-2.618c0.669-0.244,1.328-0.494,1.98-0.75
					C418.772,351.857,416.394,351.21,414.555,350.19z"
									/>
									<g>
										<defs>
											<path
												id="SVGID_00000149382627256407288720000003399459996231619498_"
												d="M414.555,350.19c0,0,6.154,0.396,13.498-1.056
							c2.068-1.055,4.038-2.175,5.904-3.366c1.636-1.033,3.181-2.127,4.682-3.25c-2.594-0.402-5.402-1.082-7.506-2.249
							c0,0,4.873,0.317,11.121-0.636c3.35-2.866,6.345-5.972,9.027-9.289c-2.328,0.187-4.772,0.178-6.793-0.307
							c0,0,4.017-0.791,9.182-2.818c0.44-0.608,0.887-1.21,1.31-1.83c2.322-3.436,4.345-7.073,6.067-10.913
							c-2.446,0.706-5.12,1.245-7.397,1.152c0,0,3.962-1.569,8.832-4.599c1.454-3.775,2.611-7.75,3.423-11.957
							c-2.236,0.992-4.668,1.844-6.829,2.087c0,0,3.307-1.903,7.384-5.22c0.555-3.688,0.831-7.564,0.804-11.645
							c-1.724,1.145-3.555,2.164-5.288,2.74c0,0,2.322-2.038,5.229-5.384c-0.119-2.911-0.425-5.949-0.93-9.12
							c-0.513-3.226-1.206-6.573-2.466-10.303c-3.93,0.229-7.293,0.841-10.476,1.574c-3.129,0.721-6.06,1.575-8.804,2.555
							c-2.012,3.949-3.032,6.865-3.032,6.865c-0.115-1.822,0.144-3.902,0.559-5.929c-3.794,1.503-7.284,3.212-10.496,5.108
							c-1.547,5.023-2.073,8.801-2.073,8.801c-0.585-2.095-0.705-4.669-0.624-7.114c-3.596,2.33-6.848,4.892-9.803,7.654
							c-0.985,5.65-0.955,9.911-0.955,9.911c-0.94-2.076-1.442-4.758-1.704-7.29c-2.916,3.035-5.53,6.274-7.845,9.714
							c-0.417,0.624-0.808,1.264-1.206,1.9c0.055,5.548,0.827,9.569,0.827,9.569c-1.207-1.692-2.131-3.954-2.829-6.183
							c-2.071,3.729-3.829,7.669-5.231,11.85c1.457,6.15,3.577,10.549,3.577,10.549c-1.87-1.514-3.553-3.862-4.897-6.117
							c-0.478,1.813-0.914,3.655-1.259,5.559c-0.405,2.176-0.706,4.423-0.909,6.735c1.405,7.353,4.078,12.91,4.078,12.91
							c-1.634-1.323-3.125-3.285-4.373-5.263c0.007,0.7,0.022,1.405,0.047,2.116c0.112,2.955,0.41,6.036,0.917,9.258
							c0.505,3.221,1.186,6.56,2.43,10.278c3.914-0.24,7.265-0.86,10.44-1.598c3.177-0.737,6.145-1.615,8.927-2.618
							c0.669-0.244,1.328-0.494,1.98-0.75C418.772,351.857,416.394,351.21,414.555,350.19z"
											/>
										</defs>
										<clipPath id="SVGID_00000037663177019324708200000017027442673538205824_">
											<use
												xlinkHref="#SVGID_00000149382627256407288720000003399459996231619498_"
												style={{ overflow: "visible" }}
											/>
										</clipPath>
										<path
											style={{
												clipPath:
													"url(#SVGID_00000037663177019324708200000017027442673538205824_)",
												fill: "#B3C9F9",
											}}
											d="M461.899,320.933
						l-0.266-0.996c-0.17,0.058-16.983,5.747-36.693,0.813l8.758-12.984c20.195,5.119,39.864-4.257,40.061-4.353l-0.384-0.946
						c-0.194,0.094-19.309,9.202-39.039,4.355l7.791-11.552c20.293,5.028,38.454-14.436,38.636-14.635l-0.722-0.694
						c-0.178,0.192-17.71,18.964-37.274,14.38l8.354-12.386c17.376-2.059,32.999-20.621,33.156-20.81l-0.759-0.652
						c-0.151,0.182-15,17.812-31.613,20.301l17.209-25.515l-0.829-0.559l-17.209,25.514c-3.916-16.335,6.866-36.708,6.978-36.916
						l-0.889-0.46c-0.116,0.216-11.473,21.655-6.872,38.537l-8.354,12.386c-11.58-16.421-0.744-39.71-0.632-39.947l-0.914-0.409
						c-0.116,0.243-11.359,24.374,0.906,41.305l-7.791,11.552c-11.878-16.468-10.603-37.613-10.589-37.827l-1.021-0.002
						c-0.015,0.219-1.339,21.968,10.973,38.774l-8.758,12.984c-11.95-16.414-12.984-34.146-12.994-34.325l-1.023,0.126
						c0.009,0.183,1.06,18.403,13.38,35.142l-6.588,9.768c-12.029-16.373-15.377-30.704-15.411-30.848l-0.998,0.303
						c0.033,0.147,3.453,14.827,15.774,31.486l-7.185,10.653c-10.059-13.726-12.874-25.721-12.901-25.843l-0.999,0.304
						c0.027,0.124,2.911,12.469,13.263,26.484l-5.987,8.876c-6.348-8.607-8.19-16.044-8.208-16.119l-0.996,0.315
						c0.077,0.32,1.934,7.859,8.569,16.746l-11.667,17.298l0.829,0.559l11.667-17.298c10.725,2.823,18.411,1.72,18.737,1.671
						l-0.081-1.041c-0.077,0.011-7.663,1.09-18.02-1.571l5.987-8.876c16.873,4.348,29.398,2.396,29.524,2.375l-0.093-1.04
						c-0.123,0.021-12.299,1.905-28.794-2.279l7.185-10.653c20.062,5.181,34.954,2.853,35.103,2.828l-0.093-1.039
						c-0.146,0.023-14.688,2.288-34.374-2.731l6.588-9.768C444.439,326.845,461.726,320.993,461.899,320.933z"
										/>
									</g>
								</g>
								<path
									style={{ opacity: "0.1", fill: "#0046A0" }}
									d="M453.669,327.22c0.44-0.608,0.887-1.21,1.31-1.83
				c2.322-3.436,4.345-7.073,6.067-10.913c-2.446,0.706-5.12,1.245-7.397,1.152c0,0,3.962-1.569,8.832-4.599
				c1.454-3.775,2.611-7.75,3.423-11.957c-2.236,0.992-4.668,1.844-6.829,2.087c0,0,3.307-1.903,7.384-5.22
				c0.555-3.688,0.831-7.564,0.804-11.645c-1.724,1.145-3.555,2.164-5.288,2.74c0,0,2.322-2.038,5.229-5.384
				c-0.119-2.911-0.425-5.949-0.93-9.12c-0.513-3.226-1.206-6.573-2.466-10.303l-64.082,95.011c3.914-0.24,7.265-0.86,10.44-1.598
				c3.177-0.737,6.145-1.615,8.927-2.618c0.669-0.244,1.328-0.494,1.98-0.75c-2.302-0.416-4.679-1.063-6.518-2.083
				c0,0,6.154,0.396,13.498-1.056c2.068-1.055,4.038-2.175,5.904-3.366c1.636-1.033,3.181-2.127,4.682-3.25
				c-2.594-0.402-5.402-1.082-7.506-2.249c0,0,4.873,0.317,11.121-0.636c3.35-2.866,6.345-5.972,9.027-9.289
				c-2.328,0.187-4.772,0.178-6.793-0.307C444.487,330.038,448.504,329.247,453.669,327.22z"
								/>
							</g>
						</g>
						<ellipse
							style={{ fill: "#EDF0FC" }}
							cx="250"
							cy="416.612"
							rx="229.709"
							ry="17.064"
						/>
						<g>
							<g>
								<rect
									x="128.93"
									y="146.09"
									style={{ fill: "#F5F9FF" }}
									width="291.483"
									height="261.483"
								/>
								<rect
									x="128.93"
									y="146.09"
									style={{ fill: "#D0DBF7" }}
									width="291.483"
									height="30.922"
								/>
							</g>
							<g>
								<path
									style={{ fill: "#EB725F" }}
									d="M152.447,161.551c0,3.28-2.659,5.94-5.94,5.94c-3.28,0-5.939-2.659-5.939-5.94
				s2.659-5.939,5.939-5.939C149.788,155.611,152.447,158.27,152.447,161.551z"
								/>
								<path
									style={{ fill: "#F9AB43" }}
									d="M172.447,161.551c0,3.28-2.659,5.94-5.94,5.94c-3.28,0-5.939-2.659-5.939-5.94
				s2.659-5.939,5.939-5.939C169.788,155.611,172.447,158.27,172.447,161.551z"
								/>
								<path
									style={{ fill: "#6E7FDD" }}
									d="M192.447,161.551c0,3.28-2.659,5.94-5.94,5.94s-5.939-2.659-5.939-5.94s2.659-5.939,5.939-5.939
				S192.447,158.27,192.447,161.551z"
								/>
							</g>
						</g>
						<g>
							<g>
								<g>
									<path
										style={{ fill: "#FFCF74" }}
										d="M377.701,266.286c1.397-3.542-0.576-6.44-4.383-6.44h-140.3c-3.807,0-8.065,2.898-9.462,6.44
					l-31.099,78.867c-1.397,3.542,0.576,6.44,4.383,6.44h140.3c3.807,0,8.065-2.898,9.462-6.44L377.701,266.286z"
									/>
								</g>
								<path
									style={{ fill: "#FFCF74" }}
									d="M185.732,338.427l31.099-78.867c1.397-3.542,5.654-6.44,9.462-6.44H336.43v-6.989
				c0-3.807-3.115-6.922-6.922-6.922h-49.13c-3.807,0-8.408-2.738-10.225-6.084l-6.69-12.323c-1.816-3.346-6.418-6.084-10.225-6.084
				h-63.124c-3.807,0-6.922,3.115-6.922,6.922v116.302c0,3.343,2.403,6.151,5.567,6.786
				C185.862,344.121,184.512,341.52,185.732,338.427z"
								/>
							</g>
							<path
								style={{ fill: "#EB725F" }}
								d="M287.669,281.671c-14.446,0-26.158,11.711-26.158,26.158c0,14.447,11.711,26.158,26.158,26.158
			c14.447,0,26.158-11.711,26.158-26.158C313.826,293.383,302.115,281.671,287.669,281.671z M300.468,316.858l-3.769,3.769
			l-9.03-9.029l-9.03,9.029l-3.769-3.769l9.03-9.029l-9.03-9.029l3.769-3.769l9.03,9.03l9.03-9.03l3.769,3.769l-9.03,9.029
			L300.468,316.858z"
							/>
						</g>
						<g>
							<g>
								<g>
									<ellipse
										style={{ fill: "#EB725F" }}
										cx="124.671"
										cy="408.516"
										rx="75.852"
										ry="12.394"
									/>
									<path
										style={{ fill: "#FFCF74" }}
										d="M145.993,252.836h-21.321H103.35L70.612,405.802c27.154,5.852,54.06,5.852,54.06,5.852
					s26.905,0,54.059-5.852L145.993,252.836z"
									/>
									<ellipse
										style={{ fill: "#EB725F" }}
										cx="124.671"
										cy="252.836"
										rx="21.321"
										ry="3.245"
									/>
									<g>
										<defs>
											<path
												id="SVGID_00000060710511799109216810000015184404260135572637_"
												d="M145.993,252.836h-21.321H103.35L70.612,405.802
							c27.154,5.852,54.06,5.852,54.06,5.852s26.905,0,54.059-5.852L145.993,252.836z"
											/>
										</defs>
										<clipPath id="SVGID_00000013909324307335713380000006395556695190761604_">
											<use
												xlinkHref="#SVGID_00000060710511799109216810000015184404260135572637_"
												style={{ overflow: "visible" }}
											/>
										</clipPath>
										<g
											style={{
												clipPath:
													"url(#SVGID_00000013909324307335713380000006395556695190761604_)",
											}}
										>
											<g>
												<path
													style={{ fill: "#F9AB43" }}
													d="M123.743,399.076c-43.89,0-73.529-7.336-75.37-7.803l6.106-24.047l-3.053,12.023l3.04-12.027
								c0.629,0.158,63.888,15.661,141.086-0.127l4.972,24.308C172.412,397.152,146.208,399.076,123.743,399.076z"
												/>
											</g>
											<g>
												<path
													style={{ fill: "#F9AB43" }}
													d="M123.743,345.097c-43.89,0-73.529-7.336-75.37-7.803l6.106-24.047l-3.053,12.023l3.04-12.027
								c0.629,0.158,63.888,15.661,141.086-0.127l4.972,24.308C172.412,343.173,146.208,345.097,123.743,345.097z"
												/>
											</g>
											<g>
												<path
													style={{ fill: "#F9AB43" }}
													d="M123.743,291.118c-43.89,0-73.529-7.336-75.37-7.803l6.106-24.047l-3.053,12.023l3.04-12.027
								c0.629,0.158,63.888,15.661,141.086-0.127l4.972,24.308C172.412,289.194,146.208,291.118,123.743,291.118z"
												/>
											</g>
										</g>
									</g>
								</g>
								<path
									style={{ opacity: "0.1", fill: "#0046A0" }}
									d="M151.323,326.641c0,33.261-6.885,63.305-17.959,84.764
				c10.11-0.464,27.682-1.792,45.367-5.603l-32.738-152.966h-7.638C146.467,273.052,151.323,298.711,151.323,326.641z"
								/>
							</g>
							<g style={{ opacity: "0.3" }}>
								<path
									style={{ fill: "#FFFFFF" }}
									d="M105.666,276.437c-0.779,3.759-1.558,7.517-2.338,11.276c-1.872,9.029-3.744,18.058-5.616,27.086
				c-2.276,10.976-4.551,21.953-6.827,32.929c-1.958,9.445-3.916,18.891-5.875,28.336c-0.948,4.573-2.118,9.159-2.855,13.772
				c-0.01,0.065-0.027,0.129-0.04,0.194c-0.784,3.781,5.108,4.853,5.89,1.084c0.779-3.758,1.559-7.517,2.338-11.276
				c1.872-9.029,3.744-18.057,5.616-27.086c2.276-10.976,4.551-21.953,6.827-32.929c1.958-9.445,3.917-18.891,5.875-28.336
				c0.948-4.573,2.118-9.159,2.855-13.772c0.01-0.065,0.027-0.13,0.04-0.194C112.339,273.74,106.447,272.668,105.666,276.437
				L105.666,276.437z"
								/>
							</g>
						</g>
						<g>
							<g>
								<g>
									<rect
										x="261.69"
										y="386.505"
										transform="matrix(0.9616 -0.2745 0.2745 0.9616 -94.465 107.045)"
										style={{ fill: "#6E7FDD" }}
										width="147.041"
										height="9.032"
									/>
								</g>
								<g>
									<rect
										x="340.14"
										y="375.526"
										transform="matrix(0.9616 -0.2745 0.2745 0.9616 -89.9734 117.18)"
										style={{ fill: "#EB725F" }}
										width="67.054"
										height="9.032"
									/>
								</g>
							</g>
							<g>
								<g>
									<ellipse
										transform="matrix(0.9964 -0.0847 0.0847 0.9964 -29.9402 35.6984)"
										style={{ fill: "#EB725F" }}
										cx="405.907"
										cy="370.837"
										rx="45.262"
										ry="45.262"
									/>

									<ellipse
										transform="matrix(0.4072 -0.9134 0.9134 0.4072 -98.0725 590.5773)"
										style={{ fill: "#D0DBF7" }}
										cx="405.907"
										cy="370.837"
										rx="36.434"
										ry="36.434"
									/>
								</g>
								<g>
									<path
										style={{ fill: "#FFFFFF" }}
										d="M433.294,363.018l-4.342,1.24c-3.628-12.707-16.917-20.093-29.624-16.465l-1.24-4.342
					C413.189,339.139,428.983,347.918,433.294,363.018z"
									/>
								</g>
							</g>
						</g>
						<g>
							<g>
								<polygon
									style={{ fill: "#E2E6FF" }}
									points="372.173,144.442 328.851,131.308 302.802,217.232 370.117,237.64 389.096,175.035 			"
								/>
								<polygon
									style={{ fill: "#CAD2F9" }}
									points="367.796,178.405 364.701,172.615 350.831,180.031 343.414,166.162 337.625,169.258 
				345.042,183.127 331.172,190.543 334.267,196.333 348.137,188.916 355.554,202.786 361.344,199.69 353.927,185.821 			"
								/>
							</g>
							<g>
								<polygon
									style={{ fill: "#E2E6FF" }}
									points="257.214,85.608 213.231,96.322 234.481,183.557 302.823,166.909 287.34,103.35 			"
								/>
								<polygon
									style={{ fill: "#CAD2F9" }}
									points="270.711,117.079 265.102,113.668 256.928,127.105 243.49,118.932 240.079,124.541 
				253.517,132.714 245.343,146.152 250.952,149.563 259.126,136.126 272.564,144.299 275.975,138.69 262.537,130.517 			"
								/>
							</g>
						</g>
						<g>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="411.337,93.463 400.156,93.463 400.156,82.282 396.177,82.282 396.177,93.463 
			384.997,93.463 384.997,97.442 396.177,97.442 396.177,108.622 400.156,108.622 400.156,97.442 411.337,97.442 		"
							/>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="436.378,131.933 430.288,131.933 430.288,125.843 428.12,125.843 428.12,131.933 
			422.031,131.933 422.031,134.1 428.12,134.1 428.12,140.19 430.288,140.19 430.288,134.1 436.378,134.1 		"
							/>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="369.171,121.307 361.796,121.307 361.796,113.933 359.171,113.933 359.171,121.307 
			351.797,121.307 351.797,123.932 359.171,123.932 359.171,131.307 361.796,131.307 361.796,123.932 369.171,123.932 		"
							/>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="89.962,120.157 78.781,120.157 78.781,108.977 74.802,108.977 74.802,120.157 
			63.622,120.157 63.622,124.137 74.802,124.137 74.802,135.317 78.781,135.317 78.781,124.137 89.962,124.137 		"
							/>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="138.763,113.484 132.673,113.484 132.673,107.394 130.505,107.394 130.505,113.484 
			124.415,113.484 124.415,115.651 130.505,115.651 130.505,121.741 132.673,121.741 132.673,115.651 138.763,115.651 		"
							/>
							<polygon
								style={{ fill: "#E2E6FF" }}
								points="101.685,163.147 94.31,163.147 94.31,155.772 91.685,155.772 91.685,163.147 
			84.311,163.147 84.311,165.771 91.685,165.771 91.685,173.146 94.31,173.146 94.31,165.771 101.685,165.771 		"
							/>
						</g>
						<g>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M346.53,74.956c0,1.339-1.085,2.424-2.424,2.424s-2.424-1.085-2.424-2.424
			c0-1.338,1.085-2.424,2.424-2.424S346.53,73.617,346.53,74.956z"
							/>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M455.982,162.103c0,2.535-2.055,4.59-4.59,4.59c-2.535,0-4.59-2.055-4.59-4.59
			s2.055-4.59,4.59-4.59C453.927,157.513,455.982,159.568,455.982,162.103z"
							/>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M310.693,100.233c0,1.339-1.085,2.424-2.424,2.424s-2.424-1.085-2.424-2.424
			s1.085-2.424,2.424-2.424S310.693,98.894,310.693,100.233z"
							/>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M172.659,74.956c0,2.535-2.055,4.59-4.59,4.59c-2.535,0-4.59-2.055-4.59-4.59
			c0-2.535,2.055-4.59,4.59-4.59C170.604,70.366,172.659,72.421,172.659,74.956z"
							/>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M190.493,123.619c0,1.339-1.085,2.424-2.424,2.424c-1.339,0-2.424-1.085-2.424-2.424
			s1.085-2.424,2.424-2.424C189.408,121.196,190.493,122.281,190.493,123.619z"
							/>
							<path
								style={{ fill: "#CAD2F9" }}
								d="M48.865,170.557c0,1.339-1.085,2.424-2.424,2.424c-1.339,0-2.424-1.085-2.424-2.424
			c0-1.339,1.085-2.424,2.424-2.424C47.78,168.133,48.865,169.218,48.865,170.557z"
							/>
						</g>
					</g>
				</svg>
			</div>
			<div className="no-results-text-container">
				<h1 className="no-results-message">
					{message || "No Results Found"}
				</h1>
				<p className="no-results-sub-message">
					Please contact your <br /> restaurant administrator for
					assistance.
				</p>
			</div>

			<div className="button-container">
				<button onClick={clearInput} className="go-back-button">
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NoSearchResults;
