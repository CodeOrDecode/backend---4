const { Router } = require("express");
const Womenmodel = require("../models/womenModel")


const womenRouter = Router();


womenRouter.post("/addwomen", async (req, res) => {
    const { title, bigimg, smallimg1, smallimg2, smallimg3, smallimg4, price } = req.body;

    try {
        let product = new Womenmodel({ title, bigimg, smallimg1, smallimg2, smallimg3, smallimg4, price });
        await product.save();
        res.status(200).json({ message: "women product added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error adding women product" })
    }

})

womenRouter.get("/getwomen", async (req, res) => {

    try {
        let products = await Womenmodel.find();
        res.status(200).json({ products: products })
    } catch (error) {
        res.status(400).json({ message: "error getting women products" })
    }

})



module.exports = womenRouter