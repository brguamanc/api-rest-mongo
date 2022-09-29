const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
  viaje_id: {
    type: String,
    required: true,
    unique:true
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

},
{
  versionKey:false
}

);

module.exports = mongoose.model("Bus", busSchema);