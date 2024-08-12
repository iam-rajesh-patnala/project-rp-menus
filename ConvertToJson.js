const data = [
	{
		veg: [
			{
				id: 1,
				menu: "Soups",
				img: "",
				link: "/categories/veg/soups",
			},
			{
				id: 2,
				menu: "Starters",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/starters",
			},
			{
				id: 3,
				menu: "Salads",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/salads",
			},
			{
				id: 4,
				menu: "Naans & Breads",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/naans-breads",
			},
			{
				id: 5,
				menu: "Curries",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/curries",
			},
			{
				id: 6,
				menu: "Rice",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/rice",
			},
			{
				id: 7,
				menu: "Fired Rice",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/fired-rice",
			},
			{
				id: 8,
				menu: "Biryani",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/biryani",
			},
			{
				id: 9,
				menu: "Noodles",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/noodles",
			},
			{
				id: 10,
				menu: "Pizzas & Burgers",
				img: "../assets/photos/Veg/1__Veg-Soups/1__Tomato_Basil_Soup.webp",
				link: "/categories/veg/pizzas-burgers",
			},
		],
		nonVeg: [
			{
				id: 1,
				menu: "Non-Veg",
				img: "",
				link: "/categories/non-veg",
			},
		],
		desserts: [
			{
				id: 1,
				menu: "Desserts",
				img: "",
				link: "/categories/desserts",
			},
		],
		beverages: [
			{
				id: 1,
				menu: "Beverages",
				img: "",
				link: "/categories/beverages",
			},
		],
	},
];

const convertedData = JSON.stringify(data);

console.log(convertedData);
