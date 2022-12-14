const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
  busId:{
    type: Number,
    required: false,
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

