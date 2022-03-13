import React, { useState } from "react";
import axios from "axios";
import { Checkbox, Radio } from "antd";

function TestAfinidadUser() {

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
    const [carnet, setCarnet] = useState(false);
    const [ubicacion, setUbicacion] = useState("");
    const [region, setRegion] = useState("");
    const [instalaciones, setInstalaciones] = useState("");
    const [rangoEdad, setRangoEdad] = useState("");
    const [dinero, setDinero] = useState("");
    const [metros, setMetros] = useState("");
    const [lavabo, setLavabo] = useState("");
    const [exteriores, setExteriores] = useState("");
    const [gente, setGente] = useState("")
    const [tipoVivienda, setTipoVivienda] = useState("");
    const [actividades, setActividades] = useState("");



    const [viewCaracter, setViewCaracter] = useState(false);
    const [viewMusica, setViewMusica] = useState(false);
    const [viewPeliculas, setViewPeliculas] = useState(false);
    const [viewDeportes, setViewDeportes] = useState(false);
    const [viewActividadesAireLibre, setViewActividadesAireLibre] = useState(false);
    const [viewActividadesManuales, setViewActividadesManuales] = useState(false);
    const [viewActividadesCocina, setViewActividadesCocina] = useState(false);
    const [viewActividadesArtes, setViewActividadesArtes] = useState(false);
    const [viewActividadesEntretenimiento, setViewActividadesEntretenimiento] = useState(false);
    const [viewActividadesSociedad, setViewActividadesSociedad] = useState(false);
    const [viewActividadesGrupales, setViewActividadesGrupales] = useState(false);
    const [viewActividadesColeccionismo, setViewActividadesColeccionismo] = useState(false);
    const [viewActividadesCiencias, setViewActividadesCiencias] = useState(false);

    const [viewOficio, setViewOficio] = useState(false);
    const [viewEdad, setViewEdad] = useState(true);
    const [viewGenero, setViewGenero] = useState(false);
    const [viewIdiomas, setViewIdiomas] = useState(false);
    const [viewOrientacion, setViewOrientacion] = useState(false);
    const [viewReligion, setViewReligion] = useState(false);
    const [viewPolitica, setViewPolitica] = useState(false);
    const [viewMascotas, setViewMascotas] = useState(false);
    const [viewFumador, setViewFumador] = useState(false);
    const [viewCarnet, setViewCarnet] = useState(false);
    const [viewZona, setViewZona] = useState(false);
    const [viewTipoVivienda, setViewTipoVivienda] = useState(false);
    const [viewRegion, setViewRegion] = useState(false);
    const [viewInstalaciones, setViewInstalaciones] = useState(false);
    const [viewLavabo, setViewLavabo] = useState(false);
    const [viewExteriores, setViewExteriores] = useState(false);
    const [viewRangoEdad, setViewRangoEdad] = useState(false);
    const [viewDinero, setViewDinero] = useState(false);
    const [viewMetros, setViewMetros] = useState(false);
    const [viewGente, setViewGente] = useState(false);
    const [viewSubmit, setViewSubmit] = useState(false)


    const [viewAlertGenero, setViewAlertGenero] = useState(false)
    const [viewAlertOficio, setViewAlertOficio] = useState(false)
    const [viewAlertEdad, setViewAlertEdad] = useState(false)
    const [viewAlertPolitica, setViewAlertPolitica] = useState(false)
    const [viewAlertIdiomas, setViewAlertIdiomas] = useState(false)
    const [viewAlertOrientacion, setViewAlertOrientacion] = useState(false)
    const [viewAlertReligion, setViewAlertReligion] = useState(false)
    const [viewAlertMascotas, setViewAlertMascotas] = useState(false)
    const [viewAlertFumador, setViewAlertFumador] = useState(false)
    const [viewAlertCarnet, setViewAlertCarnet] = useState(false)
    const [viewAlertZona, setViewAlertZona] = useState(false)
    const [viewAlertVivienda, setViewAlertVivienda] = useState(false)
    const [viewAlertRegion, setViewAlertRegion] = useState(false)
    const [viewAlertInstalaciones, setViewAlertInstalaciones] = useState(false)
    const [viewAlertLavabo, setViewAlertLavabo] = useState(false)
    const [viewAlertExteriores, setViewAlertExteriores] = useState(false)
    const [viewAlertRangoEdad, setViewAlertRangoEdad] = useState(false)
    const [viewAlertMetros, setViewAlertMetros] = useState(false)
    const [viewAlertDinero, setViewAlertDinero] = useState(false)
    const [viewAlertGente, setViewAlertGente] = useState(false)
    const [viewAlertDeportes, setViewAlertDeportes] = useState(false)
    const [viewAlertCaracter, setViewAlertCaracter] = useState(false)
    const [viewAlertMusica, setViewAlertMusica] = useState(false)
    const [viewAlertPeliculas, setViewAlertPeliculas] = useState(false)
    const [viewAlertActividadesAireLibre, setViewAlertActividadesAireLibre] = useState(false)
    const [viewAlertActividadesManuales, setViewAlertActividadesManuales] = useState(false)
    const [viewAlertActividadesCocina, setViewAlertActividadesCocina] = useState(false)
    const [viewAlertActividadesArtes, setViewAlertActividadesArtes] = useState(false)
    const [viewAlertActividadesEntretenimiento, setViewAlertActividadesEntretenimiento] = useState(false)
    const [viewAlertActividadesSociedad, setViewAlertActividadesSociedad] = useState(false)
    const [viewAlertActividadesGrupales, setViewAlertActividadesGrupales] = useState(false)
    const [viewAlertActividadesCiencias, setViewAlertActividadesCiencias] = useState(false)



    const cambiosCheckboxCaracter = (valoresMarcados) => {
        setCaracter(valoresMarcados)
    }


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

    const cambiosCheckboxExteriores = (valoresMarcados) => {
        setExteriores(valoresMarcados)
    }

    const cambiosCheckboxInstalaciones = (valoresMarcados) => {
        setInstalaciones(valoresMarcados)
    }

    function enviarDatos(e) {
        e.preventDefault()
        console.log(actividades)
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
            ubicacion,
            tipoVivienda,
            region,
            instalaciones,
            rangoEdad,
            dinero,
            metros,
            lavabo,
            exteriores,
            gente,
            aficionesJuntas,
            id_usuario: 1
        }

        axios.post("/testafinidaduser", caracteristicasTest).then((res) => {
            console.log(res.data)
        })

    }

    return (
        <div>
            <form onSubmit={(e) => enviarDatos(e)}>
                <div>
                    <br />
                    <p>Para saber un poco más de ti, contesta estas preguntas...</p>

                    {viewEdad ? (<div>
                        <label>Indica tu edad:</label>
                        <br />
                        <input type="number" min="18" max="120" onChange={(e) => setEdad(e.target.value)}></input>
                        {viewAlertEdad ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => {
                                if (edad !== "") {
                                    setViewEdad(false)
                                    setViewGenero(true)
                                } else {
                                    setViewAlertEdad(true)
                                }
                            }}>Siguiente</button>

                        </div>

                    </div>) : ""}
                    {viewGenero ? (<div>
                        <label>Indica tu género:</label>
                        <br />
                        <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                            <option></option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="otro">Otro</option>
                        </select>
                        {viewAlertGenero ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewGenero(false); setViewEdad(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (genero !== "") {
                                    setViewGenero(false)
                                    setViewOficio(true)
                                } else {
                                    setViewAlertGenero(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewOficio ? (<div>
                        <label>Indicanos los sectores en los que hayas trabajado durante tu vida laboral</label>
                        <br />
                        <div>
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
                        {viewAlertOficio ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewOficio(false); setViewGenero(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (oficio !== "") {
                                    setViewOficio(false)
                                    setViewIdiomas(true)
                                } else {
                                    setViewAlertOficio(true)
                                }
                            }}>Siguiente</button>

                        </div>


                    </div>) : ""}
                    {viewIdiomas ? (<div>
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
                        {viewAlertIdiomas ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewIdiomas(false); setViewOficio(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (idiomas !== "") {
                                    setViewIdiomas(false)
                                    setViewOrientacion(true)
                                } else {
                                    setViewAlertIdiomas(true)
                                }
                            }}>Siguiente</button>

                        </div>

                    </div>) : ""}
                    {viewOrientacion ? (<div>
                        <label>¿Vivirías con alguien con una orientacion sexual diferente?</label>
                        <br />
                        <input type="radio" name="orientacion" value="si" id="si" onChange={(e) => setOrientacionSexual(true)}></input><label htmlFor="si">&nbsp;Si</label>
                        <br />
                        <input type="radio" name="orientacion" value="no" id="no" onChange={(e) => setOrientacionSexual(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertOrientacion ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewOrientacion(false); setViewIdiomas(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (orientacionSexual !== "") {
                                    setViewOrientacion(false)
                                    setViewReligion(true)
                                } else {
                                    setViewAlertOrientacion(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewReligion ? (<div>
                        <label>¿Vivirías con alguien con una religión diferente?</label>
                        <br />
                        <input type="radio" name="religion" value="si" id="si" onChange={(e) => setReligion(true)}></input><label htmlFor="si">&nbsp;Si</label>
                        <br />
                        <input type="radio" name="religion" value="no" id="no" onChange={(e) => setReligion(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertReligion ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewReligion(false); setViewOrientacion(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (religion !== "") {
                                    setViewReligion(false)
                                    setViewPolitica(true)
                                } else {
                                    setViewAlertReligion(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewPolitica ? (<div>
                        <label>¿Vivirías con alguien con una ideología política diferente?</label>
                        <br />
                        <input type="radio" name="politica" value="si" id="si" onChange={(e) => setPolitica(true)}></input><label htmlFor="si">&nbsp;Si</label>
                        <br />
                        <input type="radio" name="politica" value="no" id="no" onChange={(e) => setPolitica(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertPolitica ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewPolitica(false); setViewReligion(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (politica !== "") {
                                    setViewPolitica(false)
                                    setViewMascotas(true)
                                } else {
                                    setViewAlertPolitica(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewMascotas ? (<div>

                        <label>¿Vivirías con alguien con mascotas?</label>
                        <br />
                        <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascotas(true)}></input><label htmlFor="si">&nbsp;Si</label>
                        <br />
                        <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascotas(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertMascotas ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewMascotas(false); setViewPolitica(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (mascotas !== "") {
                                    setViewMascotas(false)
                                    setViewFumador(true)
                                } else {
                                    setViewAlertMascotas(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewFumador ? (<div>
                        <label>¿Vivirías con un fumador?</label>
                        <br />
                        <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(true)}></input><label htmlFor="si">&nbsp;Si</label>
                        <br />
                        <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertFumador ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewFumador(false); setViewMascotas(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (fumador !== "") {
                                    setViewFumador(false)
                                    setViewCaracter(true)
                                } else {
                                    setViewAlertFumador(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}

                    {viewCaracter ? (<div>

                        <label>¿Cómo eres?</label>
                        <br />
                        <div>
                            <Checkbox.Group onChange={(e) => cambiosCheckboxCaracter(e)}>
                                <Checkbox name="caracter" className="caracter" value="activo" id="activo">
                                    <label forhtml="activo">&nbsp;Activo</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="deportista" id="deportista" >
                                    <label forhtml="deportista">&nbsp;Deportista</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="calmado" id="calmado" >
                                    <label forhtml="calmado">&nbsp;Calmado</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="atento" id="atento" >
                                    <label forhtml="atento">&nbsp;Atento</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="alegre" id="alegre" >
                                    <label forhtml="alegre">&nbsp;Alegre</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="colaborador" id="colaborador">
                                    <label forhtml="colaborador">&nbsp;Colaborador</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="creativo" id="creativo" >
                                    <label forhtml="creativo">&nbsp;Creativo</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="decidido" id="decidido" >
                                    <label forhtml="decidido">&nbsp;Decidido</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="tratofacil" id="tratofacil" >
                                    <label forhtml="tratofacil">&nbsp;De trato fácil</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="empatico" id="empatico" >
                                    <label forhtml="empatico">&nbsp;Empático</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="entusiasta" id="entusiasta" >
                                    <label forhtml="entusiasta">&nbsp;Entusiasta</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="flexible" id="flexible" >
                                    <label forhtml="flexible">&nbsp;Flexible</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="amable" id="amable" >
                                    <label forhtml="amable">&nbsp;Amable</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="divertido" id="divertido" >
                                    <label forhtml="divertido">&nbsp;Divertido</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="honesto" id="honesto" >
                                    <label forhtml="honesto">&nbsp;Honesto</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="gracioso" id="gracioso" >
                                    <label forhtml="gracioso">&nbsp;Gracioso</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="optimista" id="optimista" >
                                    <label forhtml="optimista">&nbsp;Optimista</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="ordenado" id="ordenado" >
                                    <label forhtml="ordenado">&nbsp;Ordenado</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="apasionado" id="apasionado" >
                                    <label forhtml="apasionado">&nbsp;Apasionado</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="practico" id="practico" >
                                    <label forhtml="practico">&nbsp;Práctico</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="proactivo" id="proactivo" >
                                    <label forhtml="proactivo">&nbsp;Proactivo</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="sensato" id="sensato" >
                                    <label forhtml="sensato">&nbsp;Sensato</label>
                                </Checkbox>&nbsp;
                                <Checkbox name="caracter" className="caracter" value="relajado" id="relajado" >
                                    <label forhtml="relajado">&nbsp;Relajado</label>
                                </Checkbox>
                                <Checkbox name="caracter" className="caracter" value="generoso" id="generoso" >
                                    <label forhtml="generoso">&nbsp;Generoso</label>
                                </Checkbox>
                            </Checkbox.Group>
                        </div>
                        {viewAlertCaracter ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewCaracter(false); setViewFumador(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (caracter.length >= 5) {
                                    setViewCaracter(false)
                                    setViewMusica(true)
                                } else {
                                    setViewAlertCaracter(true)
                                }
                            }}>Siguiente</button>
                        </div>
                    </div>) : ""}
                    <br />
                    {viewMusica ? (<div>

                        <label>¿Qué música escuchas?</label>
                        <br />

                        <div>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="alternativa">Alternativa:&nbsp;</label>
                                <Radio value="alternativa: 2">Me gusta</Radio>
                                <Radio value="alternativa: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="blues">Blues:&nbsp;</label>
                                <Radio value="blues: 2">Me gusta</Radio>
                                <Radio value="blues: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="clasica">Clásica:&nbsp;</label>
                                <Radio value="clasica: 2">Me gusta</Radio>
                                <Radio value="clasica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="electronica">Electrónica:&nbsp;</label>
                                <Radio value="electronica: 2">Me gusta</Radio>
                                <Radio value="electronica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="folk">Folk:&nbsp;</label>
                                <Radio value="folk: 2">Me gusta</Radio>
                                <Radio value="folk: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="gospel">Gospel:&nbsp;</label>
                                <Radio value="gospel: 2">Me gusta</Radio>
                                <Radio value="gospel: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="instrumental">Instrumental:&nbsp;</label>
                                <Radio value="instrumental: 2">Me gusta</Radio>
                                <Radio value="instrumental: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="jazz">Jazz:&nbsp;</label>
                                <Radio value="jazz: 2">Me gusta</Radio>
                                <Radio value="jazz: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="latina">Latina:&nbsp;</label>
                                <Radio value="latina: 2">Me gusta</Radio>
                                <Radio value="latina: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="lounge">Lounge:&nbsp;</label>
                                <Radio value="lounge: 2">Me gusta</Radio>
                                <Radio value="lounge: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="metal">Metal:&nbsp;</label>
                                <Radio value="metal: 2">Me gusta</Radio>
                                <Radio value="metal: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="opera">Ópera:&nbsp;</label>
                                <Radio value="opera: 2">Me gusta</Radio>
                                <Radio value="opera: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="punk">Punk:&nbsp;</label>
                                <Radio value="punk: 2">Me gusta</Radio>
                                <Radio value="punk: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="rb">R&B:&nbsp;</label>
                                <Radio value="rb: 2">Me gusta</Radio>
                                <Radio value="rb: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="reggae">Reggae:&nbsp;</label>
                                <Radio value="reggae: 2">Me gusta</Radio>
                                <Radio value="reggae: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="rock">Rock:&nbsp;</label>
                                <Radio value="rock: 2">Me gusta</Radio>
                                <Radio value="rock: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="soul">Soul:&nbsp;</label>
                                <Radio value="soul: 2">Me gusta</Radio>
                                <Radio value="soul: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="copla">Copla:&nbsp;</label>
                                <Radio value="copla: 2">Me gusta</Radio>
                                <Radio value="copla: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="pachangueo">Pachangueo:&nbsp;</label>
                                <Radio value="pachangueo: 2">Me gusta</Radio>
                                <Radio value="pachangueo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="yeye">Yé-yé:&nbsp;</label>
                                <Radio value="yeye: 2">Me gusta</Radio>
                                <Radio value="yeye: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="bolero">Bolero:&nbsp;</label>
                                <Radio value="bolero: 2">Me gusta</Radio>
                                <Radio value="bolero: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="zarzuela">Zarzuela:&nbsp;</label>
                                <Radio value="zarzuela: 2">Me gusta</Radio>
                                <Radio value="zarzuela: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                <label forhtml="flamenco">Flamenco:&nbsp;</label>
                                <Radio value="flamenco: 2">Me gusta</Radio>
                                <Radio value="flamenco: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertMusica ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewMusica(false); setViewCaracter(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (musica.length >= 5) {
                                    setViewMusica(false)
                                    setViewDeportes(true)
                                } else {
                                    setViewAlertMusica(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    <br />
                    {viewDeportes ? (<div>

                        <label>¿Qué deportes practicas?</label>
                        <br />
                        <div>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="badminton">Badminton:&nbsp;</label>
                                <Radio value="badminton: 2">Me gusta</Radio>
                                <Radio value="badminton: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="beisbol">Béisbol:&nbsp;</label>
                                <Radio value="beisbol: 2">Me gusta</Radio>
                                <Radio value="beisbol: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="boxeo">Boxeo:&nbsp;</label>
                                <Radio value="boxeo: 2">Me gusta</Radio>
                                <Radio value="boxeo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="baloncesto">Baloncesto:&nbsp;</label>
                                <Radio value="baloncesto: 2">Me gusta</Radio>
                                <Radio value="baloncesto: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="bolos">Jugar a los bolos:&nbsp;</label>
                                <Radio value="bolos: 2">Me gusta</Radio>
                                <Radio value="bolos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="piraguismo">Piragüismo:&nbsp;</label>
                                <Radio value="piraguismo: 2">Me gusta</Radio>
                                <Radio value="piraguismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="buceo">Buceo:&nbsp;</label>
                                <Radio value="buceo: 2">Me gusta</Radio>
                                <Radio value="buceo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="futbol">Fútbol:&nbsp;</label>
                                <Radio value="futbol: 2">Me gusta</Radio>
                                <Radio value="futbol: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="crossfit">Crossfit:&nbsp;</label>
                                <Radio value="crossfit: 2">Me gusta</Radio>
                                <Radio value="crossfit: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="ciclismo">Ciclismo:&nbsp;</label>
                                <Radio value="ciclismo: 2">Me gusta</Radio>
                                <Radio value="ciclismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="golf">Golf:&nbsp;</label>
                                <Radio value="golf: 2">Me gusta</Radio>
                                <Radio value="golf: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="gimnasio">Gimnasio (máquinas/clases):&nbsp;</label>
                                <Radio value="gimnasio: 2">Me gusta</Radio>
                                <Radio value="gimnasio: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="excursionismo">Excursionismo:&nbsp;</label>
                                <Radio value="excursionismo: 2">Me gusta</Radio>
                                <Radio value="excursionismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="hipica">Hípica:&nbsp;</label>
                                <Radio value="hipica: 2">Me gusta</Radio>
                                <Radio value="hipica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="padel">Pádel:&nbsp;</label>
                                <Radio value="padel: 2">Me gusta</Radio>
                                <Radio value="padel: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="remo">Remo:&nbsp;</label>
                                <Radio value="remo: 2">Me gusta</Radio>
                                <Radio value="remo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="correr">Correr:&nbsp;</label>
                                <Radio value="correr: 2">Me gusta</Radio>
                                <Radio value="correr: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="esqui">Esquí:&nbsp;</label>
                                <Radio value="esqui: 2">Me gusta</Radio>
                                <Radio value="esqui: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="fronton">Frontón:&nbsp;</label>
                                <Radio value="fronton: 2">Me gusta</Radio>
                                <Radio value="fronton: 4">Me encanta</Radio>
                            </Radio.Group>

                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="natacion">Natación:&nbsp;</label>
                                <Radio value="natacion: 2">Me gusta</Radio>
                                <Radio value="natacion: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="tenismesa">Tenis de mesa:&nbsp;</label>
                                <Radio value="tenismesa: 2">Me gusta</Radio>
                                <Radio value="tenismesa: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="tenis">Tenis:&nbsp;</label>
                                <Radio value="tenis: 2">Me gusta</Radio>
                                <Radio value="tenis: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="ajedrez">Ajedrez:&nbsp;</label>
                                <Radio value="ajedrez: 2">Me gusta</Radio>
                                <Radio value="ajedrez: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="motociclismo">Motociclismo:&nbsp;</label>
                                <Radio value="motociclismo: 2">Me gusta</Radio>
                                <Radio value="motociclismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="petanca">Petanca:&nbsp;</label>
                                <Radio value="petanca: 2">Me gusta</Radio>
                                <Radio value="petanca: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="caza">Caza:&nbsp;</label>
                                <Radio value="caza: 2">Me gusta</Radio>
                                <Radio value="caza: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="yoga">Yoga:&nbsp;</label>
                                <Radio value="yoga: 2">Me gusta</Radio>
                                <Radio value="yoga: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                <label forhtml="pesca">Pesca:&nbsp;</label>
                                <Radio value="pesca: 2">Me gusta</Radio>
                                <Radio value="pesca: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>

                        {viewAlertDeportes ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewDeportes(false); setViewMusica(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (deportes.length >= 5) {
                                    setViewDeportes(false)
                                    setViewPeliculas(true)
                                } else {
                                    setViewAlertDeportes(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}


                    {viewPeliculas ? (<div>

                        <label>¿Qué tipo de películas te gustan?</label>
                        <br />
                        <div>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="accion">Acción:&nbsp;</label>
                                <Radio value="accion: 2">Me gusta</Radio>
                                <Radio value="accion: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="aventura">Aventura:&nbsp;</label>
                                <Radio value="aventura: 2">Me gusta</Radio>
                                <Radio value="aventura: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="comedia">Comedia:&nbsp;</label>
                                <Radio value="comedia: 2">Me gusta</Radio>
                                <Radio value="comedia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="documental">Documental:&nbsp;</label>
                                <Radio value="documental: 2">Me gusta</Radio>
                                <Radio value="documental: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="drama">Drama:&nbsp;</label>
                                <Radio value="drama: 2">Me gusta</Radio>
                                <Radio value="drama: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="crimen">Crimen:&nbsp;</label>
                                <Radio value="crimen: 2">Me gusta</Radio>
                                <Radio value="crimen: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="negro">Cine negro:&nbsp;</label>
                                <Radio value="negro: 2">Me gusta</Radio>
                                <Radio value="negro: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="fantasia">Fantasía:&nbsp;</label>
                                <Radio value="fantasia: 2">Me gusta</Radio>
                                <Radio value="fantasia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="historia">Historia:&nbsp;</label>
                                <Radio value="historia: 2">Me gusta</Radio>
                                <Radio value="historia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="terror">Terror:&nbsp;</label>
                                <Radio value="terror: 2">Me gusta</Radio>
                                <Radio value="terror: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="misterio">Misterio:&nbsp;</label>
                                <Radio value="misterio: 2">Me gusta</Radio>
                                <Radio value="misterio: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="politica">Política:&nbsp;</label>
                                <Radio value="politica: 2">Me gusta</Radio>
                                <Radio value="politica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="romantica">Romántica:&nbsp;</label>
                                <Radio value="romantica: 2">Me gusta</Radio>
                                <Radio value="romantica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="cienciaficcion">Ciencia ficción:&nbsp;</label>
                                <Radio value="cienciaficcion: 2">Me gusta</Radio>
                                <Radio value="cienciaficcion: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="suspense">Suspense:&nbsp;</label>
                                <Radio value="suspense: 2">Me gusta</Radio>
                                <Radio value="suspense: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="musical">Musical:&nbsp;</label>
                                <Radio value="musical: 2">Me gusta</Radio>
                                <Radio value="musical: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="belico">Bélico:&nbsp;</label>
                                <Radio value="belico: 2">Me gusta</Radio>
                                <Radio value="belico: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                <label forhtml="western">Western:&nbsp;</label>
                                <Radio value="western: 2">Me gusta</Radio>
                                <Radio value="western: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertPeliculas ? (<p>Elige al menos 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewPeliculas(false); setViewDeportes(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (peliculas.length >= 5) {
                                    setViewPeliculas(false)
                                    setViewActividadesAireLibre(true)
                                } else {
                                    setViewAlertPeliculas(true)
                                }
                            }}>Siguiente</button>
                        </div>
                    </div>) : ""}
                    <br />
                    {viewActividadesAireLibre ? (<div>



                        <label>Actividades al aire libre</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="playa">Actividades en la playa:&nbsp;</label>
                                <Radio value="playa: 2">Me gusta</Radio>
                                <Radio value="playa: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="aves">Observación de aves:&nbsp;</label>
                                <Radio value="aves: 2">Me gusta</Radio>
                                <Radio value="aves: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="jardineria">Jardinería:&nbsp;</label>
                                <Radio value="jardineria: 2">Me gusta</Radio>
                                <Radio value="jardineria: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="montanismo">Montañismo:&nbsp;</label>
                                <Radio value="montanismo: 2">Me gusta</Radio>
                                <Radio value="montanismo: 4">Me encanta</Radio>
                            </Radio.Group>

                        </div>
                        {viewAlertActividadesAireLibre ? (<p>Elige mínimo 1</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesAireLibre(false); setViewPeliculas(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 1) {
                                    setViewActividadesAireLibre(false)
                                    setViewActividadesManuales(true)
                                } else {
                                    setViewAlertActividadesAireLibre(true)
                                }
                            }}>Siguiente</button>

                        </div>

                    </div>) : ""}

                    {viewActividadesManuales ? (<div>
                        <label>Hazlo tu mismo</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="manualidades">Manualidades:&nbsp;</label>
                                <Radio value="manualidades: 2">Me gusta</Radio>
                                <Radio value="manualidades: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="artesanias">Artesanías:&nbsp;</label>
                                <Radio value="artesanias: 2">Me gusta</Radio>
                                <Radio value="artesanias: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="tejido">Tejido:&nbsp;</label>
                                <Radio value="tejido: 2">Me gusta</Radio>
                                <Radio value="tejido: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="croche">Croché:&nbsp;</label>
                                <Radio value="croche: 2">Me gusta</Radio>
                                <Radio value="croche: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="ganchillo">Ganchillo:&nbsp;</label>
                                <Radio value="ganchillo: 2">Me gusta</Radio>
                                <Radio value="ganchillo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="macrame">Macramé:&nbsp;</label>
                                <Radio value="macrame: 2">Me gusta</Radio>
                                <Radio value="macrame: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="bordado">Bordado:&nbsp;</label>
                                <Radio value="bordado: 2">Me gusta</Radio>
                                <Radio value="bordado: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="puntocruz">Punto de cruz:&nbsp;</label>
                                <Radio value="puntocruz: 2">Me gusta</Radio>
                                <Radio value="puntocruz: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="bolillo">Bolillo:&nbsp;</label>
                                <Radio value="bolillo: 2">Me gusta</Radio>
                                <Radio value="bolillo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="ceramica">Ceramica:&nbsp;</label>
                                <Radio value="ceramica: 2">Me gusta</Radio>
                                <Radio value="ceramica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="modelismo">Modelismo:&nbsp;</label>
                                <Radio value="modelismo: 2">Me gusta</Radio>
                                <Radio value="modelismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="carpinteria">Carpinteria:&nbsp;</label>
                                <Radio value="carpinteria: 2">Me gusta</Radio>
                                <Radio value="carpinteria: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="costura">Costura:&nbsp;</label>
                                <Radio value="costura: 2">Me gusta</Radio>
                                <Radio value="costura: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="bricolage">Bricolage:&nbsp;</label>
                                <Radio value="bricolage: 2">Me gusta</Radio>
                                <Radio value="bricolage: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="robotica">Robótica:&nbsp;</label>
                                <Radio value="robotica: 2">Me gusta</Radio>
                                <Radio value="robotica: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesManuales ? (<p>Elige mínimo 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesManuales(false); setViewActividadesAireLibre(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 6) {
                                    setViewActividadesManuales(false)
                                    setViewActividadesCocina(true)
                                } else {
                                    setViewAlertActividadesManuales(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewActividadesCocina ? (<div>

                        <label>Actividades de cocina</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="cerveza">Cerveza artesanal:&nbsp;</label>
                                <Radio value="cerveza: 2">Me gusta</Radio>
                                <Radio value="cerveza: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="cocina">Cocina:&nbsp;</label>
                                <Radio value="cocina: 2">Me gusta</Radio>
                                <Radio value="cocina: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="reposteria">Repostería:&nbsp;</label>
                                <Radio value="reposteria: 2">Me gusta</Radio>
                                <Radio value="reposteria: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="gastronomia">Gastronomia molecular:&nbsp;</label>
                                <Radio value="gastronomia: 2">Me gusta</Radio>
                                <Radio value="gastronomia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="india">Cocina india:&nbsp;</label>
                                <Radio value="india: 2">Me gusta</Radio>
                                <Radio value="india: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="oriental">Cocina oriental:&nbsp;</label>
                                <Radio value="oriental: 2">Me gusta</Radio>
                                <Radio value="oriental: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="mexicana">Cocina mexicana:&nbsp;</label>
                                <Radio value="mexicana: 2">Me gusta</Radio>
                                <Radio value="mexicana: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="mediterranea">Cocina mediterránea:&nbsp;</label>
                                <Radio value="robotica: 2">Me gusta</Radio>
                                <Radio value="robotica: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesCocina ? (<p>Elige mínimo 4</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesCocina(false); setViewActividadesManuales(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 10) {
                                    setViewActividadesCocina(false)
                                    setViewActividadesArtes(true)
                                } else {
                                    setViewAlertActividadesCocina(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewActividadesArtes ? (<div>

                        <label>Actividades de arte</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="museos">Museos:&nbsp;</label>
                                <Radio value="museos: 2">Me gusta</Radio>
                                <Radio value="museos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="escritura">Escritura:&nbsp;</label>
                                <Radio value="escritura: 2">Me gusta</Radio>
                                <Radio value="escritura: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="beatboxing">Beatboxing:&nbsp;</label>
                                <Radio value="beatboxing: 2">Me gusta</Radio>
                                <Radio value="beatboxing: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="componermusica">Componer musica:&nbsp;</label>
                                <Radio value="componermusica: 2">Me gusta</Radio>
                                <Radio value="componermusica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="baile">Baile:&nbsp;</label>
                                <Radio value="baile: 2">Me gusta</Radio>
                                <Radio value="baile: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="fotografia">Fotografía:&nbsp;</label>
                                <Radio value="fotografia: 2">Me gusta</Radio>
                                <Radio value="fotografia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="dibujo">Dibujo:&nbsp;</label>
                                <Radio value="dibujo: 2">Me gusta</Radio>
                                <Radio value="dibujo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="instrumentos">Instrumentos musicales:&nbsp;</label>
                                <Radio value="instrumentos: 2">Me gusta</Radio>
                                <Radio value="instrumentos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="canto">Canto:&nbsp;</label>
                                <Radio value="canto: 2">Me gusta</Radio>
                                <Radio value="canto: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="conciertos">Conciertos:&nbsp;</label>
                                <Radio value="conciertos: 2">Me gusta</Radio>
                                <Radio value="conciertos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="teatro">Teatro:&nbsp;</label>
                                <Radio value="teatro: 2">Me gusta</Radio>
                                <Radio value="teatro: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="opera">Ópera:&nbsp;</label>
                                <Radio value="opera: 2">Me gusta</Radio>
                                <Radio value="opera: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="pintura">Pintura:&nbsp;</label>
                                <Radio value="pintura: 2">Me gusta</Radio>
                                <Radio value="pintura: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="literatura">Literatura:&nbsp;</label>
                                <Radio value="literatura: 2">Me gusta</Radio>
                                <Radio value="literatura: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="poesia">Poesía:&nbsp;</label>
                                <Radio value="poesia: 2">Me gusta</Radio>
                                <Radio value="poesia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="comics">Cómics:&nbsp;</label>
                                <Radio value="comics: 2">Me gusta</Radio>
                                <Radio value="comics: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="blogging">Blogging:&nbsp;</label>
                                <Radio value="blogging: 2">Me gusta</Radio>
                                <Radio value="blogging: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="cine">Cine:&nbsp;</label>
                                <Radio value="cine: 2">Me gusta</Radio>
                                <Radio value="cine: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesArtes ? (<p>Elige mínimo 5</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesArtes(false); setViewActividadesCocina(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 15) {
                                    setViewActividadesArtes(false)
                                    setViewActividadesEntretenimiento(true)
                                } else {
                                    setViewAlertActividadesArtes(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}


                    {viewActividadesEntretenimiento ? (<div>
                        <label>Actividades de entretenimiento</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="mesa">Juegos de mesa:&nbsp;</label>
                                <Radio value="mesa: 2">Me gusta</Radio>
                                <Radio value="mesa: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="dardos">Dardos:&nbsp;</label>
                                <Radio value="dardos: 2">Me gusta</Radio>
                                <Radio value="dardos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="crucigramas">Crucigramas:&nbsp;</label>
                                <Radio value="crucigramas: 2">Me gusta</Radio>
                                <Radio value="crucigramas: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="cartas">Juegos de cartas:&nbsp;</label>
                                <Radio value="cartas: 2">Me gusta</Radio>
                                <Radio value="cartas: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="rompecabezas">Rompecabezas:&nbsp;</label>
                                <Radio value="rompecabezas: 2">Me gusta</Radio>
                                <Radio value="rompecabezas: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="poker">Póker:&nbsp;</label>
                                <Radio value="poker: 2">Me gusta</Radio>
                                <Radio value="poker: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="videojuegos">Videojuegos:&nbsp;</label>
                                <Radio value="videojuegos: 2">Me gusta</Radio>
                                <Radio value="videojuegos: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="bingo">Bingo:&nbsp;</label>
                                <Radio value="bingo: 2">Me gusta</Radio>
                                <Radio value="bingo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="casino">Casino:&nbsp;</label>
                                <Radio value="casino: 2">Me gusta</Radio>
                                <Radio value="casino: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="magia">Magia:&nbsp;</label>
                                <Radio value="magia: 2">Me gusta</Radio>
                                <Radio value="magia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="telenovelas">Telenovelas:&nbsp;</label>
                                <Radio value="telenovelas: 2">Me gusta</Radio>
                                <Radio value="telenovelas: 4">Me encanta</Radio>
                            </Radio.Group>

                        </div>
                        {viewAlertActividadesEntretenimiento ? (<p>Elige mínimo 3</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesEntretenimiento(false); setViewActividadesArtes(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 18) {
                                    setViewActividadesEntretenimiento(false)
                                    setViewActividadesSociedad(true)
                                } else {
                                    setViewAlertActividadesEntretenimiento(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}

                    {viewActividadesSociedad ? (<div>
                        <label>Actividades de sociedad</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="reciclaje">Reciclaje:&nbsp;</label>
                                <Radio value="reciclaje: 2">Me gusta</Radio>
                                <Radio value="reciclaje: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="iglesia">Actividades de iglesia:&nbsp;</label>
                                <Radio value="iglesia: 2">Me gusta</Radio>
                                <Radio value="iglesia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="socializar">Socializar:&nbsp;</label>
                                <Radio value="socializar: 2">Me gusta</Radio>
                                <Radio value="socializar: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="voluntariado">Voluntariado:&nbsp;</label>
                                <Radio value="voluntariado: 2">Me gusta</Radio>
                                <Radio value="voluntariado: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="animales">Animales:&nbsp;</label>
                                <Radio value="animales: 2">Me gusta</Radio>
                                <Radio value="animales: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="astrologia">Astrología:&nbsp;</label>
                                <Radio value="astrologia: 2">Me gusta</Radio>
                                <Radio value="astrologia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="tarot">Tarot:&nbsp;</label>
                                <Radio value="tarot: 2">Me gusta</Radio>
                                <Radio value="tarot: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="meditacion">Meditación:&nbsp;</label>
                                <Radio value="meditacion: 2">Me gusta</Radio>
                                <Radio value="meditacion: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="corazon">Prensa del corazón:&nbsp;</label>
                                <Radio value="corazon: 2">Me gusta</Radio>
                                <Radio value="corazon: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesSociedad ? (<p>Elige mínimo 4</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesSociedad(false); setViewActividadesEntretenimiento(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 22) {
                                    setViewActividadesSociedad(false)
                                    setViewActividadesGrupales(true)
                                } else {
                                    setViewAlertActividadesSociedad(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}

                    {viewActividadesGrupales ? (<div>
                        <label>Actividades grupales</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="viajar">Viajar:&nbsp;</label>
                                <Radio value="viajar: 2">Me gusta</Radio>
                                <Radio value="viajar: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="vino">Cata de vino:&nbsp;</label>
                                <Radio value="vino: 2">Me gusta</Radio>
                                <Radio value="vino: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="cosplay">Cosplay:&nbsp;</label>
                                <Radio value="cosplay: 2">Me gusta</Radio>
                                <Radio value="cosplay: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="disfraces">Disfraces:&nbsp;</label>
                                <Radio value="disfraces: 2">Me gusta</Radio>
                                <Radio value="disfraces: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="turismo">Turismo local:&nbsp;</label>
                                <Radio value="turismo: 2">Me gusta</Radio>
                                <Radio value="turismo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="rol">Juegos de rol local:&nbsp;</label>
                                <Radio value="rol: 2">Me gusta</Radio>
                                <Radio value="rol: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="vivo">Rol en vivo:&nbsp;</label>
                                <Radio value="vivo: 2">Me gusta</Radio>
                                <Radio value="vivo: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="historica">Recreación histórica:&nbsp;</label>
                                <Radio value="historica: 2">Me gusta</Radio>
                                <Radio value="historica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="fumadores">Club de fumadores:&nbsp;</label>
                                <Radio value="fumadores: 2">Me gusta</Radio>
                                <Radio value="fumadores: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesGrupales ? (<p>Elige mínimo 3</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesGrupales(false); setViewActividadesSociedad(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 25) {
                                    setViewActividadesGrupales(false)
                                    setViewActividadesColeccionismo(true)
                                } else {
                                    setViewAlertActividadesGrupales(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}

                    {viewActividadesColeccionismo ? (<div>
                        <label>Coleccionismo</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="antiguedades">Antigüedades:&nbsp;</label>
                                <Radio value="antiguedades: 2">Me gusta</Radio>
                                <Radio value="antiguedades: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="filatelia">Filatelia:&nbsp;</label>
                                <Radio value="filatelia: 2">Me gusta</Radio>
                                <Radio value="filatelia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="numismatica">Numismática:&nbsp;</label>
                                <Radio value="numismatica: 2">Me gusta</Radio>
                                <Radio value="numismatica: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        
                        <div>
                            <button type="button" onClick={() => { setViewActividadesColeccionismo(false); setViewActividadesGrupales(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                {
                                    setViewActividadesColeccionismo(false)
                                    setViewActividadesCiencias(true)
                                } 
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}

                    {viewActividadesCiencias ? (<div>
                        <label>Ciencias</label>

                        <div>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="astronomia">Astronomia:&nbsp;</label>
                                <Radio value="astronomia: 2">Me gusta</Radio>
                                <Radio value="astronomia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="historia">Historia:&nbsp;</label>
                                <Radio value="historia: 2">Me gusta</Radio>
                                <Radio value="historia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="matematicas">Matemáticas:&nbsp;</label>
                                <Radio value="matematicas: 2">Me gusta</Radio>
                                <Radio value="matematicas: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="fisica">Física:&nbsp;</label>
                                <Radio value="fisica: 2">Me gusta</Radio>
                                <Radio value="fisica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="quimica">Química:&nbsp;</label>
                                <Radio value="quimica: 2">Me gusta</Radio>
                                <Radio value="quimica: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="filologia">Filología:&nbsp;</label>
                                <Radio value="filologia: 2">Me gusta</Radio>
                                <Radio value="filologia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="biologia">Biología:&nbsp;</label>
                                <Radio value="biologia: 2">Me gusta</Radio>
                                <Radio value="biologia: 4">Me encanta</Radio>
                            </Radio.Group>
                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                <label forhtml="zoologia">Zoología:&nbsp;</label>
                                <Radio value="zoologia: 2">Me gusta</Radio>
                                <Radio value="zoologia: 4">Me encanta</Radio>
                            </Radio.Group>
                        </div>
                        {viewAlertActividadesCiencias ? (<p>Elige mínimo 2</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewActividadesCiencias(false); setViewActividadesColeccionismo(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (actividades.length >= 27) {
                                    setViewActividadesCiencias(false)
                                    setViewCarnet(true)
                                } else {
                                    setViewAlertActividadesCiencias(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div>) : ""}
                    {viewCarnet ? (<div>
                        <label>¿Tienes carnet de conducir?</label>
                        <br />
                        <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setCarnet(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                        <br />
                        <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setCarnet(false)}></input><label htmlFor="no">&nbsp;No</label>
                        {viewAlertCarnet ? (<p>Este campo es obligatorio</p>) : ""}
                        <div>
                            <button type="button" onClick={() => { setViewCarnet(false); setViewActividadesCiencias(true) }}>Anterior</button>
                            <button type="button" onClick={() => {
                                if (carnet !== "") {
                                    setViewCarnet(false)
                                    setViewZona(true)
                                } else {
                                    setViewAlertCarnet(true)
                                }
                            }}>Siguiente</button>

                        </div>
                    </div >) : ""}


                    {
                        viewZona ? (<div>
                            <label>Estarías interesado en un coliving situado...</label>
                            <br />
                            <input type="radio" name="zona" value="costa" id="costa" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="costa">&nbsp;Cerca de la costa</label>
                            <br />
                            <input type="radio" name="zona" value="interior" id="interior" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="interior">&nbsp;En el interior</label>
                            <br />
                            <input type="radio" name="zona" value="montaña" id="montaña" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="montaña">&nbsp;Cerca de montañas</label>
                            <br />
                            <input type="radio" name="zona" value="ciudad" id="ciudad" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="ciudad">&nbsp;En una ciudad</label>
                            {viewAlertZona ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewZona(false); setViewCarnet(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (ubicacion !== "") {
                                        setViewZona(false)
                                        setViewTipoVivienda(true)
                                    } else {
                                        setViewAlertZona(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }



                    {
                        viewTipoVivienda ? (<div>

                            <label>Estarías interesado en una vivienda del tipo...</label>
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
                            {viewAlertVivienda ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewTipoVivienda(false); setViewZona(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (tipoVivienda !== "") {
                                        setViewTipoVivienda(false)
                                        setViewRegion(true)
                                    } else {
                                        setViewAlertVivienda(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewRegion ? (<div>
                            <label>¿Dónde te gustaría vivir?</label>
                            <br />
                            <Checkbox.Group onChange={(e) => cambiosCheckboxRegion(e)}>
                                <Checkbox name="region" value="andalucia" id="andalucia">
                                    <label forhtml="andalucia">&nbsp;Andalucía</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="aragon" id="aragon">
                                    <label forhtml="aragon">&nbsp;Aragón</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="asturias" id="asturias">
                                    <label forhtml="asturias">&nbsp;Principado de Asturias</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="baleares" id="baleares">
                                    <label forhtml="baleares">&nbsp;Islas Baleares</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="canarias" id="canarias">
                                    <label forhtml="canarias">&nbsp;Islas Canarias</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="cantabria" id="cantabria">
                                    <label forhtml="cantabria">&nbsp;Cantabria</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="castillaleon" id="castillaleon">
                                    <label forhtml="castillaleon">&nbsp;Castilla y León</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="castillalamancha" id="castillalamancha">
                                    <label forhtml="castillalamancha">&nbsp;Castilla-La Mancha</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="cataluña" id="cataluña">
                                    <label forhtml="cataluña">&nbsp;Cataluña</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="valencia" id="valencia">
                                    <label forhtml="valencia">&nbsp;Comunidad Valenciana</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="extremadura" id="extremadura">
                                    <label forhtml="extremadura">&nbsp;Extremadura</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="galicia" id="galicia">
                                    <label forhtml="galicia">&nbsp;Galícia</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="madrid" id="madrid">
                                    <label forhtml="madrid">&nbsp;Comunidad de Madrid</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="murcia" id="murcia">
                                    <label forhtml="murcia">&nbsp;Región de Murcia</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="navarra" id="navarra">
                                    <label forhtml="navarra">&nbsp;Navarra</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="paisvasco" id="paisvasco">
                                    <label forhtml="paisvasco">&nbsp;País Vasco</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="rioja" id="rioja">
                                    <label forhtml="rioja">&nbsp;La Rioja</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="ceuta" id="ceuta">
                                    <label forhtml="ceuta">&nbsp;Ceuta</label>
                                </Checkbox>
                                &nbsp;&nbsp;
                                <Checkbox name="region" value="melilla" id="melilla">
                                    <label forhtml="melilla">&nbsp;Melilla</label>
                                </Checkbox>
                            </Checkbox.Group>

                            {viewAlertRegion ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewRegion(false); setViewTipoVivienda(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (region !== "") {
                                        setViewRegion(false)
                                        setViewInstalaciones(true)
                                    } else {
                                        setViewAlertRegion(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewInstalaciones ? (
                            <div>
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
                                {viewAlertInstalaciones ? (<p>Este campo es obligatorio</p>) : ""}
                                <div>
                                    <button type="button" onClick={() => { setViewInstalaciones(false); setViewRegion(true) }}>Anterior</button>
                                    <button type="button" onClick={() => {
                                        if (instalaciones !== "") {
                                            setViewInstalaciones(false)
                                            setViewLavabo(true)
                                        } else {
                                            setViewAlertInstalaciones(true)
                                        }
                                    }}>Siguiente</button>

                                </div>
                            </div>) : ""
                    }
                    {
                        viewLavabo ? (
                            <div>
                                <label>Baños:</label>
                                <br />
                                <input type="radio" name="lavabo" value="privado" id="privado" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="privado">&nbsp;Privado</label>
                                <br />
                                <input type="radio" name="lavabo" value="compartido" id="compartido" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="compartido">&nbsp;Compartido</label>
                                <br />
                                <br />
                                {viewAlertLavabo ? (<p>Este campo es obligatorio</p>) : ""}
                                <div>
                                    <button type="button" onClick={() => { setViewLavabo(false); setViewInstalaciones(true) }}>Anterior</button>
                                    <button type="button" onClick={() => {
                                        if (lavabo !== "") {
                                            setViewLavabo(false)
                                            setViewExteriores(true)
                                        } else {
                                            setViewAlertLavabo(true)
                                        }
                                    }}>Siguiente</button>

                                </div>
                            </div>) : ""
                    }
                    {
                        viewExteriores ? (<div>
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
                            {viewAlertExteriores ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewExteriores(false); setViewLavabo(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (exteriores !== "") {
                                        setViewExteriores(false)
                                        setViewRangoEdad(true)
                                    } else {
                                        setViewAlertExteriores(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewRangoEdad ? (<div>
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

                            {viewAlertRangoEdad ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewRangoEdad(false); setViewExteriores(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (rangoEdad !== "") {
                                        setViewRangoEdad(false)
                                        setViewDinero(true)
                                    } else {
                                        setViewAlertRangoEdad(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewDinero ? (<div>
                            <br />
                            <label>Dinero máximo que gastaría (mensual):</label>
                            <br />
                            <select name="dinero" id="dinero" onChange={(e) => setDinero(e.target.value)}>
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
                            {viewAlertDinero ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewDinero(false); setViewRangoEdad(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (dinero !== "") {
                                        setViewDinero(false)
                                        setViewMetros(true)
                                    } else {
                                        setViewAlertDinero(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }

                    {
                        viewMetros ? (<div>
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
                            {viewAlertMetros ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewMetros(false); setViewDinero(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (metros !== "") {
                                        setViewMetros(false)
                                        setViewGente(true)
                                    } else {
                                        setViewAlertMetros(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewGente ? (<div>
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

                            {viewAlertGente ? (<p>Este campo es obligatorio</p>) : ""}
                            <div>
                                <button type="button" onClick={() => { setViewGente(false); setViewMetros(true) }}>Anterior</button>
                                <button type="button" onClick={() => {
                                    if (gente !== "") {
                                        setViewGente(false)
                                        setViewSubmit(true)
                                    } else {
                                        setViewAlertGente(true)
                                    }
                                }}>Siguiente</button>

                            </div>
                        </div>) : ""
                    }
                    {
                        viewSubmit ? (<div>
                            <button type="submit" className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                        </div>) : ""
                    }
                </div >
            </form >
        </div >
    )
}

export default TestAfinidadUser