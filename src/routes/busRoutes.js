const express = require("express");
const router =express.Router();
const busSchema=require('../model/bus')

// create city


router.post('/bus',(req,res)=>{
    const bus = busSchema(req.body);
    bus
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})


router.get("/buses", (req, res) => {
  busSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/buses", (req, res) => {
  busSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/bus/:id", (req, res) => {
    const { id } = req.params;
    busSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

router.put("/bus/:id", (req, res) => {
  const { id } = req.params;
  const {viaje_id,empresa,destino,origen,horaSalida,horaLlegada}=req.body;
  busSchema
    .updateOne(
      { _id: id },
      {$set: {viaje_id, empresa, destino, origen, horaSalida, horaLlegada} }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.delete("/bus/:id", (req, res) => {
  const { id } = req.params;
  busSchema
    .remove({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports=router
