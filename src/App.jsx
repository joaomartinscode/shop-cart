import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useCart } from "./context/CartContext";

const Navbar = () => {
	const { totalItems } = useCart();

	return (
		<nav style={{ padding: "1rem", background: "#f0f0f0" }}>
			<Link to="/" style={{ marginRight: "1rem" }}>
				Home
			</Link>
			<Link to="/shop" style={{ marginRight: "1rem" }}>
				Shop ({totalItems})
			</Link>
			<Link to="/cart">Cart</Link>
		</nav>
	);
};

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
};

export default App;
