import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js"; 

const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const { products } = req.body;

		const productIds = products.split(",");

		let existingOrder = await Order.findOne();

		if (!existingOrder) {
			existingOrder = new Order({
				products: [],
				total: 0,
			});
		}

		for (const productId of productIds) {
			const product = await Product.findById(productId);
			if (!product) {
				return res
					.status(404)
					.json({ message: `Producto no encontrado: ${productId}` });
			}

			const existingProductIndex = existingOrder.products.findIndex(
				(p) => p.product.toString() === productId
			);

			if (existingProductIndex !== -1) {
				existingOrder.products[existingProductIndex].quantity++;
			} else {
				existingOrder.products.push({
					product: productId,
					quantity: 1,
					price: product.price,
				});
			}
		}

		existingOrder.total = existingOrder.products.reduce(
			(total, p) => total + p.price * p.quantity,
			0
		);

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
