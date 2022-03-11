import React, { useState } from "react";
import axios from "axios";
import {Checkbox} from "antd";

function RegisterUser(){

    const [nombre, setNombre] = useState("");
    const [activo, setActivo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [gente, setGente] = useState("");
    const [capacidad, setCapacidad] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");
    const [religion, setReligion] = useState("");
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
            "idUserAdmin": "1",
            activo,
            direccion,
            ciudad,
            cp,
            telefono,
            email,
            gente,
            capacidad,
            idiomas,
            orientacionSexual,
            religion,
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
                    <label>Nombre del Coliving:</label>
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
                    <label>Gente viviendo actualmente:</label>
                    <br />
                    <input type="number" name="gente" min="0" placeholder="Ej: 4" onChange={(e) => setGente(e.target.value)}></input>
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
                    <label>Importancia de la Orientacion Sexual?</label>
                    <br />
                    <input type="radio" name="orientacionSexual" value="contrario" id="Contrario" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="orientacionSexual" value="indiferente" id="Indiferente" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="orientacionSexual" value="acepto" id="Acepto" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                    <br />
                    <br />
                    <label>Importancia de la Religión:</label>
                    <br />
                    <input type="radio" name="religion" value="contrario" id="Contrario" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="religion" value="indiferente" id="Indiferente" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="religion" value="acepto" id="Acepto" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                    <br />
                    <br />
                    <label>¿Se aceptan mascotas?</label>
                    <br />
                    <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascota(e.target.value)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascota(e.target.value)}></input><label htmlFor="no">&nbsp;No</label>
                    <br />
                    <br />
                    <label>Se aceptan fumadores?:</label>
                    <br />
                    <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(e.target.value)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(e.target.value)}></input><label htmlFor="no">&nbsp;No</label>
                    <br />
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
                    <input type="radio" name="tipoVivienda" value="piso" id="piso" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="piso">&nbsp;Pisos, áticos y dúplex</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="casa" id="casa" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="casa">&nbsp;Casas y chalets</label>
                    <br />
                    <input type="radio" name="tipoVivienda" value="otros" id="otros" onChange={(e) => setTipoVivienda(e.target.value)}></input><label htmlFor="otros">&nbsp;Otros tipos</label>
                    <br />
                    <br />
                    <label>Rango Edad:</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxRangoEdad(e)}>
                            <Checkbox name="rangoEdad" value="50-60" id="50-60">
                                <label forhtml="50-60">&nbsp;Entre 50 y 60 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="60-70" id="60-70">
                                <label forhtml="60-70">&nbsp;Entre 60 y 70 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="70-80" id="70-80">
                                <label forhtml="70-80">&nbsp;Entre 70 y 80 años</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="rangoEdad" value="+80" id="+80">
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
                            <Checkbox name="exteriores" value="piscina" id="piscina" >
                                <label forhtml="piscina">&nbsp;Piscina</label>
                            </Checkbox>&nbsp;
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
                    <label>¿Quien pertenece a este coliving? (introduce el email)</label> 
                    <br />
                    <input type="text" name="idsColiving" placeholder="Ej: paco@gmail.com" onChange={(e) => setIds(e.target.value)}></input>
                    <br />
                    <br />
                    <button type="button" className="ButtonHome btn btn-primary btn-lg" variant="primary" onClick={enviarDatos}>Enviar</button>
                </div>
            </form>

        </div>

    )

}

export default RegisterUser