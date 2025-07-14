import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
				setError("Failed to load products. Please try again later.");
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[50vh]">
				<p className="text-lg text-gray-600 animate-pulse">
					Loading Products...
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-[50vh]">
				<p className="text-red-500 text-lg">{error}</p>
			</div>
		);
	}

	return (
		<div className="p-8">
			<h2 className="text-3xl font-semibold mb-6 text-center">Shop Page</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Shop;
