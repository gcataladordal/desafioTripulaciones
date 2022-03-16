// Creación del Usuario
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoColivingSchema = {
    nombre: String,
    idUserAdmin: Number,
    activo: Boolean,
    direccion: String,
    ciudad:String,
    cp: String,
    telefono:String,
    email: String,   
    habitantes: Number,
    capacidad: Number,
    idiomas: Array,
    orientacionSexual: Boolean,
    religion: Boolean,
    politica: Boolean,
    mascota: Boolean,
    fumador: Boolean,
    ubicacion: String,
    tipoVivienda: String,
    rangoEdad: Array,
    dinero: Number,
    metros: Number,
    lavabo: String,
    exteriores: Array,
    facilAcceso: Boolean,
    instalaciones: Array,
    ids: Array
};

const colivingSchema = mongoose.Schema(objetoColivingSchema, {versionKey: false})

colivingSchema.plugin(AutoIncrement, {inc_field: 'id_coliving'});

const Coliving = mongoose.model("colivings", colivingSchema);

// para exportar
module.exports = Coliving;