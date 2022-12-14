const express = require("express");
const router = express.Router();
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const usuarioSchema = require("../model/usuario");

router.post("/usuario", (req, res) => {
  const { usuario, contrasena } = usuarioSchema(req.body);
  usuarioSchema.findOne({ usuario: usuario }, (erro, usuarioDB) => {
    if (erro) {
      return res.status(500).json({
        ok: false,
        err: erro,
      });
    }
    // Verifica que exista un usuario con el email escrita por el usuario newee.
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }

    /*Valida que la contraseña escrita por el usuario, sea la almacenada en la db compareSync
   if (!bcrypt.compareSync(contrasena, usuarioDB.contrasena)) {

     return res.status(400).json({
       ok: false,
       err: {
         message: "Usuario o contraseña incorrectos",
       },
     });
   }
    */
    // Valida que la contraseña escrita por el usuario, sea la almacenada en la db

    if (contrasena != usuarioDB.contrasena) {
      return res.status(400).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
    // Genera el token de autenticación
    let token = jwt.sign(
      {
        usuario: usuarioDB,
      },
      process.env.SEED_AUTENTICACION,
      {
        expiresIn: process.env.CADUCIDAD_TOKEN,
      }
    );
    res.json({
      ok: true,
      usuario: usuarioDB,
      token,
    });
  });
});

module.exports = router;
