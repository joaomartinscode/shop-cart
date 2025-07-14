function Home() {
	return (
		<div className="flex flex-col items-center justify-center px-4 py-6 text-center">
			<div className="max-w-3xl w-full">
				<h1 className="text-5xl font-extrabold text-blue-600 mb-6">
					Welcome to ShopMate 🛍️
				</h1>
				<p className="text-lg text-gray-700 mb-8">
					Your one-stop shop for everything you need. Browse our products and
					add your favorites to the cart!
				</p>
				<div className="overflow-hidden rounded-lg shadow-lg">
					<img
						src="https://images.unsplash.com/photo-1522684462852-01b24e76b77d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Shopping"
						className="w-full h-auto object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
