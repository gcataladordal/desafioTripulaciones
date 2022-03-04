const Usuario = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userActions = {
    register: (req, res) => {
        registro(req, res);
    }
}


function registro(req, res) {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let email = req.body.email;
    let dni = req.body.dni;
    let password = req.body.password;

    var regExpDni = new RegExp(/^[0-9]{8}\-?[a-zA-Z]{1}/);
    var regExpName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/u); //agregado espacio para poner dos apellidos
    var regExpEmail = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    var regExpPass = new RegExp(/^(?=\w*\d)(?=\w*[a-zA-Z])\S{6,10}$/);

    let nombreOk = regExpName.test(nombre);
    let apellidosOk = regExpName.test(apellidos);
    let emailOk = regExpEmail.test(email);
    let dniOk = regExpDni.test(dni) && validacionDni(dni);
    let passwordOk = regExpPass.test(password);

    

}

function validacionDni(dni) {
    dni = quitarGuion(dni);
    return validacionPolicia(dni);
}

function quitarGuion(dni) {
    var conGuion = dni.split("-");
    if (conGuion.length == 1) {
        return dni;
    } else {
        return conGuion[0] + conGuion[1];
    }
}

function validacionPolicia(dni) {
    dni = dni.toUpperCase();
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var nums = parseInt(dni.substring(0, dni.length - 1));
    var letra = letras[nums % letras.length];
    return letra == dni[8];
}

module.exports = userActions