const Usuario = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userActions = {
    registrar: (req, res) => {
        registro(req, res);
    },
    loguear: (req, res) => {
        login(req,res);
    }
}


async function registro(req, res) {
    console.log(req.body)
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

    let todoOk = nombreOk && apellidosOk && emailOk && dniOk && passwordOk
    
    if (todoOk) {
        // Busqueda en la BBDD si el usuario existe
        let usuarioExiste = await busquedaUsuarioEmail(email)
        if (usuarioExiste[0] == null) {
            // El usuario no existe, por tanto lo guardamos en la Base de Datos
            var passEnc = "";
            passEnc = await bcrypt.hash(password, saltRounds);
            let inserta = await insertarUsuario(nombre, apellidos, email, dni, passEnc);
            console.log("Usuario registrado correctamente")
            res.json("insertOk")
        } else {
            console.log("Este usuario ya existe")
            res.json("userExiste")
        }
    } else {
        console.log("Algún campo incorrecto")
        res.json("campoIncorrecto")
    }

}


async function login (req, res) {
    console.log(req.body)
    let email = req.body.email;
    let password = req.body.password;
    let usuarioExiste = await busquedaUsuarioEmail(email)
    console.log(usuarioExiste)
    if ((usuarioExiste[0]) == undefined) {
        console.log("El usuario no existe en la BD");
        res.json("userNoExiste")
    } else {
        var mismoPass = await bcrypt.compare(password, usuarioExiste[0].password)     // <-- COMPARA LAS 2 PASSWORDS
        if (mismoPass) {
            // CONTRASEÑA CORRECTA
            if (usuarioExiste[0].admin) {
                console.log("Logueado y es admin")
                res.json("logueadoAdmin")
            } else {
                console.log("Logueado y no es admin")
                res.json("logueadoNoAdmin")
            }
        } else {
            console.log("contraseña incorrecta")
            res.json("passwordMal")
        }
    }
}


async function busquedaUsuarioEmail(email) {
    let datos = await Usuario.find({ email: email });
    return datos;
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

async function insertarUsuario(nombre, apellidos, email, dni, password) {
    dni = dni.replace("-", "");
    dni = dni.toUpperCase();

    let usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        dni: dni,
        password: password,
        admin: false
    };

    let nuevoUsuario = new Usuario(usuario);

    nuevoUsuario.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del usuario ${email}`);

    });
}


module.exports = userActions