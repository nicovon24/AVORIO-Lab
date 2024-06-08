const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware para analizar application/json
app.use(bodyParser.json());

// Middleware para analizar application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a MongoDB
const mongoURI =
	"mongodb+srv://nicovon24:gXOW8DLnTs7ecr5A@avorio.wnebi83.mongodb.net/"; // Cambia 'mydatabase' por el nombre de tu base de datos

mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	type: { type: String, enum: ["admin", "user"], required: true },
});

const User = mongoose.model("User", userSchema);

// Página principal
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
