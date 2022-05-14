import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

import { StoreProvider } from "./context";

function App() {
	return (
		<Router>
			<StoreProvider>
				<div>
					<Navbar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/*" element={<Error />} />
					</Routes>

					<Footer />
				</div>
			</StoreProvider>
		</Router>
	);
}

export default App;
