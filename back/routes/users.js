import express from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Ruta para crear un nuevo usuario
router.post("/", async (req, res) => {
	try {
		const { name, email, password, type } = req.body;

		// Validación de los campos
		if (!name || !email || !password || !type) {
			return res.status(400).json({ error: "Todos los campos son obligatorios." });
		}

		if (type !== "admin" && type !== "user") {
			return res
				.status(400)
				.json({ error: "El tipo de usuario debe ser 'admin' o 'user'." });
		}

		// Encriptar la contraseña
		const hashedPassword = await bcrypt.hash(password, 10);

		// Creación del nuevo usuario
		const newUser = new User({ name, email, password: hashedPassword, type });
		await newUser.save();

		// Enviar respuesta sin encriptar la información sensible
		res.status(201).json({ user: { name, email, type } });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Route for logging in
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ error: "Incorrect credentials." });
		}

		// Verify password
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(401).json({ error: "Incorrect credentials." });
		}

		// Generate authentication token
		const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });

		// Send response with token
		res.status(200).json({ token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
