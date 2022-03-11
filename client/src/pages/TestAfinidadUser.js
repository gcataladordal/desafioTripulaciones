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
    const [estiloVida, setEstiloVida] = useState("");
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

    const [viewCaracter, setViewCaracter] = useState(false);
    const [viewMusica, setViewMusica] = useState(false);
    const [viewPeliculas, setViewPeliculas] = useState(false);
    const [viewEstiloVida, setViewEstiloVida] = useState(false);
    const [viewDeportes, setViewDeportes] = useState(false);

    const cambiosCheckboxRegion = (valoresMarcados) => {
        setRegion(valoresMarcados)
    }

    const cambiosCheckboxIdiomas = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }

    const cambiosCheckboxOficio = (valoresMarcados) => {
        setOficio(valoresMarcados)
    }

    const cambiosCheckboxAficiones = (valoresMarcados) => {
        setAficiones(valoresMarcados)
    }

    const cambiosCheckboxEstiloVida = (valoresMarcados) => {
        setEstiloVida(valoresMarcados)
    }

    const cambiosCheckboxMusica = (valoresMarcados) => {
        setMusica(valoresMarcados)
    }

    const cambiosCheckboxDeportes = (valoresMarcados) => {
        setDeportes(valoresMarcados)
    }

    const cambiosCheckboxPelículas = (valoresMarcados) => {
        setPeliculas(valoresMarcados)
    }
    const cambiosCheckboxRangoEdad = (valoresMarcados) => {
        setRangoEdad(valoresMarcados)
    }

    function enviarDatos(e) {
        console.log(caracter)
        e.preventDefault()
        let preferencias = {
            religion: religion,
            idiomas: idiomas,
            mascotas: mascotas,
            fumador: fumador,
            orientacionSexual: orientacionSexual,
            caracter: caracter,
            id_usuario: "1"
        }

        axios.post("/testafinidaduser", preferencias).then((res) => {
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
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Otro">Otro</option>
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
                        <Checkbox name="oficio" value="sanidad" id="sanidad">
                            <label forhtml="sanidad">&nbsp;Sanidad</label>
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
                        <Checkbox name="oficio" value="Construccion" id="Construccion">
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
                    <label>¿Qué Idiomas hablas</label>
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
                            <Checkbox name="idiomas" value="gallego" id="gallego" >
                                <label forhtml="gallego">&nbsp;Gallego</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="valenciano" id="valenciano" >
                                <label forhtml="valenciano">&nbsp;Valenciano</label>
                            </Checkbox>
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
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien con una orientacion sexual diferente?</label>
                    <br />
                    <input type="radio" name="orientacion" value="contrario" id="Contrario" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="orientacion" value="indiferente" id="Indiferente" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="orientacion" value="acepto" id="Acepto" onChange={(e) => setOrientacionSexual(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien con una religión diferente?</label>
                    <br />
                    <input type="radio" name="religion" value="contrario" id="Contrario" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="religion" value="indiferente" id="Indiferente" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="religion" value="acepto" id="Acepto" onChange={(e) => setReligion(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien con una ideología política diferente?</label>
                    <br />
                    <input type="radio" name="politica" value="contrario" id="Contrario" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="politica" value="indiferente" id="Indiferente" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="politica" value="acepto" id="Acepto" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien con mascotas?</label>
                    <br />
                    <input type="radio" name="mascotas" value="contrario" id="Contrario" onChange={(e) => setMascotas(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="mascotas" value="indiferente" id="Indiferente" onChange={(e) => setMascotas(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="mascotas" value="acepto" id="Acepto" onChange={(e) => setMascotas(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con un fumador?</label>
                    <br />
                    <input type="radio" name="fumador" value="contrario" id="Contrario" onChange={(e) => setFumador(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="fumador" value="indiferente" id="Indiferente" onChange={(e) => setFumador(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="fumador" value="acepto" id="Acepto" onChange={(e) => setFumador(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
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
                                {viewCaracter ? (<div><Radio.Group onChange={(e) => setCaracter((caracter) => [...caracter, e.target.value])}>
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
                                </div>) : ""}
                            </Checkbox>
                        </div>

                        <br />
                        <div>
                            <Checkbox name="aficiones" value="estilovida" id="estilovida" onChange={() => {
                                if (viewEstiloVida === true) {
                                    setViewEstiloVida(false)
                                } else if (viewEstiloVida === false) {
                                    setViewEstiloVida(true)
                                }
                            }} >
                                <label>Cuál es tu estilo de vida?</label>
                                <br />
                                {viewEstiloVida ? (
                                    <div>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="aventurero">Aventurero:&nbsp;</label>
                                            <Radio value="aventurero: 1">1</Radio>
                                            <Radio value="aventurero: 2">2</Radio>
                                            <Radio value="aventurero: 3">3</Radio>
                                            <Radio value="aventurero: 4">4</Radio>
                                            <Radio value="aventurero: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="arte">Aficionado al arte:&nbsp;</label>
                                            <Radio value="arte: 1">1</Radio>
                                            <Radio value="arte: 2">2</Radio>
                                            <Radio value="arte: 3">3</Radio>
                                            <Radio value="arte: 4">4</Radio>
                                            <Radio value="arte: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="deportista">Deportista:&nbsp;</label>
                                            <Radio value="deportista: 1">1</Radio>
                                            <Radio value="deportista: 2">2</Radio>
                                            <Radio value="deportista: 3">3</Radio>
                                            <Radio value="deportista: 4">4</Radio>
                                            <Radio value="deportista: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="libros">Amante de los libros:&nbsp;</label>
                                            <Radio value="libros: 1">1</Radio>
                                            <Radio value="libros: 2">2</Radio>
                                            <Radio value="libros: 3">3</Radio>
                                            <Radio value="libros: 4">4</Radio>
                                            <Radio value="libros: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="cocina">Cocina:&nbsp;</label>
                                            <Radio value="cocina: 1">1</Radio>
                                            <Radio value="cocina: 2">2</Radio>
                                            <Radio value="cocina: 3">3</Radio>
                                            <Radio value="cocina: 4">4</Radio>
                                            <Radio value="cocina: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="cinefilo">Cinéfilo:&nbsp;</label>
                                            <Radio value="cinefilo: 1">1</Radio>
                                            <Radio value="cinefilo: 2">2</Radio>
                                            <Radio value="cinefilo: 3">3</Radio>
                                            <Radio value="cinefilo: 4">4</Radio>
                                            <Radio value="cinefilo: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="cultura">Aficionado a la cultura:&nbsp;</label>
                                            <Radio value="cultura: 1">1</Radio>
                                            <Radio value="cultura: 2">2</Radio>
                                            <Radio value="cultura: 3">3</Radio>
                                            <Radio value="cultura: 4">4</Radio>
                                            <Radio value="cultura: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="bailarin">Aficionado al baile:&nbsp;</label>
                                            <Radio value="bailarin: 1">1</Radio>
                                            <Radio value="bailarin: 2">2</Radio>
                                            <Radio value="bailarin: 3">3</Radio>
                                            <Radio value="bailarin: 4">4</Radio>
                                            <Radio value="bailarin: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="madrugador">Madrugador:&nbsp;</label>
                                            <Radio value="madrugador: 1">1</Radio>
                                            <Radio value="madrugador: 2">2</Radio>
                                            <Radio value="madrugador: 3">3</Radio>
                                            <Radio value="madrugador: 4">4</Radio>
                                            <Radio value="madrugador: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="emprendedor">Emprendedor:&nbsp;</label>
                                            <Radio value="emprendedor: 1">1</Radio>
                                            <Radio value="emprendedor: 2">2</Radio>
                                            <Radio value="emprendedor: 3">3</Radio>
                                            <Radio value="emprendedor: 4">4</Radio>
                                            <Radio value="emprendedor: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="familiar">Familiar:&nbsp;</label>
                                            <Radio value="familiar: 1">1</Radio>
                                            <Radio value="familiar: 2">2</Radio>
                                            <Radio value="familiar: 3">3</Radio>
                                            <Radio value="familiar: 4">4</Radio>
                                            <Radio value="familiar: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="moda">Moda:&nbsp;</label>
                                            <Radio value="moda: 1">1</Radio>
                                            <Radio value="moda: 2">2</Radio>
                                            <Radio value="moda: 3">3</Radio>
                                            <Radio value="moda: 4">4</Radio>
                                            <Radio value="moda: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="foodie">Foodie:&nbsp;</label>
                                            <Radio value="foodie: 1">1</Radio>
                                            <Radio value="foodie: 2">2</Radio>
                                            <Radio value="foodie: 3">3</Radio>
                                            <Radio value="foodie: 4">4</Radio>
                                            <Radio value="foodie: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="gamer">Gamer:&nbsp;</label>
                                            <Radio value="gamer: 1">1</Radio>
                                            <Radio value="gamer: 2">2</Radio>
                                            <Radio value="gamer: 3">3</Radio>
                                            <Radio value="gamer: 4">4</Radio>
                                            <Radio value="gamer: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="saludable">Saludable:&nbsp;</label>
                                            <Radio value="saludable: 1">1</Radio>
                                            <Radio value="saludable: 2">2</Radio>
                                            <Radio value="saludable: 3">3</Radio>
                                            <Radio value="saludable: 4">4</Radio>
                                            <Radio value="saludable: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="hogar">Hogareño:&nbsp;</label>
                                            <Radio value="hogar: 1">1</Radio>
                                            <Radio value="hogar: 2">2</Radio>
                                            <Radio value="hogar: 3">3</Radio>
                                            <Radio value="hogar: 4">4</Radio>
                                            <Radio value="hogar: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="musica">Amante de la música:&nbsp;</label>
                                            <Radio value="musica: 1">1</Radio>
                                            <Radio value="musica: 2">2</Radio>
                                            <Radio value="musica: 3">3</Radio>
                                            <Radio value="musica: 4">4</Radio>
                                            <Radio value="musica: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="nocturno">Nocturno:&nbsp;</label>
                                            <Radio value="nocturno: 1">1</Radio>
                                            <Radio value="nocturno: 2">2</Radio>
                                            <Radio value="nocturno: 3">3</Radio>
                                            <Radio value="nocturno: 4">4</Radio>
                                            <Radio value="nocturno: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="fiestero">Fiestero:&nbsp;</label>
                                            <Radio value="fiestero: 1">1</Radio>
                                            <Radio value="fiestero: 2">2</Radio>
                                            <Radio value="fiestero: 3">3</Radio>
                                            <Radio value="fiestero: 4">4</Radio>
                                            <Radio value="fiestero: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="animales">Amante de los animales:&nbsp;</label>
                                            <Radio value="animales: 1">1</Radio>
                                            <Radio value="animales: 2">2</Radio>
                                            <Radio value="animales: 3">3</Radio>
                                            <Radio value="animales: 4">4</Radio>
                                            <Radio value="animales: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="fotografo">Fotógrafo:&nbsp;</label>
                                            <Radio value="fotografo: 1">1</Radio>
                                            <Radio value="fotografo: 2">2</Radio>
                                            <Radio value="fotografo: 3">3</Radio>
                                            <Radio value="fotografo: 4">4</Radio>
                                            <Radio value="fotografo: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="comprador">Comprador:&nbsp;</label>
                                            <Radio value="comprador: 1">1</Radio>
                                            <Radio value="comprador: 2">2</Radio>
                                            <Radio value="comprador: 3">3</Radio>
                                            <Radio value="comprador: 4">4</Radio>
                                            <Radio value="comprador: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="cantante">Cantante:&nbsp;</label>
                                            <Radio value="cantante: 1">1</Radio>
                                            <Radio value="cantante: 2">2</Radio>
                                            <Radio value="cantante: 3">3</Radio>
                                            <Radio value="cantante: 4">4</Radio>
                                            <Radio value="cantante: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="tecnologia">Amante de la tecnología:&nbsp;</label>
                                            <Radio value="tecnologia: 1">1</Radio>
                                            <Radio value="tecnologia: 2">2</Radio>
                                            <Radio value="tecnologia: 3">3</Radio>
                                            <Radio value="tecnologia: 4">4</Radio>
                                            <Radio value="tecnologia: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="teatro">Teatro:&nbsp;</label>
                                            <Radio value="teatro: 1">1</Radio>
                                            <Radio value="teatro: 2">2</Radio>
                                            <Radio value="teatro: 3">3</Radio>
                                            <Radio value="teatro: 4">4</Radio>
                                            <Radio value="teatro: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="viajero">Viajero:&nbsp;</label>
                                            <Radio value="viajero: 1">1</Radio>
                                            <Radio value="viajero: 2">2</Radio>
                                            <Radio value="viajero: 3">3</Radio>
                                            <Radio value="viajero: 4">4</Radio>
                                            <Radio value="viajero: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="vegano">Vegano:&nbsp;</label>
                                            <Radio value="vegano: 1">1</Radio>
                                            <Radio value="vegano: 2">2</Radio>
                                            <Radio value="vegano: 3">3</Radio>
                                            <Radio value="vegano: 4">4</Radio>
                                            <Radio value="vegano: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="vegetariano">Vegetariano:&nbsp;</label>
                                            <Radio value="vegetariano: 1">1</Radio>
                                            <Radio value="vegetariano: 2">2</Radio>
                                            <Radio value="vegetariano: 3">3</Radio>
                                            <Radio value="vegetariano: 4">4</Radio>
                                            <Radio value="vegetariano: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="excursionista">Excursionista:&nbsp;</label>
                                            <Radio value="excursionista: 1">1</Radio>
                                            <Radio value="excursionista: 2">2</Radio>
                                            <Radio value="excursionista: 3">3</Radio>
                                            <Radio value="excursionista: 4">4</Radio>
                                            <Radio value="excursionista: 5">5</Radio>
                                        </Radio.Group>
                                        <Radio.Group onChange={(e) => setEstiloVida((estiloVida) => [...estiloVida, e.target.value])}>
                                            <label forhtml="trabajo">Adicto al trabajo:&nbsp;</label>
                                            <Radio value="trabajo: 1">1</Radio>
                                            <Radio value="trabajo: 2">2</Radio>
                                            <Radio value="trabajo: 3">3</Radio>
                                            <Radio value="trabajo: 4">4</Radio>
                                            <Radio value="trabajo: 5">5</Radio>
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
                                        <label forhtml="caballo">Montar a caballo:&nbsp;</label>
                                        <Radio value="caballo: 1">1</Radio>
                                        <Radio value="caballo: 2">2</Radio>
                                        <Radio value="caballo: 3">3</Radio>
                                        <Radio value="caballo: 4">4</Radio>
                                        <Radio value="caballo: 5">5</Radio>
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
                                    <Checkbox name="peliculas" value="accion" id="accion">
                                        <label forhtml="accion">&nbsp;Acción</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="aventura" id="aventura">
                                        <label forhtml="aventura">&nbsp;Aventura</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="animacion" id="animacion">
                                        <label forhtml="animacion">&nbsp;Animación</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="comedia" id="comedia">
                                        <label forhtml="comedia">&nbsp;Comedia</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="policiaco" id="policiaco">
                                        <label forhtml="policiaco">&nbsp;Cine policiáco</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="documental" id="documental">
                                        <label forhtml="documental">&nbsp;Documental</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="drama" id="drama">
                                        <label forhtml="drama">&nbsp;Drama</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="fantasia" id="fantasia">
                                        <label forhtml="fantasia">&nbsp;Fantasía</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="historica" id="historica">
                                        <label forhtml="historica">&nbsp;Histórica</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="terror" id="terror">
                                        <label forhtml="terror">&nbsp;Terror</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="misterios" id="misterios">
                                        <label forhtml="misterios">&nbsp;Entusiasta</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="politica" id="politica">
                                        <label forhtml="politica">&nbsp;Política</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="romantica" id="romantica">
                                        <label forhtml="romantica">&nbsp;Romántica</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="saga" id="saga">
                                        <label forhtml="saga">&nbsp;Saga</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="satira" id="satira">
                                        <label forhtml="satira">&nbsp;Sátira</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="cienciaficcion" id="cienciaficcion">
                                        <label forhtml="cienciaficcion">&nbsp;Ciencia ficción</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="thriller" id="thriller">
                                        <label forhtml="thriller">&nbsp;Thriller</label>
                                    </Checkbox>
                                    &nbsp;&nbsp;
                                    <Checkbox name="peliculas" value="western" id="western">
                                        <label forhtml="western">&nbsp;Western</label>
                                    </Checkbox>
                                </div>) : ""}
                            </Checkbox>
                        </div>
                        <br />
                    </Checkbox.Group>
                </div>

                <br />
                <div>
                    <label>¿Tienes carnet de conducir?</label>
                    <br />
                    <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setCarnet(e.target.value)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setCarnet(e.target.value)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>Estarías interesado en un coliving situado...</label>
                    <br />
                    <input type="radio" name="zona" value="costa" id="costa" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="costa">&nbsp;Cerca de la costa</label>
                    <br />
                    <input type="radio" name="zona" value="interior" id="interior" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="interior">&nbsp;En el interior</label>
                    <br />
                    <input type="radio" name="zona" value="montaña" id="montaña" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="montaña">&nbsp;Cerca de montañas</label>
                    <br />
                    <input type="radio" name="zona" value="ciudad" id="ciudad" onChange={(e) => setUbicacion(e.target.value)}></input><label htmlFor="ciudad">&nbsp;En una ciudad</label>
                </div>
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
                        <Checkbox name="place" value="castilla-leon" id="castilla-leon">
                            <label forhtml="castilla-leon">&nbsp;Castilla y León</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="place" value="castilla-lamancha" id="castilla-lamancha">
                            <label forhtml="castilla-lamancha">&nbsp;Castilla-La Mancha</label>
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
                            <label forhtml="galicia">&nbsp;Galicia</label>
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

                {/* INSTALACIONES */}
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
                {/* DINERO */}

                {/* METROS2 */}

                {/* BAÑO */}

                {/* Exteriores */}

                {/* GENTE */}
                <br />
                <br />
                <br />
                <button type="submit" className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>

            </form >
        </div >
    )
}

export default TestAfinidadUser