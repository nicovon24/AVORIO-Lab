import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/products";
import Product from "./Product";
import AddButton from "../Buttons/AddButton";

const Cards = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div className="flex flex-col">
			<h1 className="text-2xl font-bold mb-4">Product List</h1>
			<div className="flex flex-wrap -mx-4">
				{products.map((product) => (
					<div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
						<Product product={product} />
					</div>
				))}
			</div>
			<AddButton/>
		</div>
	);
};

export default Cards;
