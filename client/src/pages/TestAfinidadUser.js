import React, { useState } from "react";
import axios from "axios";
import { Checkbox, Radio } from "antd";

function TestAfinidadUser() {

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

    const [viewOficio, setViewOficio] = useState(false);
    const [viewEdad, setViewEdad] = useState(false);
    const [viewGenero, setViewGenero] = useState(false);
    const [viewIdiomas, setViewIdiomas] = useState(false);
    const [viewOrientacion, setViewOrientacion] = useState(false);
    const [viewReligion, setViewReligion] = useState(false);
    const [viewPolitica, setViewPolitica] = useState(false);
    const [viewMascotas, setViewMascotas] = useState(false);
    const [viewFumador, setViewFumador] = useState(false);
    const [viewAficiones, setViewAficiones] = useState(false);
    const [viewCarnet, setViewCarnet] = useState(false);
    const [viewZona, setViewZona] = useState(false);
    const [viewtipoVivienda, setViewtipoVivienda] = useState(false);
    const [viewPlace, setViewPlace] = useState(false);
    const [viewInstalaciones, setViewInstalaciones] = useState(false);
    const [viewLavabo, setViewLavabo] = useState(false);
    const [viewExteriores, setViewExteriores] = useState(false);
    const [viewrangoEdad, setViewrangoEdad] = useState(false);
    const [viewDinero, setViewDinero] = useState(false);
    const [viewMetros, setViewMetros] = useState(false);
    const [viewGente, setViewGente] = useState(false);






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

                    {viewOficio ? (<div>
                        <Checkbox name="edad" value="edad" id="edad" onChange={() => {
                            if (viewEdad === true) {
                                setViewEdad(false)
                            } else if (viewEdad === false) {
                                setViewEdad(true)
                            }
                        }}>
                            <label>Indica tu edad:</label>
                            <br />
                            <input type="number" min="18" max="120" onChange={(e) => setEdad(e.target.value)}></input>
                        </Checkbox>
                    </div>) : ""}

                    <br />
                    {viewOficio ? (<div>
                        <Checkbox name="genero" value="genero" id="genero" onChange={() => {
                            if (viewGenero === true) {
                                setViewGenero(false)
                            } else if (viewGenero === false) {
                                setViewGenero(true)
                            }
                        }}>
                            <label>Indica tu género:</label>
                            <br />
                            <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                                <option></option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </select>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="oficio" value="oficio" id="oficio" onChange={() => {
                            if (viewOficio === true) {
                                setViewOficio(false)
                            } else if (viewOficio === false) {
                                setViewOficio(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}
                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="idiomas" value="idiomas" id="idiomas" onChange={() => {
                            if (viewIdiomas === true) {
                                setViewIdiomas(false)
                            } else if (viewIdiomas === false) {
                                setViewIdiomas(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="orientacion" value="orientacion" id="orientacion" onChange={() => {
                            if (viewOrientacion === true) {
                                setViewOrientacion(false)
                            } else if (viewOrientacion === false) {
                                setViewOrientacion(true)
                            }
                        }}>
                            <label>¿Vivirías con alguien con una orientacion sexual diferente?</label>
                            <br />
                            <input type="radio" name="orientacion" value="si" id="si" onChange={(e) => setOrientacionSexual(true)}></input><label htmlFor="si">&nbsp;Si</label>
                            <br />
                            <input type="radio" name="orientacion" value="no" id="no" onChange={(e) => setOrientacionSexual(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />


                    {viewOficio ? (<div>
                        <Checkbox name="religion" value="religion" id="religion" onChange={() => {
                            if (viewReligion === true) {
                                setViewReligion(false)
                            } else if (viewReligion === false) {
                                setViewReligion(true)
                            }
                        }}>
                            <label>¿Vivirías con alguien con una religión diferente?</label>
                            <br />
                            <input type="radio" name="religion" value="si" id="si" onChange={(e) => setReligion(true)}></input><label htmlFor="si">&nbsp;Si</label>
                            <br />
                            <input type="radio" name="religion" value="no" id="no" onChange={(e) => setReligion(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="politica" value="politica" id="politica" onChange={() => {
                            if (viewPolitica === true) {
                                setViewPolitica(false)
                            } else if (viewPolitica === false) {
                                setViewPolitica(true)
                            }
                        }}>
                            <label>¿Vivirías con alguien con una ideología política diferente?</label>
                            <br />
                            <input type="radio" name="politica" value="si" id="si" onChange={(e) => setPolitica(true)}></input><label htmlFor="si">&nbsp;Si</label>
                            <br />
                            <input type="radio" name="politica" value="no" id="no" onChange={(e) => setPolitica(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="mascotas" value="mascotas" id="mascotas" onChange={() => {
                            if (viewMascotas === true) {
                                setViewMascotas(false)
                            } else if (viewMascotas === false) {
                                setViewMascotas(true)
                            }
                        }}>
                            <label>¿Vivirías con alguien con mascotas?</label>
                            <br />
                            <input type="radio" name="mascotas" value="si" id="si" onChange={(e) => setMascotas(true)}></input><label htmlFor="si">&nbsp;Si</label>
                            <br />
                            <input type="radio" name="mascotas" value="no" id="no" onChange={(e) => setMascotas(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="fumador" value="fumador" id="fumador" onChange={() => {
                            if (viewFumador === true) {
                                setViewFumador(false)
                            } else if (viewFumador === false) {
                                setViewFumador(true)
                            }
                        }}>
                            <label>¿Vivirías con un fumador?</label>
                            <br />
                            <input type="radio" name="fumador" value="si" id="si" onChange={(e) => setFumador(true)}></input><label htmlFor="si">&nbsp;Si</label>
                            <br />
                            <input type="radio" name="fumador" value="no" id="no" onChange={(e) => setFumador(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="aficiones" value="aficiones" id="aficiones" onChange={() => {
                            if (viewAficiones === true) {
                                setViewAficiones(false)
                            } else if (viewAficiones === false) {
                                setViewAficiones(true)
                            }
                        }}>

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
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="activo">Activo:&nbsp;</label>
                                                <Radio value="activo: 1">1</Radio>
                                                <Radio value="activo: 2">2</Radio>
                                                <Radio value="activo: 3">3</Radio>
                                                <Radio value="activo: 4">4</Radio>
                                                <Radio value="activo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="deportista">Deportista:&nbsp;</label>
                                                <Radio value="deportista: 1">1</Radio>
                                                <Radio value="deportista: 2">2</Radio>
                                                <Radio value="deportista: 3">3</Radio>
                                                <Radio value="deportista: 4">4</Radio>
                                                <Radio value="deportista: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="calmado">Calmado:&nbsp;</label>
                                                <Radio value="calmado: 1">1</Radio>
                                                <Radio value="calmado: 2">2</Radio>
                                                <Radio value="calmado: 3">3</Radio>
                                                <Radio value="calmado: 4">4</Radio>
                                                <Radio value="calmado: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="atento">Atento:&nbsp;</label>
                                                <Radio value="atento: 1">1</Radio>
                                                <Radio value="atento: 2">2</Radio>
                                                <Radio value="atento: 3">3</Radio>
                                                <Radio value="atento: 4">4</Radio>
                                                <Radio value="atento: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="alegre">Alegre:&nbsp;</label>
                                                <Radio value="alegre: 1">1</Radio>
                                                <Radio value="alegre: 2">2</Radio>
                                                <Radio value="alegre: 3">3</Radio>
                                                <Radio value="alegre: 4">4</Radio>
                                                <Radio value="alegre: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="colaborador">Colaborador:&nbsp;</label>
                                                <Radio value="colaborador: 1">1</Radio>
                                                <Radio value="colaborador: 2">2</Radio>
                                                <Radio value="colaborador: 3">3</Radio>
                                                <Radio value="colaborador: 4">4</Radio>
                                                <Radio value="colaborador: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="creativo">Creativo:&nbsp;</label>
                                                <Radio value="creativo: 1">1</Radio>
                                                <Radio value="creativo: 2">2</Radio>
                                                <Radio value="creativo: 3">3</Radio>
                                                <Radio value="creativo: 4">4</Radio>
                                                <Radio value="creativo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="decidido">Decidido:&nbsp;</label>
                                                <Radio value="decidido: 1">1</Radio>
                                                <Radio value="decidido: 2">2</Radio>
                                                <Radio value="decidido: 3">3</Radio>
                                                <Radio value="decidido: 4">4</Radio>
                                                <Radio value="decidido: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="tratofacil">De trato fácil:&nbsp;</label>
                                                <Radio value="tratofacil: 1">1</Radio>
                                                <Radio value="tratofacil: 2">2</Radio>
                                                <Radio value="tratofacil: 3">3</Radio>
                                                <Radio value="tratofacil: 4">4</Radio>
                                                <Radio value="tratofacil: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="empatico">Empático:&nbsp;</label>
                                                <Radio value="empatico: 1">1</Radio>
                                                <Radio value="empatico: 2">2</Radio>
                                                <Radio value="empatico: 3">3</Radio>
                                                <Radio value="empatico: 4">4</Radio>
                                                <Radio value="empatico: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="entustiasta">Entustiasta:&nbsp;</label>
                                                <Radio value="entustiasta: 1">1</Radio>
                                                <Radio value="entustiasta: 2">2</Radio>
                                                <Radio value="entustiasta: 3">3</Radio>
                                                <Radio value="entustiasta: 4">4</Radio>
                                                <Radio value="entustiasta: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="flexible">Flexible:&nbsp;</label>
                                                <Radio value="flexible: 1">1</Radio>
                                                <Radio value="flexible: 2">2</Radio>
                                                <Radio value="flexible: 3">3</Radio>
                                                <Radio value="flexible: 4">4</Radio>
                                                <Radio value="flexible: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="amable">Amable:&nbsp;</label>
                                                <Radio value="amable: 1">1</Radio>
                                                <Radio value="amable: 2">2</Radio>
                                                <Radio value="amable: 3">3</Radio>
                                                <Radio value="amable: 4">4</Radio>
                                                <Radio value="amable: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="divertido">Divertido:&nbsp;</label>
                                                <Radio value="divertido: 1">1</Radio>
                                                <Radio value="divertido: 2">2</Radio>
                                                <Radio value="divertido: 3">3</Radio>
                                                <Radio value="divertido: 4">4</Radio>
                                                <Radio value="divertido: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="honesto">Honesto:&nbsp;</label>
                                                <Radio value="honesto: 1">1</Radio>
                                                <Radio value="honesto: 2">2</Radio>
                                                <Radio value="honesto: 3">3</Radio>
                                                <Radio value="honesto: 4">4</Radio>
                                                <Radio value="honesto: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="gracioso">Gracioso:&nbsp;</label>
                                                <Radio value="gracioso: 1">1</Radio>
                                                <Radio value="gracioso: 2">2</Radio>
                                                <Radio value="gracioso: 3">3</Radio>
                                                <Radio value="gracioso: 4">4</Radio>
                                                <Radio value="gracioso: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="optimista">Optimista:&nbsp;</label>
                                                <Radio value="optimista: 1">1</Radio>
                                                <Radio value="optimista: 2">2</Radio>
                                                <Radio value="optimista: 3">3</Radio>
                                                <Radio value="optimista: 4">4</Radio>
                                                <Radio value="optimista: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="ordenado">Ordenado:&nbsp;</label>
                                                <Radio value="ordenado: 1">1</Radio>
                                                <Radio value="ordenado: 2">2</Radio>
                                                <Radio value="ordenado: 3">3</Radio>
                                                <Radio value="ordenado: 4">4</Radio>
                                                <Radio value="ordenado: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="apasionado">Apasionado:&nbsp;</label>
                                                <Radio value="apasionado: 1">1</Radio>
                                                <Radio value="apasionado: 2">2</Radio>
                                                <Radio value="apasionado: 3">3</Radio>
                                                <Radio value="apasionado: 4">4</Radio>
                                                <Radio value="apasionado: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="practico">Práctico:&nbsp;</label>
                                                <Radio value="practico: 1">1</Radio>
                                                <Radio value="practico: 2">2</Radio>
                                                <Radio value="practico: 3">3</Radio>
                                                <Radio value="practico: 4">4</Radio>
                                                <Radio value="practico: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="proactivo">Proactivo:&nbsp;</label>
                                                <Radio value="proactivo: 1">1</Radio>
                                                <Radio value="proactivo: 2">2</Radio>
                                                <Radio value="proactivo: 3">3</Radio>
                                                <Radio value="proactivo: 4">4</Radio>
                                                <Radio value="proactivo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="sensato">Sensato:&nbsp;</label>
                                                <Radio value="sensato: 1">1</Radio>
                                                <Radio value="sensato: 2">2</Radio>
                                                <Radio value="sensato: 3">3</Radio>
                                                <Radio value="sensato: 4">4</Radio>
                                                <Radio value="sensato: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="relajado">Relajado:&nbsp;</label>
                                                <Radio value="relajado: 1">1</Radio>
                                                <Radio value="relajado: 2">2</Radio>
                                                <Radio value="relajado: 3">3</Radio>
                                                <Radio value="relajado: 4">4</Radio>
                                                <Radio value="relajado: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="sociable">Sociable:&nbsp;</label>
                                                <Radio value="sociable: 1">1</Radio>
                                                <Radio value="sociable: 2">2</Radio>
                                                <Radio value="sociable: 3">3</Radio>
                                                <Radio value="sociable: 4">4</Radio>
                                                <Radio value="sociable: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
                                                <label forhtml="generoso">Generoso:&nbsp;</label>
                                                <Radio value="generoso: 1">1</Radio>
                                                <Radio value="generoso: 2">2</Radio>
                                                <Radio value="generoso: 3">3</Radio>
                                                <Radio value="generoso: 4">4</Radio>
                                                <Radio value="generoso: 5">5</Radio>
                                            </Radio.Group>
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
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="alternativa">Alternativa:&nbsp;</label>
                                                    <Radio value="alternativa: 1">1</Radio>
                                                    <Radio value="alternativa: 2">2</Radio>
                                                    <Radio value="alternativa: 3">3</Radio>
                                                    <Radio value="alternativa: 4">4</Radio>
                                                    <Radio value="alternativa: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="blues">Blues:&nbsp;</label>
                                                    <Radio value="blues: 1">1</Radio>
                                                    <Radio value="blues: 2">2</Radio>
                                                    <Radio value="blues: 3">3</Radio>
                                                    <Radio value="blues: 4">4</Radio>
                                                    <Radio value="blues: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="clasica">Clásica:&nbsp;</label>
                                                    <Radio value="clasica: 1">1</Radio>
                                                    <Radio value="clasica: 2">2</Radio>
                                                    <Radio value="clasica: 3">3</Radio>
                                                    <Radio value="clasica: 4">4</Radio>
                                                    <Radio value="clasica: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="electronica">Electrónica:&nbsp;</label>
                                                    <Radio value="electronica: 1">1</Radio>
                                                    <Radio value="electronica: 2">2</Radio>
                                                    <Radio value="electronica: 3">3</Radio>
                                                    <Radio value="electronica: 4">4</Radio>
                                                    <Radio value="electronica: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="folk">Folk:&nbsp;</label>
                                                    <Radio value="folk: 1">1</Radio>
                                                    <Radio value="folk: 2">2</Radio>
                                                    <Radio value="folk: 3">3</Radio>
                                                    <Radio value="folk: 4">4</Radio>
                                                    <Radio value="folk: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="gospel">Gospel:&nbsp;</label>
                                                    <Radio value="gospel: 1">1</Radio>
                                                    <Radio value="gospel: 2">2</Radio>
                                                    <Radio value="gospel: 3">3</Radio>
                                                    <Radio value="gospel: 4">4</Radio>
                                                    <Radio value="gospel: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="instrumental">Instrumental:&nbsp;</label>
                                                    <Radio value="instrumental: 1">1</Radio>
                                                    <Radio value="instrumental: 2">2</Radio>
                                                    <Radio value="instrumental: 3">3</Radio>
                                                    <Radio value="instrumental: 4">4</Radio>
                                                    <Radio value="instrumental: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="jazz">Jazz:&nbsp;</label>
                                                    <Radio value="jazz: 1">1</Radio>
                                                    <Radio value="jazz: 2">2</Radio>
                                                    <Radio value="jazz: 3">3</Radio>
                                                    <Radio value="jazz: 4">4</Radio>
                                                    <Radio value="jazz: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="latina">Latina:&nbsp;</label>
                                                    <Radio value="latina: 1">1</Radio>
                                                    <Radio value="latina: 2">2</Radio>
                                                    <Radio value="latina: 3">3</Radio>
                                                    <Radio value="latina: 4">4</Radio>
                                                    <Radio value="latina: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="lounge">Lounge:&nbsp;</label>
                                                    <Radio value="lounge: 1">1</Radio>
                                                    <Radio value="lounge: 2">2</Radio>
                                                    <Radio value="lounge: 3">3</Radio>
                                                    <Radio value="lounge: 4">4</Radio>
                                                    <Radio value="lounge: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="metal">Metal:&nbsp;</label>
                                                    <Radio value="metal: 1">1</Radio>
                                                    <Radio value="metal: 2">2</Radio>
                                                    <Radio value="metal: 3">3</Radio>
                                                    <Radio value="metal: 4">4</Radio>
                                                    <Radio value="metal: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="opera">Ópera:&nbsp;</label>
                                                    <Radio value="opera: 1">1</Radio>
                                                    <Radio value="opera: 2">2</Radio>
                                                    <Radio value="opera: 3">3</Radio>
                                                    <Radio value="opera: 4">4</Radio>
                                                    <Radio value="opera: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="punk">Punk:&nbsp;</label>
                                                    <Radio value="punk: 1">1</Radio>
                                                    <Radio value="punk: 2">2</Radio>
                                                    <Radio value="punk: 3">3</Radio>
                                                    <Radio value="punk: 4">4</Radio>
                                                    <Radio value="punk: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="rb">R&B:&nbsp;</label>
                                                    <Radio value="rb: 1">1</Radio>
                                                    <Radio value="rb: 2">2</Radio>
                                                    <Radio value="rb: 3">3</Radio>
                                                    <Radio value="rb: 4">4</Radio>
                                                    <Radio value="rb: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="reggae">Reggae:&nbsp;</label>
                                                    <Radio value="reggae: 1">1</Radio>
                                                    <Radio value="reggae: 2">2</Radio>
                                                    <Radio value="reggae: 3">3</Radio>
                                                    <Radio value="reggae: 4">4</Radio>
                                                    <Radio value="reggae: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="rock">Rock:&nbsp;</label>
                                                    <Radio value="rock: 1">1</Radio>
                                                    <Radio value="rock: 2">2</Radio>
                                                    <Radio value="rock: 3">3</Radio>
                                                    <Radio value="rock: 4">4</Radio>
                                                    <Radio value="rock: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="soul">Soul:&nbsp;</label>
                                                    <Radio value="soul: 1">1</Radio>
                                                    <Radio value="soul: 2">2</Radio>
                                                    <Radio value="soul: 3">3</Radio>
                                                    <Radio value="soul: 4">4</Radio>
                                                    <Radio value="soul: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="copla">Copla:&nbsp;</label>
                                                    <Radio value="copla: 1">1</Radio>
                                                    <Radio value="copla: 2">2</Radio>
                                                    <Radio value="copla: 3">3</Radio>
                                                    <Radio value="copla: 4">4</Radio>
                                                    <Radio value="copla: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="pachangueo">Pachangueo:&nbsp;</label>
                                                    <Radio value="pachangueo: 1">1</Radio>
                                                    <Radio value="pachangueo: 2">2</Radio>
                                                    <Radio value="pachangueo: 3">3</Radio>
                                                    <Radio value="pachangueo: 4">4</Radio>
                                                    <Radio value="pachangueo: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="yeye">Yé-yé:&nbsp;</label>
                                                    <Radio value="yeye: 1">1</Radio>
                                                    <Radio value="yeye: 2">2</Radio>
                                                    <Radio value="yeye: 3">3</Radio>
                                                    <Radio value="yeye: 4">4</Radio>
                                                    <Radio value="yeye: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="bolero">Bolero:&nbsp;</label>
                                                    <Radio value="bolero: 1">1</Radio>
                                                    <Radio value="bolero: 2">2</Radio>
                                                    <Radio value="bolero: 3">3</Radio>
                                                    <Radio value="bolero: 4">4</Radio>
                                                    <Radio value="bolero: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="zarzuela">Zarzuela:&nbsp;</label>
                                                    <Radio value="zarzuela: 1">1</Radio>
                                                    <Radio value="zarzuela: 2">2</Radio>
                                                    <Radio value="zarzuela: 3">3</Radio>
                                                    <Radio value="zarzuela: 4">4</Radio>
                                                    <Radio value="zarzuela: 5">5</Radio>
                                                </Radio.Group>
                                                <Radio.Group onChange={(e) => setMusica((musica) => [...musica, e.target.value])}>
                                                    <label forhtml="flamenco">Flamenco:&nbsp;</label>
                                                    <Radio value="flamenco: 1">1</Radio>
                                                    <Radio value="flamenco: 2">2</Radio>
                                                    <Radio value="flamenco: 3">3</Radio>
                                                    <Radio value="flamenco: 4">4</Radio>
                                                    <Radio value="flamenco: 5">5</Radio>
                                                </Radio.Group>
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
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="badminton">Badminton:&nbsp;</label>
                                                <Radio value="badminton: 1">1</Radio>
                                                <Radio value="badminton: 2">2</Radio>
                                                <Radio value="badminton: 3">3</Radio>
                                                <Radio value="badminton: 4">4</Radio>
                                                <Radio value="badminton: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="beisbol">Béisbol:&nbsp;</label>
                                                <Radio value="beisbol: 1">1</Radio>
                                                <Radio value="beisbol: 2">2</Radio>
                                                <Radio value="beisbol: 3">3</Radio>
                                                <Radio value="beisbol: 4">4</Radio>
                                                <Radio value="beisbol: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="boxeo">Boxeo:&nbsp;</label>
                                                <Radio value="boxeo: 1">1</Radio>
                                                <Radio value="boxeo: 2">2</Radio>
                                                <Radio value="boxeo: 3">3</Radio>
                                                <Radio value="boxeo: 4">4</Radio>
                                                <Radio value="boxeo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="baloncesto">Baloncesto:&nbsp;</label>
                                                <Radio value="baloncesto: 1">1</Radio>
                                                <Radio value="baloncesto: 2">2</Radio>
                                                <Radio value="baloncesto: 3">3</Radio>
                                                <Radio value="baloncesto: 4">4</Radio>
                                                <Radio value="baloncesto: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="bolos">Jugar a los bolos:&nbsp;</label>
                                                <Radio value="bolos: 1">1</Radio>
                                                <Radio value="bolos: 2">2</Radio>
                                                <Radio value="bolos: 3">3</Radio>
                                                <Radio value="bolos: 4">4</Radio>
                                                <Radio value="bolos: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="piraguismo">Piragüismo:&nbsp;</label>
                                                <Radio value="piraguismo: 1">1</Radio>
                                                <Radio value="piraguismo: 2">2</Radio>
                                                <Radio value="piraguismo: 3">3</Radio>
                                                <Radio value="piraguismo: 4">4</Radio>
                                                <Radio value="piraguismo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="buceo">Buceo:&nbsp;</label>
                                                <Radio value="buceo: 1">1</Radio>
                                                <Radio value="buceo: 2">2</Radio>
                                                <Radio value="buceo: 3">3</Radio>
                                                <Radio value="buceo: 4">4</Radio>
                                                <Radio value="buceo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="futbol">Fútbol:&nbsp;</label>
                                                <Radio value="futbol: 1">1</Radio>
                                                <Radio value="futbol: 2">2</Radio>
                                                <Radio value="futbol: 3">3</Radio>
                                                <Radio value="futbol: 4">4</Radio>
                                                <Radio value="futbol: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="crossfit">Crossfit:&nbsp;</label>
                                                <Radio value="crossfit: 1">1</Radio>
                                                <Radio value="crossfit: 2">2</Radio>
                                                <Radio value="crossfit: 3">3</Radio>
                                                <Radio value="crossfit: 4">4</Radio>
                                                <Radio value="crossfit: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="ciclismo">Ciclismo:&nbsp;</label>
                                                <Radio value="ciclismo: 1">1</Radio>
                                                <Radio value="ciclismo: 2">2</Radio>
                                                <Radio value="ciclismo: 3">3</Radio>
                                                <Radio value="ciclismo: 4">4</Radio>
                                                <Radio value="ciclismo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="golf">Golf:&nbsp;</label>
                                                <Radio value="golf: 1">1</Radio>
                                                <Radio value="golf: 2">2</Radio>
                                                <Radio value="golf: 3">3</Radio>
                                                <Radio value="golf: 4">4</Radio>
                                                <Radio value="golf: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="gimnasio">Gimnasio (máquinas/clases):&nbsp;</label>
                                                <Radio value="gimnasio: 1">1</Radio>
                                                <Radio value="gimnasio: 2">2</Radio>
                                                <Radio value="gimnasio: 3">3</Radio>
                                                <Radio value="gimnasio: 4">4</Radio>
                                                <Radio value="gimnasio: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="excursionismo">Excursionismo:&nbsp;</label>
                                                <Radio value="excursionismo: 1">1</Radio>
                                                <Radio value="excursionismo: 2">2</Radio>
                                                <Radio value="excursionismo: 3">3</Radio>
                                                <Radio value="excursionismo: 4">4</Radio>
                                                <Radio value="excursionismo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="hipica">Hípica:&nbsp;</label>
                                                <Radio value="hipica: 1">1</Radio>
                                                <Radio value="hipica: 2">2</Radio>
                                                <Radio value="hipica: 3">3</Radio>
                                                <Radio value="hipica: 4">4</Radio>
                                                <Radio value="hipica: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="padel">Pádel:&nbsp;</label>
                                                <Radio value="padel: 1">1</Radio>
                                                <Radio value="padel: 2">2</Radio>
                                                <Radio value="padel: 3">3</Radio>
                                                <Radio value="padel: 4">4</Radio>
                                                <Radio value="padel: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="remo">Remo:&nbsp;</label>
                                                <Radio value="remo: 1">1</Radio>
                                                <Radio value="remo: 2">2</Radio>
                                                <Radio value="remo: 3">3</Radio>
                                                <Radio value="remo: 4">4</Radio>
                                                <Radio value="remo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="correr">Correr:&nbsp;</label>
                                                <Radio value="correr: 1">1</Radio>
                                                <Radio value="correr: 2">2</Radio>
                                                <Radio value="correr: 3">3</Radio>
                                                <Radio value="correr: 4">4</Radio>
                                                <Radio value="correr: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="esqui">Esquí:&nbsp;</label>
                                                <Radio value="esqui: 1">1</Radio>
                                                <Radio value="esqui: 2">2</Radio>
                                                <Radio value="esqui: 3">3</Radio>
                                                <Radio value="esqui: 4">4</Radio>
                                                <Radio value="esqui: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="fronton">Frontón:&nbsp;</label>
                                                <Radio value="fronton: 1">1</Radio>
                                                <Radio value="fronton: 2">2</Radio>
                                                <Radio value="fronton: 3">3</Radio>
                                                <Radio value="fronton: 4">4</Radio>
                                                <Radio value="fronton: 5">5</Radio>
                                            </Radio.Group>

                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="natacion">Natación:&nbsp;</label>
                                                <Radio value="natacion: 1">1</Radio>
                                                <Radio value="natacion: 2">2</Radio>
                                                <Radio value="natacion: 3">3</Radio>
                                                <Radio value="natacion: 4">4</Radio>
                                                <Radio value="natacion: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="tenismesa">Tenis de mesa:&nbsp;</label>
                                                <Radio value="tenismesa: 1">1</Radio>
                                                <Radio value="tenismesa: 2">2</Radio>
                                                <Radio value="tenismesa: 3">3</Radio>
                                                <Radio value="tenismesa: 4">4</Radio>
                                                <Radio value="tenismesa: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="tenis">Tenis:&nbsp;</label>
                                                <Radio value="tenis: 1">1</Radio>
                                                <Radio value="tenis: 2">2</Radio>
                                                <Radio value="tenis: 3">3</Radio>
                                                <Radio value="tenis: 4">4</Radio>
                                                <Radio value="tenis: 5">5</Radio>
                                            </Radio.Group>

                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="ajedrez">Ajedrez:&nbsp;</label>
                                                <Radio value="ajedrez: 1">1</Radio>
                                                <Radio value="ajedrez: 2">2</Radio>
                                                <Radio value="ajedrez: 3">3</Radio>
                                                <Radio value="ajedrez: 4">4</Radio>
                                                <Radio value="ajedrez: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="motociclismo">Motociclismo:&nbsp;</label>
                                                <Radio value="motociclismo: 1">1</Radio>
                                                <Radio value="motociclismo: 2">2</Radio>
                                                <Radio value="motociclismo: 3">3</Radio>
                                                <Radio value="motociclismo: 4">4</Radio>
                                                <Radio value="motociclismo: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="petanca">Petanca:&nbsp;</label>
                                                <Radio value="petanca: 1">1</Radio>
                                                <Radio value="petanca: 2">2</Radio>
                                                <Radio value="petanca: 3">3</Radio>
                                                <Radio value="petanca: 4">4</Radio>
                                                <Radio value="petanca: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="caza">Caza:&nbsp;</label>
                                                <Radio value="caza: 1">1</Radio>
                                                <Radio value="caza: 2">2</Radio>
                                                <Radio value="caza: 3">3</Radio>
                                                <Radio value="caza: 4">4</Radio>
                                                <Radio value="caza: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="yoga">Yoga:&nbsp;</label>
                                                <Radio value="yoga: 1">1</Radio>
                                                <Radio value="yoga: 2">2</Radio>
                                                <Radio value="yoga: 3">3</Radio>
                                                <Radio value="yoga: 4">4</Radio>
                                                <Radio value="yoga: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setDeportes((deportes) => [...deportes, e.target.value])}>
                                                <label forhtml="pesca">Pesca:&nbsp;</label>
                                                <Radio value="pesca: 1">1</Radio>
                                                <Radio value="pesca: 2">2</Radio>
                                                <Radio value="pesca: 3">3</Radio>
                                                <Radio value="pesca: 4">4</Radio>
                                                <Radio value="pesca: 5">5</Radio>
                                            </Radio.Group>




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
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="accion">Acción:&nbsp;</label>
                                                <Radio value="accion: 1">1</Radio>
                                                <Radio value="accion: 2">2</Radio>
                                                <Radio value="accion: 3">3</Radio>
                                                <Radio value="accion: 4">4</Radio>
                                                <Radio value="accion: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="aventura">Aventura:&nbsp;</label>
                                                <Radio value="aventura: 1">1</Radio>
                                                <Radio value="aventura: 2">2</Radio>
                                                <Radio value="aventura: 3">3</Radio>
                                                <Radio value="aventura: 4">4</Radio>
                                                <Radio value="aventura: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="comedia">Comedia:&nbsp;</label>
                                                <Radio value="comedia: 1">1</Radio>
                                                <Radio value="comedia: 2">2</Radio>
                                                <Radio value="comedia: 3">3</Radio>
                                                <Radio value="comedia: 4">4</Radio>
                                                <Radio value="comedia: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="documental">Documental:&nbsp;</label>
                                                <Radio value="documental: 1">1</Radio>
                                                <Radio value="documental: 2">2</Radio>
                                                <Radio value="documental: 3">3</Radio>
                                                <Radio value="documental: 4">4</Radio>
                                                <Radio value="documental: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="drama">Drama:&nbsp;</label>
                                                <Radio value="drama: 1">1</Radio>
                                                <Radio value="drama: 2">2</Radio>
                                                <Radio value="drama: 3">3</Radio>
                                                <Radio value="drama: 4">4</Radio>
                                                <Radio value="drama: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="crimen">Crimen:&nbsp;</label>
                                                <Radio value="crimen: 1">1</Radio>
                                                <Radio value="crimen: 2">2</Radio>
                                                <Radio value="crimen: 3">3</Radio>
                                                <Radio value="crimen: 4">4</Radio>
                                                <Radio value="crimen: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="negro">Cine negro:&nbsp;</label>
                                                <Radio value="negro: 1">1</Radio>
                                                <Radio value="negro: 2">2</Radio>
                                                <Radio value="negro: 3">3</Radio>
                                                <Radio value="negro: 4">4</Radio>
                                                <Radio value="negro: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="fantasia">Fantasía:&nbsp;</label>
                                                <Radio value="fantasia: 1">1</Radio>
                                                <Radio value="fantasia: 2">2</Radio>
                                                <Radio value="fantasia: 3">3</Radio>
                                                <Radio value="fantasia: 4">4</Radio>
                                                <Radio value="fantasia: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="historia">Historia:&nbsp;</label>
                                                <Radio value="historia: 1">1</Radio>
                                                <Radio value="historia: 2">2</Radio>
                                                <Radio value="historia: 3">3</Radio>
                                                <Radio value="historia: 4">4</Radio>
                                                <Radio value="historia: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="terror">Terror:&nbsp;</label>
                                                <Radio value="terror: 1">1</Radio>
                                                <Radio value="terror: 2">2</Radio>
                                                <Radio value="terror: 3">3</Radio>
                                                <Radio value="terror: 4">4</Radio>
                                                <Radio value="terror: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="misterio">Misterio:&nbsp;</label>
                                                <Radio value="misterio: 1">1</Radio>
                                                <Radio value="misterio: 2">2</Radio>
                                                <Radio value="misterio: 3">3</Radio>
                                                <Radio value="misterio: 4">4</Radio>
                                                <Radio value="misterio: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="politica">Política:&nbsp;</label>
                                                <Radio value="politica: 1">1</Radio>
                                                <Radio value="politica: 2">2</Radio>
                                                <Radio value="politica: 3">3</Radio>
                                                <Radio value="politica: 4">4</Radio>
                                                <Radio value="politica: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="romantica">Romántica:&nbsp;</label>
                                                <Radio value="romantica: 1">1</Radio>
                                                <Radio value="romantica: 2">2</Radio>
                                                <Radio value="romantica: 3">3</Radio>
                                                <Radio value="romantica: 4">4</Radio>
                                                <Radio value="romantica: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="cienciaficcion">Ciencia ficción:&nbsp;</label>
                                                <Radio value="cienciaficcion: 1">1</Radio>
                                                <Radio value="cienciaficcion: 2">2</Radio>
                                                <Radio value="cienciaficcion: 3">3</Radio>
                                                <Radio value="cienciaficcion: 4">4</Radio>
                                                <Radio value="cienciaficcion: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="suspense">Suspense:&nbsp;</label>
                                                <Radio value="suspense: 1">1</Radio>
                                                <Radio value="suspense: 2">2</Radio>
                                                <Radio value="suspense: 3">3</Radio>
                                                <Radio value="suspense: 4">4</Radio>
                                                <Radio value="suspense: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="musical">Musical:&nbsp;</label>
                                                <Radio value="musical: 1">1</Radio>
                                                <Radio value="musical: 2">2</Radio>
                                                <Radio value="musical: 3">3</Radio>
                                                <Radio value="musical: 4">4</Radio>
                                                <Radio value="musical: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="belico">Bélico:&nbsp;</label>
                                                <Radio value="belico: 1">1</Radio>
                                                <Radio value="belico: 2">2</Radio>
                                                <Radio value="belico: 3">3</Radio>
                                                <Radio value="belico: 4">4</Radio>
                                                <Radio value="belico: 5">5</Radio>
                                            </Radio.Group>
                                            <Radio.Group onChange={(e) => setPeliculas((peliculas) => [...peliculas, e.target.value])}>
                                                <label forhtml="western">Western:&nbsp;</label>
                                                <Radio value="western: 1">1</Radio>
                                                <Radio value="western: 2">2</Radio>
                                                <Radio value="western: 3">3</Radio>
                                                <Radio value="western: 4">4</Radio>
                                                <Radio value="western: 5">5</Radio>
                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="playa">Actividades en la playa:&nbsp;</label>
                                                                <Radio value="playa: 1">1</Radio>
                                                                <Radio value="playa: 2">2</Radio>
                                                                <Radio value="playa: 3">3</Radio>
                                                                <Radio value="playa: 4">4</Radio>
                                                                <Radio value="playa: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="aves">Observación de aves:&nbsp;</label>
                                                                <Radio value="aves: 1">1</Radio>
                                                                <Radio value="aves: 2">2</Radio>
                                                                <Radio value="aves: 3">3</Radio>
                                                                <Radio value="aves: 4">4</Radio>
                                                                <Radio value="aves: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="jardineria">Jardinería:&nbsp;</label>
                                                                <Radio value="jardineria: 1">1</Radio>
                                                                <Radio value="jardineria: 2">2</Radio>
                                                                <Radio value="jardineria: 3">3</Radio>
                                                                <Radio value="jardineria: 4">4</Radio>
                                                                <Radio value="jardineria: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="montanismo">Montañismo:&nbsp;</label>
                                                                <Radio value="montanismo: 1">1</Radio>
                                                                <Radio value="montanismo: 2">2</Radio>
                                                                <Radio value="montanismo: 3">3</Radio>
                                                                <Radio value="montanismo: 4">4</Radio>
                                                                <Radio value="montanismo: 5">5</Radio>
                                                            </Radio.Group>

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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="manualidades">Manualidades:&nbsp;</label>
                                                                <Radio value="manualidades: 1">1</Radio>
                                                                <Radio value="manualidades: 2">2</Radio>
                                                                <Radio value="manualidades: 3">3</Radio>
                                                                <Radio value="manualidades: 4">4</Radio>
                                                                <Radio value="manualidades: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="artesanias">Artesanías:&nbsp;</label>
                                                                <Radio value="artesanias: 1">1</Radio>
                                                                <Radio value="artesanias: 2">2</Radio>
                                                                <Radio value="artesanias: 3">3</Radio>
                                                                <Radio value="artesanias: 4">4</Radio>
                                                                <Radio value="artesanias: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="tejido">Tejido:&nbsp;</label>
                                                                <Radio value="tejido: 1">1</Radio>
                                                                <Radio value="tejido: 2">2</Radio>
                                                                <Radio value="tejido: 3">3</Radio>
                                                                <Radio value="tejido: 4">4</Radio>
                                                                <Radio value="tejido: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="croche">Croché:&nbsp;</label>
                                                                <Radio value="croche: 1">1</Radio>
                                                                <Radio value="croche: 2">2</Radio>
                                                                <Radio value="croche: 3">3</Radio>
                                                                <Radio value="croche: 4">4</Radio>
                                                                <Radio value="croche: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="ganchillo">Ganchillo:&nbsp;</label>
                                                                <Radio value="ganchillo: 1">1</Radio>
                                                                <Radio value="ganchillo: 2">2</Radio>
                                                                <Radio value="ganchillo: 3">3</Radio>
                                                                <Radio value="ganchillo: 4">4</Radio>
                                                                <Radio value="ganchillo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="macrame">Macramé:&nbsp;</label>
                                                                <Radio value="macrame: 1">1</Radio>
                                                                <Radio value="macrame: 2">2</Radio>
                                                                <Radio value="macrame: 3">3</Radio>
                                                                <Radio value="macrame: 4">4</Radio>
                                                                <Radio value="macrame: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="bordado">Bordado:&nbsp;</label>
                                                                <Radio value="bordado: 1">1</Radio>
                                                                <Radio value="bordado: 2">2</Radio>
                                                                <Radio value="bordado: 3">3</Radio>
                                                                <Radio value="bordado: 4">4</Radio>
                                                                <Radio value="bordado: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="puntocruz">Punto de cruz:&nbsp;</label>
                                                                <Radio value="puntocruz: 1">1</Radio>
                                                                <Radio value="puntocruz: 2">2</Radio>
                                                                <Radio value="puntocruz: 3">3</Radio>
                                                                <Radio value="puntocruz: 4">4</Radio>
                                                                <Radio value="puntocruz: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="bolillo">Bolillo:&nbsp;</label>
                                                                <Radio value="bolillo: 1">1</Radio>
                                                                <Radio value="bolillo: 2">2</Radio>
                                                                <Radio value="bolillo: 3">3</Radio>
                                                                <Radio value="bolillo: 4">4</Radio>
                                                                <Radio value="bolillo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="ceramica">Ceramica:&nbsp;</label>
                                                                <Radio value="ceramica: 1">1</Radio>
                                                                <Radio value="ceramica: 2">2</Radio>
                                                                <Radio value="ceramica: 3">3</Radio>
                                                                <Radio value="ceramica: 4">4</Radio>
                                                                <Radio value="ceramica: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="modelismo">Modelismo:&nbsp;</label>
                                                                <Radio value="modelismo: 1">1</Radio>
                                                                <Radio value="modelismo: 2">2</Radio>
                                                                <Radio value="modelismo: 3">3</Radio>
                                                                <Radio value="modelismo: 4">4</Radio>
                                                                <Radio value="modelismo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="carpinteria">Carpinteria:&nbsp;</label>
                                                                <Radio value="carpinteria: 1">1</Radio>
                                                                <Radio value="carpinteria: 2">2</Radio>
                                                                <Radio value="carpinteria: 3">3</Radio>
                                                                <Radio value="carpinteria: 4">4</Radio>
                                                                <Radio value="carpinteria: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="costura">Costura:&nbsp;</label>
                                                                <Radio value="costura: 1">1</Radio>
                                                                <Radio value="costura: 2">2</Radio>
                                                                <Radio value="costura: 3">3</Radio>
                                                                <Radio value="costura: 4">4</Radio>
                                                                <Radio value="costura: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="bricolage">Bricolage:&nbsp;</label>
                                                                <Radio value="bricolage: 1">1</Radio>
                                                                <Radio value="bricolage: 2">2</Radio>
                                                                <Radio value="bricolage: 3">3</Radio>
                                                                <Radio value="bricolage: 4">4</Radio>
                                                                <Radio value="bricolage: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="robotica">Robótica:&nbsp;</label>
                                                                <Radio value="robotica: 1">1</Radio>
                                                                <Radio value="robotica: 2">2</Radio>
                                                                <Radio value="robotica: 3">3</Radio>
                                                                <Radio value="robotica: 4">4</Radio>
                                                                <Radio value="robotica: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="cerveza">Cerveza artesanal:&nbsp;</label>
                                                                <Radio value="cerveza: 1">1</Radio>
                                                                <Radio value="cerveza: 2">2</Radio>
                                                                <Radio value="cerveza: 3">3</Radio>
                                                                <Radio value="cerveza: 4">4</Radio>
                                                                <Radio value="cerveza: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="cocina">Cocina:&nbsp;</label>
                                                                <Radio value="cocina: 1">1</Radio>
                                                                <Radio value="cocina: 2">2</Radio>
                                                                <Radio value="cocina: 3">3</Radio>
                                                                <Radio value="cocina: 4">4</Radio>
                                                                <Radio value="cocina: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="reposteria">Repostería:&nbsp;</label>
                                                                <Radio value="reposteria: 1">1</Radio>
                                                                <Radio value="reposteria: 2">2</Radio>
                                                                <Radio value="reposteria: 3">3</Radio>
                                                                <Radio value="reposteria: 4">4</Radio>
                                                                <Radio value="reposteria: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="gastronomia">Gastronomia molecular:&nbsp;</label>
                                                                <Radio value="gastronomia: 1">1</Radio>
                                                                <Radio value="gastronomia: 2">2</Radio>
                                                                <Radio value="gastronomia: 3">3</Radio>
                                                                <Radio value="gastronomia: 4">4</Radio>
                                                                <Radio value="gastronomia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="india">Cocina india:&nbsp;</label>
                                                                <Radio value="india: 1">1</Radio>
                                                                <Radio value="india: 2">2</Radio>
                                                                <Radio value="india: 3">3</Radio>
                                                                <Radio value="india: 4">4</Radio>
                                                                <Radio value="india: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="oriental">Cocina oriental:&nbsp;</label>
                                                                <Radio value="oriental: 1">1</Radio>
                                                                <Radio value="oriental: 2">2</Radio>
                                                                <Radio value="oriental: 3">3</Radio>
                                                                <Radio value="oriental: 4">4</Radio>
                                                                <Radio value="oriental: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="mexicana">Cocina mexicana:&nbsp;</label>
                                                                <Radio value="mexicana: 1">1</Radio>
                                                                <Radio value="mexicana: 2">2</Radio>
                                                                <Radio value="mexicana: 3">3</Radio>
                                                                <Radio value="mexicana: 4">4</Radio>
                                                                <Radio value="mexicana: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="mediterranea">Cocina mediterránea:&nbsp;</label>
                                                                <Radio value="mediterranea: 1">1</Radio>
                                                                <Radio value="mediterranea: 2">2</Radio>
                                                                <Radio value="mediterranea: 3">3</Radio>
                                                                <Radio value="mediterranea: 4">4</Radio>
                                                                <Radio value="mediterranea: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="museos">Museos:&nbsp;</label>
                                                                <Radio value="museos: 1">1</Radio>
                                                                <Radio value="museos: 2">2</Radio>
                                                                <Radio value="museos: 3">3</Radio>
                                                                <Radio value="museos: 4">4</Radio>
                                                                <Radio value="museos: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="escritura">Escritura:&nbsp;</label>
                                                                <Radio value="escritura: 1">1</Radio>
                                                                <Radio value="escritura: 2">2</Radio>
                                                                <Radio value="escritura: 3">3</Radio>
                                                                <Radio value="escritura: 4">4</Radio>
                                                                <Radio value="escritura: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="beatboxing">Beatboxing:&nbsp;</label>
                                                                <Radio value="beatboxing: 1">1</Radio>
                                                                <Radio value="beatboxing: 2">2</Radio>
                                                                <Radio value="beatboxing: 3">3</Radio>
                                                                <Radio value="beatboxing: 4">4</Radio>
                                                                <Radio value="beatboxing: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="componermusica">Componer musica:&nbsp;</label>
                                                                <Radio value="componermusica: 1">1</Radio>
                                                                <Radio value="componermusica: 2">2</Radio>
                                                                <Radio value="componermusica: 3">3</Radio>
                                                                <Radio value="componermusica: 4">4</Radio>
                                                                <Radio value="componermusica: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="baile">Baile:&nbsp;</label>
                                                                <Radio value="baile: 1">1</Radio>
                                                                <Radio value="baile: 2">2</Radio>
                                                                <Radio value="baile: 3">3</Radio>
                                                                <Radio value="baile: 4">4</Radio>
                                                                <Radio value="baile: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="fotografia">Fotografía:&nbsp;</label>
                                                                <Radio value="fotografia: 1">1</Radio>
                                                                <Radio value="fotografia: 2">2</Radio>
                                                                <Radio value="fotografia: 3">3</Radio>
                                                                <Radio value="fotografia: 4">4</Radio>
                                                                <Radio value="fotografia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="dibujo">Dibujo:&nbsp;</label>
                                                                <Radio value="dibujo: 1">1</Radio>
                                                                <Radio value="dibujo: 2">2</Radio>
                                                                <Radio value="dibujo: 3">3</Radio>
                                                                <Radio value="dibujo: 4">4</Radio>
                                                                <Radio value="dibujo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="instrumentos">Instrumentos musicales:&nbsp;</label>
                                                                <Radio value="instrumentos: 1">1</Radio>
                                                                <Radio value="instrumentos: 2">2</Radio>
                                                                <Radio value="instrumentos: 3">3</Radio>
                                                                <Radio value="instrumentos: 4">4</Radio>
                                                                <Radio value="instrumentos: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="canto">Canto:&nbsp;</label>
                                                                <Radio value="canto: 1">1</Radio>
                                                                <Radio value="canto: 2">2</Radio>
                                                                <Radio value="canto: 3">3</Radio>
                                                                <Radio value="canto: 4">4</Radio>
                                                                <Radio value="canto: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="conciertos">Conciertos:&nbsp;</label>
                                                                <Radio value="conciertos: 1">1</Radio>
                                                                <Radio value="conciertos: 2">2</Radio>
                                                                <Radio value="conciertos: 3">3</Radio>
                                                                <Radio value="conciertos: 4">4</Radio>
                                                                <Radio value="conciertos: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="teatro">Teatro:&nbsp;</label>
                                                                <Radio value="teatro: 1">1</Radio>
                                                                <Radio value="teatro: 2">2</Radio>
                                                                <Radio value="teatro: 3">3</Radio>
                                                                <Radio value="teatro: 4">4</Radio>
                                                                <Radio value="teatro: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="opera">Ópera:&nbsp;</label>
                                                                <Radio value="opera: 1">1</Radio>
                                                                <Radio value="opera: 2">2</Radio>
                                                                <Radio value="opera: 3">3</Radio>
                                                                <Radio value="opera: 4">4</Radio>
                                                                <Radio value="opera: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="pintura">Pintura:&nbsp;</label>
                                                                <Radio value="pintura: 1">1</Radio>
                                                                <Radio value="pintura: 2">2</Radio>
                                                                <Radio value="pintura: 3">3</Radio>
                                                                <Radio value="pintura: 4">4</Radio>
                                                                <Radio value="pintura: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="literatura">Literatura:&nbsp;</label>
                                                                <Radio value="literatura: 1">1</Radio>
                                                                <Radio value="literatura: 2">2</Radio>
                                                                <Radio value="literatura: 3">3</Radio>
                                                                <Radio value="literatura: 4">4</Radio>
                                                                <Radio value="literatura: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="poesia">Poesía:&nbsp;</label>
                                                                <Radio value="poesia: 1">1</Radio>
                                                                <Radio value="poesia: 2">2</Radio>
                                                                <Radio value="poesia: 3">3</Radio>
                                                                <Radio value="poesia: 4">4</Radio>
                                                                <Radio value="poesia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="comics">Cómics:&nbsp;</label>
                                                                <Radio value="comics: 1">1</Radio>
                                                                <Radio value="comics: 2">2</Radio>
                                                                <Radio value="comics: 3">3</Radio>
                                                                <Radio value="comics: 4">4</Radio>
                                                                <Radio value="comics: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="blogging">Blogging:&nbsp;</label>
                                                                <Radio value="blogging: 1">1</Radio>
                                                                <Radio value="blogging: 2">2</Radio>
                                                                <Radio value="blogging: 3">3</Radio>
                                                                <Radio value="blogging: 4">4</Radio>
                                                                <Radio value="blogging: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="cine">Cine:&nbsp;</label>
                                                                <Radio value="cine: 1">1</Radio>
                                                                <Radio value="cine: 2">2</Radio>
                                                                <Radio value="cine: 3">3</Radio>
                                                                <Radio value="cine: 4">4</Radio>
                                                                <Radio value="cine: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="mesa">Juegos de mesa:&nbsp;</label>
                                                                <Radio value="mesa: 1">1</Radio>
                                                                <Radio value="mesa: 2">2</Radio>
                                                                <Radio value="mesa: 3">3</Radio>
                                                                <Radio value="mesa: 4">4</Radio>
                                                                <Radio value="mesa: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="dardos">Dardos:&nbsp;</label>
                                                                <Radio value="dardos: 1">1</Radio>
                                                                <Radio value="dardos: 2">2</Radio>
                                                                <Radio value="dardos: 3">3</Radio>
                                                                <Radio value="dardos: 4">4</Radio>
                                                                <Radio value="dardos: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="crucigramas">Crucigramas:&nbsp;</label>
                                                                <Radio value="crucigramas: 1">1</Radio>
                                                                <Radio value="crucigramas: 2">2</Radio>
                                                                <Radio value="crucigramas: 3">3</Radio>
                                                                <Radio value="crucigramas: 4">4</Radio>
                                                                <Radio value="crucigramas: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="cartas">Juegos de cartas:&nbsp;</label>
                                                                <Radio value="cartas: 1">1</Radio>
                                                                <Radio value="cartas: 2">2</Radio>
                                                                <Radio value="cartas: 3">3</Radio>
                                                                <Radio value="cartas: 4">4</Radio>
                                                                <Radio value="cartas: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="rompecabezas">Rompecabezas:&nbsp;</label>
                                                                <Radio value="rompecabezas: 1">1</Radio>
                                                                <Radio value="rompecabezas: 2">2</Radio>
                                                                <Radio value="rompecabezas: 3">3</Radio>
                                                                <Radio value="rompecabezas: 4">4</Radio>
                                                                <Radio value="rompecabezas: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="poker">Póker:&nbsp;</label>
                                                                <Radio value="poker: 1">1</Radio>
                                                                <Radio value="poker: 2">2</Radio>
                                                                <Radio value="poker: 3">3</Radio>
                                                                <Radio value="poker: 4">4</Radio>
                                                                <Radio value="poker: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="videojuegos">Videojuegos:&nbsp;</label>
                                                                <Radio value="videojuegos: 1">1</Radio>
                                                                <Radio value="videojuegos: 2">2</Radio>
                                                                <Radio value="videojuegos: 3">3</Radio>
                                                                <Radio value="videojuegos: 4">4</Radio>
                                                                <Radio value="videojuegos: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="bingo">Bingo:&nbsp;</label>
                                                                <Radio value="bingo: 1">1</Radio>
                                                                <Radio value="bingo: 2">2</Radio>
                                                                <Radio value="bingo: 3">3</Radio>
                                                                <Radio value="bingo: 4">4</Radio>
                                                                <Radio value="bingo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="casino">Casino:&nbsp;</label>
                                                                <Radio value="casino: 1">1</Radio>
                                                                <Radio value="casino: 2">2</Radio>
                                                                <Radio value="casino: 3">3</Radio>
                                                                <Radio value="casino: 4">4</Radio>
                                                                <Radio value="casino: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="magia">Magia:&nbsp;</label>
                                                                <Radio value="magia: 1">1</Radio>
                                                                <Radio value="magia: 2">2</Radio>
                                                                <Radio value="magia: 3">3</Radio>
                                                                <Radio value="magia: 4">4</Radio>
                                                                <Radio value="magia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="telenovelas">Telenovelas:&nbsp;</label>
                                                                <Radio value="telenovelas: 1">1</Radio>
                                                                <Radio value="telenovelas: 2">2</Radio>
                                                                <Radio value="telenovelas: 3">3</Radio>
                                                                <Radio value="telenovelas: 4">4</Radio>
                                                                <Radio value="telenovelas: 5">5</Radio>
                                                            </Radio.Group>

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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="reciclaje">Reciclaje:&nbsp;</label>
                                                                <Radio value="reciclaje: 1">1</Radio>
                                                                <Radio value="reciclaje: 2">2</Radio>
                                                                <Radio value="reciclaje: 3">3</Radio>
                                                                <Radio value="reciclaje: 4">4</Radio>
                                                                <Radio value="reciclaje: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="iglesia">Actividades de iglesia:&nbsp;</label>
                                                                <Radio value="iglesia: 1">1</Radio>
                                                                <Radio value="iglesia: 2">2</Radio>
                                                                <Radio value="iglesia: 3">3</Radio>
                                                                <Radio value="iglesia: 4">4</Radio>
                                                                <Radio value="iglesia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="socializar">Socializar:&nbsp;</label>
                                                                <Radio value="socializar: 1">1</Radio>
                                                                <Radio value="socializar: 2">2</Radio>
                                                                <Radio value="socializar: 3">3</Radio>
                                                                <Radio value="socializar: 4">4</Radio>
                                                                <Radio value="socializar: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="voluntariado">Voluntariado:&nbsp;</label>
                                                                <Radio value="voluntariado: 1">1</Radio>
                                                                <Radio value="voluntariado: 2">2</Radio>
                                                                <Radio value="voluntariado: 3">3</Radio>
                                                                <Radio value="voluntariado: 4">4</Radio>
                                                                <Radio value="voluntariado: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="animales">Animales:&nbsp;</label>
                                                                <Radio value="animales: 1">1</Radio>
                                                                <Radio value="animales: 2">2</Radio>
                                                                <Radio value="animales: 3">3</Radio>
                                                                <Radio value="animales: 4">4</Radio>
                                                                <Radio value="animales: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="astrologia">Astrología:&nbsp;</label>
                                                                <Radio value="astrologia: 1">1</Radio>
                                                                <Radio value="astrologia: 2">2</Radio>
                                                                <Radio value="astrologia: 3">3</Radio>
                                                                <Radio value="astrologia: 4">4</Radio>
                                                                <Radio value="astrologia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="tarot">Tarot:&nbsp;</label>
                                                                <Radio value="tarot: 1">1</Radio>
                                                                <Radio value="tarot: 2">2</Radio>
                                                                <Radio value="tarot: 3">3</Radio>
                                                                <Radio value="tarot: 4">4</Radio>
                                                                <Radio value="tarot: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="meditacion">Meditación:&nbsp;</label>
                                                                <Radio value="meditacion: 1">1</Radio>
                                                                <Radio value="meditacion: 2">2</Radio>
                                                                <Radio value="meditacion: 3">3</Radio>
                                                                <Radio value="meditacion: 4">4</Radio>
                                                                <Radio value="meditacion: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="corazon">Prensa del corazón:&nbsp;</label>
                                                                <Radio value="corazon: 1">1</Radio>
                                                                <Radio value="corazon: 2">2</Radio>
                                                                <Radio value="corazon: 3">3</Radio>
                                                                <Radio value="corazon: 4">4</Radio>
                                                                <Radio value="corazon: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="viajar">Viajar:&nbsp;</label>
                                                                <Radio value="viajar: 1">1</Radio>
                                                                <Radio value="viajar: 2">2</Radio>
                                                                <Radio value="viajar: 3">3</Radio>
                                                                <Radio value="viajar: 4">4</Radio>
                                                                <Radio value="viajar: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="vino">Cata de vino:&nbsp;</label>
                                                                <Radio value="vino: 1">1</Radio>
                                                                <Radio value="vino: 2">2</Radio>
                                                                <Radio value="vino: 3">3</Radio>
                                                                <Radio value="vino: 4">4</Radio>
                                                                <Radio value="vino: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="cosplay">Cosplay:&nbsp;</label>
                                                                <Radio value="cosplay: 1">1</Radio>
                                                                <Radio value="cosplay: 2">2</Radio>
                                                                <Radio value="cosplay: 3">3</Radio>
                                                                <Radio value="cosplay: 4">4</Radio>
                                                                <Radio value="cosplay: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="disfraces">Disfraces:&nbsp;</label>
                                                                <Radio value="disfraces: 1">1</Radio>
                                                                <Radio value="disfraces: 2">2</Radio>
                                                                <Radio value="disfraces: 3">3</Radio>
                                                                <Radio value="disfraces: 4">4</Radio>
                                                                <Radio value="disfraces: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="turismo">Turismo local:&nbsp;</label>
                                                                <Radio value="turismo: 1">1</Radio>
                                                                <Radio value="turismo: 2">2</Radio>
                                                                <Radio value="turismo: 3">3</Radio>
                                                                <Radio value="turismo: 4">4</Radio>
                                                                <Radio value="turismo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="rol">Juegos de rol local:&nbsp;</label>
                                                                <Radio value="rol: 1">1</Radio>
                                                                <Radio value="rol: 2">2</Radio>
                                                                <Radio value="rol: 3">3</Radio>
                                                                <Radio value="rol: 4">4</Radio>
                                                                <Radio value="rol: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="vivo">Rol en vivo:&nbsp;</label>
                                                                <Radio value="vivo: 1">1</Radio>
                                                                <Radio value="vivo: 2">2</Radio>
                                                                <Radio value="vivo: 3">3</Radio>
                                                                <Radio value="vivo: 4">4</Radio>
                                                                <Radio value="vivo: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="historica">Recreación histórica:&nbsp;</label>
                                                                <Radio value="historica: 1">1</Radio>
                                                                <Radio value="historica: 2">2</Radio>
                                                                <Radio value="historica: 3">3</Radio>
                                                                <Radio value="historica: 4">4</Radio>
                                                                <Radio value="historica: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="fumadores">Club de fumadores:&nbsp;</label>
                                                                <Radio value="fumadores: 1">1</Radio>
                                                                <Radio value="fumadores: 2">2</Radio>
                                                                <Radio value="fumadores: 3">3</Radio>
                                                                <Radio value="fumadores: 4">4</Radio>
                                                                <Radio value="fumadores: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="antiguedades">Antigüedades:&nbsp;</label>
                                                                <Radio value="antiguedades: 1">1</Radio>
                                                                <Radio value="antiguedades: 2">2</Radio>
                                                                <Radio value="antiguedades: 3">3</Radio>
                                                                <Radio value="antiguedades: 4">4</Radio>
                                                                <Radio value="antiguedades: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="filatelia">Filatelia:&nbsp;</label>
                                                                <Radio value="filatelia: 1">1</Radio>
                                                                <Radio value="filatelia: 2">2</Radio>
                                                                <Radio value="filatelia: 3">3</Radio>
                                                                <Radio value="filatelia: 4">4</Radio>
                                                                <Radio value="filatelia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="numismatica">Numismática:&nbsp;</label>
                                                                <Radio value="numismatica: 1">1</Radio>
                                                                <Radio value="numismatica: 2">2</Radio>
                                                                <Radio value="numismatica: 3">3</Radio>
                                                                <Radio value="numismatica: 4">4</Radio>
                                                                <Radio value="numismatica: 5">5</Radio>
                                                            </Radio.Group>
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
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="astronomia">Astronomia:&nbsp;</label>
                                                                <Radio value="astronomia: 1">1</Radio>
                                                                <Radio value="astronomia: 2">2</Radio>
                                                                <Radio value="astronomia: 3">3</Radio>
                                                                <Radio value="astronomia: 4">4</Radio>
                                                                <Radio value="astronomia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="historia">Historia:&nbsp;</label>
                                                                <Radio value="historia: 1">1</Radio>
                                                                <Radio value="historia: 2">2</Radio>
                                                                <Radio value="historia: 3">3</Radio>
                                                                <Radio value="historia: 4">4</Radio>
                                                                <Radio value="historia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="matematicas">Matemáticas:&nbsp;</label>
                                                                <Radio value="matematicas: 1">1</Radio>
                                                                <Radio value="matematicas: 2">2</Radio>
                                                                <Radio value="matematicas: 3">3</Radio>
                                                                <Radio value="matematicas: 4">4</Radio>
                                                                <Radio value="matematicas: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="fisica">Física:&nbsp;</label>
                                                                <Radio value="fisica: 1">1</Radio>
                                                                <Radio value="fisica: 2">2</Radio>
                                                                <Radio value="fisica: 3">3</Radio>
                                                                <Radio value="fisica: 4">4</Radio>
                                                                <Radio value="fisica: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="quimica">Química:&nbsp;</label>
                                                                <Radio value="quimica: 1">1</Radio>
                                                                <Radio value="quimica: 2">2</Radio>
                                                                <Radio value="quimica: 3">3</Radio>
                                                                <Radio value="quimica: 4">4</Radio>
                                                                <Radio value="quimica: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="filologia">Filología:&nbsp;</label>
                                                                <Radio value="filologia: 1">1</Radio>
                                                                <Radio value="filologia: 2">2</Radio>
                                                                <Radio value="filologia: 3">3</Radio>
                                                                <Radio value="filologia: 4">4</Radio>
                                                                <Radio value="filologia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="biologia">Biología:&nbsp;</label>
                                                                <Radio value="biologia: 1">1</Radio>
                                                                <Radio value="biologia: 2">2</Radio>
                                                                <Radio value="biologia: 3">3</Radio>
                                                                <Radio value="biologia: 4">4</Radio>
                                                                <Radio value="biologia: 5">5</Radio>
                                                            </Radio.Group>
                                                            <Radio.Group onChange={(e) => setActividades((actividades) => [...actividades, e.target.value])}>
                                                                <label forhtml="zoologia">Zoología:&nbsp;</label>
                                                                <Radio value="zoologia: 1">1</Radio>
                                                                <Radio value="zoologia: 2">2</Radio>
                                                                <Radio value="zoologia: 3">3</Radio>
                                                                <Radio value="zoologia: 4">4</Radio>
                                                                <Radio value="zoologia: 5">5</Radio>
                                                            </Radio.Group>
                                                        </div>) : ""}
                                                </Checkbox>

                                            </Checkbox.Group>
                                        </div>) : ""}
                                    </Checkbox>
                                </div>
                            </Checkbox.Group>
                        </Checkbox>
                    </div>) : ""}



                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="carnet" value="carnet" id="carnet" onChange={() => {
                            if (viewCarnet === true) {
                                setViewCarnet(false)
                            } else if (viewCarnet === false) {
                                setViewCarnet(true)
                            }
                        }}>
                            <label>¿Tienes carnet de conducir?</label>
                            <br />
                            <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setCarnet(true)}></input><label htmlFor="si">&nbsp;Sí</label>
                            <br />
                            <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setCarnet(false)}></input><label htmlFor="no">&nbsp;No</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="zona" value="zona" id="zona" onChange={() => {
                            if (viewZona === true) {
                                setViewZona(false)
                            } else if (viewZona === false) {
                                setViewZona(true)
                            }
                        }}>
                            <label>Estarías interesado en un coliving situado...</label>
                            <br />
                            <input type="radio" name="zona" value="costa" id="costa" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="costa">&nbsp;Cerca de la costa</label>
                            <br />
                            <input type="radio" name="zona" value="interior" id="interior" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="interior">&nbsp;En el interior</label>
                            <br />
                            <input type="radio" name="zona" value="montaña" id="montaña" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="montaña">&nbsp;Cerca de montañas</label>
                            <br />
                            <input type="radio" name="zona" value="ciudad" id="ciudad" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="ciudad">&nbsp;En una ciudad</label>
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="tipoVivienda" value="tipoVivienda" id="tipoVivienda" onChange={() => {
                            if (viewtipoVivienda === true) {
                                setViewtipoVivienda(false)
                            } else if (viewtipoVivienda === false) {
                                setViewtipoVivienda(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="place" value="place" id="place" onChange={() => {
                            if (viewPlace === true) {
                                setViewPlace(false)
                            } else if (viewPlace === false) {
                                setViewPlace(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    <div>
                        {viewOficio ? (<div>
                            <Checkbox name="instalaciones" value="instalaciones" id="instalaciones" onChange={() => {
                                if (viewInstalaciones === true) {
                                    setViewInstalaciones(false)
                                } else if (viewInstalaciones === false) {
                                    setViewInstalaciones(true)
                                }
                            }}>
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
                            </Checkbox>
                        </div>) : ""}

                        <br />
                        <br />

                        {viewOficio ? (<div>
                            <Checkbox name="lavabo" value="lavabo" id="lavabo" onChange={() => {
                                if (viewLavabo === true) {
                                    setViewLavabo(false)
                                } else if (viewLavabo === false) {
                                    setViewLavabo(true)
                                }
                            }}>
                                <label>Baños:</label>
                                <br />
                                <input type="radio" name="lavabo" value="privado" id="privado" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="privado">&nbsp;Privado</label>
                                <br />
                                <input type="radio" name="lavabo" value="compartido" id="compartido" onChange={(e) => setLavabo(e.target.value)}></input><label htmlFor="compartido">&nbsp;Compartido</label>
                                <br />
                                <br />
                            </Checkbox>
                        </div>) : ""}

                        {viewOficio ? (<div>
                            <Checkbox name="exteriores" value="exteriores" id="exteriores" onChange={() => {
                                if (viewExteriores === true) {
                                    setViewExteriores(false)
                                } else if (viewExteriores === false) {
                                    setViewExteriores(true)
                                }
                            }}>
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
                            </Checkbox>
                        </div>) : ""}
                    </div>
                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="rangoEdad" value="rangoEdad" id="rangoEdad" onChange={() => {
                            if (viewrangoEdad === true) {
                                setViewrangoEdad(false)
                            } else if (viewrangoEdad === false) {
                                setViewrangoEdad(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="dinero" value="dinero" id="dinero" onChange={() => {
                            if (viewDinero === true) {
                                setViewDinero(false)
                            } else if (viewDinero === false) {
                                setViewDinero(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="metros" value="metros" id="metros" onChange={() => {
                            if (viewMetros === true) {
                                setViewMetros(false)
                            } else if (viewMetros === false) {
                                setViewMetros(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}
                        
                    <br />

                    {viewOficio ? (<div>
                        <Checkbox name="gente" value="gente" id="gente" onChange={() => {
                            if (viewGente === true) {
                                setViewGente(false)
                            } else if (viewGente === false) {
                                setViewGente(true)
                            }
                        }}>
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
                        </Checkbox>
                    </div>) : ""}

                    <br />
                    <br />
                    <br />
                    <button type="submit" className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                </div>
            </form >
        </div >
    )
}

export default TestAfinidadUser