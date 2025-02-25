
const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    pname     : { type: String, required: true },
    pcost     : { type: Number, required: true },
    pqty      : { type: Number, required: true },
    pdetails  : { type: String, required: true }
});

module.exports = mongoose.model("Myproduct", tableStructure);