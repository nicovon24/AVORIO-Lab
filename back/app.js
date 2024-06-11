const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order.js");

const app = express();
const port = 3000;

// Conectar a MongoDB
connectDB();

// Middleware para analizar application/json
app.use(bodyParser.json());

// Middleware para analizar application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/order", orderRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
