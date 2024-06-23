import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/actions/orders"; // Importa la acción createOrder

const ProductCard = ({ product }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const dispatch = useDispatch(); // Obtener el dispatcher de Redux

	const openForm = () => {
		setIsFormOpen(true);
	};

	const closeForm = () => {
		setIsFormOpen(false);
	};

	const addToCart = (product) => {
		dispatch(createOrder(product._id)); 
	};

	return (
		<div className="card border-2 border-gray-300 rounded-md p-4 mb-8 relative">
			<img
				src={product.image}
				alt={product.title}
				className="w-full rounded-3xl h-32 mb-4 object-contain"
			/>
			<h2 className="text-xl font-semibold mb-2">{product.title}</h2>
			<p className="mb-4">{product.description}</p>
			<p className="font-bold text-xl">${product.price}</p>
			<button
				className="border-2 rounded-lg px-2 py-1 mt-4 bg-blue-500 text-white"
				onClick={() => addToCart(product)}
			>
				Add to cart
			</button>
		</div>
	);
};

export default ProductCard;
