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
    ubicacion: String, 
    tipoVivienda: String,
    region: Array,
    instalaciones: Array,
    rangoEdad: Array, 
    dinero: String,
    metros: String,
    lavabo: String,
    exteriores: Array,
    gente: String,
    aficiones: Array,
    id_usuario: Number
};

const InfoSchema = mongoose.Schema(objetoInfoSchema, {versionKey: false})



const infoTestAfinidad = mongoose.model("infoTestAfinidad", InfoSchema);

// para exportar
module.exports = infoTestAfinidad;