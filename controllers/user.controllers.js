const Usuario = require("../models/userModel");
const Colivings = require("../models/colivingModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const infoTestAfinidad = require("../models/infoTestAfinidad");
const jwt = require("jsonwebtoken");
const SECRET = "D3s4F10gRuP0uN0";

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
        let numeroDinero = parseInt(req.body.dinero)
        let numeroMetros = parseInt(req.body.metros)
        let numeroGente = parseInt(req.body.gente)


        let preferencias = {
            edad: req.body.edad,
            genero: req.body.genero, 
            oficio: req.body.oficio,
            idiomas: req.body.idiomas, 
            orientacionSexual: req.body.orientacionSexual, 
            religion: req.body.religion,
            politica: req.body.politica, 
            mascotas: req.body.mascotas,
            fumador: req.body.fumador,
            carnet: req.body.carnet,
            ubicacion: req.body.ubicacion, 
            tipoVivienda: req.body.tipoVivienda,
            region: req.body.region,
            instalaciones: req.body.instalaciones,
            rangoEdad: req.body.rangoEdad, 
            dinero: numeroDinero,
            metros: numeroMetros,
            lavabo: req.body.lavabo,
            exteriores: req.body.exteriores,
            gente: numeroGente,
            caracter: req.body.caracter,
            aficiones: req.body.aficionesJuntas,
            id_usuario: req.body.id_usuario
        }

        let infoAfinidad = new infoTestAfinidad(preferencias)

        infoAfinidad.save(function (err) {
            if (err) throw err;
            console.log(`Inserción correcta de las preferencias de usuario`);

        });

        res.json("req.body")

    }, 
    busquedaColiving: (req,res) =>{

        res.json(req.body)
    },
    busquedaUsuario: (req, res) => {
        
        res.json(req.body)
    },
    obtenerInfoUser: async (req, res) => {
        let infoUser = await Usuario.find({ id_usuario: req.idUsuario})
        res.json({
            data: infoUser,
            auth: true
        })
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
    let idUserAdmin = req.body.idUserAdmin;
    let activo = req.body.activo;
    let direccion = req.body.direccion;
    let ciudad = req.body.ciudad;
    let cp = req.body.cp;
    let telefono = req.body.telefono;
    let email = req.body.email;
    let habitantes = req.body.habitantes;
    let capacidad = req.body.capacidad;
    let idiomas = req.body.idiomas;
    let orientacionSexual = req.body.orientacionSexual;
    let religion = req.body.religion;
    let politica = req.body.politica;
    let mascota = req.body.mascota;
    let fumador = req.body.fumador;
    let ubicacion = req.body.ubicacion;
    let tipoVivienda = req.body.tipoVivienda;
    let rangoEdad = req.body.rangoEdad;
    let dinero = req.body.dinero;
    let metros = req.body.metros;
    let lavabo = req.body.lavabo;
    let exteriores = req.body.exteriores;
    let facilAcceso = req.body.facilAcceso;
    let instalaciones = req.body.instalaciones;
    let ids = req.body.ids;

    // Busqueda en la BBDD si el usuario existe
    let usuarioExiste = await busquedaColivingEmail(email)
    if (usuarioExiste[0] == null) {
        // El usuario no existe, por tanto lo guardamos en la Base de Datos
        
        let inserta = await insertarColiving(nombre, idUserAdmin, activo, direccion, ciudad, cp, telefono, email, habitantes, capacidad, idiomas, orientacionSexual, religion, politica, mascota, fumador, ubicacion, tipoVivienda, rangoEdad, dinero, metros, lavabo, exteriores, facilAcceso, instalaciones, ids); //!!este es el orden de cómo se guarda en MongoDB
        console.log("Usuario registrado correctamente")
        res.json("insertOk")
    } else {
        console.log("Este usuario ya existe")
        res.json("userExiste")
    }


}


async function login(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let usuarioExiste = await busquedaUsuarioEmail(email)
    if ((usuarioExiste[0]) == undefined) {
        res.json({
            message: "Usuario o contraseña incorrectos",
            status: false
        })
    } else {
        var mismoPass = await bcrypt.compare(password, usuarioExiste[0].password)     // <-- COMPARA LAS 2 PASSWORDS
        if (mismoPass) {
            // CONTRASEÑA CORRECTA
            payload = {
                id: usuarioExiste.id_usuario
            }
            const token = jwt.sign(payload, SECRET)

            res.json({
                message: "Te has logueado correctamente",
                token,
                status: true
            })
    
        } else {
            res.json({
                message: "Usuario o contraseña incorrectos",
                status:false
            })
        }
    }
}

//Función para buscar usuario por email en la BD
async function busquedaUsuarioEmail(email) {
    let datos = await Usuario.find({ email: email });
    return datos;
}


async function busquedaColivingEmail(email) {
    let datos = await Colivings.find({ email: email });
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
        password: password
    };

    let nuevoUsuario = new Usuario(usuario);

    nuevoUsuario.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del usuario ${email}`);

    });
}
//Función insertar Coliving
async function insertarColiving(nombre, idUserAdmin, activo, direccion, ciudad, cp, telefono, email, habitantes, capacidad, idiomas, orientacionSexual, religion, politica, mascota, fumador, ubicacion, tipoVivienda, rangoEdad, dinero, metros, lavabo, exteriores, facilAcceso, instalaciones, ids) {
    let coliving = {
        nombre,
        idUserAdmin,
        activo,
        direccion,
        ciudad,
        cp,
        telefono,
        email,
        habitantes,
        capacidad,
        idiomas,
        orientacionSexual,
        religion,
        politica,
        mascota,
        fumador,
        ubicacion,
        tipoVivienda,
        rangoEdad,
        dinero,
        metros,
        lavabo,
        exteriores,
        facilAcceso,
        instalaciones,
        ids
    };

    let nuevoColiving = new Colivings(coliving);

    nuevoColiving.save(function (err) {
        if (err) throw err;
        console.log(`Inserción correcta del coliving ${email}`);

    });
}


module.exports = userActions