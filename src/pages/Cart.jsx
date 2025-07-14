import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const { cartItems, removeFromCart } = useCart(); // ✅ include removeFromCart
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	const cartProductsList = products.filter((product) => cartItems[product.id]);

	if (cartProductsList.length === 0) {
		return (
			<p className="text-center text-gray-600 mt-10 text-lg">
				Your cart is empty.
			</p>
		);
	}

	return (
		<div className="p-8 max-w-4xl mx-auto">
			<h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>
			<ul className="space-y-6">
				{cartProductsList.map((product) => {
					const quantity = cartItems[product.id];
					return (
						<li
							key={product.id}
							className="flex items-center bg-white rounded-lg shadow p-4"
						>
							<img
								src={product.image}
								alt={product.title}
								className="w-12 h-12 object-contain mr-4"
							/>
							<div className="flex-1">
								<strong className="block text-lg">{product.title}</strong>
								<p className="text-gray-600">
									Quantity: <span className="font-medium">{quantity}</span>
								</p>
								<p className="text-gray-600">
									Price per item:{" "}
									<span className="font-medium">${product.price}</span>
								</p>
								<p className="text-gray-600">
									Total:{" "}
									<span className="font-medium">
										${(product.price * quantity).toFixed(2)}
									</span>
								</p>
							</div>
							<button
								onClick={() => removeFromCart(product.id)}
								className="ml-4 text-red-600 hover:text-red-800 font-medium"
							>
								Remove
							</button>
						</li>
					);
				})}
			</ul>
			<div className="text-center mt-8">
				<button
					onClick={() => alert("Checkout not implemented yet!")}
					className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
