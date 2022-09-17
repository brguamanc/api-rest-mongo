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
router.get("/bus/viaje_id/:viaje_id", (req, res) => {
  const { viaje_id } = req.params;
  busSchema
    .findOne({ viaje_id: viaje_id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.get("/bus/destino/:destino", (req, res) => {
  const { destino } = req.params;
  busSchema
    .find({ destino: destino })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.get("/bus/origen/:origen", (req, res) => {
  const { origen } = req.params;
  busSchema
    .find({ origen: origen })
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
    .deleteOne({_id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
router.delete("/bus/viaje_id/:id", (req, res) => {
  const { id } = req.params;
  busSchema
    .deleteOne({ viaje_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports=router
