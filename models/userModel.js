// Creación del Usuario
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoUserSchema = {
    nombre: String,
    apellidos: String,
    email: String,
    direccion: String,
    ciudad:String,
    cp: String,
    telefono:String,
    password: String,
    tipo_usuario: String
};

const userSchema = mongoose.Schema(objetoUserSchema, {versionKey: false})

userSchema.plugin(AutoIncrement, {inc_field: 'id_usuario'});

const Usuario = mongoose.model("usuarios", userSchema);

// para exportar
module.exports = Usuario;