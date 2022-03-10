import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "antd";



function FormBusqueda() {

    const [idiomas, setIdiomas] = useState("");
    const [orientacionSexual, setOrientacionSexual] = useState("");


    const cambiosCheckboxRegion = (valoresMarcados) => {
        setIdiomas(valoresMarcados)
    }



    function buscarDatos() {

        let variables = {
            idiomas: idiomas,
            orientacionSexual: orientacionSexual




        }

        axios.post("/formbusqueda", variables).then((res) => {
            console.log(res.data)
        })

    }

    return (

        <div>
            <form onSubmit={(e) => enviarDatos(e)}>
                <br />
                <p>Para poder encontrar un coliving adecuado para ti, responde las siguientes preguntas</p>
                <div>
                    <label>Indicanos en qué región estas buscando coliving</label>
                    <br />
                    <Checkbox.Group onChange={(e) => cambiosCheckboxRegion(e)}>
                        <Checkbox name="oficio" value="construccion" id="construccion">
                            <label forhtml="construccion">&nbsp;Construcción</label>
                        </Checkbox>
                        &nbsp;&nbsp;
                        <Checkbox name="oficio" value="sanidad" id="sanidad">
                            <label forhtml="sanidad">&nbsp;Sanidad</label>
                        </Checkbox>
                    </Checkbox.Group>


                </div>

















            </form>



        </div>









    )











}

export default FormBusqueda;