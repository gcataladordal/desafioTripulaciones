import React, { useState, useEffect } from "react";
import axios from "axios";
import imgAnterior from "../img/left_arrow_(1).png"
import InfoAuth from "../hooks/InfoAuth";
import NavBar from "../components/NavBar";

function BusquedaUsuario() {

    const [usuario, auth] = InfoAuth("obtieneinfo")

    useEffect(() => {
        if (auth === true) {
        } else if (auth === false) {
            window.location.href = "/"
        }
    }, [auth])


    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [oficio, setOficio] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState(false);
    const [religion, setReligion] = useState(false);
    const [politica, setPolitica] = useState(false);
    const [mascotas, setMascotas] = useState(false);
    const [fumador, setFumador] = useState(false);
    const [caracter, setCaracter] = useState("");
    const [musica, setMusica] = useState("")
    const [deportes, setDeportes] = useState("");
    const [peliculas, setPeliculas] = useState("");
    const [aficiones, setAficiones] = useState("");
    const [carnet, setCarnet] = useState("");
    const [region, setRegion] = useState("");
    const [rangoEdad, setRangoEdad] = useState("");
    const [gente, setGente] = useState("")
    const [actividades, setActividades] = useState("");
    const [aireLibre, setAireLibre] = useState("");
    const [manuales, setManuales] = useState("");
    const [cocina, setCocina] = useState("");
    const [arte, setArte] = useState("");
    const [entretenimiento, setEntretenimiento] = useState("");
    const [sociedad, setSociedad] = useState("");
    const [grupales, setGrupales] = useState("");
    const [coleccionismo, setColeccionismo] = useState("");
    const [ciencias, setCiencias] = useState("");


    const clickImagenAtras = () => {
        window.location.href = "/homelogueado"
    }

    function enviarDatos(e) {
        e.preventDefault()

        setActividades([aireLibre, manuales, cocina, arte, entretenimiento, ciencias, grupales, coleccionismo, sociedad])

        setAficiones([caracter, musica, peliculas, deportes, actividades])


        let aficionesJuntas = aficiones.flat(2)


        let caracteristicasTest = {
            edad,
            genero,
            oficio,
            idiomas,
            orientacionSexual,
            religion,
            politica,
            mascotas,
            fumador,
            carnet,
            region,
            rangoEdad,
            gente,
            aficionesJuntas,
            id_usuario: 1
        }

        axios.post("/busquedausuario", caracteristicasTest).then((res) => {
            window.location.href = "http://localhost:3000/resultadobusquedauser"
        })

    }

    return (
        <div>
            <div className="Frame-3629">
                <img src={imgAnterior} onClick={clickImagenAtras} className="Icon-left-arrow" alt="botonAtras"></img>
                <br />
                <form onSubmit={(e) => enviarDatos(e)}>
                    <span className="spanTest">Puedes buscar usuarios por campos concretos, rellena todos los que quieras especificar:</span>
                    <br />
                    <br />
                    <div>
                        <span className="spanBusqUser">
                            Buscar por edad:
                        </span>
                        <br />
                        <input type="number" min="18" max="120" className="inputRegistro" onChange={(e) => setEdad(e.target.value)}></input>
                    </div>
                    <br />
                    <div>
                        <span className="spanBusqUser">Buscar por género:</span>
                        <br />
                        <select name="genero" id="genero" className="inputRegistro" onChange={(e) => setGenero(e.target.value)}>
                            <option></option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <span className="spanBusqUser">Buscar por sector laboral:</span>
                        <div className="contenedor-Test">
                            <button type="button" value="sanidad" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Sanidad</button>
                            <button type="button" value="ingenieria" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ingeniería</button>
                            <button type="button" value="forestal" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Agrario-forestal</button>
                            <button type="button" value="administrativo" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Administrativo</button>
                            <button type="button" value="artes" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Artes</button>
                            <button type="button" value="comunicacion" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Comunicación</button>
                            <button type="button" value="derecho" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Derecho</button>
                            <button type="button" value="empresariales" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Empresariales</button>
                            <button type="button" value="ensenanza" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Enseñanza</button>
                            <button type="button" value="investigacioncientifica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación científica</button>
                            <button type="button" value="construccion" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Construcción</button>
                            <button type="button" value="investigaciontecnica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Investigación técnica</button>
                            <button type="button" value="musica" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Música</button>
                            <button type="button" value="seguridad" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Protección y Seguridad</button>
                            <button type="button" value="cineasta" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Cine/teatro</button>
                            <button type="button" value="rh" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Recursos Humanos</button>
                            <button type="button" value="amacasa" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Ama de casa</button>
                            <button type="button" value="mantenimiento" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Mantenimiento</button>

                            <button type="button" value="otro" className="Label-button" name="oficio" onClick={(e) => setOficio((oficio) => [...oficio, e.target.value])} >Otra profesión</button>
                        </div>
                    </div>
                    <br />
                    <div>
                        <span className="spanBusqUser">Buscar por idioma:</span>
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
                    </div>
                    <br />
                    <span className="spanBusqUser">Buscar por normas de convivencia:</span>
                    <div className="container-Test">
                        <button type="button" value="si" className="Label-button" name="orientacionsexual" onClick={() => setOrientacionSexual(true)} >LGBT+ friendly</button>
                        <button type="button" value="si" className="Label-button" name="religion" onClick={() => setReligion(true)} >Religión friendly</button>
                        <button type="button" value="si" className="Label-button" name="fumador" onClick={() => setFumador(true)} >Abierto a fumadores</button>
                        <button type="button" value="si" className="Label-button" name="mascotas" onClick={() => setMascotas(true)} >Que quiera mascotas</button>
                        <button type="button" value="si" className="Label-button" name="politica" onClick={() => setPolitica(true)} >Abierto a ideologías políticas</button>
                    </div>
                    <br />
                    <span className="spanBusqUser">Buscar por carácter:</span>
                    <br />
                    <div className="container-Test">
                        <button type="button" value="activo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Activo</button>
                        <button type="button" value="deportista" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Deportista</button>
                        <button type="button" value="calmado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Calmado</button>
                        <button type="button" value="atento" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Atento</button>
                        <button type="button" value="alegre" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Alegre</button>
                        <button type="button" value="colaborador" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Colaborador</button>
                        <button type="button" value="creativo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Creativo</button>
                        <button type="button" value="decidido" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Decidido</button>
                        <button type="button" value="tratofacil" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >De trato fácil</button>
                        <button type="button" value="empatico" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Empático</button>
                        <button type="button" value="entusiasta" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Entusiasta</button>
                        <button type="button" value="flexible" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Flexible</button>
                        <button type="button" value="amable" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Amable</button>
                        <button type="button" value="divertido" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Divertido</button>
                        <button type="button" value="honesto" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Honesto</button>
                        <button type="button" value="gracioso" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Gracioso</button>
                        <button type="button" value="optimista" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Optimista</button>
                        <button type="button" value="ordenado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Ordenado</button>
                        <button type="button" value="apasionado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Apasionado</button>
                        <button type="button" value="practico" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Práctico</button>
                        <button type="button" value="proactivo" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Proactivo</button>
                        <button type="button" value="sensato" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Sensato</button>
                        <button type="button" value="relajado" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Relajado</button>
                        <button type="button" value="generoso" className="Label-button" name="caracter" onClick={(e) => setCaracter((caracter) => [...caracter, e.target.value])} >Generoso</button>
                    </div>
                    <br />

                    <span className="spanBusqUser">Buscar por zona donde quieran vivir:</span>
                    <br />
                    <button type="button" value="andalucia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Andalucía</button>
                    <button type="button" value="aragon" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Aragón</button>
                    <button type="button" value="asturias" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Asturias</button>
                    <button type="button" value="baleares" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Baleares</button>
                    <button type="button" value="canarias" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Islas Canarias</button>
                    <button type="button" value="cantabria" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cantabria</button>
                    <button type="button" value="castillaleon" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla y León</button>
                    <button type="button" value="castillalamancha" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Castilla-La Mancha</button>
                    <button type="button" value="catalunya" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Cataluña</button>
                    <button type="button" value="valencia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad Valenciana</button>
                    <button type="button" value="extremadura" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Extremadura</button>
                    <button type="button" value="galicia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Galícia</button>
                    <button type="button" value="madrid" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Comunidad de Madrid</button>
                    <button type="button" value="murcia" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Región de Murcia</button>
                    <button type="button" value="navarra" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Navarra</button>
                    <button type="button" value="paisvasco" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >País Vasco</button>
                    <button type="button" value="rioja" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Rioja</button>
                    <button type="button" value="ceuta" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Ceuta</button>
                    <button type="button" value="melilla" className="Label-button" name="region" onClick={(e) => setRegion((region) => [...region, e.target.value])} >Melilla</button>
                    <br />
                    <div className="contenedor-Boton-Buscar">
                        <button type="button" className="Btn-Default-Home"><span className="Texto-Blanco">Buscar</span></button>
                    </div>
                </form >
            </div>
            <NavBar />
        </div >
    )
}



export default BusquedaUsuario