import mongoose from "mongoose";

const buySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: false },
    OrderId: { type: mongoose.Schema.ObjectId, required: true }

});

const Buy = mongoose.model("Buy", buySchema);

export default Buy;