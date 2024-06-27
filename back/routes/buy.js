import express from "express";
import Buy from "../models/Buys.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { username, email, address, orderId } = req.body;
        if (username == "" || email == "" || address == "") res.status(400).json("datos incompletos");
        const newBuy = new Buy({ name: username, email, address, OrderId: orderId });
        await newBuy.save();
        res.status(201).json(newBuy);

    } catch (err) {
        console.log(err);
    }
})


router.get("/", async (req, res) => {
    try {
        const buys = await Buy.find();
        res.json(buys);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;