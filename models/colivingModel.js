// Creación del Usuario
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoColivingSchema = {
    nombre: String,
    id_admin: String,
    activo: Boolean,
    direccion: String,
    ciudad:String,
    cp: String,
    telefono:String,
    email: String,   
    gente: String,
    capacidad: String,
    idiomas: Array,
    orientacionSexual: String,
    religion: String,
    mascota: String,
    fumador: String,
    ubicacion: String,
    tipoVivienda: String,
    rangoEdad: Array,
    dinero: String,
    metros: String,
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