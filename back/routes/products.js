const express = require("express");
const Producto = require("../models/Product");

const router = express.Router();

// Ruta para obtener todos los productos
router.get("/", async (req, res) => {
	try {
		const productos = await Producto.find();
		res.status(200).json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Filtrar por categoría
router.get("/category/:category", async (req, res) => {
	try {
		const category = req.params.category;

		// Encontrar productos por categoría
		const productos = await Producto.find({ category: category });
		res.status(200).json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Ruta para crear un nuevo producto
router.post("/", async (req, res) => {
	try {
		const { image, title, description, category, price } = req.body;

		// Validación de campos
		if (!image || !title || !description || !category || !price) {
			return res.status(400).json({ error: "Todos los campos son obligatorios." });
		}

		// Creación del nuevo producto
		const nuevoProducto = new Producto({
			image,
			title,
			description,
			category,
			price,
		});
		await nuevoProducto.save();

		// Enviar respuesta
		res.status(201).json({ producto: nuevoProducto });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
