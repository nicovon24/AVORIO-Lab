import express from "express";
import Producto from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const productos = await Producto.find();
		res.status(200).json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.get("/category/:category", async (req, res) => {
	try {
		const category = req.params.category;

		const productos = await Producto.find({ category: category });
		res.status(200).json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const { image, title, description, category, price } = req.body;

		if (!image || !title || !description || !category || !price) {
			return res.status(400).json({ error: "Todos los campos son obligatorios." });
		}

		const nuevoProducto = new Producto({
			image,
			title,
			description,
			category,
			price,
		});
		await nuevoProducto.save();

		res.status(201).json({ producto: nuevoProducto });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
