const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/users");
const authController = require("./routes/auth");
const passport = require("passport");

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
// app.get("/auth/google/callback", authController.googleCallback);
// app.post(
// 	"/login",
// 	passport.authenticate("local", { failureRedirect: "/login" }),
// 	(req, res) => {
// 		res.json({ message: "Authentication successful", user: req.user });
// 	}
// );

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
