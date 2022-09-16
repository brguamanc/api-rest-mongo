const mongoose = require("mongoose");

const busSchema = mongoose.Schema({
  viaje_id: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },
  destino: {
    type: String,
    required: true,
  },
  origen: {
    type: String,
    required: true,
  },
  horaSalida: {
    type: String,
    required: true,
  },
  horaLlegada: {
    type: String,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bus", busSchema);