
const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    cityname    : { type: String, required: true },
    population  : { type: Number, required: true },
    stateid     : { type: String, required: true }
});

module.exports = mongoose.model("City", tableStructure);