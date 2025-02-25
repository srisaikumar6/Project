
const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    statename: { type: String, required: true }
});

module.exports = mongoose.model("State", tableStructure);