const mongoose = require("mongoose");

const Menschema = new mongoose.Schema({
    title: { type: String, required: true },
    bigimg: { type: String, required: true },
    smallimg1: { type: String, required: true },
    smallimg2: { type: String, required: true },
    smallimg3: { type: String, required: true },
    smallimg4: { type: String, required: true },
    price: { type: Number, required: true },

}, { versionKey: false })


const Menmodel = mongoose.model("men", Menschema);

module.exports = Menmodel