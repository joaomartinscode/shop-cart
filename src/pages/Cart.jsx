import { useCart } from "../context/CartContext";

const Cart = () => {
	const { cartItems } = useCart();

	const entries = Object.entries(cartItems);

	if (entries.length === 0) {
		return <p>Your cart is empty!</p>;
	}

	return (
		<div>
			<h2>Your Shopping Cart</h2>
			<ul>
				{entries.map((productId, quantity) => (
					<li key={productId}>
						Product ID: {productId} - Quantity: {quantity}
					</li>
				))}
			</ul>
			<button
				onClick={() => alert("Checkout not implemented yet!")}
				style={{ marginTop: 20 }}
			>
				Checkout
			</button>
		</div>
	);
};

export default Cart;
