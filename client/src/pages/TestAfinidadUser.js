import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "antd";

function TestAfinidadUser() {


    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [oficio, setOficio] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");
    const [religion, setReligion] = useState("");
    const [alimentacion, setAlimentacion] = useState("");
    const [mascotas, setMascotas] = useState("");
    const [fumador, setFumador] = useState("");
    const [aficiones, setAficiones] = useState(""); 
    const [carnet, setCarnet] = useState("");
    const [convive, setConvive] = useState("");
    const [nombreConvive, setNombreConvive] = useState("");

    const [politica, setPolitica] = useState("");
    const [procedencia, setProcedencia] = useState("");
    
    
    
    

    const [caracter, setCaracter] = useState("");
    

    const cambiosCheckboxIdiomas = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }

    const cambiosCheckboxOficio = (valoresMarcados) => {
        setOficio(valoresMarcados)
    }

    const cambiosCheckboxAficiones = (valoresMarcados) => {
        setAficiones(valoresMarcados)
    }

    function enviarDatos(e) {
        e.preventDefault()
        let preferencias = {
            religion: religion,
            politica: politica,
            procedencia: procedencia,
            idiomas: idiomas,
            mascotas: mascotas,
            fumador: fumador,
            orientacionSexual: orientacionSexual,
            antecedentes: antecedentes,
            drogas: drogas,
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
                    <label>Indica tu género:</label>
                    <br />
                    <select name="genero" id="genero">
                        <option></option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Indica tu edad:</label>
                    <br />
                    <input type="number" min="18" max="120"></input>
                </div>
                <br />
                <div>
                    <label>Indicanos sectores en los que hayas trabajado durante tu vida laboral</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxOficio(e)}>
                        <Checkbox name="oficio" value="construccion" id="construccion">
                            <label forhtml="construccion">&nbsp;Construcción</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="sanidad" id="sanidad">
                            <label forhtml="sanidad">&nbsp;Sanidad</label>
                        </Checkbox>
                    </Checkbox.Group>
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
                    <label>¿Te importaría convivir con alguien con ideas políticas diferentes?</label>
                    <br />
                    <input type="radio" name="politica" value="contrario" id="Contrario" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="politica" value="indiferente" id="Indiferente" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="politica" value="acepto" id="Acepto" onChange={(e) => setPolitica(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien con una procedencia diferente?</label>
                    <br />
                    <input type="radio" name="procedencia" value="contrario" id="Contrario" onChange={(e) => setProcedencia(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="procedencia" value="indiferente" id="Indiferente" onChange={(e) => setProcedencia(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="procedencia" value="acepto" id="Acepto" onChange={(e) => setProcedencia(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>Idiomas</label>
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
                            <Checkbox name="idiomas" value="ingles" id="ingles" >
                                <label forhtml="ingles">&nbsp;Inglés</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="portugues" id="portugues" >
                                <label forhtml="portugues">&nbsp;Portugués</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="aleman" id="aleman" >
                                <label forhtml="aleman">&nbsp;Alemán</label>
                            </Checkbox>&nbsp;
                            <Checkbox name="idiomas" value="frances" id="frances" >
                                <label forhtml="frances">&nbsp;Francés</label>
                            </Checkbox>
                        </Checkbox.Group>
                    </div>
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
                    <label>¿Te importaría convivir con alguien con antecedentes penales?</label>
                    <br />
                    <input type="radio" name="antecedentes" value="contrario" id="Contrario" onChange={(e) => setAntecedentes(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="antecedentes" value="indiferente" id="Indiferente" onChange={(e) => setAntecedentes(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="antecedentes" value="acepto" id="Acepto" onChange={(e) => setAntecedentes(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>¿Te importaría convivir con alguien que consuma drogas?</label>
                    <br />
                    <input type="radio" name="drogas" value="contrario" id="Contrario" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="Contrario">&nbsp;Contrario</label>
                    <br />
                    <input type="radio" name="drogas" value="indiferente" id="Indiferente" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="Indiferente">&nbsp;Indiferente</label>
                    <br />
                    <input type="radio" name="drogas" value="acepto" id="Acepto" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="Acepto">&nbsp;Acepto</label>
                </div>
                <br />
                <div>
                    <label>Estarías interesado en un coliving situado...</label>
                    <br />
                    <input type="radio" name="zona" value="costa" id="costa" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="costa">&nbsp;Cerca de la costa</label>
                    <br />
                    <input type="radio" name="zona" value="interior" id="interior" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="interior">&nbsp;En el interior</label>
                    <br />
                    <input type="radio" name="zona" value="montaña" id="montaña" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="montaña">&nbsp;Cerca de montañas</label>
                    <br />
                    <input type="radio" name="zona" value="ciudad" id="ciudad" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="ciudad">&nbsp;En una ciudad</label>
                </div>
                <br />
                <div>
                    <label>¿Tienes carnet de conducir?</label>
                    <br />
                    <input type="radio" name="carnet" value="si" id="si" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="si">&nbsp;Sí</label>
                    <br />
                    <input type="radio" name="carnet" value="no" id="no" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="no">&nbsp;No</label>
                </div>
                <br />
                <div>
                    <label>Me considero...</label>
                    <br />
                    <input type="radio" name="caracter" value="hablador" id="hablador" onChange={(e) => setCaracter(e.target.value)}></input><label htmlFor="hablador">&nbsp;Hablador</label>
                    <br />
                    <input type="radio" name="caracter" value="reservado" id="reservado" onChange={(e) => setCaracter(e.target.value)}></input><label htmlFor="reservado">&nbsp;Reservado</label>
                </div>
                <br />
                <div>
                    <label>Indicanos aficiones que tengas</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxAficiones(e)}>
                        <Checkbox name="aficiones" value="pasear" id="pasear">
                            <label forhtml="pasear">&nbsp;Pasear</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="aficiones" value="deportes" id="deportes">
                            <label forhtml="deportes">&nbsp;Deportes</label>
                        </Checkbox>
                    </Checkbox.Group>
                </div>
                <br />
                <button type="submit" className="ButtonHome btn btn-primary btn-lg" variant="primary">Enviar</button>
                <br />
                <br />
            </form >
        </div >
    )
}

export default TestAfinidadUser