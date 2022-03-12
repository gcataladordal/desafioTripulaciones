import React, { useState } from "react";
import axios from "axios";
import { Checkbox, Radio } from "antd";


function BusquedaUsuario() {


    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [oficio, setOficio] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");
    const [religion, setReligion] = useState("");
    const [politica, setPolitica] = useState("");
    const [mascotas, setMascotas] = useState("");
    const [fumador, setFumador] = useState("");
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
    


    const [viewCaracter, setViewCaracter] = useState(false);
    const [viewMusica, setViewMusica] = useState(false);
    const [viewPeliculas, setViewPeliculas] = useState(false);
    const [viewDeportes, setViewDeportes] = useState(false);
    const [viewActividades, setViewActividades] = useState(false);
    const [viewActividadesAireLibre, setViewActividadesAireLibre] = useState(false);
    const [viewActividadesManuales, setViewActividadesManuales] = useState(false);
    const [viewActividadesCocina, setViewActividadesCocina] = useState(false);
    const [viewActividadesArtes, setViewActividadesArtes] = useState(false);
    const [viewActividadesEntretenimiento, setViewActividadesEntretenimiento] = useState(false);
    const [viewActividadesSociedad, setViewActividadesSociedad] = useState(false);
    const [viewActividadesGrupales, setViewActividadesGrupales] = useState(false);
    const [viewActividadesColeccionismo, setViewActividadesColeccionismo] = useState(false);
    const [viewActividadesCiencias, setViewActividadesCiencias] = useState(false);


    const cambiosCheckboxRegion = (valoresMarcados) => {
        setRegion(valoresMarcados)
    }

    const cambiosCheckboxIdiomas = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }

    const cambiosCheckboxOficio = (valoresMarcados) => {
        setOficio(valoresMarcados)
    }

    const cambiosCheckboxRangoEdad = (valoresMarcados) => {
        setRangoEdad(valoresMarcados)
    }
    
    const cambiosCheckboxPeliculas = (valoresMarcados) => {
        setPeliculas(valoresMarcados)
    }

    const cambiosCheckboxCaracter = (valoresMarcados) => {
        setCaracter(valoresMarcados)
    }

    const cambiosCheckboxMusica = (valoresMarcados) => {
        setMusica(valoresMarcados)
    }

    const cambiosCheckboxDeportes = (valoresMarcados) => {
        setDeportes(valoresMarcados)
    }

    const cambiosCheckboxAireLibre = (valoresMarcados) => {
        setAireLibre(valoresMarcados)
    }

    const cambiosCheckboxManuales = (valoresMarcados) => {
        setManuales(valoresMarcados)
    }

    const cambiosCheckboxCocina = (valoresMarcados) => {
        setCocina(valoresMarcados)
    }

    const cambiosCheckboxArte = (valoresMarcados) => {
        setArte(valoresMarcados)
    }

    const cambiosCheckboxEntretenimiento = (valoresMarcados) => {
        setEntretenimiento(valoresMarcados)
    }

    const cambiosCheckboxCiencias = (valoresMarcados) => {
        setCiencias(valoresMarcados)
    }

    const cambiosCheckboxGrupales = (valoresMarcados) => {
        setGrupales(valoresMarcados)
    }

    const cambiosCheckboxColeccionismo = (valoresMarcados) => {
        setColeccionismo(valoresMarcados)
    }

    const cambiosCheckboxSociedad = (valoresMarcados) => {
        setSociedad(valoresMarcados)
    }


    function enviarDatos(e) {
        e.preventDefault()
        
        setActividades([aireLibre, manuales, cocina, arte, entretenimiento, ciencias, grupales, coleccionismo, sociedad])

       

        console.log(actividades)
        setAficiones([caracter, musica, peliculas, deportes, actividades])
        let aficionesJuntas = aficiones.flat(3)
        console.log(aficionesJuntas)

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
            console.log(res.data)
        })

    }

    return (
        <div>
            <form onSubmit={(e) => enviarDatos(e)}>
                <br />
                <p>Para saber un poco más de ti, contesta estas preguntas...</p>
                <div>
                    <label>Indica tu edad:</label>
                    <br />
                    <input type="number" min="18" max="120" onChange={(e) => setEdad(e.target.value)}></input>
                </div>
                <br />
                <div>
                    <label>Indica tu género:</label>
                    <br />
                    <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                        <option></option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Indicanos los sectores en los que hayas trabajado durante tu vida laboral</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxOficio(e)}>
                        <Checkbox name="oficio" value="sanidad" id="sanidad">
                            <label forhtml="sanidad">&nbsp;Sanidad</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="ingenieria" id="ingenieria">
                            <label forhtml="ingenieria">&nbsp;Ingeniería</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="forestal" id="forestal">
                            <label forhtml="forestal">&nbsp;Agrario-forestal</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="administrativo" id="administrativo">
                            <label forhtml="administrativo">&nbsp;Administrativo</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="artes" id="artes">
                            <label forhtml="artes">&nbsp;Artes</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="comunicacion" id="comunicacion">
                            <label forhtml="comunicacion">&nbsp;Comunicación</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="derecho" id="derecho">
                            <label forhtml="derecho">&nbsp;Derecho</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="empresariales" id="empresariales">
                            <label forhtml="empresariales">&nbsp;Empresariales/Económicas</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="enseñanza" id="enseñanza">
                            <label forhtml="enseñanza">&nbsp;Enseñanza</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="investigacioncientifica" id="investigacioncientifica">
                            <label forhtml="investigacioncientifica">&nbsp;Investigación científica</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="investigaciontecnica" id="investigaciontecnica">
                            <label forhtml="investigaciontecnica">&nbsp;Investigación técnica</label>
                        </Checkbox>
                        <Checkbox name="oficio" value="musica" id="musica">
                            <label forhtml="musica">&nbsp;Música</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="seguridad" id="seguridad">
                            <label forhtml="seguridad">&nbsp;Protección y Seguridad</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="rh" id="rh">
                            <label forhtml="rh">&nbsp;Recursos humanos</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="cine" id="cine">
                            <label forhtml="cine">&nbsp;Cine y teatro</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="amacasa" id="amacasa">
                            <label forhtml="amacasa">&nbsp;Ama de casa</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="mantenimiento" id="mantenimiento">
                            <label forhtml="mantenimiento">&nbsp;Mantenimiento</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="construccion" id="Construccion">
                            <label forhtml="Construccion">&nbsp;Construcción</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="otro" id="otro">
                            <label forhtml="otro">&nbsp;Otra profesión</label>
                        </Checkbox>
                    </Checkbox.Group>
                </div>
                <br />
                <div>
                    <label>¿Qué Idiomas hablas?</label>
                    <br />
                    <div id="respuestasIdiomas">
                        <Checkbox.Group onChange={(e) => cambiosCheckboxIdiomas(e)}>
                            <Checkbox name="idiomas" value="castellano" id="castellano">
                                <label forhtml="castellano">&nbsp;Castellano</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="catalan" id="catalan" >
                                <label forhtml="catalan">&nbsp;Català</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="euskera" id="euskera" >
                                <label forhtml="euskera">&nbsp;Euskara</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="gallego" id="gallego" >
                                <label forhtml="gallego">&nbsp;Galego</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="valenciano" id="valenciano" >
                                <label forhtml="valenciano">&nbsp;Valencià</label>
                            </Checkbox>
                            <Checkbox name="idiomas" value="coreano" id="coreano">
                                <label forhtml="coreano">&nbsp;한국어</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="chino" id="chino" >
                                <label forhtml="chino">&nbsp;中文</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="japones" id="japones" >
                                <label forhtml="japones">&nbsp;日本語</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="ingles" id="ingles" >
                                <label forhtml="ingles">&nbsp;English</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="italiano" id="italiano" >
                                <label forhtml="italiano">&nbsp;Italiano</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="aleman" id="aleman" >
                                <label forhtml="aleman">&nbsp;Deutsch</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="frances" id="frances" >
                                <label forhtml="frances">&nbsp;Français</label>
                            </Checkbox>
                            <Checkbox name="idiomas" value="ruso" id="ruso" >
                                <label forhtml="ruso">&nbsp;Pусский</label>
                            </Checkbox>
                            <Checkbox name="idiomas" value="neerlandes" id="neerlandes" >
                                <label forhtml="neerlandes">&nbsp;Nederlands</label>
                            </Checkbox>

                        </Checkbox.Group>
                    </div>
                </div>
                <br />
                <div>
                    <label>¿Vivirías con alguien con una orientacion sexual diferente?</label>
                    <br />
                    <input type="radio" name="orientacion" value="si" id="si" onChange={(e) => setOrientacionSexual(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="orientacion" value="no" id="no" onChange={(e) => setOrientacionSexual(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Vivirías con alguien con una religión diferente?</label>
                    <br />
                    <input type="radio" name="religion" value="si" id="si" onChange={(e) => setReligion(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="religion" value="no" id="no" onChange={(e) => setReligion(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Vivirías con alguien con una ideología política diferente?</label>
                    <br />
                    <input type="radio" name="politica" value="si" id="si" onChange={(e) => setPolitica(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="politica" value="no" id="no" onChange={(e) => setPolitica(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Vivirías con alguien con mascotas?</label>
                    <br />
                    <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascotas(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascotas(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>¿Vivirías con un fumador?</label>
                    <br />
                    <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(true)}></input><label htmlFor="si">&nbsp;Si</label>
                    <br />
                    <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <Checkbox.Group>
                        <div>
                            <Checkbox name="aficiones" value="caracter" id="caracter" onChange={() => {
                                if (viewCaracter === true) {
                                    setViewCaracter(false)
                                } else if (viewCaracter === false) {
                                    setViewCaracter(true)
                                }
                            }}>
                                <label>¿Cómo eres?</label>
                                <br />
                                {viewCaracter ? (<div>
                                    <Checkbox.Group onChange={(e) => cambiosCheckboxCaracter(e)}>
                                        <Checkbox name="caracter" value="activo" id="activo">
                                            <label forhtml="activo">&nbsp;Activo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="deportista" id="deportista" >
                                            <label forhtml="deportista">&nbsp;Deportista</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="calmado" id="calmado" >
                                            <label forhtml="calmado">&nbsp;Calmado</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="atento" id="atento" >
                                            <label forhtml="atento">&nbsp;Atento</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="alegre" id="alegre" >
                                            <label forhtml="alegre">&nbsp;Alegre</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="colaborador" id="colaborador">
                                            <label forhtml="colaborador">&nbsp;Colaborador</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="creativo" id="creativo" >
                                            <label forhtml="creativo">&nbsp;Creativo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="tratofacil" id="tratofacil" >
                                            <label forhtml="tratofacil">&nbsp;De trato fácil</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="empatico" id="empatico" >
                                            <label forhtml="empatico">&nbsp;Empático</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="flexible" id="flexible" >
                                            <label forhtml="flexible">&nbsp;Flexible</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="amable" id="amable" >
                                            <label forhtml="amable">&nbsp;Amable</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="divertido" id="divertido" >
                                            <label forhtml="divertido">&nbsp;Divertido</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="gracioso" id="gracioso" >
                                            <label forhtml="gracioso">&nbsp;Gracioso</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="optimista" id="optimista" >
                                            <label forhtml="optimista">&nbsp;Optimista</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="apasionado" id="apasionado" >
                                            <label forhtml="apasionado">&nbsp;Apasionado</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="practico" id="practico" >
                                            <label forhtml="practico">&nbsp;Práctico</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="proactivo" id="proactivo" >
                                            <label forhtml="proactivo">&nbsp;Proactivo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="relajado" id="relajado" >
                                            <label forhtml="relajado">&nbsp;Relajado</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="sociable" id="sociable" >
                                            <label forhtml="sociable">&nbsp;Sociable</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="generoso" id="generoso" >
                                            <label forhtml="generoso">&nbsp;Generoso</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="sensato" id="sensato" >
                                            <label forhtml="sensato">&nbsp;Sensato</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="ordenado" id="ordenado" >
                                            <label forhtml="ordenado">&nbsp;Ordenado</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="caracter" value="honesto" id="honesto" >
                                            <label forhtml="honesto">&nbsp;Honesto</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="entusiasta" id="entusiasta" >
                                            <label forhtml="entusiasta">&nbsp;Entusiasta</label>
                                        </Checkbox>
                                        <Checkbox name="caracter" value="decidido" id="decidido" >
                                            <label forhtml="decidido">&nbsp;Decidido</label>
                                        </Checkbox>

                                    </Checkbox.Group>
                                </div>) : ""}
                            </Checkbox>
                        </div>
                        <br />
                        <div>
                            <Checkbox name="aficiones" value="musica" id="musica" onChange={() => {
                                if (viewMusica === true) {
                                    setViewMusica(false)
                                } else if (viewMusica === false) {
                                    setViewMusica(true)
                                }
                            }} >
                                <label>¿Qué música escuchas?</label>
                                <br />
                                {viewMusica ? (
                                    <div>
                                        <Checkbox.Group onChange={(e) => cambiosCheckboxMusica(e)}>
                                        <Checkbox name="musica" value="alternativa" id="alternativa">
                                            <label forhtml="alternativa">&nbsp;Alternativa</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="blues" id="blues" >
                                            <label forhtml="blues">&nbsp;Blues</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="clasica" id="clasica" >
                                            <label forhtml="clasica">&nbsp;Clásica</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="electronica" id="electronica" >
                                            <label forhtml="electronica">&nbsp;Electrónica</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="folk" id="folk">
                                            <label lkrhtml="folk">&nbsp;Folk</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="gospel" id="gospel">
                                            <label forhtml="gospel">&nbsp;Gospel</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="jazz" id="jazz" >
                                            <label forhtml="jazz">&nbsp;Jazz</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="lounge" id="lounge" >
                                            <label forhtml="lounge">&nbsp;Lounge</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="metal" id="metal" >
                                            <label forhtml="metal">&nbsp;Metal</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="punk" id="punk" >
                                            <label forhtml="punk">&nbsp;Punk</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="reggae" id="reggae" >
                                            <label forhtml="reggae">&nbsp;Reggae</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="soul" id="soul">
                                            <label forhtml="soul">&nbsp;soul</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="yeye" id="yeye" >
                                            <label forhtml="yeye">&nbsp;Yé-Yé</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="pachangueo" id="pachangueo" >
                                            <label forhtml="pachangueo">&nbsp;Pachangueo</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="bolero" id="bolero" >
                                            <label forhtml="bolero">&nbsp;Bolero</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="zarzuela" id="zarzuela" >
                                            <label forhtml="zarzuela">&nbsp;Zarzuela</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="flamenco" id="flamenco" >
                                            <label forhtml="flamenco">&nbsp;Flamenco</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="copla" id="copla" >
                                            <label forhtml="copla">&nbsp;Copla</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="rock" id="rock" >
                                            <label forhtml="rock">&nbsp;Rock</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="rb" id="rb" >
                                            <label forhtml="rb">&nbsp;R&B</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="musica" value="opera" id="opera" >
                                            <label forhtml="opera">&nbsp;Opera</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="latina" id="latina" >
                                            <label forhtml="latina">&nbsp;Latina</label>
                                        </Checkbox>
                                        <Checkbox name="musica" value="instrumental" id="instrumental" >
                                            <label forhtml="instrumental">&nbsp;Instrumental</label>
                                        </Checkbox>
                                    </Checkbox.Group>
                                </div>) : ""}
                            </Checkbox>
                        </div>
                        <br />
                        <div>
                            <Checkbox name="aficiones" value="deportes" id="deportes" onChange={() => {
                                if (viewDeportes === true) {
                                    setViewDeportes(false)
                                } else if (viewDeportes === false) {
                                    setViewDeportes(true)
                                }
                            }} >
                                <label>¿Qué deportes practicas?</label>
                                <br />
                                {viewDeportes ? (<div>
                                    <Checkbox.Group onChange={(e) => cambiosCheckboxDeportes(e)}>
                                        <Checkbox name="deportes" value="badminton" id="badminton">
                                            <label forhtml="badminton">&nbsp;Badminton</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="beisbol" id="beisbol" >
                                            <label forhtml="beisbol">&nbsp;Beisbol</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="boxeo" id="boxeo" >
                                            <label forhtml="boxeo">&nbsp;Boxeo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="baloncesto" id="baloncesto" >
                                            <label forhtml="baloncesto">&nbsp;Baloncesto</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="futbol" id="futbol" >
                                            <label forhtml="futbol">&nbsp;Fútbol</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="piraguismo" id="piraguismo">
                                            <label forhtml="piraguismo">&nbsp;Piragúismo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="ciclismo" id="ciclismo" >
                                            <label forhtml="ciclismo">&nbsp;Ciclismo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="golf" id="golf" >
                                            <label forhtml="golf">&nbsp;Golf</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="excursionismo" id="excursionismo" >
                                            <label forhtml="excursionismo">&nbsp;Excursionismo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="padel" id="padel" >
                                            <label forhtml="padel">&nbsp;Pádel</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="remo" id="remo" >
                                            <label forhtml="remo">&nbsp;Remo</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="esqui" id="esqui" >
                                            <label forhtml="esqui">&nbsp;Esquí</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="fronton" id="fronton" >
                                            <label forhtml="fronton">&nbsp;Frontón</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="tenis" id="tenis" >
                                            <label forhtml="tenis">&nbsp;Tenis</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="ajedrez" id="ajedrez" >
                                            <label forhtml="ajedrez">&nbsp;Ajedrez</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="motociclismo" id="motociclismo" >
                                            <label forhtml="motociclismo">&nbsp;Motociclismo</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="caza" id="caza" >
                                            <label forhtml="caza">&nbsp;Caza</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="pesca" id="pesca" >
                                            <label forhtml="pesca">&nbsp;Pesca</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="yoga" id="yoga" >
                                            <label forhtml="yoga">&nbsp;Yoga</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="petanca" id="petanca" >
                                            <label forhtml="petanca">&nbsp;Petanca</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="tenismesa" id="tenismesa" >
                                            <label forhtml="tenismesa">&nbsp;Tenis de mesa</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="natacion" id="natacion" >
                                            <label forhtml="natacion">&nbsp;Natación</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="correr" id="correr" >
                                            <label forhtml="correr">&nbsp;Correr</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="hipica" id="hipica" >
                                            <label forhtml="hipica">&nbsp;Hípica</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="gimnasio" id="gimnasio" >
                                            <label forhtml="gimnasio">&nbsp;Gimnasio</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="deportes" value="crossfit" id="crossfit" >
                                            <label forhtml="crossfit">&nbsp;Crossfit</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="buceo" id="buceo" >
                                            <label forhtml="buceo">&nbsp;Buceo</label>
                                        </Checkbox>
                                        <Checkbox name="deportes" value="bolos" id="bolos" >
                                            <label forhtml="bolos">&nbsp;Bolos</label>
                                        </Checkbox>
                                    </Checkbox.Group>
                                </div>) : ""}

                            </Checkbox>
                        </div>
                        <br />
                        <div>
                            <Checkbox name="aficiones" value="peliculas" id="peliculas" onChange={() => {
                                if (viewPeliculas === true) {
                                    setViewPeliculas(false)
                                } else if (viewPeliculas === false) {
                                    setViewPeliculas(true)
                                }
                            }} >
                                <label>¿Qué tipo de películas te gustan?</label>
                                <br />
                                {viewPeliculas ? (<div>
                                    <Checkbox.Group onChange={(e) => cambiosCheckboxPeliculas(e)}>
                                        <Checkbox name="peliculas" value="accion" id="accion" >
                                            <label forhtml="accion">&nbsp;Acción</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="peliculas" value="comedia" id="comedia" >
                                            <label forhtml="comedia">&nbsp;Comedia</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="documental" id="documental" >
                                            <label forhtml="documental">&nbsp;Documental</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="crimen" id="crimen" >
                                            <label forhtml="crimen">&nbsp;Crimen</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="negro" id="negro" >
                                            <label forhtml="negro">&nbsp;Cine negro</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="peliculas" value="historia" id="historia" >
                                            <label forhtml="historia">&nbsp;Historia</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="misterio" id="misterio" >
                                            <label forhtml="misterio">&nbsp;Misterio</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="politica" id="politica" >
                                            <label forhtml="politica">&nbsp;Política</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="suspense" id="suspense" >
                                            <label forhtml="suspense">&nbsp;Suspense</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="peliculas" value="musical" id="musical" >
                                            <label forhtml="musical">&nbsp;Musical</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="belico" id="belico" >
                                            <label forhtml="belico">&nbsp;Bélico</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="western" id="western" >
                                            <label forhtml="western">&nbsp;Western</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="cienciaficcion" id="cienciaficcion" >
                                            <label forhtml="cienciaficcion">&nbsp;Ciencia Ficción</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="romantica" id="romantica" >
                                            <label forhtml="romantica">&nbsp;Romántica</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="terror" id="terror" >
                                            <label forhtml="terror">&nbsp;Terror</label>
                                        </Checkbox>&nbsp;
                                        <Checkbox name="peliculas" value="fantasia" id="fantasia" >
                                            <label forhtml="fantasia">&nbsp;Fantasía</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="drama" id="drama" >
                                            <label forhtml="drama">&nbsp;Drama</label>
                                        </Checkbox>
                                        <Checkbox name="peliculas" value="aventura" id="aventura" >
                                            <label forhtml="aventura">&nbsp;Aventura</label>
                                        </Checkbox>
                                    </Checkbox.Group>
                                </div>) : ""}
                            </Checkbox>
                        </div>
                        <br />
                        <div>
                            <Checkbox name="aficiones" value="actividades" id="actividades" onChange={() => {
                                if (viewActividades === true) {
                                    setViewActividades(false)
                                } else if (viewActividades === false) {
                                    setViewActividades(true)
                                }
                            }}>
                                <label>¿Cuáles son tus aficiones?</label>
                                <br />
                                {viewActividades ? (<div>
                                    <Checkbox.Group>
                                        <Checkbox name="airelibre" value="airelibre" id="airelibre" onChange={() => {
                                            if (viewActividadesAireLibre === true) {
                                                setViewActividadesAireLibre(false)
                                            } else if (viewActividadesAireLibre === false) {
                                                setViewActividadesAireLibre(true)
                                            }
                                        }}>
                                            <label>Actividades al aire libre</label>
                                            {viewActividadesAireLibre ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxAireLibre(e)}>
                                                        <Checkbox name="actividades" value="playa" id="playa" >
                                                            <label forhtml="playa">&nbsp;Actividades en la playa</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="aves" id="aves" >
                                                            <label forhtml="aves">&nbsp;Observación de aves</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="jardineria" id="jardineria" >
                                                            <label forhtml="jardineria">&nbsp;Jardinería</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="montanismo" id="montanismo" >
                                                            <label forhtml="montanismo">&nbsp;Montañismo</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="manualidades" value="manualidades" id="manualidades" onChange={() => {
                                            if (viewActividadesManuales === true) {
                                                setViewActividadesManuales(false)
                                            } else if (viewActividadesManuales === false) {
                                                setViewActividadesManuales(true)
                                            }
                                        }}>
                                            <label>Hazlo tu mismo</label>
                                            {viewActividadesManuales ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxManuales(e)}>
                                                        <Checkbox name="actividades" value="manualidades" id="manualidades" >
                                                            <label forhtml="manualidades">&nbsp;Manualidades</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="artesanias" id="artesanias" >
                                                            <label forhtml="artesanias">&nbsp;Artesanias</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="tejido" id="tejido" >
                                                            <label forhtml="tejido">&nbsp;Tejido</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="bordado" id="bordado" >
                                                            <label forhtml="bordado">&nbsp;Bordado</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="puntocruz" id="puntocruz" >
                                                            <label forhtml="puntocruz">&nbsp;Punto de cruz</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="ceramica" id="ceramica" >
                                                            <label forhtml="ceramica">&nbsp;Cerámica</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="carpinteria" id="carpinteria" >
                                                            <label forhtml="carpinteria">&nbsp;Carpintería</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="robotica" id="robotica" >
                                                            <label forhtml="robotica">&nbsp;Robótica</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="bricolage" id="bricolage" >
                                                            <label forhtml="bricolage">&nbsp;Bricolage</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="costura" id="costura" >
                                                            <label forhtml="costura">&nbsp;Costura</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="modelismo" id="modelismo" >
                                                            <label forhtml="modelismo">&nbsp;Modelismo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="bolillo" id="bolillo" >
                                                            <label forhtml="bolillo">&nbsp;Bolillo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="macrame" id="macrame" >
                                                            <label forhtml="macrame">&nbsp;Macramé</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="ganchillo" id="ganchillo" >
                                                            <label forhtml="ganchillo">&nbsp;Ganchillo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="croche" id="croche" >
                                                            <label forhtml="croche">&nbsp;Croché</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="cocina" value="cocina" id="cocina" onChange={() => {
                                            if (viewActividadesCocina === true) {
                                                setViewActividadesCocina(false)
                                            } else if (viewActividadesCocina === false) {
                                                setViewActividadesCocina(true)
                                            }
                                        }}>
                                            <label>Actividades de cocina</label>
                                            {viewActividadesCocina ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxCocina(e)}>
                                                        <Checkbox name="actividades" value="cerveza" id="cerveza" >
                                                            <label forhtml="cerveza">&nbsp;Cerveza artesanal</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="cocina" id="cocina" >
                                                            <label forhtml="cocina">&nbsp;Cocina</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="reposteria" id="reposteria" >
                                                            <label forhtml="reposteria">&nbsp;Repostería</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="gastronomia" id="gastronomia" >
                                                            <label forhtml="gastronomia">&nbsp;Gastronomía</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="india" id="india" >
                                                            <label forhtml="india">&nbsp;Cocina India</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="oriental" id="oriental" >
                                                            <label forhtml="oriental">&nbsp;Cocina Oriental</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="mexicana" id="mexicana" >
                                                            <label forhtml="mexicana">&nbsp;Cocina Mexicana</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="mediterranea" id="mediterranea" >
                                                            <label forhtml="mediterranea">&nbsp;Cocina MediterrÁnea</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="artes" value="artes" id="artes" onChange={() => {
                                            if (viewActividadesArtes === true) {
                                                setViewActividadesArtes(false)
                                            } else if (viewActividadesArtes === false) {
                                                setViewActividadesArtes(true)
                                            }
                                        }}>
                                            <label>Actividades de arte</label>
                                            {viewActividadesArtes ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxArte(e)}>
                                                        <Checkbox name="actividades" value="museos" id="museos" >
                                                            <label forhtml="museos">&nbsp;Museos</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="escritura" id="escritura" >
                                                            <label forhtml="escritura">&nbsp;Escritura</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="beatboxing" id="beatboxing" >
                                                            <label forhtml="beatboxing">&nbsp;Beatboxing</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="componermusica" id="componermusica" >
                                                            <label forhtml="componermusica">&nbsp;Componer música</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="baile" id="baile" >
                                                            <label forhtml="baile">&nbsp;Baile</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="dibujo" id="dibujo" >
                                                            <label forhtml="dibujo">&nbsp;Dibujo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="instrumentos" id="instrumentos" >
                                                            <label forhtml="instrumentos">&nbsp;Instrumentos</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="canto" id="canto" >
                                                            <label forhtml="canto">&nbsp;Canto</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="teatro" id="teatro" >
                                                            <label forhtml="teatro">&nbsp;Tetro</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="pintura" id="pintura" >
                                                            <label forhtml="pintura">&nbsp;Pintura</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="poesia" id="poesia" >
                                                            <label forhtml="poesia">&nbsp;Poesía</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="blogging" id="blogging" >
                                                            <label forhtml="blogging">&nbsp;Blogging</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="cine" id="cine" >
                                                            <label forhtml="cine">&nbsp;Cine</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="comics" id="comics" >
                                                            <label forhtml="comics">&nbsp;Cómics</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="literatura" id="literatura" >
                                                            <label forhtml="literatura">&nbsp;Literatura</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="opera" id="opera" >
                                                            <label forhtml="opera">&nbsp;Ópera</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="concierto" id="concierto" >
                                                            <label forhtml="concierto">&nbsp;Concierto</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="fotografia" id="fotografia" >
                                                            <label forhtml="fotografia">&nbsp;Fotografía</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="entretenimiento" value="entretenimiento" id="entretenimiento" onChange={() => {
                                            if (viewActividadesEntretenimiento === true) {
                                                setViewActividadesEntretenimiento(false)
                                            } else if (viewActividadesEntretenimiento === false) {
                                                setViewActividadesEntretenimiento(true)
                                            }
                                        }}>
                                            <label>Actividades de entretenimiento</label>
                                            {viewActividadesEntretenimiento ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxEntretenimiento(e)}>
                                                        <Checkbox name="actividades" value="mesa" id="mesa" >
                                                            <label forhtml="mesa">&nbsp;Juegos de mesa</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="crucigramas" id="crucigramas" >
                                                            <label forhtml="crucigramas">&nbsp;Crucigramas</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="rompecabezas" id="rompecabezas" >
                                                            <label forhtml="rompecabezas">&nbsp;Rompecabezas</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="videojuegos" id="videojuegos" >
                                                            <label forhtml="videojuegos">&nbsp;Videojuegos</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="casino" id="casino" >
                                                            <label forhtml="casino">&nbsp;Casino</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="magia" id="magia" >
                                                            <label forhtml="magia">&nbsp;Magia</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="telenovelas" id="telenovelas" >
                                                            <label forhtml="telenovelas">&nbsp;Telenovelas</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="bingo" id="bingo" >
                                                            <label forhtml="bingo">&nbsp;Bingo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="poker" id="poker" >
                                                            <label forhtml="poker">&nbsp;Póker</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="cartas" id="cartas" >
                                                            <label forhtml="cartas">&nbsp;Cartas</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="dardos" id="dardos" >
                                                            <label forhtml="dardos">&nbsp;Dardos</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="sociedad" value="sociedad" id="sociedad" onChange={() => {
                                            if (viewActividadesSociedad === true) {
                                                setViewActividadesSociedad(false)
                                            } else if (viewActividadesSociedad === false) {
                                                setViewActividadesSociedad(true)
                                            }
                                        }}>
                                            <label>Actividades de sociedad</label>
                                            {viewActividadesSociedad ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxSociedad(e)}>
                                                        <Checkbox name="actividades" value="reciclaje" id="reciclaje" >
                                                            <label forhtml="reciclaje">&nbsp;Reciclaje</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="socializar" id="socializar" >
                                                            <label forhtml="socializar">&nbsp;Socializar</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="animales" id="animales" >
                                                            <label forhtml="animales">&nbsp;Animales</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="tarot" id="tarot" >
                                                            <label forhtml="tarot">&nbsp;Tarot</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="corazon" id="corazon" >
                                                            <label forhtml="corazon">&nbsp;Prensa del corazón</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="meditacion" id="meditacion" >
                                                            <label forhtml="meditacion">&nbsp;Meditación</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="astrologia" id="astrologia" >
                                                            <label forhtml="astrologia">&nbsp;Astrología</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="voluntariado" id="voluntariado" >
                                                            <label forhtml="voluntariado">&nbsp;Voluntariado</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="iglesia" id="iglesia" >
                                                            <label forhtml="iglesia">&nbsp;Actividades de iglesia</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="grupales" value="grupales" id="grupales" onChange={() => {
                                            if (viewActividadesGrupales === true) {
                                                setViewActividadesGrupales(false)
                                            } else if (viewActividadesGrupales === false) {
                                                setViewActividadesGrupales(true)
                                            }
                                        }}>
                                            <label>Actividades grupales</label>
                                            {viewActividadesGrupales ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxGrupales(e)}>
                                                        <Checkbox name="actividades" value="viajar" id="viajar" >
                                                            <label forhtml="viajar">&nbsp;Viajar</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="cosplay" id="cosplay" >
                                                            <label forhtml="cosplay">&nbsp;Cosplay</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="disfraces" id="disfraces" >
                                                            <label forhtml="disfraces">&nbsp;Disfraces</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="rol" id="rol" >
                                                            <label forhtml="rol">&nbsp;Juegos de rol</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="historica" id="historica" >
                                                            <label forhtml="historica">&nbsp;Recreación histórica</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="fumadores" id="fumadores" >
                                                            <label forhtml="fumadores">&nbsp;Club de fumadores:</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="vivo" id="vivo" >
                                                            <label forhtml="vivo">&nbsp;Rol en vivo:</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="astrologia" id="astrologia" >
                                                            <label forhtml="astrologia">&nbsp;Astrología</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="turismo" id="turismo" >
                                                            <label forhtml="turismo">&nbsp;Turismo</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="vino" id="vino" >
                                                            <label forhtml="vino">&nbsp;Catas de vino</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="coleccionismo" value="coleccionismo" id="coleccionismo" onChange={() => {
                                            if (viewActividadesColeccionismo === true) {
                                                setViewActividadesColeccionismo(false)
                                            } else if (viewActividadesColeccionismo === false) {
                                                setViewActividadesColeccionismo(true)
                                            }
                                        }}>
                                            <label>Coleccionismo</label>
                                            {viewActividadesColeccionismo ? (
                                                <div>
                                                     <Checkbox.Group onChange={(e) => cambiosCheckboxColeccionismo(e)}>
                                                        <Checkbox name="actividades" value="antiguedades" id="antiguedades" >
                                                            <label forhtml="antiguedades">&nbsp;Antiguedades</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="numismatica" id="numismatica" >
                                                            <label forhtml="numismatica">&nbsp;Numismática</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="filatelia" id="filatelia" >
                                                            <label forhtml="filatelia">&nbsp;Filatelia</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>
                                        <br />
                                        <Checkbox name="ciencias" value="ciencias" id="ciencias" onChange={() => {
                                            if (viewActividadesCiencias === true) {
                                                setViewActividadesCiencias(false)
                                            } else if (viewActividadesCiencias === false) {
                                                setViewActividadesCiencias(true)
                                            }
                                        }}>
                                            <label>Ciencias</label>
                                            {viewActividadesCiencias ? (
                                                <div>
                                                    <Checkbox.Group onChange={(e) => cambiosCheckboxCiencias(e)}>
                                                        <Checkbox name="actividades" value="astronomia" id="astronomia" >
                                                            <label forhtml="astronomia">&nbsp;Astronomia</label>
                                                        </Checkbox>&nbsp;
                                                        <Checkbox name="actividades" value="matematicas" id="matematicas" >
                                                            <label forhtml="matematicas">&nbsp;Matemáticas</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="fisica" id="fisica" >
                                                            <label forhtml="fisica">&nbsp;Física</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="filologia" id="filologia" >
                                                            <label forhtml="filologia">&nbsp;Filología</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="zoologia" id="zoologia" >
                                                            <label forhtml="zoologia">&nbsp;Zoología:</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="biologia" id="biologia" >
                                                            <label forhtml="biologia">&nbsp;Biología</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="quimica" id="quimica" >
                                                            <label forhtml="quimica">&nbsp;Química</label>
                                                        </Checkbox>
                                                        <Checkbox name="actividades" value="historia" id="historia" >
                                                            <label forhtml="historia">&nbsp;Historia</label>
                                                        </Checkbox>
                                                    </Checkbox.Group>
                                                </div>) : ""}
                                        </Checkbox>

                                    </Checkbox.Group>
                                </div>) : ""}
                            </Checkbox>
                        </div>
                    </Checkbox.Group>
                </div>



                <br />
                <div>
                    <label>¿Tienes carnet de conducir?</label>
                    <br />
                    <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setCarnet(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setCarnet(false)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />

                <br />
                <div>
                    <label>¿Dónde te gustaría vivir?</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxRegion(e)}>
                        <Checkbox name="place" value="andalucia" id="andalucia">
                            <label forhtml="andalucia">&nbsp;Andalucía</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="aragon" id="aragon">
                            <label forhtml="aragon">&nbsp;Aragón</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="asturias" id="asturias">
                            <label forhtml="asturias">&nbsp;Principado de Asturias</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="baleares" id="baleares">
                            <label forhtml="baleares">&nbsp;Islas Baleares</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="canarias" id="canarias">
                            <label forhtml="canarias">&nbsp;Islas Canarias</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="cantabria" id="cantabria">
                            <label forhtml="cantabria">&nbsp;Cantabria</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="castillaleon" id="castillaleon">
                            <label forhtml="castillaleon">&nbsp;Castilla y León</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="castillalamancha" id="castillalamancha">
                            <label forhtml="castillalamancha">&nbsp;Castilla-La Mancha</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="cataluña" id="cataluña">
                            <label forhtml="cataluña">&nbsp;Cataluña</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="valencia" id="valencia">
                            <label forhtml="valencia">&nbsp;Comunidad Valenciana</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="extremadura" id="extremadura">
                            <label forhtml="extremadura">&nbsp;Extremadura</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="galicia" id="galicia">
                            <label forhtml="galicia">&nbsp;Galícia</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="madrid" id="madrid">
                            <label forhtml="madrid">&nbsp;Comunidad de Madrid</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="murcia" id="murcia">
                            <label forhtml="murcia">&nbsp;Región de Murcia</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="navarra" id="navarra">
                            <label forhtml="navarra">&nbsp;Navarra</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="paisvasco" id="paisvasco">
                            <label forhtml="paisvasco">&nbsp;País Vasco</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="rioja" id="rioja">
                            <label forhtml="rioja">&nbsp;La Rioja</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="ceuta" id="ceuta">
                            <label forhtml="ceuta">&nbsp;Ceuta</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="melilla" id="melilla">
                            <label forhtml="melilla">&nbsp;Melilla</label>
                        </Checkbox>
                    </Checkbox.Group>
                </div>

                <br />

                <br />
                <div>
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
                </div>
                <br />
                <div>
                    <label>¿Con cuánta gente como máximo compartirías coliving?</label>
                    <br />
                    <select name="gente" id="gente" onChange={(e) => setGente(e.target.value)}>
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <br />
                <br />
                <br />
                <button type="submit" className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>

            </form >
        </div >
    )
}



export default BusquedaUsuario