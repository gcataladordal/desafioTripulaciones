const Usuario = require("../models/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const primeraInformacion = require("../models/primeraInformacion")

const userActions = {
    registrarUsuario: (req, res) => {
        registroUsuario(req, res);
    },
    registrarColiving: (req, res) => {
        registroColiving(req, res);
    },
    loguear: (req, res) => {
        login(req, res);
    },
    testAfinidadUser: (req, res) => {
        let preferencias = {
            religion: req.body.religion,
            politica: req.body.politica,
            procedencia: req.body.procedencia,
            idiomas: req.body.idiomas,
            mascotas: req.body.mascotas,
            fumador: req.body.fumador,
            orientacionSexual: req.body.orientacionSexual,
            antecedentes: req.body.antecedentes,
            drogas: req.body.drogas,
            id_usuario: req.body.id_usuario
        }

        let primeraInfo = new primeraInformacion(preferencias)

        primeraInfo.save(function (err) {
            if (err) throw err;
            console.log(`Inserción correcta de las preferencias de usuario`);

        });

        res.json("req.body")

    }, 
    FormBusqueda: (req,res) =>{
         
        FormBusqueda(req,res);



    }

}


async function registroUsuario(req, res) {
    console.log(req.body)
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let direccion = req.body.direccion;
    let ciudad = req.body.ciudad;
    let cp = req.body.cp;
    let telefono = req.body.telefono;
    let email = req.body.email;
    let password = req.body.password;
    let password2 = req.body.password2;
    // añadir direccion, población, cp y en la 73


    var regExpName = new RegExp(/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)?$/);
    var regExpApellidos = new RegExp(/^([a-zA-ZÀ-ÿ]+\s?){1,3}[a-zA-ZÀ-ÿ]+$/);
    var regExpEmail = new RegExp(/^[A-Za-z0-9]+[\w$&.-]+[A-Za-z0-9]+@[A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9].[A-Za-z0-9]+$/);
    var regExpPass = new RegExp(/^[\w-!¡@#$%&().¿?]{6,10}/);
    var regExpDir = new RegExp(/W*/);
    var regExpCp = new RegExp(/^\d{5}$/);
    var regExpTelefono = new RegExp(/^[0-9]{9}$/);
    var regExpCiudad = new RegExp(/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)?$/);

    let nombreOk = regExpName.test(nombre);
    let apellidosOk = regExpApellidos.test(apellidos);
    let direccionOK = regExpDir.test(direccion);
    let ciudadOK = regExpCiudad.test(ciudad);
    let cpOk = regExpCp.test(cp);
    let telefonoOk = regExpTelefono.test(telefono);
    let emailOk = regExpEmail.test(email);
    let passwordOk = regExpPass.test(password) && (password === password2);
    console.log("nombre:" + nombreOk)
    console.log("apellidos:" + apellidosOk)
    console.log("direccion:" + direccionOK)
    console.log("ciudad:" + ciudadOK)
    console.log("cp:" + cpOk)
    console.log("tel:" + telefonoOk)
    console.log("email:" + emailOk)
    console.log("pass:" + passwordOk)

    let todoOk = nombreOk && apellidosOk && direccionOK && ciudadOK && cpOk && telefonoOk && emailOk && passwordOk

    if (todoOk) {
        // Busqueda en la BBDD si el usuario existe
        let usuarioExiste = await busquedaUsuarioEmail(email)
        if (usuarioExiste[0] == null) {
            // El usuario no existe, por tanto lo guardamos en la Base de Datos
            let passEnc = "";
            passEnc = await bcrypt.hash(password, saltRounds);
            let inserta = await insertarUsuarioPersona(nombre, apellidos, email, direccion, ciudad, cp, telefono, passEnc) //añadir aqui);
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


async function registroColiving(req, res) {
    console.log(req.body)
    let nombre = req.body.nombre;
    let direccion = req.body.direccion;
    let ciudad = req.body.ciudad;
    let cp = req.body.cp;
    let telefono = req.body.telefono;
    let email = req.body.email;
    let password = req.body.password;
    let password2 = req.body.password2;

    var regExpName = new RegExp(/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)?$/);
    var regExpEmail = new RegExp(/^[A-Za-z0-9]+[\w$&.-]+[A-Za-z0-9]+@[A-Za-z0-9]+[A-Za-z0-9-]+[A-Za-z0-9].[A-Za-z0-9]+$/);
    var regExpPass = new RegExp(/^[\w-!¡@#$%&().¿?]{6,10}/);
    var regExpDir = new RegExp(/W*/);
    var regExpCp = new RegExp(/^\d{5}$/);
    var regExpTelefono = new RegExp(/^[0-9]{9}$/);
    var regExpCiudad = new RegExp(/^[a-zA-ZÀ-ÿ]+(\s[a-zA-ZÀ-ÿ]+)?$/);

    let nombreOk = regExpName.test(nombre);
    let direccionOK = regExpDir.test(direccion);
    let ciudadOk = regExpCiudad.test(ciudad);
    let cpOk = regExpCp.test(cp);
    let telefonoOk = regExpTelefono.test(telefono);
    let emailOk = regExpEmail.test(email);
    let passwordOk = regExpPass.test(password) && (password === password2);
    console.log("nombre:" + nombreOk)
    console.log("direccion:" + direccionOK)
    console.log("ciudad:" + ciudadOk)
    console.log("cp:" + cpOk)
    console.log("tel:" + telefonoOk)
    console.log("email:" + emailOk)
    console.log("pass:" + passwordOk)

    let todoOk = nombreOk && direccionOK && ciudadOk && telefonoOk && emailOk && passwordOk && cpOk

    if (todoOk) {
        // Busqueda en la BBDD si el usuario existe
        let usuarioExiste = await busquedaUsuarioEmail(email)
        if (usuarioExiste[0] == null) {
            // El usuario no existe, por tanto lo guardamos en la Base de Datos
            let passEnc = "";
            passEnc = await bcrypt.hash(password, saltRounds);
            let inserta = await insertarUsuarioColiving(nombre, email, direccion, ciudad, cp, telefono, passEnc); //!!este es el orden de cómo se guarda en MongoDB
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


async function login(req, res) {
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

//Función para buscar usuario por email en la BD
async function busquedaUsuarioEmail(email) {
    let datos = await Usuario.find({ email: email });
    return datos;
}

//Función insertar usuario
async function insertarUsuarioPersona(nombre, apellidos, email, direccion, ciudad, cp, telefono, password) {
    let usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        direccion: direccion,
        ciudad: ciudad,
        cp: cp,
        telefono: telefono,
        password: password,
        tipo_usuario: "persona"
    };

    let nuevoUsuario = new Usuario(usuario);

    nuevoUsuario.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del usuario ${email}`);

    });
}
//Función insertar Coliving
async function insertarUsuarioColiving(nombre, email, direccion, ciudad, cp, telefono, password) {
    let usuario = {
        nombre: nombre,
        apellidos: "",
        email: email,
        direccion: direccion,
        ciudad: ciudad,
        cp: cp,
        telefono: telefono,
        password: password,
        tipo_usuario: "coliving"
    };

    let nuevoUsuario = new Usuario(usuario);

    nuevoUsuario.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del coliving ${email}`);

    });
}


module.exports = userActions