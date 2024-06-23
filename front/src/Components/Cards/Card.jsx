import React, { useState } from "react";
import CreateProductForm from "../Create/CreateProduct";

const ProductCard = ({ product }) => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const openForm = () => {
		setIsFormOpen(true);
	};

	const closeForm = () => {
		setIsFormOpen(false);
	};

  const addToCart = (product) => {
		// Obtener el carrito actual del localStorage
		let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log(cart);

		// Agregar el nuevo producto al carrito
		cart.push(product);

		// Guardar el carrito actualizado en el localStorage
		localStorage.setItem('cart', JSON.stringify(cart));

		alert(`${product.title} ha sido agregado al carrito!`);
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
			<p className="font-bold">Price: ${product.price}</p>
			<CreateProductForm isOpen={isFormOpen} onClose={closeForm} />
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
