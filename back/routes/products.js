const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Route to get all products
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

//filter by category
router.get("/category/:category", async (req, res) => {
	try {
		const category = req.params.category;

		// Find products by category
		const products = await Product.find({ category: category });
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Route to create a new product
router.post("/", async (req, res) => {
	try {
		const { image, title, description, category, price } = req.body;

		// Validation of fields
		if (!image || !title || !description || !category || !price) {
			return res.status(400).json({ error: "All fields are required." });
		}

		// Creating the new product
		const newProduct = new Product({
			image,
			title,
			description,
			category,
			price,
		});
		await newProduct.save();

		// Sending response
		res.status(201).json({ product: newProduct });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
