const mongoose = require("mongoose");

const mongoURI =
	"mongodb+srv://nicovon24:gXOW8DLnTs7ecr5A@avorio.wnebi83.mongodb.net/";

const connectDB = async () => {
	try {
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.error("MongoDB connection error:", err);
		process.exit(1);
	}
};

module.exports = connectDB;
