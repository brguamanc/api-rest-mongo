const express = require("express");
const router =express.Router();
const citySchema=require('../model/city')

// create city

router.get("/city", (req, res) => {
   citySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.post('/city',(req,res)=>{
    const city= citySchema(req.body)
    city
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports=router
