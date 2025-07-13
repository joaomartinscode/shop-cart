import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
	return (
		<Router>
			<nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
				<Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
				<Link to="/shop">Shop</Link>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</Router>
	);
}

export default App;
