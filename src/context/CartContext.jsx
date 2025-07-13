import { createContext, useState, useContext } from "react";

// Create a CartContext to manage cart state
const CartContext = createContext();

// Provider component to wrap around parts of the app that need access to the cart
export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState({}); // Initialize cart as an empty object

	// Function to add an item to the cart or update its quantity
	const addToCart = (productId, quantity) => {
		setCartItems((prev) => {
			const oldQuantity = prev[productId] || 0;
			return {
				...prev,
				[productId]: oldQuantity + quantity,
			};
		});
	};

	// Calculate total items in the cart
	const totalItems = Object.values(cartItems).reduce(
		(total, qty) => total + qty,
		0
	);

	return (
		<CartContext.Provider value={{ cartItems, addToCart, totalItems }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use the CartContext
export const useCart = () => {
	return useContext(CartContext);
};
