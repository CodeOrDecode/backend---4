const { Router } = require("express");
const Menmodel = require("../models/menModel")


const menRouter = Router();


menRouter.post("/addmen", async (req, res) => {
    const { title, bigimg, smallimg1, smallimg2, smallimg3, smallimg4, price } = req.body;

    try {
        let product = new Menmodel({ title, bigimg, smallimg1, smallimg2, smallimg3, smallimg4, price });
        await product.save();
        res.status(200).json({ message: "men product added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error adding men product" })
    }

})

menRouter.get("/getmen", async (req, res) => {

    try {
        let products = await Menmodel.find();
        res.status(200).json({ products: products })
    } catch (error) {
        res.status(400).json({ message: "error getting men products" })
    }

})



module.exports = menRouter