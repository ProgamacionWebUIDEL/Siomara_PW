const express = require("express");
const Class = require("../models/class.js");
const router = express.Router();

//Create (POST)
router.post("/create", async (request, response) => {
    console.log("REQUEST DEL CLIENTE---", request.body);
    const newClass = new Class(request.body);
    await newClass.save();
    response.status(200).json({ code: "OK", message: "todo muy bien", data: newClass });

});

//Create (LIST)
router.get("/list", async (request, response) => {
    const listClass = await Class.find();
    response.status(200).json({ code: "OK", message: "todo muy bien", data: listClass });

    
});

//Get Only (POST)
router.post("/getonly", async (request, response) => {
    console.log("REQUEST DEL CLIENTE---", request.body.id);

    const newClass = await Class.findOne({ _id: request.body.id })
    response.status(200).json({ code: "OK", message: "todo muy bien", data: newClass });

});

module.exports=router;


