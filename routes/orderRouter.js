const { Router } = require("express");
const Ordermodel = require("../models/orderModel")

const orderRouter = Router();

orderRouter.post("/addorder", async (req, res) => {
    const { name, email, address, phone, pincode, total, products } = req.body;

    try {
        let product = new Ordermodel({name, email, address, phone, pincode, total, products });
        await product.save();
        res.status(200).json({ message: "order added" })
    } catch (error) {
        res.status(400).json({ message: "error adding order" })
    }

})



module.exports = orderRouter