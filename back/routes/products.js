const express = require("express");
const Producto = require("../models/Producto");

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
router.get("/categoria/:categoria", async (req, res) => {
	try {
		const categoria = req.params.categoria;

		// Encontrar productos por categoría
		const productos = await Producto.find({ categoria: categoria });
		res.status(200).json(productos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Ruta para crear un nuevo producto
router.post("/", async (req, res) => {
	try {
		const { imagen, titulo, descripcion, categoria, precio } = req.body;

		// Validación de campos
		if (!imagen || !titulo || !descripcion || !categoria || !precio) {
			return res.status(400).json({ error: "Todos los campos son obligatorios." });
		}

		// Creación del nuevo producto
		const nuevoProducto = new Producto({
			imagen,
			titulo,
			descripcion,
			categoria,
			precio,
		});
		await nuevoProducto.save();

		// Enviar respuesta
		res.status(201).json({ producto: nuevoProducto });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
