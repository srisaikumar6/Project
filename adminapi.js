const express = require("express");
const router = express.Router();
module.exports = router;

const myadmin = require("./adminschema");

router.post("/", async (req, res) => {
    let email = req.body.emailid;
    let pass = req.body.password;
    let input = {"email":email, "password":pass};

    let info = await myadmin.find(input);
    
    res.status(200).json(info);
});