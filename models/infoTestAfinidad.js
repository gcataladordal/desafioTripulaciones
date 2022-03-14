// Creación del Usuario
const mongoose = require("mongoose");

const objetoInfoSchema = {
    edad: Number,
    genero: String, 
    oficio: Array,
    idiomas: Array, 
    orientacionSexual: Boolean, 
    religion: Boolean,
    politica: Boolean, 
    mascotas: Boolean,
    fumador: Boolean,
    carnet: Boolean,
    ubicacion: Array, 
    tipoVivienda: Array,
    region: Array,
    instalaciones: Array,
    rangoEdad: Array, 
    dinero: Number,
    metros: Number,
    lavabo: String,
    exteriores: Array,
    gente: Number,
    caracter: Array,
    aficiones: Array,
    id_usuario: Number
};

const InfoSchema = mongoose.Schema(objetoInfoSchema, {versionKey: false})



const infoTestAfinidad = mongoose.model("infoTestAfinidad", InfoSchema);

// para exportar
module.exports = infoTestAfinidad;