const express = require("express");
const router = express.Router();
module.exports = router;

const Product = require("./productschema");

router.get("/", async(req, res)=>{
    let message = await Product.find(); // It fetch all data from product schema
    res.status(200).json(message);
})

router.post("/", async(req, res)=>{
    let newproduct = Product({
    pname     : req.body.productname,
    pcost     : req.body.price,
    pqty      : req.body.qty,
    pdetails  : req.body.details
    });
    let info = await newproduct.save();
    res.status(200).json(info);
})
 
router.delete("/:id", async(req, res)=>{
    let myproduct = await Product.findById( req.params.id ); // It fetch all data from product schema
    if(myproduct != null){
        await myproduct.deleteOne();
        res.status(200).json({"message":"product Deleted"});
    }else{
        res.status(200).json({"message":"No Such Record"});
    }
})

router.get("/:id", async(req, res)=>{
    let pinfo = await Product.findById( req.params.id ); // It fetch all data from product schema
    res.status(200).json(pinfo);
})

router.put("/", async(req, res)=>{
    let pinfo = await Product.findById( req.body.id );
    
    pinfo.pname     = req.body.pname;
    pinfo.pcost     = req.body.price;
    pinfo.pqty      = req.body.qty;
    pinfo.pdetails  = req.body.details;
    
    await pinfo.save();
    res.status(200).json({"message":"Product Updated"});
})