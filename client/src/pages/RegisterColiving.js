import React, { useState, useEffect } from "react";
import axios from "axios";
import {Checkbox} from "antd";
import InfoAuth from "../hooks/InfoAuth";

function RegisterColiving(){

    const [usuario, auth] = InfoAuth("obtieneinfo")

    useEffect(() => {
        if (auth === true) {
        } else if (auth === false ) {
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
    const [orientacionSexual, setOrientacionSexual] = useState("");
    const [religion, setReligion] = useState("");
    const [politica, setPolitica] = useState("");
    const [mascota, setMascota] = useState("");
    const [fumador, setFumador] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [tipoVivienda, setTipoVivienda] = useState("");
    const [rangoEdad, setRangoEdad] = useState("");
    const [dinero, setDinero] = useState("");
    const [metros, setMetros] = useState("");
    const [lavabo, setLavabo] = useState("");
    const [exteriores, setExteriores] = useState("");
    const [facilAcceso, setFacilAcceso] = useState("");
    const [instalaciones, setInstalaciones] = useState("");
    const [ids, setIds]  = useState("");

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

    return(
        <div>
            <br />
            <form>
                <div>
                    <label>¿Cómo se llama tu co-living?</label>
                    <br />
                    <input type="text" name="nombre" placeholder="Ej: Nordikrooms" onChange={(e) => setNombre(e.target.value)}></input>
                    <br />
                    <br />
                    <label>¿Este coliving está ya desplegado y funcionando?</label>
                    <br />
                    <input type="radio" name="immueble" value="si" id="si" onChange={(e) => setActivo(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="immueble" value="no" id="no" onChange={(e) => setActivo(false)}></input><label htmlFor="no">&nbsp;No</label>
                    <br />
                    <br />
                    <label>¿Dónde se encuentra?</label><br />

                    <label>Direccion</label>
                    <br />
                    <input type="text" name="direccion" placeholder="Ej: Calle Gran Vía nº65" onChange={(e) => setDireccion(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Ciudad</label>
                    <br />
                    <input type="text" name="ciudad" placeholder="Ej: Madrid" onChange={(e) => setCiudad(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Código Postal</label>
                    <br />
                    <input type="text" name="CP" placeholder="Ej: 09231" onChange={(e) => setCp(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Teléfono</label>
                    <br />
                    <input type="text" name="telefono" placeholder="559 577 837" onChange={(e) => setTelefono(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" placeholder="Ej: correo@ejemplo.com" onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <br />
                    <label>¿Cuántas personas hay?</label>
                    <br />
                    <input type="number" name="habitantes" min="0" placeholder="Ej: 4" onChange={(e) => setHabitantes(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Capacidad Máxima:</label>
                    <br />
                    <input type="number" name="capacidad" min="0" placeholder="Ej: 4" onChange={(e) => setCapacidad(e.target.value)}></input>
                    <br />
                    <br />
                    <label>Idiomas:</label>
                    <br />
                    <div id="respuestasIdiomas">
                        <Checkbox.Group onChange={(e) => cambiosCheckboxIdiomas(e)}>
                            <Checkbox name="idiomas" value="castellano" id="castellano">
                                <label forhtml="castellano">&nbsp;Castellano</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="catalan" id="catalan" >
                                <label forhtml="catalan">&nbsp;Catalán</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="euskera" id="euskera" >
                                <label forhtml="euskera">&nbsp;Euskera</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="portugues" id="portugues" >
                                <label forhtml="portugues">&nbsp;Portugués</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="coreano" id="coreano">
                                <label forhtml="coreano">&nbsp;Coreano</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="chino" id="chino" >
                                <label forhtml="chino">&nbsp;Chino</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="japones" id="japones" >
                                <label forhtml="japones">&nbsp;Japonés</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="ingles" id="ingles" >
                                <label forhtml="ingles">&nbsp;Inglés</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="italiano" id="italiano" >
                                <label forhtml="italiano">&nbsp;Italiano</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="aleman" id="aleman" >
                                <label forhtml="aleman">&nbsp;Alemán</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="frances" id="frances" >
                                <label forhtml="frances">&nbsp;Francés</label>
                            </Checkbox>
                            <Checkbox name="idiomas" value="ruso" id="ruso" >
                                <label forhtml="ruso">&nbsp;Ruso</label>
                            </Checkbox>
                            <Checkbox name="idiomas" value="neerlandes" id="neerlandes" >
                                <label forhtml="neerlandes">&nbsp;Neerlandés</label>
                            </Checkbox>
                        </Checkbox.Group>
                    </div>
                    <br />
                    <br />
                    <div>
                    <label>¿Se permiten personas con una orientacion sexual diferente?</label>
                    <br />
                    <input type="radio" name="orientacion" value="si" id="si" onChange={(e) => setOrientacionSexual(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="orientacion" value="no" id="no" onChange={(e) => setOrientacionSexual(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Se permiten peronas con una religión diferente?</label>
                    <br />
                    <input type="radio" name="religion" value="si" id="si" onChange={(e) => setReligion(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="religion" value="no" id="no" onChange={(e) => setReligion(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Se permiten personas con una ideología política diferente?</label>
                    <br />
                    <input type="radio" name="politica" value="si" id="si" onChange={(e) => setPolitica(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="politica" value="no" id="no" onChange={(e) => setPolitica(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Se permiten personas con mascotas?</label>
                    <br />
                    <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascota(true)}></input><label htmlFor="si">&nbsp;Si</label>
                     <br />
                    <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascota(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Se permiten personas fumadoras?</label>
                    <br />
                    <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                    <br />
                    <label>Ubicacion:</label>
                    <br />
                    <input type="radio" name="zona" value="costa" id="costa" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="costa">&nbsp;Cerca de la costa</label>
                    <br />
                    <input type="radio" name="zona" value="interior" id="interior" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="interior">&nbsp;En el interior</label>
                    <br />
                    <input type="radio" name="zona" value="montaña" id="montaña" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="montaña">&nbsp;Cerca de montañas</label>
                    <br />
                    <input type="radio" name="zona" value="ciudad" id="ciudad" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="ciudad">&nbsp;En una ciudad</label>
                    <br />
                    <br />
                    <label>Tipo de Vivienda:</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="piso" id="piso" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="piso">&nbsp;Pisos</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="unifamiliar" id="unifamiliar" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="unifamiliar">&nbsp;Casa unifamiliar</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="atico" id="atico" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="atico">&nbsp;Ático</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="duplex" id="duplex" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="duplex">&nbsp;Dúplex</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="chalet" id="chalet" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="chalet">&nbsp;Chalet</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="otros" id="otros" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="otros">&nbsp;Otros tipos</label>
                    <br />
                    <br />
                    <label>Rango Edad:</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxRangoEdad(e)}>
                            <Checkbox name="rangoEdad" value="50_60" id="50_60">
                                <label forhtml="50-60">&nbsp;Entre 50 y 60 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="60_70" id="60_70">
                                <label forhtml="60-70">&nbsp;Entre 60 y 70 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="70_80" id="70_80">
                                <label forhtml="70-80">&nbsp;Entre 70 y 80 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="_80" id="_80">
                                <label forhtml="+80">&nbsp;Más de 80</label>
                            </Checkbox>&nbsp;
                        </Checkbox.Group>
                    <br />
                    <br />
                    <label>Dinero máximo que gastaría (mensual):</label>
                    <br />
                    <select name="metros" id="metros" onChange={(e) => setDinero(e.target.value)}>
                        <option></option>
                        <option value="200">Hasta 200 €</option>
                        <option value="300">Hasta 300 €</option>
                        <option value="400">Hasta 400 €</option>
                        <option value="500">Hasta 500 €</option>
                        <option value="600">Hasta 600 €</option>
                        <option value="700">Hasta 700 €</option>
                        <option value="800">Hasta 800 €</option>
                        <option value="900">Hasta 900 €</option>
                        <option value="1000">Hasta 1000 €</option>
                        <option value="1100">Hasta 1100 €</option>
                        <option value="1200">Hasta 1200 €</option>
                        <option value="1300">Hasta 1300 €</option>
                        <option value="1400">Hasta 1400 €</option>
                        <option value="1500">Hasta 1500 €</option>
                    </select>
                    <br />
                    <br />
                    <label>M&sup2; totales del immueble:</label>
                    <br />
                    <select name="metros" id="metros" onChange={(e) => setMetros(e.target.value)}>
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
                    <label>Instalaciones:</label>
                    <br />
                    <div id="respuestasInstalaciones">
                        <Checkbox.Group onChange={(e) => cambiosCheckboxInstalaciones(e)}>
                            <Checkbox name="instalaciones" value="salacine" id="salacine">
                                <label forhtml="salacine">&nbsp;Sala de cine</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="recreativos" id="recreativos" >
                                <label forhtml="recreativos">&nbsp;Sala de recreativos</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="salamanualidades" id="salamanualidades" >
                                <label forhtml="salamanualidades">&nbsp;Sala de manualidades</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="gimnasio" id="gimnasio" >
                                <label forhtml="gimnasio">&nbsp;Gimnasio</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="rehabilitacion" id="rehabilitacion">
                                <label forhtml="rehabilitacion">&nbsp;Sala de rehabilitación</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="spa" id="spa" >
                                <label forhtml="spa">&nbsp;Spa</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="pingpong" id="pingpong" >
                                <label forhtml="pingpong">&nbsp;Mesa de ping pong</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="billar" id="billar" >
                                <label forhtml="billar">&nbsp;Mesa de billar</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="futbolin" id="futbolin" >
                                <label forhtml="futbolin">&nbsp;Futbolín</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="trastero" id="trastero" >
                                <label forhtml="trastero">&nbsp;Trastero</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="garage" id="garage" >
                                <label forhtml="garage">&nbsp;Plaza de garage</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="cocina" id="cocina" >
                                <label forhtml="cocina">&nbsp;Cocina</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="buffet" id="buffet" >
                                <label forhtml="buffet">&nbsp;Buffet</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="lavavajillas" id="lavavajillas" >
                                <label forhtml="lavavajillas">&nbsp;Lavavajillas</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="lavanderia" id="lavanderia" >
                                <label forhtml="lavanderia">&nbsp;Lavandería</label>
                            </Checkbox>
                        </Checkbox.Group>
                    </div>
                    <br />
                    <br />
                    <label>Baños:</label>
                    <br />
                    <input type="radio" name="lavabo" value="privado" id="privado" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="privado">&nbsp;Privado</label>
                    <br />
                    <input type="radio" name="lavabo" value="compartido" id="compartido" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="compartido">&nbsp;Compartido</label>
                    <br />
                    <br />
                    <label>Exteriores:</label>
                    <br />
                    <div id="respuestasExteriores">
                        <Checkbox.Group onChange={(e) => cambiosCheckboxExteriores(e)}>
                            <Checkbox name="exteriores" value="no" id="no">
                                <label forhtml="no">&nbsp;No</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="exteriores" value="jardin" id="jardin" >
                                <label forhtml="jardin">&nbsp;Jardín</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="exteriores" value="terraza" id="terraza" >
                                <label forhtml="terraza">&nbsp;Terraza</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="baloncesto" id="baloncesto" >
                                <label forhtml="baloncesto">&nbsp;Cancha de baloncesto</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="huerto" id="huerto" >
                                <label forhtml="huerto">&nbsp;Huerto</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="barbacoa" id="barbacoa" >
                                <label forhtml="barbacoa">&nbsp;Zonas de barbacoa</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="padel" id="padel" >
                                <label forhtml="padel">&nbsp;Pista de pádel</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="tenis" id="tenis" >
                                <label forhtml="tenis">&nbsp;Pista de tenis</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="piscina" id="piscina" >
                                <label forhtml="piscina">&nbsp;Piscina</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="cubierta" id="cubierta" >
                                <label forhtml="cubierta">&nbsp;Piscina cubierta</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="futbol" id="futbol" >
                                <label forhtml="futbol">&nbsp;Fútbol</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="instalaciones" value="golf" id="golf" >
                                <label forhtml="golf">&nbsp;Campo de golf</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="hipica" id="hipica" >
                                <label forhtml="hipica">&nbsp;Hípica</label>
                            </Checkbox>
                            <Checkbox name="instalaciones" value="esqui" id="esqui" >
                                <label forhtml="esqui">&nbsp;Esquí</label>
                            </Checkbox>
                        </Checkbox.Group>
                    </div>
                    <br />
                    <br />
                    <label>Se puede llegar en transporte público?</label>
                    <br />
                    <input type="radio" name="facilAcceso" value="si" id="si" onChange={(e) => setFacilAcceso(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="facilAcceso" value="no" id="no" onChange={(e) => setFacilAcceso(false)}></input><label htmlFor="no">&nbsp;No</label>
                    <br />
                    <br />
                    <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={enviarDatos}>Enviar</button>
                </div>
            </form>

        </div>

    )

}

export default RegisterColiving