// Creación del Usuario
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    nombre: String,
    apellidos: String,
    email: String,
    dni: String,
    password: String,
    admin: Boolean
};

const userSchema = mongoose.Schema(objetoUserSchema, {versionKey: false})

userSchema.plugin(AutoIncrement, {inc_field: 'id_usuario'});

const Usuario = mongoose.model("usuarios", userSchema);

// para exportar
module.exports = Usuario;