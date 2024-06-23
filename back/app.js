import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/order.js";
import cors from "cors"; // Importar cors
import connectDb from "./config/db.js";

const app = express();
const port = 3000;

// Conectar a MongoDB
connectDb();

// Middleware para analizar application/json
app.use(bodyParser.json());

// Middleware para analizar application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar CORS
app.use(cors());

// Rutas
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/order", orderRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

export default app;
