// para conectar la base de datos
const mongoose = require("mongoose");

const url = "mongodb+srv://desafioGrupo1:wpEMSWKZb9JqXsk6@desafiotripulaciones.8tz6u.mongodb.net/desafioTripulaciones?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Base de datos de Mongo conectada");
    })
    .catch((err) => {
        console.error(err);
    });
