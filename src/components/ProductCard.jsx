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
		<div className="border border-gray-300 p-4 mb-4 max-w-xs rounded shadow-sm flex flex-col min-h-[400px]">
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-40 object-contain"
			/>
			<div className="mt-auto">
				<h3 className="text-lg font-semibold mb-3">{product.title}</h3>
				<div className="flex items-center gap-2 mb-3">
					<button
						onClick={decrement}
						className="bg-gray-200 px-2 rounded hover:bg-gray-300"
					>
						-
					</button>
					<input
						type="number"
						value={quantity}
						onChange={onQuantityChange}
						className="w-12 text-center border rounded"
						min={1}
					/>
					<button
						onClick={increment}
						className="bg-gray-200 px-2 rounded hover:bg-gray-300"
					>
						+
					</button>
				</div>
				<button
					onClick={handleAddToCart}
					className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCard;
