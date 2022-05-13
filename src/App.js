import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

const cartItems = [
	{
		name: "Vibrant Trainers",
		price: 24,
		size: "UK 10",
		color: "Blue",
		image: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
	},
	{
		name: "Red Sneakers",
		price: 45.99,
		size: "UK 12",
		color: "Red",
		image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
	},
	{
		name: "White Shirt",
		price: 18.99,
		size: "L",
		color: "White",
		image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	},
	{
		name: "Tracking BackPack",
		price: 89,
		size: "Regular",
		color: "Blue",
		image: "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	},
];

const cards = [
	{
		id: 1,
		title: "Sneakers and Shoes",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error totam similique veniam sed doloribus porro in dicta quisquam alias quis exercitationem dolorem dolores cupiditate, facilis iste harum ducimus accusantium!",
		icon: "M192 159.1L224 159.1V32L192 32c-35.38 0-64 28.62-64 63.1S156.6 159.1 192 159.1zM0 415.1c0 35.37 28.62 64.01 64 64.01l32-.0103v-127.1l-32-.0005C28.62 351.1 0 380.6 0 415.1zM337.5 287.1c-35 0-76.25 13.12-104.8 31.1C208 336.4 188.3 351.1 128 351.1v128l57.5 15.98c26.25 7.25 53 13.13 80.38 15.01c32.63 2.375 65.63 .743 97.5-6.132C472.9 481.2 512 429.2 512 383.1C512 319.1 427.9 287.1 337.5 287.1zM491.4 7.252c-31.88-6.875-64.88-8.625-97.5-6.25C366.5 2.877 339.8 8.752 313.5 16L256 32V159.1c60.25 0 80 15.62 104.8 31.1c28.5 18.87 69.75 31.1 104.8 31.1C555.9 223.1 640 191.1 640 127.1C640 82.75 600.9 30.75 491.4 7.252z",
	},
	{
		id: 2,
		title: "Clothing",
		content:
			"Ipsum dolor sit amet consectetur adipisicing elit. Minima error totam similique veniam sed doloribus porro in dicta quisquam alias quis exercitationem dolorem dolores cupiditate, facilis iste harum ducimus accusantium!",
		icon: "M640 162.8c0 6.917-2.293 13.88-7.012 19.7l-49.96 61.63c-6.32 7.796-15.62 11.85-25.01 11.85c-7.01 0-14.07-2.262-19.97-6.919L480 203.3V464c0 26.51-21.49 48-48 48H208C181.5 512 160 490.5 160 464V203.3L101.1 249.1C96.05 253.7 88.99 255.1 81.98 255.1c-9.388 0-18.69-4.057-25.01-11.85L7.012 182.5C2.292 176.7-.0003 169.7-.0003 162.8c0-9.262 4.111-18.44 12.01-24.68l135-106.6C159.8 21.49 175.7 16 191.1 16H225.6C233.3 61.36 272.5 96 320 96s86.73-34.64 94.39-80h33.6c16.35 0 32.22 5.49 44.99 15.57l135 106.6C635.9 144.4 640 153.6 640 162.8z",
	},
	{
		id: 3,
		title: "Backpacks and Bags",
		content:
			"Dolor sit amet consectetur adipisicing elit. Minima error totam similique veniam sed doloribus porro in dicta quisquam alias quis exercitationem dolorem dolores cupiditate, facilis iste harum ducimus accusantium!",
		icon: "M368 128h-47.95l.0123-80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48L128 128H80C53.5 128 32 149.5 32 176v256C32 458.5 53.5 480 80 480h16.05L96 496C96 504.9 103.1 512 112 512h32C152.9 512 160 504.9 160 496L160.1 480h128L288 496c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16l.0492-16H368c26.5 0 48-21.5 48-48v-256C416 149.5 394.5 128 368 128zM176.1 48h96V128h-96V48zM336 384h-224C103.2 384 96 376.8 96 368C96 359.2 103.2 352 112 352h224c8.801 0 16 7.199 16 16C352 376.8 344.8 384 336 384zM336 256h-224C103.2 256 96 248.8 96 240C96 231.2 103.2 224 112 224h224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256z",
	},
];

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home cards={cards} />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/cart"
						element={<Cart cartItems={cartItems} />}
					/>
					<Route path="/*" element={<Error />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
