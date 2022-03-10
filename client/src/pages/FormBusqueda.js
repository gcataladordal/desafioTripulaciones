import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "antd";



function FormBusqueda() {

    const [region, setRegion] = useState("");
    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");


    const cambiosCheckboxRegion = (valoresMarcados) => {
        setRegion(valoresMarcados)
    }

    const cambiosCheckboxIdiomas = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }


    function buscarDatos(e) {
        e.preventDefault()
        let variables = {
            region: region,
            idiomas: idiomas,
            orientacionSexual: orientacionSexual




        }

        axios.post("/formbusqueda", variables).then((res) => {
            console.log(res.data)
        })

    }

    return (

        <div>
            <form onSubmit={(e) => buscarDatos(e)}>
                <br />
                <p>Para poder encontrar un coliving adecuado para ti, responde las siguientes preguntas</p>
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
                <div>
                    <label>¿Qué Idiomas hablas</label>
                    <br />
                    <div id="respuestasIdiomas">
                        <Checkbox.Group onChange={(e) => cambiosCheckboxIdiomas(e)}>
                            <Checkbox name="idiomas" value="castellano" id="castellano">
                                <label forhtml="castellano">&nbsp;Castellano</label>
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
                </div>
                <br />
                <div>
                    <label>¿Quién se muda?</label>
                    <br />
                    <input type="radio" name="solo_pareja" value="soloyo" id="soloyo" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="soloyo">&nbsp;Sólo yo</label>
                    <br />
                    <input type="radio" name="solo_pareja" value="otrayyo" id="otrayyo" onChange={(e) => setDrogas(e.target.value)}></input><label htmlFor="otrayyo">&nbsp;Otra persona y yo</label>
                </div>















            </form>



        </div>









    )











}

export default FormBusqueda;