// Creación del Usuario
const mongoose = require("mongoose");

const objetoRecomendadorSchema = {
    id_usuario: Number,
    ids_compatibles: Array
};

const recomendadorSchema = mongoose.Schema(objetoRecomendadorSchema, {versionKey: false})

const InfoRecomendador = mongoose.model("inforecomendador", recomendadorSchema);

// para exportar
module.exports = InfoRecomendador;