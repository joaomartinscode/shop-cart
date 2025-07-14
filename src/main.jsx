import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<CartProvider>
			<App />
		</CartProvider>
	</BrowserRouter>
);
