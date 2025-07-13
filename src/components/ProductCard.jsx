import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);

	const increment = () => setQuantity((quantity) => quantity + 1);
	const decrement = () => setQuantity((quantity) => quantity - 1);

	const onQuantityChange = (e) => {
		const val = Number(e.target.value);
		if (val >= 1) setQuantity(val);
	};

	const handleAddToCart = () => {
		addToCart(product.id, quantity);
		setQuantity(1);
	};

	return (
		<div
			style={{
				border: "1px solid #ddd",
				padding: 12,
				marginBottom: 12,
				maxWidth: 300,
			}}
		>
			<img
				src="{product.image}"
				alt="{product.title}"
				style={{ maxWidth: "100%", height: 150, objectFit: "contain" }}
			/>
			<h3>{product.title}</h3>
			<div>
				<button onClick={decrement}>-</button>
				<input
					type="number"
					value={quantity}
					onChange={onQuantityChange}
					style={{ width: 40, textAlign: "center", margin: "0 8px" }}
					min={1}
				/>
				<button onClick={increment}>+</button>
			</div>
			<button onClick={handleAddToCart} style={{ marginTop: 8 }}>
				{" "}
				Add to Cart
			</button>
		</div>
	);
};

ProductCard.PropTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
