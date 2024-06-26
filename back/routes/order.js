import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js"; // Importa el modelo de Producto

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { products } = req.body;

		// Convierte el string de productos en un array de IDs
		const productIds = products.split(",");

		// Busca la orden existente
		let existingOrder = await Order.findOne();

		if (!existingOrder) {
			// Si no existe una orden, crea una nueva
			existingOrder = new Order({
				products: [],
				total: 0,
			});
		}

		// Itera sobre los productos de la orden para procesar las cantidades
		for (const productId of productIds) {
			const product = await Product.findById(productId);
			if (!product) {
				return res
					.status(404)
					.json({ message: `Producto no encontrado: ${productId}` });
			}

			// Busca si el producto ya está en la orden
			const existingProductIndex = existingOrder.products.findIndex(
				(p) => p.product.toString() === productId
			);

			if (existingProductIndex !== -1) {
				// Si el producto ya está en la orden, actualiza la cantidad
				existingOrder.products[existingProductIndex].quantity++;
			} else {
				// Si el producto no está en la orden, agrégalo
				existingOrder.products.push({
					product: productId,
					quantity: 1,
					price: product.price,
				});
			}
		}

		// Calcula el total de la orden
		existingOrder.total = existingOrder.products.reduce(
			(total, p) => total + p.price * p.quantity,
			0
		);

		// Guarda la orden actualizada
		const savedOrder = await existingOrder.save();
		res.status(201).json(savedOrder);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.post("/minus", async (req, res) => {
	try {
		const { products } = req.body;

		// Convierte el string de productos en un array de IDs
		const productIds = products.split(",");

		// Busca la orden existente
		let existingOrder = await Order.findOne();

		if (!existingOrder) {
			// Si no existe una orden, crea una nueva
			existingOrder = new Order({
				products: [],
				total: 0,
			});
		}

		// Itera sobre los productos de la orden para procesar las cantidades
		for (const productId of productIds) {
			const product = await Product.findById(productId);
			if (!product) {
				return res
					.status(404)
					.json({ message: `Producto no encontrado: ${productId}` });
			}

			// Busca si el producto ya está en la orden
			const existingProductIndex = existingOrder.products.findIndex(
				(p) => p.product.toString() === productId
			);

			if (existingProductIndex !== -1) {
				// Si el producto ya está en la orden, actualiza la cantidad
				existingOrder.products[existingProductIndex].quantity--;

				// Si la cantidad es 0, elimina el producto del array
				if (existingOrder.products[existingProductIndex].quantity === 0) {
					existingOrder.products.splice(existingProductIndex, 1);
				}
			} else {
				// Si el producto no está en la orden, agrégalo
				existingOrder.products.push({
					product: productId,
					quantity: 1,
					price: product.price,
				});
			}
		}

		// Calcula el total de la orden
		existingOrder.total = existingOrder.products.reduce(
			(total, p) => total + p.price * p.quantity,
			0
		);

		// Guarda la orden actualizada
		const savedOrder = await existingOrder.save();
		res.status(201).json(savedOrder);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

router.get("/", async (req, res) => {
	try {
		const orders = await Order.find().populate("products.product");
		res.json(orders);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

export default router;
