import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/order.js";
import cors from "cors"; 
import connectDb from "./config/db.js";

const app = express();
const port = 3000;

connectDb();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Rutas
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/order", orderRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

export default app;
