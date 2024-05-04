const mongoose = require("mongoose");

const Orderschema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    pincode: { type: Number, required: true },
    total: { type: Number, required: true },
    products: { type: Array, required: true },

}, { versionKey: false })


const Ordermodel = mongoose.model("order", Orderschema);

module.exports = Ordermodel