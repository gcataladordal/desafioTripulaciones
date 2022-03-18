import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "antd";
import InfoAuth from "../hooks/InfoAuth";
import imgAnterior from "../img/left_arrow_(1).png"
import NavBar from "../components/NavBar";

function RegisterColiving() {

    const [usuario, auth] = InfoAuth("obtieneinfo")

    useEffect(() => {
        if (auth === true) {
        } else if (auth === false) {
            window.location.href = "/"
        }
    }, [auth])

    const [nombre, setNombre] = useState("");
    const [activo, setActivo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [habitantes, setHabitantes] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState(false);
    const [religion, setReligion] = useState(false);
    const [politica, setPolitica] = useState(false);
    const [mascotas, setMascotas] = useState(false);
    const [fumador, setFumador] = useState(false);
    const [ubicacion, setUbicacion] = useState("");
    const [tipoVivienda, setTipoVivienda] = useState("");
    const [rangoEdad, setRangoEdad] = useState("");
    const [dinero, setDinero] = useState("");
    const [metros, setMetros] = useState("");
    const [lavabo, setLavabo] = useState("");
    const [exteriores, setExteriores] = useState("");
    const [facilAcceso, setFacilAcceso] = useState("");
    const [instalaciones, setInstalaciones] = useState("");
    const [ids, setIds] = useState("");

    const cambiosCheckboxIdiomas = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }

    const cambiosCheckboxRangoEdad = (valoresMarcados) => {
        setRangoEdad(valoresMarcados)
    }

    const cambiosCheckboxInstalaciones = (valoresMarcados) => {
        setInstalaciones(valoresMarcados)
    }

    const cambiosCheckboxExteriores = (valoresMarcados) => {
        setExteriores(valoresMarcados)
    }


    const clickImagenAtras = () => {
        window.location.href = "/perfil"
    }

    const enviarDatos = () => {
        let Usuario = {
            nombre,
            idUserAdmin: usuario.id_usuario,
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
            mascotas,
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
        }

        axios.post("/registrarcoliving", Usuario).then((res) => {
            if (res.data === "insertOk") {
                alert("Usuario coliving registrado correctamente")
            }
            if (res.data === "campoIncorrecto") {
                alert("Campo Incorrecto")
            }
            if (res.data === "userExiste") {
                alert("Este usuario coliving ya existe")
            }
        })
    }

    return (
        <div>
            <div className="Frame-3629">
                <img src={imgAnterior} onClick={clickImagenAtras} className="Icon-left-arrow" alt="botonAtras"></img>

                <br />
                <form>
                    <div>
                        <span className="spanTest">¿Cómo se llama tu co-living?</span>
                        <br />
                        <input type="text" name="nombre" className="inputRegistro" placeholder="Ej: Nordikrooms" onChange={(e) => setNombre(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">¿Este coliving está ya desplegado y funcionando?</span>
                        <br />
                        <div className="contenedor-Boolean">
                            <button type="button" name="activo" value="si" className="Label-button-Boolean" onClick={() => setActivo(true)}>Sí</button>
                            <button type="button" name="activo" value="no" className="Label-button-Boolean" onClick={() => setActivo(true)}>No</button>
                        </div><br />
                        <br />
                        <span className="spanTest">¿Dónde se encuentra?</span>
                        <br />
                        <span className="spanTest">Direccion</span>
                        <br />
                        <input type="text" name="direccion" className="inputRegistro" placeholder="Ej: Calle Gran Vía nº65" onChange={(e) => setDireccion(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Ciudad</span>
                        <br />
                        <input type="text" name="ciudad" className="inputRegistro" placeholder="Ej: Madrid" onChange={(e) => setCiudad(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Código Postal</span>
                        <br />
                        <input type="text" name="CP" className="inputRegistro" placeholder="Ej: 09231" onChange={(e) => setCp(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Teléfono</span>
                        <br />
                        <input type="text" name="telefono" className="inputRegistro" placeholder="559 577 837" onChange={(e) => setTelefono(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Email</span>
                        <br />
                        <input type="email" name="email" className="inputRegistro" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">¿Cuántas personas hay?</span>
                        <br />
                        <input type="number" name="habitantes" min="0" className="inputRegistro" placeholder="Ej: 4" onChange={(e) => setHabitantes(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Capacidad Máxima:</span>
                        <br />
                        <input type="number" name="capacidad" min="0" className="inputRegistro" placeholder="Ej: 4" onChange={(e) => setCapacidad(e.target.value)}></input>
                        <br />
                        <br />
                        <span className="spanTest">Idiomas:</span>
                        <br />
                        <div className="contenedor-Test">
                            <button type="button" value="castellano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Castellano</button>
                            <button type="button" value="catalan" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Català</button>
                            <button type="button" value="euskera" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Euskera</button>
                            <button type="button" value="gallego" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Galego</button>
                            <button type="button" value="valenciano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Valencià</button>
                            <button type="button" value="coreano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >한국어</button>
                            <button type="button" value="chino" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >中文</button>
                            <button type="button" value="japones" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >日本語</button>
                            <button type="button" value="ingles" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >English</button>
                            <button type="button" value="italiano" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Italiano</button>
                            <button type="button" value="aleman" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Deutsch</button>
                            <button type="button" value="frances" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Français</button>
                            <button type="button" value="ruso" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Pусский</button>
                            <button type="button" value="neerlandes" className="Label-button" name="idiomas" onClick={(e) => setIdiomas((idiomas) => [...idiomas, e.target.value])} >Nederlands</button>
                        </div>
                        <br />
                        <br />
                        <span className="spanRegCol">¿Hay normas de convivencia?</span>
                        <div className="container-Test">
                            <button type="button" value="si" className="Label-button" name="orientacionsexual" onClick={() => setOrientacionSexual(true)} >LGBT+ friendly</button>
                            <button type="button" value="si" className="Label-button" name="religion" onClick={() => setReligion(true)} >Religión friendly</button>
                            <button type="button" value="si" className="Label-button" name="fumador" onClick={() => setFumador(true)} >Abierto a fumadores</button>
                            <button type="button" value="si" className="Label-button" name="mascotas" onClick={() => setMascotas(true)} >Que quiera mascotas</button>
                            <button type="button" value="si" className="Label-button" name="politica" onClick={() => setPolitica(true)} >Abierto a ideologías políticas</button>
                        </div>
                        <br />
                        <span className="spanRegCol">Tipo de ubicación:</span>
                        <br />

                        <button type="button" value="costa" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de la costa</button>
                        <button type="button" value="ciudad" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En una ciudad</button>
                        <button type="button" value="interior" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >En el interior</button>
                        <button type="button" value="montana" className="Label-button" name="ubicacion" onClick={(e) => setUbicacion((ubicacion) => [...ubicacion, e.target.value])} >Cerca de montañas</button>
                        <br />
                        <br />
                        <span className="spanRegCol">Tipo de vivienda:</span>
                        <br />
                        <button type="button" value="piso" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Piso</button>
                        <button type="button" value="unifamiliar" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Vivienda unifamiliar</button>
                        <button type="button" value="atico" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Ático</button>
                        <button type="button" value="duplex" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Dúplex</button>
                        <button type="button" value="chalet" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Chalet</button>
                        <button type="button" value="otros" className="Label-button" name="tipoVivienda" onClick={(e) => setTipoVivienda((tipoVivienda) => [...tipoVivienda, e.target.value])} >Otros tipos</button>
                        <br />
                        <br />
                        <span className="spanRegCol">Rango de edad de personas</span>
                        <br />
                        <button type="button" value="50_60" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 50 y 60 años</button>
                        <button type="button" value="60_70" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 60 y 70 años</button>
                        <button type="button" value="70_80" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Entre 70 y 80 años</button>
                        <button type="button" value="_80" className="Label-button" name="rangoEdad" onClick={(e) => setRangoEdad((rangoEdad) => [...rangoEdad, e.target.value])} >Más de 80</button>
                        <br />
                        <br />
                        <br />
                        <span className="spanRegCol">¿Cuál es la cantidad que se cobraría al mes?</span>
                        <br />
                        <select name="dinero" id="dinero" className="inputRegistro" onChange={(e) => setDinero(e.target.value)}>
                            <option></option>
                            <option value="200">200 €</option>
                            <option value="300">300 €</option>
                            <option value="400">400 €</option>
                            <option value="500">500 €</option>
                            <option value="600">600 €</option>
                            <option value="700">700 €</option>
                            <option value="800">800 €</option>
                            <option value="900">900 €</option>
                            <option value="1000">1000 €</option>
                            <option value="1100">1100 €</option>
                            <option value="1200">1200 €</option>
                            <option value="1300">1300 €</option>
                            <option value="1400">1400 €</option>
                            <option value="1500">1500 € o más</option>
                        </select>
                        <br />
                        <br />
                        <span className="spanRegCol">M&sup2; totales del immueble:</span>
                        <br />
                        <select name="metros" className="inputRegistro" id="metros" onChange={(e) => setMetros(e.target.value)}>
                            <option></option>
                            <option value="100">100 m&sup2;</option>
                            <option value="200">200 m&sup2;</option>
                            <option value="300">300 m&sup2;</option>
                            <option value="400">400 m&sup2;</option>
                            <option value="500">500 m&sup2;</option>
                            <option value="600">600 m&sup2;</option>
                            <option value="700">700 m&sup2;</option>
                            <option value="800">800 m&sup2;</option>
                            <option value="900">900 m&sup2;</option>
                            <option value="1000">1000 m&sup2;</option>
                            <option value="1500">1500 m&sup2;</option>
                            <option value="+1500">Más de 1500 m&sup2;</option>
                        </select>
                        <br />
                        <br />
                        <span className="spanRegCol">¿Qué instalaciones puede ofrecer?</span>
                        <br />
                        <div>
                            <button type="button" value="salacine" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de cine</button>
                            <button type="button" value="recreativos" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de recreativos</button>
                            <button type="button" value="salamanualidades" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de manualidades</button>
                            <button type="button" value="salagimnasio" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Gimnasio</button>
                            <button type="button" value="rehabilitacion" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Sala de rehabilitación</button>
                            <button type="button" value="spa" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Spa</button>
                            <button type="button" value="pingpong" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de ping pong</button>
                            <button type="button" value="billar" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Mesa de Billar</button>
                            <button type="button" value="futbolin" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Futbolín</button>
                            <button type="button" value="trastero" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Trastero</button>
                            <button type="button" value="garage" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Plaza de garaje</button>
                            <button type="button" value="salacocina" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Cocina</button>
                            <button type="button" value="buffet" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Buffet</button>
                            <button type="button" value="lavavajillas" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavavajillas</button>
                            <button type="button" value="lavanderia" className="Label-button" name="instalaciones" onClick={(e) => setInstalaciones((instalaciones) => [...instalaciones, e.target.value])} >Lavandería</button>
                        </div>
                        <br />
                        <br />
                        <span className="spanRegCol">¿Qué tipo de baño puede ofrecer?</span>
                        <br />
                        <div className="contenedor-Boolean">
                            <button type="button" name="lavabo" value="privado" className="Label-button" onClick={() => setLavabo("privado")}>Privado</button>
                            <button type="button" name="lavabo" value="compartido" className="Label-button" onClick={() => setLavabo("compartido")}>Compartido</button>
                        </div>
                        <br />
                        <span className="spanTest">¿Qué equipamientos exteriores puede ofrecer?</span>
                        <br />
                        <div id="respuestasExteriores">
                            <button type="button" value="no" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Ninguno</button>
                            <button type="button" value="jardin" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Jardín</button>
                            <button type="button" value="terraza" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Terraza</button>
                            <button type="button" value="canchabaloncesto" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Cancha de baloncesto</button>
                            <button type="button" value="huerto" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Huerto</button>
                            <button type="button" value="barbacoa" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Zona de barbacoa</button>
                            <button type="button" value="canchapadel" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pista de pádel</button>
                            <button type="button" value="piscina" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina</button>
                            <button type="button" value="cubierta" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Piscina cubierta</button>
                            <button type="button" value="campofutbol" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de fútbol</button>
                            <button type="button" value="campogolf" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Campo de golf</button>
                            <button type="button" value="campohipica" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Hípica</button>
                            <button type="button" value="esqui" className="Label-button" name="exteriores" onClick={(e) => setExteriores((exteriores) => [...exteriores, e.target.value])} >Pistas de esquí</button>
                        </div>
                        <br />
                        <br />
                        <span className="spanRegCol">¿Se puede llegar en transporte público?</span>
                        <br />
                        <div className="contenedor-Boolean">
                            <button type="button" name="facilAcceso" value="si" className="Label-button-Boolean" onClick={() => setFacilAcceso(true)}>Sí</button>
                            <button type="button" name="facilAcceso" value="no" className="Label-button-Boolean" onClick={() => setFacilAcceso(false)}>No</button>
                        </div>
                        <br />
                        <div className="contenedor-Boton-Registrar">
                            <button type="button" className="Btn-Default-Perfil"><span className="Texto-Blanco-Perfil">Registrar Co-living</span></button>
                        </div>
                    </div>
                </form>
            </div>
            <NavBar />
        </div>

    )

}

export default RegisterColiving