import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct, getAllProducts } from "../../redux/actions/products";

const CreateProductForm = ({ isOpen, onClose }) => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState({
		image: "",
		title: "",
		description: "",
		category: "",
		price: "",
	});

	const [errors, setErrors] = useState({});

	const validate = () => {
		let tempErrors = {};
		if (!product.image) tempErrors.image = "Se requiere URL de imagen";
		else if (!/^https?:\/\/.*\.(jpeg|jpg|gif|png)$/.test(product.image))
			tempErrors.image =
				"La URL de la imagen debe ser válida y terminar en .jpeg, .jpg, .gif o .png";
		if (!product.title) tempErrors.title = "Se requiere título";
		if (!product.description) tempErrors.description = "Se requiere descripción";
		if (!product.category) tempErrors.category = "Se requiere categoría";
		if (!product.price) tempErrors.price = "Se requiere precio";
		else if (isNaN(product.price) || Number(product.price) <= 0)
			tempErrors.price = "El precio debe ser un número positivo";
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			dispatch(createProduct(product)).then(() => {
				dispatch(getAllProducts());
				setProduct({
					image: "",
					title: "",
					description: "",
					category: "",
					price: "",
				});
				onClose();
			});
			setProduct({
				image: "",
				title: "",
				description: "",
				category: "",
				price: "",
			});
			onClose();
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-4 rounded-md max-w-md w-full relative">
				<button className="absolute top-0 right-0 p-2" onClick={onClose}>
					X
				</button>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block mb-2">URL de la imagen:</label>
						<input
							type="text"
							name="image"
							value={product.image}
							onChange={handleChange}
							className="w-full border rounded-md p-2 text-blue-500 border-blue-500"
						/>
						{errors.image && <p className="text-red-500">{errors.image}</p>}
					</div>
					<div className="mb-4">
						<label className="block mb-2">Título:</label>
						<input
							type="text"
							name="title"
							value={product.title}
							onChange={handleChange}
							className="w-full border rounded-md p-2 text-blue-500 border-blue-500"
						/>
						{errors.title && <p className="text-red-500">{errors.title}</p>}
					</div>
					<div className="mb-4">
						<label className="block mb-2">Descripción:</label>
						<input
							type="text"
							name="description"
							value={product.description}
							onChange={handleChange}
							className="w-full border rounded-md p-2 text-blue-500 border-blue-500"
						/>
						{errors.description && (
							<p className="text-red-500">{errors.description}</p>
						)}
					</div>
					<div className="mb-4">
						<label className="block mb-2">Categoría:</label>
						<select
							name="category"
							value={product.category}
							onChange={handleChange}
							className="w-full border rounded-md p-2 text-blue-500 border-blue-500"
						>
							<option value="">Seleccione una categoría</option>
							<option value="Facial">Facial</option>
							<option value="Corporal">Corporal</option>
						</select>
						{errors.category && <p className="text-red-500">{errors.category}</p>}
					</div>
					<div className="mb-4">
						<label className="block mb-2">Precio:</label>
						<input
							type="number"
							name="price"
							value={product.price}
							onChange={handleChange}
							className="w-full border rounded-md p-2 text-blue-500 border-blue-500"
						/>
						{errors.price && <p className="text-red-500">{errors.price}</p>}
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
					>
						Crear Producto
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateProductForm;
