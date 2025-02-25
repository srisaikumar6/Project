const express = require("express");
const router = express.Router();
module.exports = router;

const City = require("./cityschema");
const State = require("./stateschema");

router.post("/savestate", async (req, res) => {
    let state = State({
        statename: req.body.newstate
    });
    await state.save();
    res.status(200).json({ "message": "State Saved Successfully" });
});


router.get("/statelist", async (req, res) => {
    let allstate = await State.find();
    res.status(200).json(allstate);
});

// cityapi start
router.get("/citylist", async (req, res) => {
    let allcity = await City.find();
    res.status(200).json(allcity);
});

router.post("/savecity", async (req, res) => {
    let mycity = City({
        cityname: req.body.newcity,
        population: req.body.population,
        stateid: req.body.stateid
    });
    await mycity.save();
    res.status(200).json({ "message": "City Saved Successfully" });
});

router.get("/searchcity/:stateid", async (req, res) => {
    let input = { "stateid": req.params.stateid };

    let allcity = await City.find(input);
    res.status(200).json(allcity);
});

router.delete("/citylist/:id", async (req, res) => {
    let mycity = await City.findById(req.params.id); // It fetch all data from product schema
    if (mycity != null) {
        await mycity.deleteOne();
        res.status(200).json({ "message": "City Deleted" });
    } else {
        res.status(200).json({ "message": "No Such Record" });
    }
})

router.delete("/statelist/:id", async (req, res) => {
    let mystate = await State.findById(req.params.id); // It fetch all data from product schema
    if (mystate != null) {
        await mystate.deleteOne();
        res.status(200).json({ "message": "State Deleted" });
    } else {
        res.status(200).json({ "message": "No Such Record" });
    }
})


router.get("/:id", async (req, res) => {
    let mycity = await City.findById(req.params.id); // It fetch all data from product schema
    res.status(200).json(mycity);
})

router.put("/", async (req, res) => {
    let mycity = await City.findById(req.params.id);

    mycity.cityname = req.body.newcity;
    mycity.population = req.body.population;
    mycity.stateid = req.body.stateid;

    await mycity.save();
    res.status(200).json({ "message": "City Updated" });
})

//email sending
router.post("/sendemail", (req, res) => {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'srisaivittamsetti@gmail.com',
            pass: 'awyw jhmi lwjs iqfm'

        }
    });

    var mailOptions = {
        from: 'srisaivittamsetti@gmail.com',
        to: req.body.toemail,
        subject: req.body.subject,
        text: req.body.text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(200).json({ "Message": "Error while Sending The E-Mail..." });
        } else {
            res.status(200).json({ "Message": "The E-Mail Sent Successfully..." });
        }
    });
})
