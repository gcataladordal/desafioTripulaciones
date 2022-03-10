// Creación del Usuario
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const objetoInfoSchema = {
    religion: String,
    politica: String,
    procedencia: String,
    idiomas: String,
    mascotas: String,
    fumador: String,
    orientacionSexual: String,
    antecedentes: String,
    drogas: String,
    id_usuario: String,
};

const InfoSchema = mongoose.Schema(objetoInfoSchema, {versionKey: false})



const primeraInformacion = mongoose.model("primeraInformacion", InfoSchema);

// para exportar
module.exports = primeraInformacion;