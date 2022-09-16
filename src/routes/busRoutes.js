const express = require("express");
const router =express.Router();
const busSchema=require('../model/bus')

// create city

router.get("/bus", (req, res) => {
   busSchema
     .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({ message: error }));
});

router.post('/buses',(req,res)=>{
    const bus = busSchema(req.body);
    bus
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})

module.exports=router
