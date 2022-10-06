const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
    },
    contrasena: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("usuario", usuarioSchema);
