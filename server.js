const express = require("express");  // calling express framework
const app = express();          // creating object of express
const cors = require("cors");  // calling cors origin library to allow data communication between 2 server
app.use(cors());             // creating object of cors library
app.use(express.json());   // injecting the json to handel json data communication


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mern19");
const db = mongoose.connection;

db.on("error", (error)=>console.log("Error in database connection"));
db.on("open", ()=>console.log("Database is Connected..."));


const Product = require("./productapi");
app.use("/productlist", Product);
// http://localhost:2222/productlist


const cityapi = require("./cityapi");
app.use("/location", cityapi);
// http://localhost:2222/location/citylist
// http://localhost:2222/location/statelist

const image = require("./imageapi");
app.use("/uploadimage", image);
// http://localhost:2222/uploadimage

const admin = require("./adminapi");
app.use("/adminlogin", admin);
// http://localhost:2222/adminlogin (post method)

app.listen(2222, function(){
    console.log("The server is live...on : http://localhost:2222");
});
