import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

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
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <p>Loading Products...</p>;

	return (
		<div className="shop">
			<h2>Shop Page</h2>
			<div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Shop;
