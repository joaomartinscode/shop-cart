import { Routes, Route, NavLink } from "react-router-dom";
import { useCart } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
	const { totalItems } = useCart();

	const baseLinkClass =
		"px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500";
	const activeClass = "text-blue-600 font-semibold";
	const inactiveClass = "text-gray-700 hover:text-blue-500";

	return (
		<>
			<header className="bg-white shadow-md">
				<nav
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
					aria-label="Primary Navigation"
				>
					<div className="flex justify-between items-center h-16">
						<div className="text-xl font-bold text-blue-600 select-none cursor-default">
							ShopMate
						</div>

						<div className="flex space-x-4">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
								}
								end
							>
								Home
							</NavLink>

							<NavLink
								to="/shop"
								className={({ isActive }) =>
									`${baseLinkClass} ${isActive ? activeClass : inactiveClass}`
								}
							>
								Shop
							</NavLink>

							<NavLink
								to="/cart"
								className={({ isActive }) =>
									`${baseLinkClass} ${
										isActive ? activeClass : inactiveClass
									} flex items-center`
								}
							>
								Cart
								{totalItems > 0 && (
									<span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-full">
										{totalItems}
									</span>
								)}
							</NavLink>
						</div>
					</div>
				</nav>
			</header>

			<main className="max-w-7xl mx-auto p-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
